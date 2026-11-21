import React, { useState, useMemo, useEffect } from 'react';
import { CountryDossierData, Language } from '../types/geography';
import { ExplorePlayTopic } from '../data/polesData';
import { ContinentId } from '../types/progression';
import {
  Compass,
  Gamepad2,
  BookOpen,
  Globe2,
  Flag,
  Waves,
  Anchor,
  Snowflake,
  Layers,
  Mountain,
  ArrowLeft,
  Volume2,
  VolumeX,
  Trophy,
  MapPin,
} from 'lucide-react';
import { playHoverSound, playSelectSound, playBackSound } from '../utils/gameAudio';
import GAME_BG_IMG from '../assets/images/game_title_world_bg_1795287459340.jpg';

export type GameMenuView =
  | 'main'
  | 'explore'
  | 'play'
  | 'learn'
  | 'learn_fundamentals'
  | 'learn_countries';

interface GameMenuStageProps {
  menuView: GameMenuView;
  currentLang: Language;
  countries: CountryDossierData[];
  soundEnabled: boolean;
  shouldAnimateIntro: boolean;
  onIntroCompleted: () => void;
  onToggleSound: () => void;
  onToggleLang: () => void;
  onChangeMenuView: (view: GameMenuView) => void;
  onSelectExploreTopic: (topic: ExplorePlayTopic) => void;
  onSelectPlayTopic: (topic: ExplorePlayTopic) => void;
  onOpenLearnModal: (level: 1 | 2 | 3) => void;
  onStartLearnEvaluation: (level: 1 | 2 | 3 | 4, continent?: ContinentId) => void;
  onOpenCountryOnMap: (country: CountryDossierData) => void;
  onStartCountryReview: (continentId: string) => void;
}

interface GameButtonDef {
  id: string;
  label: string;
  tooltip: string;
  icon: React.ReactNode;
  themeClass: string;
  onClick: () => void;
}

const CONTINENT_TABS: { id: ContinentId; es: string; en: string }[] = [
  { id: 'South America', es: 'América del Sur', en: 'South America' },
  { id: 'North America', es: 'América del Norte', en: 'North America' },
  { id: 'Europe', es: 'Europa', en: 'Europe' },
  { id: 'Asia', es: 'Asia', en: 'Asia' },
  { id: 'Africa', es: 'África', en: 'Africa' },
  { id: 'Oceania', es: 'Oceanía', en: 'Oceania' },
];

