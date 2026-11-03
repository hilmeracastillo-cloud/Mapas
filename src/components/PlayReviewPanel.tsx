import React, { useState, useRef, useEffect } from 'react';
import { CountryDossierData, Language } from '../types/geography';
import { ReviewTopic, ReviewContinentOption } from '../types/trivia';
import {
  BookOpen,
  Globe2,
  Compass,
  Landmark,
  Flag,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  Maximize2,
  Minimize2,
  CheckCircle2,
  Target,
  Crosshair,
  Shuffle,
  Trophy,
  ExternalLink,
  ChevronRight,
  ChevronLeft,
  X
} from 'lucide-react';

export const REVIEW_CONTINENT_OPTIONS: ReviewContinentOption[] = [
  {
    id: 'Africa',
    name_es: 'África',
    name_en: 'Africa',
    icon: '🦁',
    continentsFilter: ['Africa'],
  },
  {
    id: 'Europe',
    name_es: 'Europa',
    name_en: 'Europe',
    icon: '🏰',
    continentsFilter: ['Europe'],
  },
  {
    id: 'Asia',
    name_es: 'Asia',
    name_en: 'Asia',
    icon: '🐉',
    continentsFilter: ['Asia'],
  },
  {
    id: 'North America',
    name_es: 'América del Norte',
    name_en: 'North America',
    icon: '🦅',
    continentsFilter: ['North America'],
  },
  {
    id: 'South America',
    name_es: 'América del Sur',
    name_en: 'South America',
    icon: '🐆',
    continentsFilter: ['South America'],
  },
  {
    id: 'Oceania',
    name_es: 'Oceanía',
    name_en: 'Oceania',
    icon: '🦘',
    continentsFilter: ['Oceania'],
  },
  {
    id: 'Americas',
    name_es: 'Toda América (Norte y Sur)',
    name_en: 'All Americas (North & South)',
    icon: '🌎',
    continentsFilter: ['North America', 'South America'],
  },
];

interface PlayReviewPanelProps {
  currentLang: Language;
  selectedContinentId: string | null;
  selectedTopic: ReviewTopic | null;
  onSelectContinent: (continentId: string) => void;
  onSelectTopic: (topic: ReviewTopic) => void;
  onStartReview: () => void;
  onResetReview: () => void;
  onCloseToExplore: () => void;
  currentCountry: CountryDossierData | null;
  currentIndex: number;
  totalCountries: number;
  isCompleted: boolean;
  onNextCountry: () => void;
  onPreviousCountry: () => void;
  onRecenterMap: () => void;
  onRestartSameReview: () => void;
  isBehind?: boolean;
}

