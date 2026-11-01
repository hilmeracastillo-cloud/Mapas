import React, { useState, useEffect, useMemo, useCallback } from 'react';
import {
  AppMode,
  LensType,
  Language,
  CountryDossierData,
  LandformFeature,
  LandformGlossaryItem,
  QuestionProgress,
  BloomQuestQuestion,
  ExplorerBadge,
} from './types/geography';
import { STARTER_COUNTRIES } from './data/countriesData';
import { QUEST_CHALLENGES } from './data/questChallenges';
import { INITIAL_BADGES } from './data/badgesData';
import { Navbar } from './components/Navbar';
import { LeafletMap } from './components/LeafletMap';
import { CountryDossier } from './components/CountryDossier';
import { LandformGlossaryModal } from './components/LandformGlossaryModal';
import { PhysicalMapReadingModal } from './components/PhysicalMapReadingModal';
import { QuestEngine } from './components/QuestEngine';
import { MasteryReportModal } from './components/MasteryReportModal';
import { DatasetUploadModal } from './components/DatasetUploadModal';
import { LearnModeGuide } from './components/LearnModeGuide';
import { WelcomeTourModal } from './components/WelcomeTourModal';
import { PlayModeInstructionsModal } from './components/PlayModeInstructionsModal';
import { WelcomeScreen } from './components/WelcomeScreen';
import { ModeSelectionScreen } from './components/ModeSelectionScreen';
import { ModulesMenuScreen } from './components/ModulesMenuScreen';
import { ForTeachersModal } from './components/ForTeachersModal';
import { ProgressionStepper } from './components/ProgressionStepper';
import { Level1MapTypesModal } from './components/Level1MapTypesModal';
import { Level2LandformsModal } from './components/Level2LandformsModal';
import { Level3ContinentsOceansModal } from './components/Level3ContinentsOceansModal';
import { Level4ContinentCountriesView } from './components/Level4ContinentCountriesView';
import { LevelEvaluationEngine } from './components/LevelEvaluationEngine';
import { PlayTriviaPanel } from './components/PlayTriviaPanel';
import { PlaySubMode, TriviaFlavor, TriviaQuestion, TriviaStats } from './types/trivia';
import { generateTriviaQuestion } from './utils/triviaGenerator';
import {
  PedagogicalLevel,
  PedagogicalProgressState,
  ContinentId,
  BloomEvaluationQuestion,
} from './types/progression';
import {
  LEVEL_1_QUESTIONS,
  LEVEL_2_QUESTIONS,
  LEVEL_3_QUESTIONS,
  LEVEL_4_CONTINENT_QUESTIONS,
} from './data/levelQuestionsData';
import { CONTINENTS_DATA } from './data/continentsOceansData';
import { X, Compass } from 'lucide-react';

const STORAGE_KEY_PROGRESS = 'geomaster_question_progress_v1';
const STORAGE_KEY_REVIEWS = 'geomaster_review_list_v1';
const STORAGE_KEY_LANG = 'geomaster_lang_v1';
const STORAGE_KEY_ONBOARDING = 'geomaster_seen_welcome_v1';
const STORAGE_KEY_INTRO = 'geomaster_seen_intro_v2';
const STORAGE_KEY_PROGRESSION = 'geomaster_pedagogical_progress_v2';
const STORAGE_KEY_TRIVIA_STATS = 'geomaster_trivia_stats_v2';


export type AppScreen = 'welcome' | 'mode_select' | 'menu' | 'country_map';

