import { CountryDossierData } from '../types/geography';

export const ALL_EUROPE_ADDITIONAL_COUNTRIES: CountryDossierData[] = [
  // =========================================================================
  // 1. ESPAÑA (Spain)
  // =========================================================================
  {
    id: 'ESP',
    iso2: 'es',
    iso3: 'ESP',
    name_en: 'Spain',
    name_es: 'España',
    continent: 'Europe',
    continent_es: 'Europa',
    capital_en: 'Madrid',
    capital_es: 'Madrid',
    capital_coords: [40.4168, -3.7038],
    center_coords: [40.4637, -3.7492],
    zoom_level: 5,
    population: '48,000,000',
    area_sqkm: '505,990 km²',
    gdp_billion: 1580,
    main_exports: {
      en: ['Cars & Automotive Parts ($56B)', 'Packaged Medicaments ($18B)', 'Refined Petroleum ($14B)', 'Olive Oil ($4.8B)', 'Citrus Fruits & Vegetables ($9.2B)'],
      es: ['Automóviles y autopartes ($56B)', 'Medicamentos envasados ($18B)', 'Petróleo refinado ($14B)', 'Aceite de oliva ($4.8B)', 'Cítricos y hortalizas ($9.2B)'],
      total_val_billion: 424,
    },
    main_imports: {
      en: ['Crude Petroleum ($32B)', 'Cars & Vehicle Parts ($26B)', 'Petroleum Gas ($21B)', 'Packaged Medicaments ($16B)'],
      es: ['Petróleo crudo ($32B)', 'Autos y piezas vehiculares ($26B)', 'Gas de petróleo ($21B)', 'Medicamentos envasados ($16B)'],
      total_val_billion: 470,
    },
    natural_wealth: {
      en: ['Extensive olive orchards and vineyard plateaus (Meseta Central)', 'Leading wind and solar solar energy generation in the EU', 'Strategic maritime position between Atlantic and Mediterranean', 'Rich Pyrenean water basins'],
      es: ['Olivar y viñedos más extensos del mundo en la Meseta Central', 'Liderazgo en energía eólica y solar fotovoltaica en la UE', 'Posición marítima estratégica en el Estrecho de Gibraltar', 'Cuencas fluviales pirenaicas'],
    },
    physical_geography_summary: {
      en: 'Dominated by the high central plateau (Meseta Central), framed by the Cantabrian Mountains and Pyrenees in the north, the Sierra Nevada in the south, and flanked by Atlantic and Mediterranean coastlines.',
      es: 'Dominada por la elevada Meseta Central, flanqueada por la Cordillera Cantábrica y los Pirineos al norte, Sierra Nevada al sur y amplias costas atlánticas y mediterráneas.'
    },
    landforms: [
      {
        id: 'es-volcano-teide',
        type: 'volcano',
        name_en: 'Mount Teide',
        name_es: 'Teide (Tenerife)',
        coords: [28.2723, -16.6425],
        elevation_m: 3715,
        description_en: 'Active stratovolcano in the Canary Islands, the highest peak in Spain and third-highest volcanic structure on Earth from its oceanic base.',
        description_es: 'Estratovolcán en las Islas Canarias, pico más alto de España y tercer volcán más alto del mundo desde su base marina.'
      },
      {
        id: 'es-peak-mulhacen',
        type: 'peak',
        name_en: 'Mulhacén',
        name_es: 'Mulhacén (Sierra Nevada)',
        coords: [37.0531, -3.3114],
        elevation_m: 3479,
        description_en: 'Highest peak on the Iberian Peninsula, located in the Sierra Nevada range near Granada.',
        description_es: 'Cumbre más alta de la Península Ibérica, en Sierra Nevada (Granada).'
      },
      {
        id: 'es-river-tajo',
        type: 'river',
        name_en: 'Tagus River (Río Tajo)',
        name_es: 'Río Tajo',
        coords: [39.6667, -6.9833],
        length_km: 1007,
        description_en: 'Longest river on the Iberian Peninsula, flowing westward from the Montes Universales into Lisbon and the Atlantic Ocean.',
        description_es: 'Río más largo de la Península Ibérica, recorre España y Portugal hasta desembocar en Lisboa.'
      },
      {
        id: 'es-strait-gibraltar',
        type: 'strait',
        name_en: 'Strait of Gibraltar',
        name_es: 'Estrecho de Gibraltar',
        coords: [35.9667, -5.6000],
        description_en: 'Narrow maritime choke point (14 km wide) separating Europe and Africa, connecting the Atlantic Ocean to the Mediterranean Sea.',
        description_es: 'Canal marítimo estratégico (14 km de ancho) que une el Océano Atlántico con el Mar Mediterráneo.'
      }
    ],
    interesting_fact: {
      en: 'Spain produces approximately 40% to 50% of the world’s total olive oil supply, with the province of Jaén in Andalusia known as the "World Capital of Olive Oil".',
      es: 'España produce entre el 40% y 50% de todo el aceite de oliva del planeta; la provincia de Jaén cuenta con más de 66 millones de olivos.'
    },
    teks_alignment: ['TEKS 6.4B: Mediterranean agricultural production and trade', 'TEKS 6.8A: Global strategic maritime choke points']
  },

  // =========================================================================
  // 2. FRANCIA (France)
  // =========================================================================
  {
    id: 'FRA',
    iso2: 'fr',
    iso3: 'FRA',
    name_en: 'France',
    name_es: 'Francia',
    continent: 'Europe',
    continent_es: 'Europa',
    capital_en: 'Paris',
    capital_es: 'París',
    capital_coords: [48.8566, 2.3522],
    center_coords: [46.2276, 2.2137],
    zoom_level: 5,
    population: '68,000,000',
    area_sqkm: '643,801 km²',
    gdp_billion: 3030,
    main_exports: {
      en: ['Airplanes & Helicopters ($32B)', 'Packaged Medicaments ($28B)', 'Cars & Vehicle Parts ($24B)', 'Wine & Spirits ($16B)', 'Cosmetics & Perfumes ($14B)'],
      es: ['Aeronaves y helicópteros ($32B)', 'Medicamentos envasados ($28B)', 'Autos y componentes ($24B)', 'Vinos y licores ($16B)', 'Cosméticos y perfumes ($14B)'],
      total_val_billion: 610,
    },
    main_imports: {
      en: ['Cars ($38B)', 'Refined Petroleum ($29B)', 'Crude Petroleum ($24B)', 'Natural Gas ($22B)', 'Computers ($16B)'],
      es: ['Automóviles ($38B)', 'Petróleo refinado ($29B)', 'Petróleo crudo ($24B)', 'Gas natural ($22B)', 'Computadoras ($16B)'],
      total_val_billion: 720,
    },
    natural_wealth: {
      en: ['Arable fertile plains (Beauce granary of Europe)', 'Alpine glacial freshwater reservoirs and hydropower', 'Extensive Atlantic and Mediterranean coastlines', 'Leading nuclear energy technology and timber forests'],
      es: ['Fértiles llanuras agrícolas (Beauceron: granero de Europa)', 'Glaciares alpinos e hidroelectricidad', 'Extensas fachadas costeras en el Atlántico y Mediterráneo', 'Liderazgo en energía nuclear y silvicultura'],
    },
    physical_geography_summary: {
      en: 'Hexagonal nation featuring northern and western rolling lowlands, the central ancient volcanic Massif Central, the Alpine mountain barrier in the east with Mont Blanc, and the Pyrenean wall in the south.',
      es: 'Territorio hexagonal que combina fértiles llanuras onduladas en el norte y oeste, el Macizo Central, la barrera alpina al este con el Mont Blanc y los Pirineos al sur.'
    },
    landforms: [
      {
        id: 'fr-peak-montblanc',
        type: 'peak',
        name_en: 'Mont Blanc',
        name_es: 'Mont Blanc',
        coords: [45.8326, 6.8652],
        elevation_m: 4808,
        description_en: 'Highest mountain in the Alps and Western Europe, towering along the border between France and Italy.',
        description_es: 'Cumbre más alta de los Alpes y de Europa occidental (4.808m), en la frontera franco-italiana.'
      },
      {
        id: 'fr-river-seine',
        type: 'river',
        name_en: 'Seine River',
        name_es: 'Río Sena',
        coords: [49.4333, 0.2833],
        length_km: 777,
        description_en: 'Historic commercial river flowing through Paris and emptying into the English Channel at Le Havre.',
        description_es: 'Histórica arteria fluvial que cruza París y desemboca en el Canal de la Mancha en Le Havre.'
      },
      {
        id: 'fr-river-loire',
        type: 'river',
        name_en: 'Loire River',
        name_es: 'Río Loira',
        coords: [47.2833, -2.1667],
        length_km: 1006,
        description_en: 'Longest river entirely within France, famed for its royal châteaux and fertile agricultural valley.',
        description_es: 'El río más largo que discurre íntegramente por Francia, célebre por sus castillos renacentistas.'
      }
    ],
    interesting_fact: {
      en: 'France generates over 65% to 70% of its domestic electricity from zero-emission nuclear power plants, the highest percentage of any nation on Earth.',
      es: 'Francia genera entre el 65% y 70% de su electricidad mediante energía nuclear civil, la proporción más alta del mundo.'
    },
    teks_alignment: ['TEKS 6.4A: European agricultural regions', 'TEKS 6.5A: Advanced industrial trade and aeronautics']
  },

  // =========================================================================
  // 3. ALEMANIA (Germany)
  // =========================================================================
  {
    id: 'DEU',
    iso2: 'de',
    iso3: 'DEU',
    name_en: 'Germany',
    name_es: 'Alemania',
    continent: 'Europe',
    continent_es: 'Europa',
    capital_en: 'Berlin',
    capital_es: 'Berlín',
    capital_coords: [52.5200, 13.4050],
    center_coords: [51.1657, 10.4515],
    zoom_level: 5,
    population: '84,400,000',
    area_sqkm: '357,022 km²',
    gdp_billion: 4460,
    main_exports: {
      en: ['Luxury & Industrial Cars ($156B)', 'Industrial Machinery & Robotics ($120B)', 'Chemical Products ($75B)', 'Packaged Medicaments ($68B)', 'Electronic & Optical Goods ($54B)'],
      es: ['Automóviles de alta gama ($156B)', 'Maquinaria industrial y robótica ($120B)', 'Productos químicos ($75B)', 'Medicamentos envasados ($68B)', 'Electrónica y óptica ($54B)'],
      total_val_billion: 1680,
    },
    main_imports: {
      en: ['Cars & Vehicle Parts ($82B)', 'Data Processing Machines ($52B)', 'Natural Gas & Petroleum ($64B)', 'Electrical Machinery ($58B)'],
      es: ['Autos y componentes ($82B)', 'Equipos informáticos ($52B)', 'Gas natural y petróleo ($64B)', 'Maquinaria eléctrica ($58B)'],
      total_val_billion: 1420,
    },
    natural_wealth: {
      en: ['Ruhr valley industrial corridor', 'Rhine, Elbe, and Danube navigable river network', 'Lignite coal and potash reserves', 'Dense Black Forest timberland'],
      es: ['Corredor industrial de la cuenca del Rin-Ruhr', 'Red de ríos navegables (Rin, Elba y Danubio)', 'Yacimientos de carbón de lignito y potasa', 'Recursos forestales de la Selva Negra'],
    },
    physical_geography_summary: {
      en: 'Transitions from the low flat North German Plain on the Baltic and North Seas, through the forested Central Uplands (Mittelgebirge), to the towering Bavarian Alps in the south.',
      es: 'Desciende desde los Alpes bávaros en el sur a través de las mesetas medias boscosas (Mittelgebirge) hasta la gran llanura del norte de Alemania frente al Mar del Norte y Báltico.'
    },
    landforms: [
      {
        id: 'de-peak-zugspitze',
        type: 'peak',
        name_en: 'Zugspitze',
        name_es: 'Zugspitze',
        coords: [47.4211, 10.9853],
        elevation_m: 2962,
        description_en: 'Highest mountain peak in Germany, located in the Wetterstein range of the Bavarian Alps.',
        description_es: 'Punto más alto de Alemania (2.962m), en los Alpes Bávaros en la frontera con Austria.'
      },
      {
        id: 'de-river-rhine',
        type: 'river',
        name_en: 'Rhine River (Rhein)',
        name_es: 'Río Rin',
        coords: [51.4500, 6.7500],
        length_km: 1233,
        description_en: 'The busiest and most economically important commercial inland waterway in Europe.',
        description_es: 'La arteria fluvial comercial más transitada e importante económicamente de Europa.'
      },
      {
        id: 'de-plateau-blackforest',
        type: 'plateau',
        name_en: 'Black Forest (Schwarzwald)',
        name_es: 'Selva Negra (Schwarzwald)',
        coords: [48.1500, 8.2000],
        elevation_m: 1493,
        description_en: 'Forested mountain range in Baden-Württemberg where the Danube River headwaters begin.',
        description_es: 'Macizo montañoso densamente boscoso donde nacen las fuentes del río Danubio.'
      }
    ],
    interesting_fact: {
      en: 'The Rhine River carries over 300 million metric tons of commercial cargo every year, acting as Germany’s economic superhighway to the port of Rotterdam.',
      es: 'El río Rin transporta más de 300 millones de toneladas de mercancías al año, funcionando como la gran autopista industrial de Europa.'
    },
    teks_alignment: ['TEKS 6.4C: River valleys as industrial transport corridors', 'TEKS 6.6A: High-value manufacturing economies']
  },

  // =========================================================================
  // 4. ITALIA (Italy)
  // =========================================================================
  {
    id: 'ITA',
    iso2: 'it',
    iso3: 'ITA',
    name_en: 'Italy',
    name_es: 'Italia',
    continent: 'Europe',
    continent_es: 'Europa',
    capital_en: 'Rome',
    capital_es: 'Roma',
    capital_coords: [41.9028, 12.4964],
    center_coords: [41.8719, 12.5674],
    zoom_level: 5,
    population: '58,900,000',
    area_sqkm: '301,340 km²',
    gdp_billion: 2250,
    main_exports: {
      en: ['Industrial Precision Machinery ($82B)', 'Packaged Medicaments ($36B)', 'Luxury Cars & Motorcycles ($26B)', 'Designer Apparel & Leather Shoes ($24B)', 'Wine & Cheeses ($12B)'],
      es: ['Maquinaria industrial de precisión ($82B)', 'Medicamentos envasados ($36B)', 'Autos y motos de lujo ($26B)', 'Calzado y moda de diseño ($24B)', 'Vinos, quesos y pastas ($12B)'],
      total_val_billion: 650,
    },
    main_imports: {
      en: ['Crude Petroleum ($32B)', 'Petroleum Gas ($28B)', 'Cars ($24B)', 'Pharmaceuticals ($18B)', 'Gold ($14B)'],
      es: ['Petróleo crudo ($32B)', 'Gas de petróleo ($28B)', 'Automóviles ($24B)', 'Fármacos ($18B)', 'Oro ($14B)'],
      total_val_billion: 620,
    },
    natural_wealth: {
      en: ['Po River Valley (fertile agricultural heartland)', 'Carrara marble and mineral springs', 'Abundant geothermal energy in Tuscany', 'Extensive Mediterranean marine perimeter (over 7,600 km)'],
      es: ['Valle del río Po (núcleo agrícola e industrial)', 'Mármol de Carrara y fuentes termales', 'Energía geotérmica en la Toscana', 'Más de 7.600 km de costas mediterráneas'],
    },
    physical_geography_summary: {
      en: 'A distinct boot-shaped peninsula jutting deep into the Mediterranean Sea, crowned by the high Alpine crescent in the north and traversed longitudinally by the Apennine Mountains.',
      es: 'Península con forma de bota que se adentra en el Mediterráneo, coronada por el arco de los Alpes en el norte y recorrida de norte a sur por la cordillera de los Apeninos.'
    },
    landforms: [
      {
        id: 'it-volcano-etna',
        type: 'volcano',
        name_en: 'Mount Etna',
        name_es: 'Monte Etna (Sicilia)',
        coords: [37.7510, 14.9934],
        elevation_m: 3357,
        description_en: 'The highest and most active volcano in Europe, dominating the eastern coast of Sicily.',
        description_es: 'El volcán activo más alto de Europa (3.357m), dominando la costa oriental de Sicilia.'
      },
      {
        id: 'it-volcano-vesuvius',
        type: 'volcano',
        name_en: 'Mount Vesuvius',
        name_es: 'Monte Vesubio',
        coords: [40.8224, 14.4289],
        elevation_m: 1281,
        description_en: 'Historic active stratovolcano on the Bay of Naples famous for the catastrophic 79 AD eruption that buried Pompeii.',
        description_es: 'Estratovolcán activo en el golfo de Nápoles, famoso por sepultar Pompeya y Herculano en el año 79 d.C.'
      },
      {
        id: 'it-river-po',
        type: 'river',
        name_en: 'Po River',
        name_es: 'Río Po',
        coords: [44.9500, 12.5000],
        length_km: 652,
        description_en: 'Longest river in Italy, draining the vast and fertile northern agricultural Po Valley into the Adriatic Sea.',
        description_es: 'El río más largo de Italia, riega la fértil llanura padana y desemboca en el Mar Adriático.'
      },
      {
        id: 'it-peninsula-italian',
        type: 'peninsula',
        name_en: 'Italian Peninsula',
        name_es: 'Península Itálica',
        coords: [42.0000, 13.5000],
        description_en: 'Central Mediterranean peninsula extending 1,000 km from the Po Valley south to the Strait of Messina.',
        description_es: 'Península que se adentra 1.000 km en el centro de la cuenca mediterránea.'
      }
    ],
    interesting_fact: {
      en: 'Italy contains the only three active volcanoes on the European mainland and nearby islands: Mount Etna, Mount Vesuvius, and Stromboli.',
      es: 'Italia alberga los tres únicos volcanes activos de la Europa continental e insular adyacente: Etna, Vesubio y Estrómboli.'
    },
    teks_alignment: ['TEKS 6.3C: Tectonic activity and active volcanism in Southern Europe', 'TEKS 6.4B: Specialized manufacturing and design']
  },

  // =========================================================================
  // 5. REINO UNIDO (United Kingdom)
  // =========================================================================
  {
    id: 'GBR',
    iso2: 'gb',
    iso3: 'GBR',
    name_en: 'United Kingdom',
    name_es: 'Reino Unido',
    continent: 'Europe',
    continent_es: 'Europa',
    capital_en: 'London',
    capital_es: 'Londres',
    capital_coords: [51.5074, -0.1278],
    center_coords: [55.3781, -3.4360],
    zoom_level: 5,
    population: '67,700,000',
    area_sqkm: '242,495 km²',
    gdp_billion: 3340,
    main_exports: {
      en: ['Gas Turbines & Aircraft Engines ($34B)', 'Crude Petroleum ($28B)', 'Gold Refined ($24B)', 'Packaged Medicaments ($22B)', 'Cars ($20B)'],
      es: ['Turbinas de gas y motores de aviación ($34B)', 'Petróleo crudo ($28B)', 'Oro refinado ($24B)', 'Medicamentos envasados ($22B)', 'Automóviles ($20B)'],
      total_val_billion: 520,
    },
    main_imports: {
      en: ['Cars ($36B)', 'Crude & Refined Petroleum ($42B)', 'Gold ($32B)', 'Broadcasting Equipment ($18B)', 'Medicaments ($16B)'],
      es: ['Automóviles ($36B)', 'Petróleo crudo y refinado ($42B)', 'Oro ($32B)', 'Equipos de telecomunicaciones ($18B)', 'Medicamentos ($16B)'],
      total_val_billion: 790,
    },
    natural_wealth: {
      en: ['North Sea oil and natural gas shelf (Brent crude benchmark)', 'Offshore wind power generation (Dogger Bank)', 'Appalachian-equivalent coal and iron deposits', 'Deep natural island harbors'],
      es: ['Yacimientos petrolíferos y gasíferos del Mar del Norte (crudo Brent)', 'Mayor potencia eólica marina de Europa (Banco Dogger)', 'Cuencas históricas de carbón y hierro', 'Puertos naturales de aguas profundas'],
    },
    physical_geography_summary: {
      en: 'Island archipelago composed of Great Britain and northeast Ireland. Characterized by glaciated Scottish Highlands, rolling English lowlands, and rugged Welsh massifs.',
      es: 'Archipiélago insular dominado por las Tierras Altas de Escocia, las suaves llanuras y colinas de Inglaterra y los macizos montañosos de Gales.'
    },
    landforms: [
      {
        id: 'gb-peak-bennevis',
        type: 'peak',
        name_en: 'Ben Nevis',
        name_es: 'Ben Nevis (Escocia)',
        coords: [56.7969, -5.0036],
        elevation_m: 1345,
        description_en: 'Highest mountain peak in the British Isles, situated in the Grampian Mountains of Scotland.',
        description_es: 'La montaña más alta de las Islas Británicas (1.345m), en las Tierras Altas de Escocia.'
      },
      {
        id: 'gb-river-thames',
        type: 'river',
        name_en: 'River Thames',
        name_es: 'Río Támesis',
        coords: [51.5000, 0.5000],
        length_km: 346,
        description_en: 'Historic tidal river flowing through central London into the North Sea, protected by the Thames Barrier.',
        description_es: 'Histórico río que atraviesa Londres y desemboca en el Mar del Norte con una gran barrera antimareas.'
      },
      {
        id: 'gb-lake-lochness',
        type: 'lake',
        name_en: 'Loch Ness',
        name_es: 'Lago Ness',
        coords: [57.3229, -4.4244],
        elevation_m: 16,
        description_en: 'Deep tectonic freshwater loch in the Scottish Highlands containing more freshwater than all lakes in England and Wales combined.',
        description_es: 'Profundo lago glaciar de falla en Escocia que contiene más agua dulce que todos los lagos de Inglaterra y Gales juntos.'
      }
    ],
    interesting_fact: {
      en: 'No place in the United Kingdom is farther than 113 km (70 miles) from the open sea, making maritime culture fundamental to its global history.',
      es: 'Ningún punto del Reino Unido se encuentra a más de 113 km de la costa, lo que modeló su vocación marítima e industrial.'
    },
    teks_alignment: ['TEKS 6.3B: Island geography and maritime trade empires', 'TEKS 6.6B: North Sea energy resources']
  },

  // =========================================================================
  // 6. PORTUGAL (Portugal)
  // =========================================================================
  {
    id: 'PRT',
    iso2: 'pt',
    iso3: 'PRT',
    name_en: 'Portugal',
    name_es: 'Portugal',
    continent: 'Europe',
    continent_es: 'Europa',
    capital_en: 'Lisbon',
    capital_es: 'Lisboa',
    capital_coords: [38.7223, -9.1393],
    center_coords: [39.3999, -8.2245],
    zoom_level: 6,
    population: '10,400,000',
    area_sqkm: '92,212 km²',
    gdp_billion: 287,
    main_exports: {
      en: ['Processed Natural Cork ($1.2B)', 'Automotive Components ($6.4B)', 'Leather Footwear ($2.1B)', 'Fine Wines / Port Wine ($1.1B)', 'Refined Petroleum ($2.8B)'],
      es: ['Corcho natural procesado ($1.2B)', 'Componentes automotrices ($6.4B)', 'Calzado de cuero ($2.1B)', 'Vinos finos y Oporto ($1.1B)', 'Petróleo refinado ($2.8B)'],
      total_val_billion: 82,
    },
    main_imports: {
      en: ['Cars & Vehicle Parts ($8.2B)', 'Crude Petroleum ($6.4B)', 'Natural Gas ($3.8B)', 'Packaged Medicaments ($2.6B)'],
      es: ['Autos y autopartes ($8.2B)', 'Petróleo crudo ($6.4B)', 'Gas natural ($3.8B)', 'Medicamentos envasados ($2.6B)'],
      total_val_billion: 110,
    },
    natural_wealth: {
      en: ['World leader in cork oak forests (over 50% of global cork production)', 'Extensive Atlantic Exclusive Economic Zone (3rd largest in EU)', 'Significant lithium reserves in northern mountains', 'Renewable hydro and ocean wind power'],
      es: ['Líder mundial en alcornocales (produce más del 50% del corcho del planeta)', 'Zona Económica Exclusiva atlántica gigantesca (3.ª mayor de la UE)', 'Mayores reservas de litio de Europa', 'Energía eólica e hidroeléctrica'],
    },
    physical_geography_summary: {
      en: 'Occupies the southwestern Atlantic coast of the Iberian Peninsula, bisected by the Tagus River into a mountainous, humid north and rolling, arid plains (Alentejo) in the south.',
      es: 'Ocupa la fachada atlántica suroeste de la Península Ibérica, dividida por el río Tajo en un norte montañoso y lluvioso y un sur de llanuras onduladas y cálidas (Alentejo).'
    },
    landforms: [
      {
        id: 'pt-peak-torre',
        type: 'peak',
        name_en: 'Torre (Serra da Estrela)',
        name_es: 'Torre (Serra da Estrela)',
        coords: [40.3219, -7.6128],
        elevation_m: 1993,
        description_en: 'Highest peak in mainland Portugal, located in the granite Serra da Estrela range.',
        description_es: 'Punto más alto de Portugal continental (1.993m), en la cordillera granítica de la Serra da Estrela.'
      },
      {
        id: 'pt-volcano-pico',
        type: 'volcano',
        name_en: 'Mount Pico (Azores)',
        name_es: 'Montaña del Pico (Azores)',
        coords: [38.4689, -28.3992],
        elevation_m: 2351,
        description_en: 'Highest point in the entire Portuguese territory, a dramatic stratovolcano rising from the Atlantic Ocean on Pico Island.',
        description_es: 'El punto más alto de todo el territorio portugués (2.351m), estratovolcán en las islas Azores.'
      },
      {
        id: 'pt-cape-stvincent',
        type: 'cape',
        name_en: 'Cape Saint Vincent (Cabo de São Vicente)',
        name_es: 'Cabo de San Vicente',
        coords: [37.0231, -8.9964],
        description_en: 'Southwesternmost tip of mainland Europe, featuring sheer 75-meter limestone cliffs fronting the Atlantic.',
        description_es: 'Extremo suroeste de la Europa continental, con imponentes acantilados verticales de 75 metros sobre el Atlántico.'
      }
    ],
    interesting_fact: {
      en: 'Portugal supplies over 50% of the world’s wine corks, harvesting the bark of cork oaks sustainably every nine years without cutting down the trees.',
      es: 'Portugal produce más de la mitad de todos los tapones de corcho del mundo, recolectando la corteza del alcornoque cada 9 años sin dañar los árboles.'
    },
    teks_alignment: ['TEKS 6.4B: Forestry products and sustainable cork harvesting', 'TEKS 6.8A: Atlantic exploration and maritime exclusive zones']
  },

  // =========================================================================
  // 7. PAÍSES BAJOS (Netherlands)
  // =========================================================================
  {
    id: 'NLD',
    iso2: 'nl',
    iso3: 'NLD',
    name_en: 'Netherlands',
    name_es: 'Países Bajos',
    continent: 'Europe',
    continent_es: 'Europa',
    capital_en: 'Amsterdam',
    capital_es: 'Ámsterdam',
    capital_coords: [52.3676, 4.9041],
    center_coords: [52.1326, 5.2913],
    zoom_level: 6,
    population: '17,900,000',
    area_sqkm: '41,543 km²',
    gdp_billion: 1118,
    main_exports: {
      en: ['Semiconductor Photolithography Machines (ASML, $24B)', 'Refined Petroleum ($48B)', 'Flowers & Bulbs ($11B)', 'Packaged Medicaments ($18B)', 'Dairy & Cheese ($12B)'],
      es: ['Máquinas de fotolitografía para microchips ($24B)', 'Petróleo refinado ($48B)', 'Flores y bulbos ($11B)', 'Medicamentos envasados ($18B)', 'Lácteos y quesos ($12B)'],
      total_val_billion: 740,
    },
    main_imports: {
      en: ['Crude Petroleum ($44B)', 'Computers & Microchips ($38B)', 'Cars ($22B)', 'Refined Petroleum ($20B)'],
      es: ['Petróleo crudo ($44B)', 'Computadoras y microchips ($38B)', 'Automóviles ($22B)', 'Petróleo refinado ($20B)'],
      total_val_billion: 660,
    },
    natural_wealth: {
      en: ['Strategic Rhine-Meuse-Scheldt delta entrance to Europe', 'Port of Rotterdam (Europe’s largest commercial seaport)', 'World-leading polder agriculture technology', 'North Sea gas fields (Groningen field)'],
      es: ['Delta del Rin-Mosa como entrada comercial a Europa', 'Puerto de Róterdam (el más grande de Europa)', 'Tecnología líder en pólderes e invernaderos de alto rendimiento', 'Gas del Mar del Norte'],
    },
    physical_geography_summary: {
      en: 'Extremely flat lowland country where roughly 26% of land is below sea level and another 50% is less than one meter above sea level, defended by a massive system of dikes, dams, and storm surge barriers.',
      es: 'País sumamente plano donde el 26% del territorio está bajo el nivel del mar y otro 50% a menos de un metro de altura, protegido por un colosal sistema de diques y pólderes.'
    },
    landforms: [
      {
        id: 'nl-plain-polders',
        type: 'plain',
        name_en: 'Zuiderzee Polders (Flevoland)',
        name_es: 'Pólderes de Flevoland',
        coords: [52.5500, 5.5000],
        elevation_m: -5,
        description_en: 'Largest artificial land reclamation project on Earth, turning an inland sea into fertile farmland below sea level.',
        description_es: 'La mayor superficie ganada al mar del planeta, tierras de cultivo fértiles a 5 metros bajo el nivel del mar.'
      },
      {
        id: 'nl-river-rhinedelta',
        type: 'river',
        name_en: 'Rhine-Meuse Delta (Rotterdam)',
        name_es: 'Delta del Rin-Mosa',
        coords: [51.9000, 4.3000],
        length_km: 120,
        description_en: 'Vast river estuary connecting the Rhine and Meuse rivers with the North Sea at Rotterdam.',
        description_es: 'Colosal estuario fluvial que une el Rin y el Mosa con el Mar del Norte en el puerto de Róterdam.'
      }
    ],
    interesting_fact: {
      en: 'The Dutch saying goes: "God created the Earth, but the Dutch created the Netherlands", referring to the centuries of reclaiming fertile land from the sea with dikes and windmills.',
      es: 'El famoso dicho neerlandés afirma: "Dios creó la Tierra, pero los neerlandeses crearon los Países Bajos", en referencia a la conquista de tierras al mar mediante diques y molinos.'
    },
    teks_alignment: ['TEKS 5.6B: Human modification of physical environments (dikes and polders)', 'TEKS 6.4C: Port of Rotterdam as the global trade gate to Europe']
  },

  // =========================================================================
  // 8. BÉLGICA (Belgium)
  // =========================================================================
  {
    id: 'BEL',
    iso2: 'be',
    iso3: 'BEL',
    name_en: 'Belgium',
    name_es: 'Bélgica',
    continent: 'Europe',
    continent_es: 'Europa',
    capital_en: 'Brussels',
    capital_es: 'Bruselas',
    capital_coords: [50.8503, 4.3517],
    center_coords: [50.5039, 4.4699],
    zoom_level: 6,
    population: '11,800,000',
    area_sqkm: '30,528 km²',
    gdp_billion: 632,
    main_exports: {
      en: ['Packaged Medicaments ($54B)', 'Vaccines & Blood antisera ($38B)', 'Cars & Vehicle Parts ($26B)', 'Polished Diamonds ($12B)', 'Chemicals & Plastics ($28B)'],
      es: ['Medicamentos envasados ($54B)', 'Vacunas y derivados biológicos ($38B)', 'Autos y autopartes ($26B)', 'Diamantes pulidos ($12B)', 'Químicos y plásticos ($28B)'],
      total_val_billion: 440,
    },
    main_imports: {
      en: ['Packaged Medicaments ($48B)', 'Cars ($32B)', 'Raw Diamonds ($11B)', 'Refined Petroleum ($22B)'],
      es: ['Medicamentos envasados ($48B)', 'Automóviles ($32B)', 'Diamantes en bruto ($11B)', 'Petróleo refinado ($22B)'],
      total_val_billion: 450,
    },
    natural_wealth: {
      en: ['Port of Antwerp-Bruges (world’s second largest chemical cluster)', 'Antwerp Diamond District (80% of world rough diamond trade)', 'Historic coal basins of Wallonia', 'Ardennes forest watersheds'],
      es: ['Puerto de Amberes (segundo polo químico más grande del mundo)', 'Distrito del Diamante de Amberes (80% del comercio mundial de diamantes brutos)', 'Cuencas históricas de Valonia', 'Bosques de las Ardenas'],
    },
    physical_geography_summary: {
      en: 'Divided into flat coastal sand dunes in Flanders, a rolling central agricultural plateau, and the densely forested, rugged Ardennes uplands in the south.',
      es: 'Dividida en tres regiones: llanuras costeras arenosas en Flandes, una meseta central fértil y el macizo boscoso de las Ardenas en el sur.'
    },
    landforms: [
      {
        id: 'be-peak-botrange',
        type: 'peak',
        name_en: 'Signal de Botrange',
        name_es: 'Signal de Botrange (Ardenas)',
        coords: [50.5017, 6.0906],
        elevation_m: 694,
        description_en: 'Highest point in Belgium, situated in the High Fens plateau of the Ardennes.',
        description_es: 'Punto más alto de Bélgica (694m), ubicado en el macizo de las Ardenas.'
      },
      {
        id: 'be-river-meuse',
        type: 'river',
        name_en: 'Meuse River (Maas)',
        name_es: 'Río Mosa',
        coords: [50.6333, 5.5667],
        length_km: 925,
        description_en: 'Navigable river carving picturesque limestone gorges through Namur and Liège.',
        description_es: 'Río navegable clave que esculpe profundos desfiladeros calizos en Namur y Lieja.'
      }
    ],
    interesting_fact: {
      en: 'Antwerp in Belgium handles over 80% of the entire world’s rough diamonds and 50% of all polished diamonds, a trade tradition dating back over 500 years.',
      es: 'La ciudad de Amberes comercializa más del 80% de todos los diamantes en bruto del mundo y el 50% de los diamantes tallados.'
    },
    teks_alignment: ['TEKS 6.6B: High-value diamond processing and pharmaceutical hubs', 'TEKS 6.4C: Central European transport corridors']
  },

  // =========================================================================
  // 9. SUECIA (Sweden)
  // =========================================================================
  {
    id: 'SWE',
    iso2: 'se',
    iso3: 'SWE',
    name_en: 'Sweden',
    name_es: 'Suecia',
    continent: 'Europe',
    continent_es: 'Europa',
    capital_en: 'Stockholm',
    capital_coords: [59.3293, 18.0686],
    capital_es: 'Estocolmo',
    center_coords: [60.1282, 18.6435],
    zoom_level: 4,
    population: '10,500,000',
    area_sqkm: '450,295 km²',
    gdp_billion: 593,
    main_exports: {
      en: ['Heavy Trucks & Cars ($24B)', 'Packaged Medicaments ($16B)', 'Sawn Timber & Wood Pulp ($14B)', 'High-Grade Iron Ore ($6.8B)', 'Telecommunications Hardware ($8.2B)'],
      es: ['Camiones pesados y automóviles ($24B)', 'Medicamentos envasados ($16B)', 'Madera y pasta de celulosa ($14B)', 'Mineral de hierro de alta ley ($6.8B)', 'Equipos de telecomunicaciones ($8.2B)'],
      total_val_billion: 198,
    },
    main_imports: {
      en: ['Cars & Vehicle Parts ($18B)', 'Crude Petroleum ($12B)', 'Computers ($8.4B)', 'Broadcasting Equipment ($6.2B)'],
      es: ['Autos y autopartes ($18B)', 'Petróleo crudo ($12B)', 'Computadoras ($8.4B)', 'Equipos de telecomunicaciones ($6.2B)'],
      total_val_billion: 185,
    },
    natural_wealth: {
      en: ['Kiruna iron ore mine (largest and most modern underground iron mine on Earth)', 'Boreal timber forest covering 69% of national territory', 'Hydroelectric rivers powering clean industry', 'Over 100,000 freshwater lakes'],
      es: ['Mina subterránea de hierro de Kiruna (la más grande y avanzada del planeta)', 'Bosque boreal que cubre el 69% del territorio nacional', 'Ríos alpinos con enorme potencial hidroeléctrico', 'Más de 100.000 lagos de agua dulce'],
    },
    physical_geography_summary: {
      en: 'Occupies the eastern flank of the Scandinavian Peninsula, sloping gently from the rugged Scandinavian Mountains in the west down to the Baltic Sea and Gulf of Bothnia.',
      es: 'Ocupa la vertiente oriental de la Península Escandinava, descendiendo suavemente desde los Alpes Escandinavos hacia el Mar Báltico y el Golfo de Botnia.'
    },
    landforms: [
      {
        id: 'se-peak-kebnekaise',
        type: 'peak',
        name_en: 'Kebnekaise',
        name_es: 'Kebnekaise',
        coords: [67.9036, 18.5286],
        elevation_m: 2097,
        description_en: 'Highest mountain peak in Sweden, situated north of the Arctic Circle in Swedish Lapland.',
        description_es: 'Montaña más alta de Suecia (2.097m), situada al norte del Círculo Polar Ártico en Laponia.'
      },
      {
        id: 'se-lake-vanern',
        type: 'lake',
        name_en: 'Lake Vänern',
        name_es: 'Lago Vänern',
        coords: [58.9000, 13.5000],
        elevation_m: 44,
        description_en: 'Largest lake in Sweden and the third-largest lake entirely within Europe (5,650 km²).',
        description_es: 'El lago más grande de Suecia y tercero de Europa (5.650 km²).'
      },
      {
        id: 'se-archipelago-stockholm',
        type: 'archipelago',
        name_en: 'Stockholm Archipelago',
        name_es: 'Archipiélago de Estocolmo',
        coords: [59.4000, 18.8000],
        description_en: 'Vast cluster of approximately 30,000 islands, skerries, and granite rocks framing the Baltic entrance to Stockholm.',
        description_es: 'Laberinto de unas 30.000 islas y escollos de granito en la entrada marítima a Estocolmo.'
      }
    ],
    interesting_fact: {
      en: 'The city of Kiruna in northern Sweden is currently being physically moved 3 km to the east, building by building, because the world’s largest underground iron mine is undermining the town.',
      es: 'La ciudad de Kiruna en el norte de Suecia se está trasladando edificio por edificio 3 km al este porque la mina de hierro subterránea socavó su suelo original.'
    },
    teks_alignment: ['TEKS 6.6B: Mining extraction and iron ore in Scandinavia', 'TEKS 5.7A: Glacial landscapes and archipelagos']
  },

  // =========================================================================
  // 10. FINLANDIA (Finland)
  // =========================================================================
  {
    id: 'FIN',
    iso2: 'fi',
    iso3: 'FIN',
    name_en: 'Finland',
    name_es: 'Finlandia',
    continent: 'Europe',
    continent_es: 'Europa',
    capital_en: 'Helsinki',
    capital_es: 'Helsinki',
    capital_coords: [60.1699, 24.9384],
    center_coords: [64.9631, 25.7482],
    zoom_level: 5,
    population: '5,600,000',
    area_sqkm: '338,424 km²',
    gdp_billion: 300,
    main_exports: {
      en: ['Paper, Cardboard & Wood Pulp ($14B)', 'Stainless Steel & Refined Copper ($8.5B)', 'Industrial Machinery & Forest Harvesters ($7.8B)', 'Telecommunications & Defense Tech ($5.4B)', 'Refined Petroleum ($6.2B)'],
      es: ['Papel, cartón y celulosa forestal ($14B)', 'Acero inoxidable y cobre refinado ($8.5B)', 'Maquinaria industrial y forestal ($7.8B)', 'Telecomunicaciones y tecnología ($5.4B)', 'Petróleo refinado ($6.2B)'],
      total_val_billion: 88,
    },
    main_imports: {
      en: ['Crude Petroleum ($8.2B)', 'Cars & Vehicle Parts ($6.4B)', 'Electronic Components ($5.1B)', 'Chemicals ($4.2B)'],
      es: ['Petróleo crudo ($8.2B)', 'Autos y autopartes ($6.4B)', 'Componentes electrónicos ($5.1B)', 'Químicos ($4.2B)'],
      total_val_billion: 94,
    },
    natural_wealth: {
      en: ['Boreal taiga forest covering over 75% of land area ("Green gold of Finland")', 'World’s highest concentration of freshwater lakes (over 187,000 lakes)', 'Cobalt, nickel, and lithium for electric vehicle batteries', 'Baltic maritime fishing grounds'],
      es: ['Bosque boreal de taiga que cubre más del 75% del país ("El oro verde de Finlandia")', 'Mayor densidad de lagos del mundo (más de 187.000 lagos)', 'Yacimientos de níquel, cobalto y litio para baterías', 'Pesca en el Báltico'],
    },
    physical_geography_summary: {
      en: 'Low-relief, heavily glaciated shield plateau famous as the "Land of a Thousand Lakes", punctuated by drumlins, eskers, and post-glacial rebound islands.',
      es: 'Meseta de escudo precámbrico modelada por glaciares, célebre como el "País de los Mil Lagos", con colinas bajas, turberas y costas en continuo ascenso postglaciar.'
    },
    landforms: [
      {
        id: 'fi-lake-saimaa',
        type: 'lake',
        name_en: 'Lake Saimaa',
        name_es: 'Lago Saimaa',
        coords: [61.2500, 28.2500],
        elevation_m: 76,
        description_en: 'Largest lake in Finland and fourth-largest in Europe, a labyrinth of interconnected waterways and home to the endangered Saimaa ringed seal.',
        description_es: 'El lago más grande de Finlandia y cuarto de Europa, hábitat exclusivo de la foca ocelada de agua dulce.'
      },
      {
        id: 'fi-peak-halti',
        type: 'peak',
        name_en: 'Haltitunturi (Halti)',
        name_es: 'Halti (Haltitunturi)',
        coords: [69.3106, 21.2806],
        elevation_m: 1324,
        description_en: 'Highest elevation point in Finland, on the mountainous border ridge with Norway in Lapland.',
        description_es: 'El punto más alto de Finlandia (1.324m), en la cordillera que comparte con Noruega en Laponia.'
      }
    ],
    interesting_fact: {
      en: 'Finland has approximately 187,888 lakes and 178,947 islands within its borders, more lakes relative to country size than any other nation.',
      es: 'Finlandia cuenta con 187.888 lagos registrados y 178.947 islas, la mayor proporción lacustre del planeta.'
    },
    teks_alignment: ['TEKS 5.7A: Glacial scouring and lake formation', 'TEKS 6.4B: Forestry management and renewable biomass']
  },

  // =========================================================================
  // 11. DINAMARCA (Denmark)
  // =========================================================================
  {
    id: 'DNK',
    iso2: 'dk',
    iso3: 'DNK',
    name_en: 'Denmark',
    name_es: 'Dinamarca',
    continent: 'Europe',
    continent_es: 'Europa',
    capital_en: 'Copenhagen',
    capital_es: 'Copenhague',
    capital_coords: [55.6761, 12.5683],
    center_coords: [56.2639, 9.5018],
    zoom_level: 6,
    population: '5,900,000',
    area_sqkm: '42,933 km²',
    gdp_billion: 404,
    main_exports: {
      en: ['Packaged Pharmaceuticals & Insulin ($22B)', 'Wind Turbines & Clean Energy Tech ($9.4B)', 'Pork & Dairy Products ($8.2B)', 'Industrial Enzymes & Cultures ($4.1B)', 'Machinery ($6.8B)'],
      es: ['Medicamentos e insulina ($22B)', 'Aerogeneradores y tecnología eólica ($9.4B)', 'Carne porcina y lácteos ($8.2B)', 'Enzimas industriales ($4.1B)', 'Maquinaria ($6.8B)'],
      total_val_billion: 135,
    },
    main_imports: {
      en: ['Cars & Vehicle Parts ($11B)', 'Refined Petroleum ($7.8B)', 'Computers ($5.2B)', 'Pharmaceutical Products ($6.1B)'],
      es: ['Autos y autopartes ($11B)', 'Petróleo refinado ($7.8B)', 'Computadoras ($5.2B)', 'Fármacos ($6.1B)'],
      total_val_billion: 128,
    },
    natural_wealth: {
      en: ['World pioneer in wind energy (generates over 55% of power from wind)', 'Fertile agricultural soil covering 60% of land', 'Strategic Danish Straits controlling Baltic Sea access', 'North Sea oil and gas reserves'],
      es: ['Pionero mundial en energía eólica (genera más del 55% de su electricidad con viento)', 'Suelo agrícola fértil que ocupa el 60% del territorio', 'Estrechos daneses que controlan la entrada al Mar Báltico', 'Gas del Mar del Norte'],
    },
    physical_geography_summary: {
      en: 'Low-lying archipelago and peninsula nation consisting of the Jutland peninsula and 443 named islands (including Zealand and Funen), surrounded by the North Sea and Baltic Sea.',
      es: 'País de escasa altitud formado por la península de Jutlandia y un archipiélago de 443 islas (como Selandia y Fionia), rodeado por el Mar del Norte y el Báltico.'
    },
    landforms: [
      {
        id: 'dk-peninsula-jutland',
        type: 'peninsula',
        name_en: 'Jutland Peninsula (Jylland)',
        name_es: 'Península de Jutlandia',
        coords: [56.0000, 9.0000],
        description_en: 'Major northward-pointing peninsula connecting mainland Europe to the Scandinavian archipelago.',
        description_es: 'Gran península que conecta Europa continental con el mundo marítimo escandinavo.'
      },
      {
        id: 'dk-strait-oresund',
        type: 'strait',
        name_en: 'Øresund Strait',
        name_es: 'Estrecho de Øresund',
        coords: [55.7500, 12.7500],
        description_en: 'Strategic Baltic strait spanned by the famous Øresund Bridge connecting Copenhagen to Malmö, Sweden.',
        description_es: 'Estrecho estratégico que une Dinamarca y Suecia a través del famoso puente-túnel de Øresund.'
      }
    ],
    interesting_fact: {
      en: 'No point in Denmark is more than 52 kilometers (32 miles) from the sea, and the country’s highest natural elevation is only 171 meters above sea level.',
      es: 'Ningún punto de Dinamarca dista más de 52 km del mar, y su punto natural más alto alcanza apenas 171 metros sobre el nivel del mar.'
    },
    teks_alignment: ['TEKS 6.4B: Wind power technology and agricultural exports', 'TEKS 6.8A: Baltic Sea maritime choke points']
  },

  // =========================================================================
  // 12. IRLANDA (Ireland)
  // =========================================================================
  {
    id: 'IRL',
    iso2: 'ie',
    iso3: 'IRL',
    name_en: 'Ireland',
    name_es: 'Irlanda',
    continent: 'Europe',
    continent_es: 'Europa',
    capital_en: 'Dublin',
    capital_es: 'Dublín',
    capital_coords: [53.3498, -6.2603],
    center_coords: [53.1424, -7.6921],
    zoom_level: 6,
    population: '5,200,000',
    area_sqkm: '70,273 km²',
    gdp_billion: 545,
    main_exports: {
      en: ['Biopharmaceuticals & Vaccines ($84B)', 'Medical Devices & Diagnostics ($22B)', 'Integrated Circuits & Chips ($18B)', 'Computer Software & Tech ($26B)', 'Dairy, Beef & Whiskey ($8.2B)'],
      es: ['Biofármacos y vacunas ($84B)', 'Dispositivos médicos ($22B)', 'Circuitos integrados ($18B)', 'Servicios informáticos ($26B)', 'Lácteos, carne vacuna y whisky ($8.2B)'],
      total_val_billion: 220,
    },
    main_imports: {
      en: ['Airplanes & Aircraft ($24B)', 'Packaged Medicaments ($14B)', 'Computers ($8.2B)', 'Cars ($6.4B)'],
      es: ['Aeronaves comerciales ($24B)', 'Medicamentos envasados ($14B)', 'Computadoras ($8.2B)', 'Automóviles ($6.4B)'],
      total_val_billion: 140,
    },
    natural_wealth: {
      en: ['Mild maritime climate allowing year-round pasture grazing ("The Emerald Isle")', 'Zinc and lead mines at Navan (largest in Europe)', 'Vast offshore Atlantic wind and wave energy potential', 'Peat bogs and freshwater loughs'],
      es: ['Clima oceánico templado con pastos verdes todo el año ("La Isla Esmeralda")', 'Mina de zinc y plomo de Navan (la mayor de Europa)', 'Potencial eólico marino en el Atlántico', 'Turberas y lagos interiores'],
    },
    physical_geography_summary: {
      en: 'A bowl-shaped island with a low-lying central limestone plain ringed by rugged coastal mountains, indented with Atlantic sea fjords and dramatic sea cliffs.',
      es: 'Isla con forma de cuenco: una llanura central caliza rodeada por montañas costeras escarpadas y espectaculares acantilados atlánticos.'
    },
    landforms: [
      {
        id: 'ie-peak-carrauntoohil',
        type: 'peak',
        name_en: 'Carrauntoohil',
        name_es: 'Carrauntoohil',
        coords: [51.9994, -9.7428],
        elevation_m: 1038,
        description_en: 'Highest peak in Ireland, crowning the MacGillycuddy’s Reeks range in County Kerry.',
        description_es: 'La montaña más alta de Irlanda (1.038m), en el condado de Kerry.'
      },
      {
        id: 'ie-cape-moher',
        type: 'cape',
        name_en: 'Cliffs of Moher',
        name_es: 'Acantilados de Moher',
        coords: [52.9719, -9.4264],
        elevation_m: 214,
        description_en: 'Dramatic vertical shale and sandstone cliffs dropping sheer into the Atlantic Ocean for 14 km.',
        description_es: 'Imponentes acantilados que se desploman verticalmente 214 metros sobre el Océano Atlántico.'
      },
      {
        id: 'ie-river-shannon',
        type: 'river',
        name_en: 'River Shannon',
        name_es: 'Río Shannon',
        coords: [52.6000, -9.0000],
        length_km: 360,
        description_en: 'Longest river in the British Isles, flowing southward through natural loughs into the Atlantic.',
        description_es: 'El río más largo de las Islas Británicas (360 km), cruza Irlanda hacia el Atlántico.'
      }
    ],
    interesting_fact: {
      en: 'Ireland manufactures approximately 50% of all the world’s hospital ventilators and is home to the European headquarters of most global tech giants.',
      es: 'Irlanda produce cerca del 50% de los respiradores hospitalarios del mundo y alberga las sedes europeas de las mayores empresas tecnológicas globales.'
    },
    teks_alignment: ['TEKS 6.6A: High-tech knowledge economy and biopharma hubs', 'TEKS 5.7A: Coastal cliff erosion by oceanic wave action']
  },

  // =========================================================================
  // 13. POLONIA (Poland)
  // =========================================================================
  {
    id: 'POL',
    iso2: 'pl',
    iso3: 'POL',
    name_en: 'Poland',
    name_es: 'Polonia',
    continent: 'Europe',
    continent_es: 'Europa',
    capital_en: 'Warsaw',
    capital_es: 'Varsovia',
    capital_coords: [52.2297, 21.0122],
    center_coords: [51.9194, 19.1451],
    zoom_level: 5,
    population: '37,800,000',
    area_sqkm: '312,696 km²',
    gdp_billion: 811,
    main_exports: {
      en: ['Electric Vehicle Lithium Batteries ($12B)', 'Cars, Trucks & Vehicle Parts ($34B)', 'Industrial Machinery ($28B)', 'Furniture & Wood Products ($16B)', 'Poultry, Pork & Apples ($14B)'],
      es: ['Baterías de litio para autos eléctricos ($12B)', 'Autos, camiones y autopartes ($34B)', 'Maquinaria industrial ($28B)', 'Muebles de madera ($16B)', 'Carne de ave y manzanas ($14B)'],
      total_val_billion: 380,
    },
    main_imports: {
      en: ['Cars & Parts ($24B)', 'Crude Petroleum ($18B)', 'Broadcasting Equipment ($12B)', 'Packaged Medicaments ($11B)'],
      es: ['Autos y piezas ($24B)', 'Petróleo crudo ($18B)', 'Equipos de transmisión ($12B)', 'Medicamentos envasados ($11B)'],
      total_val_billion: 370,
    },
    natural_wealth: {
      en: ['Upper Silesian Coal Basin and Lubin copper/silver reserves (Europe’s largest copper producer)', 'Vast arable agricultural North European Plain', 'Masurian Lake District freshwater reserve', 'Baltic maritime seaports (Gdańsk)'],
      es: ['Cuenca de carbón de Silesia y mayores minas de cobre y plata de Europa (KGHM Lubin)', 'Fértil Gran Llanura Europea', 'Distrito lacustre de Masuria', 'Puertos de aguas profundas en el Báltico (Gdansk)'],
    },
    physical_geography_summary: {
      en: 'A vast expanse of the North European Plain rising gently from Baltic sand dunes and post-glacial lake belts in the north to the rugged Carpathian and Sudeten mountains along the southern border.',
      es: 'Gran extensión de la llanura noreuropea que asciende desde las playas del Báltico y los lagos de Masuria hasta las cordilleras de los Cárpatos y Sudetes en el sur.'
    },
    landforms: [
      {
        id: 'pl-peak-rysy',
        type: 'peak',
        name_en: 'Rysy (High Tatras)',
        name_es: 'Monte Rysy',
        coords: [49.1794, 20.0881],
        elevation_m: 2499,
        description_en: 'Highest peak in Poland, located in the granite High Tatras on the border with Slovakia.',
        description_es: 'La montaña más alta de Polonia (2.499m), en los Altos Tatras en la frontera eslovaca.'
      },
      {
        id: 'pl-river-vistula',
        type: 'river',
        name_en: 'Vistula River (Wisła)',
        name_es: 'Río Vístula',
        coords: [54.3500, 18.9500],
        length_km: 1047,
        description_en: 'Longest river in Poland, flowing through Kraków and Warsaw to empty into Gdańsk Bay on the Baltic.',
        description_es: 'El río más largo de Polonia (1.047 km), atraviesa Cracovia y Varsovia hasta desembocar en el Báltico.'
      }
    ],
    interesting_fact: {
      en: 'Poland is the largest producer of electric vehicle lithium-ion batteries in Europe, accounting for over 30% of total EU battery exports.',
      es: 'Polonia es el mayor fabricante de baterías de iones de litio para vehículos eléctricos de Europa, aportando más del 30% de las exportaciones de la UE.'
    },
    teks_alignment: ['TEKS 6.4A: Central European agricultural plains', 'TEKS 6.6B: Clean tech manufacturing and mineral resources']
  },

  // =========================================================================
  // 14. AUSTRIA (Austria)
  // =========================================================================
  {
    id: 'AUT',
    iso2: 'at',
    iso3: 'AUT',
    name_en: 'Austria',
    name_es: 'Austria',
    continent: 'Europe',
    continent_es: 'Europa',
    capital_en: 'Vienna',
    capital_es: 'Viena',
    capital_coords: [48.2082, 16.3738],
    center_coords: [47.5162, 14.5501],
    zoom_level: 6,
    population: '9,100,000',
    area_sqkm: '83,879 km²',
    gdp_billion: 516,
    main_exports: {
      en: ['Automotive Powertrains & Engines ($18B)', 'Industrial Machinery & Precision Tools ($24B)', 'Packaged Medicaments ($16B)', 'Red Bull Energy Drinks ($4.2B)', 'High-Grade Steel Products ($8.5B)'],
      es: ['Motores y transmisiones automotrices ($18B)', 'Maquinaria industrial y herramientas ($24B)', 'Medicamentos envasados ($16B)', 'Bebidas energéticas ($4.2B)', 'Acero especial de alta tecnología ($8.5B)'],
      total_val_billion: 215,
    },
    main_imports: {
      en: ['Cars & Vehicle Parts ($22B)', 'Natural Gas & Petroleum ($16B)', 'Electronic Equipment ($12B)', 'Medicaments ($9.5B)'],
      es: ['Autos y autopartes ($22B)', 'Gas natural y petróleo ($16B)', 'Equipos electrónicos ($12B)', 'Medicamentos ($9.5B)'],
      total_val_billion: 218,
    },
    natural_wealth: {
      en: ['Eastern Alps mountain topography generating over 60% hydroelectric power', 'Extensive alpine timber forests (covering 47% of land)', 'Danube River trans-European navigable corridor', 'Magnesite, iron ore, and salt mines'],
      es: ['Alpes orientales que generan más del 60% de hidroelectricidad limpia', 'Bosques madereros que cubren el 47% del país', 'Corredor fluvial navegable del Danubio', 'Minas históricas de sal gema y magnesita'],
    },
    physical_geography_summary: {
      en: 'Landlocked alpine nation where over 62% of terrain is covered by the Central Eastern Alps, descending into the fertile Danube River Valley and the edge of the Pannonian Basin in the east.',
      es: 'País alpino sin salida al mar donde más del 62% del territorio corresponde a los Alpes orientales, que descienden hacia el fértil valle del río Danubio al este.'
    },
    landforms: [
      {
        id: 'at-peak-grossglockner',
        type: 'peak',
        name_en: 'Grossglockner',
        name_es: 'Grossglockner',
        coords: [47.0744, 12.6939],
        elevation_m: 3798,
        description_en: 'Highest mountain peak in Austria, crowned by the Pasterze glacier in the High Tauern range.',
        description_es: 'La cumbre más alta de Austria (3.798m), con el glaciar Pasterze en los Altos Tauern.'
      },
      {
        id: 'at-river-danube',
        type: 'river',
        name_en: 'Danube River (Donau)',
        name_es: 'Río Danubio',
        coords: [48.2000, 16.4000],
        length_km: 2850,
        description_en: 'Second longest river in Europe, flowing through Vienna as an essential commercial artery to the Black Sea.',
        description_es: 'El segundo río más largo de Europa, cruza Viena conectando Centroeuropa con el Mar Negro.'
      }
    ],
    interesting_fact: {
      en: 'Austria produces more than 60% of all its domestic electricity from clean mountain run-of-the-river hydroelectric stations.',
      es: 'Austria genera más del 60% de su electricidad mediante centrales hidroeléctricas alpinas, liderando la transición limpia en la UE.'
    },
    teks_alignment: ['TEKS 6.4B: Hydroelectric energy in alpine environments', 'TEKS 6.7A: Landlocked commercial river corridors']
  },

  // =========================================================================
  // 15. GRECIA (Greece)
  // =========================================================================
  {
    id: 'GRC',
    iso2: 'gr',
    iso3: 'GRC',
    name_en: 'Greece',
    name_es: 'Grecia',
    continent: 'Europe',
    continent_es: 'Europa',
    capital_en: 'Athens',
    capital_es: 'Atenas',
    capital_coords: [37.9838, 23.7275],
    center_coords: [39.0742, 21.8243],
    zoom_level: 6,
    population: '10,400,000',
    area_sqkm: '131,957 km²',
    gdp_billion: 238,
    main_exports: {
      en: ['Refined Petroleum ($14B)', 'Packaged Medicaments ($3.2B)', 'Extra Virgin Olive Oil ($1.4B)', 'Fresh Fish & Seabass ($890M)', 'Raw Aluminium ($820M)'],
      es: ['Petróleo refinado ($14B)', 'Medicamentos envasados ($3.2B)', 'Aceite de oliva virgen ($1.4B)', 'Pescado fresco y lubina ($890M)', 'Aluminio ($820M)'],
      total_val_billion: 54,
    },
    main_imports: {
      en: ['Crude Petroleum ($16B)', 'Petroleum Gas ($6.8B)', 'Cars ($3.2B)', 'Packaged Medicaments ($2.8B)'],
      es: ['Petróleo crudo ($16B)', 'Gas de petróleo ($6.8B)', 'Automóviles ($3.2B)', 'Medicamentos envasados ($2.8B)'],
      total_val_billion: 88,
    },
    natural_wealth: {
      en: ['World’s largest commercial merchant shipping fleet (controls over 20% of global fleet capacity)', 'Over 6,000 islands and islets in the Aegean and Ionian seas', 'Extensive bauxite reserves for aluminium', 'Solar and wind Mediterranean resources'],
      es: ['Mayor flota mercante comercial del mundo (controla más del 20% del arqueo naval global)', 'Más de 6.000 islas e islotes en el Egeo y Jónico', 'Depósitos de bauxita', 'Radiación solar y vientos egeos'],
    },
    physical_geography_summary: {
      en: 'Mountainous Balkan peninsula with the longest coastline in the Mediterranean basin (13,676 km), characterized by steep limestone peaks (Pindus range) and thousands of Aegean islands.',
      es: 'Península balcánica sumamente montañosa con la costa más recortada y larga del Mediterráneo (13.676 km), dominada por los montes Pindo y miles de islas.'
    },
    landforms: [
      {
        id: 'gr-peak-olympus',
        type: 'peak',
        name_en: 'Mount Olympus (Mytikas)',
        name_es: 'Monte Olimpo (Mytikas)',
        coords: [40.0856, 22.3586],
        elevation_m: 2917,
        description_en: 'Highest mountain in Greece, mythical abode of the twelve Olympian gods in ancient Greek civilization.',
        description_es: 'La montaña más alta de Grecia (2.917m), mitológica morada de los doce dioses olímpicos.'
      },
      {
        id: 'gr-peninsula-peloponnese',
        type: 'peninsula',
        name_en: 'Peloponnese Peninsula',
        name_es: 'Península del Peloponeso',
        coords: [37.5000, 22.0000],
        description_en: 'Large southern peninsula separated from the Greek mainland by the Gulf of Corinth and the artificial Corinth Canal.',
        description_es: 'Gran península meridional separada de la Grecia continental por el Canal de Corinto.'
      },
      {
        id: 'gr-strait-corinth',
        type: 'strait',
        name_en: 'Corinth Canal',
        name_es: 'Canal de Corinto',
        coords: [37.9333, 22.9833],
        length_km: 6.4,
        description_en: 'Spectacular rock-cut canal with sheer 90-meter vertical limestone walls connecting the Gulf of Corinth with the Saronic Gulf.',
        description_es: 'Canal artificial tallado en roca caliza vertical de 90m de altura que une el golfo de Corinto con el mar Egeo.'
      }
    ],
    interesting_fact: {
      en: 'Greek shipowners control approximately 21% of the entire world’s commercial maritime cargo capacity, maintaining Greece as the world’s leading shipping superpower.',
      es: 'Los armadores griegos controlan más del 21% de toda la capacidad de carga marítima del mundo, siendo la primera potencia naviera del planeta.'
    },
    teks_alignment: ['TEKS 6.8A: Mediterranean maritime trade and merchant shipping', 'TEKS 5.7A: Karst limestone topography and island formation']
  },

  // =========================================================================
  // 16. UCRANIA (Ukraine)
  // =========================================================================
  {
    id: 'UKR',
    iso2: 'ua',
    iso3: 'UKR',
    name_en: 'Ukraine',
    name_es: 'Ucrania',
    continent: 'Europe',
    continent_es: 'Europa',
    capital_en: 'Kyiv',
    capital_es: 'Kiev',
    capital_coords: [50.4501, 30.5234],
    center_coords: [48.3794, 31.1656],
    zoom_level: 5,
    population: '38,000,000',
    area_sqkm: '603,628 km²',
    gdp_billion: 178,
    main_exports: {
      en: ['Sunflower Seed Oil (World leader, $5.4B)', 'Wheat & Corn ($9.8B)', 'Iron Ore & Concentrates ($3.8B)', 'Semi-finished Steel ($2.6B)', 'Insulated Wire ($1.8B)'],
      es: ['Aceite de girasol (Líder mundial, $5.4B)', 'Trigo y maíz ($9.8B)', 'Mineral de hierro ($3.8B)', 'Acero laminado ($2.6B)', 'Cableados para vehículos ($1.8B)'],
      total_val_billion: 44,
    },
    main_imports: {
      en: ['Refined Petroleum ($7.8B)', 'Cars & Transport Vehicles ($4.2B)', 'Packaged Medicaments ($2.1B)', 'Drones & Electronics ($2.8B)'],
      es: ['Petróleo refinado ($7.8B)', 'Autos y vehículos de carga ($4.2B)', 'Medicamentos envasados ($2.1B)', 'Equipos electrónicos ($2.8B)'],
      total_val_billion: 62,
    },
    natural_wealth: {
      en: ['World’s largest deposit of fertile black chernozem soil ("Breadbasket of Europe")', 'Kryvyi Rih iron ore basin', 'Donets Basin (Donbas) coal reserves', 'Dnieper River hydro cascade and Black Sea ports'],
      es: ['Mayor extensión mundial de tierra negra fértil o chernozem ("El granero de Europa")', 'Cuenca de mineral de hierro de Krivói Rog', 'Yacimientos de carbón del Donbás', 'Cascada hidroeléctrica del Dniéper y puertos en el Mar Negro'],
    },
    physical_geography_summary: {
      en: 'The largest country entirely within Europe by area, dominated by flat, open fertile steppe plains rising to the Carpathian Mountains in the west and bounded by the Black Sea in the south.',
      es: 'El país más extenso situado íntegramente en Europa, dominado por inmensas llanuras fértiles de estepa que ascienden hacia los Cárpatos en el oeste y el Mar Negro al sur.'
    },
    landforms: [
      {
        id: 'ua-peak-hoverla',
        type: 'peak',
        name_en: 'Mount Hoverla',
        name_es: 'Monte Hoverla',
        coords: [48.1603, 24.5000],
        elevation_m: 2061,
        description_en: 'Highest mountain peak in Ukraine, situated in the Chornohora range of the Carpathian Mountains.',
        description_es: 'Punto más alto de Ucrania (2.061m), en la cordillera de los Cárpatos.'
      },
      {
        id: 'ua-river-dnieper',
        type: 'river',
        name_en: 'Dnieper River (Dnipro)',
        name_es: 'Río Dniéper',
        coords: [46.5000, 32.3000],
        length_km: 2201,
        description_en: 'The fourth longest river in Europe, dividing Ukraine into western and eastern halves before entering the Black Sea.',
        description_es: 'El cuarto río más largo de Europa, divide a Ucrania en dos mitades y desemboca en el Mar Negro.'
      }
    ],
    interesting_fact: {
      en: 'Ukraine holds approximately 25% to 30% of the entire planet’s richest, most fertile black soil (known scientifically as chernozem), capable of producing immense grain yields.',
      es: 'Ucrania concentra entre el 25% y 30% de las reservas mundiales de tierra negra superfértil (chernozem), lo que le valió el título histórico de "Granero de Europa".'
    },
    teks_alignment: ['TEKS 6.4A: Chernozem soils and world food production', 'TEKS 6.8A: Black Sea maritime grain export corridors']
  },

  // =========================================================================
  // 17. REPÚBLICA CHECA (Czechia)
  // =========================================================================
  {
    id: 'CZE',
    iso2: 'cz',
    iso3: 'CZE',
    name_en: 'Czechia',
    name_es: 'República Checa',
    continent: 'Europe',
    continent_es: 'Europa',
    capital_en: 'Prague',
    capital_es: 'Praga',
    capital_coords: [50.0755, 14.4378],
    center_coords: [49.8175, 15.4730],
    zoom_level: 6,
    population: '10,800,000',
    area_sqkm: '78,867 km²',
    gdp_billion: 330,
    main_exports: {
      en: ['Cars & Automobile Parts (Škoda, $28B)', 'Computers & Office Equipment ($14B)', 'Industrial Machinery ($18B)', 'Electrical Transmission Apparatus ($9.2B)', 'Traditional Bohemian Crystal & Beer ($2.4B)'],
      es: ['Automóviles y componentes (Škoda, $28B)', 'Computadoras y material de oficina ($14B)', 'Maquinaria industrial ($18B)', 'Aparatos de transmisión eléctrica ($9.2B)', 'Cristal de Bohemia y cerveza ($2.4B)'],
      total_val_billion: 210,
    },
    main_imports: {
      en: ['Vehicle Parts ($16B)', 'Computers & Integrated Circuits ($14B)', 'Natural Gas & Petroleum ($11B)', 'Medicaments ($6.8B)'],
      es: ['Autopartes ($16B)', 'Computadoras y circuitos integrados ($14B)', 'Gas natural y petróleo ($11B)', 'Medicamentos ($6.8B)'],
      total_val_billion: 195,
    },
    natural_wealth: {
      en: ['Bohemian Basin coal and uranium deposits', 'Vast temperate timber forests covering 34% of land', 'Historic Bohemian mineral springs and thermal spas (Karlovy Vary)', 'Central European logistics crossroad'],
      es: ['Cuenca hullera de Bohemia y depósitos de uranio', 'Bosques templados que cubren el 34% del territorio', 'Famosas fuentes termales minerales (Karlovy Vary)', 'Encrucijada logística del centro de Europa'],
    },
    physical_geography_summary: {
      en: 'A natural fortress basin (Bohemia) ringed by mountains (Krkonoše, Ore Mountains, Bohemian Forest) in the west, and rolling low hills in Moravia in the east.',
      es: 'Una cuenca natural fortificada por montañas circundantes (Montes Gigantes, Montes Metálicos, Selva de Bohemia) al oeste, y las onduladas colinas de Moravia al este.'
    },
    landforms: [
      {
        id: 'cz-peak-snezka',
        type: 'peak',
        name_en: 'Sněžka',
        name_es: 'Sněžka (Montes de los Gigantes)',
        coords: [50.7361, 15.7397],
        elevation_m: 1603,
        description_en: 'Highest peak in Czechia, on the border with Poland in the Krkonoše range.',
        description_es: 'La cumbre más alta de la República Checa (1.603m), en la frontera con Polonia.'
      },
      {
        id: 'cz-river-vltava',
        type: 'river',
        name_en: 'Vltava River (Moldau)',
        name_es: 'Río Moldava (Vltava)',
        coords: [50.3333, 14.4667],
        length_km: 430,
        description_en: 'National river of Czechia, winding through Prague before joining the Elbe River.',
        description_es: 'Río nacional checo, cruza Praga y sus puentes históricos antes de unirse al río Elba.'
      }
    ],
    interesting_fact: {
      en: 'Czechia is the birthplace of the modern golden lager (Pilsner, invented in Plzeň in 1842) and has the highest beer consumption per capita in the world for over 30 consecutive years.',
      es: 'La República Checa inventó la cerveza rubia tipo Pilsner en 1842 y lidera el consumo de cerveza per cápita del mundo desde hace más de 30 años consecutivos.'
    },
    teks_alignment: ['TEKS 6.4C: Mountain rimmed basins and human industry', 'TEKS 6.6A: Automotive clusters in Central Europe']
  },

  // =========================================================================
  // 18. RUMANÍA (Romania)
  // =========================================================================
  {
    id: 'ROU',
    iso2: 'ro',
    iso3: 'ROU',
    name_en: 'Romania',
    name_es: 'Rumanía',
    continent: 'Europe',
    continent_es: 'Europa',
    capital_en: 'Bucharest',
    capital_es: 'Bucarest',
    capital_coords: [44.4268, 26.1025],
    center_coords: [45.9432, 24.9668],
    zoom_level: 5,
    population: '19,000,000',
    area_sqkm: '238,397 km²',
    gdp_billion: 350,
    main_exports: {
      en: ['Cars & Vehicle Components (Dacia, $16B)', 'Insulated Wire & Electrical Cables ($8.2B)', 'Wheat & Corn ($5.4B)', 'Refined Petroleum ($3.8B)', 'Wood Products ($2.6B)'],
      es: ['Automóviles y repuestos (Dacia, $16B)', 'Cables aislados y electrónica ($8.2B)', 'Trigo y maíz ($5.4B)', 'Petróleo refinado ($3.8B)', 'Muebles y madera ($2.6B)'],
      total_val_billion: 98,
    },
    main_imports: {
      en: ['Cars & Auto Parts ($11B)', 'Crude Petroleum ($6.4B)', 'Packaged Medicaments ($4.8B)', 'Integrated Circuits ($3.8B)'],
      es: ['Autos y piezas ($11B)', 'Petróleo crudo ($6.4B)', 'Medicamentos envasados ($4.8B)', 'Circuitos integrados ($3.8B)'],
      total_val_billion: 125,
    },
    natural_wealth: {
      en: ['Danube Delta UNESCO biosphere reserve (Europe’s best preserved river delta)', 'Carpathian Mountains timber and mineral wealth (gold, copper, salt)', 'Onshore and offshore Black Sea natural gas fields (Neptun Deep)', 'Fertile agricultural Wallachian Plain'],
      es: ['Delta del Danubio (el delta mejor conservado y reserva de la biosfera de Europa)', 'Madera y minería de los Montes Cárpatos (oro, cobre, sal gema)', 'Yacimientos de gas natural en el Mar Negro (campo Neptun Deep)', 'Fértil llanura de Valaquia'],
    },
    physical_geography_summary: {
      en: 'Arranged symmetrically around the central Transylvanian Plateau, encircled by the Carpathian Mountain arc, with the lower Danube plain in the south and the Black Sea coast in the east.',
      es: 'Dispuesto en forma de anfiteatro: la meseta de Transilvania en el centro, rodeada por el arco de los Cárpatos, con la llanura del Danubio al sur y el litoral del Mar Negro al este.'
    },
    landforms: [
      {
        id: 'ro-peak-moldoveanu',
        type: 'peak',
        name_en: 'Moldoveanu Peak',
        name_es: 'Pico Moldoveanu',
        coords: [45.5997, 24.7369],
        elevation_m: 2544,
        description_en: 'Highest mountain peak in Romania, situated in the rugged Făgăraș Mountains of the Southern Carpathians.',
        description_es: 'La cumbre más alta de Rumanía (2.544m), en las montañas de Făgăraș de los Cárpatos meridionales.'
      },
      {
        id: 'ro-river-danubedelta',
        type: 'river',
        name_en: 'Danube Delta',
        name_es: 'Delta del Danubio',
        coords: [45.1667, 29.5000],
        description_en: 'Second-largest and best-preserved river delta in Europe, a UNESCO sanctuary hosting over 300 species of migratory birds.',
        description_es: 'El delta fluvial mejor conservado de Europa, paraíso de humedales donde el Danubio entra al Mar Negro.'
      }
    ],
    interesting_fact: {
      en: 'Romania’s Danube Delta is the newest land in Europe, growing by roughly 40 meters (130 feet) every year due to millions of tons of alluvial sediment deposited by the river.',
      es: 'El delta del Danubio en Rumanía es el territorio geológico más joven de Europa: gana unos 40 metros al mar cada año gracias a los sedimentos que arrastra el río.'
    },
    teks_alignment: ['TEKS 5.7A: River delta depositional landforms', 'TEKS 6.4B: Black Sea offshore energy reserves']
  },

  // =========================================================================
  // 19. HUNGRÍA (Hungary)
  // =========================================================================
  {
    id: 'HUN',
    iso2: 'hu',
    iso3: 'HUN',
    name_en: 'Hungary',
    name_es: 'Hungría',
    continent: 'Europe',
    continent_es: 'Europa',
    capital_en: 'Budapest',
    capital_es: 'Budapest',
    capital_coords: [47.4979, 19.0402],
    center_coords: [47.1625, 19.5033],
    zoom_level: 6,
    population: '9,600,000',
    area_sqkm: '93,028 km²',
    gdp_billion: 212,
    main_exports: {
      en: ['Electric Vehicle Batteries ($11B)', 'Cars & Motor Engines ($18B)', 'Packaged Medicaments ($6.8B)', 'Computers & Microelectronics ($8.4B)', 'Wheat & Corn ($3.2B)'],
      es: ['Baterías para autos eléctricos ($11B)', 'Automóviles y motores ($18B)', 'Medicamentos envasados ($6.8B)', 'Computadoras y microelectrónica ($8.4B)', 'Trigo y maíz ($3.2B)'],
      total_val_billion: 145,
    },
    main_imports: {
      en: ['Integrated Circuits ($14B)', 'Vehicle Parts ($12B)', 'Natural Gas & Petroleum ($11B)', 'Electricity ($4.8B)'],
      es: ['Circuitos integrados ($14B)', 'Piezas de vehículos ($12B)', 'Gas natural y petróleo ($11B)', 'Electricidad ($4.8B)'],
      total_val_billion: 140,
    },
    natural_wealth: {
      en: ['Pannonian Basin deep geothermal heat reservoir (over 1,000 thermal spring wells)', 'Great Hungarian Plain rich agricultural soils', 'Lake Balaton (Central Europe’s largest lake)', 'Navigable Danube and Tisza river systems'],
      es: ['Cuenca panónica con inmensos acuíferos geotérmicos (más de 1.000 manantiales termales)', 'Suelos agrícolas fértiles de la Gran Llanura Húngara', 'Lago Balaton (el mayor lago de Europa Central)', 'Ríos Danubio y Tisza'],
    },
    physical_geography_summary: {
      en: 'A completely landlocked nation occupying the heart of the flat Pannonian Basin, sliced from north to south by the Danube and Tisza rivers and framed by low northern mountain ridges.',
      es: 'País sin litoral en el corazón de la gran llanura panónica, dividido de norte a sur por los ríos Danubio y Tisza y bordeado por colinas bajas al norte.'
    },
    landforms: [
      {
        id: 'hu-lake-balaton',
        type: 'lake',
        name_en: 'Lake Balaton',
        name_es: 'Lago Balatón',
        coords: [46.8500, 17.7500],
        elevation_m: 104,
        description_en: 'The largest lake in Central Europe (592 km²), known affectionately as the "Hungarian Sea".',
        description_es: 'El lago de agua dulce más extenso de Europa Central (592 km²), conocido como "el Mar Húngaro".'
      },
      {
        id: 'hu-plain-alfold',
        type: 'plain',
        name_en: 'Great Hungarian Plain (Alföld)',
        name_es: 'Gran Llanura Húngara (Alföld)',
        coords: [47.0000, 20.5000],
        description_en: 'Vast flat alluvial plain dominating central and eastern Hungary, famed for the historic Puszta grasslands.',
        description_es: 'Extensa llanura aluvial que ocupa el este del país, famosa por la estepa tradicional de la Puszta.'
      }
    ],
    interesting_fact: {
      en: 'Budapest is the only capital city in the world that sits on over 120 natural thermal springs, discharging over 70 million liters of mineral-rich healing warm water daily.',
      es: 'Budapest es la única capital del mundo asentada sobre más de 120 fuentes termales naturales, que brotan 70 millones de litros diarios de agua mineral caliente.'
    },
    teks_alignment: ['TEKS 6.4B: Geothermal hot springs and basin geology', 'TEKS 6.6A: Electric vehicle battery manufacturing clusters']
  },

  // =========================================================================
  // 20. CROACIA (Croatia)
  // =========================================================================
  {
    id: 'HRV',
    iso2: 'hr',
    iso3: 'HRV',
    name_en: 'Croatia',
    name_es: 'Croacia',
    continent: 'Europe',
    continent_es: 'Europa',
    capital_en: 'Zagreb',
    capital_es: 'Zagreb',
    capital_coords: [45.8150, 15.9819],
    center_coords: [45.1000, 15.2000],
    zoom_level: 6,
    population: '3,900,000',
    area_sqkm: '56,594 km²',
    gdp_billion: 82,
    main_exports: {
      en: ['Packaged Medicaments ($1.8B)', 'Electrical Transformers ($1.4B)', 'Refined Petroleum ($1.6B)', 'Sawn Timber ($940M)', 'Olive Oil & Seafood ($720M)'],
      es: ['Medicamentos envasados ($1.8B)', 'Transformadores eléctricos ($1.4B)', 'Petróleo refinado ($1.6B)', 'Madera aserrada ($940M)', 'Aceite de oliva y mariscos ($720M)'],
      total_val_billion: 25,
    },
    main_imports: {
      en: ['Cars & Vehicle Parts ($3.4B)', 'Petroleum Gas & Crude ($4.2B)', 'Electricity ($1.8B)', 'Packaged Medicaments ($1.6B)'],
      es: ['Autos y repuestos ($3.4B)', 'Gas y petróleo crudo ($4.2B)', 'Electricidad ($1.8B)', 'Medicamentos ($1.6B)'],
      total_val_billion: 44,
    },
    natural_wealth: {
      en: ['Spectacular Adriatic Dalmatian coastline with 1,244 islands and reefs', 'Classic karst limestone geology (Plitvice Lakes UNESCO park)', 'Deep Krka and Zrmanja river canyons', 'Fertile Slavonian agricultural lowlands'],
      es: ['Costa dálmata con 1.244 islas, islotes y arrecifes en el Adriático', 'Geología kárstica caliza única (Parque Nacional de los Lagos de Plitvice)', 'Cañones fluviales de aguas turquesas', 'Fértiles llanuras de Eslavonia'],
    },
    physical_geography_summary: {
      en: 'Crescent-shaped nation spanning the Pannonian plain in the northeast, the Dinaric Alps mountain spine in the center, and the indented Dalmatian island coast on the Adriatic.',
      es: 'País con forma de media luna que abarca las llanuras panónicas al noreste, la espina montañosa de los Alpes Dináricos en el centro y la recortada costa dálmata en el Adriático.'
    },
    landforms: [
      {
        id: 'hr-lake-plitvice',
        type: 'lake',
        name_en: 'Plitvice Lakes',
        name_es: 'Lagos de Plitvice',
        coords: [44.8806, 15.6161],
        elevation_m: 636,
        description_en: 'World-famous cascade of 16 terraced emerald-blue karst lakes connected by natural travertine limestone waterfalls.',
        description_es: 'Cadena de 16 lagos de aguas esmeralda escalonados unidos por cascadas sobre barreras naturales de travertino.'
      },
      {
        id: 'hr-peak-dinara',
        type: 'peak',
        name_en: 'Dinara (Sinjal)',
        name_es: 'Monte Dinara',
        coords: [44.0625, 16.3828],
        elevation_m: 1831,
        description_en: 'Highest mountain peak in Croatia, situated in the limestone Dinaric Alps on the border with Bosnia and Herzegovina.',
        description_es: 'La cumbre más alta de Croacia (1.831m), en los Alpes Dináricos en la frontera bosnia.'
      }
    ],
    interesting_fact: {
      en: 'Croatia’s Dalmatian coast features 1,244 islands, islets, and reefs, making it one of the most archipelago-rich coastlines in the entire Mediterranean.',
      es: 'La costa de Croacia cuenta con 1.244 islas, islotes y arrecifes en el Mar Adriático, de las cuales solo 48 están habitadas de forma permanente.'
    },
    teks_alignment: ['TEKS 5.7A: Karst dissolution and travertine formation', 'TEKS 6.4B: Island tourism and maritime transport']
  },

  // =========================================================================
  // 21. ESLOVAQUIA (Slovakia)
  // =========================================================================
  {
    id: 'SVK',
    iso2: 'sk',
    iso3: 'SVK',
    name_en: 'Slovakia',
    name_es: 'Eslovaquia',
    continent: 'Europe',
    continent_es: 'Europa',
    capital_en: 'Bratislava',
    capital_es: 'Bratislava',
    capital_coords: [48.1486, 17.1077],
    center_coords: [48.6690, 19.6990],
    zoom_level: 6,
    population: '5,400,000',
    area_sqkm: '49,037 km²',
    gdp_billion: 132,
    main_exports: {
      en: ['Cars & Automotive Assembly (World leader per capita, $36B)', 'Video Displays & Electronics ($7.2B)', 'Iron & Steel Flat Products ($4.8B)', 'Auto Parts & Tires ($5.1B)'],
      es: ['Automóviles ensamblados (Líder mundial per cápita, $36B)', 'Monitores y electrónica ($7.2B)', 'Productos de hierro y acero ($4.8B)', 'Neumáticos y autopartes ($5.1B)'],
      total_val_billion: 108,
    },
    main_imports: {
      en: ['Vehicle Parts & Chassis ($18B)', 'Broadcast Equipment ($7.2B)', 'Natural Gas & Petroleum ($6.4B)', 'Electricity ($2.8B)'],
      es: ['Piezas vehiculares ($18B)', 'Equipos electrónicos ($7.2B)', 'Gas natural y petróleo ($6.4B)', 'Electricidad ($2.8B)'],
      total_val_billion: 110,
    },
    natural_wealth: {
      en: ['High Tatras alpine mountains and glacial lakes', 'Over 6,000 surveyed karst caves (Dobšinská Ice Cave)', 'Danube River navigation and Gabčíkovo dam hydroelectricity', 'Dense beech and fir timber forests'],
      es: ['Parque Nacional de los Altos Tatras y glaciares', 'Más de 6.000 cuevas kársticas exploradas (Cueva de Hielo de Dobšiná)', 'Central hidroeléctrica de Gabčíkovo sobre el Danubio', 'Bosques de coníferas y hayas'],
    },
    physical_geography_summary: {
      en: 'A landlocked mountainous nation dominated by the Carpathian Mountains across the northern two-thirds of the country, sloping southward down to the fertile Danube lowlands.',
      es: 'País montañoso sin salida al mar donde los Montes Cárpatos ocupan el norte y centro, descendiendo hacia el sur a las fértiles llanuras del río Danubio.'
    },
    landforms: [
      {
        id: 'sk-peak-gerlachovsky',
        type: 'peak',
        name_en: 'Gerlachovský štít',
        name_es: 'Gerlachovský štít (Altos Tatras)',
        coords: [49.1639, 20.1342],
        elevation_m: 2655,
        description_en: 'Highest mountain peak in the entire 1,500 km Carpathian Mountain range, located in the High Tatras.',
        description_es: 'La montaña más alta de los Montes Cárpatos (2.655m), en los Altos Tatras eslovacos.'
      }
    ],
    interesting_fact: {
      en: 'Slovakia is the world’s largest producer of automobiles per capita, manufacturing over 180 cars per 1,000 citizens annually (Volkswagen, Kia, Stellantis, Jaguar Land Rover).',
      es: 'Eslovaquia es el mayor productor de automóviles del mundo por habitante, fabricando más de 180 vehículos por cada 1.000 ciudadanos al año.'
    },
    teks_alignment: ['TEKS 6.6A: Specialization in automotive manufacturing', 'TEKS 5.7A: Alpine mountain chains in Central Europe']
  },

  // =========================================================================
  // 22. BULGARIA (Bulgaria)
  // =========================================================================
  {
    id: 'BGR',
    iso2: 'bg',
    iso3: 'BGR',
    name_en: 'Bulgaria',
    name_es: 'Bulgaria',
    continent: 'Europe',
    continent_es: 'Europa',
    capital_en: 'Sofia',
    capital_es: 'Sofía',
    capital_coords: [42.6977, 23.3219],
    center_coords: [42.7339, 25.4858],
    zoom_level: 6,
    population: '6,400,000',
    area_sqkm: '110,879 km²',
    gdp_billion: 101,
    main_exports: {
      en: ['Refined Copper & Anodes ($3.8B)', 'Natural Rose Oil (World leader, $180M)', 'Wheat & Sunflower Seeds ($2.4B)', 'Refined Petroleum ($2.8B)', 'Packaged Medicaments ($1.6B)'],
      es: ['Cobre refinado y ánodos ($3.8B)', 'Aceite de rosas (Líder mundial, $180M)', 'Trigo y semillas de girasol ($2.4B)', 'Petróleo refinado ($2.8B)', 'Medicamentos envasados ($1.6B)'],
      total_val_billion: 48,
    },
    main_imports: {
      en: ['Crude Petroleum ($4.2B)', 'Copper Ores ($3.2B)', 'Cars ($2.8B)', 'Natural Gas ($2.1B)'],
      es: ['Petróleo crudo ($4.2B)', 'Mineral de cobre ($3.2B)', 'Automóviles ($2.8B)', 'Gas natural ($2.1B)'],
      total_val_billion: 52,
    },
    natural_wealth: {
      en: ['Rose Valley (produces 70% of the world’s pure rose attar oil for luxury perfumery)', 'Rila and Pirin high alpine ranges', 'Danubian fertile loess plain', 'Black Sea coastline (Burgas and Varna ports)'],
      es: ['Valle de las Rosas (produce el 70% del aceite de rosas puro del mundo para perfumería)', 'Altas cumbres alpinas de Rila y Pirin', 'Fértil llanura del Danubio', 'Puertos de Varna y Burgas en el Mar Negro'],
    },
    physical_geography_summary: {
      en: 'Crossed west-to-east by the Balkan Mountains (Stara Planina), with the flat Danubian Plain to the north, the high Rila and Rhodope massifs to the south, and the Black Sea to the east.',
      es: 'Atravesada de oeste a este por la cordillera de los Balcanes (Stara Planina), con la llanura del Danubio al norte, los macizos alpinos de Rila y Ródopes al sur y el Mar Negro al este.'
    },
    landforms: [
      {
        id: 'bg-peak-musala',
        type: 'peak',
        name_en: 'Musala (Rila Mountains)',
        name_es: 'Musala (Montes Rila)',
        coords: [42.1792, 23.5856],
        elevation_m: 2925,
        description_en: 'Highest mountain peak in Bulgaria and the entire Balkan Peninsula, situated in the Rila National Park.',
        description_es: 'La montaña más alta de Bulgaria y de toda la península balcánica (2.925m), en el macizo de Rila.'
      }
    ],
    interesting_fact: {
      en: 'Bulgaria produces approximately 70% to 80% of the entire world’s rose oil (attar of roses), requiring over 3,000 to 4,000 kilograms of hand-picked rose petals to produce just one single liter of pure oil.',
      es: 'Bulgaria produce más del 70% del aceite de rosas del mundo; se requieren entre 3.000 y 4.000 kilos de pétalos cosechados al amanecer para destilar un solo litro de aceite puro.'
    },
    teks_alignment: ['TEKS 6.4B: Specialty agricultural extraction and essential oils', 'TEKS 5.7A: Mountain belts of the Balkan Peninsula']
  },

  // =========================================================================
  // 23. SERBIA (Serbia)
  // =========================================================================
  {
    id: 'SRB',
    iso2: 'rs',
    iso3: 'SRB',
    name_en: 'Serbia',
    name_es: 'Serbia',
    continent: 'Europe',
    continent_es: 'Europa',
    capital_en: 'Belgrade',
    capital_es: 'Belgrado',
    capital_coords: [44.7866, 20.4489],
    center_coords: [44.0165, 21.0059],
    zoom_level: 6,
    population: '6,600,000',
    area_sqkm: '88,361 km²',
    gdp_billion: 75,
    main_exports: {
      en: ['Insulated Electric Wire ($2.6B)', 'Refined Copper & Cathodes (Bor mines, $2.1B)', 'Rubber Tires ($1.4B)', 'Frozen Raspberries & Fruit ($820M)', 'Motor Vehicles ($980M)'],
      es: ['Cables eléctricos aislados ($2.6B)', 'Cobre refinado y cátodos (minas de Bor, $2.1B)', 'Neumáticos de caucho ($1.4B)', 'Frambuesas congeladas y fruta ($820M)', 'Vehículos ($980M)'],
      total_val_billion: 30,
    },
    main_imports: {
      en: ['Crude Petroleum & Gas ($4.2B)', 'Electrical Equipment ($2.4B)', 'Cars ($1.8B)', 'Medicaments ($1.2B)'],
      es: ['Petróleo crudo y gas ($4.2B)', 'Equipos eléctricos ($2.4B)', 'Automóviles ($1.8B)', 'Medicamentos ($1.2B)'],
      total_val_billion: 39,
    },
    natural_wealth: {
      en: ['Bor and Majdanpek copper and gold deposits (among Europe’s largest)', 'Fertile agricultural plains of Vojvodina', 'Danube and Sava confluence waterway crossroads', 'Lignite coal reserves in Kolubara'],
      es: ['Minas de cobre y oro de Bor (las mayores de Europa)', 'Fértiles llanuras agrícolas de Voivodina', 'Confluencia fluvial del Danubio y el Sava en Belgrado', 'Lignito en Kolubara'],
    },
    physical_geography_summary: {
      en: 'Features the flat fertile Pannonian Plain in the northern Vojvodina province, rising south of the Sava and Danube rivers into rugged hills and the Balkan and Dinaric mountain systems.',
      es: 'Presenta llanuras panónicas fértiles en Voivodina al norte, elevándose al sur de los ríos Sava y Danubio en colinas y las cordilleras balcánica y dinárica.'
    },
    landforms: [
      {
        id: 'rs-strait-ironfate',
        type: 'strait',
        name_en: 'Iron Gates (Đerdap Gorge)',
        name_es: 'Puertas de Hierro (Desfiladero de Đerdap)',
        coords: [44.6667, 22.5000],
        length_km: 134,
        description_en: 'Spectacular narrow gorge carved by the Danube River between the Carpathian and Balkan mountains on the border with Romania.',
        description_es: 'Profundo desfiladero fluvial esculpido por el río Danubio en la frontera entre Serbia y Rumanía.'
      }
    ],
    interesting_fact: {
      en: 'Belgrade, the capital of Serbia, is one of the oldest continuously inhabited cities in Europe, situated at the strategic military and commercial junction of the Danube and Sava rivers.',
      es: 'Belgrado es una de las ciudades más antiguas de Europa, situada en la estratégica confluencia de los ríos Danubio y Sava.'
    },
    teks_alignment: ['TEKS 6.4C: River confluences as strategic urban hubs', 'TEKS 6.6B: Copper extraction in the Balkans']
  },

  // =========================================================================
  // 24. ESLOVENIA (Slovenia)
  // =========================================================================
  {
    id: 'SVN',
    iso2: 'si',
    iso3: 'SVN',
    name_en: 'Slovenia',
    name_es: 'Eslovenia',
    continent: 'Europe',
    continent_es: 'Europa',
    capital_en: 'Ljubljana',
    capital_es: 'Liubliana',
    capital_coords: [46.0569, 14.5058],
    center_coords: [46.1512, 14.9955],
    zoom_level: 7,
    population: '2,100,000',
    area_sqkm: '20,273 km²',
    gdp_billion: 68,
    main_exports: {
      en: ['Packaged Pharmaceuticals (Krka, $16B)', 'Cars & Vehicle Parts ($6.8B)', 'Electrical Machinery ($4.2B)', 'Refined Petroleum ($3.4B)', 'Aluminium & Steel ($2.1B)'],
      es: ['Medicamentos envasados (Krka, $16B)', 'Autos y autopartes ($6.8B)', 'Maquinaria eléctrica ($4.2B)', 'Petróleo refinado ($3.4B)', 'Aluminio y acero ($2.1B)'],
      total_val_billion: 55,
    },
    main_imports: {
      en: ['Packaged Medicaments ($14B)', 'Cars & Auto Parts ($5.8B)', 'Petroleum Products ($4.2B)', 'Electricity ($2.1B)'],
      es: ['Medicamentos envasados ($14B)', 'Autos y piezas ($5.8B)', 'Derivados de petróleo ($4.2B)', 'Electricidad ($2.1B)'],
      total_val_billion: 56,
    },
    natural_wealth: {
      en: ['Dense forest cover over 60% of land (third most forested nation in EU)', 'Classic karst plateau (etymological origin of the scientific term "karst")', 'Julian Alps freshwater glacial lakes (Bled and Bohinj)', 'Port of Koper (major Adriatic seaport)'],
      es: ['Bosques que cubren más del 60% del territorio (3.er país más boscoso de la UE)', 'La meseta del Kras (dio origen universal al término científico "relieve kárstico")', 'Lagos glaciares alpinos de Bled y Bohinj', 'Puerto de Koper en el Adriático'],
    },
    physical_geography_summary: {
      en: 'Meeting point of four major European geographic regions: the soaring Julian Alps, the Dinaric karst plateau, the flat Pannonian plain, and the sunny Mediterranean coast.',
      es: 'Punto de encuentro de cuatro grandes regiones geográficas: los Alpes Julianos, la meseta kárstica dinárica, la llanura panónica y el litoral mediterráneo del Adriático.'
    },
    landforms: [
      {
        id: 'si-peak-triglav',
        type: 'peak',
        name_en: 'Triglav',
        name_es: 'Triglav (Alpes Julianos)',
        coords: [46.3789, 13.8367],
        elevation_m: 2864,
        description_en: 'Highest mountain peak in Slovenia and the Julian Alps, the three-headed symbol on the national flag.',
        description_es: 'Punto más alto de Eslovenia y de los Alpes Julianos (2.864m), montaña sagrada presente en el escudo nacional.'
      },
      {
        id: 'si-lake-bled',
        type: 'lake',
        name_en: 'Lake Bled',
        name_es: 'Lago de Bled',
        coords: [46.3639, 14.0936],
        elevation_m: 475,
        description_en: 'Iconic glacial lake with an island church in the center and a medieval cliffside castle.',
        description_es: 'Célebre lago glaciar con una pintoresca isla central coronada por una iglesia y un castillo medieval sobre el acantilado.'
      }
    ],
    interesting_fact: {
      en: 'Slovenia’s Kras region gave the scientific name to "karst" topography worldwide, describing landscapes of underground caves, sinkholes, and subterranean disappearing rivers.',
      es: 'La región eslovena de Kras dio nombre a la geomorfología kárstica en todo el mundo, gracias a sus más de 10.000 cuevas como Postojna y Škocjan.'
    },
    teks_alignment: ['TEKS 5.7A: Karst dissolution and cave geomorphology', 'TEKS 6.4B: Forest conservation and pharmaceutical manufacturing']
  },

  // =========================================================================
  // 25. LITUANIA (Lithuania)
  // =========================================================================
  {
    id: 'LTU',
    iso2: 'lt',
    iso3: 'LTU',
    name_en: 'Lithuania',
    name_es: 'Lituania',
    continent: 'Europe',
    continent_es: 'Europa',
    capital_en: 'Vilnius',
    capital_es: 'Vilna',
    capital_coords: [54.6872, 25.2797],
    center_coords: [55.1694, 23.8813],
    zoom_level: 6,
    population: '2,800,000',
    area_sqkm: '65,300 km²',
    gdp_billion: 78,
    main_exports: {
      en: ['Refined Petroleum Products (Mažeikiai, $5.8B)', 'Wood Furniture (IKEA supplier, $3.2B)', 'Scientific Optical Lasers & Biotech ($2.1B)', 'Plastics & Polymers ($2.4B)', 'Wheat & Grains ($1.8B)'],
      es: ['Petróleo refinado ($5.8B)', 'Muebles de madera para exportación ($3.2B)', 'Láseres científicos y biotecnología ($2.1B)', 'Plásticos ($2.4B)', 'Trigo y cereales ($1.8B)'],
      total_val_billion: 48,
    },
    main_imports: {
      en: ['Crude Petroleum ($5.2B)', 'Cars & Transport Vehicles ($3.8B)', 'Electricity ($2.1B)', 'Medicaments ($1.8B)'],
      es: ['Petróleo crudo ($5.2B)', 'Autos y vehículos ($3.8B)', 'Electricidad ($2.1B)', 'Medicamentos ($1.8B)'],
      total_val_billion: 52,
    },
    natural_wealth: {
      en: ['Curonian Spit UNESCO sand dune barrier', 'Baltic Sea amber deposits ("Baltic gold")', 'Ice-free deepwater seaport of Klaipėda', 'Fertile glacial lowland plains'],
      es: ['Barrera dunar del Istmo de Curlandia (patrimonio UNESCO)', 'Grandes depósitos de ámbar fósil del Báltico', 'Puerto de aguas profundas libre de hielo en Klaipėda', 'Llanuras glaciares fértiles'],
    },
    physical_geography_summary: {
      en: 'Gently undulating lowland plain shaped by the Pleistocene glaciations, dotted with thousands of small lakes, peat bogs, and white sand coastal dunes.',
      es: 'Llanura ondulada de origen glaciar con miles de lagos pequeños, humedales, bosques de pinos y dunas de arena blanca en el Báltico.'
    },
    landforms: [
      {
        id: 'lt-peninsula-curonian',
        type: 'peninsula',
        name_en: 'Curonian Spit',
        name_es: 'Istmo de Curlandia',
        coords: [55.4500, 21.0500],
        description_en: 'A 98-km long, thin curved sand-dune spit separating the Curonian Lagoon from the Baltic Sea.',
        description_es: 'Fina lengua de arena de 98 km que separa la laguna de Curlandia de las aguas abiertas del Báltico.'
      }
    ],
    interesting_fact: {
      en: 'Lithuanian scientific laser manufacturers supply over 90% of the world’s top universities and scientific research labs with ultrashort pulse lasers.',
      es: 'Lituania produce y exporta más del 90% de los láseres científicos de pulsos ultracortos utilizados en las 100 mejores universidades del mundo.'
    },
    teks_alignment: ['TEKS 5.7A: Coastal deposition and sand spit formation', 'TEKS 6.6A: High-tech laser and optical physics clusters']
  },

  // =========================================================================
  // 26. LETONIA (Latvia)
  // =========================================================================
  {
    id: 'LVA',
    iso2: 'lv',
    iso3: 'LVA',
    name_en: 'Latvia',
    name_es: 'Letonia',
    continent: 'Europe',
    continent_es: 'Europa',
    capital_en: 'Riga',
    capital_es: 'Riga',
    capital_coords: [56.9496, 24.1052],
    center_coords: [56.8796, 24.6032],
    zoom_level: 6,
    population: '1,880,000',
    area_sqkm: '64,589 km²',
    gdp_billion: 44,
    main_exports: {
      en: ['Sawn Timber, Wood Pellets & Plywood ($4.2B)', 'Broadcasting Hardware ($1.8B)', 'Wheat & Grains ($1.2B)', 'Packaged Medicaments (Grindeks, $880M)', 'Spirits & Vodkas ($920M)'],
      es: ['Madera aserrada, pellets y contrachapado ($4.2B)', 'Equipos de telecomunicación ($1.8B)', 'Trigo y cereales ($1.2B)', 'Medicamentos envasados ($880M)', 'Bebidas espirituosas ($920M)'],
      total_val_billion: 22,
    },
    main_imports: {
      en: ['Cars & Parts ($2.8B)', 'Broadcasting Equipment ($1.8B)', 'Refined Petroleum ($1.9B)', 'Electricity ($1.1B)'],
      es: ['Autos y piezas ($2.8B)', 'Equipos de transmisión ($1.8B)', 'Petróleo refinado ($1.9B)', 'Electricidad ($1.1B)'],
      total_val_billion: 25,
    },
    natural_wealth: {
      en: ['Dense boreal-temperate forests covering over 54% of territory', 'Gulf of Riga and ice-free Baltic ports (Ventspils, Liepāja)', 'Daugava River hydroelectric cascade', 'Abundant peat reserves'],
      es: ['Bosques que cubren más del 54% del país', 'Golfo de Riga y puertos sin hielo en el Báltico (Ventspils y Liepāja)', 'Cascada hidroeléctrica en el río Daugava', 'Turberas naturales'],
    },
    physical_geography_summary: {
      en: 'A low-lying plain with rolling morainic hills in Vidzeme and Latgale, dissected by the Daugava River, opening north to the Gulf of Riga.',
      es: 'Llanura de baja altitud con colinas morrénicas en el interior, atravesada por el río Daugava y abierta al norte hacia el golfo de Riga.'
    },
    landforms: [
      {
        id: 'lv-bay-riga',
        type: 'bay',
        name_en: 'Gulf of Riga',
        name_es: 'Golfo de Riga',
        coords: [57.5000, 23.5000],
        description_en: 'Shallow brackish marine basin of the Baltic Sea semi-enclosed between Latvia and the Estonian island of Saaremaa.',
        description_es: 'Brazo de mar semicerrado del Báltico entre la costa letona y las islas estonias.'
      },
      {
        id: 'lv-river-daugava',
        type: 'river',
        name_en: 'Daugava River (Western Dvina)',
        name_es: 'Río Daugava',
        coords: [57.0500, 24.0333],
        length_km: 1020,
        description_en: 'Historic trade waterway connecting central Russia and Belarus through Riga to the Baltic Sea.',
        description_es: 'Arteria fluvial histórica que une Bielorrusia y Rusia con el golfo de Riga.'
      }
    ],
    interesting_fact: {
      en: 'Latvia has one of the highest proportions of forest cover in the European Union (over 54%), making sustainable timber forestry the foundation of its rural economy.',
      es: 'Más del 54% del territorio de Letonia está cubierto de densos bosques, siendo uno de los países con mayor masa forestal per cápita de Europa.'
    },
    teks_alignment: ['TEKS 6.4B: Timber resources and sustainable forest yields', 'TEKS 5.7A: Baltic post-glacial coastal plains']
  },

  // =========================================================================
  // 27. ESTONIA (Estonia)
  // =========================================================================
  {
    id: 'EST',
    iso2: 'ee',
    iso3: 'EST',
    name_en: 'Estonia',
    name_es: 'Estonia',
    continent: 'Europe',
    continent_es: 'Europa',
    capital_en: 'Tallinn',
    capital_es: 'Tallin',
    capital_coords: [59.4370, 24.7536],
    center_coords: [58.5953, 25.0136],
    zoom_level: 6,
    population: '1,360,000',
    area_sqkm: '45,228 km²',
    gdp_billion: 41,
    main_exports: {
      en: ['Digital Tech Services & Software ($4.8B)', 'Telecommunications Equipment ($2.8B)', 'Wood Products & Prefabricated Houses ($2.2B)', 'Refined Shale Oil ($1.4B)', 'Electrical Equipment ($1.8B)'],
      es: ['Software y servicios de gobernanza digital ($4.8B)', 'Equipos de telecomunicaciones ($2.8B)', 'Casas prefabricadas de madera ($2.2B)', 'Derivados de esquisto bituminoso ($1.4B)', 'Equipos eléctricos ($1.8B)'],
      total_val_billion: 20,
    },
    main_imports: {
      en: ['Electronic Components ($2.8B)', 'Cars & Vehicle Parts ($2.4B)', 'Refined Petroleum ($1.6B)', 'Chemicals ($1.4B)'],
      es: ['Componentes electrónicos ($2.8B)', 'Autos y autopartes ($2.4B)', 'Petróleo refinado ($1.6B)', 'Químicos ($1.4B)'],
      total_val_billion: 22,
    },
    natural_wealth: {
      en: ['Kukersite oil shale reserves (world pioneer in shale oil energy)', 'Over 2,222 islands in the Baltic Sea', 'Lake Peipus freshwater fishery', 'Boreal timber forest covering 51% of country'],
      es: ['Mayores depósitos explotables de esquisto bituminoso (kukersita)', 'Más de 2.222 islas en el Mar Báltico', 'Recursos pesqueros del Lago Peipus', 'Bosques que cubren el 51% del territorio'],
    },
    physical_geography_summary: {
      en: 'Low, flat glaciated landscape with an average elevation of just 50 meters, bordered by the Gulf of Finland to the north, Lake Peipus to the east, and the Baltic Sea to the west.',
      es: 'Relieve muy llano con una altitud media de apenas 50 metros, bañado por el golfo de Finlandia al norte, el mar Báltico al oeste y el gran lago Peipus al este.'
    },
    landforms: [
      {
        id: 'ee-lake-peipus',
        type: 'lake',
        name_en: 'Lake Peipus',
        name_es: 'Lago Peipus',
        coords: [58.6833, 27.5000],
        elevation_m: 30,
        description_en: 'Fifth-largest lake in Europe (3,555 km²), forming the sovereign natural border between Estonia and Russia.',
        description_es: 'El quinto lago más grande de Europa (3.555 km²), frontera natural soberana entre Estonia y Rusia.'
      }
    ],
    interesting_fact: {
      en: 'Estonia is the most digitally advanced society in the world (e-Estonia): 99% of all public government services, voting, and banking are handled online in seconds.',
      es: 'Estonia es el país más digitalizado del mundo: el 99% de los trámites públicos, recetas médicas, votaciones e impuestos se gestionan por internet.'
    },
    teks_alignment: ['TEKS 6.6A: Digital governance and software knowledge economies', 'TEKS 6.4A: Boreal forest and island biogeography']
  },

  // =========================================================================
  // 28. ISLANDIA (Iceland)
  // =========================================================================
  {
    id: 'ISL',
    iso2: 'is',
    iso3: 'ISL',
    name_en: 'Iceland',
    name_es: 'Islandia',
    continent: 'Europe',
    continent_es: 'Europa',
    capital_en: 'Reykjavik',
    capital_es: 'Reikiavik',
    capital_coords: [64.1466, -21.9426],
    center_coords: [64.9631, -19.0208],
    zoom_level: 6,
    population: '390,000',
    area_sqkm: '103,000 km²',
    gdp_billion: 31,
    main_exports: {
      en: ['Raw Aluminium Smelted with Clean Geothermal Energy ($3.8B)', 'Fresh & Frozen Fish (Cod, Haddock, Capelin, $3.2B)', 'Fish Oil & Marine Biotech ($480M)', 'Medical & Carbon Capture Tech ($320M)'],
      es: ['Aluminio fundido con energía geotérmica limpia ($3.8B)', 'Pescado fresco y congelado (Bacalao, capelán, $3.2B)', 'Aceite de pescado y biotecnología marina ($480M)', 'Tecnología médica y captura de carbono ($320M)'],
      total_val_billion: 8.5,
    },
    main_imports: {
      en: ['Alumina for Smelting ($1.4B)', 'Cars & Electric Vehicles ($880M)', 'Refined Petroleum ($780M)', 'Industrial Equipment ($620M)'],
      es: ['Alúmina para fundición ($1.4B)', 'Autos y vehículos eléctricos ($880M)', 'Petróleo refinado ($780M)', 'Maquinaria industrial ($620M)'],
      total_val_billion: 9.8,
    },
    natural_wealth: {
      en: ['Abundant volcanic geothermal heat (powers 100% of home heating and 30% of electricity)', 'Vast glacier runoff generating 70% of electricity via hydropower', 'North Atlantic nutrient-rich cold fishing banks', 'Mid-Atlantic Rift plate divergence zone'],
      es: ['Calor geotérmico volcánico (cubre el 100% de la calefacción doméstica y 30% de la luz)', 'Deshielo glaciar que aporta el 70% de hidroelectricidad', 'Ricos caladeros pesqueros del Atlántico Norte', 'Falla de separación tectónica mesoatlántica'],
    },
    physical_geography_summary: {
      en: 'A volcanic island plateau straddling the divergent Mid-Atlantic Ridge, characterized by active subglacial volcanoes, black basalt sand deserts, steaming geysers, and massive ice caps.',
      es: 'Meseta insular volcánica sobre la dorsal mesoatlántica en divergencia, famosa como "Tierra de Hielo y Fuego" por sus volcanes subglaciares, campos de lava basáltica, géiseres y glaciares.'
    },
    landforms: [
      {
        id: 'is-glacier-vatnajokull',
        type: 'plateau',
        name_en: 'Vatnajökull Ice Cap',
        name_es: 'Glaciar Vatnajökull',
        coords: [64.4000, -16.8000],
        elevation_m: 2110,
        description_en: 'The largest ice cap in Europe by volume (covering 7,900 km²), concealing active volcanic calderas like Grímsvötn beneath 1,000 meters of ice.',
        description_es: 'El glaciar más grande y voluminoso de Europa (7.900 km²), con volcanes activos ocultos bajo un kilómetro de hielo.'
      },
      {
        id: 'is-volcano-eyjafjallajokull',
        type: 'volcano',
        name_en: 'Eyjafjallajökull',
        name_es: 'Eyjafjallajökull',
        coords: [63.6333, -19.6167],
        elevation_m: 1666,
        description_en: 'Glacier-topped stratovolcano famous for the 2010 eruption whose explosive ash plume shut down European airspace for a week.',
        description_es: 'Estratovolcán subglaciar cuya erupción de ceniza en 2010 paralizó el espacio aéreo europeo durante una semana.'
      }
    ],
    interesting_fact: {
      en: 'Nearly 100% of all primary energy and electricity in Iceland is generated from renewable sources (70% hydropower, 30% geothermal), making it the world’s cleanest energy nation.',
      es: 'El 100% de la electricidad y calefacción de Islandia proviene de fuentes renovables (70% hidroeléctrica y 30% geotérmica volcánica).'
    },
    teks_alignment: ['TEKS 6.3C: Plate tectonics and Mid-Atlantic ridge seafloor spreading', 'TEKS 6.4B: Geothermal renewable energy']
  },

  // =========================================================================
  // 29. LUXEMBURGO (Luxembourg)
  // =========================================================================
  {
    id: 'LUX',
    iso2: 'lu',
    iso3: 'LUX',
    name_en: 'Luxembourg',
    name_es: 'Luxemburgo',
    continent: 'Europe',
    continent_es: 'Europa',
    capital_en: 'Luxembourg City',
    capital_es: 'Ciudad de Luxemburgo',
    capital_coords: [49.6116, 6.1319],
    center_coords: [49.8153, 6.1296],
    zoom_level: 8,
    population: '660,000',
    area_sqkm: '2,586 km²',
    gdp_billion: 86,
    main_exports: {
      en: ['Financial Investment Services ($140B assets)', 'Specialty Steel Beams (ArcelorMittal, $3.2B)', 'Commercial Tires & Synthetic Rubber ($1.8B)', 'Satellite Communications (SES, $2.1B)'],
      es: ['Servicios de inversión y banca internacional ($140B)', 'Vigas de acero de alta resistencia (ArcelorMittal, $3.2B)', 'Neumáticos de camión y caucho ($1.8B)', 'Telecomunicaciones por satélite (SES, $2.1B)'],
      total_val_billion: 18,
    },
    main_imports: {
      en: ['Cars ($4.2B)', 'Refined Petroleum ($2.8B)', 'Airplanes ($1.4B)', 'Electronics ($1.8B)'],
      es: ['Automóviles ($4.2B)', 'Petróleo refinado ($2.8B)', 'Aeronaves ($1.4B)', 'Electrónica ($1.8B)'],
      total_val_billion: 26,
    },
    natural_wealth: {
      en: ['Moselle River Valley microclimate and vineyards', 'Oesling forested plateau (part of the Ardennes)', 'Minette iron ore deposit (foundation of industrial wealth)'],
      es: ['Microclima y viñedos del valle del río Mosela', 'Meseta boscosa del Oesling en las Ardenas', 'Yacimientos históricos de hierro de la cuenca de Minette'],
    },
    physical_geography_summary: {
      en: 'A small landlocked country divided into the forested, deep-valleyed Oesling in the north (Ardennes) and the fertile rolling Gutland in the south.',
      es: 'Pequeño estado sin litoral dividido en dos regiones: el Oesling montañoso y boscoso en el norte y el Gutland fértil y ondulado en el sur.'
    },
    landforms: [
      {
        id: 'lu-peak-kneiff',
        type: 'peak',
        name_en: 'Kneiff',
        name_es: 'Colina Kneiff',
        coords: [50.1583, 6.0361],
        elevation_m: 560,
        description_en: 'Highest elevation point in the Grand Duchy of Luxembourg, situated in the northern Oesling region.',
        description_es: 'El punto más alto de Luxemburgo (560m), en las colinas del norte del Gran Ducado.'
      }
    ],
    interesting_fact: {
      en: 'Luxembourg consistently boasts the highest GDP per capita in the world (over $130,000 per person) and was the first country on Earth to make all public transit 100% free nationwide.',
      es: 'Luxemburgo posee el PIB per cápita más alto del mundo (~$130.000) y fue el primer país del planeta en hacer todo el transporte público 100% gratuito.'
    },
    teks_alignment: ['TEKS 6.6A: Financial hubs and high-income service economies', 'TEKS 6.7A: Microstates in European integration']
  },

  // =========================================================================
  // 30. BIELORRUSIA (Belarus)
  // =========================================================================
  {
    id: 'BLR',
    iso2: 'by',
    iso3: 'BLR',
    name_en: 'Belarus',
    name_es: 'Bielorrusia',
    continent: 'Europe',
    continent_es: 'Europa',
    capital_en: 'Minsk',
    capital_es: 'Minsk',
    capital_coords: [53.9006, 27.5590],
    center_coords: [53.7098, 27.9534],
    zoom_level: 5,
    population: '9,200,000',
    area_sqkm: '207,600 km²',
    gdp_billion: 72,
    main_exports: {
      en: ['Potash Mineral Fertilizers (Belaruskali, $3.4B)', 'Refined Petroleum ($4.2B)', 'Heavy Haul Mining Trucks & Tractors (BelAZ, $2.1B)', 'Dairy, Cheese & Butter ($2.8B)', 'Wood & Timber Products ($1.4B)'],
      es: ['Fertilizantes de potasa (Belaruskali, $3.4B)', 'Petróleo refinado ($4.2B)', 'Camiones mineros gigantes y tractores (BelAZ, $2.1B)', 'Lácteos, quesos y mantequilla ($2.8B)', 'Madera y celulosa ($1.4B)'],
      total_val_billion: 38,
    },
    main_imports: {
      en: ['Crude Petroleum ($5.8B)', 'Natural Gas ($2.8B)', 'Cars & Vehicle Parts ($2.1B)', 'Electronic Components ($1.6B)'],
      es: ['Petróleo crudo ($5.8B)', 'Gas natural ($2.8B)', 'Autos y autopartes ($2.1B)', 'Componentes electrónicos ($1.6B)'],
      total_val_billion: 42,
    },
    natural_wealth: {
      en: ['Starobin potash salt deposit (one of the world’s largest suppliers of agricultural potash)', 'Białowieża Primeval Forest (last remnant of European lowland primeval forest with wild wisent bisons)', 'Extensive peatlands and 11,000 lakes', 'Dnieper, Neman, and Pripyat river basins'],
      es: ['Minas de potasa de Starobin (uno de los mayores proveedores agrícolas del mundo)', 'Bosque primitivo de Białowieża (hogar del bisonte europeo)', 'Más de 11.000 lagos y turberas', 'Ríos navegables Dniéper, Niemen y Prípiat'],
    },
    physical_geography_summary: {
      en: 'A completely landlocked, remarkably flat nation on the East European Plain, characterized by vast marshy lowlands (Polesia), low terminal moraine ridges, and thousands of post-glacial lakes.',
      es: 'País plano sin salida al mar en la llanura de Europa oriental, caracterizado por extensos humedales pantanosos (Polesia), bosques templados y colinas glaciares bajas.'
    },
    landforms: [
      {
        id: 'by-forest-bialowieza',
        type: 'plain',
        name_en: 'Białowieża Forest',
        name_es: 'Bosque de Białowieża',
        coords: [52.7333, 23.8667],
        description_en: 'Ancient primeval forest shared with Poland, the last undisturbed ancient woodland in lowland Europe and refuge of the European bison.',
        description_es: 'El último bosque virgen de llanura que queda en Europa, refugio del bisonte europeo (wisent).'
      }
    ],
    interesting_fact: {
      en: 'Belarus manufactures approximately 30% of all the world’s giant quarry dump trucks through its state-owned BelAZ plant, including the world’s largest truck (capable of hauling 450 metric tons).',
      es: 'La fábrica bielorrusa BelAZ produce cerca del 30% de los camiones mineros gigantes del planeta, incluido el camión más grande del mundo (capaz de cargar 450 toneladas).'
    },
    teks_alignment: ['TEKS 6.4B: Potash mineral fertilizers and world agriculture', 'TEKS 5.7A: Lowland marshlands and post-glacial drainage']
  },

  // =========================================================================
  // 31. BOSNIA Y HERZEGOVINA
  // =========================================================================
  {
    id: 'BIH',
    iso2: 'ba',
    iso3: 'BIH',
    name_en: 'Bosnia and Herzegovina',
    name_es: 'Bosnia y Herzegovina',
    continent: 'Europe',
    continent_es: 'Europa',
    capital_en: 'Sarajevo',
    capital_es: 'Sarajevo',
    capital_coords: [43.8563, 18.4131],
    center_coords: [43.9159, 17.6791],
    zoom_level: 6,
    population: '3,200,000',
    area_sqkm: '51,197 km²',
    gdp_billion: 27,
    main_exports: {
      en: ['Electricity ($840M)', 'Raw Aluminium & Alloys ($720M)', 'Wood Furniture & Sawn Timber ($980M)', 'Vehicle Seats & Parts ($650M)', 'Iron & Steel ($580M)'],
      es: ['Electricidad hidroeléctrica ($840M)', 'Aluminio y aleaciones ($720M)', 'Muebles de madera y madera aserrada ($980M)', 'Asientos y autopartes ($650M)', 'Hierro y acero ($580M)'],
      total_val_billion: 9.5,
    },
    main_imports: {
      en: ['Refined Petroleum ($1.4B)', 'Cars ($920M)', 'Coal Briquettes ($480M)', 'Medicaments ($420M)'],
      es: ['Petróleo refinado ($1.4B)', 'Automóviles ($920M)', 'Carbón ($480M)', 'Medicamentos ($420M)'],
      total_val_billion: 14.5,
    },
    natural_wealth: {
      en: ['Abundant mountain rivers generating net surplus hydroelectricity for export', 'Dense beech and pine forests covering over 50% of terrain', 'Bauxite, iron ore, and lignite deposits', 'Emerald-green alpine rivers (Neretva, Una, Drina)'],
      es: ['Ríos caudalosos que producen excedente neto de electricidad limpia para exportar', 'Bosques que cubren más del 50% del territorio', 'Depósitos de bauxita, hierro y lignito', 'Ríos alpinos de aguas turquesas (Neretva, Una y Drina)'],
    },
    physical_geography_summary: {
      en: 'Dominated by the rugged limestone ranges of the Dinaric Alps, with deep canyon gorges in the center and south, and a tiny 20-km coastal corridor on the Adriatic Sea at Neum.',
      es: 'Predominantemente montañosa, dominada por los Alpes Dináricos calizos con profundos cañones y desfiladeros, contando con un corredor costero de 20 km en Neum sobre el Adriático.'
    },
    landforms: [
      {
        id: 'ba-peak-maglic',
        type: 'peak',
        name_en: 'Maglić',
        name_es: 'Monte Maglić',
        coords: [43.2806, 18.7333],
        elevation_m: 2386,
        description_en: 'Highest mountain peak in Bosnia and Herzegovina, rising beside the ancient Perućica primeval rainforest on the border with Montenegro.',
        description_es: 'El punto más alto de Bosnia y Herzegovina (2.386m), junto a la selva virgen de Perućica.'
      },
      {
        id: 'ba-river-neretva',
        type: 'river',
        name_en: 'Neretva River',
        name_es: 'Río Neretva',
        coords: [43.3372, 17.8150],
        length_km: 225,
        description_en: 'Cold emerald-green river famous for carving sheer gorges and flowing beneath the historic reconstructed Old Bridge (Stari Most) in Mostar.',
        description_es: 'Río de gélidas aguas color esmeralda que cruza el célebre Puente Viejo (Stari Most) en Mostar.'
      }
    ],
    interesting_fact: {
      en: 'Bosnia and Herzegovina is home to Perućica, one of the very last remaining primeval rainforests in Europe, featuring towering trees over 300 years old untouched by logging.',
      es: 'Bosnia y Herzegovina alberga Perućica, uno de los últimos bosques vírgenes primarios de Europa, con árboles milenarios que jamás han sido talados.'
    },
    teks_alignment: ['TEKS 6.4B: Mountain river hydrology and clean energy export', 'TEKS 5.7A: Karst canyon formation']
  },

  // =========================================================================
  // 32. ALBANIA (Albania)
  // =========================================================================
  {
    id: 'ALB',
    iso2: 'al',
    iso3: 'ALB',
    name_en: 'Albania',
    name_es: 'Albania',
    continent: 'Europe',
    continent_es: 'Europa',
    capital_en: 'Tirana',
    capital_es: 'Tirana',
    capital_coords: [41.3275, 19.8187],
    center_coords: [41.1533, 20.1683],
    zoom_level: 6,
    population: '2,750,000',
    area_sqkm: '28,748 km²',
    gdp_billion: 23,
    main_exports: {
      en: ['Footwear & Textile Apparel ($1.2B)', 'Chromium Ores & Ferrochrome ($420M)', 'Crude Petroleum ($380M)', 'Electricity ($280M)', 'Cast Iron & Construction Materials ($340M)'],
      es: ['Calzado y prendas textiles ($1.2B)', 'Minerales de cromo y ferrocromo ($420M)', 'Petróleo crudo ($380M)', 'Electricidad hidroeléctrica ($280M)', 'Materiales de construcción ($340M)'],
      total_val_billion: 4.8,
    },
    main_imports: {
      en: ['Cars & Vehicle Parts ($820M)', 'Refined Petroleum ($780M)', 'Electricity ($420M)', 'Medicaments ($320M)'],
      es: ['Autos y piezas ($820M)', 'Petróleo refinado ($780M)', 'Electricidad ($420M)', 'Medicamentos ($320M)'],
      total_val_billion: 8.4,
    },
    natural_wealth: {
      en: ['Generates roughly 95% to 100% of all domestic electricity from Drin River hydropower', 'One of the world’s leading reserves of chromium ore', 'Albanian Riviera Mediterranean coastline along Ionian and Adriatic Seas', 'Vast freshwater ancient tectonic lakes (Ohrid, Prespa, Shkodra)'],
      es: ['Genera cerca del 100% de su electricidad con presas hidroeléctricas en el río Drin', 'Una de las mayores reservas de mineral de cromo de Europa', 'Costa mediterránea virgen en la Riviera Albanesa', 'Lagos tectónicos milenarios (Ocrida, Prespa y Escútari)'],
    },
    physical_geography_summary: {
      en: 'Extremely mountainous country (over 70% terrain is rugged mountains), sloping down from the Albanian Alps (Accursed Mountains) in the north to the narrow alluvial coastal plain along the Adriatic and Ionian Seas.',
      es: 'País sumamente montañoso (más del 70% de su relieve son cordilleras abruptas), descendiendo desde los Alpes Albaneses al norte hacia las llanuras costeras del Adriático y Jónico.'
    },
    landforms: [
      {
        id: 'al-peak-korab',
        type: 'peak',
        name_en: 'Mount Korab',
        name_es: 'Monte Korab',
        coords: [41.7903, 20.5469],
        elevation_m: 2764,
        description_en: 'Highest mountain peak in both Albania and North Macedonia, located on the sovereign border between the two nations.',
        description_es: 'La cumbre más alta de Albania y de Macedonia del Norte (2.764m), compartida en su frontera común.'
      }
    ],
    interesting_fact: {
      en: 'Albania produces virtually 100% of its domestic electrical power from clean renewable hydropower stations on the Drin River cascade.',
      es: 'Albania genera prácticamente el 100% de toda su electricidad mediante centrales hidroeléctricas en la cuenca del río Drin.'
    },
    teks_alignment: ['TEKS 6.4B: Hydroelectric energy reliance', 'TEKS 6.6B: Chromium mining and mineral extraction']
  },

  // =========================================================================
  // 33. MACEDONIA DEL NORTE (North Macedonia)
  // =========================================================================
  {
    id: 'MKD',
    iso2: 'mk',
    iso3: 'MKD',
    name_en: 'North Macedonia',
    name_es: 'Macedonia del Norte',
    continent: 'Europe',
    continent_es: 'Europa',
    capital_en: 'Skopje',
    capital_es: 'Skopie',
    capital_coords: [41.9981, 21.4254],
    center_coords: [41.6086, 21.7453],
    zoom_level: 7,
    population: '1,830,000',
    area_sqkm: '25,713 km²',
    gdp_billion: 15,
    main_exports: {
      en: ['Chemical Reaction Catalysts & Filters (Johnson Matthey, $2.4B)', 'Vehicle Wiring Harnesses & Auto Parts ($880M)', 'Textiles & Apparel ($540M)', 'Ferro-nickel Alloys ($420M)', 'Sun-cured Oriental Tobacco ($180M)'],
      es: ['Catalizadores químicos de vehículos ($2.4B)', 'Cableados automotrices ($880M)', 'Textiles y confección ($540M)', 'Aleaciones de ferroníquel ($420M)', 'Tabaco oriental curado ($180M)'],
      total_val_billion: 8.2,
    },
    main_imports: {
      en: ['Precious Metals for Catalysts ($2.1B)', 'Refined Petroleum ($980M)', 'Electricity ($480M)', 'Cars ($380M)'],
      es: ['Metales preciosos para catalizadores ($2.1B)', 'Petróleo refinado ($980M)', 'Electricidad ($480M)', 'Automóviles ($380M)'],
      total_val_billion: 11.2,
    },
    natural_wealth: {
      en: ['Lake Ohrid (one of Earth’s oldest and deepest freshwater lakes with over 200 endemic species)', 'Vardar River valley transportation corridor', 'Nickel, copper, and lead-zinc mines', 'Sun-drenched Mediterranean-continental valleys for vineyards'],
      es: ['Lago de Ocrida (uno de los lagos más antiguos y profundos del mundo con 200 especies endémicas)', 'Corredor fluvial del río Vardar', 'Minas de níquel, cobre, plomo y zinc', 'Valles para viñedos y tabaco'],
    },
    physical_geography_summary: {
      en: 'A completely landlocked Balkan country defined by deep river valleys (Vardar basin) framed by high, rugged mountain chains (Šar, Korab, and Osogovo ranges).',
      es: 'País balcánico sin salida al mar estructurado en torno al valle del río Vardar y rodeado por altas cordilleras montañosas.'
    },
    landforms: [
      {
        id: 'mk-lake-ohrid',
        type: 'lake',
        name_en: 'Lake Ohrid',
        name_es: 'Lago de Ocrida',
        coords: [41.0500, 20.7500],
        elevation_m: 693,
        description_en: 'UNESCO World Heritage lake estimated at 2 to 3 million years old, with crystalline waters reaching depths of 288 meters.',
        description_es: 'Uno de los lagos más antiguos de la Tierra (2 a 3 millones de años), con aguas transparentes y hasta 288m de profundidad.'
      }
    ],
    interesting_fact: {
      en: 'Lake Ohrid is one of the oldest lakes in the world; over 200 biological species found in its waters exist nowhere else on Earth, earning it the title "Europe’s Galápagos".',
      es: 'El lago de Ocrida alberga más de 200 especies que no existen en ningún otro lugar del planeta, por lo que se le llama "las Galápagos de Europa".'
    },
    teks_alignment: ['TEKS 5.7A: Ancient graben tectonic lakes', 'TEKS 6.4B: Endemic biodiversity preservation']
  },

  // =========================================================================
  // 34. MOLDAVIA (Moldova)
  // =========================================================================
  {
    id: 'MDA',
    iso2: 'md',
    iso3: 'MDA',
    name_en: 'Moldova',
    name_es: 'Moldavia',
    continent: 'Europe',
    continent_es: 'Europa',
    capital_en: 'Chisinau',
    capital_es: 'Chisináu',
    capital_coords: [47.0105, 28.8638],
    center_coords: [47.4116, 28.3699],
    zoom_level: 6,
    population: '2,500,000',
    area_sqkm: '33,846 km²',
    gdp_billion: 16,
    main_exports: {
      en: ['Fine Wines & Grape Must ($240M)', 'Sunflower Seeds & Oil ($580M)', 'Insulated Electric Wire ($420M)', 'Fresh Apples, Grapes & Plums ($280M)', 'Corn & Wheat ($380M)'],
      es: ['Vinos finos y mosto ($240M)', 'Semillas y aceite de girasol ($580M)', 'Cables eléctricos para vehículos ($420M)', 'Manzanas, uvas y ciruelas frescas ($280M)', 'Maíz y trigo ($380M)'],
      total_val_billion: 4.2,
    },
    main_imports: {
      en: ['Refined Petroleum ($1.2B)', 'Natural Gas ($680M)', 'Cars & Trucks ($620M)', 'Packaged Medicaments ($280M)'],
      es: ['Petróleo refinado ($1.2B)', 'Gas natural ($680M)', 'Autos y camiones ($620M)', 'Medicamentos envasados ($280M)'],
      total_val_billion: 8.6,
    },
    natural_wealth: {
      en: ['Vast underground limestone cellars storing millions of wine bottles (Mileștii Mici)', 'Extremely fertile black chernozem soil (covers 75% of land)', 'Prut and Dniester border river basins', 'Port access to Danube at Giurgiulești'],
      es: ['Galerías subterráneas gigantescas para crianza de vino (Mileștii Mici: Récord Guinness)', 'Suelo negro fértil o chernozem en el 75% del territorio', 'Ríos fronterizos Prut y Dniéster', 'Puerto fluvial de Giurgiulești sobre el Danubio'],
    },
    physical_geography_summary: {
      en: 'A landlocked hilly plain lying between the Dniester River in the east and the Prut River in the west, with deep valleys, oak forests (Codri), and sunlit vineyard slopes.',
      es: 'País ondulado sin salida al mar situado entre los ríos Dniéster al este y Prut al oeste, con colinas fértiles, bosques de robles (Codri) y viñedos.'
    },
    landforms: [
      {
        id: 'md-peak-balanesti',
        type: 'peak',
        name_en: 'Bălănești Hill',
        name_es: 'Colina Bălănești',
        coords: [47.2189, 28.0833],
        elevation_m: 430,
        description_en: 'Highest point in Moldova, located in the central Codri hills.',
        description_es: 'El punto más alto de Moldavia (430m), en las colinas boscosas del Codri.'
      }
    ],
    interesting_fact: {
      en: 'Moldova holds the Guinness World Record for the largest wine collection in the world: the Mileștii Mici underground limestone cellars contain nearly 2 million bottles stretched across 200 km of subterranean tunnels.',
      es: 'Moldavia ostenta el Récord Guinness de la mayor bodega de vino del mundo: las galerías subterráneas de Mileștii Mici albergan casi 2 millones de botellas a lo largo de 200 km de túneles.'
    },
    teks_alignment: ['TEKS 6.4A: Chernozem soil and specialized viticulture', 'TEKS 6.7A: River ports and landlocked trade access']
  },

  // =========================================================================
  // 35. MONTENEGRO (Montenegro)
  // =========================================================================
  {
    id: 'MNE',
    iso2: 'me',
    iso3: 'MNE',
    name_en: 'Montenegro',
    name_es: 'Montenegro',
    continent: 'Europe',
    continent_es: 'Europa',
    capital_en: 'Podgorica',
    capital_es: 'Podgorica',
    capital_coords: [42.4304, 19.2594],
    center_coords: [42.7087, 19.3744],
    zoom_level: 7,
    population: '620,000',
    area_sqkm: '13,812 km²',
    gdp_billion: 7.5,
    main_exports: {
      en: ['Electricity ($180M)', 'Raw Aluminium ($120M)', 'Vranac Red Wine ($38M)', 'Sawn Timber ($42M)', 'Base Metals ($35M)'],
      es: ['Electricidad ($180M)', 'Aluminio en bruto ($120M)', 'Vino tinto Vranac ($38M)', 'Madera aserrada ($42M)', 'Metales básicos ($35M)'],
      total_val_billion: 0.8,
    },
    main_imports: {
      en: ['Cars & Trucks ($380M)', 'Refined Petroleum ($320M)', 'Electricity ($180M)', 'Foodstuffs ($420M)'],
      es: ['Autos y camiones ($380M)', 'Petróleo refinado ($320M)', 'Electricidad ($180M)', 'Alimentos ($420M)'],
      total_val_billion: 3.8,
    },
    natural_wealth: {
      en: ['Bay of Kotor (Boka Kotorska, southern Europe’s most dramatic submerged river canyon / fjord-like bay)', 'Tara River Canyon (Europe’s deepest river canyon, 1,300 meters deep)', 'Durmitor National Park alpine massifs', 'Rich hydroelectric potential in mountain gorges'],
      es: ['Bahía de Kotor (la ensenada marítima acantilada más espectacular del sur de Europa)', 'Cañón del río Tara (el cañón fluvial más profundo de Europa: 1.300m)', 'Macizos alpinos del Parque Nacional Durmitor', 'Alto potencial hidroeléctrico'],
    },
    physical_geography_summary: {
      en: 'A dramatic, intensely rugged nation where the steep limestone peaks of the Dinaric Alps plunge directly into the deep blue waters of the Adriatic Sea.',
      es: 'Territorio de gran verticalidad donde las escarpadas cumbres calizas de los Alpes Dináricos caen directamente a las aguas azules del mar Adriático.'
    },
    landforms: [
      {
        id: 'me-bay-kotor',
        type: 'bay',
        name_en: 'Bay of Kotor (Boka Kotorska)',
        name_es: 'Bahía de Kotor',
        coords: [42.4500, 18.6500],
        description_en: 'Winding, fjord-like submerged river canyon surrounded by sheer 1,000-meter limestone mountains, a UNESCO World Heritage site.',
        description_es: 'Sinuosa ría acantilada con aspecto de fiordo rodeada por paredes calizas de más de 1.000m sobre el mar.'
      },
      {
        id: 'me-valley-tara',
        type: 'valley',
        name_en: 'Tara River Canyon',
        name_es: 'Cañón del Río Tara',
        coords: [43.1500, 19.1000],
        description_en: 'The deepest river canyon in Europe and second deepest on Earth (1,300 meters deep), famed for turquoise waters and wild rafting.',
        description_es: 'El cañón fluvial más profundo de Europa (1.300m de profundidad), esculpido por el río Tara en Durmitor.'
      }
    ],
    interesting_fact: {
      en: 'The Tara River Canyon in Montenegro reaches a depth of 1,300 meters (4,300 feet), making it the deepest river canyon in all of Europe and second in the world only to the Grand Canyon.',
      es: 'El cañón del río Tara en Montenegro alcanza los 1.300 metros de profundidad, siendo el desfiladero fluvial más profundo de Europa y segundo del mundo tras el Gran Cañón del Colorado.'
    },
    teks_alignment: ['TEKS 5.7A: Canyon carving by river erosion in karst limestone', 'TEKS 6.4B: Coastal tourism and UNESCO protected biospheres']
  },

  // =========================================================================
  // 36. MALTA (Malta)
  // =========================================================================
  {
    id: 'MLT',
    iso2: 'mt',
    iso3: 'MLT',
    name_en: 'Malta',
    name_es: 'Malta',
    continent: 'Europe',
    continent_es: 'Europa',
    capital_en: 'Valletta',
    capital_es: 'La Valeta',
    capital_coords: [35.8989, 14.5146],
    center_coords: [35.9375, 14.3754],
    zoom_level: 9,
    population: '530,000',
    area_sqkm: '316 km²',
    gdp_billion: 21,
    main_exports: {
      en: ['Integrated Circuits & Semiconductor Components ($1.4B)', 'Packaged Medicaments ($620M)', 'Refined Marine Petroleum Bunkering ($840M)', 'Aviation Maintenance & Repair ($420M)'],
      es: ['Circuitos integrados y semiconductores ($1.4B)', 'Medicamentos envasados ($620M)', 'Servicios de bunkering y combustible marino ($840M)', 'Mantenimiento de aeronaves ($420M)'],
      total_val_billion: 4.2,
    },
    main_imports: {
      en: ['Refined Petroleum ($2.4B)', 'Passenger & Cargo Ships ($1.8B)', 'Electronics ($680M)', 'Foodstuffs ($840M)'],
      es: ['Petróleo refinado ($2.4B)', 'Buques y embarcaciones ($1.8B)', 'Electrónica ($680M)', 'Alimentos ($840M)'],
      total_val_billion: 8.8,
    },
    natural_wealth: {
      en: ['Grand Harbour of Valletta (one of the finest natural deepwater harbors in the world)', 'Strategic central position in the Sicily Channel choke point', 'Globigerina limestone (signature golden building stone)', 'Extensive solar radiation'],
      es: ['Gran Puerto de La Valeta (uno de los puertos naturales más profundos y protegidos del mundo)', 'Posición geoestratégica en el canal de Sicilia', 'Piedra caliza globigerina dorada tradicional', 'Abundante insolación mediterránea'],
    },
    physical_geography_summary: {
      en: 'An archipelago of low coralline limestone islands in the central Mediterranean Sea, with terraced hills, sea caves, and sheer cliffs dropping into the sea.',
      es: 'Archipiélago de islas calizas bajas en el Mediterráneo central (Malta, Gozo y Comino), con costas recortadas y altos acantilados marinos.'
    },
    landforms: [
      {
        id: 'mt-bay-grandharbour',
        type: 'bay',
        name_en: 'Grand Harbour (Valletta)',
        name_es: 'Gran Puerto de La Valeta',
        coords: [35.8950, 14.5200],
        description_en: 'Spectacular natural deep-water bay fortified with monumental bastions by the Knights of St. John in the 16th century.',
        description_es: 'Magnífica bahía natural profunda fortificada en el siglo XVI por los Caballeros de la Orden de Malta.'
      }
    ],
    interesting_fact: {
      en: 'With over 1,600 people per square kilometer, Malta is the most densely populated country in the European Union and the fourth most densely populated in the world.',
      es: 'Con más de 1.600 habitantes por km², Malta es el país con mayor densidad de población de la Unión Europea y el cuarto del mundo.'
    },
    teks_alignment: ['TEKS 6.8A: Mediterranean naval chokepoints', 'TEKS 6.3B: Island archipelagos and natural harbor fortifications']
  },

  // =========================================================================
  // 37. CHIPRE (Cyprus)
  // =========================================================================
  {
    id: 'CYP',
    iso2: 'cy',
    iso3: 'CYP',
    name_en: 'Cyprus',
    name_es: 'Chipre',
    continent: 'Europe',
    continent_es: 'Europa',
    capital_en: 'Nicosia',
    capital_es: 'Nicosia',
    capital_coords: [35.1856, 33.3823],
    center_coords: [35.1264, 33.4299],
    zoom_level: 8,
    population: '1,250,000',
    area_sqkm: '9,251 km²',
    gdp_billion: 32,
    main_exports: {
      en: ['Packaged Medicaments ($480M)', 'Halloumi Cheese (PDO protected, $380M)', 'Cargo Vessels & Ship Management Services ($1.2B)', 'Citrus Fruits & Potatoes ($140M)'],
      es: ['Medicamentos envasados ($480M)', 'Queso Halloumi tradicional con Denominación de Origen ($380M)', 'Buques y servicios navieros ($1.2B)', 'Cítricos y patatas ($140M)'],
      total_val_billion: 4.6,
    },
    main_imports: {
      en: ['Refined Petroleum ($1.8B)', 'Ships & Boats ($1.4B)', 'Cars ($620M)', 'Electronics ($480M)'],
      es: ['Petróleo refinado ($1.8B)', 'Embarcaciones ($1.4B)', 'Automóviles ($620M)', 'Electrónica ($480M)'],
      total_val_billion: 11.8,
    },
    natural_wealth: {
      en: ['Historic copper mines (the word "copper" derives from the Greek name for Cyprus, Kupros)', 'Aphrodite gas field offshore in the Levantine Basin', 'Troodos ophiolite mountain complex (geological marvel of oceanic crust)', 'Sunny Mediterranean climate with 300+ days of sun'],
      es: ['Históricas minas de cobre (el nombre del elemento químico cobre proviene del griego Kýpros)', 'Campo de gas natural marino Aphrodite en el Mediterráneo oriental', 'Macizo ofiolítico de Troodos (corteza oceánica expuesta)', 'Más de 300 días de sol al año'],
    },
    physical_geography_summary: {
      en: 'The third largest island in the Mediterranean Sea, dominated by the forested Troodos Mountains in the southwest, the Kyrenia range along the northern coast, and the central Mesaoria agricultural plain.',
      es: 'La tercera isla más grande del Mediterráneo, dominada por el macizo montañoso de Troodos al suroeste, la cordillera de Kyrenia al norte y la llanura central de Mesaoria.'
    },
    landforms: [
      {
        id: 'cy-peak-olympus',
        type: 'peak',
        name_en: 'Mount Olympus (Troodos)',
        name_es: 'Monte Olimpo (Troodos)',
        coords: [34.9367, 32.8633],
        elevation_m: 1952,
        description_en: 'Highest peak on the island of Cyprus, crowning the Troodos ophiolite mountain complex.',
        description_es: 'La cumbre más alta de la isla de Chipre (1.952m), en la cordillera de Troodos.'
      }
    ],
    interesting_fact: {
      en: 'The chemical element copper derives its name from Cyprus (Latin: cuprum, from Cyprium aes "metal of Cyprus"), where ancient civilizations mined copper as early as 4000 BC.',
      es: 'El nombre del elemento químico cobre procede de Chipre (del latín cuprum, metal de Chipre), donde la civilización minó este metal desde hace más de 6.000 años.'
    },
    teks_alignment: ['TEKS 6.6B: Ancient copper mining and maritime trade', 'TEKS 5.7A: Ophiolite complexes and exposed oceanic crust']
  },

  // =========================================================================
  // 38. ANDORRA (Andorra)
  // =========================================================================
  {
    id: 'AND',
    iso2: 'ad',
    iso3: 'AND',
    name_en: 'Andorra',
    name_es: 'Andorra',
    continent: 'Europe',
    continent_es: 'Europa',
    capital_en: 'Andorra la Vella',
    capital_es: 'Andorra la Vella',
    capital_coords: [42.5063, 1.5218],
    center_coords: [42.5063, 1.5218],
    zoom_level: 9,
    population: '85,000',
    area_sqkm: '468 km²',
    gdp_billion: 3.7,
    main_exports: {
      en: ['Tobacco Products ($85M)', 'Optical Instruments ($45M)', 'Electricity ($28M)', 'Perfumery & Essential Oils ($35M)'],
      es: ['Productos de tabaco elaborado ($85M)', 'Instrumentos de óptica ($45M)', 'Electricidad hidroeléctrica ($28M)', 'Perfumería y cosméticos ($35M)'],
      total_val_billion: 0.25,
    },
    main_imports: {
      en: ['Cars & Vehicles ($240M)', 'Refined Petroleum ($180M)', 'Foodstuffs ($320M)', 'Luxury Goods ($280M)'],
      es: ['Automóviles ($240M)', 'Petróleo refinado ($180M)', 'Alimentos ($320M)', 'Artículos de lujo ($280M)'],
      total_val_billion: 1.8,
    },
    natural_wealth: {
      en: ['High Pyrenean alpine slopes driving premier European ski resorts', 'Valira River mountain hydropower', 'Madriu-Perafita-Claror glacial valley (UNESCO site)', 'Granite thermal mineral springs'],
      es: ['Grandes estaciones de esquí en los Pirineos (Grandvalira)', 'Hidroelectricidad de las cuencas del río Valira', 'Valle glaciar de Madriu-Perafita-Claror (patrimonio UNESCO)', 'Aguas termales de Escaldes'],
    },
    physical_geography_summary: {
      en: 'A high-altitude mountainous microstate nestled entirely in the eastern Pyrenees, composed of rugged peaks dissected by Y-shaped glacial valleys that converge on the Valira River.',
      es: 'Microestado pirenaico de gran altitud situado entre España y Francia, formado por cumbres agrestes que superan los 2.900m y valles glaciares en forma de Y.'
    },
    landforms: [
      {
        id: 'ad-peak-comapedrosa',
        type: 'peak',
        name_en: 'Comapedrosa',
        name_es: 'Alto de Comapedrosa',
        coords: [42.5925, 1.4447],
        elevation_m: 2942,
        description_en: 'Highest mountain peak in the Principality of Andorra, located in the northwestern Pyrenees.',
        description_es: 'La montaña más alta del Principado de Andorra (2.942m), en el parque natural de los Pirineos.'
      }
    ],
    interesting_fact: {
      en: 'Andorra la Vella is the highest capital city in Europe, sitting at an elevation of 1,023 meters (3,356 feet) above sea level in the Pyrenees.',
      es: 'Andorra la Vella es la capital situada a mayor altitud de toda Europa, ubicada a 1.023 metros sobre el nivel del mar en el valle de los Pirineos.'
    },
    teks_alignment: ['TEKS 6.4B: High-altitude microstates and winter tourism', 'TEKS 5.7A: Glacial valley erosion']
  },

  // =========================================================================
  // 39. MÓNACO (Monaco)
  // =========================================================================
  {
    id: 'MCO',
    iso2: 'mc',
    iso3: 'MCO',
    name_en: 'Monaco',
    name_es: 'Mónaco',
    continent: 'Europe',
    continent_es: 'Europa',
    capital_en: 'Monaco',
    capital_es: 'Mónaco',
    capital_coords: [43.7384, 7.4246],
    center_coords: [43.7384, 7.4246],
    zoom_level: 11,
    population: '39,000',
    area_sqkm: '2.08 km²',
    gdp_billion: 8.8,
    main_exports: {
      en: ['Luxury Yachting Services & Marine Tech ($1.2B)', 'Cosmetics & Pharmaceuticals ($420M)', 'Financial & Asset Management ($2.4B)', 'Plastics & Precision Parts ($280M)'],
      es: ['Servicios navales de superyates ($1.2B)', 'Cosméticos y productos de laboratorio ($420M)', 'Gestión patrimonial y finanzas ($2.4B)', 'Plásticos de precisión ($280M)'],
      total_val_billion: 2.1,
    },
    main_imports: {
      en: ['Luxury Yachts & Boats ($840M)', 'Jewelry & Watches ($520M)', 'Cars ($380M)', 'Foodstuffs ($320M)'],
      es: ['Yates de lujo ($840M)', 'Joyería y relojería ($520M)', 'Automóviles ($380M)', 'Alimentos gourmet ($320M)'],
      total_val_billion: 2.8,
    },
    natural_wealth: {
      en: ['Natural deep-water Mediterranean bay of Port Hercule', 'Protected microclimate of the French Riviera beneath the Maritime Alps', 'Marine biodiversity protection (Pelagos Sanctuary for Mediterranean Marine Mammals)'],
      es: ['Puerto natural de aguas profundas de Puerto Hércules', 'Microclima de la Costa Azul protegido por los Alpes Marítimos', 'Liderazgo en conservación oceánica marina (Santuario Pelagos)'],
    },
    physical_geography_summary: {
      en: 'The second smallest independent sovereign state in the world (after Vatican City), clinging to the steep limestone cliffs of the Côte d’Azur along the Mediterranean Sea.',
      es: 'El segundo país independiente más pequeño del mundo (tras el Vaticano), edificado sobre los acantilados rocosos de la Costa Azul junto al mar Mediterráneo.'
    },
    landforms: [
      {
        id: 'mc-cape-rock',
        type: 'cape',
        name_en: 'Rock of Monaco (Le Rocher)',
        name_es: 'Peñón de Mónaco',
        coords: [43.7311, 7.4222],
        elevation_m: 62,
        description_en: 'Historic 62-meter high limestone monolith jutting into the Mediterranean, site of the Prince’s Palace.',
        description_es: 'Promontorio rocoso calizo de 62 metros sobre el mar donde se asientan el Palacio de los Príncipes y la ciudad vieja.'
      }
    ],
    interesting_fact: {
      en: 'With a total area of just 2.08 square kilometers, the entire country of Monaco could fit inside New York’s Central Park with room to spare.',
      es: 'Con solo 2,08 km² de territorio, todo el país de Mónaco cabe holgadamente dentro del Central Park de Nueva York (que mide 3,41 km²).'
    },
    teks_alignment: ['TEKS 6.6A: Coastal microstates and ultra-high-income services', 'TEKS 5.6B: Land reclamation from the sea (Fontvieille district)']
  },

  // =========================================================================
  // 40. LIECHTENSTEIN (Liechtenstein)
  // =========================================================================
  {
    id: 'LIE',
    iso2: 'li',
    iso3: 'LIE',
    name_en: 'Liechtenstein',
    name_es: 'Liechtenstein',
    continent: 'Europe',
    continent_es: 'Europa',
    capital_en: 'Vaduz',
    capital_es: 'Vaduz',
    capital_coords: [47.1410, 9.5209],
    center_coords: [47.1660, 9.5554],
    zoom_level: 9,
    population: '40,000',
    area_sqkm: '160 km²',
    gdp_billion: 7.2,
    main_exports: {
      en: ['Power Fastening & Anchoring Systems (Hilti, $2.1B)', 'High-Tech Dental Prosthetics (Ivoclar, $840M)', 'Precision Measuring Instruments ($620M)', 'Specialty Coatings ($480M)'],
      es: ['Sistemas de fijación y perforación para construcción (Hilti, $2.1B)', 'Prótesis dentales de alta tecnología (Ivoclar, $840M)', 'Instrumental de precisión ($620M)', 'Recubrimientos técnicos ($480M)'],
      total_val_billion: 3.8,
    },
    main_imports: {
      en: ['Precious Metals ($680M)', 'Machinery ($520M)', 'Vehicles ($340M)', 'Chemicals ($280M)'],
      es: ['Metales preciosos ($680M)', 'Maquinaria ($520M)', 'Vehículos ($340M)', 'Químicos ($280M)'],
      total_val_billion: 2.4,
    },
    natural_wealth: {
      en: ['Rhine River upper valley fertile alluvial basin', 'Rhaetian Alps mountain terrain', 'Hydropower and alpine forestry'],
      es: ['Valle aluvial fértil del Alto Rin', 'Macizo de los Alpes Réticos', 'Aprovechamiento hidroeléctrico y forestal'],
    },
    physical_geography_summary: {
      en: 'A doubly landlocked alpine microstate bordered by Switzerland to the west and south and Austria to the east, spanning the eastern floodplain of the Rhine River and the Rhaetian Alps.',
      es: 'Microestado alpino doblemente sin salida al mar (rodeado exclusivamente por países sin mar: Suiza y Austria), situado en la orilla este del río Rin.'
    },
    landforms: [
      {
        id: 'li-peak-grauspitz',
        type: 'peak',
        name_en: 'Vorder Grauspitz',
        name_es: 'Grauspitz',
        coords: [47.0531, 9.5828],
        elevation_m: 2599,
        description_en: 'Highest peak in the Principality of Liechtenstein, located in the Rhaetian Alps on the border with Switzerland.',
        description_es: 'El punto más alto de Liechtenstein (2.599m), en los Alpes Réticos en la frontera con Suiza.'
      }
    ],
    interesting_fact: {
      en: 'Liechtenstein is one of only two "doubly landlocked" countries in the world (the other being Uzbekistan), meaning a citizen must cross at least two national borders to reach the ocean.',
      es: 'Liechtenstein es uno de los dos únicos países "doblemente mediterráneos" del mundo (junto con Uzbekistán): está rodeado por países que tampoco tienen salida al mar (Suiza y Austria).'
    },
    teks_alignment: ['TEKS 6.7A: Geographic definition of doubly landlocked states', 'TEKS 6.6B: Niche precision engineering clusters']
  },

  // =========================================================================
  // 41. SAN MARINO (San Marino)
  // =========================================================================
  {
    id: 'SMR',
    iso2: 'sm',
    iso3: 'SMR',
    name_en: 'San Marino',
    name_es: 'San Marino',
    continent: 'Europe',
    continent_es: 'Europa',
    capital_en: 'San Marino',
    capital_es: 'San Marino',
    capital_coords: [43.9424, 12.4578],
    center_coords: [43.9424, 12.4578],
    zoom_level: 10,
    population: '34,000',
    area_sqkm: '61 km²',
    gdp_billion: 1.8,
    main_exports: {
      en: ['Washing & Bottling Machinery ($380M)', 'Ceramics & Building Tiles ($240M)', 'Specialty Wines & Spirits ($120M)', 'Collectors’ Stamps & Coins ($85M)'],
      es: ['Maquinaria de envasado ($380M)', 'Cerámica y azulejos ($240M)', 'Vinos y licores ($120M)', 'Monedas y sellos para coleccionistas ($85M)'],
      total_val_billion: 1.2,
    },
    main_imports: {
      en: ['Electricity & Gas ($320M)', 'Cars & Parts ($240M)', 'Foodstuffs ($180M)'],
      es: ['Electricidad y gas ($320M)', 'Autos y piezas ($240M)', 'Alimentos ($180M)'],
      total_val_billion: 1.4,
    },
    natural_wealth: {
      en: ['Monte Titano limestone ridge providing natural mountain fortification', 'Fertile Apennine foothills for vineyards and olive groves'],
      es: ['Macizo calizo del Monte Titano como fortaleza defensiva natural', 'Colinas de los Apeninos aptas para viñedos y olivos'],
    },
    physical_geography_summary: {
      en: 'A completely landlocked enclave surrounded entirely by central Italy, dominated by the three-crested limestone ridge of Monte Titano overlooking the Adriatic coast.',
      es: 'Estado enclave completamente rodeado por Italia, dominado por el imponente bloque calizo del Monte Titano a pocos kilómetros del mar Adriático.'
    },
    landforms: [
      {
        id: 'sm-peak-titano',
        type: 'peak',
        name_en: 'Monte Titano',
        name_es: 'Monte Titano',
        coords: [43.9333, 12.4500],
        elevation_m: 739,
        description_en: 'Three-crested limestone mountain crowning San Marino, crowned by three medieval fortress towers (Guaita, Cesta, Montale).',
        description_es: 'Monte calizo coronado por las tres famosas torres medievales defensivas de San Marino.'
      }
    ],
    interesting_fact: {
      en: 'Founded in 301 AD by Saint Marinus, San Marino is widely recognized as the world’s oldest continuously existing sovereign republic and has the oldest active constitution (dating from 1600).',
      es: 'Fundada en el año 301 d.C., San Marino es la república constitucional más antigua del mundo que aún sobrevive de forma ininterrumpida.'
    },
    teks_alignment: ['TEKS 6.7A: Enclave nations and historic survival strategies', 'TEKS 5.7A: Limestone ridge landforms']
  },

  // =========================================================================
  // 42. CIUDAD DEL VATICANO (Vatican City)
  // =========================================================================
  {
    id: 'VAT',
    iso2: 'va',
    iso3: 'VAT',
    name_en: 'Vatican City',
    name_es: 'Ciudad del Vaticano',
    continent: 'Europe',
    continent_es: 'Europa',
    capital_en: 'Vatican City',
    capital_es: 'Ciudad del Vaticano',
    capital_coords: [41.9029, 12.4534],
    center_coords: [41.9029, 12.4534],
    zoom_level: 13,
    population: '800',
    area_sqkm: '0.49 km²',
    gdp_billion: 0.8,
    main_exports: {
      en: ['Commemorative Coins & Euro Medals ($24M)', 'Postage Stamps ($18M)', 'Scholarly Publications & Media ($42M)', 'Museum Admission & Cultural Heritage ($120M)'],
      es: ['Monedas conmemorativas de euro ($24M)', 'Sellos postales para coleccionismo ($18M)', 'Publicaciones editoriales y medios ($42M)', 'Entradas a los Museos Vaticanos ($120M)'],
      total_val_billion: 0.2,
    },
    main_imports: {
      en: ['Electricity ($18M)', 'Water & Utilities ($12M)', 'Foodstuffs ($24M)', 'Printed Paper ($14M)'],
      es: ['Electricidad ($18M)', 'Agua y suministros ($12M)', 'Alimentos ($24M)', 'Papel de imprenta ($14M)'],
      total_val_billion: 0.15,
    },
    natural_wealth: {
      en: ['Vatican Hill historic promontory above the Tiber River', 'Vatican Gardens covering more than half of the national territory', 'Incalculable artistic and cultural heritage (St. Peter’s Basilica, Sistine Chapel)'],
      es: ['Colina Vaticana histórica sobre la margen derecha del río Tíber', 'Jardines Vaticanos que ocupan más de la mitad del territorio nacional', 'Patrimonio artístico universal de la Basílica de San Pedro y Capilla Sixtina'],
    },
    physical_geography_summary: {
      en: 'The smallest independent sovereign state in the world by both area (49 hectares) and population, an urban walled enclave situated entirely within the city of Rome, Italy.',
      es: 'El estado independiente más pequeño del mundo tanto en superficie (49 hectáreas) como en población, enclave urbano amurallado dentro de la ciudad de Roma.'
    },
    landforms: [
      {
        id: 'va-peak-vaticanhill',
        type: 'peak',
        name_en: 'Vatican Hill (Mons Vaticanus)',
        name_es: 'Colina Vaticana (Mons Vaticanus)',
        coords: [41.9039, 41.4500],
        elevation_m: 75,
        description_en: 'Historic hill on the west bank of the Tiber River, the geographical elevation upon which Vatican City is built.',
        description_es: 'Colina histórica en la orilla derecha del río Tíber sobre la que se asienta el estado vaticano.'
      }
    ],
    interesting_fact: {
      en: 'Vatican City is the only complete sovereign country in the world to be declared in its entirety as a UNESCO World Heritage Site.',
      es: 'La Ciudad del Vaticano es el único país soberano del mundo declarado en su totalidad como Patrimonio de la Humanidad por la UNESCO.'
    },
    teks_alignment: ['TEKS 6.7A: Enclave microstates and sovereign international recognition', 'TEKS 6.4C: Urban geography and religious administrative centers']
  },

  // =========================================================================
  // 43. KOSOVO (Kosovo)
  // =========================================================================
  {
    id: 'XKX',
    iso2: 'xk',
    iso3: 'XKX',
    name_en: 'Kosovo',
    name_es: 'Kosovo',
    continent: 'Europe',
    continent_es: 'Europa',
    capital_en: 'Pristina',
    capital_es: 'Pristina',
    capital_coords: [42.6629, 21.1655],
    center_coords: [42.6026, 20.9030],
    zoom_level: 8,
    population: '1,800,000',
    area_sqkm: '10,887 km²',
    gdp_billion: 10,
    main_exports: {
      en: ['Base Metals & Zinc Concentrates ($320M)', 'Scrap Metal & Iron ($180M)', 'Wood Furniture & Fixtures ($140M)', 'Plastics & Rubber ($120M)', 'Beverages & Wine ($65M)'],
      es: ['Metales básicos y zinc ($320M)', 'Chatarra de hierro y acero ($180M)', 'Muebles de madera ($140M)', 'Plásticos ($120M)', 'Bebidas y vino ($65M)'],
      total_val_billion: 1.1,
    },
    main_imports: {
      en: ['Refined Petroleum ($640M)', 'Cars & Vehicle Parts ($520M)', 'Electricity ($380M)', 'Foodstuffs ($720M)'],
      es: ['Petróleo refinado ($640M)', 'Autos y repuestos ($520M)', 'Electricidad ($380M)', 'Alimentos ($720M)'],
      total_val_billion: 5.6,
    },
    natural_wealth: {
      en: ['Trepča mining complex (historically one of Europe’s richest deposits of lead, zinc, and silver)', 'Vast lignite coal reserves (world’s fifth-largest reserves)', 'Fertile agricultural basins of Kosovo and Metohija (Dukagjini)', 'Rugova Canyon mountain waters'],
      es: ['Complejo minero de Trepča (rico en plomo, zinc y plata)', 'Quintas mayores reservas mundiales de lignito', 'Cuencas agrícolas fértiles de Kosovo y Dukagjini', 'Cañón de Rugova y aguas de montaña'],
    },
    physical_geography_summary: {
      en: 'A landlocked basin in the center of the Balkans surrounded by mountain chains: the Accursed Mountains (Prokletije) in the west and the Šar Mountains in the south.',
      es: 'Cuenca cerrada sin litoral en el centro de los Balcanes rodeada por murallas montañosas: los montes Prokletije al oeste y los montes Šar al sur.'
    },
    landforms: [
      {
        id: 'xk-peak-gjeravica',
        type: 'peak',
        name_en: 'Gjeravica',
        name_es: 'Gjeravica',
        coords: [42.5317, 20.1406],
        elevation_m: 2656,
        description_en: 'Highest mountain peak in Kosovo, located in the Accursed Mountains (Prokletije) near the border with Albania.',
        description_es: 'La cumbre más alta de Kosovo (2.656m), en la cordillera de Prokletije cerca de la frontera con Albania.'
      },
      {
        id: 'xk-valley-rugova',
        type: 'valley',
        name_en: 'Rugova Canyon',
        name_es: 'Cañón de Rugova',
        coords: [42.7000, 20.1500],
        description_en: 'Spectacular 25-km long river gorge carved up to 1,000 meters deep by the Peć Bistrica river.',
        description_es: 'Desfiladero de 25 km de longitud esculpido hasta 1.000m de profundidad por el río Peć Bistrica.'
      }
    ],
    interesting_fact: {
      en: 'Kosovo possesses approximately 14 billion metric tons of proven lignite coal reserves, representing the fifth largest exploitable lignite deposit on planet Earth.',
      es: 'Kosovo alberga unas 14.000 millones de toneladas de reservas de lignito, situándose como la quinta mayor reserva de este mineral en el planeta.'
    },
    teks_alignment: ['TEKS 6.6B: Mining extraction and thermal energy', 'TEKS 5.7A: Karst canyon and valley formation']
  },

  // =========================================================================
  // 44. RUSIA (Sector Europeo)
  // =========================================================================
  {
    id: 'RUS',
    iso2: 'ru',
    iso3: 'RUS',
    name_en: 'Russia',
    name_es: 'Rusia',
    continent: 'Europe',
    continent_es: 'Europa',
    capital_en: 'Moscow',
    capital_es: 'Moscú',
    capital_coords: [55.7558, 37.6173],
    center_coords: [55.7558, 49.0000],
    zoom_level: 4,
    population: '110,000,000',
    area_sqkm: '3,960,000 km²',
    gdp_billion: 2020,
    main_exports: {
      en: ['Crude Petroleum & Gas ($142B)', 'Refined Petroleum ($54B)', 'Wheat & Grains (World leader, $14B)', 'Fertilizers ($12B)', 'Nickel, Platinum & Gold ($18B)'],
      es: ['Petróleo crudo y gas natural ($142B)', 'Petróleo refinado ($54B)', 'Trigo y cereales (Líder mundial, $14B)', 'Fertilizantes nitrogenados y potásicos ($12B)', 'Níquel, platino y oro ($18B)'],
      total_val_billion: 420,
    },
    main_imports: {
      en: ['Cars & Automotive Parts ($28B)', 'Computers & Integrated Circuits ($22B)', 'Machinery ($34B)', 'Packaged Medicaments ($12B)'],
      es: ['Autos y autopartes ($28B)', 'Computadoras y microchips ($22B)', 'Maquinaria industrial ($34B)', 'Medicamentos envasados ($12B)'],
      total_val_billion: 300,
    },
    natural_wealth: {
      en: ['Volga-Ural petroleum and natural gas basin', 'Volga River (Europe’s longest and largest river system)', 'Lake Ladoga (Europe’s largest freshwater lake)', 'Vast black-soil chernozem belt in southern European Russia'],
      es: ['Cuenca de hidrocarburos del Volga-Urales', 'Río Volga (el río más largo y caudaloso de Europa)', 'Lago Ládoga (el lago de agua dulce más grande de Europa)', 'Cinturón de tierra negra chernozem en el sur ruso'],
    },
    physical_geography_summary: {
      en: 'The European sector of Russia covers the vast East European Plain, stretching from the Baltic and Arctic Seas in the north to the Black Sea and high Caucasus Mountains in the south, bounded in the east by the Ural Mountains.',
      es: 'Abarca la inmensa Gran Llanura Europea Oriental, extendiéndose desde los mares Báltico y Ártico en el norte hasta el Mar Negro y la cordillera del Cáucaso al sur, con los Montes Urales como límite oriental de Europa.'
    },
    landforms: [
      {
        id: 'ru-peak-elbrus',
        type: 'volcano',
        name_en: 'Mount Elbrus',
        name_es: 'Monte Elbrús (Cáucaso)',
        coords: [43.3499, 42.4453],
        elevation_m: 5642,
        description_en: 'Dormant twin-peaked stratovolcano and the undisputed highest mountain peak in the entire European continent.',
        description_es: 'Estratovolcán inactivo y la montaña más alta del continente europeo (5.642m), en la cordillera del Cáucaso.'
      },
      {
        id: 'ru-river-volga',
        type: 'river',
        name_en: 'Volga River',
        name_es: 'Río Volga',
        coords: [45.8333, 47.9000],
        length_km: 3530,
        description_en: 'The longest river in Europe and the national river of Russia, flowing through eleven of Russia’s twenty largest cities into the Caspian Sea.',
        description_es: 'El río más largo y caudaloso de Europa (3.530 km), considerado la columna vertebral fluvial de Rusia.'
      },
      {
        id: 'ru-lake-ladoga',
        type: 'lake',
        name_en: 'Lake Ladoga',
        name_es: 'Lago Ládoga',
        coords: [61.0000, 31.5000],
        elevation_m: 5,
        description_en: 'The largest freshwater lake in Europe (17,700 km²), situated in northwestern Russia near Saint Petersburg.',
        description_es: 'El lago de agua dulce más extenso de Europa (17.700 km²), en el noroeste de Rusia.'
      }
    ],
    interesting_fact: {
      en: 'The Volga River carries approximately two-thirds of all Russian commercial river freight and is the longest river in Europe (3,530 km), yet it empties into the enclosed, landlocked Caspian Sea rather than an open ocean.',
      es: 'El río Volga es el más largo y caudaloso de Europa (3.530 km) y transporta dos tercios del tráfico fluvial ruso, desembocando en el Mar Caspio (el mar interior cerrado más grande del mundo).'
    },
    teks_alignment: ['TEKS 6.4A: East European Plain and Volga river transportation', 'TEKS 6.3C: Caucasus tectonic boundary separating Europe and Asia']
  }
];
