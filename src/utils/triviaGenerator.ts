import { CountryDossierData } from '../types/geography';
import { ContinentId } from '../types/progression';
import { CONTINENTS_DATA } from '../data/continentsOceansData';
import { TriviaFlavor, TriviaQuestion } from '../types/trivia';

// Helper to shuffle an array
function shuffle<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export function generateTriviaQuestion(
  flavor: TriviaFlavor,
  countries: CountryDossierData[],
  usedQuestionIds: string[] = [],
  continentsFilter?: string[]
): TriviaQuestion {
  // If a continent filter is active, restrict the pool of countries
  let pool = countries;
  if (continentsFilter && continentsFilter.length > 0) {
    const filtered = countries.filter((c) => continentsFilter.includes(c.continent));
    if (filtered.length > 0) {
      pool = filtered;
    }
  }

  switch (flavor) {
    case 'continents':
      return generateContinentsQuestion(usedQuestionIds);
    case 'capitals':
      return generateCapitalsQuestion(pool, usedQuestionIds);
    case 'flags':
      return generateFlagsQuestion(pool, usedQuestionIds);
    case 'countries':
    default:
      return generateCountriesQuestion(pool, usedQuestionIds);
  }
}

/**
 * Flavor 1: CONTINENTES
 */
function generateContinentsQuestion(usedQuestionIds: string[]): TriviaQuestion {
  const eligible = CONTINENTS_DATA.filter((c) =>
    ['North America', 'South America', 'Europe', 'Africa', 'Asia', 'Oceania'].includes(c.id)
  );

  // Exclude previously asked continents in this session
  let pool = eligible.filter((c) => !usedQuestionIds.includes(c.id));
  if (pool.length === 0) {
    // If all have been used, recycle pool
    pool = eligible;
  }

  const target = pool[Math.floor(Math.random() * pool.length)] || eligible[0];

  const continentHints: Record<
    string,
    { h1_es: string; h1_en: string; h2_es: string; h2_en: string; h3_es: string; h3_en: string }
  > = {
    'North America': {
      h1_es: 'Pista 1: Se ubica en el hemisferio occidental, al norte del Ecuador.',
      h1_en: 'Hint 1: Located in the Western Hemisphere, north of the Equator.',
      h2_es: 'Pista 2: Bordeado por el Océano Ártico al norte, el Atlántico al este y el Pacífico al oeste.',
      h2_en: 'Hint 2: Bordered by the Arctic Ocean to the north, Atlantic to the east, and Pacific to the west.',
      h3_es: 'Pista 3: Alberga las Montañas Rocosas, las Grandes Llanuras y el río Misisipi.',
      h3_en: 'Hint 3: Home to the Rocky Mountains, the Great Plains, and the Mississippi River.',
    },
    'South America': {
      h1_es: 'Pista 1: Se extiende principalmente por el hemisferio sur y occidental.',
      h1_en: 'Hint 1: Spans mainly across the Southern and Western Hemispheres.',
      h2_es: 'Pista 2: Atravesado por la cordillera continental más larga del planeta: la Cordillera de los Andes.',
      h2_en: 'Hint 2: Traversed by the longest continental mountain range on Earth: the Andes.',
      h3_es: 'Pista 3: Alberga la mayor cuenca hidrográfica del mundo: la cuenca del Amazonas.',
      h3_en: 'Hint 3: Home to the largest river basin in the world: the Amazon Basin.',
    },
    'Europe': {
      h1_es: 'Pista 1: Se ubica al oeste del continente euroasiático, al norte de África y del Mar Mediterráneo.',
      h1_en: 'Hint 1: Situated in the western part of Eurasia, north of Africa and the Mediterranean Sea.',
      h2_es: 'Pista 2: Limitado al este por la cordillera de los Montes Urales y al sur por el Mar Negro.',
      h2_en: 'Hint 2: Bounded to the east by the Ural Mountains and to the south by the Black Sea.',
      h3_es: 'Pista 3: Destaca por la península escandinava, la llanura noreuropea y los Alpes.',
      h3_en: 'Hint 3: Distinctive for the Scandinavian peninsula, North European Plain, and the Alps.',
    },
    'Africa': {
      h1_es: 'Pista 1: Es atravesado directamente por la línea del Ecuador y el Meridiano de Greenwich.',
      h1_en: 'Hint 1: Bisected directly by both the Equator and the Prime Meridian.',
      h2_es: 'Pista 2: Rodeado por el Mar Mediterráneo al norte, el Océano Atlántico al oeste y el Índico al este.',
      h2_en: 'Hint 2: Surrounded by the Mediterranean Sea north, the Atlantic west, and the Indian Ocean east.',
      h3_es: 'Pista 3: Contiene el desierto cálido más grande del mundo (el Sáhara) y el río Nilo.',
      h3_en: 'Hint 3: Contains the largest hot desert in the world (the Sahara) and the Nile River.',
    },
    'Asia': {
      h1_es: 'Pista 1: Es el continente más extenso y poblado de la Tierra, ubicado en el hemisferio oriental.',
      h1_en: 'Hint 1: The largest and most populous continent on Earth, located in the Eastern Hemisphere.',
      h2_es: 'Pista 2: Bordeado por el Océano Ártico al norte, el Pacífico al este y el Índico al sur.',
      h2_en: 'Hint 2: Bordered by the Arctic Ocean north, the Pacific east, and the Indian Ocean south.',
      h3_es: 'Pista 3: Coronado por la cordillera del Himalaya y la meseta del Tíbet.',
      h3_en: 'Hint 3: Crowned by the Himalayan mountain range and the Tibetan Plateau.',
    },
    'Oceania': {
      h1_es: 'Pista 1: Es el continente insular más pequeño, situado en el suroeste del Océano Pacífico.',
      h1_en: 'Hint 1: The smallest island continent, situated in the southwest Pacific Ocean.',
      h2_es: 'Pista 2: Compuesto por una masa continental principal rodeada por miles de islas y atolones.',
      h2_en: 'Hint 2: Composed of a major continental landmass surrounded by thousands of islands and atolls.',
      h3_es: 'Pista 3: Alberga la Gran Barrera de Coral y el vasto desierto del Outback.',
      h3_en: 'Hint 3: Home to the Great Barrier Reef and the vast Outback desert.',
    },
  };

  const hints = continentHints[target.id] || {
    h1_es: `Pista 1: Busca en el área de ${target.name_es}.`,
    h1_en: `Hint 1: Look in the area of ${target.name_en}.`,
    h2_es: `Pista 2: ${target.description_es.substring(0, 80)}...`,
    h2_en: `Hint 2: ${target.description_en.substring(0, 80)}...`,
    h3_es: `Pista 3: Ubicado cerca de las coordenadas [${target.center_coords[0]}, ${target.center_coords[1]}].`,
    h3_en: `Hint 3: Located near coordinates [${target.center_coords[0]}, ${target.center_coords[1]}].`,
  };

  return {
    id: target.id,
    flavor: 'continents',
    question_es: `Localiza en el mapa el continente de ${target.name_es}. Haz clic directamente sobre él.`,
    question_en: `Locate the continent of ${target.name_en} on the map. Click directly on it.`,
    targetId: target.id,
    targetName_es: target.name_es,
    targetName_en: target.name_en,
    targetContinentId: target.id as ContinentId,
    targetContinent_es: target.name_es,
    targetContinent_en: target.name_en,
    targetIso2:
      target.id === 'South America'
        ? 'BR'
        : target.id === 'North America'
        ? 'US'
        : target.id === 'Europe'
        ? 'FR'
        : target.id === 'Africa'
        ? 'EG'
        : target.id === 'Asia'
        ? 'CN'
        : 'AU',
    targetCoords: target.center_coords,
    targetZoom: target.zoom_level || 3,
    hint1_es: hints.h1_es,
    hint1_en: hints.h1_en,
    hint2_es: hints.h2_es,
    hint2_en: hints.h2_en,
    hint3_es: hints.h3_es,
    hint3_en: hints.h3_en,
    explanation_es: `${target.icon} ${target.name_es}: ${target.description_es}`,
    explanation_en: `${target.icon} ${target.name_en}: ${target.description_en}`,
  };
}

