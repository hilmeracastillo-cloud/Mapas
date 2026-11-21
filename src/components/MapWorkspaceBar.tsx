import React from 'react';
import { Language, LensType } from '../types/geography';
import { ExplorePlayTopic } from '../data/polesData';
import { ArrowLeft, BookOpen, Trophy } from 'lucide-react';

interface MapWorkspaceBarProps {
  currentLang: Language;
  mode: 'explore' | 'play';
  topic: ExplorePlayTopic;
  currentLens: LensType;
  onChangeLens: (lens: LensType) => void;
  onBack: () => void;
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
  countryPlayKind = 'trivia',
  onChangeCountryPlayKind,
  onJumpToContinent,
}) => {
  const isEs = currentLang === 'es';
  const topicLabel = isEs ? TOPIC_LABELS[topic].es : TOPIC_LABELS[topic].en;
  const modeLabel = mode === 'explore' ? (isEs ? 'Explorar' : 'Explore') : isEs ? 'Jugar' : 'Play';

  return (
    <div className="bg-slate-50/95 border-b border-slate-200 px-3 sm:px-6 py-2 flex items-center justify-between gap-3 shrink-0 overflow-x-auto no-scrollbar">
      {/* Left: Back + Current Topic */}
      <div className="flex items-center gap-3 shrink-0">
        <button
          type="button"
          onClick={onBack}
          className="px-3 py-1.5 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-950 text-xs font-semibold inline-flex items-center gap-1.5 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>{isEs ? 'Volver' : 'Back'}</span>
        </button>

        <div className="flex items-center gap-2 text-xs sm:text-sm whitespace-nowrap">
          <span className="font-semibold text-slate-500">{modeLabel}</span>
          <span className="text-slate-300" aria-hidden="true">/</span>
          <span className="font-display font-bold text-slate-950">{topicLabel}</span>
        </div>
      </div>

      {/* Center: Optional Country Play Switcher (Trivia vs Repaso) */}
      {mode === 'play' && topic === 'countries' && onChangeCountryPlayKind && (
        <div className="flex items-center gap-1 p-1 bg-slate-200/80 rounded-xl shrink-0">
          <button
            type="button"
            onClick={() => onChangeCountryPlayKind('trivia')}
            className={`px-3 py-1 rounded-lg text-xs font-bold inline-flex items-center gap-1.5 transition-colors whitespace-nowrap cursor-pointer ${
              countryPlayKind === 'trivia'
                ? 'bg-white text-slate-950 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Trophy className="w-3.5 h-3.5 text-amber-600" />
            <span>{isEs ? 'Trivia' : 'Trivia'}</span>
          </button>
          <button
            type="button"
            onClick={() => onChangeCountryPlayKind('review')}
            className={`px-3 py-1 rounded-lg text-xs font-bold inline-flex items-center gap-1.5 transition-colors whitespace-nowrap cursor-pointer ${
              countryPlayKind === 'review'
                ? 'bg-white text-slate-950 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5 text-sky-600" />
            <span>{isEs ? 'Repaso' : 'Review'}</span>
          </button>
        </div>
      )}

      {/* Right: Continent Jump (Explore Countries) + 3-Lens Map Switcher */}
      <div className="flex items-center gap-2 shrink-0">
        {mode === 'explore' && topic === 'countries' && onJumpToContinent && (
          <select
            aria-label={isEs ? 'Ir a un continente' : 'Jump to continent'}
            defaultValue="World"
            onChange={(e) => onJumpToContinent(e.target.value)}
            className="hidden md:block bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs font-medium text-slate-700 focus:outline-none focus:border-sky-500 cursor-pointer"
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

        <div className="flex items-center gap-1 p-1 bg-slate-200/80 rounded-xl shrink-0">
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
                className={`px-2.5 sm:px-3 py-1 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-white text-slate-950 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {isEs ? labels[lens].es : labels[lens].en}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
