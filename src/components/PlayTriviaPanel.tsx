import React, { useRef, useEffect, useState } from 'react';
import { Language } from '../types/geography';
import { TriviaFlavor, TriviaQuestion, TriviaStats } from '../types/trivia';
import { REVIEW_CONTINENT_OPTIONS } from './PlayReviewPanel';
import {
  Trophy,
  Flame,
  CheckCircle2,
  XCircle,
  ArrowRight,
  RotateCcw,
  Compass,
  Landmark,
  Flag,
  Sparkles,
  MapPin,
  Lightbulb,
  AlertCircle,
  ArrowLeft,
  Info,
  Minimize2,
  Maximize2,
  Target,
  Shuffle
} from 'lucide-react';

interface PlayTriviaPanelProps {
  currentLang: Language;
  selectedContinentId: string | null;
  selectedFlavor: TriviaFlavor | null;
  onSelectContinent: (continentId: string) => void;
  onSelectFlavor: (flavor: TriviaFlavor) => void;
  onStartTrivia: () => void;
  onReturnToCategories: () => void;
  question: TriviaQuestion | null;
  stats: TriviaStats;
  currentAttempt: number; // 1, 2, 3, 4
  lastWrongGuessName: string | null;
  isAnswered: boolean;
  isCorrect: boolean | null;
  earnedPoints: number; // 1.0, 0.5, 0.25, 0
  onNextQuestion: () => void;
  onResetStats: () => void;
  onCloseToExplore: () => void;
  onViewCountryDossier?: (targetId: string) => void;
  isBehind?: boolean;
}

