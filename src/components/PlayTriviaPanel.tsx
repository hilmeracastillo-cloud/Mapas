import React, { useRef, useEffect } from 'react';
import { Language, CountryDossierData } from '../types/geography';
import { TriviaFlavor, TriviaQuestion, TriviaStats } from '../types/trivia';
import {
  Trophy,
  Flame,
  CheckCircle2,
  XCircle,
  ArrowRight,
  RotateCcw,
  Compass,
  Globe2,
  Landmark,
  Flag,
  Sparkles,
  MapPin,
  Lightbulb,
  AlertCircle,
  HelpCircle,
  ArrowLeft,
  Info
} from 'lucide-react';

interface PlayTriviaPanelProps {
  currentLang: Language;
  currentFlavor: TriviaFlavor | null;
  onSelectFlavor: (flavor: TriviaFlavor) => void;
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
  currentFlavor,
  onSelectFlavor,
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

  const categoryCards: {
    id: TriviaFlavor;
    title_es: string;
    title_en: string;
    desc_es: string;
    desc_en: string;
    icon: React.ReactNode;
    colorClasses: string;
    borderClasses: string;
  }[] = [
    {
      id: 'continents',
      title_es: 'Continentes',
      title_en: 'Continents',
      desc_es: 'Localiza los 6 continentes habitados en el mapa mundi.',
      desc_en: 'Locate the 6 inhabited continents on the world map.',
      icon: <Globe2 className="w-6 h-6 text-emerald-400" />,
      colorClasses: 'from-emerald-500/20 to-teal-500/10 hover:border-emerald-400',
      borderClasses: 'border-emerald-500/30',
    },
    {
      id: 'countries',
      title_es: 'Países',
      title_en: 'Countries',
      desc_es: 'Encuentra cualquiera de los 198 países del planeta en el mapa.',
      desc_en: 'Find any of the 198 countries on Earth directly on the map.',
      icon: <Compass className="w-6 h-6 text-amber-400" />,
      colorClasses: 'from-amber-500/20 to-yellow-500/10 hover:border-amber-400',
      borderClasses: 'border-amber-500/30',
    },
    {
      id: 'capitals',
      title_es: 'Capitales',
      title_en: 'Capitals',
      desc_es: 'Se te da una capital del mundo; localiza y pulsa su país en el mapa.',
      desc_en: 'Given a world capital; locate and click its country on the map.',
      icon: <Landmark className="w-6 h-6 text-sky-400" />,
      colorClasses: 'from-sky-500/20 to-blue-500/10 hover:border-sky-400',
      borderClasses: 'border-sky-500/30',
    },
    {
      id: 'flags',
      title_es: 'Banderas',
      title_en: 'Flags',
      desc_es: 'Observa la bandera oficial y pulsa el país correspondiente en el mapa.',
      desc_en: 'View the official national flag and tap the matching country on the map.',
      icon: <Flag className="w-6 h-6 text-rose-400" />,
      colorClasses: 'from-rose-500/20 to-pink-500/10 hover:border-rose-400',
      borderClasses: 'border-rose-500/30',
    },
  ];

  // Helper to format points text safely
  const formatPoints = (pts?: number | null) => {
    const val = typeof pts === 'number' && !isNaN(pts) ? pts : 0;
    return val % 1 === 0 ? val.toString() : val.toFixed(2);
  };

  const panelRef = useRef<HTMLElement>(null);

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

