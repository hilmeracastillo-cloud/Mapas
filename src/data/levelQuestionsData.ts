import { BloomEvaluationQuestion } from '../types/progression';

// ==============================================================================
// LEVEL 1 EVALUATION: READING THE 3 MAP TYPES (POLITICAL, PHYSICAL, SATELLITE)
// Pass requirement: >= 90% (at least 9 out of 10)
// ==============================================================================
export const LEVEL_1_QUESTIONS: BloomEvaluationQuestion[] = [
  {
    id: 'l1-q1',
    level: 1,
    bloom_category: 'understand',
    bloom_title_en: 'Understand: Hypsometric Elevation vs Vegetation',
    bloom_title_es: 'Comprender: Elevación Hipsométrica vs Vegetación',
    scenario_en: 'A student looks at a physical relief map of Egypt and northern Africa. They notice that the land adjacent to the Mediterranean coast and the Nile Delta is colored dark emerald green.',
    scenario_es: 'Un estudiante observa un mapa físico de Egipto y el norte de África. Observa que el terreno contiguo a la costa mediterránea y el delta del Nilo está coloreado en verde esmeralda oscuro.',
    visual_stimulus: {
      type: 'physical_hypsometric',
      title_en: 'Physical Relief Extract: Nile Delta & Coastal Lowland (0–200m)',
      title_es: 'Extracto de Relieve Físico: Delta del Nilo y Costa (0–200m)',
      caption_en: 'Examine the dark emerald green tint covering coastal northern Egypt on the physical relief map above.',
      caption_es: 'Examina la tinta verde esmeralda oscuro que cubre la costa norte de Egipto en el extracto de mapa físico superior.',
      legend_items: [
        { color: '#16a34a', label_en: 'Emerald Green: Lowland (0–200m)', label_es: 'Verde Esmeralda: Tierras Bajas (0–200m)' },
        { color: '#eab308', label_en: 'Yellow: Plateau (200–1,000m)', label_es: 'Amarillo: Meseta (200–1,000m)' },
        { color: '#082f49', label_en: 'Dark Blue: Marine Basin', label_es: 'Azul Marino: Cuenca Marina' }
      ]
    },
    question_en: 'What is the correct cartographic interpretation of this dark green color on a physical relief map?',
    question_es: '¿Cuál es la interpretación cartográfica correcta de este color verde oscuro en un mapa físico de relieve?',
    options_en: [
      'The region is a tropical rainforest with heavy annual rainfall and dense jungle trees.',
      'The region has a low elevation between 0 and 200 meters above sea level, regardless of how arid the climate is.',
      'The country possesses vast agricultural crop production and green pasture farmlands across its entire surface.',
      'The green represents cold ocean currents bringing humid maritime air onshore.'
    ],
    options_es: [
      'La región es una selva tropical lluviosa con densos árboles y clima húmedo.',
      'La región tiene una altitud baja entre 0 y 200 metros sobre el nivel del mar, sin importar cuán árido sea el clima.',
      'El país posee abundantes cultivos agrícolas y pastizales verdes en toda su superficie.',
      'El verde representa corrientes marinas frías que transportan humedad hacia la costa.'
    ],
    correct_index: 1,
    explanation_en: 'CRITICAL CARTOGRAPHIC RULE: Colors on physical maps represent ELEVATION (hypsometry), not vegetation or biomes! Low-lying land (0–200m) is always colored dark green, even in scorching hyper-arid deserts like the Sahara.',
    explanation_es: 'REGLA CARTOGRÁFICA FUNDAMENTAL: ¡Los colores en mapas físicos representan ALTITUD (hipsometría), no vegetación ni biomas! Las tierras bajas (0-200m) siempre se colorean en verde oscuro, incluso en desiertos hiperáridos como el Sáhara.',
    teks_code: 'TEKS 6.3A / 6.4A',
    nwea_strand: 'Physical Map Decoding & Hypsometry'
  },
  {
    id: 'l1-q2',
    level: 1,
    bloom_category: 'apply',
    bloom_title_en: 'Apply: Selecting the Appropriate Lens for Sovereign Governance',
    bloom_title_es: 'Aplicar: Selección del Lente para Soberanía y Gobierno',
    scenario_en: 'An international diplomat needs to analyze where national legal jurisdiction ends, verify administrative provincial borders, and locate the official seat of national government.',
    scenario_es: 'Un diplomático internacional necesita analizar dónde termina la jurisdicción legal de un Estado, verificar límites provinciales y ubicar la sede oficial del gobierno nacional.',
    visual_stimulus: {
      type: 'political_extract',
      title_en: 'Political Cartographic Extract: Sovereign Borders & Government Seats',
      title_es: 'Extracto Cartográfico Político: Límites Soberanos y Sedes de Gobierno',
      caption_en: 'Inspect the delineated international borders, sovereign color fills, and the capital star (★) marker.',
      caption_es: 'Inspecciona los límites fronterizos demarcados, los rellenos de soberanía y el marcador de estrella (★) de capital.',
      legend_items: [
        { color: '#3b82f6', label_en: 'Sovereign Territorial Fill', label_es: 'Relleno de Soberanía Territorial' },
        { color: '#fbbf24', label_en: 'Star ★: Capital City', label_es: 'Estrella ★: Ciudad Capital' },
        { color: '#f43f5e', label_en: 'Dashed line: Legal Border', label_es: 'Línea discontinua: Límite Legal' }
      ]
    },
    question_en: 'Which map lens must the diplomat choose to accomplish this objective effectively?',
    question_es: '¿Qué lente cartográfico debe elegir el diplomático para cumplir eficazmente con su objetivo?',
    options_en: [
      'Physical Relief Map, because it highlights mountains that act as natural borders.',
      'Real Satellite Imagery, because it reveals individual government buildings and streets from orbit.',
      'Political Map, because it is specifically designed with man-made boundaries, territorial sovereignty, and capital city markers.',
      'Bathymetric Marine Map, because national borders are exclusively determined by ocean depth.'
    ],
    options_es: [
      'Mapa Físico de Relieve, porque destaca las montañas que actúan como barreras naturales.',
      'Imagen Satelital Real, porque muestra los edificios de gobierno individuales y calles desde órbita.',
      'Mapa Político, porque está diseñado específicamente con fronteras antrópicas, soberanía territorial y marcadores de capitales.',
      'Mapa Marino Batimétrico, porque las fronteras nacionales se definen exclusivamente por la profundidad del mar.'
    ],
    correct_index: 2,
    explanation_en: 'Political maps are designed specifically to display human-constructed legal divisions, national sovereignties, provincial boundaries, and capitals (often marked with a star ★). Physical and satellite maps do not show legal borders without artificial overlays.',
    explanation_es: 'Los mapas políticos se diseñan para mostrar divisiones legales creadas por el ser humano, soberanías nacionales, límites administrativos y capitales (indicadas habitualmente con una estrella ★).',
    teks_code: 'TEKS 5.6A / 6.3A',
    nwea_strand: 'Political Geography & Map Types'
  },
  {
    id: 'l1-q3',
    level: 1,
    bloom_category: 'analyze',
    bloom_title_en: 'Analyze: Bathymetric Gradients on Physical Maps',
    bloom_title_es: 'Analizar: Gradientes Batimétricos en Mapas Físicos',
    scenario_en: 'While examining the ocean floor off the eastern coast of Florida and the Bahamas, a student observes a strip of light cyan bordering the islands, which abruptly drops into intense navy blue.',
    scenario_es: 'Al examinar el fondo marino frente a Florida y las Bahamas, un estudiante observa una franja de color celeste brillante (cian) que bordea las islas, la cual cae bruscamente a azul marino oscuro.',
    visual_stimulus: {
      type: 'bathymetric_profile',
      title_en: 'Bathymetric Profile: Continental Shelf to Abyssal Trench',
      title_es: 'Perfil Batimétrico: Plataforma Continental a Fosa Abisal',
      caption_en: 'Visual gradient transitioning abruptly from light cyan (0 to -200m shallow shelf) into deep oceanic navy blue (< -4,000m).',
      caption_es: 'Gradiente visual que pasa bruscamente de celeste cian (plataforma somera 0 a -200m) a azul marino profundo (< -4,000m).',
      legend_items: [
        { color: '#06b6d4', label_en: 'Cyan: Shallow Shelf (0 to -200m)', label_es: 'Cian: Plataforma Somera (0 a -200m)' },
        { color: '#082f49', label_en: 'Navy: Abyssal Trench (< -4,000m)', label_es: 'Azul Marino: Fosa Abisal (< -4,000m)' }
      ]
    },
    question_en: 'What does this shift from cyan to dark blue reveal about the underwater topography?',
    question_es: '¿Qué revela esta transición de color celeste a azul marino oscuro sobre la topografía submarina?',
    options_en: [
      'The water temperature drops by 30°C due to polar storm winds.',
      'The cyan represents the shallow continental shelf (0 to -200m), while the dark blue represents an abrupt plunge into deep abyssal ocean depths.',
      'The cyan indicates toxic algae bloom contamination in the ocean water.',
      'The dark blue indicates pure fresh water while the cyan represents saltwater.'
    ],
    options_es: [
      'La temperatura del agua cae 30°C debido a vientos polares huracanados.',
      'El celeste representa la plataforma continental somera (0 a -200m), mientras que el azul oscuro señala una caída abrupta hacia el abismo oceánico profundo.',
      'El celeste indica contaminación por algas tóxicas en el agua marina.',
      'El azul oscuro indica agua dulce pura mientras que el celeste representa agua salada.'
    ],
    correct_index: 1,
    explanation_en: 'In cartographic bathymetry, light cyan/turquoise highlights shallow waters along continental shelves (0 to -200m), whereas deeper navy blue represents abyssal trenches and oceanic plains (below -4,000m).',
    explanation_es: 'En batimetría cartográfica, el celeste claro/cian resalta las aguas someras sobre la plataforma continental (0 a -200m), mientras que el azul marino intenso representa fosas abisales y cuencas oceánicas profundas (-4,000m o más).',
    teks_code: 'TEKS 6.3B',
    nwea_strand: 'Bathymetry & Ocean Topography'
  },
  {
    id: 'l1-q4',
    level: 1,
    bloom_category: 'evaluate',
    bloom_title_en: 'Evaluate: Limitations of Physical Maps vs Real Satellite Sensors',
    bloom_title_es: 'Evaluar: Limitaciones del Mapa Físico vs Satélite Real',
    scenario_en: 'An environmental research team is tasked with assessing real-time Amazon rainforest deforestation rates, burn scars, and recent urban sprawling outward into wetlands.',
    scenario_es: 'Un equipo de científicos ambientales debe evaluar las tasas de deforestación en tiempo real en la Amazonía, cicatrices de incendios y la expansión urbana sobre humedales.',
    visual_stimulus: {
      type: 'deforestation_satellite',
      title_en: 'High-Resolution Satellite Sensor: Fishbone Deforestation Grid',
      title_es: 'Sensor Satelital de Alta Resolución: Malla de Deforestación en Espina de Pez',
      caption_en: 'Orbital photometric sensors capture the signature fishbone clearcutting pattern in Rondônia, completely absent on physical maps.',
      caption_es: 'Los sensores fotométricos orbitales registran el patrón de tala en espina de pez en Rondônia, indetectable en mapas físicos.',
      legend_items: [
        { color: '#064e3b', label_en: 'Dense Living Rainforest Canopy', label_es: 'Canopia de Selva Viva' },
        { color: '#ef4444', label_en: 'Clearcut Agriculture Scars', label_es: 'Cicatrices de Tala y Quema' }
      ]
    },
    question_en: 'Why is a physical relief map completely inadequate for this task compared to true-color satellite imagery?',
    question_es: '¿Por qué un mapa físico de relieve es completamente inadecuado para esta tarea en comparación con la imagen satelital real?',
    options_en: [
      'Physical maps show only country borders and capital cities, omitting the physical Earth entirely.',
      'Physical maps use static hypsometric elevation tints that never reflect surface vegetation cover, seasonal burn scars, or human land alterations.',
      'Satellite sensors only work during nighttime, making them unable to capture colors.',
      'Physical maps can only be viewed in black and white in educational laboratories.'
    ],
    options_es: [
      'Los mapas físicos solo muestran fronteras de países y ciudades capitales, omitiendo el relieve terrestre.',
      'Los mapas físicos emplean tintas hipsométricas estáticas de elevación que nunca reflejan la cobertura vegetal viva, quemas estacionales o alteraciones del suelo.',
      'Los sensores satelitales solo operan durante la noche, imposibilitando registrar colores.',
      'Los mapas físicos solo pueden visualizarse en blanco y negro en entornos educativos.'
    ],
    correct_index: 1,
    explanation_en: 'Physical maps illustrate fixed topographic elevation (meters above sea level). They cannot display deforestation, soil dryness, agriculture, or seasonal changes. Real satellite imagery captures true electromagnetic reflectance (albedo) of living canopies and human clearance.',
    explanation_es: 'Los mapas físicos muestran altitudes topográficas fijas. No pueden reflejar deforestación, humedad del suelo, quemas ni cambios estacionales. La imagen satelital capta la reflectancia real del suelo y la vegetación viva.',
    teks_code: 'TEKS 6.4A / 6.5A',
    nwea_strand: 'Earth Observation & Cartographic Evaluation'
  },
  {
    id: 'l1-q5',
    level: 1,
    bloom_category: 'analyze',
    bloom_title_en: 'Analyze: The Significance of Brown and Ochre Tints',
    bloom_title_es: 'Analizar: Significado de los Tonos Marrón y Ocre',
    scenario_en: 'Looking at the western portion of South America and North America on a physical relief map, both regions feature prominent bands of dark brown and ochre.',
    scenario_es: 'Al observar el sector occidental de Sudamérica y Norteamérica en un mapa físico de relieve, ambas regiones exhiben prominentes franjas de color marrón oscuro y ocre.',
    visual_stimulus: {
      type: 'mountain_relief',
      title_en: 'Physical Relief Profile: Mountain Range Cordillera (1,000–3,500m)',
      title_es: 'Perfil de Relieve Físico: Cordillera Montañosa (1,000–3,500m)',
      caption_en: 'Notice the continuous dark brown and ochre bands encoding high-altitude mountainous topography along the western margin.',
      caption_es: 'Observa la franja continua marrón oscuro y ocre que codifica topografía montañosa de gran altitud en el margen occidental.',
      legend_items: [
        { color: '#92400e', label_en: 'Brown: Rugged Mountain (1,000–3,500m)', label_es: 'Marrón: Montaña Escarpada (1,000–3,500m)' },
        { color: '#ffffff', label_en: 'White: Snow Summits (> 3,500m)', label_es: 'Blanco: Cimas Nevadas (> 3,500m)' }
      ]
    },
    question_en: 'What geological and topographic reality does this brown coloring signify?',
    question_es: '¿Qué realidad geológica y topográfica indica esta coloración marrón?',
    options_en: [
      'Extensive dry sandy deserts without any rock formation.',
      'High-altitude, rugged mountain ranges (Andes and Rocky Mountains) exceeding 1,000 to 3,500 meters above sea level.',
      'Densely populated agricultural valleys with fertile dark soil.',
      'Areas of extreme heat where the ground has been scorched by the sun.'
    ],
    options_es: [
      'Extensos desiertos de arena seca sin ninguna formación rocosa.',
      'Cordilleras montañosas escarpadas de gran altitud (los Andes y las Rocosas) que superan los 1,000 a 3,500 metros sobre el nivel del mar.',
      'Valles agrícolas densamente poblados con suelos oscuros fértiles.',
      'Áreas de calor extremo donde el suelo ha sido quemado por el sol.'
    ],
    correct_index: 1,
    explanation_en: 'In standard hypsometric cartography, yellow represents medium plateaus (200–1,000m), while brown and dark ochre symbolize high rugged mountain ranges (1,000–3,500m+) such as the Andes, Rockies, and Alps.',
    explanation_es: 'En la escala hipsométrica universal, el amarillo representa colinas y mesetas (200-1,000m), mientras que el marrón y ocre oscuro simbolizan cordilleras montañosas escarpadas (1,000 a 3,500m+) como los Andes, las Rocosas y los Alpes.',
    teks_code: 'TEKS 5.6A / 6.3A',
    nwea_strand: 'Physical Relief & Hypsometric Scale'
  },
  {
    id: 'l1-q6',
    level: 1,
    bloom_category: 'evaluate',
    bloom_title_en: 'Evaluate: Diagnosing Cartographic Misconceptions',
    bloom_title_es: 'Evaluar: Diagnóstico de Errores Cartográficos',
    scenario_en: 'A student claims: "Country A must be located in the cold Arctic because the top of its mountains is colored pure white on the physical relief map."',
    scenario_es: 'Un estudiante afirma: "El país A debe estar ubicado en el gélido Ártico porque la cima de sus montañas está coloreada de blanco puro en el mapa físico de relieve".',
    visual_stimulus: {
      type: 'physical_hypsometric',
      title_en: 'Hypsometric Elevation vs Latitude Diagram (> 3,500m)',
      title_es: 'Diagrama de Altitud Hipsométrica vs Latitud (> 3,500m)',
      caption_en: 'Pure white on physical relief indicates elevations above 3,500m, present even at tropical and subtropical latitudes like the Himalayas and equatorial Andes.',
      caption_es: 'El blanco puro en mapas físicos indica altitudes superiores a 3,500m, presentes incluso en latitudes tropicales y subtropicales como el Himalaya y los Andes.',
      legend_items: [
        { color: '#ffffff', label_en: 'White: Glaciers (> 3,500m)', label_es: 'Blanco: Glaciares (> 3,500m)' },
        { color: '#92400e', label_en: 'Brown: Slopes (1,000–3,500m)', label_es: 'Marrón: Laderas (1,000–3,500m)' }
      ]
    },
    question_en: 'Which argument best evaluates and refutes the student’s misconception?',
    question_es: '¿Qué argumento evalúa y refuta de forma precisa la conclusión errónea del estudiante?',
    options_en: [
      'White on physical maps only represents limestone rock formations, not ice or altitude.',
      'White on physical maps represents extreme elevation (above 3,500m) where temperatures drop below freezing regardless of latitude, even in the subtropics like the Himalayas.',
      'White indicates regions where the map printer ran out of ink.',
      'The student is correct because ice and snow only exist at the North and South Poles.'
    ],
    options_es: [
      'El blanco en mapas físicos solo representa roca caliza y yeso, no hielo ni altitud.',
      'El blanco en mapas físicos representa altitudes extremas (más de 3,500m) donde el gradiente térmico mantiene nieve perpetua sin importar la latitud, incluso en el trópico como el Himalaya.',
      'El blanco indica sectores donde la imprenta cartográfica se quedó sin tinta.',
      'El estudiante tiene razón porque el hielo y la nieve solo existen en los polos norte y sur.'
    ],
    correct_index: 1,
    explanation_en: 'ALTITUDE VS LATITUDE RULE: The Himalayas are located in subtropical latitudes (similar to Florida/Texas), yet their summits exceed 8,000 meters, creating permanent glacial snowfields colored white on physical maps.',
    explanation_es: 'REGLA DE ALTITUD VS LATITUD: El Himalaya se encuentra en latitudes subtropicales templadas (similares a Florida o Texas), pero sus cumbres superan los 8,000m, provocando glaciares y nieves perpetuas coloreadas de blanco en mapas físicos.',
    teks_code: 'TEKS 6.3C / 6.4B',
    nwea_strand: 'Hypsometric Analysis & Critical Thinking'
  },
  {
    id: 'l1-q7',
    level: 1,
    bloom_category: 'apply',
    bloom_title_en: 'Apply: Comparing True Albedo with Physical Conventions',
    bloom_title_es: 'Aplicar: Comparación de Albedo Real con Convenciones Físicas',
    scenario_en: 'You are switching between the Real Satellite lens and the Physical Relief lens over the Great Salt Lake (USA) and the Salar de Uyuni (Bolivia).',
    scenario_es: 'Alternas entre el lente Satélite Real y el lente de Relieve Físico sobre el Gran Lago Salado (EE.UU.) y el Salar de Uyuni (Bolivia).',
    visual_stimulus: {
      type: 'satellite_composite',
      title_en: 'Satellite Albedo Capture: High-Reflectance Salt Flats',
      title_es: 'Captura de Albedo Satelital: Salares de Alta Reflectancia',
      caption_en: 'Satellite imagery captures high-reflectance mineral salt crusts and authentic surface textures, while physical relief generalizes the area into uniform elevation tints.',
      caption_es: 'La imagen satelital capta la costra de sal mineral de alta reflectancia y texturas reales, mientras el relieve físico generaliza la zona en tintas uniformes.',
      legend_items: [
        { color: '#f8fafc', label_en: 'High Albedo Mineral Salt Crust', label_es: 'Costra de Sal Mineral de Alto Albedo' },
        { color: '#0284c7', label_en: 'Brine Water Lagoon', label_es: 'Laguna de Salmuera' }
      ]
    },
    question_en: 'What visual difference between the two lenses confirms you are viewing true satellite imagery?',
    question_es: '¿Qué diferencia visual entre ambos lentes confirma que estás observando una imagen satelital real?',
    options_en: [
      'The satellite shows artificial country boundaries drawn in bright red glowing lines.',
      'The satellite reveals dazzling high-albedo white salt crusts and authentic terrain textures, whereas the physical map generalizes the area with elevation tints.',
      'The satellite replaces all land with green forest icons.',
      'The physical map shows moving car traffic while the satellite is static.'
    ],
    options_es: [
      'El satélite muestra fronteras artificiales de países dibujadas en líneas rojas fosforescentes.',
      'El satélite revela la deslumbrante costra de sal blanca de alto albedo y texturas reales de relieve, mientras el mapa físico generaliza la zona con tintas de elevación.',
      'El satélite reemplaza toda la tierra con íconos de bosques verdes.',
      'El mapa físico muestra el tráfico vehicular en movimiento mientras que el satélite es estático.'
    ],
    correct_index: 1,
    explanation_en: 'Satellite sensors record the genuine physical reflectance (albedo) and geological texture of the planet—such as blinding white salt deposits or jagged basalt lava flows—unlike physical maps which encode continuous elevation ranges into color categories.',
    explanation_es: 'Los sensores satelitales registran la reflectancia física real (albedo) y la textura geológica de la superficie terrestre (como costras salinas o coladas de lava), a diferencia de los mapas físicos que codifican rangos de altitud.',
    teks_code: 'TEKS 6.3A',
    nwea_strand: 'Comparative Cartography'
  },
  {
    id: 'l1-q8',
    level: 1,
    bloom_category: 'remember',
    bloom_title_en: 'Remember: Essential Features of a Political Map',
    bloom_title_es: 'Recordar: Elementos Esenciales del Mapa Político',
    scenario_en: 'A classroom exercise asks students to review the 3 core basemap lenses used in universal cartography.',
    scenario_es: 'Un ejercicio de aula solicita a los estudiantes repasar los 3 lentes cartográficos fundamentales de la cartografía universal.',
    visual_stimulus: {
      type: 'political_extract',
      title_en: 'Political Map Convention Diagram: Sovereign Borders & Capitals',
      title_es: 'Diagrama de Convención de Mapa Político: Fronteras y Capitales',
      caption_en: 'Examine the cartographic extract showing sovereign boundaries, national colors, and capital stars.',
      caption_es: 'Examina el extracto cartográfico que muestra límites soberanos, colores nacionales y estrellas de capitales.',
      legend_items: [
        { color: '#3b82f6', label_en: 'Sovereign State Fill', label_es: 'Relleno de Estado Soberano' },
        { color: '#fbbf24', label_en: 'Star ★: Capital City', label_es: 'Estrella ★: Sede de Gobierno' }
      ]
    },
    question_en: 'Which set of elements is characteristic of a Political Map?',
    question_es: '¿Qué conjunto de elementos es característico de un Mapa Político?',
    options_en: [
      'Contour elevation lines, bathymetric ocean depth soundings, and tectonic fault zones.',
      'Sovereign international borders, provincial/state boundaries, capital cities, and administrative divisions.',
      'Live cloud cover, infrared surface heat maps, and atmospheric humidity fronts.',
      'Rock stratigraphy layers, volcanic magma conduits, and seismic hypocenters.'
    ],
    options_es: [
      'Curvas de nivel de altitud, sondeos batimétricos de profundidad marina y fallas tectónicas.',
      'Fronteras internacionales soberanas, límites provinciales/estatales, capitales y divisiones administrativas.',
      'Nubosidad en vivo, mapas de calor superficial infrarrojo y frentes de humedad atmosférica.',
      'Capas de estratigrafía rocosa, conductos de magma volcánico e hipocentros sísmicos.'
    ],
    correct_index: 1,
    explanation_en: 'Political maps are defined by artificial human boundaries, jurisdiction lines, sovereign nation limits, capital cities, and administrative subdivisions.',
    explanation_es: 'Los mapas políticos se definen por fronteras antrópicas, demarcaciones de jurisdicción legal, límites de soberanía nacional, ciudades capitales y subdivisiones administrativas.',
    teks_code: 'TEKS 5.6A / 6.3A',
    nwea_strand: 'Political Geography Fundamentals'
  },
  {
    id: 'l1-q9',
    level: 1,
    bloom_category: 'analyze',
    bloom_title_en: 'Analyze: Cartographic Decision Making for Mountain Hiking Logistics',
    bloom_title_es: 'Analizar: Toma de Decisión Cartográfica para Logística en Montaña',
    scenario_en: 'A mountaineering expedition is planning an ascent in the Swiss Alps and needs to identify steep escarpments, U-shaped valleys, and elevation passes before traveling.',
    scenario_es: 'Una expedición de alpinismo planifica una travesía en los Alpes suizos y necesita identificar escarpes abruptos, valles glaciares en U y pasos de montaña antes de viajar.',
    visual_stimulus: {
      type: 'mountain_relief',
      title_en: 'Topographic Relief Extraction: Alpine Passes & Elevation Gradients',
      title_es: 'Extracción de Relieve Topográfico: Pasos Alpinos y Gradientes de Altitud',
      caption_en: 'Notice the elevation color bands and slope contours that indicate vertical elevation gain and mountain passes.',
      caption_es: 'Observa las bandas de color de altitud y pendientes que indican desniveles verticales y pasos de montaña.',
      legend_items: [
        { color: '#92400e', label_en: 'Brown: Rugged Ridges (1,000–3,500m)', label_es: 'Marrón: Crestas Escarpadas (1,000–3,500m)' },
        { color: '#ffffff', label_en: 'White: Perennial Snow (> 3,500m)', label_es: 'Blanco: Nieve Perpetua (> 3,500m)' }
      ]
    },
    question_en: 'Why must they consult a Physical Relief map rather than a Political map?',
    question_es: '¿Por qué deben consultar un mapa de Relieve Físico en lugar de un mapa Político?',
    options_en: [
      'Because political maps only show that Switzerland is bordered by France, Germany, and Italy, without indicating slopes or heights.',
      'Because political maps are restricted to military officials only.',
      'Because the physical map shows real-time hotel prices in alpine towns.',
      'Because Switzerland has no political borders.'
    ],
    options_es: [
      'Porque el mapa político solo muestra que Suiza limita con Francia, Alemania e Italia, sin indicar pendientes ni desniveles de altitud.',
      'Porque los mapas políticos están reservados exclusivamente para autoridades militares.',
      'Porque el mapa físico muestra tarifas hoteleras en tiempo real en los valles alpinos.',
      'Porque Suiza no posee fronteras políticas.'
    ],
    correct_index: 0,
    explanation_en: 'Political maps present territorial jurisdiction but omit topographic steepness, relief gradients, and physical passes needed for wilderness navigation and mountain safety.',
    explanation_es: 'Los mapas políticos muestran delimitaciones territoriales pero carecen de gradientes de pendiente, curvas de nivel y desniveles topográficos necesarios para planificar rutas en terreno montañoso.',
    teks_code: 'TEKS 6.3A / 6.3B',
    nwea_strand: 'Map Application & Terrain Analysis'
  },
  {
    id: 'l1-q10',
    level: 1,
    bloom_category: 'evaluate',
    bloom_title_en: 'Evaluate: The Synthetic Nature of Cartographic Relief Tints',
    bloom_title_es: 'Evaluar: Naturaleza Sintética de las Tintas de Relieve',
    scenario_en: 'In a standardized cartography assessment, a question asks: "Why do cartographers use green, yellow, brown, and white to depict land instead of painting the map in the actual surface colors?"',
    scenario_es: 'En una evaluación estandarizada de cartografía, una pregunta plantea: "¿Por qué los cartógrafos usan verde, amarillo, marrón y blanco para representar la tierra en vez de pintarla con sus colores reales?"',
    visual_stimulus: {
      type: 'physical_hypsometric',
      title_en: 'Universal Hypsometric Color Scale (0 to > 3,500m)',
      title_es: 'Escala Hipsométrica Universal de Color (0 a > 3,500m)',
      caption_en: 'The universal scientific elevation scale transforms quantitative elevation data into standardized visual color bands.',
      caption_es: 'La escala científica universal de elevación transforma datos cuantitativos de altitud en bandas visuales estandarizadas de color.',
      legend_items: [
        { color: '#16a34a', label_en: '0–200m (Lowland)', label_es: '0–200m (Tierras Bajas)' },
        { color: '#eab308', label_en: '200–1,000m (Plateau)', label_es: '200–1,000m (Meseta)' },
        { color: '#92400e', label_en: '1,000–3,500m (Mountain)', label_es: '1,000–3,500m (Montaña)' },
        { color: '#ffffff', label_en: '> 3,500m (Perennial Snow)', label_es: '> 3,500m (Nieve Perpetua)' }
      ]
    },
    question_en: 'Which statement provides the most comprehensive evaluation of this convention?',
    question_es: '¿Qué afirmación ofrece la evaluación más sólida y completa de esta convención?',
    options_en: [
      'Because standardized hypsometric tints allow readers to instantly perceive quantitative altitude ranges at a glance, removing visual confusion caused by patchy vegetation, dry soil, or seasonal changes.',
      'Because satellites were not invented until 2020, so cartographers had to guess what Earth looked like.',
      'Because all mountain ranges on Earth are naturally made of brown mud and soil.',
      'Because international law requires all schools to use only four colors in geography textbooks.'
    ],
    options_es: [
      'Porque las tintas hipsométricas estandarizadas permiten al observador percibir rangos cuantitativos de altitud de un vistazo, eliminando la confusión visual causada por vegetación dispersa o sequedad del suelo.',
      'Porque los satélites se inventaron en 2020 y los cartógrafos debían adivinar el aspecto de la Tierra.',
      'Porque todas las cordilleras del mundo están formadas exclusivamente de fango y tierra marrón.',
      'Porque las leyes internacionales prohíben usar más de cuatro colores en libros escolares de geografía.'
    ],
    correct_index: 0,
    explanation_en: 'Cartographic hypsometric tinting is an intentional scientific abstraction: by using a consistent standardized color ramp, map readers can immediately decode elevation gradients without being misled by local desert aridity or forest patches.',
    explanation_es: 'La escala hipsométrica es una abstracción científica deliberada: al usar una rampa de color estandarizada, permite decodificar de inmediato gradientes de altitud sin que la sequedad o manchas de vegetación confundan la interpretación.',
    teks_code: 'TEKS 6.3A / 6.4A',
    nwea_strand: 'Cartographic Theory & Evaluation'
  }
];

