import { CONTINENTS_DATA, OCEANS_SEAS_DATA } from './continentsOceansData';

export type ExplorePlayTopic = 'continents' | 'countries' | 'oceans' | 'seas' | 'poles';

export interface GeoTopicItem {
  id: string;
  topic: 'continents' | 'oceans' | 'seas' | 'poles';
  name_es: string;
  name_en: string;
  coords: [number, number];
  zoom: number;
  subtitle_es: string;
  subtitle_en: string;
  summary_es: string;
  summary_en: string;
  funFact_es: string;
  funFact_en: string;
  statLabel_es: string;
  statLabel_en: string;
  statValue: string;
  hint1_es: string;
  hint1_en: string;
  hint2_es: string;
  hint2_en: string;
  hint3_es: string;
  hint3_en: string;
}

export const POLES_ITEMS: GeoTopicItem[] = [
  {
    id: 'pole-north',
    topic: 'poles',
    name_es: 'Polo Norte Geográfico',
    name_en: 'Geographic North Pole',
    coords: [83.5, 0.0],
    zoom: 3,
    subtitle_es: 'Extremo norte del eje terrestre',
    subtitle_en: 'Northernmost point on Earth’s axis',
    summary_es: 'A diferencia del Polo Sur, el Polo Norte no tiene tierra firme debajo: está formado por hielo marino flotante sobre el Océano Ártico.',
    summary_en: 'Unlike the South Pole, the North Pole has no land underneath—it sits on drifting sea ice over the Arctic Ocean.',
    funFact_es: 'Aquí el sol sale una sola vez al año en marzo y no se oculta durante seis meses seguidos.',
    funFact_en: 'The sun rises only once a year in March and stays up for six straight months.',
    statLabel_es: 'Temperatura media invierno',
    statLabel_en: 'Avg. winter temp',
    statValue: '-40 °C',
    hint1_es: 'Está en el extremo superior del mapa, rodeado por el Océano Ártico.',
    hint1_en: 'Located at the very top of the map, surrounded by the Arctic Ocean.',
    hint2_es: 'No hay un continente debajo, solo una gran capa de hielo flotante.',
    hint2_en: 'There is no continent beneath it—only floating sea ice.',
    hint3_es: 'Es el hogar de los osos polares y se encuentra al norte de Europa y América.',
    hint3_en: 'Polar bears roam its region, north of Europe and North America.',
  },
  {
    id: 'pole-south',
    topic: 'poles',
    name_es: 'Polo Sur Geográfico',
    name_en: 'Geographic South Pole',
    coords: [-81.0, 0.0],
    zoom: 3,
    subtitle_es: 'Extremo sur sobre la meseta antártica',
    subtitle_en: 'Southernmost point on the Antarctic plateau',
    summary_es: 'Se ubica sobre el continente de la Antártida, a más de 2,800 metros de altitud sobre una capa de hielo de casi 3 kilómetros de espesor.',
    summary_en: 'Located on the continent of Antarctica at over 2,800 m elevation on top of nearly 3 km of solid ice.',
    funFact_es: 'Es mucho más frío que el Polo Norte porque está sobre tierra muy alta y rodeado de hielo.',
    funFact_en: 'It is much colder than the North Pole because it sits high on a frozen landmass.',
    statLabel_es: 'Altitud sobre hielo',
    statLabel_en: 'Ice elevation',
    statValue: '2,835 m',
    hint1_es: 'Está en el extremo inferior del mapa mundial.',
    hint1_en: 'Located at the very bottom of the world map.',
    hint2_es: 'Se encuentra en el centro del continente helado de la Antártida.',
    hint2_en: 'Found in the heart of the frozen continent of Antarctica.',
    hint3_es: 'En este lugar funciona la famosa base científica Amundsen-Scott.',
    hint3_en: 'Home to the famous Amundsen-Scott scientific research station.',
  },
  {
    id: 'pole-antarctica',
    topic: 'poles',
    name_es: 'Antártida (Continente Blanco)',
    name_en: 'Antarctica (The White Continent)',
    coords: [-74.0, 60.0],
    zoom: 3,
    subtitle_es: 'Reserva natural para la paz y la ciencia',
    subtitle_en: 'Natural reserve for peace and science',
    summary_es: 'Es el continente más frío, seco y ventoso de la Tierra. No pertenece a ningún país y científicos de todo el mundo conviven allí investigando.',
    summary_en: 'The coldest, driest, and windiest continent on Earth. No country owns it—scientists from across the globe work there together.',
    funFact_es: 'Almacena cerca del 70% de toda el agua dulce del planeta en forma de hielo.',
    funFact_en: 'It holds roughly 70% of all fresh water on Earth locked in ice.',
    statLabel_es: 'Superficie helada',
    statLabel_en: 'Ice-covered area',
    statValue: '14,200,000 km²',
    hint1_es: 'Es la gran masa blanca que ocupa toda la parte sur del mapa.',
    hint1_en: 'The vast white landmass stretching across the bottom of the map.',
    hint2_es: 'Está rodeada por el Océano Antártico y es hogar del pingüino emperador.',
    hint2_en: 'Surrounded by the Southern Ocean and home to emperor penguins.',
    hint3_es: 'Se ubica al sur de África, Asia y Oceanía, en el hemisferio sur oriental.',
    hint3_en: 'Situated south of Africa, Asia, and Oceania in the eastern Southern Hemisphere.',
  },
  {
    id: 'pole-greenland',
    topic: 'poles',
    name_es: 'Groenlandia (Región Ártica)',
    name_en: 'Greenland (Arctic Region)',
    coords: [72.0, -42.0],
    zoom: 4,
    subtitle_es: 'La isla más grande del mundo',
    subtitle_en: 'The largest island in the world',
    summary_es: 'Ubicada entre el Océano Atlántico y el Ártico, alrededor del 80% de su territorio está cubierto por un gigantesco glaciar continental.',
    summary_en: 'Positioned between the Atlantic and Arctic Oceans, about 80% of its surface is covered by a giant ice sheet.',
    funFact_es: 'En los meses de invierno se pueden ver espectaculares auroras boreales verdes y violetas en su cielo.',
    funFact_en: 'During winter nights, vivid green and violet northern lights dance across its skies.',
    statLabel_es: 'Superficie',
    statLabel_en: 'Area',
    statValue: '2,166,000 km²',
    hint1_es: 'Es una isla enorme cerca del Polo Norte, entre América del Norte y Europa.',
    hint1_en: 'A huge island near the North Pole, between North America and Europe.',
    hint2_es: 'Se encuentra al noreste de Canadá y al oeste de Islandia.',
    hint2_en: 'Located northeast of Canada and west of Iceland.',
    hint3_es: 'Es la isla más grande de todo el planeta.',
    hint3_en: 'It is the biggest island on the entire planet.',
  },
  {
    id: 'pole-arctic-circle',
    topic: 'poles',
    name_es: 'Círculo Polar Ártico',
    name_en: 'Arctic Circle',
    coords: [66.5, 25.0],
    zoom: 4,
    subtitle_es: 'Latitud 66.5° Norte · Tierra del Sol de Medianoche',
    subtitle_en: 'Latitude 66.5° North · Land of the Midnight Sun',
    summary_es: 'Es la línea imaginaria a partir de la cual el sol no se oculta durante al menos un día completo en verano. Atraviesa el norte de Europa, Asia y América.',
    summary_en: 'The imaginary line north of which the sun stays visible for at least 24 hours in summer. It crosses northern Europe, Asia, and North America.',
    funFact_es: 'En Laponia (Finlandia), puedes cruzar una línea dibujada en el suelo que marca exactamente el Círculo Polar Ártico.',
    funFact_en: 'In Lapland (Finland), visitors can literally step across a line marking the Arctic Circle.',
    statLabel_es: 'Latitud',
    statLabel_en: 'Latitude',
    statValue: '66° 33′ N',
    hint1_es: 'Está en el hemisferio norte, pasando por Escandinavia (Noruega, Suecia y Finlandia).',
    hint1_en: 'Located in the Northern Hemisphere, passing across Scandinavia.',
    hint2_es: 'Se sitúa al norte de Europa, justo por debajo del Océano Ártico.',
    hint2_en: 'Found in northern Europe, just below the Arctic Ocean.',
    hint3_es: 'Marca el comienzo de la zona donde ocurre el Sol de Medianoche en el norte.',
    hint3_en: 'Marks the start of the Midnight Sun zone in the north.',
  },
  {
    id: 'pole-antarctic-circle',
    topic: 'poles',
    name_es: 'Círculo Polar Antártico',
    name_en: 'Antarctic Circle',
    coords: [-66.5, -62.0],
    zoom: 4,
    subtitle_es: 'Latitud 66.5° Sur · Península Antártica',
    subtitle_en: 'Latitude 66.5° South · Antarctic Peninsula',
    summary_es: 'Rodea la Antártida y marca el límite del hemisferio sur donde hay días completos de luz solar en diciembre y noches polares en junio.',
    summary_en: 'Circles Antarctica and marks where 24-hour daylight happens in December and polar night in June.',
    funFact_es: 'Sus aguas heladas están llenas de krill, el diminuto crustáceo que alimenta a las ballenas azules.',
    funFact_en: 'Its icy waters teem with krill, the tiny food source that feeds blue whales.',
    statLabel_es: 'Latitud',
    statLabel_en: 'Latitude',
    statValue: '66° 33′ S',
    hint1_es: 'Se ubica en el hemisferio sur, al sur del extremo de América del Sur.',
    hint1_en: 'Located in the Southern Hemisphere, south of the tip of South America.',
    hint2_es: 'Pasa muy cerca de la Península Antártica y el Pasaje de Drake.',
    hint2_en: 'Passes right across the Antarctic Peninsula near the Drake Passage.',
    hint3_es: 'Su latitud es 66.5° Sur.',
    hint3_en: 'Its latitude is 66.5° South.',
  },
  {
    id: 'pole-northwest-passage',
    topic: 'poles',
    name_es: 'Paso del Noroeste',
    name_en: 'Northwest Passage',
    coords: [73.5, -96.0],
    zoom: 4,
    subtitle_es: 'Ruta marina entre islas árticas',
    subtitle_en: 'Sea route through Arctic islands',
    summary_es: 'Es una famosa ruta marítima a través del archipiélago ártico de Canadá que conecta el Océano Atlántico con el Océano Pacífico.',
    summary_en: 'A famous sea route threading through Canada’s Arctic islands, connecting the Atlantic and Pacific Oceans.',
    funFact_es: 'Durante siglos los exploradores buscaron cruzarlo, hasta que Roald Amundsen lo logró en 1906.',
    funFact_en: 'Explorers searched for centuries before Roald Amundsen finally sailed through in 1906.',
    statLabel_es: 'Longitud aprox.',
    statLabel_en: 'Approx. length',
    statValue: '1,450 km',
    hint1_es: 'Está en el extremo norte de América del Norte.',
    hint1_en: 'Located in the far north of North America.',
    hint2_es: 'Atraviesa las islas heladas del norte de Canadá, al oeste de Groenlandia.',
    hint2_en: 'Winds through Canada’s icy northern islands, west of Greenland.',
    hint3_es: 'Conecta el norte del Atlántico con el norte del Pacífico por el Ártico.',
    hint3_en: 'Connects the northern Atlantic and Pacific through Arctic waters.',
  },
  {
    id: 'pole-ross-ice-shelf',
    topic: 'poles',
    name_es: 'Barrera de Hielo de Ross',
    name_en: 'Ross Ice Shelf',
    coords: [-77.5, 172.0],
    zoom: 4,
    subtitle_es: 'La mayor plataforma de hielo flotante',
    subtitle_en: 'Earth’s largest floating ice shelf',
    summary_es: 'Una gigantesca pared de hielo flotante pegada a la costa de la Antártida, frente a Nueva Zelanda, con acantilados de hielo de hasta 50 metros de altura.',
    summary_en: 'A colossal floating sheet of ice attached to Antarctica south of New Zealand, with ice cliffs towering up to 50 meters high.',
    funFact_es: 'Su superficie es casi tan grande como todo el país de Francia.',
    funFact_en: 'Its surface is nearly as big as the entire country of France.',
    statLabel_es: 'Superficie',
    statLabel_en: 'Area',
    statValue: '487,000 km²',
    hint1_es: 'Está en la costa de la Antártida, en el extremo inferior derecho del mapa.',
    hint1_en: 'Located along Antarctica’s coast toward the bottom right of the map.',
    hint2_es: 'Se encuentra directamente al sur de Oceanía y Nueva Zelanda.',
    hint2_en: 'Lies directly south of Oceania and New Zealand.',
    hint3_es: 'Es la plataforma de hielo flotante más grande del planeta.',
    hint3_en: 'The largest floating ice shelf on Earth.',
  },
];

