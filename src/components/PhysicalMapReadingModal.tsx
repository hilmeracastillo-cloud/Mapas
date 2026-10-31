import React, { useState, useEffect, useRef } from 'react';
import { Language, LensType, LandformFeature } from '../types/geography';
import {
  X,
  Layers,
  Info,
  CheckCircle2,
  Award,
  Satellite,
  Compass,
  Eye,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import L from 'leaflet';

export interface SatelliteCaseStudy {
  id: string;
  bandId: string;
  name_en: string;
  name_es: string;
  location_en: string;
  location_es: string;
  coords: [number, number];
  zoom: number;
  elevationText_en: string;
  elevationText_es: string;
  hypsometricColor: string;
  hypsometricName_en: string;
  hypsometricName_es: string;
  badgeType: 'ocean' | 'bay' | 'plain' | 'plateau' | 'mountain' | 'peak';
  // Physical map explanation
  mapConvention_en: string;
  mapConvention_es: string;
  // Real satellite explanation
  satelliteReality_en: string;
  satelliteReality_es: string;
  // Common myth busted
  mythBusted_en: string;
  mythBusted_es: string;
  // Real-world application
  realWorldImpact_en: string;
  realWorldImpact_es: string;
}

export const SATELLITE_CASE_STUDIES: SatelliteCaseStudy[] = [
  {
    id: 'deep-trench',
    bandId: 'deep-trench',
    name_en: 'Puerto Rico Trench (Deep Sea Trench)',
    name_es: 'Fosa de Puerto Rico (Fosa Submarina Abisal)',
    location_en: 'North Atlantic / Caribbean Plate Boundary',
    location_es: 'Límite de las Placas Norteamericana y Caribe',
    coords: [19.84, -66.50],
    zoom: 7,
    elevationText_en: 'Depth: -8,376 meters below sea level',
    elevationText_es: 'Profundidad: -8,376 metros bajo el nivel del mar',
    hypsometricColor: '#082f49',
    hypsometricName_en: 'Abyssal Depth (Below -4,000 m)',
    hypsometricName_es: 'Profundidad Abisal (Menor a -4,000 m)',
    badgeType: 'ocean',
    mapConvention_en: 'Colored in the darkest navy blue. In cartography, deep blues represent extreme bathymetric depth, not darkness of water.',
    mapConvention_es: 'Se representa con azul marino casi negro. En cartografía, cuanto más oscuro el azul, mayor es la profundidad del lecho oceánico.',
    satelliteReality_en: 'In real satellite imagery, sunlight is completely absorbed within the first 200 meters. What looks like pure black void from space is an active tectonic subduction zone under crushing pressure where the Atlantic seafloor slides beneath the Caribbean.',
    satelliteReality_es: 'En la imagen satelital real, la luz solar se extingue por completo en los primeros 200 metros. Lo que desde el espacio parece un vacío azul oscuro es una gigantesca zona de subducción tectónica bajo una presión demoledora donde la placa del Atlántico se hunde bajo el Caribe.',
    mythBusted_en: 'CARTOGRAPHIC PRINCIPLE: Dark blue ocean in maps does not mean stormy weather or cold currents; it measures bathymetric depth to the ocean floor.',
    mythBusted_es: 'PRINCIPIO CARTOGRÁFICO: El azul oscuro en el océano no indica tormentas ni corrientes frías; mide exclusivamente la profundidad batimétrica del suelo marino.',
    realWorldImpact_en: 'Crucial for tsunami early-warning systems, submarine cable routing, and extreme extremophile ecosystems.',
    realWorldImpact_es: 'Zona crítica para alerta de tsunamis, tendido de cables submarinos intercontinentales e investigación biológica abisal.'
  },
  {
    id: 'shelf',
    bandId: 'shelf',
    name_en: 'Great Bahama Bank (Continental Shelf)',
    name_es: 'Gran Banco de Bahamas (Plataforma Continental)',
    location_en: 'Caribbean / Atlantic Shallow Margin',
    location_es: 'Margen Somero del Caribe y Atlántico',
    coords: [24.50, -77.50],
    zoom: 8,
    elevationText_en: 'Depth: 0 to -25 meters shallow seabed',
    elevationText_es: 'Profundidad: 0 a -25 metros de agua somera',
    hypsometricColor: '#38bdf8',
    hypsometricName_en: 'Continental Shelf (0 to -200 m)',
    hypsometricName_es: 'Plataforma Continental (0 a -200 m)',
    badgeType: 'bay',
    mapConvention_en: 'Light cyan / turquoise border flanking coastlines denotes the submerged continental shelf down to -200 m.',
    mapConvention_es: 'El color cian o celeste brillante que bordea las costas indica la plataforma continental sumergida hasta los -200 m.',
    satelliteReality_en: 'LOOK AT THE SATELLITE CONTRAST: The water glows brilliant turquoise because clear sunlight penetrates straight to the white carbonate sand floor! Notice the sharp submarine cliff ("Tongue of the Ocean") where turquoise waters plunge vertically into the dark navy blue abyss.',
    satelliteReality_es: '¡MIRA EL CONTRASTE SATELITAL!: El agua brilla con un turquesa fosforescente visible desde la estación espacial porque la luz del sol ilumina la arena blanca de carbonato a pocos metros de profundidad. Al lado, observa la "Lengua del Océano", una pared vertical donde el agua cae en picado al abismo azul oscuro.',
    mythBusted_en: 'CARTOGRAPHIC PRINCIPLE: Cyan is not just a pretty coastal color; it identifies shallow waters where sunlight fuels coral reefs and 90% of global marine fisheries.',
    mythBusted_es: 'PRINCIPIO CARTOGRÁFICO: El celeste costero no es decorativo; define la zona fótica donde la luz solar alimenta arrecifes de coral y el 90% de la pesca comercial mundial.',
    realWorldImpact_en: 'Offshore oil platforms, coral reef conservation, and vital shallow shipping passages.',
    realWorldImpact_es: 'Plataformas petroleras submarinas, protección de arrecifes de coral y rutas de navegación seguras.'
  },
  {
    id: 'coastal-plains',
    bandId: 'coastal-plains',
    name_en: 'Nile River Delta & Egyptian Coast (Lowland Plains)',
    name_es: 'Delta del Nilo y Costa de Egipto (Llanuras Bajas)',
    location_en: 'Lower Egypt, Mediterranean Basin',
    location_es: 'Bajo Egipto, Cuenca del Mediterráneo',
    coords: [30.80, 31.00],
    zoom: 8,
    elevationText_en: 'Elevation: 0 to 50 meters above sea level',
    elevationText_es: 'Altitud: 0 a 50 metros sobre el nivel del mar',
    hypsometricColor: '#16a34a',
    hypsometricName_en: 'Coastal Plains & Basins (0 – 200 m)',
    hypsometricName_es: 'Llanuras Costeras y Cuencas Bajas (0 – 200 m)',
    badgeType: 'plain',
    mapConvention_en: 'Dark emerald green represents low elevation (0 to 200 meters above sea level), such as coastal plains and river mouths.',
    mapConvention_es: 'El verde esmeralda oscuro representa altitudes bajas (0 a 200 metros sobre el nivel del mar), como llanuras costeras y deltas.',
    satelliteReality_en: 'SATELLITE TRUTH TEST: Look at the satellite image! Egypt is over 95% barren golden sand desert! The physical map colors this region dark green solely because it is low in elevation, NOT because it is a wet rainforest. Only the thin green thread along the Nile River is actual living vegetation.',
    satelliteReality_es: 'LA PRUEBA DE LA VERDAD SATELITAL: ¡Observa la imagen satelital real! Egipto es más de un 95% desierto de arena dorada hiperárido. El mapa físico lo colorea de verde ÚNICAMENTE porque su altitud es casi al nivel del mar (0-50m), ¡NO porque sea una selva tropical lluviosa! La única vegetación viva es la delgada cinta que riega el río Nilo.',
    mythBusted_en: 'CRITICAL CARTOGRAPHIC RULE: Green on a physical map NEVER means forest, jungle, or rainy climate! A scorching desert at sea level is always colored dark green.',
    mythBusted_es: 'REGLA CARTOGRÁFICA FUNDAMENTAL: ¡El verde en mapas físicos NUNCA significa selva, bosque ni clima lluvioso! Un desierto hirviente al nivel del mar se colorea en verde oscuro.',
    realWorldImpact_en: 'Sediment-rich river mouths support high human population densities but face sea-level rise and flooding risks.',
    realWorldImpact_es: 'Los limos aluviales sostienen a más de 100 millones de personas en Egipto, pero son altamente vulnerables al ascenso del nivel del mar.'
  },
  {
    id: 'plateaus',
    bandId: 'plateaus',
    name_en: 'Llano Estacado & Texas High Plains (Tablelands)',
    name_es: 'Llano Estacado y Altas Llanuras de Texas (Mesetas)',
    location_en: 'Northwest Texas & New Mexico (Near Houston)',
    location_es: 'Noroeste de Texas y Nuevo México (Cercano a Houston)',
    coords: [33.50, -101.85],
    zoom: 8,
    elevationText_en: 'Elevation: 750 to 1,100 meters above sea level',
    elevationText_es: 'Altitud: 750 a 1,100 metros sobre el nivel del mar',
    hypsometricColor: '#eab308',
    hypsometricName_en: 'Plateaus & Rolling Hills (200 – 1,000 m)',
    hypsometricName_es: 'Colinas y Mesetas (200 – 1,000 m)',
    badgeType: 'plateau',
    mapConvention_en: 'Yellow and light tan represent transitional medium elevations between 200 m and 1,000 m above sea level.',
    mapConvention_es: 'El amarillo y ocre claro indican altitudes intermedias de 200 a 1,000 metros (mesetas, altiplanos y piedemontes).',
    satelliteReality_en: 'In the real satellite view, you see a vast elevated plateau cut by deep reddish chasms (Palo Duro Canyon) and circular green crop fields fed by center-pivot aquifer irrigation. It is flat, yet high enough that winter snows and cooler nights prevail.',
    satelliteReality_es: 'En el satélite real de Texas se aprecia una meseta elevada cortada por profundos cañones rojizos (como el Cañón de Palo Duro) y salpicada por miles de círculos verdes de riego por pivote central. Es un terreno plano, pero su altitud superior a 1,000 m genera inviernos fríos y vientos constantes.',
    mythBusted_en: 'MAP MYTH: Flat land is always near the beach. REALITY: Plateaus are flat topographies lifted hundreds of meters high, colored yellow on physical maps.',
    mythBusted_es: 'MITO DEL MAPA: Si el terreno es plano, está junto al mar. REALIDAD: Las mesetas y llanuras altas son terrenos planos elevados a cientos de metros, por eso son amarillas en el mapa.',
    realWorldImpact_en: 'Ideal for wind turbine energy corridors, grain farming, and extensive cattle ranching.',
    realWorldImpact_es: 'Corredor líder en energía eólica, cultivo de algodón y trigo, y ganadería intensiva en Texas.'
  },
  {
    id: 'mountains',
    bandId: 'mountains',
    name_en: 'Rocky Mountains & Continental Divide (High Ranges)',
    name_es: 'Montañas Rocosas y Divisoria Continental (Cordilleras)',
    location_en: 'Colorado / Front Range, USA',
    location_es: 'Colorado / Cordillera Frontal, EE.UU.',
    coords: [39.73, -105.51],
    zoom: 8,
    elevationText_en: 'Elevation: 1,600 to 4,300 meters above sea level',
    elevationText_es: 'Altitud: 1,600 a 4,300 metros sobre el nivel del mar',
    hypsometricColor: '#92400e',
    hypsometricName_en: 'High Mountains (1,000 – 3,500 m)',
    hypsometricName_es: 'Altas Cordilleras (1,000 – 3,500 m)',
    badgeType: 'mountain',
    mapConvention_en: 'Brown and ochre symbolize rugged mountainous terrain where elevation rises above 1,000 meters.',
    mapConvention_es: 'El marrón terroso y ocre oscuro simbolizan terrenos montañosos escarpados y cordilleras que superan los 1,000 metros.',
    satelliteReality_en: 'Satellite sensors clearly capture 3D geological ridges, sharp shadow casts, deep U-shaped glacial valleys, pine forests covering mid-slopes, and bare gray granite rock above the timberline.',
    satelliteReality_es: 'El sensor satelital capta la textura tridimensional de las crestas rocosas, sombras profundas en laderas norte, valles glaciares en U, frondosos bosques de coníferas y roca de granito viva sobre la línea donde ya no crecen árboles.',
    mythBusted_en: 'GEOGRAPHIC REALITY: Brown on maps indicates steep slope gradients and high elevation, which fundamentally changes vegetation zones and creates orographic precipitation.',
    mythBusted_es: 'REALIDAD GEOGRÁFICA: El marrón indica pendientes abruptas y gran altitud, lo que provoca lluvia orográfica y pisos ecológicos escalonados.',
    realWorldImpact_en: 'Continental water towers: snowmelt feeds the Colorado and Rio Grande rivers, providing drinking water to 40+ million people.',
    realWorldImpact_es: 'Torres de agua continentales: el deshielo alimenta los ríos Colorado y Bravo, dando agua a más de 40 millones de personas.'
  },
  {
    id: 'snowcaps',
    bandId: 'snowcaps',
    name_en: 'Mount Everest & Himalaya Glaciers (Extreme Summits)',
    name_es: 'Monte Everest y Glaciares del Himalaya (Cimas Extremas)',
    location_en: 'Nepal / Tibet Border, High Asia',
    location_es: 'Frontera Nepal / Tíbet, Alta Asia',
    coords: [27.98, 86.92],
    zoom: 9,
    elevationText_en: 'Elevation: 5,000 to 8,848 meters (Roof of the World)',
    elevationText_es: 'Altitud: 5,000 a 8,848 metros (Cima del Mundo)',
    hypsometricColor: '#f1f5f9',
    hypsometricName_en: 'Glaciers & Extremes (3,500 m+)',
    hypsometricName_es: 'Glaciares y Nieves Perpetuas (3,500 m+)',
    badgeType: 'peak',
    mapConvention_en: 'White or pale violet represents perennial ice, continental glaciers, and summits piercing above 3,500 meters.',
    mapConvention_es: 'El blanco puro o lila suave representa hielo perpetuo, glaciares y las mayores cumbres del planeta por encima de 3,500 m.',
    satelliteReality_en: 'Real satellites capture dazzling white ice fields, massive winding river-like glaciers (Khumbu Glacier) draped in dark rocky moraine, and turquoise glacial meltwater lakes at the foot of black pyramidal rock walls.',
    satelliteReality_es: 'Desde el satélite se aprecian deslumbrantes campos de nieve, inmensos glaciares serpenteantes como ríos de hielo (como el Glaciar de Khumbu) cubiertos de morrenas rocosas oscuras y lagos glaciares turquesa al pie de pirámides de roca negra.',
    mythBusted_en: 'TEMPERATURE VS LATITUDE: White does NOT just mean polar regions! The Himalayas are in the subtropics (same latitude as Florida), yet extreme altitude keeps them frozen solid.',
    mythBusted_es: 'ALTITUD VS LATITUD: ¡El blanco no solo está en los polos! El Himalaya está en una latitud subtropical templada, pero la extrema altitud enfría el aire tanto que la nieve nunca se derrite.',
    realWorldImpact_en: 'Known as the "Third Pole"; stores more frozen water than anywhere outside the polar caps, watering over 1.4 billion people.',
    realWorldImpact_es: 'Llamado el "Tercer Polo"; almacena más hielo que cualquier lugar fuera de los polos y abastece de agua a más de 1,400 millones de personas.'
  }
];

interface MiniSatelliteReliefViewerProps {
  caseStudy: SatelliteCaseStudy;
  miniLens: 'satellite' | 'physical';
  onToggleLens: (lens: 'satellite' | 'physical') => void;
  isEs: boolean;
  onInspectGlobal: () => void;
}

const MiniSatelliteReliefViewer: React.FC<MiniSatelliteReliefViewerProps> = ({
  caseStudy,
  miniLens,
  onToggleLens,
  isEs,
  onInspectGlobal,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<L.Map | null>(null);
  const baseTileRef = useRef<L.TileLayer | null>(null);
  const overlayTileRef = useRef<L.TileLayer | null>(null);
  const markerRef = useRef<L.Marker | null>(null);

  // Initialize Leaflet map instance on mount
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Remove any leftover _leaflet_id to avoid initialization errors
    if ((container as unknown as { _leaflet_id?: string })._leaflet_id) {
      delete (container as unknown as { _leaflet_id?: string })._leaflet_id;
    }

    const map = L.map(container, {
      zoomControl: true,
      attributionControl: false,
      scrollWheelZoom: true,
      maxZoom: 18,
    });
    mapRef.current = map;

    // Initial base and overlay layers
    const isSat = miniLens === 'satellite';
    const baseLayer = L.tileLayer(
      isSat
        ? 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
        : 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Physical_Map/MapServer/tile/{z}/{y}/{x}',
      {
        maxNativeZoom: isSat ? 19 : 8,
        maxZoom: 18,
      }
    ).addTo(map);
    baseTileRef.current = baseLayer;

    const overlayLayer = L.tileLayer(
      'https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}',
      { maxZoom: 18 }
    ).addTo(map);
    overlayTileRef.current = overlayLayer;

    // Initial view
    const initialZoom = !isSat ? Math.min(caseStudy.zoom, 8) : caseStudy.zoom;
    map.setView(caseStudy.coords, initialZoom);

    // Initial marker
    const cleanName = isEs
      ? caseStudy.name_es.split('(')[0].trim()
      : caseStudy.name_en.split('(')[0].trim();
    const markerHtml = `
      <div style="background-color: ${caseStudy.hypsometricColor};" class="px-2.5 py-1 rounded-full text-[11px] font-bold text-white shadow-2xl flex items-center gap-1.5 border-2 border-white pointer-events-none transform -translate-x-1/2 -translate-y-1/2">
        <span>${isSat ? '🛰️' : '🗺️'}</span>
        <span class="whitespace-nowrap">${cleanName}</span>
      </div>
    `;
    const customDivIcon = L.divIcon({
      html: markerHtml,
      className: 'custom-mini-satellite-badge',
      iconAnchor: [0, 0],
    });
    markerRef.current = L.marker(caseStudy.coords, { icon: customDivIcon }).addTo(map);

    // Responsive size invalidation via ResizeObserver
    const ro = new ResizeObserver(() => {
      map.invalidateSize();
    });
    ro.observe(container);

    const t1 = setTimeout(() => map.invalidateSize(), 60);
    const t2 = setTimeout(() => map.invalidateSize(), 220);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      ro.disconnect();
      map.remove();
      mapRef.current = null;
      baseTileRef.current = null;
      overlayTileRef.current = null;
      markerRef.current = null;
    };
  }, []);

  // Update layers and center view when caseStudy, miniLens or language changes
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    if (baseTileRef.current) {
      map.removeLayer(baseTileRef.current);
      baseTileRef.current = null;
    }
    if (overlayTileRef.current) {
      map.removeLayer(overlayTileRef.current);
      overlayTileRef.current = null;
    }

    const isSat = miniLens === 'satellite';
    if (isSat) {
      baseTileRef.current = L.tileLayer(
        'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
        { maxZoom: 19 }
      ).addTo(map);

      overlayTileRef.current = L.tileLayer(
        'https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}',
        { maxZoom: 19 }
      ).addTo(map);
    } else {
      // Physical relief tints with maxNativeZoom: 8 to allow smooth rendering at higher zoom levels
      baseTileRef.current = L.tileLayer(
        'https://server.arcgisonline.com/ArcGIS/rest/services/World_Physical_Map/MapServer/tile/{z}/{y}/{x}',
        { maxNativeZoom: 8, maxZoom: 18 }
      ).addTo(map);

      overlayTileRef.current = L.tileLayer(
        'https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}',
        { maxZoom: 18 }
      ).addTo(map);
    }

    const targetZoom = !isSat ? Math.min(caseStudy.zoom, 8) : caseStudy.zoom;
    map.setView(caseStudy.coords, targetZoom);

    if (markerRef.current) {
      map.removeLayer(markerRef.current);
      markerRef.current = null;
    }

    const cleanName = isEs
      ? caseStudy.name_es.split('(')[0].trim()
      : caseStudy.name_en.split('(')[0].trim();
    const markerHtml = `
      <div style="background-color: ${caseStudy.hypsometricColor};" class="px-2.5 py-1 rounded-full text-[11px] font-bold text-white shadow-2xl flex items-center gap-1.5 border-2 border-white pointer-events-none transform -translate-x-1/2 -translate-y-1/2">
        <span>${isSat ? '🛰️' : '🗺️'}</span>
        <span class="whitespace-nowrap">${cleanName}</span>
      </div>
    `;
    const customDivIcon = L.divIcon({
      html: markerHtml,
      className: 'custom-mini-satellite-badge',
      iconAnchor: [0, 0],
    });
    markerRef.current = L.marker(caseStudy.coords, { icon: customDivIcon }).addTo(map);

    map.invalidateSize();
    const t = setTimeout(() => map.invalidateSize(), 50);
    return () => clearTimeout(t);
  }, [caseStudy, miniLens, isEs]);

  return (
    <div className="lg:col-span-7 bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden flex flex-col shadow-xl">
      {/* Mini Map Controls Bar */}
      <div className="p-2.5 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <div
            className="w-3.5 h-3.5 rounded-full shrink-0 border border-white/60 shadow-sm"
            style={{ backgroundColor: caseStudy.hypsometricColor }}
          />
          <span className="text-xs font-bold text-slate-200 truncate">
            {isEs ? caseStudy.location_es : caseStudy.location_en}
          </span>
        </div>

        {/* Dual Mode Switcher on the Mini Map */}
        <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800 shrink-0">
          <button
            onClick={() => onToggleLens('satellite')}
            className={`px-2.5 py-1 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
              miniLens === 'satellite'
                ? 'bg-amber-500 text-slate-950 shadow-md font-extrabold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Satellite className="w-3.5 h-3.5" />
            <span>{isEs ? 'Satélite Real' : 'Real Satellite'}</span>
          </button>
          <button
            onClick={() => onToggleLens('physical')}
            className={`px-2.5 py-1 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
              miniLens === 'physical'
                ? 'bg-sky-500 text-white shadow-md font-extrabold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>{isEs ? 'Tinta de Relieve' : 'Relief Tint'}</span>
          </button>
        </div>
      </div>

      {/* Leaflet Mini Container */}
      <div className="relative w-full h-72 sm:h-80 bg-slate-900">
        <div ref={containerRef} className="w-full h-full min-h-[280px] z-0" />

        {/* Lens Indicator Badge */}
        <div className="absolute top-2.5 right-2.5 z-10 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-slate-950/85 backdrop-blur-md border border-slate-700 text-amber-300 shadow-lg flex items-center gap-1.5 pointer-events-none">
          <span>{miniLens === 'satellite' ? '🛰️ Esri World Imagery' : '🗺️ Esri Physical Relief'}</span>
        </div>
      </div>

      {/* Bottom Quick Action: Fly to Main Map */}
      <div className="p-3 bg-slate-900 border-t border-slate-800 flex items-center justify-between gap-3">
        <div className="text-xs text-slate-300 flex items-center gap-1.5 min-w-0">
          <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
          <span className="truncate">
            {isEs
              ? 'Explora con paneo y zoom en pantalla completa:'
              : 'Explore with full pan & zoom on full screen:'}
          </span>
        </div>

        <button
          onClick={onInspectGlobal}
          className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 text-xs font-bold flex items-center gap-1.5 shadow-md transition-all active:scale-95 shrink-0"
        >
          <Compass className="w-3.5 h-3.5" />
          <span>{isEs ? 'Explorar en Satélite Global' : 'Inspect on Global Satellite'}</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};

interface PhysicalMapReadingModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  onFlyToSatelliteExample?: (
    coords: [number, number],
    zoom: number,
    feature: LandformFeature,
    lessonBannerInfo?: {
      bandName: string;
      locationName: string;
      hypsometricColor: string;
      insight: string;
      originTab?: 'satellite-lab' | 'hypsometric-guide';
    }
  ) => void;
  onChangeLens?: (lens: LensType) => void;
  initialTab?: 'satellite-lab' | 'hypsometric-guide';
}