export const GameMenuStage: React.FC<GameMenuStageProps> = ({
  menuView,
  currentLang,
  countries,
  soundEnabled,
  shouldAnimateIntro,
  onIntroCompleted,
  onToggleSound,
  onToggleLang,
  onChangeMenuView,
  onSelectExploreTopic,
  onSelectPlayTopic,
  onOpenLearnModal,
  onStartLearnEvaluation,
  onOpenCountryOnMap,
  onStartCountryReview,
}) => {
  const isEs = currentLang === 'es';
  const [hoveredTip, setHoveredTip] = useState<{ title: string; text: string } | null>(null);
  const [bgFailed, setBgFailed] = useState(false);
  const [selectedContinent, setSelectedContinent] = useState<ContinentId>('South America');

  // Clear hover tooltip whenever menu view switches
  useEffect(() => {
    setHoveredTip(null);
  }, [menuView]);

  // Mark intro as completed after entrance animation finishes
  useEffect(() => {
    if (!shouldAnimateIntro) return;
    const timer = window.setTimeout(() => {
      onIntroCompleted();
    }, 1150);
    return () => window.clearTimeout(timer);
  }, [shouldAnimateIntro, onIntroCompleted]);

  const continentCountries = useMemo(
    () =>
      countries
        .filter((c) => c.continent === selectedContinent)
        .sort((a, b) => (isEs ? a.name_es.localeCompare(b.name_es) : a.name_en.localeCompare(b.name_en))),
    [countries, selectedContinent, isEs]
  );

  // Main menu 3 buttons: Explorar, Jugar, Aprender (clean labels, zero text clutter inside)
  const mainButtons: GameButtonDef[] = [
    {
      id: 'explore',
      label: isEs ? 'Explorar' : 'Explore',
      tooltip: isEs
        ? 'Recorre libremente el mapa mundial: continentes, países, océanos, mares y polos.'
        : 'Freely roam the world map: continents, countries, oceans, seas, and poles.',
      icon: <Compass className="w-6 h-6 sm:w-7 sm:h-7" />,
      themeClass:
        'bg-gradient-to-b from-sky-400 to-sky-600 border-b-4 border-sky-800 hover:brightness-110 text-white shadow-[0_10px_28px_rgba(14,165,233,0.4)]',
      onClick: () => {
        playSelectSound(soundEnabled);
        onChangeMenuView('explore');
      },
    },
    {
      id: 'play',
      label: isEs ? 'Jugar' : 'Play',
      tooltip: isEs
        ? 'Desafía tu memoria buscando continentes, países, océanos, mares y polos en el mapa.'
        : 'Test your geography skills by finding continents, countries, oceans, seas, and poles.',
      icon: <Gamepad2 className="w-6 h-6 sm:w-7 sm:h-7" />,
      themeClass:
        'bg-gradient-to-b from-amber-300 to-amber-500 border-b-4 border-amber-700 hover:brightness-105 text-slate-950 shadow-[0_10px_28px_rgba(245,158,11,0.45)]',
      onClick: () => {
        playSelectSound(soundEnabled);
        onChangeMenuView('play');
      },
    },
    {
      id: 'learn',
      label: isEs ? 'Aprender' : 'Learn',
      tooltip: isEs
        ? 'Descubre los fundamentos de la geografía y repasa los países con guías visuales.'
        : 'Master geography fundamentals and explore countries with clear visual guides.',
      icon: <BookOpen className="w-6 h-6 sm:w-7 sm:h-7" />,
      themeClass:
        'bg-gradient-to-b from-emerald-400 to-emerald-600 border-b-4 border-emerald-800 hover:brightness-110 text-white shadow-[0_10px_28px_rgba(16,185,129,0.4)]',
      onClick: () => {
        playSelectSound(soundEnabled);
        onChangeMenuView('learn');
      },
    },
  ];

  // 5 topics shared by Explorar and Jugar
  const buildFiveTopicButtons = (mode: 'explore' | 'play'): GameButtonDef[] => {
    const isPlay = mode === 'play';
    const onPick = (topic: ExplorePlayTopic) => {
      playSelectSound(soundEnabled);
      if (isPlay) onSelectPlayTopic(topic);
      else onSelectExploreTopic(topic);
    };

    return [
      {
        id: 'continents',
        label: isEs ? 'Continentes' : 'Continents',
        tooltip: isPlay
          ? isEs
            ? 'Encuentra los 7 continentes en el mapa y gana puntos con cada acierto.'
            : 'Spot all 7 continents on the map and earn points for every right answer.'
          : isEs
          ? 'Viaja por los 7 continentes y conoce sus datos más sorprendentes.'
          : 'Travel across all 7 continents and discover surprising facts about each one.',
        icon: <Globe2 className="w-6 h-6" />,
        themeClass:
          'bg-gradient-to-b from-emerald-400 to-emerald-600 border-b-4 border-emerald-800 hover:brightness-110 text-white shadow-lg',
        onClick: () => onPick('continents'),
      },
      {
        id: 'countries',
        label: isEs ? 'Países' : 'Countries',
        tooltip: isPlay
          ? isEs
            ? 'Juega Trivia o Repaso guiado con países, capitales y banderas de cada continente.'
            : 'Play Trivia or Guided Review with countries, capitals, and flags by continent.'
          : isEs
          ? 'Toca cualquier país del mundo para ver su bandera, capital, relieve y curiosidades.'
          : 'Tap any country on Earth to see its flag, capital, landforms, and fun facts.',
        icon: <Flag className="w-6 h-6" />,
        themeClass:
          'bg-gradient-to-b from-amber-300 to-amber-500 border-b-4 border-amber-700 hover:brightness-105 text-slate-950 shadow-lg',
        onClick: () => onPick('countries'),
      },
      {
        id: 'oceans',
        label: isEs ? 'Océanos' : 'Oceans',
        tooltip: isPlay
          ? isEs
            ? 'Ubica los 5 grandes océanos del planeta antes de agotar tus intentos.'
            : 'Locate all 5 great oceans on Earth before running out of tries.'
          : isEs
          ? 'Navega por los 5 océanos y descubre qué hace único a cada uno.'
          : 'Sail across the 5 oceans and learn what makes each one special.',
        icon: <Waves className="w-6 h-6" />,
        themeClass:
          'bg-gradient-to-b from-sky-400 to-blue-600 border-b-4 border-blue-800 hover:brightness-110 text-white shadow-lg',
        onClick: () => onPick('oceans'),
      },
      {
        id: 'seas',
        label: isEs ? 'Mares' : 'Seas',
        tooltip: isPlay
          ? isEs
            ? 'Pon a prueba tu brújula localizando 9 mares famosos alrededor del mundo.'
            : 'Put your compass to the test by finding 9 famous seas around the globe.'
          : isEs
          ? 'Explora 9 mares importantes como el Caribe, el Mediterráneo y el Mar Rojo.'
          : 'Explore 9 major seas including the Caribbean, Mediterranean, and Red Sea.',
        icon: <Anchor className="w-6 h-6" />,
        themeClass:
          'bg-gradient-to-b from-teal-400 to-teal-600 border-b-4 border-teal-800 hover:brightness-110 text-white shadow-lg',
        onClick: () => onPick('seas'),
      },
      {
        id: 'poles',
        label: isEs ? 'Polos' : 'Poles',
        tooltip: isPlay
          ? isEs
            ? 'Supera el reto polar encontrando el Polo Norte, el Polo Sur y regiones heladas.'
            : 'Beat the polar challenge by locating the North Pole, South Pole, and icy regions.'
          : isEs
          ? 'Descubre el Ártico, la Antártida, Groenlandia y los círculos polares.'
          : 'Discover the Arctic, Antarctica, Greenland, and the polar circles.',
        icon: <Snowflake className="w-6 h-6" />,
        themeClass:
          'bg-gradient-to-b from-indigo-400 to-indigo-600 border-b-4 border-indigo-800 hover:brightness-110 text-white shadow-lg',
        onClick: () => onPick('poles'),
      },
    ];
  };

  // Aprender: 2 areas (Fundamentos, Países)
  const learnAreaButtons: GameButtonDef[] = [
    {
      id: 'fundamentals',
      label: isEs ? 'Fundamentos' : 'Fundamentals',
      tooltip: isEs
        ? 'Aprende cómo leer mapas, reconocer montañas y ríos, y distinguir continentes y océanos.'
        : 'Learn how to read maps, spot mountains and rivers, and identify continents and oceans.',
      icon: <Layers className="w-6 h-6 sm:w-7 sm:h-7" />,
      themeClass:
        'bg-gradient-to-b from-sky-400 to-sky-600 border-b-4 border-sky-800 hover:brightness-110 text-white shadow-xl',
      onClick: () => {
        playSelectSound(soundEnabled);
        onChangeMenuView('learn_fundamentals');
      },
    },
    {
      id: 'countries_area',
      label: isEs ? 'Países' : 'Countries',
      tooltip: isEs
        ? 'Consulta banderas y capitales por continente, ábrelos en el mapa o inicia un repaso.'
        : 'Browse flags and capitals by continent, open them on the map, or launch a review.',
      icon: <Flag className="w-6 h-6 sm:w-7 sm:h-7" />,
      themeClass:
        'bg-gradient-to-b from-emerald-400 to-emerald-600 border-b-4 border-emerald-800 hover:brightness-110 text-white shadow-xl',
      onClick: () => {
        playSelectSound(soundEnabled);
        onChangeMenuView('learn_countries');
      },
    },
  ];

  // Fundamentos: 3 clean visual lessons
  const fundamentalsButtons: GameButtonDef[] = [
    {
      id: 'lesson_maps',
      label: isEs ? 'Tipos de Mapas' : 'Map Types',
      tooltip: isEs
        ? 'Aprende la diferencia entre mapa político, relieve físico y vista satelital.'
        : 'Learn the difference between political, physical relief, and satellite maps.',
      icon: <Layers className="w-6 h-6" />,
      themeClass:
        'bg-gradient-to-b from-sky-400 to-sky-600 border-b-4 border-sky-800 hover:brightness-110 text-white shadow-lg',
      onClick: () => {
        playSelectSound(soundEnabled);
        onOpenLearnModal(1);
      },
    },
    {
      id: 'lesson_landforms',
      label: isEs ? 'Relieve' : 'Landforms',
      tooltip: isEs
        ? 'Conoce cordilleras, penínsulas, islas, estrechos, ríos y desiertos en el planeta.'
        : 'Discover mountain ranges, peninsulas, islands, straits, rivers, and deserts.',
      icon: <Mountain className="w-6 h-6" />,
      themeClass:
        'bg-gradient-to-b from-amber-300 to-amber-500 border-b-4 border-amber-700 hover:brightness-105 text-slate-950 shadow-lg',
      onClick: () => {
        playSelectSound(soundEnabled);
        onOpenLearnModal(2);
      },
    },
    {
      id: 'lesson_continents',
      label: isEs ? 'Continentes y Océanos' : 'Continents & Oceans',
      tooltip: isEs
        ? 'Domina la ubicación y características de los continentes y las grandes masas de agua.'
        : 'Master the locations and features of continents and major bodies of water.',
      icon: <Globe2 className="w-6 h-6" />,
      themeClass:
        'bg-gradient-to-b from-emerald-400 to-emerald-600 border-b-4 border-emerald-800 hover:brightness-110 text-white shadow-lg',
      onClick: () => {
        playSelectSound(soundEnabled);
        onOpenLearnModal(3);
      },
    },
  ];

  const handleBack = () => {
    playBackSound(soundEnabled);
    if (menuView === 'learn_fundamentals' || menuView === 'learn_countries') {
      onChangeMenuView('learn');
    } else {
      onChangeMenuView('main');
    }
  };

  const renderButtonRow = (buttons: GameButtonDef[], staggerBaseMs = 0) => (
    <div
      className={`w-full flex flex-wrap items-center justify-center gap-3 sm:gap-4 ${
        buttons.length <= 3 ? 'max-w-3xl' : 'max-w-4xl'
      }`}
    >
      {buttons.map((btn, idx) => {
        const useIntroPop = shouldAnimateIntro && menuView === 'main';
        return (
          <button
            key={btn.id}
            type="button"
            onClick={btn.onClick}
            onMouseEnter={() => {
              playHoverSound(soundEnabled);
              setHoveredTip({ title: btn.label, text: btn.tooltip });
            }}
            onMouseLeave={() => setHoveredTip(null)}
            onFocus={() => setHoveredTip({ title: btn.label, text: btn.tooltip })}
            onBlur={() => setHoveredTip(null)}
            style={
              useIntroPop
                ? { animationDelay: `${staggerBaseMs + idx * 110}ms` }
                : undefined
            }
            className={`group relative inline-flex items-center justify-center gap-2.5 sm:gap-3 px-5 sm:px-7 py-3.5 sm:py-4 rounded-2xl font-display font-extrabold text-base sm:text-xl tracking-tight whitespace-nowrap cursor-pointer transition-all duration-150 hover:-translate-y-1 active:translate-y-0.5 active:border-b-2 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-amber-300 ${
              buttons.length <= 3 ? 'min-w-[148px] sm:min-w-[190px]' : 'min-w-[136px] sm:min-w-[158px]'
            } ${btn.themeClass} ${useIntroPop ? 'animate-game-btn' : ''}`}
          >
            <span className="transition-transform duration-150 group-hover:scale-110 shrink-0">
              {btn.icon}
            </span>
            <span>{btn.label}</span>
          </button>
        );
      })}
    </div>
  );

  const sectionHeading =
    menuView === 'explore'
      ? isEs
        ? 'Explorar'
        : 'Explore'
      : menuView === 'play'
      ? isEs
        ? 'Jugar'
        : 'Play'
      : menuView === 'learn'
      ? isEs
        ? 'Aprender'
        : 'Learn'
      : menuView === 'learn_fundamentals'
      ? isEs
        ? 'Fundamentos'
        : 'Fundamentals'
      : isEs
      ? 'Países del Mundo'
      : 'Countries of the World';

  const defaultHintText =
    menuView === 'main'
      ? isEs
        ? 'Pasa el cursor sobre una opción para ver qué hace.'
        : 'Hover over an option to see what it does.'
      : menuView === 'explore'
      ? isEs
        ? 'Elige qué parte del planeta quieres explorar hoy.'
        : 'Pick which part of the planet you want to explore.'
      : menuView === 'play'
      ? isEs
        ? 'Elige un desafío en el mapa para empezar a jugar.'
        : 'Choose a map challenge to start playing.'
      : menuView === 'learn'
      ? isEs
        ? 'Elige un área para empezar a aprender.'
        : 'Choose an area to start learning.'
      : isEs
      ? 'Elige una lección visual o haz clic en su quiz.'
      : 'Pick a visual lesson or launch its quiz.';

  return (
    <div className="relative h-dvh w-screen overflow-hidden bg-slate-950 text-white select-none flex flex-col">
      {/* FULL-BLEED GAME WORLD BACKDROP */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {!bgFailed ? (
          <img
            src={GAME_BG_IMG}
            alt={isEs ? 'Escenario ilustrado del planeta Tierra' : 'Illustrated planet Earth game scene'}
            referrerPolicy="no-referrer"
            onError={() => setBgFailed(true)}
            className={`w-full h-full object-cover object-center ${
              shouldAnimateIntro ? 'animate-game-bg-reveal' : 'animate-game-bg-drift'
            }`}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-b from-slate-900 via-sky-950 to-slate-950" />
        )}
        {/* Measured scrim: keeps globe luminous while giving crisp contrast to title & lower buttons */}
        <div
          className="absolute inset-0"
          style={{
            background:
              menuView === 'learn_countries'
                ? 'linear-gradient(180deg, rgba(6,16,36,0.72) 0%, rgba(6,16,36,0.78) 100%)'
                : 'linear-gradient(180deg, rgba(6,16,36,0.58) 0%, rgba(6,16,36,0.12) 38%, rgba(6,16,36,0.22) 56%, rgba(6,16,36,0.86) 100%)',
          }}
        />
      </div>

      {/* TOP FLOATING GAME HUD (MINIMAL) */}
      <header className="relative z-20 w-full px-4 sm:px-6 pt-3 sm:pt-4 flex items-center justify-between gap-4 shrink-0">
        <div>
          {menuView !== 'main' && (
            <button
              type="button"
              onClick={handleBack}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-950/70 hover:bg-slate-900/90 backdrop-blur-md border border-white/20 text-white font-bold text-sm transition-all active:scale-95 whitespace-nowrap cursor-pointer shadow-lg"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>
                {menuView === 'learn_fundamentals' || menuView === 'learn_countries'
                  ? isEs
                    ? 'Volver'
                    : 'Back'
                  : isEs
                  ? 'Menú'
                  : 'Menu'}
              </span>
            </button>
          )}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleSound}
            aria-label={soundEnabled ? (isEs ? 'Silenciar sonidos' : 'Mute sounds') : isEs ? 'Activar sonidos' : 'Enable sounds'}
            title={soundEnabled ? (isEs ? 'Sonido activado' : 'Sound on') : isEs ? 'Sonido silenciado' : 'Sound muted'}
            className="p-2.5 rounded-xl bg-slate-950/70 hover:bg-slate-900/90 backdrop-blur-md border border-white/20 text-white transition-all active:scale-95 cursor-pointer shadow-lg"
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-amber-300" /> : <VolumeX className="w-4 h-4 text-slate-400" />}
          </button>

          <button
            type="button"
            onClick={() => {
              playHoverSound(soundEnabled);
              onToggleLang();
            }}
            className="px-3.5 py-2 rounded-xl bg-slate-950/70 hover:bg-slate-900/90 backdrop-blur-md border border-white/20 text-white font-bold text-xs sm:text-sm tracking-wide transition-all active:scale-95 whitespace-nowrap cursor-pointer shadow-lg"
          >
            {isEs ? 'ES / EN' : 'EN / ES'}
          </button>
        </div>
      </header>

      {/* CENTER & LOWER STAGE: TITLE SCREEN / SUBMENUS */}
      {menuView !== 'learn_countries' ? (
        <main className="relative z-10 flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 pb-5 sm:pb-8 flex flex-col items-center justify-between">
          {/* TOP TITLE EMBLEM (Leaves the illustrated globe visible in the middle!) */}
          <div className="flex flex-col items-center text-center pt-1 sm:pt-3">
            {menuView === 'main' ? (
              <>
                <div
                  className={`w-11 h-11 sm:w-13 sm:h-13 rounded-2xl bg-amber-400/20 border border-amber-300/50 backdrop-blur-md flex items-center justify-center shadow-[0_0_24px_rgba(251,191,36,0.35)] mb-2 ${
                    shouldAnimateIntro ? 'animate-game-compass' : ''
                  }`}
                >
                  <Compass className="w-6 h-6 sm:w-7 sm:h-7 text-amber-300" />
                </div>
                <h1
                  className={`font-display font-extrabold tracking-tight text-white drop-shadow-[0_4px_18px_rgba(2,6,23,0.9)] leading-none ${
                    shouldAnimateIntro ? 'animate-game-title' : ''
                  }`}
                  style={{ fontSize: 'clamp(2.1rem, 5.2vw, 4rem)', textWrap: 'balance' }}
                >
                  {isEs ? 'Aprendiendo el Mundo' : 'Learning the World'}
                </h1>
              </>
            ) : (
              <div className="animate-game-submenu flex flex-col items-center">
                <p className="text-xs sm:text-sm font-semibold text-amber-300/90 drop-shadow">
                  {isEs ? 'Aprendiendo el Mundo' : 'Learning the World'}
                </p>
                <h1
                  className="font-display font-extrabold tracking-tight text-white drop-shadow-[0_4px_18px_rgba(2,6,23,0.9)] leading-tight mt-0.5"
                  style={{ fontSize: 'clamp(1.9rem, 4.4vw, 3.2rem)' }}
                >
                  {sectionHeading}
                </h1>
              </div>
            )}
          </div>

          {/* BOTTOM ACTION DECK + HOVER TOOLTIP RIBBON */}
          <div className="w-full flex flex-col items-center gap-3.5 sm:gap-4 pb-1 sm:pb-2">
            {menuView === 'main' && renderButtonRow(mainButtons, 380)}

            {menuView === 'explore' && (
              <div className="w-full flex justify-center animate-game-submenu">
                {renderButtonRow(buildFiveTopicButtons('explore'))}
              </div>
            )}

            {menuView === 'play' && (
              <div className="w-full flex justify-center animate-game-submenu">
                {renderButtonRow(buildFiveTopicButtons('play'))}
              </div>
            )}

            {menuView === 'learn' && (
              <div className="w-full flex justify-center animate-game-submenu">
                {renderButtonRow(learnAreaButtons)}
              </div>
            )}

            {menuView === 'learn_fundamentals' && (
              <div className="w-full flex flex-col items-center gap-3 animate-game-submenu">
                {renderButtonRow(fundamentalsButtons)}
                <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
                  {([1, 2, 3] as const).map((lvl) => {
                    const labels = {
                      1: isEs ? 'Quiz: Mapas' : 'Quiz: Maps',
                      2: isEs ? 'Quiz: Relieve' : 'Quiz: Landforms',
                      3: isEs ? 'Quiz: Continentes' : 'Quiz: Continents',
                    };
                    const tips = {
                      1: isEs
                        ? 'Evalúa lo que aprendiste sobre tipos de mapas.'
                        : 'Test what you learned about map types.',
                      2: isEs
                        ? 'Pon a prueba tus conocimientos sobre accidentes geográficos.'
                        : 'Test your knowledge of landforms and relief.',
                      3: isEs
                        ? 'Responde preguntas rápidas sobre continentes y océanos.'
                        : 'Answer quick questions about continents and oceans.',
                    };
                    return (
                      <button
                        key={lvl}
                        type="button"
                        onClick={() => {
                          playSelectSound(soundEnabled);
                          onStartLearnEvaluation(lvl);
                        }}
                        onMouseEnter={() => {
                          playHoverSound(soundEnabled);
                          setHoveredTip({ title: labels[lvl], text: tips[lvl] });
                        }}
                        onMouseLeave={() => setHoveredTip(null)}
                        onFocus={() => setHoveredTip({ title: labels[lvl], text: tips[lvl] })}
                        onBlur={() => setHoveredTip(null)}
                        className="px-3.5 py-1.5 rounded-xl bg-slate-900/75 hover:bg-slate-800/90 border border-white/20 text-amber-200 hover:text-amber-100 text-xs sm:text-sm font-bold inline-flex items-center gap-1.5 transition-colors whitespace-nowrap cursor-pointer"
                      >
                        <Trophy className="w-3.5 h-3.5 text-amber-300" />
                        <span>{labels[lvl]}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* HOVER DESCRIPTION BAR — FIXED MIN-HEIGHT SO ZERO LAYOUT SHIFT */}
            <div
              role="status"
              aria-live="polite"
              className="w-full max-w-2xl min-h-[52px] sm:min-h-[56px] px-4 sm:px-6 py-2.5 rounded-2xl bg-slate-950/75 backdrop-blur-md border border-white/15 flex items-center justify-center text-center shadow-xl"
            >
              {hoveredTip ? (
                <p
                  key={hoveredTip.title}
                  className="text-sm sm:text-base text-white font-medium leading-snug animate-game-tooltip"
                >
                  <span className="font-bold text-amber-300 mr-1.5">{hoveredTip.title}:</span>
                  <span>{hoveredTip.text}</span>
                </p>
              ) : (
                <p className="text-xs sm:text-sm text-slate-300/90 font-medium">{defaultHintText}</p>
              )}
            </div>
          </div>
        </main>
      ) : (
        /* APRENDER -> PAÍSES OVERLAY ATLAS (CLEAN GAME PANEL OVER BACKDROP) */
        <main className="relative z-10 flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 pb-4 sm:pb-6 flex flex-col min-h-0 animate-game-submenu">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 shrink-0">
            <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-white drop-shadow">
              {isEs ? 'Aprender · Países' : 'Learn · Countries'}
            </h1>

            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => {
                  playSelectSound(soundEnabled);
                  onStartCountryReview(selectedContinent);
                }}
                className="px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 border-b-2 border-sky-700 text-white font-bold text-xs sm:text-sm inline-flex items-center gap-1.5 transition-all active:translate-y-0.5 whitespace-nowrap cursor-pointer"
              >
                <Compass className="w-4 h-4" />
                <span>{isEs ? 'Repasar en el mapa' : 'Review on Map'}</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  playSelectSound(soundEnabled);
                  onStartLearnEvaluation(4, selectedContinent);
                }}
                className="px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 border-b-2 border-amber-600 text-slate-950 font-bold text-xs sm:text-sm inline-flex items-center gap-1.5 transition-all active:translate-y-0.5 whitespace-nowrap cursor-pointer"
              >
                <Trophy className="w-4 h-4" />
                <span>{isEs ? 'Quiz del continente' : 'Continent Quiz'}</span>
              </button>
            </div>
          </div>

          {/* Continent Selector Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-3 shrink-0">
            {CONTINENT_TABS.map((tab) => {
              const active = selectedContinent === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => {
                    playHoverSound(soundEnabled);
                    setSelectedContinent(tab.id);
                  }}
                  className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer shrink-0 ${
                    active
                      ? 'bg-emerald-500 text-white border-b-2 border-emerald-700 shadow-md'
                      : 'bg-slate-900/75 text-slate-200 hover:bg-slate-800 border border-white/15'
                  }`}
                >
                  {isEs ? tab.es : tab.en}
                </button>
              );
            })}
          </div>

          {/* Scrollable Country Atlas Grid */}
          <div className="flex-1 min-h-0 overflow-y-auto pr-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 touch-scroll">
            {continentCountries.map((country) => (
              <button
                key={country.id}
                type="button"
                onClick={() => {
                  playSelectSound(soundEnabled);
                  onOpenCountryOnMap(country);
                }}
                className="group text-left bg-slate-900/80 hover:bg-slate-800/95 backdrop-blur-md border border-white/15 hover:border-sky-400/70 rounded-2xl p-3 flex items-center gap-3 transition-all cursor-pointer"
              >
                <img
                  src={`https://flagcdn.com/w160/${country.iso2.toLowerCase()}.png`}
                  alt={isEs ? country.name_es : country.name_en}
                  referrerPolicy="no-referrer"
                  className="w-12 h-8 object-cover rounded-lg border border-white/20 shrink-0"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <div className="min-w-0 flex-1">
                  <div className="font-bold text-sm text-white truncate group-hover:text-sky-300 transition-colors">
                    {isEs ? country.name_es : country.name_en}
                  </div>
                  <div className="text-xs text-slate-300 truncate">
                    {isEs ? country.capital_es : country.capital_en}
                  </div>
                </div>
                <MapPin className="w-4 h-4 text-slate-400 group-hover:text-amber-300 shrink-0 transition-colors" />
              </button>
            ))}
          </div>
        </main>
      )}
    </div>
  );
};