export const ALL_CONTINENT_ITEMS: GeoTopicItem[] = [
  ...CONTINENTS_DATA.map((c) => {
    const extras: Record<
      string,
      {
        sub_es: string;
        sub_en: string;
        fun_es: string;
        fun_en: string;
        area: string;
        h1_es: string;
        h1_en: string;
        h2_es: string;
        h2_en: string;
        h3_es: string;
        h3_en: string;
      }
    > = {
      'North America': {
        sub_es: 'Desde el Ártico hasta el Caribe',
        sub_en: 'From the Arctic to the Caribbean',
        fun_es: 'Alberga los Grandes Lagos, el mayor grupo de lagos de agua dulce del planeta.',
        fun_en: 'Home to the Great Lakes, the largest group of freshwater lakes on Earth.',
        area: '24,709,000 km²',
        h1_es: 'Está en el hemisferio occidental, al norte del Ecuador.',
        h1_en: 'Located in the Western Hemisphere, north of the Equator.',
        h2_es: 'Se extiende entre los océanos Pacífico, Atlántico y Ártico.',
        h2_en: 'Spans between the Pacific, Atlantic, and Arctic Oceans.',
        h3_es: 'Aquí están Canadá, Estados Unidos, México y Centroamérica.',
        h3_en: 'Includes Canada, the United States, Mexico, and Central America.',
      },
      'South America': {
        sub_es: 'Los Andes y la selva del Amazonas',
        sub_en: 'The Andes & Amazon Rainforest',
        fun_es: 'Tiene la cordillera más larga del mundo (los Andes) y el río más caudaloso (el Amazonas).',
        fun_en: 'Features the longest mountain range (Andes) and largest river by volume (Amazon).',
        area: '17,840,000 km²',
        h1_es: 'Se ubica en el hemisferio occidental, principalmente al sur del Ecuador.',
        h1_en: 'Located in the Western Hemisphere, mostly south of the Equator.',
        h2_es: 'Está unido a América del Norte por el estrecho istmo de Panamá.',
        h2_en: 'Connected to North America by the narrow Isthmus of Panama.',
        h3_es: 'Hogar de Brasil, Argentina, Colombia, Perú y la selva amazónica.',
        h3_en: 'Home to Brazil, Argentina, Colombia, Peru, and the Amazon rainforest.',
      },
      Europe: {
        sub_es: 'Penínsulas, Alpes y ríos históricos',
        sub_en: 'Peninsulas, Alps & historic rivers',
        fun_es: 'Es el segundo continente más pequeño, pero cuenta con más de 40 países muy diversos.',
        fun_en: 'The second-smallest continent, yet home to over 40 diverse countries.',
        area: '10,180,000 km²',
        h1_es: 'Está en el hemisferio norte, justo al norte de África y el Mar Mediterráneo.',
        h1_en: 'In the Northern Hemisphere, right north of Africa and the Mediterranean Sea.',
        h2_es: 'Limita al oeste con el Océano Atlántico y al este con Asia.',
        h2_en: 'Bordered by the Atlantic Ocean to the west and Asia to the east.',
        h3_es: 'Aquí se encuentran España, Francia, Italia, Alemania y los Alpes.',
        h3_en: 'Home to Spain, France, Italy, Germany, and the Alps.',
      },
      Africa: {
        sub_es: 'El Sáhara, el Nilo y la sabana',
        sub_en: 'The Sahara, the Nile & Savanna',
        fun_es: 'Es el único continente que se extiende por los cuatro hemisferios: norte, sur, este y oeste.',
        fun_en: 'The only continent stretching across all four hemispheres: north, south, east, and west.',
        area: '30,370,000 km²',
        h1_es: 'Lo atraviesan el Ecuador y el Meridiano de Greenwich.',
        h1_en: 'Crossed by both the Equator and the Prime Meridian.',
        h2_es: 'Está al sur de Europa, separado por el Mar Mediterráneo.',
        h2_en: 'Lies south of Europe across the Mediterranean Sea.',
        h3_es: 'Alberga el gran desierto del Sáhara y el río Nilo.',
        h3_en: 'Contains the vast Sahara Desert and the Nile River.',
      },
      Asia: {
        sub_es: 'El gigante del planeta y el Himalaya',
        sub_en: 'Earth’s giant & the Himalayas',
        fun_es: 'Tiene la montaña más alta del mundo (el Monte Everest) y más de la mitad de la población mundial.',
        fun_en: 'Has the world’s tallest mountain (Mount Everest) and over half of humanity.',
        area: '44,579,000 km²',
        h1_es: 'Es el continente más grande de toda la Tierra, en el hemisferio oriental.',
        h1_en: 'The largest continent on Earth, located in the Eastern Hemisphere.',
        h2_es: 'Limita con Europa al oeste, el Pacífico al este y el Índico al sur.',
        h2_en: 'Borders Europe to the west, the Pacific to the east, and Indian Ocean south.',
        h3_es: 'Aquí se encuentran China, India, Japón y la cordillera del Himalaya.',
        h3_en: 'Home to China, India, Japan, and the Himalayan mountains.',
      },
      Oceania: {
        sub_es: 'Australia y miles de islas del Pacífico',
        sub_en: 'Australia & Pacific islands',
        fun_es: 'Es hogar de animales únicos en el mundo como canguros, koalas y ornitorrincos.',
        fun_en: 'Home to unique wildlife like kangaroos, koalas, and platypuses.',
        area: '8,526,000 km²',
        h1_es: 'Es el continente más pequeño, ubicado en el hemisferio sur y oriental.',
        h1_en: 'The smallest continent, located in the Southern and Eastern Hemispheres.',
        h2_es: 'Se encuentra al sureste de Asia, rodeado por el Pacífico y el Índico.',
        h2_en: 'Located southeast of Asia, surrounded by the Pacific and Indian Oceans.',
        h3_es: 'Su país más grande es Australia y alberga la Gran Barrera de Coral.',
        h3_en: 'Its largest country is Australia, home to the Great Barrier Reef.',
      },
    };
    const e = extras[c.id];
    return {
      id: c.id,
      topic: 'continents' as const,
      name_es: c.name_es,
      name_en: c.name_en,
      coords: c.center_coords,
      zoom: c.zoom_level || 3,
      subtitle_es: e?.sub_es || c.name_es,
      subtitle_en: e?.sub_en || c.name_en,
      summary_es: c.description_es,
      summary_en: c.description_en,
      funFact_es: e?.fun_es || c.description_es,
      funFact_en: e?.fun_en || c.description_en,
      statLabel_es: 'Superficie',
      statLabel_en: 'Area',
      statValue: e?.area || '—',
      hint1_es: e?.h1_es || c.description_es,
      hint1_en: e?.h1_en || c.description_en,
      hint2_es: e?.h2_es || c.description_es,
      hint2_en: e?.h2_en || c.description_en,
      hint3_es: e?.h3_es || c.description_es,
      hint3_en: e?.h3_en || c.description_en,
    };
  }),
  {
    id: 'Antarctica',
    topic: 'continents',
    name_es: 'Antártida',
    name_en: 'Antarctica',
    coords: [-75.0, 20.0],
    zoom: 3,
    subtitle_es: 'El continente helado del Polo Sur',
    subtitle_en: 'The icy continent of the South Pole',
    summary_es: 'Cubre el extremo sur del planeta con una gruesa capa de hielo. No tiene ciudades permanentes, solo estaciones científicas internacionales.',
    summary_en: 'Covers Earth’s southernmost tip in thick ice. It has no permanent cities, only international research stations.',
    funFact_es: 'En invierno su hielo marino se duplica, haciéndola parecer casi el doble de grande desde el espacio.',
    funFact_en: 'In winter its sea ice doubles, making it look nearly twice as big from space.',
    statLabel_es: 'Superficie',
    statLabel_en: 'Area',
    statValue: '14,200,000 km²',
    hint1_es: 'Es el continente más al sur de todo el planeta.',
    hint1_en: 'The southernmost continent on the planet.',
    hint2_es: 'Está cubierto casi por completo de nieve y hielo, rodeado por el Océano Antártico.',
    hint2_en: 'Almost completely covered in snow and ice, ringed by the Southern Ocean.',
    hint3_es: 'Allí viven los pingüinos emperador y se encuentra el Polo Sur.',
    hint3_en: 'Emperor penguins live there, along with the South Pole.',
  },
];

