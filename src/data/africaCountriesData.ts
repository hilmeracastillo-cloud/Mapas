import { CountryDossierData } from '../types/geography';

export const ALL_AFRICA_ADDITIONAL_COUNTRIES: CountryDossierData[] = [
  // =========================================================================
  // 1. SOUTH AFRICA (ZAF)
  // =========================================================================
  {
    id: 'ZAF',
    iso2: 'za',
    iso3: 'ZAF',
    name_en: 'South Africa',
    name_es: 'Sudáfrica',
    continent: 'Africa',
    continent_es: 'África',
    capital_en: 'Pretoria (Exec), Cape Town (Leg), Bloemfontein (Jud)',
    capital_es: 'Pretoria (Ejec), Ciudad del Cabo (Leg), Bloemfontein (Jud)',
    capital_coords: [-25.7479, 28.2293],
    center_coords: [-30.5595, 22.9375],
    zoom_level: 5,
    population: '60,400,000',
    area_sqkm: '1,221,037 km²',
    gdp_billion: 380,
    main_exports: {
      en: ['Platinum Group Metals ($24B)', 'Gold ($18B)', 'Iron Ore ($9.2B)', 'Coal Briquettes ($8.5B)', 'Cars & Motor Vehicles ($7.8B)', 'Diamonds ($2.4B)'],
      es: ['Metales del grupo del platino ($24B)', 'Oro ($18B)', 'Mineral de hierro ($9.2B)', 'Carbón mineral ($8.5B)', 'Automóviles y vehículos ($7.8B)', 'Diamantes ($2.4B)'],
      total_val_billion: 125,
    },
    main_imports: {
      en: ['Refined Petroleum ($14B)', 'Crude Petroleum ($6.2B)', 'Broadcasting Equipment ($3.8B)', 'Cars ($3.4B)', 'Motor Vehicle Parts ($2.8B)'],
      es: ['Petróleo refinado ($14B)', 'Petróleo crudo ($6.2B)', 'Equipos de telecomunicaciones ($3.8B)', 'Automóviles ($3.4B)', 'Autopartes ($2.8B)'],
      total_val_billion: 112,
    },
    natural_wealth: {
      en: ['Bushveld Igneous Complex (world’s largest reserves of platinum, chromium, and vanadium)', 'Witwatersrand gold basin (historical source of over 40% of all gold mined in human history)', 'Kalahari Manganese Field (world’s largest land-based manganese reserve)', 'Rich marine convergence at Cape of Good Hope'],
      es: ['Complejo Ígneo de Bushveld (mayores reservas mundiales de platino, cromo y vanadio)', 'Cuenca de Witwatersrand (origen histórico de más del 40% del oro extraído por la humanidad)', 'Yacimiento de manganeso del Kalahari', 'Convergencia oceánica en el Cabo de Buena Esperanza'],
    },
    physical_geography_summary: {
      en: 'Occupies the southern tip of Africa. Defined by a massive interior plateau (Highveld) framed by the Great Escarpment and Drakensberg Mountains, sloping down to narrow coastal lowlands and Mediterranean capes.',
      es: 'Ocupa el extremo sur de África. Definido por una extensa meseta interior (Highveld) bordeada por el Gran Escarpe y los montes Drakensberg, descendiendo hacia llanuras costeras y el cabo de Buena Esperanza.'
    },
    landforms: [
      {
        id: 'za-peak-tablemountain',
        type: 'plateau',
        name_en: 'Table Mountain',
        name_es: 'Montaña de la Mesa',
        coords: [-33.9628, 18.4098],
        elevation_m: 1086,
        description_en: 'Iconic flat-topped sandstone mountain overlooking Cape Town, cloaked by the orographic "tablecloth" cloud layer.',
        description_es: 'Icónica montaña de cumbre plana que domina Ciudad del Cabo, famosa por su "mantel" de nubes orográficas.'
      },
      {
        id: 'za-cape-goodhope',
        type: 'cape',
        name_en: 'Cape of Good Hope & Cape Agulhas',
        name_es: 'Cabo de Buena Esperanza y Cabo de las Agujas',
        coords: [-34.8333, 20.0],
        description_en: 'Historic maritime passage; Cape Agulhas marks the official dividing boundary between the Atlantic and Indian Oceans.',
        description_es: 'Paso marítimo histórico; el cabo de las Agujas es el punto más meridional de África y divide los océanos Atlántico e Índico.'
      },
      {
        id: 'za-mountain-drakensberg',
        type: 'mountain',
        name_en: 'Drakensberg Escarpment',
        name_es: 'Cordillera de Drakensberg',
        coords: [-29.45, 29.27],
        elevation_m: 3482,
        description_en: 'Majestic basalt escarpment forming the eastern rim of the Great Escarpment, source of the Orange River.',
        description_es: 'Muralla basáltica que conforma el Gran Escarpe oriental y da origen al río Orange.'
      }
    ],
    interesting_fact: {
      en: 'South Africa is the only nation on Earth with three official capitals: Pretoria (executive administration), Cape Town (legislative parliament), and Bloemfontein (judicial supreme court).',
      es: 'Sudáfrica es el único país del mundo con tres capitales oficiales: Pretoria (ejecutiva), Ciudad del Cabo (legislativa) y Bloemfontein (judicial).'
    },
    teks_alignment: ['TEKS 6.6B: Geological concentration of precious and strategic industrial minerals', 'TEKS 6.8A: Cape sea route as an alternative interoceanic shipping corridor']
  },

  // =========================================================================
  // 2. NIGERIA (NGA)
  // =========================================================================
  {
    id: 'NGA',
    iso2: 'ng',
    iso3: 'NGA',
    name_en: 'Nigeria',
    name_es: 'Nigeria',
    continent: 'Africa',
    continent_es: 'África',
    capital_en: 'Abuja',
    capital_es: 'Abuya',
    capital_coords: [9.0765, 7.3986],
    center_coords: [9.0820, 8.6753],
    zoom_level: 5,
    population: '224,000,000',
    area_sqkm: '923,768 km²',
    gdp_billion: 375,
    main_exports: {
      en: ['Crude Petroleum ($44B)', 'Petroleum Gas / LNG ($8.2B)', 'Refined Petroleum ($1.8B)', 'Cocoa Beans ($850M)', 'Fertilizers ($750M)'],
      es: ['Petróleo crudo ligero Bonny Light ($44B)', 'Gas natural licuado ($8.2B)', 'Petróleo refinado ($1.8B)', 'Granos de cacao ($850M)', 'Fertilizantes de urea ($750M)'],
      total_val_billion: 58,
    },
    main_imports: {
      en: ['Refined Petroleum ($12B)', 'Wheat ($2.4B)', 'Cars & Commercial Vehicles ($1.8B)', 'Broadcasting Equipment ($1.2B)', 'Medicaments ($950M)'],
      es: ['Petróleo refinado ($12B)', 'Trigo ($2.4B)', 'Automóviles y vehículos ($1.8B)', 'Equipos de telecomunicaciones ($1.2B)', 'Medicamentos ($950M)'],
      total_val_billion: 52,
    },
    natural_wealth: {
      en: ['Niger Delta petroleum basin (sweet crude oil with low sulfur content)', 'Ninth largest natural gas reserves in the world', 'Vast arable agricultural savannah and rainforest belts', 'Major solid mineral deposits (tin, columbite, limestone on Jos Plateau)'],
      es: ['Cuenca petrolífera del Delta del Níger (crudo dulce Bonny Light bajo en azufre)', 'Novena reserva mundial de gas natural', 'Tierras fértiles de sabana y selva tropical', 'Estaño, columbita y caliza en la meseta de Jos'],
    },
    physical_geography_summary: {
      en: 'The most populous country in Africa. Spans from the mangrove swamps and creeks of the Niger Delta on the Gulf of Guinea through tropical rainforests and central savannah plateaus (Jos Plateau) to the semi-arid Sahel in the north.',
      es: 'El país más poblado de África. Se extiende desde los manglares del delta del Níger en el Golfo de Guinea hasta las sabanas de la meseta de Jos y el Sahel semiárido en el norte.'
    },
    landforms: [
      {
        id: 'ng-river-niger',
        type: 'river',
        name_en: 'Niger River Delta',
        name_es: 'Delta del Río Níger',
        coords: [4.8, 6.0],
        length_km: 4180,
        description_en: 'Massive river delta and mangrove wetland on the Gulf of Guinea, heart of Nigeria’s petroleum extraction.',
        description_es: 'Gigantesco delta fluvial y humedal de manglar en el Golfo de Guinea, corazón de la producción petrolera.'
      },
      {
        id: 'ng-rock-zuma',
        type: 'peak',
        name_en: 'Zuma Rock',
        name_es: 'Roca Zuma',
        coords: [9.129, 7.234],
        elevation_m: 725,
        description_en: 'Colossal natural monolithic inselberg rising 300 meters above surrounding plains north of Abuja, nicknamed the "Gateway to Abuja".',
        description_es: 'Monolito granítico colosal que se eleva 300 metros sobre la llanura al norte de Abuya, símbolo nacional.'
      }
    ],
    interesting_fact: {
      en: 'Nigeria is Africa’s demographic giant: roughly one out of every six Africans is Nigerian, and Lagos is on track to become the most populous megacity on Earth by 2100.',
      es: 'Nigeria es el gigante demográfico de África: uno de cada seis africanos es nigeriano, y Lagos es una de las metrópolis de más rápido crecimiento urbano del mundo.'
    },
    teks_alignment: ['TEKS 6.4C: Tropical rainforest and Sahel transitions in West Africa', 'TEKS 6.5A: Economic impacts of petro-state dependence and sovereign diversification']
  },

  // =========================================================================
  // 3. ETHIOPIA (ETH)
  // =========================================================================
  {
    id: 'ETH',
    iso2: 'et',
    iso3: 'ETH',
    name_en: 'Ethiopia',
    name_es: 'Etiopía',
    continent: 'Africa',
    continent_es: 'África',
    capital_en: 'Addis Ababa',
    capital_es: 'Adís Abeba',
    capital_coords: [9.0320, 38.7480],
    center_coords: [9.1450, 40.4897],
    zoom_level: 5,
    population: '126,500,000',
    area_sqkm: '1,104,300 km²',
    gdp_billion: 160,
    main_exports: {
      en: ['Coffee ($1.4B)', 'Cut Flowers & Roses ($580M)', 'Oil Seeds ($420M)', 'Gold ($340M)', 'Khat & Pulses ($280M)'],
      es: ['Café arábica de alta montaña ($1.4B)', 'Flores cortadas y rosas ($580M)', 'Semillas oleaginosas ($420M)', 'Oro ($340M)', 'Legumbres y khat ($280M)'],
      total_val_billion: 4.2,
    },
    main_imports: {
      en: ['Refined Petroleum ($3.2B)', 'Gas Turbines ($1.1B)', 'Wheat & Fertilizers ($1.4B)', 'Cars & Trucks ($850M)'],
      es: ['Petróleo refinado ($3.2B)', 'Turbinas y maquinaria hidroeléctrica ($1.1B)', 'Trigo y fertilizantes ($1.4B)', 'Vehículos ($850M)'],
      total_val_billion: 17.5,
    },
    natural_wealth: {
      en: ['Blue Nile River (Abay) contributing over 80% of Nile River water discharge', 'Grand Ethiopian Renaissance Dam (GERD - largest hydroelectric plant in Africa)', 'Historic birthplace of Coffea arabica (Kaffa highlands)', 'Danakil Depression geothermal and potash reserves'],
      es: ['Cabecera del Nilo Azul (río Abay, que aporta más del 80% del caudal del Nilo)', 'Gran Presa del Renacimiento Etíope (la mayor central hidroeléctrica de África)', 'Cuna biológica del café arábica (bosques de Kaffa)', 'Potasa y energía geotérmica en la depresión de Danakil'],
    },
    physical_geography_summary: {
      en: 'The "Water Tower of East Africa": a massive high-altitude plateau bisected diagonally by the Great East African Rift Valley, plunging from glaciated Simien summits (over 4,500m) into the below-sea-level Danakil Depression.',
      es: 'La "Torre de Agua de África Oriental": una colosal meseta de altitud dividida por el Gran Valle del Rift, que desciende desde los picos de Simien (más de 4,500m) hasta la depresión de Danakil bajo el nivel del mar.'
    },
    landforms: [
      {
        id: 'et-river-bluenile',
        type: 'river',
        name_en: 'Blue Nile River (Lake Tana)',
        name_es: 'Río Nilo Azul (Lago Tana)',
        coords: [11.6, 37.4],
        length_km: 1450,
        description_en: 'Primary freshwater source of the main Nile, flowing from Lake Tana through the Grand Ethiopian Renaissance Dam.',
        description_es: 'Principal afluente del Nilo que nace en el lago Tana y nutre la Gran Presa del Renacimiento Etíope.'
      },
      {
        id: 'et-depression-danakil',
        type: 'volcano',
        name_en: 'Danakil Depression & Erta Ale',
        name_es: 'Depresión de Danakil y Volcán Erta Ale',
        coords: [14.24, 40.3],
        elevation_m: -125,
        description_en: 'Tectonic triple junction 125 meters below sea level with hydrothermal sulfur springs and a persistent lava lake.',
        description_es: 'Punto triple tectónico a 125 metros bajo el nivel del mar con fuentes hidrotermales de azufre y lago de lava activo.'
      }
    ],
    interesting_fact: {
      en: 'Ethiopia is the only African nation that was never colonized by European powers, and its high-altitude plateau is where Coffea arabica was first discovered in ancient wild mountain forests.',
      es: 'Etiopía es la única nación de África que nunca fue colonizada durante el reparto europeo del continente, y sus bosques montañosos de Kaffa son la cuna biológica del café arábica.'
    },
    teks_alignment: ['TEKS 6.4C: Highland plateaus acting as continental water towers', 'TEKS 6.3C: Rift valley divergence and triple junction tectonic activity']
  },

  // =========================================================================
  // 4. KENYA (KEN)
  // =========================================================================
  {
    id: 'KEN',
    iso2: 'ke',
    iso3: 'KEN',
    name_en: 'Kenya',
    name_es: 'Kenia',
    continent: 'Africa',
    continent_es: 'África',
    capital_en: 'Nairobi',
    capital_es: 'Nairobi',
    capital_coords: [-1.2921, 36.8219],
    center_coords: [-0.0236, 37.9062],
    zoom_level: 6,
    population: '55,100,000',
    area_sqkm: '580,367 km²',
    gdp_billion: 115,
    main_exports: {
      en: ['Black Tea ($1.4B)', 'Cut Flowers & Roses ($850M)', 'Refined Petroleum ($520M)', 'Coffee ($310M)', 'Titanium Ores ($190M)'],
      es: ['Té negro ($1.4B)', 'Flores cortadas y rosas ($850M)', 'Petróleo refinado reexportado ($520M)', 'Café ($310M)', 'Minerales de titanio ($190M)'],
      total_val_billion: 7.2,
    },
    main_imports: {
      en: ['Refined Petroleum ($4.2B)', 'Palm Oil ($1.1B)', 'Wheat ($720M)', 'Cars & Commercial Vehicles ($680M)', 'Iron & Steel ($590M)'],
      es: ['Petróleo refinado ($4.2B)', 'Aceite de palma ($1.1B)', 'Trigo ($720M)', 'Automóviles y camiones ($680M)', 'Hierro y acero ($590M)'],
      total_val_billion: 19.8,
    },
    natural_wealth: {
      en: ['World’s #1 exporter of black tea', 'Top global geothermal energy producer in the Great Rift Valley (Olkaria)', 'Iconic wildlife biodiversity savannas (Maasai Mara, Serengeti ecosystem)', 'Deepwater Port of Mombasa serving landlocked East Africa'],
      es: ['Mayor exportador mundial de té negro', 'Líder en energía geotérmica en el Gran Valle del Rift (planta de Olkaria)', 'Ecosistemas de fauna salvaje del Masái Mara', 'Puerto de aguas profundas de Mombasa que conecta a Uganda, Ruanda y Sudán del Sur'],
    },
    physical_geography_summary: {
      en: 'Straddles the Equator in East Africa. Rises from the Indian Ocean coastal plain to fertile central highlands bisected by the dramatic Gregory Rift Valley, home to extinct stratovolcanoes and soda lakes.',
      es: 'Atravesado por el ecuador en África Oriental. Asciende desde la llanura costera del Océano Índico hacia fértiles tierras altas cortadas por el Gran Valle del Rift y lagos de soda.'
    },
    landforms: [
      {
        id: 'ke-peak-mountkenya',
        type: 'volcano',
        name_en: 'Mount Kenya',
        name_es: 'Monte Kenia',
        coords: [-0.1522, 37.3084],
        elevation_m: 5199,
        description_en: 'Extinct stratovolcano and second-highest mountain in Africa, with rugged glacial horn peaks sitting right on the Equator.',
        description_es: 'Estratovolcán extinto y segunda montaña más alta de África (5,199m), con glaciares en plena línea ecuatorial.'
      },
      {
        id: 'ke-valley-rift',
        type: 'valley',
        name_en: 'Great Rift Valley (Lake Nakuru / Naivasha)',
        name_es: 'Gran Valle del Rift (Lagos Nakuru y Naivasha)',
        coords: [-0.35, 36.1],
        description_en: 'Deep tectonic depression tearing the African continent apart, harboring geothermal vents and pink flamingo alkaline lakes.',
        description_es: 'Depresión tectónica que divide la placa africana, rica en vapor geotérmico y lagos alcalinos de flamencos.'
      }
    ],
    interesting_fact: {
      en: 'Kenya generates nearly 50% of its entire national electrical grid from clean volcanic steam tapped from deep geothermal wells in the Great Rift Valley at Olkaria.',
      es: 'Kenia genera casi el 50% de toda su electricidad directamente del vapor geotérmico del Gran Valle del Rift, siendo líder mundial en energía limpia renovable volcánica.'
    },
    teks_alignment: ['TEKS 6.3C: Tectonic rifting and geothermal renewable energy extraction', 'TEKS 6.8A: Port of Mombasa as the regional gateway for landlocked nations']
  },

  // =========================================================================
  // 5. TANZANIA (TZA)
  // =========================================================================
  {
    id: 'TZA',
    iso2: 'tz',
    iso3: 'TZA',
    name_en: 'Tanzania',
    name_es: 'Tanzania',
    continent: 'Africa',
    continent_es: 'África',
    capital_en: 'Dodoma',
    capital_es: 'Dodoma',
    capital_coords: [-6.1630, 35.7516],
    center_coords: [-6.3690, 34.8888],
    zoom_level: 6,
    population: '65,500,000',
    area_sqkm: '947,303 km²',
    gdp_billion: 85,
    main_exports: {
      en: ['Gold ($3.4B)', 'Cashew Nuts ($480M)', 'Raw Tobacco ($340M)', 'Copper Ores ($280M)', 'Coffee ($210M)', 'Cloves & Spices from Zanzibar ($80M)'],
      es: ['Oro refinado ($3.4B)', 'Nueces de la India / marañón ($480M)', 'Tabaco ($340M)', 'Minerales de cobre ($280M)', 'Café ($210M)', 'Clavo de olor y especias de Zanzíbar ($80M)'],
      total_val_billion: 8.9,
    },
    main_imports: {
      en: ['Refined Petroleum ($3.8B)', 'Cars & Delivery Trucks ($850M)', 'Packaged Medicaments ($520M)', 'Wheat ($480M)', 'Fertilizers ($420M)'],
      es: ['Petróleo refinado ($3.8B)', 'Automóviles y camiones ($850M)', 'Medicamentos ($520M)', 'Trigo ($480M)', 'Fertilizantes ($420M)'],
      total_val_billion: 15.2,
    },
    natural_wealth: {
      en: ['Mount Kilimanjaro (highest peak in Africa)', 'Serengeti ecosystem (world’s greatest terrestrial mammal migration)', 'Lake Victoria (largest lake in Africa) and Lake Tanganyika (second deepest lake on Earth)', 'Tanzanite gemstone deposits (found in only one small mine on Earth)'],
      es: ['Monte Kilimanjaro (techo de África)', 'Ecosistema del Serengueti (la mayor migración de mamíferos del planeta)', 'Lago Victoria y lago Tanganica (el segundo más profundo del mundo)', 'Tanzanita (gema preciosa que solo existe en las colinas de Merelani)'],
    },
    physical_geography_summary: {
      en: 'Dominated by a high interior plateau framed by both arms of the Great Rift Valley, crowned by Mount Kilimanjaro in the north, flanked by Africa’s largest Great Lakes, and fronting the Indian Ocean with tropical spice islands (Zanzibar).',
      es: 'Meseta central elevada enmarcada por los dos ramales del Gran Valle del Rift, coronada por el Kilimanjaro, rodeada por los Grandes Lagos de África y con las islas de las especias de Zanzíbar frente al Índico.'
    },
    landforms: [
      {
        id: 'tz-peak-kilimanjaro',
        type: 'volcano',
        name_en: 'Mount Kilimanjaro',
        name_es: 'Monte Kilimanjaro',
        coords: [-3.0674, 37.3556],
        elevation_m: 5895,
        description_en: 'Highest peak in Africa and the largest free-standing volcanic mountain mass on Earth, crowned by equatorial summit glaciers.',
        description_es: 'La cumbre más alta de África y la montaña solitaria más alta del planeta (5,895m), coronada por glaciares ecuatoriales.'
      },
      {
        id: 'tz-crater-ngorongoro',
        type: 'volcano',
        name_en: 'Ngorongoro Caldera',
        name_es: 'Cráter de Ngorongoro',
        coords: [-3.17, 35.58],
        description_en: 'World’s largest intact volcanic caldera, forming a self-contained wildlife sanctuary packed with over 25,000 large animals.',
        description_es: 'La caldera volcánica intacta más grande del mundo (260 km²), santuario natural cerrado con fauna salvaje.'
      }
    ],
    interesting_fact: {
      en: 'The rare blue-purple gemstone Tanzanite is found in only one single place on the entire planet: a tiny 4-kilometer strip of land near the base of Mount Kilimanjaro in northern Tanzania.',
      es: 'La tanzanita, una de las gemas más codiciadas del mundo, solo se encuentra en una pequeña franja minera de 4 kilómetros cerca del Kilimanjaro.'
    },
    teks_alignment: ['TEKS 6.3C: Volcanic hotspots and rift valley rift-flank uplift', 'TEKS 6.4A: Wildlife migration dynamics across African savannahs']
  },

  // =========================================================================
  // 6. MOROCCO (MAR)
  // =========================================================================
  {
    id: 'MAR',
    iso2: 'ma',
    iso3: 'MAR',
    name_en: 'Morocco',
    name_es: 'Marruecos',
    continent: 'Africa',
    continent_es: 'África',
    capital_en: 'Rabat',
    capital_es: 'Rabat',
    capital_coords: [34.0209, -6.8416],
    center_coords: [31.7917, -7.0926],
    zoom_level: 5,
    population: '37,800,000',
    area_sqkm: '446,550 km²',
    gdp_billion: 147,
    main_exports: {
      en: ['Cars & Automotive Parts ($14B)', 'Fertilizers & Phosphoric Acid ($8.8B)', 'Calcium Phosphates ($3.2B)', 'Insulated Electric Wire ($3.1B)', 'Citrus Fruits & Vegetables ($2.4B)'],
      es: ['Automóviles y autopartes ($14B)', 'Fertilizantes y ácido fosfórico ($8.8B)', 'Fosfatos naturales ($3.2B)', 'Cables eléctricos para automóviles ($3.1B)', 'Cítricos y hortalizas ($2.4B)'],
      total_val_billion: 42,
    },
    main_imports: {
      en: ['Refined Petroleum ($7.8B)', 'Gas Petroleum ($3.4B)', 'Wheat ($2.8B)', 'Cars & Vehicle Parts ($2.4B)', 'Coal Briquettes ($1.2B)'],
      es: ['Petróleo refinado ($7.8B)', 'Gas de petróleo ($3.4B)', 'Trigo ($2.8B)', 'Autopartes y vehículos ($2.4B)', 'Carbón ($1.2B)'],
      total_val_billion: 68,
    },
    natural_wealth: {
      en: ['World’s largest proven reserves of phosphate rock (over 70% of total global reserves at Khouribga)', 'Noor Ouarzazate Solar Complex (world’s largest concentrated solar power facility)', 'Strategic gateway to Strait of Gibraltar (Tanger Med mega-port)', 'Atlantic sardine fisheries (largest sardine exporter in the world)'],
      es: ['Mayores reservas probadas de fosfatos del planeta (más del 70% mundial en Khouribga)', 'Megacomplejo solar Noor Ouarzazate', 'Puerto Tanger Med en el Estrecho de Gibraltar', 'Mayor exportador mundial de sardinas en conserva'],
    },
    physical_geography_summary: {
      en: 'The northwestern anchor of Africa. Characterized by the formidable Atlas Mountain chain (High, Middle, and Anti-Atlas) rising to over 4,100m, separating fertile Mediterranean/Atlantic coastal plains from the hyper-arid Sahara Desert.',
      es: 'Extremo noroccidental de África. Dominado por la cordillera del Atlas (Alto, Medio y Anti-Atlas) con picos sobre los 4,100 metros, que separa las fértiles llanuras atlánticas del desierto del Sáhara.'
    },
    landforms: [
      {
        id: 'ma-peak-toubkal',
        type: 'peak',
        name_en: 'Jbel Toubkal',
        name_es: 'Jbel Toubkal',
        coords: [31.0594, -7.9242],
        elevation_m: 4167,
        description_en: 'Highest peak in the Atlas Mountains and the highest mountain summit in all of North Africa.',
        description_es: 'Cumbre más alta de la cordillera del Atlas y punto más elevado del norte de África (4,167m).'
      },
      {
        id: 'ma-port-tangermed',
        type: 'strait',
        name_en: 'Strait of Gibraltar (Tanger Med)',
        name_es: 'Estrecho de Gibraltar (Tánger Med)',
        coords: [35.88, -5.5],
        description_en: 'Major maritime transshipment port and Mediterranean entrance just 14 km across from the European coast.',
        description_es: 'Paso intercontinental de solo 14 km frente a España, sede del mayor puerto de contenedores del Mediterráneo.'
      }
    ],
    interesting_fact: {
      en: 'Morocco holds more than 70% of the entire world’s known reserves of phosphate rock—an irreplaceable mineral essential for manufacturing agricultural fertilizers that feed billions of people globally.',
      es: 'Marruecos almacena más del 70% de todas las reservas conocidas de roca fosfórica del planeta, un fertilizante insustituible para la agricultura mundial.'
    },
    teks_alignment: ['TEKS 6.6B: Global food security dependency on sovereign phosphate distribution', 'TEKS 6.8A: Strait of Gibraltar transit and trade gateways']
  },

  // =========================================================================
  // 7. ALGERIA (DZA)
  // =========================================================================
  {
    id: 'DZA',
    iso2: 'dz',
    iso3: 'DZA',
    name_en: 'Algeria',
    name_es: 'Argelia',
    continent: 'Africa',
    continent_es: 'África',
    capital_en: 'Algiers',
    capital_es: 'Argel',
    capital_coords: [36.7538, 3.0588],
    center_coords: [28.0339, 1.6596],
    zoom_level: 4,
    population: '45,600,000',
    area_sqkm: '2,381,741 km²',
    gdp_billion: 224,
    main_exports: {
      en: ['Natural Gas / LNG ($28B)', 'Crude Petroleum ($18B)', 'Refined Petroleum ($7.5B)', 'Nitrogenous Fertilizers ($2.1B)', 'Ammonia ($850M)'],
      es: ['Gas natural por gasoducto y GNL ($28B)', 'Petróleo crudo Saharan Blend ($18B)', 'Petróleo refinado ($7.5B)', 'Fertilizantes nitrogenados ($2.1B)', 'Amoníaco ($850M)'],
      total_val_billion: 57,
    },
    main_imports: {
      en: ['Wheat ($3.1B)', 'Cars & Trucks ($1.8B)', 'Refined Petroleum ($1.4B)', 'Milk Powder ($1.1B)', 'Medicaments ($950M)'],
      es: ['Trigo ($3.1B)', 'Vehículos y camiones ($1.8B)', 'Petróleo refinado ($1.4B)', 'Leche en polvo ($1.1B)', 'Medicamentos ($950M)'],
      total_val_billion: 41,
    },
    natural_wealth: {
      en: ['Hassi R’Mel gas field (one of the largest gas fields on Earth)', 'Hassi Messaoud oil field (Saharan Blend crude)', 'Undersea subsea pipelines supplying natural gas to Spain and Italy (Medgaz, Transmed)', 'Colossal solar irradiation in the Sahara Desert'],
      es: ['Campo Hassi R’Mel (uno de los mayores campos de gas natural del planeta)', 'Campo petrolífero de Hassi Messaoud', 'Gasoductos submarinos Medgaz y Transmed hacia España e Italia', 'Potencial de radiación solar en el Sáhara'],
    },
    physical_geography_summary: {
      en: 'The largest country in Africa and tenth largest in the world. Over 80% of its land is covered by the Sahara Desert (grand ergs and Hoggar volcanic massifs), contrasted with a fertile Mediterranean coastal tell in the north.',
      es: 'El país más extenso de África y décimo del mundo. Más del 80% de su superficie pertenece al desierto del Sáhara (con los grandes ergs y el macizo del Ahaggar), contrastando con la franja costera mediterránea fértil al norte.'
    },
    landforms: [
      {
        id: 'dz-mountain-tahat',
        type: 'volcano',
        name_en: 'Mount Tahat (Ahaggar Mountains)',
        name_es: 'Monte Tahat (Montes Ahaggar)',
        coords: [23.29, 5.53],
        elevation_m: 2908,
        description_en: 'Ancient volcanic peak and highest summit in Algeria, rising dramatically out of the hyper-arid central Sahara Desert.',
        description_es: 'Punto más alto de Argelia (2,908m), cumbre volcánica que emerge en medio del desierto del Sáhara.'
      },
      {
        id: 'dz-desert-ergs',
        type: 'desert',
        name_en: 'Grand Erg Oriental & Occidental',
        name_es: 'Gran Erg Oriental y Occidental',
        coords: [30.0, 6.0],
        description_en: 'Vast seas of shifting sand dunes (ergs) stretching for hundreds of miles across the Saharan platform.',
        description_es: 'Colosales mares de dunas de arena movediza (ergs) que se extienden por cientos de kilómetros.'
      }
    ],
    interesting_fact: {
      en: 'Since the partition of Sudan in 2011, Algeria is the largest country by geographic land area on the entire African continent and in the Arab world.',
      es: 'Desde la división de Sudán en 2011, Argelia es el país territorialmente más extenso de toda África y de todo el mundo árabe.'
    },
    teks_alignment: ['TEKS 6.5A: Natural gas pipeline connectivity across the Mediterranean Sea to Europe', 'TEKS 6.4C: Extreme arid desert geomorphology and human oases settlements']
  },

  // =========================================================================
  // 8. DEMOCRATIC REPUBLIC OF THE CONGO (COD)
  // =========================================================================
  {
    id: 'COD',
    iso2: 'cd',
    iso3: 'COD',
    name_en: 'Democratic Republic of the Congo',
    name_es: 'República Democrática del Congo',
    continent: 'Africa',
    continent_es: 'África',
    capital_en: 'Kinshasa',
    capital_es: 'Kinsasa',
    capital_coords: [-4.4419, 15.2663],
    center_coords: [-4.0383, 21.7587],
    zoom_level: 5,
    population: '102,000,000',
    area_sqkm: '2,344,858 km²',
    gdp_billion: 68,
    main_exports: {
      en: ['Refined Copper & Cathodes ($14B)', 'Cobalt & Cobalt Oxides ($6.2B)', 'Crude Petroleum ($1.8B)', 'Raw Copper ($1.4B)', 'Diamonds ($420M)', 'Tantalum / Coltan ($280M)'],
      es: ['Cobre refinado y cátodos ($14B)', 'Cobalto para baterías ($6.2B)', 'Petróleo crudo ($1.8B)', 'Minerales de cobre ($1.4B)', 'Diamantes ($420M)', 'Coltán / tantalio ($280M)'],
      total_val_billion: 24.5,
    },
    main_imports: {
      en: ['Refined Petroleum ($2.4B)', 'Excavation & Mining Machinery ($1.8B)', 'Packaged Medicaments ($750M)', 'Meat & Poultry ($680M)', 'Commercial Vehicles ($590M)'],
      es: ['Petróleo refinado ($2.4B)', 'Maquinaria pesada minera ($1.8B)', 'Medicamentos ($750M)', 'Carne y aves ($680M)', 'Camiones ($590M)'],
      total_val_billion: 19.8,
    },
    natural_wealth: {
      en: ['World’s #1 producer of cobalt (>70% of global supply) and largest copper producer in Africa (Katanga belt)', 'Congo Rainforest (world’s second largest contiguous tropical rainforest and premier carbon sink)', 'Congo River (world’s second largest river by discharge volume)', 'Inga Falls hydroelectric potential (capable of powering one-third of the African continent)'],
      es: ['Primer productor mundial de cobalto (>70% mundial) y líder de cobre en África', 'Selva del Congo (segundo mayor pulmón tropical del planeta)', 'Río Congo (el segundo más caudaloso del mundo)', 'Cataratas de Inga (mayor potencial hidroeléctrico del planeta)'],
    },
    physical_geography_summary: {
      en: 'Occupies the heart of Central Africa, centered on the vast equatorial Congo River Basin. Bounded in the east by the glaciated peaks and active volcanoes of the Albertine Rift (Virunga Mountains).',
      es: 'Corazón de África Central centrado en la colosal cuenca fluvial del río Congo. Bordeado al este por los volcanes activos y glaciares del Rift Albertino (montes Virunga y Rwenzori).'
    },
    landforms: [
      {
        id: 'cd-river-congo',
        type: 'river',
        name_en: 'Congo River (Zaire River)',
        name_es: 'Río Congo',
        coords: [-6.0, 12.3],
        length_km: 4700,
        description_en: 'World’s deepest river (over 220m depth) and second largest river by discharge, crossing the Equator twice.',
        description_es: 'El río más profundo del mundo (más de 220m) y segundo más caudaloso del planeta, cruzando la línea ecuatorial dos veces.'
      },
      {
        id: 'cd-volcano-nyiragongo',
        type: 'volcano',
        name_en: 'Mount Nyiragongo',
        name_es: 'Volcán Nyiragongo',
        coords: [-1.52, 29.25],
        elevation_m: 3470,
        description_en: 'Active stratovolcano in the Virunga Mountains housing the world’s largest fluid lava lake, notorious for fast-flowing basaltic lava.',
        description_es: 'Estratovolcán activo en las montañas Virunga que alberga el lago de lava más grande del mundo.'
      }
    ],
    interesting_fact: {
      en: 'The DRC produces more than 70% of the world’s cobalt and holds colossal reserves of coltan—two non-renewable elements indispensable for lithium-ion batteries in smartphones, laptops, and electric cars.',
      es: 'La R.D. del Congo produce más del 70% del cobalto del mundo y posee gigantescas reservas de coltán, dos minerales indispensables para las baterías de teléfonos y vehículos eléctricos.'
    },
    teks_alignment: ['TEKS 6.6B: Critical transition minerals (cobalt/coltan) driving global green tech supply chains', 'TEKS 6.4A: Tropical rainforest deforestation vs carbon sink preservation']
  },

  // =========================================================================
  // 9. GHANA (GHA)
  // =========================================================================
  {
    id: 'GHA',
    iso2: 'gh',
    iso3: 'GHA',
    name_en: 'Ghana',
    name_es: 'Ghana',
    continent: 'Africa',
    continent_es: 'África',
    capital_en: 'Accra',
    capital_es: 'Acra',
    capital_coords: [5.6037, -0.1870],
    center_coords: [7.9465, -1.0232],
    zoom_level: 6,
    population: '33,500,000',
    area_sqkm: '238,533 km²',
    gdp_billion: 77,
    main_exports: {
      en: ['Gold ($7.8B)', 'Crude Petroleum ($5.4B)', 'Cocoa Beans & Paste ($2.4B)', 'Refined Petroleum ($480M)', 'Manganese Ore ($380M)'],
      es: ['Oro refinado ($7.8B)', 'Petróleo crudo ($5.4B)', 'Granos y pasta de cacao ($2.4B)', 'Petróleo refinado ($480M)', 'Mineral de manganeso ($380M)'],
      total_val_billion: 17.5,
    },
    main_imports: {
      en: ['Refined Petroleum ($3.2B)', 'Cars & Delivery Trucks ($850M)', 'Rice ($540M)', 'Cereal Flours ($340M)'],
      es: ['Petróleo refinado ($3.2B)', 'Automóviles y camiones ($850M)', 'Arroz ($540M)', 'Harinas de cereales ($340M)'],
      total_val_billion: 15.1,
    },
    natural_wealth: {
      en: ['Largest gold producer in Africa (historical "Gold Coast")', 'Second largest producer of cocoa beans in the world', 'Offshore Jubilee oil and gas field', 'Lake Volta (world’s largest artificial reservoir by surface area)'],
      es: ['Mayor productor de oro de África (antigua "Costa de Oro")', 'Segundo mayor productor mundial de cacao', 'Yacimiento petrolífero marino de Jubilee', 'Lago Volta (el mayor embalse artificial del mundo por superficie)'],
    },
    physical_geography_summary: {
      en: 'Fronts the Gulf of Guinea with sandy coastal lagoons and mangrove creeks, transitioning northward through moist tropical deciduous forest into the dry savannah basin of the Volta River.',
      es: 'Litoral en el Golfo de Guinea con lagunas costeras y manglares, pasando por selvas tropicales hacia la cuenca de sabana del río Volta.'
    },
    landforms: [
      {
        id: 'gh-lake-volta',
        type: 'lake',
        name_en: 'Lake Volta (Akosombo Dam)',
        name_es: 'Lago Volta (Presa de Akosombo)',
        coords: [6.5, -0.05],
        description_en: 'World’s largest artificial reservoir by surface area (8,502 km²), created by damming the Volta River for hydroelectric power.',
        description_es: 'El embalse artificial más grande del mundo por superficie (8,502 km²), creado por la presa de Akosombo.'
      }
    ],
    interesting_fact: {
      en: 'Lake Volta in Ghana is the largest man-made reservoir on Earth by surface area, covering roughly 3.6% of the entire country’s land surface.',
      es: 'El lago Volta es el embalse artificial más grande del planeta por superficie, cubriendo el 3.6% de todo el territorio nacional de Ghana.'
    },
    teks_alignment: ['TEKS 6.6B: Mining and commercial plantation commodities (Gold and Cocoa)', 'TEKS 6.4B: Massive dam engineering creating continent-scale reservoirs']
  },

  // =========================================================================
  // 10. IVORY COAST / CÔTE D'IVOIRE (CIV)
  // =========================================================================
  {
    id: 'CIV',
    iso2: 'ci',
    iso3: 'CIV',
    name_en: 'Ivory Coast (Côte d’Ivoire)',
    name_es: 'Costa de Marfil',
    continent: 'Africa',
    continent_es: 'África',
    capital_en: 'Yamoussoukro',
    capital_es: 'Yamusukro',
    capital_coords: [6.8276, -5.2893],
    center_coords: [7.5400, -5.5471],
    zoom_level: 6,
    population: '29,400,000',
    area_sqkm: '322,463 km²',
    gdp_billion: 78,
    main_exports: {
      en: ['Cocoa Beans ($4.2B)', 'Cocoa Paste & Butter ($1.8B)', 'Gold ($1.4B)', 'Rubber ($1.2B)', 'Crude Petroleum ($1.1B)', 'Cashew Nuts ($950M)'],
      es: ['Granos de cacao ($4.2B)', 'Pasta y manteca de cacao ($1.8B)', 'Oro ($1.4B)', 'Caucho natural ($1.2B)', 'Petróleo crudo ($1.1B)', 'Nueces de la India ($950M)'],
      total_val_billion: 16.8,
    },
    main_imports: {
      en: ['Crude & Refined Petroleum ($3.4B)', 'Rice ($850M)', 'Non-fillet Frozen Fish ($620M)', 'Medicaments ($420M)'],
      es: ['Petróleo crudo y refinado ($3.4B)', 'Arroz ($850M)', 'Pescado congelado ($620M)', 'Medicamentos ($420M)'],
      total_val_billion: 14.8,
    },
    natural_wealth: {
      en: ['World’s #1 producer and exporter of cocoa (supplying over 40% of global chocolate cocoa)', 'Largest exporter of raw cashew nuts on Earth', 'Offshore Baleine oil and gas field (largest hydrocarbon discovery in the country)', 'Port of Abidjan deepwater transshipment hub'],
      es: ['Primer productor y exportador mundial de cacao (>40% del cacao mundial)', 'Mayor exportador mundial de nueces de la India', 'Megayacimiento de hidrocarburos marinos Baleine', 'Puerto de aguas profundas de Abiyán'],
    },
    physical_geography_summary: {
      en: 'Slopes gently from the northern savannah plateau down to a forested tropical coastal plain fringed by coastal lagoons along the Gulf of Guinea.',
      es: 'Desciende suavemente desde las mesetas de sabana al norte hacia llanuras costeras cubiertas de selva tropical y lagunas litorales en el Golfo de Guinea.'
    },
    landforms: [
      {
        id: 'ci-peak-nimba',
        type: 'peak',
        name_en: 'Mount Richard-Molard (Mount Nimba)',
        name_es: 'Monte Nimba',
        coords: [7.61, -8.42],
        elevation_m: 1752,
        description_en: 'UNESCO-listed mountain ridge shared with Guinea, renowned for microclimates and iron-ore ridges.',
        description_es: 'Reserva natural montañosa compartida con Guinea, rica en hierro y biodiversidad endémica.'
      }
    ],
    interesting_fact: {
      en: 'Ivory Coast produces over 40% of the entire world’s cocoa supply, meaning almost half of all chocolate bars consumed globally originate from its farms.',
      es: 'Costa de Marfil produce más del 40% del cacao del mundo, por lo que casi la mitad de los chocolates consumidos en el planeta provienen de sus cultivos.'
    },
    teks_alignment: ['TEKS 6.6B: Tropical commodity cash crops dominating international agricultural trade', 'TEKS 6.4A: Rainforest clearing for agricultural monocultures']
  },

  // =========================================================================
  // 11. SENEGAL (SEN)
  // =========================================================================
  {
    id: 'SEN',
    iso2: 'sn',
    iso3: 'SEN',
    name_en: 'Senegal',
    name_es: 'Senegal',
    continent: 'Africa',
    continent_es: 'África',
    capital_en: 'Dakar',
    capital_es: 'Dakar',
    capital_coords: [14.7167, -17.4677],
    center_coords: [14.4974, -14.4524],
    zoom_level: 6,
    population: '17,800,000',
    area_sqkm: '196,722 km²',
    gdp_billion: 31,
    main_exports: {
      en: ['Gold ($1.2B)', 'Refined Petroleum re-exports ($850M)', 'Phosphoric Acid ($620M)', 'Fresh & Frozen Fish ($480M)', 'Peanuts / Groundnuts ($240M)'],
      es: ['Oro refinado ($1.2B)', 'Petróleo refinado ($850M)', 'Ácido fosfórico ($620M)', 'Pescado fresco y congelado ($480M)', 'Maní / cacahuetes ($240M)'],
      total_val_billion: 5.4,
    },
    main_imports: {
      en: ['Refined Petroleum ($2.4B)', 'Crude Petroleum ($1.1B)', 'Rice ($680M)', 'Wheat ($340M)', 'Cars & Vehicles ($420M)'],
      es: ['Petróleo refinado ($2.4B)', 'Petróleo crudo ($1.1B)', 'Arroz ($680M)', 'Trigo ($340M)', 'Vehículos ($420M)'],
      total_val_billion: 11.8,
    },
    natural_wealth: {
      en: ['Strategic westernmost point of continental Africa (Cap-Vert peninsula)', 'Offshore Sangomar oil and GTA natural gas fields', 'Taïba phosphate deposits', 'Rich marine fisheries powered by the Canary Current upwelling'],
      es: ['Punto más occidental del continente africano (península de Cabo Verde)', 'Megayacimientos marinos de petróleo y gas (Sangomar y GTA)', 'Fosfatos de Taïba', 'Riqueza pesquera marina alimentada por la corriente de Canarias'],
    },
    physical_geography_summary: {
      en: 'A low rolling plain of the western Sahel, bounded by the Senegal River in the north and east, protruding into the Atlantic Ocean at the rocky volcanic Cap-Vert Peninsula.',
      es: 'Llanura ondulada en el Sahel occidental, delimitada al norte por el río Senegal y rematada en el Atlántico por la península volcánica de Cabo Verde.'
    },
    landforms: [
      {
        id: 'sn-cape-vert',
        type: 'peninsula',
        name_en: 'Cap-Vert Peninsula (Pointe des Almadies)',
        name_es: 'Península de Cabo Verde (Punta de Almadies)',
        coords: [14.74, -17.53],
        description_en: 'The westernmost point of the entire African continent, sheltering the strategic deepwater harbor of Dakar.',
        description_es: 'El punto más occidental de todo el continente africano, donde se asienta la capital Dakar.'
      },
      {
        id: 'sn-lake-retba',
        type: 'lake',
        name_en: 'Lake Retba (Pink Lake)',
        name_es: 'Lago Retba (Lago Rosa)',
        coords: [14.83, -17.23],
        description_en: 'High-salinity lake famous for its pink waters caused by Dunaliella salina algae and active artisanal salt harvesting.',
        description_es: 'Lago de extrema salinidad célebre por sus aguas rosadas por el alga Dunaliella salina y la extracción artesanal de sal.'
      }
    ],
    interesting_fact: {
      en: 'Pointe des Almadies in Dakar is the westernmost continental point of Africa—closer to South America across the Atlantic than to the eastern tip of Africa in Somalia.',
      es: 'La Punta de Almadies en Dakar es el punto más occidental de África continental, estando más cerca de Sudamérica que del extremo oriental de África en Somalia.'
    },
    teks_alignment: ['TEKS 6.3B: Coastal peninsular geography and transatlantic maritime history', 'TEKS 6.4C: The Sahel transition zone between Sahara and savanna']
  },

  // =========================================================================
  // 12. ANGOLA (AGO)
  // =========================================================================
  {
    id: 'AGO',
    iso2: 'ao',
    iso3: 'AGO',
    name_en: 'Angola',
    name_es: 'Angola',
    continent: 'Africa',
    continent_es: 'África',
    capital_en: 'Luanda',
    capital_es: 'Luanda',
    capital_coords: [-8.8390, 13.2894],
    center_coords: [-11.2027, 17.8739],
    zoom_level: 5,
    population: '36,700,000',
    area_sqkm: '1,246,700 km²',
    gdp_billion: 94,
    main_exports: {
      en: ['Crude Petroleum ($32B)', 'Diamonds ($1.8B)', 'Petroleum Gas / LNG ($1.4B)', 'Refined Petroleum ($480M)'],
      es: ['Petróleo crudo ($32B)', 'Diamantes pulidos y en bruto ($1.8B)', 'Gas natural licuado ($1.4B)', 'Petróleo refinado ($480M)'],
      total_val_billion: 36,
    },
    main_imports: {
      en: ['Refined Petroleum ($2.1B)', 'Poultry Meat ($480M)', 'Rice ($380M)', 'Special Purpose Ships ($340M)', 'Cars ($320M)'],
      es: ['Petróleo refinado ($2.1B)', 'Carne de ave congelada ($480M)', 'Arroz ($380M)', 'Buques y plataformas ($340M)', 'Automóviles ($320M)'],
      total_val_billion: 14.5,
    },
    natural_wealth: {
      en: ['Deepwater offshore pre-salt oil reserves in Lower Congo and Kwanza basins', 'Catoca diamond pipe (one of the largest kimberlite diamond pipes on Earth)', 'Okavango and Zambezi river headwaters in Bié Plateau', 'Benguela Current rich marine fisheries'],
      es: ['Grandes yacimientos de petróleo en aguas profundas en Cabinda y Kwanza', 'Mina de diamantes de Catoca (una de las mayores chimeneas de kimberlita del mundo)', 'Cabeceras de los ríos Okavango y Zambeze en la meseta de Bié', 'Pesquerías de la corriente de Benguela'],
    },
    physical_geography_summary: {
      en: 'A narrow arid Atlantic coastal plain rising abruptly via dramatic escarpments to the vast central Bié Plateau, which acts as the hydrological divide feeding the Congo, Zambezi, and Okavango rivers.',
      es: 'Estrecha franja costera atlántica que asciende bruscamente por escarpes hacia la meseta central de Bié, divisoria de aguas de los ríos Congo, Zambeze y Okavango.'
    },
    landforms: [
      {
        id: 'ao-escarpment-leba',
        type: 'mountain',
        name_en: 'Serra da Leba Escarpment',
        name_es: 'Serra da Leba',
        coords: [-15.08, 13.25],
        elevation_m: 1845,
        description_en: 'Dramatic cliff escarpment descending over 1,000 meters from the high interior plateau to coastal desert plains.',
        description_es: 'Impresionante escarpe montañoso que desciende más de 1,000 metros verticales hacia la llanura costera.'
      }
    ],
    interesting_fact: {
      en: 'The rain falling on the Bié Plateau in central Angola gives birth to the Okavango River, which travels over 1,000 km to create the famous inland Okavango Delta in the Kalahari Desert.',
      es: 'Las lluvias que caen sobre la meseta de Bié en Angola dan origen al río Okavango, que recorre más de 1,000 km para formar el famoso delta interior del Okavango en el desierto de Kalahari.'
    },
    teks_alignment: ['TEKS 6.5A: Offshore deepwater oil exploration driving post-war reconstruction', 'TEKS 6.3B: High plateaus acting as international river headwaters']
  },

  // =========================================================================
  // 13. TUNISIA (TUN)
  // =========================================================================
  {
    id: 'TUN',
    iso2: 'tn',
    iso3: 'TUN',
    name_en: 'Tunisia',
    name_es: 'Túnez',
    continent: 'Africa',
    continent_es: 'África',
    capital_en: 'Tunis',
    capital_es: 'Túnez',
    capital_coords: [36.8065, 10.1815],
    center_coords: [33.8869, 9.5375],
    zoom_level: 6,
    population: '12,400,000',
    area_sqkm: '163,610 km²',
    gdp_billion: 49,
    main_exports: {
      en: ['Insulated Wire & Cables ($2.4B)', 'Non-Knit Clothing ($1.8B)', 'Pure Olive Oil ($1.1B)', 'Refined Petroleum ($780M)', 'Dates ($280M)', 'Phosphates ($240M)'],
      es: ['Cables y componentes eléctricos ($2.4B)', 'Prendas de vestir ($1.8B)', 'Aceite de oliva virgen ($1.1B)', 'Petróleo refinado ($780M)', 'Dátiles Deglet Nour ($280M)', 'Fosfatos ($240M)'],
      total_val_billion: 18.5,
    },
    main_imports: {
      en: ['Refined Petroleum ($2.8B)', 'Petroleum Gas ($1.4B)', 'Wheat ($950M)', 'Cars & Vehicle Parts ($850M)', 'Fabrics ($720M)'],
      es: ['Petróleo refinado ($2.8B)', 'Gas de petróleo ($1.4B)', 'Trigo ($950M)', 'Automóviles y autopartes ($850M)', 'Tejidos ($720M)'],
      total_val_billion: 24.2,
    },
    natural_wealth: {
      en: ['World-class olive oil orchards (second largest exporter of olive oil globally)', 'Gafsa phosphate mining basin', 'Deglet Nour date palm oases in the Djerid region', 'Strategic control of the Sicilian Channel in the central Mediterranean'],
      es: ['Olivar extensivo (segundo exportador mundial de aceite de oliva)', 'Cuenca minera de fosfatos de Gafsa', 'Oasis de dátiles Deglet Nour en el Djerid', 'Posición geoestratégica en el canal de Sicilia'],
    },
    physical_geography_summary: {
      en: 'The northernmost country in Africa. Ranges from forested Tell Atlas mountains in the north down through the semi-arid central steppe into the Chott el Djerid salt pan and Saharan sand dunes in the south.',
      es: 'El país más septentrional de África. Va desde los montes del Atlas Telliano en el norte hasta las estepas centrales, el gran lago salino Chott el Djerid y las dunas saharianas en el sur.'
    },
    landforms: [
      {
        id: 'tn-cape-angela',
        type: 'cape',
        name_en: 'Ras ben Sakka (Cape Angela)',
        name_es: 'Cabo Angela (Ras ben Sakka)',
        coords: [37.348, 9.746],
        description_en: 'The northernmost point of the entire African continent, projecting into the Mediterranean Sea.',
        description_es: 'El punto más septentrional de todo el continente africano, adentrado en el mar Mediterráneo.'
      },
      {
        id: 'tn-lake-chott',
        type: 'lake',
        name_en: 'Chott el Djerid',
        name_es: 'Chott el Djerid',
        coords: [33.7, 8.4],
        elevation_m: -15,
        description_en: 'Massive endorheic salt lake covering over 5,000 km², glistening white in the desert with extreme heat mirages.',
        description_es: 'Inmenso lago salino endorreico de más de 5,000 km² en el desierto, famoso por sus espejismos de calor.'
      }
    ],
    interesting_fact: {
      en: 'Cape Angela in northern Tunisia is the northernmost geographic point on the African continent, marked by a metal monument shaped like the map of Africa.',
      es: 'El Cabo Angela en Túnez es el punto continental más al norte de África, marcado por un monumento con la silueta del continente africano.'
    },
    teks_alignment: ['TEKS 6.3B: Mediterranean maritime agriculture (olives/wheat) vs Saharan aridity', 'TEKS 6.8A: Control of narrow central Mediterranean maritime straits']
  },

  // =========================================================================
  // 14. UGANDA (UGA)
  // =========================================================================
  {
    id: 'UGA',
    iso2: 'ug',
    iso3: 'UGA',
    name_en: 'Uganda',
    name_es: 'Uganda',
    continent: 'Africa',
    continent_es: 'África',
    capital_en: 'Kampala',
    capital_es: 'Kampala',
    capital_coords: [0.3476, 32.5825],
    center_coords: [1.3733, 32.2903],
    zoom_level: 6,
    population: '48,500,000',
    area_sqkm: '241,038 km²',
    gdp_billion: 49,
    main_exports: {
      en: ['Coffee ($950M)', 'Gold ($780M)', 'Fish Fillets from Lake Victoria ($180M)', 'Cocoa Beans ($120M)', 'Tea ($85M)'],
      es: ['Café robusta y arábica ($950M)', 'Oro ($780M)', 'Filetes de perca del Nilo del lago Victoria ($180M)', 'Granos de cacao ($120M)', 'Té ($85M)'],
      total_val_billion: 4.8,
    },
    main_imports: {
      en: ['Refined Petroleum ($1.6B)', 'Gold raw ($650M)', 'Packaged Medicaments ($380M)', 'Telephones ($240M)', 'Vehicles ($210M)'],
      es: ['Petróleo refinado ($1.6B)', 'Oro en bruto ($650M)', 'Medicamentos ($380M)', 'Teléfonos celulares ($240M)', 'Vehículos ($210M)'],
      total_val_billion: 9.8,
    },
    natural_wealth: {
      en: ['Lake Victoria (shared water reservoir and Nile River outflow at Jinja)', 'Tilenga and Kingfisher oil fields along Lake Albert', 'Fertile volcanic soils around Mount Elgon', 'Glaciated Rwenzori Mountains ("Mountains of the Moon")'],
      es: ['Nacimiento del Nilo Blanco en el lago Victoria (Jinja)', 'Yacimientos petrolíferos del lago Alberto', 'Suelos volcánicos del monte Elgon', 'Glaciares de los montes Rwenzori ("Montañas de la Luna")'],
    },
    physical_geography_summary: {
      en: 'A fertile landlocked plateau in the Great Lakes region of East Africa, resting at an average elevation of 1,100 meters, cradled between the eastern and western branches of the Great East African Rift.',
      es: 'Fértil meseta sin salida al mar en la región de los Grandes Lagos de África, a una altitud media de 1,100 metros entre los dos ramales del Gran Valle del Rift.'
    },
    landforms: [
      {
        id: 'ug-mountain-rwenzori',
        type: 'mountain',
        name_en: 'Rwenzori Mountains (Margherita Peak)',
        name_es: 'Montes Rwenzori (Pico Margarita)',
        coords: [0.38, 29.87],
        elevation_m: 5109,
        description_en: 'Glaciated, non-volcanic fault-block mountain range on the Congolese border, legendary source of the Nile waters.',
        description_es: 'Cordillera alpina con glaciares ecuatoriales en la frontera con el Congo, mítica fuente de las nieves del Nilo.'
      },
      {
        id: 'ug-river-victoria-nile',
        type: 'river',
        name_en: 'Victoria Nile & Murchison Falls',
        name_es: 'Nilo Victoria y Cataratas Murchison',
        coords: [2.28, 31.68],
        description_en: 'Dramatic gorge where the entire Victoria Nile surges through a narrow 7-meter rock cleft before entering Lake Albert.',
        description_es: 'Espectacular cañón donde todo el caudal del Nilo se comprime en una brecha de 7 metros antes de caer 43 metros.'
      }
    ],
    interesting_fact: {
      en: 'Winston Churchill famously dubbed Uganda "The Pearl of Africa" in 1908 due to its lush green landscapes, temperate highland climate, and abundant freshwater Great Lakes.',
      es: 'Winston Churchill bautizó a Uganda como "La Perla de África" en 1908 por sus verdes paisajes, clima templado de montaña y abundancia de lagos de agua dulce.'
    },
    teks_alignment: ['TEKS 6.3B: Landlocked nations relying on coastal transport corridors (Northern Corridor via Kenya)', 'TEKS 6.4B: Hydrological sources of the White Nile']
  },

  // =========================================================================
  // 15. ZIMBABWE (ZWE)
  // =========================================================================
  {
    id: 'ZWE',
    iso2: 'zw',
    iso3: 'ZWE',
    name_en: 'Zimbabwe',
    name_es: 'Zimbabue',
    continent: 'Africa',
    continent_es: 'África',
    capital_en: 'Harare',
    capital_es: 'Harare',
    capital_coords: [-17.8252, 31.0335],
    center_coords: [-19.0154, 29.1549],
    zoom_level: 6,
    population: '16,300,000',
    area_sqkm: '390,757 km²',
    gdp_billion: 28,
    main_exports: {
      en: ['Raw Tobacco ($1.2B)', 'Gold ($1.1B)', 'Platinum Group Metals ($750M)', 'Ferroalloys ($420M)', 'Lithium Ores ($340M)'],
      es: ['Tabaco en rama ($1.2B)', 'Oro ($1.1B)', 'Metales del grupo del platino ($750M)', 'Ferroaleaciones de cromo ($420M)', 'Minerales de litio ($340M)'],
      total_val_billion: 5.8,
    },
    main_imports: {
      en: ['Refined Petroleum ($1.4B)', 'Electricity ($420M)', 'Cars & Delivery Trucks ($340M)', 'Corn & Maize ($280M)'],
      es: ['Petróleo refinado ($1.4B)', 'Electricidad ($420M)', 'Camiones y vehículos ($340M)', 'Maíz ($280M)'],
      total_val_billion: 8.6,
    },
    natural_wealth: {
      en: ['Bikita lithium mine (largest known lithium deposit in Africa)', 'Great Dyke geological structure (world’s second largest reserves of platinum and chromium)', 'Victoria Falls (world’s largest waterfall sheet of falling water)', 'Lake Kariba hydroelectric reservoir'],
      es: ['Mina de litio de Bikita (mayor depósito de litio de África)', 'Estructura geológica del Gran Dique (segunda reserva mundial de platino y cromo)', 'Cataratas Victoria en el río Zambeze', 'Embalse hidroeléctrico del lago Kariba'],
    },
    physical_geography_summary: {
      en: 'A landlocked plateau nation situated between the Zambezi and Limpopo rivers, dominated by the central Highveld ridge running southwest to northeast at over 1,200m elevation.',
      es: 'País de meseta sin salida al mar situado entre los ríos Zambeze y Limpopo, dominado por el Highveld central a más de 1,200 metros de altitud.'
    },
    landforms: [
      {
        id: 'zw-waterfall-victoria',
        type: 'river',
        name_en: 'Victoria Falls (Mosi-oa-Tunya)',
        name_es: 'Cataratas Victoria (Mosi-oa-Tunya)',
        coords: [-17.9243, 25.8572],
        elevation_m: 108,
        description_en: 'The world’s largest sheet of falling water (1,708 meters wide and 108 meters high) on the Zambezi River border with Zambia.',
        description_es: 'La cortina de agua más grande del planeta (1,708 metros de ancho por 108 metros de caída) en el río Zambeze.'
      }
    ],
    interesting_fact: {
      en: 'The country takes its name from Great Zimbabwe, an ancient medieval stone city constructed without mortar between the 11th and 15th centuries by the Shona civilization.',
      es: 'El país debe su nombre al Gran Zimbabue, una imponente ciudadela medieval de piedra construida sin mortero por la civilización Shona.'
    },
    teks_alignment: ['TEKS 6.6B: Clean-energy mineral extraction (lithium/platinum in the Great Dyke)', 'TEKS 6.3B: Fluvial geomorphology and canyon incising at Victoria Falls']
  },

  // =========================================================================
  // 16. SUDAN (SDN)
  // =========================================================================
  {
    id: 'SDN',
    iso2: 'sd',
    iso3: 'SDN',
    name_en: 'Sudan',
    name_es: 'Sudán',
    continent: 'Africa',
    continent_es: 'África',
    capital_en: 'Khartoum',
    capital_es: 'Jartum',
    capital_coords: [15.5007, 32.5599],
    center_coords: [12.8628, 30.2176],
    zoom_level: 5,
    population: '48,100,000',
    area_sqkm: '1,861,484 km²',
    gdp_billion: 34,
    main_exports: {
      en: ['Gold ($2.4B)', 'Crude Petroleum ($850M)', 'Gum Arabic ($180M)', 'Sesame Seeds ($160M)', 'Live Sheep & Camels ($140M)'],
      es: ['Oro refinado ($2.4B)', 'Petróleo crudo ($850M)', 'Goma arábiga ($180M)', 'Semillas de sésamo ($160M)', 'Ganado ovino y camellos ($140M)'],
      total_val_billion: 4.8,
    },
    main_imports: {
      en: ['Wheat & Flour ($1.2B)', 'Refined Petroleum ($950M)', 'Cars & Trucks ($380M)', 'Medicaments ($320M)', 'Sugar ($290M)'],
      es: ['Trigo y harina ($1.2B)', 'Petróleo refinado ($950M)', 'Vehículos ($380M)', 'Medicamentos ($320M)', 'Azúcar ($290M)'],
      total_val_billion: 9.2,
    },
    natural_wealth: {
      en: ['Confluence of the White Nile and Blue Nile rivers at Khartoum', 'World’s #1 producer of gum arabic (essential for global beverages and pharmaceuticals)', 'Muglad and Melut oil basins with export pipeline to Port Sudan', 'Fertile Gezira agricultural irrigation scheme'],
      es: ['Confluencia del Nilo Blanco y el Nilo Azul en Jartum', 'Mayor productor mundial de goma arábiga', 'Cuencas petrolíferas con oleoducto hacia Port Sudan en el Mar Rojo', 'Plan de regadío de Gezira'],
    },
    physical_geography_summary: {
      en: 'A vast plain bisected by the north-flowing Nile River, transitioning from hyper-arid Nubian and Saharan deserts in the north to the semi-arid Sahel and savannas in the south, bounded by the Red Sea coast in the northeast.',
      es: 'Inmensa llanura atravesada de sur a norte por el río Nilo, que pasa del desierto árido de Nubia en el norte al Sahel en el sur, con costa en el Mar Rojo.'
    },
    landforms: [
      {
        id: 'sd-river-confluence',
        type: 'river',
        name_en: 'Confluence of White and Blue Nile',
        name_es: 'Confluencia del Nilo Blanco y Azul',
        coords: [15.61, 32.5],
        description_en: 'Strategic hydrological junction where the muddy Blue Nile joins the clear White Nile to form the main Nile River.',
        description_es: 'Unión de las aguas del Nilo Azul etíope y el Nilo Blanco en Jartum para formar el gran río Nilo.'
      }
    ],
    interesting_fact: {
      en: 'Sudan contains more ancient pyramids than Egypt: over 200 steep-sided royal Nubian pyramids stand preserved in the desert sands of Meroë.',
      es: 'Sudán tiene más pirámides antiguas que Egipto: más de 200 pirámides nubias empinadas se conservan en las arenas desérticas de Meroe.'
    },
    teks_alignment: ['TEKS 6.3B: River confluences defining population centers (Khartoum)', 'TEKS 6.6B: Monopoly export of unique natural gums (gum arabic)']
  },

  // =========================================================================
  // 17. MADAGASCAR (MDG)
  // =========================================================================
  {
    id: 'MDG',
    iso2: 'mg',
    iso3: 'MDG',
    name_en: 'Madagascar',
    name_es: 'Madagascar',
    continent: 'Africa',
    continent_es: 'África',
    capital_en: 'Antananarivo',
    capital_es: 'Antananarivo',
    capital_coords: [-18.8792, 47.5079],
    center_coords: [-18.7669, 46.8691],
    zoom_level: 5,
    population: '29,600,000',
    area_sqkm: '587,041 km²',
    gdp_billion: 16,
    main_exports: {
      en: ['Bourbon Vanilla ($650M)', 'Raw Nickel & Cobalt ($580M)', 'Cloves & Spices ($240M)', 'Knit Sweaters ($180M)', 'Titanium Ores ($140M)'],
      es: ['Vainilla Bourbon ($650M)', 'Níquel y cobalto refinados ($580M)', 'Clavo de olor y especias ($240M)', 'Confección textil ($180M)', 'Minerales de titanio ($140M)'],
      total_val_billion: 3.6,
    },
    main_imports: {
      en: ['Refined Petroleum ($850M)', 'Rice ($480M)', 'Palm Oil ($180M)', 'Cars & Delivery Trucks ($140M)'],
      es: ['Petróleo refinado ($850M)', 'Arroz ($480M)', 'Aceite de palma ($180M)', 'Vehículos ($140M)'],
      total_val_billion: 5.2,
    },
    natural_wealth: {
      en: ['World’s #1 producer of vanilla (over 80% of global natural vanilla beans)', 'Over 90% endemic flora and fauna (isolated for 88 million years)', 'Ambatovy nickel-cobalt mega-mine', 'Extensive ilmenite and sapphire mineral sands'],
      es: ['Mayor productor mundial de vainilla Bourbon (>80% del suministro mundial)', 'Más del 90% de fauna y flora endémica única en el mundo', 'Megamina de níquel de Ambatovy', 'Zafiros y arenas de titanio'],
    },
    physical_geography_summary: {
      en: 'The fourth-largest island in the world. Characterized by a high central mountainous plateau (Hauts-Plateaux) dropping precipitously eastward through tropical rainforests to the Indian Ocean and descending westward into dry deciduous savannas.',
      es: 'La cuarta isla más grande del mundo. Caracterizada por una meseta montañosa central que desciende hacia selvas en la costa este y hacia sabanas secas y manglares en la costa oeste.'
    },
    landforms: [
      {
        id: 'mg-karst-tsingy',
        type: 'mountain',
        name_en: 'Tsingy de Bemaraha',
        name_es: 'Tsingy de Bemaraha',
        coords: [-18.66, 44.71],
        description_en: 'Spectacular UNESCO limestone karst landscape featuring a labyrinth of razor-sharp stone needles and deep gorges.',
        description_es: 'Bosque de piedra caliza kárstica con agujas afiladas como navajas, hogar de lémures endémicos.'
      },
      {
        id: 'mg-avenue-baobabs',
        type: 'plain',
        name_en: 'Avenue of the Baobabs',
        name_es: 'Avenida de los Baobabs',
        coords: [-20.25, 44.41],
        description_en: 'Prominent stand of ancient Grandidier’s baobab trees line a dirt road in the Menabe region.',
        description_es: 'Monumental hilera de árboles baobab gigantes milenarios en la región de Menabe.'
      }
    ],
    interesting_fact: {
      en: 'Madagascar split from the Indian landmass roughly 88 million years ago, allowing its wildlife—including over 100 species of lemurs—to evolve in complete geographic isolation.',
      es: 'Madagascar se separó del subcontinente indio hace 88 millones de años, lo que permitió que más del 90% de sus especies (incluyendo todos los lémures) evolucionaran de forma aislada.'
    },
    teks_alignment: ['TEKS 6.4A: Island biogeography and evolutionary endemism', 'TEKS 6.6B: Vanilla agricultural supply chains and price volatility']
  },

  // =========================================================================
  // 18. CAMEROON (CMR)
  // =========================================================================
  {
    id: 'CMR',
    iso2: 'cm',
    iso3: 'CMR',
    name_en: 'Cameroon',
    name_es: 'Camerún',
    continent: 'Africa',
    continent_es: 'África',
    capital_en: 'Yaoundé',
    capital_es: 'Yaundé',
    capital_coords: [3.8480, 11.5021],
    center_coords: [7.3697, 12.3547],
    zoom_level: 6,
    population: '28,600,000',
    area_sqkm: '475,442 km²',
    gdp_billion: 48,
    main_exports: {
      en: ['Crude Petroleum ($2.4B)', 'Cocoa Beans ($950M)', 'Natural Gas / LNG ($780M)', 'Sawn Wood & Timber ($620M)', 'Raw Aluminium ($240M)'],
      es: ['Petróleo crudo ($2.4B)', 'Granos de cacao ($950M)', 'Gas natural licuado ($780M)', 'Madera aserrada tropical ($620M)', 'Aluminio en bruto ($240M)'],
      total_val_billion: 6.8,
    },
    main_imports: {
      en: ['Refined Petroleum ($1.2B)', 'Rice ($480M)', 'Wheat ($340M)', 'Cars & Trucks ($310M)', 'Special Purpose Ships ($240M)'],
      es: ['Petróleo refinado ($1.2B)', 'Arroz ($480M)', 'Trigo ($340M)', 'Vehículos ($310M)', 'Buques y plataformas ($240M)'],
      total_val_billion: 8.9,
    },
    natural_wealth: {
      en: ['"Africa in Miniature" (encompassing all major African climates from rainforest to Sahel)', 'Offshore Rio del Rey oil basin', 'Sanaga River hydroelectric cascade (Song Loulou, Nachtigal dams)', 'Rich volcanic soils supporting banana and coffee agriculture'],
      es: ['"África en Miniatura" (reúne todos los climas de África, desde selva hasta Sahel)', 'Cuenca petrolífera de Río del Rey', 'Potencial hidroeléctrico del río Sanaga', 'Suelos volcánicos fértiles'],
    },
    physical_geography_summary: {
      en: 'Often called "Africa in miniature" because it features all of the continent’s major biomes: coastal beaches, equatorial rainforests, the volcanic Cameroon Line mountains, savannah plateaus (Adamaoua), and Lake Chad Sahel.',
      es: 'Conocido como "África en miniatura" por albergar todos los biomas del continente: playas tropicales, selva ecuatorial, la cordillera volcánica de Camerún, la meseta de Adamaoua y el Sahel del lago Chad.'
    },
    landforms: [
      {
        id: 'cm-volcano-cameroon',
        type: 'volcano',
        name_en: 'Mount Cameroon (Fako)',
        name_es: 'Monte Camerún (Fako)',
        coords: [4.21, 9.17],
        elevation_m: 4040,
        description_en: 'Active stratovolcano rising directly out of the Atlantic coast, the highest peak in West and Central Africa.',
        description_es: 'Estratovolcán activo que emerge junto a la costa atlántica, la cumbre más alta de África Occidental y Central (4,040m).'
      }
    ],
    interesting_fact: {
      en: 'The coastal village of Debundscha at the foot of Mount Cameroon receives over 10,000 mm (400 inches) of rain annually, making it one of the top five wettest inhabited places on Earth.',
      es: 'El pueblo costero de Debundscha, al pie del Monte Camerún, recibe más de 10,000 mm de lluvia al año, siendo uno de los lugares más lluviosos del planeta.'
    },
    teks_alignment: ['TEKS 6.4C: The "Africa in miniature" biome transect from coast to Sahel', 'TEKS 6.3C: Cameroon Volcanic Line tectonics']
  },

  // =========================================================================
  // 19. ZAMBIA (ZMB)
  // =========================================================================
  {
    id: 'ZMB',
    iso2: 'zm',
    iso3: 'ZMB',
    name_en: 'Zambia',
    name_es: 'Zambia',
    continent: 'Africa',
    continent_es: 'África',
    capital_en: 'Lusaka',
    capital_es: 'Lusaka',
    capital_coords: [-15.3875, 28.3228],
    center_coords: [-13.1339, 27.8493],
    zoom_level: 6,
    population: '20,200,000',
    area_sqkm: '752,612 km²',
    gdp_billion: 29,
    main_exports: {
      en: ['Refined Copper & Cathodes ($6.8B)', 'Raw Copper ($1.4B)', 'Tobacco ($180M)', 'Cobalt ($140M)', 'Gold ($95M)'],
      es: ['Cobre refinado y cátodos ($6.8B)', 'Cobre en bruto ($1.4B)', 'Tabaco ($180M)', 'Cobalto ($140M)', 'Oro ($95M)'],
      total_val_billion: 9.8,
    },
    main_imports: {
      en: ['Refined Petroleum ($1.2B)', 'Mining Machinery ($750M)', 'Nitrogenous Fertilizers ($380M)', 'Delivery Trucks ($320M)'],
      es: ['Petróleo refinado ($1.2B)', 'Maquinaria de extracción minera ($750M)', 'Fertilizantes nitrogenados ($380M)', 'Camiones de transporte ($320M)'],
      total_val_billion: 8.2,
    },
    natural_wealth: {
      en: ['The Zambian Copperbelt (one of the world’s most concentrated copper-cobalt belts)', 'Zambezi and Kafue river hydroelectric systems (Kariba Dam)', 'Victoria Falls (shared with Zimbabwe)', 'Rich emerald mines (Kagem emerald mine, world’s largest single producer of green emeralds)'],
      es: ['El Copperbelt zambiano (uno de los mayores cinturones de cobre y cobalto del mundo)', 'Sistemas hidroeléctricos de los ríos Zambeze y Kafue (presa de Kariba)', 'Cataratas Victoria', 'Mina de esmeraldas Kagem (la mayor productora individual de esmeraldas verdes del mundo)'],
    },
    physical_geography_summary: {
      en: 'A landlocked, gently undulating plateau country with an average elevation between 1,000 and 1,300 meters, drained by the Zambezi, Kafue, and Luangwa river systems.',
      es: 'Meseta ondulada sin salida al mar a una altitud media de 1,000 a 1,300 metros, drenada por la cuenca del río Zambeze y sus afluentes Kafue y Luangwa.'
    },
    landforms: [
      {
        id: 'zm-lake-kariba',
        type: 'lake',
        name_en: 'Lake Kariba',
        name_es: 'Lago Kariba',
        coords: [-16.9, 27.9],
        description_en: 'World’s largest man-made lake by volume (180 km³ of water), powering both Zambia and Zimbabwe.',
        description_es: 'El embalse artificial más grande del mundo por volumen de agua (180 km³), frontera natural con Zimbabue.'
      }
    ],
    interesting_fact: {
      en: 'Zambia’s Kagem mine produces roughly 20% of the entire world’s supply of gem-quality emeralds, rivaling Colombia in international gemstone trade.',
      es: 'La mina Kagem en Zambia produce alrededor del 20% de todas las esmeraldas de calidad gema del mundo, rivalizando con Colombia en el mercado internacional.'
    },
    teks_alignment: ['TEKS 6.6B: Single-metal economic dependence (Copperbelt)', 'TEKS 6.4B: Transboundary water management along the Zambezi River']
  },

  // =========================================================================
  // 20. MOZAMBIQUE (MOZ)
  // =========================================================================
  {
    id: 'MOZ',
    iso2: 'mz',
    iso3: 'MOZ',
    name_en: 'Mozambique',
    name_es: 'Mozambique',
    continent: 'Africa',
    continent_es: 'África',
    capital_en: 'Maputo',
    capital_es: 'Maputo',
    capital_coords: [-25.9692, 32.5732],
    center_coords: [-18.6657, 35.5296],
    zoom_level: 5,
    population: '33,900,000',
    area_sqkm: '801,590 km²',
    gdp_billion: 21,
    main_exports: {
      en: ['Coal Briquettes ($2.4B)', 'Raw Aluminium ($1.8B)', 'Liquefied Natural Gas / LNG ($1.4B)', 'Electricity ($420M)', 'Titanium Ores ($280M)'],
      es: ['Carbón mineral ($2.4B)', 'Aluminio fundido Mozal ($1.8B)', 'Gas natural licuado ($1.4B)', 'Electricidad hidroeléctrica ($420M)', 'Minerales de titanio ($280M)'],
      total_val_billion: 8.2,
    },
    main_imports: {
      en: ['Refined Petroleum ($1.6B)', 'Chromium Ores ($680M)', 'Cereals & Rice ($420M)', 'Vehicles ($340M)'],
      es: ['Petróleo refinado ($1.6B)', 'Minerales de cromo ($680M)', 'Cereales y arroz ($420M)', 'Vehículos ($340M)'],
      total_val_billion: 9.8,
    },
    natural_wealth: {
      en: ['Rovuma Basin deepwater natural gas fields (Coral South FLNG, one of the largest discoveries in decades)', 'Zambezi River Cahora Bassa hydroelectric mega-dam', 'Moatize coking coal basin', 'Strategic deepwater ports of Maputo, Beira, and Nacala serving inland Africa'],
      es: ['Megacampos de gas natural en la cuenca de Rovuma (plataforma Coral South)', 'Presa hidroeléctrica de Cahora Bassa en el Zambeze', 'Cuenca de carbón de Moatize', 'Puertos de Maputo, Beira y Nacala como salida marítima para Zimbabue, Malaui y Zambia'],
    },
    physical_geography_summary: {
      en: 'Features an extensive 2,500-km Indian Ocean coastline with broad low-lying coastal plains in the south (accounting for nearly half the country) rising to high plateaus and mountains in the north.',
      es: 'Cuenta con un litoral de 2,500 km en el océano Índico con extensas llanuras costeras al sur que ascienden hacia mesetas montañosas en el norte y el valle del río Zambeze.'
    },
    landforms: [
      {
        id: 'mz-river-zambezi',
        type: 'river',
        name_en: 'Zambezi River Delta',
        name_es: 'Delta del Río Zambeze',
        coords: [-18.85, 36.3],
        length_km: 2574,
        description_en: 'Fourth-longest river in Africa emptying into the Indian Ocean via a vast coastal delta after passing through Cahora Bassa dam.',
        description_es: 'Cuarto río más largo de África, desemboca en el Índico a través de un inmenso delta tras alimentar la presa de Cahora Bassa.'
      }
    ],
    interesting_fact: {
      en: 'The deepwater natural gas reserves discovered offshore in northern Mozambique’s Rovuma Basin are large enough to turn the country into one of the top ten global LNG exporters over the coming decades.',
      es: 'Los yacimientos de gas natural descubiertos en la cuenca marina de Rovuma son tan gigantescos que situarán a Mozambique entre los diez mayores exportadores de gas licuado del planeta.'
    },
    teks_alignment: ['TEKS 6.5A: Offshore LNG floating mega-platforms in developing economies', 'TEKS 6.8A: Indian Ocean port corridors serving landlocked hinterlands']
  },

  // =========================================================================
  // 21. LIBYA (LBY)
  // =========================================================================
  {
    id: 'LBY',
    iso2: 'ly',
    iso3: 'LBY',
    name_en: 'Libya',
    name_es: 'Libia',
    continent: 'Africa',
    continent_es: 'África',
    capital_en: 'Tripoli',
    capital_es: 'Trípoli',
    capital_coords: [32.8872, 13.1913],
    center_coords: [26.3351, 17.2283],
    zoom_level: 5,
    population: '6,900,000',
    area_sqkm: '1,759,540 km²',
    gdp_billion: 45,
    main_exports: {
      en: ['Crude Petroleum ($29B)', 'Petroleum Gas ($1.8B)', 'Refined Petroleum ($1.2B)', 'Gold ($420M)'],
      es: ['Petróleo crudo ($29B)', 'Gas de petróleo ($1.8B)', 'Petróleo refinado ($1.2B)', 'Oro ($420M)'],
      total_val_billion: 32.5,
    },
    main_imports: {
      en: ['Refined Petroleum ($4.2B)', 'Cars & Vehicles ($1.4B)', 'Wheat & Flour ($680M)', 'Broadcasting Equipment ($420M)'],
      es: ['Petróleo refinado ($4.2B)', 'Automóviles y camiones ($1.4B)', 'Trigo y harina ($680M)', 'Equipos de transmisión ($420M)'],
      total_val_billion: 18.5,
    },
    natural_wealth: {
      en: ['Largest proven crude oil reserves in Africa (over 48 billion barrels of sweet light crude in Sirte Basin)', 'Great Man-Made River fossil water aquifers (Nubian Sandstone Aquifer System)', 'Longest Mediterranean coastline of any single North African country (1,770 km)'],
      es: ['Mayores reservas probadas de petróleo crudo de África (>48,000 millones de barriles en la cuenca de Sirte)', 'Gran Río Artificial que extrae agua fósil del acuífero de arenisca de Nubia', 'La línea de costa mediterránea más extensa del norte de África (1,770 km)'],
    },
    physical_geography_summary: {
      en: 'Over 90% hyper-arid desert (Libyan Desert and Sahara), broken only by the Mediterranean coastal lowlands around Tripoli and Benghazi and the central volcanic mountains of the Tibesti fringe.',
      es: 'Más del 90% es desierto hiperárido (desierto de Libia y Sáhara), quebrado únicamente por las franjas costeras mediterráneas de Trípoli y Bengasi.'
    },
    landforms: [
      {
        id: 'ly-gulf-sidra',
        type: 'bay',
        name_en: 'Gulf of Sirte (Sidra)',
        name_es: 'Golfo de Sirte (Sidra)',
        coords: [31.5, 18.0],
        description_en: 'Large oceanic gulf of the Mediterranean Sea forming the central maritime coast of Libya, rich with offshore oil terminals.',
        description_es: 'Golfo mediterráneo en el centro de la costa libia que alberga los principales puertos de embarque petrolero.'
      }
    ],
    interesting_fact: {
      en: 'Libya constructed the "Great Man-Made River", the largest underground pipe and aqueduct network in the world, pumping over 6 million cubic meters of ancient ice-age fossil water daily from the Sahara to coastal cities.',
      es: 'Libia construyó el "Gran Río Artificial", la red de tuberías subterráneas más grande del mundo, que transporta a diario millones de metros cúbicos de agua fósil milenaria desde el corazón del Sáhara hasta las ciudades costeras.'
    },
    teks_alignment: ['TEKS 6.4C: Mining non-renewable fossil aquifers for urban water supply', 'TEKS 6.5A: Extreme petro-state export dependency']
  },

  // =========================================================================
  // 22. RWANDA (RWA)
  // =========================================================================
  {
    id: 'RWA',
    iso2: 'rw',
    iso3: 'RWA',
    name_en: 'Rwanda',
    name_es: 'Ruanda',
    continent: 'Africa',
    continent_es: 'África',
    capital_en: 'Kigali',
    capital_es: 'Kigali',
    capital_coords: [-1.9441, 30.0619],
    center_coords: [-1.9403, 29.8739],
    zoom_level: 8,
    population: '13,800,000',
    area_sqkm: '26,338 km²',
    gdp_billion: 14,
    main_exports: {
      en: ['Gold ($520M)', 'Coffee ($110M)', 'Tea ($105M)', 'Tantalum & Tin Ores ($95M)', 'Cut Flowers'],
      es: ['Oro refinado ($520M)', 'Café especial arábica ($110M)', 'Té ($105M)', 'Minerales de tantalio y estaño ($95M)', 'Flores cortadas'],
      total_val_billion: 1.6,
    },
    main_imports: {
      en: ['Refined Petroleum ($480M)', 'Gold raw ($420M)', 'Medicaments ($180M)', 'Telecommunications Equipment ($120M)'],
      es: ['Petróleo refinado ($480M)', 'Oro en bruto ($420M)', 'Medicamentos ($180M)', 'Equipos celulares ($120M)'],
      total_val_billion: 4.2,
    },
    natural_wealth: {
      en: ['Virunga Volcanoes gorilla habitat (sanctuary of the endangered mountain gorilla)', 'Lake Kivu methane gas extraction (KivuWatt power plant)', 'Highland volcanic soils for premium specialty coffee', 'Tantalum, tin, and tungsten (3T minerals)'],
      es: ['Volcanes de Virunga (santuario del gorila de montaña)', 'Extracción de gas metano disuelto en el lago Kivu (planta KivuWatt)', 'Suelos volcánicos para café gourmet', 'Minerales 3T (estaño, tantalio y tungsteno)'],
    },
    physical_geography_summary: {
      en: 'Known as the "Land of a Thousand Hills" (Pays des Mille Collines). A high-altitude landlocked nation characterized by rolling green terraced hills, bounded by Lake Kivu and the Virunga volcanic chain in the west.',
      es: 'Conocido como el "País de las Mil Colinas". Nación montañosa de altitud sin salida al mar con colinas verdes abancaladas, bordeada por el lago Kivu y los volcanes de Virunga al oeste.'
    },
    landforms: [
      {
        id: 'rw-volcano-karisimbi',
        type: 'volcano',
        name_en: 'Mount Karisimbi',
        name_es: 'Monte Karisimbi',
        coords: [-1.506, 29.45],
        elevation_m: 4507,
        description_en: 'Highest peak in Rwanda and highest volcano in the Virunga volcanic arc, home to mountain gorilla research.',
        description_es: 'Estratovolcán inactivo y punto más alto de Ruanda (4,507m), en el Parque Nacional de los Volcanes.'
      },
      {
        id: 'rw-lake-kivu',
        type: 'lake',
        name_en: 'Lake Kivu',
        name_es: 'Lago Kivu',
        coords: [-2.0, 29.2],
        elevation_m: 1460,
        description_en: 'Deep rift lake saturated with dissolved methane gas, tapped by Rwanda to generate national electrical power.',
        description_es: 'Lago del Rift rico en gas metano disuelto que Ruanda aprovecha para generar energía eléctrica.'
      }
    ],
    interesting_fact: {
      en: 'Rwanda is pioneering the world’s first commercial extraction of dissolved methane gas from the depths of Lake Kivu, turning a natural limnic eruption hazard into clean electrical power.',
      es: 'Ruanda es pionera mundial en extraer gas metano disuelto en las profundidades del lago Kivu para transformarlo en electricidad limpia.'
    },
    teks_alignment: ['TEKS 6.4B: Innovative extraction of dissolved limnic gases for power', 'TEKS 6.3A: Landlocked nations overcoming topographic barriers through tech governance']
  },

  // =========================================================================
  // 23. NAMIBIA (NAM)
  // =========================================================================
  {
    id: 'NAM',
    iso2: 'na',
    iso3: 'NAM',
    name_en: 'Namibia',
    name_es: 'Namibia',
    continent: 'Africa',
    continent_es: 'África',
    capital_en: 'Windhoek',
    capital_es: 'Windhoek',
    capital_coords: [-22.5609, 17.0658],
    center_coords: [-22.9576, 18.4904],
    zoom_level: 5,
    population: '2,600,000',
    area_sqkm: '825,615 km²',
    gdp_billion: 13,
    main_exports: {
      en: ['Diamonds & Gemstones ($1.4B)', 'Radioactive Chemicals / Uranium ($1.1B)', 'Refined Copper ($850M)', 'Gold ($650M)', 'Frozen Fish ($420M)'],
      es: ['Diamantes marinos y terrestres ($1.4B)', 'Uranio refinado ($1.1B)', 'Cobre ($850M)', 'Oro ($650M)', 'Pescado congelado de la corriente de Benguela ($420M)'],
      total_val_billion: 6.2,
    },
    main_imports: {
      en: ['Refined Petroleum ($1.4B)', 'Copper Ores for smelting ($850M)', 'Cars & Trucks ($520M)', 'Machinery ($420M)'],
      es: ['Petróleo refinado ($1.4B)', 'Minerales de cobre para fundición ($850M)', 'Vehículos ($520M)', 'Maquinaria ($420M)'],
      total_val_billion: 7.8,
    },
    natural_wealth: {
      en: ['World’s premier marine diamond dredging fleet off the Skeleton Coast', 'Third largest producer of uranium globally (Husab and Rössing mines)', 'Benguela Current upwelling driving productive fisheries', 'Vast solar radiation in Namib Desert'],
      es: ['Líder mundial en minería marina de diamantes en el lecho oceánico', 'Tercer productor mundial de uranio (minas de Husab y Rössing)', 'Riqueza pesquera de la corriente fría de Benguela', 'Radiación solar en el desierto de Namib'],
    },
    physical_geography_summary: {
      en: 'The driest country in Sub-Saharan Africa. The hyper-arid Namib Desert runs the entire length of the Atlantic coast, backed by the Great Escarpment which rises to the central plateau, sloping east to the Kalahari Desert.',
      es: 'El país más árido del África subsahariana. El desierto costero de Namib recorre todo el litoral atlántico, respaldado por el Gran Escarpe que asciende a la meseta central y al desierto de Kalahari.'
    },
    landforms: [
      {
        id: 'na-desert-namib',
        type: 'desert',
        name_en: 'Namib Desert (Sossusvlei & Dune 45)',
        name_es: 'Desierto de Namib (Sossusvlei)',
        coords: [-24.73, 15.29],
        description_en: 'Considered the oldest desert on Earth (at least 55 million years old), famous for colossal red sand dunes exceeding 300 meters height.',
        description_es: 'Considerado el desierto más antiguo del planeta (55 millones de años), célebre por sus gigantescas dunas rojas de más de 300m.'
      },
      {
        id: 'na-coast-skeleton',
        type: 'cape',
        name_en: 'Skeleton Coast',
        name_es: 'Costa de los Esqueletos',
        coords: [-21.0, 13.5],
        description_en: 'Bleak, fog-shrouded Atlantic coastline littered with hundreds of shipwrecks and whale bones caused by dense cold Benguela ocean fogs.',
        description_es: 'Litoral atlántico envuelto en densas nieblas marinas donde yacen cientos de naufragios históricos.'
      }
    ],
    interesting_fact: {
      en: 'Namibia extracts more than 75% of its diamonds directly from the ocean floor, utilizing specialized seabed crawler vessels that vacuum diamond-bearing gravels from depths down to 140 meters.',
      es: 'Namibia extrae más del 75% de sus diamantes directamente del fondo del mar mediante buques robotizados que aspiran las gravas submarinas ricas en gemas.'
    },
    teks_alignment: ['TEKS 6.4C: Cold ocean currents (Benguela) creating hyper-arid coastal deserts (Namib)', 'TEKS 6.6B: High-tech deep-sea diamond mining techniques']
  },

  // =========================================================================
  // 24. BOTSWANA (BWA)
  // =========================================================================
  {
    id: 'BWA',
    iso2: 'bw',
    iso3: 'BWA',
    name_en: 'Botswana',
    name_es: 'Botsuana',
    continent: 'Africa',
    continent_es: 'África',
    capital_en: 'Gaborone',
    capital_es: 'Gaborone',
    capital_coords: [-24.6282, 25.9231],
    center_coords: [-22.3285, 24.6849],
    zoom_level: 6,
    population: '2,630,000',
    area_sqkm: '581,730 km²',
    gdp_billion: 21,
    main_exports: {
      en: ['Rough & Polished Diamonds ($6.8B)', 'Bovine Meat & Beef ($140M)', 'Nickel Ores ($95M)', 'Soda Ash ($85M)'],
      es: ['Diamantes en bruto y pulidos ($6.8B)', 'Carne de vacuno de alta calidad ($140M)', 'Minerales de níquel ($95M)', 'Ceniza de sosa ($85M)'],
      total_val_billion: 7.4,
    },
    main_imports: {
      en: ['Rough Diamonds for aggregation ($2.1B)', 'Refined Petroleum ($1.2B)', 'Electricity ($340M)', 'Cars & Trucks ($310M)', 'Medicaments ($180M)'],
      es: ['Diamantes en bruto para clasificación ($2.1B)', 'Petróleo refinado ($1.2B)', 'Electricidad ($340M)', 'Vehículos ($310M)', 'Medicamentos ($180M)'],
      total_val_billion: 6.8,
    },
    natural_wealth: {
      en: ['Jwaneng and Orapa diamond mines (the richest diamond mines by value in the world)', 'Okavango Delta (world’s premier inland wetland oasis in a desert)', 'Makgadikgadi salt pans', 'World’s largest elephant population (over 130,000 elephants)'],
      es: ['Minas de Jwaneng y Orapa (las minas de diamantes más valiosas del planeta)', 'Delta del Okavango (el mayor delta fluvial interior del mundo)', 'Salares de Makgadikgadi', 'La mayor población de elefantes de la Tierra (>130,000)'],
    },
    physical_geography_summary: {
      en: 'A landlocked, predominantly flat tableland country. Over 70% of its territory is enveloped by the semi-arid Kalahari Desert, punctuated in the northwest by the lush labyrinth of the Okavango Delta.',
      es: 'Meseta plana sin salida al mar. Más del 70% de su territorio está cubierto por el desierto de Kalahari, interrumpido al noroeste por el oasis del delta del Okavango.'
    },
    landforms: [
      {
        id: 'bw-delta-okavango',
        type: 'bay',
        name_en: 'Okavango Delta',
        name_es: 'Delta del Okavango',
        coords: [-19.28, 22.9],
        description_en: 'Endorheic inland delta where river waters from Angola spill into the Kalahari Desert sands and evaporate without ever reaching the sea.',
        description_es: 'Delta fluvial interior donde las aguas del río Okavango se esparcen en las arenas del Kalahari sin llegar al mar.'
      }
    ],
    interesting_fact: {
      en: 'Botswana’s Jwaneng mine is the single richest diamond mine in the world by value; through its partnership with De Beers (Debswana), diamond revenues fund universal healthcare and free public education.',
      es: 'La mina Jwaneng en Botsuana es la mina de diamantes más valiosa del planeta; sus ingresos han financiado salud y educación pública gratuita para sus ciudadanos.'
    },
    teks_alignment: ['TEKS 6.5A: Diamond resource governance transforming an impoverished nation into an upper-middle income economy', 'TEKS 6.4A: Endorheic delta hydrological dynamics in arid basins']
  },

  // =========================================================================
  // 25. SENEGAL, MALI (MLI)
  // =========================================================================
  {
    id: 'MLI',
    iso2: 'ml',
    iso3: 'MLI',
    name_en: 'Mali',
    name_es: 'Malí',
    continent: 'Africa',
    continent_es: 'África',
    capital_en: 'Bamako',
    capital_es: 'Bamako',
    capital_coords: [12.6392, -8.0029],
    center_coords: [17.5707, -3.9962],
    zoom_level: 5,
    population: '23,300,000',
    area_sqkm: '1,240,192 km²',
    gdp_billion: 21,
    main_exports: {
      en: ['Gold ($4.8B)', 'Raw Cotton ($420M)', 'Live Animals ($180M)', 'Shea Butter ($45M)'],
      es: ['Oro refinado ($4.8B)', 'Algodón en rama ($420M)', 'Ganado en pie ($180M)', 'Manteca de karité ($45M)'],
      total_val_billion: 5.6,
    },
    main_imports: {
      en: ['Refined Petroleum ($1.8B)', 'Broadcasting Equipment ($340M)', 'Packaged Medicaments ($280M)', 'Cements & Fabrics ($310M)'],
      es: ['Petróleo refinado ($1.8B)', 'Equipos celulares ($340M)', 'Medicamentos ($280M)', 'Cemento y tejidos ($310M)'],
      total_val_billion: 6.9,
    },
    natural_wealth: {
      en: ['Third largest gold producer in Africa (Loulo-Gounkoto, Fekola mines)', 'Niger River inland delta (Macina - vital agricultural floodplain)', 'Goulamina lithium deposit (one of the largest undeveloped lithium hard-rock deposits)', 'Ancient trans-Saharan trade cities (Timbuktu, Djenné)'],
      es: ['Tercer productor de oro de África (minas de Fekola y Loulo-Gounkoto)', 'Delta interior del río Níger (Macina)', 'Yacimiento de litio de Goulamina', 'Ciudades históricas de la Ruta del Sáhara (Tombuctú y Djenné)'],
    },
    physical_geography_summary: {
      en: 'A landlocked West African nation dominated by flat plains. Stretches from the humid Sudanian savannah in the south through the semi-arid Sahelian belt to the hyper-arid sands of the Sahara in the north, linked by the arc of the Niger River.',
      es: 'País llano sin salida al mar que abarca desde la sabana húmeda en el sur hasta el Sahel y el desierto del Sáhara en el norte, conectado por el gran arco del río Níger.'
    },
    landforms: [
      {
        id: 'ml-delta-niger-inland',
        type: 'plain',
        name_en: 'Inner Niger Delta (Macina)',
        name_es: 'Delta Interior del Níger (Macina)',
        coords: [14.5, -4.5],
        description_en: 'Vast wetland in the semi-arid Sahel flooded annually by the Niger River, sustaining fishing, rice, and pastoralist herds.',
        description_es: 'Humedal de más de 30,000 km² en pleno Sahel que sustenta la pesca y el cultivo de arroz en Malí.'
      }
    ],
    interesting_fact: {
      en: 'In the 14th century, Mansa Musa, emperor of the Mali Empire, was the wealthiest individual in recorded human history; on his pilgrimage to Mecca, he gave away so much gold that he caused massive inflation in Cairo and the Mediterranean.',
      es: 'En el siglo XIV, Mansa Musa, emperador de Malí, fue considerado la persona más rica de la historia humana gracias a las colosales minas de oro malienses.'
    },
    teks_alignment: ['TEKS 6.3B: River arcs sustaining civilization through arid zones (Niger River)', 'TEKS 6.6B: Gold mineral extraction from ancient empires to modern mining']
  },

  // =========================================================================
  // 26. GABON (GAB)
  // =========================================================================
  {
    id: 'GAB',
    iso2: 'ga',
    iso3: 'GAB',
    name_en: 'Gabon',
    name_es: 'Gabón',
    continent: 'Africa',
    continent_es: 'África',
    capital_en: 'Libreville',
    capital_es: 'Libreville',
    capital_coords: [0.4162, 9.4673],
    center_coords: [-0.8037, 11.6094],
    zoom_level: 6,
    population: '2,400,000',
    area_sqkm: '267,668 km²',
    gdp_billion: 21,
    main_exports: {
      en: ['Crude Petroleum ($5.8B)', 'Manganese Ore ($2.4B)', 'Sawn Wood & Timber ($720M)', 'Plywood ($210M)'],
      es: ['Petróleo crudo ($5.8B)', 'Mineral de manganeso de Moanda ($2.4B)', 'Madera aserrada de okoumé ($720M)', 'Tableros contrachapados ($210M)'],
      total_val_billion: 9.4,
    },
    main_imports: {
      en: ['Refined Petroleum ($420M)', 'Special Purpose Ships ($380M)', 'Poultry Meat ($240M)', 'Cars & Trucks ($190M)'],
      es: ['Petróleo refinado ($420M)', 'Buques y plataformas marinas ($380M)', 'Carne de ave ($240M)', 'Vehículos ($190M)'],
      total_val_billion: 3.8,
    },
    natural_wealth: {
      en: ['Over 88% dense equatorial rainforest cover (highest percentage of forest cover in Africa)', 'Moanda manganese mine (second largest producer of manganese globally)', 'Offshore Atlantic oil fields in Gulf of Guinea', 'Pristine coastal national parks harboring surfing hippos and forest elephants (Loango)'],
      es: ['Más del 88% de cobertura de selva tropical virgen (el porcentaje más alto de África)', 'Minas de manganeso de Moanda (segundo productor mundial)', 'Campos de petróleo en el Golfo de Guinea', 'Parque Nacional de Loango con elefantes de selva'],
    },
    physical_geography_summary: {
      en: 'Straddles the Equator on the Atlantic coast of Central Africa. Dominated by dense, pristine Congo Basin rainforests covering over 88% of the territory, drained by the Ogooué River.',
      es: 'Situado en la línea ecuatorial sobre el Atlántico. Cubierto en más del 88% por selvas tropicales vírgenes de la cuenca del Congo, drenadas por el río Ogooué.'
    },
    landforms: [
      {
        id: 'ga-park-loango',
        type: 'bay',
        name_en: 'Loango National Park',
        name_es: 'Parque Nacional de Loango',
        coords: [-2.15, 9.6],
        description_en: 'Pristine coastal park where virgin equatorial rainforest directly meets white ocean sand beaches.',
        description_es: 'Parque donde la selva ecuatorial desemboca directo en playas atlánticas vírgenes.'
      }
    ],
    interesting_fact: {
      en: 'Gabon is the most heavily forested nation in Africa (88% of its land is jungle) and acts as one of the world’s most powerful net carbon absorbers.',
      es: 'Gabón es el país más boscoso de África (88% de selva densa) y absorbe mucho más dióxido de carbono del que emite, actuando como sumidero vital del planeta.'
    },
    teks_alignment: ['TEKS 6.4B: Forest conservation and carbon sinks in equatorial nations', 'TEKS 6.6B: Manganese extraction for high-strength steel manufacturing']
  },

  // =========================================================================
  // 27. SENEGAL, BURKINA FASO (BFA)
  // =========================================================================
  {
    id: 'BFA',
    iso2: 'bf',
    iso3: 'BFA',
    name_en: 'Burkina Faso',
    name_es: 'Burkina Faso',
    continent: 'Africa',
    continent_es: 'África',
    capital_en: 'Ouagadougou',
    capital_es: 'Uagadugú',
    capital_coords: [12.3714, -1.5197],
    center_coords: [12.2383, -1.5616],
    zoom_level: 6,
    population: '23,200,000',
    area_sqkm: '274,200 km²',
    gdp_billion: 20,
    main_exports: {
      en: ['Gold ($4.4B)', 'Raw Cotton ($380M)', 'Zinc Ores ($140M)', 'Sesame Seeds ($95M)', 'Cashew Nuts ($45M)'],
      es: ['Oro refinado ($4.4B)', 'Algodón en rama ($380M)', 'Minerales de zinc ($140M)', 'Semillas de sésamo ($95M)', 'Nueces de la India ($45M)'],
      total_val_billion: 5.2,
    },
    main_imports: {
      en: ['Refined Petroleum ($1.6B)', 'Electricity ($240M)', 'Medicaments ($190M)', 'Cement ($160M)', 'Rice ($140M)'],
      es: ['Petróleo refinado ($1.6B)', 'Electricidad ($240M)', 'Medicamentos ($190M)', 'Cemento ($160M)', 'Arroz ($140M)'],
      total_val_billion: 5.8,
    },
    natural_wealth: {
      en: ['Booming industrial and artisanal gold extraction (Essakane, Houndé mines)', 'Extensive cotton farming in southwestern savannahs', 'Zinc deposits at Perkoa', 'Headwaters of the Black Volta and Red Volta rivers'],
      es: ['Gran auge de extracción de oro (minas de Essakane y Houndé)', 'Cultivo extensivo de algodón en las sabanas del suroeste', 'Minas de zinc de Perkoa', 'Nacimiento de los ríos Volta Negro y Volta Blanco'],
    },
    physical_geography_summary: {
      en: 'A landlocked plateau in West Africa, sloping gently from the northwest toward the Volta River basin in the south, traversing the transition zone from Sahelian thorn steppe to Sudanian green savannah.',
      es: 'Meseta sin salida al mar en África Occidental, que desciende suavemente hacia la cuenca del río Volta, atravesando la transición del Sahel semiárido a la sabana sudanesa.'
    },
    landforms: [
      {
        id: 'bf-peaks-sindou',
        type: 'mountain',
        name_en: 'Peaks of Sindou',
        name_es: 'Picos de Sindou',
        coords: [10.66, -5.16],
        elevation_m: 450,
        description_en: 'Spectacular geological sandstone rock forest carved by wind and water erosion over millions of years.',
        description_es: 'Formaciones geológicas de arenisca esculpidas por el viento y el agua que forman un bosque de roca.'
      }
    ],
    interesting_fact: {
      en: 'Burkina Faso means "Land of Incorruptible People" in the indigenous Mooré and Dioula languages, chosen by revolutionary leader Thomas Sankara in 1984.',
      es: 'Burkina Faso significa "Tierra de los Hombres Íntegros" en las lenguas nativas moré y diula, nombre adoptado en 1984 por Thomas Sankara.'
    },
    teks_alignment: ['TEKS 6.3A: Overcoming landlocked geographic friction via coastal corridors (Abidjan and Tema)', 'TEKS 6.6B: Gold mining expansion in the Sahel']
  },

  // =========================================================================
  // 28. GUINEA (GIN)
  // =========================================================================
  {
    id: 'GIN',
    iso2: 'gn',
    iso3: 'GIN',
    name_en: 'Guinea',
    name_es: 'Guinea',
    continent: 'Africa',
    continent_es: 'África',
    capital_en: 'Conakry',
    capital_es: 'Conakri',
    capital_coords: [9.6412, -13.5784],
    center_coords: [9.9456, -9.6966],
    zoom_level: 6,
    population: '14,200,000',
    area_sqkm: '245,857 km²',
    gdp_billion: 23,
    main_exports: {
      en: ['Bauxite / Aluminium Ore ($5.4B)', 'Gold ($3.8B)', 'Raw Aluminium ($480M)', 'Diamonds ($95M)'],
      es: ['Bauxita / mineral de aluminio ($5.4B)', 'Oro ($3.8B)', 'Aluminio ($480M)', 'Diamantes ($95M)'],
      total_val_billion: 10.2,
    },
    main_imports: {
      en: ['Refined Petroleum ($1.4B)', 'Rice ($480M)', 'Mining Equipment ($380M)', 'Vehicles ($310M)', 'Wheat ($180M)'],
      es: ['Petróleo refinado ($1.4B)', 'Arroz ($480M)', 'Maquinaria minera ($380M)', 'Vehículos ($310M)', 'Trigo ($180M)'],
      total_val_billion: 5.4,
    },
    natural_wealth: {
      en: ['World’s largest proven reserves of bauxite (over 25% of all bauxite on Earth at Boké)', 'Simandou iron ore deposit (largest untapped high-grade iron deposit in the world)', 'Fouta Djallon highlands ("Water Tower of West Africa" source of Niger, Senegal, and Gambia rivers)', 'Rich artisanal and industrial gold fields in Siguiri'],
      es: ['Mayores reservas de bauxita del planeta (>25% de toda la bauxita del mundo)', 'Megayacimiento de hierro de Simandou (el mayor depósito sin explotar del mundo)', 'Macizo de Futa Yallon ("Torre de Agua de África Occidental", cuna de los ríos Níger, Senegal y Gambia)', 'Yacimientos de oro en Siguiri'],
    },
    physical_geography_summary: {
      en: 'Four distinct geographical regions: maritime coastal mangrove lowlands, the central mountainous Fouta Djallon highlands, the flat northeastern savannah, and the dense southeastern forested Guinea Highlands.',
      es: 'Cuatro regiones: llanuras costeras con manglares, la meseta montañosa de Futa Yallon, las sabanas del noreste y las selvas montañosas del sureste.'
    },
    landforms: [
      {
        id: 'gn-plateau-fouta',
        type: 'plateau',
        name_en: 'Fouta Djallon Highlands',
        name_es: 'Macizo de Futa Yallon',
        coords: [11.3, -12.3],
        elevation_m: 1515,
        description_en: 'Highland sandstone plateau acting as the water reservoir of West Africa, giving birth to the Niger, Senegal, and Gambia rivers.',
        description_es: 'Meseta montañosa considerada el "castillo de agua" de África Occidental, donde nacen los ríos Níger, Senegal y Gambia.'
      }
    ],
    interesting_fact: {
      en: 'Guinea contains over one-quarter of the entire world’s bauxite reserves and is currently developing Simandou, the largest high-grade iron ore mining and railway project on Earth.',
      es: 'Guinea posee más del 25% de la bauxita de todo el planeta y alberga Simandou, el mayor megayacimiento virgen de mineral de hierro de alta pureza del mundo.'
    },
    teks_alignment: ['TEKS 6.6B: Bauxite and iron ore supply chains driving international metallurgy', 'TEKS 6.4C: Highland headwaters supplying transboundary river networks']
  },

  // =========================================================================
  // 29. NAMIBIA, NIGER (NER)
  // =========================================================================
  {
    id: 'NER',
    iso2: 'ne',
    iso3: 'NER',
    name_en: 'Niger',
    name_es: 'Níger',
    continent: 'Africa',
    continent_es: 'África',
    capital_en: 'Niamey',
    capital_es: 'Niamey',
    capital_coords: [13.5116, 2.1254],
    center_coords: [17.6078, 8.0817],
    zoom_level: 5,
    population: '26,200,000',
    area_sqkm: '1,267,000 km²',
    gdp_billion: 17,
    main_exports: {
      en: ['Radioactive Chemicals / Uranium ($480M)', 'Gold ($340M)', 'Crude Petroleum ($240M)', 'Oily Seeds ($110M)', 'Livestock & Onions ($90M)'],
      es: ['Uranio concentrado yellowcake ($480M)', 'Oro ($340M)', 'Petróleo crudo ($240M)', 'Semillas oleaginosas ($110M)', 'Cebollas y ganado ($90M)'],
      total_val_billion: 1.4,
    },
    main_imports: {
      en: ['Rice ($420M)', 'Refined Petroleum ($380M)', 'Arms & Vehicles ($240M)', 'Medicaments ($180M)', 'Cement ($140M)'],
      es: ['Arroz ($420M)', 'Petróleo refinado ($380M)', 'Vehículos ($240M)', 'Medicamentos ($180M)', 'Cemento ($140M)'],
      total_val_billion: 3.8,
    },
    natural_wealth: {
      en: ['Major global uranium mines at Arlit and Imouraren (crucial supplier for French nuclear reactors)', 'Agadem oil basin with export pipeline to the Gulf of Guinea', 'Niger River fertile agricultural southwest corridor', 'Aïr Mountains mineral and desert tourism'],
      es: ['Minas mundiales de uranio en Arlit e Imouraren (proveedor histórico de centrales nucleares)', 'Cuenca petrolífera de Agadem y nuevo oleoducto hacia Benín', 'Corredor fluvial del río Níger', 'Montes Aïr y el desierto de Teneré'],
    },
    physical_geography_summary: {
      en: 'A landlocked nation over 80% covered by the Sahara Desert (Ténéré Desert). The Aïr Mountains rise in the north-central region, while the southwest is nurtured by the fertile green ribbon of the Niger River.',
      es: 'País sin litoral cubierto en más del 80% por el desierto del Sáhara (desierto de Teneré). Destacan los montes Aïr en el centro-norte y la vega fértil del río Níger en el suroeste.'
    },
    landforms: [
      {
        id: 'ne-desert-tenere',
        type: 'desert',
        name_en: 'Ténéré Desert (Tree of Ténéré)',
        name_es: 'Desierto de Teneré',
        coords: [19.0, 10.0],
        description_en: 'Hyper-arid sand desert in the southern Sahara, renowned for towering sand dunes and extreme isolation.',
        description_es: 'Vasto desierto de arena hiperárido en el Sáhara meridional, famoso por sus dunas móviles y aislamiento.'
      }
    ],
    interesting_fact: {
      en: 'The "Tree of Ténéré" in Niger was once considered the most isolated tree on Earth—the only living tree within a radius of more than 400 kilometers in the middle of the Sahara Desert.',
      es: 'El "Árbol de Teneré" en Níger fue considerado el árbol más solitario del planeta: no había ningún otro árbol en un radio de más de 400 kilómetros a la redonda.'
    },
    teks_alignment: ['TEKS 6.6B: Uranium mining driving global nuclear energy supply chains', 'TEKS 6.4C: Desertification pressures across the Sahel']
  },

  // =========================================================================
  // 30. EQUATORIAL GUINEA (GNQ)
  // =========================================================================
  {
    id: 'GNQ',
    iso2: 'gq',
    iso3: 'GNQ',
    name_en: 'Equatorial Guinea',
    name_es: 'Guinea Ecuatorial',
    continent: 'Africa',
    continent_es: 'África',
    capital_en: 'Malabo (Ciudad de la Paz)',
    capital_es: 'Malabo (Ciudad de la Paz)',
    capital_coords: [3.7504, 8.7371],
    center_coords: [1.6508, 10.2679],
    zoom_level: 7,
    population: '1,700,000',
    area_sqkm: '28,051 km²',
    gdp_billion: 12,
    main_exports: {
      en: ['Crude Petroleum ($4.2B)', 'Petroleum Gas / LNG ($1.4B)', 'Acyclic Alcohols ($480M)', 'Timber ($120M)'],
      es: ['Petróleo crudo ($4.2B)', 'Gas natural licuado ($1.4B)', 'Metanol y alcoholes ($480M)', 'Madera tropical ($120M)'],
      total_val_billion: 6.4,
    },
    main_imports: {
      en: ['Special Purpose Ships ($420M)', 'Gas Turbines ($180M)', 'Meat ($140M)', 'Refined Petroleum ($110M)'],
      es: ['Buques y plataformas marinas ($420M)', 'Turbinas de gas ($180M)', 'Carne congelada ($140M)', 'Petróleo refinado ($110M)'],
      total_val_billion: 2.4,
    },
    natural_wealth: {
      en: ['Offshore oil and natural gas fields in Gulf of Guinea (Zafiro, Alba fields)', 'Rich volcanic soil on Bioko Island supporting cocoa cultivation', 'Dense timber forests in continental Río Muni', 'Punta Europa LNG liquefaction and methanol terminal'],
      es: ['Grandes yacimientos marinos de petróleo y gas en el Golfo de Guinea (Zafiro y Alba)', 'Suelos volcánicos en la isla de Bioko', 'Bosques madereros en Río Muni', 'Terminal de gas licuado y metanol en Punta Europa'],
    },
    physical_geography_summary: {
      en: 'The only sovereign Spanish-speaking country in Africa. Comprises a mainland coastal territory (Río Muni) and volcanic islands in the Gulf of Guinea, including Bioko Island with the volcanic Pico Basilé.',
      es: 'El único país hispanohablante de África. Formado por una región continental (Río Muni) y varias islas volcánicas en el Golfo de Guinea, destacando la isla de Bioko con el Pico Basilé.'
    },
    landforms: [
      {
        id: 'gq-peak-basile',
        type: 'volcano',
        name_en: 'Pico Basilé (Bioko)',
        name_es: 'Pico Basilé',
        coords: [3.58, 8.76],
        elevation_m: 3011,
        description_en: 'Highest mountain peak in Equatorial Guinea, a massive shield volcano dominating Bioko Island.',
        description_es: 'Volcán en escudo y montaña más alta de Guinea Ecuatorial (3,011m), dominando la isla de Bioko.'
      }
    ],
    interesting_fact: {
      en: 'Equatorial Guinea is the only independent sovereign country on the African continent where Spanish is an official language, a legacy of Spanish colonial rule until 1968.',
      es: 'Guinea Ecuatorial es el único país soberano de África donde el español es idioma oficial y materno de la mayoría de la población.'
    },
    teks_alignment: ['TEKS 6.5A: Offshore hydrocarbon wealth transforming small island and coastal economies', 'TEKS 6.3A: Fragmented island-mainland state geography']
  },

  // =========================================================================
  // 31. CHAD (TCD)
  // =========================================================================
  {
    id: 'TCD',
    iso2: 'td',
    iso3: 'TCD',
    name_en: 'Chad',
    name_es: 'Chad',
    continent: 'Africa',
    continent_es: 'África',
    capital_en: 'N’Djamena',
    capital_es: 'Yamena',
    capital_coords: [12.1348, 15.0557],
    center_coords: [15.4542, 18.7322],
    zoom_level: 5,
    population: '18,300,000',
    area_sqkm: '1,284,000 km²',
    gdp_billion: 13,
    main_exports: {
      en: ['Crude Petroleum ($3.4B)', 'Raw Cotton ($140M)', 'Gum Arabic ($85M)', 'Live Cattle & Livestock ($75M)'],
      es: ['Petróleo crudo ($3.4B)', 'Algodón en rama ($140M)', 'Goma arábiga ($85M)', 'Ganado en pie ($75M)'],
      total_val_billion: 3.8,
    },
    main_imports: {
      en: ['Refined Petroleum ($380M)', 'Machinery ($240M)', 'Vehicles ($210M)', 'Medicaments ($140M)', 'Wheat ($110M)'],
      es: ['Petróleo refinado ($380M)', 'Maquinaria ($240M)', 'Vehículos ($210M)', 'Medicamentos ($140M)', 'Trigo ($110M)'],
      total_val_billion: 2.8,
    },
    natural_wealth: {
      en: ['Doba oil basin connected to Atlantic coast via the Chad-Cameroon pipeline', 'Tibesti Mountains mineral wealth (gold, wolfram, uranium)', 'Lake Chad freshwater fisheries and agricultural basin', 'Natron and salt deposits in Bodélé Depression'],
      es: ['Cuenca petrolífera de Doba conectada al Atlántico por el oleoducto Chad-Camerún', 'Riqueza aurífera y mineral de los montes Tibesti', 'Pesquerías y agricultura del lago Chad', 'Depósitos de natrón en la depresión de Bodélé'],
    },
    physical_geography_summary: {
      en: 'A massive landlocked basin ("Dead Heart of Africa"). Slopes down from the volcanic Tibesti Mountains in the north and Ennedi Plateau in the east into the shallow depression of Lake Chad in the southwest.',
      es: 'Inmensa cuenca sin salida al mar apodada el "Corazón Muerto de África". Desciende desde los montes volcánicos de Tibesti al norte hacia la depresión del lago Chad al suroeste.'
    },
    landforms: [
      {
        id: 'td-volcano-koussi',
        type: 'volcano',
        name_en: 'Emi Koussi',
        name_es: 'Emi Koussi',
        coords: [19.79, 18.55],
        elevation_m: 3415,
        description_en: 'Extinct pyroclastic shield volcano in the Tibesti Mountains, the highest mountain summit in the Sahara Desert.',
        description_es: 'Volcán en escudo extinto en los montes Tibesti, la montaña más alta del desierto del Sáhara (3,415m).'
      },
      {
        id: 'td-lake-chad',
        type: 'lake',
        name_en: 'Lake Chad',
        name_es: 'Lago Chad',
        coords: [13.0, 14.5],
        description_en: 'Shallow endorheic freshwater lake that shrank by over 90% in the late 20th century due to drought and irrigation diversions.',
        description_es: 'Lago endorreico somero que perdió el 90% de su lámina de agua por sequías y captaciones de riego.'
      }
    ],
    interesting_fact: {
      en: 'The Bodélé Depression in northern Chad produces more airborne mineral dust than any other spot on Earth; its nutrient-rich diatomite dust blows across the Atlantic to fertilize the Amazon rainforest.',
      es: 'La depresión de Bodélé en Chad es la mayor fuente de polvo mineral del planeta: sus tormentas de polvo cruzan el océano Atlántico y fertilizan con fósforo la selva amazónica.'
    },
    teks_alignment: ['TEKS 6.4A: Desiccation of Lake Chad and environmental displacement', 'TEKS 6.3C: Volcanic shield massifs in hyper-arid desert basins']
  },

  // =========================================================================
  // 32. NAMIBIA, MALAWI (MWI)
  // =========================================================================
  {
    id: 'MWI',
    iso2: 'mw',
    iso3: 'MWI',
    name_en: 'Malawi',
    name_es: 'Malaui',
    continent: 'Africa',
    continent_es: 'África',
    capital_en: 'Lilongwe',
    capital_es: 'Lilongüe',
    capital_coords: [-13.9833, 33.7833],
    center_coords: [-13.2543, 34.3015],
    zoom_level: 6,
    population: '20,400,000',
    area_sqkm: '118,484 km²',
    gdp_billion: 13,
    main_exports: {
      en: ['Raw Tobacco ($650M)', 'Dried Legumes & Peas ($95M)', 'Tea ($85M)', 'Raw Sugar ($75M)', 'Macadamia Nuts ($35M)'],
      es: ['Tabaco en rama ($650M)', 'Legumbres secas y guisantes ($95M)', 'Té negro ($85M)', 'Azúcar de caña ($75M)', 'Nueces de macadamia ($35M)'],
      total_val_billion: 1.1,
    },
    main_imports: {
      en: ['Refined Petroleum ($420M)', 'Fertilizers ($340M)', 'Packaged Medicaments ($180M)', 'Wheat ($110M)'],
      es: ['Petróleo refinado ($420M)', 'Fertilizantes agrícolas ($340M)', 'Medicamentos ($180M)', 'Trigo ($110M)'],
      total_val_billion: 3.1,
    },
    natural_wealth: {
      en: ['Lake Malawi (Lake Nyasa, harboring more species of fish than any other lake on Earth)', 'Kayelekera uranium deposit', 'Fertile Shire River Valley agricultural plains', 'Mulanje cedar and high tea estates'],
      es: ['Lago Malaui (alberga más especies de peces que cualquier otro lago del planeta)', 'Yacimiento de uranio de Kayelekera', 'Fértil valle del río Shire', 'Plantaciones de té y macadamia en Mulanje'],
    },
    physical_geography_summary: {
      en: 'A narrow landlocked country dominated by the deep trough of Lake Malawi, which occupies about one-fifth of its total area, framed by high plateaus (Nyika) and mountains (Mulanje Massif).',
      es: 'País alargado sin salida al mar dominado por la fosa tectónica del lago Malaui (que ocupa una quinta parte del país), enmarcado por las mesetas de Nyika y el macizo de Mulanje.'
    },
    landforms: [
      {
        id: 'mw-lake-malawi',
        type: 'lake',
        name_en: 'Lake Malawi (Lake Nyasa)',
        name_es: 'Lago Malaui (Lago Nyasa)',
        coords: [-12.2, 34.3],
        elevation_m: 472,
        description_en: 'UNESCO rift valley freshwater lake famous for evolutionary radiation of over 1,000 species of colorful cichlid fish.',
        description_es: 'Lago de fosa tectónica con más de 1,000 especies distintas de peces cíclidos de colores únicos.'
      },
      {
        id: 'mw-peak-mulanje',
        type: 'peak',
        name_en: 'Mount Mulanje (Sapitwa Peak)',
        name_es: 'Macizo de Mulanje (Pico Sapitwa)',
        coords: [-15.95, 35.59],
        elevation_m: 3002,
        description_en: 'High granite monadnock inselberg rising steeply out of surrounding tea plains, highest mountain in Malawi.',
        description_es: 'Macizo granítico imponente que se eleva sobre las plantaciones de té, pico más alto del país (3,002m).'
      }
    ],
    interesting_fact: {
      en: 'Lake Malawi is home to at least 1,000 species of cichlid fish—more than all the freshwater fish species in all of Europe combined—representing an evolutionary wonder comparable to Darwin’s finches.',
      es: 'El lago Malaui contiene más de 1,000 especies de peces cíclidos (más que todos los peces de agua dulce de Europa juntos), siendo un laboratorio vivo de evolución biológica.'
    },
    teks_alignment: ['TEKS 6.4A: Limnological biodiversity and endemic speciation in rift lakes', 'TEKS 6.3A: Transport bottlenecks in narrow landlocked corridor states']
  },

  // =========================================================================
  // 33. NAMIBIA, NAMIBIA, SOMALIA (SOM)
  // =========================================================================
  {
    id: 'SOM',
    iso2: 'so',
    iso3: 'SOM',
    name_en: 'Somalia',
    name_es: 'Somalia',
    continent: 'Africa',
    continent_es: 'África',
    capital_en: 'Mogadishu',
    capital_es: 'Mogadiscio',
    capital_coords: [2.0469, 45.3182],
    center_coords: [5.1521, 46.1996],
    zoom_level: 5,
    population: '18,100,000',
    area_sqkm: '637,657 km²',
    gdp_billion: 11,
    main_exports: {
      en: ['Live Goats & Sheep ($650M)', 'Gold ($180M)', 'Sesame Seeds ($85M)', 'Dried Fish ($45M)', 'Frankincense & Myrrh ($35M)'],
      es: ['Ganado ovino y caprino en pie ($650M)', 'Oro ($180M)', 'Semillas de sésamo ($85M)', 'Pescado seco ($45M)', 'Incienso y mirra ($35M)'],
      total_val_billion: 1.1,
    },
    main_imports: {
      en: ['Refined Petroleum ($780M)', 'Rice & Cereals ($520M)', 'Sugar ($380M)', 'Vehicles ($240M)', 'Palm Oil ($180M)'],
      es: ['Petróleo refinado ($780M)', 'Arroz y cereales ($520M)', 'Azúcar ($380M)', 'Vehículos ($240M)', 'Aceite de palma ($180M)'],
      total_val_billion: 4.8,
    },
    natural_wealth: {
      en: ['Longest coastline of any country in mainland Africa (3,333 km)', 'Strategic maritime command over the Gulf of Aden and Indian Ocean trade routes', 'Pastoralist camel herds (largest camel population on Earth)', 'Historic coastal frankincense and myrrh groves in Puntland'],
      es: ['La costa más larga de toda África continental (3,333 km)', 'Ubicación geoestratégica en el Cuerno de África frente al Golfo de Adén', 'Mayor cabaña de camellos del planeta', 'Bosques de incienso y mirra en Puntlandia'],
    },
    physical_geography_summary: {
      en: 'Occupies the tip of the Horn of Africa. Mostly arid and semi-arid scrub and desert plains, with the Karkaar Mountains running along the northern Gulf of Aden coast and the perennial Jubba and Shabelle rivers in the south.',
      es: 'Ocupa la punta del Cuerno de África. Territorio árido de llanuras y sabanas secas, con las montañas Karkaar al norte y los ríos perennes Juba y Shabelle al sur.'
    },
    landforms: [
      {
        id: 'so-cape-guardafui',
        type: 'cape',
        name_en: 'Cape Guardafui (Ras Asir)',
        name_es: 'Cabo Guardafui (Ras Asir)',
        coords: [11.82, 51.27],
        description_en: 'The geographical tip of the Horn of Africa, marking the convergence of the Gulf of Aden and the Indian Ocean.',
        description_es: 'El vértice oriental del Cuerno de África, donde se unen el Golfo de Adén y el Océano Índico.'
      }
    ],
    interesting_fact: {
      en: 'Somalia has the longest coastline of any nation on the mainland continent of Africa (3,333 km), and is home to more than half of the world’s dromedary camel population.',
      es: 'Somalia posee el litoral más largo de toda África continental (3,333 km) y alberga más de la mitad de todos los camellos dromedarios del mundo.'
    },
    teks_alignment: ['TEKS 6.8A: Strategic maritime security along Gulf of Aden shipping choke points', 'TEKS 6.4C: Nomadic pastoralist adaptation to arid coastal plains']
  },

  // =========================================================================
  // 34. NAMIBIA, NAMIBIA, CONGO REP (COG)
  // =========================================================================
  {
    id: 'COG',
    iso2: 'cg',
    iso3: 'COG',
    name_en: 'Republic of the Congo',
    name_es: 'República del Congo',
    continent: 'Africa',
    continent_es: 'África',
    capital_en: 'Brazzaville',
    capital_es: 'Brazzaville',
    capital_coords: [-4.2634, 15.2429],
    center_coords: [-0.2280, 15.8277],
    zoom_level: 6,
    population: '6,100,000',
    area_sqkm: '342,000 km²',
    gdp_billion: 15,
    main_exports: {
      en: ['Crude Petroleum ($5.2B)', 'Refined Copper ($1.1B)', 'Rough Wood & Timber ($280M)', 'Petroleum Gas ($180M)'],
      es: ['Petróleo crudo marino ($5.2B)', 'Cobre refinado ($1.1B)', 'Madera en rollo tropical ($280M)', 'Gas de petróleo ($180M)'],
      total_val_billion: 7.2,
    },
    main_imports: {
      en: ['Special Purpose Ships ($450M)', 'Refined Petroleum ($380M)', 'Poultry Meat ($240M)', 'Iron Pipes ($180M)'],
      es: ['Buques y plataformas marinas ($450M)', 'Petróleo refinado ($380M)', 'Carne de ave ($240M)', 'Tuberías de acero ($180M)'],
      total_val_billion: 3.4,
    },
    natural_wealth: {
      en: ['Congo Basin peatlands (Cuvette Centrale peat complex, world’s largest tropical peatland storing 30 billion tons of carbon)', 'Offshore Atlantic oil fields (Moho-Bilondo, Djeno terminal)', 'Tropical hardwood timber concessions', 'Deepwater Atlantic port of Pointe-Noire'],
      es: ['Turberas de la cuenca del Congo (complejo de la Cuvette Centrale, el mayor almacén de carbono tropical del mundo)', 'Campos de petróleo en el Atlántico', 'Maderas nobles tropicales', 'Puerto de aguas profundas de Pointe-Noire'],
    },
    physical_geography_summary: {
      en: 'Lies astride the Equator in Central Africa. Characterized by a narrow Atlantic coastal plain, the Mayombe mountain ridge, and the vast swampy rainforests of the Congo River Basin.',
      es: 'Situado sobre el ecuador en África Central. Presenta una llanura costera atlántica, la cordillera de Mayombe y densas selvas inundables de la cuenca del Congo.'
    },
    landforms: [
      {
        id: 'cg-peatlands-cuvette',
        type: 'plain',
        name_en: 'Congo Peatlands (Cuvette Centrale)',
        name_es: 'Turberas de la Cuvette Centrale',
        coords: [0.0, 17.5],
        description_en: 'World’s largest tropical peatland complex, storing equivalent to 3 years of all global fossil fuel emissions.',
        description_es: 'El complejo de turberas tropicales más grande del planeta, vital sumidero de carbono frente al cambio climático.'
      }
    ],
    interesting_fact: {
      en: 'Brazzaville (Republic of the Congo) and Kinshasa (DRC) are the two closest national capital cities in the world, separated only by the width of the Congo River.',
      es: 'Brazzaville y Kinsasa son las dos capitales nacionales más cercanas del planeta, situadas frente a frente a orillas opuestas del río Congo.'
    },
    teks_alignment: ['TEKS 6.4A: Tropical peatlands as global carbon sink regulators', 'TEKS 6.5A: Offshore hydrocarbon extraction on the Gulf of Guinea']
  },

  // =========================================================================
  // 35. NAMIBIA, NAMIBIA, SOUTH SUDAN (SSD)
  // =========================================================================
  {
    id: 'SSD',
    iso2: 'ss',
    iso3: 'SSD',
    name_en: 'South Sudan',
    name_es: 'Sudán del Sur',
    continent: 'Africa',
    continent_es: 'África',
    capital_en: 'Juba',
    capital_es: 'Yuba',
    capital_coords: [4.8594, 31.5713],
    center_coords: [6.8770, 31.3070],
    zoom_level: 6,
    population: '11,100,000',
    area_sqkm: '644,329 km²',
    gdp_billion: 7.2,
    main_exports: {
      en: ['Crude Petroleum ($3.8B)', 'Gold ($85M)', 'Rough Wood ($25M)', 'Sesame Seeds ($15M)'],
      es: ['Petróleo crudo Dar Blend ($3.8B)', 'Oro ($85M)', 'Madera en rollo ($25M)', 'Semillas de sésamo ($15M)'],
      total_val_billion: 4.1,
    },
    main_imports: {
      en: ['Refined Petroleum ($420M)', 'Cars & Delivery Trucks ($280M)', 'Foodstuffs & Cereals ($240M)', 'Medicaments ($140M)'],
      es: ['Petróleo refinado ($420M)', 'Vehículos y camiones ($280M)', 'Alimentos básicos ($240M)', 'Medicamentos ($140M)'],
      total_val_billion: 1.8,
    },
    natural_wealth: {
      en: ['The Sudd wetland (one of the largest tropical freshwater wetlands in the world)', 'Oil basins of Melut and Muglad', 'White Nile River navigation corridor', 'Vast cattle pastoralist grasslands and savanna ecosystems'],
      es: ['El humedal del Sudd (uno de los mayores humedales de agua dulce del planeta)', 'Yacimientos petrolíferos de Melut y Muglad', 'Corredor fluvial del Nilo Blanco', 'Inmensas praderas de pastoreo de ganado vacuno'],
    },
    physical_geography_summary: {
      en: 'The world’s youngest sovereign state (independent 2011). Centered on the vast, swampy floodplain of the Sudd formed by the White Nile (Bahr al Jabal), ringed by highlands in the south.',
      es: 'El país soberano más joven del mundo (independiente desde 2011). Centrado en la inmensa llanura inundable del Sudd formada por el Nilo Blanco.'
    },
    landforms: [
      {
        id: 'ss-wetland-sudd',
        type: 'lake',
        name_en: 'The Sudd Swamp',
        name_es: 'Humedal del Sudd',
        coords: [8.0, 31.0],
        description_en: 'Colossal freshwater swamp where the White Nile spreads into floating papyrus mats, evaporating over half its water volume.',
        description_es: 'Gigantesco pantano de papiros flotantes donde el Nilo Blanco pierde más de la mitad de su caudal por evaporación.'
      }
    ],
    interesting_fact: {
      en: 'The Sudd swamp in South Sudan expands to over 30,000 square kilometers during the rainy season, so vast that it completely halted European expeditions searching for the source of the Nile for centuries.',
      es: 'El humedal del Sudd se expande hasta más de 30,000 km² en la estación de lluvias, siendo una barrera infranqueable que frenó durante siglos a los exploradores del Nilo.'
    },
    teks_alignment: ['TEKS 6.4A: Wetland evaporation and water loss in transboundary river basins', 'TEKS 6.3A: Landlocked post-independence petro-states']
  },

  // =========================================================================
  // 36. NAMIBIA, NAMIBIA, BENIN (BEN)
  // =========================================================================
  {
    id: 'BEN',
    iso2: 'bj',
    iso3: 'BEN',
    name_en: 'Benin',
    name_es: 'Benín',
    continent: 'Africa',
    continent_es: 'África',
    capital_en: 'Porto-Novo',
    capital_es: 'Porto Novo',
    capital_coords: [6.4969, 2.6289],
    center_coords: [9.3077, 2.3158],
    zoom_level: 6,
    population: '13,700,000',
    area_sqkm: '114,763 km²',
    gdp_billion: 19,
    main_exports: {
      en: ['Raw Cotton ($1.2B)', 'Gold ($420M)', 'Cashew Nuts ($180M)', 'Soya Beans ($140M)', 'Petroleum Products ($110M)'],
      es: ['Algodón en rama ($1.2B)', 'Oro ($420M)', 'Nueces de la India ($180M)', 'Soya ($140M)', 'Derivados de petróleo ($110M)'],
      total_val_billion: 2.4,
    },
    main_imports: {
      en: ['Rice ($950M)', 'Refined Petroleum ($780M)', 'Cars ($380M)', 'Palm Oil ($180M)'],
      es: ['Arroz para reexportación ($950M)', 'Petróleo refinado ($780M)', 'Automóviles ($380M)', 'Aceite de palma ($180M)'],
      total_val_billion: 4.8,
    },
    natural_wealth: {
      en: ['Top cotton producer in Africa', 'Port of Cotonou strategic transit hub for landlocked Niger and Mali', 'Pendjari National Park wildlife reserve', 'Historic stilt city of Ganvié in Lake Nokoué'],
      es: ['Líder en producción de algodón en África', 'Puerto de Cotonú (salida comercial para Níger y Malí)', 'Parque Nacional de Pendjari', 'Ciudad lacustre de palafitos de Ganvié en el lago Nokoué'],
    },
    physical_geography_summary: {
      en: 'A narrow, north-south oriented strip of land in West Africa stretching from the sandy Bight of Benin coast through rolling hills and plateaus to the Niger River valley in the north.',
      es: 'Estrecha franja en África Occidental que va desde la costa del Golfo de Benín hasta el río Níger en el norte.'
    },
    landforms: [
      {
        id: 'bj-lake-nokoue',
        type: 'lake',
        name_en: 'Lake Nokoué (Ganvié)',
        name_es: 'Lago Nokoué (Ganvié)',
        coords: [6.45, 2.42],
        description_en: 'Coastal lagoon sheltering Ganvié, the largest lake stilt village in Africa with over 20,000 inhabitants.',
        description_es: 'Laguna costera que alberga Ganvié, la mayor ciudad sobre pilotes y palafitos de África.'
      }
    ],
    interesting_fact: {
      en: 'Ganvié, situated in Lake Nokoué, is known as the "Venice of Africa"—an entire town of 20,000 people built entirely on wooden stilts, founded in the 17th century by people escaping slave raiders.',
      es: 'Ganvié es apodada la "Venecia de África": una ciudad lacustre entera construida sobre pilotes de madera en el lago Nokoué para protegerse de los cazadores de esclavos en el siglo XVII.'
    },
    teks_alignment: ['TEKS 6.3B: Human settlement adaptation to aquatic environments (stilt villages)', 'TEKS 6.6B: Cotton monoculture in West African agricultural trade']
  },

  // =========================================================================
  // 37. NAMIBIA, NAMIBIA, SIERRA LEONE (SLE)
  // =========================================================================
  {
    id: 'SLE',
    iso2: 'sl',
    iso3: 'SLE',
    name_en: 'Sierra Leone',
    name_es: 'Sierra Leona',
    continent: 'Africa',
    continent_es: 'África',
    capital_en: 'Freetown',
    capital_es: 'Freetown',
    capital_coords: [8.4840, -13.2299],
    center_coords: [8.4606, -11.7799],
    zoom_level: 7,
    population: '8,800,000',
    area_sqkm: '71,740 km²',
    gdp_billion: 4.2,
    main_exports: {
      en: ['Iron Ore ($580M)', 'Diamonds ($240M)', 'Titanium Ores / Rutile ($180M)', 'Cocoa Beans ($45M)'],
      es: ['Mineral de hierro ($580M)', 'Diamantes aluviales ($240M)', 'Rutilo y titanio ($180M)', 'Granos de cacao ($45M)'],
      total_val_billion: 1.2,
    },
    main_imports: {
      en: ['Refined Petroleum ($380M)', 'Rice ($280M)', 'Cars ($85M)', 'Medicaments ($65M)'],
      es: ['Petróleo refinado ($380M)', 'Arroz ($280M)', 'Vehículos ($85M)', 'Medicamentos ($65M)'],
      total_val_billion: 1.8,
    },
    natural_wealth: {
      en: ['World-class rutile (titanium) and bauxite deposits', 'Alluvial diamond fields of Kono District', 'Marampa and Tonkolili high-grade iron ore deposits', 'Queen Elizabeth II Quay natural deepwater harbor in Freetown (third largest natural harbor in the world)'],
      es: ['Yacimientos mundiales de rutilo (titanio) y bauxita', 'Campos de diamantes aluviales de Kono', 'Minas de hierro de Tonkolili y Marampa', 'Puerto natural de Freetown (tercer puerto natural más grande del mundo)'],
    },
    physical_geography_summary: {
      en: 'Rises from mangrove coastal swamps and the mountainous Freetown peninsula eastward through low-lying plains to the rugged interior Loma Mountains.',
      es: 'Asciende desde las costas con manglares y la península montañosa de Freetown hacia mesetas interiores y las montañas Loma.'
    },
    landforms: [
      {
        id: 'sl-peak-bintumani',
        type: 'peak',
        name_en: 'Mount Bintumani (Loma Mansa)',
        name_es: 'Monte Bintumani',
        coords: [9.228, -11.116],
        elevation_m: 1945,
        description_en: 'Highest peak in Sierra Leone and all of West Africa west of Mount Cameroon, in the Loma Mountains.',
        description_es: 'Punto más alto de Sierra Leona y de África Occidental al oeste de Camerún (1,945m).'
      }
    ],
    interesting_fact: {
      en: 'Freetown’s harbor is the third-largest natural harbor in the world and the largest on the continent of Africa, sheltered by the green coastal mountains that gave the country its name (Serra Leoa: "Lion Mountain").',
      es: 'El puerto natural de Freetown es el tercero más grande del mundo y el mayor de África, resguardado por las montañas costeras que dieron nombre al país (Sierra Leona).'
    },
    teks_alignment: ['TEKS 6.6B: Extractive diamond and rutile economies', 'TEKS 6.8A: Natural harbors facilitating global naval resupply']
  },

  // =========================================================================
  // 38. NAMIBIA, NAMIBIA, TOGO (TGO)
  // =========================================================================
  {
    id: 'TGO',
    iso2: 'tg',
    iso3: 'TGO',
    name_en: 'Togo',
    name_es: 'Togo',
    continent: 'Africa',
    continent_es: 'África',
    capital_en: 'Lomé',
    capital_es: 'Lomé',
    capital_coords: [6.1375, 1.2125],
    center_coords: [8.6195, 0.8248],
    zoom_level: 7,
    population: '9,000,000',
    area_sqkm: '56,785 km²',
    gdp_billion: 9.1,
    main_exports: {
      en: ['Refined Petroleum re-exports ($480M)', 'Calcium Phosphates ($340M)', 'Cement ($180M)', 'Cotton ($110M)', 'Soybeans ($95M)'],
      es: ['Petróleo refinado reexportado ($480M)', 'Fosfatos de calcio ($340M)', 'Cemento ($180M)', 'Algodón ($110M)', 'Soya ($95M)'],
      total_val_billion: 1.5,
    },
    main_imports: {
      en: ['Refined Petroleum ($1.1B)', 'Broadcasting Equipment ($180M)', 'Rice ($160M)', 'Cars ($140M)'],
      es: ['Petróleo refinado ($1.1B)', 'Equipos celulares ($180M)', 'Arroz ($160M)', 'Vehículos ($140M)'],
      total_val_billion: 3.1,
    },
    natural_wealth: {
      en: ['Hahotoé-Kpogamé phosphate deposits', 'Deepwater Port of Lomé (busiest container port in West Africa and only deepwater port in the region)', 'Fertile plateaus for coffee and cocoa farming', 'Limestone quarries for regional cement manufacture'],
      es: ['Yacimientos de fosfatos de Hahotoé', 'Puerto de Lomé (el mayor puerto de contenedores de África Occidental por calado profundo)', 'Café y cacao en las colinas', 'Canteras de piedra caliza para cemento'],
    },
    physical_geography_summary: {
      en: 'A narrow north-south strip averaging only 50-100 km in width, bisected diagonally by the forested Togo Mountains from southwest to northeast.',
      es: 'País muy estrecho (50 a 100 km de ancho) dividido diagonalmente por las montañas de Togo de suroeste a noreste.'
    },
    landforms: [
      {
        id: 'tg-peak-agou',
        type: 'peak',
        name_en: 'Mont Agou',
        name_es: 'Monte Agou',
        coords: [6.87, 0.75],
        elevation_m: 986,
        description_en: 'Highest mountain peak in Togo, cloaked in dense tropical rainforest near the Ghanaian border.',
        description_es: 'Punto más alto de Togo (986m), cubierto de bosques tropicales cerca de la frontera con Ghana.'
      }
    ],
    interesting_fact: {
      en: 'The Port of Lomé in Togo has surpassed Lagos to become the busiest container shipping port in all of West Africa, thanks to its natural deepwater channel allowing mega-vessels to dock without dredging.',
      es: 'El puerto de Lomé se convirtió en el puerto de contenedores con mayor tráfico de África Occidental gracias a su gran calado natural que permite atracar a megabuques.'
    },
    teks_alignment: ['TEKS 6.8A: Deepwater container transshipment hub geography', 'TEKS 6.6B: Phosphate extraction in coastal sedimentary basins']
  },

  // =========================================================================
  // 39. NAMIBIA, NAMIBIA, LIBERIA (LBR)
  // =========================================================================
  {
    id: 'LBR',
    iso2: 'lr',
    iso3: 'LBR',
    name_en: 'Liberia',
    name_es: 'Liberia',
    continent: 'Africa',
    continent_es: 'África',
    capital_en: 'Monrovia',
    capital_es: 'Monrovia',
    capital_coords: [6.3156, -10.8074],
    center_coords: [6.4281, -9.4295],
    zoom_level: 7,
    population: '5,400,000',
    area_sqkm: '111,369 km²',
    gdp_billion: 4.3,
    main_exports: {
      en: ['Passenger & Cargo Ships Registration ($6.2B)', 'Iron Ore ($480M)', 'Gold ($380M)', 'Natural Rubber ($140M)'],
      es: ['Registro marítimo de buques y bandera de conveniencia ($6.2B)', 'Mineral de hierro ($480M)', 'Oro ($380M)', 'Caucho natural ($140M)'],
      total_val_billion: 7.4,
    },
    main_imports: {
      en: ['Ships and Boats ($5.8B)', 'Refined Petroleum ($280M)', 'Rice ($180M)', 'Iron Structures ($95M)'],
      es: ['Buques y embarcaciones ($5.8B)', 'Petróleo refinado ($280M)', 'Arroz ($180M)', 'Estructuras de acero ($95M)'],
      total_val_billion: 6.8,
    },
    natural_wealth: {
      en: ['Upper Guinean Rainforest (contains over 40% of the remaining Upper Guinean tropical rainforest block)', 'World’s second largest ship registry / flag of convenience fleet', 'Firestone rubber plantation (largest contiguous rubber plantation in the world)', 'Major high-grade iron ore reserves in Nimba and Yekepa'],
      es: ['Selva de Alta Guinea (>40% de las selvas primarias restantes de la región)', 'Segundo mayor registro marítimo de buques del planeta', 'Plantación Firestone (la mayor plantación contigua de caucho del mundo)', 'Mineral de hierro en los montes Nimba'],
    },
    physical_geography_summary: {
      en: 'Features a mangrove-lined Atlantic coast rising through rolling coastal plains covered with dense equatorial rainforest up to the inland mountain plateau on the Guinean border.',
      es: 'Costa atlántica con lagunas y manglares que asciende hacia mesetas cubiertas de densa selva tropical en la frontera con Guinea.'
    },
    landforms: [
      {
        id: 'lr-peak-wuteve',
        type: 'peak',
        name_en: 'Mount Wuteve',
        name_es: 'Monte Wuteve',
        coords: [8.15, -9.92],
        elevation_m: 1440,
        description_en: 'Highest mountain peak in Liberia, located in the forested Guinea Highlands.',
        description_es: 'Punto más alto de Liberia (1,440m), en las montañas de Guinea.'
      }
    ],
    interesting_fact: {
      en: 'Liberia administers the second-largest maritime ship registry in the world: more than 5,000 international ocean vessels fly the Liberian flag of convenience, representing over 14% of the world’s maritime fleet.',
      es: 'Liberia administra el segundo mayor registro marítimo de buques del mundo: más de 5,000 buques transoceánicos navegan bajo bandera liberiana (más del 14% de la flota mercante mundial).'
    },
    teks_alignment: ['TEKS 6.7A: Global maritime flags of convenience and open ship registries', 'TEKS 6.4A: Rainforest preservation in the Upper Guinean biodiversity hotspot']
  },

  // =========================================================================
  // 40. NAMIBIA, NAMIBIA, CENTRAL AFRICAN REP (CAF)
  // =========================================================================
  {
    id: 'CAF',
    iso2: 'cf',
    iso3: 'CAF',
    name_en: 'Central African Republic',
    name_es: 'República Centroafricana',
    continent: 'Africa',
    continent_es: 'África',
    capital_en: 'Bangui',
    capital_es: 'Bangui',
    capital_coords: [4.3947, 18.5582],
    center_coords: [6.6111, 20.9394],
    zoom_level: 6,
    population: '5,600,000',
    area_sqkm: '622,984 km²',
    gdp_billion: 2.7,
    main_exports: {
      en: ['Rough Wood & Timber ($140M)', 'Gold ($75M)', 'Rough Diamonds ($45M)', 'Cotton ($15M)'],
      es: ['Madera tropical en rollo ($140M)', 'Oro ($75M)', 'Diamantes en bruto ($45M)', 'Algodón ($15M)'],
      total_val_billion: 0.32,
    },
    main_imports: {
      en: ['Refined Petroleum ($120M)', 'Packaged Medicaments ($65M)', 'Cereals & Flour ($45M)', 'Vehicles ($35M)'],
      es: ['Petróleo refinado ($120M)', 'Medicamentos ($65M)', 'Cereales y harina ($45M)', 'Vehículos ($35M)'],
      total_val_billion: 0.58,
    },
    natural_wealth: {
      en: ['Rich alluvial diamond and gold deposits along river gravels', 'Dense tropical hardwood forests in the south (Congo Basin)', 'Ubangi River navigation corridor to the Congo River', 'Bakouma uranium deposit'],
      es: ['Diamantes y oro en gravas aluviales de los ríos', 'Bosques tropicales de maderas nobles en el sur', 'Río Ubangui (arteria navegable hacia el río Congo)', 'Yacimiento de uranio de Bakouma'],
    },
    physical_geography_summary: {
      en: 'A landlocked plateau nation situated in the geographic center of Africa, acting as the watershed divide between the Congo River drainage basin to the south and the Lake Chad basin to the north.',
      es: 'Meseta sin salida al mar en el centro geográfico de África, que divide las aguas entre la cuenca del río Congo al sur y la del lago Chad al norte.'
    },
    landforms: [
      {
        id: 'cf-river-ubangi',
        type: 'river',
        name_en: 'Ubangi River (Oubangui)',
        name_es: 'Río Ubangui',
        coords: [4.35, 18.57],
        length_km: 2270,
        description_en: 'Largest right-bank tributary of the Congo River, forming the border with the DRC and the primary river lifeline for Bangui.',
        description_es: 'Mayor afluente del río Congo por la margen derecha, frontera natural con la R.D. del Congo.'
      }
    ],
    interesting_fact: {
      en: 'The Bangui Magnetic Anomaly in the Central African Republic is one of the largest and most intense crustal magnetic anomalies on Earth, believed to be caused by a massive prehistoric meteorite impact.',
      es: 'La Anomalía Magnética de Bangui en la República Centroafricana es una de las anomalías magnéticas terrestres más intensas del planeta, originada por un colosal impacto de meteorito prehistórico.'
    },
    teks_alignment: ['TEKS 6.3A: Geographic isolation in landlocked central continental hubs', 'TEKS 6.6B: Alluvial gemstone extraction in river gravels']
  },

  // =========================================================================
  // 41. NAMIBIA, NAMIBIA, MAURITANIA (MRT)
  // =========================================================================
  {
    id: 'MRT',
    iso2: 'mr',
    iso3: 'MRT',
    name_en: 'Mauritania',
    name_es: 'Mauritania',
    continent: 'Africa',
    continent_es: 'África',
    capital_en: 'Nouakchott',
    capital_es: 'Nuakchot',
    capital_coords: [18.0735, -15.9582],
    center_coords: [21.0079, -10.9408],
    zoom_level: 5,
    population: '4,900,000',
    area_sqkm: '1,030,700 km²',
    gdp_billion: 11,
    main_exports: {
      en: ['Iron Ore ($1.8B)', 'Gold ($850M)', 'Frozen Fish ($620M)', 'Copper Ores ($180M)'],
      es: ['Mineral de hierro de Zouérat ($1.8B)', 'Oro ($850M)', 'Pescado congelado ($620M)', 'Minerales de cobre ($180M)'],
      total_val_billion: 3.8,
    },
    main_imports: {
      en: ['Refined Petroleum ($950M)', 'Wheat ($280M)', 'Sugar ($180M)', 'Mining Vehicles ($140M)'],
      es: ['Petróleo refinado ($950M)', 'Trigo ($280M)', 'Azúcar ($180M)', 'Vehículos mineros ($140M)'],
      total_val_billion: 4.2,
    },
    natural_wealth: {
      en: ['Kedia d’Idjil high-grade iron ore deposits in Zouérat', 'World’s longest cargo train (704-km iron ore train to Nouadhibou port)', 'Banc d’Arguin National Park (world-class marine biodiversity and bird sanctuary)', 'Offshore Greater Tortue Ahmeyim (GTA) natural gas field'],
      es: ['Depósitos de hierro de alta pureza en Zouérat', 'El tren de carga más largo del mundo (704 km hasta el puerto de Nuadibú)', 'Parque Nacional de Banc d’Arguin (santuario de aves marinas de la UNESCO)', 'Megayacimiento de gas natural marino GTA'],
    },
    physical_geography_summary: {
      en: 'Over 90% arid desert, spanning vast sand dunes and rocky plateaus (Adrar) of the western Sahara, descending to the Atlantic coastline and the green Senegal River valley in the extreme south.',
      es: 'Más del 90% es desierto árido del Sáhara occidental, con dunas y mesetas rocosas (Adrar), descendiendo hacia el Atlántico y el valle del río Senegal al sur.'
    },
    landforms: [
      {
        id: 'mr-crater-richat',
        type: 'mountain',
        name_en: 'Richat Structure (Eye of the Sahara)',
        name_es: 'Estructura de Richat (El Ojo del Sáhara)',
        coords: [21.12, -11.4],
        elevation_m: 485,
        description_en: 'Prominent circular geological dome feature 40 km in diameter in the Sahara, clearly visible from outer space.',
        description_es: 'Estructura geológica circular concéntrica de 40 km de diámetro visible desde el espacio en el desierto.'
      }
    ],
    interesting_fact: {
      en: 'Mauritania operates the "Iron Ore Train", one of the longest and heaviest trains in the world, stretching up to 3 kilometers (nearly 2 miles) in length with over 200 hopper cars carrying iron ore across the Sahara.',
      es: 'Mauritania opera el "Tren del Hierro", uno de los trenes más largos y pesados del mundo: mide hasta 3 kilómetros de largo con más de 200 vagones que transportan mineral de hierro cruzando el desierto.'
    },
    teks_alignment: ['TEKS 6.6B: Heavy-haul railway infrastructure connecting interior mines to ocean ports', 'TEKS 6.4A: Marine upwelling fisheries in coastal desert zones']
  },

  // =========================================================================
  // 42. NAMIBIA, NAMIBIA, ERITREA (ERI)
  // =========================================================================
  {
    id: 'ERI',
    iso2: 'er',
    iso3: 'ERI',
    name_en: 'Eritrea',
    name_es: 'Eritrea',
    continent: 'Africa',
    continent_es: 'África',
    capital_en: 'Asmara',
    capital_es: 'Asmara',
    capital_coords: [15.3229, 38.9251],
    center_coords: [15.1794, 39.7823],
    zoom_level: 6,
    population: '3,700,000',
    area_sqkm: '117,600 km²',
    gdp_billion: 2.5,
    main_exports: {
      en: ['Zinc Ores ($340M)', 'Copper Ores ($180M)', 'Gold ($95M)', 'Livestock'],
      es: ['Minerales de zinc ($340M)', 'Minerales de cobre ($180M)', 'Oro ($95M)', 'Ganado'],
      total_val_billion: 0.65,
    },
    main_imports: {
      en: ['Refined Petroleum ($180M)', 'Wheat & Flour ($120M)', 'Machinery ($85M)', 'Vehicles ($65M)'],
      es: ['Petróleo refinado ($180M)', 'Trigo y harina ($120M)', 'Maquinaria ($85M)', 'Vehículos ($65M)'],
      total_val_billion: 0.78,
    },
    natural_wealth: {
      en: ['Bisha volcanogenic massive sulfide gold-copper-zinc mine', 'Strategic command of southern Red Sea shipping approaches (ports of Massawa and Assab)', 'Dahlak Archipelago pristine marine coral reefs', 'Colluli potash deposit in Danakil Depression'],
      es: ['Mina de oro, cobre y zinc de Bisha', 'Control costero sobre el Mar Rojo frente al estrecho de Bab-el-Mandeb', 'Arrecifes de coral del archipiélago de Dahlak', 'Depósitos de potasa de Colluli en Danakil'],
    },
    physical_geography_summary: {
      en: 'Fronts the southern Red Sea. Rises steeply from the hyper-arid coastal desert strip up the Great Rift escarpment to temperate central highlands at 2,300m elevation.',
      es: 'Situado en la costa del Mar Rojo. Asciende bruscamente desde la llanura desértica costera hasta las templadas tierras altas centrales a 2,300 metros de altitud.'
    },
    landforms: [
      {
        id: 'er-archipelago-dahlak',
        type: 'archipelago',
        name_en: 'Dahlak Archipelago',
        name_es: 'Archipiélago de Dahlak',
        coords: [15.8, 40.2],
        description_en: 'Group of over 120 coral islands and shoals in the southern Red Sea, renowned for historic pearl diving and marine ecology.',
        description_es: 'Cadena de más de 120 islas de coral en el Mar Rojo, célebre históricamente por la pesca de perlas.'
      }
    ],
    interesting_fact: {
      en: 'Asmara, the capital of Eritrea located at 2,325 meters elevation, is a UNESCO World Heritage site celebrated as one of the world’s best-preserved open-air museums of 1930s Italian modernist and Art Deco architecture.',
      es: 'Asmara, la capital a más de 2,300 metros de altitud, es Patrimonio de la Humanidad por albergar la mayor concentración mundial de arquitectura Art Déco y futurista italiana de la década de 1930.'
    },
    teks_alignment: ['TEKS 6.8A: Coastal maritime surveillance along the Red Sea tanker corridors', 'TEKS 6.4C: Extreme vertical climatic change from Red Sea coast to Asmara highlands']
  },

  // =========================================================================
  // 43. NAMIBIA, NAMIBIA, NAMIBIA, SWAZILAND / ESWATINI (SWZ)
  // =========================================================================
  {
    id: 'SWZ',
    iso2: 'sz',
    iso3: 'SWZ',
    name_en: 'Eswatini (Swaziland)',
    name_es: 'Esuatini (Suazilandia)',
    continent: 'Africa',
    continent_es: 'África',
    capital_en: 'Mbabane (Exec), Lobamba (Royal)',
    capital_es: 'Mbabane (Ejec), Lobamba (Real)',
    capital_coords: [-26.3055, 31.1367],
    center_coords: [-26.5225, 31.4659],
    zoom_level: 8,
    population: '1,200,000',
    area_sqkm: '17,364 km²',
    gdp_billion: 4.8,
    main_exports: {
      en: ['Soft Drink Flavoring Concentrates ($850M)', 'Raw Sugar ($380M)', 'Chemical Woodpulp ($140M)', 'Textiles & Apparel ($110M)'],
      es: ['Concentrados para bebidas gaseosas ($850M)', 'Azúcar de caña ($380M)', 'Pulpa de madera ($140M)', 'Confección textil ($110M)'],
      total_val_billion: 1.8,
    },
    main_imports: {
      en: ['Refined Petroleum ($340M)', 'Electricity ($180M)', 'Cars & Delivery Trucks ($140M)', 'Medicaments ($75M)'],
      es: ['Petróleo refinado ($340M)', 'Electricidad ($180M)', 'Vehículos ($140M)', 'Medicamentos ($75M)'],
      total_val_billion: 1.9,
    },
    natural_wealth: {
      en: ['Extensive sugarcane plantations in the irrigated Lowveld', 'Usutu pine and eucalyptus commercial timber forests (one of the largest man-made forests in Africa)', 'Ngwenya iron ore mine (oldest known iron mine on Earth)', 'Rich cultural monarchy tradition'],
      es: ['Plantaciones de caña de azúcar con riego en el Lowveld', 'Bosques madereros de Usutu (una de las mayores masas forestales plantadas de África)', 'Mina de Ngwenya (la mina de hierro más antigua conocida del mundo)', 'Riqueza en biodiversidad'],
    },
    physical_geography_summary: {
      en: 'A small landlocked kingdom nestled between South Africa and Mozambique, descending through four distinct stepped elevation zones: Highveld, Middleveld, Lowveld, and the Lubombo plateau.',
      es: 'Pequeño reino sin salida al mar encajado entre Sudáfrica y Mozambique, dividido en cuatro escalones topográficos: Highveld, Middleveld, Lowveld y las colinas de Lubombo.'
    },
    landforms: [
      {
        id: 'sz-rock-sibebe',
        type: 'peak',
        name_en: 'Sibebe Rock',
        name_es: 'Roca Sibebe',
        coords: [-26.26, 31.16],
        elevation_m: 1488,
        description_en: 'Massive exposed granite pluton dome, the second-largest monolithic rock on Earth after Uluru.',
        description_es: 'Domo de granito colosal, el segundo monolito rocoso expuesto más grande de la Tierra tras Uluru.'
      }
    ],
    interesting_fact: {
      en: 'The Ngwenya Mine in Eswatini contains hematite iron ore excavations dating back over 43,000 years to the Stone Age, making it the oldest known mining site on the planet.',
      es: 'La mina de Ngwenya en Esuatini alberga excavaciones mineras de hierro de hace más de 43,000 años, siendo la explotación minera más antigua conocida en el planeta.'
    },
    teks_alignment: ['TEKS 6.3B: Stepped topographical zones and altitude-controlled agriculture', 'TEKS 6.6B: History of human mineral extraction from Paleolithic to modern times']
  },

  // =========================================================================
  // 44. NAMIBIA, NAMIBIA, LESOTHO (LSO)
  // =========================================================================
  {
    id: 'LSO',
    iso2: 'ls',
    iso3: 'LSO',
    name_en: 'Lesotho',
    name_es: 'Lesoto',
    continent: 'Africa',
    continent_es: 'África',
    capital_en: 'Maseru',
    capital_es: 'Maseru',
    capital_coords: [-29.3151, 27.4869],
    center_coords: [-29.6099, 28.2336],
    zoom_level: 8,
    population: '2,300,000',
    area_sqkm: '30,355 km²',
    gdp_billion: 2.6,
    main_exports: {
      en: ['Rough Diamonds ($280M)', 'Knit Garments & Clothing ($240M)', 'Water Exports to South Africa ($85M)', 'Electricity ($25M)'],
      es: ['Diamantes en bruto de alta pureza ($280M)', 'Prendas de vestir confeccionadas ($240M)', 'Exportación de agua dulce a Sudáfrica ($85M)', 'Electricidad hidroeléctrica ($25M)'],
      total_val_billion: 0.95,
    },
    main_imports: {
      en: ['Refined Petroleum ($210M)', 'Foodstuffs & Maize ($180M)', 'Electricity ($65M)', 'Vehicles ($55M)'],
      es: ['Petróleo refinado ($210M)', 'Alimentos básicos y maíz ($180M)', 'Electricidad ($65M)', 'Vehículos ($55M)'],
      total_val_billion: 1.8,
    },
    natural_wealth: {
      en: ['Lesotho Highlands Water Project (LHWP - exporting billions of cubic meters of pure alpine water to Johannesburg)', 'Letseng diamond mine (famous for producing the highest percentage of large top-color white diamonds on Earth)', 'Highland mountain pastures for mohair and wool production'],
      es: ['Proyecto de Agua de las Tierras Altas de Lesoto (exporta miles de millones de m³ de agua a Johannesburgo)', 'Mina de diamantes de Letseng (célebre por extraer los diamantes blancos gigantes más puros del mundo)', 'Producción de lana y mohair'],
    },
    physical_geography_summary: {
      en: 'The "Kingdom in the Sky": an enclaved alpine kingdom completely surrounded by South Africa. The only sovereign state on Earth lying entirely above 1,000 meters elevation (lowest point is 1,400m).',
      es: 'El "Reino en el Cielo": país enclave completamente rodeado por Sudáfrica. Es el único estado del mundo cuyo territorio entero se encuentra por encima de los 1,000 metros de altitud (su punto más bajo está a 1,400m).'
    },
    landforms: [
      {
        id: 'ls-peak-ntlenyana',
        type: 'peak',
        name_en: 'Thabana Ntlenyana',
        name_es: 'Thabana Ntlenyana',
        coords: [-29.467, 29.267],
        elevation_m: 3482,
        description_en: 'Highest mountain in Lesotho and the highest point in all of Southern Africa, in the Drakensberg range.',
        description_es: 'Punto más alto de Lesoto y de toda África Austral (3,482m), en las montañas Drakensberg.'
      },
      {
        id: 'ls-dam-katse',
        type: 'lake',
        name_en: 'Katse Dam (Highlands Water Project)',
        name_es: 'Presa de Katse',
        coords: [-29.33, 28.5],
        elevation_m: 1993,
        description_en: 'Engineering marvel concrete arch dam capturing pure mountain meltwater for export to industrial South Africa.',
        description_es: 'Presa de arco de hormigón a casi 2,000m de altitud que almacena agua para exportarla a Sudáfrica.'
      }
    ],
    interesting_fact: {
      en: 'Lesotho is the only independent country on Earth whose entire national territory sits above 1,000 meters (3,281 feet) in elevation, earning it the official title "The Kingdom in the Sky".',
      es: 'Lesoto es el único país soberano de la Tierra cuya altitud mínima supera los 1,000 metros sobre el nivel del mar, por lo que es llamado "El Reino en el Cielo".'
    },
    teks_alignment: ['TEKS 6.3A: Enclave nations completely surrounded by a single foreign power', 'TEKS 6.4B: Pure water export commodities via highland dam networks']
  },

  // =========================================================================
  // 45. DJIBOUTI (DJI)
  // =========================================================================
  {
    id: 'DJI',
    iso2: 'dj',
    iso3: 'DJI',
    name_en: 'Djibouti',
    name_es: 'Yibuti',
    continent: 'Africa',
    continent_es: 'África',
    capital_en: 'Djibouti City',
    capital_es: 'Ciudad de Yibuti',
    capital_coords: [11.8251, 42.5903],
    center_coords: [11.8251, 42.5903],
    zoom_level: 8,
    population: '1,120,000',
    area_sqkm: '23,200 km²',
    gdp_billion: 4.1,
    main_exports: {
      en: ['Port Transshipment Services ($2.1B)', 'Live Camels & Cattle ($95M)', 'Scrap Metal ($45M)'],
      es: ['Servicios de transbordo portuario y logística ($2.1B)', 'Ganado en pie ($95M)', 'Chatarra ($45M)'],
      total_val_billion: 0.28,
    },
    main_imports: {
      en: ['Re-exported Consumer Goods ($1.4B)', 'Refined Petroleum ($420M)', 'Foodstuffs & Palm Oil ($280M)', 'Vehicles ($180M)'],
      es: ['Mercancías de tránsito ($1.4B)', 'Petróleo refinado ($420M)', 'Alimentos y aceite de palma ($280M)', 'Vehículos ($180M)'],
      total_val_billion: 2.8,
    },
    natural_wealth: {
      en: ['Strategic choke point overlooking Bab-el-Mandeb Strait (gateway to Suez Canal)', 'Deepwater container port of Doraleh (sole maritime lifeline for landlocked Ethiopia)', 'Lake Assal salt mineral deposits (lowest point in Africa)', 'Geothermal tectonic energy potential in Afar Triangle'],
      es: ['Control del estrecho de Bab-el-Mandeb (puerta del Canal de Suez)', 'Puerto de Doraleh (arteria vital del 95% del comercio exterior de Etiopía)', 'Depósitos de sal del Lago Assal (punto más bajo de África)', 'Potencial geotérmico en el triángulo de Afar'],
    },
    physical_geography_summary: {
      en: 'A small, hyper-arid nation situated on the Bab-el-Mandeb Strait in the Afar Depression, where three tectonic plates are pulling apart, creating volcanic fissures, salt lakes, and basalt deserts.',
      es: 'Pequeño país hiperárido situado en el estrecho de Bab-el-Mandeb, en la depresión de Afar donde tres placas tectónicas se separan creando fisuras volcánicas y lagos salinos.'
    },
    landforms: [
      {
        id: 'dj-lake-assal',
        type: 'lake',
        name_en: 'Lake Assal',
        name_es: 'Lago Assal',
        coords: [11.65, 42.42],
        elevation_m: -155,
        description_en: 'Crater lake sitting 155 meters below sea level, the lowest dry land point in Africa and third lowest on Earth, saltier than the Dead Sea.',
        description_es: 'Lago de cráter a 155 metros bajo el nivel del mar, el punto más bajo de África, con una salinidad superior a la del Mar Muerto.'
      }
    ],
    interesting_fact: {
      en: 'Because of its paramount strategic location at the entrance to the Red Sea, tiny Djibouti hosts military naval bases for the United States, China, France, Japan, and Italy—the highest concentration of foreign military bases in the world.',
      es: 'Por su posición estratégica en la entrada del Mar Rojo, el pequeño Yibuti alberga bases navales militares de Estados Unidos, China, Francia, Japón e Italia.'
    },
    teks_alignment: ['TEKS 6.8A: Bab-el-Mandeb Strait and international naval choke point geopolitics', 'TEKS 6.3C: Afar triple junction continental rifting']
  },

  // =========================================================================
  // 46. MAURITIUS (MUS)
  // =========================================================================
  {
    id: 'MUS',
    iso2: 'mu',
    iso3: 'MUS',
    name_en: 'Mauritius',
    name_es: 'Mauricio',
    continent: 'Africa',
    continent_es: 'África',
    capital_en: 'Port Louis',
    capital_es: 'Port Louis',
    capital_coords: [-20.1609, 57.5012],
    center_coords: [-20.3484, 57.5522],
    zoom_level: 9,
    population: '1,260,000',
    area_sqkm: '2,040 km²',
    gdp_billion: 15,
    main_exports: {
      en: ['Preserved & Processed Fish ($340M)', 'Knit T-shirts & Apparel ($280M)', 'Raw Sugar ($240M)', 'Cut Diamonds ($180M)', 'Medical Devices ($95M)'],
      es: ['Conservas de atún procesadas ($340M)', 'Camisetas y confección textil ($280M)', 'Azúcar especial de caña ($240M)', 'Diamantes tallados ($180M)', 'Dispositivos médicos ($95M)'],
      total_val_billion: 2.4,
    },
    main_imports: {
      en: ['Refined Petroleum ($1.1B)', 'Non-fillet Frozen Fish ($420M)', 'Cars ($280M)', 'Medicaments ($140M)'],
      es: ['Petróleo refinado ($1.1B)', 'Pescado congelado para procesamiento ($420M)', 'Automóviles ($280M)', 'Medicamentos ($140M)'],
      total_val_billion: 5.8,
    },
    natural_wealth: {
      en: ['Vast 2.3-million km² Exclusive Economic Zone in the Indian Ocean', 'Coral reef barrier lagoon ecosystem', 'Volcanic soil supporting premium specialty cane sugars', 'Leading offshore financial and business hub in Africa'],
      es: ['Zona Económica Exclusiva marítima de 2.3 millones de km² en el Índico', 'Barrera de arrecifes de coral y lagunas turquesas', 'Suelos volcánicos para caña de azúcar', 'Principal centro financiero extraterritorial de África'],
    },
    physical_geography_summary: {
      en: 'A volcanic island in the southwestern Indian Ocean, characterized by a central plateau surrounded by jagged mountain peaks and ringed almost entirely by coral reefs protecting turquoise lagoons.',
      es: 'Isla volcánica en el océano Índico suroccidental, con una meseta central rodeada por picos montañosos y protegida por una barrera de arrecifes de coral.'
    },
    landforms: [
      {
        id: 'mu-plateau-chamarel',
        type: 'plateau',
        name_en: 'Seven Coloured Earths of Chamarel',
        name_es: 'Tierras de los Siete Colores de Chamarel',
        coords: [-20.44, 57.37],
        description_en: 'Geological formation where basaltic lava weathered into clay dunes displaying distinct stripes of red, brown, violet, green, blue, purple, and yellow.',
        description_es: 'Curiosa formación geológica de dunas de arcilla volcánica con franjas naturales de siete colores distintos.'
      }
    ],
    interesting_fact: {
      en: 'Mauritius was the only known home of the flightless dodo bird, which went extinct in the late 17th century within decades of human arrival and became the global symbol of animal extinction.',
      es: 'Mauricio fue el único hogar del dodo, ave no voladora que se extinguió en el siglo XVII tras la llegada humana, convirtiéndose en el símbolo mundial de la extinción.'
    },
    teks_alignment: ['TEKS 6.7A: Island diversification from sugar monoculture into financial services and tech', 'TEKS 6.4A: Coral reef preservation in oceanic lagoon systems']
  },

  // =========================================================================
  // 47. COMOROS (COM)
  // =========================================================================
  {
    id: 'COM',
    iso2: 'km',
    iso3: 'COM',
    name_en: 'Comoros',
    name_es: 'Comoras',
    continent: 'Africa',
    continent_es: 'África',
    capital_en: 'Moroni',
    capital_es: 'Moroni',
    capital_coords: [-11.7172, 43.2473],
    center_coords: [-11.6455, 43.3333],
    zoom_level: 8,
    population: '850,000',
    area_sqkm: '1,862 km²',
    gdp_billion: 1.4,
    main_exports: {
      en: ['Cloves ($45M)', 'Essential Oils & Ylang-Ylang ($18M)', 'Vanilla ($12M)'],
      es: ['Clavo de olor ($45M)', 'Aceite esencial de Ylang-Ylang para perfumería ($18M)', 'Vainilla ($12M)'],
      total_val_billion: 0.08,
    },
    main_imports: {
      en: ['Rice ($65M)', 'Poultry Meat ($38M)', 'Refined Petroleum ($35M)', 'Cement ($25M)'],
      es: ['Arroz ($65M)', 'Carne de ave ($38M)', 'Petróleo refinado ($35M)', 'Cemento ($25M)'],
      total_val_billion: 0.38,
    },
    natural_wealth: {
      en: ['World’s premier producer of ylang-ylang essential perfume oil', 'Active volcano Mount Karthala with one of the largest calderas in the world', 'Rich marine biodiversity in Mozambique Channel', 'Living fossil coelacanth fish habitat'],
      es: ['Mayor productor mundial de esencia de ylang-ylang para la alta perfumería', 'Volcán Karthala con una de las calderas activas más grandes del mundo', 'Canal de Mozambique', 'Hábitat del pez celacanto ("fósil viviente")'],
    },
    physical_geography_summary: {
      en: 'A volcanic archipelago of four main islands situated at the northern entrance of the Mozambique Channel, characterized by rugged basaltic peaks and active volcanic calderas.',
      es: 'Archipiélago volcánico en la entrada norte del Canal de Mozambique, caracterizado por conos basálticos y calderas activas.'
    },
    landforms: [
      {
        id: 'km-volcano-karthala',
        type: 'volcano',
        name_en: 'Mount Karthala',
        name_es: 'Monte Karthala',
        coords: [-11.75, 43.38],
        elevation_m: 2361,
        description_en: 'Active shield volcano dominating Grand Comore island, possessing a massive 3x4 km caldera.',
        description_es: 'Volcán en escudo activo con una caldera gigante de 3 por 4 km que domina la isla de Gran Comora.'
      }
    ],
    interesting_fact: {
      en: 'Comoros is the world’s top producer of ylang-ylang, a fragrant yellow flower whose essential oil forms the signature note of luxury French perfumes like Chanel No. 5.',
      es: 'Comoras es el primer productor mundial de ylang-ylang, flor aromática cuyo aceite esencial es la base del perfume Chanel Nº 5.'
    },
    teks_alignment: ['TEKS 6.6B: Specialty fragrance cash crops in tropical island economies', 'TEKS 6.3C: Shield volcanism on oceanic hotspot chains']
  },

  // =========================================================================
  // 48. SEYCHELLES (SYC)
  // =========================================================================
  {
    id: 'SYC',
    iso2: 'sc',
    iso3: 'SYC',
    name_en: 'Seychelles',
    name_es: 'Seychelles',
    continent: 'Africa',
    continent_es: 'África',
    capital_en: 'Victoria',
    capital_es: 'Victoria',
    capital_coords: [-4.6191, 55.4513],
    center_coords: [-4.6796, 55.4920],
    zoom_level: 9,
    population: '100,000',
    area_sqkm: '459 km²',
    gdp_billion: 2.1,
    main_exports: {
      en: ['Prepared & Canned Tuna ($310M)', 'Non-fillet Frozen Tuna ($85M)', 'Petroleum re-exports ($65M)'],
      es: ['Conservas de atún procesado ($310M)', 'Atún congelado ($85M)', 'Reexportación de combustibles marinos ($65M)'],
      total_val_billion: 0.52,
    },
    main_imports: {
      en: ['Refined Petroleum ($420M)', 'Boats and Ships ($180M)', 'Cars ($65M)', 'Poultry Meat ($45M)'],
      es: ['Petróleo refinado ($420M)', 'Embarcaciones y buques pesqueros ($180M)', 'Vehículos ($65M)', 'Carne de ave ($45M)'],
      total_val_billion: 1.4,
    },
    natural_wealth: {
      en: ['World’s only oceanic granitic islands (micro-continental fragments left behind during Gondwana breakup)', 'Aldabra Atoll (largest raised coral atoll in the world with over 150,000 giant tortoises)', 'Pristine 1.3-million km² marine Exclusive Economic Zone (EEZ)', 'Valée de Mai UNESCO forest (home to the giant Coco de Mer palm)'],
      es: ['Únicas islas graníticas oceánicas del mundo (fragmentos de Gondwana)', 'Atolón de Aldabra (el mayor atolón de coral elevado con 150,000 tortugas gigantes)', 'Zona marina protegida de 1.3 millones de km²', 'Palmera gigante del Coco de Mer'],
    },
    physical_geography_summary: {
      en: 'An archipelago of 115 islands in the western Indian Ocean: the northern granitic group features lush mountain peaks rising to 900m, while the southern outer islands are low coral atolls.',
      es: 'Archipiélago de 115 islas en el océano Índico: las islas interiores son bloques de granito montañoso y las exteriores son atolones coralinos bajos.'
    },
    landforms: [
      {
        id: 'sc-atoll-aldabra',
        type: 'archipelago',
        name_en: 'Aldabra Atoll',
        name_es: 'Atolón de Aldabra',
        coords: [-9.42, 46.35],
        description_en: 'World’s second-largest coral atoll, home to the largest wild population of giant tortoises on Earth.',
        description_es: 'El mayor atolón de coral elevado del planeta, santuario de más de 150,000 tortugas gigantes.'
      }
    ],
    interesting_fact: {
      en: 'Seychelles is home to the endemic Coco de Mer palm tree, which produces the largest and heaviest wild seed in the entire plant kingdom, weighing up to 25 kilograms (55 lbs).',
      es: 'En Seychelles crece la palmera del Coco de Mer, que produce la semilla más grande y pesada de todo el reino vegetal, alcanzando hasta 25 kg de peso.'
    },
    teks_alignment: ['TEKS 6.4A: Marine conservation and Blue Economy debt-for-nature swaps', 'TEKS 6.3C: Microcontinental fragments stranded during continental breakup']
  },

  // =========================================================================
  // 49. CAPE VERDE / CABO VERDE (CPV)
  // =========================================================================
  {
    id: 'CPV',
    iso2: 'cv',
    iso3: 'CPV',
    name_en: 'Cabo Verde (Cape Verde)',
    name_es: 'Cabo Verde',
    continent: 'Africa',
    continent_es: 'África',
    capital_en: 'Praia',
    capital_es: 'Praia',
    capital_coords: [14.9330, -23.5133],
    center_coords: [16.0021, -24.0131],
    zoom_level: 8,
    population: '590,000',
    area_sqkm: '4,033 km²',
    gdp_billion: 2.6,
    main_exports: {
      en: ['Processed Tuna & Fish Fillets ($52M)', 'Knit Garments ($14M)', 'Footwear ($8M)'],
      es: ['Conservas de atún y pescado congelado ($52M)', 'Prendas de vestir ($14M)', 'Calzado ($8M)'],
      total_val_billion: 0.09,
    },
    main_imports: {
      en: ['Refined Petroleum ($210M)', 'Foodstuffs & Rice ($140M)', 'Cars ($65M)', 'Cement ($45M)'],
      es: ['Petróleo refinado ($210M)', 'Alimentos y arroz ($140M)', 'Vehículos ($65M)', 'Cemento ($45M)'],
      total_val_billion: 0.98,
    },
    natural_wealth: {
      en: ['Wind and solar renewable energy potential across Atlantic trade winds', 'Strategic transatlantic sea and air crossroads between Europe, Africa, and South America', 'Active stratovolcano Pico do Fogo with volcanic coffee soils', 'Rich pelagic tuna fisheries'],
      es: ['Potencial eólico de los vientos alisios del Atlántico', 'Encrucijada aérea y naval transatlántica', 'Suelos volcánicos del volcán Pico do Fogo para café gourmet', 'Pesquerías de túnidos'],
    },
    physical_geography_summary: {
      en: 'A volcanic archipelago of 10 islands located 570 km west of the Cap-Vert Peninsula in the Atlantic Ocean, divided into the northern Barlavento (windward) and southern Sotavento (leeward) groups.',
      es: 'Archipiélago volcánico de 10 islas a 570 km al oeste de Senegal, dividido en las islas de Barlovento al norte y Sotavento al sur.'
    },
    landforms: [
      {
        id: 'cv-volcano-fogo',
        type: 'volcano',
        name_en: 'Pico do Fogo',
        name_es: 'Pico do Fogo',
        coords: [14.95, -24.34],
        elevation_m: 2829,
        description_en: 'Active stratovolcano and highest peak in Cabo Verde, whose caldera floor houses vineyards and coffee plantations.',
        description_es: 'Estratovolcán activo y cumbre más alta de Cabo Verde (2,829m), con viñedos dentro de su caldera.'
      }
    ],
    interesting_fact: {
      en: 'Because of its extreme aridity and historical droughts, more people of Cape Verdean descent live abroad in diaspora (primarily in the United States, Portugal, and France) than reside in Cabo Verde itself.',
      es: 'Debido a históricas sequías, hay más caboverdianos y descendientes viviendo en la diáspora (en EE.UU., Portugal y Francia) que en el propio archipiélago de Cabo Verde.'
    },
    teks_alignment: ['TEKS 6.3C: Oceanic hotspot volcanism and trade wind weather patterns', 'TEKS 6.7B: Island economies reliant on remittance inflows and port services']
  },

  // =========================================================================
  // 50. GAMBIA (GMB)
  // =========================================================================
  {
    id: 'GMB',
    iso2: 'gm',
    iso3: 'GMB',
    name_en: 'The Gambia',
    name_es: 'Gambia',
    continent: 'Africa',
    continent_es: 'África',
    capital_en: 'Banjul',
    capital_es: 'Banjul',
    capital_coords: [13.4549, -16.5790],
    center_coords: [13.4432, -15.3101],
    zoom_level: 8,
    population: '2,700,000',
    area_sqkm: '10,689 km²',
    gdp_billion: 2.3,
    main_exports: {
      en: ['Peanut / Groundnut Products ($65M)', 'Cashew Nuts ($35M)', 'Scrap Metal ($18M)', 'Fish ($14M)'],
      es: ['Maní y aceite de cacahuete ($65M)', 'Nueces de la India ($35M)', 'Chatarra ($18M)', 'Pescado ($14M)'],
      total_val_billion: 0.16,
    },
    main_imports: {
      en: ['Refined Petroleum ($180M)', 'Rice ($95M)', 'Wheat Flour ($45M)', 'Cotton Fabrics ($38M)'],
      es: ['Petróleo refinado ($180M)', 'Arroz ($95M)', 'Harina de trigo ($45M)', 'Telas ($38M)'],
      total_val_billion: 0.82,
    },
    natural_wealth: {
      en: ['Gambia River navigable waterway (vital trade artery through the country)', 'Extensive mangrove estuaries with prolific birdlife (over 560 bird species)', 'Arable sandy soils for peanut cultivation', 'Port of Banjul maritime access'],
      es: ['Río Gambia (vía fluvial navegable que estructura el país)', 'Estuarios de manglar con más de 560 especies de aves', 'Cultivo tradicional de maní', 'Puerto de Banjul'],
    },
    physical_geography_summary: {
      en: 'The smallest country in mainland Africa: a narrow ribbon of territory averaging only 25-50 km wide, following the twisting path of the Gambia River, completely surrounded by Senegal except for its Atlantic coastline.',
      es: 'El país más pequeño de África continental: una estrecha franja de 25 a 50 km de ancho a ambas orillas del río Gambia, rodeada por Senegal excepto en su desembocadura atlántica.'
    },
    landforms: [
      {
        id: 'gm-river-gambia',
        type: 'river',
        name_en: 'Gambia River',
        name_es: 'Río Gambia',
        coords: [13.46, -16.58],
        length_km: 1120,
        description_en: 'Navigable river defining the boundaries of the nation, flowing west from Guinea through Senegal and The Gambia to the Atlantic.',
        description_es: 'Río navegable que define las fronteras del país a lo largo de todo su cauce.'
      }
    ],
    interesting_fact: {
      en: 'The Gambia’s borders were literally drawn along the river: legend holds that British warships sailed up the river and fired cannonballs to the north and south to mark the boundary with French Senegal.',
      es: 'Las fronteras de Gambia se trazaron a lo largo del río: la leyenda cuenta que los cañonazos disparados desde barcos británicos marcaron la distancia de la frontera con el Senegal francés.'
    },
    teks_alignment: ['TEKS 6.3A: Colonial river-carved political enclaves', 'TEKS 6.4C: River corridor ecology surrounded by Sahelian savannas']
  },

  // =========================================================================
  // 51. GUINEA-BISSAU (GNB)
  // =========================================================================
  {
    id: 'GNB',
    iso2: 'gw',
    iso3: 'GNB',
    name_en: 'Guinea-Bissau',
    name_es: 'Guinea-Bisáu',
    continent: 'Africa',
    continent_es: 'África',
    capital_en: 'Bissau',
    capital_es: 'Bisáu',
    capital_coords: [11.8632, -15.5984],
    center_coords: [11.8037, -15.1804],
    zoom_level: 7,
    population: '2,100,000',
    area_sqkm: '36,125 km²',
    gdp_billion: 2.1,
    main_exports: {
      en: ['Raw Cashew Nuts ($210M)', 'Frozen Fish ($18M)', 'Rough Wood ($12M)'],
      es: ['Nueces de la India en cáscara ($210M)', 'Pescado congelado ($18M)', 'Madera en rollo ($12M)'],
      total_val_billion: 0.25,
    },
    main_imports: {
      en: ['Refined Petroleum ($95M)', 'Rice ($75M)', 'Cement ($35M)', 'Vehicles ($25M)'],
      es: ['Petróleo refinado ($95M)', 'Arroz ($75M)', 'Cemento ($35M)', 'Vehículos ($25M)'],
      total_val_billion: 0.42,
    },
    natural_wealth: {
      en: ['Fifth largest producer of cashew nuts in the world (representing over 80% of national export earnings)', 'Bijagós Archipelago (UNESCO biosphere reserve of 88 islands with saltwater hippos)', 'Extensive mangrove estuaries (highest mangrove density in West Africa)', 'Offshore bauxite and petroleum potential'],
      es: ['Quinto productor mundial de nueces de la India (>80% de sus exportaciones)', 'Archipiélago de Bijagós (reserva de la biosfera de 88 islas con hipopótamos marinos)', 'Mayor densidad de manglares de África Occidental', 'Fosfatos y bauxita'],
    },
    physical_geography_summary: {
      en: 'A low-lying coastal country on the Atlantic Ocean, dominated by complex drowned river estuaries (rias), vast mangrove swamps, and the offshore Bijagós Archipelago.',
      es: 'País costero llano dominado por rías y estuarios fluviales inundados, extensos manglares y el archipiélago insular de Bijagós.'
    },
    landforms: [
      {
        id: 'gw-archipelago-bijagos',
        type: 'archipelago',
        name_en: 'Bijagós Archipelago',
        name_es: 'Archipiélago de Bijagós',
        coords: [11.5, -16.0],
        description_en: 'Group of 88 tropical islands and atolls famed for unique saltwater-adapted hippopotamuses and matriarchal societies.',
        description_es: 'Archipiélago de 88 islas tropicales con hipopótamos adaptados a nadar en agua salada marina.'
      }
    ],
    interesting_fact: {
      en: 'The Bijagós Archipelago of Guinea-Bissau is home to one of the only populations of saltwater-adapted hippopotamuses in the world, regularly swimming in the open Atlantic surf.',
      es: 'En el archipiélago de Bijagós habita una de las únicas poblaciones de hipopótamos del mundo que nada habitualmente en las olas de agua salada del océano Atlántico.'
    },
    teks_alignment: ['TEKS 6.6B: Extreme single-crop export dependency on raw cashew nuts', 'TEKS 6.4A: Estuarine mangrove ecosystems and coastal conservation']
  },

  // =========================================================================
  // 52. SAO TOME AND PRINCIPE (STP)
  // =========================================================================
  {
    id: 'STP',
    iso2: 'st',
    iso3: 'STP',
    name_en: 'São Tomé and Príncipe',
    name_es: 'Santo Tomé y Príncipe',
    continent: 'Africa',
    continent_es: 'África',
    capital_en: 'São Tomé',
    capital_es: 'Santo Tomé',
    capital_coords: [0.3365, 6.7273],
    center_coords: [0.1864, 6.6131],
    zoom_level: 9,
    population: '230,000',
    area_sqkm: '964 km²',
    gdp_billion: 0.65,
    main_exports: {
      en: ['Organic Cocoa Beans ($18M)', 'Palm Oil ($8M)', 'Coffee ($2M)'],
      es: ['Cacao fino aromático orgánico ($18M)', 'Aceite de palma ($8M)', 'Café arábica ($2M)'],
      total_val_billion: 0.035,
    },
    main_imports: {
      en: ['Refined Petroleum ($45M)', 'Rice & Wheat ($25M)', 'Cars & Vehicles ($15M)', 'Cement ($12M)'],
      es: ['Petróleo refinado ($45M)', 'Arroz y trigo ($25M)', 'Vehículos ($15M)', 'Cemento ($12M)'],
      total_val_billion: 0.18,
    },
    natural_wealth: {
      en: ['Equatorial volcanic soil producing certified fine-flavor organic cocoa', 'Joint Development Zone offshore oil blocks with Nigeria', 'High primary rainforest biodiversity (Obo National Park)', 'Deep sea pelagic fisheries'],
      es: ['Suelos volcánicos que producen cacao orgánico fino de aroma', 'Bloques de petróleo marino en la zona conjunta con Nigeria', 'Parque Nacional Obo', 'Pesca pelágica en el Golfo de Guinea'],
    },
    physical_geography_summary: {
      en: 'The second-smallest African nation: two main volcanic islands along the Cameroon volcanic line in the Gulf of Guinea, rising steeply from the ocean into cloud-forest volcanic plugs.',
      es: 'El segundo país más pequeño de África: dos islas volcánicas en el Golfo de Guinea que emergen con picos basálticos cubiertos de selva nubosa.'
    },
    landforms: [
      {
        id: 'st-peak-caogrande',
        type: 'volcano',
        name_en: 'Pico Cão Grande',
        name_es: 'Pico Cão Grande',
        coords: [0.117, 6.567],
        elevation_m: 663,
        description_en: 'Dramatic needle-shaped volcanic plug rising 370 meters vertically above the surrounding rainforest canopy.',
        description_es: 'Aguja volcánica basáltica que se eleva 370 metros verticales sobre la selva como una torre natural.'
      }
    ],
    interesting_fact: {
      en: 'In the early 1900s, tiny São Tomé and Príncipe was briefly the world’s largest producer of cocoa, earning the islands the nickname "The Chocolate Islands".',
      es: 'A principios del siglo XX, Santo Tomé y Príncipe fue el mayor productor de cacao del mundo, recibiendo el apodo de "Las Islas del Chocolate".'
    },
    teks_alignment: ['TEKS 6.6B: Specialty niche organic commodities vs mass monocultures', 'TEKS 6.3C: Volcanic neck and plug geomorphology along oceanic hotspots']
  },

  // =========================================================================
  // 53. SEYCHELLES, MAURITIUS, NAMIBIA, WESTERN SAHARA (ESH) / S.A.D.R.
  // =========================================================================
  {
    id: 'ESH',
    iso2: 'eh',
    iso3: 'ESH',
    name_en: 'Western Sahara',
    name_es: 'Sáhara Occidental',
    continent: 'Africa',
    continent_es: 'África',
    capital_en: 'Laayoune (El Aaiún)',
    capital_es: 'El Aaiún',
    capital_coords: [27.1536, -13.2033],
    center_coords: [24.2155, -12.8858],
    zoom_level: 6,
    population: '600,000',
    area_sqkm: '266,000 km²',
    gdp_billion: 1.1,
    main_exports: {
      en: ['Phosphate Rock ($180M)', 'Frozen Fish & Octopus ($95M)', 'Sand for construction ($25M)'],
      es: ['Fosfatos de Bu Craa ($180M)', 'Pulpo y pescado congelado ($95M)', 'Arena para construcción ($25M)'],
      total_val_billion: 0.31,
    },
    main_imports: {
      en: ['Refined Petroleum ($140M)', 'Foodstuffs ($85M)', 'Construction Materials ($45M)'],
      es: ['Petróleo refinado ($140M)', 'Alimentos básicos ($85M)', 'Materiales de construcción ($45M)'],
      total_val_billion: 0.32,
    },
    natural_wealth: {
      en: ['Bou Craa phosphate mine (one of the largest single phosphate open-pit mines on Earth with a 100-km conveyor belt to the Atlantic coast)', 'Rich Canary Current cold-water upwelling fisheries', 'Vast Atlantic coastline and coastal wind resources'],
      es: ['Mina de fosfatos de Bu Craa (con la cinta transportadora continua más larga del mundo, de 100 km al Atlántico)', 'Pesquerías de la corriente de Canarias', 'Recursos eólicos marinos'],
    },
    physical_geography_summary: {
      en: 'A hyper-arid coastal desert territory in northwest Africa, dominated by flat desert pavement (reg), shifting sand dunes (erg), and dry rocky plateaus bordering the Atlantic Ocean.',
      es: 'Territorio desértico hiperárido en el noroeste de África, dominado por llanuras pedregosas (reg), dunas y mesetas que bordean el océano Atlántico.'
    },
    landforms: [
      {
        id: 'eh-belt-bucraa',
        type: 'plain',
        name_en: 'Bou Craa Phosphate Belt',
        name_es: 'Cinta de Fosfatos de Bu Craa',
        coords: [26.33, -12.85],
        length_km: 100,
        description_en: 'World’s longest automated conveyor belt system, transporting phosphate rock 100 km across the desert to coastal ships.',
        description_es: 'La cinta transportadora automatizada continua más larga del mundo (100 km), que lleva fosfatos al mar.'
      }
    ],
    interesting_fact: {
      en: 'The Bou Craa automated conveyor belt stretches for nearly 100 kilometers across the open Sahara Desert to the Atlantic port of El Aaiún, and is clearly visible from the International Space Station as a white line across the desert.',
      es: 'La cinta transportadora de Bu Craa mide 100 km en línea recta cruzando el desierto del Sáhara hasta el Atlántico, y es visible desde la Estación Espacial Internacional como una línea blanca continua.'
    },
    teks_alignment: ['TEKS 6.6B: Industrial conveyor infrastructure overcoming desert transport frictions', 'TEKS 6.3A: Territorial status and natural resource extraction controversies']
  },

  // =========================================================================
  // 54. BURUNDI (BDI)
  // =========================================================================
  {
    id: 'BDI',
    iso2: 'bi',
    iso3: 'BDI',
    name_en: 'Burundi',
    name_es: 'Burundi',
    continent: 'Africa',
    continent_es: 'África',
    capital_en: 'Gitega (Political), Bujumbura (Economic)',
    capital_es: 'Guitega (Política), Buyumbura (Económica)',
    capital_coords: [-3.4273, 29.9246],
    center_coords: [-3.3731, 29.9189],
    zoom_level: 8,
    population: '13,200,000',
    area_sqkm: '27,834 km²',
    gdp_billion: 3.2,
    main_exports: {
      en: ['Coffee ($120M)', 'Tea ($35M)', 'Gold ($25M)', 'Niobium & Tantalum Ores ($15M)'],
      es: ['Café arábica de altura ($120M)', 'Té ($35M)', 'Oro ($25M)', 'Minerales de niobio y tantalio ($15M)'],
      total_val_billion: 0.22,
    },
    main_imports: {
      en: ['Refined Petroleum ($180M)', 'Cement ($45M)', 'Medicaments ($40M)', 'Wheat ($35M)'],
      es: ['Petróleo refinado ($180M)', 'Cemento ($45M)', 'Medicamentos ($40M)', 'Trigo ($35M)'],
      total_val_billion: 1.1,
    },
    natural_wealth: {
      en: ['Southernmost southernmost source headwaters of the White Nile River (Ruvyironza River)', 'Lake Tanganyika shoreline and freshwater fisheries', 'Significant nickel laterite deposits at Musongati', 'High-altitude volcanic soils for arabica coffee'],
      es: ['Fuente más meridional del río Nilo Blanco (río Ruvyironza)', 'Costa y pesquerías del lago Tanganica', 'Yacimientos de níquel en Musongati', 'Suelos volcánicos de alta montaña para café'],
    },
    physical_geography_summary: {
      en: 'A hilly, mountainous landlocked nation in the Great Rift Valley, rising from the northeastern shores of Lake Tanganyika to central peaks exceeding 2,600 meters before sloping into eastern savannas.',
      es: 'País montañoso sin litoral en la falla del Gran Valle del Rift, que asciende desde la orilla noreste del lago Tanganica hacia cordilleras centrales de más de 2,600 metros.'
    },
    landforms: [
      {
        id: 'bi-peak-heha',
        type: 'peak',
        name_en: 'Mount Heha',
        name_es: 'Monte Heha',
        coords: [-3.58, 29.5],
        elevation_m: 2684,
        description_en: 'Highest mountain peak in Burundi, located in the Highlands range east of Lake Tanganyika.',
        description_es: 'Punto más alto de Burundi (2,684m), en las montañas al este del lago Tanganica.'
      }
    ],
    interesting_fact: {
      en: 'A pyramid erected at Mount Kikizi in southern Burundi marks the southernmost confirmed geographical headwater source of the Nile River, located over 6,600 kilometers from the Mediterranean Sea.',
      es: 'Una pirámide de piedra en el Monte Kikizi en Burundi marca el nacimiento más meridional del río Nilo, a más de 6,600 km de su desembocadura en el Mediterráneo.'
    },
    teks_alignment: ['TEKS 6.4C: Ultimate headwater source of continental river systems (Nile)', 'TEKS 6.3A: Landlocked micro-states in the Great Lakes region']
  }
];
