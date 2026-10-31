import React, { useState } from 'react';
import { LANDFORMS_GLOSSARY } from '../data/landformsGlossary';
import { LandformGlossaryItem, Language, LensType, LandformCategory } from '../types/geography';
import { X, Search, Compass, Sparkles, Filter } from 'lucide-react';

interface LandformGlossaryModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  onFlyToExample: (item: LandformGlossaryItem) => void;
}

export const LandformGlossaryModal: React.FC<LandformGlossaryModalProps> = ({
  isOpen,
  onClose,
  currentLang,
  onFlyToExample,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<LandformCategory | 'all'>('all');
  const [selectedItem, setSelectedItem] = useState<LandformGlossaryItem | null>(LANDFORMS_GLOSSARY[0]);

  if (!isOpen) return null;

  const isEs = currentLang === 'es';

  const filteredItems = LANDFORMS_GLOSSARY.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const name = (isEs ? item.name_es : item.name_en).toLowerCase();
    const def = (isEs ? item.definition_es : item.definition_en).toLowerCase();
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch = !query || name.includes(query) || def.includes(query);
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-700/80 rounded-2xl w-full max-w-5xl h-[92dvh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-3 sm:p-4 border-b border-slate-800 bg-slate-800/60 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="text-lg sm:text-xl">🏔️</span>
              <h2 className="text-sm sm:text-lg font-bold text-white">
                {isEs ? 'Glosario de Accidentes Geográficos' : 'Landforms Glossary'}
              </h2>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              {isEs
                ? 'Explora las 19 formaciones terrestres y acuáticas clave con diagramas y vuelo directo.'
                : 'Explore all 19 key continental and maritime formations with diagrams and live fly-to.'}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Controls: Search & Category Filters */}
        <div className="p-3 sm:p-4 border-b border-slate-800/80 bg-slate-900/90 flex flex-wrap gap-3 items-center justify-between">
          {/* Search Box */}
          <div className="relative flex-1 min-w-[200px] max-w-sm">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={isEs ? 'Buscar accidente geográfico...' : 'Search landform (e.g., Isthmus, River)...'}
              className="w-full bg-slate-800/90 border border-slate-700 rounded-lg pl-9 pr-3 py-1.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto text-xs py-0.5">
            <span className="text-slate-500 flex items-center gap-1 text-[11px] mr-1 hidden sm:flex">
              <Filter className="w-3 h-3" />
              <span>{isEs ? 'Filtro:' : 'Filter:'}</span>
            </span>
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1 rounded-full font-medium transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-amber-400 text-slate-950 font-bold'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {isEs ? 'Todos (19)' : 'All (19)'}
            </button>
            <button
              onClick={() => setSelectedCategory('elevation')}
              className={`px-3 py-1 rounded-full font-medium transition-colors ${
                selectedCategory === 'elevation'
                  ? 'bg-amber-400 text-slate-950 font-bold'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              ⛰️ {isEs ? 'Relieve y Cimas' : 'Elevation & Relief'}
            </button>
            <button
              onClick={() => setSelectedCategory('water')}
              className={`px-3 py-1 rounded-full font-medium transition-colors ${
                selectedCategory === 'water'
                  ? 'bg-sky-400 text-slate-950 font-bold'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              🌊 {isEs ? 'Cuerpos de Agua' : 'Water Bodies'}
            </button>
            <button
              onClick={() => setSelectedCategory('coastal')}
              className={`px-3 py-1 rounded-full font-medium transition-colors ${
                selectedCategory === 'coastal'
                  ? 'bg-emerald-400 text-slate-950 font-bold'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              🏝️ {isEs ? 'Costeros' : 'Coastal'}
            </button>
            <button
              onClick={() => setSelectedCategory('arid')}
              className={`px-3 py-1 rounded-full font-medium transition-colors ${
                selectedCategory === 'arid'
                  ? 'bg-amber-500 text-slate-950 font-bold'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              🏜️ {isEs ? 'Áridos' : 'Arid'}
            </button>
          </div>
        </div>

        {/* Content Body: Split List & Detail Card */}
        <div className="flex-1 overflow-hidden grid grid-cols-1 md:grid-cols-12">
          {/* Left: Scrollable List of 19 Landforms */}
          <div className="md:col-span-5 border-r border-slate-800/80 overflow-y-auto p-3 space-y-2 max-h-[40vh] md:max-h-none">
            {filteredItems.map((item) => {
              const name = isEs ? item.name_es : item.name_en;
              const def = isEs ? item.definition_es : item.definition_en;
              const isSelected = selectedItem?.id === item.id;

              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  className={`p-3 rounded-xl border cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-amber-500/15 border-amber-400/80 shadow-md ring-1 ring-amber-400/50'
                      : 'bg-slate-800/40 border-slate-800 hover:bg-slate-800/80 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-sm text-white flex items-center gap-2">
                      <span className="text-base">{getBadgeEmoji(item.type)}</span>
                      <span>{name}</span>
                    </span>
                    <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">{def}</p>
                </div>
              );
            })}

            {filteredItems.length === 0 && (
              <div className="text-center py-8 text-slate-400 text-xs">
                {isEs ? 'No se encontraron accidentes geográficos con esa búsqueda.' : 'No landforms found matching your search.'}
              </div>
            )}
          </div>

          {/* Right: Detailed Card with SVG Elevation Diagram & Fly To */}
          <div className="md:col-span-7 overflow-y-auto p-5 space-y-5 bg-slate-900/60 flex flex-col justify-between">
            {selectedItem ? (
              <div className="space-y-4">
                {/* Title & Badge */}
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2.5">
                      <span className="text-2xl">{getBadgeEmoji(selectedItem.type)}</span>
                      <h3 className="text-2xl font-extrabold text-white">
                        {isEs ? selectedItem.name_es : selectedItem.name_en}
                      </h3>
                    </div>
                    <p className="text-xs font-mono text-amber-300 mt-1">
                      {isEs ? selectedItem.name_en : selectedItem.name_es} • {selectedItem.type.toUpperCase()}
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      onFlyToExample(selectedItem);
                      onClose();
                    }}
                    className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-xs flex items-center gap-1.5 shadow-lg shadow-amber-500/20 active:scale-95 transition-all"
                  >
                    <Compass className="w-4 h-4" />
                    <span>{isEs ? 'Volar al Ejemplo (Relieve)' : 'Fly-To Example (Relief)'}</span>
                  </button>
                </div>

                {/* SVG Visual Diagram */}
                <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800 shadow-inner flex flex-col items-center justify-center">
                  <div
                    className="w-full flex items-center justify-center"
                    dangerouslySetInnerHTML={{ __html: selectedItem.diagram_svg }}
                  />
                  <span className="text-[10px] text-slate-400 font-mono mt-1 uppercase tracking-wider">
                    {isEs ? 'Diagrama Pedagógico de Elevación y Forma' : 'Pedagogical Elevation & Cross-Section Diagram'}
                  </span>
                </div>

                {/* Definitions (EN & ES) */}
                <div className="space-y-2">
                  <div className="bg-slate-800/60 p-3 rounded-xl border border-slate-700/60">
                    <span className="text-[10px] uppercase font-bold text-sky-400 tracking-wider block mb-0.5">
                      {isEs ? 'Definición en Español' : 'Definition in English'}
                    </span>
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                      {isEs ? selectedItem.definition_es : selectedItem.definition_en}
                    </p>
                  </div>
                  <div className="bg-slate-800/30 p-2.5 rounded-xl border border-slate-800">
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block mb-0.5">
                      {isEs ? 'Definition in English' : 'Definición en Español'}
                    </span>
                    <p className="text-xs text-slate-400 leading-relaxed italic">
                      {isEs ? selectedItem.definition_en : selectedItem.definition_es}
                    </p>
                  </div>
                </div>

                {/* Key Characteristics */}
                <div className="bg-slate-800/50 p-3 rounded-xl border border-slate-700/50">
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block mb-2">
                    {isEs ? 'Características Clave' : 'Key Geological Characteristics'}
                  </span>
                  <ul className="text-xs text-slate-200 space-y-1.5">
                    {(isEs ? selectedItem.key_characteristics_es : selectedItem.key_characteristics_en).map(
                      (char, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-emerald-400 font-bold">✓</span>
                          <span>{char}</span>
                        </li>
                      )
                    )}
                  </ul>
                </div>

                {/* Prominent Global Example Showcase */}
                <div className="p-3 rounded-xl bg-gradient-to-r from-sky-950/60 to-slate-800/60 border border-sky-800/60 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-sky-400 tracking-wider block">
                      {isEs ? 'Ejemplo Global Prominente' : 'Prominent Global Example'}
                    </span>
                    <span className="text-sm font-bold text-white">
                      {isEs ? selectedItem.example_name_es : selectedItem.example_name_en}
                    </span>
                    <span className="text-xs text-slate-400 block">{selectedItem.example_country}</span>
                  </div>
                  <button
                    onClick={() => {
                      onFlyToExample(selectedItem);
                      onClose();
                    }}
                    className="px-3 py-1.5 rounded-lg bg-sky-500/20 hover:bg-sky-500/30 text-sky-300 border border-sky-500/40 text-xs font-bold flex items-center gap-1 transition-colors"
                  >
                    <Compass className="w-3.5 h-3.5" />
                    <span>{isEs ? 'Ver en Mapa' : 'Inspect'}</span>
                  </button>
                </div>

                {/* Fun Fact */}
                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <p className="text-xs text-amber-200 leading-relaxed">
                    {isEs ? selectedItem.fun_fact_es : selectedItem.fun_fact_en}
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex-1 flex items-center justify-center text-slate-400 text-xs">
                {isEs ? 'Selecciona un accidente geográfico.' : 'Select a landform to view details.'}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

function getBadgeEmoji(type: string): string {
  switch (type) {
    case 'river':
      return '🌊';
    case 'peak':
    case 'mountain':
      return '⛰️';
    case 'lake':
      return '💧';
    case 'volcano':
      return '🌋';
    case 'desert':
      return '🏜️';
    case 'strait':
      return '⚓';
    case 'bay':
      return '⛵';
    case 'isthmus':
      return '🌉';
    case 'fjord':
      return '🏞️';
    case 'island':
    case 'archipelago':
      return '🏝️';
    case 'peninsula':
    case 'cape':
      return '🧭';
    default:
      return '📍';
  }
}
