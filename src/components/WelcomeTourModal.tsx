import React, { useState } from 'react';
import { Language, AppMode } from '../types/geography';
import {
  Compass,
  Layers,
  Globe2,
  Target,
  BookOpen,
  Mountain,
  Award,
  CheckCircle2,
  X,
  Sparkles,
  ArrowRight,
  Eye,
  HelpCircle,
  Lock,
  Unlock,
  ShieldCheck,
  Waves
} from 'lucide-react';

interface WelcomeTourModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  onStartInLevel1: () => void;
}

export const WelcomeTourModal: React.FC<WelcomeTourModalProps> = ({
  isOpen,
  onClose,
  currentLang,
  onStartInLevel1,
}) => {
  const [activeTab, setActiveTab] = useState<'progression' | 'levels' | 'lenses' | 'bloom'>('progression');
  const [dontShowAgain, setDontShowAgain] = useState(false);

  if (!isOpen) return null;

  const isEs = currentLang === 'es';

  const handleFinish = () => {
    if (dontShowAgain) {
      localStorage.setItem('geomaster_seen_welcome_v1', 'true');
    }
    onStartInLevel1();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-700/80 rounded-2xl sm:rounded-3xl w-full max-w-4xl max-h-[92dvh] flex flex-col shadow-2xl overflow-hidden text-slate-100 ring-1 ring-amber-400/20">
        
        {/* Header with Title and School Alignment */}
        <div className="p-3.5 sm:p-5 border-b border-slate-800 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 flex items-start justify-between">
          <div className="flex items-center gap-2.5 sm:gap-3.5">
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-gradient-to-tr from-amber-500 via-amber-400 to-yellow-300 flex items-center justify-center text-slate-950 shadow-md shadow-amber-500/30 shrink-0">
              <Compass className="w-5 h-5 sm:w-6 sm:h-6 text-slate-950 stroke-[2.5]" />
            </div>
            <div>
              <div className="flex items-center gap-1.5 flex-wrap">
                <h1 className="text-base sm:text-xl font-black tracking-tight text-white">
                  GeoMaster Explorer
                </h1>
                <span className="text-[9px] sm:text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/40">
                  {isEs ? 'Sistema de Aprendizaje Progresivo' : 'Progressive Mastery System'}
                </span>
              </div>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                {isEs ? 'Plataforma de Cartografía y Geografía Global' : 'Global Cartography & Geography Platform'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            title={isEs ? 'Cerrar' : 'Close'}
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center border-b border-slate-800 bg-slate-950/60 px-4 sm:px-6 overflow-x-auto text-xs font-semibold gap-1 py-1.5 shrink-0">
          <button
            onClick={() => setActiveTab('progression')}
            className={`px-3.5 py-2 rounded-xl transition-all flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'progression'
                ? 'bg-amber-400 text-slate-950 font-bold shadow'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Target className="w-4 h-4" />
            <span>{isEs ? 'Mecánica y Reglas del Sistema' : 'System Rules & Gating'}</span>
          </button>

          <button
            onClick={() => setActiveTab('levels')}
            className={`px-3.5 py-2 rounded-xl transition-all flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'levels'
                ? 'bg-amber-400 text-slate-950 font-bold shadow'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>{isEs ? 'Contenidos de los 4 Niveles' : '4-Level Curriculum'}</span>
          </button>

          <button
            onClick={() => setActiveTab('lenses')}
            className={`px-3.5 py-2 rounded-xl transition-all flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'lenses'
                ? 'bg-amber-400 text-slate-950 font-bold shadow'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>{isEs ? 'Los 3 Lentes Cartográficos' : '3 Cartographic Lenses'}</span>
          </button>

          <button
            onClick={() => setActiveTab('bloom')}
            className={`px-3.5 py-2 rounded-xl transition-all flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'bloom'
                ? 'bg-amber-400 text-slate-950 font-bold shadow'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Award className="w-4 h-4" />
            <span>{isEs ? 'Taxonomía de Bloom' : 'Bloom’s Taxonomy'}</span>
          </button>
        </div>

        {/* Scrollable Tab Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5">
          
          {/* TAB 1: PROGRESSION & RULES */}
          {activeTab === 'progression' && (
            <div className="space-y-4 animate-in fade-in duration-200">
              {/* Highlight Banner */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-500/20 via-slate-800 to-sky-500/10 border border-amber-500/40">
                <h3 className="text-base sm:text-lg font-black text-white mb-1 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-amber-400" />
                  <span>{isEs ? 'Secuencia de Maestría Obligatoria (Paso a Paso)' : 'Mandatory Progressive Learning Sequence'}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {isEs
                    ? 'Para garantizar una comprensión profunda y rigurosa, no es posible acceder de inmediato a la exploración libre o evaluación de países. El estudiante debe avanzar obligatoriamente a través de 4 niveles pedagógicos secuenciales.'
                    : 'To ensure deep mastery, students cannot jump directly to open exploration. They must systematically advance through 4 sequential pedagogical levels.'}
                </p>
              </div>

              {/* The 90% Golden Rule Card */}
              <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-2xl bg-rose-500/20 text-rose-400 border border-rose-500/40 flex items-center justify-center text-lg font-bold shrink-0">
                  90%
                </div>
                <div className="text-xs sm:text-sm text-rose-100 leading-relaxed">
                  <strong className="text-rose-300 font-bold block mb-1">
                    {isEs ? 'Regla Innegociable de Aprobación: 90% Mínimo' : 'Strict Gate Rule: 90% Minimum to Advance'}
                  </strong>
                  {isEs
                    ? 'No se puede avanzar al próximo nivel sin haber aprobado la evaluación del nivel anterior con al menos el 90% de respuestas correctas. Cada nivel cuenta con un Módulo de Aprendizaje Guiado y una Evaluación de Taxonomía de Bloom.'
                    : 'Students cannot advance to the next level without achieving at least 90% on the preceding level’s evaluation. Each level features a Guided Learning Module and a Bloom Taxonomy Assessment.'}
                </div>
              </div>

              {/* Flowchart Steps */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1 relative">
                  <strong className="text-white block font-bold">
                    {isEs ? 'Nivel 1: 3 Tipos de Mapas' : 'Level 1: 3 Map Types'}
                  </strong>
                  <p className="text-slate-400 text-[11px]">
                    {isEs ? 'Aprender características, convenciones y usos de mapas Políticos, Físicos y Satelitales.' : 'Learn political borders, hypsometry, and true satellite albedo.'}
                  </p>
                  <span className="text-[10px] text-amber-300 font-bold block pt-1">
                    {isEs ? 'Aprobar con >= 90% ➔' : 'Pass with >= 90% ➔'}
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                  <strong className="text-white block font-bold">
                    {isEs ? 'Nivel 2: Landforms' : 'Level 2: Landforms'}
                  </strong>
                  <p className="text-slate-400 text-[11px]">
                    {isEs ? 'Los 19 accidentes geográficos comparados en los 3 tipos de mapas.' : '19 physical landforms analyzed across the 3 map lenses.'}
                  </p>
                  <span className="text-[10px] text-amber-300 font-bold block pt-1">
                    {isEs ? 'Aprobar con >= 90% ➔' : 'Pass with >= 90% ➔'}
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                  <strong className="text-white block font-bold">
                    {isEs ? 'Nivel 3: Continentes y Océanos' : 'Level 3: Oceans & Continents'}
                  </strong>
                  <p className="text-slate-400 text-[11px]">
                    {isEs ? 'Cuencas oceánicas, fosas y mares globales (sin países) en los 3 mapas.' : 'Global ocean basins, trenches, and seas (no countries).' }
                  </p>
                  <span className="text-[10px] text-amber-300 font-bold block pt-1">
                    {isEs ? 'Aprobar con >= 90% ➔' : 'Pass with >= 90% ➔'}
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-slate-950 border border-amber-500/40 space-y-1 bg-amber-500/5">
                  <strong className="text-white block font-bold">
                    {isEs ? 'Nivel 4: Países por Continentes' : 'Level 4: Countries by Continent'}
                  </strong>
                  <p className="text-slate-400 text-[11px]">
                    {isEs ? 'Selecciona el continente, explora según % de países visitados y evalúate.' : 'Select continent, explore countries with % tracker, and assess.'}
                  </p>
                  <span className="text-[10px] text-emerald-400 font-bold block pt-1">
                    {isEs ? 'Maestría Total 🏆' : 'Total Mastery 🏆'}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: DETAILED CONTENT BY LEVEL */}
          {activeTab === 'levels' && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs sm:text-sm text-slate-300">
                <strong className="text-amber-300 font-bold block mb-1">
                  📚 {isEs ? 'Plan Curricular Detallado por Niveles:' : 'Detailed Curriculum Breakdown by Level:'}
                </strong>
                {isEs
                  ? 'Cada nivel aborda competencias espaciales y cartográficas rigurosas con el máximo nivel de profundidad cognitiva:'
                  : 'Each level targets rigorous spatial and cartographic competencies with high cognitive depth:'}
              </div>

              <div className="space-y-3">
                {/* Level 1 Content Box */}
                <div className="p-4 rounded-xl bg-slate-800/60 border border-blue-500/40 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider">
                      {isEs ? 'Nivel 1: Lectura de los 3 Tipos de Mapas' : 'Level 1: Reading the 3 Map Types'}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 font-mono">
                      {isEs ? 'Alfabetización Cartográfica' : 'Cartographic Literacy'}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white">
                    {isEs ? 'Características, Convenciones Cartográficas y Usos Estratégicos' : 'Characteristics, Conventions & Strategic Use Cases'}
                  </h4>
                  <ul className="text-xs text-slate-300 space-y-1 list-disc list-inside">
                    <li><strong>{isEs ? 'Mapa Político:' : 'Political Map:'}</strong> {isEs ? 'Fronteras soberanas, divisiones administrativas, capitales de Estado (★) y diplomacia.' : 'Sovereign borders, capital markers, administrative jurisdictions, and diplomacy.'}</li>
                    <li><strong>{isEs ? 'Mapa Físico (Tintas Hipsométricas):' : 'Physical Relief Map:'}</strong> {isEs ? 'Escala universal de altitud (verde 0-200m, amarillo mesetas, marrón cordilleras, blanco glaciares). Batimetría submarina (cian a azul marino).' : 'Universal elevation ramp (green 0-200m, yellow plateaus, brown ranges, white snowcaps) and marine bathymetry.'}</li>
                    <li><strong>{isEs ? 'Satélite Real:' : 'Real Satellite:'}</strong> {isEs ? 'Reflectancia real (albedo), arena dorada del desierto, vegetación viva, texturas de roca 3D y monitoreo en tiempo real.' : 'True surface albedo, desert sand, living canopy, 3D rock shadows, and real-time dynamic monitoring.'}</li>
                  </ul>
                </div>

                {/* Level 2 Content Box */}
                <div className="p-4 rounded-xl bg-slate-800/60 border border-sky-500/40 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider">
                      {isEs ? 'Nivel 2: Accidentes Geográficos (Landforms)' : 'Level 2: Landforms Morphology'}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 font-mono">
                      {isEs ? 'Geomorfología y Procesos' : 'Geomorphology & Processes'}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white">
                    {isEs ? 'Los 19 Accidentes Geográficos mostrados en los 3 Tipos de Mapas' : '19 Landforms Displayed Across All 3 Map Types'}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {isEs
                      ? 'Isla, Archipiélago, Península, Istmo, Cabo, Cordillera, Pico, Volcán, Meseta, Llanura, Valle, Desierto, Océano, Mar, Lago, Río, Estrecho, Bahía y Fiordo. Cada uno con definición bilingüe, diagrama SVG, contraste en los 3 mapas y vuelo al ejemplo global.'
                      : 'Island, Archipelago, Peninsula, Isthmus, Cape, Mountain Range, Peak, Volcano, Plateau, Plain, Valley, Desert, Ocean, Sea, Lake, River, Strait, Bay, and Fjord with 3-lens decoding and fly-to examples.'}
                  </p>
                </div>

                {/* Level 3 Content Box */}
                <div className="p-4 rounded-xl bg-slate-800/60 border border-emerald-500/40 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
                      {isEs ? 'Nivel 3: Continentes, Mares y Océanos (Sin Países)' : 'Level 3: Continents, Seas & Oceans (No Countries)'}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono">
                      {isEs ? 'Oceanografía y Tectónica' : 'Oceanography & Tectonics'}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white">
                    {isEs ? 'Cuencas Oceánicas, Fosas Abisales y Continentes en los 3 Mapas' : 'Ocean Basins, Abyssal Trenches & Continental Masses in 3 Lenses'}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {isEs
                      ? 'Los 7 continentes, los 5 océanos (Pacífico, Atlántico, Índico, Glacial Austral y Glacial Ártico) y 9 mares estratégicos mundiales. Se estudian sin países para enfocar la mente en la tectónica de placas, fosas abisales y corrientes termohalinas.'
                      : 'The 7 continents, 5 oceans, and 9 strategic seas analyzed without countries to build solid foundational spatial literacy on plate tectonics and marine bathymetry.'}
                  </p>
                </div>

                {/* Level 4 Content Box */}
                <div className="p-4 rounded-xl bg-slate-800/60 border border-amber-500/40 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
                      {isEs ? 'Nivel 4: Países por Continentes' : 'Level 4: Countries by Continent'}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono">
                      {isEs ? 'Geopolítica y Recursos' : 'Geopolitics & Resources'}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white">
                    {isEs ? 'Exploración con Porcentaje de Visitas y Evaluación por Continente' : 'Exploration with % Visited Tracker & Targeted Continent Exams'}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {isEs
                      ? 'El estudiante selecciona el continente deseado (América del Norte, América del Sur, Europa, África, Asia, Oceanía). Puede explorar todos los países en los 3 mapas, consultando recursos, capitales y accidentes. Se registra el % de países visitados para que decida cuándo evaluarse.'
                      : 'Students select a continent to explore all its countries across the 3 map types. The system tracks the percentage of visited countries so students can decide when they are ready to take that continent’s mastery exam.'}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: THE 3 CARTOGRAPHIC LENSES */}
          {activeTab === 'lenses' && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <p className="text-xs sm:text-sm text-slate-300">
                {isEs
                  ? 'En la barra superior siempre tendrás disponible el conmutador de lentes. Al seleccionar un país o accidente, un fuerte contorno resalta el perímetro sin sombreados opacos que tapen los relieves ni las ciudades:'
                  : 'In the top navigation bar the 3-lens switcher is always available. Selecting a feature highlights its perimeter with a strong outline without opaque fills obscuring relief:'}
              </p>

              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-slate-800/60 border border-blue-500/40 flex items-start gap-3">
                  <span className="text-2xl">🏛️</span>
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      {isEs ? 'Lente Político' : 'Political Lens'}
                    </h4>
                    <p className="text-xs text-slate-300 mt-0.5">
                      {isEs ? 'Fronteras claras, capitales de Estado con estrella (★), demarcaciones jurídicas y soberanía.' : 'Clean international boundaries, capital stars (★), legal jurisdictions, and administrative divisions.'}
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-800/60 border border-sky-500/40 flex items-start gap-3">
                  <span className="text-2xl">🗺️</span>
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      {isEs ? 'Lente Físico (Tintas Hipsométricas)' : 'Physical Relief Lens'}
                    </h4>
                    <p className="text-xs text-slate-300 mt-0.5">
                      {isEs ? 'Escala universal de altitud y batimetría: verde = 0-200m; amarillo = mesetas; marrón = cordilleras; blanco = cumbres glaciares.' : 'Universal elevation ramp: green = lowlands 0-200m; yellow = plateaus; brown = mountain ranges; white = summits.'}
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-800/60 border border-amber-500/40 flex items-start gap-3">
                  <span className="text-2xl">🛰️</span>
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      {isEs ? 'Lente Satélite Real' : 'Real Satellite Lens'}
                    </h4>
                    <p className="text-xs text-slate-300 mt-0.5">
                      {isEs ? 'Imágenes de satélite auténticas en alta resolución: arenas desérticas, quemas, deforestación y texturas de roca vivas.' : 'Authentic high-resolution orbital imagery: true albedo, living vegetation, real desert dunes, and geology.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: BLOOM'S TAXONOMY */}
          {activeTab === 'bloom' && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs sm:text-sm text-slate-200">
                <strong className="text-amber-300 font-bold block mb-1">
                  🎓 {isEs ? 'Alineación con la Taxonomía de Bloom:' : 'Alignment with Bloom’s Taxonomy:'}
                </strong>
                {isEs
                  ? 'Todas las preguntas de evaluación recorren los niveles cognitivos más altos para garantizar comprensión profunda, no simple memorización de nombres.'
                  : 'All assessment questions traverse high cognitive tiers to foster analytical problem solving rather than superficial rote memorization.'}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                  <strong className="text-emerald-400 block font-bold">{isEs ? '1. Recordar (Remember)' : '1. Remember'}</strong>
                  <p className="text-slate-300">{isEs ? 'Reconocer capitales, símbolos cartográficos y nombres de cuencas oceánicas.' : 'Recognizing capitals, symbols, and ocean basin names.'}</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                  <strong className="text-sky-400 block font-bold">{isEs ? '2. Comprender (Understand)' : '2. Understand'}</strong>
                  <p className="text-slate-300">{isEs ? 'Distinguir que el verde en mapas físicos indica baja altitud, no bosques húmedos.' : 'Distinguishing that green denotes low elevation, not rainforest vegetation.'}</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                  <strong className="text-blue-400 block font-bold">{isEs ? '3. Aplicar (Apply)' : '3. Apply'}</strong>
                  <p className="text-slate-300">{isEs ? 'Seleccionar el mapa adecuado para expediciones de montaña o navegación de calado.' : 'Selecting the proper map lens for mountaineering or marine navigation.'}</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                  <strong className="text-purple-400 block font-bold">{isEs ? '4. Analizar (Analyze)' : '4. Analyze'}</strong>
                  <p className="text-slate-300">{isEs ? 'Descubrir por qué los desiertos se forman detrás de cordilleras por sombra orográfica.' : 'Discovering how rain shadow effects form deserts behind mountain barriers.'}</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1 sm:col-span-2">
                  <strong className="text-amber-400 block font-bold">{isEs ? '5. Evaluar (Evaluate)' : '5. Evaluate'}</strong>
                  <p className="text-slate-300">{isEs ? 'Juzgar la idoneidad de recursos, evaluar estrangulamientos geopolíticos marítimos y refutar mitos cartográficos comunes sobre altitud y relieve.' : 'Judging natural resource policies, evaluating geopolitical choke points, and diagnosing common cartographic elevation misconceptions.'}</p>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Footer Actions */}
        <div className="p-3.5 sm:p-5 border-t border-slate-800 bg-slate-950 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <label className="flex items-center gap-2 cursor-pointer text-xs text-slate-400 select-none">
            <input
              type="checkbox"
              checked={dontShowAgain}
              onChange={(e) => setDontShowAgain(e.target.checked)}
              className="rounded bg-slate-800 border-slate-700 text-amber-500 focus:ring-0"
            />
            <span>{isEs ? 'No volver a mostrar al iniciar' : 'Do not show automatically at startup'}</span>
          </label>

          <button
            onClick={handleFinish}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg transition-all active:scale-95"
          >
            <span>{isEs ? 'Comenzar en el Nivel 1: Lectura de Mapas' : 'Begin with Level 1: Map Reading'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
