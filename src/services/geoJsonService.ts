import { PRESET_REAL_BOUNDARIES } from '../data/presetRealBoundariesGeoJson';

let cachedFullGeoJson: any = null;
let fetchPromise: Promise<any> | null = null;

/**
 * Fetch full 258-country GeoJSON dataset once and cache in memory.
 */
export const fetchCountriesGeoJson = (): Promise<any> => {
  if (cachedFullGeoJson) return Promise.resolve(cachedFullGeoJson);
  if (!fetchPromise) {
    fetchPromise = fetch('https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch country geojson');
        return res.json();
      })
      .then((data) => {
        cachedFullGeoJson = data;
        return data;
      })
      .catch((err) => {
        console.warn('Could not load online GeoJSON, using preset boundaries fallback:', err);
        return PRESET_REAL_BOUNDARIES;
      });
  }
  return fetchPromise;
};

export const getCachedGeoJson = () => cachedFullGeoJson || PRESET_REAL_BOUNDARIES;

/**
 * Get GeoJSON FeatureCollection for a list of ISO2 codes.
 * Returns local high-precision preset boundaries immediately if full dataset isn't loaded yet.
 */
export const getFeaturesForIso2s = (isoList: string[], fullData?: any): any => {
  const normalizedTargets = isoList.map((iso) => iso.trim().toUpperCase());
  const source = fullData || cachedFullGeoJson || PRESET_REAL_BOUNDARIES;
  if (!source || !source.features) return { type: 'FeatureCollection', features: [] };

  const matched = source.features.filter((f: any) => {
    const p = f.properties || {};
    const iso2 = (p.iso2 || p.ISO_A2 || p['ISO3166-1-Alpha-2'] || '').toUpperCase();
    const iso3 = (p.iso3 || p.ISO_A3 || p['ISO3166-1-Alpha-3'] || '').toUpperCase();
    return normalizedTargets.includes(iso2) || normalizedTargets.includes(iso3);
  });

  return {
    type: 'FeatureCollection',
    features: matched,
  };
};
