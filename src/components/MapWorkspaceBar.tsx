import React, { useState } from 'react';
import { Language, LensType } from '../types/geography';
import { ExplorePlayTopic } from '../data/polesData';
import { ArrowLeft, BookOpen, Trophy, Home, Volume2, VolumeX } from 'lucide-react';

interface MapWorkspaceBarProps {
  currentLang: Language;
  mode: 'explore' | 'play';
  topic: ExplorePlayTopic;
  currentLens: LensType;
  onChangeLens: (lens: LensType) => void;
  onBack: () => void;
  onGoHome: () => void;
  onToggleLang: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
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
  soundEnabled,
  onToggleSound,
  countryPlayKind = 'trivia',
  onChangeCountryPlayKind,
  onJumpToContinent,
}) => {
  const isEs = currentLang === 'es';
  const topicLabel = isEs ? TOPIC_LABELS[topic].es : TOPIC_LABELS[topic].en;
  const modeLabel = mode === 'explore' ? (isEs ? 'Explorar' : 'Explore') : isEs ? 'Jugar' : 'Play';
  const [hoveredTip, setHoveredTip] = useState<{ title: string; text: string } | null>(null);

  const showTip = (title: string, text: string) => setHoveredTip({ title, text });
  const clearTip = () => setHoveredTip(null);

  return (
    <div className="relative z-40 shrink-0">
      <header className="bg-slate-950/95 border-b border-slate-800 px-2 sm:px-4 h-10 lg:h-12 flex items-center justify-between gap-2 overflow-x-auto no-scrollbar text-white">
        {/* Left: Home + Back + Active Mode/Topic */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <button
            type="button"
            onClick={onGoHome}
            onMouseEnter={() =>
              showTip(
                isEs ? 'Menú Principal' : 'Main Menu',
                isEs ? 'Vuelve a la portada principal con el globo 3D.' : 'Return to the main title screen.'
              )
            }
            onMouseLeave={clearTip}
            onFocus={() =>
              showTip(
                isEs ? 'Menú Principal' : 'Main Menu',
                isEs ? 'Vuelve a la portada principal con el globo 3D.' : 'Return to the main title screen.'
              )
            }
            onBlur={clearTip}
            aria-label={isEs ? 'Menú Principal' : 'Main Menu'}
            className="p-1.5 lg:p-2 rounded-lg lg:rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-amber-300 hover:text-amber-200 transition-colors shrink-0 cursor-pointer"
          >
            <Home className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
          </button>

          <button
            type="button"
            onClick={onBack}
            onMouseEnter={() =>
              showTip(
                isEs ? 'Volver' : 'Back',
                isEs
                  ? `Regresa al menú de opciones de ${modeLabel}.`
                  : `Return to the ${modeLabel} options menu.`
              )
            }
            onMouseLeave={clearTip}
            onFocus={() =>
              showTip(
                isEs ? 'Volver' : 'Back',
                isEs
                  ? `Regresa al menú de opciones de ${modeLabel}.`
                  : `Return to the ${modeLabel} options menu.`
              )
            }
            onBlur={clearTip}
            className="px-2.5 py-1 lg:px-3 lg:py-1.5 rounded-lg lg:rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-slate-200 hover:text-white text-[11px] lg:text-xs font-bold inline-flex items-center gap-1 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{isEs ? 'Volver' : 'Back'}</span>
          </button>

          <div className="flex items-center gap-1 text-xs lg:text-sm whitespace-nowrap pl-0.5">
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
              onMouseEnter={() =>
                showTip(
                  'Trivia',
                  isEs
                    ? 'Pon a prueba tu memoria encontrando países, capitales y banderas en el mapa.'
                    : 'Test your memory by finding countries, capitals, and flags on the map.'
                )
              }
              onMouseLeave={clearTip}
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
              onMouseEnter={() =>
                showTip(
                  isEs ? 'Repaso' : 'Review',
                  isEs
                    ? 'Estudia país por país a tu ritmo escuchando su pronunciación en el mapa.'
                    : 'Study country by country at your own pace with spoken pronunciation.'
                )
              }
              onMouseLeave={clearTip}
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

        {/* Right: Continent Jump + 3-Lens Map Switcher + Voice + ES/EN */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          {mode === 'explore' && topic === 'countries' && onJumpToContinent && (
            <select
              aria-label={isEs ? 'Ir a un continente' : 'Jump to continent'}
              defaultValue="World"
              onChange={(e) => onJumpToContinent(e.target.value)}
              onMouseEnter={() =>
                showTip(
                  isEs ? 'Ir a continente' : 'Jump to Continent',
                  isEs
                    ? 'Centra el mapa directamente en el continente que elijas.'
                    : 'Center the map directly on the continent you choose.'
                )
              }
              onMouseLeave={clearTip}
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

          {!(mode === 'play' && (topic !== 'countries' || countryPlayKind === 'trivia')) && (
            <div className="flex items-center gap-1 p-1 bg-slate-900 border border-slate-800 rounded-xl shrink-0">
              {(['political', 'physical', 'satellite'] as LensType[]).map((lens) => {
                const labels: Record<LensType, { es: string; en: string; tipEs: string; tipEn: string }> = {
                  political: {
                    es: 'Político',
                    en: 'Political',
                    tipEs: 'Muestra fronteras claras y colores diferenciados de los países.',
                    tipEn: 'Shows clear country borders and political divisions.',
                  },
                  physical: {
                    es: 'Relieve',
                    en: 'Relief',
                    tipEs: 'Resalta montañas, llanuras, desiertos y profundidades marinas.',
                    tipEn: 'Highlights mountains, plains, deserts, and ocean depth.',
                  },
                  satellite: {
                    es: 'Satélite',
                    en: 'Satellite',
                    tipEs: 'Vista fotográfica real de la Tierra captada desde el espacio.',
                    tipEn: 'Real photographic satellite view of Earth from space.',
                  },
                };
                const isActive = currentLens === lens;
                return (
                  <button
                    key={lens}
                    type="button"
                    onClick={() => onChangeLens(lens)}
                    onMouseEnter={() =>
                      showTip(
                        isEs ? labels[lens].es : labels[lens].en,
                        isEs ? labels[lens].tipEs : labels[lens].tipEn
                      )
                    }
                    onMouseLeave={clearTip}
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
          )}

          <button
            type="button"
            onClick={onToggleSound}
            onMouseEnter={() =>
              showTip(
                isEs ? 'Voz y Sonido' : 'Voice & Sound',
                soundEnabled
                  ? isEs
                    ? 'Pronunciación en voz alta activada (clic para silenciar).'
                    : 'Spoken pronunciation is on (click to mute).'
                  : isEs
                  ? 'Activa la lectura en voz alta al seleccionar elementos.'
                  : 'Enable spoken pronunciation when selecting items.'
              )
            }
            onMouseLeave={clearTip}
            aria-label={soundEnabled ? (isEs ? 'Silenciar voz' : 'Mute voice') : isEs ? 'Activar voz' : 'Enable voice'}
            className={`p-1.5 lg:p-2 rounded-lg lg:rounded-xl border transition-colors shrink-0 cursor-pointer ${
              soundEnabled
                ? 'bg-slate-900 hover:bg-slate-800 border-amber-400/40 text-amber-300'
                : 'bg-slate-900 hover:bg-slate-800 border-slate-700/80 text-slate-400'
            }`}
          >
            {soundEnabled ? (
              <Volume2 className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
            ) : (
              <VolumeX className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
            )}
          </button>

          <button
            type="button"
            onClick={onToggleLang}
            onMouseEnter={() =>
              showTip(
                isEs ? 'Idioma' : 'Language',
                isEs
                  ? 'Cambia el mapa y la pronunciación entre Español e Inglés.'
                  : 'Switch map labels and spoken pronunciation between Spanish and English.'
              )
            }
            onMouseLeave={clearTip}
            className="px-2.5 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-slate-200 hover:text-white text-xs font-bold whitespace-nowrap shrink-0 cursor-pointer transition-colors"
          >
            {isEs ? 'ES / EN' : 'EN / ES'}
          </button>
        </div>
      </header>

      {/* FLOATING HOVER EXPLANATION BAR — APPEARS ONLY WHEN HOVERING A MENU BUTTON */}
      {hoveredTip && (
        <div
          role="status"
          aria-live="polite"
          className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-full mt-1.5 z-50 max-w-[min(92vw,540px)] px-3.5 py-1.5 rounded-xl bg-slate-950/92 backdrop-blur-md border border-amber-300/35 text-xs text-white shadow-xl text-center animate-game-tooltip"
        >
          <span className="font-bold text-amber-300 mr-1.5">{hoveredTip.title}:</span>
          <span>{hoveredTip.text}</span>
        </div>
      )}
    </div>
  );
};
