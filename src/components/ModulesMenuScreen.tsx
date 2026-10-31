import React from 'react';
import { Language } from '../types/geography';
import { PedagogicalProgressState, PedagogicalLevel } from '../types/progression';
import {
  Compass,
  GraduationCap,
  BookOpen,
  Target,
  Layers,
  Mountain,
  Globe2,
  Lock,
  Unlock,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  RotateCcw,
  Sparkles,
  Info,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

interface ModulesMenuScreenProps {
  currentLang: Language;
  onToggleLang: () => void;
  onSelectLang: (lang: Language) => void;
  onOpenTeachers: () => void;
  onReturnToWelcome: () => void;
  progressState: PedagogicalProgressState;
  onOpenModule: (level: PedagogicalLevel) => void;
  onStartEvaluation: (level: PedagogicalLevel) => void;
  onEnterCountryMap: () => void;
}

export const ModulesMenuScreen: React.FC<ModulesMenuScreenProps> = ({
  currentLang,
  onToggleLang,
  onSelectLang,
  onOpenTeachers,
  onReturnToWelcome,
  progressState,
  onOpenModule,
  onStartEvaluation,
  onEnterCountryMap,
}) => {
  const isEs = currentLang === 'es';

  // Check scores & unlocked states
  const l1Score = progressState.levelScores[1];
  const l2Score = progressState.levelScores[2];
  const l3Score = progressState.levelScores[3];

  const isL1Passed = l1Score !== null && l1Score >= 90;
  const isL2Passed = l2Score !== null && l2Score >= 90;
  const isL3Passed = l3Score !== null && l3Score >= 90;

  // All modules are freely accessible without impediment
  const isL2Unlocked = true;
  const isL3Unlocked = true;
  const isL4Unlocked = true;

  return (
    <div className="min-h-screen w-full bg-slate-950 text-slate-100 flex flex-col justify-between selection:bg-amber-400 selection:text-slate-950">
      
      {/* Top Navbar */}
      <header className="sticky top-0 z-40 bg-slate-900/95 border-b border-slate-800 backdrop-blur-md px-3 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between">
        <div className="flex items-center gap-2.5 sm:gap-3">
          <button
            type="button"
            onClick={onReturnToWelcome}
            className="flex items-center gap-2 hover:opacity-90 transition-opacity text-left"
            title={isEs ? 'Volver a la pantalla de bienvenida' : 'Return to welcome screen'}
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr from-amber-500 via-amber-400 to-yellow-300 flex items-center justify-center text-slate-950 font-black shadow-md shadow-amber-500/20 shrink-0">
              <Compass className="w-5 h-5 text-slate-950 stroke-[2.5]" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xs sm:text-base tracking-tight text-white">GeoMaster</span>
                <span className="text-[9px] sm:text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-400/20 text-amber-300 border border-amber-400/30">
                  {isEs ? 'Menú de Módulos' : 'Modules Menu'}
                </span>
              </div>
              <span className="text-[10px] text-slate-400 hidden sm:block">
                {isEs ? 'Sistema de Progresión Pedagógica' : 'Pedagogical Progression System'}
              </span>
            </div>
          </button>
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* For Teachers Button */}
          <button
            type="button"
            onClick={onOpenTeachers}
            className="px-2.5 sm:px-3 py-1.5 rounded-xl bg-blue-500/15 hover:bg-blue-500/25 text-blue-300 border border-blue-500/40 text-xs font-bold flex items-center gap-1.5 transition-colors"
          >
            <GraduationCap className="w-4 h-4 text-blue-400" />
            <span className="hidden sm:inline">{isEs ? 'Para Profesores' : 'For Teachers'}</span>
            <span className="sm:hidden">{isEs ? 'Profesores' : 'Teachers'}</span>
          </button>

          {/* Bilingual Switcher */}
          <div className="flex items-center bg-slate-950 p-0.5 rounded-xl border border-slate-800 text-xs font-bold">
            <button
              type="button"
              onClick={() => onSelectLang('es')}
              className={`px-2 py-1 rounded-lg transition-all ${
                currentLang === 'es'
                  ? 'bg-amber-400 text-slate-950 shadow font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              🇪🇸 ES
            </button>
            <button
              type="button"
              onClick={() => onSelectLang('en')}
              className={`px-2 py-1 rounded-lg transition-all ${
                currentLang === 'en'
                  ? 'bg-amber-400 text-slate-950 shadow font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              🇺🇸 EN
            </button>
          </div>

          {/* Return to Welcome */}
          <button
            type="button"
            onClick={onReturnToWelcome}
            className="p-1.5 sm:px-2.5 sm:py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold flex items-center gap-1 transition-colors border border-slate-700/80"
            title={isEs ? 'Volver a Bienvenida' : 'Back to Welcome'}
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden md:inline">{isEs ? 'Inicio' : 'Welcome'}</span>
          </button>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 w-full max-w-5xl mx-auto p-4 sm:p-6 md:p-8 space-y-6">
        
        {/* MANDATORY PEDAGOGICAL BANNER (As specified by user) */}
        <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-r from-amber-500/15 via-slate-900 to-blue-500/15 border-2 border-amber-500/40 p-4 sm:p-6 shadow-xl relative overflow-hidden">
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-300 shrink-0">
              <ShieldCheck className="w-6 h-6 text-amber-400" />
            </div>
            <div className="space-y-1.5 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="text-base sm:text-xl font-black text-white tracking-tight">
                  {isEs ? 'Menú Principal de Contenidos' : 'Main Content Curriculum Menu'}
                </h1>
                <span className="text-[10px] sm:text-xs font-mono font-bold px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/40">
                  {isEs ? 'Meta de Maestría: 90%' : '90% Mastery Goal'}
                </span>
              </div>
              
              {/* Informative description banner */}
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                {isEs ? (
                  <>
                    Puedes acceder y explorar libremente cualquiera de los 4 módulos de aprendizaje según tu preferencia. Cada módulo cuenta con su contenido interactivo y una <span className="text-amber-300 font-bold">verificación del aprendizaje</span> con meta de maestría del 90%. La <span className="text-amber-300 font-bold">pantalla completa interactiva del mapa de los países</span> se despliega en el Módulo 4.
                  </>
                ) : (
                  <>
                    You can freely access and explore any of the 4 learning modules according to your preference. Each module features interactive learning and a <span className="text-amber-300 font-bold">learning verification assessment</span> with a 90% mastery goal. The <span className="text-amber-300 font-bold">full-screen interactive country map</span> opens in Module 4.
                  </>
                )}
              </p>

              <div className="pt-2 flex items-center gap-3 text-xs text-slate-400 font-mono">
                <span>{isEs ? 'Estado de Módulos:' : 'Modules Status:'}</span>
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className={`w-2.5 h-2.5 rounded-full ${isL1Passed ? 'bg-emerald-400' : 'bg-amber-400'}`} />
                  <span>M1: {isL1Passed ? `${l1Score}% ✓` : l1Score !== null ? `${l1Score}%` : isEs ? 'Disponible' : 'Ready'}</span>
                  <span className="text-slate-600">·</span>
                  <span className={`w-2.5 h-2.5 rounded-full ${isL2Passed ? 'bg-emerald-400' : 'bg-amber-400'}`} />
                  <span>M2: {isL2Passed ? `${l2Score}% ✓` : l2Score !== null ? `${l2Score}%` : isEs ? 'Disponible' : 'Ready'}</span>
                  <span className="text-slate-600">·</span>
                  <span className={`w-2.5 h-2.5 rounded-full ${isL3Passed ? 'bg-emerald-400' : 'bg-amber-400'}`} />
                  <span>M3: {isL3Passed ? `${l3Score}% ✓` : l3Score !== null ? `${l3Score}%` : isEs ? 'Disponible' : 'Ready'}</span>
                  <span className="text-slate-600">·</span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <span>M4: {isEs ? 'Mapa de Países' : 'Country Map'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 MODULES LIST / BUTTONS */}
        <div className="space-y-4">
          
          {/* ==================== MÓDULO 1: LECTURA DE MAPA ==================== */}
          <div className="rounded-2xl bg-slate-900 border-2 border-slate-800 hover:border-amber-500/50 transition-all p-4 sm:p-5 shadow-lg space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-300 font-black shrink-0">
                  <Layers className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
                      {isEs ? 'MÓDULO 1' : 'MODULE 1'}
                    </span>
                    {isL1Passed ? (
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                        <CheckCircle2 className="w-3 h-3" />
                        {isEs ? `Aprobado (${l1Score}%)` : `Passed (${l1Score}%)`}
                      </span>
                    ) : l1Score !== null ? (
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                        <AlertCircle className="w-3 h-3" />
                        {isEs ? `Intento previo: ${l1Score}% (Requiere ≥90%)` : `Previous: ${l1Score}% (Requires ≥90%)`}
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                        {isEs ? 'Desbloqueado · Inicial' : 'Unlocked · Initial'}
                      </span>
                    )}
                  </div>
                  <h2 className="text-base sm:text-lg font-black text-white">
                    {isEs ? 'Lectura de Mapa' : 'Map Reading'}
                  </h2>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => onOpenModule(1)}
                  className="px-3.5 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-md transition-all active:scale-95"
                >
                  <BookOpen className="w-4 h-4 text-slate-950" />
                  <span>{isEs ? 'Abrir Módulo 1' : 'Open Module 1'}</span>
                </button>
                <button
                  type="button"
                  onClick={() => onStartEvaluation(1)}
                  className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-xs flex items-center gap-1.5 transition-all"
                  title={isEs ? 'Verificación de Aprendizaje con compuerta del 90%' : '90% Learning Verification Assessment'}
                >
                  <Target className="w-4 h-4 text-amber-400" />
                  <span>{isEs ? 'Verificación (90%)' : 'Assessment (90%)'}</span>
                </button>
              </div>
            </div>

            {/* Content Explanation */}
            <div className="text-xs text-slate-300 space-y-1.5 leading-relaxed">
              <p>
                {isEs ? (
                  <>
                    <strong className="text-white font-semibold">Contenido del Módulo:</strong> Se divide en 4 subcapítulos interactivos tipo libro con mapa interactivo y panel lateral independiente:
                  </>
                ) : (
                  <>
                    <strong className="text-white font-semibold">Module Content:</strong> Divided into 4 book-like interactive subchapters with an interactive map and independent side panel:
                  </>
                )}
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-slate-400 pt-1">
                <li className="p-2 rounded-lg bg-slate-950/60 border border-slate-800">
                  <span className="text-amber-400 font-bold">1. Mapa Político:</span> {isEs ? 'Soberanía, fronteras internacionales, capitales, microestados y ciudades señalizadas con flechas rojas intensas.' : 'Sovereignty, international borders, capitals, microstates, and cities highlighted with intense red markers.'}
                </li>
                <li className="p-2 rounded-lg bg-slate-950/60 border border-slate-800">
                  <span className="text-emerald-400 font-bold">2. Relieve Físico:</span> {isEs ? 'Aclaración del mito común de MAP Growth: el verde representa baja altitud (0-200m) y no vegetación. Cotas hipsométricas universales.' : 'Resolves key MAP Growth misconception: green indicates low elevation (0-200m), not vegetation. Universal hypsometric scale.'}
                </li>
                <li className="p-2 rounded-lg bg-slate-950/60 border border-slate-800">
                  <span className="text-sky-400 font-bold">3. Imagen Satelital Real:</span> {isEs ? 'Fotografía orbital, albedo de superficies, aridez real de desiertos costeros y nieves perpetuas.' : 'Orbital photography, surface albedo, true aridity of coastal deserts, and permanent snowpacks.'}
                </li>
                <li className="p-2 rounded-lg bg-slate-950/60 border border-slate-800">
                  <span className="text-purple-400 font-bold">4. Matriz Comparativa:</span> {isEs ? 'Visualización inicial de los 3 mapas en paralelo para resolver misiones geográficas y seleccionar el mapa adecuado.' : 'Initial 3-map parallel view to solve geographical missions and choose the correct map type.'}
                </li>
              </ul>
            </div>
          </div>

          {/* ==================== MÓDULO 2: LOS ACCIDENTES GEOGRÁFICOS ==================== */}
          <div className={`rounded-2xl bg-slate-900 border-2 transition-all p-4 sm:p-5 shadow-lg space-y-3 ${
            isL2Unlocked ? 'border-slate-800 hover:border-sky-500/50' : 'border-slate-800/60 opacity-80'
          }`}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl border flex items-center justify-center font-black shrink-0 ${
                  isL2Unlocked ? 'bg-sky-500/20 border-sky-400/30 text-sky-300' : 'bg-slate-800 border-slate-700 text-slate-500'
                }`}>
                  <Mountain className="w-5 h-5 text-sky-400" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider">
                      {isEs ? 'MÓDULO 2' : 'MODULE 2'}
                    </span>
                    {isL2Passed ? (
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                        <CheckCircle2 className="w-3 h-3" />
                        {isEs ? `Aprobado (${l2Score}%)` : `Passed (${l2Score}%)`}
                      </span>
                    ) : l2Score !== null ? (
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                        <AlertCircle className="w-3 h-3" />
                        {isEs ? `Intento previo: ${l2Score}% (Meta: 90%)` : `Previous: ${l2Score}% (Goal: 90%)`}
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                        {isEs ? 'Desbloqueado · Disponible' : 'Unlocked · Available'}
                      </span>
                    )}
                  </div>
                  <h2 className="text-base sm:text-lg font-black text-white">
                    {isEs ? 'Los Accidentes Geográficos' : 'Landforms'}
                  </h2>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => onOpenModule(2)}
                  className="px-3.5 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-md transition-all active:scale-95"
                >
                  <BookOpen className="w-4 h-4 text-slate-950" />
                  <span>{isEs ? 'Abrir Módulo 2' : 'Open Module 2'}</span>
                </button>
                <button
                  type="button"
                  onClick={() => onStartEvaluation(2)}
                  className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-xs flex items-center gap-1.5 transition-all"
                  title={isEs ? 'Verificación de Aprendizaje con meta del 90%' : '90% Learning Verification Assessment'}
                >
                  <Target className="w-4 h-4 text-sky-400" />
                  <span>{isEs ? 'Verificación (90%)' : 'Assessment (90%)'}</span>
                </button>
              </div>
            </div>

            {/* Content Explanation */}
            <div className="text-xs text-slate-300 space-y-1.5 leading-relaxed">
              <p>
                <strong className="text-white font-semibold">{isEs ? 'Contenido del Módulo:' : 'Module Content:'}</strong>{' '}
                {isEs
                  ? 'Estudio exhaustivo de 19 formas del relieve terrestre clasificadas rigurosamente: cordilleras, mesetas, llanuras, valles de rift, cañones, penínsulas, istmos, deltas, golfos, estrechos y fosas oceánicas. Cada accidente se examina de manera simultánea a través de las 3 lentes cartográficas (política, relieve y satélite) con coordenadas geográficas reales del planeta.'
                  : 'Exhaustive study of 19 terrestrial landforms systematically categorized: mountain ranges, plateaus, plains, rift valleys, canyons, peninsulas, isthmuses, deltas, gulfs, straits, and oceanic trenches. Each landform is examined across all 3 cartographic lenses (political, relief, satellite) with real-world planetary coordinates.'}
              </p>
            </div>
          </div>

          {/* ==================== MÓDULO 3: LOS CONTINENTES, MARES Y OCÉANOS ==================== */}
          <div className="rounded-2xl bg-slate-900 border-2 border-slate-800 hover:border-teal-500/50 transition-all p-4 sm:p-5 shadow-lg space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl border border-teal-400/30 bg-teal-500/20 flex items-center justify-center font-black shrink-0 text-teal-300">
                  <Globe2 className="w-5 h-5 text-teal-400" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-teal-400 uppercase tracking-wider">
                      {isEs ? 'MÓDULO 3' : 'MODULE 3'}
                    </span>
                    {isL3Passed ? (
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                        <CheckCircle2 className="w-3 h-3" />
                        {isEs ? `Aprobado (${l3Score}%)` : `Passed (${l3Score}%)`}
                      </span>
                    ) : l3Score !== null ? (
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                        <AlertCircle className="w-3 h-3" />
                        {isEs ? `Intento previo: ${l3Score}% (Meta: 90%)` : `Previous: ${l3Score}% (Goal: 90%)`}
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                        {isEs ? 'Desbloqueado · Disponible' : 'Unlocked · Available'}
                      </span>
                    )}
                  </div>
                  <h2 className="text-base sm:text-lg font-black text-white">
                    {isEs ? 'Los Continentes, Mares y Océanos' : 'Continents, Seas and Oceans'}
                  </h2>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => onOpenModule(3)}
                  className="px-3.5 py-2 rounded-xl bg-teal-400 hover:bg-teal-300 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-md transition-all active:scale-95"
                >
                  <BookOpen className="w-4 h-4 text-slate-950" />
                  <span>{isEs ? 'Abrir Módulo 3' : 'Open Module 3'}</span>
                </button>
                <button
                  type="button"
                  onClick={() => onStartEvaluation(3)}
                  className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-xs flex items-center gap-1.5 transition-all"
                  title={isEs ? 'Verificación de Aprendizaje con meta del 90%' : '90% Learning Verification Assessment'}
                >
                  <Target className="w-4 h-4 text-teal-400" />
                  <span>{isEs ? 'Verificación (90%)' : 'Assessment (90%)'}</span>
                </button>
              </div>
            </div>

            {/* Content Explanation */}
            <div className="text-xs text-slate-300 space-y-1.5 leading-relaxed">
              <p>
                <strong className="text-white font-semibold">{isEs ? 'Contenido del Módulo:' : 'Module Content:'}</strong>{' '}
                {isEs
                  ? 'Cartografía puramente continental y marítima global, sin división de países ni fronteras políticas. El estudiante localiza los 7 continentes (América del Norte, América del Sur, Europa, África, Asia, Oceanía y Antártida), los 5 océanos mundiales y los mares interiores y marginales principales, consolidando la referencia espacial antes de fragmentar el territorio en naciones soberanas.'
                  : 'Pure global continental and maritime cartography, without national borders or political divisions. Students locate the 7 continents, Earth\'s 5 oceans, and key marginal and inland seas, consolidating spatial references before diving into individual sovereign nations.'}
              </p>
            </div>
          </div>

          {/* ==================== MÓDULO 4: LOS PAÍSES (PANTALLA COMPLETA) ==================== */}
          <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border-2 border-emerald-500/60 ring-1 ring-emerald-500/30 transition-all p-4 sm:p-6 shadow-xl space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-3">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl border bg-emerald-500/20 border-emerald-400/40 text-emerald-300 shadow-md shadow-emerald-500/20 flex items-center justify-center font-black shrink-0">
                  <Compass className="w-7 h-7 text-emerald-400 stroke-[2.5]" />
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
                      {isEs ? 'MÓDULO 4 · NIVEL FINAL' : 'MODULE 4 · FINAL LEVEL'}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      <Sparkles className="w-3 h-3" />
                      {isEs ? 'Pantalla Completa Disponible' : 'Full Screen Available'}
                    </span>
                  </div>
                  <h2 className="text-lg sm:text-xl font-black text-white">
                    {isEs ? 'Los Países (Pantalla Completa)' : 'Sovereign Countries (Full Screen)'}
                  </h2>
                </div>
              </div>

              {/* Action Button */}
              <div className="shrink-0">
                <button
                  type="button"
                  onClick={onEnterCountryMap}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 text-slate-950 font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25 transition-all active:scale-95"
                >
                  <Globe2 className="w-4 h-4 text-slate-950" />
                  <span>{isEs ? 'Entrar al Mapa de Países' : 'Enter Country Map'}</span>
                  <ArrowRight className="w-4 h-4 text-slate-950" />
                </button>
              </div>
            </div>

            {/* Content Explanation & Notice */}
            <div className="text-xs text-slate-300 space-y-2 leading-relaxed">
              <div className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-500/20 flex items-start gap-2.5">
                <Info className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <p className="text-emerald-200">
                  <strong className="text-white font-semibold">
                    {isEs ? 'Exploración de Países:' : 'Country Exploration:'}
                  </strong>{' '}
                  {isEs
                    ? 'La pantalla completa interactiva del mapa de los países está disponible para explorar libremente o completar las misiones de aprendizaje y evaluación por continentes.'
                    : 'The full-screen interactive country map is available to explore freely or complete continental learning and evaluation missions.'}
                </p>
              </div>

              <p>
                <strong className="text-white font-semibold">{isEs ? 'Contenido del Módulo:' : 'Module Content:'}</strong>{' '}
                {isEs
                  ? 'Exploración interactiva a pantalla completa de todas las naciones soberanas del mundo. Permite filtrar países por continente, desplegar fichas geopolíticas de 440px con datos demográficos, PIB per cápita, exportaciones clave, recursos naturales y accidentes representativos, alternar las 3 lentes cartográficas e interactuar con el motor de misiones Quest con Taxonomía de Bloom.'
                  : 'Interactive full-screen exploration of all sovereign nations worldwide. Filter countries by continent, open comprehensive 440px dossiers with demographic indicators, GDP per capita, leading exports, natural resources, and prominent landforms, switch across all 3 cartographic lenses, and engage with the Bloom\'s Taxonomy Quest mission engine.'}
              </p>
            </div>
          </div>

        </div>

      </main>

      {/* Footer */}
      <footer className="w-full max-w-5xl mx-auto p-4 text-center text-xs text-slate-500 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-2">
        <span>GeoMaster Explorer · Secuencia Pedagógica Guiada con Compuerta del 90%</span>
        <span>Nord Anglia Education · Texas TEKS · NWEA MAP Growth</span>
      </footer>

    </div>
  );
};
