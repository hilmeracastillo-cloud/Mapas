import { CountryDossierData, SurroundingWater, SurroundingWatersProfile } from '../types/geography';

// Comprehensive catalog of surrounding seas and oceans for key and starter countries
export const SURROUNDING_WATERS_CATALOG: Record<string, SurroundingWatersProfile> = {
  // =========================================================================
  // UNITED STATES
  // =========================================================================
  US: {
    is_landlocked: false,
    waters: [
      {
        id: 'us-atlantic',
        type: 'ocean',
        name_en: 'North Atlantic Ocean',
        name_es: 'Océano Atlántico Norte',
        direction_en: 'East Coast & Eastern Seaboard',
        direction_es: 'Costa Este y Fachada Atlántica',
        coords: [36.0, -72.5],
        zoom_level: 5,
        description_en: 'Borders the entire US East Coast from Maine to Florida, driving maritime trade and the Gulf Stream.',
        description_es: 'Baña toda la costa este estadounidense desde Maine hasta Florida, impulsando el comercio y la Corriente del Golfo.',
      },
      {
        id: 'us-pacific',
        type: 'ocean',
        name_en: 'North Pacific Ocean',
        name_es: 'Océano Pacífico Norte',
        direction_en: 'West Coast (California, Oregon, Washington)',
        direction_es: 'Costa Oeste (California, Oregón, Washington)',
        coords: [36.5, -125.5],
        zoom_level: 5,
        description_en: 'Extensive Pacific coastline connecting US ports to Asia-Pacific maritime trade corridors.',
        description_es: 'Extenso litoral pacífico que conecta los principales puertos estadounidenses con las rutas marítimas de Asia-Pacífico.',
      },
      {
        id: 'us-mexico-gulf',
        type: 'gulf',
        name_en: 'Gulf of Mexico',
        name_es: 'Golfo de México',
        direction_en: 'South Coast (Texas, Louisiana, Florida)',
        direction_es: 'Costa Sur (Texas, Luisiana, Florida)',
        coords: [26.0, -89.5],
        zoom_level: 6,
        description_en: 'Vital marginal sea crucial for energy extraction, fisheries, and Mississippi River maritime commerce.',
        description_es: 'Mar marginal estratégico crucial para la extracción energética, pesca y salida comercial de la cuenca del Misisipi.',
      },
      {
        id: 'us-arctic',
        type: 'ocean',
        name_en: 'Arctic Ocean & Beaufort Sea',
        name_es: 'Océano Ártico y Mar de Beaufort',
        direction_en: 'Alaska North Slope',
        direction_es: 'Litoral Norte de Alaska',
        coords: [71.8, -148.0],
        zoom_level: 5,
        description_en: 'Icy northern maritime border of Alaska with major strategic and climate significance.',
        description_es: 'Frontera marítima septentrional y gélida de Alaska con alta relevancia estratégica y climática.',
      },
    ],
  },

  // =========================================================================
  // VENEZUELA
  // =========================================================================
  VE: {
    is_landlocked: false,
    waters: [
      {
        id: 've-caribbean',
        type: 'sea',
        name_en: 'Caribbean Sea',
        name_es: 'Mar Caribe',
        direction_en: 'North Coast (Over 2,800 km of coastline)',
        direction_es: 'Costa Norte (Más de 2.800 km de litoral)',
        coords: [12.8, -66.5],
        zoom_level: 6,
        description_en: 'Extensive warm tropical coastline with archipelagos like Los Roques and major oil and cargo ports.',
        description_es: 'Extenso litoral tropical con archipiélagos como Los Roques y puertos petroleros y comerciales clave.',
      },
      {
        id: 've-atlantic',
        type: 'ocean',
        name_en: 'Atlantic Ocean',
        name_es: 'Océano Atlántico',
        direction_en: 'Northeast / Orinoco Delta Outlet',
        direction_es: 'Noreste / Desembocadura del Delta del Orinoco',
        coords: [9.5, -59.5],
        zoom_level: 6,
        description_en: 'Atlantic oceanic frontage where the mighty Orinoco River empties through its vast mangrove delta.',
        description_es: 'Fachada atlántica abierta donde desemboca el caudaloso río Orinoco a través de su delta de manglares.',
      },
      {
        id: 've-venezuela-gulf',
        type: 'gulf',
        name_en: 'Gulf of Venezuela',
        name_es: 'Golfo de Venezuela',
        direction_en: 'Northwest / Entry to Lake Maracaibo',
        direction_es: 'Noroeste / Entrada al Lago de Maracaibo',
        coords: [11.8, -71.0],
        zoom_level: 7,
        description_en: 'Semi-enclosed gulf linking the Caribbean Sea with the hydrocarbon-rich Maracaibo basin.',
        description_es: 'Golfo semicerrado que comunica el Mar Caribe con la cuenca petrolera del Lago de Maracaibo.',
      },
    ],
  },

  // =========================================================================
  // SAUDI ARABIA
  // =========================================================================
  SA: {
    is_landlocked: false,
    waters: [
      {
        id: 'sa-red-sea',
        type: 'sea',
        name_en: 'Red Sea',
        name_es: 'Mar Rojo',
        direction_en: 'West Coast (Jeddah, Yanbu)',
        direction_es: 'Costa Oeste (Yeda, Yanbu)',
        coords: [22.0, 37.8],
        zoom_level: 6,
        description_en: 'Warm saline sea connecting the Indian Ocean to the Mediterranean via the Suez Canal route.',
        description_es: 'Mar cálido y salino que conecta el Océano Índico con el Mediterráneo a través de la ruta de Suez.',
      },
      {
        id: 'sa-persian-gulf',
        type: 'gulf',
        name_en: 'Persian Gulf (Arabian Gulf)',
        name_es: 'Golfo Pérsico (Golfo Arábigo)',
        direction_en: 'East Coast (Dammam, Jubail, Ras Tanura)',
        direction_es: 'Costa Este (Dammam, Jubail, Ras Tanura)',
        coords: [26.8, 51.5],
        zoom_level: 6,
        description_en: 'World-critical waterway through which a large portion of global maritime oil transit passes.',
        description_es: 'Vía fluvial mundialmente crítica por donde transita una porción sustancial del petróleo marítimo del planeta.',
      },
    ],
  },

  // =========================================================================
  // BOLIVIA (LANDLOCKED)
  // =========================================================================
  BO: {
    is_landlocked: true,
    landlocked_note_en:
      'Bolivia is an inland, landlocked nation in central South America. It lost its direct Pacific littoral in the 1879 War of the Pacific. Today, it accesses international maritime shipping through Puerto Busch via the Paraguay-Paraná river waterway leading to the Atlantic Ocean, and through free transit agreements with ports in Arica and Iquique (Chile) and Ilo (Peru) on the Pacific Ocean.',
    landlocked_note_es:
      'Bolivia es un país mediterráneo (sin salida directa al mar) en el corazón de Sudamérica. Perdió su litoral pacífico tras la Guerra del Pacífico (1879). Hoy canaliza su comercio marítimo a través de Puerto Busch por la hidrovía Paraguay-Paraná hacia el Océano Atlántico, y mediante tratados de libre tránsito en los puertos de Arica e Iquique (Chile) e Ilo (Perú) en el Océano Pacífico.',
    waters: [
      {
        id: 'bo-pacific-outlet',
        type: 'ocean',
        name_en: 'Pacific Ocean (Treaty Access Ports: Arica / Ilo)',
        name_es: 'Océano Pacífico (Puertos de Acceso por Tratado: Arica / Ilo)',
        direction_en: 'West (Historical & treaty maritime access)',
        direction_es: 'Oeste (Acceso marítimo histórico y por tratado)',
        coords: [-18.4, -70.5],
        zoom_level: 6,
        description_en: 'Primary Pacific commercial corridor used for Bolivian mineral and agricultural overseas shipping.',
        description_es: 'Principal corredor comercial pacífico utilizado para el transporte de minerales y productos agrícolas bolivianos.',
      },
      {
        id: 'bo-atlantic-basin',
        type: 'ocean',
        name_en: 'Atlantic Ocean (via Paraguay-Paraná Waterway)',
        name_es: 'Océano Atlántico (vía Hidrovía Paraguay-Paraná)',
        direction_en: 'Southeast (River corridor to Río de la Plata)',
        direction_es: 'Sureste (Corredor fluvial hacia el Río de la Plata)',
        coords: [-34.8, -56.5],
        zoom_level: 5,
        description_en: 'Sovereign fluvial outlet connecting Bolivia through Puerto Busch to the open South Atlantic Ocean.',
        description_es: 'Salida fluvial soberana que conecta a Bolivia mediante Puerto Busch con las aguas abiertas del Atlántico.',
      },
    ],
  },

  // =========================================================================
  // SWITZERLAND (LANDLOCKED)
  // =========================================================================
  CH: {
    is_landlocked: true,
    landlocked_note_en:
      'Switzerland is a landlocked Alpine nation in Central Europe. Known as the "Water Tower of Europe", its glaciers and rivers drain into four distinct marine bodies: the Rhine to the North Sea, the Rhône to the Mediterranean Sea, the Ticino to the Adriatic Sea, and the Inn to the Black Sea via the Danube. Switzerland maintains its own high-seas merchant fleet registered under the Swiss flag via the Rhine port of Basel.',
    landlocked_note_es:
      'Suiza es un país alpino mediterráneo (sin salida al mar) en Europa Central. Considerada el "Castillo de Agua de Europa", sus glaciares alimentan ríos que desembocan en cuatro mares: el Rin hacia el Mar del Norte, el Ródano hacia el Mar Mediterráneo, el Tesino hacia el Mar Adriático y el Eno hacia el Mar Negro por el Danubio. Mantiene una flota mercante de alta mar abanderada a través del puerto fluvial de Basilea.',
    waters: [
      {
        id: 'ch-north-sea',
        type: 'sea',
        name_en: 'North Sea (via the Rhine River Corridor)',
        name_es: 'Mar del Norte (vía Corredor del Río Rin)',
        direction_en: 'North (Primary Swiss merchant barge route via Basel)',
        direction_es: 'Norte (Principal ruta de barcazas mercantes suizas vía Basilea)',
        coords: [53.5, 4.5],
        zoom_level: 6,
        description_en: 'Direct fluvial highway connecting Swiss inland ports to Rotterdam and the North Sea.',
        description_es: 'Autopista fluvial directa que enlaza los puertos interiores suizos con Róterdam y el Mar del Norte.',
      },
      {
        id: 'ch-mediterranean',
        type: 'sea',
        name_en: 'Mediterranean Sea (via Rhône & Ticino/Po)',
        name_es: 'Mar Mediterráneo (vía Ródano y Tesino/Po)',
        direction_en: 'South (Alpine river drainage)',
        direction_es: 'Sur (Drenaje fluvial alpino)',
        coords: [42.8, 6.0],
        zoom_level: 6,
        description_en: 'Southern maritime outlet for waters flowing down from Swiss Alpine glaciers into the Gulf of Lion.',
        description_es: 'Salida marítima meridional de las aguas alpinas suizas que descienden hacia el Golfo de León.',
      },
    ],
  },

  // =========================================================================
  // BRAZIL
  // =========================================================================
  BR: {
    is_landlocked: false,
    waters: [
      {
        id: 'br-atlantic-south',
        type: 'ocean',
        name_en: 'South Atlantic Ocean',
        name_es: 'Océano Atlántico Sur',
        direction_en: 'East & Southeast Coast (Rio, Santos, Salvador)',
        direction_es: 'Costa Este y Sureste (Río, Santos, Salvador)',
        coords: [-23.5, -42.0],
        zoom_level: 5,
        description_en: 'Vast ocean coast spanning 7,491 km, hosting major commercial ports and rich offshore pre-salt oil fields.',
        description_es: 'Vasta costa de 7.491 km con los mayores puertos comerciales del continente y ricos yacimientos del presal.',
      },
      {
        id: 'br-atlantic-north',
        type: 'ocean',
        name_en: 'North Atlantic Ocean (Amazon Mouth)',
        name_es: 'Océano Atlántico Norte (Boca del Amazonas)',
        direction_en: 'North Coast (Pará, Amapá, Maranhão)',
        direction_es: 'Costa Norte (Pará, Amapá, Maranhão)',
        coords: [1.5, -48.0],
        zoom_level: 5,
        description_en: 'Ocean waters where the Amazon River discharges up to 20% of global river freshwater discharge.',
        description_es: 'Aguas oceánicas donde desemboca el Amazonas, aportando una quinta parte de toda el agua dulce fluvial del planeta.',
      },
    ],
  },

  // =========================================================================
  // MEXICO
  // =========================================================================
  MX: {
    is_landlocked: false,
    waters: [
      {
        id: 'mx-pacific',
        type: 'ocean',
        name_en: 'Pacific Ocean',
        name_es: 'Océano Pacífico',
        direction_en: 'West & Southwest Coast',
        direction_es: 'Costa Oeste y Suroeste',
        coords: [18.0, -104.5],
        zoom_level: 5,
        description_en: 'Deep oceanic trench and active shipping lanes with ports like Manzanillo and Lázaro Cárdenas.',
        description_es: 'Fosa oceánica profunda y activas rutas marítimas con puertos clave como Manzanillo y Lázaro Cárdenas.',
      },
      {
        id: 'mx-gulf-mexico',
        type: 'gulf',
        name_en: 'Gulf of Mexico',
        name_es: 'Golfo de México',
        direction_en: 'East Coast (Veracruz, Tamaulipas, Campeche)',
        direction_es: 'Costa Este (Veracruz, Tamaulipas, Campeche)',
        coords: [22.5, -94.0],
        zoom_level: 6,
        description_en: 'Rich marine basin essential for national petroleum production, commercial fishing, and maritime trade.',
        description_es: 'Rica cuenca marina vital para la producción petrolera mexicana, la pesca comercial y el comercio exterior.',
      },
      {
        id: 'mx-caribbean',
        type: 'sea',
        name_en: 'Caribbean Sea',
        name_es: 'Mar Caribe',
        direction_en: 'Southeast Coast (Quintana Roo / Riviera Maya)',
        direction_es: 'Costa Sureste (Quintana Roo / Riviera Maya)',
        coords: [19.5, -86.5],
        zoom_level: 6,
        description_en: 'Crystalline waters home to the Mesoamerican Barrier Reef, the second largest barrier reef on Earth.',
        description_es: 'Aguas cristalinas que albergan el Sistema Arrecifal Mesoamericano, la segunda mayor barrera de coral del planeta.',
      },
      {
        id: 'mx-gulf-california',
        type: 'gulf',
        name_en: 'Gulf of California (Sea of Cortez)',
        name_es: 'Golfo de California (Mar de Cortés)',
        direction_en: 'Northwest (Between Baja California & mainland)',
        direction_es: 'Noroeste (Entre Baja California y territorio continental)',
        coords: [26.0, -110.0],
        zoom_level: 6,
        description_en: 'Known as the "Aquarium of the World" for its extraordinary marine biodiversity and whale nursery grounds.',
        description_es: 'Conocido como el "Acuario del Mundo" por su extraordinaria biodiversidad marina y santuario de ballenas.',
      },
    ],
  },

  // =========================================================================
  // EGYPT
  // =========================================================================
  EG: {
    is_landlocked: false,
    waters: [
      {
        id: 'eg-mediterranean',
        type: 'sea',
        name_en: 'Mediterranean Sea',
        name_es: 'Mar Mediterráneo',
        direction_en: 'North Coast (Alexandria, Port Said)',
        direction_es: 'Costa Norte (Alejandría, Puerto Saíd)',
        coords: [32.0, 30.5],
        zoom_level: 6,
        description_en: 'Historical cradle connecting Egypt to Southern Europe and the entrance of the Suez Canal.',
        description_es: 'Cuna histórica que conecta a Egipto con el sur de Europa y entrada norte del Canal de Suez.',
      },
      {
        id: 'eg-red-sea',
        type: 'sea',
        name_en: 'Red Sea & Gulf of Suez',
        name_es: 'Mar Rojo y Golfo de Suez',
        direction_en: 'East Coast (Hurghada, Sharm El-Sheikh)',
        direction_es: 'Costa Este (Hurghada, Sharm el-Sheij)',
        coords: [26.0, 35.0],
        zoom_level: 6,
        description_en: 'Crucial global maritime artery and coral reef haven joining Africa and the Arabian Peninsula.',
        description_es: 'Vital arteria marítima global y paraíso de arrecifes de coral que une África con la Península Arábiga.',
      },
    ],
  },

  // =========================================================================
  // JAPAN
  // =========================================================================
  JP: {
    is_landlocked: false,
    waters: [
      {
        id: 'jp-pacific',
        type: 'ocean',
        name_en: 'North Pacific Ocean',
        name_es: 'Océano Pacífico Norte',
        direction_en: 'East & South Coasts',
        direction_es: 'Costas Este y Sur',
        coords: [34.0, 142.0],
        zoom_level: 5,
        description_en: 'Deep ocean trenches (Japan Trench) and the warm Kuroshio Current driving maritime climate.',
        description_es: 'Fosas oceánicas profundas (Fosa de Japón) y la cálida Corriente de Kuroshio que modula el clima insular.',
      },
      {
        id: 'jp-sea-of-japan',
        type: 'sea',
        name_en: 'Sea of Japan (East Sea)',
        name_es: 'Mar del Japón (Mar del Este)',
        direction_en: 'West Coast',
        direction_es: 'Costa Oeste',
        coords: [39.0, 134.0],
        zoom_level: 5,
        description_en: 'Marginal sea separating the Japanese archipelago from the Asian mainland.',
        description_es: 'Mar marginal que separa el archipiélago japonés del continente asiático.',
      },
      {
        id: 'jp-okhotsk',
        type: 'sea',
        name_en: 'Sea of Okhotsk',
        name_es: 'Mar de Ojotsk',
        direction_en: 'North (Hokkaido Coast)',
        direction_es: 'Norte (Costa de Hokkaido)',
        coords: [45.5, 145.0],
        zoom_level: 5,
        description_en: 'Subarctic northern sea famous for winter drift ice and productive marine fisheries.',
        description_es: 'Mar subártico septentrional famoso por el hielo a la deriva invernal y productivos bancos pesqueros.',
      },
      {
        id: 'jp-east-china-sea',
        type: 'sea',
        name_en: 'East China Sea',
        name_es: 'Mar de la China Oriental',
        direction_en: 'Southwest (Ryukyu Islands / Okinawa)',
        direction_es: 'Suroeste (Islas Ryukyu / Okinawa)',
        coords: [28.0, 126.0],
        zoom_level: 6,
        description_en: 'Warm marginal sea surrounding the subtropical Okinawa archipelago.',
        description_es: 'Mar marginal cálido que circunda el archipiélago subtropical de Okinawa.',
      },
    ],
  },

  // =========================================================================
  // NORWAY
  // =========================================================================
  NO: {
    is_landlocked: false,
    waters: [
      {
        id: 'no-norwegian-sea',
        type: 'sea',
        name_en: 'Norwegian Sea',
        name_es: 'Mar de Noruega',
        direction_en: 'West Coast / Atlantic Frontage',
        direction_es: 'Costa Oeste / Fachada Atlántica',
        coords: [65.0, 5.0],
        zoom_level: 5,
        description_en: 'Deep sea warmed by the North Atlantic Drift, keeping Norwegian fjords ice-free year-round.',
        description_es: 'Mar profundo atemperado por la Corriente del Atlántico Norte, manteniendo los fiordos libres de hielo todo el año.',
      },
      {
        id: 'no-north-sea',
        type: 'sea',
        name_en: 'North Sea',
        name_es: 'Mar del Norte',
        direction_en: 'Southwest Coast (Stavanger, Bergen)',
        direction_es: 'Costa Suroeste (Stavanger, Bergen)',
        coords: [59.0, 3.5],
        zoom_level: 5,
        description_en: 'Epicenter of offshore petroleum and gas platforms, offshore wind, and rich fishing grounds.',
        description_es: 'Epicentro de plataformas de petróleo y gas, energía eólica marina y ricos caladeros de pesca.',
      },
      {
        id: 'no-barents-sea',
        type: 'sea',
        name_en: 'Barents Sea (Arctic Ocean)',
        name_es: 'Mar de Barents (Océano Ártico)',
        direction_en: 'North Coast (Finnmark & Svalbard)',
        direction_es: 'Costa Norte (Finnmark y Svalbard)',
        coords: [73.5, 25.0],
        zoom_level: 5,
        description_en: 'Arctic sea rich in marine resources, cod fisheries, and northern maritime exploration routes.',
        description_es: 'Mar ártico rico en recursos biológicos marinos, pesca de bacalao y rutas de exploración polar.',
      },
    ],
  },

  // =========================================================================
  // AUSTRALIA
  // =========================================================================
  AU: {
    is_landlocked: false,
    waters: [
      {
        id: 'au-pacific',
        type: 'ocean',
        name_en: 'South Pacific Ocean',
        name_es: 'Océano Pacífico Sur',
        direction_en: 'East Coast (Sydney, Brisbane)',
        direction_es: 'Costa Este (Sídney, Brisbane)',
        coords: [-30.0, 155.0],
        zoom_level: 5,
        description_en: 'Vast ocean expanse bathing Australia’s most populous metropolitan coastlines.',
        description_es: 'Inmensa cuenca oceánica que baña la costa más poblada de Australia.',
      },
      {
        id: 'au-indian',
        type: 'ocean',
        name_en: 'Indian Ocean',
        name_es: 'Océano Índico',
        direction_en: 'West & Northwest Coast (Perth, Broome)',
        direction_es: 'Costa Oeste y Noroeste (Perth, Broome)',
        coords: [-25.0, 110.0],
        zoom_level: 5,
        description_en: 'Warm tropical ocean connecting Australian mineral export hubs to Asian markets.',
        description_es: 'Océano cálido que conecta los puertos de exportación minera australianos con los mercados de Asia.',
      },
      {
        id: 'au-southern',
        type: 'ocean',
        name_en: 'Southern Ocean (Antarctic Ocean)',
        name_es: 'Océano Glacial Antártico (Océano Austral)',
        direction_en: 'South Coast (Great Australian Bight, Melbourne, Tasmania)',
        direction_es: 'Costa Sur (Gran Bahía Australiana, Melbourne, Tasmania)',
        coords: [-38.5, 134.0],
        zoom_level: 5,
        description_en: 'Cold, nutrient-rich circumpolar waters characterized by the powerful Roaring Forties winds.',
        description_es: 'Aguas circumpolares frías y ricas en nutrientes impulsadas por los vientos de los Cuarenta Rugientes.',
      },
      {
        id: 'au-coral-sea',
        type: 'sea',
        name_en: 'Coral Sea',
        name_es: 'Mar del Coral',
        direction_en: 'Northeast Coast (Queensland)',
        direction_es: 'Costa Noreste (Queensland)',
        coords: [-16.0, 148.0],
        zoom_level: 5,
        description_en: 'Home to the Great Barrier Reef, the largest living coral structure visible from space.',
        description_es: 'Hogar de la Gran Barrera de Coral, la estructura biológica viva más grande de la Tierra, visible desde el espacio.',
      },
      {
        id: 'au-tasman-sea',
        type: 'sea',
        name_en: 'Tasman Sea',
        name_es: 'Mar de Tasmania',
        direction_en: 'Southeast (Between Australia & New Zealand)',
        direction_es: 'Sureste (Entre Australia y Nueva Zelanda)',
        coords: [-37.0, 158.0],
        zoom_level: 5,
        description_en: 'Marginal sea separating Australia from New Zealand across 2,000 km of open sea.',
        description_es: 'Mar marginal que separa a Australia de Nueva Zelanda a lo largo de 2.000 km de navegación abierta.',
      },
    ],
  },

  // =========================================================================
  // ARGENTINA
  // =========================================================================
  AR: {
    is_landlocked: false,
    waters: [
      {
        id: 'ar-atlantic',
        type: 'ocean',
        name_en: 'South Atlantic Ocean',
        name_es: 'Océano Atlántico Sur',
        direction_en: 'East Coast (Buenos Aires, Patagonia)',
        direction_es: 'Costa Este (Buenos Aires, Patagonia)',
        coords: [-42.0, -60.0],
        zoom_level: 5,
        description_en: 'Extensive maritime frontage with cold and nutrient-rich waters supporting vast fisheries.',
        description_es: 'Extenso litoral marítimo con aguas frías y ricas en nutrientes que sustentan gigantescos caladeros.',
      },
      {
        id: 'ar-argentine-sea',
        type: 'sea',
        name_en: 'Argentine Sea (Mar Argentino)',
        name_es: 'Mar Argentino',
        direction_en: 'Epicontinental Shelf',
        direction_es: 'Plataforma Epicontinental',
        coords: [-46.0, -62.0],
        zoom_level: 5,
        description_en: 'One of the world’s widest and richest continental shelves, fed by the cold Malvinas Current.',
        description_es: 'Una de las plataformas continentales más extensas y ricas del mundo, fertilizada por la Corriente de Malvinas.',
      },
      {
        id: 'ar-drake',
        type: 'strait',
        name_en: 'Drake Passage & Beagle Channel',
        name_es: 'Pasaje de Drake y Canal de Beagle',
        direction_en: 'South / Tierra del Fuego',
        direction_es: 'Sur / Tierra del Fuego',
        coords: [-56.0, -66.0],
        zoom_level: 6,
        description_en: 'Stormy passage connecting the Atlantic and Pacific oceans at the southern tip of the Americas.',
        description_es: 'Tempestuoso paso que conecta los océanos Atlántico y Pacífico en el extremo austral de América.',
      },
    ],
  },

  // =========================================================================
  // CHILE
  // =========================================================================
  CL: {
    is_landlocked: false,
    waters: [
      {
        id: 'cl-pacific',
        type: 'ocean',
        name_en: 'South Pacific Ocean',
        name_es: 'Océano Pacífico Sur',
        direction_en: 'West Coast (Over 4,200 km of coastline)',
        direction_es: 'Costa Oeste (Más de 4.200 km de litoral)',
        coords: [-33.0, -75.0],
        zoom_level: 5,
        description_en: 'Dominated by the cold Humboldt Current, creating one of Earth’s most productive marine ecosystems.',
        description_es: 'Dominado por la fría Corriente de Humboldt, crea uno de los ecosistemas marinos más productivos del planeta.',
      },
      {
        id: 'cl-magellan',
        type: 'strait',
        name_en: 'Strait of Magellan & Southern Fjords',
        name_es: 'Estrecho de Magallanes y Fiordos Australes',
        direction_en: 'Far South (Patagonia & Tierra del Fuego)',
        direction_es: 'Extremo Austral (Patagonia y Tierra del Fuego)',
        coords: [-53.5, -71.5],
        zoom_level: 6,
        description_en: 'Historic natural navigable passage linking the Atlantic and Pacific Oceans.',
        description_es: 'Histórico paso natural navegable que une los océanos Atlántico y Pacífico.',
      },
    ],
  },

  // =========================================================================
  // COLOMBIA
  // =========================================================================
  CO: {
    is_landlocked: false,
    waters: [
      {
        id: 'co-caribbean',
        type: 'sea',
        name_en: 'Caribbean Sea',
        name_es: 'Mar Caribe',
        direction_en: 'North Coast (Cartagena, Barranquilla, Santa Marta)',
        direction_es: 'Costa Norte (Cartagena, Barranquilla, Santa Marta)',
        coords: [12.0, -74.5],
        zoom_level: 6,
        description_en: 'Tropical northern maritime border with major historic ports and coral archipelagos.',
        description_es: 'Frontera marítima septentrional con históricos puertos mercantes y archipiélagos coralinos.',
      },
      {
        id: 'co-pacific',
        type: 'ocean',
        name_en: 'Pacific Ocean',
        name_es: 'Océano Pacífico',
        direction_en: 'West Coast (Buenaventura, Gorgona, Malpelo)',
        direction_es: 'Costa Oeste (Buenaventura, Gorgona, Malpelo)',
        coords: [3.8, -78.5],
        zoom_level: 6,
        description_en: 'Biodiverse oceanic coast with humpback whale calving sanctuaries and Colombia’s largest port.',
        description_es: 'Costa oceánica de gran biodiversidad con santuarios de cría de ballenas jorobadas y el puerto de Buenaventura.',
      },
    ],
  },

  // =========================================================================
  // SPAIN
  // =========================================================================
  ES: {
    is_landlocked: false,
    waters: [
      {
        id: 'es-mediterranean',
        type: 'sea',
        name_en: 'Mediterranean Sea & Balearic Sea',
        name_es: 'Mar Mediterráneo y Mar Balear',
        direction_en: 'East & Southeast Coast',
        direction_es: 'Costa Este y Sureste',
        coords: [39.0, 1.5],
        zoom_level: 6,
        description_en: 'Historic cradle of Mediterranean commerce, surrounding the Balearic Islands.',
        description_es: 'Cuna histórica del comercio mediterráneo que circunda las Islas Baleares.',
      },
      {
        id: 'es-atlantic',
        type: 'ocean',
        name_en: 'Atlantic Ocean',
        name_es: 'Océano Atlántico',
        direction_en: 'West (Galicia), South (Gulf of Cadiz) & Canary Islands',
        direction_es: 'Oeste (Galicia), Sur (Golfo de Cádiz) e Islas Canarias',
        coords: [36.0, -7.5],
        zoom_level: 6,
        description_en: 'Open oceanic façade from which historic voyages of exploration departed.',
        description_es: 'Fachada oceánica abierta desde donde zarparon las grandes expediciones de la era de los descubrimientos.',
      },
      {
        id: 'es-cantabrian',
        type: 'sea',
        name_en: 'Cantabrian Sea (Bay of Biscay)',
        name_es: 'Mar Cantábrico (Golfo de Vizcaya)',
        direction_en: 'North Coast (Asturias, Cantabria, Basque Country)',
        direction_es: 'Costa Norte (Asturias, Cantabria, País Vasco)',
        coords: [44.0, -4.5],
        zoom_level: 6,
        description_en: 'Rough sub-oceanic northern sea famous for naval traditions and rich fisheries.',
        description_es: 'Mar septentrional bravo y de aguas frías, célebre por su tradición marinera y riqueza pesquera.',
      },
      {
        id: 'es-gibraltar',
        type: 'strait',
        name_en: 'Strait of Gibraltar',
        name_es: 'Estrecho de Gibraltar',
        direction_en: 'South (Chokepoint between Europe & Africa)',
        direction_es: 'Sur (Paso estratégico entre Europa y África)',
        coords: [35.95, -5.6],
        zoom_level: 8,
        description_en: 'One of the world’s most strategic maritime chokepoints, only 14 km wide.',
        description_es: 'Uno de los pasos marítimos más transitados y estratégicos del planeta, con solo 14 km de ancho.',
      },
    ],
  },

  // =========================================================================
  // UNITED KINGDOM
  // =========================================================================
  GB: {
    is_landlocked: false,
    waters: [
      {
        id: 'gb-north-sea',
        type: 'sea',
        name_en: 'North Sea',
        name_es: 'Mar del Norte',
        direction_en: 'East Coast',
        direction_es: 'Costa Este',
        coords: [55.5, 2.0],
        zoom_level: 5,
        description_en: 'Key sea for oil, gas, offshore wind farms, and maritime trade with Continental Europe.',
        description_es: 'Mar fundamental para el gas, petróleo, parques eólicos marinos y comercio con Europa Continental.',
      },
      {
        id: 'gb-atlantic',
        type: 'ocean',
        name_en: 'North Atlantic Ocean',
        name_es: 'Océano Atlántico Norte',
        direction_en: 'North & West (Hebrides, Scottish Highlands)',
        direction_es: 'Norte y Oeste (Hébridas, Tierras Altas de Escocia)',
        coords: [58.0, -8.5],
        zoom_level: 5,
        description_en: 'Open Atlantic swell buffeting the rugged western coasts of Scotland and Northern Ireland.',
        description_es: 'Oleaje atlántico abierto que baña las costas escarpadas de Escocia e Irlanda del Norte.',
      },
      {
        id: 'gb-english-channel',
        type: 'channel',
        name_en: 'English Channel (La Mancha)',
        name_es: 'Canal de la Mancha',
        direction_en: 'South Coast (Dover to Cornwall)',
        direction_es: 'Costa Sur (Desde Dover hasta Cornualles)',
        coords: [50.2, -1.5],
        zoom_level: 6,
        description_en: 'Busiest maritime shipping channel in the world, separating Britain from France.',
        description_es: 'El canal de navegación comercial más transitado del mundo, separando a Gran Bretaña de Francia.',
      },
      {
        id: 'gb-irish-sea',
        type: 'sea',
        name_en: 'Irish Sea',
        name_es: 'Mar de Irlanda',
        direction_en: 'West (Between Great Britain & Ireland)',
        direction_es: 'Oeste (Entre Gran Bretaña e Irlanda)',
        coords: [53.5, -4.5],
        zoom_level: 6,
        description_en: 'Body of water separating Great Britain from the island of Ireland.',
        description_es: 'Cuerpo de agua que separa la isla de Gran Bretaña de la isla de Irlanda.',
      },
    ],
  },

  // =========================================================================
  // FRANCE
  // =========================================================================
  FR: {
    is_landlocked: false,
    waters: [
      {
        id: 'fr-atlantic',
        type: 'ocean',
        name_en: 'Atlantic Ocean & Bay of Biscay',
        name_es: 'Océano Atlántico y Golfo de Vizcaya',
        direction_en: 'West Coast (Brittany, Aquitaine)',
        direction_es: 'Costa Oeste (Bretaña, Aquitania)',
        coords: [46.0, -3.5],
        zoom_level: 6,
        description_en: 'Broad oceanic coast facing the North Atlantic with world-famous tidal ranges.',
        description_es: 'Amplio litoral oceánico expuesto al Atlántico con impresionantes oscilaciones de marea.',
      },
      {
        id: 'fr-english-channel',
        type: 'channel',
        name_en: 'English Channel (La Manche)',
        name_es: 'Canal de la Mancha',
        direction_en: 'North Coast (Normandy, Pas-de-Calais)',
        direction_es: 'Costa Norte (Normandía, Paso de Calais)',
        coords: [50.0, 0.0],
        zoom_level: 6,
        description_en: 'Strategic sea route connecting the Atlantic to the North Sea.',
        description_es: 'Ruta marina estratégica que enlaza el Atlántico con el Mar del Norte.',
      },
      {
        id: 'fr-mediterranean',
        type: 'sea',
        name_en: 'Mediterranean Sea (Gulf of Lion & French Riviera)',
        name_es: 'Mar Mediterráneo (Golfo de León y Costa Azul)',
        direction_en: 'South Coast (Marseille, Nice, Corsica)',
        direction_es: 'Costa Sur (Marsella, Niza, Córcega)',
        coords: [42.5, 5.5],
        zoom_level: 6,
        description_en: 'Sun-drenched sea hosting France’s largest commercial port, Marseille.',
        description_es: 'Costa mediterránea soleada que alberga el puerto de Marsella, el mayor de Francia.',
      },
    ],
  },

  // =========================================================================
  // GERMANY
  // =========================================================================
  DE: {
    is_landlocked: false,
    waters: [
      {
        id: 'de-north-sea',
        type: 'sea',
        name_en: 'North Sea (Wadden Sea)',
        name_es: 'Mar del Norte (Mar de Frisia)',
        direction_en: 'Northwest Coast (Elbe Estuary, Hamburg Access)',
        direction_es: 'Costa Noroeste (Estuario del Elba, Acceso a Hamburgo)',
        coords: [54.5, 7.5],
        zoom_level: 6,
        description_en: 'Tidal mudflats of the Wadden Sea and deep-water access routes to Hamburg.',
        description_es: 'Llanuras intermareales del Mar de Frisia y rutas de acceso fluvial hacia Hamburgo.',
      },
      {
        id: 'de-baltic-sea',
        type: 'sea',
        name_en: 'Baltic Sea',
        name_es: 'Mar Báltico',
        direction_en: 'Northeast Coast (Kiel Canal, Rostock)',
        direction_es: 'Costa Noreste (Canal de Kiel, Rostock)',
        coords: [54.8, 12.5],
        zoom_level: 6,
        description_en: 'Brackish inland sea linking Germany with Scandinavia and the Baltic States.',
        description_es: 'Mar interior salobre que conecta a Alemania con Escandinavia y los Estados Bálticos.',
      },
    ],
  },

  // =========================================================================
  // ITALY
  // =========================================================================
  IT: {
    is_landlocked: false,
    waters: [
      {
        id: 'it-tyrrhenian',
        type: 'sea',
        name_en: 'Tyrrhenian Sea',
        name_es: 'Mar Tirreno',
        direction_en: 'West Coast (Rome, Naples, Sicily)',
        direction_es: 'Costa Oeste (Roma, Nápoles, Sicilia)',
        coords: [40.0, 12.0],
        zoom_level: 6,
        description_en: 'Deep sea basin between the Italian peninsula and the islands of Sardinia and Sicily.',
        description_es: 'Profunda cuenca marina entre la península itálica y las islas de Cerdeña y Sicilia.',
      },
      {
        id: 'it-adriatic',
        type: 'sea',
        name_en: 'Adriatic Sea',
        name_es: 'Mar Adriático',
        direction_en: 'East Coast (Venice, Ancona, Bari)',
        direction_es: 'Costa Este (Venecia, Ancona, Bari)',
        coords: [42.5, 15.5],
        zoom_level: 6,
        description_en: 'Semi-enclosed sea between Italy and the Balkan peninsula with Venice at its northern head.',
        description_es: 'Mar semicerrado entre Italia y los Balcanes con Venecia en su cabecera norte.',
      },
      {
        id: 'it-ionian',
        type: 'sea',
        name_en: 'Ionian Sea',
        name_es: 'Mar Jónico',
        direction_en: 'South Coast (Gulf of Taranto & Calabria)',
        direction_es: 'Costa Sur (Golfo de Tarento y Calabria)',
        coords: [38.5, 17.5],
        zoom_level: 6,
        description_en: 'The deepest section of the Mediterranean, reaching depths of over 5,000 meters in the Calypso Deep.',
        description_es: 'La sección más profunda del Mediterráneo, superando los 5.000 metros en la Fosa de Calipso.',
      },
      {
        id: 'it-ligurian',
        type: 'sea',
        name_en: 'Ligurian Sea',
        name_es: 'Mar de Liguria',
        direction_en: 'Northwest Coast (Genoa, Portofino)',
        direction_es: 'Costa Noroeste (Génova, Portofino)',
        coords: [43.8, 8.8],
        zoom_level: 7,
        description_en: 'Northern Mediterranean crescent sheltering the historic port of Genoa.',
        description_es: 'Ensenada del norte mediterráneo que cobija al histórico puerto de Génova.',
      },
    ],
  },

  // =========================================================================
  // CHINA
  // =========================================================================
  CN: {
    is_landlocked: false,
    waters: [
      {
        id: 'cn-south-china-sea',
        type: 'sea',
        name_en: 'South China Sea',
        name_es: 'Mar de la China Meridional',
        direction_en: 'South Coast (Guangdong, Hainan, Hong Kong)',
        direction_es: 'Costa Sur (Guangdong, Hainan, Hong Kong)',
        coords: [18.0, 114.0],
        zoom_level: 5,
        description_en: 'One of Earth’s busiest commercial seas, through which one-third of global shipping sails.',
        description_es: 'Uno de los mares de mayor tráfico marítimo del mundo, por donde navega un tercio del comercio global.',
      },
      {
        id: 'cn-east-china-sea',
        type: 'sea',
        name_en: 'East China Sea',
        name_es: 'Mar de la China Oriental',
        direction_en: 'East Coast (Shanghai, Zhejiang)',
        direction_es: 'Costa Este (Shanghái, Zhejiang)',
        coords: [28.5, 124.0],
        zoom_level: 5,
        description_en: 'Marginal sea into which the Yangtze River empties at Shanghai, the world’s busiest container port.',
        description_es: 'Mar marginal donde desemboca el río Yangtsé en Shanghái, el puerto de contenedores más activo del planeta.',
      },
      {
        id: 'cn-yellow-sea',
        type: 'sea',
        name_en: 'Yellow Sea & Bohai Sea',
        name_es: 'Mar Amarillo y Mar de Bohai',
        direction_en: 'Northeast Coast (Tianjin, Dalian, Qingdao)',
        direction_es: 'Costa Noreste (Tianjin, Dalian, Qingdao)',
        coords: [36.0, 122.5],
        zoom_level: 5,
        description_en: 'Shallow sea named after the yellow silt washed down by the Yellow River (Huang He).',
        description_es: 'Mar poco profundo denominado así por el limo dorado arrastrado por el Río Amarillo (Huang He).',
      },
    ],
  },

  // =========================================================================
  // INDIA
  // =========================================================================
  IN: {
    is_landlocked: false,
    waters: [
      {
        id: 'in-arabian-sea',
        type: 'sea',
        name_en: 'Arabian Sea',
        name_es: 'Mar Arábigo',
        direction_en: 'West Coast (Mumbai, Goa, Kerala)',
        direction_es: 'Costa Oeste (Bombay, Goa, Kerala)',
        coords: [16.0, 70.0],
        zoom_level: 5,
        description_en: 'Warm marginal sea of the northern Indian Ocean supporting major west-coast industrial ports.',
        description_es: 'Mar marginal cálido del Océano Índico que sustenta los grandes puertos comerciales del oeste.',
      },
      {
        id: 'in-bay-of-bengal',
        type: 'bay',
        name_en: 'Bay of Bengal',
        name_es: 'Bahía de Bengala (Golfo de Bengala)',
        direction_en: 'East Coast (Chennai, Kolkata, Odisha)',
        direction_es: 'Costa Este (Chennai, Calcuta, Odisha)',
        coords: [15.0, 88.0],
        zoom_level: 5,
        description_en: 'The largest water region called a bay in the world, receiving the Ganges and Brahmaputra rivers.',
        description_es: 'La bahía más grande del mundo por superficie marina, receptora de los ríos Ganges y Brahmaputra.',
      },
      {
        id: 'in-indian-ocean',
        type: 'ocean',
        name_en: 'Indian Ocean',
        name_es: 'Océano Índico',
        direction_en: 'South (Cape Comorin / Kanyakumari)',
        direction_es: 'Sur (Cabo Comorín / Kanyakumari)',
        coords: [6.0, 78.5],
        zoom_level: 5,
        description_en: 'Expansive ocean meeting at the southern tip of the subcontinent.',
        description_es: 'Inmenso océano que confluye en el vértice más meridional del subcontinente indio.',
      },
    ],
  },

  // =========================================================================
  // CANADA
  // =========================================================================
  CA: {
    is_landlocked: false,
    waters: [
      {
        id: 'ca-atlantic',
        type: 'ocean',
        name_en: 'North Atlantic Ocean',
        name_es: 'Océano Atlántico Norte',
        direction_en: 'East Coast (Nova Scotia, Newfoundland)',
        direction_es: 'Costa Este (Nueva Escocia, Terranova)',
        coords: [48.0, -52.0],
        zoom_level: 5,
        description_en: 'Cold Atlantic waters famous for the Grand Banks fisheries and icebergs from Greenland.',
        description_es: 'Aguas atlánticas frías célebres por los Grandes Bancos pesqueros y los icebergs de Groenlandia.',
      },
      {
        id: 'ca-pacific',
        type: 'ocean',
        name_en: 'North Pacific Ocean',
        name_es: 'Océano Pacífico Norte',
        direction_en: 'West Coast (British Columbia & Vancouver Island)',
        direction_es: 'Costa Oeste (Columbia Británica e Isla de Vancouver)',
        coords: [51.0, -131.0],
        zoom_level: 5,
        description_en: 'Fjord-lined temperate rainforest coast connecting Canadian trade to the Pacific Rim.',
        description_es: 'Costa de fiordos y bosque templado lluvioso que conecta el comercio canadiense con el Pacífico.',
      },
      {
        id: 'ca-arctic',
        type: 'ocean',
        name_en: 'Arctic Ocean & Beaufort Sea',
        name_es: 'Océano Ártico y Mar de Beaufort',
        direction_en: 'North Coast (Northwest Passage)',
        direction_es: 'Costa Norte (Paso del Noroeste)',
        coords: [74.0, -120.0],
        zoom_level: 4,
        description_en: 'Frozen polar archipelago encompassing the legendary Northwest Passage route.',
        description_es: 'Archipiélago polar congelado que abarca la legendaria ruta del Paso del Noroeste.',
      },
      {
        id: 'ca-hudson-bay',
        type: 'bay',
        name_en: 'Hudson Bay',
        name_es: 'Bahía de Hudson',
        direction_en: 'Northeast Inland Sea',
        direction_es: 'Mar Interior del Noreste',
        coords: [60.0, -85.0],
        zoom_level: 5,
        description_en: 'Vast epicontinental inland sea freezing over in winter and home to polar bear populations.',
        description_es: 'Inmenso mar interior epicontinental que se congela en invierno, hábitat clave del oso polar.',
      },
    ],
  },

  // =========================================================================
  // PERU
  // =========================================================================
  PE: {
    is_landlocked: false,
    waters: [
      {
        id: 'pe-pacific',
        type: 'ocean',
        name_en: 'South Pacific Ocean (Grau Sea)',
        name_es: 'Océano Pacífico Sur (Mar de Grau)',
        direction_en: 'West Coast (Over 2,400 km of coastline)',
        direction_es: 'Costa Oeste (Más de 2.400 km de litoral)',
        coords: [-11.5, -80.0],
        zoom_level: 5,
        description_en: 'Intense coastal upwelling driven by the Humboldt Current makes it one of the richest anchovy fisheries.',
        description_es: 'El afloramiento costero de la Corriente de Humboldt lo convierte en uno de los caladeros de anchoveta más ricos del mundo.',
      },
    ],
  },

  // =========================================================================
  // PARAGUAY (LANDLOCKED)
  // =========================================================================
  PY: {
    is_landlocked: true,
    landlocked_note_en:
      'Paraguay is a landlocked nation located between Argentina, Brazil, and Bolivia. It has access to the Atlantic Ocean via the Paraguay and Paraná river waterways, operating one of the largest river barge fleets in the world down to the Río de la Plata estuary.',
    landlocked_note_es:
      'Paraguay es un país mediterráneo situado en el centro de América del Sur. Conecta con el Océano Atlántico mediante la hidrovía de los ríos Paraguay y Paraná, operando la tercera flota de barcazas fluviales más grande del mundo hasta el estuario del Río de la Plata.',
    waters: [
      {
        id: 'py-atlantic-riverway',
        type: 'ocean',
        name_en: 'Atlantic Ocean (via Paraguay-Paraná Fluvial Highway)',
        name_es: 'Océano Atlántico (vía Hidrovía Fluvial Paraguay-Paraná)',
        direction_en: 'South (River route to the Atlantic Ocean)',
        direction_es: 'Sur (Ruta fluvial de exportación al Atlántico)',
        coords: [-35.0, -56.0],
        zoom_level: 5,
        description_en: 'Essential river export highway for Paraguayan soy and beef heading to international ocean markets.',
        description_es: 'Autopista fluvial indispensable para la exportación de soja y carne paraguaya a mercados oceánicos.',
      },
    ],
  },

  // =========================================================================
  // ECUADOR
  // =========================================================================
  EC: {
    is_landlocked: false,
    waters: [
      {
        id: 'ec-pacific',
        type: 'ocean',
        name_en: 'Pacific Ocean',
        name_es: 'Océano Pacífico',
        direction_en: 'West Coast',
        direction_es: 'Costa Oeste',
        coords: [-1.5, -82.0],
        zoom_level: 6,
        description_en: 'Cold Humboldt and warm El Niño currents converge to create rich marine biodiversity.',
        description_es: 'Convergencia de la Corriente de Humboldt y El Niño que genera una excepcional riqueza biológica.',
      },
      {
        id: 'ec-guayaquil-gulf',
        type: 'gulf',
        name_en: 'Gulf of Guayaquil',
        name_es: 'Golfo de Guayaquil',
        direction_en: 'Southwest / Guayas River Estuary',
        direction_es: 'Suroeste / Estuario del Río Guayas',
        coords: [-3.0, -80.5],
        zoom_level: 7,
        description_en: 'The largest natural inlet on the Pacific coast of South America, gateway to Guayaquil.',
        description_es: 'La mayor ensenada natural de la costa del Pacífico sudamericano, puerta marítima a Guayaquil.',
      },
      {
        id: 'ec-galapagos-waters',
        type: 'ocean',
        name_en: 'Galápagos Marine Reserve Waters',
        name_es: 'Aguas de la Reserva Marina de Galápagos',
        direction_en: 'West / Pacific Offshore Archipelago (Galápagos)',
        direction_es: 'Oeste / Archipiélago Oceánico de Galápagos',
        coords: [-0.5, -91.0],
        zoom_level: 6,
        description_en: 'Protected oceanic waters home to marine iguanas, whale sharks, and endemic species.',
        description_es: 'Aguas oceánicas protegidas hogar de iguanas marinas, tiburones ballena y especies endémicas.',
      },
    ],
  },

  // =========================================================================
  // GUATEMALA
  // =========================================================================
  GT: {
    is_landlocked: false,
    waters: [
      {
        id: 'gt-pacific',
        type: 'ocean',
        name_en: 'Pacific Ocean',
        name_es: 'Océano Pacífico',
        direction_en: 'South Coast (Puerto Quetzal)',
        direction_es: 'Costa Sur (Puerto Quetzal)',
        coords: [13.6, -91.2],
        zoom_level: 6,
        description_en: 'Long volcanic black sand coastline fronting the open tropical Pacific.',
        description_es: 'Extenso litoral de arena negra volcánica bañado por el Océano Pacífico tropical.',
      },
      {
        id: 'gt-caribbean',
        type: 'sea',
        name_en: 'Caribbean Sea (Gulf of Honduras / Amatique Bay)',
        name_es: 'Mar Caribe (Golfo de Honduras y Bahía de Amatique)',
        direction_en: 'Northeast Coast (Puerto Barrios, Santo Tomás)',
        direction_es: 'Costa Noreste (Puerto Barrios, Santo Tomás)',
        coords: [15.9, -88.5],
        zoom_level: 7,
        description_en: 'Guatemala’s Atlantic commercial outlet connecting to Caribbean shipping routes.',
        description_es: 'Salida atlántica comercial de Guatemala que conecta con las rutas del Mar Caribe.',
      },
    ],
  },

  // =========================================================================
  // CUBA
  // =========================================================================
  CU: {
    is_landlocked: false,
    waters: [
      {
        id: 'cu-caribbean',
        type: 'sea',
        name_en: 'Caribbean Sea',
        name_es: 'Mar Caribe',
        direction_en: 'South Coast (Cienfuegos, Santiago de Cuba)',
        direction_es: 'Costa Sur (Cienfuegos, Santiago de Cuba)',
        coords: [19.8, -78.5],
        zoom_level: 6,
        description_en: 'Warm tropical waters bordered by the deep Cayman Trench and coral archipelagos.',
        description_es: 'Aguas tropicales cálidas bordeada por la Fosa de las Caimán y archipiélagos coralinos.',
      },
      {
        id: 'cu-atlantic',
        type: 'ocean',
        name_en: 'North Atlantic Ocean & Old Bahama Channel',
        name_es: 'Océano Atlántico Norte y Canal Viejo de Bahama',
        direction_en: 'North / Northeast Coast',
        direction_es: 'Costa Norte / Noreste',
        coords: [22.8, -78.0],
        zoom_level: 6,
        description_en: 'Strategic deep channel separating Cuba from the Bahama banks.',
        description_es: 'Canal profundo estratégico que separa a Cuba de los bancos de las Bahamas.',
      },
      {
        id: 'cu-gulf-mexico',
        type: 'gulf',
        name_en: 'Straits of Florida & Gulf of Mexico',
        name_es: 'Estrecho de la Florida y Golfo de México',
        direction_en: 'Northwest Coast (Havana, Varadero)',
        direction_es: 'Costa Noroeste (La Habana, Varadero)',
        coords: [23.5, -82.5],
        zoom_level: 7,
        description_en: 'Swift Gulf Stream gateway connecting the Gulf of Mexico to the open Atlantic.',
        description_es: 'Paso de la Corriente del Golfo que conecta el Golfo de México con el Atlántico abierto.',
      },
    ],
  },

  // =========================================================================
  // PANAMA
  // =========================================================================
  PA: {
    is_landlocked: false,
    waters: [
      {
        id: 'pa-pacific',
        type: 'ocean',
        name_en: 'Pacific Ocean (Gulf of Panama)',
        name_es: 'Océano Pacífico (Golfo de Panamá)',
        direction_en: 'South Coast (Panama City / Balboa)',
        direction_es: 'Costa Sur (Ciudad de Panamá / Balboa)',
        coords: [8.2, -79.3],
        zoom_level: 7,
        description_en: 'Pacific entrance to the Panama Canal with pearl islands and deep commercial anchorages.',
        description_es: 'Entrada pacífica del Canal de Panamá con el archipiélago de Las Perlas.',
      },
      {
        id: 'pa-caribbean',
        type: 'sea',
        name_en: 'Caribbean Sea (Atlantic Gateway)',
        name_es: 'Mar Caribe (Entrada Atlántica)',
        direction_en: 'North Coast (Colón, Cristobal, Bocas del Toro)',
        direction_es: 'Costa Norte (Colón, Cristóbal, Bocas del Toro)',
        coords: [9.6, -80.0],
        zoom_level: 7,
        description_en: 'Caribbean side of the isthmus sheltering the Atlantic entrance to the Canal.',
        description_es: 'Fachada caribeña del istmo que cobija la entrada atlántica del Canal de Panamá.',
      },
    ],
  },

  // =========================================================================
  // COSTA RICA
  // =========================================================================
  CR: {
    is_landlocked: false,
    waters: [
      {
        id: 'cr-pacific',
        type: 'ocean',
        name_en: 'Pacific Ocean (Gulf of Nicoya & Golfo Dulce)',
        name_es: 'Océano Pacífico (Golfo de Nicoya y Golfo Dulce)',
        direction_en: 'West & South Coast',
        direction_es: 'Costa Oeste y Sur',
        coords: [9.2, -84.8],
        zoom_level: 6,
        description_en: 'Pacific rim featuring rich coastal fjords, whale nurseries, and renowned surfing beaches.',
        description_es: 'Litoral del Pacífico con golfos profundos, santuarios de ballenas y playas de surf.',
      },
      {
        id: 'cr-caribbean',
        type: 'sea',
        name_en: 'Caribbean Sea',
        name_es: 'Mar Caribe',
        direction_en: 'East Coast (Limón & Tortuguero)',
        direction_es: 'Costa Este (Limón y Tortuguero)',
        coords: [10.2, -82.8],
        zoom_level: 6,
        description_en: 'Lush tropical Caribbean coastline famous for sea turtle nesting at Tortuguero.',
        description_es: 'Costa caribeña tropical célebre por el desove de tortugas marinas en Tortuguero.',
      },
    ],
  },

  // =========================================================================
  // DOMINICAN REPUBLIC
  // =========================================================================
  DO: {
    is_landlocked: false,
    waters: [
      {
        id: 'do-caribbean',
        type: 'sea',
        name_en: 'Caribbean Sea',
        name_es: 'Mar Caribe',
        direction_en: 'South Coast (Santo Domingo, La Romana)',
        direction_es: 'Costa Sur (Santo Domingo, La Romana)',
        coords: [18.0, -70.0],
        zoom_level: 6,
        description_en: 'Calm turquoise waters fronting the capital and historic Spanish colonial ports.',
        description_es: 'Aguas turquesas tranquilas que bañan la capital y los históricos puertos coloniales.',
      },
      {
        id: 'do-atlantic',
        type: 'ocean',
        name_en: 'North Atlantic Ocean & Silver Bank',
        name_es: 'Océano Atlántico Norte y Banco de la Plata',
        direction_en: 'North Coast (Puerto Plata, Samaná)',
        direction_es: 'Costa Norte (Puerto Plata, Samaná)',
        coords: [19.8, -69.8],
        zoom_level: 6,
        description_en: 'Atlantic sanctuary where thousands of North Atlantic humpback whales breed each winter.',
        description_es: 'Santuario atlántico donde miles de ballenas jorobadas se aparean y crían cada invierno.',
      },
      {
        id: 'do-mona-passage',
        type: 'strait',
        name_en: 'Mona Passage',
        name_es: 'Canal de la Mona',
        direction_en: 'East (Between Dominican Republic & Puerto Rico)',
        direction_es: 'Este (Entre República Dominicana y Puerto Rico)',
        coords: [18.3, -67.9],
        zoom_level: 7,
        description_en: 'Key 130 km strait linking the Atlantic Ocean to the Caribbean Sea.',
        description_es: 'Estrecho de 130 km que comunica el Océano Atlántico con el Mar Caribe.',
      },
    ],
  },

  // =========================================================================
  // URUGUAY
  // =========================================================================
  UY: {
    is_landlocked: false,
    waters: [
      {
        id: 'uy-atlantic',
        type: 'ocean',
        name_en: 'South Atlantic Ocean',
        name_es: 'Océano Atlántico Sur',
        direction_en: 'East Coast (Punta del Este, Rocha)',
        direction_es: 'Costa Este (Punta del Este, Rocha)',
        coords: [-34.8, -53.5],
        zoom_level: 6,
        description_en: 'Open Atlantic oceanic coast with scenic sandy beaches, sea lion colonies, and sand dunes.',
        description_es: 'Costa atlántica abierta con playas de arena, colonias de lobos marinos y dunas oceánicas.',
      },
      {
        id: 'uy-plata-estuary',
        type: 'bay',
        name_en: 'Río de la Plata Estuary',
        name_es: 'Estuario del Río de la Plata',
        coords: [-35.0, -55.8],
        direction_en: 'South Coast (Montevideo & Colonia)',
        direction_es: 'Costa Sur (Montevideo y Colonia)',
        zoom_level: 7,
        description_en: 'Broad freshwater-to-marine transition zone hosting Uruguay’s premier port.',
        description_es: 'Amplia zona de transición fluvial y marítima que alberga el puerto de Montevideo.',
      },
    ],
  },

  // =========================================================================
  // HONDURAS
  // =========================================================================
  HN: {
    is_landlocked: false,
    waters: [
      {
        id: 'hn-caribbean',
        type: 'sea',
        name_en: 'Caribbean Sea & Gulf of Honduras',
        name_es: 'Mar Caribe y Golfo de Honduras',
        direction_en: 'North Coast (Puerto Cortés, Ceiba, Bay Islands)',
        direction_es: 'Costa Norte (Puerto Cortés, La Ceiba, Islas de la Bahía)',
        coords: [16.2, -86.8],
        zoom_level: 6,
        description_en: 'Expansive tropical Caribbean shoreline home to the Bay Islands coral barrier.',
        description_es: 'Amplio litoral caribeño que alberga la barrera coralina de las Islas de la Bahía.',
      },
      {
        id: 'hn-pacific-fonseca',
        type: 'gulf',
        name_en: 'Pacific Ocean (Gulf of Fonseca)',
        name_es: 'Océano Pacífico (Golfo de Fonseca)',
        direction_en: 'South Coast (San Lorenzo)',
        direction_es: 'Costa Sur (San Lorenzo)',
        coords: [13.2, -87.6],
        zoom_level: 7,
        description_en: 'Sheltered Pacific gulf shared with El Salvador and Nicaragua, rich in mangrove fisheries.',
        description_es: 'Golfo pacífico protegido compartido con El Salvador y Nicaragua, rico en pesca de manglar.',
      },
    ],
  },

  // =========================================================================
  // EL SALVADOR
  // =========================================================================
  SV: {
    is_landlocked: false,
    waters: [
      {
        id: 'sv-pacific',
        type: 'ocean',
        name_en: 'North Pacific Ocean (Costa del Bálsamo & Surf City)',
        name_es: 'Océano Pacífico Norte (Costa del Bálsamo y Surf City)',
        direction_en: 'South Coast (Over 300 km of Pacific littoral)',
        direction_es: 'Costa Sur (Más de 300 km de litoral pacífico)',
        coords: [13.1, -89.2],
        zoom_level: 6,
        description_en: 'Volcanic coastal strip with powerful ocean swells and world-class surfing point breaks.',
        description_es: 'Franja costera volcánica con oleaje oceánico continuo y rompientes de surf de clase mundial.',
      },
      {
        id: 'sv-fonseca',
        type: 'gulf',
        name_en: 'Gulf of Fonseca (Pacific Entrance)',
        name_es: 'Golfo de Fonseca (Entrada del Pacífico)',
        direction_en: 'Southeast (La Unión & Conchagua)',
        direction_es: 'Sureste (La Unión y Conchagua)',
        coords: [13.2, -87.8],
        zoom_level: 7,
        description_en: 'Strategic natural harbour sheltered by volcanic headlands and volcanic islands.',
        description_es: 'Puerto natural estratégico rodeado por conos volcánicos e islas en el Golfo de Fonseca.',
      },
    ],
  },

  // =========================================================================
  // NICARAGUA
  // =========================================================================
  NI: {
    is_landlocked: false,
    waters: [
      {
        id: 'ni-caribbean',
        type: 'sea',
        name_en: 'Caribbean Sea (Mosquito Coast & Corn Islands)',
        name_es: 'Mar Caribe (Costa de Mosquitos e Islas del Maíz)',
        direction_en: 'East Coast (Bluefields, Puerto Cabezas)',
        direction_es: 'Costa Este (Bluefields, Puerto Cabezas)',
        coords: [12.5, -83.2],
        zoom_level: 6,
        description_en: 'Vast, sparsely populated Caribbean coastal shelf with lobster and shrimp fisheries.',
        description_es: 'Vasta plataforma costera caribeña con abundantes pesquerías de langosta y camarón.',
      },
      {
        id: 'ni-pacific',
        type: 'ocean',
        name_en: 'North Pacific Ocean (San Juan del Sur)',
        name_es: 'Océano Pacífico Norte (San Juan del Sur)',
        direction_en: 'West Coast (Corinto, San Juan del Sur)',
        direction_es: 'Costa Oeste (Corinto, San Juan del Sur)',
        coords: [11.8, -86.8],
        zoom_level: 6,
        description_en: 'Pacific coastline where strong trade winds blowing across Lake Nicaragua create offshore breezes.',
        description_es: 'Litoral pacífico donde los vientos alisios crean brisas marinas ideales para la navegación.',
      },
    ],
  },

  // =========================================================================
  // HAITI
  // =========================================================================
  HT: {
    is_landlocked: false,
    waters: [
      {
        id: 'ht-caribbean',
        type: 'sea',
        name_en: 'Caribbean Sea & Gulf of Gonâve',
        name_es: 'Mar Caribe y Golfo de la Gonâve',
        direction_en: 'West Coast & Bay of Port-au-Prince',
        direction_es: 'Costa Oeste y Bahía de Puerto Príncipe',
        coords: [18.8, -73.0],
        zoom_level: 6,
        description_en: 'Deep sheltered gulf enclosed between Haiti’s two western mountainous peninsulas.',
        description_es: 'Profundo golfo protegido encerrado entre las dos penínsulas montañosas de Haití.',
      },
      {
        id: 'ht-windward',
        type: 'strait',
        name_en: 'Windward Passage',
        name_es: 'Paso de los Vientos',
        direction_en: 'Northwest (Between Haiti & Cuba)',
        direction_es: 'Noroeste (Entre Haití y Cuba)',
        coords: [19.8, -73.6],
        zoom_level: 7,
        description_en: 'Vital 80 km maritime strait connecting the Atlantic Ocean to the Caribbean Sea.',
        description_es: 'Paso marítimo estratégico de 80 km que une el Océano Atlántico con el Mar Caribe.',
      },
    ],
  },

  // =========================================================================
  // JAMAICA
  // =========================================================================
  JM: {
    is_landlocked: false,
    waters: [
      {
        id: 'jm-caribbean',
        type: 'sea',
        name_en: 'Caribbean Sea (Pedro Bank & Cayman Trench)',
        name_es: 'Mar Caribe (Banco de Pedro y Fosa de las Caimán)',
        direction_en: 'All Coastlines (Surrounded on all sides)',
        direction_es: 'Todas las Costas (Rodeada completamente por aguas caribeñas)',
        coords: [17.5, -77.5],
        zoom_level: 6,
        description_en: 'Deep tropical Caribbean waters hosting coral reefs, conch fisheries, and cruise routes.',
        description_es: 'Aguas tropicales profundas del Caribe con arrecifes, pesca de caracol y rutas de cruceros.',
      },
    ],
  },

  // =========================================================================
  // BELIZE
  // =========================================================================
  BZ: {
    is_landlocked: false,
    waters: [
      {
        id: 'bz-caribbean',
        type: 'sea',
        name_en: 'Caribbean Sea & Belize Barrier Reef',
        name_es: 'Mar Caribe y Barrera Arrecifal de Belice',
        direction_en: 'East Coast (Ambergris Caye, Caye Caulker)',
        direction_es: 'Costa Este (Cayo Ambergris, Cayo Caulker)',
        coords: [17.3, -87.8],
        zoom_level: 7,
        description_en: 'The world’s second largest barrier reef, teeming with hundreds of cayes and atolls.',
        description_es: 'La segunda mayor barrera de coral del planeta, con cientos de cayos y atolones vírgenes.',
      },
    ],
  },

  // =========================================================================
  // GUYANA
  // =========================================================================
  GY: {
    is_landlocked: false,
    waters: [
      {
        id: 'gy-atlantic',
        type: 'ocean',
        name_en: 'North Atlantic Ocean (Stabroek Basin)',
        name_es: 'Océano Atlántico Norte (Cuenca de Stabroek)',
        direction_en: 'North & Northeast Coast',
        direction_es: 'Costa Norte y Noreste',
        coords: [7.5, -57.5],
        zoom_level: 6,
        description_en: 'Rich equatorial Atlantic waters and the site of immense offshore petroleum discoveries.',
        description_es: 'Aguas atlánticas ecuatoriales donde se encuentran los gigantescos yacimientos petroleros marinos.',
      },
    ],
  },

  // =========================================================================
  // SURINAME
  // =========================================================================
  SR: {
    is_landlocked: false,
    waters: [
      {
        id: 'sr-atlantic',
        type: 'ocean',
        name_en: 'North Atlantic Ocean (Guiana Current)',
        name_es: 'Océano Atlántico Norte (Corriente de Guayanas)',
        direction_en: 'North Coast',
        direction_es: 'Costa Norte',
        coords: [6.5, -55.5],
        zoom_level: 6,
        description_en: 'Atlantic coastal waters shaped by the Guiana Current and freshwater discharge from Amazon rivers.',
        description_es: 'Aguas costeras atlánticas influenciadas por la Corriente de Guayanas y sedimentos amazónicos.',
      },
    ],
  },

  // =========================================================================
  // TRINIDAD AND TOBAGO
  // =========================================================================
  TT: {
    is_landlocked: false,
    waters: [
      {
        id: 'tt-paria-gulf',
        type: 'gulf',
        name_en: 'Gulf of Paria (Between Trinidad & Venezuela)',
        name_es: 'Golfo de Paria (Entre Trinidad y Venezuela)',
        direction_en: 'West Coast (Port of Spain, Point Lisas)',
        direction_es: 'Costa Oeste (Puerto España, Point Lisas)',
        coords: [10.4, -61.8],
        zoom_level: 7,
        description_en: 'Shallow inland sea between Trinidad and Venezuela sheltering industrial petrochemical ports.',
        description_es: 'Mar interior semicerrado entre Trinidad y Venezuela que alberga puertos petroquímicos.',
      },
      {
        id: 'tt-atlantic',
        type: 'ocean',
        name_en: 'North Atlantic Ocean & Columbus Channel',
        name_es: 'Océano Atlántico Norte y Canal de Colón',
        direction_en: 'East and South Coast',
        direction_es: 'Costa Este y Sur',
        coords: [10.3, -60.8],
        zoom_level: 7,
        description_en: 'Open Atlantic waters holding major offshore natural gas production platforms.',
        description_es: 'Aguas abiertas del Atlántico con grandes plataformas de producción de gas natural.',
      },
    ],
  },

  // =========================================================================
  // BAHAMAS
  // =========================================================================
  BS: {
    is_landlocked: false,
    waters: [
      {
        id: 'bs-atlantic',
        type: 'ocean',
        name_en: 'North Atlantic Ocean & Great Bahama Bank',
        name_es: 'Océano Atlántico Norte y Gran Banco de Bahamas',
        direction_en: 'Surrounding Archipelago Waters',
        direction_es: 'Aguas Circundantes del Archipiélago',
        coords: [24.5, -76.5],
        zoom_level: 6,
        description_en: 'Extensive shallow turquoise coral banks contrasting with 2,000m deep ocean drop-offs.',
        description_es: 'Vastas plataformas de aguas turquesas poco profundas junto a abismos oceánicos de 2.000m.',
      },
      {
        id: 'bs-straits-florida',
        type: 'strait',
        name_en: 'Straits of Florida & Northwest Providence Channel',
        name_es: 'Estrecho de la Florida y Canal de Providencia',
        direction_en: 'West & Northwest (Between Bahamas & Florida)',
        direction_es: 'Oeste y Noroeste (Entre Bahamas y Florida)',
        coords: [25.8, -78.5],
        zoom_level: 7,
        description_en: 'Major oceanic highway for Atlantic-to-Gulf maritime container and cruise shipping.',
        description_es: 'Principal autopista de navegación para cruceros y buques portacontenedores.',
      },
    ],
  },

  // =========================================================================
  // BARBADOS
  // =========================================================================
  BB: {
    is_landlocked: false,
    waters: [
      {
        id: 'bb-atlantic',
        type: 'ocean',
        name_en: 'North Atlantic Ocean (East Coast / Bathsheba)',
        name_es: 'Océano Atlántico Norte (Costa Este / Bathsheba)',
        direction_en: 'East Coast (Facing the open Atlantic)',
        direction_es: 'Costa Este (Frente al Atlántico abierto)',
        coords: [13.2, -59.45],
        zoom_level: 8,
        description_en: 'Dramatic rolling Atlantic swells crashing against rugged coral limestone sea cliffs.',
        description_es: 'Oleaje atlántico continuo que choca contra los acantilados de roca caliza en Bathsheba.',
      },
      {
        id: 'bb-caribbean',
        type: 'sea',
        name_en: 'Caribbean Sea (West / Platinum Coast)',
        name_es: 'Mar Caribe (Costa Oeste / Costa de Platino)',
        direction_en: 'West Coast (Bridgetown, Holetown)',
        direction_es: 'Costa Oeste (Bridgetown, Holetown)',
        coords: [13.15, -59.68],
        zoom_level: 8,
        description_en: 'Calm, crystalline leeward Caribbean waters with fine white sand beaches and coral reefs.',
        description_es: 'Aguas caribeñas cristalinas y serenas con playas de arena blanca y arrecifes protegidos.',
      },
    ],
  },
};

