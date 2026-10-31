import React, { useState } from 'react';
import { Language } from '../types/geography';
import {
  Compass,
  GraduationCap,
  School,
  BookOpen,
  Award,
  Target,
  ShieldCheck,
  CheckCircle2,
  X,
  ArrowRight,
  Sparkles,
  Layers,
  Globe2,
  HelpCircle
} from 'lucide-react';

interface ForTeachersModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  onStartLevel1?: () => void;
}

export const ForTeachersModal: React.FC<ForTeachersModalProps> = ({
  isOpen,
  onClose,
  currentLang,
  onStartLevel1,
}) => {
  const [displayMode, setDisplayMode] = useState<'bilingual' | 'es' | 'en'>('bilingual');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-5 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-700/80 rounded-2xl sm:rounded-3xl w-full max-w-5xl max-h-[92dvh] flex flex-col shadow-2xl overflow-hidden text-slate-100 ring-1 ring-amber-400/20">
        
        {/* Top Header */}
        <div className="p-4 sm:p-5 border-b border-slate-800 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-tr from-amber-500 via-amber-400 to-yellow-300 flex items-center justify-center text-slate-950 shadow-md shadow-amber-500/30 shrink-0">
              <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-slate-950 stroke-[2.5]" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="text-base sm:text-lg font-black text-white tracking-tight">
                  For Teachers / Para Profesores
                </h1>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
                  Pedagogical & Curriculum Dossier
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Alineación Curricular (Nord Anglia, Texas TEKS, NWEA MAP), Reglas de Calificación (90%) y Taxonomía de Bloom
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Bilingual / Language Display Switcher */}
            <div className="hidden sm:flex items-center p-0.5 bg-slate-950 rounded-xl border border-slate-800 text-xs">
              <button
                type="button"
                onClick={() => setDisplayMode('bilingual')}
                className={`px-2.5 py-1 rounded-lg font-semibold transition-all ${
                  displayMode === 'bilingual'
                    ? 'bg-amber-400 text-slate-950 font-bold shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                🌐 Ambos / Both
              </button>
              <button
                type="button"
                onClick={() => setDisplayMode('es')}
                className={`px-2.5 py-1 rounded-lg font-semibold transition-all ${
                  displayMode === 'es'
                    ? 'bg-amber-400 text-slate-950 font-bold shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                🇪🇸 Español
              </button>
              <button
                type="button"
                onClick={() => setDisplayMode('en')}
                className={`px-2.5 py-1 rounded-lg font-semibold transition-all ${
                  displayMode === 'en'
                    ? 'bg-amber-400 text-slate-950 font-bold shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                🇺🇸 English
              </button>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 sm:p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              title="Cerrar / Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">

          {/* Section 1: Pedagogical Vision & Bloom's Taxonomy */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-950 border border-amber-500/30 space-y-4">
            <div className="flex items-center gap-2.5 text-amber-400">
              <Target className="w-5 h-5" />
              <h2 className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">
                1. Objetivos Formativos y Taxonomía de Bloom / Learning Goals & Bloom’s Taxonomy
              </h2>
            </div>

            <div className={`grid gap-4 ${displayMode === 'bilingual' ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}`}>
              {(displayMode === 'bilingual' || displayMode === 'es') && (
                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                  <div className="flex items-center gap-1.5 text-amber-300 font-bold text-xs">
                    <span>🇪🇸 Enfoque Pedagógico en Español</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    <strong>Rigor Progresivo:</strong> Todo el aprendizaje y evaluación recorre el máximo nivel de la taxonomía de Bloom posible:
                  </p>
                  <ul className="text-xs text-slate-300 space-y-1.5 pl-2 border-l-2 border-amber-500/40">
                    <li><strong className="text-white">Recordar y Comprender:</strong> Decodificar simbología, cotas hipsométricas y nombres cartográficos en mapas reales.</li>
                    <li><strong className="text-white">Aplicar y Analizar:</strong> Identificar por qué un río forma un delta fértil en el desierto o por qué las cordilleras actúan como fronteras naturales.</li>
                    <li><strong className="text-white">Evaluar:</strong> Tomar decisiones estratégicas fundamentadas (ej. ubicar una presa hidroeléctrica con cotas de caída de agua, dirimir litigios fronterizos con tratados o detectar tala ilegal con reflectancia satelital).</li>
                  </ul>
                </div>
              )}

              {(displayMode === 'bilingual' || displayMode === 'en') && (
                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                  <div className="flex items-center gap-1.5 text-amber-300 font-bold text-xs">
                    <span>🇺🇸 Pedagogical Framework in English</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    <strong>Progressive Rigor:</strong> All learning and assessments scale the highest levels of Bloom’s Taxonomy possible:
                  </p>
                  <ul className="text-xs text-slate-300 space-y-1.5 pl-2 border-l-2 border-amber-500/40">
                    <li><strong className="text-white">Remember & Understand:</strong> Decode symbology, hypsometric tints, and cartographic labels on authentic maps.</li>
                    <li><strong className="text-white">Apply & Analyze:</strong> Infer why river deltas sustain dense agriculture amidst deserts and how mountain belts shape borders.</li>
                    <li><strong className="text-white">Evaluate:</strong> Make evidence-based spatial decisions (e.g., siting hydroelectric dams using contour head drop, resolving border disputes, or detecting deforestation via satellite albedo).</li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Section 2: System Rules, Progression & 90% Gating Policy */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-950 border border-emerald-500/30 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5 text-emerald-400">
                <ShieldCheck className="w-5 h-5" />
                <h2 className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">
                  2. Reglas del Sistema y Puerta de Aprobación del 90% / Gating Rules & 90% Mastery Policy
                </h2>
              </div>
              <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30">
                Strict Progression Gate
              </span>
            </div>

            <div className={`grid gap-4 ${displayMode === 'bilingual' ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}`}>
              {(displayMode === 'bilingual' || displayMode === 'es') && (
                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-2.5">
                  <span className="text-xs font-bold text-emerald-300 block">🇪🇸 Secuencia de Aprendizaje Obligatoria (4 Niveles):</span>
                  <div className="space-y-2 text-xs text-slate-300">
                    <div className="p-2 rounded-lg bg-slate-950 border border-slate-800">
                      <strong className="text-white block">Nivel 1 — Lectura de los 3 Tipos de Mapas:</strong>
                      Presentación de Mapa Político, Relieve Físico Hipsométrico y Satélite Real. Características, simbología y matriz de decisión comparativa.
                    </div>
                    <div className="p-2 rounded-lg bg-slate-950 border border-slate-800">
                      <strong className="text-white block">Nivel 2 — Accidentes Geográficos (Landforms):</strong>
                      19 accidentes geográficos mayores (montañas, mesetas, fosas oceánicas, fiordos, deltas, etc.) ilustrados con ejemplos reales en los 3 tipos de mapas.
                    </div>
                    <div className="p-2 rounded-lg bg-slate-950 border border-slate-800">
                      <strong className="text-white block">Nivel 3 — Continentes, Mares y Océanos:</strong>
                      Geografía física global a escala planetaria sin presentar países, visualizada a través de los 3 tipos de mapas.
                    </div>
                    <div className="p-2 rounded-lg bg-slate-950 border border-slate-800">
                      <strong className="text-white block">Nivel 4 — Países por Continente y Exploración:</strong>
                      El estudiante selecciona el continente y explora sus países con medidor de porcentaje visitado antes de solicitar la evaluación continental.
                    </div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-200 text-xs font-semibold">
                    🔒 <strong>Regla Innegociable:</strong> No se puede avanzar al próximo nivel sin haber aprobado el nivel anterior con al menos el <strong>90% de respuestas correctas</strong>.
                  </div>
                </div>
              )}

              {(displayMode === 'bilingual' || displayMode === 'en') && (
                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-2.5">
                  <span className="text-xs font-bold text-emerald-300 block">🇺🇸 Mandatory 4-Level Learning Sequence:</span>
                  <div className="space-y-2 text-xs text-slate-300">
                    <div className="p-2 rounded-lg bg-slate-950 border border-slate-800">
                      <strong className="text-white block">Level 1 — Reading 3 Fundamental Map Types:</strong>
                      Political Map, Hypsometric Physical Relief, and Real Satellite. Characteristics, uses, and multi-lens comparative decision matrix.
                    </div>
                    <div className="p-2 rounded-lg bg-slate-950 border border-slate-800">
                      <strong className="text-white block">Level 2 — Landforms in 3 Lenses:</strong>
                      19 major physical landforms (plateaus, oceanic trenches, fjords, deltas, mountain belts) illustrated across all 3 map types.
                    </div>
                    <div className="p-2 rounded-lg bg-slate-950 border border-slate-800">
                      <strong className="text-white block">Level 3 — Continents, Seas & Oceans:</strong>
                      Global physical geography without individual countries, examined across political, physical relief, and satellite basemaps.
                    </div>
                    <div className="p-2 rounded-lg bg-slate-950 border border-slate-800">
                      <strong className="text-white block">Level 4 — Countries by Continent & Exploration:</strong>
                      Student selects a continent to explore sovereign nations, tracking progress via visited percentage meter before taking the continent exam.
                    </div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-200 text-xs font-semibold">
                    🔒 <strong>Non-negotiable Gate:</strong> No student can unlock the next level without achieving at least a <strong>90% passing score</strong> on the previous level assessment.
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Section 3: Curriculum Alignment — Nord Anglia Education */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-950 border border-blue-500/30 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5 text-blue-400">
                <School className="w-5 h-5" />
                <h3 className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">
                  3. Currículo de Nord Anglia Education / Nord Anglia Curriculum
                </h3>
              </div>
              <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 font-bold border border-blue-500/30">
                Global Network (80+ Schools)
              </span>
            </div>

            <div className={`grid gap-4 ${displayMode === 'bilingual' ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}`}>
              {(displayMode === 'bilingual' || displayMode === 'es') && (
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

              {(displayMode === 'bilingual' || displayMode === 'en') && (
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

          {/* Section 4: Texas TEKS (Social Studies & Geography) */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-950 border border-emerald-500/30 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5 text-emerald-400">
                <BookOpen className="w-5 h-5" />
                <h3 className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">
                  4. Estándares Texas TEKS / Texas TEKS Standards
                </h3>
              </div>
              <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30">
                Grades 5, 6 & World Geography
              </span>
            </div>

            <div className={`grid gap-4 ${displayMode === 'bilingual' ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}`}>
              {(displayMode === 'bilingual' || displayMode === 'es') && (
                <div className="space-y-2 text-xs text-slate-300">
                  <div className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-500/20">
                    <strong className="text-emerald-300 font-semibold block mb-1">¿Qué es el currículo TEKS?</strong>
                    <p className="text-slate-300 leading-relaxed">
                      Los TEKS (Texas Essential Knowledge and Skills) son los estándares curriculares obligatorios del estado de Texas. En Ciencias Sociales y Geografía, exigen dominio riguroso en lectura de representaciones cartográficas, localización de regiones y análisis de la interacción ser humano-medio ambiente.
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

              {(displayMode === 'bilingual' || displayMode === 'en') && (
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

          {/* Section 5: NWEA MAP Growth Objectives */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-950 border border-purple-500/30 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5 text-purple-400">
                <Award className="w-5 h-5" />
                <h3 className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">
                  5. Objetivos de Crecimiento NWEA MAP Growth / NWEA MAP Growth Objectives
                </h3>
              </div>
              <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 font-bold border border-purple-500/30">
                Adaptive Testing Mastery
              </span>
            </div>

            <div className={`grid gap-4 ${displayMode === 'bilingual' ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}`}>
              {(displayMode === 'bilingual' || displayMode === 'es') && (
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
                      La aplicación entrena sistemáticamente la mayor trampa conceptual identificada en MAP Growth: confundir el color verde de los mapas físicos con vegetación o bosques. En GeoMaster, el alumno comprueba que el verde representa baja altitud (0-200m) y que desiertos costeros o a nivel del mar como el Sahara o el Delta del Nilo son verdes en un mapa físico aunque no tengan selva.
                    </p>
                  </div>
                </div>
              )}

              {(displayMode === 'bilingual' || displayMode === 'en') && (
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

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-950 flex items-center justify-between gap-3 shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-semibold transition-colors"
          >
            ← Volver / Close
          </button>

          {onStartLevel1 && (
            <button
              type="button"
              onClick={() => {
                onClose();
                onStartLevel1();
              }}
              className="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-black flex items-center gap-2 shadow-lg shadow-amber-400/20 transition-all active:scale-95"
            >
              <span>Ir al Nivel 1: Lectura de Mapas / Start Level 1</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>

      </div>
    </div>
  );
};
