import { CountryDossierData } from '../types/geography';
import { ALL_AMERICAS_ADDITIONAL_COUNTRIES } from './americasCountriesData';
import { ALL_EUROPE_ADDITIONAL_COUNTRIES } from './europeCountriesData';
import { ALL_ASIA_ADDITIONAL_COUNTRIES } from './asiaCountriesData';

const BASE_COUNTRIES: CountryDossierData[] = [
  {
    id: 'USA',
    iso2: 'us',
    iso3: 'USA',
    name_en: 'United States',
    name_es: 'Estados Unidos',
    continent: 'North America',
    continent_es: 'América del Norte',
    capital_en: 'Washington, D.C.',
    capital_es: 'Washington, D.C.',
    capital_coords: [38.9072, -77.0369],
    center_coords: [39.8283, -98.5795],
    zoom_level: 4,
    population: '335,000,000',
    area_sqkm: '9,833,517 km²',
    gdp_billion: 27360,
    main_exports: {
      en: ['Refined Petroleum ($115B)', 'Crude Petroleum ($111B)', 'Integrated Circuits ($62B)', 'Aircraft & Parts ($58B)', 'Soybeans ($34B)'],
      es: ['Petróleo refinado ($115B)', 'Petróleo crudo ($111B)', 'Circuitos integrados ($62B)', 'Aeronaves y repuestos ($58B)', 'Soya ($34B)'],
      total_val_billion: 2060
    },
    main_imports: {
      en: ['Cars & Vehicles ($160B)', 'Computers ($120B)', 'Pharmaceuticals ($95B)', 'Broadcasting Equipment ($88B)'],
      es: ['Automóviles y vehículos ($160B)', 'Computadoras ($120B)', 'Productos farmacéuticos ($95B)', 'Equipos de transmisión ($88B)'],
      total_val_billion: 3120
    },
    natural_wealth: {
      en: ['Vast arable Great Plains soil', 'Appalachian & Powder River coal basins', 'Permian Basin shale oil & natural gas', 'Great Lakes freshwater reservoir', 'Timber and copper reserves'],
      es: ['Suelo fértil en las Grandes Llanuras', 'Cuencas de carbón en los Apalaches', 'Petróleo y gas de esquisto en la Cuenca Pérmica', 'Reserva de agua dulce de los Grandes Lagos', 'Madera y cobre']
    },
    physical_geography_summary: {
      en: 'Diverse terrain spanning coastal plains in the East, the rugged Appalachian and Rocky Mountain ranges, the vast fertile Interior Plains, and arid southwestern deserts.',
      es: 'Terreno diverso que abarca llanuras costeras en el este, cordilleras de los Apalaches y Rocosas, extensas llanuras interiores fértiles y desiertos áridos en el suroeste.'
    },
    landforms: [
      {
        id: 'us-river-mississippi',
        type: 'river',
        name_en: 'Mississippi River',
        name_es: 'Río Misisipi',
        coords: [29.1522, -89.2526],
        length_km: 3766,
        description_en: 'Major North American drainage basin acting as an economic superhighway for agricultural exports.',
        description_es: 'Principal cuenca hidrográfica de Norteamérica, autopista económica para exportaciones agrícolas.'
      },
      {
        id: 'us-peak-denali',
        type: 'peak',
        name_en: 'Denali',
        name_es: 'Denali',
        coords: [63.0692, -151.0070],
        elevation_m: 6190,
        description_en: 'Highest mountain peak in North America, located in the Alaska Range.',
        description_es: 'El pico montañoso más alto de América del Norte, ubicado en la cordillera de Alaska.'
      },
      {
        id: 'us-lake-superior',
        type: 'lake',
        name_en: 'Lake Superior',
        name_es: 'Lago Superior',
        coords: [47.7, -87.5],
        description_en: 'World’s largest freshwater lake by surface area (82,100 km²), shared with Canada.',
        description_es: 'El lago de agua dulce más grande del mundo por superficie (82,100 km²), compartido con Canadá.'
      },
      {
        id: 'us-desert-mojave',
        type: 'desert',
        name_en: 'Mojave Desert',
        name_es: 'Desierto de Mojave',
        coords: [35.011, -115.4734],
        description_en: 'Arid rain-shadow desert containing Death Valley, the lowest elevation in North America (-86m).',
        description_es: 'Desierto árido de sombra orográfica que alberga el Valle de la Muerte (-86m).'
      },
      {
        id: 'us-volcano-sthelens',
        type: 'volcano',
        name_en: 'Mount St. Helens',
        name_es: 'Monte Santa Helena',
        coords: [46.1914, -122.1956],
        elevation_m: 2549,
        description_en: 'Active stratovolcano in the Pacific Cascade Volcanic Arc that famously erupted in 1980.',
        description_es: 'Estratovolcán activo en el Arco Volcánico de las Cascadas que erupcionó en 1980.'
      }
    ],
    interesting_fact: {
      en: 'The Mississippi-Missouri river system forms the fourth-longest river system on Earth, draining parts of 31 US states and 2 Canadian provinces.',
      es: 'El sistema fluvial Misisipi-Misuri es el cuarto más largo de la Tierra y drena 31 estados de EE.UU. y 2 provincias canadienses.'
    },
    teks_alignment: ['TEKS 5.6A: Physical geographic regions of North America', 'TEKS 6.3B: Human adaptation to river drainage basins and plains']
  },
  {
    id: 'VEN',
    iso2: 've',
    iso3: 'VEN',
    name_en: 'Venezuela',
    name_es: 'Venezuela',
    continent: 'South America',
    continent_es: 'América del Sur',
    capital_en: 'Caracas',
    capital_es: 'Caracas',
    capital_coords: [10.4806, -66.9036],
    center_coords: [6.4238, -66.5897],
    zoom_level: 6,
    population: '28,800,000',
    area_sqkm: '916,445 km²',
    gdp_billion: 102,
    main_exports: {
      en: ['Crude Petroleum ($3.4B)', 'Scrap Metal ($340M)', 'Acyclic Alcohols ($280M)', 'Gold ($180M)'],
      es: ['Petróleo crudo ($3.4B)', 'Chatarra de metales ($340M)', 'Alcoholes acíclicos ($280M)', 'Oro ($180M)'],
      total_val_billion: 4.8
    },
    main_imports: {
      en: ['Refined Petroleum / Diluents ($1.2B)', 'Milled Rice ($410M)', 'Corn ($390M)', 'Packaged Medicaments ($310M)'],
      es: ['Petróleo refinado / Diluyentes ($1.2B)', 'Arroz descascarillado ($410M)', 'Maíz ($390M)', 'Medicamentos envasados ($310M)'],
      total_val_billion: 8.5
    },
    natural_wealth: {
      en: ['Orinoco Belt extra-heavy crude oil (largest proven reserves in the world: ~303 billion barrels)', 'Bauxite and iron ore in Guayana Shield', 'Hydroelectric capacity (Guri Dam on Caroní River)', 'Biodiverse Amazonian flora and fauna'],
      es: ['Faja Petrolífera del Orinoco (mayores reservas probadas del mundo: ~303 mil millones de barriles)', 'Bauxita y mineral de hierro en el Escudo Guayanés', 'Capacidad hidroeléctrica (Represa del Guri)', 'Biodiversidad amazónica']
    },
    physical_geography_summary: {
      en: 'Four distinct physical regions: the coastal Andean cordillera in the north, the vast Llanos savannah plains, the Caribbean maritime coast, and the dramatic ancient Tepui tablemountains in the Guiana Highlands.',
      es: 'Cuatro regiones físicas: la cordillera andina costera en el norte, los extensos Llanos del Orinoco, la costa caribeña y los imponentes tepuyes milenarios del Escudo Guayanés.'
    },
    landforms: [
      {
        id: 've-peak-bolivar',
        type: 'peak',
        name_en: 'Pico Bolívar',
        name_es: 'Pico Bolívar',
        coords: [8.5417, -71.0483],
        elevation_m: 4978,
        description_en: 'Highest peak in Venezuela, located in the Sierra Nevada de Mérida range.',
        description_es: 'Pico más alto de Venezuela, ubicado en el Parque Nacional Sierra Nevada de Mérida.'
      },
      {
        id: 've-river-orinoco',
        type: 'river',
        name_en: 'Orinoco River',
        name_es: 'Río Orinoco',
        coords: [8.5583, -62.5833],
        length_km: 2140,
        description_en: 'One of South America’s longest rivers, with a colossal delta emptying into the Atlantic Ocean.',
        description_es: 'Uno de los ríos más largos de Sudamérica, con un gigantesco delta que desemboca en el Atlántico.'
      },
      {
        id: 've-lake-maracaibo',
        type: 'lake',
        name_en: 'Lake Maracaibo',
        name_es: 'Lago de Maracaibo',
        coords: [9.8, -71.56],
        description_en: 'Large tidal bay/inlet opening to the Caribbean Sea, rich with underwater petroleum wells and famous for Catatumbo lightning.',
        description_es: 'Gran ensenada mareal conectada al Caribe, rica en pozos petroleros submarinos y famosa por los relámpagos del Catatumbo.'
      },
      {
        id: 've-plateau-tepui',
        type: 'plateau',
        name_en: 'Auyán-tepui (Angel Falls)',
        name_es: 'Auyantepuy (Salto Ángel)',
        coords: [5.9675, -62.5356],
        elevation_m: 2450,
        description_en: 'Precambrian flat-topped table mountain yielding Angel Falls (979m), the highest uninterrupted waterfall on Earth.',
        description_es: 'Meseta precámbrica de cumbre plana de donde desciende el Salto Ángel (979m), la cascada ininterrumpida más alta del planeta.'
      }
    ],
    interesting_fact: {
      en: 'Venezuela holds the world’s largest proven crude oil reserves (surpassing Saudi Arabia), yet its heavy sour crude requires specialized diluents for refining.',
      es: 'Venezuela posee las mayores reservas probadas de petróleo del mundo (superando a Arabia Saudita), aunque su crudo extrapesado requiere diluyentes para procesarse.'
    },
    teks_alignment: ['TEKS 6.4B: Distribution of natural resources in Latin America', 'TEKS 6.5A: Economic interdependency and extraction economies']
  },
  {
    id: 'SAU',
    iso2: 'sa',
    iso3: 'SAU',
    name_en: 'Saudi Arabia',
    name_es: 'Arabia Saudita',
    continent: 'Asia',
    continent_es: 'Asia',
    capital_en: 'Riyadh',
    capital_es: 'Riad',
    capital_coords: [24.7136, 46.6753],
    center_coords: [23.8859, 45.0792],
    zoom_level: 5,
    population: '36,500,000',
    area_sqkm: '2,149,690 km²',
    gdp_billion: 1108,
    main_exports: {
      en: ['Crude Petroleum ($236B)', 'Refined Petroleum ($45B)', 'Ethylene Polymers ($12B)', 'Propylene ($6B)'],
      es: ['Petróleo crudo ($236B)', 'Petróleo refinado ($45B)', 'Polímeros de etileno ($12B)', 'Propileno ($6B)'],
      total_val_billion: 322
    },
    main_imports: {
      en: ['Cars ($15B)', 'Broadcasting Equipment ($7B)', 'Refined Petroleum ($6B)', 'Gold ($5B)', 'Wheat & Barley ($3B)'],
      es: ['Automóviles ($15B)', 'Equipos de transmisión ($7B)', 'Petróleo refinado ($6B)', 'Oro ($5B)', 'Trigo y cebada ($3B)'],
      total_val_billion: 195
    },
    natural_wealth: {
      en: ['Ghawar oil field (world’s largest onshore conventional field)', 'Abundant solar irradiation in the Arabian desert', 'Natural gas reserves', 'Phosphates and gold in the Arabian Shield'],
      es: ['Campo petrolífero de Ghawar (el más grande del mundo en tierra firme)', 'Radiación solar extrema en el desierto arábigo', 'Reservas de gas natural', 'Fosfatos y oro en el Escudo Arábigo']
    },
    physical_geography_summary: {
      en: 'Occupies about 80% of the Arabian Peninsula, predominantly hyper-arid desert plateau without permanent perennial rivers. Bordered by the Red Sea to the west and Persian Gulf to the east.',
      es: 'Ocupa cerca del 80% de la Península Arábiga, predominantemente meseta desértica hiperárida sin ríos perennes superficiales. Limita con el Mar Rojo y el Golfo Pérsico.'
    },
    landforms: [
      {
        id: 'sa-desert-rubalkhali',
        type: 'desert',
        name_en: "Rub' al Khali (Empty Quarter)",
        name_es: 'Rub al-Jali (Cuadrante Vacío)',
        coords: [20.0, 50.0],
        description_en: 'The world’s largest contiguous sand desert (erg), featuring dunes over 250m high.',
        description_es: 'El desierto de arena continua (erg) más grande del mundo, con dunas de más de 250m.'
      },
      {
        id: 'sa-peak-sauda',
        type: 'peak',
        name_en: 'Jabal Sawda',
        name_es: 'Jabal Sawda',
        coords: [18.2667, 42.3667],
        elevation_m: 3000,
        description_en: 'Highest peak in Saudi Arabia, situated in the rugged Asir Mountains along the Red Sea rift.',
        description_es: 'Punto más alto de Arabia Saudita, en los montes Asir junto a la falla del Mar Rojo.'
      },
      {
        id: 'sa-volcano-alwahbah',
        type: 'volcano',
        name_en: 'Al Wahbah Crater',
        name_es: 'Cráter Al Wahbah',
        coords: [22.9014, 41.1394],
        elevation_m: 250,
        description_en: 'Massive volcanic maar crater with a white salt dome floor caused by subterranean phreatic steam explosions.',
        description_es: 'Cráter volcánico tipo maar con domo de sal blanco originado por explosiones freáticas subterráneas.'
      },
      {
        id: 'sa-strait-bab',
        type: 'strait',
        name_en: 'Bab-el-Mandeb / Red Sea Corridor',
        name_es: 'Mar Rojo / Estrecho de Bab-el-Mandeb',
        coords: [12.5833, 43.3333],
        description_en: 'Vital maritime choke point connecting the Indian Ocean to the Red Sea and Suez Canal.',
        description_es: 'Punto de estrangulamiento marítimo crucial que conecta el Índico con el Canal de Suez.'
      }
    ],
    interesting_fact: {
      en: 'Saudi Arabia has no permanent rivers or natural lakes; over 50% of its domestic drinking water is generated via massive desalination plants powered by oil and gas.',
      es: 'Arabia Saudita no posee ríos permanentes ni lagos naturales; más del 50% de su agua potable proviene de plantas desalinizadoras gigantescas.'
    },
    teks_alignment: ['TEKS 6.4C: Physical factors influencing human settlement in arid climates', 'TEKS 6.8A: Global strategic shipping choke points']
  },
  {
    id: 'BOL',
    iso2: 'bo',
    iso3: 'BOL',
    name_en: 'Bolivia',
    name_es: 'Bolivia',
    continent: 'South America',
    continent_es: 'América del Sur',
    capital_en: 'La Paz & Sucre',
    capital_es: 'La Paz y Sucre',
    capital_coords: [-16.5, -68.15],
    center_coords: [-16.2902, -63.5887],
    zoom_level: 6,
    population: '12,200,000',
    area_sqkm: '1,098,581 km²',
    gdp_billion: 46,
    main_exports: {
      en: ['Natural Gas ($3.1B)', 'Gold ($2.8B)', 'Zinc Ores ($1.8B)', 'Soybean Meal ($1.1B)', 'Lithium compounds'],
      es: ['Gas natural ($3.1B)', 'Oro ($2.8B)', 'Minerales de zinc ($1.8B)', 'Harina de soya ($1.1B)', 'Litio'],
      total_val_billion: 13.6
    },
    main_imports: {
      en: ['Refined Petroleum ($2.4B)', 'Cars and Trucks ($780M)', 'Pesticides ($340M)', 'Bars of Iron ($290M)'],
      es: ['Petróleo refinado ($2.4B)', 'Autos y camiones ($780M)', 'Pesticidas ($340M)', 'Barras de hierro ($290M)'],
      total_val_billion: 12.9
    },
    natural_wealth: {
      en: ['Salar de Uyuni lithium brine deposit (part of the South American Lithium Triangle)', 'Tin and silver mines at Cerro Rico (Potosí)', 'Natural gas fields in the Gran Chaco lowlands'],
      es: ['Salar de Uyuni (mayor reserva de litio del mundo en el Triángulo del Litio)', 'Minas de estaño y plata de Cerro Rico en Potosí', 'Yacimientos de gas natural en el Chaco']
    },
    physical_geography_summary: {
      en: 'A landlocked South American nation defined by the windswept high-altitude Andean Altiplano in the west and humid Amazonian and Chaco lowlands in the north and east.',
      es: 'Nación sudamericana sin salida al mar caracterizada por el Altiplano andino de gran altitud al oeste y las llanuras húmedas de la Amazonía y el Chaco al este.'
    },
    landforms: [
      {
        id: 'bo-lake-titicaca',
        type: 'lake',
        name_en: 'Lake Titicaca',
        name_es: 'Lago Titicaca',
        coords: [-15.8, -69.4],
        elevation_m: 3812,
        description_en: 'Highest navigable lake in the world, shared between Bolivia and Peru in the Andes Altiplano.',
        description_es: 'El lago navegable más alto del mundo (3,812m), compartido entre Bolivia y Perú.'
      },
      {
        id: 'bo-peak-sajama',
        type: 'volcano',
        name_en: 'Nevado Sajama',
        name_es: 'Nevado Sajama',
        coords: [-18.1083, -68.8833],
        elevation_m: 6542,
        description_en: 'Extinct stratovolcano and the highest peak in Bolivia, crowned with permanent glacial ice.',
        description_es: 'Estratovolcán extinto y el punto más alto de Bolivia (6,542m), coronado por glaciares.'
      },
      {
        id: 'bo-desert-uyuni',
        type: 'desert',
        name_en: 'Salar de Uyuni',
        name_es: 'Salar de Uyuni',
        coords: [-20.1338, -67.4891],
        elevation_m: 3656,
        description_en: 'World’s largest salt flat (10,582 km²), holding an estimated 21 million metric tons of lithium reserves.',
        description_es: 'El salar continuo más grande del mundo (10,582 km²), con 21 millones de toneladas de litio.'
      }
    ],
    interesting_fact: {
      en: 'La Paz is the highest administrative capital city in the world at approximately 3,640 meters (11,942 ft) above sea level.',
      es: 'La Paz es la sede de gobierno más alta del mundo a 3,640 metros sobre el nivel del mar.'
    },
    teks_alignment: ['TEKS 6.3A: Geographic factors leading to landlocked nation challenges', 'TEKS 6.6B: Mining and clean energy mineral distribution']
  },
  {
    id: 'BRA',
    iso2: 'br',
    iso3: 'BRA',
    name_en: 'Brazil',
    name_es: 'Brasil',
    continent: 'South America',
    continent_es: 'América del Sur',
    capital_en: 'Brasília',
    capital_es: 'Brasilia',
    capital_coords: [-15.7975, -47.8919],
    center_coords: [-14.235, -51.9253],
    zoom_level: 4,
    population: '216,000,000',
    area_sqkm: '8,515,767 km²',
    gdp_billion: 2174,
    main_exports: {
      en: ['Soybeans ($53B)', 'Crude Petroleum ($42B)', 'Iron Ore ($30B)', 'Raw Sugar ($11B)', 'Poultry Meat ($9B)'],
      es: ['Soya ($53B)', 'Petróleo crudo ($42B)', 'Mineral de hierro ($30B)', 'Azúcar cruda ($11B)', 'Carne de ave ($9B)'],
      total_val_billion: 340
    },
    main_imports: {
      en: ['Refined Petroleum ($14B)', 'Mixed Fertilizers ($11B)', 'Vehicle Parts ($8B)', 'Integrated Circuits ($6B)'],
      es: ['Petróleo refinado ($14B)', 'Fertilizantes compuestos ($11B)', 'Autopartes ($8B)', 'Circuitos integrados ($6B)'],
      total_val_billion: 272
    },
    natural_wealth: {
      en: ['Amazon Rainforest (Earth’s largest biodiversity and carbon sink)', 'Carajás Iron Ore mine (world’s purest iron deposits)', 'Pre-salt offshore oil reserves in Santos Basin', 'Abundant river basins for 65%+ hydroelectricity'],
      es: ['Selva Amazónica (mayor reserva de biodiversidad y sumidero de carbono)', 'Mina Carajás (mayor depósito de hierro de alta pureza)', 'Yacimientos petrolíferos del presal', 'Cuencas fluviales con 65%+ de energía hidroeléctrica']
    },
    physical_geography_summary: {
      en: 'Dominated by the massive Amazon River Basin in the north and the extensive Brazilian Highlands and Atlantic coast in the south and east.',
      es: 'Dominado por la colosal cuenca del río Amazonas en el norte y la meseta brasileña con la costa atlántica en el centro y sur.'
    },
    landforms: [
      {
        id: 'br-river-amazon',
        type: 'river',
        name_en: 'Amazon River',
        name_es: 'Río Amazonas',
        coords: [-0.0389, -51.0506],
        length_km: 6400,
        description_en: 'The largest river in the world by discharge volume, carrying greater water volume than the next 7 largest rivers combined.',
        description_es: 'El río más caudaloso del mundo, supera en volumen a los siguientes 7 ríos combinados.'
      },
      {
        id: 'br-peak-neblina',
        type: 'peak',
        name_en: 'Pico da Neblina',
        name_es: 'Pico da Neblina',
        coords: [0.8033, -66.0044],
        elevation_m: 2995,
        description_en: 'The highest point in Brazil, perpetually shrouded in cloud cover near the Venezuelan border.',
        description_es: 'El punto más alto de Brasil (2,995m), casi siempre cubierto de densas nubes.'
      },
      {
        id: 'br-bay-guanabara',
        type: 'bay',
        name_en: 'Guanabara Bay',
        name_es: 'Bahía de Guanabara',
        coords: [-22.84, -43.14],
        description_en: 'Natural oceanic bay framing Rio de Janeiro and Sugarloaf Mountain.',
        description_es: 'Bahía oceánica natural que enmarca la ciudad de Río de Janeiro y el Pan de Azúcar.'
      }
    ],
    interesting_fact: {
      en: 'The Amazon River outputs approximately 209,000 cubic meters of water per second into the Atlantic Ocean—diluting ocean salinity for over 100 miles offshore.',
      es: 'El río Amazonas vierte unos 209,000 m³ de agua dulce por segundo al Atlántico, reduciendo la salinidad marina a más de 160 km mar adentro.'
    },
    teks_alignment: ['TEKS 5.7A: Physical processes creating biomes', 'TEKS 6.4A: Rainforest deforestation and global climate links']
  },
  {
    id: 'MEX',
    iso2: 'mx',
    iso3: 'MEX',
    name_en: 'Mexico',
    name_es: 'México',
    continent: 'North America',
    continent_es: 'América del Norte',
    capital_en: 'Mexico City',
    capital_es: 'Ciudad de México',
    capital_coords: [19.4326, -99.1332],
    center_coords: [23.6345, -102.5528],
    zoom_level: 5,
    population: '129,000,000',
    area_sqkm: '1,964,375 km²',
    gdp_billion: 1788,
    main_exports: {
      en: ['Cars & Automotive Parts ($88B)', 'Computers & Electronics ($42B)', 'Crude Petroleum ($32B)', 'Beer ($6B)', 'Avocados ($3.5B)'],
      es: ['Autos y autopartes ($88B)', 'Computadoras y electrónicos ($42B)', 'Petróleo crudo ($32B)', 'Cerveza ($6B)', 'Aguacates ($3.5B)'],
      total_val_billion: 593
    },
    main_imports: {
      en: ['Refined Petroleum ($43B)', 'Integrated Circuits ($28B)', 'Vehicle Accessories ($24B)', 'Natural Gas ($12B)'],
      es: ['Petróleo refinado ($43B)', 'Circuitos integrados ($28B)', 'Accesorios vehiculares ($24B)', 'Gas natural ($12B)'],
      total_val_billion: 621
    },
    natural_wealth: {
      en: ['World’s leading producer of silver (Fresnillo mine)', 'Petroleum in the Gulf of Mexico (Campeche Sound)', 'Copper, zinc, and fluorite deposits', 'Rich coastal fisheries in Baja California and Pacific'],
      es: ['Líder mundial en producción de plata (mina Fresnillo)', 'Petróleo en la Sonda de Campeche en el Golfo de México', 'Depósitos de cobre, zinc y fluorita', 'Ricas pesquerías en Baja California y el Pacífico']
    },
    physical_geography_summary: {
      en: 'A high central plateau (Mesa Central) framed by the rugged Sierra Madre Oriental and Sierra Madre Occidental, punctuated by active volcanoes along the Trans-Mexican Volcanic Belt.',
      es: 'Una meseta central elevada flanqueada por la Sierra Madre Oriental y Occidental, rematada por el Eje Neovolcánico Transversal con volcanes activos.'
    },
    landforms: [
      {
        id: 'mx-volcano-popocatepetl',
        type: 'volcano',
        name_en: 'Popocatépetl',
        name_es: 'Popocatépetl',
        coords: [19.0224, -98.6278],
        elevation_m: 5426,
        description_en: 'Active stratovolcano nicknamed "El Popo", constantly monitored 70 km southeast of Mexico City.',
        description_es: 'Estratovolcán activo conocido como "El Popo", vigilado de cerca a 70 km de la capital.'
      },
      {
        id: 'mx-peak-orizaba',
        type: 'peak',
        name_en: 'Pico de Orizaba (Citlaltépetl)',
        name_es: 'Pico de Orizaba (Citlaltépetl)',
        coords: [19.0298, -97.2694],
        elevation_m: 5636,
        description_en: 'Highest peak in Mexico and third highest in North America.',
        description_es: 'El pico más alto de México y tercero de Norteamérica (5,636m).'
      },
      {
        id: 'mx-peninsula-yucatan',
        type: 'peninsula',
        name_en: 'Yucatan Peninsula',
        name_es: 'Península de Yucatán',
        coords: [19.5, -89.0],
        description_en: 'Karst limestone peninsula dotted with underground water sinkholes (cenotes) dividing the Gulf of Mexico and Caribbean.',
        description_es: 'Península de roca caliza kárstica con miles de cenotes que separa el Golfo de México del Mar Caribe.'
      }
    ],
    interesting_fact: {
      en: 'Mexico City was built on an island in ancient Lake Texcoco by the Aztecs (Tenochtitlan) and is slowly sinking at rates up to 50 cm per year.',
      es: 'La Ciudad de México fue construida sobre un lago desecado (Texcoco) por los aztecas y se hunde hasta 50 cm al año en algunas zonas.'
    },
    teks_alignment: ['TEKS 5.6B: Human modification of environments (Tenochtitlan to modern CDMX)', 'TEKS 6.3C: Volcanic belts and tectonic plate interactions']
  },
  {
    id: 'CHE',
    iso2: 'ch',
    iso3: 'CHE',
    name_en: 'Switzerland',
    name_es: 'Suiza',
    continent: 'Europe',
    continent_es: 'Europa',
    capital_en: 'Bern',
    capital_es: 'Berna',
    capital_coords: [46.948, 7.4474],
    center_coords: [46.8182, 8.2275],
    zoom_level: 7,
    population: '8,800,000',
    area_sqkm: '41,285 km²',
    gdp_billion: 870,
    main_exports: {
      en: ['Packaged Medicaments ($52B)', 'Gold / Bullion ($86B)', 'Vaccines & Blood products ($38B)', 'Watches & Precision Instruments ($28B)'],
      es: ['Medicamentos envasados ($52B)', 'Oro y lingotes refinados ($86B)', 'Vacunas y derivados sanguíneos ($38B)', 'Relojería e instrumentos de precisión ($28B)'],
      total_val_billion: 420
    },
    main_imports: {
      en: ['Gold raw ($92B)', 'Packaged Medicaments ($29B)', 'Cars ($12B)', 'Chemical Products ($9B)'],
      es: ['Oro en bruto ($92B)', 'Medicamentos envasados ($29B)', 'Automóviles ($12B)', 'Químicos ($9B)'],
      total_val_billion: 360
    },
    natural_wealth: {
      en: ['Alpine glacier freshwater storage ("Water tower of Europe")', 'Over 60% electricity generated by mountain hydropower', 'Abundant timber resources in Jura and Alps', 'Spectacular topography driving eco-tourism'],
      es: ['Glaciares alpinos como reservorios ("Torre de agua de Europa")', 'Más del 60% de electricidad proviene de hidroeléctricas de montaña', 'Recursos madereros en los Alpes y el Jura', 'Topografía que impulsa el ecoturismo de alta montaña']
    },
    physical_geography_summary: {
      en: 'Landlocked alpine nation split into three major zones: the high rugged Swiss Alps in the south (60%), the fertile Central Swiss Plateau (Mittelland) where most people reside, and the Jura Mountains in the northwest.',
      es: 'País alpino sin salida al mar dividido en tres regiones: los Alpes suizos al sur (60% del territorio), la meseta central (Mittelland) donde habita la mayoría y las montañas del Jura.'
    },
    landforms: [
      {
        id: 'ch-peak-matterhorn',
        type: 'peak',
        name_en: 'Matterhorn',
        name_es: 'Cervino (Matterhorn)',
        coords: [45.9763, 7.6586],
        elevation_m: 4478,
        description_en: 'Iconic pyramidal horn peak formed by glacial cirque headwall erosion on four faces.',
        description_es: 'Icónico pico piramidal esculpido por la erosión de glaciares en cuatro caras simétricas.'
      },
      {
        id: 'ch-lake-geneva',
        type: 'lake',
        name_en: 'Lake Geneva (Lac Léman)',
        name_es: 'Lago Lemán (Ginebra)',
        coords: [46.45, 6.55],
        elevation_m: 372,
        description_en: 'Crescent-shaped glacial lake on the border with France, fed by the Rhone River.',
        description_es: 'Lago de origen glaciar con forma de medialuna en la frontera con Francia, alimentado por el Ródano.'
      },
      {
        id: 'ch-river-rhine',
        type: 'river',
        name_en: 'Rhine River (Headwaters)',
        name_es: 'Río Rin (Cabeceras)',
        coords: [46.6325, 8.6728],
        length_km: 1230,
        description_en: 'Originates in the Swiss Grisons Alps at Lake Toma before flowing north through Europe to the North Sea.',
        description_es: 'Nace en los Alpes suizos en el lago Toma y fluye hacia el norte hasta desembocar en el Mar del Norte.'
      }
    ],
    interesting_fact: {
      en: 'Switzerland is completely landlocked yet generates over 60% of its electrical power from clean mountain reservoirs and melting glacial waters.',
      es: 'Suiza no tiene litoral marítimo, pero genera más del 60% de su energía eléctrica mediante embalses alpinos y deshielo de glaciares.'
    },
    teks_alignment: ['TEKS 6.4B: Renewable hydroelectric energy in mountainous regions', 'TEKS 6.7A: Landlocked trade and high-value low-bulk export economy']
  },
  {
    id: 'EGY',
    iso2: 'eg',
    iso3: 'EGY',
    name_en: 'Egypt',
    name_es: 'Egipto',
    continent: 'Africa',
    continent_es: 'África',
    capital_en: 'Cairo',
    capital_es: 'El Cairo',
    capital_coords: [30.0444, 31.2357],
    center_coords: [26.8206, 30.8025],
    zoom_level: 6,
    population: '109,000,000',
    area_sqkm: '1,002,450 km²',
    gdp_billion: 475,
    main_exports: {
      en: ['Refined Petroleum ($7.8B)', 'Crude Petroleum ($4.5B)', 'Nitrogenous Fertilizers ($3.2B)', 'Citrus Fruits ($1.2B)', 'Suez Canal Transit Dues ($9.4B)'],
      es: ['Petróleo refinado ($7.8B)', 'Petróleo crudo ($4.5B)', 'Fertilizantes nitrogenados ($3.2B)', 'Cítricos ($1.2B)', 'Peajes del Canal de Suez ($9.4B)'],
      total_val_billion: 51
    },
    main_imports: {
      en: ['Wheat ($4.6B)', 'Refined Petroleum ($3.8B)', 'Pharmaceuticals ($3.1B)', 'Cars ($2.9B)', 'Soybeans ($1.9B)'],
      es: ['Trigo ($4.6B)', 'Petróleo refinado ($3.8B)', 'Medicamentos ($3.1B)', 'Autos ($2.9B)', 'Soya ($1.9B)'],
      total_val_billion: 87
    },
    natural_wealth: {
      en: ['Nile River alluvium soil ribbon', 'Strategic maritime corridor (Suez Canal)', 'Offshore natural gas fields in Mediterranean (Zohr Field)', 'Solar energy potential in Western Desert', 'Phosphate and limestone reserves'],
      es: ['Valle y delta aluvial fértil del Nilo', 'Canal de Suez como encrucijada marítima global', 'Megayacimientos de gas en el Mediterráneo (Campo Zohr)', 'Energía solar en el desierto occidental']
    },
    physical_geography_summary: {
      en: 'Over 95% of Egypt’s territory is barren desert (part of the Sahara and Arabian Deserts). Over 95% of the population is crowded along the narrow fertile green strip of the Nile River Valley and fan-shaped Delta.',
      es: 'Más del 95% del territorio es desierto árido (Sáhara y desierto arábigo). Más del 95% de la población se concentra a lo largo de la estrecha franja fértil del valle y delta del Nilo.'
    },
    landforms: [
      {
        id: 'eg-river-nile',
        type: 'river',
        name_en: 'Nile River',
        name_es: 'Río Nilo',
        coords: [31.5167, 31.85],
        length_km: 6650,
        description_en: 'Longest river in Africa, forming the historic cradle of civilization and agricultural lifeblood of Egypt.',
        description_es: 'El río más largo de África, cuna histórica de la civilización y sustento vital de Egipto.'
      },
      {
        id: 'eg-desert-sahara',
        type: 'desert',
        name_en: 'Sahara Desert (Western Desert)',
        name_es: 'Desierto del Sáhara (Desierto Occidental)',
        coords: [26.0, 28.0],
        description_en: 'Hyper-arid sand sheets and wind-sculpted yardangs stretching west to Libya.',
        description_es: 'Grandes mares de arena y formaciones eólicas que se extienden al oeste hacia Libia.'
      },
      {
        id: 'eg-strait-suez',
        type: 'strait',
        name_en: 'Suez Canal (Isthmus of Suez)',
        name_es: 'Canal de Suez (Istmo de Suez)',
        coords: [30.5852, 32.2654],
        length_km: 193,
        description_en: 'Crucial artificial sea-level waterway connecting the Mediterranean Sea to the Red Sea, saving 7,000 km around Africa.',
        description_es: 'Paso interoceánico artificial que une el Mediterráneo con el Mar Rojo, evitando rodear África.'
      },
      {
        id: 'eg-peninsula-sinai',
        type: 'peninsula',
        name_en: 'Sinai Peninsula',
        name_es: 'Península del Sinaí',
        coords: [29.5, 33.8],
        description_en: 'Triangular peninsula forming a land bridge connecting the African continent to Asia.',
        description_es: 'Península triangular que actúa como puente terrestre entre África y Asia.'
      }
    ],
    interesting_fact: {
      en: 'More than 95% of Egypt’s 109 million citizens live on only 4% of the country’s total land area along the fertile banks of the Nile.',
      es: 'Más del 95% de los 109 millones de habitantes de Egipto vive en solo el 4% del territorio, apiñados a orillas del Nilo.'
    },
    teks_alignment: ['TEKS 6.4C: Physical geography dictating population settlement patterns', 'TEKS 6.8A: Choke points in global trade routes']
  },
  {
    id: 'JPN',
    iso2: 'jp',
    iso3: 'JPN',
    name_en: 'Japan',
    name_es: 'Japón',
    continent: 'Asia',
    continent_es: 'Asia',
    capital_en: 'Tokyo',
    capital_es: 'Tokio',
    capital_coords: [35.6762, 139.6503],
    center_coords: [36.2048, 138.2529],
    zoom_level: 5,
    population: '124,500,000',
    area_sqkm: '377,975 km²',
    gdp_billion: 4210,
    main_exports: {
      en: ['Cars & Motor Vehicles ($95B)', 'Integrated Circuits & Semiconductors ($44B)', 'Machinery & Robots ($38B)', 'Steel Products ($28B)'],
      es: ['Automóviles y vehículos ($95B)', 'Circuitos integrados y chips ($44B)', 'Maquinaria y robots ($38B)', 'Productos de acero ($28B)'],
      total_val_billion: 746
    },
    main_imports: {
      en: ['Crude Petroleum ($72B)', 'Liquefied Natural Gas ($58B)', 'Coal Briquettes ($41B)', 'Broadcasting Equipment ($24B)', 'Foodstuffs ($35B)'],
      es: ['Petróleo crudo ($72B)', 'Gas natural licuado ($58B)', 'Carbón ($41B)', 'Equipos de telecomunicación ($24B)', 'Alimentos básicos ($35B)'],
      total_val_billion: 897
    },
    natural_wealth: {
      en: ['Extensive marine and fisheries resources', 'Dense mountain forest timber cover (67% of land area)', 'Geothermal energy springs across volcanic belts', 'Deep natural harbors for international shipping'],
      es: ['Riqueza pesquera y recursos marinos', 'Bosques densos que cubren el 67% del territorio', 'Energía geotérmica a lo largo del cinturón volcánico', 'Bahías profundas para navegación transoceánica']
    },
    physical_geography_summary: {
      en: 'A volcanic archipelago of 6,852 islands along the Pacific "Ring of Fire". Over 73% of the land is mountainous, forcing high-density megalopolises into narrow coastal alluvial plains.',
      es: 'Archipiélago volcánico de 6,852 islas sobre el Cinturón de Fuego del Pacífico. Más del 73% es montañoso, concentrando la población en llanuras aluviales costeras.'
    },
    landforms: [
      {
        id: 'jp-volcano-fuji',
        type: 'volcano',
        name_en: 'Mount Fuji',
        name_es: 'Monte Fuji',
        coords: [35.3606, 138.7274],
        elevation_m: 3776,
        description_en: 'Symmetrical active stratovolcano and the highest mountain in Japan, sacred in Japanese culture.',
        description_es: 'Estratovolcán activo simétrico y montaña más alta de Japón (3,776m), símbolo cultural sagrado.'
      },
      {
        id: 'jp-archipelago-japan',
        type: 'archipelago',
        name_en: 'Japanese Archipelago',
        name_es: 'Archipiélago Japonés',
        coords: [35.0, 136.0],
        description_en: 'Chain of four main islands (Honshu, Hokkaido, Kyushu, Shikoku) plus thousands of smaller volcanic isles.',
        description_es: 'Cadena de 4 islas principales (Honshu, Hokkaido, Kyushu, Shikoku) y miles de islas menores.'
      },
      {
        id: 'jp-strait-tsugaru',
        type: 'strait',
        name_en: 'Tsugaru Strait',
        name_es: 'Estrecho de Tsugaru',
        coords: [41.5, 140.6],
        description_en: 'Strait between Honshu and Hokkaido traversed underneath by the Seikan Tunnel (world’s longest undersea railway tunnel).',
        description_es: 'Estrecho marítimo entre Honshu y Hokkaido atravesado por el túnel submarino Seikan.'
      }
    ],
    interesting_fact: {
      en: 'Japan experiences roughly 1,500 detectable earthquakes every year due to the convergence of four major tectonic plates.',
      es: 'Japón experimenta alrededor de 1,500 sismos perceptibles al año por la colisión de cuatro placas tectónicas.'
    },
    teks_alignment: ['TEKS 6.3C: Plate tectonics and Ring of Fire volcanic chains', 'TEKS 6.7B: Island nations relying on imported fossil fuels and raw minerals']
  },
  {
    id: 'NOR',
    iso2: 'no',
    iso3: 'NOR',
    name_en: 'Norway',
    name_es: 'Noruega',
    continent: 'Europe',
    continent_es: 'Europa',
    capital_en: 'Oslo',
    capital_es: 'Oslo',
    capital_coords: [59.9139, 10.7522],
    center_coords: [60.472, 8.4689],
    zoom_level: 5,
    population: '5,500,000',
    area_sqkm: '385,207 km²',
    gdp_billion: 485,
    main_exports: {
      en: ['Natural Gas ($115B)', 'Crude Petroleum ($55B)', 'Fresh Salmon & Seafood ($15B)', 'Raw Aluminium ($4B)'],
      es: ['Gas natural ($115B)', 'Petróleo crudo ($55B)', 'Salmón y mariscos ($15B)', 'Aluminio ($4B)'],
      total_val_billion: 198
    },
    main_imports: {
      en: ['Cars & Electric Vehicles ($8B)', 'Refined Petroleum ($3B)', 'Broadcasting Equipment ($2.5B)', 'Medicaments ($2B)'],
      es: ['Vehículos eléctricos ($8B)', 'Petróleo refinado ($3B)', 'Equipos de transmisión ($2.5B)', 'Medicamentos ($2B)'],
      total_val_billion: 96
    },
    natural_wealth: {
      en: ['North Sea petroleum and natural gas shelf', 'Hydroelectric water falls providing 90%+ clean electricity', 'World’s sovereign wealth fund ($1.6 Trillion)', 'Rich Arctic fishing banks'],
      es: ['Plataforma continental de gas y petróleo del Mar del Norte', 'Cascadas alpinas que generan más del 90% de electricidad limpia', 'Fondo soberano de inversión ($1.6 billones)', 'Pesquerías árticas']
    },
    physical_geography_summary: {
      en: 'A glaciated, rugged coastline along the Atlantic and Arctic oceans famous for dramatic steep-sided coastal fjords carved by Pleistocene glaciers.',
      es: 'Costa recortada y escarpada sobre el Atlántico y Ártico, célebre por sus fiordos profundos excavados por glaciares pleistocénicos.'
    },
    landforms: [
      {
        id: 'no-fjord-geiranger',
        type: 'fjord',
        name_en: 'Geirangerfjord',
        name_es: 'Fiordo de Geiranger',
        coords: [62.1015, 7.0941],
        description_en: 'UNESCO-listed fjord with sheer rock walls rising over 1,000m directly out of the ocean.',
        description_es: 'Fiordo patrimonio de la UNESCO con acantilados de más de 1,000 metros cayendo directo al mar.'
      },
      {
        id: 'no-peak-galdhopiggen',
        type: 'peak',
        name_en: 'Galdhøpiggen',
        name_es: 'Galdhøpiggen',
        coords: [61.6364, 8.3125],
        elevation_m: 2469,
        description_en: 'Highest mountain in Norway and Northern Europe, in the Jotunheimen range.',
        description_es: 'Montaña más alta de Noruega y el norte de Europa en la cordillera Jotunheimen.'
      }
    ],
    interesting_fact: {
      en: 'Norway has over 1,000 fjords along its coastline; if stretched in a straight line with all islands and inlets, its coast would circle the equator twice!',
      es: 'Noruega tiene más de 1,000 fiordos; si se desenrollara toda su línea de costa con islas y bahías, ¡daría dos vueltas a la Tierra!'
    },
    teks_alignment: ['TEKS 5.7A: Glacial processes shaping coastlines (fjords)', 'TEKS 6.5B: Management of sovereign non-renewable natural resources']
  },
  {
    id: 'AUS',
    iso2: 'au',
    iso3: 'AUS',
    name_en: 'Australia',
    name_es: 'Australia',
    continent: 'Oceania',
    continent_es: 'Oceanía',
    capital_en: 'Canberra',
    capital_es: 'Canberra',
    capital_coords: [-35.2809, 149.13],
    center_coords: [-25.2744, 133.7751],
    zoom_level: 4,
    population: '26,500,000',
    area_sqkm: '7,692,024 km²',
    gdp_billion: 1720,
    main_exports: {
      en: ['Iron Ore ($95B)', 'Coal Briquettes ($82B)', 'Liquefied Natural Gas ($64B)', 'Gold ($18B)', 'Wheat & Beef ($14B)'],
      es: ['Mineral de hierro ($95B)', 'Carbón ($82B)', 'Gas natural licuado ($64B)', 'Oro ($18B)', 'Trigo y carne de res ($14B)'],
      total_val_billion: 380
    },
    main_imports: {
      en: ['Refined Petroleum ($28B)', 'Cars and Trucks ($24B)', 'Computers ($9B)', 'Pharmaceuticals ($8B)'],
      es: ['Petróleo refinado ($28B)', 'Autos y camiones ($24B)', 'Computadoras ($9B)', 'Medicamentos ($8B)'],
      total_val_billion: 280
    },
    natural_wealth: {
      en: ['Pilbara region iron ore deposits', 'Bowen Basin metallurgical coal', 'Great Barrier Reef marine ecosystem', 'Vast bauxite and lithium reserves'],
      es: ['Depósitos gigantescos de hierro en Pilbara', 'Carbón metalúrgico en la cuenca de Bowen', 'Arrecife de la Gran Barrera', 'Reservas líderes de bauxita y litio']
    },
    physical_geography_summary: {
      en: 'The world’s lowest, flattest, and driest inhabited continent. Dominated by the arid desert Outback in the interior and the Great Dividing Range along the eastern coastline.',
      es: 'El continente habitado más plano, bajo y seco. Dominado por el árido Outback central y la Gran Cordillera Divisoria en la costa este.'
    },
    landforms: [
      {
        id: 'au-desert-outback',
        type: 'desert',
        name_en: 'Great Victoria Desert',
        name_es: 'Gran Desierto de Victoria',
        coords: [-29.15, 129.25],
        description_en: 'Vast barren expanse of red sand dunes and salt marshes spanning Western and South Australia.',
        description_es: 'Extensión de dunas de arena roja y salares que abarca Australia Occidental y Meridional.'
      },
      {
        id: 'au-peak-kosciuszko',
        type: 'peak',
        name_en: 'Mount Kosciuszko',
        name_es: 'Monte Kosciuszko',
        coords: [-36.4558, 148.2635],
        elevation_m: 2228,
        description_en: 'Highest mountain on the Australian mainland, situated in the Snowy Mountains.',
        description_es: 'Punto más alto de Australia continental en las Montañas Nevadas (2,228m).'
      },
      {
        id: 'au-bay-spencer',
        type: 'bay',
        name_en: 'Great Australian Bight',
        name_es: 'Gran Bahía Australiana',
        coords: [-33.0, 130.0],
        description_en: 'Massive open oceanic bight flanked by the sheer limestone cliffs of the Nullarbor Plain.',
        description_es: 'Gran bahía oceánica abierta bordeada por los acantilados calizos de la llanura de Nullarbor.'
      }
    ],
    interesting_fact: {
      en: 'Over 85% of Australians live within 50 km of the coast because the interior Outback is largely inhospitable desert.',
      es: 'Más del 85% de la población australiana vive a menos de 50 km de la costa debido a la extrema aridez del interior.'
    },
    teks_alignment: ['TEKS 6.3B: Population density as a function of coastal climate', 'TEKS 6.6B: Mining extraction driving trade with Asia']
  }
];

export const STARTER_COUNTRIES: CountryDossierData[] = [
  ...BASE_COUNTRIES,
  ...ALL_AMERICAS_ADDITIONAL_COUNTRIES,
  ...ALL_EUROPE_ADDITIONAL_COUNTRIES,
  ...ALL_ASIA_ADDITIONAL_COUNTRIES,
];
