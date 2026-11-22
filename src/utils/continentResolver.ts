import { CountryDossierData } from '../types/geography';

export type CanonicalContinentId =
  | 'North America'
  | 'South America'
  | 'Europe'
  | 'Africa'
  | 'Asia'
  | 'Oceania'
  | 'Antarctica';

const CANONICAL_CONTINENTS: ReadonlySet<string> = new Set<CanonicalContinentId>([
  'North America',
  'South America',
  'Europe',
  'Africa',
  'Asia',
  'Oceania',
  'Antarctica',
]);

// Geographic view bounds [[south, west], [north, east]] tailored to frame
// each continent's full silhouette cleanly alongside the floating panel.
export const CONTINENT_VIEW_BOUNDS: Record<
  CanonicalContinentId,
  [[number, number], [number, number]]
> = {
  'North America': [
    [7, -168],
    [78, -16],
  ],
  'South America': [
    [-57, -85],
    [14, -33],
  ],
  Europe: [
    [33, -25],
    [72, 67],
  ],
  Africa: [
    [-36, -20],
    [38, 55],
  ],
  Asia: [
    [-11, 26],
    [76, 178],
  ],
  Oceania: [
    [-48, 110],
    [18, 215],
  ],
  Antarctica: [
    [-84, -180],
    [-60, 180],
  ],
};

// Comprehensive ISO-2 fallback mapping for territories, dependencies,
// disputed regions, and microstates in datasets/geo-countries that may not
// appear in STARTER_COUNTRIES.
const TERRITORY_ISO2_TO_CONTINENT: Record<string, CanonicalContinentId> = {
  // Antarctica & Sub-Antarctic
  AQ: 'Antarctica',
  TF: 'Antarctica',
  BV: 'Antarctica',
  HM: 'Antarctica',
  GS: 'Antarctica',

  // North America & Caribbean territories
  GL: 'North America',
  PR: 'North America',
  BM: 'North America',
  KY: 'North America',
  VI: 'North America',
  VG: 'North America',
  AI: 'North America',
  AW: 'North America',
  CW: 'North America',
  SX: 'North America',
  BQ: 'North America',
  GP: 'North America',
  MQ: 'North America',
  BL: 'North America',
  MF: 'North America',
  MS: 'North America',
  TC: 'North America',
  PM: 'North America',
  KN: 'North America',
  LC: 'North America',
  VC: 'North America',
  AG: 'North America',
  DM: 'North America',
  GD: 'North America',
  BB: 'North America',
  TT: 'North America',
  BS: 'North America',
  BZ: 'North America',

  // South America territories
  GF: 'South America',
  FK: 'South America',

  // Europe territories & microstates
  SJ: 'Europe',
  FO: 'Europe',
  AX: 'Europe',
  GI: 'Europe',
  GG: 'Europe',
  JE: 'Europe',
  IM: 'Europe',
  XK: 'Europe',
  VA: 'Europe',
  SM: 'Europe',
  MC: 'Europe',
  AD: 'Europe',
  LI: 'Europe',
  MT: 'Europe',
  CY: 'Europe',
  LU: 'Europe',

  // Africa territories
  EH: 'Africa',
  RE: 'Africa',
  YT: 'Africa',
  SH: 'Africa',
  ST: 'Africa',
  SC: 'Africa',
  MU: 'Africa',
  KM: 'Africa',
  CV: 'Africa',
  GW: 'Africa',
  GQ: 'Africa',
  DJ: 'Africa',
  SZ: 'Africa',
  LS: 'Africa',
  GM: 'Africa',

  // Asia territories
  PS: 'Asia',
  HK: 'Asia',
  MO: 'Asia',
  TW: 'Asia',
  IO: 'Asia',
  CX: 'Asia',
  CC: 'Asia',
  MV: 'Asia',
  BH: 'Asia',
  BN: 'Asia',
  TL: 'Asia',
  BT: 'Asia',
  SG: 'Asia',
  AM: 'Asia',
  AZ: 'Asia',
  GE: 'Asia',
  TR: 'Asia',
  KZ: 'Asia',

  // Oceania territories & Pacific island nations
  NC: 'Oceania',
  PF: 'Oceania',
  GU: 'Oceania',
  AS: 'Oceania',
  MP: 'Oceania',
  CK: 'Oceania',
  NU: 'Oceania',
  TK: 'Oceania',
  WF: 'Oceania',
  PN: 'Oceania',
  NF: 'Oceania',
  UM: 'Oceania',
  PW: 'Oceania',
  MH: 'Oceania',
  FM: 'Oceania',
  KI: 'Oceania',
  NR: 'Oceania',
  TV: 'Oceania',
  TO: 'Oceania',
  WS: 'Oceania',
  VU: 'Oceania',
  SB: 'Oceania',
  FJ: 'Oceania',
  PG: 'Oceania',
  NZ: 'Oceania',
  AU: 'Oceania',
};

