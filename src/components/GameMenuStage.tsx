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
  Music,
  Trophy,
  MapPin,
} from 'lucide-react';
import {
  playHoverSound,
  playSelectSound,
  playBackSound,
  startMenuMusic,
  stopMenuMusic,
  unlockMenuMusic,
  subscribeMenuMusicStatus,
} from '../utils/gameAudio';
import { speakGeoName } from '../utils/speechService';
import { SpinningGlobe } from './SpinningGlobe';

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

// Deterministic twinkling stars for the deep-sky globe backdrop
const BACKDROP_STARS = [
  { left: '6%', top: '12%', size: 2, delay: '0.1s', dur: '3.2s' },
  { left: '14%', top: '28%', size: 3, delay: '1.4s', dur: '4.1s' },
  { left: '22%', top: '10%', size: 2, delay: '2.2s', dur: '3.5s' },
  { left: '31%', top: '20%', size: 2.5, delay: '0.7s', dur: '3.9s' },
  { left: '42%', top: '9%', size: 2, delay: '1.8s', dur: '3.1s' },
  { left: '58%', top: '11%', size: 2.5, delay: '0.4s', dur: '4.0s' },
  { left: '69%', top: '19%', size: 2, delay: '2.5s', dur: '3.4s' },
  { left: '78%', top: '10%', size: 3, delay: '1.1s', dur: '3.8s' },
  { left: '88%', top: '22%', size: 2, delay: '0.2s', dur: '3.3s' },
  { left: '94%', top: '14%', size: 2.5, delay: '1.9s', dur: '4.2s' },
  { left: '9%', top: '48%', size: 2, delay: '2.8s', dur: '3.6s' },
  { left: '18%', top: '62%', size: 2.5, delay: '0.9s', dur: '4.3s' },
  { left: '27%', top: '42%', size: 2, delay: '1.6s', dur: '3.2s' },
  { left: '73%', top: '44%', size: 2.5, delay: '0.5s', dur: '3.7s' },
  { left: '83%', top: '58%', size: 3, delay: '2.1s', dur: '4.0s' },
  { left: '91%', top: '42%', size: 2, delay: '1.2s', dur: '3.5s' },
  { left: '12%', top: '78%', size: 2, delay: '0.6s', dur: '3.9s' },
  { left: '24%', top: '84%', size: 2.5, delay: '2.4s', dur: '3.3s' },
  { left: '77%', top: '76%', size: 2, delay: '1.5s', dur: '4.1s' },
  { left: '89%', top: '82%', size: 2.5, delay: '0.3s', dur: '3.4s' },
  { left: '4%', top: '34%', size: 2, delay: '1.7s', dur: '3.8s' },
  { left: '96%', top: '66%', size: 2, delay: '2.6s', dur: '3.6s' },
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
  const [selectedContinent, setSelectedContinent] = useState<ContinentId>('South America');
  const [musicPlaying, setMusicPlaying] = useState(false);

  // Clear hover tooltip whenever menu view switches
  useEffect(() => {
    setHoveredTip(null);
  }, [menuView]);

  // Subscribe to actual Web Audio music playback state
  useEffect(() => {
    return subscribeMenuMusicStatus(setMusicPlaying);
  }, []);

  // Real orchestral intro music lifecycle: plays ONLY on the main title screen; stops immediately once any option is selected
  const isMainTitle = menuView === 'main';

  useEffect(() => {
    if (isMainTitle && soundEnabled) {
      startMenuMusic();
    } else {
      stopMenuMusic();
    }
    return () => {
      stopMenuMusic();
    };
  }, [isMainTitle, soundEnabled]);

  // Seamless autoplay unlock on first tap/click/key press while on the main title screen
  useEffect(() => {
    if (!isMainTitle || !soundEnabled || musicPlaying) return;
    const handleUnlock = (e: Event) => {
      // If user clicked directly on one of the main menu option buttons, let that option stop intro music cleanly
      const target = e.target as HTMLElement | null;
      if (target?.closest('[data-main-menu-option="true"]')) return;
      unlockMenuMusic();
    };
    window.addEventListener('pointerdown', handleUnlock, { passive: true });
    window.addEventListener('keydown', handleUnlock, { passive: true });
    return () => {
      window.removeEventListener('pointerdown', handleUnlock);
      window.removeEventListener('keydown', handleUnlock);
    };
  }, [isMainTitle, soundEnabled, musicPlaying]);

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
        stopMenuMusic();
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
        stopMenuMusic();
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
        stopMenuMusic();
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
      className={`w-full flex flex-wrap items-center justify-center gap-2 sm:gap-3.5 ${
        buttons.length <= 3 ? 'max-w-3xl' : 'max-w-4xl'
      }`}
    >
      {buttons.map((btn, idx) => {
        const useIntroPop = shouldAnimateIntro && menuView === 'main';
        return (
          <button
            key={btn.id}
            type="button"
            data-main-menu-option={menuView === 'main' ? 'true' : undefined}
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
            className={`group relative inline-flex items-center justify-center gap-2 sm:gap-2.5 px-4 sm:px-6 py-2.5 sm:py-3.5 [@media(max-height:460px)]:py-2 [@media(max-height:460px)]:px-4 rounded-2xl font-display font-extrabold text-sm sm:text-lg lg:text-xl tracking-tight whitespace-nowrap cursor-pointer transition-all duration-150 hover:-translate-y-1 active:translate-y-0.5 active:border-b-2 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-amber-300 ${
              buttons.length <= 3
                ? 'min-w-[126px] sm:min-w-[178px]'
                : 'min-w-[116px] sm:min-w-[152px]'
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

  const handleSoundButtonClick = () => {
    if (isMainTitle && soundEnabled && !musicPlaying) {
      // Browser paused autoplay until first gesture: activate orchestral intro on tap
      unlockMenuMusic();
      return;
    }
    onToggleSound();
  };

  const showTip = (title: string, text: string) => {
    playHoverSound(soundEnabled);
    setHoveredTip({ title, text });
  };
  const clearTip = () => setHoveredTip(null);

  return (
    <div className="relative h-dvh w-screen overflow-hidden bg-[#040d21] text-white select-none flex flex-col">
      {/* DEEP COSMIC ADVENTURE SKY BACKDROP WITH TWINKLING STARS & AURORA */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 80% 70% at 50% 45%, #0c2b59 0%, #071938 46%, #030a1a 100%)',
          }}
        />
        {/* Subtle luminous horizon glow behind the spinning globe */}
        <div
          className="absolute left-1/2 top-[46%] -translate-x-1/2 -translate-y-1/2 w-[min(78vw,720px)] h-[min(78vw,720px)] rounded-full opacity-55"
          style={{
            background:
              'radial-gradient(circle, rgba(56,189,248,0.26) 0%, rgba(16,185,129,0.09) 42%, rgba(2,6,23,0) 72%)',
          }}
        />
        {/* Twinkling starfield */}
        {BACKDROP_STARS.map((star, idx) => (
          <span
            key={idx}
            className="absolute rounded-full bg-sky-100 animate-game-star"
            style={{
              left: star.left,
              top: star.top,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: star.delay,
              animationDuration: star.dur,
              boxShadow: '0 0 6px rgba(186, 230, 253, 0.85)',
            }}
          />
        ))}
        {/* Ambient permanently spinning globe watermark when browsing full country atlas */}
        {menuView === 'learn_countries' && (
          <div className="absolute -right-24 -bottom-24 w-[380px] h-[380px] opacity-25">
            <SpinningGlobe className="w-full h-full" />
          </div>
        )}
      </div>

      {/* TOP FLOATING GAME HUD (MINIMAL) */}
      <header className="relative z-20 w-full px-3 sm:px-6 pt-2 sm:pt-3.5 flex items-center justify-between gap-3 shrink-0">
        <div>
          {menuView !== 'main' && (
            <button
              type="button"
              onClick={handleBack}
              onMouseEnter={() =>
                showTip(
                  menuView === 'learn_fundamentals' || menuView === 'learn_countries'
                    ? isEs
                      ? 'Volver'
                      : 'Back'
                    : isEs
                    ? 'Menú'
                    : 'Menu',
                  isEs
                    ? 'Regresa a la pantalla anterior del menú.'
                    : 'Return to the previous menu screen.'
                )
              }
              onMouseLeave={clearTip}
              onFocus={() =>
                setHoveredTip({
                  title: isEs ? 'Volver' : 'Back',
                  text: isEs ? 'Regresa a la pantalla anterior del menú.' : 'Return to the previous menu screen.',
                })
              }
              onBlur={clearTip}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:py-2 rounded-xl bg-slate-950/75 hover:bg-slate-900/95 backdrop-blur-md border border-white/20 text-white font-bold text-xs sm:text-sm transition-all active:scale-95 whitespace-nowrap cursor-pointer shadow-lg"
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
            onClick={handleSoundButtonClick}
            onMouseEnter={() =>
              showTip(
                isMainTitle ? (isEs ? 'Música y Voz' : 'Music & Voice') : isEs ? 'Voz y Sonido' : 'Voice & Sound',
                !soundEnabled
                  ? isEs
                    ? 'Activa la música orquestal de entrada y la pronunciación en voz alta.'
                    : 'Enable the orchestral intro music and spoken pronunciation.'
                  : isMainTitle && !musicPlaying
                  ? isEs
                    ? 'Inicia la música sinfónica orquestal de introducción.'
                    : 'Start the symphonic orchestral intro music.'
                  : isEs
                  ? 'Silencia el sonido y la pronunciación en voz alta.'
                  : 'Mute sound and spoken pronunciation.'
              )
            }
            onMouseLeave={clearTip}
            onFocus={() =>
              setHoveredTip({
                title: isMainTitle ? (isEs ? 'Música y Voz' : 'Music & Voice') : isEs ? 'Voz y Sonido' : 'Voice & Sound',
                text: isEs
                  ? 'Activa o silencia el audio y la pronunciación en voz alta.'
                  : 'Toggle audio and spoken pronunciation.',
              })
            }
            onBlur={clearTip}
            aria-label={
              !soundEnabled
                ? isEs
                  ? 'Activar sonido'
                  : 'Enable sound'
                : isMainTitle && !musicPlaying
                ? isEs
                  ? 'Iniciar música orquestal'
                  : 'Start orchestral music'
                : isEs
                ? 'Silenciar sonido'
                : 'Mute sound'
            }
            className={`inline-flex items-center gap-2 px-3 py-1.5 sm:py-2 rounded-xl backdrop-blur-md border text-xs sm:text-sm font-bold transition-all active:scale-95 whitespace-nowrap cursor-pointer shadow-lg ${
              !soundEnabled
                ? 'bg-slate-950/70 hover:bg-slate-900/90 border-white/20 text-slate-400'
                : isMainTitle && musicPlaying
                ? 'bg-slate-950/75 hover:bg-slate-900/95 border-amber-300/45 text-amber-200'
                : isMainTitle && !musicPlaying
                ? 'bg-amber-400/20 hover:bg-amber-400/30 border-amber-300/70 text-amber-200 animate-pulse'
                : 'bg-slate-950/75 hover:bg-slate-900/95 border-white/20 text-amber-200'
            }`}
          >
            {!soundEnabled ? (
              <>
                <VolumeX className="w-4 h-4 text-slate-400" />
                <span className="hidden sm:inline">{isEs ? 'Silencio' : 'Muted'}</span>
              </>
            ) : isMainTitle && musicPlaying ? (
              <>
                <span className="inline-flex items-end gap-[2px] h-3.5" aria-hidden="true">
                  <span
                    className="w-[3px] h-full rounded-full bg-amber-300 animate-game-eq"
                    style={{ animationDelay: '0ms' }}
                  />
                  <span
                    className="w-[3px] h-full rounded-full bg-emerald-300 animate-game-eq"
                    style={{ animationDelay: '180ms' }}
                  />
                  <span
                    className="w-[3px] h-full rounded-full bg-sky-300 animate-game-eq"
                    style={{ animationDelay: '340ms' }}
                  />
                </span>
                <span>{isEs ? 'Música' : 'Music'}</span>
              </>
            ) : isMainTitle ? (
              <>
                <Music className="w-4 h-4 text-amber-300" />
                <span>{isEs ? 'Activar música' : 'Play music'}</span>
              </>
            ) : (
              <>
                <Volume2 className="w-4 h-4 text-amber-300" />
                <span className="hidden sm:inline">{isEs ? 'Sonido' : 'Sound'}</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={() => {
              playHoverSound(soundEnabled);
              onToggleLang();
            }}
            onMouseEnter={() =>
              showTip(
                isEs ? 'Idioma' : 'Language',
                isEs
                  ? 'Cambia los textos y la pronunciación entre Español e Inglés.'
                  : 'Switch interface text and spoken pronunciation between Spanish and English.'
              )
            }
            onMouseLeave={clearTip}
            onFocus={() =>
              setHoveredTip({
                title: isEs ? 'Idioma' : 'Language',
                text: isEs
                  ? 'Cambia los textos y la pronunciación entre Español e Inglés.'
                  : 'Switch interface text and spoken pronunciation between Spanish and English.',
              })
            }
            onBlur={clearTip}
            className="px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl bg-slate-950/75 hover:bg-slate-900/95 backdrop-blur-md border border-white/20 text-white font-bold text-xs sm:text-sm tracking-wide transition-all active:scale-95 whitespace-nowrap cursor-pointer shadow-lg"
          >
            {isEs ? 'ES / EN' : 'EN / ES'}
          </button>
        </div>
      </header>

      {/* CENTER & LOWER STAGE: TITLE SCREEN / SUBMENUS */}
      {menuView !== 'learn_countries' ? (
        <main className="relative z-10 flex-1 min-h-0 w-full max-w-5xl mx-auto px-3 sm:px-6 pb-2.5 sm:pb-6 flex flex-col items-center justify-between gap-1.5 sm:gap-2">
          {/* TOP TITLE EMBLEM */}
          <div className="flex flex-col items-center text-center shrink-0">
            {menuView === 'main' ? (
              <div className="flex items-center justify-center gap-2.5 sm:gap-3">
                <div
                  className={`w-9 h-9 sm:w-12 sm:h-12 [@media(max-height:460px)]:w-8 [@media(max-height:460px)]:h-8 rounded-2xl bg-amber-400/20 border border-amber-300/50 backdrop-blur-md flex items-center justify-center shadow-[0_0_24px_rgba(251,191,36,0.35)] shrink-0 ${
                    shouldAnimateIntro ? 'animate-game-compass' : ''
                  }`}
                >
                  <Compass className="w-5 h-5 sm:w-6 sm:h-6 text-amber-300" />
                </div>
                <h1
                  className={`font-display font-extrabold tracking-tight text-white drop-shadow-[0_4px_18px_rgba(2,6,23,0.9)] leading-none ${
                    shouldAnimateIntro ? 'animate-game-title' : ''
                  }`}
                  style={{ fontSize: 'clamp(1.5rem, 4.4vw, 3.6rem)', textWrap: 'balance' }}
                >
                  {isEs ? 'Aprendiendo el Mundo' : 'Learning the World'}
                </h1>
              </div>
            ) : (
              <div className="animate-game-submenu flex flex-col items-center">
                <p className="text-[11px] sm:text-xs font-semibold text-amber-300/90 drop-shadow [@media(max-height:440px)]:hidden">
                  {isEs ? 'Aprendiendo el Mundo' : 'Learning the World'}
                </p>
                <h1
                  className="font-display font-extrabold tracking-tight text-white drop-shadow-[0_4px_18px_rgba(2,6,23,0.9)] leading-tight"
                  style={{ fontSize: 'clamp(1.4rem, 3.8vw, 2.9rem)' }}
                >
                  {sectionHeading}
                </h1>
              </div>
            )}
          </div>

          {/* CENTERPIECE: PERMANENTLY SPINNING 3D EARTH GLOBE */}
          <div
            className={`relative flex-1 min-h-0 flex items-center justify-center w-full ${
              shouldAnimateIntro && menuView === 'main' ? 'animate-game-globe' : ''
            }`}
          >
            <div
              className={
                menuView === 'main'
                  ? 'w-[clamp(118px,38dvh,350px)] h-[clamp(118px,38dvh,350px)]'
                  : 'w-[clamp(96px,27dvh,240px)] h-[clamp(96px,27dvh,240px)]'
              }
            >
              <SpinningGlobe className="w-full h-full" />
            </div>
          </div>

          {/* BOTTOM ACTION DECK + HOVER TOOLTIP RIBBON */}
          <div className="w-full flex flex-col items-center gap-2 sm:gap-3 shrink-0">
            {menuView === 'main' && renderButtonRow(mainButtons, 340)}

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

            {/* HOVER DESCRIPTION BAR — APPEARS ONLY ON HOVER/FOCUS (ZERO IDLE TEXT, ZERO LAYOUT SHIFT) */}
            <div
              role="status"
              aria-live="polite"
              className="w-full max-w-2xl min-h-[40px] sm:min-h-[48px] [@media(max-height:460px)]:min-h-[34px] flex items-center justify-center"
            >
              {hoveredTip && (
                <div
                  key={hoveredTip.title}
                  className="px-4 sm:px-5 py-1.5 sm:py-2 rounded-2xl bg-slate-950/85 backdrop-blur-md border border-amber-300/30 text-center shadow-xl animate-game-tooltip"
                >
                  <p className="text-xs sm:text-sm lg:text-base text-white font-medium leading-snug">
                    <span className="font-bold text-amber-300 mr-1.5">{hoveredTip.title}:</span>
                    <span>{hoveredTip.text}</span>
                  </p>
                </div>
              )}
            </div>
          </div>
        </main>
      ) : (
        /* APRENDER -> PAÍSES OVERLAY ATLAS (CLEAN GAME PANEL OVER BACKDROP) */
        <main className="relative z-10 flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 pb-4 sm:pb-6 flex flex-col min-h-0 animate-game-submenu">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 shrink-0">
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
                onMouseEnter={() =>
                  showTip(
                    isEs ? 'Repasar en el mapa' : 'Review on Map',
                    isEs
                      ? 'Recorre país por país en el mapa escuchando su pronunciación.'
                      : 'Step through each country on the map while hearing its pronunciation.'
                  )
                }
                onMouseLeave={clearTip}
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
                onMouseEnter={() =>
                  showTip(
                    isEs ? 'Quiz del continente' : 'Continent Quiz',
                    isEs
                      ? 'Responde preguntas rápidas para evaluar lo aprendido en este continente.'
                      : 'Answer quick questions to test what you learned about this continent.'
                  )
                }
                onMouseLeave={clearTip}
                className="px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 border-b-2 border-amber-600 text-slate-950 font-bold text-xs sm:text-sm inline-flex items-center gap-1.5 transition-all active:translate-y-0.5 whitespace-nowrap cursor-pointer"
              >
                <Trophy className="w-4 h-4" />
                <span>{isEs ? 'Quiz del continente' : 'Continent Quiz'}</span>
              </button>
            </div>
          </div>

          {/* Floating Hover Tip Bar for Learn Countries Menu (only visible when hovering) */}
          {hoveredTip && (
            <div className="pb-2 shrink-0 flex justify-center">
              <div
                key={hoveredTip.title}
                className="px-3.5 py-1 rounded-xl bg-slate-950/85 backdrop-blur-md border border-amber-300/30 text-xs text-white shadow-lg animate-game-tooltip"
              >
                <span className="font-bold text-amber-300 mr-1.5">{hoveredTip.title}:</span>
                <span>{hoveredTip.text}</span>
              </div>
            </div>
          )}

          {/* Continent Selector Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-3 shrink-0">
            {CONTINENT_TABS.map((tab) => {
              const active = selectedContinent === tab.id;
              const tabName = isEs ? tab.es : tab.en;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => {
                    playHoverSound(soundEnabled);
                    setSelectedContinent(tab.id);
                    speakGeoName(tabName, currentLang, soundEnabled);
                  }}
                  onMouseEnter={() =>
                    showTip(
                      tabName,
                      isEs
                        ? `Muestra todos los países de ${tabName}.`
                        : `Show all countries located in ${tabName}.`
                    )
                  }
                  onMouseLeave={clearTip}
                  className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer shrink-0 ${
                    active
                      ? 'bg-emerald-500 text-white border-b-2 border-emerald-700 shadow-md'
                      : 'bg-slate-900/75 text-slate-200 hover:bg-slate-800 border border-white/15'
                  }`}
                >
                  {tabName}
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