export const OCEAN_ITEMS: GeoTopicItem[] = OCEANS_SEAS_DATA.filter((o) => o.type === 'ocean').map((o) => {
  const hints: Record<string, { h1_es: string; h1_en: string; h2_es: string; h2_en: string; h3_es: string; h3_en: string }> = {
    'ocean-pacific': {
      h1_es: 'Es el océano más grande y profundo de toda la Tierra.',
      h1_en: 'The largest and deepest ocean on Earth.',
      h2_es: 'Se extiende entre América al este y Asia y Oceanía al oeste.',
      h2_en: 'Stretches between the Americas to the east and Asia/Oceania to the west.',
      h3_es: 'Alberga la Fosa de las Marianas y el Cinturón de Fuego.',
      h3_en: 'Home to the Mariana Trench and the Ring of Fire.',
    },
    'ocean-atlantic': {
      h1_es: 'Es el segundo océano más grande, con forma parecida a una letra "S".',
      h1_en: 'The second-largest ocean, shaped roughly like the letter "S".',
      h2_es: 'Separa América (al oeste) de Europa y África (al este).',
      h2_en: 'Separates the Americas (west) from Europe and Africa (east).',
      h3_es: 'Por su centro corre una cordillera submarina llamada Dorsal Mesoatlántica.',
      h3_en: 'An underwater mountain chain called the Mid-Atlantic Ridge runs down its center.',
    },
    'ocean-indian': {
      h1_es: 'Es el océano más cálido del planeta.',
      h1_en: 'The warmest ocean on the planet.',
      h2_es: 'Está rodeado por África al oeste, Asia al norte y Australia al este.',
      h2_en: 'Framed by Africa to the west, Asia to the north, and Australia to the east.',
      h3_es: 'Lleva el nombre del gran país del sur de Asia ubicado en su extremo norte.',
      h3_en: 'Named after the large South Asian country at its northern edge.',
    },
    'ocean-southern': {
      h1_es: 'Rodea por completo el continente más frío de la Tierra.',
      h1_en: 'Completely encircles Earth’s coldest continent.',
      h2_es: 'Se encuentra en la parte más baja del mapa, al sur de América, África y Oceanía.',
      h2_en: 'Located at the bottom of the map, south of South America, Africa, and Oceania.',
      h3_es: 'Sus aguas heladas están llenas de icebergs y ballenas.',
      h3_en: 'Its icy waters are filled with icebergs and whales.',
    },
    'ocean-arctic': {
      h1_es: 'Es el océano más pequeño, menos profundo y más frío.',
      h1_en: 'The smallest, shallowest, and coldest ocean.',
      h2_es: 'Está en la parte más alta del mapa, alrededor del Polo Norte.',
      h2_en: 'Located at the very top of the map, surrounding the North Pole.',
      h3_es: 'Bordea el norte de Canadá, Rusia, Noruega y Groenlandia.',
      h3_en: 'Borders northern Canada, Russia, Norway, and Greenland.',
    },
  };
  const h = hints[o.id];
  return {
    id: o.id,
    topic: 'oceans',
    name_es: o.name_es,
    name_en: o.name_en,
    coords: o.coords,
    zoom: o.zoom_level,
    subtitle_es: `Superficie: ${o.area_sqkm}`,
    subtitle_en: `Area: ${o.area_sqkm}`,
    summary_es: o.physical_lens_fact_es,
    summary_en: o.physical_lens_fact_en,
    funFact_es: o.satellite_lens_fact_es,
    funFact_en: o.satellite_lens_fact_en,
    statLabel_es: 'Profundidad máx.',
    statLabel_en: 'Max depth',
    statValue: `-${o.depth_m.toLocaleString()} m`,
    hint1_es: h?.h1_es || o.political_lens_fact_es,
    hint1_en: h?.h1_en || o.political_lens_fact_en,
    hint2_es: h?.h2_es || o.physical_lens_fact_es,
    hint2_en: h?.h2_en || o.physical_lens_fact_en,
    hint3_es: h?.h3_es || o.satellite_lens_fact_es,
    hint3_en: h?.h3_en || o.satellite_lens_fact_en,
  };
});