export const PlayReviewPanel: React.FC<PlayReviewPanelProps> = ({
  currentLang,
  selectedContinentId,
  selectedTopic,
  onSelectContinent,
  onSelectTopic,
  onStartReview,
  onResetReview,
  onCloseToExplore,
  currentCountry,
  currentIndex,
  totalCountries,
  isCompleted,
  onNextCountry,
  onPreviousCountry,
  onRecenterMap,
  onRestartSameReview,
  isBehind = false,
}) => {
  const isEs = currentLang === 'es';
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const panelRef = useRef<HTMLElement>(null);

  // Stop Leaflet from stealing scroll events on the review panel
  useEffect(() => {
    const el = panelRef.current;
    if (!el) return;

    const stopPropagation = (e: Event) => {
      e.stopPropagation();
    };

    el.addEventListener('wheel', stopPropagation, { passive: true });
    el.addEventListener('touchstart', stopPropagation, { passive: true });
    el.addEventListener('touchmove', stopPropagation, { passive: true });
    el.addEventListener('pointerdown', stopPropagation, { passive: true });
    el.addEventListener('mousedown', stopPropagation);

    return () => {
      el.removeEventListener('wheel', stopPropagation);
      el.removeEventListener('touchstart', stopPropagation);
      el.removeEventListener('touchmove', stopPropagation);
      el.removeEventListener('pointerdown', stopPropagation);
      el.removeEventListener('mousedown', stopPropagation);
    };
  }, []);

  const activeContinent = REVIEW_CONTINENT_OPTIONS.find((c) => c.id === selectedContinentId);

  // Floating minimal pill when user collapses panel in landscape/mobile
  if (isCollapsed && currentCountry && !isCompleted) {
    const countryName = isEs ? currentCountry.name_es : currentCountry.name_en;
    const capitalName = isEs ? currentCountry.capital_es : currentCountry.capital_en;

    return (
      <div
        className="fixed bottom-3 right-3 z-40 bg-slate-900/95 backdrop-blur-xl border border-sky-400/50 rounded-2xl p-2 sm:p-2.5 shadow-2xl flex items-center gap-2.5 sm:gap-3 text-white ring-2 ring-sky-400/20 max-w-[calc(100vw-24px)] animate-in fade-in"
        aria-label={isEs ? 'Panel de repaso minimizado' : 'Minimized review panel'}
      >
        <div className="flex items-center gap-2 min-w-0">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-sky-500 to-blue-400 flex items-center justify-center shrink-0">
            <BookOpen className="w-4 h-4 text-slate-950 font-black" />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-[10px] font-mono font-bold text-sky-400 leading-none">
              {currentIndex + 1} / {totalCountries}
            </span>
            <span className="text-[11px] font-semibold text-slate-200 max-w-[140px] sm:max-w-[180px] truncate leading-tight mt-0.5">
              {selectedTopic === 'capitals'
                ? `🏛️ ${capitalName}`
                : selectedTopic === 'flags'
                ? `🏳️ ${countryName}`
                : `🌍 ${countryName}`}
            </span>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setIsCollapsed(false)}
          className="px-2.5 py-1 rounded-xl bg-sky-400 hover:bg-sky-300 text-slate-950 font-black text-xs flex items-center gap-1 shadow-md transition-all active:scale-95 shrink-0"
          title={isEs ? 'Expandir panel de repaso' : 'Expand review panel'}
        >
          <Maximize2 className="w-3.5 h-3.5" />
          <span>{isEs ? 'Ver Panel' : 'Expand'}</span>
        </button>
      </div>
    );
  }

  const isSessionActive = selectedContinentId !== null && selectedTopic !== null && totalCountries > 0;

  return (
    <aside
      ref={panelRef}
      className={`fixed sm:absolute top-14 sm:top-18 landscape:top-12 bottom-2 sm:bottom-4 landscape:bottom-2 right-2 sm:right-4 landscape:right-2 w-[calc(100vw-16px)] sm:w-[410px] landscape:w-[320px] sm:landscape:w-[350px] md:landscape:w-[370px] max-h-[calc(100dvh-4rem)] landscape:max-h-[calc(100dvh-3.2rem)] bg-slate-900/95 backdrop-blur-xl border border-slate-700/80 rounded-2xl sm:rounded-3xl shadow-2xl p-2.5 sm:p-3 landscape:p-2 text-slate-100 ring-1 ring-sky-400/20 duration-300 flex flex-col min-h-0 select-text transition-all ${
        isBehind
          ? 'z-20 opacity-20 pointer-events-none scale-95'
          : 'z-40 opacity-100 pointer-events-auto scale-100 animate-in slide-in-from-right'
      }`}
      style={{ touchAction: 'pan-y' }}
      aria-label={isEs ? 'Panel de Repaso / Review' : 'Review Panel'}
    >
      {/* 1. TOP HEADER PINNED */}
      <div className="shrink-0 space-y-1.5 pb-2 landscape:pb-1 border-b border-slate-800">
        <div className="flex items-start justify-between gap-1.5">
          <div className="flex items-center gap-2 min-w-0">
            <div className="w-7 h-7 sm:w-8 sm:h-8 landscape:w-6 landscape:h-6 rounded-lg bg-gradient-to-tr from-sky-400 via-sky-500 to-blue-600 text-slate-950 font-black flex items-center justify-center shrink-0 shadow-md shadow-sky-500/20">
              <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-950" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="text-[9px] font-mono font-bold uppercase px-1.5 py-0.5 rounded-full bg-sky-400/20 text-sky-300 border border-sky-400/30">
                  {isEs ? 'Modo Repaso' : 'Review Mode'}
                </span>
                {isSessionActive && (
                  <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded-full bg-slate-800 text-amber-300 border border-slate-700 truncate max-w-[140px]">
                    {activeContinent ? (isEs ? activeContinent.name_es : activeContinent.name_en) : ''}
                  </span>
                )}
              </div>
              <h2 className="text-xs sm:text-sm landscape:text-xs font-extrabold text-white mt-0.5 truncate">
                {!isSessionActive
                  ? isEs
                    ? 'Configuración del Repaso'
                    : 'Review Setup'
                  : isCompleted
                  ? isEs
                    ? '¡Repaso Completado!'
                    : 'Review Completed!'
                  : isEs
                  ? 'Repaso Activo'
                  : 'Active Review'}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-1 shrink-0">
            {isSessionActive && !isCompleted && (
              <button
                type="button"
                onClick={onResetReview}
                title={isEs ? 'Cambiar continente o tema' : 'Change continent or topic'}
                className="text-[11px] font-semibold text-slate-300 hover:text-white px-2 py-0.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 transition-colors border border-slate-700 flex items-center gap-1"
              >
                <ArrowLeft className="w-3 h-3" />
                <span className="hidden sm:inline landscape:hidden md:landscape:inline">{isEs ? 'Tema' : 'Topic'}</span>
              </button>
            )}

            {isSessionActive && !isCompleted && (
              <button
                type="button"
                onClick={() => setIsCollapsed(true)}
                title={isEs ? 'Minimizar panel (ver mapa completo)' : 'Minimize panel'}
                className="p-1 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors"
              >
                <Minimize2 className="w-3.5 h-3.5" />
              </button>
            )}

            <button
              type="button"
              onClick={onCloseToExplore}
              title={isEs ? 'Volver al menú de Play' : 'Return to Play menu'}
              className="text-[11px] font-bold text-slate-400 hover:text-white px-2 py-0.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 transition-colors border border-slate-700"
            >
              {isEs ? 'Explorar' : 'Explore'}
            </button>
          </div>
        </div>

        {/* PROGRESS BAR & COUNTER (WHEN ACTIVE SESSION) */}
        {isSessionActive && !isCompleted && (
          <div className="space-y-1 pt-0.5">
            <div className="flex items-center justify-between text-[10.5px] font-mono">
              <span className="text-slate-400">
                {isEs ? 'Progreso en continente:' : 'Progress:'}
              </span>
              <span className="font-bold text-sky-400">
                {currentIndex + 1} / {totalCountries}{' '}
                <span className="text-slate-500 font-normal">
                  ({Math.round(((currentIndex + 1) / totalCountries) * 100)}%)
                </span>
              </span>
            </div>
            {/* Visual Progress Bar */}
            <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-sky-400 to-blue-500 transition-all duration-300 rounded-full"
                style={{ width: `${((currentIndex + 1) / totalCountries) * 100}%` }}
              />
            </div>
          </div>
        )}
      </div>

      {/* 2. SCROLLABLE MIDDLE CONTENT */}
      <div
        className="flex-1 overflow-y-auto overflow-x-hidden min-h-0 py-1.5 sm:py-2 landscape:py-1 pr-1 space-y-2 overscroll-contain [scrollbar-width:thin]"
        style={{ WebkitOverflowScrolling: 'touch', touchAction: 'pan-y' }}
      >
        
        {/* =========================================================================
            STATE 1: SETUP SCREEN (SELECT CONTINENT & TOPIC)
            ========================================================================= */}
        {!isSessionActive && (
          <div className="space-y-2.5">
            <div className="text-left space-y-0.5">
              <h3 className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                <span>{isEs ? 'Paso 1: Selecciona un Continente' : 'Step 1: Select a Continent'}</span>
              </h3>
              <p className="text-[10.5px] text-slate-300 leading-snug">
                {isEs
                  ? 'El repaso presentará al azar la totalidad de los países de este continente.'
                  : 'Review will present all countries in this continent in random order.'}
              </p>
            </div>

            {/* Continent selection grid */}
            <div className="grid grid-cols-2 gap-1.5">
              {REVIEW_CONTINENT_OPTIONS.map((c) => {
                const isSelected = selectedContinentId === c.id;
                return (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => onSelectContinent(c.id)}
                    className={`p-1.5 sm:p-2 rounded-xl border text-left transition-all flex items-center gap-1.5 ${
                      isSelected
                        ? 'bg-sky-500/20 border-sky-400 ring-2 ring-sky-400/30 text-white font-bold'
                        : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 text-slate-300'
                    }`}
                  >
                    <span className="text-base shrink-0">{c.icon}</span>
                    <div className="min-w-0">
                      <div className="text-[11px] font-bold truncate">
                        {isEs ? c.name_es : c.name_en}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Step 2: Topic Selection */}
            <div className="text-left space-y-0.5 pt-1 border-t border-slate-800">
              <h3 className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5">
                <Target className="w-3.5 h-3.5 text-amber-400" />
                <span>{isEs ? 'Paso 2: Selecciona un Tema' : 'Step 2: Select a Topic'}</span>
              </h3>
              <p className="text-[10.5px] text-slate-300">
                {isEs ? '¿Qué elemento deseas repasar y localizar?' : 'What element do you want to review and locate?'}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-1.5">
              {/* Option: Países */}
              <button
                type="button"
                onClick={() => onSelectTopic('countries')}
                className={`p-2 rounded-xl border text-left transition-all flex items-center justify-between ${
                  selectedTopic === 'countries'
                    ? 'bg-amber-500/20 border-amber-400 ring-2 ring-amber-400/30 text-white'
                    : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 text-slate-300'
                }`}
              >
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-amber-400/20 text-amber-300 flex items-center justify-center shrink-0">
                    <Compass className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold">
                      {isEs ? 'Países' : 'Countries'}
                    </div>
                    <div className="text-[9.5px] text-slate-400 leading-tight">
                      {isEs
                        ? 'Nombre del país y ubicación geográfica en el mapa mundi.'
                        : 'Country name and location on the world map.'}
                    </div>
                  </div>
                </div>
                {selectedTopic === 'countries' && <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />}
              </button>

              {/* Option: Capitales */}
              <button
                type="button"
                onClick={() => onSelectTopic('capitals')}
                className={`p-2 rounded-xl border text-left transition-all flex items-center justify-between ${
                  selectedTopic === 'capitals'
                    ? 'bg-sky-500/20 border-sky-400 ring-2 ring-sky-400/30 text-white'
                    : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 text-slate-300'
                }`}
              >
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-sky-400/20 text-sky-300 flex items-center justify-center shrink-0">
                    <Landmark className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold">
                      {isEs ? 'Capitales' : 'Capitals'}
                    </div>
                    <div className="text-[9.5px] text-slate-400 leading-tight">
                      {isEs
                        ? 'Capital en letras destacadas y su posición exacta.'
                        : 'Capital in prominent letters and its exact position.'}
                    </div>
                  </div>
                </div>
                {selectedTopic === 'capitals' && <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />}
              </button>

              {/* Option: Banderas */}
              <button
                type="button"
                onClick={() => onSelectTopic('flags')}
                className={`p-2 rounded-xl border text-left transition-all flex items-center justify-between ${
                  selectedTopic === 'flags'
                    ? 'bg-rose-500/20 border-rose-400 ring-2 ring-rose-400/30 text-white'
                    : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 text-slate-300'
                }`}
              >
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-rose-400/20 text-rose-300 flex items-center justify-center shrink-0">
                    <Flag className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold">
                      {isEs ? 'Banderas' : 'Flags'}
                    </div>
                    <div className="text-[9.5px] text-slate-400 leading-tight">
                      {isEs
                        ? 'Bandera oficial en gran formato y resalta el país.'
                        : 'Official flag in large format and country highlight.'}
                    </div>
                  </div>
                </div>
                {selectedTopic === 'flags' && <CheckCircle2 className="w-3.5 h-3.5 text-rose-400 shrink-0" />}
              </button>
            </div>

            {/* Start Button - smaller and compact */}
            <div className="pt-1">
              <button
                type="button"
                disabled={!selectedContinentId || !selectedTopic}
                onClick={onStartReview}
                className={`w-full py-2 px-3 rounded-xl font-black text-xs flex items-center justify-center gap-1.5 shadow-md transition-all ${
                  selectedContinentId && selectedTopic
                    ? 'bg-gradient-to-r from-sky-400 via-sky-300 to-blue-400 text-slate-950 hover:brightness-110 shadow-sky-500/25 active:scale-95 cursor-pointer'
                    : 'bg-slate-800 text-slate-500 border border-slate-700/50 cursor-not-allowed opacity-60'
                }`}
              >
                <Shuffle className="w-3.5 h-3.5" />
                <span>{isEs ? 'Comenzar Repaso al Azar' : 'Start Random Review'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* =========================================================================
            STATE 2: ACTIVE COUNTRY CARD PRESENTATION
            ========================================================================= */}
        {isSessionActive && !isCompleted && currentCountry && (
          <div className="space-y-2">
            {/* Visual Instruction Badge for Map Controls - compact */}
            <div className="py-1 px-2 rounded-lg bg-slate-950/80 border border-slate-800/80 text-[10px] text-slate-300 flex items-center gap-1.5">
              <Crosshair className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              <span className="leading-tight">
                {isEs
                  ? 'Explora con zoom (+ / -) y arrastra el mapa libremente para ubicarte.'
                  : 'Zoom in/out and drag map freely to locate yourself.'}
              </span>
            </div>

            {/* Country Presentation Showcase Card */}
            <div className="bg-gradient-to-b from-slate-800/90 to-slate-900 border border-slate-700/80 rounded-2xl p-2.5 sm:p-3 space-y-2 shadow-xl">
              
              {/* TOPIC 1: BANDERAS (ENLARGED HIGH-DEF FLAG PRESENTATION) */}
              {selectedTopic === 'flags' && (
                <div className="flex flex-col items-center justify-center p-2 rounded-xl bg-slate-950/90 border border-slate-800 shadow-inner">
                  {/* Flag Container - noticeably larger, beautiful presentation */}
                  <div className="w-full flex items-center justify-center bg-black/50 rounded-xl p-2 border border-slate-800/90 shadow-2xl overflow-hidden">
                    <img
                      src={`https://flagcdn.com/w640/${currentCountry.iso2.toLowerCase()}.png`}
                      alt={`Bandera de ${currentCountry.name_es}`}
                      className="w-full max-w-[280px] sm:max-w-[340px] h-36 sm:h-48 landscape:h-28 object-contain rounded-lg shadow-2xl ring-1 ring-white/15"
                      loading="eager"
                    />
                  </div>
                  <div className="mt-1.5 text-center">
                    <span className="text-[9.5px] font-mono uppercase text-rose-400 font-bold tracking-wider block">
                      {isEs ? 'Bandera Oficial' : 'Official Flag'}
                    </span>
                    <h3 className="text-base sm:text-lg font-black text-white mt-0.5 leading-snug">
                      {isEs ? currentCountry.name_es : currentCountry.name_en}
                    </h3>
                  </div>
                </div>
              )}

              {/* TOPIC 2: CAPITALES (PROMINENT ENLARGED CAPITAL DISPLAY) */}
              {selectedTopic === 'capitals' && (
                <div className="p-2.5 sm:p-3 rounded-xl bg-sky-950/70 border border-sky-500/40 text-left space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[9.5px] font-mono uppercase text-sky-400 font-bold tracking-wider flex items-center gap-1.5">
                      <Landmark className="w-3.5 h-3.5" />
                      <span>{isEs ? 'Capital Oficial' : 'Official Capital'}</span>
                    </span>
                    <span className="text-[9.5px] font-mono px-1.5 py-0.5 rounded bg-sky-500/20 text-sky-300 border border-sky-500/40 font-bold">
                      {currentCountry.iso3}
                    </span>
                  </div>

                  {/* PROMINENTLY ENLARGED CAPITAL FONT SIZE */}
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight py-0.5 text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-100 to-sky-300">
                    {isEs ? currentCountry.capital_es : currentCountry.capital_en}
                  </div>

                  <div className="flex items-center gap-2 pt-0.5 text-xs text-sky-200">
                    <img
                      src={`https://flagcdn.com/w80/${currentCountry.iso2.toLowerCase()}.png`}
                      alt=""
                      className="w-7 h-4.5 object-cover rounded shadow border border-slate-700 shrink-0"
                    />
                    <span>
                      {isEs ? 'Capital de' : 'Capital of'}:{' '}
                      <strong className="text-white font-bold">{isEs ? currentCountry.name_es : currentCountry.name_en}</strong>
                    </span>
                  </div>
                </div>
              )}

              {/* TOPIC 3: PAÍSES (PROMINENT COUNTRY NAME DISPLAY) */}
              {selectedTopic === 'countries' && (
                <div className="p-2.5 sm:p-3 rounded-xl bg-amber-950/50 border border-amber-500/40 text-left space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[9.5px] font-mono uppercase text-amber-400 font-bold tracking-wider flex items-center gap-1.5">
                      <Compass className="w-3.5 h-3.5" />
                      <span>{isEs ? 'País Soberano' : 'Sovereign Country'}</span>
                    </span>
                    <span className="text-[9.5px] font-mono px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40 font-bold">
                      {currentCountry.iso3}
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5 py-0.5">
                    <img
                      src={`https://flagcdn.com/w160/${currentCountry.iso2.toLowerCase()}.png`}
                      alt=""
                      className="w-10 h-7 object-cover rounded shadow border border-slate-700 shrink-0"
                    />
                    <div className="text-xl sm:text-2xl font-black text-white leading-tight">
                      {isEs ? currentCountry.name_es : currentCountry.name_en}
                    </div>
                  </div>

                  <div className="text-xs text-amber-200/90 font-medium">
                    {isEs ? 'Capital' : 'Capital'}:{' '}
                    <strong className="text-white text-base font-black">
                      {isEs ? currentCountry.capital_es : currentCountry.capital_en}
                    </strong>
                  </div>
                </div>
              )}

              {/* Geographical Details Pill - optimized compact grid */}
              <div className="grid grid-cols-2 gap-1.5 text-[10.5px] text-slate-300">
                <div className="py-1 px-2 rounded-lg bg-slate-950/70 border border-slate-800 flex items-center justify-between">
                  <span className="text-slate-400 text-[9px] uppercase font-mono">
                    {isEs ? 'Continente' : 'Continent'}
                  </span>
                  <span className="font-bold text-white truncate ml-1 text-right">
                    {isEs ? currentCountry.continent_es : currentCountry.continent}
                  </span>
                </div>
                <div className="py-1 px-2 rounded-lg bg-slate-950/70 border border-slate-800 flex items-center justify-between">
                  <span className="text-slate-400 text-[9px] uppercase font-mono">
                    {isEs ? 'Población' : 'Pob.'}
                  </span>
                  <span className="font-bold text-emerald-400 font-mono ml-1">
                    {currentCountry.population || 'N/A'}
                  </span>
                </div>
              </div>

              {/* Explanatory Geographic Summary - fully readable, NO line-clamp cutoff, smooth vertical scrolling */}
              {currentCountry.physical_geography_summary && (
                <div className="p-2 sm:p-2.5 rounded-xl bg-slate-950/70 border border-slate-800/90 text-left space-y-1 shadow-inner">
                  <div className="flex items-center justify-between text-[9.5px] font-mono uppercase tracking-wider text-sky-400 font-bold border-b border-slate-800/70 pb-1">
                    <span className="flex items-center gap-1.5">
                      <span>🌍</span>
                      <span>{isEs ? 'Entorno Geográfico' : 'Geographic Overview'}</span>
                    </span>
                    <span className="text-[9px] text-slate-400 lowercase font-normal">
                      {isEs ? 'fisiografía' : 'physical terrain'}
                    </span>
                  </div>
                  <div
                    tabIndex={0}
                    className="text-[11px] sm:text-xs text-slate-200 leading-relaxed max-h-28 sm:max-h-36 overflow-y-auto overscroll-contain pr-1 select-text [scrollbar-width:thin] focus:outline-none focus:ring-1 focus:ring-sky-500/30 rounded"
                    style={{ WebkitOverflowScrolling: 'touch', touchAction: 'pan-y' }}
                  >
                    {isEs
                      ? currentCountry.physical_geography_summary.es
                      : currentCountry.physical_geography_summary.en}
                  </div>
                </div>
              )}

              {/* Re-center Map Button - compact */}
              <button
                type="button"
                onClick={onRecenterMap}
                className="w-full py-1.5 px-2.5 rounded-lg bg-slate-800/90 hover:bg-slate-700 text-sky-300 border border-slate-700 text-[11px] font-semibold flex items-center justify-center gap-1.5 transition-colors"
                title={isEs ? 'Volver a centrar la cámara en este país' : 'Re-center camera on this country'}
              >
                <Crosshair className="w-3.5 h-3.5 text-sky-400" />
                <span>{isEs ? 'Centrar cámara en el país' : 'Re-center on country'}</span>
              </button>
            </div>
          </div>
        )}

        {/* =========================================================================
            STATE 3: COMPLETED SCREEN (ALL COUNTRIES REVIEWED)
            ========================================================================= */}
        {isSessionActive && isCompleted && (
          <div className="space-y-3 py-1.5 text-center">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-tr from-amber-400 to-yellow-300 text-slate-950 font-black flex items-center justify-center shadow-lg shadow-amber-500/20">
              <Trophy className="w-7 h-7 text-slate-950" />
            </div>

            <div className="space-y-0.5">
              <h3 className="text-base sm:text-lg font-black text-white">
                {isEs ? '¡Repaso Completado!' : 'Review Completed!'}
              </h3>
              <p className="text-xs text-slate-300">
                {isEs
                  ? `Has repasado la totalidad de los ${totalCountries} países de ${
                      activeContinent ? activeContinent.name_es : 'este continente'
                    }.`
                  : `You have reviewed all ${totalCountries} countries in ${
                      activeContinent ? activeContinent.name_en : 'this continent'
                    }.`}
              </p>
            </div>

            <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-200">
              <span className="font-bold">100% {isEs ? 'Completado' : 'Completed'}</span> •{' '}
              {isEs
                ? 'Todos los países fueron presentados en el mapa sin omisiones.'
                : 'All countries were presented on the map without omissions.'}
            </div>

            <div className="space-y-1.5 pt-1">
              <button
                type="button"
                onClick={onRestartSameReview}
                className="w-full py-2 px-3 rounded-xl bg-gradient-to-r from-sky-400 to-blue-400 text-slate-950 font-black text-xs flex items-center justify-center gap-1.5 shadow-md transition-all active:scale-95"
              >
                <Shuffle className="w-3.5 h-3.5" />
                <span>{isEs ? 'Repasar de nuevo (nuevo orden al azar)' : 'Review again (new random order)'}</span>
              </button>

              <button
                type="button"
                onClick={onResetReview}
                className="w-full py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 border border-slate-700 transition-all"
              >
                <RotateCcw className="w-3.5 h-3.5 text-slate-400" />
                <span>{isEs ? 'Cambiar de Continente o Tema' : 'Change Continent or Topic'}</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* 3. PINNED BOTTOM ACTION CONTROLS (ADVANCE ONLY WHEN USER CLICKS) - COMPACT */}
      {isSessionActive && !isCompleted && (
        <div className="pt-1.5 sm:pt-2 border-t border-slate-800 shrink-0 space-y-1">
          <div className="flex items-center gap-1.5">
            {/* Previous Button - compact */}
            <button
              type="button"
              disabled={currentIndex <= 0}
              onClick={onPreviousCountry}
              className={`py-1.5 sm:py-2 px-2.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-1 border transition-all ${
                currentIndex > 0
                  ? 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700 active:scale-95 cursor-pointer'
                  : 'bg-slate-900 text-slate-600 border-slate-800 cursor-not-allowed opacity-50'
              }`}
              title={isEs ? 'País anterior' : 'Previous country'}
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{isEs ? 'Anterior' : 'Prev'}</span>
            </button>

            {/* Next Country Button (Main trigger - program waits for user before advancing) - sleek and compact */}
            <button
              type="button"
              onClick={onNextCountry}
              className="flex-1 py-1.5 sm:py-2 px-3.5 rounded-xl bg-gradient-to-r from-sky-400 via-sky-300 to-blue-400 hover:brightness-110 text-slate-950 font-black text-xs sm:text-xs flex items-center justify-center gap-1.5 shadow-md shadow-sky-500/25 transition-all active:scale-95 cursor-pointer"
            >
              <span>
                {currentIndex < totalCountries - 1
                  ? isEs
                    ? 'Siguiente País'
                    : 'Next Country'
                  : isEs
                  ? 'Finalizar Repaso'
                  : 'Finish Review'}
              </span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-950 stroke-[2.5]" />
            </button>
          </div>

          <div className="text-[9.5px] text-slate-400 text-center leading-none">
            {isEs
              ? 'Tómate el tiempo que necesites para ubicarte antes de pulsar Siguiente.'
              : 'Take all the time you need to explore before clicking Next.'}
          </div>
        </div>
      )}
    </aside>
  );
};