  return (
    <aside
      ref={panelRef}
      className={`fixed sm:absolute top-16 sm:top-20 bottom-3 sm:bottom-6 right-3 sm:right-6 w-[calc(100vw-24px)] sm:w-[420px] md:w-[450px] max-h-[calc(100dvh-5.5rem)] bg-slate-900/95 backdrop-blur-xl border border-slate-700/80 rounded-2xl sm:rounded-3xl shadow-2xl p-3.5 sm:p-4 text-slate-100 ring-1 ring-amber-400/20 duration-300 flex flex-col min-h-0 select-text transition-all ${
        isBehind
          ? 'z-20 opacity-20 pointer-events-none scale-95'
          : 'z-40 opacity-100 pointer-events-auto scale-100 animate-in slide-in-from-right'
      }`}
      style={{ touchAction: 'pan-y' }}
      aria-label="Panel de Trivia"
    >
      {/* 1. TOP PINNED SECTION (Header & Live Score Counter - never scrolls away) */}
      <div className="shrink-0 space-y-3 pb-3 border-b border-slate-800">
        {/* Top Header: Title, Category back button, Exit to Explore */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 to-yellow-400 text-slate-950 font-black flex items-center justify-center shrink-0 shadow-md shadow-amber-500/20">
              <Trophy className="w-5 h-5 text-slate-950" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30">
                  {isEs ? 'Trivia Cartográfica' : 'Map Trivia'}
                </span>
                {(stats?.currentStreak ?? 0) >= 2 && (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/30 flex items-center gap-1">
                    <Flame className="w-3 h-3 text-orange-400 fill-orange-400" />
                    <span>{stats?.currentStreak ?? 0} 🔥</span>
                  </span>
                )}
              </div>
              <h2 className="text-sm sm:text-base font-extrabold text-white mt-0.5">
                {currentFlavor === null
                  ? isEs
                    ? 'Selección de Categoría'
                    : 'Category Selection'
                  : isEs
                  ? 'Localiza en el Mapa'
                  : 'Locate on the Map'}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            {currentFlavor !== null && (
              <button
                type="button"
                onClick={onReturnToCategories}
                title={isEs ? 'Volver al menú de categorías' : 'Return to categories'}
                className="text-xs font-semibold text-slate-300 hover:text-white px-2 py-1 rounded-xl bg-slate-800/80 hover:bg-slate-700 transition-colors border border-slate-700 flex items-center gap-1"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{isEs ? 'Categorías' : 'Categories'}</span>
              </button>
            )}

            <button
              type="button"
              onClick={onCloseToExplore}
              title={isEs ? 'Cambiar al modo Explorar' : 'Switch to Explore mode'}
              className="text-xs font-bold text-slate-400 hover:text-white px-2.5 py-1 rounded-xl bg-slate-800/80 hover:bg-slate-700 transition-colors border border-slate-700"
            >
              {isEs ? 'Explorar' : 'Explore'}
            </button>
          </div>
        </div>

        {/* VISIBLE LIVE SCORE COUNTER */}
        <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-2.5 sm:p-3 flex items-center justify-between shadow-inner">
          <div className="flex items-center gap-3">
            <div className="flex flex-col">
              <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400">
                {isEs ? 'Puntos Acumulados' : 'Total Score'}
              </span>
              <span className="text-lg sm:text-xl font-black text-amber-400 leading-tight">
                {formatPoints(stats?.totalScore)}{' '}
                <span className="text-xs text-slate-500 font-semibold">
                  / {stats?.totalAnswered ?? 0} {isEs ? 'preg.' : 'q.'}
                </span>
              </span>
            </div>

            <div className="h-7 w-[1px] bg-slate-800" />

            <div className="flex flex-col">
              <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400">
                {isEs ? 'Al 1er Intento' : '1st Attempt'}
              </span>
              <span className="text-base sm:text-lg font-bold text-emerald-400 leading-tight">
                {stats?.perfectFirstAttempts ?? 0}
              </span>
            </div>

            <div className="h-7 w-[1px] bg-slate-800" />

            <div className="flex flex-col">
              <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400">
                {isEs ? 'Racha' : 'Streak'}
              </span>
              <span className="text-base sm:text-lg font-bold text-orange-400 leading-tight flex items-center gap-1">
                {stats?.currentStreak ?? 0} 🔥
              </span>
            </div>
          </div>

          {(stats?.totalAnswered ?? 0) > 0 && (
            <button
              type="button"
              onClick={onResetStats}
              title={isEs ? 'Reiniciar estadísticas de trivia' : 'Reset score'}
              className="p-1.5 rounded-lg bg-slate-800/70 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors border border-slate-700/50"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* 2. SCROLLABLE MIDDLE SECTION (Category Menu or Active Question) */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden min-h-0 py-3 pr-1 space-y-3.5 overscroll-contain">

        {/* =========================================================================
            STATE 1: MENU DE CATEGORÍAS (NO MUESTRA PREGUNTA ANTES DE SELECCIONAR)
            ========================================================================= */}
        {currentFlavor === null && (
          <div className="space-y-3.5 py-1">
            <div className="text-left space-y-1">
              <h3 className="text-sm font-bold text-white">
                {isEs
                  ? 'Selecciona una categoría para comenzar:'
                  : 'Select a category to begin:'}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {isEs
                  ? 'No hay opciones escritas. Deberás localizar y pulsar directamente en el mapa la respuesta correcta.'
                  : 'No written choices. You must locate and click directly on the map to answer.'}
              </p>
            </div>

            {/* Scoring rules info box */}
            <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-[11px] text-amber-200/90 space-y-1">
              <div className="font-bold text-amber-300 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>{isEs ? 'Sistema de Puntos y Pistas:' : 'Scoring & Hints System:'}</span>
              </div>
              <ul className="space-y-0.5 list-disc list-inside text-slate-300">
                <li>
                  <strong className="text-emerald-300">1er Intento:</strong>{' '}
                  {isEs ? '1.0 punto (sin pistas)' : '1.0 point (no hints)'}
                </li>
                <li>
                  <strong className="text-yellow-300">2do Intento:</strong>{' '}
                  {isEs ? '0.5 punto (+ Pista 1)' : '0.5 point (+ Hint 1)'}
                </li>
                <li>
                  <strong className="text-orange-300">3er Intento:</strong>{' '}
                  {isEs ? '0.25 punto (+ Pista 2)' : '0.25 point (+ Hint 2)'}
                </li>
                <li>
                  <strong className="text-rose-300">4to Intento:</strong>{' '}
                  {isEs ? '0 puntos (el programa te lleva y muestra la respuesta)' : '0 points (program navigates to answer)'}
                </li>
              </ul>
            </div>

            {/* 4 Category Selection Cards */}
            <div className="grid grid-cols-1 gap-2.5">
              {categoryCards.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => onSelectFlavor(cat.id)}
                  className={`w-full text-left p-3.5 rounded-2xl bg-gradient-to-r ${cat.colorClasses} border ${cat.borderClasses} transition-all active:scale-[0.99] flex items-center justify-between group shadow-lg`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-slate-900/90 border border-slate-700 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      {cat.icon}
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-sm font-extrabold text-white group-hover:text-amber-300 transition-colors">
                        {isEs ? cat.title_es : cat.title_en}
                      </h4>
                      <p className="text-[11px] text-slate-300 line-clamp-1 mt-0.5">
                        {isEs ? cat.desc_es : cat.desc_en}
                      </p>
                    </div>
                  </div>

                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-1 transition-all shrink-0 ml-2" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* =========================================================================
            STATE 2: PREGUNTA ACTIVA (SIN OPCIONES ESCRITAS - SOLO CLICK EN MAPA)
            ========================================================================= */}
        {currentFlavor !== null && question && (
          <div className="space-y-3.5">
            {/* Category Pill Indicator & Attempts Badge */}
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono uppercase text-amber-400 font-bold flex items-center gap-1.5">
                {currentFlavor === 'continents' && <Globe2 className="w-3.5 h-3.5" />}
                {currentFlavor === 'countries' && <Compass className="w-3.5 h-3.5" />}
                {currentFlavor === 'capitals' && <Landmark className="w-3.5 h-3.5" />}
                {currentFlavor === 'flags' && <Flag className="w-3.5 h-3.5" />}
                <span>
                  {isEs
                    ? currentFlavor === 'continents'
                      ? 'Continentes'
                      : currentFlavor === 'countries'
                      ? 'Países'
                      : currentFlavor === 'capitals'
                      ? 'Capitales'
                      : 'Banderas'
                    : currentFlavor}
                </span>
              </span>

              {/* Attempt Counter & Value */}
              {!isAnswered ? (
                <span
                  className={`text-[11px] font-bold px-2 py-0.5 rounded-full border ${
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
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                  {isEs ? 'Respondida' : 'Completed'}
                </span>
              )}
            </div>

            {/* Question Card */}
            <div className="bg-gradient-to-b from-slate-800/80 to-slate-900/90 border border-slate-700/90 rounded-2xl p-4 space-y-3 shadow-lg">
              <div className="space-y-1">
                <h3 className="text-base sm:text-lg font-black text-white leading-snug">
                  {isEs ? question.question_es : question.question_en}
                </h3>
              </div>

              {/* Special Visual: National Flag for Flags Flavor */}
              {currentFlavor === 'flags' && question.flagUrl && (
                <div className="flex flex-col items-center justify-center p-3 rounded-2xl bg-slate-950/90 border border-slate-800 shadow-inner">
                  <img
                    src={question.flagUrl}
                    alt="Bandera nacional para identificar"
                    className="w-36 h-24 object-cover rounded-xl shadow-2xl ring-2 ring-white/10 border border-slate-700"
                    loading="eager"
                  />
                  <span className="text-[11px] text-slate-400 font-medium mt-2">
                    {isEs
                      ? 'Busca y pulsa este país directamente en el mapa'
                      : 'Find and tap this country directly on the map'}
                  </span>
                </div>
              )}

              {/* Special Clue: Capital Name Highlight for Capitals Flavor */}
              {currentFlavor === 'capitals' && question.capital_es && (
                <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-sky-500/10 border border-sky-500/30 text-sky-200">
                  <Landmark className="w-5 h-5 text-sky-400 shrink-0" />
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-sky-300 block">
                      {isEs ? 'Capital a ubicar' : 'Capital to locate'}
                    </span>
                    <strong className="text-base text-white">
                      {isEs ? question.capital_es : question.capital_en}
                    </strong>
                  </div>
                </div>
              )}

              {/* Instructions banner: NO written alternatives */}
              <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-center gap-2 text-xs text-slate-300">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 animate-bounce" />
                <span>
                  {isEs
                    ? 'Haz clic directamente sobre el mapa mundi para enviar tu respuesta.'
                    : 'Click directly on the world map to submit your answer.'}
                </span>
              </div>
            </div>

            {/* WRONG GUESS NOTIFICATION WITH FEEDBACK */}
            {!isAnswered && lastWrongGuessName && (
              <div className="p-3 rounded-2xl bg-rose-950/70 border border-rose-500/50 text-xs text-rose-200 space-y-1 animate-in fade-in">
                <div className="flex items-center gap-1.5 font-bold text-rose-300">
                  <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>
                    {isEs
                      ? `Has pulsado "${lastWrongGuessName}". No es la respuesta correcta.`
                      : `You clicked "${lastWrongGuessName}". That is not correct.`}
                  </span>
                </div>
                <p className="text-[11px] text-slate-300">
                  {isEs
                    ? '¡No te desanimes! Revisa la pista a continuación y prueba de nuevo.'
                    : 'Check the hint below and try again on the map.'}
                </p>
              </div>
            )}

            {/* PROGRESSIVE HINTS ACCORDING TO ATTEMPT */}
            {!isAnswered && currentAttempt >= 2 && (
              <div className="space-y-2">
                {/* Hint 1 (after 1st wrong attempt) */}
                <div className="p-3 rounded-2xl bg-amber-950/60 border border-amber-500/50 text-xs text-amber-200 space-y-1 animate-in fade-in">
                  <div className="flex items-center gap-1.5 font-bold text-amber-300">
                    <Lightbulb className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{isEs ? 'Pista 1' : 'Hint 1'}</span>
                  </div>
                  <p className="text-[11px] text-slate-200 leading-relaxed">
                    {isEs ? question.hint1_es : question.hint1_en}
                  </p>
                </div>

                {/* Hint 2 (after 2nd wrong attempt) */}
                {currentAttempt >= 3 && (
                  <div className="p-3 rounded-2xl bg-sky-950/60 border border-sky-500/50 text-xs text-sky-200 space-y-1 animate-in fade-in">
                    <div className="flex items-center gap-1.5 font-bold text-sky-300">
                      <Lightbulb className="w-4 h-4 text-sky-400 shrink-0" />
                      <span>{isEs ? 'Pista 2' : 'Hint 2'}</span>
                    </div>
                    <p className="text-[11px] text-slate-200 leading-relaxed">
                      {isEs ? question.hint2_es : question.hint2_en}
                    </p>
                  </div>
                )}

                {/* Hint 3 (after 3rd wrong attempt) */}
                {currentAttempt >= 4 && (
                  <div className="p-3 rounded-2xl bg-orange-950/60 border border-orange-500/50 text-xs text-orange-200 space-y-1 animate-in fade-in">
                    <div className="flex items-center gap-1.5 font-bold text-orange-300">
                      <AlertCircle className="w-4 h-4 text-orange-400 shrink-0" />
                      <span>{isEs ? 'Pista 3 (Último intento)' : 'Hint 3 (Final attempt)'}</span>
                    </div>
                    <p className="text-[11px] text-slate-200 leading-relaxed">
                      {isEs ? question.hint3_es : question.hint3_en}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* RESOLVED STATE: EXPLANATION & POINTS SUMMARY */}
            {isAnswered && (
              <div
                className={`p-4 rounded-2xl border text-xs leading-relaxed space-y-3 animate-in fade-in duration-300 ${
                  isCorrect
                    ? 'bg-emerald-950/80 border-emerald-500/60 text-emerald-200'
                    : 'bg-rose-950/80 border-rose-500/60 text-rose-200'
                }`}
              >
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <div className="flex items-center gap-2 font-black text-sm text-white">
                    {isCorrect ? (
                      <>
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
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
                        <XCircle className="w-5 h-5 text-rose-400 shrink-0" />
                        <span>
                          {isEs
                            ? 'Agotaste los 4 intentos (0 puntos)'
                            : '4 attempts reached (0 points)'}
                        </span>
                      </>
                    )}
                  </div>

                  <span
                    className={`font-black text-sm px-2.5 py-0.5 rounded-full border ${
                      earnedPoints > 0
                        ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                        : 'bg-rose-500/20 text-rose-300 border-rose-500/40'
                    }`}
                  >
                    +{formatPoints(earnedPoints)} {isEs ? 'pts' : 'pts'}
                  </span>
                </div>

                {/* If incorrect (after 4th attempt), program flew to and shows the correct answer */}
                {!isCorrect && (
                  <div className="p-2.5 rounded-xl bg-slate-950/90 border border-rose-500/30 text-slate-200 space-y-1">
                    <div className="flex items-center gap-1.5 text-amber-300 font-bold text-xs">
                      <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>
                        {isEs
                          ? 'Te hemos llevado en el mapa al lugar correcto:'
                          : 'The map navigated directly to the correct location:'}
                      </span>
                    </div>
                    <div className="font-extrabold text-white text-sm">
                      {isEs ? question.targetName_es : question.targetName_en}
                      {question.capital_es && (
                        <span className="font-normal text-xs text-slate-300 block">
                          {isEs ? `Capital: ${question.capital_es}` : `Capital: ${question.capital_en}`}
                          {question.targetContinent_es ? ` • ${question.targetContinent_es}` : ''}
                        </span>
                      )}
                    </div>
                  </div>
                )}

                <p className="text-slate-300">
                  {isEs ? question.explanation_es : question.explanation_en}
                </p>

                {/* View complete country dossier button */}
                {question.targetIso2 && onViewCountryDossier && (
                  <button
                    type="button"
                    onClick={() => onViewCountryDossier(question.targetId)}
                    className="text-[11px] font-semibold text-amber-300 hover:text-amber-200 underline flex items-center gap-1"
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>
                      {isEs
                        ? 'Ver expediente geográfico completo'
                        : 'View full geographical dossier'}
                    </span>
                  </button>
                )}

                {/* Next question CTA button */}
                <div className="pt-1">
                  <button
                    type="button"
                    onClick={onNextQuestion}
                    className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 text-slate-950 font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/25 transition-all active:scale-95"
                  >
                    <span>{isEs ? 'Siguiente Pregunta' : 'Next Question'}</span>
                    <ArrowRight className="w-4 h-4 text-slate-950 stroke-[2.5]" />
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* 3. PINNED BOTTOM FOOTER */}
      {currentFlavor !== null && !isAnswered && (
        <div className="pt-2.5 border-t border-slate-800/80 shrink-0 text-[11px] text-slate-400 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>
              {isEs
                ? 'Toca el continente o país en el mapa para responder.'
                : 'Click the continent or country on the map.'}
            </span>
          </div>

          <button
            type="button"
            onClick={onReturnToCategories}
            className="text-[11px] text-amber-400 hover:text-amber-300 font-semibold underline"
          >
            {isEs ? 'Cambiar sabor' : 'Change category'}
          </button>
        </div>
      )}
    </aside>
  );
};