// ==============================================================================
// LEVEL 2 EVALUATION: LANDFORMS ACROSS THE 3 MAP TYPES
// Pass requirement: >= 90% (at least 9 out of 10)
// ==============================================================================
export const LEVEL_2_QUESTIONS: BloomEvaluationQuestion[] = [
  {
    id: 'l2-q1',
    level: 2,
    bloom_category: 'analyze',
    bloom_title_en: 'Analyze: Isthmus vs Strait Across Map Lenses',
    bloom_title_es: 'Analizar: Istmo vs Estrecho en los Lentes Cartográficos',
    scenario_en: 'Compare the Isthmus of Panama with the Strait of Gibraltar. Both are narrow geographic features that separate and connect large global realms.',
    scenario_es: 'Compara el Istmo de Panamá con el Estrecho de Gibraltar. Ambos son accidentes geográficos estrechos que separan y conectan grandes regiones del globo.',
    question_en: 'Which statement accurately contrasts how an Isthmus and a Strait are decoded across Physical and Satellite maps?',
    question_es: '¿Qué afirmación contrasta con precisión cómo se decodifican un Istmo y un Estrecho en mapas físicos y satelitales?',
    options_en: [
      'An isthmus is a narrow strip of land connecting two large landmasses, while a strait is a narrow navigable channel of water connecting two large bodies of water.',
      'An isthmus is made of water while a strait is made of solid granite mountains.',
      'Both features are identical and the terms are interchangeable in modern cartography.',
      'An isthmus only exists in polar regions while straits only exist along the equator.'
    ],
    options_es: [
      'Un istmo es una franja estrecha de tierra que une dos grandes masas continentales, mientras que un estrecho es un canal angosto de agua que comunica dos grandes masas acuáticas.',
      'Un istmo está formado de agua mientras que un estrecho es de roca granítica sólida.',
      'Ambos accidentes son idénticos y los términos son sinónimos en la cartografía moderna.',
      'Los istmos solo existen en zonas polares mientras que los estrechos solo se dan en el ecuador.'
    ],
    correct_index: 0,
    explanation_en: 'An isthmus is a narrow strip of LAND connecting two larger land areas (e.g. Isthmus of Panama uniting North and South America). A strait is a narrow body of WATER connecting two larger bodies of water (e.g. Strait of Gibraltar connecting the Atlantic Ocean and Mediterranean Sea).',
    explanation_es: 'Un istmo es una franja de TIERRA que une dos continentes (como Panamá uniendo Norte y Sudamérica). Un estrecho es un paso de AGUA que conecta dos mares u océanos (como Gibraltar uniendo el Atlántico y el Mediterráneo).',
    teks_code: 'TEKS 6.3B',
    nwea_strand: 'Landforms Morphology'
  },
  {
    id: 'l2-q2',
    level: 2,
    bloom_category: 'understand',
    bloom_title_en: 'Understand: Plateau (Tableland) vs Lowland Plain',
    bloom_title_es: 'Comprender: Meseta vs Llanura Bajas',
    scenario_en: 'You are comparing the Llano Estacado / High Plains of Texas (elevated 800-1,100m) with the Mississippi River Delta (elevated 0-25m). Both landforms appear relatively flat in satellite imagery.',
    scenario_es: 'Comparas el Llano Estacado de Texas (altitud 800-1,100m) con el Delta del río Misisipi (altitud 0-25m). Ambos terrenos lucen relativamente planos en la imagen satelital.',
    question_en: 'How does the Physical Relief map distinguish a Plateau from a Lowland Plain?',
    question_es: '¿Cómo distingue el mapa de Relieve Físico una Meseta de una Llanura costera baja?',
    options_en: [
      'The plateau is colored yellow or light ochre indicating elevated flat tableland, while the lowland plain is colored emerald green.',
      'Both are colored dark navy blue because they are flat.',
      'The plain is colored white while the plateau is colored purple.',
      'Physical maps cannot show plateaus because they only display peaks.'
    ],
    options_es: [
      'La meseta se colorea en amarillo u ocre claro indicando terreno plano elevado, mientras que la llanura baja se colorea en verde esmeralda.',
      'Ambas se colorean en azul marino oscuro porque son planas.',
      'La llanura se colorea de blanco y la meseta de morado.',
      'Los mapas físicos no pueden mostrar mesetas porque solo representan picos.'
    ],
    correct_index: 0,
    explanation_en: 'While both landforms have low relief gradients (flat topographies), a Plain is at low elevation near sea level (0–200m, green on maps), whereas a Plateau is an elevated flat tableland lifted hundreds of meters high (200–1,000m+, yellow/ochre on maps).',
    explanation_es: 'Aunque ambos son terrenos planos, una Llanura se sitúa a baja altitud cerca del nivel del mar (0-200m, verde en el mapa), mientras que una Meseta es un terreno plano levantado a cientos o miles de metros de altitud (amarillo/ocre en el mapa).',
    teks_code: 'TEKS 5.6A / 6.3B',
    nwea_strand: 'Topographic Differentiation'
  },
  {
    id: 'l2-q3',
    level: 2,
    bloom_category: 'analyze',
    bloom_title_en: 'Analyze: Fjord Formation and Coastal Identification',
    bloom_title_es: 'Analizar: Formación de Fiordos e Identificación Costera',
    scenario_en: 'Observing the western coast of Norway on both the Physical map and the Real Satellite lens, you see deep, winding, steep-walled fingers of seawater cutting deep into high mountain ranges.',
    scenario_es: 'Al observar la costa occidental de Noruega en el mapa físico y en el satélite real, ves ensenadas marinas sinuosas y profundas flanqueadas por acantilados que se internan en la cordillera.',
    question_en: 'Which geological process formed this landform (Fjord), and how does the map confirm it?',
    question_es: '¿Qué proceso geológico formó este accidente (Fiordo) y cómo lo corrobora el mapa?',
    options_en: [
      'Desert wind abrasion carved sand canyons that later flooded.',
      'Ancient Pleistocene glaciers carved deep U-shaped valleys that were subsequently flooded by the rising ocean as the ice melted.',
      'Underground volcanic lava tubes collapsed under the weight of forests.',
      'Coral reefs built limestone barriers that trapped rainwater.'
    ],
    options_es: [
      'La erosión eólica del desierto talló cañones de arena que luego se inundaron.',
      'Antiguos glaciares pleistocénicos excavaron valles en forma de "U" que luego fueron inundados por el ascenso del mar tras el deshielo.',
      'Tubos de lava volcánica subterránea colapsaron por el peso de los bosques.',
      'Los arrecifes de coral crearon barreras de caliza que atraparon agua de lluvia.'
    ],
    correct_index: 1,
    explanation_en: 'Fjords are drowned glacial valleys. Heavy glacial ice carved steep vertical U-shaped rock troughs down to the sea; when glaciers retreated and sea levels rose, ocean water flooded these deep maritime inlets.',
    explanation_es: 'Los fiordos son valles glaciares sumergidos. El avance del hielo talló profundas fosas en "U" con acantilados verticales; al subir el nivel del mar con el deshielo, el océano inundó estos cañones costeros.',
    teks_code: 'TEKS 5.7A / 6.3B',
    nwea_strand: 'Glacial Processes & Coastal Landforms'
  },
  {
    id: 'l2-q4',
    level: 2,
    bloom_category: 'evaluate',
    bloom_title_en: 'Evaluate: Archipelago vs Solitary Island Ecosystems',
    bloom_title_es: 'Evaluar: Archipiélago vs Isla Solitaria',
    scenario_en: 'Japan, Indonesia, and the Philippines are classified as Archipelagos, whereas Madagascar is classified as a single major continental Island.',
    scenario_es: 'Japón, Indonesia y Filipinas se clasifican como Archipiélagos, mientras que Madagascar se clasifica como una gran Isla solitaria.',
    question_en: 'How does this geographic distinction influence maritime territorial waters and transportation?',
    question_es: '¿Cómo influye esta distinción geográfica en las aguas territoriales y el transporte marítimo?',
    options_en: [
      'An archipelago consists of clusters or chains of many islands, requiring complex inter-island ferries, bridges, and archipelagic sea lane governance.',
      'Archipelagos do not have any surrounding oceans or coastlines.',
      'Single islands are always connected to the mainland by natural land bridges.',
      'Archipelagos never contain active volcanoes.'
    ],
    options_es: [
      'Un archipiélago consiste en una cadena o enjambre de múltiples islas, lo que exige ferris interinsulares, puentes y delimitaciones complejas de aguas archipelágicas.',
      'Los archipiélagos no tienen océanos ni costas a su alrededor.',
      'Las islas solitarias siempre están conectadas al continente por puentes de tierra naturales.',
      'Los archipiélagos nunca contienen volcanes activos.'
    ],
    correct_index: 0,
    explanation_en: 'An archipelago is a cluster or chain of islands (often volcanic or tectonic arcs), requiring specialized maritime inter-island transportation and legal archipelagic baselines under international law.',
    explanation_es: 'Un archipiélago es una cadena o enjambre de islas (habitualmente de origen volcánico o tectónico), lo que demanda complejas redes de transporte marítimo y soberanía sobre aguas interiores archipelágicas.',
    teks_code: 'TEKS 6.7B',
    nwea_strand: 'Island Geography & Transportation'
  },
  {
    id: 'l2-q5',
    level: 2,
    bloom_category: 'apply',
    bloom_title_en: 'Apply: Peninsula vs Cape Identification',
    bloom_title_es: 'Aplicar: Diferenciación entre Península y Cabo',
    scenario_en: 'On a navigation map of North America, you examine Florida, the Yucatan, and Cape Cod.',
    scenario_es: 'En una carta de navegación de Norteamérica, examinas Florida, Yucatán y Cabo Cod.',
    question_en: 'What is the key morphological difference between a Peninsula and a Cape?',
    question_es: '¿Cuál es la diferencia morfológica clave entre una Península y un Cabo?',
    options_en: [
      'A peninsula is a large piece of land projecting into water surrounded on three sides, whereas a cape is a smaller, sharper point of land extending into a lake or ocean.',
      'A peninsula is entirely submerged in water while a cape is elevated high above the clouds.',
      'A cape is man-made using concrete while a peninsula is natural.',
      'There is no difference; cartographers assign names randomly.'
    ],
    options_es: [
      'Una península es una gran porción de tierra que se proyecta al agua rodeada por tres lados, mientras que un cabo es una punta de tierra más pequeña y estrecha que penetra en el mar.',
      'Una península está enteramente sumergida en el agua mientras que un cabo se eleva por encima de las nubes.',
      'Un cabo es una estructura artificial de hormigón mientras que una península es natural.',
      'No existe diferencia alguna; los cartógrafos usan los nombres al azar.'
    ],
    correct_index: 0,
    explanation_en: 'A peninsula is a substantial tract of land projecting out into water, bordered by water on three sides (e.g. Florida, Iberian Peninsula). A cape is a smaller, acute headland or prominence pointing out into the sea (e.g. Cape of Good Hope, Cape Horn, Cape Cod).',
    explanation_es: 'Una península es una gran extensión de tierra rodeada de agua por tres lados (como Florida o Yucatán). Un cabo es un saliente costero o punta de tierra más angosta que penetra de forma marcada en el mar.',
    teks_code: 'TEKS 6.3B',
    nwea_strand: 'Coastal Landform Classification'
  },
  {
    id: 'l2-q6',
    level: 2,
    bloom_category: 'analyze',
    bloom_title_en: 'Analyze: Mountain Range vs Peak on Physical Maps',
    bloom_title_es: 'Analizar: Cordillera vs Pico en Mapas Físicos',
    scenario_en: 'You are studying the Andes of South America and Pico Bolívar in Venezuela.',
    scenario_es: 'Estudias los Andes de Sudamérica y el Pico Bolívar en Venezuela.',
    question_en: 'How are a Mountain Range and an individual Peak related conceptually on a map?',
    question_es: '¿Cómo se relacionan conceptualmente una Cordillera y un Pico individual en un mapa?',
    options_en: [
      'A mountain range is a continuous geographic chain of mountains, while a peak is the single highest pointed summit or apex of a mountain.',
      'A peak is a deep trench under the ocean while a range is a desert.',
      'A mountain range only exists on flat plains.',
      'Pico Bolívar created the entire continent of South America through volcanic ash.'
    ],
    options_es: [
      'Una cordillera es una cadena geográfica continua de montañas, mientras que un pico es la cumbre o punto culminante más alto e individual de una montaña.',
      'Un pico es una fosa submarina profunda mientras que una cordillera es un desierto.',
      'Las cordilleras solo existen en llanuras bajas.',
      'El Pico Bolívar creó todo el continente sudamericano mediante ceniza volcánica.'
    ],
    correct_index: 0,
    explanation_en: 'A mountain range (cordillera) is an extensive series of geologically connected mountains. A peak is a specific singular pinnacle or summit point (such as Denali in the Alaska Range or Everest in the Himalayas).',
    explanation_es: 'Una cordillera es un encadenamiento orográfico extenso y continuo. Un pico es la cumbre o vértice más alto e individual dentro de un macizo o cordillera.',
    teks_code: 'TEKS 5.6A / 6.3B',
    nwea_strand: 'Orographic Nomenclature'
  },
  {
    id: 'l2-q7',
    level: 2,
    bloom_category: 'understand',
    bloom_title_en: 'Understand: River Drainage Basins and Deltas',
    bloom_title_es: 'Comprender: Cuencas Fluviales y Deltas',
    scenario_en: 'Following the Mississippi, Amazon, and Nile rivers from their mountain headwaters to their river mouths.',
    scenario_es: 'Siguiendo los ríos Misisipi, Amazonas y Nilo desde sus cabeceras montañosas hasta sus desembocaduras.',
    question_en: 'What landform is created at the river mouth when flowing water deposits sediment as it enters a slower body of water?',
    question_es: '¿Qué accidente geográfico se forma en la desembocadura cuando el río deposita sedimentos al ingresar en un cuerpo de agua más lento?',
    options_en: [
      'A Delta (fan-shaped alluvial deposit)',
      'A Volcano crater',
      'A Fjord carved by ice',
      'An Isthmus connecting two continents'
    ],
    options_es: [
      'Un Delta (depósito aluvial en abanico)',
      'Un cráter volcánico',
      'Un fiordo excavado por hielo',
      'Un istmo que une dos continentes'
    ],
    correct_index: 0,
    explanation_en: 'When a sediment-rich river reaches a standing body of water (ocean or lake), current velocity drops, dropping sand and silt to form a fan-shaped delta (such as the Nile Delta or Mississippi Delta).',
    explanation_es: 'Cuando un río cargado de sedimentos desemboca en el mar, la velocidad del agua disminuye bruscamente, depositando limos y arenas que forman un delta aluvial en abanico.',
    teks_code: 'TEKS 6.3B / 6.4C',
    nwea_strand: 'Fluvial Processes & Deltas'
  },
  {
    id: 'l2-q8',
    level: 2,
    bloom_category: 'evaluate',
    bloom_title_en: 'Evaluate: Stratovolcano vs Shield Volcano on Satellite Imagery',
    bloom_title_es: 'Evaluar: Estratovolcán vs Volcán en Escudo en Satélite',
    scenario_en: 'You compare Mount Fuji (Japan) or Popocatépetl (Mexico) with Mauna Loa in Hawaii on true satellite imagery.',
    scenario_es: 'Comparas el Monte Fuji (Japón) o Popocatépetl (México) con el Mauna Loa en Hawái en imágenes de satélite.',
    question_en: 'What visual clue in the imagery reveals the explosive nature of a steep stratovolcano?',
    question_es: '¿Qué rasgo visual en la imagen satelital revela la naturaleza explosiva de un estratovolcán?',
    options_en: [
      'A steep, symmetrical, cone-shaped peak with a summit crater, radial drainage ravines, and often a snowy summit cap.',
      'A completely flat lake filled with turquoise sea water.',
      'A long straight canal dredged by ships.',
      'A cluster of coral atolls floating in the ocean.'
    ],
    options_es: [
      'Una cumbre empinada y simétrica en forma de cono con cráter central, barrancos radiales y a menudo nieve o ceniza en su cima.',
      'Un lago completamente plano lleno de agua marina turquesa.',
      'Un canal recto excavado artificialmente por barcos.',
      'Un conjunto de atolones de coral que flotan en el mar.'
    ],
    correct_index: 0,
    explanation_en: 'Stratovolcanoes (composite cones) are formed from alternating layers of viscous lava and explosive ash, yielding steep, picturesque pyramidal cones with radial gully channels visible clearly from orbit.',
    explanation_es: 'Los estratovolcanes están formados por capas sucesivas de lava viscosa y ceniza volcánica explosiva, lo que crea conos simétricos de pendientes pronunciadas con drenaje radial visible desde el espacio.',
    teks_code: 'TEKS 6.3C',
    nwea_strand: 'Volcanic Morphology'
  },
  {
    id: 'l2-q9',
    level: 2,
    bloom_category: 'apply',
    bloom_title_en: 'Apply: Identifying a Bay vs a Lake',
    bloom_title_es: 'Aplicar: Identificar una Bahía frente a un Lago',
    scenario_en: 'You are viewing Lake Maracaibo in Venezuela, Guanabara Bay in Brazil, and Lake Superior in the United States.',
    scenario_es: 'Observas el Lago de Maracaibo en Venezuela, la Bahía de Guanabara en Brasil y el Lago Superior en Estados Unidos.',
    question_en: 'What is the defining hydrological difference between a Bay and a true freshwater Lake?',
    question_es: '¿Cuál es la diferencia hidrológica definitoria entre una Bahía y un Lago?',
    options_en: [
      'A bay is an indentation of the shoreline connected to an ocean or sea with saltwater, while a true lake is a body of water completely surrounded by land.',
      'A bay has no water and is made of sand dunes.',
      'A lake is always part of the ocean while a bay is always on mountain summits.',
      'Lakes only freeze during summer while bays only freeze at noon.'
    ],
    options_es: [
      'Una bahía es una entrada costera conectada al mar con agua salada o mareas, mientras que un lago es un cuerpo de agua totalmente rodeado por tierra.',
      'Una bahía no tiene agua y está formada por dunas de arena seca.',
      'Un lago siempre forma parte del océano mientras que una bahía siempre está en cumbres montañosas.',
      'Los lagos solo se congelan en verano mientras que las bahías solo al mediodía.'
    ],
    correct_index: 0,
    explanation_en: 'A bay is an inlet of the sea where the land curves inward, remaining connected to marine ocean water. A lake is an inland body of water enclosed entirely by land.',
    explanation_es: 'Una bahía es una entrada del mar en la línea de costa, comunicada con las aguas oceánicas. Un lago es un cuerpo de agua interior rodeado por tierra en todo su perímetro.',
    teks_code: 'TEKS 6.3B',
    nwea_strand: 'Hydrographic Landforms'
  },
  {
    id: 'l2-q10',
    level: 2,
    bloom_category: 'analyze',
    bloom_title_en: 'Analyze: Rain Shadow Deserts and Mountain Barriers',
    bloom_title_es: 'Analizar: Desiertos de Sombra Orográfica y Barreras Montañosas',
    scenario_en: 'Looking at satellite imagery of the Mojave Desert in California or the Atacama Desert in Chile, both sit immediately adjacent to towering mountain ranges.',
    scenario_es: 'Al examinar imágenes de satélite del Desierto de Mojave en California o el Atacama en Chile, ambos se ubican inmediatamente detrás de altas cordilleras montañosas.',
    question_en: 'What physical process explains why barren deserts form directly behind high mountain ranges?',
    question_es: '¿Qué proceso físico explica por qué se forman desiertos áridos justo detrás de cordilleras montañosas?',
    options_en: [
      'The Rain Shadow Effect: mountains force moist air upward, causing rain on the windward side, leaving dry descending air on the leeward side.',
      'The mountains block all sunlight, preventing rain clouds from forming.',
      'Lava from mountain volcanoes burns away all rain before it reaches the ground.',
      'The desert sand blows up the mountain and absorbs the clouds.'
    ],
    options_es: [
      'El efecto de sombra orográfica: las montañas obligan al aire húmedo a ascender y llover a barlovento, dejando aire seco descendente en la ladera de sotavento.',
      'Las montañas bloquean toda la luz solar impidiendo que se condensen nubes.',
      'La lava de los volcanes de montaña quema la lluvia antes de que toque el suelo.',
      'La arena del desierto sube por la montaña y absorbe las nubes.'
    ],
    correct_index: 0,
    explanation_en: 'The Rain Shadow Effect: moist air masses traveling off the ocean are forced to rise over mountains, cooling and dropping precipitation on the windward slope. The descending air on the leeward side warms and dries, producing arid deserts.',
    explanation_es: 'Efecto de sombra orográfica: las masas de aire marino se elevan al chocar con la cordillera, condensándose y descargando lluvia en la vertiente de barlovento. Al descender por sotavento, el aire seco y cálido crea desiertos áridos.',
    teks_code: 'TEKS 5.7A / 6.4C',
    nwea_strand: 'Orographic Precipitation & Arid Landforms'
  }
];