/**
 * Flavor 2: PAÍSES
 */
function generateCountriesQuestion(
  countries: CountryDossierData[],
  usedQuestionIds: string[]
): TriviaQuestion {
  let pool = countries.filter((c) => !usedQuestionIds.includes(c.id));
  if (pool.length === 0) {
    pool = countries;
  }

  const target = pool[Math.floor(Math.random() * pool.length)] || countries[0];

  const firstLetter = target.name_es.charAt(0);
  const capital = target.capital_es;
  const continent = target.continent_es;

  return {
    id: target.id,
    flavor: 'countries',
    question_es: `¿Dónde se encuentra ${target.name_es}? Búscalo y haz clic en él en el mapa.`,
    question_en: `Where is ${target.name_en} located? Find and click on it on the map.`,
    targetId: target.id,
    targetIso2: target.iso2,
    targetName_es: target.name_es,
    targetName_en: target.name_en,
    targetContinentId: target.continent as ContinentId,
    targetContinent_es: target.continent_es,
    targetContinent_en: target.continent,
    targetCoords: target.center_coords,
    targetZoom: target.zoom_level || 4,
    capital_es: target.capital_es,
    capital_en: target.capital_en,
    flagUrl: `https://flagcdn.com/w160/${target.iso2.toLowerCase()}.png`,
    hint1_es: `Pista 1: Se ubica en el continente de ${continent}.`,
    hint1_en: `Hint 1: It is located on the continent of ${target.continent}.`,
    hint2_es: `Pista 2: Su capital es "${capital}".`,
    hint2_en: `Hint 2: Its capital city is "${target.capital_en}".`,
    hint3_es: `Pista 3: Su nombre comienza con la letra "${firstLetter}". Relieve: ${target.physical_geography_summary.es.substring(0, 90)}...`,
    hint3_en: `Hint 3: Its name starts with letter "${target.name_en.charAt(0)}". Terrain: ${target.physical_geography_summary.en.substring(0, 90)}...`,
    explanation_es: `${target.name_es} se ubica en ${target.continent_es}. Su capital es ${target.capital_es} y cuenta con una superficie de ${target.area_sqkm}.`,
    explanation_en: `${target.name_en} is situated in ${target.continent}. Its capital is ${target.capital_en} with an area of ${target.area_sqkm}.`,
  };
}

