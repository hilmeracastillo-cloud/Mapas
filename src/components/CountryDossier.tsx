import React from 'react';
import { CountryDossierData, Language, LandformFeature, LensType } from '../types/geography';
import { X, Globe2, Compass, TrendingUp, Mountain, Landmark, ExternalLink, ShieldCheck, Waves, Anchor } from 'lucide-react';
import { getCountrySurroundingWaters } from '../data/surroundingWatersData';
import { getProductIcon } from '../utils/productIcons';

interface CountryDossierProps {
  country: CountryDossierData | null;
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  onFlyToFeature: (coords: [number, number], zoom: number, feature?: LandformFeature) => void;
  onChangeLens?: (lens: LensType) => void;
}

export const CountryDossier: React.FC<CountryDossierProps> = ({
  country,
  isOpen,
  onClose,
  currentLang,
  onFlyToFeature,
  onChangeLens,
}) => {
  if (!isOpen || !country) return null;

  const isEs = currentLang === 'es';
  const countryName = isEs ? country.name_es : country.name_en;
  const capitalName = isEs ? country.capital_es : country.capital_en;
  const continentName = isEs ? country.continent_es : country.continent;
  const flagUrl = `https://flagcdn.com/w160/${country.iso2.toLowerCase()}.png`;
  const watersProfile = getCountrySurroundingWaters(country);

  return (
    <aside
      className="fixed top-14 sm:top-16 right-0 bottom-0 z-30 w-full sm:w-[350px] md:w-[380px] lg:w-[390px] bg-slate-900/95 backdrop-blur-xl border-l border-slate-700/80 shadow-2xl flex flex-col text-slate-100 transition-transform duration-300 ease-in-out overflow-hidden"
      aria-label="Country Dossier"
    >
      {/* Dossier Header */}
      <div className="relative p-3.5 sm:p-4 border-b border-slate-800 bg-gradient-to-b from-slate-800/80 to-slate-900/90">
        <button
          onClick={onClose}
          className="absolute top-3.5 right-3.5 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          aria-label="Close Dossier"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        <div className="flex items-center gap-3">
          <img
            src={flagUrl}
            alt={`${countryName} flag`}
            className="w-12 h-8 sm:w-14 sm:h-9 object-cover rounded shadow border border-slate-600/80 shrink-0"
            onError={(e) => {
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
          <div className="pr-6">
            <div className="flex items-center gap-1.5 flex-wrap">
              <h2 className="text-base sm:text-lg font-extrabold tracking-tight text-white">{countryName}</h2>
              <span className="text-[10px] px-1.5 py-0.2 rounded font-mono font-bold bg-amber-400/20 text-amber-300 border border-amber-400/40">
                {country.iso3}
              </span>
            </div>
            <div className="text-[11px] text-slate-400 flex items-center gap-1 mt-0.5">
              <Globe2 className="w-3 h-3 text-sky-400 shrink-0" />
              <span>{continentName}</span>
              <span>•</span>
              <span className="font-mono text-emerald-400">${country.gdp_billion}B</span>
            </div>
          </div>
        </div>

        {/* Capital Button with Star */}
        <div className="mt-2.5 flex items-center justify-between bg-slate-800/80 px-2.5 py-1.5 rounded-lg border border-slate-700">
          <div className="flex items-center gap-2">
            <span className="text-amber-400 text-sm">★</span>
            <div>
              <span className="text-slate-400 block text-[9px] uppercase font-bold tracking-wider">
                {isEs ? 'Capital Oficial' : 'Official Capital'}
              </span>
              <span className="font-semibold text-xs text-slate-100">{capitalName}</span>
            </div>
          </div>
          <button
            onClick={() => onFlyToFeature(country.capital_coords, 8)}
            className="text-[11px] flex items-center gap-1 px-2 py-1 bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 rounded font-medium border border-amber-400/30 transition-colors"
          >
            <Compass className="w-3 h-3" />
            <span>{isEs ? 'Centrar' : 'Fly To'}</span>
          </button>
        </div>
      </div>

      {/* Dossier Scrollable Body */}
      <div className="flex-1 overflow-y-auto p-3.5 sm:p-4 space-y-3.5 sm:space-y-4 text-xs touch-scroll safe-pb">
        {/* Quick Demographic Metrics */}
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-slate-800/60 p-2 rounded-lg border border-slate-700/60">
            <span className="text-[10px] text-slate-400 block font-medium">
              {isEs ? 'Población' : 'Population'}
            </span>
            <span className="text-xs font-bold text-slate-100 font-mono">{country.population}</span>
          </div>
          <div className="bg-slate-800/60 p-2 rounded-lg border border-slate-700/60">
            <span className="text-[10px] text-slate-400 block font-medium">
              {isEs ? 'Superficie' : 'Land Area'}
            </span>
            <span className="text-xs font-bold text-slate-100 font-mono">{country.area_sqkm}</span>
          </div>
        </div>

        {/* Physical Geography Overview */}
        <div>
          <div className="flex items-center gap-2 mb-1.5 text-xs font-bold uppercase tracking-wider text-sky-400">
            <Mountain className="w-4 h-4" />
            <span>{isEs ? 'Relieve y Geografía Física' : 'Physical Geography & Relief'}</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed bg-slate-800/40 p-3 rounded-lg border border-slate-700/50">
            {isEs ? country.physical_geography_summary.es : country.physical_geography_summary.en}
          </p>
        </div>

        {/* Prominent Landforms - Clickable Fly To Pins */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
              <span>📍</span>
              <span>{isEs ? 'Accidentes Geográficos Clave' : 'Key Physical Landforms'}</span>
            </span>
            <span className="text-[11px] text-slate-400">{country.landforms.length} {isEs ? 'formaciones' : 'features'}</span>
          </div>
          <div className="space-y-2">
            {country.landforms.map((item) => {
              const name = isEs ? item.name_es : item.name_en;
              const desc = isEs ? item.description_es : item.description_en;

              return (
                <div
                  key={item.id}
                  className="bg-slate-800/70 hover:bg-slate-800 p-2.5 rounded-lg border border-slate-700/70 transition-all flex flex-col gap-1.5"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 font-semibold text-xs text-slate-100">
                      <span className="text-sm">{getLandformIcon(item.type)}</span>
                      <span>{name}</span>
                    </div>
                    <button
                      onClick={() => {
                        if (onChangeLens) onChangeLens('physical');
                        onFlyToFeature(item.coords, 8, item);
                      }}
                      className="px-2 py-0.5 text-[11px] rounded bg-red-500/20 hover:bg-red-500/30 text-red-300 border border-red-500/40 flex items-center gap-1 font-semibold transition-all active:scale-95 shrink-0"
                      title={isEs ? 'Localizar con flecha roja en el mapa' : 'Locate with red arrow on map'}
                    >
                      <Compass className="w-3 h-3 text-red-400" />
                      <span>{isEs ? 'Explorar' : 'Fly To'}</span>
                    </button>
                  </div>
                  <p className="text-[11px] text-slate-300 leading-normal">{desc}</p>
                  {(item.elevation_m || item.length_km) && (
                    <div className="text-[10px] font-mono text-amber-300/90 flex gap-3 pt-0.5">
                      {item.elevation_m && <span>Alt: {item.elevation_m}m</span>}
                      {item.length_km && <span>Len: {item.length_km}km</span>}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Surrounding Seas & Oceans Section */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
              <Waves className="w-4 h-4 text-cyan-400" />
              <span>{isEs ? 'Mares y Océanos que lo Circundan' : 'Surrounding Seas & Oceans'}</span>
            </span>
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded font-bold bg-cyan-950/80 text-cyan-300 border border-cyan-500/30">
              {watersProfile.is_landlocked
                ? (isEs ? 'Sin Litoral' : 'Landlocked')
                : `${watersProfile.waters.length} ${isEs ? (watersProfile.waters.length === 1 ? 'cuerpo' : 'cuerpos') : (watersProfile.waters.length === 1 ? 'body' : 'bodies')}`}
            </span>
          </div>

          {watersProfile.is_landlocked ? (
            <div className="bg-sky-950/40 p-3 rounded-lg border border-sky-500/40 space-y-2">
              <div className="flex items-center gap-2 text-sky-300 font-semibold text-xs">
                <Anchor className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{isEs ? 'País sin litoral marítimo (mediterráneo)' : 'Landlocked Nation (No maritime coast)'}</span>
              </div>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                {isEs ? watersProfile.landlocked_note_es : watersProfile.landlocked_note_en}
              </p>
              {watersProfile.waters.length > 0 && (
                <div className="pt-1.5 space-y-1.5">
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
                    {isEs ? 'Salidas marítimas por tratados / hidrovías:' : 'Treaty / river maritime corridors:'}
                  </span>
                  {watersProfile.waters.map((water) => (
                    <div key={water.id} className="flex items-center justify-between bg-slate-900/80 p-2 rounded border border-slate-700/60">
                      <div className="pr-2">
                        <span className="font-semibold text-slate-200 block text-xs">{isEs ? water.name_es : water.name_en}</span>
                        <span className="text-[10px] text-cyan-300 font-mono">{isEs ? water.direction_es : water.direction_en}</span>
                      </div>
                      <button
                        onClick={() => {
                          if (onChangeLens) onChangeLens('physical');
                          onFlyToFeature(water.coords, water.zoom_level || 5, {
                            id: water.id,
                            type: water.type === 'ocean' ? 'ocean' : 'sea',
                            name_en: water.name_en,
                            name_es: water.name_es,
                            coords: water.coords,
                            description_en: `${water.direction_en} — ${water.description_en}`,
                            description_es: `${water.direction_es} — ${water.description_es}`,
                          });
                        }}
                        className="px-2 py-0.5 text-[11px] rounded bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 flex items-center gap-1 font-semibold transition-all shrink-0 active:scale-95"
                      >
                        <Compass className="w-3 h-3 text-cyan-400" />
                        <span>{isEs ? 'Explorar' : 'Fly To'}</span>
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="space-y-2">
              {watersProfile.waters.map((water) => {
                const name = isEs ? water.name_es : water.name_en;
                const dir = isEs ? water.direction_es : water.direction_en;
                const desc = isEs ? water.description_es : water.description_en;
                const isOcean = water.type === 'ocean';

                return (
                  <div
                    key={water.id}
                    className="bg-slate-800/80 hover:bg-slate-800 p-2.5 rounded-lg border border-cyan-500/30 hover:border-cyan-400/60 transition-all flex flex-col gap-1.5 shadow-sm"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2 font-semibold text-xs text-slate-100 min-w-0">
                        <span className="text-sm shrink-0">{isOcean ? '🌊' : '⛵'}</span>
                        <span className="truncate text-white font-bold">{name}</span>
                      </div>
                      <button
                        onClick={() => {
                          if (onChangeLens) onChangeLens('physical');
                          onFlyToFeature(water.coords, water.zoom_level || 5, {
                            id: water.id,
                            type: isOcean ? 'ocean' : 'sea',
                            name_en: water.name_en,
                            name_es: water.name_es,
                            coords: water.coords,
                            description_en: `${water.direction_en} — ${water.description_en}`,
                            description_es: `${water.direction_es} — ${water.description_es}`,
                          });
                        }}
                        className="px-2 py-0.5 text-[11px] rounded bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 flex items-center gap-1 font-semibold transition-all shrink-0 active:scale-95"
                        title={isEs ? 'Ver aguas marinas en el mapa' : 'Locate marine waters on map'}
                      >
                        <Compass className="w-3 h-3 text-cyan-400" />
                        <span>{isEs ? 'Explorar' : 'Fly To'}</span>
                      </button>
                    </div>
                    <div className="text-[10px] font-mono text-cyan-300 flex items-center gap-1">
                      <span>⚓</span>
                      <span>{dir}</span>
                    </div>
                    <p className="text-[11px] text-slate-300 leading-normal">{desc}</p>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Macroeconomic Data: Exports & Imports with real values ($B) */}
        <div>
          <div className="flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
            <TrendingUp className="w-4 h-4" />
            <span>{isEs ? 'Comercio y Recursos Económicos' : 'Trade & Economic Geography'}</span>
          </div>

          <div className="space-y-2.5">
            {/* Exports */}
            <div className="bg-slate-800/50 p-3 rounded-lg border border-slate-700/50">
              <div className="flex justify-between items-center text-xs mb-1.5">
                <span className="font-semibold text-emerald-400">{isEs ? 'Principales Exportaciones' : 'Top Exports'}</span>
                <span className="text-[11px] font-mono text-slate-400 font-bold">
                  ${country.main_exports.total_val_billion}B Total
                </span>
              </div>
              <ul className="text-xs text-slate-300 space-y-1.5">
                {(isEs ? country.main_exports.es : country.main_exports.en).map((exp, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-sm shrink-0 leading-none select-none pt-0.5" role="img" aria-hidden="true">
                      {getProductIcon(exp)}
                    </span>
                    <span className="leading-tight">{exp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Imports */}
            <div className="bg-slate-800/50 p-3 rounded-lg border border-slate-700/50">
              <div className="flex justify-between items-center text-xs mb-1.5">
                <span className="font-semibold text-rose-400">{isEs ? 'Principales Importaciones' : 'Top Imports'}</span>
                <span className="text-[11px] font-mono text-slate-400 font-bold">
                  ${country.main_imports.total_val_billion}B Total
                </span>
              </div>
              <ul className="text-xs text-slate-300 space-y-1.5">
                {(isEs ? country.main_imports.es : country.main_imports.en).map((imp, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-sm shrink-0 leading-none select-none pt-0.5" role="img" aria-hidden="true">
                      {getProductIcon(imp)}
                    </span>
                    <span className="leading-tight">{imp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Natural / Mineral Wealth */}
            <div className="bg-slate-800/50 p-3 rounded-lg border border-slate-700/50">
              <div className="text-xs font-semibold text-amber-400 mb-1.5">
                {isEs ? 'Riqueza Natural y Minera' : 'Natural & Mineral Wealth'}
              </div>
              <ul className="text-xs text-slate-300 space-y-1.5">
                {(isEs ? country.natural_wealth.es : country.natural_wealth.en).map((wealth, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-sm shrink-0 leading-none select-none pt-0.5" role="img" aria-hidden="true">
                      {getProductIcon(wealth)}
                    </span>
                    <span className="leading-tight">{wealth}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Interesting Fact & TEKS Standards */}
        <div className="bg-amber-500/10 border border-amber-500/30 p-3 rounded-lg">
          <div className="text-xs font-bold text-amber-300 mb-1 flex items-center gap-1.5">
            <span>💡</span>
            <span>{isEs ? 'Dato Geográfico Clave' : 'Key Geographic Insight'}</span>
          </div>
          <p className="text-xs text-slate-200 leading-relaxed">
            {isEs ? country.interesting_fact.es : country.interesting_fact.en}
          </p>
        </div>

        {/* Geographic Competence Badge */}
        <div className="pt-1 text-[11px] text-slate-400 border-t border-slate-800 flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
          <span className="truncate">
            {country.teks_alignment
              .map((str) => str.replace(/TEKS\s+[\d.]+[A-Z]*:\s*/gi, ''))
              .join(' • ')}
          </span>
        </div>
      </div>
    </aside>
  );
};

function getLandformIcon(type: string): string {
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
    default:
      return '📍';
  }
}