// ==============================================================================
// LEVEL 3 EVALUATION: CONTINENTS, SEAS, AND OCEANS (STRICTLY NO COUNTRIES)
// Pass requirement: >= 90% (at least 9 out of 10)
// ==============================================================================
export const LEVEL_3_QUESTIONS: BloomEvaluationQuestion[] = [
  {
    id: 'l3-q1',
    level: 3,
    bloom_category: 'understand',
    bloom_title_en: 'Understand: Pacific Ocean and Challenger Deep',
    bloom_title_es: 'Comprender: Océano Pacífico y el Abismo Challenger',
    scenario_en: 'Studying the global bathymetric relief map of Earth’s ocean basins without any country boundaries.',
    scenario_es: 'Estudiando el mapa batimétrico global de las cuencas oceánicas de la Tierra sin ninguna frontera de países.',
    question_en: 'Which ocean basin is the largest and deepest on Earth, containing the Mariana Trench and Challenger Deep (-10,994m)?',
    question_es: '¿Qué cuenca oceánica es la más grande y profunda de la Tierra, albergando la Fosa de las Marianas y el Abismo Challenger (-10,994m)?',
    options_en: [
      'Pacific Ocean',
      'Atlantic Ocean',
      'Indian Ocean',
      'Arctic Ocean'
    ],
    options_es: [
      'Océano Pacífico',
      'Océano Atlántico',
      'Océano Índico',
      'Océano Ártico'
    ],
    correct_index: 0,
    explanation_en: 'The Pacific Ocean covers more than 30% of Earth’s surface (165.2 million km²) and reaches the lowest point on the planetary crust at Challenger Deep in the Mariana Trench (-10,994 meters).',
    explanation_es: 'El Océano Pacífico cubre más del 30% de la superficie del planeta (165.2 millones de km²) y desciende al punto más profundo de la corteza terrestre en el Abismo Challenger (-10,994 metros).',
    teks_code: 'TEKS 6.3B',
    nwea_strand: 'Global Ocean Basins'
  },
  {
    id: 'l3-q2',
    level: 3,
    bloom_category: 'analyze',
    bloom_title_en: 'Analyze: The Mid-Atlantic Ridge Tectonic Rift',
    bloom_title_es: 'Analizar: La Dorsal Mesoatlántica Submarina',
    scenario_en: 'Looking at the Physical Relief map of the Atlantic Ocean, a pronounced undersea mountain chain runs right through the center from north to south.',
    scenario_es: 'Al observar el mapa de Relieve Físico del Océano Atlántico, una pronunciada cadena montañosa submarina recorre el centro de norte a sur.',
    question_en: 'What geological feature is this, and what is happening to the ocean basin?',
    question_es: '¿Qué accidente geológico es este y qué ocurre con la cuenca oceánica?',
    options_en: [
      'The Mid-Atlantic Ridge: a divergent tectonic boundary where seafloor spreading creates new oceanic crust, slowly widening the Atlantic Ocean.',
      'A giant man-made concrete sea wall protecting Europe from storms.',
      'A deep trench where the ocean is rapidly shrinking and disappearing.',
      'A sunken continent that was submerged last year.'
    ],
    options_es: [
      'La Dorsal Mesoatlántica: un límite tectónico divergente donde la expansión del fondo crea nueva corteza oceánica, ensanchando lentamente el Atlántico.',
      'Un muro de hormigón submarino artificial que protege a Europa de tormentas.',
      'Una fosa profunda donde el océano está desapareciendo rápidamente.',
      'Un continente sumergido el año pasado.'
    ],
    correct_index: 0,
    explanation_en: 'The Mid-Atlantic Ridge is a massive divergent underwater tectonic mountain chain. Magma wells up from the mantle, creating new basaltic crust and pushing the Eurasian/African plates away from the American plates at about 2.5 cm per year.',
    explanation_es: 'La Dorsal Mesoatlántica es una cordillera volcánica submarina divergente. El magma asciende desde el manto creando nueva corteza oceánica y separando América de Europa y África unos 2.5 cm al año.',
    teks_code: 'TEKS 6.3C',
    nwea_strand: 'Oceanic Tectonics'
  },
  {
    id: 'l3-q3',
    level: 3,
    bloom_category: 'apply',
    bloom_title_en: 'Apply: Southern Ocean Circumpolar Boundary',
    bloom_title_es: 'Aplicar: El Límite Circumpolar del Océano Antártico',
    scenario_en: 'Unlike other oceans bounded by continents, the Southern Ocean (Antarctic Ocean) has a unique physical boundary.',
    scenario_es: 'A diferencia de otros océanos delimitados por continentes, el Océano Antártico (Glacial Austral) tiene un límite físico singular.',
    question_en: 'What physically defines the Southern Ocean across the globe?',
    question_es: '¿Qué define físicamente al Océano Antártico alrededor del globo?',
    options_en: [
      'It completely encircles the continent of Antarctica south of 60°S latitude, driven by the powerful eastward Antarctic Circumpolar Current.',
      'It is a small freshwater lake located inside a volcanic crater in New Zealand.',
      'It is enclosed by the Sahara Desert and the Mediterranean Sea.',
      'It is separated from other oceans by a solid wall of granite mountains.'
    ],
    options_es: [
      'Rodea por completo el continente antártico al sur del paralelo 60°S, impulsado por la potente Corriente Circumpolar Antártica.',
      'Es un pequeño lago de agua dulce dentro de un cráter volcánico en Nueva Zelanda.',
      'Está encerrado entre el desierto del Sáhara y el mar Mediterráneo.',
      'Está separado de los demás océanos por un muro continuo de montañas de granito.'
    ],
    correct_index: 0,
    explanation_en: 'The Southern Ocean is defined by the 60°S parallel and the Antarctic Convergence zone, unbroken by any continental landmass, allowing the Antarctic Circumpolar Current to flow unimpeded around the entire globe.',
    explanation_es: 'El Océano Antártico está delimitado por el paralelo 60°S y la zona de convergencia antártica, sin masas de tierra continentales que lo interrumpan, lo que permite a la Corriente Circumpolar fluir sin obstáculos alrededor del planeta.',
    teks_code: 'TEKS 6.3B',
    nwea_strand: 'Polar Hydrography'
  },
  {
    id: 'l3-q4',
    level: 3,
    bloom_category: 'evaluate',
    bloom_title_en: 'Evaluate: Arctic Ocean and Planetary Albedo',
    bloom_title_es: 'Evaluar: El Océano Ártico y el Albedo Planetario',
    scenario_en: 'Analyzing satellite monitoring of the Arctic Ocean during polar summer.',
    scenario_es: 'Analizando el monitoreo satelital del Océano Ártico durante el verano polar.',
    question_en: 'Why is the Arctic Ocean considered the most climatically sensitive ocean on Earth?',
    question_es: '¿Por qué se considera al Océano Ártico como el océano climáticamente más sensible de la Tierra?',
    options_en: [
      'Because its bright white sea ice reflects up to 85% of solar radiation (high albedo); when ice melts, dark ocean water absorbs 90% of heat, accelerating planetary warming.',
      'Because it has the highest water temperature and highest evaporation of all oceans.',
      'Because it is completely surrounded by tropical rainforests.',
      'Because it contains no marine life or microorganisms.'
    ],
    options_es: [
      'Porque su hielo marino blanco refleja hasta el 85% de la radiación solar (alto albedo); al derretirse, el agua oscura absorbe el 90% del calor, acelerando el calentamiento.',
      'Porque tiene la temperatura de agua más alta y la mayor evaporación de todos los océanos.',
      'Porque está completamente rodeado por selvas tropicales húmedas.',
      'Porque no contiene ninguna forma de vida marina ni microorganismos.'
    ],
    correct_index: 0,
    explanation_en: 'The ice-albedo feedback: reflective white sea ice bounces solar energy back to space. When perennial sea ice thins, dark Arctic water absorbs solar radiation, multiplying oceanic warming rates.',
    explanation_es: 'El efecto de retroalimentación hielo-albedo: el hielo marino blanco refleja la radiación solar al espacio. Al derretirse, las aguas oceánicas oscuras absorben calor, acelerando el calentamiento del Ártico.',
    teks_code: 'TEKS 6.4A',
    nwea_strand: 'Climatological Oceanography'
  },
  {
    id: 'l3-q5',
    level: 3,
    bloom_category: 'analyze',
    bloom_title_en: 'Analyze: The Red Sea as a Continental Split',
    bloom_title_es: 'Analizar: El Mar Rojo como Fisura Continental',
    scenario_en: 'Looking at the Physical relief map where the continent of Africa meets Asia.',
    scenario_es: 'Observando el mapa de Relieve Físico donde el continente de África se une a Asia.',
    question_en: 'Which strategic sea separates the northeastern African continent from the Arabian Peninsula of Asia?',
    question_es: '¿Qué mar estratégico separa el continente del noreste de África de la península Arábiga en Asia?',
    options_en: [
      'Red Sea',
      'Baltic Sea',
      'Bering Sea',
      'Coral Sea'
    ],
    options_es: [
      'Mar Rojo',
      'Mar Báltico',
      'Mar de Bering',
      'Mar del Coral'
    ],
    correct_index: 0,
    explanation_en: 'The Red Sea occupies a long, narrow tectonic rift valley separating the African continent from the Asian continent (Arabian Peninsula). It connects to the Mediterranean via the Suez Canal.',
    explanation_es: 'El Mar Rojo ocupa un valle de rift tectónico estrecho que separa el continente africano de la península Arábiga (Asia). Se comunica con el Mediterráneo a través del Canal de Suez.',
    teks_code: 'TEKS 6.3B',
    nwea_strand: 'Continental Boundaries & Seas'
  },
  {
    id: 'l3-q6',
    level: 3,
    bloom_category: 'understand',
    bloom_title_en: 'Understand: The 7 Continents by Landmass Characteristics',
    bloom_title_es: 'Comprender: Los 7 Continentes y sus Rasgos Principales',
    scenario_en: 'A global physical map displays all landmasses without political subdivisions.',
    scenario_es: 'Un mapa físico global muestra todas las masas continentales sin subdivisiones políticas.',
    question_en: 'Which continent is the largest in both total land area and average elevation, holding the Tibetan Plateau?',
    question_es: '¿Qué continente es el más extenso tanto en superficie terrestre como en altitud promedio, albergando la meseta del Tíbet?',
    options_en: [
      'Asia',
      'Africa',
      'Europe',
      'Australia / Oceania'
    ],
    options_es: [
      'Asia',
      'África',
      'Europa',
      'Australia / Oceanía'
    ],
    correct_index: 0,
    explanation_en: 'Asia is Earth’s largest continent, covering approximately 44.5 million km² (30% of total land area), and is the highest on average due to the collision of the Indian and Eurasian tectonic plates.',
    explanation_es: 'Asia es el continente más grande de la Tierra (~44.5 millones de km², 30% de la tierra emergida) y el de mayor altitud promedio debido a la colisión tectónica de la placa índica y euroasiática.',
    teks_code: 'TEKS 5.6A / 6.3A',
    nwea_strand: 'Continental Scale Geography'
  },
  {
    id: 'l3-q7',
    level: 3,
    bloom_category: 'apply',
    bloom_title_en: 'Apply: Bering Sea Continental Proximity',
    bloom_title_es: 'Aplicar: Proximidad Continental en el Mar de Bering',
    scenario_en: 'Tracing the northern Pacific rim where the easternmost tip of Asia approaches the westernmost tip of North America.',
    scenario_es: 'Trazando el arco del Pacífico norte donde el extremo oriental de Asia se aproxima al extremo occidental de Norteamérica.',
    question_en: 'Which marginal sea lies between the continents of North America and Asia, connected by the Bering Strait?',
    question_es: '¿Qué mar marginal se ubica entre los continentes de América del Norte y Asia, unidos por el Estrecho de Bering?',
    options_en: [
      'Bering Sea',
      'Caribbean Sea',
      'Arabian Sea',
      'Mediterranean Sea'
    ],
    options_es: [
      'Mar de Bering',
      'Mar Caribe',
      'Mar Arábigo',
      'Mar Mediterráneo'
    ],
    correct_index: 0,
    explanation_en: 'The Bering Sea sits between Alaska (North America) and Siberia (Asia). During glacial periods, lower sea levels exposed the Beringia land bridge, allowing human migration into the Americas.',
    explanation_es: 'El Mar de Bering se sitúa entre Alaska (Norteamérica) y Siberia (Asia). Durante las glaciaciones, el descenso marino expuso el puente de Beringia, permitiendo el poblamiento de América.',
    teks_code: 'TEKS 5.6A / 6.3B',
    nwea_strand: 'Intercontinental Seas'
  },
  {
    id: 'l3-q8',
    level: 3,
    bloom_category: 'analyze',
    bloom_title_en: 'Analyze: Mediterranean Salinity and Inflow',
    bloom_title_es: 'Analizar: Salinidad y Renovación en el Mediterráneo',
    scenario_en: 'Examining the Mediterranean Sea surrounded by Southern Europe, Northern Africa, and Western Asia.',
    scenario_es: 'Examinando el Mar Mediterráneo rodeado por el sur de Europa, el norte de África y Asia occidental.',
    question_en: 'Why does the Mediterranean Sea have higher salinity than the open Atlantic Ocean?',
    question_es: '¿Por qué el Mar Mediterráneo presenta una salinidad mayor que el Océano Atlántico abierto?',
    options_en: [
      'Because evaporation exceeds freshwater river inflow in its warm enclosed basin, pulling in Atlantic water through the narrow Strait of Gibraltar.',
      'Because salt is mined from underground and dumped into the sea.',
      'Because no rivers flow into the Mediterranean.',
      'Because it has no connection to any ocean.'
    ],
    options_es: [
      'Porque la evaporación en su cuenca cálida y semicerrada supera el aporte fluvial, absorbiendo agua del Atlántico por el angosto Estrecho de Gibraltar.',
      'Porque se extrae sal de minas terrestres y se vierte deliberadamente al mar.',
      'Porque ningún río desemboca en el Mediterráneo.',
      'Porque no tiene comunicación con ningún océano.'
    ],
    correct_index: 0,
    explanation_en: 'The Mediterranean loses more water to evaporation than it receives from precipitation and river runoff. This draws in an eastward surface inflow of Atlantic water through Gibraltar, while denser hypersaline Mediterranean water flows out at depth.',
    explanation_es: 'El Mediterráneo pierde más agua por evaporación de la que recibe por lluvia y ríos. Esto succiona agua superficial atlántica por Gibraltar, mientras agua más densa y salina fluye por el fondo hacia el Atlántico.',
    teks_code: 'TEKS 6.3B',
    nwea_strand: 'Enclosed Seas Dynamics'
  },
  {
    id: 'l3-q9',
    level: 3,
    bloom_category: 'evaluate',
    bloom_title_en: 'Evaluate: Coral Sea Ecosystem Protection',
    bloom_title_es: 'Evaluar: Protección Ecológica del Mar del Coral',
    scenario_en: 'Looking off the northeastern coast of the continent of Oceania / Australia on satellite imagery.',
    scenario_es: 'Observando la costa nororiental del continente de Oceanía / Australia en imágenes satelitales.',
    question_en: 'Which sea contains the Great Barrier Reef, the world’s largest living structure visible from space?',
    question_es: '¿Qué mar alberga la Gran Barrera de Coral, la estructura viva más grande del planeta visible desde el espacio?',
    options_en: [
      'Coral Sea',
      'North Sea',
      'Baltic Sea',
      'Black Sea'
    ],
    options_es: [
      'Mar del Coral',
      'Mar del Norte',
      'Mar Báltico',
      'Mar Negro'
    ],
    correct_index: 0,
    explanation_en: 'The Coral Sea lies off northeast Australia and hosts the Great Barrier Reef (over 2,300 km in length), consisting of billions of living coral polyps that create an immense natural breakwater.',
    explanation_es: 'El Mar del Coral se ubica frente al noreste de Australia y alberga la Gran Barrera de Coral (>2,300 km), formada por miles de millones de pólipos de coral que crean un gigantesco rompeolas vivo.',
    teks_code: 'TEKS 6.4B',
    nwea_strand: 'Marine Biomes & Continental Shelves'
  },
  {
    id: 'l3-q10',
    level: 3,
    bloom_category: 'analyze',
    bloom_title_en: 'Analyze: The Equator and Hemisphere Intersection of Africa',
    bloom_title_es: 'Analizar: El Ecuador y la Intersección Hemisférica de África',
    scenario_en: 'Reviewing the global continental map intersecting the Equator (0° latitude) and Prime Meridian (0° longitude).',
    scenario_es: 'Revisando el mapa continental global que se cruza con el Ecuador (0° latitud) y el Meridiano de Greenwich (0° longitud).',
    question_en: 'Which is the only continent on Earth that spans across all four hemispheres (Northern, Southern, Eastern, and Western)?',
    question_es: '¿Cuál es el único continente de la Tierra que se extiende a través de los cuatro hemisferios (Norte, Sur, Este y Oeste)?',
    options_en: [
      'Africa',
      'North America',
      'Australia',
      'Antarctica'
    ],
    options_es: [
      'África',
      'América del Norte',
      'Australia',
      'Antártida'
    ],
    correct_index: 0,
    explanation_en: 'Africa is bisected almost symmetrically by the Equator (giving it land in both Northern and Southern hemispheres) and is crossed by the Prime Meridian in the west (giving it territory in both Eastern and Western hemispheres).',
    explanation_es: 'África es cortada casi simétricamente por el Ecuador (ocupando los hemisferios Norte y Sur) y es atravesada por el Meridiano de Greenwich al oeste (ocupando los hemisferios Oriental y Occidental).',
    teks_code: 'TEKS 5.6A / 6.3A',
    nwea_strand: 'Global Coordinates & Hemispheres'
  }
];