/**
 * Flavor 3: CAPITALES
 */
function generateCapitalsQuestion(
  countries: CountryDossierData[],
  usedQuestionIds: string[]
): TriviaQuestion {
  let pool = countries.filter((c) => !usedQuestionIds.includes(c.id));
  if (pool.length === 0) {
    pool = countries;
  }

  const target = pool[Math.floor(Math.random() * pool.length)] || countries[0];
  const firstLetter = target.name_es.charAt(0);

  return {
    id: target.id,
    flavor: 'capitals',
    question_es: `¿Qué país tiene como capital "${target.capital_es}"? Localízalo y haz clic en él en el mapa.`,
    question_en: `Which country has "${target.capital_en}" as its capital? Locate and click on it on the map.`,
    targetId: target.id,
    targetIso2: target.iso2,
    targetName_es: target.name_es,
    targetName_en: target.name_en,
    targetContinentId: target.continent as ContinentId,
    targetContinent_es: target.continent_es,
    targetContinent_en: target.continent,
    targetCoords: target.capital_coords || target.center_coords,
    targetZoom: 5,
    capital_es: target.capital_es,
    capital_en: target.capital_en,
    flagUrl: `https://flagcdn.com/w160/${target.iso2.toLowerCase()}.png`,
    hint1_es: `Pista 1: Este país se ubica en el continente de ${target.continent_es}.`,
    hint1_en: `Hint 1: This country is located on the continent of ${target.continent}.`,
    hint2_es: `Pista 2: La primera letra del país es "${firstLetter}".`,
    hint2_en: `Hint 2: The first letter of the country is "${target.name_en.charAt(0)}".`,
    hint3_es: `Pista 3: Superficie de ${target.area_sqkm} y población aproximada de ${target.population}.`,
    hint3_en: `Hint 3: Area of ${target.area_sqkm} and population of approx. ${target.population}.`,
    explanation_es: `La capital de ${target.name_es} es ${target.capital_es}, situada en ${target.continent_es}.`,
    explanation_en: `The capital of ${target.name_en} is ${target.capital_en}, located in ${target.continent}.`,
  };
}

/**
 * Flavor 4: BANDERAS
 */
function generateFlagsQuestion(
  countries: CountryDossierData[],
  usedQuestionIds: string[]
): TriviaQuestion {
  let pool = countries.filter((c) => !usedQuestionIds.includes(c.id));
  if (pool.length === 0) {
    pool = countries;
  }

  const target = pool[Math.floor(Math.random() * pool.length)] || countries[0];
  const firstLetter = target.name_es.charAt(0);

  return {
    id: target.id,
    flavor: 'flags',
    question_es: `¿A qué país pertenece esta bandera? Identifícalo y haz clic en él en el mapa.`,
    question_en: `Which country does this flag belong to? Identify and click on it on the map.`,
    targetId: target.id,
    targetIso2: target.iso2,
    targetName_es: target.name_es,
    targetName_en: target.name_en,
    targetContinentId: target.continent as ContinentId,
    targetContinent_es: target.continent_es,
    targetContinent_en: target.continent,
    targetCoords: target.center_coords,
    targetZoom: target.zoom_level || 4,
    capital_es: target.capital_es,
    capital_en: target.capital_en,
    flagUrl: `https://flagcdn.com/w160/${target.iso2.toLowerCase()}.png`,
    hint1_es: `Pista 1: Este país se ubica en el continente de ${target.continent_es}.`,
    hint1_en: `Hint 1: This country is located on the continent of ${target.continent}.`,
    hint2_es: `Pista 2: La capital de esta nación es "${target.capital_es}".`,
    hint2_en: `Hint 2: The capital of this nation is "${target.capital_en}".`,
    hint3_es: `Pista 3: El nombre del país comienza con la letra "${firstLetter}".`,
    hint3_en: `Hint 3: The country name starts with the letter "${target.name_en.charAt(0)}".`,
    explanation_es: `Esta bandera pertenece a ${target.name_es} (${target.continent_es}), cuya capital es ${target.capital_es}.`,
    explanation_en: `This flag belongs to ${target.name_en} (${target.continent}), whose capital is ${target.capital_en}.`,
  };
}
