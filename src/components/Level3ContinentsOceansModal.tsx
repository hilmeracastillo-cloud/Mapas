import React, { useState } from 'react';
import { CONTINENTS_DATA, OCEANS_SEAS_DATA } from '../data/continentsOceansData';
import { ContinentInfo, OceanSeaFeature } from '../types/progression';
import { Language, LensType } from '../types/geography';
import {
  Globe,
  X,
  Target,
  Sparkles,
  Compass,
  ArrowRight,
  Layers,
  Satellite,
  Waves,
  Eye,
  Info
} from 'lucide-react';

interface Level3ContinentsOceansModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartEvaluation: () => void;
  onFlyToOceanSea: (coords: [number, number], zoom: number, name: string, lens: LensType) => void;
  onChangeLens?: (lens: LensType) => void;
  currentLang: Language;
}

export const Level3ContinentsOceansModal: React.FC<Level3ContinentsOceansModalProps> = ({
  isOpen,
  onClose,
  onStartEvaluation,
  onFlyToOceanSea,
  onChangeLens,
  currentLang,
}) => {
  const isEs = currentLang === 'es';
  const [activeCategory, setActiveCategory] = useState<'continents' | 'oceans' | 'seas'>('continents');
  const [selectedContinentId, setSelectedContinentId] = useState<string>('South America');
  const [selectedOceanSeaId, setSelectedOceanSeaId] = useState<string>('ocean-pacific');
  const [selectedLens, setSelectedLens] = useState<LensType>('physical');

  if (!isOpen) return null;

  const currentContinent = CONTINENTS_DATA.find((c) => c.id === selectedContinentId) || CONTINENTS_DATA[0];
  const oceansOnly = OCEANS_SEAS_DATA.filter((item) => item.type === 'ocean');
  const seasOnly = OCEANS_SEAS_DATA.filter((item) => item.type === 'sea');
  const currentOceanSea = OCEANS_SEAS_DATA.find((o) => o.id === selectedOceanSeaId) || oceansOnly[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-5 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-700/80 rounded-2xl sm:rounded-3xl w-full max-w-5xl h-[92dvh] flex flex-col shadow-2xl overflow-hidden ring-1 ring-emerald-500/20">
        
        {/* Top Header */}
        <div className="p-3.5 sm:p-5 border-b border-slate-800 bg-slate-950/90 flex items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center shadow-lg shrink-0">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30">
                  {isEs ? 'Nivel 3 de Aprendizaje Obligatorio' : 'Required Level 3 Learning'}
                </span>
                <span className="text-[11px] text-amber-300 font-mono font-bold">
                  {isEs ? 'Exclusivo: Continentes y Océanos (Sin Países)' : 'Exclusive: Continents & Oceans (No Countries)'}
                </span>
              </div>
              <h2 className="text-sm sm:text-lg font-black text-white mt-0.5">
                {isEs ? 'Grandes Masas Terrestres y Cuencas Oceánicas' : 'Global Continental Realms & Oceanic Basins'}
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

        {/* Tab Switcher: Continents vs Oceans vs Seas */}
        <div className="flex items-center border-b border-slate-800 bg-slate-950/60 px-4 sm:px-6 overflow-x-auto text-xs font-semibold gap-1 py-1.5 shrink-0">
          <button
            onClick={() => setActiveCategory('continents')}
            className={`px-3.5 py-2 rounded-xl transition-all flex items-center gap-2 whitespace-nowrap ${
              activeCategory === 'continents'
                ? 'bg-emerald-600 text-white font-bold shadow'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <span>🌍</span>
            <span>{isEs ? '1. Los 7 Continentes' : '1. The 7 Continents'}</span>
          </button>

          <button
            onClick={() => {
              setActiveCategory('oceans');
              setSelectedOceanSeaId('ocean-pacific');
            }}
            className={`px-3.5 py-2 rounded-xl transition-all flex items-center gap-2 whitespace-nowrap ${
              activeCategory === 'oceans'
                ? 'bg-blue-600 text-white font-bold shadow'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Waves className="w-4 h-4" />
            <span>{isEs ? '2. Los 5 Océanos Globales' : '2. The 5 Global Oceans'}</span>
          </button>

          <button
            onClick={() => {
              setActiveCategory('seas');
              setSelectedOceanSeaId('sea-caribbean');
            }}
            className={`px-3.5 py-2 rounded-xl transition-all flex items-center gap-2 whitespace-nowrap ${
              activeCategory === 'seas'
                ? 'bg-sky-500 text-white font-bold shadow'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <span>🌊</span>
            <span>{isEs ? '3. Mares Estratégicos' : '3. Strategic Marginal Seas'}</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5">
          
          {/* Important Pedagogical Banner: NO COUNTRIES PRESENTED IN LEVEL 3 */}
          <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3">
            <Info className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div className="text-xs text-slate-200 leading-relaxed">
              <strong className="text-amber-300 font-bold block mb-0.5">
                {isEs ? 'Principio Pedagógico del Nivel 3: Enfoque Continental y Oceánico' : 'Level 3 Principle: Continental & Oceanic Scale'}
              </strong>
              {isEs
                ? 'En este nivel NO se presentan países individuales. El objetivo es dominar las grandes cuencas oceánicas, fosas abisales, dorsales tectónicas y masas continentales en los 3 tipos de mapas antes de descender a las fronteras políticas de los países en el Nivel 4.'
                : 'In this level, individual countries are NOT presented. The goal is mastering major oceanic basins, abyssal trenches, tectonic ridges, and continental masses across all 3 map types before diving into individual country borders in Level 4.'}
            </div>
          </div>

          {/* SECTION 1: CONTINENTS */}
          {activeCategory === 'continents' && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
                {CONTINENTS_DATA.map((continent) => {
                  const isSelected = selectedContinentId === continent.id;
                  return (
                    <button
                      key={continent.id}
                      onClick={() => setSelectedContinentId(continent.id)}
                      className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between ${
                        isSelected
                          ? 'bg-emerald-950/60 border-emerald-400 text-emerald-200 ring-2 ring-emerald-400/30 shadow'
                          : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:bg-slate-800'
                      }`}
                    >
                      <span className="text-2xl mb-1">{continent.icon}</span>
                      <span className="text-xs font-bold text-white truncate">
                        {isEs ? continent.name_es : continent.name_en}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Continent Detail Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="text-3xl">{currentContinent.icon}</span>
                    <div>
                      <h3 className="text-lg font-black text-white">
                        {isEs ? currentContinent.name_es : currentContinent.name_en}
                      </h3>
                      <span className="text-xs text-slate-400 font-mono">
                        {currentContinent.center_coords[0]}°, {currentContinent.center_coords[1]}°
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      onClose();
                      onFlyOceanOrContinent(currentContinent.center_coords, currentContinent.zoom_level, isEs ? currentContinent.name_es : currentContinent.name_en, 'physical');
                    }}
                    className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold flex items-center gap-1.5 shadow transition-all"
                  >
                    <Compass className="w-4 h-4" />
                    <span>{isEs ? 'Explorar en el Globo' : 'Explore on Globe'}</span>
                  </button>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {isEs ? currentContinent.description_es : currentContinent.description_en}
                </p>

                {/* 3 Map Types Decoding for this Continent */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs space-y-1">
                    <span className="font-bold text-blue-400 flex items-center gap-1">
                      <span>🏛️</span> {isEs ? 'En Mapa Político:' : 'On Political Map:'}
                    </span>
                    <p className="text-slate-300">
                      {isEs ? 'Define la masa continental continua y cómo se organizan las macro-regiones sin fronteras internas de países.' : 'Defines the continental realm and how major geographical regions are bounded.'}
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs space-y-1">
                    <span className="font-bold text-sky-400 flex items-center gap-1">
                      <span>🗺️</span> {isEs ? 'En Mapa Físico:' : 'On Physical Map:'}
                    </span>
                    <p className="text-slate-300">
                      {isEs ? 'Resalta las cordilleras maestras (Andes, Rocosas, Alpes, Himalaya), grandes mesetas y cuencas fluviales.' : 'Highlights continental mountain backbones (Andes, Rockies, Himalayas), shield plateaus, and drainage basins.'}
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs space-y-1">
                    <span className="font-bold text-amber-400 flex items-center gap-1">
                      <span>🛰️</span> {isEs ? 'En Satélite Real:' : 'On Real Satellite:'}
                    </span>
                    <p className="text-slate-300">
                      {isEs ? 'Capta la biomasa viva de selvas ecuatoriales, extensiones de desiertos hiperáridos y casquetes glaciares.' : 'Captures living rainforest canopies, massive hyper-arid deserts, and polar ice sheets.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SECTION 2 & 3: OCEANS & SEAS */}
          {(activeCategory === 'oceans' || activeCategory === 'seas') && (
            <div className="space-y-4">
              {/* Selector Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto p-1 text-xs shrink-0 touch-scroll">
                {(activeCategory === 'oceans' ? oceansOnly : seasOnly).map((feature) => {
                  const isSelected = selectedOceanSeaId === feature.id;
                  return (
                    <button
                      key={feature.id}
                      onClick={() => setSelectedOceanSeaId(feature.id)}
                      className={`px-3 py-1.5 rounded-xl font-bold whitespace-nowrap transition-all border ${
                        isSelected
                          ? 'bg-blue-600 text-white border-blue-400 shadow-md ring-2 ring-blue-400/30'
                          : 'bg-slate-950/70 text-slate-300 border-slate-800 hover:bg-slate-800'
                      }`}
                    >
                      {isEs ? feature.name_es : feature.name_en}
                    </button>
                  );
                })}
              </div>

              {/* Ocean / Sea Detail Box */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 font-bold">
                        {currentOceanSea.type === 'ocean' ? (isEs ? 'Océano Global' : 'Global Ocean') : (isEs ? 'Mar Estratégico' : 'Strategic Sea')}
                      </span>
                      <span className="text-xs font-mono text-amber-300 font-bold">
                        {isEs ? `Profundidad máxima: -${currentOceanSea.depth_m}m` : `Max Depth: -${currentOceanSea.depth_m}m`}
                      </span>
                    </div>

                    <h3 className="text-xl font-black text-white mt-1">
                      {isEs ? currentOceanSea.name_es : currentOceanSea.name_en}
                    </h3>
                  </div>

                  <button
                    onClick={() => {
                      onClose();
                      onFlyOceanOrContinent(currentOceanSea.coords, currentOceanSea.zoom_level, isEs ? currentOceanSea.name_es : currentOceanSea.name_en, selectedLens);
                    }}
                    className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold flex items-center gap-1.5 shadow transition-all"
                  >
                    <Compass className="w-4 h-4" />
                    <span>{isEs ? 'Volar al Océano' : 'Fly to Feature'}</span>
                  </button>
                </div>

                {/* 3 Map Types Detailed Breakdown */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5 text-xs">
                    <span className="font-bold text-blue-400 flex items-center gap-1.5">
                      <span>🏛️</span>
                      <span>{isEs ? 'Lente Político:' : 'Political Lens:'}</span>
                    </span>
                    <p className="text-slate-300 leading-relaxed">
                      {isEs ? currentOceanSea.political_lens_fact_es : currentOceanSea.political_lens_fact_en}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5 text-xs">
                    <span className="font-bold text-sky-400 flex items-center gap-1.5">
                      <span>🗺️</span>
                      <span>{isEs ? 'Lente Físico (Batimetría):' : 'Physical Lens (Bathymetry):'}</span>
                    </span>
                    <p className="text-slate-300 leading-relaxed">
                      {isEs ? currentOceanSea.physical_lens_fact_es : currentOceanSea.physical_lens_fact_en}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5 text-xs">
                    <span className="font-bold text-amber-400 flex items-center gap-1.5">
                      <span>🛰️</span>
                      <span>{isEs ? 'Lente Satelital Real:' : 'Real Satellite Lens:'}</span>
                    </span>
                    <p className="text-slate-300 leading-relaxed">
                      {isEs ? currentOceanSea.satellite_lens_fact_es : currentOceanSea.satellite_lens_fact_en}
                    </p>
                  </div>
                </div>

                {/* Bloom Analytical Insight */}
                <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/30 text-xs text-purple-200">
                  <strong className="text-purple-300 block mb-0.5 font-bold">
                    💡 {isEs ? 'Análisis de Taxonomía de Bloom:' : 'Bloom Taxonomy Deep Analysis:'}
                  </strong>
                  <p className="leading-relaxed">
                    {isEs ? currentOceanSea.bloom_insight_es : currentOceanSea.bloom_insight_en}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Ready to Assess CTA */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-500/20 via-amber-500/10 to-transparent border border-amber-500/40 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div>
              <h4 className="text-sm font-bold text-white">
                {isEs ? '¿Listo para la Evaluación de Continentes y Océanos?' : 'Ready for the Continents & Oceans Exam?'}
              </h4>
              <p className="text-xs text-slate-300">
                {isEs
                  ? 'Aprueba con al menos 90% para desbloquear el Nivel 4 (Exploración y Evaluación de Países por Continentes).'
                  : 'Score 90% or higher to unlock Level 4 (Countries by Continent Exploration & Evaluation).'}
              </p>
            </div>

            <button
              onClick={() => {
                onClose();
                onStartEvaluation();
              }}
              className="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs sm:text-sm font-black flex items-center gap-2 shadow-lg transition-all active:scale-95 shrink-0"
            >
              <Target className="w-4 h-4" />
              <span>{isEs ? 'Iniciar Evaluación del Nivel 3' : 'Start Level 3 Assessment'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );

  function onFlyOceanOrContinent(coords: [number, number], zoom: number, name: string, lens: LensType) {
    onFlyToOceanSea(coords, zoom, name, lens);
  }
};
