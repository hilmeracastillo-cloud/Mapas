import { CountryDossierData } from '../types/geography';

export const ALL_OCEANIA_ADDITIONAL_COUNTRIES: CountryDossierData[] = [
  // =========================================================================
  // 1. NEW ZEALAND (NZL)
  // =========================================================================
  {
    id: 'NZL',
    iso2: 'nz',
    iso3: 'NZL',
    name_en: 'New Zealand',
    name_es: 'Nueva Zelanda',
    continent: 'Oceania',
    continent_es: 'Oceanía',
    capital_en: 'Wellington',
    capital_es: 'Wellington',
    capital_coords: [-41.2865, 174.7762],
    center_coords: [-40.9006, 174.8860],
    zoom_level: 5,
    population: '5,200,000',
    area_sqkm: '268,021 km²',
    gdp_billion: 250,
    main_exports: {
      en: ['Dairy & Milk Concentrates ($12B)', 'Bovine & Sheep Meat ($6.8B)', 'Rough Wood & Timber ($3.4B)', 'Wine ($1.5B)', 'Kiwifruit & Apples ($1.8B)'],
      es: ['Lácteos y leche concentrada ($12B)', 'Carne bovina y ovina ($6.8B)', 'Madera en rollo ($3.4B)', 'Vino Sauvignon Blanc ($1.5B)', 'Kiwi y manzanas ($1.8B)'],
      total_val_billion: 46,
    },
    main_imports: {
      en: ['Cars & Trucks ($6.2B)', 'Refined Petroleum ($5.4B)', 'Broadcasting Equipment ($1.8B)', 'Medicaments ($1.2B)'],
      es: ['Automóviles y camiones ($6.2B)', 'Petróleo refinado ($5.4B)', 'Equipos de transmisión ($1.8B)', 'Medicamentos ($1.2B)'],
      total_val_billion: 52,
    },
    natural_wealth: {
      en: ['Rich geothermal energy systems in Taupō Volcanic Zone (Wairakei power plant)', 'Abundant hydroelectric mountain rivers (generating over 80% renewable electricity)', 'World-class pasturelands for dairy and sheep farming', 'Deep natural fiords and pristine glaciated alpine landscapes'],
      es: ['Energía geotérmica en la zona volcánica de Taupō', 'Ríos alpinos con más del 80% de electricidad renovable', 'Pastizales de alta productividad para ganadería lechera y ovina', 'Fiordos glaciares (Milford Sound)'],
    },
    physical_geography_summary: {
      en: 'Comprises two main islands (North and South Island) along the Pacific "Ring of Fire". The South Island is dominated by the glaciated Southern Alps, while the North Island features active volcanic plateaus, geothermal geysers, and rolling pasturelands.',
      es: 'Compuesta por dos islas principales sobre el Cinturón de Fuego. La Isla Sur está dominada por los Alpes del Sur y sus glaciares, mientras que la Isla Norte presenta mesetas volcánicas activas, géiseres y colinas fértiles.'
    },
    landforms: [
      {
        id: 'nz-peak-cook',
        type: 'peak',
        name_en: 'Aoraki / Mount Cook',
        name_es: 'Aoraki / Monte Cook',
        coords: [-43.595, 170.1418],
        elevation_m: 3724,
        description_en: 'Highest mountain peak in New Zealand, situated in the glaciated Southern Alps with massive ice fields.',
        description_es: 'Punto más alto de Nueva Zelanda (3,724m), en los Alpes del Sur, rodeado de glaciares colosales.'
      },
      {
        id: 'nz-fjord-milford',
        type: 'fjord',
        name_en: 'Milford Sound (Piopiotahi)',
        name_es: 'Milford Sound (Piopiotahi)',
        coords: [-44.67, 167.92],
        description_en: 'World-famous glaciated marine fiord flanked by sheer rock faces rising over 1,200 meters out of dark ocean waters.',
        description_es: 'Fiordo glaciar marino flanqueado por paredes de roca verticales de más de 1,200 metros sobre el mar.'
      }
    ],
    interesting_fact: {
      en: 'New Zealand generates over 85% of its entire national electrical grid from clean renewable sources—principally mountain hydro reservoirs and subterranean volcanic steam geysers.',
      es: 'Nueva Zelanda genera más del 85% de toda su electricidad mediante fuentes renovables limpias (hidroeléctrica de montaña y geotérmica volcánica).'
    },
    teks_alignment: ['TEKS 6.4B: Renewable energy dominance in alpine island geography', 'TEKS 6.3C: Alpine fault plate tectonics and glacial fjord carving']
  },

  // =========================================================================
  // 2. PAPUA NEW GUINEA (PNG)
  // =========================================================================
  {
    id: 'PNG',
    iso2: 'pg',
    iso3: 'PNG',
    name_en: 'Papua New Guinea',
    name_es: 'Papúa Nueva Guinea',
    continent: 'Oceania',
    continent_es: 'Oceanía',
    capital_en: 'Port Moresby',
    capital_es: 'Port Moresby',
    capital_coords: [-9.4438, 147.1803],
    center_coords: [-6.3149, 143.9555],
    zoom_level: 6,
    population: '10,300,000',
    area_sqkm: '462,840 km²',
    gdp_billion: 31,
    main_exports: {
      en: ['Liquefied Natural Gas / LNG ($5.4B)', 'Gold ($2.8B)', 'Copper Ores ($1.2B)', 'Palm Oil ($950M)', 'Rough Wood & Timber ($680M)', 'Nickel ($480M)'],
      es: ['Gas natural licuado ($5.4B)', 'Oro ($2.8B)', 'Minerales de cobre ($1.2B)', 'Aceite de palma ($950M)', 'Madera tropical en rollo ($680M)', 'Níquel ($480M)'],
      total_val_billion: 12.5,
    },
    main_imports: {
      en: ['Refined Petroleum ($1.1B)', 'Special Purpose Ships ($380M)', 'Excavation Machinery ($280M)', 'Rice & Wheat ($240M)'],
      es: ['Petróleo refinado ($1.1B)', 'Buques y plataformas ($380M)', 'Maquinaria pesada minera ($280M)', 'Arroz y trigo ($240M)'],
      total_val_billion: 4.8,
    },
    natural_wealth: {
      en: ['Third largest rainforest in the world (New Guinea rainforest)', 'Super-giant gold and copper porphyry mines (Grasberg/Ok Tedi trend, Porgera)', 'PNG LNG mega-export project in the Southern Highlands', 'Coral Triangle rich marine biodiversity'],
      es: ['Tercera masa de selva tropical más grande del mundo (selva de Nueva Guinea)', 'Megaminas de oro y cobre en la cordillera central (Ok Tedi, Porgera)', 'Proyecto de exportación de gas licuado PNG LNG', 'Epicentro del Triángulo de Coral'],
    },
    physical_geography_summary: {
      en: 'Occupies the eastern half of the island of New Guinea and hundreds of offshore volcanic islands. Dominated by the rugged New Guinea Highlands spine rising to over 4,500m, flanked by dense swampy lowlands of the Sepik and Fly rivers.',
      es: 'Ocupa la mitad oriental de la isla de Nueva Guinea y numerosas islas volcánicas. Dominado por la cordillera Central con cumbres de más de 4,500 metros, flanqueada por las selvas y humedales de los ríos Sepik y Fly.'
    },
    landforms: [
      {
        id: 'pg-peak-wilhelm',
        type: 'peak',
        name_en: 'Mount Wilhelm',
        name_es: 'Monte Wilhelm',
        coords: [-5.78, 145.03],
        elevation_m: 4509,
        description_en: 'Highest mountain peak in Papua New Guinea, with glacial tarn lakes in the Bismarck Range.',
        description_es: 'Punto más alto de Papúa Nueva Guinea (4,509m), en la cordillera Bismarck.'
      },
      {
        id: 'pg-river-sepik',
        type: 'river',
        name_en: 'Sepik River',
        name_es: 'Río Sepik',
        coords: [-3.84, 144.1],
        length_km: 1126,
        description_en: 'Longest river in PNG, flowing through vast undisturbed tropical rainforests without any dams.',
        description_es: 'Río más largo de Papúa Nueva Guinea, que serpentea a través de selvas vírgenes sin ninguna presa.'
      }
    ],
    interesting_fact: {
      en: 'Papua New Guinea is the most linguistically diverse nation on Earth: its 10 million inhabitants speak over 840 distinct living indigenous languages—representing roughly 12% of all languages on the planet.',
      es: 'Papúa Nueva Guinea es el país con mayor diversidad lingüística del mundo: sus habitantes hablan más de 840 lenguas indígenas vivas distintas (cerca del 12% de todos los idiomas de la Tierra).'
    },
    teks_alignment: ['TEKS 6.3B: Topographic isolation fostering extreme linguistic diversity', 'TEKS 6.6B: Mining extraction in fragile equatorial highland rainforests']
  },

  // =========================================================================
  // 3. FIJI (FJI)
  // =========================================================================
  {
    id: 'FJI',
    iso2: 'fj',
    iso3: 'FJI',
    name_en: 'Fiji',
    name_es: 'Fiyi',
    continent: 'Oceania',
    continent_es: 'Oceanía',
    capital_en: 'Suva',
    capital_es: 'Suva',
    capital_coords: [-18.1416, 178.4419],
    center_coords: [-17.7134, 178.0650],
    zoom_level: 7,
    population: '930,000',
    area_sqkm: '18,274 km²',
    gdp_billion: 5.5,
    main_exports: {
      en: ['Bottled Natural Artesian Water ($140M)', 'Raw Sugar ($85M)', 'Processed Fish & Tuna ($75M)', 'Gold ($65M)', 'Cassava & Taro ($25M)'],
      es: ['Agua mineral artesiana embotellada ($140M)', 'Azúcar de caña ($85M)', 'Atún procesado ($75M)', 'Oro de la mina Vatukoula ($65M)', 'Yuca y taro ($25M)'],
      total_val_billion: 1.1,
    },
    main_imports: {
      en: ['Refined Petroleum ($780M)', 'Cars & Trucks ($180M)', 'Meat & Poultry ($95M)', 'Wheat ($85M)'],
      es: ['Petróleo refinado ($780M)', 'Automóviles ($180M)', 'Carne de ave ($95M)', 'Trigo ($85M)'],
      total_val_billion: 2.8,
    },
    natural_wealth: {
      en: ['Vatukoula underground gold mine (mined continuously since the 1930s)', 'Pristine artesian freshwater aquifers in Yaqara Valley (Fiji Water)', 'Vast coral barrier reefs (Great Sea Reef - third longest continuous barrier reef on Earth)', 'Rich tropical timber and sugarcane lowlands'],
      es: ['Mina subterránea de oro de Vatukoula', 'Acuíferos artesianos naturales en el valle de Yaqara (Fiji Water)', 'Gran Arrecife de Coral Marino (el tercer arrecife continuo más largo del mundo)', 'Caña de azúcar y maderas tropicales'],
    },
    physical_geography_summary: {
      en: 'An archipelago of over 330 volcanic islands and 500 islets in the South Pacific. Dominated by the two largest rugged volcanic islands, Viti Levu and Vanua Levu, which rise to over 1,300 meters.',
      es: 'Archipiélago de más de 330 islas volcánicas en el Pacífico sur. Dominado por las dos islas mayores, Viti Levu y Vanua Levu, con picos volcánicos de más de 1,300m.'
    },
    landforms: [
      {
        id: 'fj-peak-tomanivi',
        type: 'volcano',
        name_en: 'Mount Tomanivi (Mount Victoria)',
        name_es: 'Monte Tomanivi',
        coords: [-17.63, 178.02],
        elevation_m: 1324,
        description_en: 'Extinct volcano and the highest mountain in Fiji, source of the Rewa and Sigatoka rivers on Viti Levu.',
        description_es: 'Volcán extinto y punto más alto de Fiyi (1,324m), en la isla principal de Viti Levu.'
      }
    ],
    interesting_fact: {
      en: 'Fiji’s Great Sea Reef (Cakaulevu) is the third-longest continuous coral barrier reef system in the entire world, stretching for over 200 kilometers along northern Vanua Levu.',
      es: 'El Gran Arrecife de Fiyi (Cakaulevu) es el tercer sistema continuo de arrecife de coral más largo del mundo, con más de 200 km de longitud.'
    },
    teks_alignment: ['TEKS 6.6B: Export of high-value bottled artesian water vs domestic water access', 'TEKS 6.4A: Coral reef marine conservation in the South Pacific']
  },

  // =========================================================================
  // 4. SOLOMON ISLANDS (SLB)
  // =========================================================================
  {
    id: 'SLB',
    iso2: 'sb',
    iso3: 'SLB',
    name_en: 'Solomon Islands',
    name_es: 'Islas Salomón',
    continent: 'Oceania',
    continent_es: 'Oceanía',
    capital_en: 'Honiara',
    capital_es: 'Honiara',
    capital_coords: [-9.4456, 159.9729],
    center_coords: [-9.6457, 160.1562],
    zoom_level: 6,
    population: '740,000',
    area_sqkm: '28,896 km²',
    gdp_billion: 1.6,
    main_exports: {
      en: ['Rough Wood & Timber ($240M)', 'Processed Fish & Tuna ($45M)', 'Palm Oil ($35M)', 'Gold ($25M)', 'Cocoa ($15M)'],
      es: ['Madera tropical en rollo ($240M)', 'Atún procesado ($45M)', 'Aceite de palma ($35M)', 'Oro ($25M)', 'Cacao ($15M)'],
      total_val_billion: 0.38,
    },
    main_imports: {
      en: ['Refined Petroleum ($140M)', 'Rice ($65M)', 'Machinery ($45M)', 'Meat ($25M)'],
      es: ['Petróleo refinado ($140M)', 'Arroz ($65M)', 'Maquinaria ($45M)', 'Carne ($25M)'],
      total_val_billion: 0.58,
    },
    natural_wealth: {
      en: ['Dense tropical hardwood forests', 'Gold Ridge mine on Guadalcanal', 'Rich pelagic tuna fishing grounds', 'Marovo Lagoon (world’s largest double-barrier saltwater lagoon)'],
      es: ['Bosques de maderas duras tropicales', 'Mina de oro de Gold Ridge en Guadalcanal', 'Ricos caladeros de pesca de atún', 'Laguna de Marovo (la mayor laguna de arrecife de doble barrera del mundo)'],
    },
    physical_geography_summary: {
      en: 'A double chain of six major mountainous volcanic islands and hundreds of smaller atolls in Melanesia, featuring dense rainforests and active volcanoes along the Pacific Ring of Fire.',
      es: 'Doble hilera de seis grandes islas montañosas volcánicas y cientos de islotes en Melanesia, con selvas tropicales y volcanes submarinos activos.'
    },
    landforms: [
      {
        id: 'sb-volcano-kavachi',
        type: 'volcano',
        name_en: 'Kavachi Submarine Volcano ("Sharkcano")',
        name_es: 'Volcán Submarino Kavachi ("Tiburoncán")',
        coords: [-9.02, 157.95],
        elevation_m: -20,
        description_en: 'One of the most active submarine volcanoes in the Pacific, famous for hammerhead sharks living in its superheated, acidic crater waters.',
        description_es: 'Volcán submarino muy activo famoso por albergar tiburones martillo nadando en aguas termales ácidas.'
      }
    ],
    interesting_fact: {
      en: 'The active submarine volcano Kavachi in the Solomon Islands earned the nickname "Sharkcano" after scientists discovered hammerhead and silky sharks thriving inside the hot, acidic crater water between eruptions.',
      es: 'El volcán submarino Kavachi fue apodado "Tiburoncán" tras descubrirse que tiburones martillo viven en el interior de su cráter caliente y ácido entre erupciones.'
    },
    teks_alignment: ['TEKS 6.3C: Submarine volcanism and island-arc formation', 'TEKS 6.4A: Tropical timber extraction vs forest sustainability']
  },

  // =========================================================================
  // 5. VANUATU (VUT)
  // =========================================================================
  {
    id: 'VUT',
    iso2: 'vu',
    iso3: 'VUT',
    name_en: 'Vanuatu',
    name_es: 'Vanuatu',
    continent: 'Oceania',
    continent_es: 'Oceanía',
    capital_en: 'Port Vila',
    capital_es: 'Port Vila',
    capital_coords: [-17.7333, 168.3273],
    center_coords: [-15.3767, 166.9592],
    zoom_level: 7,
    population: '330,000',
    area_sqkm: '12,189 km²',
    gdp_billion: 1.1,
    main_exports: {
      en: ['Frozen Fish ($35M)', 'Kava Root & Extract ($18M)', 'Copra & Coconut Oil ($12M)', 'Beef ($8M)', 'Cocoa ($5M)'],
      es: ['Pescado congelado ($35M)', 'Raíz y extracto de kava ($18M)', 'Copra y aceite de coco ($12M)', 'Carne de res orgánica ($8M)', 'Cacao ($5M)'],
      total_val_billion: 0.08,
    },
    main_imports: {
      en: ['Refined Petroleum ($95M)', 'Special Purpose Ships ($45M)', 'Meat ($25M)', 'Cars & Delivery Trucks ($22M)'],
      es: ['Petróleo refinado ($95M)', 'Buques y embarcaciones ($45M)', 'Carne ($25M)', 'Vehículos ($22M)'],
      total_val_billion: 0.42,
    },
    natural_wealth: {
      en: ['Mount Yasur active volcano (world’s most continuously active accessible volcano)', 'Kava (Piper methysticum - premier natural relaxing beverage export)', 'Rich volcanic soil for organic cattle ranching', 'Pristine blue holes and submarine caves on Espiritu Santo'],
      es: ['Volcán Yasur (uno de los volcanes activos más accesibles del mundo)', 'Cultivo de kava (planta tradicional relajante de exportación)', 'Ganadería vacuna orgánica en suelos volcánicos', 'Pozas azules y cavernas submarinas en Espíritu Santo'],
    },
    physical_geography_summary: {
      en: 'A Y-shaped volcanic archipelago of roughly 83 islands in the southwestern Pacific, situated on the active convergent plate boundary of the New Hebrides trench.',
      es: 'Archipiélago volcánico con forma de Y de 83 islas en el Pacífico suroccidental, situado en la fosa de las Nuevas Hébridas con intensa actividad sísmica y volcánica.'
    },
    landforms: [
      {
        id: 'vu-volcano-yasur',
        type: 'volcano',
        name_en: 'Mount Yasur (Tanna Island)',
        name_es: 'Monte Yasur (Isla de Tanna)',
        coords: [-19.53, 169.447],
        elevation_m: 361,
        description_en: 'Active stratovolcano that has been erupting almost continuously for over 800 years, dubbed the "Lighthouse of the Pacific".',
        description_es: 'Estratovolcán en erupción continua desde hace más de 800 años, conocido como el "Faro del Pacífico".'
      }
    ],
    interesting_fact: {
      en: 'The Pentecost Island land-diving ritual (Naghol) in Vanuatu, where men jump from 30-meter wooden towers with only vines tied to their ankles, is the ancient predecessor to modern bungee jumping.',
      es: 'El ritual del salto del árbol (Naghol) en la isla de Pentecostés en Vanuatu, donde los hombres saltan desde torres de 30 metros atados solo con lianas a los tobillos, es el origen del puenting moderno.'
    },
    teks_alignment: ['TEKS 6.3C: Strombolian volcanism and subduction trench seismicity', 'TEKS 6.4A: Natural disaster resilience against recurring tropical cyclones']
  },

  // =========================================================================
  // 6. SAMOA (WSM)
  // =========================================================================
  {
    id: 'WSM',
    iso2: 'ws',
    iso3: 'WSM',
    name_en: 'Samoa',
    name_es: 'Samoa',
    continent: 'Oceania',
    continent_es: 'Oceanía',
    capital_en: 'Apia',
    capital_es: 'Apia',
    capital_coords: [-13.8333, -171.7667],
    center_coords: [-13.7590, -172.1046],
    zoom_level: 8,
    population: '220,000',
    area_sqkm: '2,842 km²',
    gdp_billion: 0.95,
    main_exports: {
      en: ['Insulated Ignition Wiring ($18M)', 'Non-fillet Frozen Fish ($12M)', 'Taro & Bananas ($8M)', 'Beer ($5M)', 'Virgin Coconut Oil ($4M)'],
      es: ['Cableado eléctrico para automóviles ($18M)', 'Pescado congelado ($12M)', 'Taro y banano ($8M)', 'Cerveza local ($5M)', 'Aceite de coco virgen ($4M)'],
      total_val_billion: 0.05,
    },
    main_imports: {
      en: ['Refined Petroleum ($75M)', 'Poultry Meat ($35M)', 'Cars ($18M)', 'Broadcasting Equipment ($12M)'],
      es: ['Petróleo refinado ($75M)', 'Carne de ave ($35M)', 'Vehículos ($18M)', 'Equipos celulares ($12M)'],
      total_val_billion: 0.45,
    },
    natural_wealth: {
      en: ['Savai’i island volcanic shield (one of the largest shield volcanoes in the South Pacific)', 'Alofaaga blowholes (natural sea vents shooting water hundreds of feet into the air)', 'Arable volcanic soil for taro and cocoa', 'To Sua Ocean Trench natural turquoise cenote'],
      es: ['Volcán en escudo de Savai’i', 'Bufaderos marinos de Alofaaga que disparan columnas de agua de decenas de metros', 'Suelos volcánicos fértiles para taro y cacao', 'Cenote oceánico natural To Sua'],
    },
    physical_geography_summary: {
      en: 'A Polynesian archipelago dominated by the two large mountainous volcanic islands of Upolu and Savai’i, wrapped in coral barrier reefs and lush tropical rainforests.',
      es: 'Archipiélago polinesio dominado por las dos grandes islas volcánicas de Upolu y Savai’i, rodeadas de arrecifes de coral y vegetación tropical.'
    },
    landforms: [
      {
        id: 'ws-peak-silisili',
        type: 'volcano',
        name_en: 'Mount Silisili',
        name_es: 'Monte Silisili',
        coords: [-13.62, -172.49],
        elevation_m: 1858,
        description_en: 'Highest mountain peak in Samoa, an active shield volcano on the island of Savai’i.',
        description_es: 'Punto más alto de Samoa (1,858m), en la isla de Savai’i.'
      }
    ],
    interesting_fact: {
      en: 'In late 2011, Samoa skipped December 30th entirely by jumping west across the International Date Line to align its business calendar with Australia and New Zealand, its primary trading partners.',
      es: 'A finales de 2011, Samoa eliminó por completo el día 30 de diciembre de su calendario al saltar al oeste de la Línea Internacional de Cambio de Fecha para sincronizar su comercio con Australia y Nueva Zelanda.'
    },
    teks_alignment: ['TEKS 6.3B: International Date Line geopolitics and economic alignment', 'TEKS 6.4C: Shield volcanic landforms and marine blowhole geomorphology']
  },

  // =========================================================================
  // 7. TONGA (TON)
  // =========================================================================
  {
    id: 'TON',
    iso2: 'to',
    iso3: 'TON',
    name_en: 'Tonga',
    name_es: 'Tonga',
    continent: 'Oceania',
    continent_es: 'Oceanía',
    capital_en: 'Nukuʻalofa',
    capital_es: 'Nukualofa',
    capital_coords: [-21.1394, -175.2018],
    center_coords: [-21.1789, -175.1982],
    zoom_level: 8,
    population: '107,000',
    area_sqkm: '747 km²',
    gdp_billion: 0.52,
    main_exports: {
      en: ['Squash & Pumpkins ($8M)', 'Yams & Root Vegetables ($4M)', 'Vanilla Beans ($2M)', 'Tuna & Fish ($2M)'],
      es: ['Calabazas kabocha ($8M)', 'Ñames y tubérculos ($4M)', 'Vainilla ($2M)', 'Atún y pescado fresco ($2M)'],
      total_val_billion: 0.02,
    },
    main_imports: {
      en: ['Refined Petroleum ($55M)', 'Poultry Meat ($22M)', 'Cars & Delivery Trucks ($14M)', 'Wheat Flour ($8M)'],
      es: ['Petróleo refinado ($55M)', 'Carne de ave ($22M)', 'Vehículos ($14M)', 'Harina de trigo ($8M)'],
      total_val_billion: 0.28,
    },
    natural_wealth: {
      en: ['Tonga Trench (second deepest oceanic trench on Earth reaching 10,882 meters depth)', 'Hunga Tonga-Hunga Haʻapai submarine volcanic caldera', 'Fertile limestone and volcanic soils for vanilla and squash', 'Humpback whale breeding sanctuary'],
      es: ['Fosa de Tonga (la segunda fosa oceánica más profunda del planeta con 10,882m)', 'Caldera volcánica submarina de Hunga Tonga', 'Vainilla y calabaza en suelos volcánicos fértiles', 'Santuario de cría de ballenas jorobadas'],
    },
    physical_geography_summary: {
      en: 'A Polynesian kingdom comprising 171 islands spread across 700,000 km² of the Pacific, structured into a western volcanic island arc and an eastern chain of raised coral limestone islands.',
      es: 'Reino polinesio de 171 islas repartidas en 700,000 km² de océano, organizado en un arco volcánico occidental y una cadena oriental de islas de piedra caliza coralina.'
    },
    landforms: [
      {
        id: 'to-trench-tonga',
        type: 'bay',
        name_en: 'Tonga Trench (Horizon Deep)',
        name_es: 'Fosa de Tonga (Abismo Horizon)',
        coords: [-23.0, -174.5],
        elevation_m: -10882,
        description_en: 'Second-deepest trench in the world, plunging to 10,882 meters where the Pacific Plate subducts under the Indo-Australian Plate.',
        description_es: 'La segunda fosa marina más profunda del planeta (10,882m), en la subducción de la placa del Pacífico.'
      }
    ],
    interesting_fact: {
      en: 'The January 2022 eruption of the Hunga Tonga-Hunga Haʻapai submarine volcano produced the largest atmospheric explosion recorded in modern history, sending an ash plume 57 kilometers (35 miles) high into the mesosphere.',
      es: 'La erupción del volcán submarino Hunga Tonga en enero de 2022 generó la mayor explosión atmosférica registrada con instrumental moderno, lanzando una columna de ceniza a 57 km de altitud.'
    },
    teks_alignment: ['TEKS 6.3C: Subduction zone megathrusts and submarine explosive volcanism', 'TEKS 6.4C: Ocean trench bathymetry and tsunami generation']
  },

  // =========================================================================
  // 8. MICRONESIA (FSM)
  // =========================================================================
  {
    id: 'FSM',
    iso2: 'fm',
    iso3: 'FSM',
    name_en: 'Federated States of Micronesia',
    name_es: 'Micronesia (Estados Federados)',
    continent: 'Oceania',
    continent_es: 'Oceanía',
    capital_en: 'Palikir',
    capital_es: 'Palikir',
    capital_coords: [6.9248, 158.1611],
    center_coords: [7.4256, 150.5508],
    zoom_level: 6,
    population: '115,000',
    area_sqkm: '702 km²',
    gdp_billion: 0.46,
    main_exports: {
      en: ['Skipjack & Yellowfin Tuna ($65M)', 'Foreign Fishing Vessel Licenses ($45M)', 'Kava & Betel Nuts ($2M)'],
      es: ['Atún listado y de aleta amarilla ($65M)', 'Licencias de pesca en su ZEE ($45M)', 'Nuez de betel y kava ($2M)'],
      total_val_billion: 0.08,
    },
    main_imports: {
      en: ['Refined Petroleum ($45M)', 'Poultry Meat & Fish ($25M)', 'Cars & Trucks ($12M)', 'Rice ($8M)'],
      es: ['Petróleo refinado ($45M)', 'Carne de ave y alimentos ($25M)', 'Vehículos ($12M)', 'Arroz ($8M)'],
      total_val_billion: 0.22,
    },
    natural_wealth: {
      en: ['Massive Exclusive Economic Zone spanning nearly 3 million km² of the western Pacific', 'Ancient megalithic city of Nan Madol (the "Venice of the Pacific" built on coral reefs)', 'Chuuk Lagoon (world’s greatest underwater shipwreck diving haven)', 'Pristine tuna migration corridors'],
      es: ['Inmensa Zona Económica Exclusiva de casi 3 millones de km² en el Pacífico', 'Ciudad megalítica ancestral de Nan Madol (la "Venecia del Pacífico")', 'Laguna de Chuuk (paraíso mundial de buceo en pecios submarinos)', 'Rutas migratorias de atún'],
    },
    physical_geography_summary: {
      en: 'Comprises 607 islands across four states (Yap, Chuuk, Pohnpei, Kosrae) stretching nearly 2,700 km east-to-west, ranging from high mountainous volcanic islands cloaked in rainforest to low coral atolls.',
      es: 'Formado por 607 islas repartidas en 2,700 km de este a oeste en cuatro estados (Yap, Chuuk, Pohnpei y Kosrae), desde montañas volcánicas selváticas hasta atolones coralinos bajos.'
    },
    landforms: [
      {
        id: 'fm-city-nanmadol',
        type: 'island',
        name_en: 'Nan Madol Ruins',
        name_es: 'Ruinas de Nan Madol',
        coords: [6.84, 158.33],
        description_en: 'Ancient stone city constructed on 92 artificial islets atop a coral reef using colossal basalt hexagonal columns.',
        description_es: 'Ciudad megalítica de piedra construida sobre 92 islotes artificiales sobre el arrecife de coral con columnas de basalto.'
      }
    ],
    interesting_fact: {
      en: 'The state of Yap in Micronesia is famous for Rai stones: massive carved limestone discs up to 3.6 meters (12 feet) in diameter that were quarried hundreds of miles away and functioned as the world’s heaviest traditional currency.',
      es: 'La isla de Yap es célebre por sus piedras Rai: discos gigantes de piedra caliza de hasta 3.6 metros de diámetro utilizados como moneda tradicional.'
    },
    teks_alignment: ['TEKS 6.8A: Sovereign Exclusive Economic Zones (EEZ) dwarfing land surface area', 'TEKS 6.3B: Megalithic engineering on oceanic atolls (Nan Madol)']
  },

  // =========================================================================
  // 9. PALAU (PLW)
  // =========================================================================
  {
    id: 'PLW',
    iso2: 'pw',
    iso3: 'PLW',
    name_en: 'Palau',
    name_es: 'Palaos',
    continent: 'Oceania',
    continent_es: 'Oceanía',
    capital_en: 'Ngerulmud',
    capital_es: 'Ngerulmud',
    capital_coords: [7.5004, 134.6242],
    center_coords: [7.5150, 134.5825],
    zoom_level: 8,
    population: '18,000',
    area_sqkm: '459 km²',
    gdp_billion: 0.28,
    main_exports: {
      en: ['Non-fillet Frozen Tuna ($12M)', 'Scrap Metal ($2M)', 'Computers & Equipment'],
      es: ['Atún congelado ($12M)', 'Chatarra de metales ($2M)', 'Equipos'],
      total_val_billion: 0.02,
    },
    main_imports: {
      en: ['Refined Petroleum ($45M)', 'Cars & Vehicles ($15M)', 'Meat & Poultry ($12M)', 'Machinery ($10M)'],
      es: ['Petróleo refinado ($45M)', 'Automóviles ($15M)', 'Carne de ave ($12M)', 'Maquinaria ($10M)'],
      total_val_billion: 0.18,
    },
    natural_wealth: {
      en: ['Rock Islands Southern Lagoon (UNESCO World Heritage labyrinth of 445 limestone mushroom-shaped isles)', 'Jellyfish Lake (marine lake populated by millions of stingless golden jellyfish)', 'Palau National Marine Sanctuary (closing 80% of its EEZ to all commercial fishing)', 'World’s first shark sanctuary'],
      es: ['Islas Chelbacheb / Islas Roca (445 islotes de piedra caliza con forma de hongo)', 'Lago de las Medusas (lago marino con millones de medusas doradas sin aguijón)', 'Santuario Marino Nacional de Palaos (protege el 80% de su ZEE de toda pesca comercial)', 'Primer santuario de tiburones del mundo'],
    },
    physical_geography_summary: {
      en: 'Located in the westernmost corner of Micronesia, comprising roughly 340 coral and volcanic islands enclosed by a single massive barrier reef system.',
      es: 'Situado en el extremo occidental de Micronesia, compuesto por 340 islas de origen volcánico y coralino rodeadas por una gran barrera de arrecifes.'
    },
    landforms: [
      {
        id: 'pw-islands-rock',
        type: 'archipelago',
        name_en: 'Rock Islands (Chelbacheb)',
        name_es: 'Islas Roca (Chelbacheb)',
        coords: [7.25, 134.38],
        description_en: 'Cluster of 445 uninhabited limestone and coral reef islands eroded at the waterline into mushroom profiles, housing marine lakes.',
        description_es: 'Conjunto de 445 islotes calizos esculpidos por el mar con forma de hongo que albergan lagos marinos cerrados.'
      }
    ],
    interesting_fact: {
      en: 'Palau created the world’s first "eco-pledge": upon arrival, international visitors must have a stamped pledge stamped directly into their passports, promising the children of Palau to tread lightly and protect the island environment.',
      es: 'Palaos exige a todos los turistas firmar un compromiso ecológico ("Palau Pledge") estampado en su pasaporte, prometiendo a los niños de la isla cuidar el medio ambiente.'
    },
    teks_alignment: ['TEKS 6.4A: Global leadership in marine sanctuary conservation', 'TEKS 6.3C: Karst dissolution creating isolated marine lakes']
  },

  // =========================================================================
  // 10. MARSHALL ISLANDS (MHL)
  // =========================================================================
  {
    id: 'MHL',
    iso2: 'mh',
    iso3: 'MHL',
    name_en: 'Marshall Islands',
    name_es: 'Islas Marshall',
    continent: 'Oceania',
    continent_es: 'Oceanía',
    capital_en: 'Majuro',
    capital_es: 'Majuro',
    capital_coords: [7.1164, 171.1859],
    center_coords: [7.1315, 171.1845],
    zoom_level: 8,
    population: '42,000',
    area_sqkm: '181 km²',
    gdp_billion: 0.28,
    main_exports: {
      en: ['Passenger & Cargo Ship Registry ($12B)', 'Non-fillet Frozen Tuna ($85M)', 'Copra Cake ($4M)'],
      es: ['Registro marítimo de buques y bandera de conveniencia ($12B)', 'Atún congelado ($85M)', 'Torta de copra ($4M)'],
      total_val_billion: 0.12,
    },
    main_imports: {
      en: ['Passenger & Cargo Ships ($10B)', 'Refined Petroleum ($85M)', 'Meat ($18M)', 'Broadcasting Equipment ($8M)'],
      es: ['Buques mercantes ($10B)', 'Petróleo refinado ($85M)', 'Carne ($18M)', 'Equipos celulares ($8M)'],
      total_val_billion: 0.18,
    },
    natural_wealth: {
      en: ['World’s third largest open maritime ship registry by gross tonnage', 'Kwajalein Atoll (world’s largest coral atoll lagoon by enclosed water area, hosting Ronald Reagan Ballistic Missile Defense Test Site)', '2-million km² Pacific pelagic tuna fisheries', 'Bikini Atoll UNESCO historical site'],
      es: ['Tercer mayor registro marítimo de buques del mundo por tonelaje', 'Atolón de Kwajalein (la mayor laguna de atolón de coral del mundo por volumen encerrado)', 'Pesquerías de atún en 2 millones de km² de ZEE', 'Atolón Bikini'],
    },
    physical_geography_summary: {
      en: 'Consists of 29 low-lying coral atolls and 5 isolated islands comprising 1,156 individual islets, arranged into two parallel chains: the Ratak (sunrise) and Ralik (sunset) chains, with an average elevation of barely 2 meters.',
      es: 'Formado por 29 atolones de coral bajos y 5 islas aisladas organizados en dos cadenas paralelas (Ratak y Ralik), con una elevación media de apenas 2 metros sobre el nivel del mar.'
    },
    landforms: [
      {
        id: 'mh-atoll-kwajalein',
        type: 'archipelago',
        name_en: 'Kwajalein Atoll',
        name_es: 'Atolón de Kwajalein',
        coords: [9.18, 167.43],
        description_en: 'World’s largest coral atoll by enclosed lagoon area (surrounding a 2,174 km² lagoon with 97 islets).',
        description_es: 'El atolón de coral con la laguna interior más grande del mundo (encierra más de 2,174 km² de agua).'
      }
    ],
    interesting_fact: {
      en: 'Between 1946 and 1958, the United States conducted 67 nuclear bomb tests on Bikini and Enewetak Atolls in the Marshall Islands, including the 1954 Castle Bravo detonation (1,000 times more powerful than the Hiroshima bomb).',
      es: 'En las islas Marshall se realizaron 67 ensayos con bombas nucleares entre 1946 y 1958, incluyendo la detonación Castle Bravo en el atolón Bikini, 1,000 veces más potente que la de Hiroshima.'
    },
    teks_alignment: ['TEKS 6.4A: Sea level rise threatening low-lying coral atoll states', 'TEKS 6.7A: Global maritime flags of convenience and naval missile testing sites']
  },

  // =========================================================================
  // 11. KIRIBATI (KIR)
  // =========================================================================
  {
    id: 'KIR',
    iso2: 'ki',
    iso3: 'KIR',
    name_en: 'Kiribati',
    name_es: 'Kiribati',
    continent: 'Oceania',
    continent_es: 'Oceanía',
    capital_en: 'South Tarawa',
    capital_es: 'Tarawa Sur',
    capital_coords: [1.3291, 172.9790],
    center_coords: [1.8709, -157.3631],
    zoom_level: 5,
    population: '130,000',
    area_sqkm: '811 km²',
    gdp_billion: 0.28,
    main_exports: {
      en: ['Non-fillet Frozen Tuna ($110M)', 'Fishing Licenses ($140M revenue)', 'Copra ($5M)'],
      es: ['Atún congelado ($110M)', 'Venta de licencias de pesca ($140M en ingresos)', 'Copra ($5M)'],
      total_val_billion: 0.12,
    },
    main_imports: {
      en: ['Refined Petroleum ($42M)', 'Boats and Ships ($25M)', 'Rice & Sugar ($18M)', 'Meat ($12M)'],
      es: ['Petróleo refinado ($42M)', 'Barcos pesqueros ($25M)', 'Arroz y azúcar ($18M)', 'Carne ($12M)'],
      total_val_billion: 0.18,
    },
    natural_wealth: {
      en: ['Kiritimati (Christmas Island - world’s largest coral atoll by pure land surface area: 388 km²)', 'Massive 3.5-million km² Exclusive Economic Zone', 'Phoenix Islands Protected Area (PIPA - one of the largest marine protected reserves on Earth)', 'First country to see the sunrise on New Year’s Day'],
      es: ['Isla Kiritimati (isla de Navidad, el mayor atolón de coral del mundo por superficie de tierra: 388 km²)', 'Inmensa Zona Económica Exclusiva de 3.5 millones de km²', 'Área protegida de las Islas Fénix (PIPA)', 'Primer país del mundo en recibir el Año Nuevo'],
    },
    physical_geography_summary: {
      en: 'The only nation on Earth situated in all four hemispheres (Northern, Southern, Eastern, and Western). Consists of 32 low coral atolls and one raised limestone island (Banaba) spread across 3.5 million square kilometers of the central Pacific.',
      es: 'El único país del mundo situado en los cuatro hemisferios (norte, sur, este y oeste simultáneamente). Formado por 32 atolones coralinos bajos y la isla de Banaba repartidos en 3.5 millones de km² de océano.'
    },
    landforms: [
      {
        id: 'ki-atoll-kiritimati',
        type: 'island',
        name_en: 'Kiritimati (Christmas Island)',
        name_es: 'Kiritimati (Isla de Navidad)',
        coords: [1.87, -157.36],
        description_en: 'The world’s largest atoll by land area, accounting for over 70% of Kiribati’s total landmass.',
        description_es: 'El atolón de coral más grande del mundo por superficie terrestre (388 km²).'
      }
    ],
    interesting_fact: {
      en: 'Kiribati is the only country on Earth that spans across all four hemispheres: Northern, Southern, Eastern, and Western Hemispheres simultaneously.',
      es: 'Kiribati es el único país del planeta que se extiende por los cuatro hemisferios simultáneamente: hemisferio norte, sur, oriental y occidental.'
    },
    teks_alignment: ['TEKS 6.3B: Global geographic coordinate systems and hemispheric division', 'TEKS 6.4A: Relocation planning and adaptation to climate-induced sea rise']
  },

  // =========================================================================
  // 12. NAURU (NRU)
  // =========================================================================
  {
    id: 'NRU',
    iso2: 'nr',
    iso3: 'NRU',
    name_en: 'Nauru',
    name_es: 'Nauru',
    continent: 'Oceania',
    continent_es: 'Oceanía',
    capital_en: 'Yaren (de facto)',
    capital_es: 'Yaren (de facto)',
    capital_coords: [-0.5477, 166.9209],
    center_coords: [-0.5228, 166.9315],
    zoom_level: 11,
    population: '12,500',
    area_sqkm: '21 km²',
    gdp_billion: 0.15,
    main_exports: {
      en: ['Phosphate Rock ($35M)', 'Frozen Fish ($12M)'],
      es: ['Fosfatos de guano ($35M)', 'Pescado congelado ($12M)'],
      total_val_billion: 0.048,
    },
    main_imports: {
      en: ['Refined Petroleum ($38M)', 'Meat & Foodstuffs ($18M)', 'Cars ($6M)', 'Machinery ($5M)'],
      es: ['Petróleo refinado ($38M)', 'Alimentos y carnes ($18M)', 'Automóviles ($6M)', 'Maquinaria ($5M)'],
      total_val_billion: 0.095,
    },
    natural_wealth: {
      en: ['Historically held some of the richest surface phosphate rock (guano) deposits on Earth', 'Exclusive Economic Zone surrounding the isolated island with tuna stocks', 'Fringing coral reef providing coastal defense'],
      es: ['Riquísimos yacimientos históricos de fosfatos de guano fósil', 'Zona Económica Exclusiva en el Pacífico central rica en atún', 'Arrecife de coral periférico'],
    },
    physical_geography_summary: {
      en: 'The smallest island nation and third-smallest independent country in the world. A solitary raised coral limestone island in Micronesia, featuring a central plateau (Topside) heavily sculpted by decades of surface strip phosphate mining.',
      es: 'El estado insular más pequeño y tercer país independiente más diminuto del mundo (21 km²). Isla de roca caliza coralina con una meseta central (Topside) esculpida por la minería de fosfatos.'
    },
    landforms: [
      {
        id: 'nr-plateau-topside',
        type: 'plateau',
        name_en: 'Command Ridge & Topside',
        name_es: 'Command Ridge y Meseta Topside',
        coords: [-0.528, 166.919],
        elevation_m: 65,
        description_en: 'Highest point on Nauru (65m), featuring an eerie moonscape of jagged limestone pinnacles left behind by phosphate strip-mining.',
        description_es: 'Punto más alto de Nauru (65m), cubierto de agujas calizas que forman un paisaje lunar por la minería.'
      }
    ],
    interesting_fact: {
      en: 'In the late 1960s and 1970s, Nauru briefly held the highest GDP per capita in the entire world due to its massive exports of phosphate guano mined from the island’s interior.',
      es: 'En las décadas de 1960 y 1970, Nauru tuvo brevemente el PIB per cápita más alto del mundo gracias a la exportación masiva de fosfatos de guano acumulados durante milenios.'
    },
    teks_alignment: ['TEKS 6.5A: Economic boom-and-bust cycles driven by finite single-mineral depletion', 'TEKS 6.4A: Environmental devastation from open-cast surface strip mining']
  },

  // =========================================================================
  // 13. TUVALU (TUV)
  // =========================================================================
  {
    id: 'TUV',
    iso2: 'tv',
    iso3: 'TUV',
    name_en: 'Tuvalu',
    name_es: 'Tuvalu',
    continent: 'Oceania',
    continent_es: 'Oceanía',
    capital_en: 'Funafuti',
    capital_es: 'Funafuti',
    capital_coords: [-8.5211, 179.1962],
    center_coords: [-7.1095, 177.6493],
    zoom_level: 8,
    population: '11,200',
    area_sqkm: '26 km²',
    gdp_billion: 0.065,
    main_exports: {
      en: ['Internet Domain ".tv" Licensing ($10M)', 'Fishing Licenses to Foreign Fleets ($35M)', 'Frozen Fish ($2M)'],
      es: ['Licenciamiento del dominio de internet ".tv" ($10M)', 'Venta de licencias pesqueras ($35M)', 'Pescado ($2M)'],
      total_val_billion: 0.012,
    },
    main_imports: {
      en: ['Refined Petroleum ($14M)', 'Foodstuffs & Rice ($8M)', 'Machinery ($4M)', 'Cement ($2M)'],
      es: ['Petróleo refinado ($14M)', 'Alimentos y arroz ($8M)', 'Maquinaria ($4M)', 'Cemento ($2M)'],
      total_val_billion: 0.038,
    },
    natural_wealth: {
      en: ['Licensing rights to the lucrative top-level internet domain ".tv" (contracted to global streaming platforms)', '900,000 km² Exclusive Economic Zone rich in skipjack and yellowfin tuna', 'Funafuti marine lagoon and coral atoll biodiversity'],
      es: ['Derechos soberanos del dominio de internet ".tv" (clave para plataformas de streaming y televisión)', 'Zona Económica Exclusiva de 900,000 km² rica en atún', 'Laguna marina de Funafuti y atolones de coral'],
    },
    physical_geography_summary: {
      en: 'The fourth-smallest nation in the world: three reef islands and six coral atolls in western Polynesia, with an average elevation of less than 2 meters above sea level and a maximum point of just 4.6 meters.',
      es: 'El cuarto país más pequeño del mundo: tres islas de arrecife y seis atolones coralinos en la Polinesia occidental, con una altitud media inferior a 2 metros sobre el nivel del mar.'
    },
    landforms: [
      {
        id: 'tv-atoll-funafuti',
        type: 'archipelago',
        name_en: 'Funafuti Atoll',
        name_es: 'Atolón de Funafuti',
        coords: [-8.52, 179.2],
        description_en: 'Narrow coral atoll enclosing a massive 275 km² turquoise lagoon (Te Namo), home to more than half of Tuvalu’s population.',
        description_es: 'Atolón coralino que encierra una laguna marina de 275 km², donde habita más de la mitad del país.'
      }
    ],
    interesting_fact: {
      en: 'Tuvalu earned millions of dollars of national sovereign revenue by licensing its assigned country-code top-level internet domain name ".tv" to major technology and media streaming services.',
      es: 'Tuvalu financió gran parte de su presupuesto nacional y su entrada a la ONU en el año 2000 gracias a los ingresos por licenciar su dominio de internet ".tv" a empresas de transmisión de vídeo.'
    },
    teks_alignment: ['TEKS 6.7A: Novel sovereign digital assets (top-level internet domain licensing)', 'TEKS 6.4A: Sea level rise and climate migration in low-elevation atoll states']
  }
];
