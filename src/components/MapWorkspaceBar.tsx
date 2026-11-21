import React from 'react';
import { Language, LensType } from '../types/geography';
import { ExplorePlayTopic } from '../data/polesData';
import { ArrowLeft, BookOpen, Trophy, Home } from 'lucide-react';

interface MapWorkspaceBarProps {
  currentLang: Language;
  mode: 'explore' | 'play';
  topic: ExplorePlayTopic;
  currentLens: LensType;
  onChangeLens: (lens: LensType) => void;
  onBack: () => void;
  onGoHome: () => void;
  onToggleLang: () => void;
  countryPlayKind?: 'trivia' | 'review';
  onChangeCountryPlayKind?: (kind: 'trivia' | 'review') => void;
  onJumpToContinent?: (continent: string) => void;
}

const TOPIC_LABELS: Record<ExplorePlayTopic, { es: string; en: string }> = {
  continents: { es: 'Continentes', en: 'Continents' },
  countries: { es: 'Países', en: 'Countries' },
  oceans: { es: 'Océanos', en: 'Oceans' },
  seas: { es: 'Mares', en: 'Seas' },
  poles: { es: 'Polos', en: 'Poles' },
};

export const MapWorkspaceBar: React.FC<MapWorkspaceBarProps> = ({
  currentLang,
  mode,
  topic,
  currentLens,
  onChangeLens,
  onBack,
  onGoHome,
  onToggleLang,
  countryPlayKind = 'trivia',
  onChangeCountryPlayKind,
  onJumpToContinent,
}) => {
  const isEs = currentLang === 'es';
  const topicLabel = isEs ? TOPIC_LABELS[topic].es : TOPIC_LABELS[topic].en;
  const modeLabel = mode === 'explore' ? (isEs ? 'Explorar' : 'Explore') : isEs ? 'Jugar' : 'Play';

  return (
    <header className="bg-slate-950/95 border-b border-slate-800 px-3 sm:px-5 h-12 sm:h-13 flex items-center justify-between gap-2.5 shrink-0 overflow-x-auto no-scrollbar text-white">
      {/* Left: Home + Back + Active Mode/Topic */}
      <div className="flex items-center gap-2 shrink-0">
        <button
          type="button"
          onClick={onGoHome}
          title={isEs ? 'Menú Principal' : 'Main Menu'}
          aria-label={isEs ? 'Menú Principal' : 'Main Menu'}
          className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-amber-300 hover:text-amber-200 transition-colors shrink-0 cursor-pointer"
        >
          <Home className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={onBack}
          className="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-slate-200 hover:text-white text-xs font-bold inline-flex items-center gap-1.5 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>{isEs ? 'Volver' : 'Back'}</span>
        </button>

        <div className="flex items-center gap-1.5 text-xs sm:text-sm whitespace-nowrap pl-1">
          <span className="font-semibold text-slate-400">{modeLabel}</span>
          <span className="text-slate-600" aria-hidden="true">/</span>
          <span className="font-display font-bold text-white">{topicLabel}</span>
        </div>
      </div>

      {/* Center: Country Play Mode Toggle (Trivia | Repaso) */}
      {mode === 'play' && topic === 'countries' && onChangeCountryPlayKind && (
        <div className="flex items-center gap-1 p-1 bg-slate-900 border border-slate-800 rounded-xl shrink-0">
          <button
            type="button"
            onClick={() => onChangeCountryPlayKind('trivia')}
            className={`px-3 py-1 rounded-lg text-xs font-bold inline-flex items-center gap-1.5 transition-colors whitespace-nowrap cursor-pointer ${
              countryPlayKind === 'trivia'
                ? 'bg-amber-400 text-slate-950 shadow-xs'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <Trophy className="w-3.5 h-3.5" />
            <span>Trivia</span>
          </button>
          <button
            type="button"
            onClick={() => onChangeCountryPlayKind('review')}
            className={`px-3 py-1 rounded-lg text-xs font-bold inline-flex items-center gap-1.5 transition-colors whitespace-nowrap cursor-pointer ${
              countryPlayKind === 'review'
                ? 'bg-sky-400 text-slate-950 shadow-xs'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>{isEs ? 'Repaso' : 'Review'}</span>
          </button>
        </div>
      )}

      {/* Right: Continent Jump + 3-Lens Map Switcher + ES/EN */}
      <div className="flex items-center gap-2 shrink-0">
        {mode === 'explore' && topic === 'countries' && onJumpToContinent && (
          <select
            aria-label={isEs ? 'Ir a un continente' : 'Jump to continent'}
            defaultValue="World"
            onChange={(e) => onJumpToContinent(e.target.value)}
            className="hidden md:block bg-slate-900 border border-slate-700/80 rounded-xl px-2.5 py-1.5 text-xs font-semibold text-slate-200 focus:outline-none focus:border-sky-400 cursor-pointer"
          >
            <option value="World">{isEs ? 'Todo el mundo' : 'Entire world'}</option>
            <option value="North America">{isEs ? 'América del Norte' : 'North America'}</option>
            <option value="South America">{isEs ? 'América del Sur' : 'South America'}</option>
            <option value="Europe">{isEs ? 'Europa' : 'Europe'}</option>
            <option value="Africa">{isEs ? 'África' : 'Africa'}</option>
            <option value="Asia">{isEs ? 'Asia' : 'Asia'}</option>
            <option value="Oceania">{isEs ? 'Oceanía' : 'Oceania'}</option>
          </select>
        )}

        <div className="flex items-center gap-1 p-1 bg-slate-900 border border-slate-800 rounded-xl shrink-0">
          {(['political', 'physical', 'satellite'] as LensType[]).map((lens) => {
            const labels: Record<LensType, { es: string; en: string }> = {
              political: { es: 'Político', en: 'Political' },
              physical: { es: 'Relieve', en: 'Relief' },
              satellite: { es: 'Satélite', en: 'Satellite' },
            };
            const isActive = currentLens === lens;
            return (
              <button
                key={lens}
                type="button"
                onClick={() => onChangeLens(lens)}
                className={`px-2.5 sm:px-3 py-1 rounded-lg text-xs font-bold transition-colors whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-sky-500 text-white shadow-xs'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {isEs ? labels[lens].es : labels[lens].en}
              </button>
            );
          })}
        </div>

        <button
          type="button"
          onClick={onToggleLang}
          className="px-2.5 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-slate-200 hover:text-white text-xs font-bold whitespace-nowrap shrink-0 cursor-pointer transition-colors"
        >
          {isEs ? 'ES / EN' : 'EN / ES'}
        </button>
      </div>
    </header>
  );
};
