import React, { useState, useEffect, useMemo, useCallback, lazy, Suspense } from 'react';
import {
  LensType,
  Language,
  CountryDossierData,
  LandformFeature,
  LandformGlossaryItem,
} from './types/geography';
import { STARTER_COUNTRIES } from './data/countriesData';
import {
  ExplorePlayTopic,
  GeoTopicItem,
  getItemsForTopic,
} from './data/polesData';
import { GameMenuStage, GameMenuView } from './components/GameMenuStage';
import { MapWorkspaceBar } from './components/MapWorkspaceBar';
const LeafletMap = lazy(() =>
  import('./components/LeafletMap').then((m) => ({ default: m.LeafletMap }))
);
import { CountryDossier } from './components/CountryDossier';
import { TopicExplorePanel } from './components/TopicExplorePanel';
import { TopicGamePanel } from './components/TopicGamePanel';
import { PlayTriviaPanel } from './components/PlayTriviaPanel';
import { PlayReviewPanel, REVIEW_CONTINENT_OPTIONS } from './components/PlayReviewPanel';
import { Level1MapTypesModal } from './components/Level1MapTypesModal';
import { Level2LandformsModal } from './components/Level2LandformsModal';
import { Level3ContinentsOceansModal } from './components/Level3ContinentsOceansModal';
import { LevelEvaluationEngine } from './components/LevelEvaluationEngine';
import { TriviaFlavor, TriviaQuestion, TriviaStats, ReviewTopic } from './types/trivia';
import { generateTriviaQuestion } from './utils/triviaGenerator';
import {
  PedagogicalLevel,
  ContinentId,
  BloomEvaluationQuestion,
} from './types/progression';
import {
  LEVEL_1_QUESTIONS,
  LEVEL_2_QUESTIONS,
  LEVEL_3_QUESTIONS,
  LEVEL_4_CONTINENT_QUESTIONS,
} from './data/levelQuestionsData';
import { speakGeoName, stopSpeaking } from './utils/speechService';

const STORAGE_KEY_LANG = 'aprendiendo_mundo_lang_v1';
const STORAGE_KEY_TRIVIA_STATS = 'geomaster_trivia_stats_v2';

