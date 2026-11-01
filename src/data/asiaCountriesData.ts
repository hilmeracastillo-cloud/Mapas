import { CountryDossierData } from '../types/geography';

export const ALL_ASIA_ADDITIONAL_COUNTRIES: CountryDossierData[] = [
  // =========================================================================
  // 1. CHINA
  // =========================================================================
  {
    id: 'CHN',
    iso2: 'cn',
    iso3: 'CHN',
    name_en: 'China',
    name_es: 'China',
    continent: 'Asia',
    continent_es: 'Asia',
    capital_en: 'Beijing',
    capital_es: 'Pekín',
    capital_coords: [39.9042, 116.4074],
    center_coords: [35.8617, 104.1954],
    zoom_level: 4,
    population: '1,410,000,000',
    area_sqkm: '9,596,961 km²',
    gdp_billion: 17790,
    main_exports: {
      en: ['Broadcasting Equipment ($231B)', 'Computers & Office Machines ($180B)', 'Integrated Circuits ($156B)', 'Electric Vehicles & Batteries ($78B)', 'Solar Panels ($46B)'],
      es: ['Equipos de telecomunicaciones ($231B)', 'Computadoras y servidores ($180B)', 'Circuitos integrados ($156B)', 'Vehículos eléctricos y baterías ($78B)', 'Paneles solares ($46B)'],
      total_val_billion: 3590,
    },
    main_imports: {
      en: ['Crude Petroleum ($229B)', 'Integrated Circuits ($350B)', 'Iron Ore ($128B)', 'Gold ($72B)', 'Soybeans ($58B)'],
      es: ['Petróleo crudo ($229B)', 'Circuitos integrados ($350B)', 'Mineral de hierro ($128B)', 'Oro ($72B)', 'Soya ($58B)'],
      total_val_billion: 2560,
    },
    natural_wealth: {
      en: ['Vast rare-earth element reserves (Bayan Obo, ~70% of global refining)', 'Massive coal basins in Shanxi and Inner Mongolia', 'Hydroelectric mega-capacity (Three Gorges Dam)', 'Fertile alluvial basins along Yangtze and Yellow rivers'],
      es: ['Mayores reservas de tierras raras del mundo (Bayan Obo, ~70% del refino global)', 'Cuencas carboníferas colosales en Shanxi y Mongolia Interior', 'Megacapacidad hidroeléctrica (Presa de las Tres Gargantas)', 'Llanuras aluviales fértiles de los ríos Yangtsé y Amarillo'],
    },
    physical_geography_summary: {
      en: 'A step-like topography sloping from west to east: the towering Tibetan Plateau ("Roof of the World") and Himalayas descend into central plateaus and deserts (Gobi, Taklamakan), and finally to fertile coastal alluvial plains along the Pacific.',
      es: 'Topografía escalonada que desciende de oeste a este: la colosal meseta tibetana ("Techo del Mundo") y el Himalaya descienden hacia mesetas intermedias y desiertos (Gobi, Taklamakán), finalizando en llanuras aluviales densamente pobladas en la costa del Pacífico.'
    },
    landforms: [
      {
        id: 'cn-river-yangtze',
        type: 'river',
        name_en: 'Yangtze River (Chang Jiang)',
        name_es: 'Río Yangtsé (Chang Jiang)',
        coords: [31.2304, 121.4737],
        length_km: 6300,
        description_en: 'Longest river in Asia and third longest on Earth, generating vast agricultural wealth and powering the Three Gorges Dam.',
        description_es: 'Río más largo de Asia y tercero del planeta, columna vertebral agrícola y económica de China coronada por las Tres Gargantas.'
      },
      {
        id: 'cn-plateau-tibet',
        type: 'plateau',
        name_en: 'Tibetan Plateau',
        name_es: 'Meseta Tibetana (Techo del Mundo)',
        coords: [33.0, 88.0],
        elevation_m: 4500,
        description_en: 'Highest and largest plateau on Earth, acting as the "Water Tower of Asia" supplying fresh water to billions via ten major rivers.',
        description_es: 'La meseta más alta y extensa del planeta, reserva de agua dulce de Asia que alimenta los ríos que sustentan a más de mil millones de personas.'
      },
      {
        id: 'cn-desert-gobi',
        type: 'desert',
        name_en: 'Gobi Desert',
        name_es: 'Desierto de Gobi',
        coords: [42.59, 103.43],
        description_en: 'Cold rain-shadow desert formed by the rain barrier of the Himalayas, characterized by rocky pavements and extreme temperature swings.',
        description_es: 'Desierto frío continental formado por la sombra orográfica del Himalaya, con estepas pedregosas e inviernos polares.'
      }
    ],
    interesting_fact: {
      en: 'The Tibetan Plateau contains the third largest store of glacial ice on Earth after Antarctica and Greenland, feeding the Yangtze, Yellow, Mekong, Salween, and Brahmaputra rivers.',
      es: 'La meseta del Tíbet almacena la tercera reserva de hielo glaciar más grande del planeta después de la Antártida y Groenlandia, alimentando a diez de los mayores ríos asiáticos.'
    },
    teks_alignment: ['TEKS 6.3B: Human adaptation along river floodplains (Yangtze/Yellow)', 'TEKS 6.4C: Orographic rain shadows creating continental deserts (Gobi)']
  },

  // =========================================================================
  // 2. INDIA
  // =========================================================================
  {
    id: 'IND',
    iso2: 'in',
    iso3: 'IND',
    name_en: 'India',
    name_es: 'India',
    continent: 'Asia',
    continent_es: 'Asia',
    capital_en: 'New Delhi',
    capital_es: 'Nueva Delhi',
    capital_coords: [28.6139, 77.2090],
    center_coords: [20.5937, 78.9629],
    zoom_level: 5,
    population: '1,428,000,000',
    area_sqkm: '3,287,263 km²',
    gdp_billion: 3730,
    main_exports: {
      en: ['Refined Petroleum ($86B)', 'Pharmaceuticals & Vaccines ($25B)', 'Polished Diamonds & Jewelry ($24B)', 'Telecommunication Equipment ($16B)', 'Rice ($11B)'],
      es: ['Petróleo refinado ($86B)', 'Medicamentos y vacunas ($25B)', 'Diamantes pulidos y joyería ($24B)', 'Equipos de telecomunicaciones ($16B)', 'Arroz basmati ($11B)'],
      total_val_billion: 453,
    },
    main_imports: {
      en: ['Crude Petroleum ($172B)', 'Coal Briquettes ($49B)', 'Gold ($37B)', 'Integrated Circuits ($22B)', 'Palm Oil ($11B)'],
      es: ['Petróleo crudo ($172B)', 'Carbón ($49B)', 'Oro ($37B)', 'Circuitos integrados ($22B)', 'Aceite de palma ($11B)'],
      total_val_billion: 723,
    },
    natural_wealth: {
      en: ['Ganges-Brahmaputra alluvial silt farmland', 'Fourth largest coal reserves globally (Chota Nagpur Plateau)', 'Major bauxite, iron ore, and mica deposits', 'Tropical monsoon solar and wind potential'],
      es: ['Suelos aluviales hiperfértiles de la llanura Indo-Gangética', 'Cuarta reserva mundial de carbón (meseta de Chota Nagpur)', 'Grandes yacimientos de bauxita, hierro y mica', 'Riqueza hidrológica y solar impulsada por el monzón'],
    },
    physical_geography_summary: {
      en: 'Comprises three primary physical realms: the northern Himalayan tectonic mountain barrier, the vast fertile Indo-Gangetic Alluvial Plain, and the ancient elevated Deccan Plateau bordered by the Western and Eastern Ghats.',
      es: 'Comprende tres grandes unidades geográficas: la muralla montañosa del Himalaya al norte, la fértil llanura aluvial Indo-Gangética en el centro y la antigua meseta del Decán al sur flanqueada por los Ghats.'
    },
    landforms: [
      {
        id: 'in-river-ganges',
        type: 'river',
        name_en: 'Ganges River (Ganga)',
        name_es: 'Río Ganges (Ganga)',
        coords: [25.3176, 83.0062],
        length_km: 2525,
        description_en: 'Sacred lifeblood of India flowing from Himalayan glaciers through the Gangetic Plain to empty into the Bay of Bengal.',
        description_es: 'Río sagrado y vital de la India nacido en los glaciares del Himalaya, que irriga la llanura más densamente poblada del planeta.'
      },
      {
        id: 'in-peak-kanchenjunga',
        type: 'peak',
        name_en: 'Kangchenjunga',
        name_es: 'Kanchenjunga',
        coords: [27.7025, 88.1475],
        elevation_m: 8586,
        description_en: 'Third-highest mountain on Earth, located on the border between Sikkim (India) and Nepal.',
        description_es: 'Tercera montaña más alta del mundo (8,586m), situada en la frontera entre Sikkim (India) y Nepal.'
      },
      {
        id: 'in-desert-thar',
        type: 'desert',
        name_en: 'Thar Desert (Great Indian Desert)',
        name_es: 'Desierto de Thar',
        coords: [27.0, 71.0],
        description_en: 'Arid desert basin in northwestern India and eastern Pakistan, the most densely populated desert in the world.',
        description_es: 'Desierto arenoso en el noroeste de India y este de Pakistán, el desierto con mayor densidad de población del mundo.'
      }
    ],
    interesting_fact: {
      en: 'The Indian subcontinent was once an island detached from Madagascar 100 million years ago; its collision with Asia created the Himalayas, which continue to rise by 5 mm every year.',
      es: 'El subcontinente indio fue una isla separada de Madagascar hace 100 millones de años; su colisión con Eurasia formó el Himalaya, que aún sigue elevándose unos 5 mm cada año.'
    },
    teks_alignment: ['TEKS 6.3C: Continental drift and the Indo-Eurasian plate collision', 'TEKS 6.4B: Seasonal monsoon winds driving intensive wet-rice agriculture']
  },

  // =========================================================================
  // 3. INDONESIA
  // =========================================================================
  {
    id: 'IDN',
    iso2: 'id',
    iso3: 'IDN',
    name_en: 'Indonesia',
    name_es: 'Indonesia',
    continent: 'Asia',
    continent_es: 'Asia',
    capital_en: 'Jakarta (Nusantara)',
    capital_es: 'Yakarta (Nusantara)',
    capital_coords: [-6.2088, 106.8456],
    center_coords: [-0.7893, 113.9213],
    zoom_level: 5,
    population: '277,500,000',
    area_sqkm: '1,904,569 km²',
    gdp_billion: 1370,
    main_exports: {
      en: ['Palm Oil ($28B)', 'Coal Briquettes ($46B)', 'Ferroalloys & Nickel ($21B)', 'Petroleum Gas ($9B)', 'Rubber ($3.5B)'],
      es: ['Aceite de palma ($28B)', 'Carbón mineral ($46B)', 'Ferroaleaciones y níquel para baterías ($21B)', 'Gas de petróleo licuado ($9B)', 'Caucho natural ($3.5B)'],
      total_val_billion: 292,
    },
    main_imports: {
      en: ['Refined Petroleum ($16B)', 'Crude Petroleum ($10B)', 'Telephones ($5B)', 'Vehicle Parts ($4B)'],
      es: ['Petróleo refinado ($16B)', 'Petróleo crudo ($10B)', 'Teléfonos móviles ($5B)', 'Piezas de vehículos ($4B)'],
      total_val_billion: 237,
    },
    natural_wealth: {
      en: ['World’s largest nickel reserves (critical for global EV batteries)', 'Sundaland tropical biodiversity and peatlands', 'Second largest coal exporter on Earth', 'Geothermal energy along Sunda volcanic arc'],
      es: ['Mayor reserva de níquel del mundo (clave para baterías de autos eléctricos)', 'Selvas tropicales de Sundaland con alta biodiversidad', 'Segundo mayor exportador de carbón del planeta', 'Potencial geotérmico en el arco de Sunda'],
    },
    physical_geography_summary: {
      en: 'The world’s largest archipelagic state comprising over 17,500 islands straddling the Equator. Dominated by active volcanic arcs (Sunda Arc) formed by subduction of the Indo-Australian plate under the Eurasian plate.',
      es: 'El mayor estado insular del mundo con más de 17,500 islas sobre el ecuador terrestre. Caracterizado por conos volcánicos activos sobre el Cinturón de Fuego donde subduce la placa Indoaustraliana.'
    },
    landforms: [
      {
        id: 'id-volcano-krakatoa',
        type: 'volcano',
        name_en: 'Anak Krakatau (Krakatoa)',
        name_es: 'Anak Krakatau (Krakatoa)',
        coords: [-6.102, 105.423],
        elevation_m: 157,
        description_en: 'Infamous caldera volcano in the Sunda Strait whose cataclysmic 1883 eruption was heard 3,000 miles away.',
        description_es: 'Caldera volcánica en el estrecho de Sunda cuya erupción de 1883 generó el sonido más fuerte registrado en la historia moderna.'
      },
      {
        id: 'id-strait-malacca',
        type: 'strait',
        name_en: 'Strait of Malacca',
        name_es: 'Estrecho de Malaca',
        coords: [2.5, 101.5],
        description_en: 'World’s busiest maritime choke point connecting the Indian and Pacific Oceans; over 25% of global oil passes through here.',
        description_es: 'Punto de estrangulamiento marítimo más transitado del mundo entre Sumatra y Malasia, ruta de más del 25% del petróleo global.'
      },
      {
        id: 'id-peak-jayawijaya',
        type: 'peak',
        name_en: 'Puncak Jaya (Carstensz Pyramid)',
        name_es: 'Puncak Jaya (Pirámide de Carstensz)',
        coords: [-4.0833, 137.1833],
        elevation_m: 4884,
        description_en: 'Highest island peak in the world, located in Papua with rare equatorial glaciers.',
        description_es: 'Pico insular más alto del mundo (4,884m), en Papúa Occidental, que aún conserva glaciares ecuatoriales.'
      }
    ],
    interesting_fact: {
      en: 'Indonesia spans across three time zones and contains over 130 active volcanoes—more than any other single nation on Earth.',
      es: 'Indonesia alberga más de 130 volcanes activos, la mayor cantidad para cualquier país en la Tierra, y sus cenizas fertilizan suelos agrícolas que sustentan a más de 150 millones de personas solo en la isla de Java.'
    },
    teks_alignment: ['TEKS 6.3C: Volcanic island formation along subduction zones', 'TEKS 6.8A: Strait of Malacca as a premier global economic choke point']
  },

  // =========================================================================
  // 4. PAKISTAN
  // =========================================================================
  {
    id: 'PAK',
    iso2: 'pk',
    iso3: 'PAK',
    name_en: 'Pakistan',
    name_es: 'Pakistán',
    continent: 'Asia',
    continent_es: 'Asia',
    capital_en: 'Islamabad',
    capital_es: 'Islamabad',
    capital_coords: [33.6844, 73.0479],
    center_coords: [30.3753, 69.3451],
    zoom_level: 5,
    population: '240,500,000',
    area_sqkm: '881,913 km²',
    gdp_billion: 376,
    main_exports: {
      en: ['House Linens ($4.6B)', 'Rice ($2.4B)', 'Non-Knit Men’s Suits ($1.8B)', 'Refined Petroleum ($1.1B)', 'Surgical Instruments ($450M)'],
      es: ['Textiles para el hogar ($4.6B)', 'Arroz basmati ($2.4B)', 'Prendas de vestir confeccionadas ($1.8B)', 'Petróleo refinado ($1.1B)', 'Instrumentos quirúrgicos ($450M)'],
      total_val_billion: 31,
    },
    main_imports: {
      en: ['Refined Petroleum ($9.4B)', 'Petroleum Gas / LNG ($4.8B)', 'Crude Petroleum ($3.6B)', 'Palm Oil ($3.4B)', 'Wheat ($1.1B)'],
      es: ['Petróleo refinado ($9.4B)', 'Gas natural licuado ($4.8B)', 'Petróleo crudo ($3.6B)', 'Aceite de palma ($3.4B)', 'Trigo ($1.1B)'],
      total_val_billion: 66,
    },
    natural_wealth: {
      en: ['Indus River Basin (world’s largest contiguous irrigation canal network)', 'Karakoram and Hindu Kush glacial freshwater towers', 'Reko Diq copper-gold deposit in Balochistan', 'Khewra Salt Mine (second largest rock salt mine in the world)'],
      es: ['Cuenca del río Indo (la red de canales de irrigación continua más grande del mundo)', 'Torres de agua glaciar en el Karakóram y el Hindu Kush', 'Megayacimiento de cobre y oro de Reko Diq', 'Mina de sal de Khewra (sal rosa del Himalaya)'],
    },
    physical_geography_summary: {
      en: 'Stretches from the icy summits of the Karakoram and Hindu Kush in the north down the entire length of the fertile Indus River alluvial corridor, flanked by Balochistan’s arid plateau in the west and Thar Desert in the east.',
      es: 'Se extiende desde los picos glaciares del Karakóram y el Hindu Kush en el norte a lo largo de todo el valle irrigado del río Indo, flanqueado por la árida meseta de Baluchistán y el desierto de Thar.'
    },
    landforms: [
      {
        id: 'pk-peak-k2',
        type: 'peak',
        name_en: 'K2 (Mount Godwin-Austen)',
        name_es: 'K2 (Chogori)',
        coords: [35.8814, 76.5133],
        elevation_m: 8611,
        description_en: 'Second-highest peak on Earth, notorious among mountaineers as the "Savage Mountain" of the Karakoram Range.',
        description_es: 'Segunda montaña más alta del mundo (8,611m), conocida como la "Montaña Salvaje" en el Karakóram.'
      },
      {
        id: 'pk-river-indus',
        type: 'river',
        name_en: 'Indus River',
        name_es: 'Río Indo',
        coords: [24.0, 67.5],
        length_km: 3180,
        description_en: 'Cradle of ancient Indus Valley civilization, providing lifeblood irrigation to over 90% of Pakistani agriculture.',
        description_es: 'Cuna de la civilización del valle del Indo, nutre la red de irrigación agrícola más grande del planeta.'
      }
    ],
    interesting_fact: {
      en: 'Pakistan is home to more glaciers than any other country outside the polar regions—over 7,200 glaciers in the Karakoram, Himalaya, and Hindu Kush ranges.',
      es: 'Pakistán alberga más glaciares que cualquier otro país fuera de los polos: más de 7,200 glaciares que alimentan el río Indo.'
    },
    teks_alignment: ['TEKS 6.3B: River basins as cradles of early and modern civilizations', 'TEKS 6.4C: Alpine glaciation providing dry-season water supplies']
  },

  // =========================================================================
  // 5. BANGLADESH
  // =========================================================================
  {
    id: 'BGD',
    iso2: 'bd',
    iso3: 'BGD',
    name_en: 'Bangladesh',
    name_es: 'Bangladés',
    continent: 'Asia',
    continent_es: 'Asia',
    capital_en: 'Dhaka',
    capital_es: 'Daca',
    capital_coords: [23.8103, 90.4125],
    center_coords: [23.6850, 90.3563],
    zoom_level: 6,
    population: '171,000,000',
    area_sqkm: '147,570 km²',
    gdp_billion: 460,
    main_exports: {
      en: ['Knit T-shirts ($14B)', 'Men’s Suits & Trousers ($11B)', 'Knit Sweaters ($6.5B)', 'Footwear ($1.4B)', 'Jute Fibers ($900M)'],
      es: ['Camisetas de punto ($14B)', 'Pantalones y trajes ($11B)', 'Suéteres de punto ($6.5B)', 'Calzado ($1.4B)', 'Fibras de yute ($900M)'],
      total_val_billion: 52,
    },
    main_imports: {
      en: ['Raw Cotton ($10B)', 'Refined Petroleum ($7.8B)', 'Scrap Iron ($2.8B)', 'Wheat ($2.1B)', 'Palm Oil ($1.9B)'],
      es: ['Algodón en rama ($10B)', 'Petróleo refinado ($7.8B)', 'Chatarra de hierro ($2.8B)', 'Trigo ($2.1B)', 'Aceite de palma ($1.9B)'],
      total_val_billion: 82,
    },
    natural_wealth: {
      en: ['Ganges-Brahmaputra Delta (largest river delta on Earth)', 'World’s largest mangrove forest (Sundarbans)', 'Abundant freshwater fisheries in riverine networks', 'Offshore natural gas in Bay of Bengal'],
      es: ['Delta del Ganges-Brahmaputra (el mayor delta fluvial del mundo)', 'El manglar continuo más extenso del planeta (Sundarbans)', 'Riqueza en acuicultura y pesca dulceacuícola', 'Gas natural submarino en la Bahía de Bengala'],
    },
    physical_geography_summary: {
      en: 'An exceptionally low-lying, flat floodplain formed by the convergence of the Ganges, Brahmaputra (Jamuna), and Meghna rivers. Over 50% of the country lies below 10 meters elevation.',
      es: 'País sumamente plano y bajo dominado por el delta fluvial del Ganges, Brahmaputra y Meghna. Más del 50% del territorio se sitúa a menos de 10 metros sobre el nivel del mar.'
    },
    landforms: [
      {
        id: 'bd-delta-ganges',
        type: 'bay',
        name_en: 'Ganges-Brahmaputra Delta (Bengal Delta)',
        name_es: 'Delta del Ganges-Brahmaputra',
        coords: [22.0, 90.0],
        description_en: 'World’s largest river delta, depositing over 1 billion tons of nutrient-rich Himalayan sediment into the Bay of Bengal annually.',
        description_es: 'El delta fluvial más extenso de la Tierra, que deposita más de 1,000 millones de toneladas de sedimentos al año.'
      },
      {
        id: 'bd-forest-sundarbans',
        type: 'plain',
        name_en: 'Sundarbans Mangrove Forest',
        name_es: 'Manglar de los Sundarbans',
        coords: [21.9497, 89.1833],
        description_en: 'UNESCO mangrove biosphere spanning the coastline, acting as a natural coastal buffer against cyclone storm surges and home to the Bengal tiger.',
        description_es: 'El bosque de manglar más grande del mundo, muralla natural contra ciclones y hogar del tigre de Bengala.'
      }
    ],
    interesting_fact: {
      en: 'Bangladesh is one of the most densely populated nations on Earth (over 1,200 people/km²), where millions live on dynamic silt islands called "chars" that form and dissolve with monsoon floods.',
      es: 'Bangladés es uno de los países más densamente poblados del mundo (más de 1,200 hab/km²), donde millones de personas habitan en islas fluviales cambiantes llamadas "chars".'
    },
    teks_alignment: ['TEKS 6.4A: Delta silt deposition and recurring monsoon flooding', 'TEKS 6.3B: Natural mangrove barriers reducing cyclone vulnerability']
  },

  // =========================================================================
  // 6. PHILIPPINES
  // =========================================================================
  {
    id: 'PHL',
    iso2: 'ph',
    iso3: 'PHL',
    name_en: 'Philippines',
    name_es: 'Filipinas',
    continent: 'Asia',
    continent_es: 'Asia',
    capital_en: 'Manila',
    capital_es: 'Manila',
    capital_coords: [14.5995, 120.9842],
    center_coords: [12.8797, 121.7740],
    zoom_level: 5,
    population: '115,500,000',
    area_sqkm: '300,000 km²',
    gdp_billion: 436,
    main_exports: {
      en: ['Integrated Circuits & Semiconductor Components ($32B)', 'Office Machine Parts ($5.2B)', 'Insulated Wire ($2.8B)', 'Nickel Ores ($1.9B)', 'Bananas & Tropical Fruits ($1.6B)'],
      es: ['Circuitos integrados y semiconductores ($32B)', 'Piezas de computación ($5.2B)', 'Cables aislados ($2.8B)', 'Minerales de níquel ($1.9B)', 'Plátanos y frutas tropicales ($1.6B)'],
      total_val_billion: 78,
    },
    main_imports: {
      en: ['Integrated Circuits ($22B)', 'Refined Petroleum ($14B)', 'Coal Briquettes ($4.1B)', 'Cars ($3.8B)', 'Broadcast Electronics ($3.2B)'],
      es: ['Circuitos integrados ($22B)', 'Petróleo refinado ($14B)', 'Carbón ($4.1B)', 'Automóviles ($3.8B)', 'Electrónica de telecomunicaciones ($3.2B)'],
      total_val_billion: 137,
    },
    natural_wealth: {
      en: ['Coral Triangle marine epicenter (highest marine biodiversity on Earth)', 'Second largest global geothermal power producer', 'World-class nickel, copper, and gold reserves', 'Extensive coconut and tropical fruit plantations'],
      es: ['Epicentro marino del Triángulo de Coral (mayor biodiversidad marina del mundo)', 'Segundo mayor productor mundial de energía geotérmica', 'Grandes reservas de níquel, cobre y oro', 'Plantaciones de coco y frutas tropicales'],
    },
    physical_geography_summary: {
      en: 'An archipelago of 7,641 islands in the western Pacific. Formed along the Pacific Ring of Fire by intense tectonic subduction, producing active stratovolcanoes and the ultra-deep Philippine Trench.',
      es: 'Archipiélago de 7,641 islas en el Pacífico occidental. Situado en el Cinturón de Fuego, con numerosos volcanes activos y bordeado por la Fosa de Filipinas.'
    },
    landforms: [
      {
        id: 'ph-volcano-mayon',
        type: 'volcano',
        name_en: 'Mayon Volcano',
        name_es: 'Volcán Mayón',
        coords: [13.257, 123.685],
        elevation_m: 2463,
        description_en: 'Famous active stratovolcano renowned globally for its almost perfectly symmetrical conical shape.',
        description_es: 'Estratovolcán activo célebre en todo el mundo por su cono casi geométricamente perfecto.'
      },
      {
        id: 'ph-trench-philippine',
        type: 'bay',
        name_en: 'Philippine Trench',
        name_es: 'Fosa de Filipinas (Abismo de Galathea)',
        coords: [10.5, 126.5],
        elevation_m: -10540,
        description_en: 'Submarine oceanic trench plunging down to 10,540 meters where the Philippine Sea Plate dives under the archipelago.',
        description_es: 'Fosa submarina profunda que alcanza los 10,540 metros bajo el nivel del mar.'
      }
    ],
    interesting_fact: {
      en: 'The Philippines generates over 14% of its entire national electrical grid from clean volcanic steam (geothermal energy), pioneering renewable energy from its Ring of Fire location.',
      es: 'Filipinas genera más del 14% de su electricidad directamente del vapor volcánico subterráneo gracias a su ubicación en el Cinturón de Fuego.'
    },
    teks_alignment: ['TEKS 6.3C: Volcanic hazards and geothermal renewable energy', 'TEKS 6.4B: Island nations adapting to seasonal Pacific typhoons']
  },

  // =========================================================================
  // 7. VIETNAM
  // =========================================================================
  {
    id: 'VNM',
    iso2: 'vn',
    iso3: 'VNM',
    name_en: 'Vietnam',
    name_es: 'Vietnam',
    continent: 'Asia',
    continent_es: 'Asia',
    capital_en: 'Hanoi',
    capital_es: 'Hanói',
    capital_coords: [21.0285, 105.8542],
    center_coords: [14.0583, 108.2772],
    zoom_level: 5,
    population: '99,500,000',
    area_sqkm: '331,212 km²',
    gdp_billion: 430,
    main_exports: {
      en: ['Broadcasting Equipment & Smartphones ($52B)', 'Computers & Integrated Circuits ($44B)', 'Footwear ($24B)', 'Non-Knit Clothing ($17B)', 'Coffee ($4.2B)'],
      es: ['Smartphones y equipos de telecomunicaciones ($52B)', 'Computadoras y circuitos integrados ($44B)', 'Calzado deportivo ($24B)', 'Ropa y confección ($17B)', 'Café robusta ($4.2B)'],
      total_val_billion: 371,
    },
    main_imports: {
      en: ['Integrated Circuits ($54B)', 'Telephones ($14B)', 'Refined Petroleum ($11B)', 'Fabrics & Cotton ($10B)'],
      es: ['Circuitos integrados ($54B)', 'Teléfonos y componentes ($14B)', 'Petróleo refinado ($11B)', 'Tejidos y algodón ($10B)'],
      total_val_billion: 358,
    },
    natural_wealth: {
      en: ['Mekong and Red River fertile rice deltas ("Rice bowl of Southeast Asia")', 'World’s second largest bauxite reserves (Central Highlands)', 'Second largest coffee producer globally', 'Offshore oil and gas in South China Sea'],
      es: ['Deltas aluviales fértiles del río Mekong y río Rojo ("Tazón de arroz de Asia")', 'Segundas reservas mundiales de bauxita', 'Segundo exportador mundial de café', 'Hidrocarburos marinos en el Mar de China Meridional'],
    },
    physical_geography_summary: {
      en: 'S-shaped nation featuring rugged forested mountains (Annamite Range) hugging the western border, dropping into long coastal plains and anchored by two vast river deltas: the Red River in the north and the Mekong in the south.',
      es: 'País con forma de S delimitado por la cordillera Annamita al oeste, con llanuras costeras y dos inmensos deltas fluviales: el delta del Río Rojo al norte y el delta del Mekong al sur.'
    },
    landforms: [
      {
        id: 'vn-river-mekong',
        type: 'river',
        name_en: 'Mekong River Delta',
        name_es: 'Delta del Río Mekong',
        coords: [10.0, 105.8],
        length_km: 4350,
        description_en: 'Vast agricultural wetland network producing more than half of Vietnam’s national rice harvest.',
        description_es: 'Extensa red de canales aluviales que produce más de la mitad del arroz de Vietnam.'
      },
      {
        id: 'vn-bay-halong',
        type: 'bay',
        name_en: 'Ha Long Bay',
        name_es: 'Bahía de Ha Long',
        coords: [20.9101, 107.1839],
        description_en: 'Iconic UNESCO seascape featuring thousands of towering limestone karst pillars emerging from emerald sea waters.',
        description_es: 'Bahía con miles de pilares e islotes kársticos de piedra caliza esculpidos por la erosión marina.'
      }
    ],
    interesting_fact: {
      en: 'Vietnam is the world’s second largest exporter of coffee after Brazil, producing almost exclusively Robusta beans grown in the volcanic soil of the Central Highlands.',
      es: 'Vietnam es el segundo mayor exportador de café del mundo tras Brasil, especializándose en café robusta cultivado en los suelos volcánicos del Altiplano Central.'
    },
    teks_alignment: ['TEKS 6.4C: River deltas facilitating high-density agrarian populations', 'TEKS 6.7A: Global supply chains in electronics manufacturing']
  },

  // =========================================================================
  // 8. TURKEY / TÜRKIYE
  // =========================================================================
  {
    id: 'TUR',
    iso2: 'tr',
    iso3: 'TUR',
    name_en: 'Turkey (Türkiye)',
    name_es: 'Turquía (Türkiye)',
    continent: 'Asia',
    continent_es: 'Asia',
    capital_en: 'Ankara',
    capital_es: 'Ankara',
    capital_coords: [39.9334, 32.8597],
    center_coords: [38.9637, 35.2433],
    zoom_level: 5,
    population: '85,800,000',
    area_sqkm: '783,562 km²',
    gdp_billion: 1150,
    main_exports: {
      en: ['Cars & Commercial Vehicles ($19B)', 'Refined Petroleum ($12B)', 'Iron & Steel ($11B)', 'Knit Apparel ($10B)', 'Jewelry & Gold ($8B)'],
      es: ['Automóviles y vehículos comerciales ($19B)', 'Petróleo refinado ($12B)', 'Hierro y acero ($11B)', 'Ropa y tejidos ($10B)', 'Joyería y oro ($8B)'],
      total_val_billion: 256,
    },
    main_imports: {
      en: ['Gold Bullion ($30B)', 'Refined Petroleum ($28B)', 'Petroleum Gas ($19B)', 'Scrap Iron ($8B)', 'Cars ($7.5B)'],
      es: ['Oro en lingotes ($30B)', 'Petróleo refinado ($28B)', 'Gas de petróleo ($19B)', 'Chatarra de hierro ($8B)', 'Automóviles ($7.5B)'],
      total_val_billion: 362,
    },
    natural_wealth: {
      en: ['Over 70% of global boron mineral reserves (vital for ceramics, glass, semiconductors)', 'Anatolian plateau wheat and olive cultivation', 'Hydroelectric rivers (headwaters of Tigris and Euphrates)', 'Control of Turkish Straits (Bosphorus & Dardanelles)'],
      es: ['Más del 70% de las reservas mundiales de boro', 'Tierras de cultivo fértiles en la meseta de Anatolia', 'Cabeceras de los ríos Tigris y Éufrates', 'Control soberano de los estrechos del Bósforo y Dardanelos'],
    },
    physical_geography_summary: {
      en: 'A transcontinental bridge between Europe and Asia. The central Anatolian high plateau is bordered by the Pontic Mountains in the north and the Taurus Mountains in the south, traversed by the active North Anatolian strike-slip fault.',
      es: 'Puente geográfico entre Europa y Asia. La meseta central de Anatolia está flanqueada por los Montes Pónticos al norte y los Montes Tauro al sur, atravesada por la falla sismogénica de Anatolia del Norte.'
    },
    landforms: [
      {
        id: 'tr-strait-bosphorus',
        type: 'strait',
        name_en: 'Bosphorus Strait',
        name_es: 'Estrecho del Bósforo',
        coords: [41.117, 29.07],
        length_km: 31,
        description_en: 'Vital maritime choke point bisecting Istanbul, connecting the Black Sea to the Sea of Marmara and Mediterranean.',
        description_es: 'Estrecho marítimo intercontinental que divide Estambul y une el Mar Negro con el Mar de Mármara.'
      },
      {
        id: 'tr-peak-ararat',
        type: 'peak',
        name_en: 'Mount Ararat (Ağrı Dağı)',
        name_es: 'Monte Ararat (Ağrı Dağı)',
        coords: [39.7019, 44.2989],
        elevation_m: 5137,
        description_en: 'Dormant compound volcano crowned with permanent ice, the highest mountain in Turkey.',
        description_es: 'Estratovolcán inactivo coronado por nieves perpetuas, la cumbre más alta de Turquía (5,137m).'
      }
    ],
    interesting_fact: {
      en: 'Istanbul is the only metropolis in the world located on two different continents simultaneously (Europe and Asia), connected across the Bosphorus Strait by three suspension bridges and an undersea railway tunnel.',
      es: 'Estambul es la única megalópolis del planeta asentada simultáneamente en dos continentes (Europa y Asia), unidas a través del estrecho del Bósforo.'
    },
    teks_alignment: ['TEKS 6.8A: Control of maritime straits and choke points (Montreux Convention)', 'TEKS 6.3C: Strike-slip faulting and seismic hazards in Anatolia']
  },

  // =========================================================================
  // 9. IRAN
  // =========================================================================
  {
    id: 'IRN',
    iso2: 'ir',
    iso3: 'IRN',
    name_en: 'Iran',
    name_es: 'Irán',
    continent: 'Asia',
    continent_es: 'Asia',
    capital_en: 'Tehran',
    capital_es: 'Teherán',
    capital_coords: [35.6892, 51.3890],
    center_coords: [32.4279, 53.6880],
    zoom_level: 5,
    population: '89,000,000',
    area_sqkm: '1,648,195 km²',
    gdp_billion: 410,
    main_exports: {
      en: ['Crude & Refined Petroleum ($45B)', 'Ethylene Polymers & Petrochemicals ($11B)', 'Acyclic Alcohols ($4B)', 'Nuts & Pistachios ($1.2B)', 'Persian Carpets'],
      es: ['Petróleo crudo y refinado ($45B)', 'Polímeros y petroquímica ($11B)', 'Alcoholes acíclicos ($4B)', 'Frutos secos y pistachos ($1.2B)', 'Alfombras persas'],
      total_val_billion: 68,
    },
    main_imports: {
      en: ['Corn & Grain ($3.4B)', 'Rice ($2.1B)', 'Broadcasting Equipment ($1.8B)', 'Soybeans ($1.6B)', 'Pharmaceuticals ($1.4B)'],
      es: ['Maíz y cereales ($3.4B)', 'Arroz ($2.1B)', 'Equipos de transmisión ($1.8B)', 'Soya ($1.6B)', 'Medicamentos ($1.4B)'],
      total_val_billion: 54,
    },
    natural_wealth: {
      en: ['Second largest proven natural gas reserves in the world (South Pars Field)', 'Fourth largest proven petroleum reserves', 'Major zinc, copper, and iron ore deposits in Zagros', 'Rich saffron and pistachio agricultural oases'],
      es: ['Segundas reservas probadas de gas natural del mundo (Campo South Pars)', 'Cuarta reserva probada de petróleo crudo', 'Grandes depósitos de zinc, cobre y hierro en los Zagros', 'Mayor productor mundial de azafrán y pistachos'],
    },
    physical_geography_summary: {
      en: 'A high arid plateau ringed by formidable mountain ranges: the Alborz along the Caspian Sea and the rugged Zagros in the west and south, enclosing hyper-arid salt deserts (Dasht-e Kavir and Dasht-e Lut).',
      es: 'Elevada meseta árida protegida por cadenas montañosas: los montes Alborz al norte y los montes Zagros al oeste y sur, encerrando desiertos salinos interiores como el Dasht-e Kavir y Dasht-e Lut.'
    },
    landforms: [
      {
        id: 'ir-peak-damavand',
        type: 'volcano',
        name_en: 'Mount Damavand',
        name_es: 'Monte Damavand',
        coords: [35.9511, 52.1094],
        elevation_m: 5610,
        description_en: 'Potentially active stratovolcano in the Alborz Mountains, the highest peak in Iran and highest volcano in all of Asia.',
        description_es: 'Estratovolcán en la cordillera del Alborz, pico más alto de Irán y volcán más alto de Asia (5,610m).'
      },
      {
        id: 'ir-strait-hormuz',
        type: 'strait',
        name_en: 'Strait of Hormuz',
        name_es: 'Estrecho de Ormuz',
        coords: [26.56, 56.25],
        description_en: 'World’s most critical petroleum transit corridor linking the Persian Gulf with the Arabian Sea; over 20 million barrels of oil transit daily.',
        description_es: 'El paso petrolero más estratégico del planeta, por donde transita más del 20% del petróleo consumido a nivel global.'
      }
    ],
    interesting_fact: {
      en: 'The Dasht-e Lut desert in southeastern Iran has recorded satellite land surface temperatures of 70.7°C (159.3°F), making it one of the hottest surface spots ever measured on Earth.',
      es: 'El desierto de Lut ha registrado temperaturas terrestres por satélite de hasta 70.7°C, coronándose como uno de los lugares más calientes del planeta.'
    },
    teks_alignment: ['TEKS 6.8A: Strait of Hormuz as the premier global energy choke point', 'TEKS 6.4C: Qanat underground gravity canal systems for oasis irrigation']
  },

  // =========================================================================
  // 10. THAILAND
  // =========================================================================
  {
    id: 'THA',
    iso2: 'th',
    iso3: 'THA',
    name_en: 'Thailand',
    name_es: 'Tailandia',
    continent: 'Asia',
    continent_es: 'Asia',
    capital_en: 'Bangkok',
    capital_es: 'Bangkok',
    capital_coords: [13.7563, 100.5018],
    center_coords: [15.8700, 100.9925],
    zoom_level: 5,
    population: '71,800,000',
    area_sqkm: '513,120 km²',
    gdp_billion: 512,
    main_exports: {
      en: ['Office Machine Parts & Hard Drives ($24B)', 'Cars & Delivery Trucks ($16B)', 'Integrated Circuits ($11B)', 'Rubber ($8.5B)', 'Refined Petroleum ($7.8B)', 'Rice ($3.8B)'],
      es: ['Discos duros y piezas de computación ($24B)', 'Camionetas y automóviles ($16B)', 'Circuitos integrados ($11B)', 'Caucho natural ($8.5B)', 'Petróleo refinado ($7.8B)', 'Arroz jazmín ($3.8B)'],
      total_val_billion: 287,
    },
    main_imports: {
      en: ['Crude Petroleum ($29B)', 'Integrated Circuits ($14B)', 'Petroleum Gas ($11B)', 'Gold ($7.5B)', 'Broadcasting Equipment ($6B)'],
      es: ['Petróleo crudo ($29B)', 'Circuitos integrados ($14B)', 'Gas de petróleo ($11B)', 'Oro ($7.5B)', 'Equipos de telecomunicaciones ($6B)'],
      total_val_billion: 305,
    },
    natural_wealth: {
      en: ['Chao Phraya River fertile alluvial rice basin', 'World’s top exporter of natural rubber', 'Rich offshore natural gas fields in Gulf of Thailand', 'Extensive limestone karst ecosystems and tropical beaches'],
      es: ['Fértil cuenca arrocera aluvial del río Chao Phraya', 'Mayor exportador mundial de caucho natural', 'Yacimientos de gas natural en el Golfo de Tailandia', 'Biodiversidad kárstica y arrecifes tropicales'],
    },
    physical_geography_summary: {
      en: 'Structured into four regions: mountainous highlands in the north (Tenasserim Hills), the semi-arid Khorat Plateau in the northeast, the central Chao Phraya alluvial plain, and the narrow tropical Kra Isthmus extending south.',
      es: 'Dividida en cuatro regiones físicas: montañas selváticas al norte, la meseta de Khorat al noreste, la gran llanura aluvial del río Chao Phraya y el estrecho istmo de Kra al sur.'
    },
    landforms: [
      {
        id: 'th-river-chaophraya',
        type: 'river',
        name_en: 'Chao Phraya River',
        name_es: 'Río Chao Phraya',
        coords: [13.533, 100.583],
        length_km: 372,
        description_en: 'Principal river of Thailand flowing through Bangkok into the Gulf of Thailand, irrigating national rice production.',
        description_es: 'Río principal de Tailandia que atraviesa Bangkok hacia el Golfo de Tailandia, base del cultivo arrocero.'
      },
      {
        id: 'th-isthmus-kra',
        type: 'isthmus',
        name_en: 'Kra Isthmus',
        name_es: 'Istmo de Kra',
        coords: [10.2, 98.9],
        description_en: 'Narrowest part of the Malay Peninsula (44 km wide), long proposed as a shipping shortcut between the Indian Ocean and South China Sea.',
        description_es: 'Paso estrecho (44 km) en la península malaya, ruta estratégica proyectada para conectar el Océano Índico con el Pacífico.'
      }
    ],
    interesting_fact: {
      en: 'Thailand is the world’s leading exporter of canned tuna, natural rubber, and high-grade fragrant Jasmine rice, earning it the moniker "Kitchen of the World".',
      es: 'Tailandia es líder mundial en exportación de caucho natural, atún enlatado y arroz jazmín, apodada internacionalmente como "la cocina del mundo".'
    },
    teks_alignment: ['TEKS 6.4C: River canal adaptation in Bangkok ("Venice of the East")', 'TEKS 6.6B: Tropical commodity export economies in Southeast Asia']
  },

  // =========================================================================
  // 11. SOUTH KOREA
  // =========================================================================
  {
    id: 'KOR',
    iso2: 'kr',
    iso3: 'KOR',
    name_en: 'South Korea',
    name_es: 'Corea del Sur',
    continent: 'Asia',
    continent_es: 'Asia',
    capital_en: 'Seoul',
    capital_es: 'Seúl',
    capital_coords: [37.5665, 126.9780],
    center_coords: [35.9078, 127.7669],
    zoom_level: 6,
    population: '51,700,000',
    area_sqkm: '100,210 km²',
    gdp_billion: 1710,
    main_exports: {
      en: ['Integrated Circuits & Memory Chips ($108B)', 'Cars & Motor Vehicles ($58B)', 'Refined Petroleum ($54B)', 'Cargo & Container Ships ($18B)', 'Automobile Parts ($17B)'],
      es: ['Chips de memoria y circuitos integrados ($108B)', 'Automóviles y vehículos eléctricos ($58B)', 'Petróleo refinado ($54B)', 'Buques portacontenedores y metaneros ($18B)', 'Autopartes ($17B)'],
      total_val_billion: 683,
    },
    main_imports: {
      en: ['Crude Petroleum ($85B)', 'Integrated Circuits ($48B)', 'Petroleum Gas ($38B)', 'Coal Briquettes ($21B)', 'Refined Petroleum ($18B)'],
      es: ['Petróleo crudo ($85B)', 'Circuitos integrados ($48B)', 'Gas de petróleo licuado ($38B)', 'Carbón ($21B)', 'Petróleo refinado ($18B)'],
      total_val_billion: 731,
    },
    natural_wealth: {
      en: ['Extensive coastal harbors driving world-leading shipbuilding yards', 'Tidal energy potential along western ria coastline', 'Dense mountain forest conservation', 'Limestone and mineral building materials'],
      es: ['Profundos puertos naturales que albergan los mayores astilleros del mundo', 'Potencial de energía mareomotriz en la costa occidental', 'Reforestación montañosa intensiva', 'Piedra caliza y grafito'],
    },
    physical_geography_summary: {
      en: 'Occupies the southern half of the Korean Peninsula. Mostly mountainous (70%) with the Taebaek Range running north-to-south along the eastern spine, contrasting with fertile alluvial plains along the western Yellow Sea.',
      es: 'Ocupa el sur de la península coreana. Territorio montañoso en un 70% dominado por la cordillera de Taebaek al este, que desciende hacia llanuras aluviales y costas recortadas en el Mar Amarillo.'
    },
    landforms: [
      {
        id: 'kr-peak-hallasan',
        type: 'volcano',
        name_en: 'Hallasan (Mount Halla)',
        name_es: 'Hallasan (Isla de Jeju)',
        coords: [33.3617, 126.5292],
        elevation_m: 1947,
        description_en: 'Shield volcano with a crater lake forming the highest peak in South Korea on Jeju Island.',
        description_es: 'Volcán en escudo con lago de cráter que constituye el punto más alto de Corea del Sur en la isla de Jeju.'
      },
      {
        id: 'kr-river-han',
        type: 'river',
        name_en: 'Han River',
        name_es: 'Río Han',
        coords: [37.55, 126.9],
        length_km: 494,
        description_en: 'Historic river winding through Seoul, giving its name to the economic post-war rise ("Miracle on the Han River").',
        description_es: 'Río que atraviesa el corazón de Seúl, símbolo del desarrollo económico conocido como el "Milagro del Río Han".'
      }
    ],
    interesting_fact: {
      en: 'South Korea is the world’s undisputed leader in high-end semiconductor memory chips (producing over 60% of the world’s DRAM) and builds over 40% of the planet’s ultra-large container and LNG cargo ships.',
      es: 'Corea del Sur produce más del 60% de los chips de memoria DRAM del mundo y construye más del 40% de los buques metaneros de gas licuado del planeta en sus colosales astilleros de Ulsan y Geoje.'
    },
    teks_alignment: ['TEKS 6.7A: Technological innovation transforming a resource-poor nation into a global export superpower', 'TEKS 6.3C: Peninsula geomorphology and maritime access']
  },

  // =========================================================================
  // 12. MALAYSIA
  // =========================================================================
  {
    id: 'MYS',
    iso2: 'my',
    iso3: 'MYS',
    name_en: 'Malaysia',
    name_es: 'Malasia',
    continent: 'Asia',
    continent_es: 'Asia',
    capital_en: 'Kuala Lumpur',
    capital_es: 'Kuala Lumpur',
    capital_coords: [3.1390, 101.6869],
    center_coords: [4.2105, 101.9758],
    zoom_level: 6,
    population: '34,300,000',
    area_sqkm: '330,803 km²',
    gdp_billion: 430,
    main_exports: {
      en: ['Integrated Circuits ($78B)', 'Refined Petroleum ($28B)', 'Palm Oil ($18B)', 'Petroleum Gas ($14B)', 'Office Machine Parts ($12B)'],
      es: ['Circuitos integrados y semiconductores ($78B)', 'Petróleo refinado ($28B)', 'Aceite de palma ($18B)', 'Gas de petróleo licuado ($14B)', 'Piezas para computadoras ($12B)'],
      total_val_billion: 300,
    },
    main_imports: {
      en: ['Integrated Circuits ($52B)', 'Refined Petroleum ($26B)', 'Crude Petroleum ($10B)', 'Coal Briquettes ($4.8B)'],
      es: ['Circuitos integrados ($52B)', 'Petróleo refinado ($26B)', 'Petróleo crudo ($10B)', 'Carbón ($4.8B)'],
      total_val_billion: 250,
    },
    natural_wealth: {
      en: ['Offshore oil and natural gas fields (Petronas shelf)', 'World’s second largest palm oil producer', 'Penang "Silicon Valley of the East" microchip packaging hub', 'Ancient Bornean rainforests (Sabah and Sarawak)'],
      es: ['Plataforma continental rica en gas natural y petróleo', 'Segundo productor mundial de aceite de palma', 'Hub tecnológico de semiconductores en Penang', 'Selvas primarias ancestrales en Borneo'],
    },
    physical_geography_summary: {
      en: 'Divided into two distinct geographical regions separated by the South China Sea: Peninsular Malaysia with its central Main Range (Titiwangsa Mountains) and East Malaysia on the island of Borneo featuring Mount Kinabalu.',
      es: 'Dividida en dos regiones separadas por el Mar de la China Meridional: Malasia Peninsular (con los montes Titiwangsa) y Malasia Oriental en la isla de Borneo (con el monte Kinabalu).'
    },
    landforms: [
      {
        id: 'my-peak-kinabalu',
        type: 'peak',
        name_en: 'Mount Kinabalu',
        name_es: 'Monte Kinabalu',
        coords: [6.0753, 116.5583],
        elevation_m: 4095,
        description_en: 'Highest mountain in Malaysia, located in Sabah (Borneo), renowned for exceptional alpine and tropical biodiversity.',
        description_es: 'Punto más alto de Malasia (4,095m) en la isla de Borneo, santuario botánico con orquídeas y plantas carnívoras únicas.'
      }
    ],
    interesting_fact: {
      en: 'The state of Penang in Peninsular Malaysia accounts for roughly 13% of the world’s global backend semiconductor assembly, packaging, and testing operations.',
      es: 'La isla de Penang en Malasia ensambla y prueba más del 13% de todos los microchips y semiconductores fabricados a nivel mundial.'
    },
    teks_alignment: ['TEKS 6.8A: Control of the Malacca maritime trade choke point', 'TEKS 6.6B: Tropical agricultural concessions vs primary rainforest conservation']
  },

  // =========================================================================
  // 13. IRAQ
  // =========================================================================
  {
    id: 'IRQ',
    iso2: 'iq',
    iso3: 'IRQ',
    name_en: 'Iraq',
    name_es: 'Irak',
    continent: 'Asia',
    continent_es: 'Asia',
    capital_en: 'Baghdad',
    capital_es: 'Bagdad',
    capital_coords: [33.3152, 44.3661],
    center_coords: [33.2232, 43.6793],
    zoom_level: 5,
    population: '45,500,000',
    area_sqkm: '438,317 km²',
    gdp_billion: 260,
    main_exports: {
      en: ['Crude Petroleum ($111B)', 'Refined Petroleum ($2.4B)', 'Gold ($1.2B)', 'Dates ($120M)'],
      es: ['Petróleo crudo ($111B)', 'Petróleo refinado ($2.4B)', 'Oro ($1.2B)', 'Dátiles ($120M)'],
      total_val_billion: 115,
    },
    main_imports: {
      en: ['Refined Petroleum ($4.8B)', 'Cars ($3.2B)', 'Broadcasting Equipment ($2.1B)', 'Poultry Meat ($1.4B)', 'Wheat ($1.1B)'],
      es: ['Petróleo refinado ($4.8B)', 'Automóviles ($3.2B)', 'Equipos de comunicación ($2.1B)', 'Carne de ave ($1.4B)', 'Trigo ($1.1B)'],
      total_val_billion: 58,
    },
    natural_wealth: {
      en: ['Fifth largest proven crude oil reserves in the world (Kirkuk, Rumaila fields)', 'Historic alluvial floodplain of Tigris and Euphrates rivers', 'Mesopotamian Marshlands (largest wetland ecosystem in Western Eurasia)', 'Abundant date palm orchards'],
      es: ['Quinta reserva mundial de petróleo crudo (campos gigantes de Rumaila y Kirkuk)', 'Llanura aluvial histórica de los ríos Tigris y Éufrates', 'Marismas de Mesopotamia (mayor humedal del Medio Oriente)', 'Oasis de palmeras datileras'],
    },
    physical_geography_summary: {
      en: 'Defined by the ancient Mesopotamian alluvial plain between the Tigris and Euphrates rivers, bounded by the Zagros mountain wall to the east and the Syrian Desert to the west.',
      es: 'Definido por la llanura aluvial de Mesopotamia entre los ríos Tigris y Éufrates, flanqueado por los montes Zagros al este y el desierto de Siria al oeste.'
    },
    landforms: [
      {
        id: 'iq-river-tigris-euphrates',
        type: 'river',
        name_en: 'Tigris & Euphrates Rivers (Shatt al-Arab)',
        name_es: 'Ríos Tigris y Éufrates (Shatt al-Arab)',
        coords: [30.43, 48.16],
        length_km: 2800,
        description_en: 'Twin rivers forming the historic "Cradle of Civilization" (Mesopotamia), uniting as the Shatt al-Arab before entering the Persian Gulf.',
        description_es: 'Ríos legendarios de Mesopotamia ("Cuna de la Civilización") que se unen en el río Shatt al-Arab antes de desembocar en el Golfo Pérsico.'
      }
    ],
    interesting_fact: {
      en: 'Ancient Mesopotamia, meaning "land between the rivers" in modern Iraq, is where humanity developed the world’s first known written language (cuneiform script), the 60-minute hour, and the wheel.',
      es: 'En la antigua Mesopotamia (actual Irak) surgieron las primeras ciudades planificadas de la historia (Ur, Babilonia), la escritura cuneiforme y la división de la hora en 60 minutos.'
    },
    teks_alignment: ['TEKS 6.3B: River valley civilizations and ancient irrigation agriculture', 'TEKS 6.5A: Single-commodity extraction economies reliant on crude petroleum']
  },

  // =========================================================================
  // 14. AFGHANISTAN
  // =========================================================================
  {
    id: 'AFG',
    iso2: 'af',
    iso3: 'AFG',
    name_en: 'Afghanistan',
    name_es: 'Afganistán',
    continent: 'Asia',
    continent_es: 'Asia',
    capital_en: 'Kabul',
    capital_es: 'Kabul',
    capital_coords: [34.5553, 69.2075],
    center_coords: [33.9391, 67.7100],
    zoom_level: 5,
    population: '42,200,000',
    area_sqkm: '652,864 km²',
    gdp_billion: 15,
    main_exports: {
      en: ['Coal Briquettes ($480M)', 'Dried Fruits & Raisins ($340M)', 'Nuts & Pistachios ($210M)', 'Saffron & Spices ($110M)', 'Lapis Lazuli & Gems'],
      es: ['Carbón ($480M)', 'Frutas secas y uvas pasas ($340M)', 'Pistachos y frutos secos ($210M)', 'Azafrán y especias ($110M)', 'Lapislázuli y piedras preciosas'],
      total_val_billion: 1.8,
    },
    main_imports: {
      en: ['Wheat & Flour ($980M)', 'Refined Petroleum ($780M)', 'Fabrics ($340M)', 'Palm Oil ($290M)', 'Medicaments ($210M)'],
      es: ['Trigo y harina ($980M)', 'Petróleo refinado ($780M)', 'Telas ($340M)', 'Aceite de palma ($290M)', 'Medicamentos ($210M)'],
      total_val_billion: 6.8,
    },
    natural_wealth: {
      en: ['Untapped mineral deposits estimated at over $1 Trillion (lithium, rare earths, iron, copper at Aynak)', 'Historic Badakhshan lapis lazuli deposits mined for 6,000 years', 'Glacial headwaters of Amu Darya and Helmand rivers'],
      es: ['Inmensas reservas minerales vírgenes valoradas en más de 1 billón de dólares (litio, cobre de Mes Aynak, hierro)', 'Minas milenarias de lapislázuli de Badajshán', 'Ríos glaciares como el Amu Daria y el Helmand'],
    },
    physical_geography_summary: {
      en: 'A landlocked mountainous country dominated by the rugged Hindu Kush range, branching southwest from the Pamir Knot and dividing the northern plains from southern desert basins (Registan).',
      es: 'País montañoso sin litoral dominado por el imponente Hindu Kush, que se desprende del nudo del Pamir dividiendo las llanuras del norte de los desiertos áridos del sur (Registán).'
    },
    landforms: [
      {
        id: 'af-peak-noshaq',
        type: 'peak',
        name_en: 'Noshaq',
        name_es: 'Noshaq',
        coords: [36.43, 71.84],
        elevation_m: 7492,
        description_en: 'Highest peak in Afghanistan, situated in the glaciated Hindu Kush range along the border with Pakistan.',
        description_es: 'Cumbre más alta de Afganistán (7,492m), en el Hindu Kush junto a la frontera pakistaní.'
      },
      {
        id: 'af-pass-khyber',
        type: 'mountain',
        name_en: 'Khyber Pass Corridor',
        name_es: 'Paso de Khyber',
        coords: [34.1, 71.15],
        elevation_m: 1070,
        description_en: 'Historic mountain pass through the Spīn Ghar mountains connecting Central and South Asia, traversed by Alexander the Great and Silk Road caravans.',
        description_es: 'Paso montañoso histórico que conecta Asia Central con el subcontinente indio, ruta de la Seda y conquistas antiguas.'
      }
    ],
    interesting_fact: {
      en: 'Afghanistan’s Hindu Kush mountains contain some of the world’s largest unexplored deposits of lithium—a crucial component for modern batteries and electric vehicles.',
      es: 'Los geólogos estiman que las montañas de Afganistán albergan yacimientos masivos de litio, apodado por analistas como "la futura Arabia Saudita del litio".'
    },
    teks_alignment: ['TEKS 6.3A: Landlocked nations and extreme terrain barriers', 'TEKS 6.6B: Strategic clean-energy mineral reserves in unstable regions']
  },

  // =========================================================================
  // 15. UZBEKISTAN
  // =========================================================================
  {
    id: 'UZB',
    iso2: 'uz',
    iso3: 'UZB',
    name_en: 'Uzbekistan',
    name_es: 'Uzbekistán',
    continent: 'Asia',
    continent_es: 'Asia',
    capital_en: 'Tashkent',
    capital_es: 'Taskent',
    capital_coords: [41.2995, 69.2401],
    center_coords: [41.3775, 64.5853],
    zoom_level: 6,
    population: '36,400,000',
    area_sqkm: '447,400 km²',
    gdp_billion: 90,
    main_exports: {
      en: ['Gold ($7.2B)', 'Raw Cotton & Yarn ($1.8B)', 'Natural Gas ($1.2B)', 'Copper Products ($950M)', 'Fertilizers ($480M)'],
      es: ['Oro refinado ($7.2B)', 'Algodón en rama e hilados ($1.8B)', 'Gas natural ($1.2B)', 'Cobre refinado ($950M)', 'Fertilizantes nitrogenados ($480M)'],
      total_val_billion: 19.5,
    },
    main_imports: {
      en: ['Machinery & Equipment ($7.2B)', 'Cars & Vehicle Parts ($3.8B)', 'Iron & Steel ($2.4B)', 'Medicaments ($1.5B)'],
      es: ['Maquinaria industrial ($7.2B)', 'Autos y autopartes ($3.8B)', 'Hierro y acero ($2.4B)', 'Medicamentos ($1.5B)'],
      total_val_billion: 34,
    },
    natural_wealth: {
      en: ['Muruntau open-pit gold mine (one of the largest single gold-producing mines on Earth)', 'Fifth largest uranium producer globally', 'Extensive Kyzylkum Desert natural gas reserves', 'Intensive Fergana Valley agricultural basin'],
      es: ['Mina a cielo abierto de Muruntau (una de las mayores productoras de oro del mundo)', 'Quinto productor mundial de uranio', 'Gas natural en el desierto de Kyzylkum', 'Agricultura intensiva en el valle de Ferganá'],
    },
    physical_geography_summary: {
      en: 'One of only two "doubly landlocked" countries on Earth (surrounded entirely by other landlocked countries). Dominated by the Kyzylkum Desert and irrigated by the historic Syr Darya and Amu Darya rivers.',
      es: 'Uno de los dos únicos países doblemente aislados del mar en el mundo (rodeado exclusivamente por países sin litoral). Dominado por el desierto de Kyzylkum y cruzado por los ríos Amu Daria y Sir Daria.'
    },
    landforms: [
      {
        id: 'uz-lake-aral',
        type: 'lake',
        name_en: 'Aral Sea (Remnants & Aralkum Desert)',
        name_es: 'Mar de Aral (Remanentes y Desierto de Aralkum)',
        coords: [45.0, 59.5],
        description_en: 'Site of the 20th-century environmental disaster where excessive river diversion for cotton irrigation shrank the 4th-largest inland sea by over 90%.',
        description_es: 'Escenario de la catástrofe ambiental donde el desvío fluvial para algodón desecó el 90% de este mar interior.'
      },
      {
        id: 'uz-valley-fergana',
        type: 'valley',
        name_en: 'Fergana Valley',
        name_es: 'Valle de Ferganá',
        coords: [40.5, 71.5],
        description_en: 'Densely populated, hyper-fertile agricultural intermontane basin shared with Kyrgyzstan and Tajikistan.',
        description_es: 'Valle intermontano fértil y densamente poblado, corazón histórico del cultivo de seda y algodón en la Ruta de la Seda.'
      }
    ],
    interesting_fact: {
      en: 'Uzbekistan and Liechtenstein are the only two "doubly landlocked" nations in the world—to reach an open ocean coastline from Tashkent, one must cross at least two sovereign borders.',
      es: 'Uzbekistán y Liechtenstein son los únicos dos países "doblemente mediterráneos" del mundo: para llegar a un océano abierto desde Taskent hay que atravesar al menos dos países distintos.'
    },
    teks_alignment: ['TEKS 6.4A: Human modification of environments (Aral Sea desiccation)', 'TEKS 6.3A: Geographic constraints of doubly landlocked states']
  },

  // =========================================================================
  // 16. KAZAKHSTAN
  // =========================================================================
  {
    id: 'KAZ',
    iso2: 'kz',
    iso3: 'KAZ',
    name_en: 'Kazakhstan',
    name_es: 'Kazajistán',
    continent: 'Asia',
    continent_es: 'Asia',
    capital_en: 'Astana',
    capital_es: 'Astaná',
    capital_coords: [51.1694, 71.4491],
    center_coords: [48.0196, 66.9237],
    zoom_level: 4,
    population: '20,100,000',
    area_sqkm: '2,724,900 km²',
    gdp_billion: 260,
    main_exports: {
      en: ['Crude Petroleum ($47B)', 'Refined Copper ($3.8B)', 'Radioactive Chemicals / Uranium ($3.4B)', 'Ferroalloys ($3.1B)', 'Natural Gas ($2.4B)', 'Wheat ($1.8B)'],
      es: ['Petróleo crudo ($47B)', 'Cobre refinado ($3.8B)', 'Uranio y químicos radiactivos ($3.4B)', 'Ferroaleaciones ($3.1B)', 'Gas natural ($2.4B)', 'Trigo ($1.8B)'],
      total_val_billion: 84,
    },
    main_imports: {
      en: ['Cars & Automotive Parts ($4.6B)', 'Broadcast Equipment ($2.4B)', 'Packaged Medicaments ($1.8B)', 'Pipes of Iron ($1.4B)'],
      es: ['Autos y autopartes ($4.6B)', 'Equipos de transmisión ($2.4B)', 'Medicamentos ($1.8B)', 'Tuberías de acero ($1.4B)'],
      total_val_billion: 53,
    },
    natural_wealth: {
      en: ['World’s #1 producer and exporter of uranium (>43% of global supply)', 'Tengiz and Kashagan super-giant offshore Caspian oil fields', 'Vast Eurasian Steppe grain farmland', 'Chrome, copper, and zinc cratons'],
      es: ['Líder indiscutible mundial en producción y exportación de uranio (>43% global)', 'Campos gigantescos de petróleo en el mar Caspio (Kashagán y Tengiz)', 'Grandes llanuras de la estepa euroasiática para trigo', 'Cromo, zinc y carbón'],
    },
    physical_geography_summary: {
      en: 'The largest landlocked country on Earth. Dominated by the vast semi-arid Eurasian Steppe extending across the center, flanked by the Tian Shan and Altai mountain chains on its eastern borders and the Caspian Sea depression in the west.',
      es: 'El país sin salida al mar más grande del mundo y noveno país más extenso del planeta. Dominado por la inmensa estepa euroasiática, con los montes Altái y Tian Shan al este y la depresión del mar Caspio al oeste.'
    },
    landforms: [
      {
        id: 'kz-steppe-kazakh',
        type: 'plain',
        name_en: 'Kazakh Steppe',
        name_es: 'Estepa Kazaja',
        coords: [49.5, 68.0],
        description_en: 'The world’s largest dry steppe ecoregion, spanning over 800,000 km² across northern and central Kazakhstan.',
        description_es: 'La región de estepa seca más extensa del mundo (más de 800,000 km²), corazón de pastizales y trigales.'
      },
      {
        id: 'kz-lake-balkhash',
        type: 'lake',
        name_en: 'Lake Balkhash',
        name_es: 'Lago Baljash',
        coords: [46.5, 75.0],
        description_en: 'Semi-endorheic lake with a unique hydrology: the western half contains fresh water, while the eastern half is saline.',
        description_es: 'Lago endorreico único donde la mitad occidental es de agua dulce y la mitad oriental es salada.'
      }
    ],
    interesting_fact: {
      en: 'Kazakhstan is home to the Baikonur Cosmodrome, the world’s first and largest operational space launch facility, from where both Sputnik 1 and Yuri Gagarin were launched into space.',
      es: 'En el cosmódromo de Baikonur (Kazajistán) se lanzó el primer satélite artificial (Sputnik 1) y el primer ser humano al espacio (Yuri Gagarin).'
    },
    teks_alignment: ['TEKS 6.6B: Nuclear energy supply chains driven by uranium mining', 'TEKS 6.3A: Geopolitical strategies of the world’s largest landlocked state']
  },

  // =========================================================================
  // 17. TAIWAN
  // =========================================================================
  {
    id: 'TWN',
    iso2: 'tw',
    iso3: 'TWN',
    name_en: 'Taiwan',
    name_es: 'Taiwán',
    continent: 'Asia',
    continent_es: 'Asia',
    capital_en: 'Taipei',
    capital_es: 'Taipéi',
    capital_coords: [25.0330, 121.5654],
    center_coords: [23.6978, 120.9605],
    zoom_level: 7,
    population: '23,900,000',
    area_sqkm: '36,197 km²',
    gdp_billion: 760,
    main_exports: {
      en: ['Integrated Circuits & Advanced Microchips ($184B)', 'Office Machine Parts ($18B)', 'Broadcasting Equipment ($14B)', 'Petroleum Products ($11B)', 'Flat Panel Displays ($8B)'],
      es: ['Circuitos integrados avanzados y microchips ($184B)', 'Piezas de computadoras ($18B)', 'Equipos de telecomunicaciones ($14B)', 'Derivados de petróleo ($11B)', 'Pantallas planas ($8B)'],
      total_val_billion: 479,
    },
    main_imports: {
      en: ['Integrated Circuits ($76B)', 'Crude Petroleum ($32B)', 'Petroleum Gas ($18B)', 'Coal Briquettes ($14B)', 'Semiconductor Manufacturing Machinery ($24B)'],
      es: ['Circuitos integrados ($76B)', 'Petróleo crudo ($32B)', 'Gas de petróleo licuado ($18B)', 'Carbón ($14B)', 'Maquinaria litográfica para chips ($24B)'],
      total_val_billion: 428,
    },
    natural_wealth: {
      en: ['Global epicenter of cutting-edge sub-5nm semiconductor foundries (TSMC "Silicon Shield")', 'Deep natural harbors driving Pacific maritime logistics', 'Geothermal energy along volcanic fault lines', 'Dense subtropical mountain forest reserves'],
      es: ['Epicentro mundial de fabricación de microchips de vanguardia (TSMC y el "Escudo de Silicio")', 'Bahías naturales profundas en el estrecho de Taiwán', 'Energía geotérmica en fallas volcánicas', 'Bosques subtropicales de montaña'],
    },
    physical_geography_summary: {
      en: 'A mountainous island on the western edge of the Pacific Ring of Fire. The rugged Central Mountain Range (Chung-yang) occupies the eastern two-thirds with over 200 peaks exceeding 3,000m, while gentle fertile coastal plains stretch along the western coast.',
      es: 'Isla montañosa en el Cinturón de Fuego del Pacífico. La cordillera Central ocupa dos tercios del territorio con más de 200 cumbres sobre los 3,000 metros, contrastando con llanuras fértiles en la costa occidental.'
    },
    landforms: [
      {
        id: 'tw-peak-yushan',
        type: 'peak',
        name_en: 'Yushan (Mount Jade)',
        name_es: 'Yushan (Monte Jade)',
        coords: [23.47, 120.957],
        elevation_m: 3952,
        description_en: 'Highest mountain in Taiwan and the highest peak in East Asia outside the Himalayas.',
        description_es: 'Punto más alto de Taiwán (3,952m) y cumbre más alta del este de Asia fuera del Himalaya.'
      },
      {
        id: 'tw-strait-taiwan',
        type: 'strait',
        name_en: 'Taiwan Strait',
        name_es: 'Estrecho de Taiwán',
        coords: [24.0, 119.5],
        description_en: 'Strategic 160-km wide body of water separating Taiwan from mainland China, carrying vast global container traffic.',
        description_es: 'Canal marítimo estratégico de 160 km de ancho por donde transita cerca de la mitad de los buques portacontenedores del mundo.'
      }
    ],
    interesting_fact: {
      en: 'Taiwan fabricates over 60% of the world’s semiconductors and over 90% of the most advanced sub-3nm microchips that power modern artificial intelligence, smartphones, and supercomputers.',
      es: 'Taiwán fabrica más del 90% de los chips lógicos más avanzados del planeta, haciendo que su infraestructura de semiconductores sea considerada un pilar indispensable de la tecnología mundial.'
    },
    teks_alignment: ['TEKS 6.7A: Global specialization in semiconductor supply chains', 'TEKS 6.8A: Strategic waterways and security in the Taiwan Strait']
  },

  // =========================================================================
  // 18. UNITED ARAB EMIRATES
  // =========================================================================
  {
    id: 'ARE',
    iso2: 'ae',
    iso3: 'ARE',
    name_en: 'United Arab Emirates',
    name_es: 'Emiratos Árabes Unidos',
    continent: 'Asia',
    continent_es: 'Asia',
    capital_en: 'Abu Dhabi',
    capital_es: 'Abu Dabi',
    capital_coords: [24.4539, 54.3773],
    center_coords: [23.4241, 53.8478],
    zoom_level: 6,
    population: '9,500,000',
    area_sqkm: '83,600 km²',
    gdp_billion: 504,
    main_exports: {
      en: ['Crude Petroleum ($112B)', 'Gold & Diamonds Refined ($42B)', 'Refined Petroleum ($32B)', 'Broadcasting Equipment ($18B)', 'Petroleum Gas ($12B)'],
      es: ['Petróleo crudo ($112B)', 'Oro y diamantes refinados ($42B)', 'Petróleo refinado ($32B)', 'Equipos de telecomunicaciones ($18B)', 'Gas de petróleo ($12B)'],
      total_val_billion: 395,
    },
    main_imports: {
      en: ['Gold & Jewelry ($54B)', 'Broadcasting Equipment ($22B)', 'Cars ($16B)', 'Refined Petroleum ($11B)', 'Aircraft & Parts ($8B)'],
      es: ['Oro y joyería ($54B)', 'Equipos de transmisión ($22B)', 'Automóviles ($16B)', 'Petróleo refinado ($11B)', 'Aeronaves y componentes ($8B)'],
      total_val_billion: 345,
    },
    natural_wealth: {
      en: ['Seventh largest proven crude oil and natural gas reserves globally (Abu Dhabi)', 'World’s premier logistics and airline hub (Dubai International, Jebel Ali Port)', 'Immense solar irradiation in Arabian Desert', 'Abundant coastal brine for advanced desalination'],
      es: ['Séptima reserva mundial de petróleo y gas (Abu Dabi)', 'Hub logístico, marítimo y aeroportuario líder (Jebel Ali y Dubái)', 'Radiación solar desértica extrema para megaparques solares', 'Desalinización de agua de mar'],
    },
    physical_geography_summary: {
      en: 'Situated along the southeastern edge of the Arabian Peninsula. Dominated by hyper-arid sand deserts merging into the Rub’ al Khali, with coastal salt flats (sabkhas) along the Persian Gulf and the Hajar Mountains in the northeast.',
      es: 'Situado en la península arábiga. Predominan los mares de dunas desérticas que enlazan con el Rub al-Jali, llanuras salinas costeras (sabjas) y los montes Hajar al noreste.'
    },
    landforms: [
      {
        id: 'ae-mountain-hajar',
        type: 'mountain',
        name_en: 'Hajar Mountains',
        name_es: 'Montes Hajar',
        coords: [25.0, 56.2],
        elevation_m: 1934,
        description_en: 'Rugged ophiolite mountain range along the Musandam Peninsula separating the UAE from the Gulf of Oman.',
        description_es: 'Cordillera árida rocosa formada por corteza oceánica sobrepuesta (ofiolita) frente al Golfo de Omán.'
      }
    ],
    interesting_fact: {
      en: 'The UAE built Jebel Ali in Dubai, the largest man-made harbor in the world and the busiest container port in the Middle East, transforming barren desert coast into a global re-export empire.',
      es: 'Dubái construyó el puerto de Jebel Ali, el mayor puerto artificial creado por el ser humano en la historia, convirtiendo la costa desértica en el nodo logístico de mayor tránsito de Oriente Medio.'
    },
    teks_alignment: ['TEKS 6.5A: Reinvesting hydrocarbon revenue into post-oil green energy and logistics', 'TEKS 6.8A: Proximity to the Strait of Hormuz oil corridor']
  },

  // =========================================================================
  // 19. ISRAEL
  // =========================================================================
  {
    id: 'ISR',
    iso2: 'il',
    iso3: 'ISR',
    name_en: 'Israel',
    name_es: 'Israel',
    continent: 'Asia',
    continent_es: 'Asia',
    capital_en: 'Jerusalem',
    capital_es: 'Jerusalén',
    capital_coords: [31.7683, 35.2137],
    center_coords: [31.0461, 34.8516],
    zoom_level: 7,
    population: '9,800,000',
    area_sqkm: '20,770 km²',
    gdp_billion: 520,
    main_exports: {
      en: ['Cut & Polished Diamonds ($9.4B)', 'Integrated Circuits ($8.2B)', 'Packaged Medicaments ($2.8B)', 'Defense Electronics & Drones ($4.1B)', 'Precision Optical Instruments ($2.4B)'],
      es: ['Diamantes tallados y pulidos ($9.4B)', 'Circuitos integrados ($8.2B)', 'Medicamentos ($2.8B)', 'Electrónica de defensa y radares ($4.1B)', 'Instrumental óptico y médico ($2.4B)'],
      total_val_billion: 73,
    },
    main_imports: {
      en: ['Rough Diamonds ($5.2B)', 'Cars ($4.8B)', 'Integrated Circuits ($3.6B)', 'Refined Petroleum ($3.2B)', 'Broadcasting Equipment ($2.4B)'],
      es: ['Diamantes en bruto ($5.2B)', 'Automóviles ($4.8B)', 'Circuitos integrados ($3.6B)', 'Petróleo refinado ($3.2B)', 'Equipos de telecomunicaciones ($2.4B)'],
      total_val_billion: 107,
    },
    natural_wealth: {
      en: ['Leviathan and Tamar deepwater natural gas fields in Mediterranean', 'Dead Sea potash, bromine, and magnesium minerals', 'World-leading drip-irrigation and wastewater recycling (over 90% water recycled)', 'High-tech "Silicon Wadi" research ecosystem'],
      es: ['Megacampos de gas natural marino (Leviathan y Tamar) en el Mediterráneo', 'Potasio, bromo y sales minerales del Mar Muerto', 'Liderazgo mundial en riego por goteo y reciclaje de agua residual (>90%)', 'Ecosistema de innovación tecnológica ("Silicon Wadi")'],
    },
    physical_geography_summary: {
      en: 'Diverse microclimates packed into a narrow territory: Mediterranean coastal plain in the west, central Judean and Samarian limestone hills, the hyper-arid Negev Desert in the south, and the Great Jordan Rift Valley.',
      es: 'Territorio estrecho y variado: franja costera mediterránea al oeste, colinas calizas de Judea en el centro, el desierto del Néguev al sur y la profunda fosa tectónica del río Jordán.'
    },
    landforms: [
      {
        id: 'il-lake-deadsea',
        type: 'lake',
        name_en: 'Dead Sea (Salt Sea)',
        name_es: 'Mar Muerto',
        coords: [31.55, 35.47],
        elevation_m: -430,
        description_en: 'Hypersaline terminal lake sitting at the lowest land elevation on Earth (-430m), nearly 10 times saltier than the ocean.',
        description_es: 'Lago hipersalino endorreico situado en el punto terrestre más bajo del planeta (-430m), diez veces más salado que el océano.'
      },
      {
        id: 'il-desert-negev',
        type: 'desert',
        name_en: 'Negev Desert (Makhtesh Ramon)',
        name_es: 'Desierto del Néguev',
        coords: [30.6, 34.8],
        description_en: 'Arid desert occupying over half of Israel’s land area, home to unique erosion craters (makhtesh).',
        description_es: 'Desierto rocoso que cubre más de la mitad del país, famoso por sus cráteres de erosión únicos (makhtesh).'
      }
    ],
    interesting_fact: {
      en: 'Israel recycles roughly 90% of its wastewater for agricultural irrigation—nearly four times more than any other nation on Earth—and produces over 80% of its domestic municipal tap water via reverse-osmosis seawater desalination.',
      es: 'Israel recicla cerca del 90% de sus aguas residuales para riego agrícola (récord mundial absoluto) y genera más del 80% de su agua potable mediante desalinización de agua marina por ósmosis inversa.'
    },
    teks_alignment: ['TEKS 6.4C: Human engineering to overcome extreme arid freshwater scarcity', 'TEKS 6.3B: Tectonic rift valleys and below-sea-level depressions']
  },

  // =========================================================================
  // 20. SINGAPORE
  // =========================================================================
  {
    id: 'SGP',
    iso2: 'sg',
    iso3: 'SGP',
    name_en: 'Singapore',
    name_es: 'Singapur',
    continent: 'Asia',
    continent_es: 'Asia',
    capital_en: 'Singapore',
    capital_es: 'Singapur',
    capital_coords: [1.3521, 103.8198],
    center_coords: [1.3521, 103.8198],
    zoom_level: 11,
    population: '5,920,000',
    area_sqkm: '734 km²',
    gdp_billion: 501,
    main_exports: {
      en: ['Integrated Circuits ($118B)', 'Refined Petroleum ($64B)', 'Gold ($18B)', 'Gas Turbines ($11B)', 'Medical Instruments ($9B)'],
      es: ['Circuitos integrados ($118B)', 'Petróleo refinado ($64B)', 'Oro ($18B)', 'Turbinas de gas ($11B)', 'Instrumental médico ($9B)'],
      total_val_billion: 515,
    },
    main_imports: {
      en: ['Integrated Circuits ($78B)', 'Refined Petroleum ($54B)', 'Crude Petroleum ($28B)', 'Gold ($16B)', 'Broadcasting Equipment ($12B)'],
      es: ['Circuitos integrados ($78B)', 'Petróleo refinado ($54B)', 'Petróleo crudo ($28B)', 'Oro ($16B)', 'Equipos de transmisión ($12B)'],
      total_val_billion: 475,
    },
    natural_wealth: {
      en: ['Strategic maritime position commanding the Singapore and Malacca Straits', 'Deepwater natural transshipment port (busiest transshipment hub on Earth)', 'Jurong Island petrochemical refining complex', 'World-leading urban water harvesting ("Four National Taps")'],
      es: ['Posición marítima clave en el estrecho de Singapur y Malaca', 'Mayor puerto de transbordo de contenedores del mundo', 'Megacomplejo petroquímico e isla artificial de Jurong', 'Sistema de reciclaje de agua potable NEWater'],
    },
    physical_geography_summary: {
      en: 'A highly urbanized equatorial island city-state comprising 64 islands at the southern tip of the Malay Peninsula. Extensive land reclamation has expanded its land area by over 25% since independence.',
      es: 'Ciudad-estado insular ecuatorial de 64 islas en el extremo sur de la península malaya. La ganancia de tierras al mar ha incrementado su superficie más de un 25% desde su independencia.'
    },
    landforms: [
      {
        id: 'sg-strait-singapore',
        type: 'strait',
        name_en: 'Singapore Strait',
        name_es: 'Estrecho de Singapur',
        coords: [1.25, 103.85],
        description_en: 'Extremely busy 16-km wide shipping corridor connecting the Strait of Malacca to the South China Sea.',
        description_es: 'Canal marítimo con el mayor tránsito de buques del planeta, puerta de entrada hacia el Pacífico.'
      }
    ],
    interesting_fact: {
      en: 'Despite possessing zero domestic oil deposits, Singapore is one of the top three oil refining and trading hubs in the world, refining over 1.5 million barrels of crude oil per day on its artificial industrial islands.',
      es: 'A pesar de no tener una sola gota de petróleo en su suelo, Singapur es uno de los tres mayores centros de refinación y comercio petrolero del mundo, refinando más de 1.5 millones de barriles diarios en la isla artificial de Jurong.'
    },
    teks_alignment: ['TEKS 6.8A: Strategic geographic choke points transforming small island economies', 'TEKS 6.7A: Global re-export and entrepôt trade economics']
  },

  // =========================================================================
  // 21. NEPAL
  // =========================================================================
  {
    id: 'NPL',
    iso2: 'np',
    iso3: 'NPL',
    name_en: 'Nepal',
    name_es: 'Nepal',
    continent: 'Asia',
    continent_es: 'Asia',
    capital_en: 'Kathmandu',
    capital_es: 'Katmandú',
    capital_coords: [27.7172, 85.3240],
    center_coords: [28.3949, 84.1240],
    zoom_level: 6,
    population: '30,900,000',
    area_sqkm: '147,516 km²',
    gdp_billion: 41,
    main_exports: {
      en: ['Soybean Oil ($380M)', 'Palm Oil ($290M)', 'Nutmeg & Cardamom ($85M)', 'Hand-knotted Carpets ($75M)', 'Yarn & Textiles ($120M)'],
      es: ['Aceite de soya procesado ($380M)', 'Aceite de palma ($290M)', 'Cardamomo y especias ($85M)', 'Alfombras de lana artesanales ($75M)', 'Textiles e hilados ($120M)'],
      total_val_billion: 1.3,
    },
    main_imports: {
      en: ['Refined Petroleum ($2.4B)', 'Iron & Steel ($1.1B)', 'Crude Soybean Oil ($650M)', 'Medicaments ($320M)', 'Telecommunications Equipment ($280M)'],
      es: ['Petróleo refinado ($2.4B)', 'Hierro y acero ($1.1B)', 'Aceite de soya crudo ($650M)', 'Medicamentos ($320M)', 'Equipos celulares ($280M)'],
      total_val_billion: 13.8,
    },
    natural_wealth: {
      en: ['Eight of the world’s ten highest mountain peaks (including Mount Everest)', 'Colossal Himalayan glacier freshwater towers', 'Enormous untapped hydroelectric power potential along Himalayan gorges', 'Fertile southern Terai subtropical alluvial belt'],
      es: ['Ocho de las diez cumbres más altas del planeta (incluyendo el Monte Everest)', 'Inmensas reservas de agua dulce en glaciares del Himalaya', 'Enorme potencial de generación hidroeléctrica en cañones de montaña', 'Franja agrícola fértil del Terai'],
    },
    physical_geography_summary: {
      en: 'Dramatic elevation gradient rising from just 60 meters above sea level in the southern subtropical Terai plains up to 8,848 meters at Mount Everest within a distance of only 150 kilometers.',
      es: 'Gradiente altitudinal extremo: asciende desde 60 metros sobre el nivel del mar en la llanura subtropical del Terai hasta los 8,848 metros en el Everest en solo 150 km de distancia horizontal.'
    },
    landforms: [
      {
        id: 'np-peak-everest',
        type: 'peak',
        name_en: 'Mount Everest (Sagarmatha)',
        name_es: 'Monte Everest (Sagarmatha)',
        coords: [27.9881, 86.9250],
        elevation_m: 8848.86,
        description_en: 'Highest mountain peak above sea level on Earth, created by the relentless collision between the Indian and Eurasian tectonic plates.',
        description_es: 'La montaña más alta de la Tierra sobre el nivel del mar (8,848.86m), en la frontera entre Nepal y el Tíbet.'
      },
      {
        id: 'np-peak-annapurna',
        type: 'peak',
        name_en: 'Annapurna Massif',
        name_es: 'Macizo de los Annapurnas',
        coords: [28.5956, 83.8203],
        elevation_m: 8091,
        description_en: 'Formidable Himalayan massif bordered by the Kali Gandaki Gorge (one of the deepest river canyons in the world).',
        description_es: 'Macizo del Himalaya que flanquea la garganta del río Kali Gandaki, uno de los cañones más profundos de la Tierra.'
      }
    ],
    interesting_fact: {
      en: 'Nepal is home to 8 of the world’s 14 mountains over 8,000 meters tall ("eight-thousanders"), and its elevation ranges from 60m to 8,848m—the steepest vertical rise on the planet.',
      es: 'Nepal alberga 8 de los 14 picos del planeta que superan los 8,000 metros de altitud, registrando el ascenso vertical más abrupto del planeta.'
    },
    teks_alignment: ['TEKS 6.3C: Mountain building processes along convergent plate boundaries', 'TEKS 6.4B: Altitude zonation influencing human agriculture from Terai to alpine zones']
  },

  // =========================================================================
  // 22. SRI LANKA
  // =========================================================================
  {
    id: 'LKA',
    iso2: 'lk',
    iso3: 'LKA',
    name_en: 'Sri Lanka',
    name_es: 'Sri Lanka',
    continent: 'Asia',
    continent_es: 'Asia',
    capital_en: 'Sri Jayawardenepura Kotte',
    capital_es: 'Sri Jayawardenepura Kotte',
    capital_coords: [6.9016, 79.9077],
    center_coords: [7.8731, 80.7718],
    zoom_level: 7,
    population: '22,200,000',
    area_sqkm: '65,610 km²',
    gdp_billion: 84,
    main_exports: {
      en: ['Black Tea / Ceylon Tea ($1.3B)', 'Knit Women’s Undergarments ($1.2B)', 'Non-Knit Clothing ($1.1B)', 'Solid Rubber Tires ($550M)', 'Cinnamon ($240M)'],
      es: ['Té de Ceilán ($1.3B)', 'Ropa y confección de punto ($1.2B)', 'Prendas de vestir ($1.1B)', 'Neumáticos de caucho macizo ($550M)', 'Canela de Ceilán pura ($240M)'],
      total_val_billion: 12.8,
    },
    main_imports: {
      en: ['Refined Petroleum ($2.8B)', 'Knitted Fabrics ($650M)', 'Cotton Yarn ($380M)', 'Pharmaceuticals ($340M)', 'Wheat ($280M)'],
      es: ['Petróleo refinado ($2.8B)', 'Tejidos de punto ($650M)', 'Hilados de algodón ($380M)', 'Medicamentos ($340M)', 'Trigo ($280M)'],
      total_val_billion: 17.5,
    },
    natural_wealth: {
      en: ['World-renowned Ceylon tea highland plantations (Nuwara Eliya)', 'World’s finest true cinnamon (Cinnamomum verum)', 'Rich gem gravels (sapphires, rubies, star gems in Ratnapura)', 'Strategic Indian Ocean maritime shipping crossroads'],
      es: ['Plantaciones de té de Ceilán en las tierras altas', 'Mayor productor mundial de canela auténtica', 'Yacimientos de zafiros azules y piedras preciosas en Ratnapura', 'Encrucijada naval en el Océano Índico'],
    },
    physical_geography_summary: {
      en: 'Teardrop-shaped island in the northern Indian Ocean. Consists of a central highland massif exceeding 2,500m surrounded by broad coastal plains fed by radial river networks.',
      es: 'Isla con forma de gota en el norte del océano Índico. Formada por un macizo montañoso central de más de 2,500 metros rodeado por extensas llanuras costeras regadas por ríos radiales.'
    },
    landforms: [
      {
        id: 'lk-peak-pidurutalagala',
        type: 'peak',
        name_en: 'Pidurutalagala (Mount Pedro)',
        name_es: 'Pidurutalagala',
        coords: [7.0003, 80.7725],
        elevation_m: 2524,
        description_en: 'Highest mountain peak in Sri Lanka, rising above the tea-covered plateau of Nuwara Eliya.',
        description_es: 'Punto más alto de Sri Lanka (2,524m), dominando los valles cubiertos de cafetos y té de Ceilán.'
      },
      {
        id: 'lk-rock-sigiriya',
        type: 'plateau',
        name_en: 'Sigiriya (Lion Rock)',
        name_es: 'Sigiriya (Roca del León)',
        coords: [7.957, 80.76],
        elevation_m: 349,
        description_en: 'Ancient volcanic rock citadel rising nearly 200 meters vertically out of the surrounding tropical forest.',
        description_es: 'Monolito rocoso volcánico de casi 200 metros de altura vertical que albergó un palacio fortaleza milenario.'
      }
    ],
    interesting_fact: {
      en: 'Sri Lanka produces roughly 80-90% of the world’s supply of "true cinnamon" (Ceylon cinnamon), highly sought after globally for its low coumarin levels and delicate aroma.',
      es: 'Sri Lanka produce entre el 80% y el 90% de la canela auténtica del mundo (canela de Ceilán), apreciada en gastronomía y medicina por su pureza.'
    },
    teks_alignment: ['TEKS 6.6B: Plantation cash-crop agriculture and global spices trade', 'TEKS 6.3B: Island maritime geography along global Indian Ocean shipping lanes']
  },

  // =========================================================================
  // 23. QATAR
  // =========================================================================
  {
    id: 'QAT',
    iso2: 'qa',
    iso3: 'QAT',
    name_en: 'Qatar',
    name_es: 'Catar',
    continent: 'Asia',
    continent_es: 'Asia',
    capital_en: 'Doha',
    capital_es: 'Doha',
    capital_coords: [25.2854, 51.5310],
    center_coords: [25.3548, 51.1839],
    zoom_level: 8,
    population: '2,900,000',
    area_sqkm: '11,586 km²',
    gdp_billion: 235,
    main_exports: {
      en: ['Liquefied Natural Gas / LNG ($72B)', 'Crude Petroleum ($22B)', 'Refined Petroleum ($14B)', 'Ethylene Polymers ($3.2B)', 'Nitrogen Fertilizers ($2.1B)'],
      es: ['Gas natural licuado / GNL ($72B)', 'Petróleo crudo ($22B)', 'Petróleo refinado ($14B)', 'Polímeros de etileno ($3.2B)', 'Fertilizantes nitrogenados ($2.1B)'],
      total_val_billion: 118,
    },
    main_imports: {
      en: ['Gas Turbines & Aircraft Parts ($3.8B)', 'Cars ($2.2B)', 'Broadcasting Equipment ($1.4B)', 'Iron Tubes ($950M)', 'Jewelry ($850M)'],
      es: ['Turbinas de gas y piezas de aviación ($3.8B)', 'Automóviles ($2.2B)', 'Equipos de transmisión ($1.4B)', 'Tuberías de acero ($950M)', 'Joyería ($850M)'],
      total_val_billion: 33,
    },
    natural_wealth: {
      en: ['North Field (world’s largest non-associated natural gas field)', 'Major crude oil deposits', 'Super-giant LNG liquefaction and cryogenic tanker fleet', 'Abundant solar radiation'],
      es: ['Campo Norte (el yacimiento individual de gas natural no asociado más grande del planeta)', 'Grandes depósitos de petróleo en tierra y mar', 'Mayor flota mundial de buques metaneros para exportación de gas licuado'],
    },
    physical_geography_summary: {
      en: 'A low, barren peninsula jutting northward into the Persian Gulf. Consists of low limestone plateaus, salt flats (sabkhas), and sweeping crescent sand dunes in the southeast.',
      es: 'Península baja y árida que se adentra hacia el norte en el Golfo Pérsico. Terreno llano de piedra caliza, salinas litorales (sabjas) y dunas barjanes en el sur.'
    },
    landforms: [
      {
        id: 'qa-sea-inland',
        type: 'bay',
        name_en: 'Khor Al Adaid (Inland Sea)',
        name_es: 'Jor al Adaid (Mar Interior)',
        coords: [24.65, 51.35],
        description_en: 'UNESCO tidal bay surrounded by desert dunes where oceanic waters flow deep into the sand dunes.',
        description_es: 'Bahía donde el mar entra directamente en el desierto, rodeada por dunas doradas gigantescas.'
      }
    ],
    interesting_fact: {
      en: 'Qatar is one of the world’s top two exporters of liquefied natural gas (LNG), supplying massive energy volumes to power electricity grids across Europe and East Asia.',
      es: 'Catar es uno de los mayores exportadores de gas natural licuado (GNL) del mundo gracias al descomunal Campo Norte, que comparte con Irán en el Golfo Pérsico.'
    },
    teks_alignment: ['TEKS 6.5A: Natural gas energy export infrastructure and sovereign wealth funds', 'TEKS 6.4C: Arid coastal peninsula geography']
  },

  // =========================================================================
  // 24. KUWAIT
  // =========================================================================
  {
    id: 'KWT',
    iso2: 'kw',
    iso3: 'KWT',
    name_en: 'Kuwait',
    name_es: 'Kuwait',
    continent: 'Asia',
    continent_es: 'Asia',
    capital_en: 'Kuwait City',
    capital_es: 'Ciudad de Kuwait',
    capital_coords: [29.3759, 47.9774],
    center_coords: [29.3117, 47.4818],
    zoom_level: 8,
    population: '4,450,000',
    area_sqkm: '17,818 km²',
    gdp_billion: 160,
    main_exports: {
      en: ['Crude Petroleum ($62B)', 'Refined Petroleum ($21B)', 'Petroleum Gas ($1.8B)', 'Acyclic Alcohols ($900M)'],
      es: ['Petróleo crudo ($62B)', 'Petróleo refinado ($21B)', 'Gas de petróleo ($1.8B)', 'Alcoholes acíclicos ($900M)'],
      total_val_billion: 86,
    },
    main_imports: {
      en: ['Cars & Trucks ($4.2B)', 'Broadcasting Equipment ($1.8B)', 'Refined Petroleum ($1.2B)', 'Packaged Medicaments ($950M)', 'Gas Turbines ($800M)'],
      es: ['Autos y camiones ($4.2B)', 'Equipos de transmisión ($1.8B)', 'Petróleo refinado ($1.2B)', 'Medicamentos ($950M)', 'Turbinas de gas ($800M)'],
      total_val_billion: 38,
    },
    natural_wealth: {
      en: ['Burgan Field (world’s second largest conventional onshore oil field)', 'Proven crude oil reserves exceeding 100 billion barrels (6% of world total)', 'Natural gas and sulfur production', 'Strategic bay (Kuwait Bay) in Persian Gulf'],
      es: ['Campo de Burgan (el segundo campo petrolero en tierra firme más grande del mundo)', 'Reservas de petróleo de más de 100,000 millones de barriles (6% mundial)', 'Bahía de Kuwait como puerto natural'],
    },
    physical_geography_summary: {
      en: 'Predominantly flat, arid desert plain along the northwestern tip of the Persian Gulf, broken only by shallow gravel depressions and the sheltered waters of Kuwait Bay.',
      es: 'Llanura desértica plana y árida en el extremo noroeste del Golfo Pérsico, interrumpida únicamente por la ensenada de la Bahía de Kuwait.'
    },
    landforms: [
      {
        id: 'kw-bay-kuwait',
        type: 'bay',
        name_en: 'Kuwait Bay',
        name_es: 'Bahía de Kuwait',
        coords: [29.43, 47.95],
        description_en: 'Protected natural inlet of the Persian Gulf providing the main deepwater anchorage and urban center for Kuwait City.',
        description_es: 'Ensenada marina resguardada en el Golfo Pérsico donde se asienta la capital del país.'
      }
    ],
    interesting_fact: {
      en: 'Kuwait holds approximately 6% of all proven crude oil reserves on the planet beneath an area smaller than the state of New Jersey.',
      es: 'Kuwait posee cerca del 6% de todo el petróleo del planeta concentrado en un territorio de apenas 17,818 km².'
    },
    teks_alignment: ['TEKS 6.5A: High per-capita GDP driven by extreme mineral resource density', 'TEKS 6.4C: Arid human settlement around natural gulf harbors']
  },

  // =========================================================================
  // 25. OMAN
  // =========================================================================
  {
    id: 'OMN',
    iso2: 'om',
    iso3: 'OMN',
    name_en: 'Oman',
    name_es: 'Omán',
    continent: 'Asia',
    continent_es: 'Asia',
    capital_en: 'Muscat',
    capital_es: 'Mascate',
    capital_coords: [23.5880, 58.3829],
    center_coords: [21.4735, 55.9754],
    zoom_level: 6,
    population: '4,900,000',
    area_sqkm: '309,500 km²',
    gdp_billion: 110,
    main_exports: {
      en: ['Crude Petroleum ($38B)', 'Petroleum Gas / LNG ($8.4B)', 'Refined Petroleum ($7.2B)', 'Iron Ore Products ($2.1B)', 'Fertilizers ($1.4B)'],
      es: ['Petróleo crudo ($38B)', 'Gas de petróleo licuado ($8.4B)', 'Petróleo refinado ($7.2B)', 'Productos de hierro ($2.1B)', 'Fertilizantes ($1.4B)'],
      total_val_billion: 62,
    },
    main_imports: {
      en: ['Refined Petroleum ($4.2B)', 'Cars ($2.6B)', 'Iron Ores ($1.8B)', 'Gold ($1.2B)', 'Aircraft Parts ($850M)'],
      es: ['Petróleo refinado ($4.2B)', 'Automóviles ($2.6B)', 'Mineral de hierro ($1.8B)', 'Oro ($1.2B)', 'Partes de aviación ($850M)'],
      total_val_billion: 38,
    },
    natural_wealth: {
      en: ['Strategic control of the southern shoreline of the Strait of Hormuz (Musandam Peninsula)', 'Crude oil and natural gas fields', 'Chromite and copper deposits in Semail Ophiolite', 'Dhofar monsoon frankincense groves'],
      es: ['Control soberano de la entrada meridional del Estrecho de Ormuz (Península de Musandam)', 'Hidrocarburos y gas natural', 'Mayor yacimiento de ofiolita del mundo para investigación geológica', 'Bosques de árboles de incienso en Dhofar'],
    },
    physical_geography_summary: {
      en: 'Occupies the southeastern corner of the Arabian Peninsula. Marked by the rugged Al Hajar mountain range in the north, the central gravelly desert plain, and the tropical green monsoon belt of Dhofar in the south.',
      es: 'Ocupa el sureste de la península Arábiga. Destacan los escarpados montes Al Hajar al norte, llanuras desérticas centrales y las colinas de Dhofar en el sur, verdes por el monzón estival (Khareef).'
    },
    landforms: [
      {
        id: 'om-peak-shams',
        type: 'peak',
        name_en: 'Jebel Shams (Mountain of the Sun)',
        name_es: 'Jebel Shams (Gran Cañón de Arabia)',
        coords: [23.237, 57.264],
        elevation_m: 3009,
        description_en: 'Highest mountain in Oman, towering over the spectacular 1,000-meter sheer cliffs of Wadi Ghul ("Grand Canyon of Arabia").',
        description_es: 'Punto más alto de Omán (3,009m), famoso por sus gargantas verticales conocidas como el "Gran Cañón de Arabia".'
      },
      {
        id: 'om-peninsula-musandam',
        type: 'peninsula',
        name_en: 'Musandam Peninsula (Fjords of Arabia)',
        name_es: 'Península de Musandam',
        coords: [26.0, 56.2],
        description_en: 'Mountainous exclave jutting into the Strait of Hormuz, carved with dramatic sea-drowned canyons nicknamed the "Fjords of Arabia".',
        description_es: 'Enclave montañoso frente al Estrecho de Ormuz con cañones marinos espectaculares apodados los "Fiordos de Arabia".'
      }
    ],
    interesting_fact: {
      en: 'The southern region of Dhofar in Oman is the historical source of the world’s most prized frankincense, traded for over 5,000 years to ancient pharaohs of Egypt, Roman emperors, and Chinese dynasties.',
      es: 'La región de Dhofar en Omán fue durante milenios el epicentro de la Ruta del Incienso, exportando la resina aromática más valiosa de la antigüedad hacia Roma, Egipto y China.'
    },
    teks_alignment: ['TEKS 6.8A: Musandam Peninsula controlling global tanker shipping lanes', 'TEKS 6.4B: Seasonal Khareef monsoon creating a green enclave in an arid continent']
  },

  // =========================================================================
  // 26. JORDAN
  // =========================================================================
  {
    id: 'JOR',
    iso2: 'jo',
    iso3: 'JOR',
    name_en: 'Jordan',
    name_es: 'Jordania',
    continent: 'Asia',
    continent_es: 'Asia',
    capital_en: 'Amman',
    capital_es: 'Amán',
    capital_coords: [31.9454, 35.9284],
    center_coords: [30.5852, 36.2384],
    zoom_level: 7,
    population: '11,300,000',
    area_sqkm: '89,342 km²',
    gdp_billion: 51,
    main_exports: {
      en: ['Chemical & Potassic Fertilizers ($2.1B)', 'Packaged Medicaments ($950M)', 'Knit Apparel ($880M)', 'Phosphates ($720M)', 'Inorganic Chemicals ($450M)'],
      es: ['Fertilizantes químicos y potásicos ($2.1B)', 'Medicamentos envasados ($950M)', 'Prendas de vestir ($880M)', 'Fosfatos naturales ($720M)', 'Químicos inorgánicos ($450M)'],
      total_val_billion: 11.2,
    },
    main_imports: {
      en: ['Cars & Vehicles ($2.4B)', 'Refined Petroleum ($1.9B)', 'Petroleum Gas ($1.2B)', 'Crude Petroleum ($980M)', 'Wheat ($450M)'],
      es: ['Automóviles y vehículos ($2.4B)', 'Petróleo refinado ($1.9B)', 'Gas de petróleo ($1.2B)', 'Petróleo crudo ($980M)', 'Trigo ($450M)'],
      total_val_billion: 24.5,
    },
    natural_wealth: {
      en: ['World’s fifth largest phosphate reserves', 'Dead Sea potash and mineral salts', 'Port of Aqaba maritime access on Red Sea', 'Spectacular desert landscapes driving cultural tourism (Wadi Rum, Petra)'],
      es: ['Quinta reserva mundial de roca fosfórica', 'Potasa y sales minerales extraídas del Mar Muerto', 'Salida marítima al Mar Rojo por el puerto de Áqaba', 'Patrimonio de Petra y cañones desérticos de Wadi Rum'],
    },
    physical_geography_summary: {
      en: 'Dominated by an arid desert plateau in the east (Badia), bounded in the west by the deep Jordan Rift Valley, where the Dead Sea lies at the lowest dry land point on Earth.',
      es: 'Meseta desértica árida en su mayor parte (la Badia), flanqueada al oeste por la fosa tectónica del río Jordán y la depresión del Mar Muerto.'
    },
    landforms: [
      {
        id: 'jo-desert-wadirum',
        type: 'desert',
        name_en: 'Wadi Rum (Valley of the Moon)',
        name_es: 'Wadi Rum (Valle de la Luna)',
        coords: [29.57, 35.42],
        description_en: 'Spectacular protected desert valley framed by granite and sandstone inselbergs rising out of red sand dunes.',
        description_es: 'Valle desértico protegido con formaciones de arenisca y granito sobre arena roja, declarado Patrimonio de la Humanidad.'
      }
    ],
    interesting_fact: {
      en: 'Jordan is considered one of the most freshwater-poor nations on Earth, consuming less than 100 cubic meters of renewable water per person annually—far below the international severe water poverty threshold.',
      es: 'Jordania es uno de los países con mayor escasez hídrica del planeta, pionero en bombear agua fósil subterránea desde el acuífero de Disi para abastecer su capital.'
    },
    teks_alignment: ['TEKS 6.4C: Critical water scarcity adaptation in arid nations', 'TEKS 6.6B: Mining extraction of non-metallic fertilizer minerals (potash/phosphates)']
  },

  // =========================================================================
  // 27. LEBANON
  // =========================================================================
  {
    id: 'LBN',
    iso2: 'lb',
    iso3: 'LBN',
    name_en: 'Lebanon',
    name_es: 'Líbano',
    continent: 'Asia',
    continent_es: 'Asia',
    capital_en: 'Beirut',
    capital_es: 'Beirut',
    capital_coords: [33.8938, 35.5018],
    center_coords: [33.8547, 35.8623],
    zoom_level: 8,
    population: '5,500,000',
    area_sqkm: '10,452 km²',
    gdp_billion: 22,
    main_exports: {
      en: ['Gold & Jewelry ($850M)', 'Scrap Metal ($240M)', 'Packaged Medicaments ($180M)', 'Fruit & Citrus ($140M)', 'Wine & Olive Oil'],
      es: ['Oro refinado y joyería ($850M)', 'Chatarra de metales ($240M)', 'Medicamentos ($180M)', 'Frutas y cítricos ($140M)', 'Vino y aceite de oliva'],
      total_val_billion: 3.6,
    },
    main_imports: {
      en: ['Refined Petroleum ($3.4B)', 'Cars ($1.2B)', 'Gold raw ($950M)', 'Medicaments ($620M)', 'Wheat ($180M)'],
      es: ['Petróleo refinado ($3.4B)', 'Automóviles ($1.2B)', 'Oro en bruto ($950M)', 'Medicamentos ($620M)', 'Trigo ($180M)'],
      total_val_billion: 16.5,
    },
    natural_wealth: {
      en: ['Highest mountain precipitation in the Levant ("Water Castle of the Middle East")', 'Fertile Beqaa Valley agricultural corridor (vineyards, fruits)', 'Ancient cedar forests of Lebanon', 'Strategic eastern Mediterranean ports'],
      es: ['Mayores precipitaciones montañosas del Levante ("Castillo de agua de Oriente Medio")', 'Valle fértil de la Becá para vid y frutales', 'Bosques milenarios de cedro del Líbano', 'Puertos comerciales en el Mediterráneo oriental'],
    },
    physical_geography_summary: {
      en: 'A narrow, mountainous Mediterranean nation divided parallel to the coast: the coastal plain, the rugged Mount Lebanon range, the fertile interior Beqaa Valley, and the Anti-Lebanon Mountains along the Syrian border.',
      es: 'País montañoso mediterráneo dividido en franjas paralelas: la llanura costera, la cordillera del Monte Líbano (con picos sobre los 3,000m), el fértil valle de la Becá y la cordillera del Antilíbano.'
    },
    landforms: [
      {
        id: 'lb-peak-sawda',
        type: 'peak',
        name_en: 'Qurnat as Sawda’',
        name_es: 'Qurnat as Sawda’',
        coords: [34.3, 36.11],
        elevation_m: 3088,
        description_en: 'Highest peak in Lebanon and the highest mountain summit in the entire Levant region.',
        description_es: 'Cumbre más alta del Líbano y de todo el Levante mediterráneo (3,088m), cubierta de nieve invernal.'
      }
    ],
    interesting_fact: {
      en: 'Unlike its desert neighbors across the Middle East, Lebanon has no true deserts; its snow-capped peaks in winter allow visitors to ski on mountain slopes and swim in the Mediterranean Sea on the same day.',
      es: 'A diferencia del resto de sus vecinos de Oriente Medio, el Líbano no tiene desiertos; sus cumbres se cubren de nieve en invierno, permitiendo esquiar en la montaña y nadar en el Mediterráneo el mismo día.'
    },
    teks_alignment: ['TEKS 6.4C: Mediterranean mountain climate contrast against neighboring desert plateaus', 'TEKS 6.3B: Valley agriculture in the Beqaa graben']
  },

  // =========================================================================
  // 28. SYRIA
  // =========================================================================
  {
    id: 'SYR',
    iso2: 'sy',
    iso3: 'SYR',
    name_en: 'Syria',
    name_es: 'Siria',
    continent: 'Asia',
    continent_es: 'Asia',
    capital_en: 'Damascus',
    capital_es: 'Damasco',
    capital_coords: [33.5138, 36.2765],
    center_coords: [34.8021, 38.9968],
    zoom_level: 6,
    population: '22,100,000',
    area_sqkm: '185,180 km²',
    gdp_billion: 18,
    main_exports: {
      en: ['Olive Oil ($180M)', 'Phosphates ($140M)', 'Spices & Anise ($90M)', 'Apparel ($80M)', 'Nuts'],
      es: ['Aceite de oliva ($180M)', 'Fosfatos ($140M)', 'Especias y anís ($90M)', 'Ropa y tejidos ($80M)', 'Frutos secos'],
      total_val_billion: 1.1,
    },
    main_imports: {
      en: ['Refined Petroleum ($1.4B)', 'Wheat ($450M)', 'Sugar ($320M)', 'Tobacco ($190M)', 'Soybean Oil ($140M)'],
      es: ['Petróleo refinado ($1.4B)', 'Trigo ($450M)', 'Azúcar ($320M)', 'Tabaco ($190M)', 'Aceite de soya ($140M)'],
      total_val_billion: 5.2,
    },
    natural_wealth: {
      en: ['Euphrates River irrigation basin (Lake Assad reservoir)', 'Phosphate rock mines near Palmyra', 'Eastern Mediterranean agricultural coastal strip (Latakia)', 'Historical Fertile Crescent rainfed wheat belts'],
      es: ['Cuenca de regadío del río Éufrates (embalse del lago Assad)', 'Yacimientos de fosfatos cerca de Palmira', 'Franja costera mediterránea fértil', 'Tierras históricas de cultivo del Creciente Fértil'],
    },
    physical_geography_summary: {
      en: 'Ranging from a narrow coastal plain along the Mediterranean to mountain chains in the west, giving way to the vast arid Syrian Desert (Badia) bisected by the Euphrates River valley in the east.',
      es: 'Abarca desde una franja costera mediterránea al oeste hasta la amplia meseta desértica siria (la Badia), atravesada de noroeste a sureste por el valle del río Éufrates.'
    },
    landforms: [
      {
        id: 'sy-river-euphrates',
        type: 'river',
        name_en: 'Euphrates River in Syria (Lake Assad)',
        name_es: 'Río Éufrates en Siria',
        coords: [35.88, 38.55],
        length_km: 2800,
        description_en: 'Crucial freshwater artery flowing south from Turkey through Lake Assad, generating hydropower and irrigating Syrian agriculture.',
        description_es: 'Arteria hídrica vital represada en la presa de Tabqa, clave para la electricidad e irrigación del país.'
      }
    ],
    interesting_fact: {
      en: 'Damascus, the capital of Syria, is widely recognized as one of the oldest continuously inhabited cities on Earth, with evidence of urban habitation dating back over 4,000 years.',
      es: 'Damasco es reconocida como una de las ciudades continuamente habitadas más antiguas del planeta, con asentamientos urbanos de más de 4,000 años de antigüedad.'
    },
    teks_alignment: ['TEKS 6.3B: Fertile Crescent agricultural origins and river damming', 'TEKS 6.4C: Aridification challenges in transboundary river systems']
  },

  // =========================================================================
  // 29. YEMEN
  // =========================================================================
  {
    id: 'YEM',
    iso2: 'ye',
    iso3: 'YEM',
    name_en: 'Yemen',
    name_es: 'Yemen',
    continent: 'Asia',
    continent_es: 'Asia',
    capital_en: 'Sana’a',
    capital_es: 'Saná',
    capital_coords: [15.3694, 44.1910],
    center_coords: [15.5527, 48.5164],
    zoom_level: 6,
    population: '33,700,000',
    area_sqkm: '527,968 km²',
    gdp_billion: 21,
    main_exports: {
      en: ['Crude Petroleum ($850M)', 'Fresh Seafood ($120M)', 'Scrap Metal ($45M)', 'Mocaf Coffee & Honey ($35M)'],
      es: ['Petróleo crudo ($850M)', 'Pescado y mariscos frescos ($120M)', 'Chatarra ($45M)', 'Café Moca y miel ($35M)'],
      total_val_billion: 1.2,
    },
    main_imports: {
      en: ['Wheat ($1.8B)', 'Refined Petroleum ($1.6B)', 'Rice ($480M)', 'Palm Oil ($320M)', 'Medicaments ($260M)'],
      es: ['Trigo ($1.8B)', 'Petróleo refinado ($1.6B)', 'Arroz ($480M)', 'Aceite de palma ($320M)', 'Medicamentos ($260M)'],
      total_val_billion: 7.9,
    },
    natural_wealth: {
      en: ['Strategic control of Bab-el-Mandeb Strait (gateway to Red Sea & Suez Canal)', 'Highland terraced agriculture with ancient stone water conduits', 'Rich fisheries along the Gulf of Aden and Arabian Sea', 'Unique endemic biodiversity of Socotra Island'],
      es: ['Control del estrecho de Bab-el-Mandeb (puerta del Mar Rojo y Canal de Suez)', 'Agricultura ancestral en terrazas montañosas', 'Pesquerías en el Golfo de Adén', 'Biodiversidad única en la isla de Socotra'],
    },
    physical_geography_summary: {
      en: 'Occupies the southwestern tip of the Arabian Peninsula. Marked by rugged western highlands rising over 3,600m that intercept monsoon rain, descending eastward into the hyper-arid sands of the Rub’ al Khali.',
      es: 'Ocupa el extremo suroeste de la península Arábiga. Dominado por altas montañas occidentales que capturan lluvias monzónicas, descendiendo al desierto árido de Rub al-Jali.'
    },
    landforms: [
      {
        id: 'ye-strait-babelmandeb',
        type: 'strait',
        name_en: 'Bab-el-Mandeb Strait (Gate of Tears)',
        name_es: 'Estrecho de Bab-el-Mandeb',
        coords: [12.58, 43.33],
        description_en: 'Narrow maritime choke point (20 km wide) connecting the Indian Ocean to the Red Sea and Suez Canal.',
        description_es: 'Paso marítimo estratégico que conecta el océano Índico con el Mar Rojo y el Canal de Suez.'
      },
      {
        id: 'ye-island-socotra',
        type: 'island',
        name_en: 'Socotra Archipelago',
        name_es: 'Archipiélago de Socotra',
        coords: [12.46, 53.82],
        description_en: 'Isolated island group in the Indian Ocean famed for bizarre prehistoric flora, including the iconic Dragon’s Blood Tree.',
        description_es: 'Isla aislada en el océano Índico famosa por su flora endémica, como el árbol Sangre de Dragón.'
      }
    ],
    interesting_fact: {
      en: 'Socotra Island in Yemen is often called "the most alien-looking place on Earth"; more than a third of its plant life is found nowhere else on the planet.',
      es: 'La isla de Socotra es apodada "el lugar más extraterrestre de la Tierra" porque más de un tercio de sus especies de plantas no existen en ningún otro lugar del planeta.'
    },
    teks_alignment: ['TEKS 6.8A: Global strategic shipping choke points at Bab-el-Mandeb', 'TEKS 6.4C: Mountain terrace adaptation to arid peninsula climates']
  },

  // =========================================================================
  // 30. MYANMAR
  // =========================================================================
  {
    id: 'MMR',
    iso2: 'mm',
    iso3: 'MMR',
    name_en: 'Myanmar (Burma)',
    name_es: 'Myanmar (Birmania)',
    continent: 'Asia',
    continent_es: 'Asia',
    capital_en: 'Naypyidaw',
    capital_es: 'Naipyidó',
    capital_coords: [19.7633, 96.0785],
    center_coords: [21.9162, 95.9560],
    zoom_level: 5,
    population: '54,500,000',
    area_sqkm: '676,578 km²',
    gdp_billion: 65,
    main_exports: {
      en: ['Natural Gas ($3.8B)', 'Non-Knit Clothing ($3.2B)', 'Legumes & Beans ($1.4B)', 'Rice ($850M)', 'Jade & Gemstones'],
      es: ['Gas natural ($3.8B)', 'Prendas de vestir confeccionadas ($3.2B)', 'Legumbres y frijoles ($1.4B)', 'Arroz ($850M)', 'Jadeíta y piedras preciosas'],
      total_val_billion: 16.5,
    },
    main_imports: {
      en: ['Refined Petroleum ($3.6B)', 'Fabrics ($1.2B)', 'Motorcycle Parts ($620M)', 'Telecommunications Equipment ($450M)'],
      es: ['Petróleo refinado ($3.6B)', 'Telas y tejidos ($1.2B)', 'Piezas de motocicletas ($620M)', 'Equipos celulares ($450M)'],
      total_val_billion: 17.2,
    },
    natural_wealth: {
      en: ['World’s premier source of Imperial Jadeite and pigeon-blood rubies (Mogok)', 'Offshore natural gas fields in the Bay of Bengal (Yadana, Shwe)', 'Extensive natural teak timber forests', 'Fertile Irrawaddy River rice delta'],
      es: ['Mayor yacimiento del mundo de jadeíta de alta pureza y rubíes', 'Yacimientos de gas natural en la Bahía de Bengala', 'Bosques vírgenes de madera de teca', 'Delta aluvial arrocero del río Irrawaddy'],
    },
    physical_geography_summary: {
      en: 'Framed by a horseshoe of rugged mountain ranges: the Arakan Mountains to the west and the Shan Plateau to the east, enclosing the fertile central river valley of the Irrawaddy.',
      es: 'Enmarcado por un arco de cordilleras: las montañas de Arakan al oeste y la meseta de Shan al este, abrazando la cuenca central del río Irrawaddy.'
    },
    landforms: [
      {
        id: 'mm-river-irrawaddy',
        type: 'river',
        name_en: 'Irrawaddy River (Ayeyarwady)',
        name_es: 'Río Irrawaddy (Ayeyarwady)',
        coords: [16.0, 95.0],
        length_km: 2288,
        description_en: 'Primary commercial and cultural waterway of Myanmar, flowing south into a vast 9-armed delta on the Andaman Sea.',
        description_es: 'Eje fluvial principal de Myanmar que desemboca en un colosal delta arrocero en el Mar de Andamán.'
      }
    ],
    interesting_fact: {
      en: 'Myanmar produces over 70% of the world’s high-grade jadeite, with the northern Kachin mines extracting gems prized for thousands of years in East Asian art.',
      es: 'Myanmar produce más del 70% del jade de alta calidad del mundo, extraído en las minas de Hpakant.'
    },
    teks_alignment: ['TEKS 6.6B: Precious mineral extraction and gemstone trade networks', 'TEKS 6.3B: River floodplains sustaining traditional agricultural states']
  },

  // =========================================================================
  // 31. CAMBODIA
  // =========================================================================
  {
    id: 'KHM',
    iso2: 'kh',
    iso3: 'KHM',
    name_en: 'Cambodia',
    name_es: 'Camboya',
    continent: 'Asia',
    continent_es: 'Asia',
    capital_en: 'Phnom Penh',
    capital_es: 'Nom Pen',
    capital_coords: [11.5564, 104.9282],
    center_coords: [12.5657, 104.9910],
    zoom_level: 6,
    population: '16,900,000',
    area_sqkm: '181,035 km²',
    gdp_billion: 32,
    main_exports: {
      en: ['Knit Sweaters & T-shirts ($6.8B)', 'Women’s Undergarments ($2.4B)', 'Trunks & Cases ($1.8B)', 'Solar Panels ($1.1B)', 'Rice ($480M)'],
      es: ['Suéteres y camisetas de punto ($6.8B)', 'Prendas de vestir ($2.4B)', 'Equipaje y bolsos ($1.8B)', 'Paneles solares ($1.1B)', 'Arroz ($480M)'],
      total_val_billion: 22.5,
    },
    main_imports: {
      en: ['Light Rubberized Knitted Fabrics ($3.2B)', 'Refined Petroleum ($2.4B)', 'Gold ($1.8B)', 'Cars ($1.1B)'],
      es: ['Tejidos para confección ($3.2B)', 'Petróleo refinado ($2.4B)', 'Oro ($1.8B)', 'Automóviles ($1.1B)'],
      total_val_billion: 28.5,
    },
    natural_wealth: {
      en: ['Tonlé Sap (largest freshwater lake in Southeast Asia and one of the world’s most productive fisheries)', 'Mekong River alluvium floodplain', 'Cardamom Mountains tropical rainforest biodiversity'],
      es: ['Lago Tonlé Sap (el mayor lago de agua dulce del Sudeste Asiático con una de las mayores pesquerías fluviales del mundo)', 'Llanura aluvial del Mekong', 'Selvas de las montañas Cardamomo'],
    },
    physical_geography_summary: {
      en: 'A low central saucer-shaped basin centered on the Tonlé Sap Lake and Mekong River, surrounded by the Cardamom Mountains to the southwest and the Dângrêk Escarpment in the north.',
      es: 'Cuenca central en forma de plato que alberga el gran lago Tonlé Sap y el río Mekong, bordeada por las montañas Cardamomo al suroeste y los montes Dângrêk al norte.'
    },
    landforms: [
      {
        id: 'kh-lake-tonlesap',
        type: 'lake',
        name_en: 'Tonlé Sap Lake',
        name_es: 'Lago Tonlé Sap',
        coords: [12.87, 104.05],
        description_en: 'Unique pulsating hydrological lake system whose river reverses direction annually during monsoon floods, expanding the lake’s area fourfold.',
        description_es: 'Fenómeno hidrológico único donde el río invierte su corriente en época de monzón, cuadruplicando la superficie del lago.'
      }
    ],
    interesting_fact: {
      en: 'Every summer during the monsoon, the surge of the Mekong River forces the Tonlé Sap River to flow backwards into Tonlé Sap Lake, quadrupling its size from 2,700 km² to over 16,000 km².',
      es: 'Durante el monzón, la crecida del río Mekong empuja el agua hacia atrás, haciendo que el río Tonlé Sap fluya en sentido contrario y cuadruplique el tamaño del lago.'
    },
    teks_alignment: ['TEKS 6.4A: Dynamic seasonal hydrological cycles sustaining ancient empires (Angkor)', 'TEKS 6.6B: Textile manufacturing integration in global trade']
  },

  // =========================================================================
  // 32. LAOS
  // =========================================================================
  {
    id: 'LAO',
    iso2: 'la',
    iso3: 'LAO',
    name_en: 'Laos',
    name_es: 'Laos',
    continent: 'Asia',
    continent_es: 'Asia',
    capital_en: 'Vientiane',
    capital_es: 'Vientián',
    capital_coords: [17.9757, 102.6331],
    center_coords: [19.8563, 102.4955],
    zoom_level: 6,
    population: '7,600,000',
    area_sqkm: '236,800 km²',
    gdp_billion: 15,
    main_exports: {
      en: ['Electricity ($2.4B)', 'Copper Ores & Cathodes ($850M)', 'Potassium Fertilizers ($520M)', 'Rubber ($440M)', 'Gold ($380M)'],
      es: ['Electricidad hidroeléctrica ($2.4B)', 'Cobre refinado y minerales ($850M)', 'Fertilizantes potásicos ($520M)', 'Caucho ($440M)', 'Oro ($380M)'],
      total_val_billion: 8.2,
    },
    main_imports: {
      en: ['Refined Petroleum ($1.1B)', 'Vehicles ($580M)', 'Machinery ($490M)', 'Iron & Steel ($340M)'],
      es: ['Petróleo refinado ($1.1B)', 'Vehículos ($580M)', 'Maquinaria ($490M)', 'Hierro y acero ($340M)'],
      total_val_billion: 7.1,
    },
    natural_wealth: {
      en: ['Hydroelectric mega-potential along the steep Mekong cascade ("Battery of Southeast Asia")', 'Sepon gold and copper deposits', 'Abundant tropical hardwood forests', 'Potash deposits in Vientiane basin'],
      es: ['Megapotencial hidroeléctrico en el río Mekong ("Batería del Sudeste Asiático")', 'Minas de oro y cobre de Sepon', 'Recursos forestales de maderas duras', 'Yacimientos de potasa'],
    },
    physical_geography_summary: {
      en: 'The only landlocked country in Southeast Asia. Ruggedly mountainous (over 70% of land), dominated by the forested Annamite Range in the east and the Mekong River defining its western border with Thailand.',
      es: 'El único país sin salida al mar del Sudeste Asiático. Territorio montañoso en más del 70%, flanqueado por la cordillera Annamita al este y delimitado por el río Mekong al oeste.'
    },
    landforms: [
      {
        id: 'la-river-mekong',
        type: 'river',
        name_en: 'Mekong River in Laos',
        name_es: 'Río Mekong en Laos',
        coords: [17.96, 102.6],
        length_km: 1800,
        description_en: 'Lifeblood river running almost the entire length of the nation, powering massive dams that export electricity to Thailand.',
        description_es: 'Arteria vital que recorre el país de norte a sur, alimentando centrales hidroeléctricas para exportar energía a países vecinos.'
      }
    ],
    interesting_fact: {
      en: 'Laos is aiming to become the "Battery of Southeast Asia" by constructing dozens of hydroelectric dams along the Mekong and its tributaries, exporting over 70% of its generated electricity.',
      es: 'Laos aspira a ser la "Batería del Sudeste Asiático" mediante presas en el Mekong, exportando más del 70% de la energía que produce hacia Tailandia y Vietnam.'
    },
    teks_alignment: ['TEKS 6.4B: Harnessing river energy in landlocked nations', 'TEKS 6.3A: Economic strategies to overcome lack of seaport access']
  },

  // =========================================================================
  // 33. MONGOLIA
  // =========================================================================
  {
    id: 'MNG',
    iso2: 'mn',
    iso3: 'MNG',
    name_en: 'Mongolia',
    name_es: 'Mongolia',
    continent: 'Asia',
    continent_es: 'Asia',
    capital_en: 'Ulaanbaatar',
    capital_es: 'Ulán Bator',
    capital_coords: [47.8864, 106.9057],
    center_coords: [46.8625, 103.8467],
    zoom_level: 5,
    population: '3,450,000',
    area_sqkm: '1,564,116 km²',
    gdp_billion: 20,
    main_exports: {
      en: ['Coal Briquettes ($8.2B)', 'Copper Ores & Concentrates ($2.6B)', 'Crude Petroleum ($420M)', 'Iron Ore ($390M)', 'Raw Cashmere ($280M)'],
      es: ['Carbón metalúrgico ($8.2B)', 'Minerales y concentrados de cobre ($2.6B)', 'Petróleo crudo ($420M)', 'Mineral de hierro ($390M)', 'Cachemira pura ($280M)'],
      total_val_billion: 15.2,
    },
    main_imports: {
      en: ['Refined Petroleum ($1.8B)', 'Cars & Trucks ($1.4B)', 'Electricity ($240M)', 'Wheat & Flour ($180M)'],
      es: ['Petróleo refinado ($1.8B)', 'Automóviles y camiones ($1.4B)', 'Electricidad ($240M)', 'Trigo y harina ($180M)'],
      total_val_billion: 9.1,
    },
    natural_wealth: {
      en: ['Oyu Tolgoi (one of the largest known copper-gold porphyry deposits on Earth)', 'Tavan Tolgoi metallurgical coal basin', 'Second largest producer of cashmere wool globally', 'Vast nomadic livestock grazing grasslands'],
      es: ['Mina Oyu Tolgoi (uno de los mayores yacimientos de cobre y oro del mundo)', 'Cuenca carbonífera de Tavan Tolgoi', 'Segundo productor mundial de lana de cachemira', 'Inmensas praderas de pastoreo nómada'],
    },
    physical_geography_summary: {
      en: 'A high-altitude landlocked plateau (average elevation 1,580m). Dominated by mountainous taiga and steppe in the north and the arid, windswept expanse of the Gobi Desert in the south.',
      es: 'Elevada meseta sin salida al mar (altitud media de 1,580m). Presenta estepas y bosques boreales al norte y las extensiones desérticas frías del Gobi al sur.'
    },
    landforms: [
      {
        id: 'mn-peak-khuiten',
        type: 'peak',
        name_en: 'Khüiten Peak',
        name_es: 'Pico Khüiten',
        coords: [49.145, 87.818],
        elevation_m: 4374,
        description_en: 'Highest peak in Mongolia, located in the glaciated Altai Mountains on the border with China.',
        description_es: 'Cumbre más alta de Mongolia (4,374m), en las montañas de Altái en la frontera con China.'
      }
    ],
    interesting_fact: {
      en: 'Mongolia is the most sparsely populated sovereign country in the world, with only about 2 people per square kilometer, and horses outnumber humans almost two to one.',
      es: 'Mongolia es el país soberano con menor densidad demográfica del mundo (apenas 2 habitantes por km²), donde hay más caballos que seres humanos.'
    },
    teks_alignment: ['TEKS 6.3B: Nomadic pastoralism adapting to extreme continental climates (dzud)', 'TEKS 6.6B: Mining mega-projects transforming interior steppe economies']
  },

  // =========================================================================
  // 34. NORTH KOREA
  // =========================================================================
  {
    id: 'PRK',
    iso2: 'kp',
    iso3: 'PRK',
    name_en: 'North Korea',
    name_es: 'Corea del Norte',
    continent: 'Asia',
    continent_es: 'Asia',
    capital_en: 'Pyongyang',
    capital_es: 'Pionyang',
    capital_coords: [39.0392, 125.7625],
    center_coords: [40.3399, 127.5101],
    zoom_level: 6,
    population: '26,100,000',
    area_sqkm: '120,540 km²',
    gdp_billion: 16,
    main_exports: {
      en: ['Tungsten & Molybdenum Ores ($65M)', 'Wigs & False Beards ($45M)', 'Electricity ($25M)', 'Silicon Ferroalloys ($20M)'],
      es: ['Minerales de tungsteno y molibdeno ($65M)', 'Pelucas y cabello procesado ($45M)', 'Electricidad ($25M)', 'Ferroaleaciones de silicio ($20M)'],
      total_val_billion: 0.35,
    },
    main_imports: {
      en: ['Refined Petroleum ($180M)', 'Soybean Oil ($110M)', 'Wheat & Grains ($90M)', 'Fabrics ($60M)'],
      es: ['Petróleo refinado ($180M)', 'Aceite de soya ($110M)', 'Trigo y cereales ($90M)', 'Tejidos sintéticos ($60M)'],
      total_val_billion: 1.6,
    },
    natural_wealth: {
      en: ['Extensive mineral deposits (magnesite, tungsten, iron ore, coal, rare earths)', 'Mountain river hydroelectric capacity (Yalu River)', 'Dense coniferous mountain timber'],
      es: ['Ricas reservas minerales (magnesita, wolframio, hierro, carbón antracita)', 'Capacidad hidroeléctrica en ríos de montaña (río Yalu)', 'Bosques de coníferas'],
    },
    physical_geography_summary: {
      en: 'Occupies the northern half of the Korean Peninsula. Highly mountainous (over 80%) with deep valleys formed by the Nangnim and Hamgyong mountain ranges, bounded by the Yalu and Tumen rivers to the north.',
      es: 'Ocupa la mitad norte de la península coreana. Muy montañoso (más del 80%) con cordilleras como Nangnim y Hamgyong, delimitado al norte por los ríos Yalu y Tumen.'
    },
    landforms: [
      {
        id: 'kp-volcano-paektu',
        type: 'volcano',
        name_en: 'Mount Paektu (Changbai)',
        name_es: 'Monte Paektu',
        coords: [41.99, 128.08],
        elevation_m: 2744,
        description_en: 'Sacred active stratovolcano on the Chinese border harboring a deep crater lake (Heaven Lake).',
        description_es: 'Estratovolcán activo sagrado en la frontera con China, con un lago de cráter azul llamado Lago del Cielo.'
      }
    ],
    interesting_fact: {
      en: 'Mount Paektu’s eruption in 946 CE was one of the most violent explosive volcanic events in human history, spewing volcanic ash all the way to northern Japan.',
      es: 'La erupción del volcán Paektu en el año 946 d.C. fue una de las más violentas de la historia, arrojando cenizas hasta el norte de Japón.'
    },
    teks_alignment: ['TEKS 6.3A: Geographic isolation and border demarcations along river lines (Yalu)', 'TEKS 6.6B: Unexploited mineral endowments under command economies']
  },

  // =========================================================================
  // 35. AZERBAIJAN
  // =========================================================================
  {
    id: 'AZE',
    iso2: 'az',
    iso3: 'AZE',
    name_en: 'Azerbaijan',
    name_es: 'Azerbaiyán',
    continent: 'Asia',
    continent_es: 'Asia',
    capital_en: 'Baku',
    capital_es: 'Bakú',
    capital_coords: [40.4093, 49.8671],
    center_coords: [40.1431, 47.5769],
    zoom_level: 6,
    population: '10,400,000',
    area_sqkm: '86,600 km²',
    gdp_billion: 78,
    main_exports: {
      en: ['Crude Petroleum ($19B)', 'Petroleum Gas ($15B)', 'Refined Petroleum ($950M)', 'Tomatoes & Fruits ($420M)', 'Raw Aluminium ($210M)'],
      es: ['Petróleo crudo ($19B)', 'Gas de petróleo ($15B)', 'Petróleo refinado ($950M)', 'Tomates y frutas ($420M)', 'Aluminio en bruto ($210M)'],
      total_val_billion: 38,
    },
    main_imports: {
      en: ['Cars & Vehicles ($1.8B)', 'Wheat ($420M)', 'Refined Petroleum ($380M)', 'Broadcasting Equipment ($340M)'],
      es: ['Automóviles y vehículos ($1.8B)', 'Trigo ($420M)', 'Petróleo refinado ($380M)', 'Equipos celulares ($340M)'],
      total_val_billion: 17.5,
    },
    natural_wealth: {
      en: ['Caspian Sea oil and gas deposits (Shah Deniz gas field, ACG oil field)', 'Southern Gas Corridor pipeline hub supplying Southern Europe', 'Kura River agricultural plain', 'Subtropical citrus and tea groves in Lenkoran'],
      es: ['Megacampos de gas y petróleo del mar Caspio (Shah Deniz y ACG)', 'Oleoducto Bakú-Tiflis-Ceyhan y Corredor Sur de Gas hacia Europa', 'Llanura aluvial del río Kurá', 'Producción de té y frutas en Lankaran'],
    },
    physical_geography_summary: {
      en: 'Situated at the crossroads of Eastern Europe and Western Asia, framed by the Greater Caucasus Mountains in the north, the Lesser Caucasus in the west, and the endorheic Caspian Sea shoreline in the east.',
      es: 'Situado en el Cáucaso meridional, bordeado por el Gran Cáucaso al norte, el Cáucaso Menor al oeste y la costa del Mar Caspio al este.'
    },
    landforms: [
      {
        id: 'az-volcano-mud',
        type: 'volcano',
        name_en: 'Gobustan Mud Volcanoes',
        name_es: 'Volcanes de Lodo de Gobustán',
        coords: [40.1, 49.4],
        elevation_m: 100,
        description_en: 'World’s highest concentration of mud volcanoes erupting methane gas and cold mineral slurry.',
        description_es: 'La mayor concentración de volcanes de lodo del mundo, que expulsan lodo frío y gas metano.'
      }
    ],
    interesting_fact: {
      en: 'Azerbaijan contains nearly half of all the mud volcanoes on Earth (over 400), where underground methane gas periodically ignites in spectacular towering flames.',
      es: 'Azerbaiyán alberga casi la mitad de los volcanes de lodo del planeta, donde el gas metano subterráneo a veces se enciende formando columnas de fuego natural.'
    },
    teks_alignment: ['TEKS 6.5A: Hydrocarbon pipelines connecting the landlocked Caspian Sea to Europe', 'TEKS 6.3C: Mud volcanism and hydrocarbon seepage']
  },

  // =========================================================================
  // 36. GEORGIA
  // =========================================================================
  {
    id: 'GEO',
    iso2: 'ge',
    iso3: 'GEO',
    name_en: 'Georgia',
    name_es: 'Georgia',
    continent: 'Asia',
    continent_es: 'Asia',
    capital_en: 'Tbilisi',
    capital_es: 'Tiflis',
    capital_coords: [41.7151, 44.8271],
    center_coords: [42.3154, 43.3569],
    zoom_level: 7,
    population: '3,700,000',
    area_sqkm: '69,700 km²',
    gdp_billion: 30,
    main_exports: {
      en: ['Cars re-exported ($1.9B)', 'Copper Ores & Concentrates ($520M)', 'Wine ($260M)', 'Ferroalloys ($210M)', 'Mineral Waters ($140M)'],
      es: ['Automóviles reexportados ($1.9B)', 'Minerales de cobre ($520M)', 'Vino tradicional en kvevri ($260M)', 'Ferroaleaciones ($210M)', 'Aguas minerales ($140M)'],
      total_val_billion: 6.1,
    },
    main_imports: {
      en: ['Cars ($2.8B)', 'Refined Petroleum ($1.2B)', 'Petroleum Gas ($480M)', 'Medicaments ($420M)'],
      es: ['Automóviles ($2.8B)', 'Petróleo refinado ($1.2B)', 'Gas de petróleo ($480M)', 'Medicamentos ($420M)'],
      total_val_billion: 15.5,
    },
    natural_wealth: {
      en: ['Cradle of world viticulture (8,000-year unbroken wine tradition in Kakheti)', 'High Caucasus glacial headwaters and hydroelectric potential', 'Black Sea ports of Batumi and Poti for Eurasian transit', 'Thermal and medicinal mineral springs (Borjomi)'],
      es: ['Cuna mundial del vino (8,000 años ininterrumpidos de viticultura en vasijas kvevri)', 'Glaciares del Cáucaso y energía hidroeléctrica', 'Puertos de Batumi y Poti en el Mar Negro', 'Manantiales de aguas minerales de Borjomi'],
    },
    physical_geography_summary: {
      en: 'A mountainous country in the Caucasus spanning from the subtropical Black Sea coast across the Likhi Range into the fertile valleys of Kakheti, crowned by the Greater Caucasus mountain wall.',
      es: 'País del Cáucaso que desciende desde la muralla montañosa del Gran Cáucaso hasta las costas subtropicales del Mar Negro, con fértiles valles vinícolas en Kajetia.'
    },
    landforms: [
      {
        id: 'ge-peak-shkhara',
        type: 'peak',
        name_en: 'Shkhara',
        name_es: 'Shjara',
        coords: [42.9978, 43.1119],
        elevation_m: 5193,
        description_en: 'Highest peak in Georgia, forming the imposing central wall of the Greater Caucasus Range.',
        description_es: 'Cumbre más alta de Georgia (5,193m), en la cordillera del Gran Cáucaso en la frontera con Rusia.'
      }
    ],
    interesting_fact: {
      en: 'Archaeological discoveries in Georgia confirm it is the birthplace of winemaking, with pottery jars dating back 8,000 years (6000 BCE) containing ancient fermented wine residue.',
      es: 'Excavaciones arqueológicas confirmaron que Georgia es la cuna del vino, con vasijas de barro de hace 8,000 años que contienen residuos de uva fermentada.'
    },
    teks_alignment: ['TEKS 6.3B: Mountain passes across the Caucasus linking Europe and Asia', 'TEKS 6.4B: Agricultural domestication of wild crops (grapevine)']
  },

  // =========================================================================
  // 37. ARMENIA
  // =========================================================================
  {
    id: 'ARM',
    iso2: 'am',
    iso3: 'ARM',
    name_en: 'Armenia',
    name_es: 'Armenia',
    continent: 'Asia',
    continent_es: 'Asia',
    capital_en: 'Yerevan',
    capital_es: 'Ereván',
    capital_coords: [40.1792, 44.4991],
    center_coords: [40.0691, 45.0382],
    zoom_level: 7,
    population: '2,800,000',
    area_sqkm: '29,743 km²',
    gdp_billion: 24,
    main_exports: {
      en: ['Cut Diamonds & Jewelry ($1.8B)', 'Gold ($1.2B)', 'Copper Ores & Concentrates ($650M)', 'Ferromolybdenum ($280M)', 'Brandy & Spirits ($240M)'],
      es: ['Diamantes y joyería tallada ($1.8B)', 'Oro refinado ($1.2B)', 'Minerales de cobre ($650M)', 'Ferromolibdeno ($280M)', 'Brandy armenio y licores ($240M)'],
      total_val_billion: 8.4,
    },
    main_imports: {
      en: ['Rough Diamonds ($1.6B)', 'Petroleum Gas ($520M)', 'Cars ($480M)', 'Refined Petroleum ($380M)'],
      es: ['Diamantes en bruto ($1.6B)', 'Gas de petróleo ($520M)', 'Automóviles ($480M)', 'Petróleo refinado ($380M)'],
      total_val_billion: 12.2,
    },
    natural_wealth: {
      en: ['Rich copper and molybdenum mines (Kajaran mine)', 'Lake Sevan (one of the largest high-altitude freshwater lakes in Eurasia)', 'Ararat Valley volcanic soil for apricots and vineyards', 'Extensive basalt and tufa volcanic building stone'],
      es: ['Grandes minas de cobre y molibdeno (mina de Kajaran)', 'Lago Seván (uno de los lagos de agua dulce a mayor altitud de Eurasia)', 'Suelos volcánicos del valle del Ararat', 'Canteras de toba volcánica'],
    },
    physical_geography_summary: {
      en: 'A high-altitude landlocked volcanic plateau in the Lesser Caucasus (average elevation over 1,800m), characterized by extinct volcanic peaks, deep river canyons (Hrazdan), and high alpine meadows.',
      es: 'Meseta volcánica montañosa en el Cáucaso Menor con altitud promedio superior a 1,800m, con cañones fluviales profundos y el lago alpino Seván.'
    },
    landforms: [
      {
        id: 'am-peak-aragats',
        type: 'volcano',
        name_en: 'Mount Aragats',
        name_es: 'Monte Aragats',
        coords: [40.52, 44.2],
        elevation_m: 4090,
        description_en: 'Four-peaked extinct volcanic massif and the highest mountain within the borders of Armenia.',
        description_es: 'Estratovolcán extinto de cuatro picos y montaña más alta de Armenia (4,090m).'
      },
      {
        id: 'am-lake-sevan',
        type: 'lake',
        name_en: 'Lake Sevan',
        name_es: 'Lago Seván',
        coords: [40.35, 45.35],
        elevation_m: 1900,
        description_en: 'Vast alpine freshwater lake covering about one-sixth of Armenia’s entire national territory.',
        description_es: 'Gran lago alpino de agua dulce a 1,900 metros de altitud, corazón hidrológico de Armenia.'
      }
    ],
    interesting_fact: {
      en: 'Yerevan, the capital of Armenia, is nicknamed the "Pink City" because most of its historic buildings are constructed from natural pink tufa rock carved from nearby volcanic quarries.',
      es: 'Ereván es conocida como la "Ciudad Rosa" porque la mayoría de sus edificios históricos están construidos con toba volcánica de color rosado tallada de canteras locales.'
    },
    teks_alignment: ['TEKS 6.3A: Geopolitical vulnerability in landlocked alpine republics', 'TEKS 6.6B: Mining extraction of molybdenum and copper']
  },

  // =========================================================================
  // 38. TURKMENISTAN
  // =========================================================================
  {
    id: 'TKM',
    iso2: 'tm',
    iso3: 'TKM',
    name_en: 'Turkmenistan',
    name_es: 'Turkmenistán',
    continent: 'Asia',
    continent_es: 'Asia',
    capital_en: 'Ashgabat',
    capital_es: 'Asjabad',
    capital_coords: [37.9601, 58.3261],
    center_coords: [38.9697, 59.5563],
    zoom_level: 5,
    population: '6,500,000',
    area_sqkm: '488,100 km²',
    gdp_billion: 82,
    main_exports: {
      en: ['Petroleum Gas / Natural Gas ($9.8B)', 'Refined Petroleum ($1.2B)', 'Raw Cotton ($420M)', 'Nitrogenous Fertilizers ($280M)'],
      es: ['Gas natural por gasoducto ($9.8B)', 'Petróleo refinado ($1.2B)', 'Algodón en rama ($420M)', 'Fertilizantes nitrogenados ($280M)'],
      total_val_billion: 12.1,
    },
    main_imports: {
      en: ['Iron Pipes ($650M)', 'Machinery ($520M)', 'Cars & Trucks ($410M)', 'Wheat ($180M)'],
      es: ['Tuberías de acero ($650M)', 'Maquinaria industrial ($520M)', 'Autos y camiones ($410M)', 'Trigo ($180M)'],
      total_val_billion: 4.8,
    },
    natural_wealth: {
      en: ['Galkynysh gas field (world’s second largest natural gas reserve)', 'Karakum Desert mineral wealth (sulfur, iodine, bromine)', 'Caspian Sea coastal fisheries and shelf petroleum', 'Irrigated oasis cotton agriculture (Karakum Canal)'],
      es: ['Campo Galkynysh (segunda mayor reserva individual de gas natural del planeta)', 'Desierto de Karakum (azufre, yodo, bromo)', 'Costas petrolíferas en el mar Caspio', 'Canal de Karakum para cultivo de algodón'],
    },
    physical_geography_summary: {
      en: 'Over 80% of the country is covered by the sand dunes of the Karakum Desert. Flanked in the south by the Kopet Dag mountain range along the Iranian border and the Caspian Sea to the west.',
      es: 'Más del 80% de su superficie está cubierta por el desierto de arena negra de Karakum, flanqueado al sur por los montes Kopet Dag y al oeste por el Mar Caspio.'
    },
    landforms: [
      {
        id: 'tm-crater-darvaza',
        type: 'volcano',
        name_en: 'Darvaza Gas Crater (Door to Hell)',
        name_es: 'Cráter de Darvaza (Puerta al Infierno)',
        coords: [40.2525, 58.4397],
        description_en: 'Natural gas crater in the Karakum Desert continuously burning since 1971 when geologists ignited a drilling collapse.',
        description_es: 'Cráter de gas natural en llamas continuas desde 1971 en el corazón del desierto de Karakum.'
      }
    ],
    interesting_fact: {
      en: 'The Darvaza gas crater has burned continuously for over five decades in the Karakum Desert, earning the worldwide moniker "The Door to Hell".',
      es: 'El cráter de gas de Darvaza lleva ardiendo ininterrumpidamente más de 50 años en medio del desierto, atrayendo a científicos de todo el mundo.'
    },
    teks_alignment: ['TEKS 6.5A: Natural gas pipeline geopolitical corridors to China', 'TEKS 6.4A: Canal engineering across hyper-arid sand deserts']
  },

  // =========================================================================
  // 39. KYRGYZSTAN
  // =========================================================================
  {
    id: 'KGZ',
    iso2: 'kg',
    iso3: 'KGZ',
    name_en: 'Kyrgyzstan',
    name_es: 'Kirguistán',
    continent: 'Asia',
    continent_es: 'Asia',
    capital_en: 'Bishkek',
    capital_es: 'Biskek',
    capital_coords: [42.8746, 74.5698],
    center_coords: [41.2044, 74.7661],
    zoom_level: 6,
    population: '7,000,000',
    area_sqkm: '199,951 km²',
    gdp_billion: 14,
    main_exports: {
      en: ['Gold ($1.4B)', 'Copper & Precious Metal Ores ($340M)', 'Textiles & Garments ($210M)', 'Dried Fruits & Beans ($120M)', 'Electricity ($60M)'],
      es: ['Oro refinado ($1.4B)', 'Minerales de metales preciosos ($340M)', 'Confección textil ($210M)', 'Frutas secas y legumbres ($120M)', 'Electricidad hidroeléctrica ($60M)'],
      total_val_billion: 2.8,
    },
    main_imports: {
      en: ['Fabrics & Apparel ($2.4B)', 'Cars ($1.8B)', 'Refined Petroleum ($950M)', 'Broadcasting Equipment ($480M)'],
      es: ['Telas y prendas ($2.4B)', 'Automóviles ($1.8B)', 'Petróleo refinado ($950M)', 'Equipos celulares ($480M)'],
      total_val_billion: 12.1,
    },
    natural_wealth: {
      en: ['Kumtor high-altitude gold mine (one of the largest alpine gold deposits in the world)', 'Tian Shan glacial freshwater towers feeding Central Asia', 'Second largest alpine lake globally (Issyk-Kul)', 'Substantial hydroelectric generation on Naryn River'],
      es: ['Mina de oro de Kumtor en alta montaña', 'Glaciares de las montañas de Tian Shan', 'Lago Issyk-Kul (segundo lago alpino más grande del mundo)', 'Energía hidroeléctrica en el río Naryn'],
    },
    physical_geography_summary: {
      en: 'An entirely landlocked, mountainous country dominated by the Tian Shan ("Celestial Mountains") which cover over 80% of its land area, featuring peaks exceeding 7,000m and alpine lakes.',
      es: 'País montañoso sin litoral dominado por la cordillera de Tian Shan ("Montañas Celestiales") que cubre más del 80% del país, con picos de más de 7,000m.'
    },
    landforms: [
      {
        id: 'kg-lake-issyk-kul',
        type: 'lake',
        name_en: 'Lake Issyk-Kul',
        name_es: 'Lago Issyk-Kul',
        coords: [42.43, 77.25],
        elevation_m: 1607,
        description_en: 'Second-largest saline alpine lake in the world, surrounded by snow-capped Tian Shan peaks and never freezes even in bitter winter.',
        description_es: 'Segundo lago de montaña más grande del mundo (1,607m de altitud), de aguas ligeramente salobres que nunca se congelan.'
      },
      {
        id: 'kg-peak-jengish',
        type: 'peak',
        name_en: 'Jengish Chokusu (Pik Pobedy)',
        name_es: 'Pico Pobeda (Jengish Chokusu)',
        coords: [42.03, 80.13],
        elevation_m: 7439,
        description_en: 'Highest peak in the Tian Shan mountain system and highest point in Kyrgyzstan on the Chinese border.',
        description_es: 'Punto más alto de Kirguistán y del sistema montañoso de Tian Shan (7,439m).'
      }
    ],
    interesting_fact: {
      en: 'Lake Issyk-Kul means "Warm Lake" in Kyrgyz because its slight salinity and subterranean thermal activity prevent it from ever freezing, even when surrounding air temperatures plunge below -26°C (-15°F).',
      es: 'Issyk-Kul significa "Lago Cálido" en kirguís porque su salinidad y actividad térmica subterránea impiden que se congele, incluso con temperaturas invernales de -25°C.'
    },
    teks_alignment: ['TEKS 6.4C: Alpine glaciation sustaining downstream river flows in arid regions', 'TEKS 6.6B: High-altitude gold extraction in fragile permafrost environments']
  },

  // =========================================================================
  // 40. TAJIKISTAN
  // =========================================================================
  {
    id: 'TJK',
    iso2: 'tj',
    iso3: 'TJK',
    name_en: 'Tajikistan',
    name_es: 'Tayikistán',
    continent: 'Asia',
    continent_es: 'Asia',
    capital_en: 'Dushanbe',
    capital_es: 'Dusambé',
    capital_coords: [38.5598, 68.7870],
    center_coords: [38.8610, 71.2761],
    zoom_level: 6,
    population: '10,100,000',
    area_sqkm: '143,100 km²',
    gdp_billion: 12,
    main_exports: {
      en: ['Gold ($850M)', 'Raw Aluminium ($420M)', 'Raw Cotton ($210M)', 'Ores of Lead and Zinc ($180M)', 'Electricity ($90M)'],
      es: ['Oro refinado ($850M)', 'Aluminio en bruto ($420M)', 'Algodón en rama ($210M)', 'Minerales de plomo y zinc ($180M)', 'Electricidad hidroeléctrica ($90M)'],
      total_val_billion: 2.1,
    },
    main_imports: {
      en: ['Refined Petroleum ($780M)', 'Wheat & Flour ($340M)', 'Cars ($310M)', 'Natural Gas ($180M)'],
      es: ['Petróleo refinado ($780M)', 'Trigo y harina ($340M)', 'Automóviles ($310M)', 'Gas natural ($180M)'],
      total_val_billion: 5.4,
    },
    natural_wealth: {
      en: ['Over 93% mountainous territory harboring the Pamir Knot ("Roof of the World")', 'Fedchenko Glacier (world’s longest non-polar valley glacier)', 'Massive hydroelectric dams (Nurek and Rogun Dams)', 'Silver, antimony, and gold reserves'],
      es: ['Territorio montañoso en un 93% en el nudo del Pamir ("Techo del Mundo")', 'Glaciar Fedchenko (el glaciar de valle no polar más largo del mundo)', 'Megapresas hidroeléctricas como Nurek y Rogún', 'Antimonio, plata y oro'],
    },
    physical_geography_summary: {
      en: 'The most mountainous country in Central Asia: over 93% of its surface is covered by the Pamir and Alay ranges, with more than half the country sitting above 3,000 meters elevation.',
      es: 'El país más montañoso de Asia Central: más del 93% de su relieve corresponde a las cordilleras del Pamir y Alay, con más de la mitad del país por encima de los 3,000m.'
    },
    landforms: [
      {
        id: 'tj-peak-somoni',
        type: 'peak',
        name_en: 'Ismoil Somoni Peak (Pik Kommunizma)',
        name_es: 'Pico Ismail Samani (Pico Comunismo)',
        coords: [38.949, 72.015],
        elevation_m: 7495,
        description_en: 'Highest mountain in Tajikistan and the highest peak in the Pamir Mountains.',
        description_es: 'Punto más alto de Tayikistán y de las montañas del Pamir (7,495m).'
      },
      {
        id: 'tj-glacier-fedchenko',
        type: 'mountain',
        name_en: 'Fedchenko Glacier',
        name_es: 'Glaciar Fedchenko',
        coords: [38.77, 72.28],
        length_km: 77,
        description_en: 'Longest valley glacier in the world outside the polar regions, stretching 77 km through the high Pamirs.',
        description_es: 'El glaciar de valle más largo del mundo fuera de las regiones polares (77 km de longitud).'
      }
    ],
    interesting_fact: {
      en: 'Tajikistan is constructing the Rogun Dam on the Vakhsh River, which upon full completion will stand at 335 meters tall—the highest dam structure ever built on Earth.',
      es: 'Tayikistán construye la presa de Rogún en el río Vakhsh, que con 335 metros de altura será la presa más alta del mundo.'
    },
    teks_alignment: ['TEKS 6.4B: Glacial valley freshwater storage in alpine mountain hubs', 'TEKS 6.3A: Extreme topographic barriers to transportation infrastructure']
  },

  // =========================================================================
  // 41. TAJIKISTAN, BHUTAN
  // =========================================================================
  {
    id: 'BTN',
    iso2: 'bt',
    iso3: 'BTN',
    name_en: 'Bhutan',
    name_es: 'Bután',
    continent: 'Asia',
    continent_es: 'Asia',
    capital_en: 'Thimphu',
    capital_es: 'Timbu',
    capital_coords: [27.4728, 89.6393],
    center_coords: [27.5142, 90.4336],
    zoom_level: 7,
    population: '790,000',
    area_sqkm: '38,394 km²',
    gdp_billion: 3.1,
    main_exports: {
      en: ['Electricity ($420M)', 'Ferrosilicon ($310M)', 'Dolomite & Limestone ($45M)', 'Cardamom & Spices ($25M)'],
      es: ['Electricidad hidroeléctrica ($420M)', 'Ferrosilicio ($310M)', 'Dolomita y caliza ($45M)', 'Cardamomo y especias ($25M)'],
      total_val_billion: 0.85,
    },
    main_imports: {
      en: ['Refined Petroleum ($180M)', 'Processing Machinery ($140M)', 'Rice ($55M)', 'Passenger Cars ($45M)'],
      es: ['Petróleo refinado ($180M)', 'Maquinaria ($140M)', 'Arroz ($55M)', 'Automóviles ($45M)'],
      total_val_billion: 1.4,
    },
    natural_wealth: {
      en: ['Over 70% pristine forest cover mandated by constitutional law', 'World’s only carbon-negative nation', 'Immense run-of-the-river hydroelectric power exported to India', 'Himalayan glacial rivers (Wangchhu, Punatsangchhu)'],
      es: ['Más del 70% de cobertura forestal protegida por mandato constitucional', 'El único país con huella de carbono negativa del mundo', 'Energía hidroeléctrica exportada a la India', 'Ríos glaciares del Himalaya'],
    },
    physical_geography_summary: {
      en: 'A landlocked kingdom on the southern slopes of the Eastern Himalayas, rising precipitously from subtropical southern plains to glaciated peaks exceeding 7,500m in the north.',
      es: 'Reino del Himalaya oriental que asciende de llanuras subtropicales al sur hasta cumbres glaciares de más de 7,500m al norte.'
    },
    landforms: [
      {
        id: 'bt-peak-gangkhar',
        type: 'peak',
        name_en: 'Gangkhar Puensum',
        name_es: 'Gangkhar Puensum',
        coords: [28.0475, 90.4531],
        elevation_m: 7570,
        description_en: 'Highest mountain in Bhutan and the highest unclimbed mountain peak on Earth due to religious climbing prohibitions.',
        description_es: 'Punto más alto de Bután (7,570m) y la montaña virgen sin escalar más alta del planeta debido a su carácter sagrado.'
      }
    ],
    interesting_fact: {
      en: 'Bhutan is the only carbon-negative nation on Earth; its dense forests absorb three times more carbon dioxide than the entire country emits, and it measures national development via "Gross National Happiness" (GNH).',
      es: 'Bután es el único país del mundo con balance de carbono negativo: sus bosques absorben tres veces más dióxido de carbono del que emite todo el país, y mide su progreso mediante la "Felicidad Nacional Bruta".'
    },
    teks_alignment: ['TEKS 6.4B: Environmental sustainability and constitutional forest conservation', 'TEKS 6.7A: Alternative economic development metrics (Gross National Happiness)']
  },

  // =========================================================================
  // 42. MALDIVES
  // =========================================================================
  {
    id: 'MDV',
    iso2: 'mv',
    iso3: 'MDV',
    name_en: 'Maldives',
    name_es: 'Maldivas',
    continent: 'Asia',
    continent_es: 'Asia',
    capital_en: 'Malé',
    capital_es: 'Malé',
    capital_coords: [4.1755, 73.5093],
    center_coords: [3.2028, 73.2207],
    zoom_level: 7,
    population: '520,000',
    area_sqkm: '298 km²',
    gdp_billion: 6.6,
    main_exports: {
      en: ['Skipjack & Yellowfin Tuna ($180M)', 'Fish Fillets ($65M)', 'Petroleum re-exports ($40M)'],
      es: ['Atún listado y de aleta amarilla ($180M)', 'Filetes de pescado congelado ($65M)', 'Reexportación de combustibles ($40M)'],
      total_val_billion: 0.32,
    },
    main_imports: {
      en: ['Refined Petroleum ($650M)', 'Foodstuffs & Poultry ($480M)', 'Machinery ($380M)', 'Construction Materials ($320M)'],
      es: ['Petróleo refinado ($650M)', 'Alimentos básicos ($480M)', 'Maquinaria ($380M)', 'Materiales de construcción ($320M)'],
      total_val_billion: 3.5,
    },
    natural_wealth: {
      en: ['World’s premier coral atoll marine ecosystem (26 natural atolls)', 'Sustainable pole-and-line skipjack tuna fisheries', 'Vast maritime Exclusive Economic Zone', 'Pristine turquoise lagoon eco-tourism'],
      es: ['Cadena de 26 atolones de coral en el Océano Índico', 'Pesca sostenible de atún con caña y línea', 'Zona económica exclusiva marina de casi 1 millón de km²', 'Turismo de lagunas de arrecife'],
    },
    physical_geography_summary: {
      en: 'The lowest-lying nation on Earth: a double chain of 1,192 coral atoll islands spanning the Equator in the Indian Ocean, with an average ground elevation of only 1.5 meters above sea level.',
      es: 'El país más bajo del planeta: cadena doble de 1,192 islas de atolones de coral en el Océano Índico, con una elevación media de apenas 1.5 metros sobre el mar.'
    },
    landforms: [
      {
        id: 'mv-atoll-male',
        type: 'archipelago',
        name_en: 'Maldivian Coral Atolls',
        name_es: 'Atolones de Coral de Maldivas',
        coords: [4.2, 73.5],
        elevation_m: 2.4,
        description_en: 'Vast submerged volcanic ridge capped by living coral reefs forming natural oceanic atolls.',
        description_es: 'Doble hilera de 26 atolones de coral sobre una cordillera submarina volcánica en el Océano Índico.'
      }
    ],
    interesting_fact: {
      en: 'With a maximum natural elevation of just 2.4 meters (8 feet) above sea level, Maldives is the flattest and lowest country in the world, making it the most vulnerable nation to global sea level rise.',
      es: 'Con un punto natural más alto de apenas 2.4 metros sobre el mar, Maldivas es el país más bajo y plano del mundo, símbolo mundial de la vulnerabilidad ante el cambio climático.'
    },
    teks_alignment: ['TEKS 6.4A: Coral atoll geomorphology and sea level rise vulnerability', 'TEKS 6.6B: Marine conservation and sustainable pole-and-line fishing']
  },

  // =========================================================================
  // 43. BAHRAIN
  // =========================================================================
  {
    id: 'BHR',
    iso2: 'bh',
    iso3: 'BHR',
    name_en: 'Bahrain',
    name_es: 'Baréin',
    continent: 'Asia',
    continent_es: 'Asia',
    capital_en: 'Manama',
    capital_es: 'Manama',
    capital_coords: [26.2285, 50.5860],
    center_coords: [26.0667, 50.5577],
    zoom_level: 9,
    population: '1,500,000',
    area_sqkm: '786 km²',
    gdp_billion: 45,
    main_exports: {
      en: ['Raw Aluminium & Smelted Products ($7.2B)', 'Refined Petroleum ($6.8B)', 'Iron Ore Agglomerates ($2.1B)', 'Chemicals ($850M)'],
      es: ['Aluminio refinado de alta pureza ($7.2B)', 'Petróleo refinado ($6.8B)', 'Hierro aglomerado ($2.1B)', 'Químicos ($850M)'],
      total_val_billion: 18.5,
    },
    main_imports: {
      en: ['Crude Petroleum via Pipeline ($3.8B)', 'Aluminium Ore / Bauxite ($1.9B)', 'Cars ($950M)', 'Gold ($750M)'],
      es: ['Petróleo crudo importado por oleoducto ($3.8B)', 'Bauxita para fundición ($1.9B)', 'Automóviles ($950M)', 'Oro ($750M)'],
      total_val_billion: 15.2,
    },
    natural_wealth: {
      en: ['Alba (Aluminium Bahrain, operating one of the world’s largest single-site aluminium smelters)', 'Historic natural freshwater springs under Persian Gulf seabed', 'Offshore Bahrain petroleum and natural gas fields', 'Strategic financial banking hub'],
      es: ['Planta Alba (una de las mayores fundiciones de aluminio del mundo)', 'Manantiales históricos de agua dulce submarinos', 'Campos de petróleo y gas', 'Centro financiero del Golfo Pérsico'],
    },
    physical_geography_summary: {
      en: 'A low-lying island archipelago of 33 islands situated in the Gulf of Bahrain between the Qatar peninsula and Saudi Arabia, connected to Saudi Arabia by the 25-km King Fahd Causeway.',
      es: 'Archipiélago de 33 islas en el Golfo de Baréin entre Catar y Arabia Saudita, unido a esta última por el puente de 25 km Rey Fahd.'
    },
    landforms: [
      {
        id: 'bh-hill-dukhan',
        type: 'peak',
        name_en: 'Jabal ad Dukhan (Mountain of Smoke)',
        name_es: 'Jabal ad Dukhan',
        coords: [26.037, 50.552],
        elevation_m: 134,
        description_en: 'Highest point in Bahrain, named for the misty haze that frequently surrounds its crest on humid summer days.',
        description_es: 'Colina más alta de Baréin (134m), en torno a la cual se descubrió el primer pozo petrolero del golfo en 1932.'
      }
    ],
    interesting_fact: {
      en: 'In 1932, Bahrain became the first country on the Arab side of the Persian Gulf to strike commercial oil, sparking the modern Middle Eastern petroleum boom.',
      es: 'En 1932, Baréin fue el primer país árabe del Golfo Pérsico en descubrir petróleo comercial, dando inicio a la era de los hidrocarburos en Oriente Medio.'
    },
    teks_alignment: ['TEKS 6.5A: Industrial transformation from oil exploration to energy-intensive aluminium smelting', 'TEKS 6.8A: Causeway infrastructure linking island nations to continental mainlands']
  },

  // =========================================================================
  // 44. BRUNEI
  // =========================================================================
  {
    id: 'BRN',
    iso2: 'bn',
    iso3: 'BRN',
    name_en: 'Brunei',
    name_es: 'Brunéi',
    continent: 'Asia',
    continent_es: 'Asia',
    capital_en: 'Bandar Seri Begawan',
    capital_es: 'Bandar Seri Begawan',
    capital_coords: [4.9031, 114.9398],
    center_coords: [4.5353, 114.7277],
    zoom_level: 8,
    population: '450,000',
    area_sqkm: '5,765 km²',
    gdp_billion: 16,
    main_exports: {
      en: ['Liquefied Natural Gas / LNG ($5.2B)', 'Refined Petroleum ($3.8B)', 'Crude Petroleum ($2.4B)', 'Chemical Products ($1.1B)'],
      es: ['Gas natural licuado ($5.2B)', 'Petróleo refinado ($3.8B)', 'Petróleo crudo ($2.4B)', 'Productos químicos ($1.1B)'],
      total_val_billion: 12.8,
    },
    main_imports: {
      en: ['Crude Petroleum for refinery feed ($4.1B)', 'Machinery ($650M)', 'Manufactured Goods ($420M)', 'Foodstuffs ($380M)'],
      es: ['Petróleo crudo para refino ($4.1B)', 'Maquinaria ($650M)', 'Bienes manufacturados ($420M)', 'Alimentos ($380M)'],
      total_val_billion: 8.9,
    },
    natural_wealth: {
      en: ['Offshore oil and natural gas fields in South China Sea (Champion, Seria fields)', 'Over 70% virgin primary Bornean tropical rainforest cover (Ulu Temburong)', 'Abundant coastal mangrove networks'],
      es: ['Megacampos de petróleo y gas en el Mar de China Meridional (Seria y Champion)', 'Más del 70% de selva virgen protegida de Borneo (Parque Ulu Temburong)', 'Manglares costeros'],
    },
    physical_geography_summary: {
      en: 'A tropical sultanate on the northern coast of Borneo, split into two non-contiguous parts by the Malaysian state of Sarawak, fronting the South China Sea with dense inland rainforests.',
      es: 'Sultanato tropical en la costa norte de la isla de Borneo, dividido en dos partes separadas por el estado malayo de Sarawak, con selvas lluviosas intactas.'
    },
    landforms: [
      {
        id: 'bn-forest-temburong',
        type: 'plain',
        name_en: 'Ulu Temburong National Park',
        name_es: 'Parque Nacional Ulu Temburong',
        coords: [4.47, 115.2],
        description_en: 'Pristine untouched equatorial rainforest known as the "Green Jewel of Brunei", accessible only by longboat river navigation.',
        description_es: 'Selva tropical primaria virgen protegida conocida como la "Joya Verde de Brunéi".'
      }
    ],
    interesting_fact: {
      en: 'Because oil and gas wealth has funded the state for nearly a century, Brunei never cleared its interior forests for palm oil plantations, preserving one of the most intact ancient rainforests in Borneo.',
      es: 'Gracias a su inmensa riqueza petrolera, Brunéi nunca taló sus selvas interiores para plantaciones de aceite de palma, conservando bosques milenarios casi vírgenes.'
    },
    teks_alignment: ['TEKS 6.6B: Sovereign hydrocarbon revenues preventing tropical deforestation', 'TEKS 6.3A: Territorial enclaves and maritime boundaries in Southeast Asia']
  },

  // =========================================================================
  // 45. TIMOR-LESTE
  // =========================================================================
  {
    id: 'TLS',
    iso2: 'tl',
    iso3: 'TLS',
    name_en: 'Timor-Leste',
    name_es: 'Timor Oriental',
    continent: 'Asia',
    continent_es: 'Asia',
    capital_en: 'Dili',
    capital_es: 'Dili',
    capital_coords: [-8.5569, 125.5603],
    center_coords: [-8.8742, 125.7275],
    zoom_level: 8,
    population: '1,350,000',
    area_sqkm: '14,874 km²',
    gdp_billion: 2.5,
    main_exports: {
      en: ['Crude Petroleum & Natural Gas ($340M)', 'Organic Fair-Trade Coffee ($28M)', 'Scrap Metal ($4M)'],
      es: ['Petróleo crudo y gas natural ($340M)', 'Café orgánico arábica ($28M)', 'Chatarra ($4M)'],
      total_val_billion: 0.38,
    },
    main_imports: {
      en: ['Refined Petroleum ($210M)', 'Cars & Vehicles ($65M)', 'Milled Rice ($45M)', 'Cement ($32M)'],
      es: ['Petróleo refinado ($210M)', 'Vehículos ($65M)', 'Arroz ($45M)', 'Cemento ($32M)'],
      total_val_billion: 0.88,
    },
    natural_wealth: {
      en: ['Greater Sunrise and Bayu-Undan offshore natural gas fields in Timor Sea', 'Shade-grown organic arabica coffee in highland mountains', 'Pristine coral reefs with highest marine biodiversity at Atauro Island'],
      es: ['Campos de gas y petróleo del Mar de Timor (Bayu-Undan y Greater Sunrise)', 'Café arábica orgánico de alta montaña', 'Arrecifes de coral en la isla de Atauro con récord de biodiversidad marina'],
    },
    physical_geography_summary: {
      en: 'Occupies the eastern half of the island of Timor in the eastern Indonesian archipelago. Dominated by a rugged central mountain ridge (Ramelau range) descending steeply to the Timor Sea and Ombai Strait.',
      es: 'Ocupa la mitad oriental de la isla de Timor en el archipiélago de la Sonda. Territorio montañoso dominado por la cordillera de Ramelau, flanqueada por el Mar de Timor al sur.'
    },
    landforms: [
      {
        id: 'tl-peak-tatamailau',
        type: 'peak',
        name_en: 'Mount Ramelau (Tatamailau)',
        name_es: 'Monte Tatamailau (Ramelau)',
        coords: [-8.9, 125.49],
        elevation_m: 2986,
        description_en: 'Highest mountain in Timor-Leste, sacred to the Timorese people and crowned by a statue of the Virgin Mary.',
        description_es: 'Punto más alto de Timor Oriental (2,986m), montaña sagrada para la cultura timorense.'
      }
    ],
    interesting_fact: {
      en: 'The waters surrounding Atauro Island, just north of Dili, were found by marine biologists to have the highest average reef fish species diversity in the entire world.',
      es: 'Las aguas de la isla de Atauro en Timor Oriental ostentan el récord científico de mayor diversidad promedio de peces de arrecife por sitio de muestreo del planeta.'
    },
    teks_alignment: ['TEKS 6.6B: Sovereign petroleum wealth funds in newly independent post-colonial states', 'TEKS 6.4A: Coral reef preservation in the Coral Triangle']
  },

  // =========================================================================
  // 46. CYPRUS
  // =========================================================================
  {
    id: 'CYP',
    iso2: 'cy',
    iso3: 'CYP',
    name_en: 'Cyprus',
    name_es: 'Chipre',
    continent: 'Asia',
    continent_es: 'Asia',
    capital_en: 'Nicosia',
    capital_es: 'Nicosia',
    capital_coords: [35.1856, 33.3823],
    center_coords: [35.1264, 33.4299],
    zoom_level: 8,
    population: '1,250,000',
    area_sqkm: '9,251 km²',
    gdp_billion: 32,
    main_exports: {
      en: ['Packaged Medicaments ($520M)', 'Passenger Ships & Yachts ($420M)', 'Halloumi Cheese ($310M)', 'Refined Petroleum ($280M)', 'Citrus Fruits ($95M)'],
      es: ['Medicamentos envasados ($520M)', 'Yates y buques comerciales ($420M)', 'Queso Halloumi tradicional ($310M)', 'Petróleo refinado ($280M)', 'Cítricos ($95M)'],
      total_val_billion: 4.8,
    },
    main_imports: {
      en: ['Refined Petroleum ($2.4B)', 'Passenger Ships ($1.8B)', 'Cars ($850M)', 'Medicaments ($420M)'],
      es: ['Petróleo refinado ($2.4B)', 'Buques y embarcaciones ($1.8B)', 'Automóviles ($850M)', 'Medicamentos ($420M)'],
      total_val_billion: 12.5,
    },
    natural_wealth: {
      en: ['Historical copper ore deposits (which gave copper its Latin name "cuprum")', 'Troodos Ophiolite (world’s most intensely studied exposed oceanic crust)', 'Offshore Aphrodite natural gas field', 'Traditional Halloumi sheep and goat dairy farming'],
      es: ['Yacimientos históricos de cobre (de donde proviene el nombre latino "cuprum")', 'Ofiolita de Troodos (el lecho oceánico expuesto más estudiado por geólogos)', 'Yacimiento de gas natural Aphrodite', 'Queso Halloumi con denominación protegida'],
    },
    physical_geography_summary: {
      en: 'The third-largest island in the Mediterranean Sea. Characterized by two mountain ranges—the forested Troodos in the south and the Kyrenia range along the northern coast—framing the central Mesaoria agricultural plain.',
      es: 'Tercera isla más grande del mar Mediterráneo. Presenta dos cadenas montañosas (los montes Troodos al sur y la cordillera de Kyrenia al norte) que encierran la llanura agrícola central de Mesaoria.'
    },
    landforms: [
      {
        id: 'cy-peak-olympus',
        type: 'peak',
        name_en: 'Mount Olympus (Troodos)',
        name_es: 'Monte Olimpo (Troodos)',
        coords: [34.936, 32.863],
        elevation_m: 1952,
        description_en: 'Highest peak in Cyprus, situated in the pine-forested Troodos mountain range.',
        description_es: 'Punto más alto de Chipre (1,952m), en el macizo boscoso de Troodos.'
      }
    ],
    interesting_fact: {
      en: 'The English word "copper" derives directly from the island’s ancient name, Cyprus (Cyprium aes: "metal of Cyprus"), whose rich bronze-age copper mines supplied the ancient Mediterranean for millennia.',
      es: 'La palabra "cobre" en español e inglés deriva directamente del nombre de Chipre (aes Cyprium: "metal de Chipre"), cuyas ricas minas abastecieron a las civilizaciones del Mediterráneo antiguo.'
    },
    teks_alignment: ['TEKS 6.6B: Ancient mining extraction influencing modern industrial nomenclature', 'TEKS 6.3B: Island crossroads between Europe, Asia, and Africa']
  },

  // =========================================================================
  // 47. STATE OF PALESTINE
  // =========================================================================
  {
    id: 'PSE',
    iso2: 'ps',
    iso3: 'PSE',
    name_en: 'Palestine',
    name_es: 'Palestina',
    continent: 'Asia',
    continent_es: 'Asia',
    capital_en: 'Jerusalem (Ramallah)',
    capital_es: 'Jerusalén (Ramala)',
    capital_coords: [31.9038, 35.2034],
    center_coords: [31.9522, 35.2332],
    zoom_level: 8,
    population: '5,400,000',
    area_sqkm: '6,020 km²',
    gdp_billion: 19,
    main_exports: {
      en: ['Building Stone & Marble ($210M)', 'Olive Oil ($75M)', 'Dates & Tropical Fruits ($65M)', 'Scrap Metal ($45M)', 'Plastics & Furniture ($40M)'],
      es: ['Piedra de construcción y mármol de Jerusalén ($210M)', 'Aceite de oliva virgen ($75M)', 'Dátiles Medjool ($65M)', 'Chatarra ($45M)', 'Mobiliario y calzado ($40M)'],
      total_val_billion: 1.5,
    },
    main_imports: {
      en: ['Electricity ($980M)', 'Refined Petroleum ($850M)', 'Foodstuffs & Flour ($620M)', 'Cars & Trucks ($480M)', 'Cement & Steel ($340M)'],
      es: ['Electricidad ($980M)', 'Petróleo refinado ($850M)', 'Alimentos básicos y trigo ($620M)', 'Automóviles ($480M)', 'Cemento y acero ($340M)'],
      total_val_billion: 8.2,
    },
    natural_wealth: {
      en: ['Ancient olive tree groves (symbol of Palestinian agricultural heritage)', 'Jerusalem stone and limestone quarries in West Bank hills', 'Medjool date palm plantations in the Jordan River Valley', 'Coastal marine access along the Gaza Strip'],
      es: ['Olivares ancestrales milenarios', 'Canteras de piedra caliza de Jerusalén en Cisjordania', 'Plantaciones de dátiles Medjool en el valle del Jordán', 'Acceso costero al Mediterráneo en la Franja de Gaza'],
    },
    physical_geography_summary: {
      en: 'Divided into two distinct geographical areas: the hilly West Bank spanning the central Judean and Samarian mountains down to the Jordan Valley and Dead Sea, and the flat sandy coastal plain of the Gaza Strip.',
      es: 'Dividido en dos áreas geográficas: Cisjordania en las colinas centrales y el valle del Jordán (que desciende hacia el Mar Muerto), y la Franja de Gaza en la llanura costera del Mediterráneo.'
    },
    landforms: [
      {
        id: 'ps-valley-jordan',
        type: 'valley',
        name_en: 'Jordan River Valley',
        name_es: 'Valle del Río Jordán',
        coords: [32.0, 35.5],
        elevation_m: -250,
        description_en: 'Fertile sub-sea-level agricultural graben fed by the Jordan River and oasis springs around Jericho.',
        description_es: 'Fosa tectónica fértil bajo el nivel del mar regada por el río Jordán y los manantiales del oasis de Jericó.'
      }
    ],
    interesting_fact: {
      en: 'The city of Jericho in the West Bank is considered by archaeologists to be the oldest continuously inhabited city with stone walls on Earth, with fortifications dating back over 11,000 years (9000 BCE).',
      es: 'Jericó, en Cisjordania, es considerada por los arqueólogos como la ciudad amurallada continuamente habitada más antigua del planeta, con vestigios de murallas de más de 11,000 años de antigüedad.'
    },
    teks_alignment: ['TEKS 6.3B: Terraced hillside agriculture and olive oil production in the Levant', 'TEKS 6.4C: Water allocation in the Jordan Rift Valley']
  }
];