const TERRITORY_ISO3_TO_CONTINENT: Record<string, CanonicalContinentId> = {
  ATA: 'Antarctica',
  ATF: 'Antarctica',
  BVT: 'Antarctica',
  HMD: 'Antarctica',
  SGS: 'Antarctica',
  GRL: 'North America',
  PRI: 'North America',
  BMU: 'North America',
  CYM: 'North America',
  VIR: 'North America',
  VGB: 'North America',
  AIA: 'North America',
  ABW: 'North America',
  CUW: 'North America',
  SXM: 'North America',
  BES: 'North America',
  GLP: 'North America',
  MTQ: 'North America',
  BLM: 'North America',
  MAF: 'North America',
  MSR: 'North America',
  TCA: 'North America',
  SPM: 'North America',
  GUF: 'South America',
  FLK: 'South America',
  SJM: 'Europe',
  FRO: 'Europe',
  ALA: 'Europe',
  GIB: 'Europe',
  GGY: 'Europe',
  JEY: 'Europe',
  IMN: 'Europe',
  XKX: 'Europe',
  KOS: 'Europe',
  VAT: 'Europe',
  SMR: 'Europe',
  MCO: 'Europe',
  AND: 'Europe',
  LIE: 'Europe',
  ESH: 'Africa',
  REU: 'Africa',
  MYT: 'Africa',
  SHN: 'Africa',
  PSE: 'Asia',
  HKG: 'Asia',
  MAC: 'Asia',
  TWN: 'Asia',
  IOT: 'Asia',
  NCL: 'Oceania',
  PYF: 'Oceania',
  GUM: 'Oceania',
  ASM: 'Oceania',
  MNP: 'Oceania',
  COK: 'Oceania',
  NIU: 'Oceania',
  TKL: 'Oceania',
  WLF: 'Oceania',
  PCN: 'Oceania',
  NFK: 'Oceania',
  UMI: 'Oceania',
};

const TERRITORY_NAME_TO_CONTINENT: Record<string, CanonicalContinentId> = {
  antarctica: 'Antarctica',
  'french southern and antarctic lands': 'Antarctica',
  'french southern territories': 'Antarctica',
  'south georgia and the south sandwich islands': 'Antarctica',
  'south georgia and south sandwich islands': 'Antarctica',
  'heard island and mcdonald islands': 'Antarctica',
  'bouvet island': 'Antarctica',

  greenland: 'North America',
  'puerto rico': 'North America',
  bermuda: 'North America',
  'cayman islands': 'North America',
  'turks and caicos islands': 'North America',
  'united states virgin islands': 'North America',
  'us virgin islands': 'North America',
  'british virgin islands': 'North America',
  aruba: 'North America',
  curacao: 'North America',
  'sint maarten': 'North America',
  'saint martin': 'North America',
  'saint barthelemy': 'North America',
  'saint pierre and miquelon': 'North America',
  anguilla: 'North America',
  montserrat: 'North America',
  guadeloupe: 'North America',
  martinique: 'North America',
  'us naval base guantanamo bay': 'North America',
  'serranilla bank': 'North America',
  'bajo nuevo bank petrel is': 'North America',
  'clipperton island': 'North America',

  'falkland islands': 'South America',
  'falkland islands malvinas': 'South America',
  'french guiana': 'South America',

  kosovo: 'Europe',
  'faroe islands': 'Europe',
  svalbard: 'Europe',
  'svalbard and jan mayen': 'Europe',
  'aland': 'Europe',
  'aland islands': 'Europe',
  gibraltar: 'Europe',
  guernsey: 'Europe',
  jersey: 'Europe',
  'isle of man': 'Europe',
  vatican: 'Europe',
  'holy see': 'Europe',
  'san marino': 'Europe',
  monaco: 'Europe',
  andorra: 'Europe',
  liechtenstein: 'Europe',
  'cyprus no mans area': 'Europe',
  'dhekelia sovereign base area': 'Europe',
  'akrotiri sovereign base area': 'Europe',
  'northern cyprus': 'Europe',

  'western sahara': 'Africa',
  somaliland: 'Africa',
  reunion: 'Africa',
  mayotte: 'Africa',
  'saint helena': 'Africa',
  'bir tawil': 'Africa',

  palestine: 'Asia',
  'state of palestine': 'Asia',
  'west bank': 'Asia',
  gaza: 'Asia',
  'hong kong': 'Asia',
  'hong kong sar': 'Asia',
  macao: 'Asia',
  'macao sar': 'Asia',
  macau: 'Asia',
  taiwan: 'Asia',
  'siachen glacier': 'Asia',
  'british indian ocean territory': 'Asia',
  'indian ocean territories': 'Asia',
  'spratly islands': 'Asia',
  'scarborough reef': 'Asia',
  'baikonur': 'Asia',

  'new caledonia': 'Oceania',
  'french polynesia': 'Oceania',
  guam: 'Oceania',
  'american samoa': 'Oceania',
  'northern mariana islands': 'Oceania',
  'cook islands': 'Oceania',
  niue: 'Oceania',
  tokelau: 'Oceania',
  'wallis and futuna': 'Oceania',
  'pitcairn islands': 'Oceania',
  'norfolk island': 'Oceania',
  'coral sea islands': 'Oceania',
  'ashmore and cartier islands': 'Oceania',
  'united states minor outlying islands': 'Oceania',
  'us minor outlying islands': 'Oceania',
};