// ==============================================================================
// LEVEL 4 EVALUATIONS: COUNTRIES BY CONTINENT
// Pass requirement: >= 90% (e.g. 5 out of 5, or 9 out of 10 for the continent)
// ==============================================================================
export const LEVEL_4_CONTINENT_QUESTIONS: Record<string, BloomEvaluationQuestion[]> = {
  'North America': [
    {
      id: 'l4-na-q1',
      level: 4,
      continent_id: 'North America',
      bloom_category: 'analyze',
      bloom_title_en: 'Analyze: Mississippi Drainage Basin Economic Lifeline',
      bloom_title_es: 'Analizar: Autopista Económica de la Cuenca del Misisipi',
      scenario_en: 'Analyzing agricultural bulk transport across the central lowlands of North America.',
      scenario_es: 'Analizando el transporte de graneles agrícolas a través de las llanuras centrales de Norteamérica.',
      question_en: 'Why is the Mississippi River system in the United States considered the world’s most economically valuable natural drainage basin?',
      question_es: '¿Por qué el sistema del río Misisipi en Estados Unidos se considera la cuenca hidrográfica natural más valiosa económicamente del mundo?',
      options_en: [
        'It naturally flows southward through the world’s most fertile agricultural belt (Corn and Soybean belts) directly to the Gulf of Mexico for ocean export without requiring mountain locks.',
        'It is frozen solid 11 months a year, allowing trucks to drive across the ice.',
        'It is the only river in North America with clean drinking water.',
        'It flows backward into Canada.'
      ],
      options_es: [
        'Fluye de norte a sur atravesando el cinturón agrícola más fértil del planeta (maíz y soya) directo al Golfo de México para exportación transoceánica sin esclusas de montaña.',
        'Se congela durante 11 meses al año, permitiendo el paso de camiones sobre el hielo.',
        'Es el único río de Norteamérica con agua potable.',
        'Fluye en sentido inverso hacia Canadá.'
      ],
      correct_index: 0,
      explanation_en: 'The Mississippi-Missouri system provides low-cost barge transportation straight through the fertile agricultural heartland of the US, terminating at deepwater ocean ports on the Gulf Coast.',
      explanation_es: 'El sistema Misisipi-Misuri provee transporte fluvial de bajo costo a través del corazón agrícola de EE.UU., desembocando en puertos de aguas profundas del Golfo de México.',
      teks_code: 'TEKS 5.6A / 6.3B',
      nwea_strand: 'Fluvial Economics'
    },
    {
      id: 'l4-na-q2',
      level: 4,
      continent_id: 'North America',
      bloom_category: 'evaluate',
      bloom_title_en: 'Evaluate: Mexico’s Trans-Mexican Volcanic Belt and Settlement',
      bloom_title_es: 'Evaluar: El Eje Neovolcánico y la Población en México',
      scenario_en: 'Examining population distribution and physical terrain in Mexico.',
      scenario_es: 'Examinando la distribución demográfica y el relieve físico en México.',
      question_en: 'Why is the majority of Mexico’s population concentrated in the high central plateau (Mesa Central) surrounded by active volcanoes like Popocatépetl?',
      question_es: '¿Por qué la mayoría de la población de México se concentra en la meseta central alta rodeada por volcanes activos como el Popocatépetl?',
      options_en: [
        'The high elevation (over 2,000m) moderates tropical heat with a temperate year-round climate, and volcanic ash creates extremely fertile agricultural soils.',
        'Because coastal areas in Mexico are completely covered in solid ice.',
        'Because international treaties forbid living near the Pacific Ocean.',
        'Because oil can only be extracted at elevations above 3,000 meters.'
      ],
      options_es: [
        'La gran altitud (>2,000m) modera el calor tropical brindando un clima templado todo el año, y las cenizas volcánicas generan suelos sumamente fértiles.',
        'Porque las zonas costeras de México están cubiertas de hielo glaciar perpetuo.',
        'Porque tratados internacionales prohíben habitar cerca del Océano Pacífico.',
        'Porque el petróleo solo puede extraerse a altitudes superiores a 3,000 metros.'
      ],
      correct_index: 0,
      explanation_en: 'Elevation mitigates latitude: the Valley of Mexico and central plateau sit at 2,200m elevation, offering mild temperatures and fertile volcanic soil, attracting human civilization from Tenochtitlan to modern CDMX.',
      explanation_es: 'La altitud mitiga la latitud tropical: el Valle de México y la meseta central se elevan a más de 2,200m, ofreciendo clima templado y ricos suelos volcánicos que sostienen a más de 25 millones de personas.',
      teks_code: 'TEKS 6.4C',
      nwea_strand: 'Human Adaptation to Topography'
    },
    {
      id: 'l4-na-q3',
      level: 4,
      continent_id: 'North America',
      bloom_category: 'analyze',
      bloom_title_en: 'Analyze: Yucatan Peninsula Karst and Cenotes',
      bloom_title_es: 'Analizar: El Karst y Cenotes de la Península de Yucatán',
      scenario_en: 'Inspecting satellite imagery and physical maps of southeastern Mexico.',
      scenario_es: 'Inspeccionando imágenes satelitales y mapas físicos del sureste de México.',
      question_en: 'Why does the Yucatan Peninsula have almost zero surface rivers despite receiving tropical rainfall?',
      question_es: '¿Por qué la península de Yucatán carece casi por completo de ríos superficiales a pesar de recibir lluvias tropicales?',
      options_en: [
        'Its porous limestone karst bedrock dissolves, causing rainwater to instantly seep underground into vast subterranean cave systems and sinkholes (cenotes).',
        'The rain evaporates before touching the ground due to extreme heat.',
        'The population drinks all river water before it can flow.',
        'The peninsula is elevated at 5,000 meters where water freezes.'
      ],
      options_es: [
        'Su suelo de roca caliza kárstica porosa se disuelve con el agua, filtrando la lluvia inmediatamente hacia cavernas subterráneas y cenotes.',
        'La lluvia se evapora antes de tocar el suelo debido al calor.',
        'La población bebe toda el agua fluvial antes de que logre fluir.',
        'La península se ubica a 5,000 metros donde el agua se congela.'
      ],
      correct_index: 0,
      explanation_en: 'The Yucatan is a flat limestone platform. Acidic rainwater dissolves carbonate rock, producing karst sinkholes (cenotes) that provided freshwater for Mayan cities without surface rivers.',
      explanation_es: 'Yucatán es una plataforma de piedra caliza. El agua de lluvia disuelve el carbonato creando un sistema kárstico subterráneo con cenotes que abastecieron a la civilización maya sin ríos superficiales.',
      teks_code: 'TEKS 5.7A / 6.3B',
      nwea_strand: 'Karst Geomorphology'
    },
    {
      id: 'l4-na-q4',
      level: 4,
      continent_id: 'North America',
      bloom_category: 'apply',
      bloom_title_en: 'Apply: US Pacific Rim vs Atlantic Coastal Geography',
      bloom_title_es: 'Aplicar: Geografía de la Costa Pacífica vs Atlántica en EE.UU.',
      scenario_en: 'Comparing the Atlantic coastal plain of the United States with the Pacific coast of California and Oregon.',
      scenario_es: 'Comparando la llanura costera atlántica de EE.UU. con la costa pacífica de California y Oregón.',
      question_en: 'What geological difference distinguishes the Atlantic and Pacific coasts of North America?',
      question_es: '¿Qué diferencia geológica distingue las costas atlántica y pacífica de América del Norte?',
      options_en: [
        'The Pacific is an active tectonic boundary with steep cliffs and earthquakes (San Andreas fault), while the Atlantic is a passive margin with wide flat coastal plains.',
        'The Atlantic coast has active volcanoes while the Pacific has none.',
        'The Pacific coast is below sea level while the Atlantic is mountainous.',
        'Both coasts have identical flat beaches without any mountain ranges.'
      ],
      options_es: [
        'La costa pacífica es un margen tectónico activo con acantilados escarpados y sismos (falla de San Andrés), mientras que la atlántica es un margen pasivo con amplias llanuras costeras.',
        'La costa atlántica tiene volcanes activos mientras que el Pacífico no tiene ninguno.',
        'La costa pacífica está bajo el nivel del mar y la atlántica es montañosa.',
        'Ambas costas son idénticas y carecen de cadenas montañosas.'
      ],
      correct_index: 0,
      explanation_en: 'The Pacific coast of North America is an active plate margin featuring mountain ranges right at the water’s edge and seismic faults. The Atlantic is a passive continental margin with wide coastal plains and barrier islands.',
      explanation_es: 'La costa pacífica norteamericana es un borde tectónico activo con cordilleras pegadas al océano y fallas sísmicas. La costa atlántica es un margen pasivo con extensas llanuras y barras de arena.',
      teks_code: 'TEKS 5.6A / 6.3C',
      nwea_strand: 'Tectonic vs Passive Margins'
    },
    {
      id: 'l4-na-q5',
      level: 4,
      continent_id: 'North America',
      bloom_category: 'evaluate',
      bloom_title_en: 'Evaluate: Denali and the Alaska Range Subduction',
      bloom_title_es: 'Evaluar: Denali y la Subducción de la Cordillera de Alaska',
      scenario_en: 'Reviewing the highest point in North America (Denali, 6,190m) located in south-central Alaska.',
      scenario_es: 'Revisando el punto más elevado de América del Norte (Denali, 6,190m) situado en Alaska.',
      question_en: 'Which tectonic process drives the extreme elevation and ongoing uplift of Denali?',
      question_es: '¿Qué proceso tectónico impulsa la extrema altitud y continuo levantamiento de Denali?',
      options_en: [
        'The subduction of the Pacific Plate beneath the North American Plate along the Aleutian Trench.',
        'Desert wind piling sand into a massive mountain.',
        'Glaciers carrying rocks from the North Pole and depositing them in a heap.',
        'The sinking of the Canadian Shield.'
      ],
      options_es: [
        'La subducción de la placa del Pacífico bajo la placa norteamericana a lo largo de la fosa de las Aleutianas.',
        'El viento del desierto acumulando arena en una montaña colosal.',
        'Glaciares que transportaron rocas desde el Polo Norte y las apilaron.',
        'El hundimiento del Escudo Canadiense.'
      ],
      correct_index: 0,
      explanation_en: 'Denali’s massive granite pluton is continuously thrust upward by tectonic compressive forces generated as the Pacific Plate subducts under southern Alaska.',
      explanation_es: 'El gigantesco plutón granítico de Denali se eleva continuamente por las fuerzas tectónicas compresivas de la subducción de la placa del Pacífico bajo Alaska.',
      teks_code: 'TEKS 6.3C',
      nwea_strand: 'Orogenic Mountain Building'
    }
  ],

  'South America': [
    {
      id: 'l4-sa-q1',
      level: 4,
      continent_id: 'South America',
      bloom_category: 'analyze',
      bloom_title_en: 'Analyze: The Amazon River Discharge Volume',
      bloom_title_es: 'Analizar: Caudal y Descarga del Río Amazonas',
      scenario_en: 'Studying satellite images of the mouth of the Amazon River emptying into the Atlantic Ocean near Macapá, Brazil.',
      scenario_es: 'Estudiando imágenes de satélite de la desembocadura del río Amazonas en el Océano Atlántico en Macapá, Brasil.',
      question_en: 'How does the Amazon River’s freshwater discharge fundamentally alter the surrounding Atlantic Ocean?',
      question_es: '¿Cómo altera fundamentalmente la descarga de agua dulce del Amazonas el océano Atlántico circundante?',
      options_en: [
        'It discharges approximately 209,000 m³/sec—more than the next 7 largest rivers combined—diluting ocean salinity and carrying sediment plumes over 160 km offshore.',
        'It causes the Atlantic Ocean to freeze solid into a glacier.',
        'It drains the ocean dry, causing the water level to drop.',
        'It turns the Atlantic water into boiling thermal water.'
      ],
      options_es: [
        'Vierte aproximadamente 209,000 m³/seg —más que los siguientes 7 ríos combinados— diluyendo la salinidad marina y extendiendo sedimentos a más de 160 km mar adentro.',
        'Provoca que el océano Atlántico se congele en un glaciar sólido.',
        'Seca el océano provocando que el nivel del mar descienda.',
        'Convierte el agua del Atlántico en agua termal hirviendo.'
      ],
      correct_index: 0,
      explanation_en: 'The Amazon outputs one-fifth of Earth’s total river discharge into the oceans. Its massive freshwater plume reduces surface salinity for over 100 miles into the open Atlantic.',
      explanation_es: 'El río Amazonas expulsa una quinta parte de toda el agua fluvial del planeta al océano, diluyendo la salinidad del Atlántico en un radio de más de 160 km mar adentro.',
      teks_code: 'TEKS 6.3B / 6.4B',
      nwea_strand: 'Fluvial Hydrology'
    },
    {
      id: 'l4-sa-q2',
      level: 4,
      continent_id: 'South America',
      bloom_category: 'evaluate',
      bloom_title_en: 'Evaluate: Bolivia’s Landlocked Geography and Salar de Uyuni',
      bloom_title_es: 'Evaluar: La Condición Mediterránea de Bolivia y el Salar de Uyuni',
      scenario_en: 'Examining Bolivia’s physical location in South America and its Salar de Uyuni deposit.',
      scenario_es: 'Examinando la ubicación física de Bolivia en Sudamérica y el yacimiento del Salar de Uyuni.',
      question_en: 'What geographic and economic dilemma defines Bolivia compared to coastal South American nations?',
      question_es: '¿Qué dilema geográfico y económico define a Bolivia frente a las naciones costeras sudamericanas?',
      options_en: [
        'It is completely landlocked without direct sovereign sea access, yet holds the world’s largest lithium brine reserves on its high-altitude Altiplano salt flat.',
        'It is an archipelago of 500 tropical islands that lacks any mountains.',
        'It has no mineral resources or agriculture whatsoever.',
        'It is located entirely in the Caribbean Sea.'
      ],
      options_es: [
        'Es un país sin salida al mar soberana, pero alberga las mayores reservas de litio del mundo en su salar del Altiplano a más de 3,600 metros de altitud.',
        'Es un archipiélago de 500 islas tropicales que carece de cordilleras.',
        'No posee ningún recurso mineral ni agrícola.',
        'Está ubicado enteramente en el Mar Caribe.'
      ],
      correct_index: 0,
      explanation_en: 'Bolivia is landlocked, meaning all mineral exports (lithium, zinc, tin) must cross foreign territory to reach ocean ports, adding transport tariffs and logistical friction.',
      explanation_es: 'Bolivia no tiene litoral marítimo propio; sus exportaciones minerales (litio, zinc, gas) deben cruzar puertos de países vecinos, lo que encarece los costos logísticos.',
      teks_code: 'TEKS 6.3A / 6.6B',
      nwea_strand: 'Landlocked Economic Geography'
    },
    {
      id: 'l4-sa-q3',
      level: 4,
      continent_id: 'South America',
      bloom_category: 'analyze',
      bloom_title_en: 'Analyze: Venezuela’s Orinoco Belt and Lake Maracaibo Hydrocarbons',
      bloom_title_es: 'Analizar: La Faja del Orinoco y los Hidrocarburos del Lago de Maracaibo',
      scenario_en: 'Investigating Venezuela’s natural resource map across its four geographic regions.',
      scenario_es: 'Investigando el mapa de recursos naturales de Venezuela en sus cuatro regiones geográficas.',
      question_en: 'Why does Venezuela possess the world’s largest proven crude oil reserves (~303 billion barrels)?',
      question_es: '¿Por qué Venezuela posee las mayores reservas probadas de petróleo del mundo (~303 mil millones de barriles)?',
      options_en: [
        'Ancient geological sedimentary basins in the Orinoco River Belt and Lake Maracaibo basin accumulated massive organic matter deposits over millions of years.',
        'Because oil falls from rainclouds in the Amazon rainforest.',
        'Because Venezuela imported all its oil from Antarctica.',
        'Because gold deposits chemically turned into oil during earthquakes.'
      ],
      options_es: [
        'Antiguas cuencas sedimentarias en la Faja del Orinoco y el Lago de Maracaibo atraparon inmensas acumulaciones de materia orgánica a lo largo de millones de años.',
        'Porque el petróleo cae de las nubes de lluvia en la selva amazónica.',
        'Porque Venezuela importó todo su petróleo desde la Antártida.',
        'Porque los depósitos de oro se transformaron químicamente en petróleo durante terremotos.'
      ],
      correct_index: 0,
      explanation_en: 'Sedimentary foreland basins along the Orinoco and the Maracaibo marine inlet trapped Cretaceous organic sediments that matured into colossal extra-heavy crude reservoirs.',
      explanation_es: 'Las cuencas sedimentarias del Orinoco y Maracaibo atraparon sedimentos orgánicos del Cretácico que maduraron en la mayor concentración de crudo pesado del planeta.',
      teks_code: 'TEKS 6.4B / 6.5A',
      nwea_strand: 'Natural Resource Distribution'
    },
    {
      id: 'l4-sa-q4',
      level: 4,
      continent_id: 'South America',
      bloom_category: 'apply',
      bloom_title_en: 'Apply: Tepuis of the Guiana Highlands (Angel Falls)',
      bloom_title_es: 'Aplicar: Los Tepuyes del Escudo Guayanés (Salto Ángel)',
      scenario_en: 'Observing Auyán-tepui in southern Venezuela, source of Angel Falls (979m).',
      scenario_es: 'Observando el Auyantepuy en el sur de Venezuela, origen del Salto Ángel (979m).',
      question_en: 'What unique geological landform is a "Tepui"?',
      question_es: '¿Qué tipo de accidente geográfico singular es un "Tepuy"?',
      options_en: [
        'A Precambrian flat-topped table mountain (meseta) with sheer vertical sandstone cliffs rising dramatically above the rainforest floor.',
        'An active volcanic cone erupting hot lava into ocean water.',
        'A sand dune formed by ocean storms.',
        'A glacier formed near the equator.'
      ],
      options_es: [
        'Una meseta precámbrica de cumbre plana con acantilados verticales de arenisca que se elevan abruptamente sobre la selva.',
        'Un cono volcánico activo que vierte lava ardiente al océano.',
        'Una duna de arena formada por tormentas marinas.',
        'Un glaciar formado en el ecuador a nivel del mar.'
      ],
      correct_index: 0,
      explanation_en: 'Tepuis are ancient sandstone tablemountains dating back 1.7 billion years. Erosion sculpted vertical walls from which Angel Falls plunges 979 meters without interruption.',
      explanation_es: 'Los tepuyes son mesetas tabulares de arenisca precámbrica. La erosión milenaria aisló sus cimas con paredes verticales de donde cae el Salto Ángel (979m).',
      teks_code: 'TEKS 5.6A / 6.3B',
      nwea_strand: 'Precambrian Geomorphology'
    },
    {
      id: 'l4-sa-q5',
      level: 4,
      continent_id: 'South America',
      bloom_category: 'evaluate',
      bloom_title_en: 'Evaluate: Lake Titicaca Navigability and Microclimate',
      bloom_title_es: 'Evaluar: Navegabilidad y Microclima del Lago Titicaca',
      scenario_en: 'Looking at Lake Titicaca shared between Bolivia and Peru on the Andean Altiplano.',
      scenario_es: 'Observando el Lago Titicaca compartido entre Bolivia y Perú en el Altiplano andino.',
      question_en: 'Why has Lake Titicaca (elevation 3,812m) supported high-density indigenous civilizations for millennia despite freezing Altiplano night temperatures?',
      question_es: '¿Por qué el Lago Titicaca (altitud 3,812m) sostuvo civilizaciones indígenas durante milenios a pesar de las heladas nocturnas del Altiplano?',
      options_en: [
        'Its vast water volume stores solar heat during the day and radiates warmth at night, creating a protective thermal microclimate that prevents frost on shoreline potato and quinoa crops.',
        'Because the lake water is volcanic boiling acid that melts snow.',
        'Because it is located right on the beach at sea level.',
        'Because the lake produces gold coins naturally.'
      ],
      options_es: [
        'Su inmenso volumen de agua retiene el calor solar de día y lo irradia de noche, creando un microclima térmico que evita heladas en cultivos de papa y quinua.',
        'Porque el agua del lago es ácido volcánico hirviente que derrite la nieve.',
        'Porque está ubicado justo en la playa a nivel del mar.',
        'Porque el lago produce monedas de oro de forma natural.'
      ],
      correct_index: 0,
      explanation_en: 'Water has a high specific heat capacity. Lake Titicaca acts as a giant solar thermal radiator, elevating surrounding air temperatures by several degrees and enabling agriculture at 3,800m elevation.',
      explanation_es: 'El agua posee alta capacidad calorífica. El lago Titicaca absorbe radiación diurna e irradia calor por la noche, moderando las temperaturas y permitiendo la agricultura en el Altiplano.',
      teks_code: 'TEKS 6.4C',
      nwea_strand: 'Thermal Microclimates & Agriculture'
    }
  ],

  'Europe': [
    {
      id: 'l4-eu-q1',
      level: 4,
      continent_id: 'Europe',
      bloom_category: 'analyze',
      bloom_title_en: 'Analyze: Switzerland as the "Water Tower of Europe"',
      bloom_title_es: 'Analizar: Suiza como la "Torre de Agua de Europa"',
      scenario_en: 'Inspecting physical maps of the Alps in central Europe.',
      scenario_es: 'Inspeccionando mapas físicos de los Alpes en Europa central.',
      question_en: 'Why is landlocked Switzerland frequently referred to as the "Water Tower of Europe"?',
      question_es: '¿Por qué se llama frecuentemente a Suiza la "Torre de Agua de Europa"?',
      options_en: [
        'Its high-altitude alpine glaciers and snowpack feed major transcontinental rivers (Rhine, Rhone, Inn/Danube tributary, Ticino/Po) that supply drinking water and hydropower across Europe.',
        'Because Switzerland built a concrete water tower on top of the Matterhorn.',
        'Because Switzerland has more ocean shoreline than any other European nation.',
        'Because it experiences 300 days of heavy rain every year.'
      ],
      options_es: [
        'Sus glaciares alpinos y nieves alimentan grandes ríos transcontinentales (Rin, Ródano, Danubio, Po) que abastecen de agua y energía hidroeléctrica a Europa.',
        'Porque Suiza construyó una torre de agua de hormigón en la cima del Cervino.',
        'Porque Suiza posee más costa oceánica que cualquier otro país europeo.',
        'Porque experimenta 300 días de lluvia torrencial al año.'
      ],
      correct_index: 0,
      explanation_en: 'The Swiss Alps hold 6% of Europe’s freshwater in glaciers and lakes. Major international rivers (the Rhine flowing north, the Rhone flowing south) originate in Swiss mountain passes.',
      explanation_es: 'Los Alpes suizos almacenan el 6% del agua dulce europea en glaciares. Cuencas fluviales clave como el Rin (hacia el Mar del Norte) y el Ródano (hacia el Mediterráneo) nacen en sus cumbres.',
      teks_code: 'TEKS 6.4B',
      nwea_strand: 'Hydrologic Headwaters'
    },
    {
      id: 'l4-eu-q2',
      level: 4,
      continent_id: 'Europe',
      bloom_category: 'evaluate',
      bloom_title_en: 'Evaluate: Norway’s Sovereign Wealth Fund and North Sea Energy',
      bloom_title_es: 'Evaluar: El Fondo Soberano de Noruega y la Energía del Mar del Norte',
      scenario_en: 'Evaluating Norway’s natural resource management in Northern Europe.',
      scenario_es: 'Evaluando la gestión de recursos naturales de Noruega en el norte de Europa.',
      question_en: 'How did Norway’s physical geography on the North Sea shelf transform its modern economy into a global financial powerhouse?',
      question_es: '¿Cómo transformó la geografía del Mar del Norte la economía de Noruega en una potencia financiera global?',
      options_en: [
        'Offshore petroleum and natural gas extracted from its continental shelf were invested into the world’s largest Sovereign Wealth Fund ($1.6 Trillion), while mountain waterfalls supply 90%+ clean domestic electricity.',
        'By chopping down all of its forests to sell firewood to Africa.',
        'By mining gold from inside melting glaciers.',
        'By charging ships to look at its fjords.'
      ],
      options_es: [
        'El petróleo y gas de su plataforma continental se invirtieron en el mayor Fondo Soberano del mundo ($1.6 billones), mientras sus cascadas alpinas generan más del 90% de electricidad limpia.',
        'Talando todos sus bosques para vender leña a África.',
        'Extrayendo oro del interior de glaciares en deshielo.',
        'Cobrando a los barcos por contemplar sus fiordos.'
      ],
      correct_index: 0,
      explanation_en: 'Norway utilizes its steep mountain topography for domestic hydroelectricity (freeing petroleum for export) and places oil profits into a sovereign generational wealth fund.',
      explanation_es: 'Noruega aprovecha su relieve montañoso para generar hidroelectricidad limpia doméstica y ahorra los ingresos del petróleo del Mar del Norte en su Fondo Soberano de Inversión.',
      teks_code: 'TEKS 6.5B',
      nwea_strand: 'Resource Economics'
    },
    {
      id: 'l4-eu-q3',
      level: 4,
      continent_id: 'Europe',
      bloom_category: 'understand',
      bloom_title_en: 'Understand: Pyramidal Glacial Horns (The Matterhorn)',
      bloom_title_es: 'Comprender: Cuernos Glaciares Piramidales (El Cervino)',
      scenario_en: 'Studying the Matterhorn (Cervino) in the Swiss-Italian Alps.',
      scenario_es: 'Estudiando el monte Cervino (Matterhorn) en los Alpes suizo-italianos.',
      question_en: 'What specific glacial erosional process formed the Matterhorn’s dramatic four-sided pyramid peak?',
      question_es: '¿Qué proceso erosivo glaciar modeló la cumbre piramidal de cuatro caras del Cervino?',
      options_en: [
        'Multiple glacial cirques eroded the mountain headwalls backward from three or four opposing sides, creating a sharp pyramidal horn.',
        'Volcanic lava cooled in an exact triangular mold.',
        'Ancient rivers carved horizontal caves that collapsed.',
        'Earthquakes sliced the mountain with razor-sharp fault lines.'
      ],
      options_es: [
        'Múltiples circos glaciares erosionaron las laderas montañosas hacia atrás desde tres o cuatro lados opuestos, dejando un cuerno piramidal afilado.',
        'La lava volcánica se enfrió en un molde triangular exacto.',
        'Antiguos ríos excavaron cuevas horizontales que colapsaron.',
        'Terremotos cortaron la montaña con fallas simétricas.'
      ],
      correct_index: 0,
      explanation_en: 'A glacial horn is formed when three or more glacial cirques hollow out bowl-shaped depressions on opposing flanks of a single peak, leaving a sharp pyramidal summit.',
      explanation_es: 'Un cuerno glaciar (horn) se produce cuando tres o más glaciares de circo erosionan de forma convergente las laderas opuestas de un macizo, esculpiendo un pico piramidal.',
      teks_code: 'TEKS 5.7A / 6.3B',
      nwea_strand: 'Glacial Geomorphology'
    }
  ],

  'Africa': [
    {
      id: 'l4-af-q1',
      level: 4,
      continent_id: 'Africa',
      bloom_category: 'analyze',
      bloom_title_en: 'Analyze: Egypt’s Extreme Population Concentration along the Nile',
      bloom_title_es: 'Analizar: Concentración Extrema de Población en el Nilo',
      scenario_en: 'Examining population density maps and nighttime satellite imagery of Egypt.',
      scenario_es: 'Examinando mapas de densidad poblacional e imágenes satelitales nocturnas de Egipto.',
      question_en: 'Why do more than 95% of Egypt’s 109 million inhabitants live on less than 5% of its total land area?',
      question_es: '¿Por qué más del 95% de los 109 millones de habitantes de Egipto vive en menos del 5% del territorio nacional?',
      options_en: [
        'Because the Nile River Valley and Delta provide the only perennial source of freshwater and arable silt soil in a country that is otherwise 95% barren Sahara desert.',
        'Because laws prohibit citizens from building homes away from Cairo.',
        'Because the rest of the country is covered in dense tropical jungle.',
        'Because snowstorms make the desert uninhabitable.'
      ],
      options_es: [
        'Porque el valle y delta del río Nilo proveen la única fuente perenne de agua dulce y suelo fértil en un país que de otro modo es 95% desierto árido del Sáhara.',
        'Porque leyes prohíben a los ciudadanos construir casas lejos de El Cairo.',
        'Porque el resto del país está cubierto de densa selva tropical húmeda.',
        'Porque tormentas de nieve hacen que el desierto sea inhabitable.'
      ],
      correct_index: 0,
      explanation_en: 'Egypt is a classic riverine civilization: without the Nile, Egypt would be an uninhabited extension of the hyper-arid Sahara. Settlements, irrigation, and cities cling exclusively to the fertile green ribbon of the river.',
      explanation_es: 'Egipto es el ejemplo supremo de civilización fluvial: la extrema aridez del Sáhara hace que el agua del Nilo sea la única base de subsistencia agrícola y urbana.',
      teks_code: 'TEKS 6.4C',
      nwea_strand: 'Settlement Patterns & Aridity'
    },
    {
      id: 'l4-af-q2',
      level: 4,
      continent_id: 'Africa',
      bloom_category: 'evaluate',
      bloom_title_en: 'Evaluate: The Suez Canal as a Global Strategic Choke Point',
      bloom_title_es: 'Evaluar: El Canal de Suez como Cuello de Botella Estratégico',
      scenario_en: 'Analyzing maritime trade routes between Asia and Europe on global maps.',
      scenario_es: 'Analizando rutas de comercio marítimo entre Asia y Europa en mapas globales.',
      question_en: 'What geographic shortcut does the Suez Canal across the Isthmus of Suez provide to world shipping?',
      question_es: '¿Qué atajo geográfico ofrece el Canal de Suez a través del istmo de Suez al comercio marítimo mundial?',
      options_en: [
        'It connects the Mediterranean Sea directly to the Red Sea, saving cargo vessels approximately 7,000 kilometers and 10 to 14 days by eliminating the need to circumnavigate Africa around the Cape of Good Hope.',
        'It allows submarines to tunnel through the center of the Earth to South America.',
        'It connects the Atlantic Ocean to the Arctic Ocean across the North Pole.',
        'It is an elevated aqueduct carrying cruise ships over the Sahara Desert.'
      ],
      options_es: [
        'Conecta el mar Mediterráneo directamente con el mar Rojo, ahorrando a los buques unos 7,000 km y 10-14 días al evitar rodear toda África por el cabo de Buena Esperanza.',
        'Permite a los submarinos cruzar el centro de la Tierra hacia Sudamérica.',
        'Conecta el océano Atlántico con el océano Ártico a través del Polo Norte.',
        'Es un acueducto elevado que transporta cruceros por encima del desierto del Sáhara.'
      ],
      correct_index: 0,
      explanation_en: 'The 193-km sea-level Suez Canal opened in 1869, linking the Mediterranean and Red Sea. It eliminates the long voyage around Africa’s Cape of Good Hope, handling 12% of global seaborne commerce.',
      explanation_es: 'El Canal de Suez (193 km) une el Mediterráneo con el Mar Rojo. Elimina la necesidad de circunnavegar el continente africano por el Cabo de Buena Esperanza, canalizando el 12% del comercio marítimo mundial.',
      teks_code: 'TEKS 6.8A',
      nwea_strand: 'Global Trade Choke Points'
    }
  ],

  'Asia': [
    {
      id: 'l4-as-q1',
      level: 4,
      continent_id: 'Asia',
      bloom_category: 'analyze',
      bloom_title_en: 'Analyze: Japan’s Volcanic Archipelago and Earthquake Density',
      bloom_title_es: 'Analizar: El Archipiélago Volcánico y Sismicidad en Japón',
      scenario_en: 'Examining tectonic boundary maps and population distribution in Japan.',
      scenario_es: 'Examinando mapas de placas tectónicas y distribución poblacional en Japón.',
      question_en: 'Why does Japan experience over 1,500 detectable earthquakes annually and possess over 100 active volcanoes like Mount Fuji?',
      question_es: '¿Por qué Japón experimenta más de 1,500 sismos perceptibles al año y posee más de 100 volcanes activos como el Monte Fuji?',
      options_en: [
        'It is an island arc formed at the collision and subduction zone of four major tectonic plates (Pacific, Philippine Sea, Eurasian, and North American plates) along the Pacific Ring of Fire.',
        'Because Japanese bullet trains vibrate the ground continuously.',
        'Because typhoons push ocean water into underground caves.',
        'Because coal mining underground collapsed the island bedrock.'
      ],
      options_es: [
        'Es un arco de islas formado en la zona de subducción y colisión de cuatro placas tectónicas (Pacífico, Mar de Filipinas, Euroasiática y Norteamericana) en el Cinturón de Fuego.',
        'Porque los trenes bala generan vibraciones continuas en el terreno.',
        'Porque los tifones empujan agua a cavernas subterráneas.',
        'Porque la minería de carbón colapsó los cimientos de la isla.'
      ],
      correct_index: 0,
      explanation_en: 'Japan is a classic island arc situated on the Pacific Ring of Fire at the intersection of four tectonic plates, creating intense subduction seismicity and stratovolcanoes.',
      explanation_es: 'Japón es un arco insular volcánico situado en el Cinturón de Fuego del Pacífico donde convergen 4 placas tectónicas, provocando subducción activa, tsunamis y vulcanismo continuo.',
      teks_code: 'TEKS 6.3C',
      nwea_strand: 'Plate Tectonics & Volcanic Arcs'
    },
    {
      id: 'l4-as-q2',
      level: 4,
      continent_id: 'Asia',
      bloom_category: 'evaluate',
      bloom_title_en: 'Evaluate: Saudi Arabia’s Total Lack of Perennial Rivers and Desalination',
      bloom_title_es: 'Evaluar: La Ausencia de Ríos Perennes y Desalinización en Arabia Saudita',
      scenario_en: 'Studying hydrological resources across the Arabian Peninsula.',
      scenario_es: 'Estudiando los recursos hídricos en la península Arábiga.',
      question_en: 'How does Saudi Arabia provide drinking water to its 36 million citizens given that it has zero permanent rivers or natural lakes?',
      question_es: '¿Cómo provee agua potable Arabia Saudita a sus 36 millones de habitantes teniendo cero ríos permanentes y cero lagos naturales?',
      options_en: [
        'By utilizing energy-intensive thermal and reverse-osmosis seawater desalination plants along the Red Sea and Persian Gulf, powered by oil and natural gas.',
        'By importing ice cubes in cargo airplanes from Antarctica.',
        'By digging canals to bring water from the Amazon River.',
        'By relying exclusively on daily rain showers.'
      ],
      options_es: [
        'Mediante megacomplejos de desalinización de agua de mar por ósmosis inversa y destilación térmica en el Mar Rojo y Golfo Pérsico, alimentados por gas y petróleo.',
        'Importando cubos de hielo en aviones de carga desde la Antártida.',
        'Cavando canales para traer agua desde el río Amazonas.',
        'Dependiendo de lluvias torrenciales diarias.'
      ],
      correct_index: 0,
      explanation_en: 'Saudi Arabia is the world’s largest producer of desalinated seawater. It converts petroleum wealth into potable water, generating over 50% of its drinking water from coastal desalination facilities.',
      explanation_es: 'Arabia Saudita es el mayor productor de agua desalinizada del mundo, transformando sus hidrocarburos en agua potable en plantas costeras a lo largo del Mar Rojo y Golfo Pérsico.',
      teks_code: 'TEKS 6.4C / 6.5A',
      nwea_strand: 'Desalination & Arid Adaptation'
    },
    {
      id: 'l4-as-q3',
      level: 4,
      continent_id: 'Asia',
      bloom_category: 'analyze',
      bloom_title_en: 'Analyze: The Tibetan Plateau as the "Water Tower of Asia"',
      bloom_title_es: 'Analizar: La Meseta Tibetana como la "Torre de Agua de Asia"',
      scenario_en: 'Analyzing continental hydrologic maps of major river origins in Asia.',
      scenario_es: 'Analizando mapas hidrológicos continentales del nacimiento de los grandes ríos de Asia.',
      question_en: 'Why is the Tibetan Plateau known among geographers and climatologists as the "Water Tower of Asia"?',
      question_es: '¿Por qué la meseta del Tíbet es llamada por geógrafos y climatólogos la "Torre de Agua de Asia"?',
      options_en: [
        'Because its vast glaciers and high-altitude snowpack feed ten major river systems (including the Yangtze, Yellow, Mekong, Ganges, Indus, and Brahmaputra) that sustain over 1.4 billion people.',
        'Because massive concrete municipal water tanks were built across the peaks.',
        'Because heavy rainfall floods the plateau every day without stopping.',
        'Because the Pacific Ocean flows uphill into the mountains.'
      ],
      options_es: [
        'Porque sus inmensos glaciares y campos de nieve alimentan diez de los mayores sistemas fluviales de Asia (Yangtsé, Amarillo, Mekong, Ganges, Indo y Brahmaputra), sustentando a más de 1,400 millones de personas.',
        'Porque se construyeron tanques gigantescos de concreto en todas las cumbres.',
        'Porque lluvias torrenciales inundan la meseta a diario sin descanso.',
        'Porque el Océano Pacífico sube cuesta arriba hacia las montañas.'
      ],
      correct_index: 0,
      explanation_en: 'The Tibetan Plateau stores more glacial ice than any region outside the North and South Poles, feeding the primary river basins of China, India, Pakistan, and Southeast Asia.',
      explanation_es: 'La meseta tibetana almacena la mayor cantidad de hielo glaciar fuera de los polos, dando origen a las cuencas fluviales que sostienen la agricultura y vida de casi un tercio de la humanidad.',
      teks_code: 'TEKS 6.4C / 6.3B',
      nwea_strand: 'Highland Hydrology & Downstream River Basins'
    },
    {
      id: 'l4-as-q4',
      level: 4,
      continent_id: 'Asia',
      bloom_category: 'evaluate',
      bloom_title_en: 'Evaluate: The Strait of Malacca Maritime Choke Point',
      bloom_title_es: 'Evaluar: El Estrecho de Malaca como Punto Estratégico Global',
      scenario_en: 'Examining global maritime shipping routes between the Indian and Pacific Oceans.',
      scenario_es: 'Examinando las rutas marítimas globales de comercio entre los océanos Índico y Pacífico.',
      question_en: 'Why is the narrow Strait of Malacca between Indonesia, Malaysia, and Singapore considered one of the most critical economic choke points on Earth?',
      question_es: '¿Por qué el estrecho de Malaca entre Indonesia, Malasia y Singapur es considerado uno de los pasos marítimos más críticos del planeta?',
      options_en: [
        'It is the shortest sea corridor linking Middle Eastern energy exporters and European markets to industrial East Asian economies (China, Japan, South Korea), carrying over 25% of global traded goods.',
        'Because ships must pay in gold coins to pass the equator.',
        'Because it is the only place in the world where ocean water is warm enough for cargo ships.',
        'Because all other oceans are blocked by polar ice year-round.'
      ],
      options_es: [
        'Es el corredor naval más corto que une los hidrocarburos de Oriente Medio y el comercio europeo con las grandes economías industriales de Asia Oriental (China, Japón, Corea del Sur), canalizando más del 25% del comercio marítimo mundial.',
        'Porque los barcos deben pagar en monedas de oro para cruzar la línea del ecuador.',
        'Porque es el único lugar donde el agua marina es apta para barcos portacontenedores.',
        'Porque todos los demás océanos están congelados todo el año.'
      ],
      correct_index: 0,
      explanation_en: 'The Strait of Malacca is the vital maritime bridge between the Indian and Pacific Oceans. More than 80,000 vessels and roughly a quarter of all traded goods pass through this narrow passage every year.',
      explanation_es: 'El estrecho de Malaca es el nexo indispensable entre el océano Índico y el Pacífico; por sus aguas transitan más de 80,000 buques anuales y una cuarta parte de todos los bienes comerciados en el planeta.',
      teks_code: 'TEKS 6.8A',
      nwea_strand: 'Global Trade Choke Points & Maritime Corridors'
    }
  ],

  'Oceania': [
    {
      id: 'l4-oc-q1',
      level: 4,
      continent_id: 'Oceania',
      bloom_category: 'analyze',
      bloom_title_en: 'Analyze: Australia’s Coastal Urbanization and Outback Aridity',
      bloom_title_es: 'Analizar: Urbanización Costera y la Aridez del Outback Australiano',
      scenario_en: 'Examining population settlement maps of the Australian continent.',
      scenario_es: 'Examinando mapas de distribución demográfica del continente australiano.',
      question_en: 'Why do more than 85% of Australians live within 50 km of the coast, leaving the vast interior almost empty?',
      question_es: '¿Por qué más del 85% de los australianos vive a menos de 50 km de la costa, dejando el interior casi desierto?',
      options_en: [
        'The interior "Outback" is dominated by hyper-arid deserts (Great Victoria, Gibson) blocked from rain by coastal mountain ranges (Great Dividing Range), while temperate coastal plains receive maritime rain.',
        'Because poisonous volcanic lava flows across the center of Australia every day.',
        'Because the interior is frozen beneath an ice sheet.',
        'Because Australian citizens are legally prohibited from leaving coastal beaches.'
      ],
      options_es: [
        'El interior ("Outback") está dominado por desiertos áridos donde las lluvias son bloqueadas por la Gran Cordillera Divisoria, mientras que las franjas costeras reciben humedad marina templada.',
        'Porque ríos de lava volcánica tóxica fluyen por el centro de Australia a diario.',
        'Porque el interior está congelado bajo una capa de hielo glaciar.',
        'Porque los ciudadanos australianos tienen prohibido por ley salir de las playas costeras.'
      ],
      correct_index: 0,
      explanation_en: 'Australia is the flattest and driest inhabited continent. The Great Dividing Range traps moisture along the eastern coast, leaving the interior Outback an arid rain-shadow basin.',
      explanation_es: 'Australia es el continente habitado más seco y plano del planeta. La Gran Cordillera Divisoria retiene la humedad en la costa este, relegando el interior del país a desiertos áridos.',
      teks_code: 'TEKS 6.3B / 6.4C',
      nwea_strand: 'Coastal Settlement vs Arid Interior'
    },
    {
      id: 'l4-oc-q2',
      level: 4,
      continent_id: 'Oceania',
      bloom_category: 'evaluate',
      bloom_title_en: 'Evaluate: Australia’s Pilbara Mineral Wealth and Asian Trade',
      bloom_title_es: 'Evaluar: Riqueza Minera de Pilbara y Comercio con Asia',
      scenario_en: 'Analyzing international trade maps of Australian mineral exports.',
      scenario_es: 'Analizando mapas de comercio exterior y exportaciones mineras australianas.',
      question_en: 'How does Australia’s ancient geological craton shape its modern export economy?',
      question_es: '¿Cómo moldea el antiguo cratón geológico de Australia su economía moderna de exportación?',
      options_en: [
        'Ancient, weathered rocks in Western Australia (Pilbara) contain immense surface deposits of high-grade iron ore and lithium, which are bulk-shipped north across the Indian and Pacific oceans to industrial Asian economies.',
        'Australia only exports tropical bananas and mangoes.',
        'Australia has no natural resources and survives entirely on foreign food aid.',
        'Australia exports glacier icebergs to the South Pole.'
      ],
      options_es: [
        'Rocas precámbricas erosionadas en Australia Occidental (Pilbara) albergan depósitos gigantescos de mineral de hierro y litio, exportados masivamente hacia Asia.',
        'Australia solo exporta plátanos tropicales y mangos.',
        'Australia no tiene recursos naturales y sobrevive con ayuda alimentaria.',
        'Australia exporta témpanos de hielo glaciar hacia el Polo Sur.'
      ],
      correct_index: 0,
      explanation_en: 'The ancient Western Australian craton is rich in banded iron formations and lithium, making Australia the world’s top exporter of iron ore and clean-energy lithium directly feeding Asian manufacturing.',
      explanation_es: 'El cratón precámbrico de Australia Occidental contiene los yacimientos de hierro y litio más puros del mundo, convirtiendo al país en el principal proveedor de materias primas para la industria de Asia.',
      teks_code: 'TEKS 6.6B',
      nwea_strand: 'Geological Resource Extraction & Global Trade'
    }
  ]
};
