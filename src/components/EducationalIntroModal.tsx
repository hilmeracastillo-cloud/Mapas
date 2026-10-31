import React, { useState, useEffect } from 'react';
import { Language } from '../types/geography';
import {
  Compass,
  Globe2,
  CheckCircle2,
  BookOpen,
  Award,
  Layers,
  ArrowRight,
  ShieldCheck,
  GraduationCap,
  Sparkles,
  School,
  X,
  Target,
  Lock,
  Unlock,
  Mountain,
  Eye,
  HelpCircle,
  MapPin
} from 'lucide-react';

interface EducationalIntroModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  onSelectLang: (lang: Language) => void;
  onStartLevel1: () => void;
  initialTab?: 'learning_roadmap' | 'for_teachers';
}

export const EducationalIntroModal: React.FC<EducationalIntroModalProps> = ({
  isOpen,
  onClose,
  currentLang,
  onSelectLang,
  onStartLevel1,
  initialTab = 'learning_roadmap',
}) => {
  const [activeTab, setActiveTab] = useState<'learning_roadmap' | 'for_teachers'>(initialTab);
  const [teacherLangMode, setTeacherLangMode] = useState<'bilingual' | 'es' | 'en'>('bilingual');
  const [dontShowAgain, setDontShowAgain] = useState(false);

  useEffect(() => {
    if (isOpen && initialTab) {
      setActiveTab(initialTab);
    }
  }, [isOpen, initialTab]);

  if (!isOpen) return null;

  const isEs = currentLang === 'es';

  const handleStart = () => {
    if (dontShowAgain) {
      localStorage.setItem('geomaster_seen_intro_v2', 'true');
    }
    onStartLevel1();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-5 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-700/80 rounded-2xl sm:rounded-3xl w-full max-w-5xl max-h-[94dvh] flex flex-col shadow-2xl overflow-hidden text-slate-100 ring-1 ring-amber-400/20">
        
        {/* Top Header */}
        <div className="p-3.5 sm:p-5 border-b border-slate-800 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5 sm:gap-3.5">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-tr from-amber-500 via-amber-400 to-yellow-300 flex items-center justify-center text-slate-950 shadow-md shadow-amber-500/30 shrink-0">
              <Compass className="w-6 h-6 text-slate-950 stroke-[2.5]" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="text-base sm:text-xl font-black text-white tracking-tight">
                  GeoMaster Explorer
                </h1>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30">
                  {isEs ? 'Sistema de Aprendizaje Progresivo' : 'Progressive Mastery System'}
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">
                {isEs
                  ? 'Alfabetización Cartográfica, Aprendizaje por Capítulos y Marco Curricular'
                  : 'Cartographic Literacy, Chapter-by-Chapter Learning & Curriculum Alignment'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Quick Language Toggle */}
            <div className="flex items-center p-0.5 bg-slate-950 rounded-xl border border-slate-800 text-xs">
              <button
                type="button"
                onClick={() => onSelectLang('es')}
                className={`px-2.5 py-1 rounded-lg font-bold transition-all flex items-center gap-1 ${
                  currentLang === 'es'
                    ? 'bg-amber-400 text-slate-950 shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <span>🇪🇸</span>
                <span className="hidden xs:inline">Español</span>
              </button>
              <button
                type="button"
                onClick={() => onSelectLang('en')}
                className={`px-2.5 py-1 rounded-lg font-bold transition-all flex items-center gap-1 ${
                  currentLang === 'en'
                    ? 'bg-amber-400 text-slate-950 shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <span>🇺🇸</span>
                <span className="hidden xs:inline">English</span>
              </button>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 sm:p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              title={isEs ? 'Cerrar' : 'Close'}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Switcher: 1. Student Learning Journey | 2. For Teachers */}
        <div className="flex items-center border-b border-slate-800 bg-slate-950/80 px-4 sm:px-6 text-xs font-semibold gap-2 py-2 shrink-0">
          <button
            type="button"
            onClick={() => setActiveTab('learning_roadmap')}
            className={`px-4 py-2 rounded-xl transition-all flex items-center gap-2 ${
              activeTab === 'learning_roadmap'
                ? 'bg-amber-400 text-slate-950 font-bold shadow'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>{isEs ? 'Ruta de Aprendizaje por Capítulos (Estudiantes)' : 'Chapter Learning Roadmap (Students)'}</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('for_teachers')}
            className={`px-4 py-2 rounded-xl transition-all flex items-center gap-2 border ${
              activeTab === 'for_teachers'
                ? 'bg-blue-600 text-white font-bold border-blue-400 shadow'
                : 'border-slate-800 bg-slate-900/60 text-slate-300 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <GraduationCap className="w-4 h-4 text-blue-300" />
            <span className="font-bold">For Teachers, Para Profesores</span>
            <span className="text-[10px] font-mono text-blue-200 bg-blue-500/20 px-1.5 py-0.5 rounded hidden md:inline">
              Nord Anglia · TEKS · MAP · Bloom
            </span>
          </button>
        </div>

        {/* Scrollable Modal Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">

          {/* TAB 1: CHAPTER-BY-CHAPTER LEARNING ROADMAP (BEFORE EXPLORING ALL COUNTRIES) */}
          {activeTab === 'learning_roadmap' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              
              {/* Introduction Banner: Why Chapter Learning First */}
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-500/15 via-slate-800 to-sky-500/10 border border-amber-500/30 space-y-2">
                <div className="flex items-center justify-between">
                  <h2 className="text-base sm:text-lg font-black text-white flex items-center gap-2">
                    <Target className="w-5 h-5 text-amber-400" />
                    <span>
                      {isEs
                        ? 'Aprendizaje y Evaluación Conducidos por Capítulos'
                        : 'Structured Chapter-by-Chapter Learning & Mastery Gating'}
                    </span>
                  </h2>
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 border border-amber-400/40">
                    {isEs ? 'Requisito de Aprobación: 90%' : '90% Pass Gate'}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {isEs
                    ? 'Para garantizar una comprensión profunda y rigurosa de la geografía, el estudiante debe completar y aprobar obligatoriamente cada nivel de aprendizaje antes de tener acceso a la exploración libre y evaluación avanzada de todos los países.'
                    : 'To ensure genuine, deep geographical literacy, students must complete and pass each learning level in strict pedagogical order before full open exploration of all sovereign countries is unlocked.'}
                </p>
              </div>

              {/* Sequential 4-Level Roadmap Cards */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
                    {isEs ? 'Secuencia Pedagógica Obligatoria (4 Niveles):' : 'Mandatory Pedagogical Sequence (4 Levels):'}
                  </span>
                  <span className="text-[11px] text-slate-400">
                    {isEs ? 'Bloqueo progresivo con puerta del 90%' : 'Progressive gating at 90% threshold'}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  {/* Level 1 Card */}
                  <div className="p-4 rounded-2xl bg-slate-950 border border-blue-500/40 space-y-2.5 relative group hover:border-blue-400 transition-all">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 text-[11px] font-bold border border-blue-500/40 flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>{isEs ? 'Nivel 1 (Punto de Partida)' : 'Level 1 (Starting Point)'}</span>
                      </span>
                      <span className="text-[10px] font-mono text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                        {isEs ? 'Desbloqueado' : 'Unlocked'}
                      </span>
                    </div>

                    <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
                      <span>🗺️</span>
                      <span>{isEs ? 'Lectura de los 3 Tipos de Mapas' : 'Reading 3 Fundamental Map Types'}</span>
                    </h3>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {isEs
                        ? 'Presentación visual interactiva (pantalla dividida 2/3 mapa real y 1/3 libro guiado) de los 3 tipos de mapas, sus características y usos en 4 subcapítulos:'
                        : 'Interactive two-zone visual exhibit (2/3 map, 1/3 guided book) presenting the 3 map types in 4 progressive subchapters:'}
                    </p>

                    <div className="space-y-1 text-xs text-slate-400 pl-2 border-l-2 border-blue-500/30">
                      <div><strong className="text-blue-300">1. {isEs ? 'Mapa Político:' : 'Political:'}</strong> {isEs ? 'Soberanías, capitales ★, fronteras por tratados, microestados y ciudades.' : 'Sovereignties, capitals ★, borders, microstates, cities.'}</div>
                      <div><strong className="text-sky-300">2. {isEs ? 'Relieve Físico:' : 'Physical Relief:'}</strong> {isEs ? 'Cotas hipsométricas continuas (-11,000m a +8,848m). ¡El verde es altitud baja, no selva!' : 'Hypsometric elevation. Green means low elevation, not jungle!'}</div>
                      <div><strong className="text-amber-300">3. {isEs ? 'Satélite Real:' : 'Real Satellite:'}</strong> {isEs ? 'Albedo de arenas, vegetación viva, deforestación en espina de pez y sedimentos.' : 'Sand albedo, live biomass, fishbone deforestation, sediment plumes.'}</div>
                      <div><strong className="text-purple-300">4. {isEs ? 'Matriz Comparativa:' : 'Decision Matrix:'}</strong> {isEs ? 'Los 3 mapas en paralelo para resolver misiones estratégicas y evaluar decisiones.' : '3 maps side-by-side to solve strategic real-world missions.'}</div>
                    </div>

                    <div className="pt-2 text-[11px] font-mono font-bold text-amber-300 flex items-center gap-1 border-t border-slate-800">
                      <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                      <span>{isEs ? 'Evaluación: Requisito de 90% para abrir el Nivel 2' : 'Exam: 90% required to unlock Level 2'}</span>
                    </div>
                  </div>

                  {/* Level 2 Card */}
                  <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2.5 relative group hover:border-slate-700 transition-all">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 text-[11px] font-bold border border-slate-700 flex items-center gap-1.5">
                        <Mountain className="w-3.5 h-3.5 text-amber-400" />
                        <span>{isEs ? 'Nivel 2' : 'Level 2'}</span>
                      </span>
                      <span className="text-[10px] font-mono text-slate-400 flex items-center gap-1 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                        <Lock className="w-3 h-3 text-amber-400" />
                        <span>{isEs ? 'Bloqueado (Requiere N1 90%)' : 'Locked (Needs L1 90%)'}</span>
                      </span>
                    </div>

                    <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
                      <span>🏔️</span>
                      <span>{isEs ? 'Accidentes Geográficos (19 Landforms)' : '19 Major Physical Landforms'}</span>
                    </h3>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {isEs
                        ? 'Estudio exhaustivo de 19 accidentes geográficos (fosas abisales, fiordos, deltas, mesetas, cordilleras, golfos, estrechos, etc.) mostrando ejemplos reales en los 3 tipos de mapas simultáneamente.'
                        : 'In-depth study of 19 major landforms (abyssal trenches, fjords, deltas, plateaus, cordilleras, straits) illustrated with authentic examples across all 3 map types.'}
                    </p>

                    <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800/80 text-[11px] text-slate-400 leading-relaxed">
                      {isEs
                        ? 'El estudiante contrasta cómo un delta o una cordillera se observan bajo la lente política, la cota hipsométrica y la reflectancia orbital.'
                        : 'Students compare how landforms appear under political boundaries, hypsometric relief, and orbital satellite sensors.'}
                    </div>

                    <div className="pt-2 text-[11px] font-mono font-bold text-amber-300 flex items-center gap-1 border-t border-slate-800">
                      <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                      <span>{isEs ? 'Evaluación: Requisito de 90% para abrir el Nivel 3' : 'Exam: 90% required to unlock Level 3'}</span>
                    </div>
                  </div>

                  {/* Level 3 Card */}
                  <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2.5 relative group hover:border-slate-700 transition-all">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 text-[11px] font-bold border border-slate-700 flex items-center gap-1.5">
                        <Globe2 className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{isEs ? 'Nivel 3' : 'Level 3'}</span>
                      </span>
                      <span className="text-[10px] font-mono text-slate-400 flex items-center gap-1 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                        <Lock className="w-3 h-3 text-amber-400" />
                        <span>{isEs ? 'Bloqueado (Requiere N2 90%)' : 'Locked (Needs L2 90%)'}</span>
                      </span>
                    </div>

                    <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
                      <span>🌊</span>
                      <span>{isEs ? 'Continentes, Mares y Océanos' : 'Continents, Seas & Oceans'}</span>
                    </h3>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {isEs
                        ? 'Macrogeografía física global a escala planetaria. En este nivel NO se presentan países individuales: se estudian masas continentales, cuencas oceánicas, dorsales y mares en los 3 tipos de mapas.'
                        : 'Global planetary physical geography. No sovereign countries are shown in this level: focuses strictly on continents, oceans, ridges, and seas across 3 lenses.'}
                    </p>

                    <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800/80 text-[11px] text-slate-400 leading-relaxed">
                      {isEs
                        ? 'Consolida la orientación espacial a escala planetaria antes de adentrarse en divisiones geopolíticas particulares.'
                        : 'Consolidates macro-spatial orientation at global scale before diving into state borders.'}
                    </div>

                    <div className="pt-2 text-[11px] font-mono font-bold text-amber-300 flex items-center gap-1 border-t border-slate-800">
                      <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                      <span>{isEs ? 'Evaluación: Requisito de 90% para abrir el Nivel 4' : 'Exam: 90% required to unlock Level 4'}</span>
                    </div>
                  </div>

                  {/* Level 4 & Final Exploration Card */}
                  <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2.5 relative group hover:border-slate-700 transition-all">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 text-[11px] font-bold border border-slate-700 flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{isEs ? 'Nivel 4' : 'Level 4'}</span>
                      </span>
                      <span className="text-[10px] font-mono text-slate-400 flex items-center gap-1 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                        <Lock className="w-3 h-3 text-amber-400" />
                        <span>{isEs ? 'Bloqueado (Requiere N3 90%)' : 'Locked (Needs L3 90%)'}</span>
                      </span>
                    </div>

                    <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
                      <span>🏛️</span>
                      <span>{isEs ? 'Países por Continentes y Medidor de Avance' : 'Countries by Continent & Progress Tracker'}</span>
                    </h3>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {isEs
                        ? 'El estudiante selecciona el continente deseado y explora sus naciones soberanas en los 3 mapas. Se muestra un porcentaje de países visitados para que el estudiante decida cuándo realizar la evaluación continental.'
                        : 'Students select a continent and explore its sovereign nations across 3 lenses. A percentage meter tracks visited countries, allowing students to decide when to launch the continent assessment.'}
                    </p>

                    <div className="p-2.5 rounded-xl bg-gradient-to-r from-amber-500/10 to-emerald-500/10 border border-amber-500/30 text-[11px] text-amber-200 leading-relaxed font-semibold">
                      🌍 {isEs ? 'Desbloqueo Final: Al aprobar los niveles al 90%, se habilita la Exploración Libre Total y Desafío Quest de todos los países del mundo.' : 'Final Unlock: Passing all levels at 90% unlocks full open exploration and Quest challenges across every country.'}
                    </div>

                    <div className="pt-2 text-[11px] font-mono font-bold text-amber-300 flex items-center gap-1 border-t border-slate-800">
                      <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                      <span>{isEs ? 'Evaluación: Requisito de 90% para maestría total' : 'Exam: 90% required for global mastery'}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Strict Gating Rule Banner */}
              <div className="p-4 rounded-2xl bg-slate-950 border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/30 font-bold text-base">
                    90%
                  </div>
                  <div>
                    <strong className="text-white text-sm block">
                      {isEs ? 'Regla de Oro del Sistema: Puerta de Aprobación al 90%' : 'Golden Rule: Strict 90% Passing Threshold'}
                    </strong>
                    <p className="text-slate-400 mt-0.5 leading-relaxed">
                      {isEs
                        ? 'Todo aprendizaje y evaluación recorre el máximo nivel de la taxonomía de Bloom. No se puede avanzar al próximo nivel sin haber alcanzado al menos el 90% de aciertos en la evaluación del nivel previo.'
                        : 'Every assessment targets high-order Bloom reasoning. Advancing to the next level requires scoring at least 90% on the prior level exam.'}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveTab('for_teachers')}
                  className="px-3.5 py-2 rounded-xl bg-blue-500/15 hover:bg-blue-500/25 text-blue-300 border border-blue-500/40 font-bold whitespace-nowrap transition-colors flex items-center gap-1.5 shrink-0"
                >
                  <GraduationCap className="w-4 h-4 text-blue-400" />
                  <span>{isEs ? 'Ver Marco para Profesores' : 'View Teacher Framework'}</span>
                </button>
              </div>

            </div>
          )}

          {/* TAB 2: FOR TEACHERS / PARA PROFESORES (CURRICULUM, GRADING & BLOOM) */}
          {activeTab === 'for_teachers' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              
              {/* Header with Language Display Mode */}
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-950/60 via-slate-900 to-indigo-950/40 border border-blue-500/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-blue-300">
                    <GraduationCap className="w-6 h-6 text-blue-400" />
                    <h2 className="text-base sm:text-lg font-black text-white">
                      For Teachers / Para Profesores: Marco Curricular y Pedagógico
                    </h2>
                  </div>
                  <p className="text-xs text-slate-300">
                    Alineación con Nord Anglia Education, Texas TEKS, NWEA MAP Growth, Taxonomía de Bloom y Criterios de Evaluación.
                  </p>
                </div>

                {/* Teacher Bilingual Switcher */}
                <div className="flex items-center p-0.5 bg-slate-950 rounded-xl border border-slate-800 text-xs shrink-0 self-start sm:self-auto">
                  <button
                    type="button"
                    onClick={() => setTeacherLangMode('bilingual')}
                    className={`px-2.5 py-1 rounded-lg font-semibold transition-all ${
                      teacherLangMode === 'bilingual'
                        ? 'bg-amber-400 text-slate-950 font-bold shadow'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    🌐 Ambos / Both
                  </button>
                  <button
                    type="button"
                    onClick={() => setTeacherLangMode('es')}
                    className={`px-2.5 py-1 rounded-lg font-semibold transition-all ${
                      teacherLangMode === 'es'
                        ? 'bg-amber-400 text-slate-950 font-bold shadow'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    🇪🇸 Español
                  </button>
                  <button
                    type="button"
                    onClick={() => setTeacherLangMode('en')}
                    className={`px-2.5 py-1 rounded-lg font-semibold transition-all ${
                      teacherLangMode === 'en'
                        ? 'bg-amber-400 text-slate-950 font-bold shadow'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    🇺🇸 English
                  </button>
                </div>
              </div>

              {/* 1. OBJETIVOS FORMATIVOS Y TAXONOMÍA DE BLOOM */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-950 border border-amber-500/30 space-y-4">
                <div className="flex items-center gap-2.5 text-amber-400">
                  <Target className="w-5 h-5" />
                  <h3 className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">
                    1. Objetivos Formativos y Taxonomía de Bloom / Learning Goals & Bloom’s Taxonomy
                  </h3>
                </div>

                <div className={`grid gap-4 ${teacherLangMode === 'bilingual' ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}`}>
                  {(teacherLangMode === 'bilingual' || teacherLangMode === 'es') && (
                    <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                      <strong className="text-amber-300 font-bold text-xs block">🇪🇸 Enfoque Pedagógico en Español:</strong>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Todo el aprendizaje y evaluación recorre el máximo nivel de la taxonomía de Bloom posible:
                      </p>
                      <ul className="text-xs text-slate-300 space-y-1.5 pl-2 border-l-2 border-amber-500/40">
                        <li><strong className="text-white">Recordar y Comprender:</strong> Decodificar simbología, cotas hipsométricas y nombres cartográficos en mapas reales.</li>
                        <li><strong className="text-white">Aplicar y Analizar:</strong> Identificar por qué un río forma un delta fértil en el desierto o por qué las cordilleras actúan como fronteras naturales.</li>
                        <li><strong className="text-white">Evaluar:</strong> Tomar decisiones estratégicas fundamentadas (ubicar presas según desnivel hipsométrico, dirimir litigios fronterizos o detectar deforestación orbital).</li>
                      </ul>
                    </div>
                  )}

                  {(teacherLangMode === 'bilingual' || teacherLangMode === 'en') && (
                    <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                      <strong className="text-amber-300 font-bold text-xs block">🇺🇸 Pedagogical Framework in English:</strong>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        All learning and assessments scale the highest levels of Bloom’s Taxonomy possible:
                      </p>
                      <ul className="text-xs text-slate-300 space-y-1.5 pl-2 border-l-2 border-amber-500/40">
                        <li><strong className="text-white">Remember & Understand:</strong> Decode symbology, hypsometric tints, and cartographic labels on authentic maps.</li>
                        <li><strong className="text-white">Apply & Analyze:</strong> Infer why river deltas sustain dense agriculture amidst deserts and how mountain belts shape borders.</li>
                        <li><strong className="text-white">Evaluate:</strong> Make evidence-based spatial decisions (siting hydroelectric dams using contour head drop, resolving border disputes, or detecting deforestation via satellite albedo).</li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              {/* 2. NORD ANGLIA EDUCATION */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-950 border border-blue-500/30 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5 text-blue-400">
                    <School className="w-5 h-5" />
                    <h3 className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">
                      2. Currículo de Nord Anglia Education / Nord Anglia Curriculum
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 font-bold border border-blue-500/30">
                    Global Network (80+ Schools)
                  </span>
                </div>

                <div className={`grid gap-4 ${teacherLangMode === 'bilingual' ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}`}>
                  {(teacherLangMode === 'bilingual' || teacherLangMode === 'es') && (
                    <div className="space-y-2 text-xs text-slate-300">
                      <div className="p-3 rounded-xl bg-blue-950/20 border border-blue-500/20">
                        <strong className="text-blue-300 font-semibold block mb-1">¿Qué es Nord Anglia Education?</strong>
                        <p className="text-slate-300 leading-relaxed">
                          Nord Anglia Education es la organización líder mundial de colegios internacionales prémium, que reúne a más de 80 colegios de prestigio en más de 30 países (como The Village School en Houston, Texas). Su filosofía educativa se enfoca en la excelencia académica, la indagación crítica interdisciplinaria y la ciudadanía global.
                        </p>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                        <strong className="text-white font-semibold block mb-1">Alineación de GeoMaster con Nord Anglia:</strong>
                        <p className="text-slate-400 leading-relaxed">
                          Nuestros módulos fortalecen la alfabetización espacial y el pensamiento geopolítico. Los alumnos analizan cómo las barreras físicas y los recursos hídricos han moldeado históricamente la civilización, el comercio y los tratados internacionales.
                        </p>
                      </div>
                    </div>
                  )}

                  {(teacherLangMode === 'bilingual' || teacherLangMode === 'en') && (
                    <div className="space-y-2 text-xs text-slate-300">
                      <div className="p-3 rounded-xl bg-blue-950/20 border border-blue-500/20">
                        <strong className="text-blue-300 font-semibold block mb-1">What is Nord Anglia Education?</strong>
                        <p className="text-slate-300 leading-relaxed">
                          Nord Anglia Education is the world’s premier international schools organization, educating students across 80+ top-tier schools in 30+ countries (including The Village School in Houston, Texas). Its ethos emphasizes academic excellence, critical inquiry, and global ethical awareness.
                        </p>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                        <strong className="text-white font-semibold block mb-1">GeoMaster Alignment with Nord Anglia:</strong>
                        <p className="text-slate-400 leading-relaxed">
                          The application cultivates global spatial literacy and geopolitical competence. Students investigate how physical barriers, hydrologic networks, and climate zones historically directed civilization, trade corridors, and modern statecraft.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* 3. TEXAS TEKS */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-950 border border-emerald-500/30 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5 text-emerald-400">
                    <BookOpen className="w-5 h-5" />
                    <h3 className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">
                      3. Estándares Texas TEKS / Texas TEKS Standards
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30">
                    Grades 5, 6 & World Geography
                  </span>
                </div>

                <div className={`grid gap-4 ${teacherLangMode === 'bilingual' ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}`}>
                  {(teacherLangMode === 'bilingual' || teacherLangMode === 'es') && (
                    <div className="space-y-2 text-xs text-slate-300">
                      <div className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-500/20">
                        <strong className="text-emerald-300 font-semibold block mb-1">¿Qué es el currículo TEKS?</strong>
                        <p className="text-slate-300 leading-relaxed">
                          Los TEKS (Texas Essential Knowledge and Skills) son los estándares curriculares oficiales de Texas. En Ciencias Sociales y Geografía, exigen dominio riguroso en lectura de representaciones cartográficas, localización de regiones y análisis de la interacción ser humano-medio ambiente.
                        </p>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                        <strong className="text-white font-semibold block mb-1">Competencias Específicas Cubiertas:</strong>
                        <ul className="text-slate-400 space-y-1 list-disc list-inside">
                          <li><span className="text-emerald-300 font-semibold">TEKS 5.6A & 6.3A:</span> Diferenciación de regiones físicas mayores, patrones topográficos y geomorfología continental.</li>
                          <li><span className="text-emerald-300 font-semibold">TEKS 6.3B & 6.4C:</span> Influencia de cuencas fluviales, mesetas y litorales en el asentamiento humano.</li>
                          <li><span className="text-emerald-300 font-semibold">TEKS 6.5A & 6.8A:</span> Recursos estratégicos e interdependencia a través de estrechos marítimos.</li>
                        </ul>
                      </div>
                    </div>
                  )}

                  {(teacherLangMode === 'bilingual' || teacherLangMode === 'en') && (
                    <div className="space-y-2 text-xs text-slate-300">
                      <div className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-500/20">
                        <strong className="text-emerald-300 font-semibold block mb-1">What are the Texas TEKS?</strong>
                        <p className="text-slate-300 leading-relaxed">
                          TEKS (Texas Essential Knowledge and Skills) are the official state curriculum standards in Texas. In Social Studies and Geography, they mandate spatial problem solving, thematic map interpretation, and human-environmental systems analysis.
                        </p>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                        <strong className="text-white font-semibold block mb-1">Specific TEKS Standards Met:</strong>
                        <ul className="text-slate-400 space-y-1 list-disc list-inside">
                          <li><span className="text-emerald-300 font-semibold">TEKS 5.6A & 6.3A:</span> Distinguishing major physical regions, landform patterns, and continental elevations.</li>
                          <li><span className="text-emerald-300 font-semibold">TEKS 6.3B & 6.4C:</span> Analyzing how river drainage basins, plateaus, and coastlines shape settlement.</li>
                          <li><span className="text-emerald-300 font-semibold">TEKS 6.5A & 6.8A:</span> Evaluating natural resource distribution and global maritime choke points.</li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* 4. NWEA MAP GROWTH */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-950 border border-purple-500/30 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5 text-purple-400">
                    <Award className="w-5 h-5" />
                    <h3 className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">
                      4. Objetivos de Crecimiento NWEA MAP Growth / NWEA MAP Growth Objectives
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 font-bold border border-purple-500/30">
                    Adaptive Testing Mastery
                  </span>
                </div>

                <div className={`grid gap-4 ${teacherLangMode === 'bilingual' ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}`}>
                  {(teacherLangMode === 'bilingual' || teacherLangMode === 'es') && (
                    <div className="space-y-2 text-xs text-slate-300">
                      <div className="p-3 rounded-xl bg-purple-950/20 border border-purple-500/20">
                        <strong className="text-purple-300 font-semibold block mb-1">¿Qué es NWEA MAP Growth?</strong>
                        <p className="text-slate-300 leading-relaxed">
                          NWEA MAP Growth (Measures of Academic Progress) es un sistema líder internacional de evaluación adaptativa computarizada creado por NWEA. Mide con precisión el crecimiento académico longitudinal del estudiante en Ciencias Sociales y Geografía.
                        </p>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                        <strong className="text-white font-semibold block mb-1">Superación de la Trampa Conceptual Central:</strong>
                        <p className="text-slate-400 leading-relaxed">
                          La aplicación entrena sistemáticamente la mayor trampa conceptual identificada en MAP Growth: confundir el color verde de los mapas físicos con vegetación o bosques. En GeoMaster, el alumno comprueba que el verde representa baja altitud (0-200m) y que desiertos costeros como el Sahara o el Delta del Nilo son verdes en un mapa físico aunque no tengan selva.
                        </p>
                      </div>
                    </div>
                  )}

                  {(teacherLangMode === 'bilingual' || teacherLangMode === 'en') && (
                    <div className="space-y-2 text-xs text-slate-300">
                      <div className="p-3 rounded-xl bg-purple-950/20 border border-purple-500/20">
                        <strong className="text-purple-300 font-semibold block mb-1">What is NWEA MAP Growth?</strong>
                        <p className="text-slate-300 leading-relaxed">
                          NWEA MAP Growth is an internationally recognized computer-adaptive assessment tool developed by NWEA. It measures continuous individual student growth in Social Sciences and Geography.
                        </p>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                        <strong className="text-white font-semibold block mb-1">Targeting the Core Elevation Misconception:</strong>
                        <p className="text-slate-400 leading-relaxed">
                          The application directly eradicates the primary misconception measured in MAP Growth: assuming green on physical maps denotes trees or lush jungle. In GeoMaster, students discover that green represents low elevation (0–200m above sea level) even across hyper-arid deserts like the Sahara or Nile Delta.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

            </div>
          )}

        </div>

        {/* Modal Footer with Primary Start Action */}
        <div className="p-3.5 sm:p-5 border-t border-slate-800 bg-slate-950 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <label className="flex items-center gap-2 text-xs text-slate-400 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={dontShowAgain}
              onChange={(e) => setDontShowAgain(e.target.checked)}
              className="rounded border-slate-700 bg-slate-800 text-amber-500 focus:ring-amber-400 focus:ring-offset-slate-900"
            />
            <span>
              {isEs ? 'No volver a mostrar esta introducción al iniciar' : 'Do not show this introduction on startup'}
            </span>
          </label>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            {activeTab === 'for_teachers' && (
              <button
                type="button"
                onClick={() => setActiveTab('learning_roadmap')}
                className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors"
              >
                ← {isEs ? 'Ver Ruta de Aprendizaje' : 'View Learning Roadmap'}
              </button>
            )}

            <button
              type="button"
              onClick={handleStart}
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-400/20 transition-all active:scale-95"
            >
              <span>{isEs ? 'Comenzar Nivel 1: Lectura de Mapas' : 'Start Level 1: Map Reading'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