export const SEA_ITEMS: GeoTopicItem[] = OCEANS_SEAS_DATA.filter((o) => o.type === 'sea').map((s) => {
  const hints: Record<string, { h1_es: string; h1_en: string; h2_es: string; h2_en: string; h3_es: string; h3_en: string }> = {
    'sea-caribbean': {
      h1_es: 'Es un mar tropical de aguas turquesas ubicado en América.',
      h1_en: 'A warm turquoise tropical sea located in the Americas.',
      h2_es: 'Está entre América Central, América del Sur y las islas de las Antillas.',
      h2_en: 'Sits between Central America, South America, and the Antilles islands.',
      h3_es: 'Conduce directamente hacia el famoso Canal de Panamá.',
      h3_en: 'Leads directly toward the famous Panama Canal.',
    },
    'sea-mediterranean': {
      h1_es: 'Separa el sur de Europa del norte de África.',
      h1_en: 'Separates southern Europe from northern Africa.',
      h2_es: 'Es un mar casi cerrado conectado al Atlántico por el estrecho de Gibraltar.',
      h2_en: 'Nearly landlocked, linked to the Atlantic by the Strait of Gibraltar.',
      h3_es: 'Baña las costas de España, Italia, Grecia y Egipto.',
      h3_en: 'Washes the coasts of Spain, Italy, Greece, and Egypt.',
    },
    'sea-red': {
      h1_es: 'Es un mar largo y estrecho entre África y la Península Arábiga.',
      h1_en: 'A long, narrow sea between Africa and the Arabian Peninsula.',
      h2_es: 'Se ubica al sureste del Mar Mediterráneo, conectado por el Canal de Suez.',
      h2_en: 'Southeast of the Mediterranean Sea, connected via the Suez Canal.',
      h3_es: 'Baña las costas de Egipto y Arabia Saudita y es famoso por sus corales.',
      h3_en: 'Borders Egypt and Saudi Arabia and is famous for vibrant coral reefs.',
    },
    'sea-baltic': {
      h1_es: 'Está en el norte de Europa, rodeado de países escandinavos y bálticos.',
      h1_en: 'Located in northern Europe, surrounded by Scandinavian and Baltic states.',
      h2_es: 'Se ubica entre Suecia, Finlandia, Polonia y Estonia.',
      h2_en: 'Sits between Sweden, Finland, Poland, and Estonia.',
      h3_es: 'En invierno su parte norte suele congelarse por su baja salinidad.',
      h3_en: 'Its northern waters freeze in winter because of low salinity.',
    },
    'sea-south-china': {
      h1_es: 'Es un gran mar tropical en el sureste de Asia.',
      h1_en: 'A vast tropical sea in Southeast Asia.',
      h2_es: 'Está rodeado por China, Vietnam, Filipinas y Malasia.',
      h2_en: 'Framed by China, Vietnam, the Philippines, and Malaysia.',
      h3_es: 'Por aquí navega cerca de un tercio de todo el comercio marítimo mundial.',
      h3_en: 'Roughly one-third of global maritime trade sails through it.',
    },
    'sea-bering': {
      h1_es: 'Está en el extremo norte del Océano Pacífico.',
      h1_en: 'Located at the far northern edge of the Pacific Ocean.',
      h2_es: 'Separa el extremo oriental de Rusia de Alaska (Estados Unidos).',
      h2_en: 'Separates eastern Russia from Alaska (United States).',
      h3_es: 'Lo cierran por el sur las islas volcánicas Aleutianas.',
      h3_en: 'Bounded to the south by the volcanic Aleutian Islands.',
    },
    'sea-north': {
      h1_es: 'Está en el noroeste de Europa, conectado al Océano Atlántico.',
      h1_en: 'Located in northwestern Europe, opening to the Atlantic Ocean.',
      h2_es: 'Queda entre el Reino Unido (al oeste) y Noruega, Dinamarca y Países Bajos (al este).',
      h2_en: 'Lies between the United Kingdom (west) and Norway, Denmark, and the Netherlands (east).',
      h3_es: 'Es famoso por sus grandes parques eólicos marinos.',
      h3_en: 'Famous for its massive offshore wind farms.',
    },
    'sea-arabian': {
      h1_es: 'Forma parte del norte del Océano Índico.',
      h1_en: 'Part of the northern Indian Ocean.',
      h2_es: 'Está entre la costa oeste de la India y la Península Arábiga.',
      h2_en: 'Sits between western India and the Arabian Peninsula.',
      h3_es: 'Baña las costas de India, Pakistán, Omán y Yemen.',
      h3_en: 'Borders India, Pakistan, Oman, and Yemen.',
    },
    'sea-coral': {
      h1_es: 'Está en Oceanía, en el suroeste del Océano Pacífico.',
      h1_en: 'Located in Oceania, in the southwestern Pacific Ocean.',
      h2_es: 'Se ubica frente a la costa noreste de Australia.',
      h2_en: 'Lies off the northeastern coast of Australia.',
      h3_es: 'Alberga la famosa Gran Barrera de Coral.',
      h3_en: 'Home to the famous Great Barrier Reef.',
    },
  };
  const h = hints[s.id];
  return {
    id: s.id,
    topic: 'seas',
    name_es: s.name_es,
    name_en: s.name_en,
    coords: s.coords,
    zoom: s.zoom_level,
    subtitle_es: `Superficie: ${s.area_sqkm}`,
    subtitle_en: `Area: ${s.area_sqkm}`,
    summary_es: s.physical_lens_fact_es,
    summary_en: s.physical_lens_fact_en,
    funFact_es: s.satellite_lens_fact_es,
    funFact_en: s.satellite_lens_fact_en,
    statLabel_es: 'Profundidad máx.',
    statLabel_en: 'Max depth',
    statValue: `-${s.depth_m.toLocaleString()} m`,
    hint1_es: h?.h1_es || s.political_lens_fact_es,
    hint1_en: h?.h1_en || s.political_lens_fact_en,
    hint2_es: h?.h2_es || s.physical_lens_fact_es,
    hint2_en: h?.h2_en || s.physical_lens_fact_en,
    hint3_es: h?.h3_es || s.satellite_lens_fact_es,
    hint3_en: h?.h3_en || s.satellite_lens_fact_en,
  };
});

export function getItemsForTopic(topic: 'continents' | 'oceans' | 'seas' | 'poles'): GeoTopicItem[] {
  switch (topic) {
    case 'continents':
      return ALL_CONTINENT_ITEMS;
    case 'oceans':
      return OCEAN_ITEMS;
    case 'seas':
      return SEA_ITEMS;
    case 'poles':
      return POLES_ITEMS;
  }
}
