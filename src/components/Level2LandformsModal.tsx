import React, { useState } from 'react';
import { LandformGlossaryItem, Language, LensType } from '../types/geography';
import { LANDFORMS_GLOSSARY } from '../data/landformsGlossary';
import {
  Mountain,
  X,
  Target,
  Sparkles,
  Compass,
  ArrowRight,
  Layers,
  Satellite,
  Globe2,
  Eye,
  CheckCircle2
} from 'lucide-react';

interface Level2LandformsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartEvaluation: () => void;
  onFlyToExample: (item: LandformGlossaryItem, lens: LensType) => void;
  currentLang: Language;
}

export const Level2LandformsModal: React.FC<Level2LandformsModalProps> = ({
  isOpen,
  onClose,
  onStartEvaluation,
  onFlyToExample,
  currentLang,
}) => {
  const isEs = currentLang === 'es';
  const [selectedLandformId, setSelectedLandformId] = useState<string>('isthmus');
  const [selectedLens, setSelectedLens] = useState<LensType>('physical');

  if (!isOpen) return null;

  const currentItem = LANDFORMS_GLOSSARY.find((item) => item.id === selectedLandformId) || LANDFORMS_GLOSSARY[0];

  // Specific 3-map lens explanations for each landform
  const getLensExplanation = (item: LandformGlossaryItem, lens: LensType) => {
    if (lens === 'political') {
      return isEs
        ? `En el Mapa Político: Se aprecian las fronteras territoriales y soberanía sobre este relieve (ej. en ${item.example_country}). Las fronteras suelen apoyarse en ríos, cumbres o líneas marítimas.`
        : `On the Political Map: Territorial boundaries and sovereignty over this landform are shown (e.g. in ${item.example_country}). Borders frequently follow rivers, ridgelines, or coastal limits.`;
    } else if (lens === 'physical') {
      return isEs
        ? `En el Mapa Físico (Tintas de Relieve): Se decodifica según la escala hipsométrica. Los tonos marrones y ocres indican elevación y pendientes pronunciadas; el verde resalta valles y llanuras bajas; y el cian/azul define batimetría costera o fluvial.`
        : `On the Physical Relief Map: Decoded via hypsometric tints. Browns and ochres signify high elevation and rugged slopes; green marks lowlands and valleys; while cyan/blue indicates marine or river bathymetry.`;
    } else {
      return isEs
        ? `En el Satélite Real: Revela la textura geológica viva, reflectancia de roca o arena (albedo), sombras tridimensionales en laderas, patrones de sedimentos en aguas costeras y vegetación real.`
        : `On Real Satellite Imagery: Reveals authentic geological textures, rock or sand reflectance (albedo), 3D slope shadow casting, coastal water sediment plumes, and genuine plant cover.`;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-5 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-700/80 rounded-2xl sm:rounded-3xl w-full max-w-5xl h-[92dvh] flex flex-col shadow-2xl overflow-hidden ring-1 ring-sky-500/20">
        
        {/* Top Header */}
        <div className="p-3.5 sm:p-5 border-b border-slate-800 bg-slate-950/90 flex items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-sky-500/20 text-sky-400 border border-sky-500/30 flex items-center justify-center shadow-lg shrink-0">
              <Mountain className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-sky-500/20 text-sky-300 font-bold border border-sky-500/30">
                  {isEs ? 'Nivel 2 de Aprendizaje Obligatorio' : 'Required Level 2 Learning'}
                </span>
                <span className="text-[11px] text-amber-300 font-mono font-bold">
                  {isEs ? '19 Accidentes Geográficos en los 3 Tipos de Mapas' : '19 Landforms Across 3 Map Types'}
                </span>
              </div>
              <h2 className="text-sm sm:text-lg font-black text-white mt-0.5">
                {isEs ? 'Morfología de Accidentes Geográficos' : 'Landforms Morphology & Multi-Lens Decoding'}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                onClose();
                onStartEvaluation();
              }}
              className="px-3.5 py-1.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-black flex items-center gap-1.5 shadow-md transition-all active:scale-95"
            >
              <Target className="w-3.5 h-3.5" />
              <span>{isEs ? 'Ir a Evaluación (90%)' : 'Take Exam (90%)'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Landforms Horizontal Selector Strip */}
        <div className="flex items-center gap-1.5 p-2.5 bg-slate-950/80 border-b border-slate-800 overflow-x-auto text-xs shrink-0 touch-scroll">
          {LANDFORMS_GLOSSARY.map((lf) => {
            const isSelected = selectedLandformId === lf.id;
            return (
              <button
                key={lf.id}
                onClick={() => setSelectedLandformId(lf.id)}
                className={`px-3 py-1.5 rounded-xl font-bold whitespace-nowrap transition-all flex items-center gap-1.5 border ${
                  isSelected
                    ? 'bg-sky-500 text-white border-sky-400 shadow-md ring-2 ring-sky-400/30'
                    : 'bg-slate-900/70 text-slate-300 border-slate-800 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <span>{isEs ? lf.name_es : lf.name_en}</span>
              </button>
            );
          })}
        </div>

        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5">
          {/* Main Info Card */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            {/* Left Column: Diagram & Core Definition */}
            <div className="md:col-span-5 bg-slate-950/70 border border-slate-800 rounded-2xl p-4 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-sky-400">
                    {currentItem.category.toUpperCase()}
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-900 border border-slate-700 text-slate-300 font-mono">
                    📍 {currentItem.example_country}
                  </span>
                </div>

                <h3 className="text-xl font-black text-white mb-2">
                  {isEs ? currentItem.name_es : currentItem.name_en}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {isEs ? currentItem.definition_es : currentItem.definition_en}
                </p>

                {/* SVG Diagram */}
                <div
                  className="rounded-xl overflow-hidden border border-slate-700 bg-slate-900/80 p-2 shadow-inner"
                  dangerouslySetInnerHTML={{ __html: currentItem.diagram_svg }}
                />
              </div>

              {/* Characteristics List */}
              <div className="space-y-1.5 text-xs text-slate-300">
                <strong className="text-white block font-bold text-[11px] uppercase tracking-wider text-amber-400">
                  {isEs ? 'Rasgos Clave de Identificación:' : 'Key Morphological Clues:'}
                </strong>
                <ul className="space-y-1 list-disc list-inside">
                  {(isEs ? currentItem.key_characteristics_es : currentItem.key_characteristics_en).map((trait, tIdx) => (
                    <li key={tIdx} className="leading-snug">{trait}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: 3 Map Types Comparison & Globe Fly-To */}
            <div className="md:col-span-7 space-y-4 flex flex-col justify-between">
              
              {/* 3 Map Types Lens Switcher for this Landform */}
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>{isEs ? 'Decodificación en los 3 Lentes:' : 'Decoding Across 3 Map Types:'}</span>
                  </span>

                  {/* Lens Buttons */}
                  <div className="flex items-center bg-slate-900 p-1 rounded-xl border border-slate-800">
                    <button
                      onClick={() => setSelectedLens('political')}
                      className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                        selectedLens === 'political'
                          ? 'bg-blue-600 text-white shadow'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {isEs ? 'Político' : 'Political'}
                    </button>
                    <button
                      onClick={() => setSelectedLens('physical')}
                      className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                        selectedLens === 'physical'
                          ? 'bg-sky-500 text-white shadow'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {isEs ? 'Físico' : 'Physical'}
                    </button>
                    <button
                      onClick={() => setSelectedLens('satellite')}
                      className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                        selectedLens === 'satellite'
                          ? 'bg-amber-500 text-slate-950 shadow'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {isEs ? 'Satélite' : 'Satellite'}
                    </button>
                  </div>
                </div>

                {/* Explanation text for the selected lens */}
                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs sm:text-sm text-slate-200 leading-relaxed">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-base">
                      {selectedLens === 'political' ? '🏛️' : selectedLens === 'physical' ? '🗺️' : '🛰️'}
                    </span>
                    <strong className="text-white font-bold">
                      {selectedLens === 'political'
                        ? isEs ? 'Lente Político' : 'Political Lens'
                        : selectedLens === 'physical'
                        ? isEs ? 'Lente Físico (Relieve)' : 'Physical Relief Lens'
                        : isEs ? 'Lente Satélite Real' : 'Real Satellite Lens'}
                    </strong>
                  </div>
                  <p>{getLensExplanation(currentItem, selectedLens)}</p>
                </div>
              </div>

              {/* Real World Global Example Card */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Globe2 className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs font-mono font-bold text-slate-300">
                      {isEs ? 'Ejemplo Destacado en el Globo:' : 'Prominent Global Example:'}
                    </span>
                  </div>

                  <span className="text-[11px] font-mono text-emerald-400 font-bold">
                    {currentItem.example_coords[0]}°, {currentItem.example_coords[1]}°
                  </span>
                </div>

                <div className="flex items-center justify-between gap-3">
                  <div>
                    <h4 className="text-base sm:text-lg font-black text-white">
                      {isEs ? currentItem.example_name_es : currentItem.example_name_en}
                    </h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {isEs ? currentItem.fun_fact_es : currentItem.fun_fact_en}
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      onClose();
                      onFlyToExample(currentItem, selectedLens);
                    }}
                    className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white text-xs font-bold flex items-center gap-1.5 shadow-lg transition-all active:scale-95 shrink-0"
                  >
                    <Compass className="w-4 h-4" />
                    <span>{isEs ? 'Volar al Sitio' : 'Fly to Example'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Ready to Assess CTA */}
              <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between gap-3">
                <div className="text-xs text-slate-200">
                  <strong className="text-amber-300 block font-bold">
                    {isEs ? '¿Comprendes la diferencia en los 3 mapas?' : 'Understand how all 3 lenses decode this?'}
                  </strong>
                  <span>{isEs ? 'Realiza la evaluación de 10 preguntas para desbloquear el Nivel 3.' : 'Pass the 10-question evaluation to unlock Level 3.'}</span>
                </div>

                <button
                  onClick={() => {
                    onClose();
                    onStartEvaluation();
                  }}
                  className="px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-black flex items-center gap-1.5 shadow transition-all shrink-0 active:scale-95"
                >
                  <Target className="w-3.5 h-3.5" />
                  <span>{isEs ? 'Evaluar (90%)' : 'Assess (90%)'}</span>
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