export default function App() {
  // App Mode & Lens State
  const [currentMode, setCurrentMode] = useState<AppMode>('explore');
  const [currentLens, setCurrentLens] = useState<LensType>('political');
  const [currentLang, setCurrentLang] = useState<Language>(() => {
    return (localStorage.getItem(STORAGE_KEY_LANG) as Language) || 'en';
  });

  // Application Screen Flow:
  // 1. 'welcome': Bilingual Welcome, Teacher button, 2 Language buttons (EN / ES)
  // 2. 'mode_select': Previous Menu to choose Jugar/Play or Learn/Aprender
  // 3. 'menu': Main Content Menu with the 4 modules
  // 4. 'country_map': Full-screen sovereign country map (when playing or entering Module 4)
  const [currentScreen, setCurrentScreen] = useState<AppScreen>('welcome');
  const [isPlayMode, setIsPlayMode] = useState<boolean>(false);

  // Play SubMode: 'explore' (free map & dossiers) vs 'trivia' (quiz with live score)
  const [playSubMode, setPlaySubMode] = useState<PlaySubMode>('explore');
  const [triviaFlavor, setTriviaFlavor] = useState<TriviaFlavor | null>(null);
  const [triviaAskedIds, setTriviaAskedIds] = useState<Record<TriviaFlavor, string[]>>({
    continents: [],
    countries: [],
    capitals: [],
    flags: [],
  });
  const [triviaStats, setTriviaStats] = useState<TriviaStats>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_TRIVIA_STATS);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && typeof parsed === 'object') {
          return {
            totalScore: typeof parsed.totalScore === 'number' && !isNaN(parsed.totalScore) ? parsed.totalScore : 0,
            totalAnswered: typeof parsed.totalAnswered === 'number' && !isNaN(parsed.totalAnswered) ? parsed.totalAnswered : 0,
            perfectFirstAttempts: typeof parsed.perfectFirstAttempts === 'number' && !isNaN(parsed.perfectFirstAttempts) ? parsed.perfectFirstAttempts : 0,
            currentStreak: typeof parsed.currentStreak === 'number' && !isNaN(parsed.currentStreak) ? parsed.currentStreak : 0,
            bestStreak: typeof parsed.bestStreak === 'number' && !isNaN(parsed.bestStreak) ? parsed.bestStreak : 0,
            byFlavor: {
              continents: {
                answered: parsed.byFlavor?.continents?.answered || 0,
                score: parsed.byFlavor?.continents?.score || 0,
                perfectCount: parsed.byFlavor?.continents?.perfectCount || 0,
              },
              countries: {
                answered: parsed.byFlavor?.countries?.answered || 0,
                score: parsed.byFlavor?.countries?.score || 0,
                perfectCount: parsed.byFlavor?.countries?.perfectCount || 0,
              },
              capitals: {
                answered: parsed.byFlavor?.capitals?.answered || 0,
                score: parsed.byFlavor?.capitals?.score || 0,
                perfectCount: parsed.byFlavor?.capitals?.perfectCount || 0,
              },
              flags: {
                answered: parsed.byFlavor?.flags?.answered || 0,
                score: parsed.byFlavor?.flags?.score || 0,
                perfectCount: parsed.byFlavor?.flags?.perfectCount || 0,
              },
            },
          };
        }
      }
    } catch {}
    return {
      totalScore: 0,
      totalAnswered: 0,
      perfectFirstAttempts: 0,
      currentStreak: 0,
      bestStreak: 0,
      byFlavor: {
        continents: { answered: 0, score: 0, perfectCount: 0 },
        countries: { answered: 0, score: 0, perfectCount: 0 },
        capitals: { answered: 0, score: 0, perfectCount: 0 },
        flags: { answered: 0, score: 0, perfectCount: 0 },
      },
    };
  });

  const [triviaQuestion, setTriviaQuestion] = useState<TriviaQuestion | null>(null);
  const [triviaCurrentAttempt, setTriviaCurrentAttempt] = useState<number>(1);
  const [triviaLastWrongGuessName, setTriviaLastWrongGuessName] = useState<string | null>(null);
  const [triviaIsAnswered, setTriviaIsAnswered] = useState<boolean>(false);
  const [triviaIsCorrect, setTriviaIsCorrect] = useState<boolean | null>(null);
  const [triviaEarnedPoints, setTriviaEarnedPoints] = useState<number>(0);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_TRIVIA_STATS, JSON.stringify(triviaStats));
  }, [triviaStats]);



  // For Teachers / Para Profesores Modal (Bilingual Curriculum, Grading & Bloom)
  const [isTeachersModalOpen, setIsTeachersModalOpen] = useState<boolean>(false);

  // Welcome / Explanatory Tour Modal State (Accessible on demand)
  const [isWelcomeModalOpen, setIsWelcomeModalOpen] = useState<boolean>(false);

  // 4-Level Progressive Learning State (All levels accessible without lock impediment)
  const [progression, setProgression] = useState<PedagogicalProgressState>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_PROGRESSION);
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          ...parsed,
          unlockedLevels: { 1: true, 2: true, 3: true, 4: true },
        };
      }
    } catch {
      // fallback
    }
    return {
      activeLevel: 1,
      activeLevelMode: 'learn',
      unlockedLevels: { 1: true, 2: true, 3: true, 4: true },
      levelScores: { 1: null, 2: null, 3: null, 4: {} },
      levelAttempts: { 1: 0, 2: 0, 3: 0, 4: {} },
      visitedCountriesByContinent: {
        'North America': [],
        'South America': [],
        'Europe': [],
        'Africa': [],
        'Asia': [],
        'Oceania': [],
      },
      selectedContinentForL4: 'South America',
    };
  });

  // Modals for the 4 Pedagogical Levels
  const [isLevel1LearnOpen, setIsLevel1LearnOpen] = useState<boolean>(false);
  const [isLevel2LearnOpen, setIsLevel2LearnOpen] = useState<boolean>(false);
  const [isLevel3LearnOpen, setIsLevel3LearnOpen] = useState<boolean>(false);
  const [isLevel4HubOpen, setIsLevel4HubOpen] = useState<boolean>(false);

  // Active Evaluation Engine modal
  const [activeEvaluation, setActiveEvaluation] = useState<{
    isOpen: boolean;
    levelNumber: number;
    levelTitle: string;
    questions: BloomEvaluationQuestion[];
    continentId?: ContinentId;
  }>({
    isOpen: false,
    levelNumber: 1,
    levelTitle: '',
    questions: [],
  });

  // Persist progression state
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_PROGRESSION, JSON.stringify(progression));
  }, [progression]);

  // Country Dataset State
  const [countries, setCountries] = useState<CountryDossierData[]>(STARTER_COUNTRIES);
  const [selectedCountry, setSelectedCountry] = useState<CountryDossierData | null>(null);
  const [isDossierOpen, setIsDossierOpen] = useState<boolean>(false);

  // Map Animation & Highlight States
  const [flyToCoords, setFlyToCoords] = useState<[number, number] | null>(null);
  const [flyToZoom, setFlyToZoom] = useState<number>(4);
  const [highlightedIso2, setHighlightedIso2] = useState<string | null>(null);
  const [shakeIso2, setShakeIso2] = useState<string | null>(null);
  const [activeFeatureBadge, setActiveFeatureBadge] = useState<LandformFeature | null>(null);

  // Modals Visibility
  const [isPlayGuideOpen, setIsPlayGuideOpen] = useState<boolean>(false);
  const [isGlossaryOpen, setIsGlossaryOpen] = useState<boolean>(false);
  const [isPhysicalReadingOpen, setIsPhysicalReadingOpen] = useState<boolean>(false);
  const [isMasteryOpen, setIsMasteryOpen] = useState<boolean>(false);
  const [isUploadOpen, setIsUploadOpen] = useState<boolean>(false);
  const [isLearnGuideOpen, setIsLearnGuideOpen] = useState<boolean>(false);
  const [activeSatelliteLessonBanner, setActiveSatelliteLessonBanner] = useState<{
    bandName: string;
    locationName: string;
    hypsometricColor: string;
    insight: string;
    originTab?: 'satellite-lab' | 'hypsometric-guide';
  } | null>(null);
  const [preferredModalTab, setPreferredModalTab] = useState<'satellite-lab' | 'hypsometric-guide'>('satellite-lab');

  // Quest Engine State
  const [allQuestions] = useState<BloomQuestQuestion[]>(QUEST_CHALLENGES);
  const [selectedLevel, setSelectedLevel] = useState<1 | 2 | 3 | 4 | 'all'>('all');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [currentAttempt, setCurrentAttempt] = useState<number>(1);
  const [hintStage, setHintStage] = useState<0 | 1 | 2 | 3>(0);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  // Persistence State
  const [questionProgress, setQuestionProgress] = useState<Record<string, QuestionProgress>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_PROGRESS);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [reviewList, setReviewList] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_REVIEWS);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [badges, setBadges] = useState<ExplorerBadge[]>(INITIAL_BADGES);

  // Persist language
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_LANG, currentLang);
  }, [currentLang]);

  // Persist progress
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_PROGRESS, JSON.stringify(questionProgress));
  }, [questionProgress]);

  // Persist review list
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_REVIEWS, JSON.stringify(reviewList));
  }, [reviewList]);

  // Open guide automatically when switching to Learn mode
  useEffect(() => {
    if (currentMode === 'learn') {
      setIsLearnGuideOpen(true);
    } else {
      setIsLearnGuideOpen(false);
    }
  }, [currentMode]);

  // Filtered Questions by selected Bloom level
  const filteredQuestions = useMemo(() => {
    if (selectedLevel === 'all') return allQuestions;
    return allQuestions.filter((q) => q.level === selectedLevel);
  }, [allQuestions, selectedLevel]);

  const currentQuestion: BloomQuestQuestion =
    filteredQuestions[currentQuestionIndex] || filteredQuestions[0] || allQuestions[0];

  // Calculate Cumulative Mastery Percentage (Goal: 90%)
  const masteryPercentage = useMemo(() => {
    const passed = Object.values(questionProgress).filter((p) => p.passed).length;
    if (allQuestions.length === 0) return 0;
    return Math.min(100, Math.round((passed / allQuestions.length) * 100));
  }, [questionProgress, allQuestions]);

  // Evaluate & Award Badges
  useEffect(() => {
    setBadges((prev) =>
      prev.map((badge) => {
        let isUnlocked = badge.unlocked;

        if (badge.id === 'cartographer-scout') {
          const l1Solved = allQuestions
            .filter((q) => q.level === 1)
            .filter((q) => questionProgress[q.id]?.passed).length;
          if (l1Solved >= 2) isUnlocked = true;
        } else if (badge.id === 'relief-navigator') {
          const l2Solved = allQuestions
            .filter((q) => q.level === 2)
            .filter((q) => questionProgress[q.id]?.passed).length;
          if (l2Solved >= 2) isUnlocked = true;
        } else if (badge.id === 'resource-economist') {
          const l3Solved = allQuestions
            .filter((q) => q.level === 3)
            .filter((q) => questionProgress[q.id]?.passed).length;
          if (l3Solved >= 2) isUnlocked = true;
        } else if (badge.id === 'geopolitical-strategist') {
          const l4Solved = allQuestions
            .filter((q) => q.level === 4)
            .filter((q) => questionProgress[q.id]?.passed).length;
          if (l4Solved >= 2) isUnlocked = true;
        } else if (badge.id === 'nord-anglia-mastery') {
          if (masteryPercentage >= 90) isUnlocked = true;
        }

        return { ...badge, unlocked: isUnlocked };
      })
    );
  }, [questionProgress, masteryPercentage, allQuestions]);

  // Handle Country Selection on Map or List
  const handleSelectCountry = useCallback((country: CountryDossierData | null) => {
    setSelectedCountry(country);
    setActiveFeatureBadge(null); // Clear previous active feature badge on country switch
    if (country) {
      // Track visited country in Level 4
      setProgression((prev) => {
        const cont = country.continent;
        const currentList = prev.visitedCountriesByContinent[cont] || [];
        if (!currentList.includes(country.id) && !currentList.includes(country.iso2.toLowerCase())) {
          return {
            ...prev,
            visitedCountriesByContinent: {
              ...prev.visitedCountriesByContinent,
              [cont]: [...currentList, country.id],
            },
          };
        }
        return prev;
      });

      setIsDossierOpen(true);
      setHighlightedIso2(country.iso2);
      setFlyToCoords(country.center_coords);
      setFlyToZoom(country.zoom_level || 5);
    } else {
      setIsDossierOpen(false);
      setHighlightedIso2(null);
    }
  }, []);

  // =========================================================================
  // 4-LEVEL LEARNING HANDLERS (FREE SELECTION & OPTIONAL 90% MASTERY VERIFICATION)
  // =========================================================================
  const handleSelectPedagogicalLevel = useCallback((lvl: PedagogicalLevel) => {
    setProgression((prev) => ({ ...prev, activeLevel: lvl }));

    if (lvl === 1) {
      setIsLevel1LearnOpen(true);
    } else if (lvl === 2) {
      setIsLevel2LearnOpen(true);
    } else if (lvl === 3) {
      setIsLevel3LearnOpen(true);
    } else if (lvl === 4) {
      setIsLevel4HubOpen(true);
    }
  }, []);

  const handleOpenLearnModal = useCallback((lvl: PedagogicalLevel) => {
    if (lvl === 1) setIsLevel1LearnOpen(true);
    else if (lvl === 2) setIsLevel2LearnOpen(true);
    else if (lvl === 3) setIsLevel3LearnOpen(true);
    else if (lvl === 4) setIsLevel4HubOpen(true);
  }, []);

  const handleOpenEvaluation = useCallback((lvl: PedagogicalLevel, continentId?: ContinentId) => {
    if (lvl === 1) {
      setActiveEvaluation({
        isOpen: true,
        levelNumber: 1,
        levelTitle: currentLang === 'es'
          ? 'Evaluación Nivel 1: Lectura de los 3 Tipos de Mapas'
          : 'Level 1 Assessment: Reading the 3 Map Types',
        questions: LEVEL_1_QUESTIONS,
      });
    } else if (lvl === 2) {
      setActiveEvaluation({
        isOpen: true,
        levelNumber: 2,
        levelTitle: currentLang === 'es'
          ? 'Evaluación Nivel 2: Morfología de Accidentes Geográficos en los 3 Mapas'
          : 'Level 2 Assessment: Landforms in the 3 Map Types',
        questions: LEVEL_2_QUESTIONS,
      });
    } else if (lvl === 3) {
      setActiveEvaluation({
        isOpen: true,
        levelNumber: 3,
        levelTitle: currentLang === 'es'
          ? 'Evaluación Nivel 3: Continentes, Mares y Océanos (Sin Países)'
          : 'Level 3 Assessment: Continents, Seas & Oceans (No Countries)',
        questions: LEVEL_3_QUESTIONS,
      });
    } else if (lvl === 4) {
      const targetContinent = continentId || progression.selectedContinentForL4;
      const questions = LEVEL_4_CONTINENT_QUESTIONS[targetContinent] || LEVEL_4_CONTINENT_QUESTIONS['South America'];
      const contName = CONTINENTS_DATA.find((c) => c.id === targetContinent)?.name_es || targetContinent;
      setActiveEvaluation({
        isOpen: true,
        levelNumber: 4,
        levelTitle: currentLang === 'es'
          ? `Evaluación Nivel 4: Países de ${contName}`
          : `Level 4 Assessment: Countries of ${targetContinent}`,
        questions,
        continentId: targetContinent,
      });
    }
  }, [currentLang, progression.selectedContinentForL4]);

  const handleEvaluationComplete = useCallback((scorePercentage: number) => {
    const lvl = activeEvaluation.levelNumber as PedagogicalLevel;
    const continentId = activeEvaluation.continentId;

    setProgression((prev) => {
      const newUnlocked = { ...prev.unlockedLevels };
      const newScores = { ...prev.levelScores };
      const newAttempts = { ...prev.levelAttempts };

      if (!continentId && (lvl === 1 || lvl === 2 || lvl === 3)) {
        newScores[lvl] = Math.max(newScores[lvl] || 0, scorePercentage);
        newAttempts[lvl] = (newAttempts[lvl] || 0) + 1;

        // STRICT 90% PASSING GATE TO ADVANCE TO THE NEXT LEVEL!
        if (scorePercentage >= 90) {
          if (lvl === 1) newUnlocked[2] = true;
          if (lvl === 2) newUnlocked[3] = true;
          if (lvl === 3) newUnlocked[4] = true;
        }
      } else if (continentId) {
        newScores[4] = {
          ...newScores[4],
          [continentId]: Math.max(newScores[4][continentId] || 0, scorePercentage),
        };
        newAttempts[4] = {
          ...newAttempts[4],
          [continentId]: (newAttempts[4][continentId] || 0) + 1,
        };
      }

      return {
        ...prev,
        unlockedLevels: newUnlocked,
        levelScores: newScores,
        levelAttempts: newAttempts,
      };
    });
  }, [activeEvaluation]);

  // Handle Fly-To Feature (from Dossier or Glossary)
  const handleFlyToFeature = useCallback(
    (coords: [number, number], zoom: number, feature?: LandformFeature) => {
      setFlyToCoords([...coords]); // Clone to ensure new array reference triggers flyTo
      setFlyToZoom(zoom);
      if (feature) {
        setActiveFeatureBadge(feature);
      }
    },
    []
  );

  // Handle Fly to Landform Example from Glossary (switches to Physical Relief lens!)
  const handleFlyToGlossaryExample = useCallback((item: LandformGlossaryItem) => {
    setCurrentLens('physical');
    setFlyToCoords(item.example_coords);
    setFlyToZoom(item.example_zoom || 6);

    const tempFeature: LandformFeature = {
      id: `glossary-${item.id}`,
      type: item.type,
      name_en: item.example_name_en,
      name_es: item.example_name_es,
      coords: item.example_coords,
      description_en: item.definition_en,
      description_es: item.definition_es,
    };
    setActiveFeatureBadge(tempFeature);
    setTimeout(() => setActiveFeatureBadge(null), 8000);
  }, []);

  // Handle Fly to Satellite Case Study from PhysicalMapReadingModal
  const handleFlyToSatelliteCaseStudy = useCallback(
    (
      coords: [number, number],
      zoom: number,
      feature: LandformFeature,
      lessonBannerInfo?: {
        bandName: string;
        locationName: string;
        hypsometricColor: string;
        insight: string;
        originTab?: 'satellite-lab' | 'hypsometric-guide';
      }
    ) => {
      setIsPhysicalReadingOpen(false);
      setCurrentLens('satellite');
      setFlyToCoords(coords);
      setFlyToZoom(zoom);
      setActiveFeatureBadge(feature);
      if (lessonBannerInfo) {
        setActiveSatelliteLessonBanner(lessonBannerInfo);
        if (lessonBannerInfo.originTab) {
          setPreferredModalTab(lessonBannerInfo.originTab);
        }
      }
      setTimeout(() => setActiveFeatureBadge(null), 12000);
    },
    []
  );

  // Handle Continent Navigation Jump
  const handleJumpToContinent = useCallback((continent: string) => {
    switch (continent) {
      case 'North America':
        setFlyToCoords([45, -100]);
        setFlyToZoom(3.5);
        break;
      case 'South America':
        setFlyToCoords([-15, -60]);
        setFlyToZoom(3.5);
        break;
      case 'Europe':
        setFlyToCoords([50, 15]);
        setFlyToZoom(4);
        break;
      case 'Africa':
        setFlyToCoords([5, 20]);
        setFlyToZoom(3.5);
        break;
      case 'Asia':
        setFlyToCoords([35, 90]);
        setFlyToZoom(3.5);
        break;
      case 'Oceania':
        setFlyToCoords([-25, 140]);
        setFlyToZoom(4);
        break;
      default:
        setFlyToCoords([20, 0]);
        setFlyToZoom(2.5);
        break;
    }
  }, []);

  // ============================== QUEST MODE LOGIC & 3-TIER SCAFFOLDED HINTS ==============================
  const handleCountryMapClick = useCallback(
    (iso2: string, clickedName: string) => {
      if (currentMode !== 'quest') return;
      if (isSuccess) return;

      const targetIso = currentQuestion.target_iso2.toLowerCase();
      const clicked = iso2.toLowerCase();

      // Check if Correct!
      if (clicked === targetIso) {
        setIsSuccess(true);
        setHighlightedIso2(targetIso);

        const currentQProg = questionProgress[currentQuestion.id];
        const updatedAttempts = (currentQProg?.attempts || 0) + currentAttempt;
        const neededHelp = currentAttempt > 1 || hintStage >= 2;

        setQuestionProgress((prev) => ({
          ...prev,
          [currentQuestion.id]: {
            questionId: currentQuestion.id,
            level: currentQuestion.level,
            attempts: updatedAttempts,
            passed: true,
            neededHelp,
            solvedAt: Date.now(),
          },
        }));

        // Remove from review queue if solved cleanly on attempt 1
        if (currentAttempt === 1 && !neededHelp) {
          setReviewList((prev) => prev.filter((id) => id !== currentQuestion.id));
        }

        // Fly smoothly to target
        const matchedCountry = countries.find((c) => c.iso2.toLowerCase() === targetIso);
        if (matchedCountry) {
          setFlyToCoords(matchedCountry.center_coords);
          setFlyToZoom(matchedCountry.zoom_level || 5);
        }
      } else {
        // INCORRECT CLICK -> 3-TIER SCAFFOLDED HINT ENGINE
        setShakeIso2(clicked);
        setTimeout(() => setShakeIso2(null), 600);

        if (currentAttempt === 1) {
          // Attempt 1: Do NOT reveal answer. Pop Tier 1 Spatial/Directional Hint
          setCurrentAttempt(2);
          setHintStage(1);
        } else if (currentAttempt === 2) {
          // Attempt 2: Do NOT reveal answer. Pop Tier 2 Economic & Physical Clue + Regional bounds zoom
          setCurrentAttempt(3);
          setHintStage(2);
          if (currentQuestion.regional_bounds) {
            const [[south, west], [north, east]] = currentQuestion.regional_bounds;
            const midLat = (south + north) / 2;
            const midLng = (west + east) / 2;
            setFlyToCoords([midLat, midLng]);
            setFlyToZoom(5);
          }
        } else {
          // Attempt 3: Recalibrate! Pan and fly directly to correct country, apply glowing neon border, open Dossier
          setHintStage(3);
          setHighlightedIso2(targetIso);

          // Add to review queue
          setReviewList((prev) => {
            if (!prev.includes(currentQuestion.id)) {
              return [...prev, currentQuestion.id];
            }
            return prev;
          });

          // Record as attempt completed with help
          setQuestionProgress((prev) => ({
            ...prev,
            [currentQuestion.id]: {
              questionId: currentQuestion.id,
              level: currentQuestion.level,
              attempts: 3,
              passed: false,
              neededHelp: true,
            },
          }));

          const matchedCountry = countries.find((c) => c.iso2.toLowerCase() === targetIso);
          if (matchedCountry) {
            setFlyToCoords(matchedCountry.center_coords);
            setFlyToZoom(matchedCountry.zoom_level || 5);
            setSelectedCountry(matchedCountry);
            setIsDossierOpen(true);
          }
        }
      }
    },
    [
      currentMode,
      isSuccess,
      currentQuestion,
      currentAttempt,
      hintStage,
      questionProgress,
      countries,
    ]
  );

  // Move to Next Question
  const handleNextQuestion = () => {
    setIsSuccess(false);
    setHintStage(0);
    setCurrentAttempt(1);
    setHighlightedIso2(null);

    const nextIndex = (currentQuestionIndex + 1) % filteredQuestions.length;
    setCurrentQuestionIndex(nextIndex);
  };

  // Retry current question
  const handleRetryQuestion = () => {
    setIsSuccess(false);
    setHintStage(0);
    setCurrentAttempt(1);
    setHighlightedIso2(null);
  };

  // Select a specific question
  const handleSelectQuestion = (q: BloomQuestQuestion) => {
    const idx = filteredQuestions.findIndex((item) => item.id === q.id);
    if (idx !== -1) {
      setCurrentQuestionIndex(idx);
    }
    setIsSuccess(false);
    setHintStage(0);
    setCurrentAttempt(1);
    setHighlightedIso2(null);
  };

  // Practice item from review list
  const handlePracticeReviewItem = (questionId: string) => {
    const found = allQuestions.find((q) => q.id === questionId);
    if (found) {
      setCurrentMode('quest');
      setSelectedLevel('all');
      handleSelectQuestion(found);
    }
  };

  // Reset progress
  const handleResetProgress = () => {
    if (window.confirm(currentLang === 'es' ? '¿Deseas reiniciar todo el progreso de maestría?' : 'Reset all mastery progress?')) {
      setQuestionProgress({});
      setReviewList([]);
      setBadges(INITIAL_BADGES);
      localStorage.removeItem(STORAGE_KEY_PROGRESS);
      localStorage.removeItem(STORAGE_KEY_REVIEWS);
    }
  };

  // Welcome Screen Language Selection -> transitions to Mode Selection Screen (Jugar / Aprender)
  const handleWelcomeSelectLanguage = (lang: Language) => {
    setCurrentLang(lang);
    localStorage.setItem(STORAGE_KEY_LANG, lang);
    setCurrentScreen('mode_select');
  };

  // Option 1: "Jugar / Play" (with 'explore' or 'trivia' submode)
  const handleSelectPlayMode = (subMode: 'explore' | 'trivia' = 'explore') => {
    setIsPlayMode(true);
    setPlaySubMode(subMode);
    setCurrentLens('political');
    setCurrentMode('explore');
    setSelectedCountry(null);
    setHighlightedIso2(null);
    setShakeIso2(null);
    setActiveFeatureBadge(null);
    setFlyToCoords([20, 0]);
    setFlyToZoom(2);
    setProgression((prev) => ({ ...prev, activeLevel: 4 }));
    setIsPlayGuideOpen(subMode === 'explore');
    setCurrentScreen('country_map');

    if (subMode === 'trivia') {
      // Show Category Selection Menu first without questions!
      setTriviaFlavor(null);
      setTriviaQuestion(null);
      setTriviaCurrentAttempt(1);
      setTriviaLastWrongGuessName(null);
      setTriviaIsAnswered(false);
      setTriviaIsCorrect(null);
      setTriviaEarnedPoints(0);
    }
  };

  // Select a Trivia Category (Continentes, Países, Capitales, Banderas)
  const handleTriviaSelectFlavor = (flavor: TriviaFlavor) => {
    setTriviaFlavor(flavor);
    const asked = triviaAskedIds[flavor] || [];
    const q = generateTriviaQuestion(flavor, countries, asked);
    setTriviaAskedIds((prev) => ({
      ...prev,
      [flavor]: [...(prev[flavor] || []), q.id],
    }));
    setTriviaQuestion(q);
    setTriviaCurrentAttempt(1);
    setTriviaLastWrongGuessName(null);
    setTriviaIsAnswered(false);
    setTriviaIsCorrect(null);
    setTriviaEarnedPoints(0);
    setHighlightedIso2(null);
    setShakeIso2(null);
    setSelectedCountry(null);
    setFlyToCoords([20, 0]);
    setFlyToZoom(2);
  };

  // Return to the Category Selection Menu
  const handleTriviaReturnToCategories = () => {
    setTriviaFlavor(null);
    setTriviaQuestion(null);
    setTriviaCurrentAttempt(1);
    setTriviaLastWrongGuessName(null);
    setTriviaIsAnswered(false);
    setTriviaIsCorrect(null);
    setTriviaEarnedPoints(0);
    setHighlightedIso2(null);
    setShakeIso2(null);
    setSelectedCountry(null);
    setFlyToCoords([20, 0]);
    setFlyToZoom(2);
  };

  // Next Trivia Question in current session
  const handleTriviaNextQuestion = () => {
    if (!triviaFlavor) return;
    const asked = triviaAskedIds[triviaFlavor] || [];
    const newQ = generateTriviaQuestion(triviaFlavor, countries, asked);
    setTriviaAskedIds((prev) => ({
      ...prev,
      [triviaFlavor!]: [...(prev[triviaFlavor!] || []), newQ.id],
    }));
    setTriviaQuestion(newQ);
    setTriviaCurrentAttempt(1);
    setTriviaLastWrongGuessName(null);
    setTriviaIsAnswered(false);
    setTriviaIsCorrect(null);
    setTriviaEarnedPoints(0);
    setHighlightedIso2(null);
    setShakeIso2(null);
    setSelectedCountry(null);
    if (triviaFlavor === 'continents') {
      setFlyToCoords([20, 0]);
      setFlyToZoom(2);
    }
  };

  // Reset Trivia Stats and question history
  const handleTriviaResetStats = () => {
    setTriviaStats({
      totalScore: 0,
      totalAnswered: 0,
      perfectFirstAttempts: 0,
      currentStreak: 0,
      bestStreak: 0,
      byFlavor: {
        continents: { answered: 0, score: 0, perfectCount: 0 },
        countries: { answered: 0, score: 0, perfectCount: 0 },
        capitals: { answered: 0, score: 0, perfectCount: 0 },
        flags: { answered: 0, score: 0, perfectCount: 0 },
      },
    });
    setTriviaAskedIds({
      continents: [],
      countries: [],
      capitals: [],
      flags: [],
    });
  };

  // Handle Trivia Answer on Map Click (no written multiple-choice alternatives)
  const handleTriviaAnswer = (clickedId: string, clickedCountry?: CountryDossierData | null) => {
    if (!triviaQuestion || triviaIsAnswered || !triviaFlavor) return;

    let isCorrect = false;

    if (triviaFlavor === 'continents') {
      const targetCont = triviaQuestion.targetId.toLowerCase();
      const clickedLower = clickedId.toLowerCase();
      const countryCont = clickedCountry?.continent?.toLowerCase() || '';
      if (clickedLower === targetCont || countryCont === targetCont) {
        isCorrect = true;
      }
    } else {
      const targetCountryId = triviaQuestion.targetId.toLowerCase();
      const targetIso2 = triviaQuestion.targetIso2?.toLowerCase() || '';
      const cId = clickedId.toLowerCase();
      const cCountryIso = clickedCountry?.iso2?.toLowerCase() || '';
      const cCountryId = clickedCountry?.id?.toLowerCase() || '';

      if (
        cId === targetCountryId ||
        (targetIso2 && cId === targetIso2) ||
        (targetIso2 && cCountryIso === targetIso2) ||
        cCountryId === targetCountryId
      ) {
        isCorrect = true;
      }
    }

    if (isCorrect) {
      // Scoring rules: 1st attempt = 1.0 pt, 2nd attempt = 0.5 pt, 3rd attempt = 0.25 pt
      let pts = 1.0;
      if (triviaCurrentAttempt === 2) pts = 0.5;
      else if (triviaCurrentAttempt === 3) pts = 0.25;
      else if (triviaCurrentAttempt >= 4) pts = 0;

      const currentFlavorKey = triviaFlavor;
      setTriviaStats((prev) => {
        const nextStreak = prev.currentStreak + 1;
        const prevFl = prev.byFlavor[currentFlavorKey] || { answered: 0, score: 0, perfectCount: 0 };
        return {
          totalScore: prev.totalScore + pts,
          totalAnswered: prev.totalAnswered + 1,
          perfectFirstAttempts: prev.perfectFirstAttempts + (triviaCurrentAttempt === 1 ? 1 : 0),
          currentStreak: nextStreak,
          bestStreak: Math.max(prev.bestStreak, nextStreak),
          byFlavor: {
            ...prev.byFlavor,
            [currentFlavorKey]: {
              answered: prevFl.answered + 1,
              score: prevFl.score + pts,
              perfectCount: prevFl.perfectCount + (triviaCurrentAttempt === 1 ? 1 : 0),
            },
          },
        };
      });

      setTriviaIsAnswered(true);
      setTriviaIsCorrect(true);
      setTriviaEarnedPoints(pts);
      setTriviaLastWrongGuessName(null);

      if (triviaQuestion.targetIso2) {
        setHighlightedIso2(triviaQuestion.targetIso2);
      }
    } else {
      // Incorrect guess on this attempt
      const wrongName = clickedCountry
        ? currentLang === 'es'
          ? clickedCountry.name_es
          : clickedCountry.name_en
        : clickedId;
      setTriviaLastWrongGuessName(wrongName);

      if (clickedCountry?.iso2) {
        setShakeIso2(clickedCountry.iso2);
        setTimeout(() => setShakeIso2(null), 1000);
      }

      if (triviaCurrentAttempt < 4) {
        // Increment attempt: user gets progressive hint and can try again!
        setTriviaCurrentAttempt((prev) => prev + 1);
      } else {
        // 4th attempt failed: 0 points and reveal answer on map!
        const currentFlavorKey = triviaFlavor;
        setTriviaStats((prev) => {
          const prevFl = prev.byFlavor[currentFlavorKey] || { answered: 0, score: 0, perfectCount: 0 };
          return {
            ...prev,
            totalAnswered: prev.totalAnswered + 1,
            currentStreak: 0,
            byFlavor: {
              ...prev.byFlavor,
              [currentFlavorKey]: {
                ...prevFl,
                answered: prevFl.answered + 1,
              },
            },
          };
        });

        setTriviaIsAnswered(true);
        setTriviaIsCorrect(false);
        setTriviaEarnedPoints(0);

        // Fly to correct answer and highlight it
        setFlyToCoords(triviaQuestion.targetCoords);
        setFlyToZoom(triviaQuestion.targetZoom);
        if (triviaQuestion.targetIso2) {
          setHighlightedIso2(triviaQuestion.targetIso2);
        }
      }
    }
  };



  // Option 2: "Aprender / Learn" -> opens the Main Content Menu (ModulesMenuScreen)
  const handleSelectLearnMode = () => {
    setIsPlayMode(false);
    setCurrentScreen('menu');
  };

  return (
    <div className="relative w-screen h-screen flex flex-col bg-slate-950 overflow-hidden font-sans">
      {/* SCREEN 1: WELCOME SCREEN (Bilingual Welcome, Teacher Button, 2 Language Buttons: EN / ES) */}
      {currentScreen === 'welcome' && (
        <div className="w-full h-full overflow-y-auto">
          <WelcomeScreen
            onSelectLanguage={handleWelcomeSelectLanguage}
            onOpenTeachers={() => setIsTeachersModalOpen(true)}
          />
        </div>
      )}

      {/* SCREEN 2: PREVIOUS MENU TO SELECT JUGAR/PLAY O APRENDER/LEARN */}
      {currentScreen === 'mode_select' && (
        <div className="w-full h-full overflow-y-auto">
          <ModeSelectionScreen
            currentLang={currentLang}
            onToggleLang={() => setCurrentLang((prev) => (prev === 'en' ? 'es' : 'en'))}
            onSelectLang={(lang) => {
              setCurrentLang(lang);
              localStorage.setItem(STORAGE_KEY_LANG, lang);
            }}
            onSelectPlay={handleSelectPlayMode}
            onSelectLearn={handleSelectLearnMode}
            onOpenTeachers={() => setIsTeachersModalOpen(true)}
            onReturnToWelcome={() => setCurrentScreen('welcome')}
          />
        </div>
      )}

      {/* SCREEN 3: MAIN CONTENT MENU (ModulesMenuScreen) */}
      {currentScreen === 'menu' && (
        <div className="w-full h-full overflow-y-auto">
          <ModulesMenuScreen
            currentLang={currentLang}
            onToggleLang={() => setCurrentLang((prev) => (prev === 'en' ? 'es' : 'en'))}
            onSelectLang={(lang) => {
              setCurrentLang(lang);
              localStorage.setItem(STORAGE_KEY_LANG, lang);
            }}
            onOpenTeachers={() => setIsTeachersModalOpen(true)}
            onReturnToWelcome={() => setCurrentScreen('mode_select')}
            progressState={progression}
            onOpenModule={(level) => handleOpenLearnModal(level)}
            onStartEvaluation={(level) => handleOpenEvaluation(level)}
            onEnterCountryMap={() => {
              setIsPlayMode(false);
              setCurrentLens('political');
              setCurrentMode('explore');
              setSelectedCountry(null);
              setHighlightedIso2(null);
              setActiveFeatureBadge(null);
              setFlyToCoords([20, 0]);
              setFlyToZoom(2);
              setProgression((prev) => ({ ...prev, activeLevel: 4 }));
              setCurrentScreen('country_map');
            }}
          />
        </div>
      )}

      {/* SCREEN 4: FULL SCREEN COUNTRY MAP */}
      {currentScreen === 'country_map' && (
        <div className="relative w-full h-full flex flex-col overflow-hidden">
          {/* Top Navigation Bar with Modules Menu button */}
          <Navbar
            isPlayMode={isPlayMode}
            playSubMode={playSubMode}
            onChangePlaySubMode={(sub) => {
              setPlaySubMode(sub);
              setIsDossierOpen(false);
              setSelectedCountry(null);
              setHighlightedIso2(null);
              setShakeIso2(null);
              if (sub === 'trivia') {
                setTriviaFlavor(null);
                setTriviaQuestion(null);
                setTriviaCurrentAttempt(1);
                setTriviaLastWrongGuessName(null);
                setTriviaIsAnswered(false);
                setTriviaIsCorrect(null);
                setTriviaEarnedPoints(0);
              }
            }}
            triviaScoreText={
              (triviaStats?.totalAnswered || 0) > 0
                ? `${
                    (triviaStats?.totalScore || 0) % 1 === 0
                      ? (triviaStats?.totalScore || 0)
                      : (triviaStats?.totalScore || 0).toFixed(2)
                  } pts`
                : undefined
            }


            currentMode={currentMode}
            onChangeMode={(mode) => {
              setCurrentMode(mode);
              setCurrentLens('political');
              setSelectedCountry(null);
              setHighlightedIso2(null);
              setActiveFeatureBadge(null);
              setIsSuccess(false);
              setHintStage(0);
              setCurrentAttempt(1);
              setFlyToCoords([20, 0]);
              setFlyToZoom(2);
            }}
            currentLens={currentLens}
            onChangeLens={(lens) => setCurrentLens(lens)}
            currentLang={currentLang}
            onToggleLang={() => setCurrentLang((prev) => (prev === 'en' ? 'es' : 'en'))}
            masteryPercentage={masteryPercentage}
            onOpenGlossary={() => setIsGlossaryOpen(true)}
            onOpenPhysicalMapReading={() => setIsPhysicalReadingOpen(true)}
            onOpenMastery={() => setIsMasteryOpen(true)}
            onOpenUpload={() => setIsUploadOpen(true)}
            onOpenTour={() => setIsWelcomeModalOpen(true)}
            onOpenCurriculumIntro={() => setIsTeachersModalOpen(true)}
            onOpenTeachers={() => setIsTeachersModalOpen(true)}
            onOpenModulesMenu={() => {
              setIsPlayMode(false);
              setCurrentScreen('menu');
            }}
            onOpenModeSelect={() => {
              setIsPlayMode(false);
              setCurrentScreen('mode_select');
            }}
            onOpenPlayGuide={() => setIsPlayGuideOpen(true)}
            onJumpToContinent={handleJumpToContinent}
          />

          {/* 4-Level Progressive Learning & 90% Gating Stepper Bar - Hidden in Jugar mode */}
          {!isPlayMode && (
            <ProgressionStepper
              progressState={progression}
              currentLang={currentLang}
              onSelectLevel={handleSelectPedagogicalLevel}
              onOpenLearnModal={handleOpenLearnModal}
              onOpenEvaluation={handleOpenEvaluation}
            />
          )}

          {/* Main Map View Area */}
          <main className="relative flex-1 w-full h-full overflow-hidden">
            <LeafletMap
              currentLens={currentLens}
              currentMode={currentMode}
              currentLang={currentLang}
              countries={countries}
              selectedCountry={selectedCountry}
              onSelectCountry={(c) => {
                if (isPlayMode && playSubMode === 'trivia') {
                  if (c) handleTriviaAnswer(c.id, c);
                } else {
                  handleSelectCountry(c);
                }
              }}
              onCountryMapClick={handleCountryMapClick}
              onFlyToFeature={handleFlyToFeature}
              flyToCoords={flyToCoords}
              flyToZoom={flyToZoom}
              highlightedIso2={highlightedIso2}
              shakeIso2={shakeIso2}
              activeFeatureBadge={activeFeatureBadge}
              currentLevel={progression.activeLevel}
              selectedContinent={progression.selectedContinentForL4}
              isPlayMode={isPlayMode}
              isTriviaMode={isPlayMode && playSubMode === 'trivia'}
              triviaFlavor={triviaFlavor}
              onTriviaMapClick={(targetId, country) => handleTriviaAnswer(targetId, country)}
            />


            {/* Level 4: Interactive Continent Countries Hub & Progress Tracker */}
            {progression.activeLevel === 4 && isLevel4HubOpen && (
              <Level4ContinentCountriesView
            countries={countries}
            selectedContinent={progression.selectedContinentForL4}
            onSelectContinent={(cont) => {
              setProgression((prev) => ({ ...prev, selectedContinentForL4: cont }));
              handleJumpToContinent(cont);
            }}
            visitedCountriesByContinent={progression.visitedCountriesByContinent}
            continentScores={progression.levelScores[4]}
            onSelectCountry={handleSelectCountry}
            onStartContinentEvaluation={(cont) => handleOpenEvaluation(4, cont)}
            onClose={() => setIsLevel4HubOpen(false)}
            currentLang={currentLang}
          />
        )}

        {/* Learn Mode Guide Card */}
        {currentMode === 'learn' && isLearnGuideOpen && (
          <LearnModeGuide
            currentLang={currentLang}
            onOpenGlossary={() => setIsGlossaryOpen(true)}
            onOpenPhysicalReading={() => setIsPhysicalReadingOpen(true)}
            onSelectCountryById={(id) => {
              const c = countries.find((item) => item.id === id);
              if (c) handleSelectCountry(c);
            }}
            onClose={() => setIsLearnGuideOpen(false)}
          />
        )}

        {/* Quest Mode HUD Overlay */}
        {currentMode === 'quest' && (
          <QuestEngine
            currentLang={currentLang}
            questions={filteredQuestions}
            currentQuestion={currentQuestion}
            currentAttempt={currentAttempt}
            questionProgress={questionProgress}
            hintStage={hintStage}
            isSuccess={isSuccess}
            onSelectLevel={(lvl) => {
              setSelectedLevel(lvl);
              setCurrentQuestionIndex(0);
              setIsSuccess(false);
              setHintStage(0);
              setCurrentAttempt(1);
            }}
            selectedLevel={selectedLevel}
            onNextQuestion={handleNextQuestion}
            onRetryQuestion={handleRetryQuestion}
            onSelectQuestion={handleSelectQuestion}
            onOpenDossier={(iso2) => {
              const c = countries.find((item) => item.iso2.toLowerCase() === iso2.toLowerCase());
              if (c) {
                setSelectedCountry(c);
                setIsDossierOpen(true);
              }
            }}
            onFlyToRegion={(bounds) => {
              if (bounds) {
                const [[south, west], [north, east]] = bounds;
                setFlyToCoords([(south + north) / 2, (west + east) / 2]);
                setFlyToZoom(5);
              }
            }}
            reviewList={reviewList}
            selectedCountry={selectedCountry}
            onFlyToFeature={handleFlyToFeature}
            onChangeLens={(lens) => setCurrentLens(lens)}
          />
        )}

        {/* Play Mode - Interactive Trivia Panel */}
        {isPlayMode && playSubMode === 'trivia' && (
          <PlayTriviaPanel
            currentLang={currentLang}
            currentFlavor={triviaFlavor}
            onSelectFlavor={handleTriviaSelectFlavor}
            onReturnToCategories={handleTriviaReturnToCategories}
            question={triviaQuestion}
            stats={triviaStats}
            currentAttempt={triviaCurrentAttempt}
            lastWrongGuessName={triviaLastWrongGuessName}
            isAnswered={triviaIsAnswered}
            isCorrect={triviaIsCorrect}
            earnedPoints={triviaEarnedPoints}
            onNextQuestion={handleTriviaNextQuestion}
            onResetStats={handleTriviaResetStats}
            isBehind={isDossierOpen}
            onCloseToExplore={() => {
              setPlaySubMode('explore');
              setHighlightedIso2(null);
              setShakeIso2(null);
            }}
            onViewCountryDossier={(targetId) => {
              const c = countries.find(
                (item) =>
                  item.id === targetId ||
                  item.iso2.toLowerCase() === targetId.toLowerCase() ||
                  (item.continent && item.continent.toLowerCase() === targetId.toLowerCase())
              );
              if (c) {
                setSelectedCountry(c);
                setIsDossierOpen(true);
              }
            }}
          />
        )}


        {/* Country Dossier 440px Drawer (in explore / learn mode, or when requested) */}
        {currentMode !== 'quest' && (!isPlayMode || playSubMode !== 'trivia' || isDossierOpen) && (
          <CountryDossier
            country={selectedCountry}
            isOpen={isDossierOpen}
            onClose={() => {
              setIsDossierOpen(false);
              setSelectedCountry(null);
              setHighlightedIso2(null);
              setActiveFeatureBadge(null);
            }}
            currentLang={currentLang}
            onFlyToFeature={handleFlyToFeature}
            onChangeLens={(lens) => setCurrentLens(lens)}
          />
        )}


        {/* Floating Real-World Satellite Lesson Banner */}
        {activeSatelliteLessonBanner && (
          <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-30 max-w-lg w-[94%] sm:w-auto bg-slate-900/95 border border-amber-500/60 rounded-2xl p-3 shadow-2xl backdrop-blur-md flex items-center justify-between gap-3 animate-in fade-in slide-in-from-bottom-3">
            <div className="flex items-center gap-2.5 min-w-0">
              <div
                className="w-4 h-4 rounded-full border border-white shrink-0 shadow-sm"
                style={{ backgroundColor: activeSatelliteLessonBanner.hypsometricColor }}
              />
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono uppercase px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 font-bold">
                    🛰️ {currentLang === 'es' ? 'Satélite Real vs Hipsometría' : 'Real Satellite vs Hypsometry'}
                  </span>
                  <span className="text-xs font-bold text-white truncate">
                    {activeSatelliteLessonBanner.locationName}
                  </span>
                </div>
                <p className="text-[11px] text-slate-300 line-clamp-1 mt-0.5">
                  {activeSatelliteLessonBanner.insight}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 shrink-0">
              <button
                onClick={() => {
                  setIsPhysicalReadingOpen(true);
                }}
                className="px-3 py-1.5 text-xs font-bold rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 transition-all shadow-md flex items-center gap-1.5 active:scale-95"
              >
                <Compass className="w-3.5 h-3.5" />
                <span>{currentLang === 'es' ? 'Volver a la Lección de Hipsometría' : 'Return to Hypsometry Lesson'}</span>
              </button>
              <button
                onClick={() => setActiveSatelliteLessonBanner(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                title={currentLang === 'es' ? 'Cerrar aviso' : 'Close banner'}
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  )}

      {/* Level 1 Study Modal: Reading 3 Map Types & Hypsometric Scale */}
      <Level1MapTypesModal
        isOpen={isLevel1LearnOpen}
        onClose={() => setIsLevel1LearnOpen(false)}
        onStartEvaluation={() => {
          setIsLevel1LearnOpen(false);
          handleOpenEvaluation(1);
        }}
        onChangeLens={setCurrentLens}
        currentLang={currentLang}
      />

      {/* Level 2 Study Modal: 19 Landforms across 3 Map Types */}
      <Level2LandformsModal
        isOpen={isLevel2LearnOpen}
        onClose={() => setIsLevel2LearnOpen(false)}
        onStartEvaluation={() => {
          setIsLevel2LearnOpen(false);
          handleOpenEvaluation(2);
        }}
        onFlyToExample={handleFlyToGlossaryExample}
        currentLang={currentLang}
      />

      {/* Level 3 Study Modal: Continents, Seas & Oceans (Strictly No Countries) */}
      <Level3ContinentsOceansModal
        isOpen={isLevel3LearnOpen}
        onClose={() => setIsLevel3LearnOpen(false)}
        onStartEvaluation={() => {
          setIsLevel3LearnOpen(false);
          handleOpenEvaluation(3);
        }}
        onFlyToOceanSea={(coords, zoom, name, lens) => {
          setCurrentLens(lens);
          setFlyToCoords(coords);
          setFlyToZoom(zoom);
        }}
        onChangeLens={setCurrentLens}
        currentLang={currentLang}
      />

      {/* Bloom's Taxonomy Evaluation Engine Modal (Enforces 90% pass gating) */}
      {activeEvaluation.isOpen && (
        <LevelEvaluationEngine
          questions={activeEvaluation.questions}
          levelNumber={activeEvaluation.levelNumber}
          levelTitle={activeEvaluation.levelTitle}
          currentLang={currentLang}
          onComplete={handleEvaluationComplete}
          onClose={() => setActiveEvaluation((prev) => ({ ...prev, isOpen: false }))}
          onSwitchToLearnMode={() => {
            setActiveEvaluation((prev) => ({ ...prev, isOpen: false }));
            handleOpenLearnModal(activeEvaluation.levelNumber as PedagogicalLevel);
          }}
        />
      )}

      {/* Pillar 1: Landforms Glossary Modal */}
      <LandformGlossaryModal
        isOpen={isGlossaryOpen}
        onClose={() => setIsGlossaryOpen(false)}
        currentLang={currentLang}
        onFlyToExample={handleFlyToGlossaryExample}
      />

      {/* Pillar 2: Physical Elevation & Hypsometry Modal with Real Satellite Laboratory */}
      <PhysicalMapReadingModal
        isOpen={isPhysicalReadingOpen}
        onClose={() => setIsPhysicalReadingOpen(false)}
        currentLang={currentLang}
        initialTab={preferredModalTab}
        onFlyToSatelliteExample={handleFlyToSatelliteCaseStudy}
        onChangeLens={(lens) => setCurrentLens(lens)}
      />

      {/* Section 5: Mastery & Progress Tracker Modal */}
      <MasteryReportModal
        isOpen={isMasteryOpen}
        onClose={() => setIsMasteryOpen(false)}
        currentLang={currentLang}
        masteryPercentage={masteryPercentage}
        questionProgress={questionProgress}
        allQuestions={allQuestions}
        badges={badges}
        reviewList={reviewList}
        onPracticeReviewItem={handlePracticeReviewItem}
        onResetProgress={handleResetProgress}
      />

      {/* Section 2: Dataset Upload Modal */}
      <DatasetUploadModal
        isOpen={isUploadOpen}
        onClose={() => setIsUploadOpen(false)}
        currentLang={currentLang}
        onLoadDataset={(loaded) => {
          setCountries(loaded);
          if (loaded.length > 0) {
            handleSelectCountry(loaded[0]);
          }
        }}
      />

      {/* For Teachers / Para Profesores Modal (Bilingual Curriculum, Grading & Bloom) */}
      <ForTeachersModal
        isOpen={isTeachersModalOpen}
        onClose={() => setIsTeachersModalOpen(false)}
        currentLang={currentLang}
        onStartLevel1={() => {
          setIsTeachersModalOpen(false);
          setCurrentScreen('menu');
          handleOpenLearnModal(1);
        }}
      />

      {/* Feature Tour / Explanatory Menu Modal (Accessible on demand via Tour button) */}
      <WelcomeTourModal
        isOpen={isWelcomeModalOpen}
        onClose={() => setIsWelcomeModalOpen(false)}
        currentLang={currentLang}
        onStartInLevel1={() => {
          setProgression((prev) => ({ ...prev, activeLevel: 1 }));
          setIsLevel1LearnOpen(true);
        }}
      />

      {/* Play Mode Interaction & Controls Guide Modal */}
      <PlayModeInstructionsModal
        isOpen={isPlayGuideOpen}
        onClose={() => {
          setIsPlayGuideOpen(false);
          setSelectedCountry(null);
          setIsDossierOpen(false);
          setHighlightedIso2(null);
          setActiveFeatureBadge(null);
          setCurrentLens('political');
          setFlyToCoords([20, 0]);
          setFlyToZoom(2);
        }}
        currentLang={currentLang}
        countries={countries}
        onHighlightCountry={(iso2) => setHighlightedIso2(iso2)}
        onFlyTo={(coords, zoom) => {
          setFlyToCoords([...coords]);
          setFlyToZoom(zoom);
        }}
        onSelectCountryForPreview={(country) => {
          setSelectedCountry(country);
          setIsDossierOpen(true);
        }}
        onCloseDossier={() => {
          setSelectedCountry(null);
          setIsDossierOpen(false);
          setActiveFeatureBadge(null);
        }}
        onResetView={() => {
          setSelectedCountry(null);
          setIsDossierOpen(false);
          setHighlightedIso2(null);
          setActiveFeatureBadge(null);
          setCurrentLens('political');
          setFlyToCoords([20, 0]);
          setFlyToZoom(2);
        }}
      />
    </div>
  );
}