function normalizeGeoName(raw: string): string {
  return raw
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function extractCodes(featureProps: any) {
  const iso2 = String(
    featureProps?.['ISO3166-1-Alpha-2'] ||
      featureProps?.ISO_A2 ||
      featureProps?.iso2 ||
      featureProps?.iso_a2 ||
      ''
  )
    .trim()
    .toUpperCase();

  const iso3 = String(
    featureProps?.['ISO3166-1-Alpha-3'] ||
      featureProps?.ISO_A3 ||
      featureProps?.iso3 ||
      featureProps?.iso_a3 ||
      ''
  )
    .trim()
    .toUpperCase();

  const rawName = String(
    featureProps?.name ||
      featureProps?.NAME ||
      featureProps?.ADMIN ||
      featureProps?.name_en ||
      ''
  ).trim();

  return { iso2, iso3, normName: normalizeGeoName(rawName) };
}

export function isRussiaFeature(featureProps: any, matchedCountry?: CountryDossierData): boolean {
  if (matchedCountry?.iso2?.toLowerCase() === 'ru') return true;
  const { iso2, iso3, normName } = extractCodes(featureProps);
  return iso2 === 'RU' || iso3 === 'RUS' || normName === 'russia' || normName === 'russian federation';
}

export function isFranceFeature(featureProps: any, matchedCountry?: CountryDossierData): boolean {
  if (matchedCountry?.iso2?.toLowerCase() === 'fr') return true;
  const { iso2, iso3, normName } = extractCodes(featureProps);
  return iso2 === 'FR' || iso3 === 'FRA' || normName === 'france';
}

/**
 * Resolve any GeoJSON feature (sovereign country, territory, or Antarctica)
 * to one of the 7 canonical continent IDs.
 */
export function resolveFeatureContinent(
  featureProps: any,
  matchedCountry?: CountryDossierData
): CanonicalContinentId | null {
  if (matchedCountry?.continent && CANONICAL_CONTINENTS.has(matchedCountry.continent)) {
    return matchedCountry.continent as CanonicalContinentId;
  }

  if (!featureProps) return null;
  const { iso2, iso3, normName } = extractCodes(featureProps);

  if (iso2 && iso2 !== '-99' && TERRITORY_ISO2_TO_CONTINENT[iso2]) {
    return TERRITORY_ISO2_TO_CONTINENT[iso2];
  }
  if (iso3 && iso3 !== '-99' && TERRITORY_ISO3_TO_CONTINENT[iso3]) {
    return TERRITORY_ISO3_TO_CONTINENT[iso3];
  }
  if (normName && TERRITORY_NAME_TO_CONTINENT[normName]) {
    return TERRITORY_NAME_TO_CONTINENT[normName];
  }

  return null;
}

// Ural Mountains geographical boundary between Europe and Asia (~60°E).
const URAL_SPLIT_LON = 60;

/**
 * Classify a clicked point on a feature (accounting for transcontinental
 * Russia across the Urals and France's overseas departments like French Guiana).
 */
export function resolveClickContinent(
  featureProps: any,
  matchedCountry: CountryDossierData | undefined,
  latlng?: { lat: number; lng: number }
): CanonicalContinentId | null {
  if (latlng) {
    // Normalize longitude to [-180, 180]
    const normLng = ((((latlng.lng + 180) % 360) + 360) % 360) - 180;
    const lat = latlng.lat;

    if (isRussiaFeature(featureProps, matchedCountry)) {
      // Western/European Russia lies west of the Urals (lon < 60°E and > -20°E).
      // Siberia and Chukotka (including antimeridian wrap < -160°E) belong to Asia.
      if (normLng >= -20 && normLng < URAL_SPLIT_LON) {
        return 'Europe';
      }
      return 'Asia';
    }

    if (isFranceFeature(featureProps, matchedCountry)) {
      return classifyFrancePoint(normLng, lat);
    }
  }

  return resolveFeatureContinent(featureProps, matchedCountry);
}

function classifyFrancePoint(lon: number, lat: number): CanonicalContinentId {
  // French Guiana (South America)
  if (lon < -45 && lat > -5 && lat < 11) return 'South America';
  // Guadeloupe, Martinique, Saint Martin, Saint Barthélemy (Caribbean / North America)
  if (lon < -50 && lat >= 11 && lat < 26) return 'North America';
  // Saint Pierre & Miquelon (North Atlantic / North America)
  if (lon < -40 && lat >= 40) return 'North America';
  // Réunion & Mayotte (Indian Ocean / Africa)
  if (lon > 35 && lon < 65 && lat < 0 && lat > -30) return 'Africa';
  // French Southern & Antarctic Lands
  if (lat <= -35) return 'Antarctica';
  // Pacific territories (if bundled)
  if (lon > 120 || lon < -110) return 'Oceania';
  // Metropolitan France & Corsica
  return 'Europe';
}

function ringCentroid(ring: number[][]): { lon: number; lat: number } {
  if (!ring || ring.length === 0) return { lon: 0, lat: 0 };
  let sumLon = 0;
  let sumLat = 0;
  for (let i = 0; i < ring.length; i++) {
    sumLon += ring[i][0];
    sumLat += ring[i][1];
  }
  return { lon: sumLon / ring.length, lat: sumLat / ring.length };
}

/**
 * Sutherland-Hodgman polygon ring clipper against a vertical meridian x = splitLon.
 * side === 'west' keeps x <= splitLon; side === 'east' keeps x >= splitLon.
 */
function clipRingByLongitude(
  ring: number[][],
  splitLon: number,
  side: 'west' | 'east'
): number[][] {
  if (!ring || ring.length < 3) return [];

  // Strip duplicate closing vertex for clipping
  const pts =
    ring.length > 1 &&
    ring[0][0] === ring[ring.length - 1][0] &&
    ring[0][1] === ring[ring.length - 1][1]
      ? ring.slice(0, -1)
      : ring;

  if (pts.length < 3) return [];

  const isInside = (p: number[]) => (side === 'west' ? p[0] <= splitLon : p[0] >= splitLon);

  const intersect = (a: number[], b: number[]): number[] => {
    const dx = b[0] - a[0];
    if (Math.abs(dx) < 1e-12) return [splitLon, a[1]];
    const t = (splitLon - a[0]) / dx;
    return [splitLon, a[1] + t * (b[1] - a[1])];
  };

  const out: number[][] = [];
  let prev = pts[pts.length - 1];
  let prevIn = isInside(prev);

  for (let i = 0; i < pts.length; i++) {
    const curr = pts[i];
    const currIn = isInside(curr);

    if (currIn) {
      if (!prevIn) {
        out.push(intersect(prev, curr));
      }
      out.push(curr);
    } else if (prevIn) {
      out.push(intersect(prev, curr));
    }

    prev = curr;
    prevIn = currIn;
  }

  if (out.length < 3) return [];
  // Close ring cleanly
  const first = out[0];
  const last = out[out.length - 1];
  if (first[0] !== last[0] || first[1] !== last[1]) {
    out.push([first[0], first[1]]);
  }
  return out;
}

function getPolygonsFromGeometry(geometry: any): number[][][][] {
  if (!geometry) return [];
  if (geometry.type === 'Polygon') return [geometry.coordinates];
  if (geometry.type === 'MultiPolygon') return geometry.coordinates;
  return [];
}

function clipRussiaForContinent(
  feature: any,
  targetContinent: 'Europe' | 'Asia'
): any | null {
  const polygons = getPolygonsFromGeometry(feature.geometry);
  const keptPolygons: number[][][][] = [];

  for (const poly of polygons) {
    const outerRing = poly[0];
    if (!outerRing || outerRing.length < 3) continue;

    // Antimeridian-wrapped far-eastern Chukotka polygons have longitudes < -150 (Asia)
    let minLon = Infinity;
    let maxLon = -Infinity;
    for (let i = 0; i < outerRing.length; i++) {
      const x = outerRing[i][0];
      if (x < minLon) minLon = x;
      if (x > maxLon) maxLon = x;
    }

    const isChukotkaWrap = maxLon < -150;
    if (isChukotkaWrap) {
      if (targetContinent === 'Asia') {
        keptPolygons.push(poly);
      }
      continue;
    }

    if (targetContinent === 'Europe') {
      if (maxLon <= URAL_SPLIT_LON) {
        keptPolygons.push(poly);
      } else if (minLon < URAL_SPLIT_LON) {
        const clippedOuter = clipRingByLongitude(outerRing, URAL_SPLIT_LON, 'west');
        if (clippedOuter.length >= 4) {
          const clippedHoles = poly
            .slice(1)
            .map((h) => clipRingByLongitude(h, URAL_SPLIT_LON, 'west'))
            .filter((h) => h.length >= 4);
          keptPolygons.push([clippedOuter, ...clippedHoles]);
        }
      }
    } else {
      // Asia
      if (minLon >= URAL_SPLIT_LON) {
        keptPolygons.push(poly);
      } else if (maxLon > URAL_SPLIT_LON) {
        const clippedOuter = clipRingByLongitude(outerRing, URAL_SPLIT_LON, 'east');
        if (clippedOuter.length >= 4) {
          const clippedHoles = poly
            .slice(1)
            .map((h) => clipRingByLongitude(h, URAL_SPLIT_LON, 'east'))
            .filter((h) => h.length >= 4);
          keptPolygons.push([clippedOuter, ...clippedHoles]);
        }
      }
    }
  }

  if (keptPolygons.length === 0) return null;

  return {
    type: 'Feature',
    properties: { ...(feature.properties || {}), _resolvedContinent: targetContinent },
    geometry:
      keptPolygons.length === 1
        ? { type: 'Polygon', coordinates: keptPolygons[0] }
        : { type: 'MultiPolygon', coordinates: keptPolygons },
  };
}

function filterFranceForContinent(
  feature: any,
  targetContinent: CanonicalContinentId
): any | null {
  const polygons = getPolygonsFromGeometry(feature.geometry);
  const keptPolygons: number[][][][] = [];

  for (const poly of polygons) {
    const outerRing = poly[0];
    if (!outerRing || outerRing.length < 3) continue;
    const { lon, lat } = ringCentroid(outerRing);
    if (classifyFrancePoint(lon, lat) === targetContinent) {
      keptPolygons.push(poly);
    }
  }

  if (keptPolygons.length === 0) return null;

  return {
    type: 'Feature',
    properties: { ...(feature.properties || {}), _resolvedContinent: targetContinent },
    geometry:
      keptPolygons.length === 1
        ? { type: 'Polygon', coordinates: keptPolygons[0] }
        : { type: 'MultiPolygon', coordinates: keptPolygons },
  };
}

/**
 * Build a GeoJSON FeatureCollection containing the exact landmass polygons
 * belonging to `targetContinent` (including Antarctica, territories, French Guiana,
 * and splitting Russia precisely along the Ural Mountains at 60°E).
 */
export function buildContinentHighlightGeoJson(
  geoData: any,
  targetContinent: string,
  findCountryMatch: (featureProps: any) => CountryDossierData | undefined
): any {
  if (!geoData || !Array.isArray(geoData.features) || !CANONICAL_CONTINENTS.has(targetContinent)) {
    return { type: 'FeatureCollection', features: [] };
  }

  const canonicalTarget = targetContinent as CanonicalContinentId;
  const matchedFeatures: any[] = [];

  for (const feature of geoData.features) {
    if (!feature?.geometry) continue;
    const matchedCountry = findCountryMatch(feature.properties);

    // 1. Transcontinental Russia -> split cleanly at Ural Mountains (60°E)
    if (isRussiaFeature(feature.properties, matchedCountry)) {
      if (canonicalTarget === 'Europe' || canonicalTarget === 'Asia') {
        const clipped = clipRussiaForContinent(feature, canonicalTarget);
        if (clipped) matchedFeatures.push(clipped);
      }
      continue;
    }

    // 2. France -> separate Metropolitan France (Europe), French Guiana (South America), etc.
    if (isFranceFeature(feature.properties, matchedCountry)) {
      const filtered = filterFranceForContinent(feature, canonicalTarget);
      if (filtered) matchedFeatures.push(filtered);
      continue;
    }

    // 3. Standard country / territory / Antarctica resolution
    const resolved = resolveFeatureContinent(feature.properties, matchedCountry);
    if (resolved === canonicalTarget) {
      matchedFeatures.push(feature);
    }
  }

  return {
    type: 'FeatureCollection',
    features: matchedFeatures,
  };
}
