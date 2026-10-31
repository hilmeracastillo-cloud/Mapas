import { LandformGlossaryItem } from '../types/geography';

export const LANDFORMS_GLOSSARY: LandformGlossaryItem[] = [
  {
    id: 'island',
    type: 'island',
    category: 'coastal',
    name_en: 'Island',
    name_es: 'Isla',
    definition_en: 'A tract of land completely surrounded by water, smaller than a continent.',
    definition_es: 'Una porción de tierra completamente rodeada de agua, de menor tamaño que un continente.',
    key_characteristics_en: [
      'Entire perimeter bounded by water',
      'Can be continental, volcanic, or coral reef in origin',
      'Often hosts unique isolated ecological species'
    ],
    key_characteristics_es: [
      'Perímetro totalmente rodeado por agua',
      'Puede ser de origen continental, volcánico o coralino',
      'Alberga con frecuencia ecosistemas aislados y únicos'
    ],
    diagram_svg: `<svg viewBox="0 0 160 100" class="w-full h-24">
      <defs>
        <linearGradient id="waterGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#38bdf8"/>
          <stop offset="100%" stop-color="#0284c7"/>
        </linearGradient>
        <linearGradient id="islandGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#4ade80"/>
          <stop offset="100%" stop-color="#15803d"/>
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="160" height="100" fill="url(#waterGrad)"/>
      <ellipse cx="80" cy="55" rx="50" ry="24" fill="url(#islandGrad)"/>
      <ellipse cx="80" cy="50" rx="35" ry="15" fill="#86efac" opacity="0.6"/>
      <path d="M72 45 Q75 35 78 45" stroke="#78350f" stroke-width="2" fill="none"/>
      <circle cx="78" cy="35" r="4" fill="#166534"/>
    </svg>`,
    example_name_en: 'Madagascar',
    example_name_es: 'Madagascar',
    example_country: 'Madagascar',
    example_coords: [-18.7669, 46.8691],
    example_zoom: 6,
    fun_fact_en: 'Greenland is the largest non-continental island in the world (approx 2.16 million km²)!',
    fun_fact_es: '¡Groenlandia es la isla no continental más grande del planeta con unos 2.16 millones de km²!'
  },
  {
    id: 'archipelago',
    type: 'archipelago',
    category: 'coastal',
    name_en: 'Archipelago',
    name_es: 'Archipiélago',
    definition_en: 'A cluster, chain, or group of islands scattered across an expanse of sea or ocean.',
    definition_es: 'Un conjunto o cadena de islas agrupadas en una extensión de mar u océano.',
    key_characteristics_en: [
      'Multiple islands sharing geological or volcanic origins',
      'Often arranged in arcs along tectonic plate boundaries',
      'Creates complex marine channels and straits'
    ],
    key_characteristics_es: [
      'Múltiples islas con orígenes tectónicos o volcánicos compartidos',
      'Dispuestas habitualmente en arcos insulares oceánicos',
      'Genera canales marítimos y estrechos'
    ],
    diagram_svg: `<svg viewBox="0 0 160 100" class="w-full h-24">
      <rect x="0" y="0" width="160" height="100" fill="#0284c7"/>
      <ellipse cx="40" cy="40" rx="18" ry="12" fill="#22c55e"/>
      <ellipse cx="85" cy="50" rx="24" ry="15" fill="#16a34a"/>
      <ellipse cx="125" cy="65" rx="14" ry="9" fill="#22c55e"/>
      <circle cx="110" cy="35" r="5" fill="#4ade80"/>
      <circle cx="65" cy="70" r="4" fill="#4ade80"/>
    </svg>`,
    example_name_en: 'Galapagos Islands',
    example_name_es: 'Islas Galápagos',
    example_country: 'Ecuador',
    example_coords: [-0.8293, -90.9821],
    example_zoom: 8,
    fun_fact_en: 'Indonesia is the world’s largest archipelago nation, consisting of over 17,500 islands.',
    fun_fact_es: 'Indonesia es el archipiélago más extenso del mundo con más de 17,500 islas.'
  },
  {
    id: 'peninsula',
    type: 'peninsula',
    category: 'coastal',
    name_en: 'Peninsula',
    name_es: 'Península',
    definition_en: 'A piece of land surrounded by water on three sides while remaining connected to a mainland.',
    definition_es: 'Una porción de tierra rodeada por agua en tres de sus lados y unida al continente por un istmo.',
    key_characteristics_en: [
      'Surrounded by water on 3 sides',
      'Connected to a larger continental landmass',
      'Creates long coastlines and strategic maritime capes'
    ],
    key_characteristics_es: [
      'Rodeada de agua en tres de sus lados',
      'Unida a una masa continental mayor',
      'Crea extensas líneas de costa y cabos estratégicos'
    ],
    diagram_svg: `<svg viewBox="0 0 160 100" class="w-full h-24">
      <rect x="0" y="0" width="160" height="100" fill="#0284c7"/>
      <path d="M0,0 L60,0 Q90,30 90,65 Q90,90 60,95 L0,100 Z" fill="#15803d"/>
      <path d="M60,0 Q80,25 75,55 Q70,80 50,95" stroke="#86efac" stroke-width="2" fill="none"/>
    </svg>`,
    example_name_en: 'Florida Peninsula',
    example_name_es: 'Península de Florida',
    example_country: 'USA',
    example_coords: [27.9944, -81.7603],
    example_zoom: 6,
    fun_fact_en: 'The Arabian Peninsula is the largest peninsula on Earth at 3.2 million km².',
    fun_fact_es: 'La Península Arábiga es la más grande del mundo con 3.2 millones de km².'
  },
  {
    id: 'isthmus',
    type: 'isthmus',
    category: 'coastal',
    name_en: 'Isthmus',
    name_es: 'Istmo',
    definition_en: 'A narrow strip of land bordered on both sides by water that connects two larger land masses.',
    definition_es: 'Una franja estrecha de tierra flanqueada por dos cuerpos de agua que une dos masas de tierra mayores.',
    key_characteristics_en: [
      'Narrow land corridor linking two continents or landmasses',
      'Separates two distinct bodies of water',
      'Prime location for inter-oceanic canals (Panama, Suez)'
    ],
    key_characteristics_es: [
      'Corredor terrestre estrecho entre dos continentes',
      'Separa dos océanos o mares diferentes',
      'Ubicación idónea para canales interoceánicos'
    ],
    diagram_svg: `<svg viewBox="0 0 160 100" class="w-full h-24">
      <rect x="0" y="0" width="160" height="100" fill="#0284c7"/>
      <path d="M0,0 L40,0 Q60,35 70,45 Q90,45 100,0 L160,0 L160,100 L110,100 Q95,65 80,55 Q65,65 50,100 L0,100 Z" fill="#16a34a"/>
      <path d="M70,45 L80,55" stroke="#fbbf24" stroke-width="2" stroke-dasharray="2,2"/>
    </svg>`,
    example_name_en: 'Isthmus of Panama',
    example_name_es: 'Istmo de Panamá',
    example_country: 'Panama',
    example_coords: [8.9824, -79.5199],
    example_zoom: 8,
    fun_fact_en: 'The formation of the Isthmus of Panama 3 million years ago linked the Americas and redirected global ocean currents (Gulf Stream)!',
    fun_fact_es: '¡El surgimiento del Istmo de Panamá hace 3 millones de años unió América y desvió las corrientes oceánicas globales!'
  },
  {
    id: 'cape',
    type: 'cape',
    category: 'coastal',
    name_en: 'Cape',
    name_es: 'Cabo',
    definition_en: 'A high, prominent point of land jutting outward into a body of water, usually an ocean.',
    definition_es: 'Una punta o saliente de tierra elevada que penetra notablemente hacia el mar u océano.',
    key_characteristics_en: [
      'High coastal promontory exposed to ocean swells and winds',
      'Acts as a navigational landmark for mariners',
      'Often marks severe oceanic current changes'
    ],
    key_characteristics_es: [
      'Promontorio costero expuesto al oleaje y los vientos oceánicos',
      'Punto de referencia crucial para la navegación marítima',
      'Suele marcar cambios bruscos en las corrientes oceánicas'
    ],
    diagram_svg: `<svg viewBox="0 0 160 100" class="w-full h-24">
      <rect x="0" y="0" width="160" height="100" fill="#0284c7"/>
      <path d="M0,0 L80,0 Q130,10 135,40 Q130,60 70,80 L0,100 Z" fill="#b45309"/>
      <path d="M70,0 Q110,15 115,40 Q110,55 60,70" stroke="#f59e0b" stroke-width="2" fill="none"/>
    </svg>`,
    example_name_en: 'Cape of Good Hope',
    example_name_es: 'Cabo de Buena Esperanza',
    example_country: 'South Africa',
    example_coords: [-34.3572, 18.4746],
    example_zoom: 10,
    fun_fact_en: 'Cape Horn in South America is notorious among sailors for 30-meter rogue waves and Antarctic gale-force winds.',
    fun_fact_es: 'El Cabo de Hornos en Sudamérica es famoso entre navegantes por olas gigantes de 30 metros y vientos huracanados.'
  },
  {
    id: 'mountain-range',
    type: 'mountain',
    category: 'elevation',
    name_en: 'Mountain Range',
    name_es: 'Cordillera',
    definition_en: 'A connected series or chain of mountains elevated high above the surrounding land, formed by tectonic collision.',
    definition_es: 'Una serie continua de montañas entrelazadas que se elevan a gran altura, formadas por colisiones tectónicas.',
    key_characteristics_en: [
      'Linear series of high-altitude peaks and ridges',
      'Formed by convergent plate boundaries or folding',
      'Creates climate rain shadows on leeward slopes'
    ],
    key_characteristics_es: [
      'Serie lineal de picos y crestas de gran elevación',
      'Originada por choque de placas tectónicas o plegamientos',
      'Genera sombra orográfica de lluvia en su ladera opuesta'
    ],
    diagram_svg: `<svg viewBox="0 0 160 100" class="w-full h-24">
      <rect x="0" y="0" width="160" height="100" fill="#e0f2fe"/>
      <polygon points="10,90 40,30 70,90" fill="#475569"/>
      <polygon points="50,90 85,15 120,90" fill="#334155"/>
      <polygon points="100,90 130,35 155,90" fill="#475569"/>
      <polygon points="76,33 85,15 94,33 85,28" fill="#f8fafc"/>
      <polygon points="34,42 40,30 46,42 40,38" fill="#f8fafc"/>
      <rect x="0" y="88" width="160" height="12" fill="#15803d"/>
    </svg>`,
    example_name_en: 'Andes Mountains',
    example_name_es: 'Cordillera de los Andes',
    example_country: 'Chile / Peru / Argentina',
    example_coords: [-24.5, -69.0],
    example_zoom: 5,
    fun_fact_en: 'The Andes is the longest continental mountain range on Earth, stretching over 7,000 km (4,350 miles).',
    fun_fact_es: 'Los Andes son la cordillera continental más larga del planeta, extendiéndose más de 7,000 km.'
  },
  {
    id: 'peak',
    type: 'peak',
    category: 'elevation',
    name_en: 'Peak (Summit)',
    name_es: 'Pico (Cima)',
    definition_en: 'The pointed highest summit or top vertex of an individual mountain.',
    definition_es: 'El punto más elevado o cima puntiaguda de una montaña.',
    key_characteristics_en: [
      'Highest point of local elevation',
      'Subject to freezing temperatures, thin air, and glaciers',
      'Often sculpted into sharp horns by glacial erosion'
    ],
    key_characteristics_es: [
      'Punto más elevado de la orografía circundante',
      'Temperaturas bajo cero, baja presión de oxígeno y hielo',
      'Frecuentemente afilado en cuernos piramidales por glaciares'
    ],
    diagram_svg: `<svg viewBox="0 0 160 100" class="w-full h-24">
      <rect x="0" y="0" width="160" height="100" fill="#bae6fd"/>
      <polygon points="20,90 80,18 140,90" fill="#334155"/>
      <polygon points="68,36 80,18 92,36 80,30" fill="#ffffff"/>
      <circle cx="80" cy="18" r="4" fill="#fbbf24"/>
      <rect x="0" y="88" width="160" height="12" fill="#166534"/>
    </svg>`,
    example_name_en: 'Mount Everest (Chomolungma)',
    example_name_es: 'Monte Everest',
    example_country: 'Nepal / China',
    example_coords: [27.9881, 86.9250],
    example_zoom: 9,
    fun_fact_en: 'Mount Everest stands at 8,848.86 meters (29,031.7 ft) and grows roughly 4 mm taller every year due to tectonic forces.',
    fun_fact_es: 'El Everest mide 8,848.86 m y se eleva aproximadamente 4 mm cada año debido al empuje tectónico de la India.'
  },
  {
    id: 'volcano',
    type: 'volcano',
    category: 'elevation',
    name_en: 'Volcano',
    name_es: 'Volcán',
    definition_en: 'An opening or rupture in the Earth’s crust that allows hot magma, ash, and gases to escape to the surface.',
    definition_es: 'Una fractura o abertura en la corteza terrestre por donde ascienden magma, cenizas y gases ardientes.',
    key_characteristics_en: [
      'Vent or conduit feeding molten rock from the mantle',
      'Can be active, dormant, or extinct',
      'Builds conical mountains made of hardened lava and tephra'
    ],
    key_characteristics_es: [
      'Chimenea que canaliza roca fundida desde el manto',
      'Puede clasificarse como activo, dormido o extinto',
      'Forma conos montañosos de lava solidificada y piroclastos'
    ],
    diagram_svg: `<svg viewBox="0 0 160 100" class="w-full h-24">
      <rect x="0" y="0" width="160" height="100" fill="#fed7aa"/>
      <path d="M15,90 L68,35 L92,35 L145,90 Z" fill="#78350f"/>
      <ellipse cx="80" cy="35" rx="12" ry="5" fill="#451a03"/>
      <path d="M80,33 Q75,18 68,10 Q85,15 88,5 Q86,20 80,33" fill="#dc2626"/>
      <path d="M72,35 L65,55 L70,58 L63,75" stroke="#ef4444" stroke-width="2" fill="none"/>
      <rect x="0" y="88" width="160" height="12" fill="#57534e"/>
    </svg>`,
    example_name_en: 'Mount Fuji',
    example_name_es: 'Monte Fuji',
    example_country: 'Japan',
    example_coords: [35.3606, 138.7274],
    example_zoom: 9,
    fun_fact_en: 'Over 75% of the world’s active volcanoes are clustered along the Pacific "Ring of Fire".',
    fun_fact_es: 'Más del 75% de los volcanes activos del mundo se ubican a lo largo del Cinturón de Fuego del Pacífico.'
  },
  {
    id: 'plateau',
    type: 'plateau',
    category: 'elevation',
    name_en: 'Plateau',
    name_es: 'Meseta',
    definition_en: 'A broad, flat-topped elevated landform that rises sharply above the surrounding area on at least one side.',
    definition_es: 'Una extensa planicie elevada que se alza abruptamente sobre el terreno circundante al menos por uno de sus lados.',
    key_characteristics_en: [
      'Flat or gently undulating summit tableland',
      'Elevated significantly above sea level',
      'Often bounded by steep cliffs, escarpments, or canyons'
    ],
    key_characteristics_es: [
      'Cumbre amplia y relativamente plana en forma de mesa',
      'Elevada considerablemente sobre el nivel del mar',
      'Flanqueada por escarpes abruptos, cañones o laderas empinadas'
    ],
    diagram_svg: `<svg viewBox="0 0 160 100" class="w-full h-24">
      <rect x="0" y="0" width="160" height="100" fill="#fef08a"/>
      <path d="M0,90 L25,90 L45,35 L115,35 L135,90 L160,90 Z" fill="#d97706"/>
      <path d="M45,35 L115,35" stroke="#fbbf24" stroke-width="3"/>
      <rect x="45" y="36" width="70" height="6" fill="#b45309"/>
      <rect x="0" y="88" width="160" height="12" fill="#65a30d"/>
    </svg>`,
    example_name_en: 'Tibetan Plateau ("Roof of the World")',
    example_name_es: 'Meseta Tibetana ("Techo del Mundo")',
    example_country: 'China',
    example_coords: [32.0, 86.0],
    example_zoom: 5,
    fun_fact_en: 'The Tibetan Plateau covers 2.5 million km² at an average altitude exceeding 4,500 meters (14,800 ft)!',
    fun_fact_es: '¡La Meseta Tibetana abarca 2.5 millones de km² a una altura promedio superior a los 4,500 metros!'
  },
  {
    id: 'plain',
    type: 'plain',
    category: 'elevation',
    name_en: 'Plain',
    name_es: 'Llanura',
    definition_en: 'A broad, expansive area of flat or gently rolling land with very little relief or elevation changes.',
    definition_es: 'Una extensa área de tierra plana o suavemente ondulada con muy pocas variaciones de altitud.',
    key_characteristics_en: [
      'Minimal topographic relief',
      'Rich alluvial soils deposited by rivers',
      'Prime agricultural "breadbaskets" supporting dense human populations'
    ],
    key_characteristics_es: [
      'Relieve topográfico mínimo y despejado',
      'Suelos aluviales fértiles depositados por ríos',
      'Graneros agrícolas del mundo donde se asientan grandes poblaciones'
    ],
    diagram_svg: `<svg viewBox="0 0 160 100" class="w-full h-24">
      <rect x="0" y="0" width="160" height="100" fill="#bae6fd"/>
      <rect x="0" y="55" width="160" height="45" fill="#65a30d"/>
      <path d="M0,62 Q40,58 80,63 Q120,60 160,62" stroke="#84cc16" stroke-width="2" fill="none"/>
      <circle cx="130" cy="25" r="10" fill="#facc15"/>
    </svg>`,
    example_name_en: 'Great Plains of North America',
    example_name_es: 'Grandes Llanuras de Norteamérica',
    example_country: 'USA / Canada',
    example_coords: [41.0, -100.0],
    example_zoom: 5,
    fun_fact_en: 'The Great Plains produce massive percentages of the world’s wheat, corn, and soy exports.',
    fun_fact_es: 'Las Grandes Llanuras aportan un porcentaje colosal de las exportaciones mundiales de trigo, maíz y soya.'
  },
  {
    id: 'valley',
    type: 'valley',
    category: 'elevation',
    name_en: 'Valley',
    name_es: 'Valle',
    definition_en: 'A low-lying stretch of land between hills or mountains, typically drained by a stream or river.',
    definition_es: 'Una depresión alargada de tierra entre colinas o montañas, habitualmente recorrida por un río.',
    key_characteristics_en: [
      'V-shaped when carved by river erosion',
      'U-shaped when carved by alpine glaciers',
      'Sheltered microclimates favored for settlement'
    ],
    key_characteristics_es: [
      'Forma de "V" cuando es excavado por la erosión de un río',
      'Forma de "U" cuando ha sido tallado por un glaciar alpino',
      'Microclimas protegidos ideales para el asentamiento humano'
    ],
    diagram_svg: `<svg viewBox="0 0 160 100" class="w-full h-24">
      <rect x="0" y="0" width="160" height="100" fill="#bae6fd"/>
      <path d="M0,20 Q40,65 80,75 Q120,65 160,20 L160,100 L0,100 Z" fill="#15803d"/>
      <path d="M76,75 Q80,73 84,75 L86,100 L74,100 Z" fill="#0284c7"/>
    </svg>`,
    example_name_en: 'Great Rift Valley',
    example_name_es: 'Gran Valle del Rift',
    example_country: 'Kenya / Tanzania',
    example_coords: [-0.3, 36.1],
    example_zoom: 6,
    fun_fact_en: 'The Great Rift Valley in East Africa is slowly splitting the African tectonic plate into two distinct landmasses.',
    fun_fact_es: 'El Gran Valle del Rift en África oriental está separando la placa africana en dos masas terrestres distintas.'
  },
  {
    id: 'desert',
    type: 'desert',
    category: 'arid',
    name_en: 'Desert',
    name_es: 'Desierto',
    definition_en: 'A hyper-arid biome receiving less than 250 mm (10 in) of annual rainfall, supporting specialized organisms.',
    definition_es: 'Un bioma hiperárido que recibe menos de 250 mm de lluvia al año, con vegetación y fauna adaptadas.',
    key_characteristics_en: [
      'Extreme moisture deficit and high evaporation',
      'Can be scorching hot (Sahara) or bitterly cold (Antarctica)',
      'Characterized by sand dunes, salt pans, or barren stony regs'
    ],
    key_characteristics_es: [
      'Déficit hídrico severo y evaporación extrema',
      'Pueden ser cálidos y abrasadores (Sáhara) o polares helados (Antártida)',
      'Paisajes dominados por dunas de arena, salares o pedregales'
    ],
    diagram_svg: `<svg viewBox="0 0 160 100" class="w-full h-24">
      <rect x="0" y="0" width="160" height="100" fill="#fef3c7"/>
      <circle cx="125" cy="25" r="14" fill="#fbbf24"/>
      <path d="M0,60 Q30,40 60,65 Q100,85 160,50 L160,100 L0,100 Z" fill="#d97706"/>
      <path d="M0,75 Q45,55 90,80 Q130,95 160,70 L160,100 L0,100 Z" fill="#b45309"/>
    </svg>`,
    example_name_en: 'Sahara Desert',
    example_name_es: 'Desierto del Sáhara',
    example_country: 'Egypt / Algeria',
    example_coords: [23.4162, 25.6628],
    example_zoom: 5,
    fun_fact_en: 'Antarctica is technically the world’s largest desert because it receives almost zero precipitation despite being covered in ice!',
    fun_fact_es: '¡Técnicamente la Antártida es el mayor desierto del mundo, pues recibe casi cero precipitaciones al año!'
  },
  {
    id: 'ocean',
    type: 'ocean',
    category: 'water',
    name_en: 'Ocean',
    name_es: 'Océano',
    definition_en: 'A vast, continuous body of saline water occupying enormous basins that covers over 70% of Earth’s surface.',
    definition_es: 'Una masa inmensa y continua de agua salada que ocupa las grandes cuencas oceánicas del planeta.',
    key_characteristics_en: [
      'Covers 71% of the planetary surface',
      'Regulates global climate, heat transport, and carbon cycles',
      'Reaches depths exceeding 11,000 meters in oceanic trenches'
    ],
    key_characteristics_es: [
      'Cubre el 71% de la superficie de nuestro planeta',
      'Regula el clima global, transporte térmico y ciclo del carbono',
      'Alcanza más de 11,000 metros de profundidad en fosas oceánicas'
    ],
    diagram_svg: `<svg viewBox="0 0 160 100" class="w-full h-24">
      <rect x="0" y="0" width="160" height="100" fill="#0369a1"/>
      <path d="M0,35 Q40,25 80,35 Q120,45 160,35 L160,100 L0,100 Z" fill="#075985"/>
      <path d="M0,55 Q40,45 80,55 Q120,65 160,55 L160,100 L0,100 Z" fill="#0c4a6e"/>
      <path d="M0,75 Q40,68 80,75 Q120,82 160,75 L160,100 L0,100 Z" fill="#082f49"/>
    </svg>`,
    example_name_en: 'Pacific Ocean (Mariana Trench)',
    example_name_es: 'Océano Pacífico (Fosa de las Marianas)',
    example_country: 'International Waters',
    example_coords: [11.3493, 142.1996],
    example_zoom: 4,
    fun_fact_en: 'The Pacific Ocean is so vast that it covers more area than all the continents and dry land combined.',
    fun_fact_es: 'El Océano Pacífico es tan inmenso que su superficie supera a todos los continentes y tierras emergidas juntos.'
  },
  {
    id: 'sea',
    type: 'sea',
    category: 'water',
    name_en: 'Sea',
    name_es: 'Mar',
    definition_en: 'A large body of saline water partially enclosed by land or adjoining an ocean.',
    definition_es: 'Una gran masa de agua salada parcialmente delimitada por tierras continentales o adyacente a un océano.',
    key_characteristics_en: [
      'Smaller and shallower than an open ocean',
      'Partially enclosed by land masses, archipelagos, or peninsulas',
      'Directly impacts coastal regional weather and trade routes'
    ],
    key_characteristics_es: [
      'Menor tamaño y profundidad promedio que un océano abierto',
      'Parcialmente delimitado por continentes, islas o penínsulas',
      'Influye directamente en el clima regional y el comercio marítimo'
    ],
    diagram_svg: `<svg viewBox="0 0 160 100" class="w-full h-24">
      <rect x="0" y="0" width="160" height="100" fill="#0284c7"/>
      <path d="M0,0 L35,0 Q50,45 20,100 L0,100 Z" fill="#15803d"/>
      <path d="M160,0 L130,0 Q110,50 145,100 L160,100 Z" fill="#15803d"/>
      <path d="M35,50 Q80,45 130,50" stroke="#bae6fd" stroke-width="1.5" stroke-dasharray="3,3" fill="none"/>
    </svg>`,
    example_name_en: 'Mediterranean Sea',
    example_name_es: 'Mar Mediterráneo',
    example_country: 'Southern Europe / North Africa',
    example_coords: [35.0, 18.0],
    example_zoom: 5,
    fun_fact_en: 'The Mediterranean Sea connects to the Atlantic only through the 14-km wide Strait of Gibraltar.',
    fun_fact_es: 'El Mar Mediterráneo se conecta al Atlántico únicamente por el Estrecho de Gibraltar (14 km de ancho).'
  },
  {
    id: 'lake',
    type: 'lake',
    category: 'water',
    name_en: 'Lake',
    name_es: 'Lago',
    definition_en: 'A sizeable inland body of standing water occupying a topographical basin.',
    definition_es: 'Una masa de agua dulce o salada de gran tamaño contenida en una cuenca o depresión terrestre continental.',
    key_characteristics_en: [
      'Inland basin fed and drained by rivers or rainfall',
      'Can be tectonic, volcanic caldera, or glacial in origin',
      'Stores critical planetary liquid freshwater reserves'
    ],
    key_characteristics_es: [
      'Cuenca interior alimentada y drenada por ríos o lluvias',
      'Puede ser de origen glaciar, tectónico o de caldera volcánica',
      'Almacena las mayores reservas de agua dulce líquida de la biosfera'
    ],
    diagram_svg: `<svg viewBox="0 0 160 100" class="w-full h-24">
      <rect x="0" y="0" width="160" height="100" fill="#15803d"/>
      <ellipse cx="80" cy="50" rx="60" ry="30" fill="#0284c7"/>
      <ellipse cx="80" cy="50" rx="42" ry="18" fill="#0369a1"/>
      <path d="M20,50 Q4,45 0,47" stroke="#38bdf8" stroke-width="3" fill="none"/>
      <path d="M140,50 Q155,53 160,52" stroke="#38bdf8" stroke-width="3" fill="none"/>
    </svg>`,
    example_name_en: 'Lake Baikal (Deepest Lake)',
    example_name_es: 'Lago Baikal (El más profundo)',
    example_country: 'Russia',
    example_coords: [53.5, 108.0],
    example_zoom: 6,
    fun_fact_en: 'Lake Baikal holds 20% of the world’s unfrozen surface freshwater—more than all North American Great Lakes combined!',
    fun_fact_es: '¡El Lago Baikal contiene el 20% del agua dulce líquida del planeta, más que los 5 Grandes Lagos de Norteamérica juntos!'
  },
  {
    id: 'river',
    type: 'river',
    category: 'water',
    name_en: 'River',
    name_es: 'Río',
    definition_en: 'A natural flowing watercourse, usually freshwater, moving downward towards an ocean, sea, or lake.',
    definition_es: 'Una corriente natural continua de agua dulce que fluye por gravedad hacia un océano, mar u otro río.',
    key_characteristics_en: [
      'Flows downhill from high headwaters through a channel',
      'Carries sediments and deposits fertile alluvial deltas',
      'Historically formed the backbone of human civilization'
    ],
    key_characteristics_es: [
      'Fluye desde las cabeceras altas a través de un cauce natural',
      'Transporta sedimentos y crea fértiles deltas aluviales',
      'Eje articulador del nacimiento de las civilizaciones humanas'
    ],
    diagram_svg: `<svg viewBox="0 0 160 100" class="w-full h-24">
      <rect x="0" y="0" width="160" height="100" fill="#16a34a"/>
      <path d="M80,0 Q60,30 95,50 Q130,70 100,100" stroke="#0284c7" stroke-width="12" fill="none"/>
      <path d="M80,0 Q60,30 95,50 Q130,70 100,100" stroke="#38bdf8" stroke-width="6" fill="none"/>
      <path d="M60,30 Q40,35 25,20" stroke="#0284c7" stroke-width="4" fill="none"/>
    </svg>`,
    example_name_en: 'Nile River',
    example_name_es: 'Río Nilo',
    example_country: 'Egypt / Sudan',
    example_coords: [30.5, 31.2],
    example_zoom: 6,
    fun_fact_en: 'The Nile River has supported human agriculture continuously for more than 5,000 years.',
    fun_fact_es: 'El Río Nilo ha sostenido la agricultura y el desarrollo humano durante más de 5,000 años ininterrumpidos.'
  },
  {
    id: 'strait',
    type: 'strait',
    category: 'water',
    name_en: 'Strait',
    name_es: 'Estrecho',
    definition_en: 'A narrow maritime passage connecting two large navigable bodies of water.',
    definition_es: 'Un paso marítimo angosto que conecta dos cuerpos navegables de agua de gran tamaño.',
    key_characteristics_en: [
      'Flanked by land on both sides',
      'Crucial strategic and economic choke point for container ships and tankers',
      'Subject to fierce tidal rip currents'
    ],
    key_characteristics_es: [
      'Flanqueado por tierra continental o insular en ambos costados',
      'Choke point estratégico vital para el transporte marítimo mundial',
      'Suele presentar fuertes corrientes de marea'
    ],
    diagram_svg: `<svg viewBox="0 0 160 100" class="w-full h-24">
      <rect x="0" y="0" width="160" height="100" fill="#0284c7"/>
      <path d="M0,0 L160,0 L160,30 Q90,38 70,35 Q0,40 0,25 Z" fill="#15803d"/>
      <path d="M0,100 L160,100 L160,75 Q100,68 80,70 Q0,65 0,78 Z" fill="#15803d"/>
      <path d="M20,52 L140,52" stroke="#fbbf24" stroke-width="2" stroke-dasharray="4,4"/>
    </svg>`,
    example_name_en: 'Strait of Gibraltar',
    example_name_es: 'Estrecho de Gibraltar',
    example_country: 'Spain / Morocco',
    example_coords: [35.9641, -5.5898],
    example_zoom: 9,
    fun_fact_en: 'At its narrowest point, the Strait of Gibraltar separates Europe from Africa by only 14.3 kilometers (8.9 miles).',
    fun_fact_es: 'En su punto más estrecho, solo 14.3 km separan las costas de Europa y África en Gibraltar.'
  },
  {
    id: 'bay',
    type: 'bay',
    category: 'coastal',
    name_en: 'Bay',
    name_es: 'Bahía',
    definition_en: 'A broad inlet of the sea where the land curves inward, forming a sheltered harbor.',
    definition_es: 'Una entrada espaciosa del mar u océano en la costa que forma un puerto natural abrigado.',
    key_characteristics_en: [
      'Indented coastal curve offering shelter from ocean waves',
      'Calmer waters favored for shipping docks and naval ports',
      'Gradual transitions between marine and estuarine ecosystems'
    ],
    key_characteristics_es: [
      'Entrante costero curvado que ofrece protección contra el oleaje de alta mar',
      'Aguas más tranquilas ideales para puertos comerciales y astilleros',
      'Transición entre ecosistemas marinos y estuarios fluviales'
    ],
    diagram_svg: `<svg viewBox="0 0 160 100" class="w-full h-24">
      <rect x="0" y="0" width="160" height="100" fill="#0284c7"/>
      <path d="M0,0 L160,0 L160,100 L0,100 L0,70 Q80,85 100,50 Q80,15 0,30 Z" fill="#15803d"/>
      <ellipse cx="60" cy="50" rx="30" ry="18" fill="#38bdf8" opacity="0.3"/>
    </svg>`,
    example_name_en: 'San Francisco Bay',
    example_name_es: 'Bahía de San Francisco',
    example_country: 'USA',
    example_coords: [37.8, -122.37],
    example_zoom: 9,
    fun_fact_en: 'The Bay of Fundy in Canada features the highest tidal range on Earth—the water rises up to 16 meters (53 ft) twice daily!',
    fun_fact_es: 'La Bahía de Fundy en Canadá registra las mareas más extremas de la Tierra: ¡el agua sube hasta 16 metros dos veces al día!'
  },
  {
    id: 'fjord',
    type: 'fjord',
    category: 'coastal',
    name_en: 'Fjord',
    name_es: 'Fiordo',
    definition_en: 'A long, narrow, deep ocean inlet flanked by steep, soaring cliffs, created by ancient glacial gouging.',
    definition_es: 'Una entrada marina profunda y alargada flanqueada por acantilados escarpados, excavada por glaciares milenarios.',
    key_characteristics_en: [
      'Carved by massive advancing glaciers below sea level',
      'Extreme water depth (often hundreds of meters deep)',
      'Towering vertical bedrock walls framing narrow sea branches'
    ],
    key_characteristics_es: [
      'Excavado por lenguas glaciares colosales por debajo del nivel del mar',
      'Profundidad marina extrema (cientos de metros)',
      'Paredes rocosas verticales que enmarcan brazos de mar angostos'
    ],
    diagram_svg: `<svg viewBox="0 0 160 100" class="w-full h-24">
      <rect x="0" y="0" width="160" height="100" fill="#bae6fd"/>
      <path d="M0,20 L35,65 L35,100 L0,100 Z" fill="#334155"/>
      <path d="M160,20 L125,65 L125,100 L160,100 Z" fill="#334155"/>
      <path d="M35,65 L125,65 L125,100 L35,100 Z" fill="#0369a1"/>
      <polygon points="10,20 25,40 0,40" fill="#ffffff"/>
      <polygon points="150,20 135,40 160,40" fill="#ffffff"/>
    </svg>`,
    example_name_en: 'Geirangerfjord',
    example_name_es: 'Fiordo de Geiranger',
    example_country: 'Norway',
    example_coords: [62.1015, 7.0941],
    example_zoom: 10,
    fun_fact_en: 'Sognefjord in Norway extends 205 kilometers (127 mi) inland and drops to depths over 1,300 meters (4,290 ft) below sea level!',
    fun_fact_es: '¡El fiordo Sognefjord en Noruega penetra 205 km tierra adentro y alcanza más de 1,300 metros de profundidad bajo el mar!'
  }
];