// Set of ISO2 codes known to be landlocked countries worldwide
export const LANDLOCKED_ISO2_CODES = new Set([
  'AF', 'AD', 'AM', 'AT', 'AZ', 'BY', 'BT', 'BO', 'BW', 'BF', 'BI', 'CF', 'TD',
  'CZ', 'ET', 'HU', 'KZ', 'XK', 'KG', 'LA', 'LS', 'LI', 'LU', 'MK', 'MW', 'ML',
  'MD', 'MN', 'NP', 'NE', 'PY', 'RW', 'SM', 'RS', 'SK', 'SS', 'SZ', 'CH', 'TJ',
  'TM', 'UG', 'UZ', 'VA', 'ZM', 'ZW'
]);

/**
 * Intelligent helper to retrieve the surrounding seas and oceans for ANY country.
 * If the country is specifically catalogued, returns its exact profile.
 * If landlocked, returns an educational profile.
 * Otherwise, computes accurate coastal waters based on coordinates and continental orientation.
 */
export function getCountrySurroundingWaters(country: CountryDossierData): SurroundingWatersProfile {
  const iso2 = (country.iso2 || '').toUpperCase();
  const id = (country.id || '').toUpperCase();

  // 1. Direct hit in dedicated catalog
  if (SURROUNDING_WATERS_CATALOG[iso2]) {
    return SURROUNDING_WATERS_CATALOG[iso2];
  }
  if (SURROUNDING_WATERS_CATALOG[id]) {
    return SURROUNDING_WATERS_CATALOG[id];
  }

  // 2. Pre-annotated on country object
  if (country.surrounding_waters && country.surrounding_waters.waters.length > 0) {
    return country.surrounding_waters;
  }

  // 3. Known landlocked nation check
  if (LANDLOCKED_ISO2_CODES.has(iso2)) {
    return {
      is_landlocked: true,
      landlocked_note_en: `${country.name_en} is a landlocked nation with no direct ocean coastline. It depends on continental river networks and international transit corridors through neighboring maritime states.`,
      landlocked_note_es: `${country.name_es} es un país sin litoral marítimo (mediterráneo). Depende de cuencas fluviales continentales y corredores de tránsito a través de países vecinos para su comercio exterior.`,
      waters: [],
    };
  }

  // 4. Dynamic Continental Coastal Inference based on geography
  const [lat, lng] = country.center_coords || [0, 0];
  const waters: SurroundingWater[] = [];

  switch (country.continent) {
    case 'South America': {
      if (lng < -68) {
        waters.push({
          id: `${iso2}-pacific`,
          type: 'ocean',
          name_en: 'South Pacific Ocean',
          name_es: 'Océano Pacífico Sur',
          direction_en: 'West Coast',
          direction_es: 'Costa Oeste',
          coords: [lat, lng - 6.5],
          zoom_level: 5,
          description_en: 'Pacific marine rim shaped by the cold Humboldt Current.',
          description_es: 'Litoral del Pacífico moldeado por la fría Corriente de Humboldt.',
        });
      } else {
        waters.push({
          id: `${iso2}-atlantic`,
          type: 'ocean',
          name_en: 'South Atlantic Ocean',
          name_es: 'Océano Atlántico Sur',
          direction_en: 'East Coast',
          direction_es: 'Costa Este',
          coords: [lat, lng + 6.5],
          zoom_level: 5,
          description_en: 'Atlantic maritime coast with extensive fishing grounds.',
          description_es: 'Costa atlántica con abundantes bancos de pesca y rutas comerciales.',
        });
      }
      if (lat > 5) {
        waters.push({
          id: `${iso2}-caribbean`,
          type: 'sea',
          name_en: 'Caribbean Sea',
          name_es: 'Mar Caribe',
          direction_en: 'North Coast',
          direction_es: 'Costa Norte',
          coords: [13.0, lng],
          zoom_level: 6,
          description_en: 'Warm tropical Caribbean waters.',
          description_es: 'Aguas tropicales cálidas del Mar Caribe.',
        });
      }
      break;
    }

    case 'North America': {
      if (lng < -95) {
        waters.push({
          id: `${iso2}-pacific`,
          type: 'ocean',
          name_en: 'North Pacific Ocean',
          name_es: 'Océano Pacífico Norte',
          direction_en: 'West Coast',
          direction_es: 'Costa Oeste',
          coords: [lat, lng - 7.0],
          zoom_level: 5,
          description_en: 'Pacific Ocean expanse linking North America to Asia.',
          description_es: 'Fachada del Océano Pacífico que conecta América del Norte con Asia.',
        });
      } else {
        waters.push({
          id: `${iso2}-atlantic`,
          type: 'ocean',
          name_en: 'North Atlantic Ocean',
          name_es: 'Océano Atlántico Norte',
          direction_en: 'East Coast',
          direction_es: 'Costa Este',
          coords: [lat, lng + 7.0],
          zoom_level: 5,
          description_en: 'North Atlantic Ocean route connecting to Europe.',
          description_es: 'Ruta del Océano Atlántico Norte que conecta con Europa.',
        });
      }
      if (lat < 25 && lat > 8) {
        waters.push({
          id: `${iso2}-caribbean`,
          type: 'sea',
          name_en: 'Caribbean Sea',
          name_es: 'Mar Caribe',
          direction_en: 'East / Caribbean Basin',
          direction_es: 'Este / Cuenca del Caribe',
          coords: [15.0, -80.0],
          zoom_level: 6,
          description_en: 'Tropical marine corridor of the Caribbean.',
          description_es: 'Corredor marino tropical del Caribe.',
        });
      }
      break;
    }

    case 'Europe': {
      if (lat > 55) {
        waters.push({
          id: `${iso2}-north-sea`,
          type: 'sea',
          name_en: 'North Sea & Baltic Sea',
          name_es: 'Mar del Norte y Mar Báltico',
          direction_en: 'Northern Waters',
          direction_es: 'Aguas Septentrionales',
          coords: [lat + 3.0, lng],
          zoom_level: 5,
          description_en: 'Northern European maritime commercial routes.',
          description_es: 'Rutas comerciales marítimas del norte de Europa.',
        });
      } else if (lat < 45) {
        waters.push({
          id: `${iso2}-mediterranean`,
          type: 'sea',
          name_en: 'Mediterranean Sea',
          name_es: 'Mar Mediterráneo',
          direction_en: 'Southern Coast',
          direction_es: 'Costa Sur',
          coords: [37.0, lng],
          zoom_level: 6,
          description_en: 'Historic inland sea connecting Europe, Africa, and the Middle East.',
          description_es: 'Mar interior histórico que une Europa, África y Oriente Próximo.',
        });
      } else {
        waters.push({
          id: `${iso2}-atlantic`,
          type: 'ocean',
          name_en: 'Atlantic Ocean',
          name_es: 'Océano Atlántico',
          direction_en: 'West Coast',
          direction_es: 'Costa Oeste',
          coords: [lat, -5.0],
          zoom_level: 5,
          description_en: 'Western Atlantic ocean frontage.',
          description_es: 'Fachada oceánica occidental hacia el Atlántico.',
        });
      }
      break;
    }

    case 'Africa': {
      if (lat > 25) {
        waters.push({
          id: `${iso2}-mediterranean`,
          type: 'sea',
          name_en: 'Mediterranean Sea',
          name_es: 'Mar Mediterráneo',
          direction_en: 'North Coast',
          direction_es: 'Costa Norte',
          coords: [33.5, lng],
          zoom_level: 6,
          description_en: 'Northern Mediterranean maritime gateway.',
          description_es: 'Puerta marítima septentrional del Mediterráneo.',
        });
      } else if (lng < 20) {
        waters.push({
          id: `${iso2}-atlantic`,
          type: 'ocean',
          name_en: 'Atlantic Ocean',
          name_es: 'Océano Atlántico',
          direction_en: 'West Coast / Gulf of Guinea',
          direction_es: 'Costa Oeste / Golfo de Guinea',
          coords: [lat, lng - 6.0],
          zoom_level: 5,
          description_en: 'West African Atlantic seaboard.',
          description_es: 'Fachada atlántica del África occidental.',
        });
      } else {
        waters.push({
          id: `${iso2}-indian`,
          type: 'ocean',
          name_en: 'Indian Ocean',
          name_es: 'Océano Índico',
          direction_en: 'East Coast',
          direction_es: 'Costa Este',
          coords: [lat, lng + 6.0],
          zoom_level: 5,
          description_en: 'East African Indian Ocean rim.',
          description_es: 'Litoral del Océano Índico en África oriental.',
        });
      }
      break;
    }

    case 'Asia': {
      if (lat < 25 && lng < 80) {
        waters.push({
          id: `${iso2}-arabian-sea`,
          type: 'sea',
          name_en: 'Arabian Sea (Indian Ocean)',
          name_es: 'Mar Arábigo (Océano Índico)',
          direction_en: 'West / South Coast',
          direction_es: 'Costa Oeste / Sur',
          coords: [15.0, 65.0],
          zoom_level: 5,
          description_en: 'Warm waters of the northern Indian Ocean.',
          description_es: 'Aguas cálidas del Océano Índico septentrional.',
        });
      } else if (lng > 100) {
        waters.push({
          id: `${iso2}-pacific`,
          type: 'ocean',
          name_en: 'Pacific Ocean & Marginal Seas',
          name_es: 'Océano Pacífico y Mares Marginales',
          direction_en: 'East Coast',
          direction_es: 'Costa Este',
          coords: [lat, lng + 7.0],
          zoom_level: 5,
          description_en: 'Pacific Rim maritime corridor.',
          description_es: 'Corredor marítimo de la Cuenca del Pacífico.',
        });
      } else {
        waters.push({
          id: `${iso2}-indian-ocean`,
          type: 'ocean',
          name_en: 'Indian Ocean',
          name_es: 'Océano Índico',
          direction_en: 'South Coast',
          direction_es: 'Costa Sur',
          coords: [lat - 6.0, lng],
          zoom_level: 5,
          description_en: 'Indian Ocean waters driving the Asian monsoon.',
          description_es: 'Aguas del Océano Índico que modulan el monzón asiático.',
        });
      }
      break;
    }

    case 'Oceania': {
      waters.push({
        id: `${iso2}-pacific`,
        type: 'ocean',
        name_en: 'South Pacific Ocean',
        name_es: 'Océano Pacífico Sur',
        direction_en: 'Surrounding Pacific Waters',
        direction_es: 'Aguas Oceánicas del Pacífico',
        coords: [lat, lng + 5.0],
        zoom_level: 5,
        description_en: 'Vast expanse of the tropical and temperate Pacific Ocean.',
        description_es: 'Vasta extensión del Océano Pacífico tropical y templado.',
      });
      break;
    }

    default: {
      waters.push({
        id: `${iso2}-ocean`,
        type: 'ocean',
        name_en: 'Surrounding Ocean Waters',
        name_es: 'Aguas Oceánicas Circundantes',
        direction_en: 'Maritime Coast',
        direction_es: 'Litoral Marítimo',
        coords: [lat, lng + 5.0],
        zoom_level: 5,
        description_en: 'Surrounding global waters.',
        description_es: 'Aguas oceánicas globales circundantes.',
      });
    }
  }

  return {
    is_landlocked: false,
    waters,
  };
}