export const PlayTriviaPanel: React.FC<PlayTriviaPanelProps> = ({
  currentLang,
  selectedContinentId,
  selectedFlavor,
  onSelectContinent,
  onSelectFlavor,
  onStartTrivia,
  onReturnToCategories,
  question,
  stats,
  currentAttempt,
  lastWrongGuessName,
  isAnswered,
  isCorrect,
  earnedPoints,
  onNextQuestion,
  onResetStats,
  onCloseToExplore,
  onViewCountryDossier,
  isBehind = false,
}) => {
  const isEs = currentLang === 'es';
  const [isCollapsed, setIsCollapsed] = useState(false);
  const panelRef = useRef<HTMLElement>(null);

  // Helper to format points text safely
  const formatPoints = (pts?: number | null) => {
    const val = typeof pts === 'number' && !isNaN(pts) ? pts : 0;
    return val % 1 === 0 ? val.toString() : val.toFixed(2);
  };

  // Prevent Leaflet from hijacking mousewheel and touch scroll events from the panel
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
  const isSessionActive = selectedContinentId !== null && selectedFlavor !== null && question !== null;

  // If collapsed by user (especially useful on mobile landscape to see full map)
  if (isCollapsed) {
    return (
      <div
        className="fixed bottom-3 right-3 z-40 bg-slate-900/95 backdrop-blur-xl border border-amber-400/50 rounded-2xl p-2 sm:p-2.5 shadow-2xl flex items-center gap-2.5 sm:gap-3 text-white ring-2 ring-amber-400/20 max-w-[calc(100vw-24px)] animate-in fade-in"
        aria-label={isEs ? 'Panel de trivia minimizado' : 'Minimized trivia panel'}
      >
        <div className="flex items-center gap-2 min-w-0">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-amber-500 to-yellow-400 flex items-center justify-center shrink-0">
            <Trophy className="w-4 h-4 text-slate-950 font-black" />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-[10px] font-mono font-bold text-amber-400 leading-none">
              {formatPoints(stats?.totalScore)} pts
            </span>
            {question && selectedFlavor && !isAnswered && (
              <span className="text-[11px] font-medium text-slate-200 max-w-[140px] sm:max-w-[200px] truncate leading-tight mt-0.5">
                {isEs ? question.question_es : question.question_en}
              </span>
            )}
          </div>
        </div>

        <button
          type="button"
          onClick={() => setIsCollapsed(false)}
          className="px-2.5 py-1 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs flex items-center gap-1 shadow-md transition-all active:scale-95 shrink-0"
          title={isEs ? 'Expandir panel de trivia' : 'Expand trivia panel'}
        >
          <Maximize2 className="w-3.5 h-3.5" />
          <span>{isEs ? 'Ver Panel' : 'Expand'}</span>
        </button>
      </div>
    );
  }

  return (
    <aside
      ref={panelRef}
      className={`fixed sm:absolute top-14 sm:top-18 landscape:top-12 right-2 sm:right-4 landscape:right-2 w-[calc(100vw-16px)] sm:w-[410px] landscape:w-[320px] sm:landscape:w-[350px] md:landscape:w-[370px] h-auto max-h-[calc(100dvh-4.75rem)] sm:max-h-[calc(100dvh-5.5rem)] landscape:max-h-[calc(100dvh-3.2rem)] bg-slate-900/95 backdrop-blur-xl border border-slate-700/80 rounded-2xl sm:rounded-3xl shadow-2xl p-2.5 sm:p-3 landscape:p-2 text-slate-100 ring-1 ring-amber-400/20 duration-300 flex flex-col min-h-0 select-text transition-all ${
        isBehind
          ? 'z-20 opacity-20 pointer-events-none scale-95'
          : 'z-40 opacity-100 pointer-events-auto scale-100 animate-in slide-in-from-right'
      }`}
      style={{ touchAction: 'pan-y' }}
      aria-label="Panel de Trivia"
    >
      {/* 1. TOP PINNED SECTION (Header & Live Score Counter - never scrolls away) */}
      <div className="shrink-0 space-y-1.5 pb-2 landscape:pb-1 border-b border-slate-800">
        {/* Top Header: Title, Category back button, Minimize, Exit to Explore */}
        <div className="flex items-start justify-between gap-1.5">
          <div className="flex items-center gap-2 min-w-0">
            <div className="w-7 h-7 sm:w-8 sm:h-8 landscape:w-6 landscape:h-6 rounded-lg bg-gradient-to-tr from-amber-500 to-yellow-400 text-slate-950 font-black flex items-center justify-center shrink-0 shadow-md shadow-amber-500/20">
              <Trophy className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-950" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="text-[9px] font-mono font-bold uppercase px-1.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30">
                  {isEs ? 'Modo Trivia' : 'Trivia Mode'}
                </span>
                {isSessionActive && (
                  <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded-full bg-slate-800 text-sky-300 border border-slate-700 truncate max-w-[140px]">
                    {activeContinent ? (isEs ? activeContinent.name_es : activeContinent.name_en) : ''}
                  </span>
                )}
                {(stats?.currentStreak ?? 0) >= 2 && (
                  <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/30 flex items-center gap-1">
                    <Flame className="w-3 h-3 text-orange-400 fill-orange-400" />
                    <span>{stats?.currentStreak ?? 0} 🔥</span>
                  </span>
                )}
              </div>
              <h2 className="text-xs sm:text-sm landscape:text-xs font-extrabold text-white mt-0.5 truncate">
                {!isSessionActive
                  ? isEs
                    ? 'Configuración de la Trivia'
                    : 'Trivia Setup'
                  : isEs
                  ? 'Localiza en el Mapa'
                  : 'Locate on the Map'}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-1 shrink-0">
            {isSessionActive && (
              <button
                type="button"
                onClick={onReturnToCategories}
                title={isEs ? 'Cambiar continente o tema' : 'Change continent or topic'}
                className="text-[11px] font-semibold text-slate-300 hover:text-white px-2 py-0.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 transition-colors border border-slate-700 flex items-center gap-1"
              >
                <ArrowLeft className="w-3 h-3" />
                <span className="hidden sm:inline landscape:hidden md:landscape:inline">{isEs ? 'Tema' : 'Topic'}</span>
              </button>
            )}

            {/* Minimize Toggle */}
            <button
              type="button"
              onClick={() => setIsCollapsed(true)}
              title={isEs ? 'Minimizar panel (ver mapa completo)' : 'Minimize panel'}
              className="p-1 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors"
            >
              <Minimize2 className="w-3.5 h-3.5" />
            </button>

            <button
              type="button"
              onClick={onCloseToExplore}
              title={isEs ? 'Cambiar al modo Explorar' : 'Switch to Explore mode'}
              className="text-[11px] font-bold text-slate-400 hover:text-white px-2 py-0.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 transition-colors border border-slate-700"
            >
              {isEs ? 'Explorar' : 'Explore'}
            </button>
          </div>
        </div>

        {/* VISIBLE LIVE SCORE COUNTER (WHEN PLAYING ACTIVE SESSION) */}
        {isSessionActive && (
          <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-1.5 sm:p-2 flex items-center justify-between shadow-inner">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="flex flex-col">
                <span className="text-[9px] uppercase font-mono tracking-wider text-slate-400 leading-none">
                  {isEs ? 'Puntos' : 'Score'}
                </span>
                <span className="text-sm sm:text-base font-black text-amber-400 leading-tight">
                  {formatPoints(stats?.totalScore)}{' '}
                  <span className="text-[10px] text-slate-500 font-semibold">
                    / {stats?.totalAnswered ?? 0}
                  </span>
                </span>
              </div>

              <div className="h-5 w-[1px] bg-slate-800" />

              <div className="flex flex-col">
                <span className="text-[9px] uppercase font-mono tracking-wider text-slate-400 leading-none">
                  {isEs ? '1er Int.' : '1st Att.'}
                </span>
                <span className="text-xs sm:text-sm font-bold text-emerald-400 leading-tight">
                  {stats?.perfectFirstAttempts ?? 0}
                </span>
              </div>

              <div className="h-5 w-[1px] bg-slate-800" />

              <div className="flex flex-col">
                <span className="text-[9px] uppercase font-mono tracking-wider text-slate-400 leading-none">
                  {isEs ? 'Racha' : 'Streak'}
                </span>
                <span className="text-xs sm:text-sm font-bold text-orange-400 leading-tight flex items-center gap-1">
                  {stats?.currentStreak ?? 0} 🔥
                </span>
              </div>
            </div>

            {(stats?.totalAnswered ?? 0) > 0 && (
              <button
                type="button"
                onClick={onResetStats}
                title={isEs ? 'Reiniciar estadísticas de trivia' : 'Reset score'}
                className="p-1 rounded-lg bg-slate-800/70 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors border border-slate-700/50"
              >
                <RotateCcw className="w-3 h-3" />
              </button>
            )}
          </div>
        )}
      </div>

      {/* 2. SCROLLABLE MIDDLE SECTION (Setup Screen or Active Question) */}
      <div
        className="flex-1 overflow-y-auto overflow-x-hidden min-h-0 py-1.5 sm:py-2 landscape:py-1 pr-1 space-y-2 overscroll-contain [scrollbar-width:thin]"
        style={{ WebkitOverflowScrolling: 'touch', touchAction: 'pan-y' }}
      >
        {/* =========================================================================
            STATE 1: SETUP SCREEN (SELECT CONTINENT & TOPIC - ALIGNED WITH REVIEW MODE)
            ========================================================================= */}
        {!isSessionActive && (
          <div className="space-y-2.5">
            {/* Step 1: Continent Selection */}
            <div className="text-left space-y-0.5">
              <h3 className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>{isEs ? 'Paso 1: Selecciona un Continente' : 'Step 1: Select a Continent'}</span>
              </h3>
              <p className="text-[10.5px] text-slate-300 leading-snug">
                {isEs
                  ? 'La trivia generará preguntas exclusivas de este continente.'
                  : 'Trivia questions will be selected exclusively from this continent.'}
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
                        ? 'bg-amber-500/20 border-amber-400 ring-2 ring-amber-400/30 text-white font-bold'
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
                {isEs ? '¿Qué desafío cartográfico deseas responder?' : 'Which map challenge do you want to play?'}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-1.5">
              {/* Option: Países */}
              <button
                type="button"
                onClick={() => onSelectFlavor('countries')}
                className={`p-2 rounded-xl border text-left transition-all flex items-center justify-between ${
                  selectedFlavor === 'countries'
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
                        ? 'Se nombra un país del continente; encuéntralo y haz clic sobre él.'
                        : 'A country is named; find and click directly on it.'}
                    </div>
                  </div>
                </div>
                {selectedFlavor === 'countries' && <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />}
              </button>

              {/* Option: Capitales */}
              <button
                type="button"
                onClick={() => onSelectFlavor('capitals')}
                className={`p-2 rounded-xl border text-left transition-all flex items-center justify-between ${
                  selectedFlavor === 'capitals'
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
                        ? 'Se da la capital; identifica y pulsa el país correspondiente.'
                        : 'Given a capital; identify and click its corresponding country.'}
                    </div>
                  </div>
                </div>
                {selectedFlavor === 'capitals' && <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />}
              </button>

              {/* Option: Banderas */}
              <button
                type="button"
                onClick={() => onSelectFlavor('flags')}
                className={`p-2 rounded-xl border text-left transition-all flex items-center justify-between ${
                  selectedFlavor === 'flags'
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
                        ? 'Observa la bandera oficial e identifica el país en el mapa.'
                        : 'View the official flag and identify the country on the map.'}
                    </div>
                  </div>
                </div>
                {selectedFlavor === 'flags' && <CheckCircle2 className="w-3.5 h-3.5 text-rose-400 shrink-0" />}
              </button>
            </div>

            {/* Scoring rules info box */}
            <div className="p-2 sm:p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/25 text-[10.5px] text-amber-200/90 space-y-1">
              <div className="font-bold text-amber-300 flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-amber-400" />
                <span>{isEs ? 'Sistema de Puntos y Pistas:' : 'Scoring & Hints System:'}</span>
              </div>
              <ul className="space-y-0.5 list-disc list-inside text-slate-300 text-[10px]">
                <li>
                  <strong className="text-emerald-300">1er Intento:</strong>{' '}
                  {isEs ? '1.0 punto (sin pistas)' : '1.0 pt (no hints)'}
                </li>
                <li>
                  <strong className="text-yellow-300">2do Intento:</strong>{' '}
                  {isEs ? '0.5 punto (+ Pista 1)' : '0.5 pt (+ Hint 1)'}
                </li>
                <li>
                  <strong className="text-orange-300">3er Intento:</strong>{' '}
                  {isEs ? '0.25 punto (+ Pista 2)' : '0.25 pt (+ Hint 2)'}
                </li>
                <li>
                  <strong className="text-rose-300">4to Intento:</strong>{' '}
                  {isEs ? '0 puntos (el mapa te guía a la respuesta)' : '0 pts (map flies to answer)'}
                </li>
              </ul>
            </div>

            {/* Start Button - smaller and compact */}
            <div className="pt-1">
              <button
                type="button"
                disabled={!selectedContinentId || !selectedFlavor}
                onClick={onStartTrivia}
                className={`w-full py-2 px-3 rounded-xl font-black text-xs flex items-center justify-center gap-1.5 shadow-md transition-all ${
                  selectedContinentId && selectedFlavor
                    ? 'bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 text-slate-950 hover:brightness-110 shadow-amber-500/25 active:scale-95 cursor-pointer'
                    : 'bg-slate-800 text-slate-500 border border-slate-700/50 cursor-not-allowed opacity-60'
                }`}
              >
                <Shuffle className="w-3.5 h-3.5" />
                <span>{isEs ? 'Comenzar Desafío de Trivia' : 'Start Trivia Challenge'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* =========================================================================
            STATE 2: PREGUNTA ACTIVA (SIN OPCIONES ESCRITAS - SOLO CLICK EN MAPA)
            ========================================================================= */}
        {isSessionActive && (
          <div className="space-y-2 sm:space-y-2.5">
            {/* Category Pill Indicator & Attempts Badge */}
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase text-amber-400 font-bold flex items-center gap-1.5">
                {selectedFlavor === 'countries' && <Compass className="w-3.5 h-3.5" />}
                {selectedFlavor === 'capitals' && <Landmark className="w-3.5 h-3.5" />}
                {selectedFlavor === 'flags' && <Flag className="w-3.5 h-3.5" />}
                <span>
                  {isEs
                    ? selectedFlavor === 'countries'
                      ? 'Países'
                      : selectedFlavor === 'capitals'
                      ? 'Capitales'
                      : 'Banderas'
                    : selectedFlavor}
                </span>
              </span>

              {/* Attempt Counter & Value */}
              {!isAnswered ? (
                <span
                  className={`text-[9.5px] font-bold px-2 py-0.5 rounded-full border ${
                    currentAttempt === 1
                      ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                      : currentAttempt === 2
                      ? 'bg-yellow-500/20 text-yellow-300 border-yellow-500/40'
                      : currentAttempt === 3
                      ? 'bg-orange-500/20 text-orange-300 border-orange-500/40'
                      : 'bg-rose-500/20 text-rose-300 border-rose-500/40'
                  }`}
                >
                  {isEs ? `Intento ${currentAttempt}/4` : `Attempt ${currentAttempt}/4`} •{' '}
                  {currentAttempt === 1
                    ? '1.0 pt'
                    : currentAttempt === 2
                    ? '0.5 pt'
                    : currentAttempt === 3
                    ? '0.25 pt'
                    : '0 pt'}
                </span>
              ) : (
                <span className="text-[9.5px] font-bold px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                  {isEs ? 'Respondida' : 'Completed'}
                </span>
              )}
            </div>

            {/* Question Card */}
            <div className="bg-gradient-to-b from-slate-800/80 to-slate-900/90 border border-slate-700/90 rounded-2xl p-2.5 sm:p-3 space-y-2 shadow-lg">
              <div className="space-y-0.5">
                <h3 className="text-xs sm:text-sm font-black text-white leading-snug">
                  {isEs ? question.question_es : question.question_en}
                </h3>
              </div>

              {/* Special Visual: National Flag for Flags Flavor */}
              {selectedFlavor === 'flags' && question.flagUrl && (
                <div className="flex flex-col items-center justify-center p-2 rounded-xl bg-slate-950/90 border border-slate-800 shadow-inner">
                  <div className="w-full flex items-center justify-center bg-black/50 rounded-xl p-1.5 border border-slate-800/90 shadow-2xl overflow-hidden">
                    <img
                      src={question.flagUrl.replace('/w160/', '/w640/')}
                      alt="Bandera nacional para identificar"
                      className="w-full max-w-[260px] sm:max-w-[300px] h-32 sm:h-40 landscape:h-24 object-contain rounded-lg shadow-2xl ring-1 ring-white/15"
                      loading="eager"
                    />
                  </div>
                  <span className="text-[9.5px] text-slate-400 font-medium mt-1 text-center">
                    {isEs
                      ? 'Busca y pulsa este país directamente en el mapa'
                      : 'Find and tap this country directly on the map'}
                  </span>
                </div>
              )}

              {/* Special Clue: Capital Name Highlight for Capitals Flavor */}
              {selectedFlavor === 'capitals' && question.capital_es && (
                <div className="flex items-center gap-2 p-2 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-200">
                  <Landmark className="w-4 h-4 text-sky-400 shrink-0" />
                  <div>
                    <span className="text-[9px] uppercase font-mono tracking-wider text-sky-300 block">
                      {isEs ? 'Capital a ubicar' : 'Capital to locate'}
                    </span>
                    <strong className="text-sm sm:text-base text-white font-extrabold">
                      {isEs ? question.capital_es : question.capital_en}
                    </strong>
                  </div>
                </div>
              )}

              {/* Instructions banner: NO written alternatives */}
              <div className="py-1 px-2 rounded-lg bg-slate-950/60 border border-slate-800/80 flex items-center gap-1.5 text-[10px] text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 animate-bounce" />
                <span className="leading-tight">
                  {isEs
                    ? 'Haz clic directamente sobre el mapa para enviar tu respuesta.'
                    : 'Click directly on the map to submit your answer.'}
                </span>
              </div>
            </div>

            {/* WRONG GUESS NOTIFICATION WITH FEEDBACK */}
            {!isAnswered && lastWrongGuessName && (
              <div className="p-2 sm:p-2.5 rounded-xl bg-rose-950/70 border border-rose-500/50 text-[11px] text-rose-200 space-y-0.5 animate-in fade-in">
                <div className="flex items-center gap-1.5 font-bold text-rose-300">
                  <XCircle className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                  <span>
                    {isEs
                      ? `Has pulsado "${lastWrongGuessName}". No es la respuesta correcta.`
                      : `You clicked "${lastWrongGuessName}". Not correct.`}
                  </span>
                </div>
                <p className="text-[10px] text-slate-300">
                  {isEs
                    ? '¡No te desanimes! Revisa la pista a continuación y prueba de nuevo.'
                    : 'Check the hint below and try again on the map.'}
                </p>
              </div>
            )}

            {/* PROGRESSIVE HINTS ACCORDING TO ATTEMPT */}
            {!isAnswered && currentAttempt >= 2 && (
              <div className="space-y-1.5">
                {/* Hint 1 (after 1st wrong attempt) */}
                <div className="p-2 sm:p-2.5 rounded-xl bg-amber-950/60 border border-amber-500/50 text-[11px] text-amber-200 space-y-0.5 animate-in fade-in">
                  <div className="flex items-center gap-1.5 font-bold text-amber-300">
                    <Lightbulb className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{isEs ? 'Pista 1' : 'Hint 1'}</span>
                  </div>
                  <p className="text-[10px] text-slate-200 leading-snug">
                    {isEs ? question.hint1_es : question.hint1_en}
                  </p>
                </div>

                {/* Hint 2 (after 2nd wrong attempt) */}
                {currentAttempt >= 3 && (
                  <div className="p-2 sm:p-2.5 rounded-xl bg-sky-950/60 border border-sky-500/50 text-[11px] text-sky-200 space-y-0.5 animate-in fade-in">
                    <div className="flex items-center gap-1.5 font-bold text-sky-300">
                      <Lightbulb className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                      <span>{isEs ? 'Pista 2' : 'Hint 2'}</span>
                    </div>
                    <p className="text-[10px] text-slate-200 leading-snug">
                      {isEs ? question.hint2_es : question.hint2_en}
                    </p>
                  </div>
                )}

                {/* Hint 3 (after 3rd wrong attempt) */}
                {currentAttempt >= 4 && (
                  <div className="p-2 sm:p-2.5 rounded-xl bg-orange-950/60 border border-orange-500/50 text-[11px] text-orange-200 space-y-0.5 animate-in fade-in">
                    <div className="flex items-center gap-1.5 font-bold text-orange-300">
                      <AlertCircle className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                      <span>{isEs ? 'Pista 3 (Último intento)' : 'Hint 3 (Final attempt)'}</span>
                    </div>
                    <p className="text-[10px] text-slate-200 leading-snug">
                      {isEs ? question.hint3_es : question.hint3_en}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* RESOLVED STATE: EXPLANATION & POINTS SUMMARY */}
            {isAnswered && (
              <div
                className={`p-2.5 sm:p-3 rounded-2xl border text-xs leading-relaxed space-y-2 animate-in fade-in duration-300 ${
                  isCorrect
                    ? 'bg-emerald-950/80 border-emerald-500/60 text-emerald-200'
                    : 'bg-rose-950/80 border-rose-500/60 text-rose-200'
                }`}
              >
                <div className="flex items-center justify-between border-b border-slate-800 pb-1.5">
                  <div className="flex items-center gap-1.5 font-black text-xs sm:text-sm text-white">
                    {isCorrect ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>
                          {isEs
                            ? currentAttempt === 1
                              ? '¡Excelente! Acierto al 1er intento'
                              : currentAttempt === 2
                              ? '¡Muy bien! Acierto al 2do intento'
                              : '¡Correcto! Acierto al 3er intento'
                            : 'Correct answer!'}
                        </span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                        <span>
                          {isEs
                            ? 'Agotaste los 4 intentos (0 puntos)'
                            : '4 attempts reached (0 points)'}
                        </span>
                      </>
                    )}
                  </div>

                  <span
                    className={`font-black text-xs px-2 py-0.5 rounded-full border ${
                      earnedPoints > 0
                        ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                        : 'bg-rose-500/20 text-rose-300 border-rose-500/40'
                    }`}
                  >
                    +{formatPoints(earnedPoints)} pts
                  </span>
                </div>

                {/* If incorrect (after 4th attempt), program flew to and shows the correct answer */}
                {!isCorrect && (
                  <div className="p-2 rounded-xl bg-slate-950/90 border border-rose-500/30 text-slate-200 space-y-0.5">
                    <div className="flex items-center gap-1 text-amber-300 font-bold text-[11px]">
                      <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>
                        {isEs
                          ? 'Te hemos llevado en el mapa al lugar correcto:'
                          : 'The map navigated directly to the correct location:'}
                      </span>
                    </div>
                    <div className="font-extrabold text-white text-xs sm:text-sm">
                      {isEs ? question.targetName_es : question.targetName_en}
                      {question.capital_es && (
                        <span className="font-normal text-[10px] text-slate-300 block">
                          {isEs ? `Capital: ${question.capital_es}` : `Capital: ${question.capital_en}`}
                          {question.targetContinent_es ? ` • ${question.targetContinent_es}` : ''}
                        </span>
                      )}
                    </div>
                  </div>
                )}

                <p className="text-slate-300 text-[10.5px]">
                  {isEs ? question.explanation_es : question.explanation_en}
                </p>

                {/* View complete country dossier button */}
                {question.targetIso2 && onViewCountryDossier && (
                  <button
                    type="button"
                    onClick={() => onViewCountryDossier(question.targetId)}
                    className="text-[10px] font-semibold text-amber-300 hover:text-amber-200 underline flex items-center gap-1"
                  >
                    <Info className="w-3 h-3" />
                    <span>
                      {isEs
                        ? 'Ver expediente geográfico completo'
                        : 'View full geographical dossier'}
                    </span>
                  </button>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      {/* 3. PINNED BOTTOM ACTION CONTROLS */}
      {isSessionActive && (
        <div className="pt-2 border-t border-slate-800 shrink-0 space-y-1">
          {isAnswered ? (
            <button
              type="button"
              onClick={onNextQuestion}
              className="w-full py-2 sm:py-2.5 px-3.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:brightness-110 text-slate-950 font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/30 transition-all active:scale-95 cursor-pointer ring-2 ring-amber-400/50"
            >
              <span>{isEs ? 'Siguiente Pregunta' : 'Next Question'}</span>
              <ArrowRight className="w-4 h-4 text-slate-950 stroke-[2.5]" />
            </button>
          ) : (
            <div className="text-[10px] text-slate-400 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-amber-400 shrink-0" />
                <span>
                  {isEs
                    ? 'Toca el país en el mapa para responder.'
                    : 'Click the country on the map.'}
                </span>
              </div>

              <button
                type="button"
                onClick={onReturnToCategories}
                className="text-[10px] text-amber-400 hover:text-amber-300 font-semibold underline cursor-pointer"
              >
                {isEs ? 'Cambiar tema' : 'Change topic'}
              </button>
            </div>
          )}
        </div>
      )}
    </aside>
  );
};
