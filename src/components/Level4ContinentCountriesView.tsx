import React from 'react';
import { ContinentId } from '../types/progression';
import { CountryDossierData, Language, LensType } from '../types/geography';
import { CONTINENTS_DATA } from '../data/continentsOceansData';
import {
  Compass,
  Target,
  CheckCircle2,
  Eye,
  Award,
  Globe2,
  ChevronRight,
  Sparkles,
  BookOpen
} from 'lucide-react';

interface Level4ContinentCountriesViewProps {
  countries: CountryDossierData[];
  selectedContinent: ContinentId;
  onSelectContinent: (continent: ContinentId) => void;
  visitedCountriesByContinent: Record<string, string[]>;
  continentScores: Record<string, number>;
  onSelectCountry: (country: CountryDossierData) => void;
  onStartContinentEvaluation: (continent: ContinentId) => void;
  onClose: () => void;
  currentLang: Language;
}

export const Level4ContinentCountriesView: React.FC<Level4ContinentCountriesViewProps> = ({
  countries,
  selectedContinent,
  onSelectContinent,
  visitedCountriesByContinent,
  continentScores,
  onSelectCountry,
  onStartContinentEvaluation,
  onClose,
  currentLang,
}) => {
  const isEs = currentLang === 'es';

  // Helper to calculate statistics for a continent
  const getContinentStats = (contId: ContinentId) => {
    const contCountries = countries.filter((c) => c.continent === contId);
    const totalCount = contCountries.length;
    const visitedList = visitedCountriesByContinent[contId] || [];
    const visitedCount = contCountries.filter((c) =>
      visitedList.includes(c.id) || visitedList.includes(c.iso2.toLowerCase())
    ).length;
    const percentage = totalCount > 0 ? Math.round((visitedCount / totalCount) * 100) : 0;
    const score = continentScores[contId] ?? null;

    return { contCountries, totalCount, visitedCount, percentage, score };
  };

  const selectedStats = getContinentStats(selectedContinent);

  return (
    <div className="absolute top-16 sm:top-20 right-3 sm:right-6 z-20 w-[calc(100vw-24px)] sm:w-[440px] md:w-[480px] bg-slate-900/95 backdrop-blur-xl border border-slate-700/80 rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-5 text-slate-100 ring-1 ring-amber-400/20 max-h-[85vh] overflow-y-auto touch-scroll safe-pb animate-in slide-in-from-right duration-300">
      
      {/* Header */}
      <div className="flex items-start justify-between border-b border-slate-800 pb-3 mb-3">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center shrink-0">
            <Compass className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold border border-amber-500/30">
                {isEs ? 'Nivel 4: Países por Continentes' : 'Level 4: Countries by Continent'}
              </span>
            </div>
            <h3 className="text-sm sm:text-base font-extrabold text-white mt-0.5">
              {isEs ? 'Panel de Exploración y Evaluación' : 'Exploration & Assessment Hub'}
            </h3>
          </div>
        </div>

        <button
          onClick={onClose}
          className="text-xs font-bold text-slate-400 hover:text-white px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 transition-colors"
        >
          {isEs ? 'Ocultar' : 'Minimize'}
        </button>
      </div>

      <p className="text-xs text-slate-300 leading-relaxed mb-4">
        {isEs
          ? 'Selecciona un continente para explorar todos sus países en los 3 tipos de mapas. Observa el porcentaje de países visitados antes de decidir realizar la evaluación.'
          : 'Select a continent to explore all its countries across the 3 map types. Monitor your visited countries percentage before taking the evaluation.'}
      </p>

      {/* Continents Grid Selector */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-4">
        {CONTINENTS_DATA.map((continent) => {
          const stats = getContinentStats(continent.id);
          const isSelected = selectedContinent === continent.id;
          const hasPassed = stats.score !== null && stats.score >= 90;

          return (
            <button
              key={continent.id}
              onClick={() => onSelectContinent(continent.id)}
              className={`p-2.5 rounded-xl border text-left transition-all relative flex flex-col justify-between ${
                isSelected
                  ? 'bg-amber-500/15 border-amber-400 text-white ring-2 ring-amber-400/30 shadow'
                  : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:bg-slate-800/80 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-lg">{continent.icon}</span>
                {hasPassed ? (
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">
                    {stats.score}% ✓
                  </span>
                ) : stats.percentage > 0 ? (
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-900 text-amber-300">
                    {stats.percentage}%
                  </span>
                ) : null}
              </div>

              <div>
                <span className="text-xs font-bold block truncate text-white">
                  {isEs ? continent.name_es : continent.name_en}
                </span>
                <span className="text-[10px] text-slate-400 font-mono">
                  {stats.visitedCount}/{stats.totalCount} {isEs ? 'visitados' : 'visited'}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Continent Active Panel */}
      <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-4">
        <div className="flex items-center justify-between gap-2 border-b border-slate-800 pb-3">
          <div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-400 block mb-0.5">
              {isEs ? 'Continente Seleccionado' : 'Active Continent'}
            </span>
            <h4 className="text-base font-extrabold text-white">
              {isEs
                ? CONTINENTS_DATA.find((c) => c.id === selectedContinent)?.name_es
                : selectedContinent}
            </h4>
          </div>

          {/* Percentage of Visited Countries Gauge */}
          <div className="text-right">
            <span className="text-xs font-mono font-bold text-amber-400 block">
              {selectedStats.visitedCount} de {selectedStats.totalCount} ({selectedStats.percentage}%)
            </span>
            <span className="text-[10px] text-slate-400">
              {isEs ? 'Países Explorados' : 'Countries Explored'}
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden border border-slate-800">
          <div
            className="h-full bg-gradient-to-r from-amber-500 to-emerald-400 transition-all duration-500"
            style={{ width: `${selectedStats.percentage}%` }}
          />
        </div>

        {/* List of Countries in this Continent */}
        <div className="space-y-2">
          <span className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
            <Globe2 className="w-3.5 h-3.5 text-sky-400" />
            <span>{isEs ? 'Explora cada país (haz clic para abrir expediente):' : 'Explore Countries (click to inspect):'}</span>
          </span>

          <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
            {selectedStats.contCountries.map((c) => {
              const isVisited = (visitedCountriesByContinent[selectedContinent] || []).includes(c.id)
                || (visitedCountriesByContinent[selectedContinent] || []).includes(c.iso2.toLowerCase());

              return (
                <div
                  key={c.id}
                  onClick={() => onSelectCountry(c)}
                  className="p-2.5 rounded-xl bg-slate-900/70 hover:bg-slate-800 border border-slate-800 hover:border-amber-400/50 cursor-pointer transition-all flex items-center justify-between gap-2"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <img
                      src={`https://flagcdn.com/w40/${c.iso2.toLowerCase()}.png`}
                      alt={c.name_en}
                      className="w-5 h-3.5 object-cover rounded shadow-sm shrink-0"
                    />
                    <div className="min-w-0">
                      <span className="text-xs font-bold text-white block truncate">
                        {isEs ? c.name_es : c.name_en}
                      </span>
                      <span className="text-[10px] text-slate-400 truncate">
                        ★ {isEs ? c.capital_es : c.capital_en}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    {isVisited ? (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-mono font-bold flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>{isEs ? 'Visitado' : 'Visited'}</span>
                      </span>
                    ) : (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 font-mono">
                        {isEs ? 'Por explorar' : 'Unvisited'}
                      </span>
                    )}
                    <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Start Evaluation Button for this Continent */}
        <div className="pt-2 border-t border-slate-800">
          <button
            onClick={() => onStartContinentEvaluation(selectedContinent)}
            className="w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 text-xs sm:text-sm font-black flex items-center justify-center gap-2 shadow-lg transition-all active:scale-95"
          >
            <Target className="w-4 h-4" />
            <span>
              {isEs
                ? `Realizar Evaluación de ${CONTINENTS_DATA.find((c) => c.id === selectedContinent)?.name_es} (90%)`
                : `Take ${selectedContinent} Assessment (90%)`}
            </span>
          </button>
          <p className="text-[10px] text-slate-400 text-center mt-1.5">
            {isEs
              ? 'La evaluación aborda ubicación espacial, capitales, geografía física y comercio exterior.'
              : 'Assessment covers spatial locations, capitals, terrain features, and trade interdependencies.'}
          </p>
        </div>
      </div>
    </div>
  );
};
