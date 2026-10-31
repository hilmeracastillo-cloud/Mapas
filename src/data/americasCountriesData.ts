import { CountryDossierData } from '../types/geography';

export const ALL_AMERICAS_ADDITIONAL_COUNTRIES: CountryDossierData[] = [
  // =========================================================================
  // CANADA (North America)
  // =========================================================================
  {
    id: 'CAN',
    iso2: 'ca',
    iso3: 'CAN',
    name_en: 'Canada',
    name_es: 'Canadá',
    continent: 'North America',
    continent_es: 'América del Norte',
    capital_en: 'Ottawa',
    capital_es: 'Ottawa',
    capital_coords: [45.4215, -75.6972],
    center_coords: [56.1304, -106.3468],
    zoom_level: 4,
    population: '40,100,000',
    area_sqkm: '9,984,670 km²',
    gdp_billion: 2140,
    main_exports: {
      en: ['Crude Petroleum ($124B)', 'Cars & Vehicle Parts ($48B)', 'Gold ($22B)', 'Timber & Wood Pulp ($16B)', 'Wheat ($10B)'],
      es: ['Petróleo crudo ($124B)', 'Autos y autopartes ($48B)', 'Oro ($22B)', 'Madera y celulosa ($16B)', 'Trigo ($10B)'],
      total_val_billion: 598,
    },
    main_imports: {
      en: ['Cars & Delivery Trucks ($38B)', 'Vehicle Parts ($22B)', 'Delivery Trucks ($18B)', 'Computers ($12B)', 'Refined Petroleum ($11B)'],
      es: ['Autos y camiones ($38B)', 'Autopartes ($22B)', 'Camiones de carga ($18B)', 'Computadoras ($12B)', 'Petróleo refinado ($11B)'],
      total_val_billion: 557,
    },
    natural_wealth: {
      en: ['Athabasca oil sands (third largest crude reserves on Earth)', 'Canadian Shield mineral belt (nickel, uranium, gold, diamonds)', 'Over 20% of Earth’s surface freshwater', 'Extensive boreal timber forests'],
      es: ['Arenas bituminosas de Athabasca (tercera mayor reserva petrolera mundial)', 'Cinturón mineral del Escudo Canadiense (níquel, uranio, oro, diamantes)', 'Más del 20% del agua dulce superficial del planeta', 'Vastos bosques boreales madereros'],
    },
    physical_geography_summary: {
      en: 'The second largest country on Earth by total area, encompassing the rugged Canadian Shield, the Rocky Mountains in the west, interior fertile prairies, and vast Arctic tundra islands.',
      es: 'El segundo país más extenso de la Tierra, abarca el antiguo Escudo Canadiense, las Montañas Rocosas al oeste, las fértiles praderas centrales y la tundra del archipiélago ártico.'
    },
    landforms: [
      {
        id: 'ca-peak-logan',
        type: 'peak',
        name_en: 'Mount Logan',
        name_es: 'Monte Logan',
        coords: [60.5672, -140.4056],
        elevation_m: 5959,
        description_en: 'Highest peak in Canada and second-highest in North America, in the Saint Elias Mountains.',
        description_es: 'La cumbre más alta de Canadá y segunda de Norteamérica en las montañas San Elías (5.959m).'
      },
      {
        id: 'ca-river-mackenzie',
        type: 'river',
        name_en: 'Mackenzie River',
        name_es: 'Río Mackenzie',
        coords: [68.9, -135.5],
        length_km: 4241,
        description_en: 'Canada’s longest river system, flowing north through the boreal forest into the Arctic Ocean.',
        description_es: 'El sistema fluvial más largo de Canadá, fluye hacia el norte desembocando en el Océano Ártico (4.241 km).'
      },
      {
        id: 'ca-bay-fundy',
        type: 'bay',
        name_en: 'Bay of Fundy',
        name_es: 'Bahía de Fundy',
        coords: [45.2, -65.5],
        description_en: 'Atlantic bay famous for having the highest tidal range in the world (up to 16 meters / 53 feet).',
        description_es: 'Bahía atlántica famosa por registrar las mareas más altas del mundo (hasta 16 metros de oscilación).'
      }
    ],
    interesting_fact: {
      en: 'Canada has more lakes than the rest of the world combined—over 2 million lakes covering 9% of its total territory!',
      es: '¡Canadá tiene más lagos que el resto del mundo combinado, sumando más de 2 millones de lagos que cubren el 9% de su territorio!'
    },
    teks_alignment: ['TEKS 5.6A: Glaciation and freshwater reservoirs in North America', 'TEKS 6.6B: Extraction of Arctic and subarctic natural resources']
  },

  // =========================================================================
  // ARGENTINA (South America)
  // =========================================================================
  {
    id: 'ARG',
    iso2: 'ar',
    iso3: 'ARG',
    name_en: 'Argentina',
    name_es: 'Argentina',
    continent: 'South America',
    continent_es: 'América del Sur',
    capital_en: 'Buenos Aires',
    capital_es: 'Buenos Aires',
    capital_coords: [-34.6037, -58.3816],
    center_coords: [-38.4161, -63.6167],
    zoom_level: 4,
    population: '46,600,000',
    area_sqkm: '2,780,400 km²',
    gdp_billion: 640,
    main_exports: {
      en: ['Soybean Meal & Oil ($18B)', 'Corn ($9B)', 'Wheat ($4.5B)', 'Cars & Delivery Trucks ($7B)', 'Crude Petroleum & Gas ($5B)'],
      es: ['Harina y aceite de soya ($18B)', 'Maíz ($9B)', 'Trigo ($4.5B)', 'Autos y camionetas ($7B)', 'Petróleo y gas ($5B)'],
      total_val_billion: 88,
    },
    main_imports: {
      en: ['Refined Petroleum & Gas ($8B)', 'Cars & Vehicle Parts ($6B)', 'Telephones ($2B)', 'Organic Chemicals ($2.5B)'],
      es: ['Petróleo refinado y gas ($8B)', 'Autos y autopartes ($6B)', 'Teléfonos ($2B)', 'Químicos orgánicos ($2.5B)'],
      total_val_billion: 72,
    },
    natural_wealth: {
      en: ['Vaca Muerta shale oil and gas formation (second largest shale gas reserve in the world)', 'Humid Pampas rich arable soil', 'Puna Lithium Triangle salt flats (Hombre Muerto)', 'Patagonian wind energy potential'],
      es: ['Yacimiento de Vaca Muerta (segunda mayor reserva de gas de esquisto del mundo)', 'Suelo fértil y templado de la Pampa Húmeda', 'Salares de litio en la Puna (Hombre Muerto)', 'Extraordinario potencial eólico en la Patagonia'],
    },
    physical_geography_summary: {
      en: 'Diverse physical landscapes extending from the subtropical Gran Chaco in the north, across the vast fertile Pampas plain, along the towering Andes mountain range, to the windswept Patagonian plateau and Tierra del Fuego in the far south.',
      es: 'Paisaje diverso que va desde el Gran Chaco subtropical al norte, la fértil llanura pampeana, la imponente cordillera de los Andes al oeste, hasta la árida meseta patagónica y Tierra del Fuego al sur.'
    },
    landforms: [
      {
        id: 'ar-peak-aconcagua',
        type: 'peak',
        name_en: 'Aconcagua',
        name_es: 'Aconcagua',
        coords: [-32.6532, -70.0109],
        elevation_m: 6961,
        description_en: 'Highest mountain in the Americas and the highest peak outside Asia, located in Mendoza Province.',
        description_es: 'El pico más alto de América y del hemisferio occidental (6.961m), en la provincia de Mendoza.'
      },
      {
        id: 'ar-waterfall-iguazu',
        type: 'river',
        name_en: 'Iguazu Falls (Cataratas del Iguazú)',
        name_es: 'Cataratas del Iguazú',
        coords: [-25.6953, -54.4367],
        length_km: 2700,
        description_en: 'Colossal semicircular waterfall system of 275 drops on the Iguazu River border with Brazil.',
        description_es: 'Monumento natural con 275 saltos de agua sobre el río Iguazú en la frontera con Brasil.'
      },
      {
        id: 'ar-glacier-peritomoreno',
        type: 'lake',
        name_en: 'Perito Moreno Glacier',
        name_es: 'Glaciar Perito Moreno',
        coords: [-50.4947, -73.1388],
        elevation_m: 180,
        description_en: 'Advancing glacial ice tongue in Los Glaciares National Park terminating in Lake Argentino.',
        description_es: 'Glaciar en avance continuo en el Parque Nacional Los Glaciares que desemboca en el Lago Argentino.'
      }
    ],
    interesting_fact: {
      en: 'Argentina spans over 3,700 km from north to south, containing both the highest point in the Americas (Aconcagua, 6,961m) and the lowest point in South America (Laguna del Carbón, -105m).',
      es: 'Argentina tiene más de 3.700 km de longitud norte-sur y contiene tanto el punto más alto de América (Aconcagua, 6.961m) como el punto más bajo (Laguna del Carbón, -105m).'
    },
    teks_alignment: ['TEKS 6.4B: Pampas agriculture and livestock geography', 'TEKS 6.6B: Mineral and shale energy extraction in South America']
  },

  // =========================================================================
  // COLOMBIA (South America)
  // =========================================================================
  {
    id: 'COL',
    iso2: 'co',
    iso3: 'COL',
    name_en: 'Colombia',
    name_es: 'Colombia',
    continent: 'South America',
    continent_es: 'América del Sur',
    capital_en: 'Bogotá',
    capital_es: 'Bogotá',
    capital_coords: [4.711, -74.0721],
    center_coords: [4.5709, -74.2973],
    zoom_level: 5,
    population: '52,200,000',
    area_sqkm: '1,141,748 km²',
    gdp_billion: 365,
    main_exports: {
      en: ['Crude Petroleum ($15B)', 'Coal Briquettes ($8B)', 'Coffee ($4B)', 'Cut Flowers ($2B)', 'Gold ($3B)'],
      es: ['Petróleo crudo ($15B)', 'Carbón mineral ($8B)', 'Café de altura ($4B)', 'Flores cortadas ($2B)', 'Oro ($3B)'],
      total_val_billion: 54,
    },
    main_imports: {
      en: ['Refined Petroleum ($7B)', 'Cars & Trucks ($4.5B)', 'Broadcasting Equipment ($2.5B)', 'Corn & Wheat ($2.2B)'],
      es: ['Petróleo refinado ($7B)', 'Autos y camiones ($4.5B)', 'Equipos de transmisión ($2.5B)', 'Maíz y trigo ($2.2B)'],
      total_val_billion: 62,
    },
    natural_wealth: {
      en: ['World’s premier source of high-purity emeralds (Muzo & Chivor)', 'Cerrejón open-pit coal deposit (largest in Latin America)', 'High-altitude volcanic soils ideal for mild Arabica coffee', 'Hydroelectric capacity along the Magdalena and Cauca rivers'],
      es: ['Mayor productor mundial de esmeraldas de alta pureza (Muzo y Chivor)', 'Mina de carbón a cielo abierto de El Cerrejón', 'Suelos volcánicos ideales para café arábica suave', 'Potencial hidroeléctrico en los ríos Magdalena y Cauca'],
    },
    physical_geography_summary: {
      en: 'The only South American nation with coastlines on both the Caribbean Sea and Pacific Ocean. The Andes cordillera branches into three distinct ranges (Occidental, Central, and Oriental), flanked by the Pacific rainforest, Amazon basin, and Eastern Llanos plains.',
      es: 'Único país sudamericano con costas en el Mar Caribe y el Océano Pacífico. Los Andes se dividen en tres cordilleras (Occidental, Central y Oriental), flanqueadas por selvas tropicales del Chocó y la Amazonía.'
    },
    landforms: [
      {
        id: 'co-peak-ruiz',
        type: 'volcano',
        name_en: 'Nevado del Ruiz',
        name_es: 'Nevado del Ruiz',
        coords: [4.8922, -75.3242],
        elevation_m: 5321,
        description_en: 'Active stratovolcano in the Cordillera Central famous for its glacier cap and monitored volcanic activity.',
        description_es: 'Estratovolcán activo en la Cordillera Central con casquete glaciar en su cumbre (5.321m).'
      },
      {
        id: 'co-river-magdalena',
        type: 'river',
        name_en: 'Magdalena River',
        name_es: 'Río Magdalena',
        coords: [11.05, -74.85],
        length_km: 1528,
        description_en: 'Colombia’s principal fluvial artery, flowing north between the Andes ranges into the Caribbean Sea.',
        description_es: 'La principal arteria fluvial de Colombia, fluye entre las cordilleras andinas hacia el Mar Caribe.'
      },
      {
        id: 'co-peak-colon',
        type: 'peak',
        name_en: 'Pico Cristóbal Colón',
        name_es: 'Pico Cristóbal Colón',
        coords: [10.8358, -73.6869],
        elevation_m: 5775,
        description_en: 'Highest mountain in Colombia, situated in the isolated coastal Sierra Nevada de Santa Marta.',
        description_es: 'El punto más alto de Colombia (5.775m), en la Sierra Nevada de Santa Marta junto al mar.'
      }
    ],
    interesting_fact: {
      en: 'Colombia is the most biodiverse country on Earth per square kilometer, harboring roughly 10% of the world’s plant and animal species and the highest diversity of birds on the planet.',
      es: '¡Colombia es el país más biodiverso del mundo por kilómetro cuadrado, albergando el 10% de todas las especies de la Tierra y la mayor variedad de aves del planeta!'
    },
    teks_alignment: ['TEKS 6.4B: Altitudinal zonation in Andean agriculture', 'TEKS 6.5A: Trade flows between Caribbean and Pacific corridors']
  },

  // =========================================================================
  // CHILE (South America)
  // =========================================================================
  {
    id: 'CHL',
    iso2: 'cl',
    iso3: 'CHL',
    name_en: 'Chile',
    name_es: 'Chile',
    continent: 'South America',
    continent_es: 'América del Sur',
    capital_en: 'Santiago',
    capital_es: 'Santiago',
    capital_coords: [-33.4489, -70.6693],
    center_coords: [-35.6751, -71.543],
    zoom_level: 4,
    population: '19,600,000',
    area_sqkm: '756,102 km²',
    gdp_billion: 340,
    main_exports: {
      en: ['Refined & Unrefined Copper ($44B)', 'Lithium Carbonate ($8B)', 'Fresh Fruits & Grapes ($6B)', 'Fish & Salmon Fillets ($5B)', 'Wine ($2B)'],
      es: ['Cobre refinado y mineral ($44B)', 'Carbonato de litio ($8B)', 'Frutas frescas y uvas ($6B)', 'Salmón y pescado ($5B)', 'Vino ($2B)'],
      total_val_billion: 98,
    },
    main_imports: {
      en: ['Refined Petroleum ($7B)', 'Cars & Commercial Vehicles ($5.5B)', 'Crude Petroleum ($3B)', 'Broadcasting Equipment ($2.5B)'],
      es: ['Petróleo refinado ($7B)', 'Autos y vehículos comerciales ($5.5B)', 'Petróleo crudo ($3B)', 'Equipos de transmisión ($2.5B)'],
      total_val_billion: 86,
    },
    natural_wealth: {
      en: ['World’s #1 producer and exporter of copper (Escondida & El Teniente mines)', 'Salar de Atacama lithium brine reserves', 'Cold, nutrient-rich Humboldt Current fisheries', 'Fertile Mediterranean climate central valley vineyards'],
      es: ['Primer productor y exportador mundial de cobre (Escondida y El Teniente)', 'Mayores reservas de litio en el Salar de Atacama', 'Riquísimas pesquerías alimentadas por la Corriente de Humboldt', 'Suelos fértiles de clima mediterráneo en el Valle Central'],
    },
    physical_geography_summary: {
      en: 'A uniquely long, ribbon-shaped nation stretching over 4,270 km along the southwestern coast of South America, averaging only 177 km in width between the Pacific Ocean and the Andes cordillera.',
      es: 'Un país singularmente largo y estrecho que se extiende más de 4.270 km de norte a sur con solo 177 km de ancho promedio entre el Océano Pacífico y la cresta de los Andes.'
    },
    landforms: [
      {
        id: 'cl-desert-atacama',
        type: 'desert',
        name_en: 'Atacama Desert',
        name_es: 'Desierto de Atacama',
        coords: [-23.8634, -69.1328],
        description_en: 'Driest non-polar desert on Earth, renowned for astronomical observatories and rich copper/lithium deposits.',
        description_es: 'El desierto no polar más árido de la Tierra, capital mundial de astronomía y rico en cobre y litio.'
      },
      {
        id: 'cl-volcano-ojosdelsalado',
        type: 'volcano',
        name_en: 'Nevado Ojos del Salado',
        name_es: 'Nevado Ojos del Salado',
        coords: [-27.1092, -68.5411],
        elevation_m: 6893,
        description_en: 'Highest active volcano in the world, shared with Argentina in the high Andes plateau.',
        description_es: 'El volcán activo más alto del planeta (6.893m), en la frontera con Argentina.'
      },
      {
        id: 'cl-peak-torresdelpaine',
        type: 'peak',
        name_en: 'Torres del Paine',
        name_es: 'Torres del Paine',
        coords: [-50.9423, -72.9667],
        elevation_m: 2884,
        description_en: 'Spectacular granite peaks and turquoise glacial lakes in southern Chilean Patagonia.',
        description_es: 'Imponentes cuernos y torres de granito rodeados de lagos glaciares en la Patagonia austral.'
      }
    ],
    interesting_fact: {
      en: 'Some weather stations in the Atacama Desert have never recorded a single drop of rain in recorded human history!',
      es: '¡En varios sectores del Desierto de Atacama jamás ha caído una sola gota de lluvia registrada en toda la historia humana!'
    },
    teks_alignment: ['TEKS 6.4C: Arid vs Mediterranean climates in South America', 'TEKS 6.6B: Copper and lithium supply chains in global economy']
  },

  // =========================================================================
  // PERU (South America)
  // =========================================================================
  {
    id: 'PER',
    iso2: 'pe',
    iso3: 'PER',
    name_en: 'Peru',
    name_es: 'Perú',
    continent: 'South America',
    continent_es: 'América del Sur',
    capital_en: 'Lima',
    capital_es: 'Lima',
    capital_coords: [-12.0464, -77.0428],
    center_coords: [-9.19, -75.0152],
    zoom_level: 5,
    population: '34,300,000',
    area_sqkm: '1,285,216 km²',
    gdp_billion: 268,
    main_exports: {
      en: ['Copper Ores ($19B)', 'Gold ($8B)', 'Refined Petroleum & Gas ($4B)', 'Zinc Ores ($2.5B)', 'Grapes & Avocados ($3B)'],
      es: ['Minerales de cobre ($19B)', 'Oro ($8B)', 'Gas natural de Camisea ($4B)', 'Minerales de zinc ($2.5B)', 'Uvas y aguacates ($3B)'],
      total_val_billion: 64,
    },
    main_imports: {
      en: ['Refined Petroleum ($6B)', 'Cars & Trucks ($4B)', 'Telephones & Computers ($2.5B)', 'Plastics & Fertilizers ($2B)'],
      es: ['Petróleo refinado ($6B)', 'Autos y camiones ($4B)', 'Teléfonos y computadoras ($2.5B)', 'Plásticos y abonos ($2B)'],
      total_val_billion: 52,
    },
    natural_wealth: {
      en: ['Major Andean polymetallic belts (copper, gold, silver, zinc)', 'Humboldt Current coastal upwelling anchovy fishery', 'Camisea natural gas fields in Cusco rainforest', 'Peruvian Amazon timber and medicinal plants'],
      es: ['Fajas polimetálicas andinas (cobre, oro, plata, zinc)', 'Riqueza pesquera de anchoveta en la Corriente de Humboldt', 'Campos de gas natural de Camisea en la selva de Cusco', 'Biodiversidad y madera en la Amazonía peruana'],
    },
    physical_geography_summary: {
      en: 'Structured into three distinct geographic regions: the arid desert coastal strip (Costa), the snowcapped Andean cordillera (Sierra), and the vast tropical Amazon rainforest basin (Selva), which covers over 60% of the country.',
      es: 'Dividido en tres regiones naturales: la árida costa desértica sobre el Pacífico, la imponente cordillera andina (Sierra) y la vasta llanura amazónica (Selva) que ocupa el 60% del territorio.'
    },
    landforms: [
      {
        id: 'pe-peak-huascaran',
        type: 'peak',
        name_en: 'Huascarán',
        name_es: 'Huascarán',
        coords: [-9.1239, -77.6042],
        elevation_m: 6768,
        description_en: 'Highest mountain in Peru and the highest tropical peak in the world, in the Cordillera Blanca.',
        description_es: 'Punto más alto de Perú y la cumbre tropical más elevada del mundo (6.768m), en la Cordillera Blanca.'
      },
      {
        id: 'pe-canyon-colca',
        type: 'valley',
        name_en: 'Colca Canyon',
        name_es: 'Cañón del Colca',
        coords: [-15.6033, -71.9056],
        elevation_m: 3270,
        description_en: 'One of the deepest canyons in the world (3,270m), more than twice as deep as the Grand Canyon.',
        description_es: 'Uno de los cañones más profundos de la Tierra (3.270m), famoso por el vuelo del cóndor andino.'
      },
      {
        id: 'pe-river-ucayali',
        type: 'river',
        name_en: 'Ucayali River',
        name_es: 'Río Ucayali',
        coords: [-4.4633, -73.45],
        length_km: 1771,
        description_en: 'Major Amazon tributary that joins the Marañón River to officially form the Amazon River.',
        description_es: 'Gran afluente que confluye con el Marañón para dar nacimiento formal al río Amazonas.'
      }
    ],
    interesting_fact: {
      en: 'The Amazon River is born in Peru from glacial meltwaters on Mount Mismi in the southern Peruvian Andes!',
      es: '¡El río Amazonas nace formalmente en territorio peruano a partir de los deshielos glaciares del Nevado Mismi en Arequipa!'
    },
    teks_alignment: ['TEKS 5.6A: Three geographic regions of Peru (Costa, Sierra, Selva)', 'TEKS 6.6B: Mining extraction and ancient Inca terrace agriculture']
  },

  // =========================================================================
  // ECUADOR (South America)
  // =========================================================================
  {
    id: 'ECU',
    iso2: 'ec',
    iso3: 'ECU',
    name_en: 'Ecuador',
    name_es: 'Ecuador',
    continent: 'South America',
    continent_es: 'América del Sur',
    capital_en: 'Quito',
    capital_es: 'Quito',
    capital_coords: [-0.1807, -78.4678],
    center_coords: [-1.8312, -78.1834],
    zoom_level: 6,
    population: '18,200,000',
    area_sqkm: '283,561 km²',
    gdp_billion: 118,
    main_exports: {
      en: ['Crude Petroleum ($11B)', 'Shrimp & Prawns ($8B)', 'Bananas ($3.5B)', 'Fish & Canned Tuna ($1.5B)', 'Cut Flowers & Roses ($1B)'],
      es: ['Petróleo crudo ($11B)', 'Camarones y langostinos ($8B)', 'Plátanos y banano ($3.5B)', 'Atún y pescado ($1.5B)', 'Rosas y flores ($1B)'],
      total_val_billion: 32,
    },
    main_imports: {
      en: ['Refined Petroleum ($6B)', 'Cars & Delivery Trucks ($2B)', 'Medicaments ($1B)', 'Soybean Meal ($800M)'],
      es: ['Petróleo refinado ($6B)', 'Autos y camiones ($2B)', 'Medicamentos ($1B)', 'Harina de soya ($800M)'],
      total_val_billion: 28,
    },
    natural_wealth: {
      en: ['Amazonian oil reserves in the Oriente basin', 'Volcanic soils yielding world-class cocoa and roses', 'Galápagos Islands marine and terrestrial biodiversity', 'Pacific mangrove and coastal shrimp aquaculture'],
      es: ['Reservas petroleras en la cuenca amazónica del Oriente', 'Suelos volcánicos ideales para cacao fino de aroma y rosas', 'Biodiversidad única en el archipiélago de Galápagos', 'Acuicultura de camarón en estuarios y manglares'],
    },
    physical_geography_summary: {
      en: 'Crossed precisely by the Equator line, Ecuador features the Pacific coastal plain (Costa), the central volcanic Andean highlands (Sierra) with active snowcapped stratovolcanoes, the Amazon rainforest (Oriente), and the isolated volcanic Galápagos archipelago.',
      es: 'Atravesado por la línea ecuatorial, Ecuador cuenta con la llanura costera del Pacífico, el callejón interandino flanqueado por colosales volcanes activos, la selva amazónica y las Islas Galápagos.'
    },
    landforms: [
      {
        id: 'ec-volcano-chimborazo',
        type: 'volcano',
        name_en: 'Mount Chimborazo',
        name_es: 'Volcán Chimborazo',
        coords: [-1.4692, -78.8175],
        elevation_m: 6263,
        description_en: 'Extinct stratovolcano whose summit is the closest point on Earth’s surface to the Sun and outer space.',
        description_es: 'Punto de la superficie terrestre más cercano al Sol y al espacio exterior debido al abultamiento ecuatorial (6.263m).'
      },
      {
        id: 'ec-volcano-cotopaxi',
        type: 'volcano',
        name_en: 'Cotopaxi',
        name_es: 'Cotopaxi',
        coords: [-0.6806, -78.4378],
        elevation_m: 5897,
        description_en: 'One of the world’s highest active volcanoes, famous for its nearly symmetrical snow-covered cone.',
        description_es: 'Uno de los volcanes activos más altos del mundo (5.897m), con cono simétrico coronado de nieve.'
      },
      {
        id: 'ec-islands-galapagos',
        type: 'archipelago',
        name_en: 'Galápagos Islands',
        name_es: 'Islas Galápagos',
        coords: [-0.9538, -90.9656],
        description_en: 'Volcanic archipelago 1,000 km offshore that inspired Charles Darwin’s theory of evolution by natural selection.',
        description_es: 'Archipiélago volcánico que inspiró a Charles Darwin en la teoría de la evolución por selección natural.'
      }
    ],
    interesting_fact: {
      en: 'Because the Earth bulges at the Equator, the summit of Mount Chimborazo is further from the center of the Earth (6,384.4 km) than the summit of Mount Everest!',
      es: '¡Debido al ensanchamiento ecuatorial de la Tierra, la cima del Chimborazo está más lejos del centro del planeta que la cima del Monte Everest!'
    },
    teks_alignment: ['TEKS 5.7A: Plate tectonics and volcanic arcs in the Andes', 'TEKS 6.4A: Equatorial climate zones and biodiversity']
  },

  // =========================================================================
  // GUATEMALA (North / Central America)
  // =========================================================================
  {
    id: 'GTM',
    iso2: 'gt',
    iso3: 'GTM',
    name_en: 'Guatemala',
    name_es: 'Guatemala',
    continent: 'North America',
    continent_es: 'América del Norte',
    capital_en: 'Guatemala City',
    capital_es: 'Ciudad de Guatemala',
    capital_coords: [14.6349, -90.5069],
    center_coords: [15.7835, -90.2308],
    zoom_level: 6,
    population: '18,400,000',
    area_sqkm: '108,889 km²',
    gdp_billion: 102,
    main_exports: {
      en: ['Coffee ($1.2B)', 'Bananas ($1.1B)', 'Palm Oil ($850M)', 'Raw Sugar ($780M)', 'Knit Apparel ($1.8B)'],
      es: ['Café arábica ($1.2B)', 'Banano ($1.1B)', 'Aceite de palma ($850M)', 'Azúcar cruda ($780M)', 'Confecciones y textiles ($1.8B)'],
      total_val_billion: 16,
    },
    main_imports: {
      en: ['Refined Petroleum ($4B)', 'Cars & Motorcycles ($2B)', 'Broadcasting Equipment ($1B)', 'Medicaments ($900M)'],
      es: ['Petróleo refinado ($4B)', 'Autos y motocicletas ($2B)', 'Equipos de transmisión ($1B)', 'Medicamentos ($900M)'],
      total_val_billion: 30,
    },
    natural_wealth: {
      en: ['Volcanic highland soils producing renowned Antigua coffee', 'Maya Biosphere Reserve rainforest in Petén', 'Nickel deposits around Lake Izabal', 'Geothermal and hydroelectric river basins'],
      es: ['Suelos volcánicos ideales para café de Antigua', 'Reserva de la Biosfera Maya en el Petén', 'Depósitos de níquel en el Lago de Izabal', 'Potencial geotérmico e hidroeléctrico'],
    },
    physical_geography_summary: {
      en: 'The most populous country in Central America, dominated by the Sierra Madre volcanic cordillera, a narrow Pacific coastal plain, and the extensive tropical lowland limestone karst plateau of Petén.',
      es: 'El país más poblado de América Central, dominado por la cordillera volcánica de la Sierra Madre, la estrecha planicie del Pacífico y las densas selvas cársticas del Petén.'
    },
    landforms: [
      {
        id: 'gt-volcano-tajumulco',
        type: 'volcano',
        name_en: 'Volcán Tajumulco',
        name_es: 'Volcán Tajumulco',
        coords: [15.0444, -91.9036],
        elevation_m: 4220,
        description_en: 'Highest peak and highest volcano in Central America, in the department of San Marcos.',
        description_es: 'El punto más alto y volcán más elevado de toda América Central (4.220m).'
      },
      {
        id: 'gt-lake-atitlan',
        type: 'lake',
        name_en: 'Lake Atitlán',
        name_es: 'Lago de Atitlán',
        coords: [14.7, -91.2],
        elevation_m: 1562,
        description_en: 'Deep volcanic caldera lake enclosed by three conical volcanoes (San Pedro, Tolimán, and Atitlán).',
        description_es: 'Lago en caldera volcánica rodeado por tres volcanes cónicos y aldeas mayas tradicionales.'
      }
    ],
    interesting_fact: {
      en: 'Guatemala is home to Tikal, one of the largest archaeological complexes of the ancient Maya civilization, concealed beneath dense tropical rainforest.',
      es: '¡Guatemala alberga Tikal, una de las mayores urbes de la civilización maya clásica, oculta bajo la densa selva tropical del Petén!'
    },
    teks_alignment: ['TEKS 5.6A: Volcanic landforms in Central America', 'TEKS 6.4B: Ancient Maya civilizational adaptation to karst landscapes']
  },

  // =========================================================================
  // CUBA (North / Caribbean)
  // =========================================================================
  {
    id: 'CUB',
    iso2: 'cu',
    iso3: 'CUB',
    name_en: 'Cuba',
    name_es: 'Cuba',
    continent: 'North America',
    continent_es: 'América del Norte',
    capital_en: 'Havana',
    capital_es: 'La Habana',
    capital_coords: [23.1136, -82.3666],
    center_coords: [21.5218, -77.7812],
    zoom_level: 6,
    population: '11,000,000',
    area_sqkm: '109,884 km²',
    gdp_billion: 107,
    main_exports: {
      en: ['Nickel & Cobalt ($750M)', 'Rolled Tobacco & Cigars ($300M)', 'Raw Sugar ($200M)', 'Medical Services & Vaccines ($1.2B)', 'Rum ($120M)'],
      es: ['Níquel y cobalto ($750M)', 'Tabaco y puros habanos ($300M)', 'Azúcar cruda ($200M)', 'Servicios médicos y vacunas ($1.2B)', 'Ron ($120M)'],
      total_val_billion: 3.5,
    },
    main_imports: {
      en: ['Poultry Meat ($400M)', 'Wheat & Corn ($350M)', 'Refined Petroleum & Crude ($1.5B)', 'Milk Powder ($180M)'],
      es: ['Carne de ave ($400M)', 'Trigo y maíz ($350M)', 'Petróleo crudo y refinado ($1.5B)', 'Leche en polvo ($180M)'],
      total_val_billion: 9.8,
    },
    natural_wealth: {
      en: ['World’s fifth largest nickel and cobalt reserves (Moa bay)', 'Fertile red clay soils in Vuelta Abajo for wrapper tobacco', 'Zapata Swamp wetland ecosystem', 'Over 4,000 cays and coral barrier reefs'],
      es: ['Quinta mayor reserva mundial de níquel y cobalto (Moa)', 'Suelos rojos en Vuelta Abajo para tabaco de capa', 'Humedal de la Ciénaga de Zapata', 'Más de 4.000 cayos e islotes con barreras coralinas'],
    },
    physical_geography_summary: {
      en: 'The largest island in the Caribbean, situated at the entrance of the Gulf of Mexico. Characterized by rolling fertile plains, karst mogote formations in Viñales, and the rugged Sierra Maestra range along the southeast coast.',
      es: 'La isla más grande del Caribe, ubicada en la entrada del Golfo de México. Combina llanuras fértiles, valles con mogotes cársticos en Viñales y la Sierra Maestra al sureste.'
    },
    landforms: [
      {
        id: 'cu-peak-turquino',
        type: 'peak',
        name_en: 'Pico Turquino',
        name_es: 'Pico Turquino',
        coords: [19.9889, -76.8361],
        elevation_m: 1974,
        description_en: 'Highest peak in Cuba, situated in the forested Sierra Maestra mountain range.',
        description_es: 'El punto más alto de Cuba (1.974m), en la cordillera de la Sierra Maestra.'
      },
      {
        id: 'cu-valley-vinales',
        type: 'valley',
        name_en: 'Viñales Valley',
        name_es: 'Valle de Viñales',
        coords: [22.6167, -83.7167],
        description_en: 'Karst depression famous for towering limestone steep-sided hills called mogotes.',
        description_es: 'Depresión cárstica famosa por sus colinas de caliza con laderas verticales llamadas mogotes.'
      }
    ],
    interesting_fact: {
      en: 'Cuba is the largest and most populous island in the entire Caribbean archipelago and hosts the world’s smallest bird: the Bee Hummingbird (Zunzuncito), measuring just 5 cm long!',
      es: '¡Cuba es la isla más grande del Caribe y es el hogar del ave más pequeña del mundo: el colibrí zunzuncito, que mide apenas 5 centímetros!'
    },
    teks_alignment: ['TEKS 5.6A: Island geography and karst topography in the Caribbean', 'TEKS 6.6B: Nickel extraction and tropical agriculture']
  },

  // =========================================================================
  // PANAMA (North / Central America)
  // =========================================================================
  {
    id: 'PAN',
    iso2: 'pa',
    iso3: 'PAN',
    name_en: 'Panama',
    name_es: 'Panamá',
    continent: 'North America',
    continent_es: 'América del Norte',
    capital_en: 'Panama City',
    capital_es: 'Ciudad de Panamá',
    capital_coords: [8.9824, -79.5199],
    center_coords: [8.5379, -80.7821],
    zoom_level: 6,
    population: '4,450,000',
    area_sqkm: '75,417 km²',
    gdp_billion: 82,
    main_exports: {
      en: ['Copper Ores ($2.8B)', 'Bananas ($150M)', 'Packaged Medicaments ($120M)', 'Scrap Metal ($90M)', 'Panama Canal Maritime Transit ($4.8B)'],
      es: ['Minerales de cobre ($2.8B)', 'Banano ($150M)', 'Medicamentos ($120M)', 'Chatarra de metales ($90M)', 'Peajes de tránsito del Canal de Panamá ($4.8B)'],
      total_val_billion: 8.5,
    },
    main_imports: {
      en: ['Refined Petroleum ($3.5B)', 'Cargo & Passenger Vessels ($2B)', 'Cars ($1.2B)', 'Broadcasting Equipment ($900M)'],
      es: ['Petróleo refinado ($3.5B)', 'Barcos y embarcaciones ($2B)', 'Autos ($1.2B)', 'Equipos de transmisión ($900M)'],
      total_val_billion: 18,
    },
    natural_wealth: {
      en: ['Strategic geographic isthmus linking the Atlantic and Pacific oceans', 'Cobre Panamá porphyry copper deposit', 'Abundant rainfall feeding Lake Gatun for canal locks', 'Darién Gap virgin tropical rainforest'],
      es: ['Istmo geográfico estratégico que une el Atlántico y el Pacífico', 'Yacimiento de cobre de Cobre Panamá', 'Régimen de lluvias que alimenta el Lago Gatún para el Canal', 'Selva virgen del Tapón del Darién'],
    },
    physical_geography_summary: {
      en: 'A narrow, sinuous S-shaped isthmus uniting North and South America and separating the Pacific Ocean from the Caribbean Sea. Dominated by a central spine of rugged cordillera hills flanked by tropical coastal plains.',
      es: 'Un estrecho istmo en forma de «S» que une América Central con América del Sur y separa el Atlántico del Pacífico, con relieve de colinas centrales y llanuras costeras tropicales.'
    },
    landforms: [
      {
        id: 'pa-isthmus-canal',
        type: 'isthmus',
        name_en: 'Isthmus of Panama & Canal',
        name_es: 'Istmo y Canal de Panamá',
        coords: [9.1, -79.7],
        length_km: 82,
        description_en: 'World-famous 82 km interoceanic waterway utilizing gravity-fed locks and Lake Gatun.',
        description_es: 'Vía fluvial interoceánica de 82 km con esclusas que conecta el Océano Atlántico y el Pacífico.'
      },
      {
        id: 'pa-volcano-baru',
        type: 'volcano',
        name_en: 'Volcán Barú',
        name_es: 'Volcán Barú',
        coords: [8.8078, -82.5428],
        elevation_m: 3474,
        description_en: 'Highest peak in Panama; on clear days, both the Pacific Ocean and Caribbean Sea can be seen from its summit.',
        description_es: 'Punto más alto de Panamá (3.474m); desde su cumbre se pueden ver ambos océanos a la vez.'
      }
    ],
    interesting_fact: {
      en: 'Panama is the only place in the world where you can watch the sunrise over the Pacific Ocean and the sunset over the Atlantic Ocean from the same spot, due to the curve of the isthmus!',
      es: '¡Debido a la curvatura del istmo, Panamá es el único lugar del mundo donde se puede ver el amanecer sobre el Pacífico y el atardecer sobre el Atlántico!'
    },
    teks_alignment: ['TEKS 6.8A: Global strategic shipping choke points (Panama Canal)', 'TEKS 6.4B: Isthmian bridges and biological interchanges']
  },

  // =========================================================================
  // COSTA RICA (North / Central America)
  // =========================================================================
  {
    id: 'CRI',
    iso2: 'cr',
    iso3: 'CRI',
    name_en: 'Costa Rica',
    name_es: 'Costa Rica',
    continent: 'North America',
    continent_es: 'América del Norte',
    capital_en: 'San José',
    capital_es: 'San José',
    capital_coords: [9.9281, -84.0907],
    center_coords: [9.7489, -83.7534],
    zoom_level: 7,
    population: '5,200,000',
    area_sqkm: '51,100 km²',
    gdp_billion: 86,
    main_exports: {
      en: ['Medical Instruments & Devices ($5.5B)', 'Bananas ($1.1B)', 'Pineapples ($1B)', 'Coffee ($350M)', 'Integrated Circuits ($600M)'],
      es: ['Dispositivos médicos e instrumental ($5.5B)', 'Banano ($1.1B)', 'Piña tropical ($1B)', 'Café fino ($350M)', 'Circuitos integrados ($600M)'],
      total_val_billion: 18,
    },
    main_imports: {
      en: ['Refined Petroleum ($2.2B)', 'Broadcasting Equipment ($1.2B)', 'Cars ($1.1B)', 'Plastics & Medicaments ($1B)'],
      es: ['Petróleo refinado ($2.2B)', 'Equipos de transmisión ($1.2B)', 'Autos ($1.1B)', 'Plásticos y medicamentos ($1B)'],
      total_val_billion: 22,
    },
    natural_wealth: {
      en: ['Over 28% of territory preserved in National Parks and biological reserves', 'Hydroelectric, geothermal, and wind clean energy providing 99%+ of electricity', 'Rich volcanic ash soils in the Central Valley', 'Cocos Island marine sanctuary'],
      es: ['Más del 28% del territorio protegido en parques nacionales y reservas', 'Matriz eléctrica 99%+ limpia (hidroeléctrica, geotérmica, eólica)', 'Suelos de ceniza volcánica fértil en el Valle Central', 'Santuario marino de la Isla del Coco'],
    },
    physical_geography_summary: {
      en: 'A biodiversity hotspot bounded by the Caribbean and Pacific, punctuated by four volcanic cordilleras (Guanacaste, Tilarán, Central, and Talamanca) that run down the spine of the country.',
      es: 'Puente biológico entre las Américas con costas en el Caribe y el Pacífico, atravesado por cuatro cordilleras volcánicas y valles meseteños templados.'
    },
    landforms: [
      {
        id: 'cr-volcano-arenal',
        type: 'volcano',
        name_en: 'Arenal Volcano',
        name_es: 'Volcán Arenal',
        coords: [10.4633, -84.7033],
        elevation_m: 1670,
        description_en: 'Classic conical stratovolcano adjacent to Lake Arenal, producing geothermal energy.',
        description_es: 'Estratovolcán cónico emblemático junto al lago Arenal, fuente de energía geotérmica.'
      },
      {
        id: 'cr-peak-chirripo',
        type: 'peak',
        name_en: 'Cerro Chirripó',
        name_es: 'Cerro Chirripó',
        coords: [9.4842, -83.4886],
        elevation_m: 3820,
        description_en: 'Highest peak in Costa Rica, in the Cordillera de Talamanca, bearing glacial cirques and tarns.',
        description_es: 'La montaña más alta de Costa Rica (3.820m) en la Cordillera de Talamanca, con lagunas de origen glaciar.'
      }
    ],
    interesting_fact: {
      en: 'Costa Rica produces over 99% of its total domestic electricity from renewable resources (hydro, geothermal, wind, and solar) and abolished its military in 1948!',
      es: '¡Costa Rica genera más del 99% de su electricidad con fuentes renovables (agua, volcanes, viento y sol) y abolió su ejército en 1948!'
    },
    teks_alignment: ['TEKS 5.7A: Ecotourism and tropical rainforest conservation', 'TEKS 6.5B: Sustainable renewable energy management']
  },

  // =========================================================================
  // DOMINICAN REPUBLIC (North / Caribbean)
  // =========================================================================
  {
    id: 'DOM',
    iso2: 'do',
    iso3: 'DOM',
    name_en: 'Dominican Republic',
    name_es: 'República Dominicana',
    continent: 'North America',
    continent_es: 'América del Norte',
    capital_en: 'Santo Domingo',
    capital_es: 'Santo Domingo',
    capital_coords: [18.4861, -69.9312],
    center_coords: [18.7357, -70.1627],
    zoom_level: 7,
    population: '11,300,000',
    area_sqkm: '48,670 km²',
    gdp_billion: 121,
    main_exports: {
      en: ['Gold ($1.4B)', 'Medical Instruments ($2B)', 'Cigars & Tobacco ($1.2B)', 'Electrical Equipment ($1.1B)', 'Ferronickel ($500M)'],
      es: ['Oro de Pueblo Viejo ($1.4B)', 'Instrumental médico ($2B)', 'Cigarros y tabaco ($1.2B)', 'Aparatos eléctricos ($1.1B)', 'Ferroníquel ($500M)'],
      total_val_billion: 14,
    },
    main_imports: {
      en: ['Refined Petroleum ($3.5B)', 'Cars & Vehicles ($2B)', 'Natural Gas & Coal ($1.2B)', 'Medicaments ($900M)'],
      es: ['Petróleo refinado ($3.5B)', 'Autos y vehículos ($2B)', 'Gas natural y carbón ($1.2B)', 'Medicamentos ($900M)'],
      total_val_billion: 26,
    },
    natural_wealth: {
      en: ['Pueblo Viejo gold mine (one of the largest gold mines in the Americas)', 'Fertile Cibao Valley agricultural belt', 'Nickel deposits in Bonao', 'Extensive white-sand barrier beaches and coral reefs'],
      es: ['Mina de oro de Pueblo Viejo (una de las mayores de América)', 'Suelos fértiles del Valle del Cibao', 'Yacimientos de níquel en Bonao', 'Extensas playas de arena blanca y arrecifes coralinos'],
    },
    physical_geography_summary: {
      en: 'Occupies the eastern two-thirds of the island of Hispaniola. Features the highest mountain range in the Caribbean (Cordillera Central) and both the highest and lowest elevations in the entire West Indies.',
      es: 'Ocupa las dos terceras partes orientales de la isla La Española. Posee la cordillera más alta de las Antillas (Cordillera Central) y tanto la cumbre más alta como la depresión más profunda del Caribe.'
    },
    landforms: [
      {
        id: 'do-peak-duarte',
        type: 'peak',
        name_en: 'Pico Duarte',
        name_es: 'Pico Duarte',
        coords: [19.0236, -70.9997],
        elevation_m: 3098,
        description_en: 'Highest peak in the Caribbean and West Indies, located in the Cordillera Central.',
        description_es: 'La cumbre más alta de todas las Antillas y el Caribe (3.098m), en la Cordillera Central.'
      },
      {
        id: 'do-lake-enriquillo',
        type: 'lake',
        name_en: 'Lake Enriquillo',
        name_es: 'Lago Enriquillo',
        coords: [18.5, -71.6],
        elevation_m: -46,
        description_en: 'Hypersaline lake and the lowest elevation in the Caribbean (-46m), home to American crocodiles.',
        description_es: 'Lago hipersalino y el punto más bajo del Caribe (-46m bajo el nivel del mar), hogar de cocodrilos americanos.'
      }
    ],
    interesting_fact: {
      en: 'Santo Domingo was founded in 1496 and is the oldest continuously inhabited European-established settlement in the Americas, hosting the first cathedral, hospital, and university in the New World.',
      es: '¡Santo Domingo, fundada en 1496, es la ciudad europea habitada continuamente más antigua de América, con la primera catedral, hospital y universidad del Nuevo Mundo!'
    },
    teks_alignment: ['TEKS 5.6A: Physical elevation extremes in the Caribbean basin', 'TEKS 6.6B: Mining and manufacturing free-trade zones']
  },

  // =========================================================================
  // URUGUAY (South America)
  // =========================================================================
  {
    id: 'URY',
    iso2: 'uy',
    iso3: 'URY',
    name_en: 'Uruguay',
    name_es: 'Uruguay',
    continent: 'South America',
    continent_es: 'América del Sur',
    capital_en: 'Montevideo',
    capital_es: 'Montevideo',
    capital_coords: [-34.9011, -56.1645],
    center_coords: [-32.5228, -55.7658],
    zoom_level: 6,
    population: '3,450,000',
    area_sqkm: '176,215 km²',
    gdp_billion: 77,
    main_exports: {
      en: ['Beef & Meat ($2.6B)', 'Chemical Wood Pulp ($2.4B)', 'Soybeans ($1.2B)', 'Dairy Products & Cheese ($900M)', 'Milled Rice ($600M)'],
      es: ['Carne bovina ($2.6B)', 'Celulosa de madera ($2.4B)', 'Soya ($1.2B)', 'Lácteos y quesos ($900M)', 'Arroz descascarillado ($600M)'],
      total_val_billion: 13.5,
    },
    main_imports: {
      en: ['Crude Petroleum ($1.5B)', 'Cars & Delivery Trucks ($1.2B)', 'Fertilizers ($800M)', 'Broadcasting Equipment ($500M)'],
      es: ['Petróleo crudo ($1.5B)', 'Autos y camiones ($1.2B)', 'Abonos y fertilizantes ($800M)', 'Equipos de transmisión ($500M)'],
      total_val_billion: 12,
    },
    natural_wealth: {
      en: ['Vast temperate Pampas grasslands ideal for pasture livestock', 'Guaraní Aquifer subterranean freshwater reservoir', 'Río de la Plata deepwater estuary ports', 'High wind and solar penetration (95%+ clean electricity)'],
      es: ['Pastizales templados de pradera ideales para ganadería ovina y bovina', 'Acuífero Guaraní, una de las mayores reservas subterráneas de agua dulce', 'Puerto natural de aguas profundas en el Río de la Plata', 'Matriz eléctrica 95%+ basada en viento, sol e hidroelectricidad'],
    },
    physical_geography_summary: {
      en: 'A transition zone between the Brazilian Highlands and the Argentine Pampas. Dominated by gentle rolling plains (cuchillas) and coastal lagoons along the Atlantic Ocean and the Río de la Plata.',
      es: 'Zona de transición entre las mesetas brasileñas y las llanuras pampeanas. Predominan suaves colinas onduladas (cuchillas) y lagunas costeras sobre el Río de la Plata y el Atlántico.'
    },
    landforms: [
      {
        id: 'uy-peak-catedral',
        type: 'peak',
        name_en: 'Cerro Catedral',
        name_es: 'Cerro Catedral',
        coords: [-34.3817, -54.6658],
        elevation_m: 514,
        description_en: 'Highest point in Uruguay, situated in the Cuchilla Grande range in Maldonado.',
        description_es: 'Punto más alto de Uruguay (514m) en la Cuchilla Grande en Maldonado.'
      },
      {
        id: 'uy-river-plata',
        type: 'river',
        name_en: 'Río de la Plata',
        name_es: 'Río de la Plata',
        coords: [-35.0, -56.0],
        length_km: 290,
        description_en: 'Widest river estuary in the world (up to 220 km wide), shared between Uruguay and Argentina.',
        description_es: 'El estuario fluvial más ancho del planeta (hasta 220 km de ancho), compartido con Argentina.'
      }
    ],
    interesting_fact: {
      en: 'Uruguay has nearly four head of cattle for every human resident—the highest cattle-to-person ratio in the world!',
      es: '¡Uruguay tiene casi 4 cabezas de ganado bovino por cada habitante humano, la mayor proporción de reses por persona del planeta!'
    },
    teks_alignment: ['TEKS 6.4B: Agriculture and ranching in temperate southern grasslands', 'TEKS 6.5B: Transition to 95%+ renewable energy grid']
  },

  // =========================================================================
  // PARAGUAY (South America - Landlocked)
  // =========================================================================
  {
    id: 'PRY',
    iso2: 'py',
    iso3: 'PRY',
    name_en: 'Paraguay',
    name_es: 'Paraguay',
    continent: 'South America',
    continent_es: 'América del Sur',
    capital_en: 'Asunción',
    capital_es: 'Asunción',
    capital_coords: [-25.2637, -57.5759],
    center_coords: [-23.4425, -58.4438],
    zoom_level: 6,
    population: '7,400,000',
    area_sqkm: '406,752 km²',
    gdp_billion: 44,
    main_exports: {
      en: ['Electricity ($1.8B)', 'Soybeans & Soybean Meal ($3.2B)', 'Frozen Bovine Meat ($1.6B)', 'Corn ($600M)', 'Insulated Wiring ($300M)'],
      es: ['Electricidad hidroeléctrica ($1.8B)', 'Soya y harina de soya ($3.2B)', 'Carne bovina congelada ($1.6B)', 'Maíz ($600M)', 'Cables aislados para autos ($300M)'],
      total_val_billion: 11.5,
    },
    main_imports: {
      en: ['Refined Petroleum ($2B)', 'Broadcasting Equipment & Phones ($1.5B)', 'Cars & Delivery Trucks ($1.2B)', 'Fertilizers & Pesticides ($800M)'],
      es: ['Petróleo refinado ($2B)', 'Equipos de transmisión y celulares ($1.5B)', 'Autos y camiones ($1.2B)', 'Abonos y plaguicidas ($800M)'],
      total_val_billion: 14,
    },
    natural_wealth: {
      en: ['Itaipu and Yacyretá mega-dams (world-leading clean hydroelectric exporter)', 'Guaraní Aquifer freshwater reserves', 'Vast cattle pastures in the Gran Chaco', 'Paraguay-Paraná river waterway for ocean transport'],
      es: ['Megacentrales de Itaipú y Yacyretá (líder mundial en exportación de hidroelectricidad)', 'Acuífero Guaraní', 'Pastizales del Chaco para ganadería', 'Hidrovía Paraguay-Paraná con acceso fluvial al Atlántico'],
    },
    physical_geography_summary: {
      en: 'A landlocked country divided into two distinct regions by the Paraguay River: the arid and semi-arid scrub forest plains of the Gran Chaco to the west, and the humid, fertile forested lowlands to the east.',
      es: 'País mediterráneo dividido en dos regiones por el río Paraguay: al oeste el extenso Chaco árido y espinoso, y al este la región oriental fértil, boscosa y húmeda.'
    },
    landforms: [
      {
        id: 'py-river-parana',
        type: 'river',
        name_en: 'Paraná River & Itaipu Dam',
        name_es: 'Río Paraná y Represa de Itaipú',
        coords: [-25.4083, -54.5889],
        length_km: 4880,
        description_en: 'Mighty river hosting Itaipu Dam, one of the largest hydroelectric producers in history.',
        description_es: 'Caudaloso río que alberga la Represa de Itaipú, una de las mayores productoras hidroeléctricas del planeta.'
      },
      {
        id: 'py-peak-pero',
        type: 'peak',
        name_en: 'Cerro Peró (Cerro Tres Kandú)',
        name_es: 'Cerro Tres Kandú',
        coords: [-25.9, -56.1667],
        elevation_m: 842,
        description_en: 'Highest peak in Paraguay, located in the Cordillera del Ybytyruzú.',
        description_es: 'El punto más alto de Paraguay (842m), en la Cordillera del Ybytyruzú.'
      }
    ],
    interesting_fact: {
      en: 'Paraguay generates 100% of its domestic electricity from clean hydropower and exports over 70% of it, making it one of the largest net electricity exporters on the planet.',
      es: '¡Paraguay genera el 100% de su electricidad con energía hidroeléctrica limpia y exporta más del 70% a sus países vecinos!'
    },
    teks_alignment: ['TEKS 6.3A: Fluvial trade solutions for landlocked nations', 'TEKS 6.6B: Binational hydroelectric dam infrastructure (Itaipu)']
  },

  // =========================================================================
  // HONDURAS (North / Central America)
  // =========================================================================
  {
    id: 'HND',
    iso2: 'hn',
    iso3: 'HND',
    name_en: 'Honduras',
    name_es: 'Honduras',
    continent: 'North America',
    continent_es: 'América del Norte',
    capital_en: 'Tegucigalpa',
    capital_es: 'Tegucigalpa',
    capital_coords: [14.0723, -87.1921],
    center_coords: [15.2, -86.2419],
    zoom_level: 6,
    population: '10,400,000',
    area_sqkm: '112,492 km²',
    gdp_billion: 34,
    main_exports: {
      en: ['Knit Apparel & T-shirts ($3B)', 'Coffee ($1.4B)', 'Insulated Wiring ($800M)', 'Palm Oil ($500M)', 'Bananas ($450M)'],
      es: ['Prendas de vestir y maquila ($3B)', 'Café de altura ($1.4B)', 'Arneses eléctricos para autos ($800M)', 'Aceite de palma ($500M)', 'Banano ($450M)'],
      total_val_billion: 12.5,
    },
    main_imports: {
      en: ['Refined Petroleum ($2.5B)', 'Cotton Yarn & Textiles ($1.5B)', 'Cars & Trucks ($900M)', 'Medicaments ($600M)'],
      es: ['Petróleo refinado ($2.5B)', 'Hilo de algodón y tejidos ($1.5B)', 'Autos y camiones ($900M)', 'Medicamentos ($600M)'],
      total_val_billion: 16.8,
    },
    natural_wealth: {
      en: ['Rich mountain soils for Arabica coffee cultivation', 'Bay Islands Mesoamerican coral reef systems', 'Mochito silver, zinc, and lead mine', 'Extensive Caribbean coastal pinelands and mahogany forests'],
      es: ['Suelos montañosos fértiles para café arábica', 'Arrecifes de coral en las Islas de la Bahía (Roatán)', 'Mina polimetálica de El Mochito (plata, zinc, plomo)', 'Bosques de pino y caoba en la costa caribeña'],
    },
    physical_geography_summary: {
      en: 'Roughly 80% of Honduras is mountainous terrain. Features a broad northern Caribbean coastline, a narrow opening to the Pacific via the Gulf of Fonseca, and the massive Mosquitia wilderness rainforest in the east.',
      es: 'Cerca del 80% del territorio hondureño es montañoso. Cuenta con una amplia costa caribeña al norte, una salida al Pacífico en el Golfo de Fonseca y la densa selva de La Mosquitia al oriente.'
    },
    landforms: [
      {
        id: 'hn-peak-minas',
        type: 'peak',
        name_en: 'Cerro Las Minas (Celaque)',
        name_es: 'Cerro Las Minas (Celaque)',
        coords: [14.5333, -88.6833],
        elevation_m: 2870,
        description_en: 'Highest mountain in Honduras, enveloped in cloud forest within Montaña de Celaque National Park.',
        description_es: 'El punto más alto de Honduras (2.870m), rodeado de bosque nuboso en el Parque Nacional Celaque.'
      },
      {
        id: 'hn-bay-islands',
        type: 'archipelago',
        name_en: 'Bay Islands (Roatán & Utila)',
        name_es: 'Islas de la Bahía (Roatán y Útila)',
        coords: [16.35, -86.5],
        description_en: 'Caribbean island chain fringed by the Mesoamerican Barrier Reef, famous for whale shark migration.',
        description_es: 'Archipiélago caribeño rodeado por la segunda mayor barrera de coral del mundo.'
      }
    ],
    interesting_fact: {
      en: 'The Mayan ruins of Copán in western Honduras feature the Hieroglyphic Stairway, preserving the longest known Maya hieroglyphic text carved in stone (over 1,800 glyphs)!',
      es: '¡Las ruinas mayas de Copán conservan la Escalinata de los Jeroglíficos, el texto glífico maya tallado en piedra más extenso que se conoce (más de 1.800 jeroglíficos)!'
    },
    teks_alignment: ['TEKS 5.6A: Central American mountain geography', 'TEKS 6.6B: Agro-industrial coffee and textile manufacturing']
  },

  // =========================================================================
  // EL SALVADOR (North / Central America)
  // =========================================================================
  {
    id: 'SLV',
    iso2: 'sv',
    iso3: 'SLV',
    name_en: 'El Salvador',
    name_es: 'El Salvador',
    continent: 'North America',
    continent_es: 'América del Norte',
    capital_en: 'San Salvador',
    capital_es: 'San Salvador',
    capital_coords: [13.6929, -89.2182],
    center_coords: [13.7942, -88.8965],
    zoom_level: 7,
    population: '6,350,000',
    area_sqkm: '21,041 km²',
    gdp_billion: 34,
    main_exports: {
      en: ['Knit Apparel & T-Shirts ($2B)', 'Plastics ($450M)', 'Raw Sugar ($300M)', 'Coffee ($180M)', 'Paper Products ($250M)'],
      es: ['Prendas de vestir y maquila ($2B)', 'Artículos plásticos ($450M)', 'Azúcar cruda ($300M)', 'Café de altura ($180M)', 'Papel y cartón ($250M)'],
      total_val_billion: 7.2,
    },
    main_imports: {
      en: ['Refined Petroleum ($2.2B)', 'Fabrics & Yarns ($1B)', 'Broadcasting Equipment & Phones ($800M)', 'Medicaments ($600M)'],
      es: ['Petróleo refinado ($2.2B)', 'Telas e hilados ($1B)', 'Equipos de transmisión ($800M)', 'Medicamentos ($600M)'],
      total_val_billion: 16.5,
    },
    natural_wealth: {
      en: ['Geothermal volcanic energy generating over 25% of national electricity', 'Rich volcanic ash soils ideal for shade-grown coffee', 'Pacific coastline world-renowned for point-break surfing waves', 'Lempa River hydroelectric basin'],
      es: ['Energía geotérmica volcánica que genera más del 25% de la electricidad del país', 'Suelos de ceniza volcánica para café de sombra', 'Litoral pacífico con olas de clase mundial', 'Cuenca hidroeléctrica del río Lempa'],
    },
    physical_geography_summary: {
      en: 'The smallest and most densely populated nation in Central America, known as the "Land of Volcanoes". It is the only Central American country without a Caribbean coastline, fronting exclusively on the Pacific Ocean.',
      es: 'El país más pequeño y de mayor densidad poblacional de América Central, llamado la «Tierra de Volcanes». Es el único país centroamericano sin costa caribeña, orientado 100% al Pacífico.'
    },
    landforms: [
      {
        id: 'sv-volcano-santaana',
        type: 'volcano',
        name_en: 'Santa Ana Volcano (Ilamatepec)',
        name_es: 'Volcán de Santa Ana (Ilamatepec)',
        coords: [13.8533, -89.63],
        elevation_m: 2381,
        description_en: 'Highest volcano in El Salvador, featuring a turquoise boiling sulfuric crater lake.',
        description_es: 'El volcán más alto de El Salvador (2.381m), con una laguna sulfurosa color turquesa en su cráter.'
      },
      {
        id: 'sv-lake-coatepeque',
        type: 'lake',
        name_en: 'Lake Coatepeque',
        name_es: 'Lago de Coatepeque',
        coords: [13.87, -89.55],
        elevation_m: 745,
        description_en: 'Volcanic caldera lake whose waters periodically turn luminous turquoise due to subterranean mineral shifts.',
        description_es: 'Lago en caldera volcánica cuyas aguas cambian periódicamente a color turquesa brillante.'
      }
    ],
    interesting_fact: {
      en: 'El Salvador has over 20 active volcanoes within its compact territory, earning it the nickname "El Pulgarcito de América" (The Little Thumb of the Americas).',
      es: '¡El Salvador tiene más de 20 volcanes en su territorio compacto y es conocido cariñosamente como «El Pulgarcito de América»!'
    },
    teks_alignment: ['TEKS 5.7A: Volcanic geology and Pacific Ring of Fire', 'TEKS 6.5B: Geothermal renewable energy development']
  },

  // =========================================================================
  // NICARAGUA (North / Central America)
  // =========================================================================
  {
    id: 'NIC',
    iso2: 'ni',
    iso3: 'NIC',
    name_en: 'Nicaragua',
    name_es: 'Nicaragua',
    continent: 'North America',
    continent_es: 'América del Norte',
    capital_en: 'Managua',
    capital_es: 'Managua',
    capital_coords: [12.1149, -86.2362],
    center_coords: [12.8654, -85.2072],
    zoom_level: 6,
    population: '6,950,000',
    area_sqkm: '130,373 km²',
    gdp_billion: 17,
    main_exports: {
      en: ['Gold ($1.2B)', 'Knit Apparel ($1B)', 'Coffee ($700M)', 'Beef ($650M)', 'Cigars & Tobacco ($400M)'],
      es: ['Oro en bruto ($1.2B)', 'Prendas de vestir ($1B)', 'Café de altura ($700M)', 'Carne bovina ($650M)', 'Puros y tabaco ($400M)'],
      total_val_billion: 7.5,
    },
    main_imports: {
      en: ['Refined Petroleum ($1.5B)', 'Light Knitted Fabrics ($900M)', 'Cars & Trucks ($600M)', 'Medicaments ($400M)'],
      es: ['Petróleo refinado ($1.5B)', 'Tejidos para maquila ($900M)', 'Autos y camiones ($600M)', 'Medicamentos ($400M)'],
      total_val_billion: 11,
    },
    natural_wealth: {
      en: ['Lake Nicaragua (Cocibolca), largest freshwater lake in Central America', 'Bonanza, Siuna, and Rosita gold mining triangle', 'Geothermal energy along the Maribios volcanic chain', 'Bosawás Biosphere Reserve tropical rainforest'],
      es: ['Lago Cocibolca (Gran Lago de Nicaragua), el mayor lago de agua dulce de América Central', 'Triángulo minero de oro (Bonanza, Siuna y Rosita)', 'Energía geotérmica en la cordillera de los Maribios', 'Reserva de la Biosfera de Bosawás'],
    },
    physical_geography_summary: {
      en: 'The largest country in Central America, featuring the Pacific volcanic lowlands with large tectonic lakes (Lake Nicaragua and Lake Managua), the central rugged highlands, and the broad Caribbean Caribbean Mosquito Coast.',
      es: 'El país más grande de América Central, caracterizado por la depresión tectónica de los grandes lagos y volcanes en el Pacífico, mesetas centrales y la Costa de Mosquitos en el Caribe.'
    },
    landforms: [
      {
        id: 'ni-lake-nicaragua',
        type: 'lake',
        name_en: 'Lake Nicaragua (Cocibolca)',
        name_es: 'Lago de Nicaragua (Cocibolca)',
        coords: [11.5, -85.5],
        elevation_m: 32,
        description_en: 'Vast freshwater lake (8,264 km²) featuring volcanic islands and unique freshwater bull sharks.',
        description_es: 'El lago más grande de Centroamérica (8.264 km²), con islas volcánicas y tiburones toro adaptados a agua dulce.'
      },
      {
        id: 'ni-volcano-momotombo',
        type: 'volcano',
        name_en: 'Momotombo Volcano',
        name_es: 'Volcán Momotombo',
        coords: [12.4228, -86.54],
        elevation_m: 1297,
        description_en: 'Famous conical stratovolcano on the shores of Lake Managua powering major geothermal installations.',
        description_es: 'Estratovolcán cónico a orillas del lago de Managua que alimenta una de las principales plantas geotérmicas del país.'
      }
    ],
    interesting_fact: {
      en: 'Ometepe Island inside Lake Nicaragua is formed by two volcanoes rising straight out of the freshwater lake: Concepción (active) and Maderas (dormant)!',
      es: '¡La isla de Ometepe en medio del Gran Lago de Nicaragua está formada por dos volcanes gemelos unidos por un istmo: el Concepción (activo) y el Maderas (extinto)!'
    },
    teks_alignment: ['TEKS 5.6A: Freshwater tectonic lakes and volcanic island morphology', 'TEKS 6.6B: Gold extraction and Central American trade']
  },

  // =========================================================================
  // HAITI (North / Caribbean)
  // =========================================================================
  {
    id: 'HTI',
    iso2: 'ht',
    iso3: 'HTI',
    name_en: 'Haiti',
    name_es: 'Haití',
    continent: 'North America',
    continent_es: 'América del Norte',
    capital_en: 'Port-au-Prince',
    capital_es: 'Puerto Príncipe',
    capital_coords: [18.5944, -72.3074],
    center_coords: [18.9712, -72.2852],
    zoom_level: 7,
    population: '11,700,000',
    area_sqkm: '27,750 km²',
    gdp_billion: 21,
    main_exports: {
      en: ['Knit T-Shirts & Apparel ($1B)', 'Essential Oils & Vetiver ($35M)', 'Scrap Metal ($20M)', 'Cocoa ($12M)'],
      es: ['Prendas de vestir y camisetas ($1B)', 'Aceite esencial de vetiver ($35M)', 'Chatarra ($20M)', 'Cacao ($12M)'],
      total_val_billion: 1.2,
    },
    main_imports: {
      en: ['Rice & Wheat ($600M)', 'Refined Petroleum ($700M)', 'Cotton Fabrics ($400M)', 'Poultry Meat ($250M)'],
      es: ['Arroz y trigo ($600M)', 'Petróleo refinado ($700M)', 'Tejidos de algodón ($400M)', 'Carne de ave ($250M)'],
      total_val_billion: 4.8,
    },
    natural_wealth: {
      en: ['World’s premier producer of organic vetiver essential oil (for luxury perfume)', 'Bauxite and copper deposits in the northern massif', 'Fertile Artibonite River valley for irrigated rice farming', 'Gulf of Gonâve marine fishing grounds'],
      es: ['Mayor productor mundial de aceite esencial de vetiver para alta perfumería', 'Depósitos de bauxita y cobre en el macizo septentrional', 'Valle del río Artibonito para cultivo de arroz', 'Pesca costera en el Golfo de la Gonâve'],
    },
    physical_geography_summary: {
      en: 'Occupies the western third of Hispaniola island. Characterized by two long peninsulas extending westward into the Caribbean Sea framing the Gulf of Gonâve, dominated by rugged limestone mountain ranges.',
      es: 'Ocupa el tercio occidental de la isla La Española. Posee dos largas penínsulas que enmarcan el Golfo de la Gonâve y un relieve extremadamente montañoso de rocas calizas.'
    },
    landforms: [
      {
        id: 'ht-peak-laselle',
        type: 'peak',
        name_en: 'Pic la Selle',
        name_es: 'Pico la Selle',
        coords: [18.3606, -71.9772],
        elevation_m: 2680,
        description_en: 'Highest mountain in Haiti, located in the Chaîne de la Selle range in the southeast.',
        description_es: 'La cumbre más alta de Haití (2.680m), en la Chaîne de la Selle al sureste.'
      },
      {
        id: 'ht-river-artibonite',
        type: 'river',
        name_en: 'Artibonite River',
        name_es: 'Río Artibonito',
        coords: [19.25, -72.7833],
        length_km: 321,
        description_en: 'Longest river in the island of Hispaniola, providing irrigation for Haiti’s central agricultural valley.',
        description_es: 'El río más largo de la isla La Española (321 km), vital para el riego del arroz en el valle central.'
      }
    ],
    interesting_fact: {
      en: 'Haiti was the world’s first independent Black-led republic, winning independence in 1804 after the only successful slave revolt in human history led by Toussaint Louverture and Jean-Jacques Dessalines.',
      es: '¡Haití fue la primera república independiente liderada por afrodescendientes del mundo tras triunfar en 1804 la única rebelión de esclavos victoriosa de la historia!'
    },
    teks_alignment: ['TEKS 5.6A: Island topography and watershed deforestation', 'TEKS 6.4B: Historical revolutions and post-colonial geography']
  },

  // =========================================================================
  // JAMAICA (North / Caribbean)
  // =========================================================================
  {
    id: 'JAM',
    iso2: 'jm',
    iso3: 'JAM',
    name_en: 'Jamaica',
    name_es: 'Jamaica',
    continent: 'North America',
    continent_es: 'América del Norte',
    capital_en: 'Kingston',
    capital_es: 'Kingston',
    capital_coords: [17.9712, -76.7936],
    center_coords: [18.1096, -77.2975],
    zoom_level: 8,
    population: '2,800,000',
    area_sqkm: '10,991 km²',
    gdp_billion: 19,
    main_exports: {
      en: ['Alumina & Bauxite ($600M)', 'Refined Petroleum ($400M)', 'Rum & Spirits ($120M)', 'Blue Mountain Coffee ($35M)', 'Allspice ($20M)'],
      es: ['Alúmina y bauxita ($600M)', 'Petróleo refinado ($400M)', 'Ron y licores ($120M)', 'Café Blue Mountain ($35M)', 'Pimienta de Jamaica ($20M)'],
      total_val_billion: 1.8,
    },
    main_imports: {
      en: ['Refined Petroleum ($1.8B)', 'Cars & Trucks ($500M)', 'Food & Poultry ($400M)', 'Medicaments ($200M)'],
      es: ['Petróleo refinado ($1.8B)', 'Autos y camiones ($500M)', 'Alimentos y carne ($400M)', 'Medicamentos ($200M)'],
      total_val_billion: 7.2,
    },
    natural_wealth: {
      en: ['Vast bauxite ore reserves in central plateau red soils', 'Blue Mountains cloud-covered microclimate for rare luxury coffee', 'World-famous tropical white sand beaches (Montego Bay, Negril)', 'Cockpit Country karst biodiversity'],
      es: ['Grandes yacimientos de bauxita en suelos rojos de meseta', 'Microclima de las Blue Mountains para el exclusivo café Blue Mountain', 'Playas de arena blanca en Montego Bay y Negril', 'Topografía cárstica de Cockpit Country'],
    },
    physical_geography_summary: {
      en: 'The third largest island in the Caribbean, dominated by a rugged central limestone plateau, deep karst sinkholes in Cockpit Country, and the high Blue Mountains range in the east.',
      es: 'La tercera isla más grande del Caribe, dominada por una meseta caliza con dolinas en Cockpit Country y las elevadas montañas Blue Mountains al este.'
    },
    landforms: [
      {
        id: 'jm-peak-blue',
        type: 'peak',
        name_en: 'Blue Mountain Peak',
        name_es: 'Pico Blue Mountain',
        coords: [18.0461, -76.5794],
        elevation_m: 2256,
        description_en: 'Highest mountain in Jamaica, renowned for cloud-forest biodiversity and Blue Mountain coffee plantations.',
        description_es: 'Punto más alto de Jamaica (2.256m), famoso por sus bosques nubosos y plantaciones de café.'
      },
      {
        id: 'jm-bay-kingston',
        type: 'bay',
        name_en: 'Kingston Harbour',
        name_es: 'Bahía de Kingston',
        coords: [17.96, -76.8],
        description_en: 'The seventh-largest natural harbour in the world, sheltered by the Palisadoes sand spit.',
        description_es: 'El séptimo puerto natural más grande del mundo, protegido por la barra de arena de los Palisadoes.'
      }
    ],
    interesting_fact: {
      en: 'Jamaica was the first commercial bauxite exporter in the Caribbean and is globally renowned for Blue Mountain Coffee, grown under dense mist at over 1,500 meters altitude.',
      es: '¡Jamaica fue el primer gran exportador de bauxita del Caribe y su café Blue Mountain se cultiva bajo densa niebla a más de 1.500 metros de altitud!'
    },
    teks_alignment: ['TEKS 5.6A: Karst limestone topography and island geography', 'TEKS 6.6B: Bauxite mining and global aluminum production']
  },

  // =========================================================================
  // BELIZE (North / Central America)
  // =========================================================================
  {
    id: 'BLZ',
    iso2: 'bz',
    iso3: 'BLZ',
    name_en: 'Belize',
    name_es: 'Belice',
    continent: 'North America',
    continent_es: 'América del Norte',
    capital_en: 'Belmopan',
    capital_es: 'Belmopán',
    capital_coords: [17.251, -88.759],
    center_coords: [17.1899, -88.4976],
    zoom_level: 7,
    population: '410,000',
    area_sqkm: '22,966 km²',
    gdp_billion: 3.2,
    main_exports: {
      en: ['Raw Sugar ($80M)', 'Bananas ($55M)', 'Citrus Juice & Concentrates ($40M)', 'Shrimp & Marine Products ($35M)', 'Crude Petroleum ($25M)'],
      es: ['Azúcar cruda ($80M)', 'Banano ($55M)', 'Jugo de cítricos ($40M)', 'Camarones y langosta ($35M)', 'Petróleo crudo ($25M)'],
      total_val_billion: 480,
    },
    main_imports: {
      en: ['Refined Petroleum ($250M)', 'Cigarettes & Consumer Goods ($120M)', 'Cars & Trucks ($80M)', 'Telecommunications Equipment ($60M)'],
      es: ['Petróleo refinado ($250M)', 'Bienes de consumo ($120M)', 'Autos y camiones ($80M)', 'Equipos de telecomunicaciones ($60M)'],
      total_val_billion: 1200,
    },
    natural_wealth: {
      en: ['Belize Barrier Reef (second largest coral reef system on Earth)', 'Great Blue Hole underwater marine sinkhole', 'Dense mahogany and rosewood tropical rainforests', 'Fertile alluvial soils for citrus and sugarcane'],
      es: ['Barrera de Coral de Belice (segunda mayor del planeta)', 'Gran Agujero Azul (monumento natural submarino)', 'Selvas tropicales con maderas preciosas de caoba', 'Suelos aluviales fértiles para cítricos y caña'],
    },
    physical_geography_summary: {
      en: 'The only English-speaking nation in Central America, bordered by Mexico and Guatemala. Dominated by low coastal plains and mangrove swamps in the north and the Maya Mountains in the south.',
      es: 'Único país angloparlante de América Central. Presenta llanuras costeras bajas y manglares al norte, y las Montañas Mayas con selvas tropicales al sur.'
    },
    landforms: [
      {
        id: 'bz-reef-barrier',
        type: 'archipelago',
        name_en: 'Belize Barrier Reef & Great Blue Hole',
        name_es: 'Barrera Arrecifal de Belice y Gran Agujero Azul',
        coords: [17.3156, -87.5344],
        elevation_m: -124,
        description_en: 'UNESCO World Heritage marine sinkhole 300 meters wide and 124 meters deep, made famous by Jacques Cousteau.',
        description_es: 'Cenote submarino de 300 metros de ancho y 124 metros de profundidad, patrimonio de la humanidad.'
      },
      {
        id: 'bz-peak-victoria',
        type: 'peak',
        name_en: 'Doyle’s Delight (Maya Mountains)',
        name_es: 'Doyle’s Delight (Montañas Mayas)',
        coords: [16.4947, -89.0453],
        elevation_m: 1124,
        description_en: 'Highest peak in Belize, hidden in the dense canopy of the Maya Mountains range.',
        description_es: 'El punto más alto de Belice (1.124m), en la selva virgen de las Montañas Mayas.'
      }
    ],
    interesting_fact: {
      en: 'Belize holds the world’s first and only dedicated Jaguar Nature Reserve: the Cockscomb Basin Wildlife Sanctuary!',
      es: '¡Belice alberga el primer y único santuario silvestre del mundo dedicado exclusivamente a la preservación del jaguar en Cockscomb Basin!'
    },
    teks_alignment: ['TEKS 5.7A: Coral reef ecosystems and karst submarine sinkholes', 'TEKS 6.4A: Mesoamerican barrier reef biodiversity']
  },

  // =========================================================================
  // GUYANA (South America)
  // =========================================================================
  {
    id: 'GUY',
    iso2: 'gy',
    iso3: 'GUY',
    name_en: 'Guyana',
    name_es: 'Guyana',
    continent: 'South America',
    continent_es: 'América del Sur',
    capital_en: 'Georgetown',
    capital_es: 'Georgetown',
    capital_coords: [6.8013, -58.1551],
    center_coords: [4.8604, -58.9302],
    zoom_level: 6,
    population: '810,000',
    area_sqkm: '214,969 km²',
    gdp_billion: 17,
    main_exports: {
      en: ['Crude Petroleum ($11B)', 'Gold ($850M)', 'Bauxite ($120M)', 'Rice ($110M)', 'Timber ($45M)'],
      es: ['Petróleo crudo del bloque Stabroek ($11B)', 'Oro ($850M)', 'Bauxita ($120M)', 'Arroz ($110M)', 'Madera ($45M)'],
      total_val_billion: 13,
    },
    main_imports: {
      en: ['Floating Production Vessels & Oil Rigs ($2B)', 'Refined Petroleum ($800M)', 'Cars & Heavy Machinery ($500M)', 'Steel & Pipes ($400M)'],
      es: ['Plataformas petroleras y buques FPSO ($2B)', 'Petróleo refinado ($800M)', 'Maquinaria pesada y autos ($500M)', 'Acero y tuberías ($400M)'],
      total_val_billion: 4.5,
    },
    natural_wealth: {
      en: ['Stabroek offshore mega-oil discoveries (over 11 billion barrels of recoverable reserves)', 'Pristine Guiana Shield Amazonian rainforests (over 80% forest cover)', 'High-grade bauxite and alluvial gold deposits', 'Spectacular high-volume waterfalls like Kaieteur'],
      es: ['Mega-yacimientos petrolíferos en el bloque marino Stabroek', 'Selva virgen del Escudo Guayanés (más del 80% de cobertura forestal)', 'Depósitos de bauxita y oro aluvial', 'Catarata de Kaieteur, una de las mayores caídas libres de agua'],
    },
    physical_geography_summary: {
      en: 'The only English-speaking country in South America, located on the Guiana Shield. Features a low coastal plain below sea level protected by seawalls, dense rainforest interior, and dramatic tabletop tepuis in the west.',
      es: 'El único país angloparlante de América del Sur, en el Escudo Guayanés. Presenta una franja costera bajo el nivel del mar protegida por diques, densas selvas y tepuyes en la frontera con Venezuela y Brasil.'
    },
    landforms: [
      {
        id: 'gy-waterfall-kaieteur',
        type: 'river',
        name_en: 'Kaieteur Falls',
        name_es: 'Cataratas Kaieteur',
        coords: [5.1764, -59.4808],
        elevation_m: 226,
        description_en: 'World’s largest single-drop waterfall by volume of water flowing over it, on the Potaro River.',
        description_es: 'La catarata de caída libre ininterrumpida más caudalosa del mundo (226 metros de caída directa).'
      },
      {
        id: 'gy-peak-roraima',
        type: 'plateau',
        name_en: 'Mount Roraima (Guyana Tripoint)',
        name_es: 'Monte Roraima (Trifinio de Guyana)',
        coords: [5.15, -60.75],
        elevation_m: 2810,
        description_en: 'Towering flat-topped sandstone tepui marking the border between Guyana, Venezuela, and Brazil.',
        description_es: 'Majestuoso tepuy de cumbre plana en el punto de encuentro de las fronteras de Guyana, Venezuela y Brasil.'
      }
    ],
    interesting_fact: {
      en: 'Thanks to offshore deepwater oil discoveries in the Stabroek block, Guyana has experienced the fastest GDP growth rate of any sovereign nation on Earth in recent years!',
      es: '¡Gracias al descubrimiento de miles de millones de barriles de crudo marino en el bloque Stabroek, Guyana ha sido la economía de más rápido crecimiento del mundo en los últimos años!'
    },
    teks_alignment: ['TEKS 5.6A: Ancient Precambrian plateau geology (Guiana Shield)', 'TEKS 6.6B: Rapid economic transformation driven by offshore petroleum']
  },

  // =========================================================================
  // SURINAME (South America)
  // =========================================================================
  {
    id: 'SUR',
    iso2: 'sr',
    iso3: 'SUR',
    name_en: 'Suriname',
    name_es: 'Surinam',
    continent: 'South America',
    continent_es: 'América del Sur',
    capital_en: 'Paramaribo',
    capital_es: 'Paramaribo',
    capital_coords: [5.852, -55.2038],
    center_coords: [3.9193, -56.0278],
    zoom_level: 6,
    population: '620,000',
    area_sqkm: '163,820 km²',
    gdp_billion: 3.8,
    main_exports: {
      en: ['Gold ($1.8B)', 'Hardwood Timber ($90M)', 'Refined Petroleum & Crude ($80M)', 'Rice ($60M)', 'Fish & Shrimp ($45M)'],
      es: ['Oro en bruto ($1.8B)', 'Madera tropical ($90M)', 'Petróleo ($80M)', 'Arroz ($60M)', 'Pescado y camarón ($45M)'],
      total_val_billion: 2.3,
    },
    main_imports: {
      en: ['Refined Petroleum ($400M)', 'Mining Machinery ($250M)', 'Cars & Delivery Trucks ($150M)', 'Food Products ($120M)'],
      es: ['Petróleo refinado ($400M)', 'Maquinaria para minería ($250M)', 'Autos y camiones ($150M)', 'Alimentos procesados ($120M)'],
      total_val_billion: 1.8,
    },
    natural_wealth: {
      en: ['Over 93% covered in intact tropical rainforest (highest forest cover percentage in the world)', 'Rosebel and Merian gold mines', 'Brokopondo reservoir hydroelectric capacity', 'Recent offshore oil discoveries in the Guyana-Suriname basin'],
      es: ['Más del 93% cubierto por selva tropical virgen (el país con mayor porcentaje de bosque de la Tierra)', 'Minas de oro de Rosebel y Merian', 'Capacidad hidroeléctrica del embalse de Brokopondo', 'Yacimientos petrolíferos descubiertos en la plataforma marina'],
    },
    physical_geography_summary: {
      en: 'The smallest independent country in South America, located on the Guiana Shield. The northern narrow coastal lowlands host most of the population, giving way southward to a vast rolling rainforest plateau.',
      es: 'El país independiente más pequeño de América del Sur, en el Escudo Guayanés. Las llanuras costeras del norte albergan la mayor parte de la población, dando paso al sur a una meseta selvática continua.'
    },
    landforms: [
      {
        id: 'sr-peak-juliana',
        type: 'peak',
        name_en: 'Juliana Top',
        name_es: 'Pico Juliana Top',
        coords: [3.6828, -56.5333],
        elevation_m: 1280,
        description_en: 'Highest mountain in Suriname, located in the Wilhelmina Gebergte range in the central rainforest.',
        description_es: 'El punto más alto de Surinam (1.280m), en las montañas Wilhelmina en el corazón de la selva.'
      },
      {
        id: 'sr-lake-brokopondo',
        type: 'lake',
        name_en: 'Brokopondo Reservoir',
        name_es: 'Embalse de Brokopondo',
        coords: [4.8, -55.0833],
        description_en: 'One of the largest artificial reservoirs in the world (1,560 km²), flooding vast tracts of jungle.',
        description_es: 'Uno de los mayores embalses artificiales del mundo (1.560 km²), construido sobre el río Surinam.'
      }
    ],
    interesting_fact: {
      en: 'Suriname is the only sovereign country outside Europe where Dutch is the official language of government, education, and business!',
      es: '¡Surinam es el único país soberano fuera de Europa donde el neerlandés (holandés) es el idioma oficial de gobierno y educación!'
    },
    teks_alignment: ['TEKS 5.6A: Equatorial rainforest preservation', 'TEKS 6.4B: Cultural diversity and Dutch colonial legacy in South America']
  },

  // =========================================================================
  // TRINIDAD AND TOBAGO (North / Caribbean)
  // =========================================================================
  {
    id: 'TTO',
    iso2: 'tt',
    iso3: 'TTO',
    name_en: 'Trinidad and Tobago',
    name_es: 'Trinidad y Tobago',
    continent: 'North America',
    continent_es: 'América del Norte',
    capital_en: 'Port of Spain',
    capital_es: 'Puerto España',
    capital_coords: [10.6596, -61.5029],
    center_coords: [10.6918, -61.2225],
    zoom_level: 8,
    population: '1,400,000',
    area_sqkm: '5,128 km²',
    gdp_billion: 28,
    main_exports: {
      en: ['Liquefied Natural Gas ($4.5B)', 'Ammonia & Fertilizers ($2.8B)', 'Methanol ($2.2B)', 'Refined Petroleum ($1.5B)', 'Iron & Steel ($400M)'],
      es: ['Gas natural licuado ($4.5B)', 'Amoníaco y fertilizantes ($2.8B)', 'Metanol ($2.2B)', 'Petróleo refinado ($1.5B)', 'Hierro y acero ($400M)'],
      total_val_billion: 13.5,
    },
    main_imports: {
      en: ['Crude Petroleum ($1.8B)', 'Cars & Delivery Trucks ($500M)', 'Excavation Machinery ($300M)', 'Wheat & Corn ($250M)'],
      es: ['Petróleo crudo ($1.8B)', 'Autos y camiones ($500M)', 'Maquinaria de excavación ($300M)', 'Trigo y maíz ($250M)'],
      total_val_billion: 6.8,
    },
    natural_wealth: {
      en: ['World’s largest commercial exporter of ammonia and methanol', 'Extensive offshore Columbus Basin natural gas reservoirs', 'Pitch Lake (largest natural asphalt deposit in the world)', 'Main Ridge Forest Reserve in Tobago (oldest protected reserve in the Americas)'],
      es: ['Mayor exportador mundial de amoníaco y metanol', 'Ricas reservas de gas natural marino en la cuenca Columbus', 'Pitch Lake (el depósito de asfalto natural más grande del mundo)', 'Main Ridge en Tobago, la reserva forestal protegida más antigua de América'],
    },
    physical_geography_summary: {
      en: 'A twin-island nation just 11 km off the coast of Venezuela. Unlike most Caribbean islands, Trinidad is a geologic extension of the South American continent, featuring the Northern Range mountains and the Gulf of Paria.',
      es: 'País de dos islas ubicado a solo 11 km de la costa oriental de Venezuela. A diferencia de las Antillas volcánicas, es geológicamente una extensión del continente sudamericano.'
    },
    landforms: [
      {
        id: 'tt-lake-pitch',
        type: 'lake',
        name_en: 'Pitch Lake (La Brea)',
        name_es: 'Lago de Brea (Pitch Lake)',
        coords: [10.2333, -61.6333],
        description_en: 'Largest natural deposit of asphalt on Earth, spanning 40 hectares and over 75 meters deep.',
        description_es: 'El depósito natural de asfalto y brea más grande del planeta (40 hectáreas), explotado comercialmente desde hace siglos.'
      },
      {
        id: 'tt-peak-aripo',
        type: 'peak',
        name_en: 'El Cerro del Aripo',
        name_es: 'El Cerro del Aripo',
        coords: [10.7167, -61.25],
        elevation_m: 940,
        description_en: 'Highest peak in Trinidad and Tobago, situated in the forested Northern Range.',
        description_es: 'La cumbre más alta de Trinidad y Tobago (940m), en la Cordillera Septentrional.'
      }
    ],
    interesting_fact: {
      en: 'Pitch Lake in southwestern Trinidad has supplied natural asphalt to pave world-famous roads and airport runways around the globe, including the Lincoln Tunnel and roads in London!',
      es: '¡El asfalto natural del Lago de Brea de Trinidad ha sido utilizado para pavimentar autopistas de renombre mundial, pistas de aeropuertos y túneles en Nueva York y Londres!'
    },
    teks_alignment: ['TEKS 5.6A: Geology of natural hydrocarbon seeps and asphalt lakes', 'TEKS 6.6B: Petrochemical ammonia and methanol global trade']
  },

  // =========================================================================
  // BAHAMAS (North / Caribbean)
  // =========================================================================
  {
    id: 'BHS',
    iso2: 'bs',
    iso3: 'BHS',
    name_en: 'Bahamas',
    name_es: 'Bahamas',
    continent: 'North America',
    continent_es: 'América del Norte',
    capital_en: 'Nassau',
    capital_es: 'Nasáu',
    capital_coords: [25.0479, -77.3554],
    center_coords: [25.0343, -77.3963],
    zoom_level: 6,
    population: '410,000',
    area_sqkm: '13,880 km²',
    gdp_billion: 14,
    main_exports: {
      en: ['Refined Petroleum ($300M)', 'Passenger & Cruise Ships ($200M)', 'Rock Lobster ($90M)', 'Polymers & Chemicals ($70M)', 'Offshore Financial Services ($2B)'],
      es: ['Petróleo refinado de búnker ($300M)', 'Embarcaciones de recreo ($200M)', 'Langosta espinosa ($90M)', 'Químicos y plásticos ($70M)', 'Servicios financieros internacionales ($2B)'],
      total_val_billion: 1.2,
    },
    main_imports: {
      en: ['Passenger Ships & Yachts ($1B)', 'Refined Petroleum ($900M)', 'Cars ($250M)', 'Food & Poultry ($350M)'],
      es: ['Yates y barcos ($1B)', 'Petróleo refinado ($900M)', 'Autos ($250M)', 'Alimentos procesados ($350M)'],
      total_val_billion: 4.2,
    },
    natural_wealth: {
      en: ['Great Bahama Bank carbonate platforms and pristine turquoise shallow waters', 'Andros Barrier Reef (third longest coral reef in the world)', 'Tongue of the Ocean deep oceanic trench (over 1,800m deep)', 'Salt pans of Inagua Island'],
      es: ['Gran Banco de Bahamas con plataformas de carbonato y aguas cristalinas', 'Barrera de coral de Andros (tercera más larga del mundo)', 'Fosa oceánica profunda de Tongue of the Ocean (más de 1.800m de profundidad)', 'Salinas naturales de la isla de Inagua'],
    },
    physical_geography_summary: {
      en: 'An archipelago of over 700 coral islands and 2,400 cays in the Atlantic Ocean north of Cuba. Formed from immense limestone carbonate platforms (Bahama Banks) surrounded by deep ocean trenches.',
      es: 'Archipiélago de más de 700 islas y 2.400 cayos de origen coralino al norte de Cuba. Formado por gigantescas plataformas submarinas de carbonato de calcio.'
    },
    landforms: [
      {
        id: 'bs-bank-bahama',
        type: 'bay',
        name_en: 'Great Bahama Bank & Tongue of the Ocean',
        name_es: 'Gran Banco de Bahamas y Lengua del Océano',
        coords: [24.0, -77.5],
        elevation_m: -1800,
        description_en: 'Immense shallow carbonate platform dropping off into a 1,800m deep U-shaped oceanic trench.',
        description_es: 'Enorme plataforma de aguas someras que cae abruptamente hacia una fosa oceánica de 1.800 metros.'
      },
      {
        id: 'bs-peak-alvernia',
        type: 'peak',
        name_en: 'Mount Alvernia (Cat Island)',
        name_es: 'Monte Alvernia (Cat Island)',
        coords: [24.3, -75.5167],
        elevation_m: 63,
        description_en: 'Highest point in the Bahamas (just 63 meters), crowned with a stone hermitage on Cat Island.',
        description_es: 'El punto más alto de las Bahamas (apenas 63 metros sobre el mar) en Cat Island.'
      }
    ],
    interesting_fact: {
      en: 'The shallow waters of the Great Bahama Bank are so incredibly clear that astronaut photos show their distinct azure patterns clearly visible from Earth orbit and the International Space Station!',
      es: '¡Las aguas del Banco de Bahamas son tan asombrosamente cristalinas que sus tonalidades turquesa son fotografiadas nítidamente por los astronautas desde la Estación Espacial Internacional!'
    },
    teks_alignment: ['TEKS 5.6A: Carbonate platform geology and ocean drop-offs', 'TEKS 6.5A: Maritime tourism and ship registry economics']
  },

  // =========================================================================
  // BARBADOS (North / Caribbean)
  // =========================================================================
  {
    id: 'BRB',
    iso2: 'bb',
    iso3: 'BRB',
    name_en: 'Barbados',
    name_es: 'Barbados',
    continent: 'North America',
    continent_es: 'América del Norte',
    capital_en: 'Bridgetown',
    capital_es: 'Bridgetown',
    capital_coords: [13.106, -59.6132],
    center_coords: [13.1939, -59.5432],
    zoom_level: 9,
    population: '282,000',
    area_sqkm: '430 km²',
    gdp_billion: 5.8,
    main_exports: {
      en: ['Rum & Hard Liquor ($60M)', 'Packaged Medicaments ($45M)', 'Solar Water Heaters ($20M)', 'Cement ($18M)', 'Offshore Financial Services ($800M)'],
      es: ['Ron destilado de caña ($60M)', 'Medicamentos ($45M)', 'Calentadores solares ($20M)', 'Cemento ($18M)', 'Servicios financieros internacionales ($800M)'],
      total_val_billion: 520,
    },
    main_imports: {
      en: ['Refined Petroleum ($450M)', 'Cars & Passenger Vehicles ($120M)', 'Poultry & Beef ($90M)', 'Computers & Electronics ($60M)'],
      es: ['Petróleo refinado ($450M)', 'Autos y vehículos ($120M)', 'Carnes y alimentos ($90M)', 'Computadoras y electrónicos ($60M)'],
      total_val_billion: 1750,
    },
    natural_wealth: {
      en: ['World’s oldest continuous commercial rum distillery (Mount Gay, founded 1703)', 'Harrison’s Cave subterranean limestone cavern system', 'Natural deepwater port in Bridgetown sheltered on the leeward Caribbean coast', 'High solar irradiation across flat terrain'],
      es: ['Destilería de ron comercial más antigua del mundo (Mount Gay, fundada en 1703)', 'Cavernas subterráneas de Harrison’s Cave con estalactitas', 'Puerto natural de aguas profundas en Bridgetown', 'Abundante insolación solar durante todo el año'],
    },
    physical_geography_summary: {
      en: 'The easternmost island of the Lesser Antilles, lying entirely in the Atlantic Ocean outside the Caribbean volcanic arc. Composed almost entirely of coral limestone terraces with white sandy beaches and rolling inland hills.',
      es: 'La isla más oriental de las Antillas Menores, situada en aguas abiertas del Atlántico fuera del arco volcánico caribeño. Formada casi en su totalidad por terrazas de caliza coralina.'
    },
    landforms: [
      {
        id: 'bb-cave-harrison',
        type: 'lake',
        name_en: 'Harrison’s Cave',
        name_es: 'Cueva de Harrison',
        coords: [13.1833, -59.5833],
        description_en: 'Spectacular crystallised limestone cavern with underground streams, cascading waterfalls, and deep pools.',
        description_es: 'Impresionante caverna kárstica con arroyos subterráneos, cascadas y estalactitas activas.'
      },
      {
        id: 'bb-peak-hillaby',
        type: 'peak',
        name_en: 'Mount Hillaby',
        name_es: 'Monte Hillaby',
        coords: [13.2167, -59.5833],
        elevation_m: 340,
        description_en: 'Highest point in Barbados, offering panoramic views over the Atlantic Scotland District.',
        description_es: 'Punto más alto de Barbados (340 metros sobre el nivel del mar) en el distrito de Escocia.'
      }
    ],
    interesting_fact: {
      en: 'Mount Gay Rum in Barbados is officially documented as the oldest rum brand and distillery in the world, having distilled continuously on the island since 1703!',
      es: '¡Mount Gay Rum en Barbados está documentada históricamente como la marca y destilería de ron más antigua del mundo, operando desde 1703!'
    },
    teks_alignment: ['TEKS 5.6A: Coral limestone terrace island geology', 'TEKS 6.5A: Caribbean sugar plantation history and modern service economy']
  }
];