function shuffleArray<T>(list: T[]): T[] {
  const arr = [...list];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function App() {
  // Language defaults to Spanish ('es') to match "Aprendiendo el Mundo"
  const [currentLang, setCurrentLang] = useState<Language>(() => {
    const saved = localStorage.getItem(STORAGE_KEY_LANG);
    return saved === 'en' || saved === 'es' ? saved : 'es';
  });

  const handleToggleLang = useCallback(() => {
    setCurrentLang((prev) => {
      const next = prev === 'es' ? 'en' : 'es';
      localStorage.setItem(STORAGE_KEY_LANG, next);
      return next;
    });
  }, []);

  // Navigation & Game Menu State
  const [inMapWorkspace, setInMapWorkspace] = useState<boolean>(false);
  const [menuView, setMenuView] = useState<GameMenuView>('main');
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [hasPlayedIntro, setHasPlayedIntro] = useState<boolean>(false);
  const [workspaceMode, setWorkspaceMode] = useState<'explore' | 'play'>('explore');
  const [workspaceTopic, setWorkspaceTopic] = useState<ExplorePlayTopic>('countries');
  const [countryPlayKind, setCountryPlayKind] = useState<'trivia' | 'review'>('trivia');

  // Map Visual State
  const [countries] = useState<CountryDossierData[]>(STARTER_COUNTRIES);
  const [currentLens, setCurrentLens] = useState<LensType>('political');
  const [selectedCountry, setSelectedCountry] = useState<CountryDossierData | null>(null);
  const [isDossierOpen, setIsDossierOpen] = useState<boolean>(false);
  const [flyToCoords, setFlyToCoords] = useState<[number, number] | null>(null);
  const [flyToZoom, setFlyToZoom] = useState<number>(2);
  const [highlightedIso2, setHighlightedIso2] = useState<string | null>(null);
  const [shakeIso2, setShakeIso2] = useState<string | null>(null);
  const [activeFeatureBadge, setActiveFeatureBadge] = useState<LandformFeature | null>(null);

  // Non-country Topic Explore State (Continents, Oceans, Seas, Poles)
  const [selectedTopicItem, setSelectedTopicItem] = useState<GeoTopicItem | null>(null);

  // Non-country Topic Game State (Continents, Oceans, Seas, Poles)
  const [topicGameQueue, setTopicGameQueue] = useState<GeoTopicItem[]>([]);
  const [topicGameIndex, setTopicGameIndex] = useState<number>(0);
  const [topicGameScore, setTopicGameScore] = useState<number>(0);
  const [topicGameStreak, setTopicGameStreak] = useState<number>(0);
  const [topicGameAttempt, setTopicGameAttempt] = useState<number>(1);
  const [topicGameAnswered, setTopicGameAnswered] = useState<boolean>(false);
  const [topicGameCorrect, setTopicGameCorrect] = useState<boolean | null>(null);
  const [topicGameLastWrong, setTopicGameLastWrong] = useState<string | null>(null);
  const [topicGameFoundIds, setTopicGameFoundIds] = useState<string[]>([]);
  const [topicGameRevealedId, setTopicGameRevealedId] = useState<string | null>(null);
  const [topicGameFinished, setTopicGameFinished] = useState<boolean>(false);

  // Countries Play -> Review State
  const [reviewContinentId, setReviewContinentId] = useState<string | null>(null);
  const [reviewTopic, setReviewTopic] = useState<ReviewTopic | null>(null);
  const [reviewQueue, setReviewQueue] = useState<CountryDossierData[]>([]);
  const [reviewCurrentIndex, setReviewCurrentIndex] = useState<number>(0);
  const [reviewIsCompleted, setReviewIsCompleted] = useState<boolean>(false);

  // Countries Play -> Trivia State
  const [triviaContinentId, setTriviaContinentId] = useState<string | null>(null);
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
              continents: parsed.byFlavor?.continents || { answered: 0, score: 0, perfectCount: 0 },
              countries: parsed.byFlavor?.countries || { answered: 0, score: 0, perfectCount: 0 },
              capitals: parsed.byFlavor?.capitals || { answered: 0, score: 0, perfectCount: 0 },
              flags: parsed.byFlavor?.flags || { answered: 0, score: 0, perfectCount: 0 },
            },
          };
        }
      }
    } catch {
      // ignore parse issues
    }
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

  // Learning Modals (Aprender -> Fundamentos & Evaluations)
  const [isLevel1LearnOpen, setIsLevel1LearnOpen] = useState<boolean>(false);
  const [isLevel2LearnOpen, setIsLevel2LearnOpen] = useState<boolean>(false);
  const [isLevel3LearnOpen, setIsLevel3LearnOpen] = useState<boolean>(false);
  const [activeEvaluation, setActiveEvaluation] = useState<{
    isOpen: boolean;
    levelNumber: number;
    levelTitle: string;
    questions: BloomEvaluationQuestion[];
  }>({
    isOpen: false,
    levelNumber: 1,
    levelTitle: '',
    questions: [],
  });

  // Helper: Reset Map Overlays
  const resetMapVisuals = useCallback((lens: LensType = 'political') => {
    setCurrentLens(lens);
    setSelectedCountry(null);
    setIsDossierOpen(false);
    setHighlightedIso2(null);
    setShakeIso2(null);
    setActiveFeatureBadge(null);
    setSelectedTopicItem(null);
    setFlyToCoords([20, 0]);
    setFlyToZoom(2);
  }, []);

  // Game Menu Navigation
  const handleChangeMenuView = useCallback(
    (nextView: GameMenuView) => {
      resetMapVisuals('political');
      setInMapWorkspace(false);
      setMenuView(nextView);
    },
    [resetMapVisuals]
  );

  // Start Topic Game (Continents, Oceans, Seas, Poles)
  const startTopicGame = useCallback(
    (topic: 'continents' | 'oceans' | 'seas' | 'poles') => {
      const items = shuffleArray(getItemsForTopic(topic));
      setTopicGameQueue(items);
      setTopicGameIndex(0);
      setTopicGameScore(0);
      setTopicGameStreak(0);
      setTopicGameAttempt(1);
      setTopicGameAnswered(false);
      setTopicGameCorrect(null);
      setTopicGameLastWrong(null);
      setTopicGameFoundIds([]);
      setTopicGameRevealedId(null);
      setTopicGameFinished(false);
      setFlyToCoords([15, 0]);
      setFlyToZoom(2);
      if (items[0]) {
        speakGeoName(currentLang === 'es' ? items[0].name_es : items[0].name_en, currentLang, soundEnabled);
      }
    },
    [currentLang, soundEnabled]
  );

  // Launch Explore Topic
  const handleSelectExploreTopic = useCallback(
    (topic: ExplorePlayTopic) => {
      setWorkspaceMode('explore');
      setWorkspaceTopic(topic);
      const preferredLens: LensType =
        topic === 'oceans' || topic === 'seas' || topic === 'poles' ? 'physical' : 'political';
      resetMapVisuals(preferredLens);
      setInMapWorkspace(true);
    },
    [resetMapVisuals]
  );

  // Launch Play Topic
  const handleSelectPlayTopic = useCallback(
    (topic: ExplorePlayTopic) => {
      setWorkspaceMode('play');
      setWorkspaceTopic(topic);
      resetMapVisuals('political');

      if (topic === 'countries') {
        setCountryPlayKind('trivia');
        setTriviaContinentId(null);
        setTriviaFlavor(null);
        setTriviaQuestion(null);
        setTriviaCurrentAttempt(1);
        setTriviaLastWrongGuessName(null);
        setTriviaIsAnswered(false);
        setTriviaIsCorrect(null);
        setTriviaEarnedPoints(0);
        setReviewContinentId(null);
        setReviewTopic(null);
        setReviewQueue([]);
        setReviewCurrentIndex(0);
        setReviewIsCompleted(false);
      } else {
        startTopicGame(topic);
      }

      setInMapWorkspace(true);
    },
    [resetMapVisuals, startTopicGame]
  );

  // Active non-country topic items
  const activeTopicItems = useMemo(() => {
    if (!inMapWorkspace || workspaceTopic === 'countries') return null;
    return getItemsForTopic(workspaceTopic);
  }, [inMapWorkspace, workspaceTopic]);

  const currentGameTarget =
    topicGameQueue.length > 0 && topicGameIndex < topicGameQueue.length
      ? topicGameQueue[topicGameIndex]
      : null;

  // Handle clicking a topic marker or continent polygon
  const handleClickTopicItem = useCallback(
    (item: GeoTopicItem) => {
      const spokenName = currentLang === 'es' ? item.name_es : item.name_en;

      if (workspaceMode === 'explore') {
        setSelectedTopicItem(item);
        setFlyToCoords([...item.coords]);
        setFlyToZoom(item.zoom);
        speakGeoName(spokenName, currentLang, soundEnabled);
        return;
      }

      // PLAY MODE for Continents, Oceans, Seas, Poles
      if (!currentGameTarget || topicGameAnswered || topicGameFinished) return;

      if (item.id === currentGameTarget.id) {
        setTopicGameScore((prev) => prev + 1);
        setTopicGameStreak((prev) => prev + 1);
        setTopicGameAnswered(true);
        setTopicGameCorrect(true);
        setTopicGameLastWrong(null);
        setTopicGameFoundIds((prev) => (prev.includes(item.id) ? prev : [...prev, item.id]));
        setTopicGameRevealedId(item.id);
        setFlyToCoords([...item.coords]);
        setFlyToZoom(item.zoom);
        speakGeoName(spokenName, currentLang, soundEnabled);
      } else {
        setTopicGameLastWrong(spokenName);
        speakGeoName(spokenName, currentLang, soundEnabled);
        if (topicGameAttempt < 3) {
          setTopicGameAttempt((prev) => prev + 1);
        } else {
          // 3 attempts reached -> reveal target on map
          setTopicGameStreak(0);
          setTopicGameAnswered(true);
          setTopicGameCorrect(false);
          setTopicGameRevealedId(currentGameTarget.id);
          setFlyToCoords([...currentGameTarget.coords]);
          setFlyToZoom(currentGameTarget.zoom);
        }
      }
    },
    [
      workspaceMode,
      currentGameTarget,
      topicGameAnswered,
      topicGameFinished,
      topicGameAttempt,
      currentLang,
      soundEnabled,
    ]
  );

  const handleNextTopicQuestion = useCallback(() => {
    if (topicGameIndex + 1 < topicGameQueue.length) {
      const nextIdx = topicGameIndex + 1;
      setTopicGameIndex(nextIdx);
      setTopicGameAttempt(1);
      setTopicGameAnswered(false);
      setTopicGameCorrect(null);
      setTopicGameLastWrong(null);
      setTopicGameRevealedId(null);
      setFlyToCoords([15, 0]);
      setFlyToZoom(2);
      const nextItem = topicGameQueue[nextIdx];
      if (nextItem) {
        speakGeoName(currentLang === 'es' ? nextItem.name_es : nextItem.name_en, currentLang, soundEnabled);
      }
    } else {
      setTopicGameFinished(true);
      setTopicGameRevealedId(null);
      setFlyToCoords([15, 0]);
      setFlyToZoom(2);
    }
  }, [topicGameIndex, topicGameQueue, currentLang, soundEnabled]);

  // Country Exploration Handlers
  const handleSelectCountry = useCallback(
    (country: CountryDossierData | null) => {
      setSelectedCountry(country);
      if (country) {
        setIsDossierOpen(true);
        setHighlightedIso2(country.iso2);
        setActiveFeatureBadge(null);
        setFlyToCoords([...country.center_coords]);
        setFlyToZoom(country.zoom_level || 5);
        speakGeoName(currentLang === 'es' ? country.name_es : country.name_en, currentLang, soundEnabled);
      } else {
        setIsDossierOpen(false);
        setHighlightedIso2(null);
      }
    },
    [currentLang, soundEnabled]
  );

  const handleFlyToFeature = useCallback(
    (coords: [number, number], zoom: number, feature?: LandformFeature) => {
      setFlyToCoords([...coords]);
      setFlyToZoom(zoom);
      if (feature) {
        setActiveFeatureBadge(feature);
        speakGeoName(currentLang === 'es' ? feature.name_es : feature.name_en, currentLang, soundEnabled);
      }
    },
    [currentLang, soundEnabled]
  );

  const handleJumpToContinent = useCallback(
    (continent: string) => {
      const centers: Record<string, { coords: [number, number]; zoom: number; es: string; en: string }> = {
        World: { coords: [20, 0], zoom: 2, es: 'Todo el mundo', en: 'Entire world' },
        'North America': { coords: [45, -100], zoom: 3.5, es: 'América del Norte', en: 'North America' },
        'South America': { coords: [-18, -60], zoom: 3.5, es: 'América del Sur', en: 'South America' },
        Europe: { coords: [50, 14], zoom: 4, es: 'Europa', en: 'Europe' },
        Africa: { coords: [4, 20], zoom: 3.5, es: 'África', en: 'Africa' },
        Asia: { coords: [34, 92], zoom: 3.5, es: 'Asia', en: 'Asia' },
        Oceania: { coords: [-24, 138], zoom: 4, es: 'Oceanía', en: 'Oceania' },
      };
      const target = centers[continent] || centers.World;
      setFlyToCoords([...target.coords]);
      setFlyToZoom(target.zoom);
      if (continent !== 'World') {
        speakGeoName(currentLang === 'es' ? target.es : target.en, currentLang, soundEnabled);
      }
    },
    [currentLang, soundEnabled]
  );

  // Countries Play -> Review Handlers
  const speakReviewEntry = useCallback(
    (country: CountryDossierData, topic: ReviewTopic | null) => {
      const text =
        topic === 'capitals'
          ? currentLang === 'es'
            ? country.capital_es
            : country.capital_en
          : currentLang === 'es'
          ? country.name_es
          : country.name_en;
      speakGeoName(text, currentLang, soundEnabled);
    },
    [currentLang, soundEnabled]
  );

  const handleStartReview = useCallback(() => {
    if (!reviewContinentId || !reviewTopic) return;
    const option = REVIEW_CONTINENT_OPTIONS.find((c) => c.id === reviewContinentId);
    if (!option) return;
    const matched = countries.filter((c) => option.continentsFilter.includes(c.continent));
    if (matched.length === 0) return;

    const shuffled = shuffleArray(matched);
    setReviewQueue(shuffled);
    setReviewCurrentIndex(0);
    setReviewIsCompleted(false);

    const first = shuffled[0];
    const coords = reviewTopic === 'capitals' && first.capital_coords ? first.capital_coords : first.center_coords;
    setFlyToCoords([...coords]);
    setFlyToZoom(first.zoom_level || 5);
    setHighlightedIso2(first.iso2);
    speakReviewEntry(first, reviewTopic);
  }, [reviewContinentId, reviewTopic, countries, speakReviewEntry]);

  const handleNextReviewCountry = useCallback(() => {
    if (reviewQueue.length === 0) return;
    if (reviewCurrentIndex < reviewQueue.length - 1) {
      const nextIdx = reviewCurrentIndex + 1;
      setReviewCurrentIndex(nextIdx);
      const nextCountry = reviewQueue[nextIdx];
      const coords =
        reviewTopic === 'capitals' && nextCountry.capital_coords
          ? nextCountry.capital_coords
          : nextCountry.center_coords;
      setFlyToCoords([...coords]);
      setFlyToZoom(nextCountry.zoom_level || 5);
      setHighlightedIso2(nextCountry.iso2);
      speakReviewEntry(nextCountry, reviewTopic);
    } else {
      setReviewIsCompleted(true);
      setHighlightedIso2(null);
    }
  }, [reviewQueue, reviewCurrentIndex, reviewTopic, speakReviewEntry]);

  const handlePreviousReviewCountry = useCallback(() => {
    if (reviewQueue.length === 0 || reviewCurrentIndex <= 0) return;
    const prevIdx = reviewCurrentIndex - 1;
    setReviewCurrentIndex(prevIdx);
    const prevCountry = reviewQueue[prevIdx];
    const coords =
      reviewTopic === 'capitals' && prevCountry.capital_coords
        ? prevCountry.capital_coords
        : prevCountry.center_coords;
    setFlyToCoords([...coords]);
    setFlyToZoom(prevCountry.zoom_level || 5);
    setHighlightedIso2(prevCountry.iso2);
    speakReviewEntry(prevCountry, reviewTopic);
  }, [reviewQueue, reviewCurrentIndex, reviewTopic, speakReviewEntry]);

  const handleRecenterReviewMap = useCallback(() => {
    const c = reviewQueue[reviewCurrentIndex];
    if (!c) return;
    const coords = reviewTopic === 'capitals' && c.capital_coords ? c.capital_coords : c.center_coords;
    setFlyToCoords([...coords]);
    setFlyToZoom(c.zoom_level || 5);
  }, [reviewQueue, reviewCurrentIndex, reviewTopic]);

  const handleRestartSameReview = useCallback(() => {
    if (reviewQueue.length === 0) return;
    const shuffled = shuffleArray(reviewQueue);
    setReviewQueue(shuffled);
    setReviewCurrentIndex(0);
    setReviewIsCompleted(false);
    const first = shuffled[0];
    const coords = reviewTopic === 'capitals' && first.capital_coords ? first.capital_coords : first.center_coords;
    setFlyToCoords([...coords]);
    setFlyToZoom(first.zoom_level || 5);
    setHighlightedIso2(first.iso2);
    speakReviewEntry(first, reviewTopic);
  }, [reviewQueue, reviewTopic, speakReviewEntry]);

  const handleResetReview = useCallback(() => {
    setReviewContinentId(null);
    setReviewTopic(null);
    setReviewQueue([]);
    setReviewCurrentIndex(0);
    setReviewIsCompleted(false);
    setHighlightedIso2(null);
    setFlyToCoords([20, 0]);
    setFlyToZoom(2);
  }, []);

  // Countries Play -> Trivia Handlers
  const handleTriviaStartSession = useCallback(() => {
    if (!triviaContinentId || !triviaFlavor) return;
    const option = REVIEW_CONTINENT_OPTIONS.find((c) => c.id === triviaContinentId);
    const filter = option ? option.continentsFilter : undefined;
    const asked = triviaAskedIds[triviaFlavor] || [];
    const q = generateTriviaQuestion(triviaFlavor, countries, asked, filter);
    setTriviaAskedIds((prev) => ({
      ...prev,
      [triviaFlavor]: [...(prev[triviaFlavor] || []), q.id],
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
    if (triviaFlavor === 'countries') {
      speakGeoName(currentLang === 'es' ? q.targetName_es : q.targetName_en, currentLang, soundEnabled);
    } else if (triviaFlavor === 'capitals') {
      speakGeoName(currentLang === 'es' ? q.capital_es : q.capital_en, currentLang, soundEnabled);
    }
  }, [triviaContinentId, triviaFlavor, triviaAskedIds, countries, currentLang, soundEnabled]);

  const handleTriviaNextQuestion = useCallback(() => {
    if (!triviaFlavor) return;
    const option = REVIEW_CONTINENT_OPTIONS.find((c) => c.id === triviaContinentId);
    const filter = option ? option.continentsFilter : undefined;
    const asked = triviaAskedIds[triviaFlavor] || [];
    const newQ = generateTriviaQuestion(triviaFlavor, countries, asked, filter);
    setTriviaAskedIds((prev) => ({
      ...prev,
      [triviaFlavor]: [...(prev[triviaFlavor] || []), newQ.id],
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
    if (triviaFlavor === 'countries') {
      speakGeoName(currentLang === 'es' ? newQ.targetName_es : newQ.targetName_en, currentLang, soundEnabled);
    } else if (triviaFlavor === 'capitals') {
      speakGeoName(currentLang === 'es' ? newQ.capital_es : newQ.capital_en, currentLang, soundEnabled);
    }
  }, [triviaFlavor, triviaContinentId, triviaAskedIds, countries, currentLang, soundEnabled]);

  const handleTriviaReturnToCategories = useCallback(() => {
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
  }, []);

  const handleTriviaResetStats = useCallback(() => {
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
    setTriviaAskedIds({ continents: [], countries: [], capitals: [], flags: [] });
  }, []);

  const handleTriviaAnswer = useCallback(
    (clickedId: string, clickedCountry?: CountryDossierData | null) => {
      if (!triviaQuestion || triviaIsAnswered || !triviaFlavor) return;

      const targetCountryId = triviaQuestion.targetId.toLowerCase();
      const targetIso2 = triviaQuestion.targetIso2?.toLowerCase() || '';
      const cId = clickedId.toLowerCase();
      const cCountryIso = clickedCountry?.iso2?.toLowerCase() || '';
      const cCountryId = clickedCountry?.id?.toLowerCase() || '';

      const isCorrect =
        cId === targetCountryId ||
        (Boolean(targetIso2) && (cId === targetIso2 || cCountryIso === targetIso2)) ||
        cCountryId === targetCountryId;

      if (isCorrect) {
        const pts = triviaCurrentAttempt === 1 ? 1.0 : triviaCurrentAttempt === 2 ? 0.5 : 0.25;
        setTriviaStats((prev) => {
          const prevFl = prev.byFlavor[triviaFlavor] || { answered: 0, score: 0, perfectCount: 0 };
          const nextStreak = prev.currentStreak + 1;
          return {
            totalScore: prev.totalScore + pts,
            totalAnswered: prev.totalAnswered + 1,
            perfectFirstAttempts: prev.perfectFirstAttempts + (triviaCurrentAttempt === 1 ? 1 : 0),
            currentStreak: nextStreak,
            bestStreak: Math.max(prev.bestStreak, nextStreak),
            byFlavor: {
              ...prev.byFlavor,
              [triviaFlavor]: {
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
        if (triviaQuestion.targetIso2) setHighlightedIso2(triviaQuestion.targetIso2);
        speakGeoName(
          currentLang === 'es' ? triviaQuestion.targetName_es : triviaQuestion.targetName_en,
          currentLang,
          soundEnabled
        );
      } else {
        const wrongName = clickedCountry
          ? currentLang === 'es'
            ? clickedCountry.name_es
            : clickedCountry.name_en
          : clickedId;
        setTriviaLastWrongGuessName(wrongName);
        if (clickedCountry) {
          speakGeoName(wrongName, currentLang, soundEnabled);
        }
        if (clickedCountry?.iso2) {
          setShakeIso2(clickedCountry.iso2);
          setTimeout(() => setShakeIso2(null), 900);
        }
        if (triviaCurrentAttempt < 4) {
          setTriviaCurrentAttempt((prev) => prev + 1);
        } else {
          setTriviaStats((prev) => {
            const prevFl = prev.byFlavor[triviaFlavor] || { answered: 0, score: 0, perfectCount: 0 };
            return {
              ...prev,
              totalAnswered: prev.totalAnswered + 1,
              currentStreak: 0,
              byFlavor: {
                ...prev.byFlavor,
                [triviaFlavor]: { ...prevFl, answered: prevFl.answered + 1 },
              },
            };
          });
          setTriviaIsAnswered(true);
          setTriviaIsCorrect(false);
          setTriviaEarnedPoints(0);
          setFlyToCoords(triviaQuestion.targetCoords);
          setFlyToZoom(triviaQuestion.targetZoom);
          if (triviaQuestion.targetIso2) setHighlightedIso2(triviaQuestion.targetIso2);
          speakGeoName(
            currentLang === 'es' ? triviaQuestion.targetName_es : triviaQuestion.targetName_en,
            currentLang,
            soundEnabled
          );
        }
      }
    },
    [triviaQuestion, triviaIsAnswered, triviaFlavor, triviaCurrentAttempt, currentLang, soundEnabled]
  );

  // Learning Handlers (Aprender -> Fundamentos & Países)
  const handleOpenLearnModal = useCallback((level: PedagogicalLevel) => {
    if (level === 1) setIsLevel1LearnOpen(true);
    else if (level === 2) setIsLevel2LearnOpen(true);
    else if (level === 3) setIsLevel3LearnOpen(true);
  }, []);

  const handleOpenEvaluation = useCallback(
    (level: PedagogicalLevel, continent?: ContinentId) => {
      const isEs = currentLang === 'es';
      if (level === 1) {
        setActiveEvaluation({
          isOpen: true,
          levelNumber: 1,
          levelTitle: isEs ? 'Tipos de Mapas y Relieve' : 'Map Types & Elevation',
          questions: LEVEL_1_QUESTIONS,
        });
      } else if (level === 2) {
        setActiveEvaluation({
          isOpen: true,
          levelNumber: 2,
          levelTitle: isEs ? 'Accidentes Geográficos' : 'Landforms',
          questions: LEVEL_2_QUESTIONS,
        });
      } else if (level === 3) {
        setActiveEvaluation({
          isOpen: true,
          levelNumber: 3,
          levelTitle: isEs ? 'Continentes, Océanos y Mares' : 'Continents, Oceans & Seas',
          questions: LEVEL_3_QUESTIONS,
        });
      } else if (level === 4 && continent) {
        const questions = LEVEL_4_CONTINENT_QUESTIONS[continent] || LEVEL_4_CONTINENT_QUESTIONS['South America'];
        setActiveEvaluation({
          isOpen: true,
          levelNumber: 4,
          levelTitle: isEs ? `Países de ${continent}` : `Countries of ${continent}`,
          questions,
        });
      }
    },
    [currentLang]
  );

  const handleFlyToGlossaryExample = useCallback(
    (item: LandformGlossaryItem, lens: LensType) => {
      setIsLevel2LearnOpen(false);
      setWorkspaceMode('explore');
      setWorkspaceTopic('countries');
      setCurrentLens(lens);
      setInMapWorkspace(true);
      setFlyToCoords([...item.example_coords]);
      setFlyToZoom(item.example_zoom);
      setActiveFeatureBadge({
        id: item.id,
        type: item.type,
        name_en: item.example_name_en,
        name_es: item.example_name_es,
        coords: item.example_coords,
        description_en: item.definition_en,
        description_es: item.definition_es,
      });
      speakGeoName(
        currentLang === 'es' ? item.example_name_es : item.example_name_en,
        currentLang,
        soundEnabled
      );
    },
    [currentLang, soundEnabled]
  );

  const handleOpenCountryFromLearn = useCallback(
    (country: CountryDossierData) => {
      setWorkspaceMode('explore');
      setWorkspaceTopic('countries');
      setCurrentLens('political');
      setInMapWorkspace(true);
      setSelectedCountry(country);
      setIsDossierOpen(true);
      setHighlightedIso2(country.iso2);
      setFlyToCoords([...country.center_coords]);
      setFlyToZoom(country.zoom_level || 5);
      speakGeoName(currentLang === 'es' ? country.name_es : country.name_en, currentLang, soundEnabled);
    },
    [currentLang, soundEnabled]
  );

  const handleStartCountryReviewFromLearn = useCallback(
    (continentId: string) => {
      setWorkspaceMode('play');
      setWorkspaceTopic('countries');
      setCountryPlayKind('review');
      setCurrentLens('political');
      setSelectedCountry(null);
      setIsDossierOpen(false);
      setReviewContinentId(continentId);
      setReviewTopic(null);
      setReviewQueue([]);
      setReviewCurrentIndex(0);
      setReviewIsCompleted(false);
      setInMapWorkspace(true);
    },
    []
  );

  const isMapInPlayTrivia =
    inMapWorkspace &&
    workspaceMode === 'play' &&
    (workspaceTopic !== 'countries' || countryPlayKind === 'trivia');

  const isMapInReview =
    inMapWorkspace &&
    workspaceMode === 'play' &&
    workspaceTopic === 'countries' &&
    countryPlayKind === 'review';

  return (
    <div className="relative w-screen h-dvh flex flex-col bg-slate-950 text-white overflow-hidden font-sans">
      {/* GAME TITLE SCREEN & SUBMENUS */}
      {!inMapWorkspace && (
        <GameMenuStage
          menuView={menuView}
          currentLang={currentLang}
          countries={countries}
          soundEnabled={soundEnabled}
          shouldAnimateIntro={!hasPlayedIntro && menuView === 'main'}
          onIntroCompleted={() => setHasPlayedIntro(true)}
          onToggleSound={() =>
            setSoundEnabled((prev) => {
              if (prev) stopSpeaking();
              return !prev;
            })
          }
          onToggleLang={handleToggleLang}
          onChangeMenuView={handleChangeMenuView}
          onSelectExploreTopic={handleSelectExploreTopic}
          onSelectPlayTopic={handleSelectPlayTopic}
          onOpenLearnModal={handleOpenLearnModal}
          onStartLearnEvaluation={handleOpenEvaluation}
          onOpenCountryOnMap={handleOpenCountryFromLearn}
          onStartCountryReview={handleStartCountryReviewFromLearn}
        />
      )}

      {/* INTERACTIVE MAP WORKSPACE (EXPLORAR O JUGAR) */}
      {inMapWorkspace && (
        <div className="relative w-full h-full flex flex-col overflow-hidden bg-slate-950">
          <MapWorkspaceBar
            currentLang={currentLang}
            mode={workspaceMode}
            topic={workspaceTopic}
            currentLens={currentLens}
            onChangeLens={setCurrentLens}
            onGoHome={() => {
              stopSpeaking();
              resetMapVisuals('political');
              setInMapWorkspace(false);
              setMenuView('main');
            }}
            onBack={() => {
              stopSpeaking();
              resetMapVisuals('political');
              setInMapWorkspace(false);
              setMenuView(workspaceMode === 'explore' ? 'explore' : 'play');
            }}
            onToggleLang={handleToggleLang}
            soundEnabled={soundEnabled}
            onToggleSound={() =>
              setSoundEnabled((prev) => {
                if (prev) stopSpeaking();
                return !prev;
              })
            }
            countryPlayKind={countryPlayKind}
            onChangeCountryPlayKind={(kind) => {
              setCountryPlayKind(kind);
              setSelectedCountry(null);
              setIsDossierOpen(false);
              setHighlightedIso2(null);
              setShakeIso2(null);
              if (kind === 'trivia') {
                setCurrentLens('political');
                setTriviaQuestion(null);
                setTriviaIsAnswered(false);
                setTriviaIsCorrect(null);
              } else {
                setReviewQueue([]);
                setReviewCurrentIndex(0);
                setReviewIsCompleted(false);
              }
            }}
            onJumpToContinent={handleJumpToContinent}
          />

          <main className="relative flex-1 w-full h-full overflow-hidden">
            <Suspense
              fallback={
                <div className="w-full h-full bg-slate-950 flex flex-col items-center justify-center gap-3 text-slate-200">
                  <div className="w-10 h-10 rounded-full border-4 border-sky-400/30 border-t-sky-400 animate-spin" />
                  <p className="text-sm font-semibold">
                    {currentLang === 'es' ? 'Cargando mapa mundial...' : 'Loading world map...'}
                  </p>
                </div>
              }
            >
              <LeafletMap
                currentLens={currentLens}
                currentMode="explore"
                currentLang={currentLang}
                countries={countries}
                selectedCountry={selectedCountry}
                onSelectCountry={(c) => {
                  if (workspaceMode === 'play' && workspaceTopic === 'countries' && countryPlayKind === 'trivia') {
                    if (c) handleTriviaAnswer(c.id, c);
                  } else if (workspaceMode === 'play' && workspaceTopic === 'countries' && countryPlayKind === 'review') {
                    // Review mode only allows zoom/pan
                  } else if (workspaceTopic === 'countries') {
                    handleSelectCountry(c);
                  }
                }}
                onFlyToFeature={handleFlyToFeature}
                flyToCoords={flyToCoords}
                flyToZoom={flyToZoom}
                highlightedIso2={highlightedIso2}
                shakeIso2={shakeIso2}
                activeFeatureBadge={activeFeatureBadge}
                currentLevel={4}
                isPlayMode={workspaceMode === 'play'}
                isTriviaMode={isMapInPlayTrivia}
                triviaFlavor={triviaFlavor}
                onTriviaMapClick={(targetId, country) => handleTriviaAnswer(targetId, country)}
                isReviewMode={isMapInReview}
                reviewCountry={
                  isMapInReview && reviewQueue.length > 0 && !reviewIsCompleted
                    ? reviewQueue[reviewCurrentIndex] || null
                    : null
                }
                reviewTopic={reviewTopic}
                topicItems={activeTopicItems}
                topicMode={workspaceMode}
                selectedTopicItemId={selectedTopicItem?.id || null}
                foundTopicItemIds={topicGameFoundIds}
                revealedTopicItemId={topicGameRevealedId}
                onClickTopicItem={handleClickTopicItem}
              />
            </Suspense>

            {/* Floating Panel: EXPLORAR Continentes / Océanos / Mares / Polos */}
            {workspaceMode === 'explore' && workspaceTopic !== 'countries' && activeTopicItems && (
              <TopicExplorePanel
                topic={workspaceTopic}
                items={activeTopicItems}
                selectedItem={selectedTopicItem}
                currentLang={currentLang}
                onSelectItem={(item) => {
                  setSelectedTopicItem(item);
                  setFlyToCoords([...item.coords]);
                  setFlyToZoom(item.zoom);
                  speakGeoName(
                    currentLang === 'es' ? item.name_es : item.name_en,
                    currentLang,
                    soundEnabled
                  );
                }}
                onBackToList={() => {
                  setSelectedTopicItem(null);
                  setFlyToCoords([15, 0]);
                  setFlyToZoom(2);
                }}
              />
            )}

            {/* Floating Panel: JUGAR Continentes / Océanos / Mares / Polos */}
            {workspaceMode === 'play' && workspaceTopic !== 'countries' && (
              <TopicGamePanel
                topic={workspaceTopic}
                currentLang={currentLang}
                targetItem={currentGameTarget}
                questionIndex={topicGameIndex}
                totalQuestions={topicGameQueue.length}
                score={topicGameScore}
                streak={topicGameStreak}
                attempt={topicGameAttempt}
                isAnswered={topicGameAnswered}
                isCorrect={topicGameCorrect}
                lastWrongName={topicGameLastWrong}
                isFinished={topicGameFinished}
                onNextQuestion={handleNextTopicQuestion}
                onRestart={() => startTopicGame(workspaceTopic)}
                onBackToPlayMenu={() => {
                  resetMapVisuals('political');
                  setInMapWorkspace(false);
                  setMenuView('play');
                }}
              />
            )}

            {/* Floating Panel: JUGAR Países -> Trivia */}
            {workspaceMode === 'play' && workspaceTopic === 'countries' && countryPlayKind === 'trivia' && (
              <PlayTriviaPanel
                currentLang={currentLang}
                selectedContinentId={triviaContinentId}
                selectedFlavor={triviaFlavor}
                onSelectContinent={setTriviaContinentId}
                onSelectFlavor={setTriviaFlavor}
                onStartTrivia={handleTriviaStartSession}
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
                onCloseToExplore={() => handleSelectExploreTopic('countries')}
                onViewCountryDossier={(targetId) => {
                  const c = countries.find(
                    (item) =>
                      item.id === targetId ||
                      item.iso2.toLowerCase() === targetId.toLowerCase()
                  );
                  if (c) {
                    setSelectedCountry(c);
                    setIsDossierOpen(true);
                  }
                }}
              />
            )}

            {/* Floating Panel: JUGAR Países -> Repaso */}
            {workspaceMode === 'play' && workspaceTopic === 'countries' && countryPlayKind === 'review' && (
              <PlayReviewPanel
                currentLang={currentLang}
                selectedContinentId={reviewContinentId}
                selectedTopic={reviewTopic}
                onSelectContinent={setReviewContinentId}
                onSelectTopic={setReviewTopic}
                onStartReview={handleStartReview}
                onResetReview={handleResetReview}
                onCloseToExplore={() => handleSelectExploreTopic('countries')}
                currentCountry={
                  reviewQueue.length > 0 && reviewCurrentIndex < reviewQueue.length
                    ? reviewQueue[reviewCurrentIndex]
                    : null
                }
                currentIndex={reviewCurrentIndex}
                totalCountries={reviewQueue.length}
                isCompleted={reviewIsCompleted}
                onNextCountry={handleNextReviewCountry}
                onPreviousCountry={handlePreviousReviewCountry}
                onRecenterMap={handleRecenterReviewMap}
                onRestartSameReview={handleRestartSameReview}
                isBehind={isDossierOpen}
              />
            )}

            {/* Country Dossier Drawer (Explore Countries or when requested from Trivia) */}
            {(workspaceTopic === 'countries' && (workspaceMode === 'explore' || isDossierOpen)) && (
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
                onChangeLens={setCurrentLens}
              />
            )}
          </main>
        </div>
      )}

      {/* LEARNING MODALS (APRENDER -> FUNDAMENTOS & AUTOEVALUACIONES) */}
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

      <Level3ContinentsOceansModal
        isOpen={isLevel3LearnOpen}
        onClose={() => setIsLevel3LearnOpen(false)}
        onStartEvaluation={() => {
          setIsLevel3LearnOpen(false);
          handleOpenEvaluation(3);
        }}
        onFlyToOceanSea={(coords, zoom, name, lens) => {
          setIsLevel3LearnOpen(false);
          setWorkspaceMode('explore');
          setWorkspaceTopic('oceans');
          setCurrentLens(lens);
          setInMapWorkspace(true);
          setFlyToCoords(coords);
          setFlyToZoom(zoom);
          speakGeoName(name, currentLang, soundEnabled);
        }}
        onChangeLens={setCurrentLens}
        currentLang={currentLang}
      />

      {activeEvaluation.isOpen && (
        <LevelEvaluationEngine
          questions={activeEvaluation.questions}
          levelNumber={activeEvaluation.levelNumber}
          levelTitle={activeEvaluation.levelTitle}
          currentLang={currentLang}
          onComplete={() => {
            // Evaluation summary is shown inside LevelEvaluationEngine itself
          }}
          onClose={() => setActiveEvaluation((prev) => ({ ...prev, isOpen: false }))}
          onSwitchToLearnMode={() => {
            const lvl = activeEvaluation.levelNumber as PedagogicalLevel;
            setActiveEvaluation((prev) => ({ ...prev, isOpen: false }));
            if (lvl <= 3) handleOpenLearnModal(lvl);
          }}
        />
      )}
    </div>
  );
}
