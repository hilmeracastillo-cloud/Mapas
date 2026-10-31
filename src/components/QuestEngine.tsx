import React, { useState, useEffect } from 'react';
import {
  BloomQuestQuestion,
  Language,
  QuestionProgress,
  CountryDossierData,
  LandformFeature,
  LensType,
} from '../types/geography';
import {
  HelpCircle,
  ChevronRight,
  ChevronLeft,
  CheckCircle,
  AlertTriangle,
  RotateCcw,
  Award,
  Compass,
  Zap,
  Globe2,
  TrendingUp,
  Mountain,
  ShieldCheck,
  ArrowLeft,
  BookOpen,
  Target,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { InteractiveHintText } from './InteractiveHintText';

interface QuestEngineProps {
  currentLang: Language;
  questions: BloomQuestQuestion[];
  currentQuestion: BloomQuestQuestion;
  currentAttempt: number;
  questionProgress: Record<string, QuestionProgress>;
  hintStage: 0 | 1 | 2 | 3; // 0 = none, 1 = spatial, 2 = economic + zoom, 3 = full recalibration
  isSuccess: boolean;
  onSelectLevel: (lvl: 1 | 2 | 3 | 4 | 'all') => void;
  selectedLevel: 1 | 2 | 3 | 4 | 'all';
  onNextQuestion: () => void;
  onRetryQuestion: () => void;
  onSelectQuestion: (question: BloomQuestQuestion) => void;
  onOpenDossier: (iso2: string) => void;
  onFlyToRegion: (bounds?: [[number, number], [number, number]]) => void;
  reviewList: string[];
  selectedCountry?: CountryDossierData | null;
  onFlyToFeature?: (coords: [number, number], zoom: number, feature?: LandformFeature) => void;
  onChangeLens?: (lens: LensType) => void;
}

export const QuestEngine: React.FC<QuestEngineProps> = ({
  currentLang,
  questions,
  currentQuestion,
  currentAttempt,
  questionProgress,
  hintStage,
  isSuccess,
  onSelectLevel,
  selectedLevel,
  onNextQuestion,
  onRetryQuestion,
  onSelectQuestion,
  onOpenDossier,
  onFlyToRegion,
  reviewList,
  selectedCountry,
  onFlyToFeature,
  onChangeLens,
}) => {
  const [isQuestionListOpen, setIsQuestionListOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState<'quest' | 'dossier'>('quest');

  const isEs = currentLang === 'es';
  const progress = questionProgress[currentQuestion.id];
  const isCompleted = progress?.passed;

  // Automatically switch tab to dossier when attempt 3 recalibrates or dossier requested
  useEffect(() => {
    if (hintStage === 3 && selectedCountry) {
      setActiveTab('dossier');
    }
  }, [hintStage, selectedCountry]);

  // Switch back to quest tab when question changes
  useEffect(() => {
    setActiveTab('quest');
    setIsQuestionListOpen(false);
  }, [currentQuestion.id]);

  const triggerConfetti = () => {
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.7, x: 0.8 },
      colors: ['#fbbf24', '#38bdf8', '#34d399', '#f43f5e'],
    });
  };

  const currentIndex = questions.findIndex((q) => q.id === currentQuestion.id);

  return (
    <aside
      className={`fixed top-14 sm:top-16 right-0 bottom-0 z-30 w-full sm:w-[350px] md:w-[380px] lg:w-[390px] bg-slate-900/95 backdrop-blur-xl border-l border-slate-700/80 shadow-2xl flex flex-col text-slate-100 transition-transform duration-300 ease-in-out select-none ${
        isCollapsed ? 'translate-x-full' : 'translate-x-0'
      }`}
      aria-label="Quest Interaction Panel"
    >
      {/* Floating Collapse / Expand Tab Button on the left edge (Touch-optimized for iPad/iPhone) */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -left-11 top-16 w-11 h-12 rounded-l-2xl bg-slate-900 border-l border-t border-b border-amber-400/50 text-amber-300 hover:text-white shadow-2xl flex items-center justify-center transition-all active:scale-95 z-40"
        title={isCollapsed ? (isEs ? 'Mostrar Panel de Retos' : 'Show Quest Panel') : (isEs ? 'Ocultar Panel (Ver Mapa Completo)' : 'Hide Panel (Full Map)')}
        aria-label="Toggle Panel"
      >
        {isCollapsed ? <ChevronLeft className="w-6 h-6 animate-pulse" /> : <ChevronRight className="w-6 h-6" />}
      </button>

      {/* Top Header of Right Panel */}
      <div className="p-3 sm:p-3.5 border-b border-slate-800 bg-gradient-to-b from-slate-800/90 to-slate-900/90 flex flex-col gap-2">
        {/* Navigation Tabs (Quest Challenge vs Dossier) */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 bg-slate-950/80 p-0.5 sm:p-1 rounded-xl border border-slate-800 text-[11px] sm:text-xs font-bold">
            <button
              onClick={() => setActiveTab('quest')}
              className={`px-2.5 sm:px-3 py-1 rounded-lg transition-all flex items-center gap-1.5 ${
                activeTab === 'quest'
                  ? 'bg-amber-400 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Target className="w-3.5 h-3.5" />
              <span>{isEs ? 'Reto Activo' : 'Quest'}</span>
            </button>

            {selectedCountry && (
              <button
                onClick={() => setActiveTab('dossier')}
                className={`px-2.5 sm:px-3 py-1 rounded-lg transition-all flex items-center gap-1.5 ${
                  activeTab === 'dossier'
                    ? 'bg-amber-400 text-slate-950 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span className="truncate max-w-[100px] sm:max-w-[120px]">
                  {isEs ? selectedCountry.name_es : selectedCountry.name_en}
                </span>
              </button>
            )}
          </div>

          <div className="flex items-center gap-1.5">
            <span className="text-[10px] sm:text-[11px] font-mono font-bold text-slate-400">
              {currentIndex + 1} / {questions.length}
            </span>
            <button
              onClick={() => setIsCollapsed(true)}
              className="px-2 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-[11px] font-medium flex items-center gap-0.5 transition-colors"
              title={isEs ? 'Minimizar para ver el mapa completo' : 'Minimize to view full map'}
            >
              <span className="hidden xs:inline">{isEs ? 'Mapa' : 'Map'}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Level indicator & Bloom badge (when on quest tab) */}
        {activeTab === 'quest' && (
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-1.5 truncate pr-2">
              <span className="flex h-2 w-2 relative shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-amber-400 font-mono truncate">
                {isEs ? currentQuestion.bloom_title_es : currentQuestion.bloom_title_en}
              </span>
            </div>
            <span className="text-[9px] sm:text-[10px] px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-300 font-mono shrink-0">
              {currentQuestion.teks_code}
            </span>
          </div>
        )}
      </div>

      {/* Main Scrollable Body */}
      <div className="flex-1 overflow-y-auto p-3 sm:p-3.5 space-y-3 sm:space-y-3.5 text-xs touch-scroll safe-pb">
        
        {/* ===================== VIEW 1: ACTIVE QUEST CHALLENGE ===================== */}
        {activeTab === 'quest' && (
          <div className="space-y-4">
            {/* Level Selector Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
              <button
                onClick={() => onSelectLevel('all')}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all ${
                  selectedLevel === 'all'
                    ? 'bg-amber-400 text-slate-950 shadow-sm'
                    : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {isEs ? 'Todos' : 'All'}
              </button>
              {[1, 2, 3, 4].map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => onSelectLevel(lvl as 1 | 2 | 3 | 4)}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all flex items-center gap-1 ${
                    selectedLevel === lvl
                      ? 'bg-amber-400 text-slate-950 shadow-sm'
                      : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  <span>L{lvl}</span>
                  <span className="hidden sm:inline">
                    {lvl === 1
                      ? isEs ? 'Conocimiento' : 'Knowledge'
                      : lvl === 2
                      ? isEs ? 'Comprensión' : 'Comprehension'
                      : lvl === 3
                      ? isEs ? 'Aplicación' : 'Application'
                      : isEs ? 'Análisis' : 'Analysis'}
                  </span>
                </button>
              ))}
            </div>

            {/* Question Card */}
            <div className="bg-slate-950/70 p-4 rounded-2xl border border-slate-800 space-y-2.5 shadow-inner">
              <p className="text-sm font-semibold text-slate-100 leading-snug">
                {isEs ? currentQuestion.question_es : currentQuestion.question_en}
              </p>
              <div className="flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-800/80 pt-2">
                <span className="flex items-center gap-1 text-amber-400/90 font-medium">
                  <span>👉</span>
                  <span>{isEs ? 'Haz clic en el país en el mapa' : 'Click the country on the map'}</span>
                </span>
                <span className="font-mono text-amber-300 font-bold px-2 py-0.5 rounded bg-slate-900 border border-slate-800">
                  {isEs ? `Intento ${currentAttempt} de 3` : `Attempt ${currentAttempt} of 3`}
                </span>
              </div>
            </div>

            {/* 3-Tier Scaffolded Hints */}
            {hintStage === 1 && (
              <div className="p-3.5 rounded-2xl bg-amber-500/15 border border-amber-500/40 animate-in fade-in duration-300 flex items-start gap-2.5">
                <Compass className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-bold text-amber-300 block mb-0.5">
                    {isEs ? 'Pista Espacial (Nivel 1):' : 'Spatial Guidance (Tier 1):'}
                  </span>
                  <p className="text-slate-200 leading-relaxed">
                    <InteractiveHintText
                      text={isEs ? currentQuestion.hint1_spatial_es : currentQuestion.hint1_spatial_en}
                      currentLang={currentLang}
                    />
                  </p>
                </div>
              </div>
            )}

            {hintStage === 2 && (
              <div className="p-3.5 rounded-2xl bg-sky-500/15 border border-sky-500/40 animate-in fade-in duration-300 space-y-2">
                <div className="flex items-start gap-2.5">
                  <Zap className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <span className="font-bold text-sky-300 block mb-0.5">
                      {isEs ? 'Pista Económica y Física (Nivel 2):' : 'Economic & Physical Clue (Tier 2):'}
                    </span>
                    <p className="text-slate-200 leading-relaxed">
                      <InteractiveHintText
                        text={isEs ? currentQuestion.hint2_economic_es : currentQuestion.hint2_economic_en}
                        currentLang={currentLang}
                      />
                    </p>
                  </div>
                </div>
                {currentQuestion.regional_bounds && (
                  <button
                    onClick={() => onFlyToRegion(currentQuestion.regional_bounds)}
                    className="w-full py-1.5 text-[11px] font-bold rounded-lg bg-sky-500/20 hover:bg-sky-500/30 text-sky-300 border border-sky-500/40 flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Compass className="w-3.5 h-3.5" />
                    <span>{isEs ? 'Enfocar Región en el Mapa' : 'Zoom to Regional Sector'}</span>
                  </button>
                )}
              </div>
            )}

            {hintStage === 3 && (
              <div className="p-4 rounded-2xl bg-purple-950/40 border border-purple-500/50 animate-in zoom-in-95 duration-300 space-y-3">
                <div className="flex items-start gap-2.5">
                  <AlertTriangle className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <span className="font-bold text-purple-300 block mb-1">
                      {isEs ? 'Recalibración Pedagógica (Solución Guiada):' : 'Pedagogical Recalibration (Guided Solution):'}
                    </span>
                    <p className="text-slate-200 leading-relaxed font-medium">
                      <InteractiveHintText
                        text={isEs ? currentQuestion.solution_explanation_es : currentQuestion.solution_explanation_en}
                        currentLang={currentLang}
                      />
                    </p>
                  </div>
                </div>

                <div className="flex gap-2 pt-1">
                  <button
                    onClick={() => {
                      onOpenDossier(currentQuestion.target_iso2);
                      setActiveTab('dossier');
                    }}
                    className="flex-1 py-2 text-xs font-bold rounded-xl bg-purple-600 hover:bg-purple-500 text-white flex items-center justify-center gap-1.5 shadow-md transition-colors"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>{isEs ? 'Ver Dossier del País' : 'View Country Dossier'}</span>
                  </button>
                  <button
                    onClick={onRetryQuestion}
                    className="px-3.5 py-2 text-xs font-bold rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 flex items-center gap-1 transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>{isEs ? 'Reintentar' : 'Retry'}</span>
                  </button>
                </div>
              </div>
            )}

            {/* Success Banner */}
            {isSuccess && (
              <div className="p-3.5 rounded-2xl bg-emerald-500/20 border border-emerald-500/50 animate-in zoom-in-95 duration-300 space-y-2">
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                  <div className="text-xs">
                    <span className="font-bold text-emerald-300 block">
                      {isEs ? '¡Respuesta Correcta!' : 'Correct Answer!'}
                    </span>
                    <span className="text-slate-300">
                      {isEs
                        ? `Identificaste con éxito a ${currentQuestion.target_name_es}.`
                        : `Successfully identified ${currentQuestion.target_name_en}.`}
                    </span>
                  </div>
                </div>

                <div className="flex gap-2 pt-1">
                  <button
                    onClick={() => {
                      onOpenDossier(currentQuestion.target_iso2);
                      setActiveTab('dossier');
                    }}
                    className="flex-1 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-[11px] flex items-center justify-center gap-1 transition-colors"
                  >
                    <BookOpen className="w-3 h-3 text-amber-400" />
                    <span>{isEs ? 'Ver Dossier' : 'View Dossier'}</span>
                  </button>
                  <button
                    onClick={() => {
                      triggerConfetti();
                      onNextQuestion();
                    }}
                    className="flex-1 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs flex items-center justify-center gap-1 shadow-md transition-colors"
                  >
                    <span>{isEs ? 'Siguiente Reto' : 'Next Challenge'}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {/* Challenge List Selector Dropdown */}
            <div className="pt-2 border-t border-slate-800">
              <button
                onClick={() => setIsQuestionListOpen(!isQuestionListOpen)}
                className="w-full p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 flex items-center justify-between text-xs font-semibold text-slate-200 transition-colors"
              >
                <span>{isEs ? 'Lista de Retos Disponibles' : 'Challenge List'} ({questions.length})</span>
                <span className="text-slate-400 text-[11px]">
                  {isQuestionListOpen ? '▲' : '▼'}
                </span>
              </button>

              {isQuestionListOpen && (
                <div className="mt-2 max-h-56 overflow-y-auto p-2 rounded-xl bg-slate-950/90 border border-slate-800 space-y-1">
                  {questions.map((q, idx) => {
                    const qProg = questionProgress[q.id];
                    const isQActive = q.id === currentQuestion.id;

                    return (
                      <div
                        key={q.id}
                        onClick={() => {
                          onSelectQuestion(q);
                          setIsQuestionListOpen(false);
                        }}
                        className={`p-2 rounded-lg text-xs cursor-pointer flex items-center justify-between transition-colors ${
                          isQActive
                            ? 'bg-amber-400/20 text-amber-300 border border-amber-400/30'
                            : 'hover:bg-slate-800/80 text-slate-300'
                        }`}
                      >
                        <div className="flex items-center gap-2 truncate">
                          <span className="font-mono text-[10px] text-slate-400 font-bold">L{q.level}</span>
                          <span className="truncate">{isEs ? q.target_name_es : q.target_name_en}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          {qProg?.passed && <span className="text-emerald-400 font-bold">✓</span>}
                          {reviewList.includes(q.id) && (
                            <span className="text-rose-400 font-bold text-[10px] px-1 rounded bg-rose-500/20">
                              Refuerzo
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Curriculum Strand Tag */}
            <div className="flex items-center gap-1.5 text-slate-400 text-[11px]">
              <Award className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>{isEs ? 'Dominio:' : 'Strand:'} {currentQuestion.nwea_strand}</span>
            </div>
          </div>
        )}

        {/* ===================== VIEW 2: DEDICATED COUNTRY DOSSIER ===================== */}
        {activeTab === 'dossier' && selectedCountry && (
          <div className="space-y-4">
            {/* Back to Quest button */}
            <button
              onClick={() => setActiveTab('quest')}
              className="w-full py-1.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-300 text-xs font-bold flex items-center justify-center gap-1.5 border border-slate-700 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{isEs ? '← Volver al Reto Activo' : '← Back to Active Quest'}</span>
            </button>

            {/* Country Identity */}
            <div className="flex items-center gap-3.5 bg-slate-800/60 p-3 rounded-2xl border border-slate-700/70">
              <img
                src={`https://flagcdn.com/w160/${selectedCountry.iso2.toLowerCase()}.png`}
                alt={`${selectedCountry.name_en} flag`}
                className="w-14 h-10 object-cover rounded shadow border border-slate-600"
              />
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-extrabold text-white">
                    {isEs ? selectedCountry.name_es : selectedCountry.name_en}
                  </h3>
                  <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-amber-400/20 text-amber-300 border border-amber-400/30">
                    {selectedCountry.iso3}
                  </span>
                </div>
                <div className="text-[11px] text-slate-400 flex items-center gap-1 mt-0.5">
                  <Globe2 className="w-3 h-3 text-sky-400" />
                  <span>{isEs ? selectedCountry.continent_es : selectedCountry.continent}</span>
                  <span>•</span>
                  <span className="text-emerald-400 font-mono">${selectedCountry.gdp_billion}B GDP</span>
                </div>
              </div>
            </div>

            {/* Capital */}
            <div className="flex items-center justify-between bg-slate-800/80 px-3 py-2 rounded-xl border border-slate-700">
              <div className="flex items-center gap-2">
                <span className="text-amber-400 text-base">★</span>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-bold block">
                    {isEs ? 'Capital Oficial' : 'Official Capital'}
                  </span>
                  <span className="font-semibold text-white">
                    {isEs ? selectedCountry.capital_es : selectedCountry.capital_en}
                  </span>
                </div>
              </div>
              {onFlyToFeature && (
                <button
                  onClick={() => onFlyToFeature(selectedCountry.capital_coords, 8)}
                  className="text-xs px-2.5 py-1 bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 rounded-lg font-medium border border-amber-400/30 flex items-center gap-1 transition-colors"
                >
                  <Compass className="w-3.5 h-3.5" />
                  <span>{isEs ? 'Centrar' : 'Fly To'}</span>
                </button>
              )}
            </div>

            {/* Demographics */}
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-slate-800/50 p-2.5 rounded-xl border border-slate-700/60">
                <span className="text-[10px] text-slate-400 block font-medium">
                  {isEs ? 'Población' : 'Population'}
                </span>
                <span className="text-xs font-bold text-white font-mono">{selectedCountry.population}</span>
              </div>
              <div className="bg-slate-800/50 p-2.5 rounded-xl border border-slate-700/60">
                <span className="text-[10px] text-slate-400 block font-medium">
                  {isEs ? 'Superficie' : 'Land Area'}
                </span>
                <span className="text-xs font-bold text-white font-mono">{selectedCountry.area_sqkm}</span>
              </div>
            </div>

            {/* Physical Summary */}
            <div className="space-y-1">
              <span className="font-bold text-sky-400 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                <Mountain className="w-3.5 h-3.5" />
                <span>{isEs ? 'Relieve y Geografía Física' : 'Physical Geography & Relief'}</span>
              </span>
              <p className="text-xs text-slate-300 leading-relaxed bg-slate-800/40 p-2.5 rounded-xl border border-slate-700/50">
                {isEs ? selectedCountry.physical_geography_summary.es : selectedCountry.physical_geography_summary.en}
              </p>
            </div>

            {/* Prominent Landforms */}
            <div className="space-y-2">
              <span className="font-bold text-amber-400 uppercase tracking-wider text-[11px] block">
                {isEs ? 'Accidentes Geográficos Clave' : 'Key Physical Landforms'}
              </span>
              <div className="space-y-1.5">
                {selectedCountry.landforms.map((item) => (
                  <div
                    key={item.id}
                    className="bg-slate-800/60 hover:bg-slate-800 p-2 rounded-xl border border-slate-700/70 flex items-center justify-between"
                  >
                    <div>
                      <span className="font-semibold text-white text-xs block">
                        {isEs ? item.name_es : item.name_en}
                      </span>
                      <span className="text-[10px] text-slate-400">{item.type}</span>
                    </div>
                    {onFlyToFeature && (
                      <button
                        onClick={() => {
                          if (onChangeLens) onChangeLens('physical');
                          onFlyToFeature(item.coords, 8, item);
                        }}
                        className="px-2 py-0.5 rounded bg-sky-500/20 hover:bg-sky-500/30 text-sky-300 border border-sky-500/40 text-[11px] font-medium flex items-center gap-1"
                      >
                        <Compass className="w-3 h-3" />
                        <span>{isEs ? 'Volar' : 'Fly To'}</span>
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Macroeconomic Trade */}
            <div className="space-y-2">
              <span className="font-bold text-emerald-400 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>{isEs ? 'Comercio Exterior ($B)' : 'Foreign Trade ($B)'}</span>
              </span>
              <div className="p-2.5 rounded-xl bg-slate-800/50 border border-slate-700/60 space-y-1 text-xs">
                <span className="font-bold text-emerald-300 block">
                  {isEs ? 'Exportaciones:' : 'Exports:'} ${selectedCountry.main_exports.total_val_billion}B
                </span>
                <p className="text-slate-300 text-[11px] leading-relaxed">
                  {(isEs ? selectedCountry.main_exports.es : selectedCountry.main_exports.en).join(', ')}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer of Right Panel */}
      {activeTab === 'quest' && (
        <div className="p-3.5 border-t border-slate-800 bg-slate-900/90 flex items-center justify-between text-xs">
          <button
            onClick={onNextQuestion}
            className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1 transition-colors"
          >
            <span>{isEs ? 'Saltar Reto' : 'Skip Challenge'}</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>

          <span className="text-[11px] text-slate-400 font-mono">
            {isCompleted ? (
              <span className="text-emerald-400 font-bold">✓ {isEs ? 'Aprobado' : 'Passed'}</span>
            ) : (
              <span>{isEs ? 'En progreso' : 'In Progress'}</span>
            )}
          </span>
        </div>
      )}
    </aside>
  );
};