export const PhysicalMapReadingModal: React.FC<PhysicalMapReadingModalProps> = ({
  isOpen,
  onClose,
  currentLang,
  onFlyToSatelliteExample,
  onChangeLens,
  initialTab = 'satellite-lab',
}) => {
  const [activeTab, setActiveTab] = useState<'satellite-lab' | 'hypsometric-guide'>('satellite-lab');
  const [selectedCaseIndex, setSelectedCaseIndex] = useState<number>(2); // Default to Nile Delta (0-200m)
  const [miniLens, setMiniLens] = useState<'satellite' | 'physical'>('satellite');

  useEffect(() => {
    if (isOpen && initialTab) {
      setActiveTab(initialTab);
    }
  }, [isOpen, initialTab]);

  const isEs = currentLang === 'es';
  const currentCase = SATELLITE_CASE_STUDIES[selectedCaseIndex] || SATELLITE_CASE_STUDIES[2];

  if (!isOpen) return null;

  // Handle Full-Screen Flight to Real Satellite Lens on Main Map (from any tab!)
  const handleInspectCase = (
    study: SatelliteCaseStudy,
    originTab: 'satellite-lab' | 'hypsometric-guide' = 'satellite-lab'
  ) => {
    if (onFlyToSatelliteExample) {
      const feature: LandformFeature = {
        id: `sat-case-${study.id}`,
        type: study.badgeType,
        name_en: study.name_en,
        name_es: study.name_es,
        coords: study.coords,
        description_en: `${study.elevationText_en}. ${study.satelliteReality_en}`,
        description_es: `${study.elevationText_es}. ${study.satelliteReality_es}`,
      };

      onFlyToSatelliteExample(study.coords, study.zoom, feature, {
        bandName: isEs ? study.hypsometricName_es : study.hypsometricName_en,
        locationName: isEs ? study.name_es : study.name_en,
        hypsometricColor: study.hypsometricColor,
        insight: isEs ? study.mythBusted_es : study.mythBusted_en,
        originTab,
      });
    } else {
      if (onChangeLens) onChangeLens('satellite');
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-5 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-700/80 rounded-2xl w-full max-w-5xl h-[92dvh] flex flex-col shadow-2xl overflow-hidden">
        {/* Top Header */}
        <div className="p-3 sm:p-4 border-b border-slate-800 bg-slate-800/80 flex items-center justify-between gap-3 shrink-0">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl">🛰️</span>
              <h2 className="text-sm sm:text-lg font-bold text-white">
                {isEs
                  ? 'Lectura de Mapas Físicos en Situación Real (Satélite vs Tintas de Relieve)'
                  : 'Physical Maps in Real Scenarios (Real Satellite vs Relief Tints)'}
              </h2>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              {isEs
                ? 'Dominio de Hipsometría, Batimetría y Geomorfología Satelital'
                : 'Hypsometric Elevation, Bathymetry & Satellite Geomorphology'}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-slate-800 bg-slate-950/60 px-4 pt-2 gap-2 shrink-0">
          <button
            onClick={() => setActiveTab('satellite-lab')}
            className={`px-3.5 py-2 text-xs sm:text-sm font-bold rounded-t-xl transition-all flex items-center gap-2 border-t border-x ${
              activeTab === 'satellite-lab'
                ? 'bg-slate-900 border-amber-500/80 text-amber-300 shadow-md'
                : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/40'
            }`}
          >
            <Satellite className="w-4 h-4 text-amber-400" />
            <span>{isEs ? 'Laboratorio Satelital vs Mapa Físico' : 'Satellite vs Physical Lab'}</span>
            <span className="hidden sm:inline-block text-[10px] px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 font-mono">
              {isEs ? 'Situación Real' : 'Real-World'}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('hypsometric-guide')}
            className={`px-3.5 py-2 text-xs sm:text-sm font-bold rounded-t-xl transition-all flex items-center gap-2 border-t border-x ${
              activeTab === 'hypsometric-guide'
                ? 'bg-slate-900 border-sky-500/80 text-sky-300 shadow-md'
                : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/40'
            }`}
          >
            <Layers className="w-4 h-4 text-sky-400" />
            <span>{isEs ? 'Escala Hipsométrica Completa' : 'Complete Hypsometric Scale'}</span>
          </button>
        </div>

        {/* Tab 1: Satellite Lab (Real-World Situation) */}
        {activeTab === 'satellite-lab' ? (
          <div className="flex-1 overflow-y-auto p-3 sm:p-5 space-y-4">
            {/* Elevation Bands Selector Pills */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                  <Eye className="w-3.5 h-3.5 text-amber-400" />
                  <span>{isEs ? '1. Selecciona una Franja de Altitud / Batimetría:' : '1. Select an Elevation / Depth Band:'}</span>
                </span>
                <span className="text-[11px] text-amber-400 font-mono">
                  {isEs ? '6 Casos Reales en el Globo' : '6 Real Global Case Studies'}
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
                {SATELLITE_CASE_STUDIES.map((study, idx) => {
                  const isSelected = selectedCaseIndex === idx;
                  return (
                    <button
                      key={study.id}
                      onClick={() => setSelectedCaseIndex(idx)}
                      className={`p-2.5 rounded-xl border text-left transition-all relative overflow-hidden flex flex-col justify-between ${
                        isSelected
                          ? 'border-amber-400 bg-slate-800 shadow-lg ring-2 ring-amber-400/30'
                          : 'border-slate-800 bg-slate-900/80 hover:bg-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <div
                          className="w-3.5 h-3.5 rounded-full border border-white/60 shrink-0"
                          style={{ backgroundColor: study.hypsometricColor }}
                        />
                        <span className="text-[10px] font-mono font-bold text-slate-300 truncate">
                          {idx === 0
                            ? '< -4,000m'
                            : idx === 1
                            ? '0 a -200m'
                            : idx === 2
                            ? '0 – 200m'
                            : idx === 3
                            ? '200 – 1km'
                            : idx === 4
                            ? '1k – 3.5km'
                            : '3.5k m+'}
                        </span>
                      </div>
                      <span className="text-xs font-semibold text-white truncate">
                        {isEs ? study.name_es.split('(')[0] : study.name_en.split('(')[0]}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Split Screen: Interactive Mini-Map & In-Depth Comparison */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
              {/* Left / Top: Interactive Mini Map with Real Esri Satellite and Physical Switcher */}
              <MiniSatelliteReliefViewer
                caseStudy={currentCase}
                miniLens={miniLens}
                onToggleLens={setMiniLens}
                isEs={isEs}
                onInspectGlobal={() => handleInspectCase(currentCase, 'satellite-lab')}
              />

              {/* Right: Real Situation Breakdown & Myth-Busting */}
              <div className="lg:col-span-5 space-y-3 flex flex-col justify-between">
                {/* Title & Altitude */}
                <div className="bg-slate-800/80 border border-slate-700/80 p-3.5 rounded-2xl">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-400">
                      {isEs ? currentCase.hypsometricName_es : currentCase.hypsometricName_en}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-900 border border-slate-700 text-slate-300 font-mono">
                      {isEs ? currentCase.elevationText_es : currentCase.elevationText_en}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    {isEs ? currentCase.name_es : currentCase.name_en}
                  </h3>
                </div>

                {/* 2-Column Comparison Cards */}
                <div className="space-y-2.5 text-xs">
                  {/* Cartographic Convention */}
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-2.5">
                    <div
                      className="w-4 h-4 rounded-md border border-white/60 shrink-0 mt-0.5"
                      style={{ backgroundColor: currentCase.hypsometricColor }}
                    />
                    <div>
                      <strong className="text-slate-200 block mb-0.5 font-bold">
                        {isEs ? 'En el Mapa Físico (Símbolo de Convención):' : 'On the Physical Relief Map (Symbol):'}
                      </strong>
                      <p className="text-slate-300 leading-relaxed">
                        {isEs ? currentCase.mapConvention_es : currentCase.mapConvention_en}
                      </p>
                    </div>
                  </div>

                  {/* Real Satellite Reality */}
                  <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-2.5">
                    <Satellite className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-amber-300 block mb-0.5 font-bold">
                        {isEs ? 'En la Situación Real (Satélite desde el Espacio):' : 'In the Real Scenario (Satellite View):'}
                      </strong>
                      <p className="text-slate-200 leading-relaxed">
                        {isEs ? currentCase.satelliteReality_es : currentCase.satelliteReality_en}
                      </p>
                    </div>
                  </div>

                  {/* NWEA Myth Busted Callout */}
                  <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-rose-300 block mb-0.5 font-bold">
                        {isEs ? 'Estrategia Cartográfica Fundamental:' : 'Core Cartographic Strategy:'}
                      </strong>
                      <p className="text-rose-100 leading-relaxed font-medium">
                        {isEs ? currentCase.mythBusted_es : currentCase.mythBusted_en}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Real-World Economic & Human Geography Impact */}
                <div className="p-3 rounded-xl bg-slate-800/40 border border-slate-700/60 text-xs text-slate-300">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block mb-1">
                    🌍 {isEs ? 'Impacto en la Geografía Humana y Recursos:' : 'Impact on Human Geography & Resources:'}
                  </span>
                  <p className="leading-relaxed">
                    {isEs ? currentCase.realWorldImpact_es : currentCase.realWorldImpact_en}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Tab 2: Complete Hypsometric Elevation Guide */
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
            {/* Key Principle Alert */}
            <div className="p-3.5 rounded-xl bg-amber-500/15 border border-amber-500/40 flex items-start gap-3">
              <Info className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div className="text-xs text-slate-200 leading-relaxed">
                <strong className="text-amber-300 font-bold block mb-0.5">
                  {isEs ? '¡Regla Cartográfica Fundamental!' : 'Core Cartographic Rule!'}
                </strong>
                {isEs
                  ? 'Los colores en un mapa físico representan ALTITUD sobre el nivel del mar, NO el tipo de vegetación o clima. El verde oscuro indica llanuras bajas cerca de la costa, ¡incluso en los desiertos más secos!'
                  : 'Colors on a physical relief map represent ELEVATION above sea level, NOT climate or vegetation. Dark green denotes low coastal elevation, even in dry arid deserts!'}
              </div>
            </div>

            {/* Complete Hypsometric Color Strip with Quick Jump / Inspect */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  {isEs ? 'Escala Cromática de Hipsometría y Batimetría' : 'Hypsometric & Bathymetric Color Scale'}
                </span>
                <span className="text-xs text-amber-400 font-mono">
                  {isEs ? 'Haz clic en cualquier color para ir al satélite real' : 'Click any color to inspect in real satellite'}
                </span>
              </div>

              <div className="grid grid-cols-6 gap-1 h-12 rounded-xl overflow-hidden p-1 bg-slate-950 border border-slate-700 shadow-inner">
                {SATELLITE_CASE_STUDIES.map((study, idx) => (
                  <button
                    key={study.id}
                    onClick={() => handleInspectCase(study, 'hypsometric-guide')}
                    title={`${isEs ? study.hypsometricName_es : study.hypsometricName_en} - ${isEs ? study.name_es : study.name_en}`}
                    style={{ backgroundColor: study.hypsometricColor }}
                    className="h-full rounded flex flex-col items-center justify-center relative opacity-90 hover:opacity-100 hover:scale-105 transition-all cursor-pointer shadow-sm active:scale-95"
                  >
                    <span
                      className={`text-[9px] sm:text-[10px] font-bold font-mono px-1 rounded ${
                        idx >= 4 ? 'text-slate-950 bg-white/70' : 'text-white bg-black/40'
                      }`}
                    >
                      {idx === 0
                        ? '-4k m'
                        : idx === 1
                        ? '0 m'
                        : idx === 2
                        ? '200m'
                        : idx === 3
                        ? '1km'
                        : idx === 4
                        ? '3.5k m'
                        : '8.8k m'}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Grid of all bands with details and direct Satellite Flight */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {SATELLITE_CASE_STUDIES.map((study, idx) => (
                <div
                  key={study.id}
                  className="bg-slate-800/60 hover:bg-slate-800/80 transition-all border border-slate-700/70 hover:border-amber-500/40 rounded-xl p-3.5 space-y-2.5 text-xs flex flex-col justify-between shadow-sm"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2 border-b border-slate-700/60 pb-2">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div
                          className="w-5 h-5 rounded-md border border-white/40 shadow-sm shrink-0"
                          style={{ backgroundColor: study.hypsometricColor }}
                        />
                        <div className="min-w-0">
                          <h4 className="font-bold text-white text-sm truncate">
                            {isEs ? study.hypsometricName_es : study.hypsometricName_en}
                          </h4>
                          <span className="text-[11px] text-amber-300 font-mono">
                            {isEs ? study.elevationText_es : study.elevationText_en}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-slate-300 leading-relaxed">
                      {isEs ? study.mapConvention_es : study.mapConvention_en}
                    </p>
                  </div>

                  {/* Real World Example Card with Fly-To Button */}
                  <div className="bg-slate-900/85 p-3 rounded-xl border border-slate-800 space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5 text-amber-400 font-bold text-[11px] mb-0.5">
                          <Satellite className="w-3.5 h-3.5 shrink-0" />
                          <span>{isEs ? 'Ejemplo en el Mundo Real:' : 'Real-World Satellite Example:'}</span>
                        </div>
                        <div className="text-white font-semibold text-xs truncate">
                          {isEs ? study.name_es : study.name_en}
                        </div>
                        <div className="text-[10px] text-slate-400 truncate">
                          📍 {isEs ? study.location_es : study.location_en}
                        </div>
                      </div>
                    </div>

                    <p className="text-[11px] text-slate-300 line-clamp-2 leading-relaxed">
                      {isEs ? study.satelliteReality_es : study.satelliteReality_en}
                    </p>

                    {/* Action Buttons: Direct Satellite Flight & Compare in Lab */}
                    <div className="pt-1 flex flex-wrap items-center gap-2">
                      <button
                        onClick={() => handleInspectCase(study, 'hypsometric-guide')}
                        className="flex-1 px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-md active:scale-95"
                      >
                        <Compass className="w-3.5 h-3.5" />
                        <span>{isEs ? 'Explorar en Satélite Real' : 'Inspect in Real Satellite'}</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>

                      <button
                        onClick={() => {
                          setSelectedCaseIndex(idx);
                          setActiveTab('satellite-lab');
                        }}
                        className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-sky-300 border border-slate-700 text-xs font-medium flex items-center justify-center gap-1 transition-all"
                        title={isEs ? 'Comparar en el laboratorio interactivo' : 'Compare in the interactive lab'}
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>{isEs ? 'Comparar' : 'Compare'}</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
