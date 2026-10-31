import React, { useState } from 'react';
import { Language, LensType } from '../types/geography';
import { CartographicVisualStimulus } from '../types/progression';
import { RealLeafletViewer, MapMarkerData, MapPolylineData, MapPolygonData } from './RealLeafletViewer';
import {
  Layers,
  MapPin,
  Mountain,
  Satellite,
  Compass,
  CheckCircle2,
  AlertTriangle,
  ZoomIn,
  Eye,
  Info,
  ShieldCheck,
  Globe2,
  ExternalLink,
  Target,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export interface VisualExhibitProps {
  currentLang: Language;
  onStartEvaluation?: () => void;
  onNextChapter?: () => void;
  onPrevChapter?: () => void;
  chapterNumber?: number;
  totalChapters?: number;
}

// ============================================================================
// 1. SUBCHAPTER 1: REAL POLITICAL MAP (TWO-ZONE GUIDED BOOK: 2/3 MAP, 1/3 PANEL)
// ============================================================================
export const PoliticalMapVisualExhibit: React.FC<VisualExhibitProps> = ({
  currentLang,
  onNextChapter,
  onPrevChapter,
  chapterNumber = 1,
  totalChapters = 4,
}) => {
  const isEs = currentLang === 'es';
  const [selectedPreset, setSelectedPreset] = useState<'europe' | 'south_america' | 'sahara'>('europe');
  const [selectedFeature, setSelectedFeature] = useState<'sovereignty' | 'capitals' | 'borders' | 'microstates' | 'cities' | 'all'>('sovereignty');

  // Preset Configurations with Real Coordinates, Polygons & Offset Markers with Leader Arrows
  const presets = {
    europe: {
      center: [46.5, 3.5] as [number, number],
      zoom: 5,
      name_es: 'Europa Occidental (España, Francia, Alemania, Italia)',
      name_en: 'Western Europe (Spain, France, Germany, Italy)',
      capitals: [
        { lat: 40.4168, lng: -3.7038, title: 'Madrid', sublabel: isEs ? 'Capital Constitucional' : 'Constitutional Capital', isCapital: true, offsetDirection: 'top-left' as const },
        { lat: 48.8566, lng: 2.3522, title: 'París', sublabel: isEs ? 'Capital de Francia' : 'Capital of France', isCapital: true, offsetDirection: 'top-left' as const },
        { lat: 52.52, lng: 13.405, title: 'Berlín', sublabel: isEs ? 'Capital Federal' : 'Federal Capital', isCapital: true, offsetDirection: 'top-right' as const },
        { lat: 41.9028, lng: 12.4964, title: 'Roma', sublabel: isEs ? 'Capital de Italia' : 'Capital of Italy', isCapital: true, offsetDirection: 'bottom-right' as const },
        { lat: 38.7223, lng: -9.1393, title: 'Lisboa', sublabel: isEs ? 'Capital de Portugal' : 'Capital of Portugal', isCapital: true, offsetDirection: 'top-right' as const },
        { lat: 46.948, lng: 7.4474, title: 'Berna', sublabel: isEs ? 'Capital Federal Suiza' : 'Swiss Federal Capital', isCapital: true, offsetDirection: 'top-left' as const },
      ] as MapMarkerData[],
      microstates: [
        { lat: 42.5063, lng: 1.5218, title: 'Andorra', sublabel: isEs ? 'Microestado Soberano' : 'Sovereign Microstate', color: '#ec4899', iconText: '🏰', offsetDirection: 'top-left' as const },
        { lat: 41.9029, lng: 12.4534, title: 'Vaticano', sublabel: isEs ? '0.49 km² Enclave Soberano' : '0.49 km² Holy See', color: '#a855f7', iconText: '🇻🇦', offsetDirection: 'top-left' as const },
        { lat: 43.7384, lng: 7.4246, title: 'Mónaco', sublabel: isEs ? 'Principado Soberano' : 'Sovereign Principality', color: '#f59e0b', iconText: '🇲🇨', offsetDirection: 'bottom-right' as const },
      ] as MapMarkerData[],
      cities: [
        { lat: 41.3879, lng: 2.1699, title: 'Barcelona', sublabel: isEs ? 'Centro Económico e Industrial' : 'Economic & Industrial Hub', color: '#10b981', arrowColor: '#ef4444', iconText: '🏙️', offsetDirection: 'bottom-right' as const },
        { lat: 45.4642, lng: 9.19, title: 'Milán', sublabel: isEs ? 'Capital Financiera' : 'Financial Capital', color: '#10b981', arrowColor: '#ef4444', iconText: '🏙️', offsetDirection: 'bottom-right' as const },
        { lat: 48.1351, lng: 11.582, title: 'Múnich', sublabel: isEs ? 'Hub Tecnológico' : 'Tech Hub', color: '#10b981', arrowColor: '#ef4444', iconText: '🏙️', offsetDirection: 'top-right' as const },
        { lat: 45.764, lng: 4.8357, title: 'Lyon', sublabel: isEs ? 'Polo Comercial del Ródano' : 'Rhône Commercial Hub', color: '#10b981', arrowColor: '#ef4444', iconText: '🏙️', offsetDirection: 'bottom-left' as const },
      ] as MapMarkerData[],
      polylines: [
        {
          positions: [
            [43.35, -1.78],
            [42.8, 0.0],
            [42.5, 1.5],
            [42.4, 3.15]
          ] as [number, number][],
          color: '#f43f5e',
          dashArray: '6 4',
          weight: 4,
          label: isEs ? 'Tratado de los Pirineos (Límite España-Francia)' : 'Treaty of the Pyrenees (Spain-France Border)'
        }
      ] as MapPolylineData[],
      polygons: [
        {
          positions: [
            [43.7, -7.5], [43.5, -2.0], [42.5, 3.0], [36.8, -2.0], [36.2, -5.5], [37.0, -7.5], [41.8, -8.8]
          ] as [number, number][],
          color: '#f59e0b',
          fillColor: '#f59e0b',
          fillOpacity: 0.12,
          weight: 2.5,
          label: isEs ? 'España (Jurisdicción Soberana Constitucional)' : 'Spain (Sovereign State Jurisdiction)'
        },
        {
          positions: [
            [49.0, -1.5], [50.8, 2.5], [48.8, 7.5], [44.0, 7.0], [42.5, 3.0], [43.5, -1.8], [47.5, -2.5]
          ] as [number, number][],
          color: '#3b82f6',
          fillColor: '#3b82f6',
          fillOpacity: 0.12,
          weight: 2.5,
          label: isEs ? 'Francia (Jurisdicción Soberana Constitucional)' : 'France (Sovereign State Jurisdiction)'
        }
      ] as MapPolygonData[]
    },
    south_america: {
      center: [-14.0, -60.0] as [number, number],
      zoom: 4,
      name_es: 'América del Sur (Brasil, Colombia, Perú, Bolivia, Argentina)',
      name_en: 'South America (Brazil, Colombia, Peru, Bolivia, Argentina)',
      capitals: [
        { lat: -15.7975, lng: -47.8919, title: 'Brasilia', sublabel: isEs ? 'Capital Federal Diseñada' : 'Planned Federal Capital', isCapital: true, offsetDirection: 'top-right' as const },
        { lat: 4.711, lng: -74.0721, title: 'Bogotá', sublabel: isEs ? 'Distrito Capital' : 'Capital District', isCapital: true, offsetDirection: 'bottom-right' as const },
        { lat: -12.0464, lng: -77.0428, title: 'Lima', sublabel: isEs ? 'Capital de la República' : 'Capital of the Republic', isCapital: true, offsetDirection: 'bottom-left' as const },
        { lat: -34.6037, lng: -58.3816, title: 'Buenos Aires', sublabel: isEs ? 'Ciudad Autónoma Capital' : 'Autonomous Capital City', isCapital: true, offsetDirection: 'top-right' as const },
        { lat: -16.4897, lng: -68.1193, title: 'La Paz', sublabel: isEs ? 'Sede de Gobierno' : 'Seat of Government', isCapital: true, offsetDirection: 'top-left' as const },
        { lat: -33.4489, lng: -70.6693, title: 'Santiago', sublabel: isEs ? 'Capital de Chile' : 'Capital of Chile', isCapital: true, offsetDirection: 'top-left' as const }
      ] as MapMarkerData[],
      microstates: [] as MapMarkerData[],
      cities: [
        { lat: -23.5505, lng: -46.6333, title: 'São Paulo', sublabel: isEs ? 'Megaciudad Comercial e Industrial' : 'Commercial Megacity', color: '#10b981', arrowColor: '#ef4444', iconText: '🏙️', offsetDirection: 'bottom-right' as const },
        { lat: 6.2442, lng: -75.5812, title: 'Medellín', sublabel: isEs ? 'Centro Industrial Colombiano' : 'Industrial Hub', color: '#10b981', arrowColor: '#ef4444', iconText: '🏙️', offsetDirection: 'top-left' as const },
        { lat: -2.1894, lng: -79.8891, title: 'Guayaquil', sublabel: isEs ? 'Puerto Marítimo de Ecuador' : 'Maritime Port', color: '#10b981', arrowColor: '#ef4444', iconText: '🏙️', offsetDirection: 'bottom-left' as const },
        { lat: -17.7833, lng: -63.1821, title: 'Santa Cruz', sublabel: isEs ? 'Hub Agroindustrial' : 'Agroindustrial Hub', color: '#10b981', arrowColor: '#ef4444', iconText: '🏙️', offsetDirection: 'bottom-right' as const },
      ] as MapMarkerData[],
      polylines: [
        {
          positions: [
            [-4.2, -69.9],
            [-9.0, -70.5],
            [-10.9, -65.3]
          ] as [number, number][],
          color: '#3b82f6',
          dashArray: '5 3',
          weight: 3.5,
          label: isEs ? 'Fronteras Amazónicas Acordadas por Tratados' : 'Amazonian Treaty Borders'
        }
      ] as MapPolylineData[],
      polygons: [
        {
          positions: [
            [-2.0, -60.0], [-3.0, -42.0], [-10.0, -37.0], [-23.0, -42.0], [-30.0, -52.0], [-20.0, -58.0], [-10.0, -69.0]
          ] as [number, number][],
          color: '#10b981',
          fillColor: '#10b981',
          fillOpacity: 0.1,
          weight: 2.5,
          label: isEs ? 'Brasil (Soberanía Territorial de la República Federal)' : 'Brazil (Federal Sovereign Territory)'
        }
      ] as MapPolygonData[]
    },
    sahara: {
      center: [24.0, 25.0] as [number, number],
      zoom: 5,
      name_es: 'Líneas Geométricas de Tratados (Egipto, Sudán, Libia)',
      name_en: 'Geometric Treaty Boundaries (Egypt, Sudan, Libya)',
      capitals: [
        { lat: 30.0444, lng: 31.2357, title: 'El Cairo', sublabel: isEs ? 'Capital de Egipto' : 'Capital of Egypt', isCapital: true, offsetDirection: 'bottom-right' as const },
        { lat: 32.8872, lng: 13.1913, title: 'Trípoli', sublabel: isEs ? 'Capital de Libia' : 'Capital of Libya', isCapital: true, offsetDirection: 'bottom-left' as const },
        { lat: 15.5007, lng: 32.5599, title: 'Jartum', sublabel: isEs ? 'Capital de Sudán' : 'Capital of Sudan', isCapital: true, offsetDirection: 'bottom-right' as const },
      ] as MapMarkerData[],
      microstates: [
        { lat: 22.0, lng: 25.0, title: 'Punto Trifinio', sublabel: isEs ? '22°N / 25°E Vértice Geométrico' : '22°N / 25°E Treaty Junction', color: '#f59e0b', iconText: '📐', offsetDirection: 'top-right' as const }
      ] as MapMarkerData[],
      cities: [
        { lat: 31.2001, lng: 29.9187, title: 'Alejandría', sublabel: isEs ? 'Puerto Principal del Mediterráneo' : 'Main Mediterranean Port', color: '#10b981', arrowColor: '#ef4444', iconText: '🏙️', offsetDirection: 'top-left' as const }
      ] as MapMarkerData[],
      polylines: [
        {
          positions: [
            [22.0, 25.0],
            [22.0, 37.0]
          ] as [number, number][],
          color: '#ef4444',
          dashArray: '6 3',
          weight: 4,
          label: isEs ? 'Paralelo 22°N: Frontera Tratado Anglo-Egipcio de 1899' : '22nd Parallel: 1899 Anglo-Egyptian Treaty Boundary'
        },
        {
          positions: [
            [31.5, 25.0],
            [22.0, 25.0]
          ] as [number, number][],
          color: '#f97316',
          dashArray: '6 3',
          weight: 3.5,
          label: isEs ? 'Meridiano 25°E: Límite Internacional Egipto-Libia' : '25th Meridian: Egypt-Libya Boundary'
        }
      ] as MapPolylineData[],
      polygons: [
        {
          positions: [
            [31.5, 25.0], [31.5, 34.0], [27.8, 34.3], [22.0, 36.8], [22.0, 25.0]
          ] as [number, number][],
          color: '#38bdf8',
          fillColor: '#38bdf8',
          fillOpacity: 0.1,
          weight: 2.5,
          label: isEs ? 'Egipto (Jurisdicción Soberana)' : 'Egypt (Sovereign Jurisdiction)'
        }
      ] as MapPolygonData[]
    }
  };

  const activePresetData = presets[selectedPreset];

  // STRICT SINGLE-ELEMENT FOCUS LOGIC:
  // "al hacer click en cada elemento se presenta el elemento en el map. al seleccionar otro elemento se elemina el anterior y se muestra en nuevo."
  let activePolygons: MapPolygonData[] = [];
  let activeMarkers: MapMarkerData[] = [];
  let activePolylines: MapPolylineData[] = [];

  if (selectedFeature === 'sovereignty') {
    activePolygons = activePresetData.polygons;
    activeMarkers = [];
    activePolylines = [];
  } else if (selectedFeature === 'capitals') {
    activePolygons = [];
    activeMarkers = activePresetData.capitals;
    activePolylines = [];
  } else if (selectedFeature === 'borders') {
    activePolygons = [];
    activeMarkers = [];
    activePolylines = activePresetData.polylines;
  } else if (selectedFeature === 'microstates') {
    activePolygons = [];
    activeMarkers = activePresetData.microstates;
    activePolylines = [];
  } else if (selectedFeature === 'cities') {
    activePolygons = [];
    activeMarkers = activePresetData.cities;
    activePolylines = [];
  } else if (selectedFeature === 'all') {
    activePolygons = activePresetData.polygons;
    activeMarkers = [...activePresetData.capitals, ...activePresetData.microstates, ...activePresetData.cities];
    activePolylines = activePresetData.polylines;
  }

  return (
    <div className="flex flex-col lg:flex-row h-full w-full overflow-hidden">
      {/* ==================================================================== */}
      {/* LEFT ZONE: MAP STAGE (TWO-THIRDS OF SCREEN, 100% HEIGHT, FIXED)       */}
      {/* ==================================================================== */}
      <div className="w-full lg:w-[65%] xl:w-[68%] h-[50vh] min-h-[380px] lg:h-full lg:min-h-0 p-2 sm:p-3 flex flex-col bg-slate-950/80 border-b lg:border-b-0 lg:border-r border-slate-800 shrink-0">
        <RealLeafletViewer
          lens="political"
          center={activePresetData.center}
          zoom={activePresetData.zoom}
          markers={activeMarkers}
          polylines={activePolylines}
          polygons={activePolygons}
          heightClass="h-full flex-1"
          interactive={true}
          hideHeader={true}
          currentLang={currentLang}
        />
      </div>

      {/* ==================================================================== */}
      {/* RIGHT ZONE: GUIDED BOOK CHAPTER PANEL (ONE-THIRD, INDEPENDENT SCROLL)*/}
      {/* ==================================================================== */}
      <div className="w-full lg:w-[35%] xl:w-[32%] h-full flex flex-col overflow-y-auto p-4 sm:p-5 space-y-4 bg-slate-900/90 touch-scroll">
        
        {/* Book Chapter Header */}
        <div className="flex items-center justify-between text-xs font-mono">
          <span className="px-2.5 py-1 rounded-full bg-blue-500/20 text-blue-300 font-bold border border-blue-500/30 flex items-center gap-1.5">
            <span>📖</span>
            <span>{isEs ? `Capítulo ${chapterNumber} de ${totalChapters}` : `Chapter ${chapterNumber} of ${totalChapters}`}</span>
          </span>
          <span className="text-slate-400 font-semibold">
            {isEs ? '1. Mapa Político' : '1. Political Map'}
          </span>
        </div>

        {/* User Required Definition Box */}
        <div className="p-4 rounded-xl bg-gradient-to-br from-blue-950/80 via-slate-900 to-slate-950 border border-blue-500/30 shadow-lg space-y-2.5">
          <div className="flex items-center gap-2 text-blue-300 font-bold text-sm">
            <span className="text-lg">🏛️</span>
            <h3>{isEs ? 'Definición de Mapa Político' : 'Definition of Political Map'}</h3>
          </div>
          
          <p className="text-xs text-blue-100 font-medium leading-relaxed">
            {isEs
              ? 'Estás viendo a la izquierda un mapa político. En él se pueden identificar:'
              : 'You are looking at a political map on the left. In it, you can identify:'}
          </p>

          <ul className="text-xs text-blue-200/90 space-y-1.5 pl-2 border-l-2 border-blue-500/40 font-normal">
            <li>
              <strong className="text-white">1. {isEs ? 'Soberanía y Jurisdicción Estatal:' : 'State Sovereignty & Jurisdiction:'}</strong>{' '}
              {isEs ? 'Límites legales y territorio de cada Estado constitucional.' : 'Legal borders and territorial jurisdiction of each sovereign state.'}
            </li>
            <li>
              <strong className="text-amber-300">2. {isEs ? 'Capitales de los Estados (★):' : 'State Capitals (★):'}</strong>{' '}
              {isEs ? 'Sedes administrativas donde residen los poderes de gobierno.' : 'Administrative seats where government power resides.'}
            </li>
            <li>
              <strong className="text-rose-300">3. {isEs ? 'Fronteras Internacionales:' : 'International Borders:'}</strong>{' '}
              {isEs ? 'Líneas trazadas por tratados diplomáticos entre naciones.' : 'Demarcation lines established by treaties between nations.'}
            </li>
            <li>
              <strong className="text-purple-300">4. {isEs ? 'Microestados y Enclaves:' : 'Microstates & Enclaves:'}</strong>{' '}
              {isEs ? 'Entidades soberanas de escala reducida con pleno autogobierno.' : 'Small sovereign entities with full self-governance.'}
            </li>
            <li>
              <strong className="text-emerald-300">5. {isEs ? 'Ciudades Principales No Capitales:' : 'Major Commercial Cities:'}</strong>{' '}
              {isEs ? 'Centros económicos y poblacionales que no son sedes de gobierno.' : 'Economic and population centers distinct from the political capital.'}
            </li>
          </ul>

          <div className="pt-2 text-xs font-bold text-amber-300 flex items-center gap-1.5 border-t border-blue-500/20">
            <span>👉</span>
            <span>
              {isEs
                ? 'Haz clic en los botones de abajo para que observes en el mapa cada uno de ellos:'
                : 'Click the buttons below to observe each one on the map:'}
            </span>
          </div>
        </div>

        {/* Feature Interactive Buttons: One element at a time */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-xs font-mono font-bold text-slate-300">
            <span className="uppercase tracking-wider">
              {isEs ? 'Elementos a Observar (1 a la vez):' : 'Map Elements (1 at a time):'}
            </span>
            <span className="text-[10px] text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30">
              {isEs ? 'Aísla el elemento en el mapa' : 'Isolates element on map'}
            </span>
          </div>

          <div className="flex flex-col gap-2">
            {/* Button 1: Soberanía */}
            <div className="rounded-xl border border-slate-800 overflow-hidden bg-slate-950 transition-all">
              <button
                type="button"
                onClick={() => setSelectedFeature('sovereignty')}
                className={`w-full p-2.5 text-left text-xs transition-all flex items-center justify-between ${
                  selectedFeature === 'sovereignty'
                    ? 'bg-blue-600 text-white font-bold shadow-md'
                    : 'bg-slate-950 text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-2 min-w-0">
                  <span className="text-base shrink-0">🎨</span>
                  <span className="truncate">{isEs ? '1. Soberanía y Jurisdicción Estatal' : '1. State Sovereignty & Jurisdiction'}</span>
                </div>
                <span className="text-[10px] opacity-80 font-mono shrink-0">
                  {selectedFeature === 'sovereignty' ? '▼' : isEs ? 'Polígonos ▶' : 'Polygons ▶'}
                </span>
              </button>

              {selectedFeature === 'sovereignty' && (
                <div className="p-3.5 bg-slate-950/95 border-t border-blue-500/40 text-xs text-slate-300 space-y-2 animate-in fade-in duration-150">
                  <strong className="text-blue-300 font-bold flex items-center gap-1.5">
                    <span>🎨</span>
                    <span>{isEs ? 'Definición de Soberanía y Jurisdicción:' : 'State Sovereignty & Jurisdiction Definition:'}</span>
                  </strong>
                  <p className="leading-relaxed">
                    {isEs
                      ? 'Los colores asignados en un mapa político diferencian territorios bajo constituciones y gobiernos distintos. Un color NO representa clima ni vegetación: sirve para delimitar el alcance jurídico del Estado.'
                      : 'Colors differentiate separate constitutional jurisdictions without indicating weather or terrain.'}
                  </p>
                  <div className="text-[11px] text-slate-300 bg-slate-900/90 p-2.5 rounded-lg border border-slate-800">
                    <strong className="text-amber-300">{isEs ? 'En el mapa ves:' : 'On the map you see:'}</strong>{' '}
                    {isEs ? 'Los polígonos coloreados de cada país sin etiquetas que tapen el terreno.' : 'Tinted national polygons with clean boundaries.'}
                  </div>
                </div>
              )}
            </div>

            {/* Button 2: Capitales */}
            <div className="rounded-xl border border-slate-800 overflow-hidden bg-slate-950 transition-all">
              <button
                type="button"
                onClick={() => setSelectedFeature('capitals')}
                className={`w-full p-2.5 text-left text-xs transition-all flex items-center justify-between ${
                  selectedFeature === 'capitals'
                    ? 'bg-amber-500 text-slate-950 font-extrabold shadow-md'
                    : 'bg-slate-950 text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-2 min-w-0">
                  <span className="text-base shrink-0">★</span>
                  <span className="truncate">{isEs ? '2. Capitales Nacionales (Sedes de Gobierno)' : '2. National Capitals (Seats of Power)'}</span>
                </div>
                <span className="text-[10px] opacity-80 font-mono shrink-0">
                  {selectedFeature === 'capitals' ? '▼' : '★ Star ▶'}
                </span>
              </button>

              {selectedFeature === 'capitals' && (
                <div className="p-3.5 bg-slate-950/95 border-t border-amber-500/40 text-xs text-slate-300 space-y-2 animate-in fade-in duration-150">
                  <strong className="text-amber-400 font-bold flex items-center gap-1.5">
                    <span>★</span>
                    <span>{isEs ? 'Definición de Capitales Nacionales:' : 'National Capitals Definition:'}</span>
                  </strong>
                  <p className="leading-relaxed">
                    {isEs
                      ? 'El símbolo universal de la estrella (★) identifica la sede de gobierno donde residen los poderes ejecutivo, legislativo y judicial. No siempre coincide con la ciudad más poblada del país.'
                      : 'The star (★) marks the constitutional seat of government. It may not always be the most populous city in the nation.'}
                  </p>
                  <div className="text-[11px] text-slate-300 bg-slate-900/90 p-2.5 rounded-lg border border-slate-800">
                    <strong className="text-amber-300">{isEs ? 'En el mapa ves:' : 'On the map you see:'}</strong>{' '}
                    {isEs ? 'Estrellas con etiquetas exteriores flotantes y flechas indicadoras en rojo intenso que dejan ver la ciudad.' : 'Stars with outside leader arrows in intense red pointing cleanly to the urban area.'}
                  </div>
                </div>
              )}
            </div>

            {/* Button 3: Fronteras */}
            <div className="rounded-xl border border-slate-800 overflow-hidden bg-slate-950 transition-all">
              <button
                type="button"
                onClick={() => setSelectedFeature('borders')}
                className={`w-full p-2.5 text-left text-xs transition-all flex items-center justify-between ${
                  selectedFeature === 'borders'
                    ? 'bg-rose-600 text-white font-bold shadow-md'
                    : 'bg-slate-950 text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-2 min-w-0">
                  <span className="text-base shrink-0">✂️</span>
                  <span className="truncate">{isEs ? '3. Fronteras por Tratados Internacionales' : '3. Treaty Borders'}</span>
                </div>
                <span className="text-[10px] opacity-80 font-mono shrink-0">
                  {selectedFeature === 'borders' ? '▼' : isEs ? 'Líneas ▶' : 'Lines ▶'}
                </span>
              </button>

              {selectedFeature === 'borders' && (
                <div className="p-3.5 bg-slate-950/95 border-t border-rose-500/40 text-xs text-slate-300 space-y-2 animate-in fade-in duration-150">
                  <strong className="text-rose-400 font-bold flex items-center gap-1.5">
                    <span>✂️</span>
                    <span>{isEs ? 'Definición de Fronteras por Tratado:' : 'International Treaty Borders Definition:'}</span>
                  </strong>
                  <p className="leading-relaxed">
                    {isEs
                      ? 'Las fronteras son construcciones jurídicas y diplomáticas acordadas por tratados humanos. No existen en la naturaleza; desde el espacio no se ven líneas de colores, sino que se delimitan en tratados como el Tratado de los Pirineos o el Paralelo 22°N.'
                      : 'Borders are legal agreements between human governments; they do not exist naturally on Earth.'}
                  </p>
                  <div className="text-[11px] text-slate-300 bg-slate-900/90 p-2.5 rounded-lg border border-slate-800">
                    <strong className="text-amber-300">{isEs ? 'En el mapa ves:' : 'On the map you see:'}</strong>{' '}
                    {isEs ? 'Líneas discontinuas con la etiqueta del tratado internacional que fijó el límite.' : 'Dashed treaty lines showing the legal boundary.'}
                  </div>
                </div>
              )}
            </div>

            {/* Button 4: Microestados */}
            <div className="rounded-xl border border-slate-800 overflow-hidden bg-slate-950 transition-all">
              <button
                type="button"
                onClick={() => setSelectedFeature('microstates')}
                className={`w-full p-2.5 text-left text-xs transition-all flex items-center justify-between ${
                  selectedFeature === 'microstates'
                    ? 'bg-purple-600 text-white font-bold shadow-md'
                    : 'bg-slate-950 text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-2 min-w-0">
                  <span className="text-base shrink-0">🏰</span>
                  <span className="truncate">{isEs ? '4. Microestados y Enclaves Soberanos' : '4. Sovereign Microstates & Enclaves'}</span>
                </div>
                <span className="text-[10px] opacity-80 font-mono shrink-0">
                  {selectedFeature === 'microstates' ? '▼' : isEs ? 'Enclaves ▶' : 'Enclaves ▶'}
                </span>
              </button>

              {selectedFeature === 'microstates' && (
                <div className="p-3.5 bg-slate-950/95 border-t border-purple-500/40 text-xs text-slate-300 space-y-2 animate-in fade-in duration-150">
                  <strong className="text-purple-400 font-bold flex items-center gap-1.5">
                    <span>🏰</span>
                    <span>{isEs ? 'Definición de Microestados y Enclaves:' : 'Sovereign Microstates & Enclaves Definition:'}</span>
                  </strong>
                  <p className="leading-relaxed">
                    {isEs
                      ? 'Entidades con soberanía plena reconocida por la ONU que poseen dimensiones territoriales minúsculas, como Andorra (en los Pirineos), Mónaco (en la Costa Azul) o el Vaticano (enclave dentro de Roma).'
                      : 'Sovereign nations recognized by the UN with very small land area (Andorra, Monaco, Vatican City).'}
                  </p>
                  <div className="text-[11px] text-slate-300 bg-slate-900/90 p-2.5 rounded-lg border border-slate-800">
                    <strong className="text-amber-300">{isEs ? 'En el mapa ves:' : 'On the map you see:'}</strong>{' '}
                    {isEs ? 'Llamadas con flechas en rojo intenso hacia los microestados sin tapar su reducido territorio.' : 'Leader arrows in intense red pointing to microstate coordinates without obscuring them.'}
                  </div>
                </div>
              )}
            </div>

            {/* Button 5: Ciudades Principales */}
            <div className="rounded-xl border border-slate-800 overflow-hidden bg-slate-950 transition-all">
              <button
                type="button"
                onClick={() => setSelectedFeature('cities')}
                className={`w-full p-2.5 text-left text-xs transition-all flex items-center justify-between ${
                  selectedFeature === 'cities'
                    ? 'bg-emerald-600 text-white font-bold shadow-md'
                    : 'bg-slate-950 text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-2 min-w-0">
                  <span className="text-base shrink-0">🏙️</span>
                  <span className="truncate">{isEs ? '5. Ciudades Principales (No Capitales)' : '5. Major Non-Capital Cities'}</span>
                </div>
                <span className="text-[10px] opacity-80 font-mono shrink-0">
                  {selectedFeature === 'cities' ? '▼' : isEs ? 'Economía ▶' : 'Commerce ▶'}
                </span>
              </button>

              {selectedFeature === 'cities' && (
                <div className="p-3.5 bg-slate-950/95 border-t border-emerald-500/40 text-xs text-slate-300 space-y-2 animate-in fade-in duration-150">
                  <strong className="text-emerald-400 font-bold flex items-center gap-1.5">
                    <span>🏙️</span>
                    <span>{isEs ? 'Definición de Ciudades Principales (No Capitales):' : 'Major Non-Capital Cities Definition:'}</span>
                  </strong>
                  <p className="leading-relaxed">
                    {isEs
                      ? 'Grandes centros financieros, industriales o portuarios que superan en economía a menudo a las capitales (ej. Barcelona vs Madrid, Milán vs Roma, São Paulo vs Brasilia). En los mapas políticos se marcan con círculos o puntos, nunca con la estrella ★ de capital.'
                      : 'Commercial and financial powerhouses marked with dots/circles, contrasting with capital stars (e.g. Barcelona vs Madrid, São Paulo vs Brasília).'}
                  </p>
                  <div className="text-[11px] text-slate-300 bg-slate-900/90 p-2.5 rounded-lg border border-slate-800">
                    <strong className="text-amber-300">{isEs ? 'En el mapa ves:' : 'On the map you see:'}</strong>{' '}
                    {isEs ? 'Puntos urbanos económicos con etiquetas exteriores y flechas en rojo intenso.' : 'Commercial city markers with outside labels and intense red arrows.'}
                  </div>
                </div>
              )}
            </div>

            {/* Button 6: Ver Todos */}
            <div className="rounded-xl border border-slate-800 overflow-hidden bg-slate-950 transition-all">
              <button
                type="button"
                onClick={() => setSelectedFeature('all')}
                className={`w-full p-2.5 text-left text-xs transition-all flex items-center justify-between ${
                  selectedFeature === 'all'
                    ? 'bg-slate-800 text-amber-300 font-bold shadow'
                    : 'bg-slate-950 text-slate-400 hover:text-slate-200'
                }`}
              >
                <div className="flex items-center gap-2 min-w-0">
                  <span className="text-base shrink-0">🌐</span>
                  <span className="truncate">{isEs ? 'Ver Todos los Elementos (Síntesis Completa)' : 'View All Elements Combined (Synthesis)'}</span>
                </div>
                <span className="text-[10px] opacity-80 font-mono shrink-0">
                  {selectedFeature === 'all' ? '▼' : isEs ? 'Completo ▶' : 'All ▶'}
                </span>
              </button>

              {selectedFeature === 'all' && (
                <div className="p-3.5 bg-slate-950/95 border-t border-amber-500/40 text-xs text-slate-300 space-y-2 animate-in fade-in duration-150">
                  <strong className="text-amber-300 font-bold flex items-center gap-1.5">
                    <span>🌐</span>
                    <span>{isEs ? 'Síntesis Cartográfica Completa:' : 'Full Cartographic Synthesis:'}</span>
                  </strong>
                  <p className="leading-relaxed">
                    {isEs
                      ? 'Ahora estás observando todos los elementos combinados: soberanías con polígonos, fronteras con líneas, capitales con estrellas y ciudades con puntos. Así se compone un mapa político completo.'
                      : 'Now you see all elements harmonized: sovereignty polygons, treaty lines, capital stars, and city nodes.'}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Region Selector to Test the Concept Across the World */}
        <div className="space-y-1.5">
          <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider block">
            {isEs ? 'Cambiar Región para Observar:' : 'Change Region to Observe:'}
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-1.5">
            <button
              type="button"
              onClick={() => setSelectedPreset('europe')}
              className={`p-2.5 rounded-xl text-left text-xs font-semibold transition-all border flex items-center justify-between ${
                selectedPreset === 'europe'
                  ? 'bg-blue-600 text-white border-blue-400 shadow-md font-bold'
                  : 'bg-slate-950 text-slate-300 hover:bg-slate-800 border-slate-800'
              }`}
            >
              <span>🇪🇺 {isEs ? 'Europa Occidental' : 'Western Europe'}</span>
              <span className="text-[10px] opacity-75">Madrid, París</span>
            </button>
            <button
              type="button"
              onClick={() => setSelectedPreset('south_america')}
              className={`p-2.5 rounded-xl text-left text-xs font-semibold transition-all border flex items-center justify-between ${
                selectedPreset === 'south_america'
                  ? 'bg-blue-600 text-white border-blue-400 shadow-md font-bold'
                  : 'bg-slate-950 text-slate-300 hover:bg-slate-800 border-slate-800'
              }`}
            >
              <span>🌎 {isEs ? 'América del Sur' : 'South America'}</span>
              <span className="text-[10px] opacity-75">Brasilia, Bogotá</span>
            </button>
            <button
              type="button"
              onClick={() => setSelectedPreset('sahara')}
              className={`p-2.5 rounded-xl text-left text-xs font-semibold transition-all border flex items-center justify-between ${
                selectedPreset === 'sahara'
                  ? 'bg-blue-600 text-white border-blue-400 shadow-md font-bold'
                  : 'bg-slate-950 text-slate-300 hover:bg-slate-800 border-slate-800'
              }`}
            >
              <span>📐 {isEs ? 'Fronteras Geométricas' : 'Treaty Borders'}</span>
              <span className="text-[10px] opacity-75">22°N Sahara</span>
            </button>
          </div>
        </div>

        {/* Distinctive Characteristics & Common Error */}
        <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-slate-300">
          <strong className="text-amber-400 block mb-0.5">
            ⚠️ {isEs ? 'Regla de Oro en Mapas Políticos:' : 'Golden Rule of Political Maps:'}
          </strong>
          {isEs
            ? 'El mapa político responde a la pregunta "¿A quién pertenece y quién gobierna este territorio?". Nunca lo uses para medir altitud ni vegetación real.'
            : 'Political maps answer "Who governs and has jurisdiction over this land?". Never use them for elevation or real ground cover.'}
        </div>

        {/* Guided Book Navigation Footer */}
        <div className="pt-3 border-t border-slate-800 flex items-center justify-between gap-2 mt-auto">
          {onPrevChapter ? (
            <button
              type="button"
              onClick={onPrevChapter}
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              <span>←</span>
              <span>{isEs ? 'Anterior' : 'Previous'}</span>
            </button>
          ) : (
            <div />
          )}

          <span className="text-[11px] font-mono text-slate-400 font-bold">
            {isEs ? `Página ${chapterNumber} de ${totalChapters}` : `Page ${chapterNumber} of ${totalChapters}`}
          </span>

          {onNextChapter && (
            <button
              type="button"
              onClick={onNextChapter}
              className="px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold flex items-center gap-1.5 shadow-md transition-all active:scale-95"
            >
              <span>{isEs ? 'Capítulo 2: Relieve Físico' : 'Chapter 2: Physical Relief'}</span>
              <span>→</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// 2. REAL PHYSICAL RELIEF MAP & HYPSOMETRIC SCALE (TWO-ZONE SANDBOX)
// ============================================================================
export const PhysicalHypsometricVisualExhibit: React.FC<VisualExhibitProps> = ({
  currentLang,
  onNextChapter,
  onPrevChapter,
  chapterNumber = 2,
  totalChapters = 4,
}) => {
  const isEs = currentLang === 'es';
  const [activeElevationZone, setActiveElevationZone] = useState<number>(2); // default lowlands
  const [selectedExampleIndex, setSelectedExampleIndex] = useState<number>(0);
  const [showMythbusterComparison, setShowMythbusterComparison] = useState<boolean>(false);
  const [mythbusterLens, setMythbusterLens] = useState<'physical' | 'satellite'>('physical');

  // Elevation zones with real coordinates, real polygons & outside labels with arrows
  const elevationZones = [
    {
      id: 0,
      color: '#082f49',
      name_es: 'Fosa Abisal y Fondo Oceánico',
      name_en: 'Abyssal Trench & Deep Ocean Floor',
      range: '< -4,000 m',
      rule_es: 'Azul marino muy oscuro = máxima profundidad batimétrica oceánica.',
      rule_en: 'Dark navy blue = extreme ocean bathymetric depth.',
      examples: [
        {
          name_es: 'Fosa de Puerto Rico (Atlántico Profundo)',
          name_en: 'Puerto Rico Trench (Deep Atlantic)',
          center: [20.0, -66.5] as [number, number],
          zoom: 6,
          desc_es: 'Profundidad de -8,376m. El polígono delimita la fosa abisal y la etiqueta exterior señala con flecha sin taparla.',
          desc_en: 'Depth of -8,376m. The polygon frames the abyssal trench with an outside arrow pointing into it.',
          polygons: [
            {
              positions: [
                [20.6, -67.8], [20.4, -65.2], [19.0, -65.2], [19.2, -67.8]
              ] as [number, number][],
              color: '#38bdf8',
              fillColor: '#082f49',
              fillOpacity: 0.35,
              weight: 2.5,
              label: isEs ? 'Fosa de Puerto Rico (-8,376m)' : 'Puerto Rico Trench (-8,376m)'
            }
          ] as MapPolygonData[],
          markers: [
            {
              lat: 19.8,
              lng: -66.5,
              title: isEs ? 'Fosa de Puerto Rico' : 'Puerto Rico Trench',
              sublabel: '-8,376 m',
              color: '#38bdf8',
              arrowColor: '#ef4444',
              offsetDirection: 'bottom-right' as const,
            }
          ] as MapMarkerData[]
        },
        {
          name_es: 'Fosa de las Marianas (Abismo de Challenger)',
          name_en: 'Mariana Trench (Challenger Deep)',
          center: [12.0, 143.0] as [number, number],
          zoom: 5,
          desc_es: 'Punto más profundo de la Tierra (-11,034 metros), delimitado con polígono de arco.',
          desc_en: 'Deepest oceanic depression on Earth (-11,034 meters), outlined by arc polygon.',
          polygons: [
            {
              positions: [
                [13.5, 143.5], [12.0, 144.5], [10.5, 142.8], [11.2, 141.2]
              ] as [number, number][],
              color: '#38bdf8',
              fillColor: '#082f49',
              fillOpacity: 0.35,
              weight: 2.5,
              label: isEs ? 'Arco de las Marianas' : 'Mariana Trench Arc'
            }
          ] as MapPolygonData[],
          markers: [
            {
              lat: 12.0,
              lng: 143.0,
              title: isEs ? 'Abismo de Challenger' : 'Challenger Deep',
              sublabel: '-11,034 m',
              color: '#38bdf8',
              arrowColor: '#ef4444',
              offsetDirection: 'bottom-right' as const,
            }
          ] as MapMarkerData[]
        }
      ]
    },
    {
      id: 1,
      color: '#06b6d4',
      name_es: 'Plataforma Continental Somera',
      name_en: 'Shallow Continental Shelf',
      range: '0 a -200 m',
      rule_es: 'Celeste brillante y cian = aguas costeras someras sobre la plataforma sumergida.',
      rule_en: 'Bright cyan = shallow shelf waters and reefs.',
      examples: [
        {
          name_es: 'Bancos de las Bahamas y Estrecho de Florida',
          name_en: 'Bahamas Banks & Florida Straits',
          center: [24.5, -78.5] as [number, number],
          zoom: 6,
          desc_es: 'Plataforma carbonatada somera (< 20m) delineada en cian con etiqueta en aguas exteriores.',
          desc_en: 'Shallow carbonate shelf (< 20m) delineated in cyan with outside arrow.',
          polygons: [
            {
              positions: [
                [26.5, -79.2], [26.5, -77.0], [24.5, -76.5], [23.0, -75.8], [22.2, -77.5], [24.0, -79.3]
              ] as [number, number][],
              color: '#06b6d4',
              fillColor: '#06b6d4',
              fillOpacity: 0.28,
              weight: 2.5,
              label: isEs ? 'Plataforma de las Bahamas' : 'Bahamas Shelf'
            }
          ] as MapPolygonData[],
          markers: [
            {
              lat: 24.5,
              lng: -77.5,
              title: isEs ? 'Plataforma Somera' : 'Shallow Shelf',
              sublabel: '0 a -200 m',
              color: '#06b6d4',
              arrowColor: '#ef4444',
              offsetDirection: 'bottom-right' as const,
            }
          ] as MapMarkerData[]
        },
        {
          name_es: 'Mar del Norte y Canal de la Mancha',
          name_en: 'North Sea & English Channel',
          center: [55.0, 3.5] as [number, number],
          zoom: 5.5,
          desc_es: 'Plataforma continental europea somera con profundidades de 30 a 100m.',
          desc_en: 'European shallow continental shelf averaging 30 to 100 meters.',
          polygons: [
            {
              positions: [
                [57.5, 1.5], [57.5, 6.5], [53.5, 7.0], [51.5, 2.8], [53.0, 0.5]
              ] as [number, number][],
              color: '#06b6d4',
              fillColor: '#06b6d4',
              fillOpacity: 0.22,
              weight: 2.5,
              label: isEs ? 'Plataforma del Mar del Norte' : 'North Sea Shelf'
            }
          ] as MapPolygonData[],
          markers: [
            {
              lat: 55.0,
              lng: 3.5,
              title: isEs ? 'Aguas Someras Mar del Norte' : 'North Sea Waters',
              sublabel: '30 a 100 m',
              color: '#06b6d4',
              arrowColor: '#ef4444',
              offsetDirection: 'bottom-right' as const,
            }
          ] as MapMarkerData[]
        }
      ]
    },
    {
      id: 2,
      color: '#16a34a',
      name_es: 'Llanuras Costeras y Tierras Bajas',
      name_en: 'Coastal Plains & Lowlands',
      range: '0 a 200 m',
      rule_es: '¡VERDE = ALTITUD BAJA! (0 a 200m). No representa selva, hierba ni clima húmedo.',
      rule_en: 'GREEN = LOW ELEVATION! (0 to 200m). Does NOT indicate trees or vegetation.',
      examples: [
        {
          name_es: 'Delta del Nilo y Costa de Egipto (0 a 50m)',
          name_en: 'Nile Delta & Coast of Egypt (0 to 50m)',
          center: [30.8, 31.2] as [number, number],
          zoom: 7,
          desc_es: 'El polígono verde encierra el delta de baja altitud. La etiqueta flota en el mar para que el delta sea 100% visible.',
          desc_en: 'The green polygon outlines the low elevation delta with outside label in the sea.',
          polygons: [
            {
              positions: [
                [30.05, 31.25], [31.35, 29.8], [31.65, 31.3], [31.3, 32.3]
              ] as [number, number][],
              color: '#10b981',
              fillColor: '#10b981',
              fillOpacity: 0.24,
              weight: 3,
              label: isEs ? 'Delta del Nilo (0 a 50m)' : 'Nile Delta (0 to 50m)'
            }
          ] as MapPolygonData[],
          markers: [
            {
              lat: 31.65,
              lng: 31.2,
              title: isEs ? 'Tierras Bajas del Nilo (0 – 50 m)' : 'Nile Lowlands (0 – 50 m)',
              color: '#10b981',
              offsetDirection: 'top' as const,
            }
          ] as MapMarkerData[]
        },
        {
          name_es: 'Llanura del Amazonas (Brasil Central)',
          name_en: 'Amazon Lowland Basin (Central Brazil)',
          center: [-3.1, -60.0] as [number, number],
          zoom: 6,
          desc_es: 'Cuenca sedimentaria a menos de 100m sobre el nivel del mar delimitada con polígono.',
          desc_en: 'Sedimentary basin under 100m elevation outlined by polygon.',
          polygons: [
            {
              positions: [
                [-1.0, -63.5], [-1.0, -57.5], [-4.5, -57.0], [-5.0, -63.0]
              ] as [number, number][],
              color: '#10b981',
              fillColor: '#10b981',
              fillOpacity: 0.22,
              weight: 2.5,
              label: isEs ? 'Cuenca Amazónica Baja' : 'Amazon Lowland'
            }
          ] as MapPolygonData[],
          markers: [
            {
              lat: -3.1,
              lng: -60.0,
              title: isEs ? 'Llanura Aluvial Amazónica' : 'Amazon Lowland Basin',
              sublabel: '0 – 100 m',
              color: '#10b981',
              arrowColor: '#ef4444',
              offsetDirection: 'bottom-right' as const,
            }
          ] as MapMarkerData[]
        },
        {
          name_es: 'Países Bajos (Polders bajo nivel del mar)',
          name_en: 'Netherlands (Polders at sea level)',
          center: [52.3, 5.2] as [number, number],
          zoom: 7,
          desc_es: 'Terrenos ganados al mar entre -6m y +10m de altitud.',
          desc_en: 'Reclaimed coastal polder land between -6m and +10m elevation.',
          polygons: [
            {
              positions: [
                [53.5, 4.8], [53.4, 7.2], [51.4, 6.2], [51.2, 3.4], [52.8, 4.5]
              ] as [number, number][],
              color: '#10b981',
              fillColor: '#10b981',
              fillOpacity: 0.24,
              weight: 2.5,
              label: isEs ? 'Polders de los Países Bajos' : 'Netherlands Polders'
            }
          ] as MapPolygonData[],
          markers: [
            {
              lat: 52.3,
              lng: 5.2,
              title: isEs ? 'Polders Holandeses' : 'Dutch Polders',
              sublabel: '-6 a +10 m',
              color: '#10b981',
              arrowColor: '#ef4444',
              offsetDirection: 'bottom-right' as const,
            }
          ] as MapMarkerData[]
        }
      ]
    },
    {
      id: 3,
      color: '#eab308',
      name_es: 'Mesetas, Colinas y Piedemontes',
      name_en: 'Plateaus, Foothills & Tablelands',
      range: '200 a 1,000 m',
      rule_es: 'Amarillo y ocre = tierras intermedias, altiplanicies y colinas onduladas.',
      rule_en: 'Yellow and ochre = intermediate tablelands and hills.',
      examples: [
        {
          name_es: 'Meseta Central Española (Madrid y Castilla)',
          name_en: 'Spanish Meseta Central (Madrid & Castile)',
          center: [40.4, -3.7] as [number, number],
          zoom: 6,
          desc_es: 'Altiplanicie central con altitud media de 650m enmarcada en ocre sin tapar las ciudades.',
          desc_en: 'Central tableland averaging 650m framed in ochre without covering cities.',
          polygons: [
            {
              positions: [
                [42.2, -5.5], [42.4, -3.0], [40.8, -1.8], [39.0, -3.0], [39.0, -5.5], [40.5, -6.5]
              ] as [number, number][],
              color: '#eab308',
              fillColor: '#eab308',
              fillOpacity: 0.22,
              weight: 2.5,
              label: isEs ? 'Meseta Central' : 'Meseta Central'
            }
          ] as MapPolygonData[],
          markers: [
            {
              lat: 40.4,
              lng: -3.7,
              title: isEs ? 'Meseta Central' : 'Meseta Central',
              sublabel: '650 m',
              color: '#eab308',
              arrowColor: '#ef4444',
              offsetDirection: 'bottom-right' as const,
            }
          ] as MapMarkerData[]
        },
        {
          name_es: 'Altiplano Brasileño (Planalto Central)',
          name_en: 'Brazilian Highlands (Planalto Central)',
          center: [-15.8, -47.9] as [number, number],
          zoom: 6,
          desc_es: 'Extensa meseta entre 500 y 900 metros de altitud.',
          desc_en: 'Broad tableland between 500m and 900m elevation.',
          polygons: [
            {
              positions: [
                [-13.0, -50.5], [-13.0, -45.0], [-18.5, -45.0], [-18.5, -50.5]
              ] as [number, number][],
              color: '#eab308',
              fillColor: '#eab308',
              fillOpacity: 0.22,
              weight: 2.5,
              label: isEs ? 'Planalto Central' : 'Brazilian Highlands'
            }
          ] as MapPolygonData[],
          markers: [
            {
              lat: -15.8,
              lng: -47.9,
              title: isEs ? 'Altiplano Brasileño' : 'Brazilian Highlands',
              sublabel: '500 – 900 m',
              color: '#eab308',
              arrowColor: '#ef4444',
              offsetDirection: 'bottom-right' as const,
            }
          ] as MapMarkerData[]
        },
        {
          name_es: 'Meseta del Colorado (Grand Canyon, EE.UU.)',
          name_en: 'Colorado Plateau (Grand Canyon, USA)',
          center: [36.1, -111.5] as [number, number],
          zoom: 6,
          desc_es: 'Altiplanicie cortada por cañones fluviales.',
          desc_en: 'Sandstone plateau dissected by river canyons.',
          polygons: [
            {
              positions: [
                [38.8, -113.2], [38.8, -108.2], [34.5, -108.2], [34.5, -113.2]
              ] as [number, number][],
              color: '#eab308',
              fillColor: '#eab308',
              fillOpacity: 0.22,
              weight: 2.5,
              label: isEs ? 'Meseta del Colorado' : 'Colorado Plateau'
            }
          ] as MapPolygonData[],
          markers: [
            {
              lat: 36.1,
              lng: -111.5,
              title: isEs ? 'Meseta del Colorado' : 'Colorado Plateau',
              sublabel: '1,000 m',
              color: '#eab308',
              arrowColor: '#ef4444',
              offsetDirection: 'bottom-right' as const,
            }
          ] as MapMarkerData[]
        }
      ]
    },
    {
      id: 4,
      color: '#92400e',
      name_es: 'Altas Cordilleras Montañosas',
      name_en: 'Rugged Mountain Cordilleras',
      range: '1,000 a 3,500 m',
      rule_es: 'Marrón terroso = escarpes empinados, valles escarpados y cadenas montañosas.',
      rule_en: 'Earthy brown = steep rugged mountain relief.',
      examples: [
        {
          name_es: 'Cordillera de los Andes (Perú / Bolivia)',
          name_en: 'Andes Cordillera (Peru / Bolivia)',
          center: [-13.5, -73.0] as [number, number],
          zoom: 6,
          desc_es: 'La cordillera continental más larga del planeta delimitada con polígono marrón terroso y llamada exterior.',
          desc_en: 'Longest continental mountain range with brown relief polygon and outside leader arrow.',
          polygons: [
            {
              positions: [
                [-11.0, -75.8], [-12.5, -71.8], [-16.0, -70.0], [-17.5, -71.8], [-14.5, -74.8], [-12.0, -76.8]
              ] as [number, number][],
              color: '#92400e',
              fillColor: '#92400e',
              fillOpacity: 0.3,
              weight: 3,
              label: isEs ? 'Cinturón Andino' : 'Andean Cordillera'
            }
          ] as MapPolygonData[],
          markers: [
            {
              lat: -13.5,
              lng: -73.0,
              title: isEs ? 'Cordillera Andina' : 'Andean Cordillera',
              sublabel: '1,000 – 3,500 m',
              color: '#92400e',
              arrowColor: '#ef4444',
              offsetDirection: 'bottom-right' as const,
            }
          ] as MapMarkerData[]
        },
        {
          name_es: 'Alpes Europeos (Suiza, Austria, Italia)',
          name_en: 'European Alps (Switzerland, Austria, Italy)',
          center: [46.5, 9.5] as [number, number],
          zoom: 7,
          desc_es: 'Arco alpino con picos escarpados enmarcado con polígono y etiqueta exterior al norte.',
          desc_en: 'Alpine arc with rugged topography framed with polygon and outside arrow.',
          polygons: [
            {
              positions: [
                [45.2, 6.8], [46.2, 6.5], [47.4, 9.8], [47.6, 13.5], [46.2, 14.5], [45.8, 11.2], [44.5, 7.2]
              ] as [number, number][],
              color: '#92400e',
              fillColor: '#92400e',
              fillOpacity: 0.3,
              weight: 3,
              label: isEs ? 'Arco de los Alpes' : 'Alpine Arc'
            }
          ] as MapPolygonData[],
          markers: [
            {
              lat: 46.5,
              lng: 9.5,
              title: isEs ? 'Alpes Centrales' : 'Central Alps',
              sublabel: '1,000 – 3,500 m',
              color: '#92400e',
              arrowColor: '#ef4444',
              offsetDirection: 'bottom-right' as const,
            }
          ] as MapMarkerData[]
        },
        {
          name_es: 'Montañas Rocosas (América del Norte)',
          name_en: 'Rocky Mountains (North America)',
          center: [39.7, -106.0] as [number, number],
          zoom: 6,
          desc_es: 'Columna montañosa de Norteamérica delineada con polígono.',
          desc_en: 'North American alpine crest delineated by boundary polygon.',
          polygons: [
            {
              positions: [
                [41.5, -107.5], [41.5, -105.0], [37.5, -104.5], [37.5, -107.5]
              ] as [number, number][],
              color: '#92400e',
              fillColor: '#92400e',
              fillOpacity: 0.3,
              weight: 3,
              label: isEs ? 'Montañas Rocosas' : 'Rocky Mountains'
            }
          ] as MapPolygonData[],
          markers: [
            {
              lat: 39.7,
              lng: -106.0,
              title: isEs ? 'Montañas Rocosas' : 'Rocky Mountains',
              sublabel: '1,000 – 3,500 m',
              color: '#92400e',
              arrowColor: '#ef4444',
              offsetDirection: 'bottom-right' as const,
            }
          ] as MapMarkerData[]
        }
      ]
    },
    {
      id: 5,
      color: '#f8fafc',
      name_es: 'Cimas Glaciares y Nieves Perpetuas',
      name_en: 'Glaciated Summits & Perennial Snow',
      range: '> 3,500 m',
      rule_es: 'Blanco puro = altitud tan extrema que la nieve y hielo permanecen congelados todo el año.',
      rule_en: 'Pure white = glaciated summits where snow remains frozen year-round.',
      examples: [
        {
          name_es: 'Himalaya y Monte Everest (8,848 m)',
          name_en: 'Himalayas & Mount Everest (8,848 m)',
          center: [27.9881, 86.925] as [number, number],
          zoom: 7,
          desc_es: 'Cumbre más alta del planeta con retícula abierta y polígono de cúpula glaciar.',
          desc_en: 'Highest terrestrial summit with open reticle and glacial polygon.',
          polygons: [
            {
              positions: [
                [28.05, 86.82], [28.05, 87.03], [27.92, 87.03], [27.92, 86.82]
              ] as [number, number][],
              color: '#f8fafc',
              fillColor: '#f8fafc',
              fillOpacity: 0.35,
              weight: 2.5,
              label: isEs ? 'Macizo Glaciar del Everest' : 'Everest Glacial Massif'
            }
          ] as MapPolygonData[],
          markers: [
            {
              lat: 27.9881,
              lng: 86.925,
              title: isEs ? 'Monte Everest' : 'Mount Everest',
              sublabel: '8,848 m',
              color: '#f8fafc',
              arrowColor: '#ef4444',
              offsetDirection: 'bottom-right' as const,
            }
          ] as MapMarkerData[]
        },
        {
          name_es: 'Monte Aconcagua (6,961 m, Andes)',
          name_en: 'Mount Aconcagua (6,961 m, Andes)',
          center: [-32.6532, -70.0109] as [number, number],
          zoom: 7,
          desc_es: 'Cumbre más alta de América con polígono glaciar y flecha exterior.',
          desc_en: 'Highest peak in the Americas with glacial polygon and outside leader arrow.',
          polygons: [
            {
              positions: [
                [-32.58, -70.08], [-32.58, -69.94], [-32.72, -69.94], [-32.72, -70.08]
              ] as [number, number][],
              color: '#f8fafc',
              fillColor: '#f8fafc',
              fillOpacity: 0.35,
              weight: 2.5,
              label: isEs ? 'Macizo del Aconcagua' : 'Aconcagua Massif'
            }
          ] as MapPolygonData[],
          markers: [
            {
              lat: -32.6532,
              lng: -70.0109,
              title: isEs ? 'Monte Aconcagua' : 'Mount Aconcagua',
              sublabel: '6,961 m',
              color: '#f8fafc',
              arrowColor: '#ef4444',
              offsetDirection: 'bottom-right' as const,
            }
          ] as MapMarkerData[]
        },
        {
          name_es: 'Mont Blanc (4,808 m, Alpes)',
          name_en: 'Mont Blanc (4,808 m, Alps)',
          center: [45.8326, 6.8652] as [number, number],
          zoom: 8,
          desc_es: 'Cúpula glaciar más alta de Europa Occidental.',
          desc_en: 'Highest glaciated dome in Western Europe.',
          polygons: [
            {
              positions: [
                [45.87, 6.80], [45.87, 6.93], [45.79, 6.93], [45.79, 6.80]
              ] as [number, number][],
              color: '#f8fafc',
              fillColor: '#f8fafc',
              fillOpacity: 0.35,
              weight: 2.5,
              label: isEs ? 'Glaciar del Mont Blanc' : 'Mont Blanc Glacier'
            }
          ] as MapPolygonData[],
          markers: [
            {
              lat: 45.8326,
              lng: 6.8652,
              title: isEs ? 'Mont Blanc' : 'Mont Blanc',
              sublabel: '4,808 m',
              color: '#f8fafc',
              arrowColor: '#ef4444',
              offsetDirection: 'bottom-right' as const,
            }
          ] as MapMarkerData[]
        }
      ]
    }
  ];

  const currentZone = elevationZones[activeElevationZone];
  const safeExampleIndex = Math.min(selectedExampleIndex, currentZone.examples.length - 1);
  const activeExample = currentZone.examples[safeExampleIndex];

  return (
    <div className="flex flex-col lg:flex-row h-full w-full overflow-hidden">
      {/* ==================================================================== */}
      {/* LEFT ZONE: MAP STAGE (TWO-THIRDS OF SCREEN, 100% HEIGHT, FIXED)       */}
      {/* ==================================================================== */}
      <div className="w-full lg:w-[65%] xl:w-[68%] h-[55vh] min-h-[460px] lg:h-full lg:min-h-0 p-2 sm:p-3 flex flex-col bg-slate-950/80 border-b lg:border-b-0 lg:border-r border-slate-800 shrink-0 gap-2">
        
        {/* COMPACT CROSS-SECTION PROFILE HUD DOCKED AT TOP OF THE MAP */}
        <div className="relative w-full h-24 sm:h-28 bg-slate-900 rounded-xl overflow-hidden border border-slate-800 shrink-0 shadow-inner">
          <svg viewBox="0 0 960 220" className="w-full h-full select-none" preserveAspectRatio="none">
            <rect width="960" height="220" fill="#090d16" />
            <line x1="0" y1="130" x2="350" y2="130" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="4 2" />
            <text x="10" y="124" fill="#38bdf8" fontSize="11" fontWeight="bold">0 m ({isEs ? 'Nivel del Mar' : 'Sea Level'})</text>

            {/* Zone 0: Trench */}
            <polygon
              points="0,130 0,220 160,220 130,190 90,155"
              fill="#082f49"
              stroke={activeElevationZone === 0 ? '#38bdf8' : 'none'}
              strokeWidth="3"
              className="cursor-pointer hover:opacity-90 transition-all"
              onClick={() => { setActiveElevationZone(0); setSelectedExampleIndex(0); }}
            />
            <text x="15" y="200" fill="#93c5fd" fontSize="11" fontWeight="bold">&lt; -4,000m</text>

            {/* Zone 1: Shelf */}
            <polygon
              points="90,155 130,190 220,175 270,145 290,130 0,130"
              fill="#06b6d4"
              fillOpacity="0.8"
              stroke={activeElevationZone === 1 ? '#ffffff' : 'none'}
              strokeWidth="2.5"
              className="cursor-pointer hover:opacity-90 transition-all"
              onClick={() => { setActiveElevationZone(1); setSelectedExampleIndex(0); }}
            />
            <text x="120" y="150" fill="#082f49" fontSize="11" fontWeight="bold">0 a -200m</text>

            {/* Zone 2: Lowland */}
            <polygon
              points="290,130 430,120 470,105 470,220 290,220"
              fill="#16a34a"
              stroke={activeElevationZone === 2 ? '#facc15' : 'none'}
              strokeWidth="3.5"
              className="cursor-pointer hover:opacity-90 transition-all"
              onClick={() => { setActiveElevationZone(2); setSelectedExampleIndex(0); }}
            />
            <text x="320" y="115" fill="#f0fdf4" fontSize="12" fontWeight="black">0 – 200m ({isEs ? 'Verde' : 'Green'})</text>

            {/* Zone 3: Plateau */}
            <polygon
              points="470,105 560,90 620,70 620,220 470,220"
              fill="#eab308"
              stroke={activeElevationZone === 3 ? '#ffffff' : 'none'}
              strokeWidth="2.5"
              className="cursor-pointer hover:opacity-90 transition-all"
              onClick={() => { setActiveElevationZone(3); setSelectedExampleIndex(0); }}
            />
            <text x="495" y="85" fill="#422006" fontSize="11" fontWeight="bold">200 – 1,000m</text>

            {/* Zone 4: Mountains */}
            <polygon
              points="620,70 720,35 760,20 780,45 820,18 840,55 840,220 620,220"
              fill="#92400e"
              stroke={activeElevationZone === 4 ? '#facc15' : 'none'}
              strokeWidth="3"
              className="cursor-pointer hover:opacity-90 transition-all"
              onClick={() => { setActiveElevationZone(4); setSelectedExampleIndex(0); }}
            />
            <text x="655" y="55" fill="#fef3c7" fontSize="11" fontWeight="bold">1,000 – 3,500m</text>

            {/* Zone 5: Glacier Peaks */}
            <polygon
              points="750,25 760,20 770,35 810,22 820,18 830,30"
              fill="#f8fafc"
              stroke="#ffffff"
              strokeWidth="1.5"
              className="cursor-pointer"
              onClick={() => { setActiveElevationZone(5); setSelectedExampleIndex(0); }}
            />
            <text x="735" y="14" fill="#f8fafc" fontSize="11" fontWeight="black">&gt; 3,500m ★</text>
          </svg>
        </div>

        {/* Real Leaflet Physical Map taking full remaining height */}
        <div className="flex-1 w-full min-h-[320px] lg:min-h-0 flex flex-col">
          <RealLeafletViewer
            lens={showMythbusterComparison ? mythbusterLens : "physical"}
            center={showMythbusterComparison ? [31.0, 31.2] : activeExample.center}
            zoom={showMythbusterComparison ? 7 : activeExample.zoom}
            polygons={showMythbusterComparison ? [
              {
                positions: [[30.05, 31.25], [31.35, 29.8], [31.65, 31.3], [31.3, 32.3]] as [number, number][],
                color: mythbusterLens === 'physical' ? '#10b981' : '#f59e0b',
                fillColor: mythbusterLens === 'physical' ? '#10b981' : '#f59e0b',
                fillOpacity: 0.22,
                weight: 3,
                label: isEs ? 'Delta del Nilo' : 'Nile Delta'
              }
            ] : activeExample.polygons}
            markers={showMythbusterComparison ? [
              { lat: 31.65, lng: 31.2, title: isEs ? 'Delta del Nilo (0 a 50m)' : 'Nile Delta (0 to 50m)', color: mythbusterLens === 'physical' ? '#10b981' : '#f59e0b', offsetDirection: 'top' as const },
              { lat: 30.0444, lng: 31.2357, title: isEs ? 'El Cairo (★)' : 'Cairo (★)', isCapital: true, offsetDirection: 'bottom-right' as const }
            ] : activeExample.markers}
            heightClass="h-full w-full"
            interactive={true}
            hideHeader={true}
            caption={showMythbusterComparison ? (isEs ? 'El delta se colorea de verde por su baja cota (0-50m), no por vegetación.' : 'The delta is colored green solely due to sea-level elevation.') : (isEs ? activeExample.desc_es : activeExample.desc_en)}
            currentLang={currentLang}
          />
        </div>
      </div>

      {/* ==================================================================== */}
      {/* RIGHT ZONE: INTERACTIVE & THEORY DECK (ONE-THIRD, INDEPENDENT SCROLL)  */}
      {/* ==================================================================== */}
      <div className="w-full lg:w-[35%] xl:w-[32%] h-full flex flex-col overflow-y-auto p-4 sm:p-5 space-y-4 bg-slate-900/90 touch-scroll">
        
        {/* Book Chapter Header */}
        <div className="flex items-center justify-between text-xs font-mono">
          <span className="px-2.5 py-1 rounded-full bg-sky-500/20 text-sky-300 font-bold border border-sky-500/30 flex items-center gap-1.5">
            <span>📖</span>
            <span>{isEs ? `Capítulo ${chapterNumber} de ${totalChapters}` : `Chapter ${chapterNumber} of ${totalChapters}`}</span>
          </span>
          <span className="text-slate-400 font-semibold">
            {isEs ? '2. Relieve Físico e Hipsometría' : '2. Physical Relief & Hypsometry'}
          </span>
        </div>

        {/* Guided Definition Box */}
        <div className="p-4 rounded-xl bg-gradient-to-br from-sky-950/80 via-slate-900 to-slate-950 border border-sky-500/30 shadow-lg space-y-2.5">
          <div className="flex items-center gap-2 text-sky-300 font-bold text-sm">
            <span className="text-lg">🗺️</span>
            <h3>{isEs ? 'Definición de Mapa Físico' : 'Definition of Physical Map'}</h3>
          </div>
          
          <p className="text-xs text-sky-100 font-medium leading-relaxed">
            {isEs
              ? 'Estás viendo a la izquierda un mapa físico con escala hipsométrica. En él se pueden identificar:'
              : 'You are looking at a physical map with a hypsometric scale on the left. In it, you can identify:'}
          </p>

          <ul className="text-xs text-sky-200/90 space-y-1.5 pl-2 border-l-2 border-sky-500/40 font-normal">
            <li>
              <strong className="text-emerald-300">1. {isEs ? 'Llanuras y Tierras Bajas (Verde: 0 a 200 m):' : 'Lowlands & Plains (Green: 0 to 200 m):'}</strong>{' '}
              {isEs ? '¡Indica baja altitud sobre el mar, NO selva ni bosque!' : 'Indicates low elevation, NOT forests or vegetation!'}
            </li>
            <li>
              <strong className="text-yellow-300">2. {isEs ? 'Mesetas y Valles Interiores (Amarillo: 200 a 1,000 m):' : 'Plateaus & Intermontane Basins (Yellow: 200 to 1,000 m):'}</strong>{' '}
              {isEs ? 'Relieves llanos elevados sobre el nivel del mar.' : 'Flat elevated landforms above sea level.'}
            </li>
            <li>
              <strong className="text-amber-500">3. {isEs ? 'Cordilleras y Montañas Rugosas (Marrón: 1,000 a 3,500 m):' : 'Mountain Chains & Rugged Relief (Brown: 1,000 to 3,500 m):'}</strong>{' '}
              {isEs ? 'Escarpes empinados y cadenas montañosas continentales.' : 'Steep rugged slopes and continental belts.'}
            </li>
            <li>
              <strong className="text-white">4. {isEs ? 'Altas Cumbres Glaciares (Blanco: > 3,500 m):' : 'Glaciated Summits (White: > 3,500 m):'}</strong>{' '}
              {isEs ? 'Picos cubiertos por nieve perpetua y campos de hielo.' : 'Highest peaks blanketed in permanent snow and ice.'}
            </li>
            <li>
              <strong className="text-cyan-300">5. {isEs ? 'Plataforma Continental (Celeste: 0 a -200 m):' : 'Continental Shelf (Light Cyan: 0 to -200 m):'}</strong>{' '}
              {isEs ? 'Aguas marinas someras que bordean los continentes.' : 'Shallow marine waters fringing landmasses.'}
            </li>
            <li>
              <strong className="text-blue-400">6. {isEs ? 'Fosas Oceánicas Abisales (Azul Marino: < -4,000 m):' : 'Abyssal Ocean Trenches (Deep Navy: < -4,000 m):'}</strong>{' '}
              {isEs ? 'Las mayores depresiones y fosas submarinas del planeta.' : 'Deepest subsea depressions on Earth.'}
            </li>
          </ul>

          <div className="pt-2 text-xs font-bold text-amber-300 flex items-center gap-1.5 border-t border-sky-500/20">
            <span>👉</span>
            <span>
              {isEs
                ? 'Haz clic en los botones de abajo para que observes en el mapa cada uno de ellos:'
                : 'Click the buttons below to observe each one on the map:'}
            </span>
          </div>
        </div>

        {/* Mythbuster Action Button */}
        <button
          type="button"
          onClick={() => setShowMythbusterComparison(!showMythbusterComparison)}
          className={`w-full p-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-between border ${
            showMythbusterComparison
              ? 'bg-amber-400 text-slate-950 border-amber-300 shadow-md'
              : 'bg-slate-950 text-amber-300 border-amber-500/30 hover:bg-slate-800'
          }`}
        >
          <div className="flex items-center gap-1.5">
            <AlertTriangle className="w-4 h-4 shrink-0" />
            <span>{isEs ? 'Laboratorio: ¿Verde significa Selva?' : 'Lab: Does Green Mean Jungle?'}</span>
          </div>
          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-black/20">
            {showMythbusterComparison ? (isEs ? 'Activo' : 'Active') : (isEs ? 'Probar' : 'Test')}
          </span>
        </button>

        {showMythbusterComparison && (
          <div className="p-3 rounded-xl bg-slate-950 border border-amber-500/30 space-y-2">
            <span className="text-[11px] text-amber-300 font-bold block">
              {isEs ? 'Alterna la capa en vivo en el mapa:' : 'Toggle map layer live:'}
            </span>
            <div className="grid grid-cols-2 gap-1.5">
              <button
                type="button"
                onClick={() => setMythbusterLens('physical')}
                className={`p-1.5 text-xs font-bold rounded-lg border transition-all ${
                  mythbusterLens === 'physical'
                    ? 'bg-emerald-600 text-white border-emerald-400'
                    : 'bg-slate-900 text-slate-400 border-slate-800'
                }`}
              >
                🗺️ {isEs ? 'Físico (Verde)' : 'Physical (Green)'}
              </button>
              <button
                type="button"
                onClick={() => setMythbusterLens('satellite')}
                className={`p-1.5 text-xs font-bold rounded-lg border transition-all ${
                  mythbusterLens === 'satellite'
                    ? 'bg-amber-500 text-slate-950 border-amber-400'
                    : 'bg-slate-900 text-slate-400 border-slate-800'
                }`}
              >
                🛰️ {isEs ? 'Satélite (Arena)' : 'Satellite (Sand)'}
              </button>
            </div>
          </div>
        )}

        {/* 6 Elevation Tiers Selector with Inline Accordion Definitions & Examples */}
        <div className="space-y-1.5">
          <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider block">
            {isEs ? 'Niveles de Altitud y Batimetría:' : 'Elevation & Bathymetry Tiers:'}
          </span>
          <div className="flex flex-col gap-2">
            {elevationZones.map((zone) => {
              const isSelected = activeElevationZone === zone.id && !showMythbusterComparison;
              return (
                <div key={zone.id} className="rounded-xl border border-slate-800 overflow-hidden bg-slate-950 transition-all">
                  <button
                    type="button"
                    onClick={() => {
                      setShowMythbusterComparison(false);
                      setActiveElevationZone(zone.id);
                      setSelectedExampleIndex(0);
                    }}
                    className={`w-full p-2.5 text-left transition-all flex items-center justify-between ${
                      isSelected
                        ? 'border-amber-400 bg-slate-900 ring-1 ring-amber-400/40 text-white shadow-md'
                        : 'border-transparent bg-slate-950/70 text-slate-300 hover:text-white hover:bg-slate-800/80'
                    }`}
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="w-3.5 h-3.5 rounded-full border border-white/50 shrink-0 shadow-sm" style={{ backgroundColor: zone.color }} />
                      <span className="text-xs font-bold truncate">{isEs ? zone.name_es : zone.name_en}</span>
                    </div>
                    <div className="flex items-center gap-1.5 shrink-0">
                      <span className="text-[10px] font-mono text-amber-300 font-bold">{zone.range}</span>
                      <span className="text-[10px] text-slate-400">{isSelected ? '▼' : '▶'}</span>
                    </div>
                  </button>

                  {/* Inline Definition & Planetary Examples (Unfolds immediately under this clicked zone) */}
                  {isSelected && (
                    <div className="p-3 bg-slate-950 border-t border-slate-800 space-y-2.5 animate-in fade-in duration-150">
                      {/* Rule / Definition */}
                      <div className="p-2.5 rounded-lg bg-sky-950/30 border border-sky-500/30 text-xs text-sky-200 leading-relaxed">
                        <strong className="text-sky-300 block mb-0.5">{isEs ? 'Regla Cartográfica:' : 'Cartographic Rule:'}</strong>
                        {isEs ? zone.rule_es : zone.rule_en}
                      </div>

                      {/* Planetary Examples for this Zone */}
                      <div className="space-y-1.5">
                        <span className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-wider block">
                          {isEs ? 'Ejemplos en la Tierra (Haz clic para volar):' : 'Planetary Examples (Click to Fly):'}
                        </span>
                        <div className="flex flex-col gap-1.5">
                          {zone.examples.map((ex, idx) => (
                            <button
                              key={idx}
                              type="button"
                              onClick={() => setSelectedExampleIndex(idx)}
                              className={`p-2 rounded-lg text-left text-xs font-semibold transition-all border ${
                                safeExampleIndex === idx
                                  ? 'bg-sky-600 text-white border-sky-400 shadow'
                                  : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800'
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <span className="truncate">{idx + 1}. {isEs ? ex.name_es : ex.name_en}</span>
                                <span className="text-[10px] text-sky-200 shrink-0 ml-1">✈ {isEs ? 'Ver mapa' : 'View'}</span>
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Applications */}
        <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1.5">
          <span className="text-[11px] font-mono font-bold text-sky-400 uppercase tracking-wider block">
            {isEs ? 'Aplicaciones Prácticas:' : 'Key Applications:'}
          </span>
          <ul className="text-xs text-slate-300 space-y-1 list-disc list-inside leading-relaxed">
            <li><strong>{isEs ? 'Alpinismo y Rutas:' : 'Mountaineering:'}</strong> {isEs ? 'Puertos y desniveles.' : 'Passes and elevation gradients.'}</li>
            <li><strong>{isEs ? 'Hidroeléctrica:' : 'Hydro Dams:'}</strong> {isEs ? 'Calcular caída de agua.' : 'Calculating head drop.'}</li>
            <li><strong>{isEs ? 'Calado Naval:' : 'Navigation:'}</strong> {isEs ? 'Evitar encallamientos en plataforma.' : 'Preventing grounding.'}</li>
          </ul>
        </div>

        {/* Guided Book Navigation Footer */}
        <div className="pt-3 border-t border-slate-800 flex items-center justify-between gap-2 mt-auto">
          {onPrevChapter ? (
            <button
              type="button"
              onClick={onPrevChapter}
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              <span>←</span>
              <span>{isEs ? 'Capítulo 1: Político' : 'Chapter 1: Political'}</span>
            </button>
          ) : (
            <div />
          )}

          <span className="text-[11px] font-mono text-slate-400 font-bold">
            {isEs ? `Página ${chapterNumber} de ${totalChapters}` : `Page ${chapterNumber} of ${totalChapters}`}
          </span>

          {onNextChapter && (
            <button
              type="button"
              onClick={onNextChapter}
              className="px-3.5 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold flex items-center gap-1.5 shadow-md transition-all active:scale-95"
            >
              <span>{isEs ? 'Capítulo 3: Satélite Real' : 'Chapter 3: Real Satellite'}</span>
              <span>→</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// 3. REAL SATELLITE SENSOR & ALBEDO EXHIBIT (TWO-ZONE SANDBOX)
// ============================================================================
export const SatelliteAlbedoVisualExhibit: React.FC<VisualExhibitProps> = ({
  currentLang,
  onNextChapter,
  onPrevChapter,
  chapterNumber = 3,
  totalChapters = 4,
}) => {
  const isEs = currentLang === 'es';
  const [activePreset, setActivePreset] = useState<'desert' | 'rainforest' | 'deforestation' | 'sediment' | 'salt'>('desert');

  const satellitePresets = {
    desert: {
      center: [28.0, 5.0] as [number, number],
      zoom: 6,
      name_es: 'Desierto del Sáhara y Erg Chebbi',
      name_en: 'Sahara Desert & Erg Sand Seas',
      polygons: [
        { positions: [[29.2, 3.5], [29.2, 6.5], [26.5, 6.5], [26.5, 3.5]] as [number, number][], color: '#f59e0b', fillColor: '#f59e0b', fillOpacity: 0.18, weight: 2.5, label: isEs ? 'Mar de Arena' : 'Sand Dunes' }
      ] as MapPolygonData[],
      markers: [
        { lat: 28.0, lng: 5.0, title: 'Mar de Dunas', sublabel: isEs ? 'Albedo Dorado de Cuarzo' : 'Golden Quartz Albedo', color: '#f59e0b', arrowColor: '#ef4444', offsetDirection: 'bottom-right' as const }
      ] as MapMarkerData[],
      desc_es: 'El satélite registra la reflectancia del cuarzo y minerales secos. El polígono dorado delimita las dunas sin tapar los barjanes.',
      desc_en: 'The satellite captures quartz reflectance. The golden polygon frames dunes without obscuring barchans.'
    },
    rainforest: {
      center: [-3.13, -59.90] as [number, number],
      zoom: 8,
      name_es: 'Canopia Viva de la Amazonía y Encuentro de las Aguas',
      name_en: 'Living Amazon Canopy & Meeting of the Waters',
      polygons: [] as MapPolygonData[],
      markers: [
        { lat: -3.13, lng: -59.90, title: isEs ? 'Encuentro de las Aguas' : 'Meeting of the Waters', sublabel: isEs ? 'Río Negro y Solimões' : 'Negro & Solimões Rivers', color: '#10b981', arrowColor: '#ef4444', offsetDirection: 'bottom-right' as const }
      ] as MapMarkerData[],
      desc_es: 'La etiqueta se ubica con flecha roja apuntando a la confluencia, dejando ver con total nitidez el contraste entre el agua oscura del Río Negro y el agua marrón arcillosa del Solimões.',
      desc_en: 'The label sits with an intense red arrow pointing to the confluence, leaving the water contrast 100% visible.'
    },
    deforestation: {
      center: [-10.8, -62.5] as [number, number],
      zoom: 8,
      name_es: 'Deforestación en Espina de Pez (Rondônia, Brasil)',
      name_en: 'Fishbone Clearcutting (Rondônia, Brazil)',
      polygons: [
        { positions: [[-10.0, -63.5], [-10.0, -61.5], [-11.5, -61.5], [-11.5, -63.5]] as [number, number][], color: '#ef4444', fillColor: '#ef4444', fillOpacity: 0.16, weight: 2.5, label: isEs ? 'Corredores de Tala' : 'Clearcutting' }
      ] as MapPolygonData[],
      markers: [
        { lat: -10.8, lng: -62.5, title: isEs ? 'Espina de Pez' : 'Fishbone Pattern', sublabel: isEs ? 'Corredores de Tala Antrópica' : 'Logging Corridors', color: '#ef4444', arrowColor: '#ef4444', offsetDirection: 'bottom-right' as const }
      ] as MapMarkerData[],
      desc_es: '¡Solo visible en satélite! El polígono rojo encierra los clareos perpendiculares a las carreteras sin tapar los caminos de tala.',
      desc_en: 'Only visible on satellite! Red polygon frames clearings perpendicular to roads without covering logging tracks.'
    },
    sediment: {
      center: [29.0, -89.2] as [number, number],
      zoom: 8,
      name_es: 'Delta del Río Mississippi y Pluma de Sedimentos',
      name_en: 'Mississippi River Delta & Sediment Plume',
      polygons: [
        { positions: [[29.4, -89.4], [29.1, -89.0], [28.7, -89.2], [28.8, -89.6]] as [number, number][], color: '#06b6d4', fillColor: '#06b6d4', fillOpacity: 0.22, weight: 2.5, label: isEs ? 'Pluma de Sedimentos' : 'Sediment Plume' }
      ] as MapPolygonData[],
      markers: [
        { lat: 29.0, lng: -89.2, title: isEs ? 'Pluma de Sedimentos' : 'Sediment Plume', sublabel: isEs ? 'Desembocadura del Mississippi' : 'Mississippi River Outflow', color: '#06b6d4', arrowColor: '#ef4444', offsetDirection: 'top-right' as const }
      ] as MapMarkerData[],
      desc_es: 'El satélite capta miles de toneladas de limo fértil entrando al agua oceánica profunda.',
      desc_en: 'Direct orbital tracking of thousands of tons of river silt entering deep marine waters.'
    },
    salt: {
      center: [-20.2, -67.5] as [number, number],
      zoom: 8,
      name_es: 'Salar de Uyuni (Bolivia) - Máximo Albedo Terrestre',
      name_en: 'Salar de Uyuni (Bolivia) - Highest Terrestrial Albedo',
      polygons: [
        { positions: [[-19.8, -67.8], [-19.9, -67.1], [-20.6, -67.1], [-20.7, -67.9]] as [number, number][], color: '#f8fafc', fillColor: '#f8fafc', fillOpacity: 0.22, weight: 2.5, label: isEs ? 'Salar de Uyuni' : 'Salar de Uyuni' }
      ] as MapPolygonData[],
      markers: [
        { lat: -20.2, lng: -67.5, title: 'Salar de Uyuni', sublabel: isEs ? 'Costra Mineral de Alto Albedo' : 'High Albedo Salt Crust', color: '#f8fafc', arrowColor: '#ef4444', offsetDirection: 'bottom-right' as const }
      ] as MapMarkerData[],
      desc_es: 'Costra mineral de sal blanca a 3,656m de altitud utilizada para calibrar sensores orbitales.',
      desc_en: 'Pristine salt flat at 3,656m elevation used to calibrate orbital optical radiometers.'
    }
  };

  const currentPresetData = satellitePresets[activePreset];

  return (
    <div className="flex flex-col lg:flex-row h-full w-full overflow-hidden">
      {/* ==================================================================== */}
      {/* LEFT ZONE: MAP STAGE (TWO-THIRDS OF SCREEN, 100% HEIGHT, FIXED)       */}
      {/* ==================================================================== */}
      <div className="w-full lg:w-[65%] xl:w-[68%] h-[50vh] min-h-[380px] lg:h-full lg:min-h-0 p-2 sm:p-3 flex flex-col bg-slate-950/80 border-b lg:border-b-0 lg:border-r border-slate-800 shrink-0">
        <RealLeafletViewer
          lens="satellite"
          center={currentPresetData.center}
          zoom={currentPresetData.zoom}
          polygons={currentPresetData.polygons}
          markers={currentPresetData.markers}
          heightClass="h-full flex-1"
          interactive={true}
          hideHeader={true}
          caption={isEs ? currentPresetData.desc_es : currentPresetData.desc_en}
          currentLang={currentLang}
        />
      </div>

      {/* ==================================================================== */}
      {/* RIGHT ZONE: INTERACTIVE & THEORY DECK (ONE-THIRD, INDEPENDENT SCROLL)  */}
      {/* ==================================================================== */}
      <div className="w-full lg:w-[35%] xl:w-[32%] h-full flex flex-col overflow-y-auto p-4 sm:p-5 space-y-4 bg-slate-900/90 touch-scroll">
        
        {/* Book Chapter Header */}
        <div className="flex items-center justify-between text-xs font-mono">
          <span className="px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 font-bold border border-amber-500/30 flex items-center gap-1.5">
            <span>📖</span>
            <span>{isEs ? `Capítulo ${chapterNumber} de ${totalChapters}` : `Chapter ${chapterNumber} of ${totalChapters}`}</span>
          </span>
          <span className="text-slate-400 font-semibold">
            {isEs ? '3. Satélite Óptico Real' : '3. Real Optical Satellite'}
          </span>
        </div>

        {/* Guided Definition Box */}
        <div className="p-4 rounded-xl bg-gradient-to-br from-amber-950/80 via-slate-900 to-slate-950 border border-amber-500/30 shadow-lg space-y-2.5">
          <div className="flex items-center gap-2 text-amber-300 font-bold text-sm">
            <span className="text-lg">🛰️</span>
            <h3>{isEs ? 'Definición de Mapa Satelital Real' : 'Definition of Real Satellite Map'}</h3>
          </div>
          
          <p className="text-xs text-amber-100 font-medium leading-relaxed">
            {isEs
              ? 'Estás viendo a la izquierda un mapa satelital de reflectancia real (albedo). En él se pueden identificar:'
              : 'You are looking at a real satellite reflectance map on the left. In it, you can identify:'}
          </p>

          <ul className="text-xs text-amber-200/90 space-y-1.5 pl-2 border-l-2 border-amber-500/40 font-normal">
            <li>
              <strong className="text-amber-300">1. {isEs ? 'Dunas y Desiertos Minerales (Albedo Dorado):' : 'Sand Dunes & Mineral Deserts (Golden Albedo):'}</strong>{' '}
              {isEs ? 'Reflectancia óptica de arenas y cuarzo seco sin vegetación.' : 'Direct optical reflectance of barren quartz sands.'}
            </li>
            <li>
              <strong className="text-emerald-300">2. {isEs ? 'Canopia Viva de Selva y Ríos (Biomasa y Agua):' : 'Living Jungle Canopy & Rivers (Biomass & Water):'}</strong>{' '}
              {isEs ? 'Absorción por clorofila viva y contraste de aguas fluviales.' : 'Active chlorophyll absorption and river water boundaries.'}
            </li>
            <li>
              <strong className="text-rose-400">3. {isEs ? 'Huella Antrópica y Deforestación (Espina de Pez):' : 'Human Impact & Deforestation (Fishbone):'}</strong>{' '}
              {isEs ? 'Patrones artificiales de tala perpendicular a caminos.' : 'Clearcutting corridors perpendicular to logging roads.'}
            </li>
            <li>
              <strong className="text-cyan-300">4. {isEs ? 'Plumas de Sedimentos Costeras:' : 'Coastal Sediment Plumes:'}</strong>{' '}
              {isEs ? 'Transporte de limo fértil desde desembocaduras al mar.' : 'Fluvial silt plumes discharging into ocean waters.'}
            </li>
            <li>
              <strong className="text-white">5. {isEs ? 'Costras Minerales Salinas (Reflectancia Blanca Pura):' : 'Salt Flats (Pure White Reflectance):'}</strong>{' '}
              {isEs ? 'Depósitos minerales de litio y sal que calibran sensores orbitales.' : 'Massive mineral salt crusts used to calibrate orbit radiometers.'}
            </li>
          </ul>

          <div className="pt-2 text-xs font-bold text-amber-300 flex items-center gap-1.5 border-t border-amber-500/20">
            <span>👉</span>
            <span>
              {isEs
                ? 'Haz clic en los botones de abajo para que observes en el mapa cada uno de ellos:'
                : 'Click the buttons below to observe each one on the map:'}
            </span>
          </div>
        </div>

        {/* Planetary Presets Selector with Inline Accordion Definitions */}
        <div className="space-y-1.5">
          <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider block">
            {isEs ? 'Fenómenos Observables desde Órbita:' : 'Observable Terrestrial Phenomena:'}
          </span>
          <div className="flex flex-col gap-2">
            {/* 1. Desert */}
            <div className="rounded-xl border border-slate-800 overflow-hidden bg-slate-950 transition-all">
              <button
                type="button"
                onClick={() => setActivePreset('desert')}
                className={`w-full p-2.5 text-left text-xs font-semibold transition-all flex items-center justify-between ${
                  activePreset === 'desert'
                    ? 'bg-amber-500 text-slate-950 font-bold shadow'
                    : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span>🏜️</span>
                  <span>{isEs ? '1. Dunas y Desiertos Minerales' : '1. Dunes & Mineral Deserts'}</span>
                </div>
                <div className="flex items-center gap-1.5 shrink-0">
                  <span className="text-[10px] font-mono">Sahara</span>
                  <span className="text-[10px]">{activePreset === 'desert' ? '▼' : '▶'}</span>
                </div>
              </button>

              {activePreset === 'desert' && (
                <div className="p-3 bg-slate-950 border-t border-amber-500/40 text-xs text-slate-300 space-y-1.5 animate-in fade-in duration-150">
                  <strong className="text-amber-300 font-bold block">{isEs ? 'Reflectancia Óptica de Arenas (Albedo Alto):' : 'Optical Sand Reflectance (High Albedo):'}</strong>
                  <p className="leading-relaxed">
                    {isEs
                      ? 'Las arenas de cuarzo seco reflejan fuertemente la luz solar. Revela la verdad ecológica del 96% de Egipto, en contraste con la delgada cinta agrícola verde alimentada por el Nilo.'
                      : 'Barren quartz sands reflect solar radiation intensely, showing the true hyper-arid terrain across 96% of Egypt.'}
                  </p>
                </div>
              )}
            </div>

            {/* 2. Rainforest */}
            <div className="rounded-xl border border-slate-800 overflow-hidden bg-slate-950 transition-all">
              <button
                type="button"
                onClick={() => setActivePreset('rainforest')}
                className={`w-full p-2.5 text-left text-xs font-semibold transition-all flex items-center justify-between ${
                  activePreset === 'rainforest'
                    ? 'bg-emerald-600 text-white font-bold shadow'
                    : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span>🌳</span>
                  <span>{isEs ? '2. Selva y Confluencia de Ríos' : '2. Rainforest & River Confluence'}</span>
                </div>
                <div className="flex items-center gap-1.5 shrink-0">
                  <span className="text-[10px] font-mono">Manaos</span>
                  <span className="text-[10px]">{activePreset === 'rainforest' ? '▼' : '▶'}</span>
                </div>
              </button>

              {activePreset === 'rainforest' && (
                <div className="p-3 bg-slate-950 border-t border-emerald-500/40 text-xs text-slate-300 space-y-1.5 animate-in fade-in duration-150">
                  <strong className="text-emerald-300 font-bold block">{isEs ? 'Canopia Viva de Selva y Aguas Fluviales:' : 'Living Jungle Canopy & Fluvial Contrast:'}</strong>
                  <p className="leading-relaxed">
                    {isEs
                      ? 'Absorción por clorofila viva de la vegetación amazónica. Observa en Manaos la confluencia donde el Río Negro (oscuro) y el Solimões (limoso) fluyen kilómetros juntos sin mezclarse.'
                      : 'Dense chlorophyll absorption. Shows Manaos where the black acidic Rio Negro meets the silt-heavy brown Solimões river.'}
                  </p>
                </div>
              )}
            </div>

            {/* 3. Deforestation */}
            <div className="rounded-xl border border-slate-800 overflow-hidden bg-slate-950 transition-all">
              <button
                type="button"
                onClick={() => setActivePreset('deforestation')}
                className={`w-full p-2.5 text-left text-xs font-semibold transition-all flex items-center justify-between ${
                  activePreset === 'deforestation'
                    ? 'bg-rose-600 text-white font-bold shadow'
                    : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span>🔥</span>
                  <span>{isEs ? '3. Deforestación en Espina de Pez' : '3. Fishbone Clearcutting'}</span>
                </div>
                <div className="flex items-center gap-1.5 shrink-0">
                  <span className="text-[10px] font-mono">Rondônia</span>
                  <span className="text-[10px]">{activePreset === 'deforestation' ? '▼' : '▶'}</span>
                </div>
              </button>

              {activePreset === 'deforestation' && (
                <div className="p-3 bg-slate-950 border-t border-rose-500/40 text-xs text-slate-300 space-y-1.5 animate-in fade-in duration-150">
                  <strong className="text-rose-300 font-bold block">{isEs ? 'Huella Antrópica y Pérdida de Biomasa:' : 'Human Scar & Biomass Loss:'}</strong>
                  <p className="leading-relaxed">
                    {isEs
                      ? 'Patrón geométrico artificial generado por caminos que abren ramales perpendiculares de tala. Talar árboles no cambia la altitud de una loma, por lo que solo el satélite detecta esta degradación.'
                      : 'Clearcut corridors radiating perpendicularly from logging highways. Only orbit radiometers track this ongoing loss of biomass.'}
                  </p>
                </div>
              )}
            </div>

            {/* 4. Sediment */}
            <div className="rounded-xl border border-slate-800 overflow-hidden bg-slate-950 transition-all">
              <button
                type="button"
                onClick={() => setActivePreset('sediment')}
                className={`w-full p-2.5 text-left text-xs font-semibold transition-all flex items-center justify-between ${
                  activePreset === 'sediment'
                    ? 'bg-cyan-600 text-white font-bold shadow'
                    : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span>🌊</span>
                  <span>{isEs ? '4. Pluma de Sedimentos Costera' : '4. Coastal Sediment Plume'}</span>
                </div>
                <div className="flex items-center gap-1.5 shrink-0">
                  <span className="text-[10px] font-mono">Mississippi</span>
                  <span className="text-[10px]">{activePreset === 'sediment' ? '▼' : '▶'}</span>
                </div>
              </button>

              {activePreset === 'sediment' && (
                <div className="p-3 bg-slate-950 border-t border-cyan-500/40 text-xs text-slate-300 space-y-1.5 animate-in fade-in duration-150">
                  <strong className="text-cyan-300 font-bold block">{isEs ? 'Transporte de Limo y Dinámica Marina:' : 'Silt Transport & Marine Discharge:'}</strong>
                  <p className="leading-relaxed">
                    {isEs
                      ? 'Descarga activa de sedimentos y nutrientes en el Golfo de México. Muestra la turbidez real y corrientes costeras que ningún mapa político ni de relieve puede registrar.'
                      : 'Fluvial silt plumes discharging into the Gulf of Mexico, illustrating hydrological nutrient circulation.'}
                  </p>
                </div>
              )}
            </div>

            {/* 5. Salt */}
            <div className="rounded-xl border border-slate-800 overflow-hidden bg-slate-950 transition-all">
              <button
                type="button"
                onClick={() => setActivePreset('salt')}
                className={`w-full p-2.5 text-left text-xs font-semibold transition-all flex items-center justify-between ${
                  activePreset === 'salt'
                    ? 'bg-slate-100 text-slate-950 font-bold shadow'
                    : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span>🧂</span>
                  <span>{isEs ? '5. Salar Mineral (Albedo Blanco)' : '5. Mineral Salt Flat (White Albedo)'}</span>
                </div>
                <div className="flex items-center gap-1.5 shrink-0">
                  <span className="text-[10px] font-mono">Uyuni</span>
                  <span className="text-[10px]">{activePreset === 'salt' ? '▼' : '▶'}</span>
                </div>
              </button>

              {activePreset === 'salt' && (
                <div className="p-3 bg-slate-950 border-t border-slate-400/40 text-xs text-slate-300 space-y-1.5 animate-in fade-in duration-150">
                  <strong className="text-slate-200 font-bold block">{isEs ? 'Reflectancia Blanca Pura y Calibración Orbital:' : 'Pure White Reflectance & Sensor Calibration:'}</strong>
                  <p className="leading-relaxed">
                    {isEs
                      ? 'Más de 10,000 km² de costra de sal y litio con reflectancia cercana al 100%. Por su extrema blancura y llanura absoluta, las agencias espaciales calibran aquí los radiómetros satelitales.'
                      : 'Over 10,000 km² of pristine mineral crust with nearly 100% albedo, used globally to calibrate optical sensors.'}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Scientific Uses */}
        <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1.5">
          <span className="text-[11px] font-mono font-bold text-emerald-400 uppercase tracking-wider block">
            {isEs ? 'Aplicaciones Científicas:' : 'Scientific Applications:'}
          </span>
          <ul className="text-xs text-slate-300 space-y-1 list-disc list-inside leading-relaxed">
            <li><strong>{isEs ? 'Clima:' : 'Climate:'}</strong> {isEs ? 'Retroceso de hielos polares.' : 'Sea ice retreat.'}</li>
            <li><strong>{isEs ? 'Agricultura:' : 'Agri:'}</strong> {isEs ? 'Salud vegetal por NDVI.' : 'NDVI vegetation indices.'}</li>
            <li><strong>{isEs ? 'Desastres:' : 'Disasters:'}</strong> {isEs ? 'Inundaciones y volcanes.' : 'Floods & volcanic plumes.'}</li>
          </ul>
        </div>

        {/* Guided Book Navigation Footer */}
        <div className="pt-3 border-t border-slate-800 flex items-center justify-between gap-2 mt-auto">
          {onPrevChapter ? (
            <button
              type="button"
              onClick={onPrevChapter}
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              <span>←</span>
              <span>{isEs ? 'Capítulo 2: Relieve Físico' : 'Chapter 2: Physical Relief'}</span>
            </button>
          ) : (
            <div />
          )}

          <span className="text-[11px] font-mono text-slate-400 font-bold">
            {isEs ? `Página ${chapterNumber} de ${totalChapters}` : `Page ${chapterNumber} of ${totalChapters}`}
          </span>

          {onNextChapter && (
            <button
              type="button"
              onClick={onNextChapter}
              className="px-3.5 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold flex items-center gap-1.5 shadow-md transition-all active:scale-95"
            >
              <span>{isEs ? 'Capítulo 4: Matriz Comparativa' : 'Chapter 4: Comparison'}</span>
              <span>→</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// 4. SYNCHRONIZED COMPARATIVE LENS TRIO & DECISION MATRIX (TWO-ZONE SANDBOX)
// ============================================================================
export const ComparativeLensTrioVisualizer: React.FC<VisualExhibitProps> = ({
  currentLang,
  onStartEvaluation,
  onNextChapter,
  onPrevChapter,
  chapterNumber = 4,
  totalChapters = 4,
}) => {
  const isEs = currentLang === 'es';
  const [selectedCase, setSelectedCase] = useState<'nile' | 'iberia' | 'andes' | 'alps'>('nile');
  const [activeInteractiveLens, setActiveInteractiveLens] = useState<LensType>('physical');
  const [viewMode, setViewMode] = useState<'single_switcher' | 'synchronized_trio'>('synchronized_trio');
  const [activeMission, setActiveMission] = useState<'dam' | 'border' | 'deforestation' | 'navigation'>('dam');

  const cases = {
    nile: {
      name_es: 'Egipto y el Delta del Río Nilo',
      name_en: 'Egypt & The Nile River Delta',
      center: [30.5, 31.2] as [number, number],
      zoom: 6,
      polygons: [
        { positions: [[30.05, 31.25], [31.35, 29.8], [31.65, 31.3], [31.3, 32.3]] as [number, number][], color: '#10b981', fillColor: '#10b981', fillOpacity: 0.22, weight: 2.5, label: isEs ? 'Delta del Nilo' : 'Nile Delta' }
      ] as MapPolygonData[],
      markers: [
        { lat: 31.65, lng: 31.2, title: isEs ? 'Delta del Nilo' : 'Nile Delta', sublabel: isEs ? '0 a 50m altitud' : '0 to 50m elevation', color: '#10b981', arrowColor: '#ef4444', offsetDirection: 'top-left' as const },
        { lat: 30.0444, lng: 31.2357, title: isEs ? 'El Cairo' : 'Cairo', sublabel: isEs ? 'Capital (★)' : 'Capital (★)', isCapital: true, arrowColor: '#ef4444', offsetDirection: 'bottom-right' as const }
      ] as MapMarkerData[],
      political_desc_es: 'Fronteras rectas en el desierto pactadas por tratados; El Cairo (★) como capital.',
      political_desc_en: 'Straight-line treaty borders through desert sands; Cairo (★) marked as national capital.',
      physical_desc_es: '¡Todo el delta y costa es VERDE ESMERALDA (0 a 50m de altitud), aunque no haya selva!',
      physical_desc_en: 'Entire delta and coast colored DARK GREEN (0 to 50m elevation), despite no jungle!',
      satellite_desc_es: '96% arena dorada del Sáhara; solo una delgada cinta verde de cultivos regada por el río Nilo.',
      satellite_desc_en: '96% golden sand of the Sahara; only a thin green agricultural ribbon along the river.'
    },
    iberia: {
      name_es: 'Península Ibérica y Pirineos',
      name_en: 'Iberian Peninsula & Pyrenees',
      center: [40.4, -3.7] as [number, number],
      zoom: 6,
      polygons: [
        { positions: [[42.2, -5.5], [42.4, -3.0], [40.8, -1.8], [39.0, -3.0], [39.0, -5.5], [40.5, -6.5]] as [number, number][], color: '#eab308', fillColor: '#eab308', fillOpacity: 0.2, weight: 2.5, label: isEs ? 'Meseta Central' : 'Meseta Central' }
      ] as MapPolygonData[],
      markers: [
        { lat: 40.4168, lng: -3.7038, title: isEs ? 'Madrid' : 'Madrid', sublabel: isEs ? 'Capital (★) 650m' : 'Capital (★) 650m', isCapital: true, arrowColor: '#ef4444', offsetDirection: 'top-left' as const },
        { lat: 38.7223, lng: -9.1393, title: isEs ? 'Lisboa' : 'Lisbon', sublabel: isEs ? 'Capital (★) Costa' : 'Capital (★) Coast', isCapital: true, arrowColor: '#ef4444', offsetDirection: 'bottom-right' as const }
      ] as MapMarkerData[],
      political_desc_es: 'Frontera de España y Portugal (La Raya); Andorra microestado; Madrid (★) y Lisboa (★).',
      political_desc_en: 'Border between Spain and Portugal; Andorra microstate; Madrid (★) and Lisbon (★).',
      physical_desc_es: 'Meseta Central en ocre/amarillo (650m); Pirineos y Sierra Nevada en marrón oscuro (>3,000m).',
      physical_desc_en: 'Meseta Central in ochre/yellow (650m); Pyrenees & Sierra Nevada in deep brown (>3,000m).',
      satellite_desc_es: 'Verde atlántico en Galicia/Cantabria frente a la sequedad ocre del sureste y estepas.',
      satellite_desc_en: 'Lush green in rainy northern Atlantic coast vs dry arid ochre in southern steppes.'
    },
    andes: {
      name_es: 'Cordillera de los Andes y Cuenca Amazónica',
      name_en: 'Andes Cordillera & Amazon Basin',
      center: [-12.0, -74.0] as [number, number],
      zoom: 6,
      polygons: [
        { positions: [[-11.0, -75.8], [-12.5, -71.8], [-16.0, -70.0], [-17.5, -71.8], [-14.5, -74.8], [-12.0, -76.8]] as [number, number][], color: '#92400e', fillColor: '#92400e', fillOpacity: 0.25, weight: 2.5, label: isEs ? 'Cordillera Andina' : 'Andean Spine' }
      ] as MapPolygonData[],
      markers: [
        { lat: -12.0464, lng: -77.0428, title: isEs ? 'Lima' : 'Lima', sublabel: isEs ? 'Capital (★) Costa' : 'Capital (★) Coast', isCapital: true, arrowColor: '#ef4444', offsetDirection: 'bottom-right' as const }
      ] as MapMarkerData[],
      political_desc_es: 'Fronteras de Perú, Brasil, Bolivia; capitales Lima (★), Brasilia (★), Bogotá (★).',
      political_desc_en: 'Borders of Peru, Brazil, Bolivia; capitals Lima (★), Brasília (★), Bogotá (★).',
      physical_desc_es: 'Enorme muro marrón oscuro y blanco (>6,000m) cayendo abruptamente a verde bajo (0-200m).',
      physical_desc_en: 'Immense dark brown & white wall (>6,000m) dropping into deep green Amazon lowland (0-200m).',
      satellite_desc_es: 'Cúpulas glaciares volcánicas, selva tropical densa y ríos de color arcilloso.',
      satellite_desc_en: 'Glaciated volcanic peaks, dense dark green rainforest canopy, and silt-heavy brown rivers.'
    },
    alps: {
      name_es: 'Alpes Europeos y Suiza',
      name_en: 'European Alps & Switzerland',
      center: [46.5, 8.5] as [number, number],
      zoom: 7,
      polygons: [
        { positions: [[45.2, 6.8], [46.2, 6.5], [47.4, 9.8], [47.6, 13.5], [46.2, 14.5], [45.8, 11.2], [44.5, 7.2]] as [number, number][], color: '#92400e', fillColor: '#92400e', fillOpacity: 0.25, weight: 2.5, label: isEs ? 'Arco Alpino' : 'Alpine Arc' }
      ] as MapPolygonData[],
      markers: [
        { lat: 46.948, lng: 7.4474, title: isEs ? 'Berna' : 'Bern', sublabel: isEs ? 'Capital (★) Valle Alpino' : 'Capital (★) Alpine Valley', isCapital: true, arrowColor: '#ef4444', offsetDirection: 'top-right' as const }
      ] as MapMarkerData[],
      political_desc_es: 'Fronteras de Suiza, Francia, Italia, Austria y Liechtenstein; capital Berna (★).',
      political_desc_en: 'Borders of Switzerland, France, Italy, Austria, and Liechtenstein; capital Bern (★).',
      physical_desc_es: 'Pasos de alta montaña en marrón oscuro y blanco, rodeados por valles en U.',
      physical_desc_en: 'High mountain passes in deep brown and white, surrounded by steep glacial valleys.',
      satellite_desc_es: 'Nieve brillante en las crestas alpinas, lagos azul zafiro (Ginebra, Como) y bosques alpinos.',
      satellite_desc_en: 'Gleaming snow along high alpine crests, deep sapphire lakes, and dark pine forests.'
    }
  };

  const activeCaseData = cases[selectedCase];

  return (
    <div className="flex flex-col lg:flex-row h-full w-full overflow-hidden">
      {/* ==================================================================== */}
      {/* LEFT ZONE: MAP STAGE (TWO-THIRDS OF SCREEN, 100% HEIGHT, FIXED)       */}
      {/* ==================================================================== */}
      <div className="w-full lg:w-[65%] xl:w-[68%] h-[50vh] min-h-[380px] lg:h-full lg:min-h-0 p-2 sm:p-3 flex flex-col bg-slate-950/80 border-b lg:border-b-0 lg:border-r border-slate-800 shrink-0 gap-2">
        
        {/* VIEW MODE 1: SINGLE MAP WITH INTERACTIVE LENS SWITCHER */}
        {viewMode === 'single_switcher' ? (
          <RealLeafletViewer
            lens={activeInteractiveLens}
            center={activeCaseData.center}
            zoom={activeCaseData.zoom}
            polygons={activeCaseData.polygons}
            markers={activeCaseData.markers}
            heightClass="h-full flex-1"
            interactive={true}
            allowLensSwitch={true}
            hideHeader={true}
            onLensChange={(newLens) => setActiveInteractiveLens(newLens)}
            caption={
              activeInteractiveLens === 'political'
                ? isEs ? activeCaseData.political_desc_es : activeCaseData.political_desc_en
                : activeInteractiveLens === 'physical'
                ? isEs ? activeCaseData.physical_desc_es : activeCaseData.physical_desc_en
                : isEs ? activeCaseData.satellite_desc_es : activeCaseData.satellite_desc_en
            }
            currentLang={currentLang}
          />
        ) : (
          /* VIEW MODE 2: SYNCHRONIZED 3 MAPS SIDE-BY-SIDE */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 h-full flex-1 min-h-[320px] lg:min-h-0 overflow-hidden">
            <RealLeafletViewer
              lens="political"
              center={activeCaseData.center}
              zoom={activeCaseData.zoom}
              polygons={activeCaseData.polygons}
              markers={activeCaseData.markers}
              heightClass="h-full"
              interactive={true}
              title={isEs ? '1. Político' : '1. Political'}
              currentLang={currentLang}
            />
            <RealLeafletViewer
              lens="physical"
              center={activeCaseData.center}
              zoom={activeCaseData.zoom}
              polygons={activeCaseData.polygons}
              markers={activeCaseData.markers}
              heightClass="h-full"
              interactive={true}
              title={isEs ? '2. Físico' : '2. Physical'}
              currentLang={currentLang}
            />
            <RealLeafletViewer
              lens="satellite"
              center={activeCaseData.center}
              zoom={activeCaseData.zoom}
              polygons={activeCaseData.polygons}
              markers={activeCaseData.markers}
              heightClass="h-full"
              interactive={true}
              title={isEs ? '3. Satélite' : '3. Satellite'}
              currentLang={currentLang}
            />
          </div>
        )}
      </div>

      {/* ==================================================================== */}
      {/* RIGHT ZONE: INTERACTIVE & THEORY DECK (ONE-THIRD, INDEPENDENT SCROLL)  */}
      {/* ==================================================================== */}
      <div className="w-full lg:w-[35%] xl:w-[32%] h-full flex flex-col overflow-y-auto p-4 sm:p-5 space-y-4 bg-slate-900/90 touch-scroll">
        
        {/* Book Chapter Header */}
        <div className="flex items-center justify-between text-xs font-mono">
          <span className="px-2.5 py-1 rounded-full bg-purple-500/20 text-purple-300 font-bold border border-purple-500/30 flex items-center gap-1.5">
            <span>📖</span>
            <span>{isEs ? `Capítulo ${chapterNumber} de ${totalChapters}` : `Chapter ${chapterNumber} of ${totalChapters}`}</span>
          </span>
          <span className="text-slate-400 font-semibold">
            {isEs ? '4. Matriz Comparativa y Decisión' : '4. Comparative Decision Matrix'}
          </span>
        </div>

        {/* Guided Definition Box */}
        <div className="p-4 rounded-xl bg-gradient-to-br from-purple-950/80 via-slate-900 to-slate-950 border border-purple-500/30 shadow-lg space-y-2.5">
          <div className="flex items-center gap-2 text-purple-300 font-bold text-sm">
            <span className="text-lg">⚖️</span>
            <h3>{isEs ? 'Definición de Matriz Comparativa' : 'Comparative Decision Matrix'}</h3>
          </div>
          
          <p className="text-xs text-purple-100 font-medium leading-relaxed">
            {isEs
              ? 'Estás en el capítulo final del libro. Aquí sintetizamos la lectura de mapas comparando las 3 perspectivas sobre el mismo lugar geográfico para que domines la toma de decisiones cartográficas:'
              : 'You are in the final chapter of the book. Here we synthesize map reading by comparing the 3 perspectives on the exact same location:'}
          </p>

          <ul className="text-xs text-purple-200/90 space-y-1.5 pl-2 border-l-2 border-purple-500/40 font-normal">
            <li>
              <strong className="text-blue-300">1. {isEs ? 'Mapa Político:' : 'Political Map:'}</strong>{' '}
              {isEs ? 'Responde a "¿Quién gobierna y cuáles son los límites legales?". Muestra soberanías y capitales.' : 'Answers "Who governs and what are the legal borders?". Shows sovereignty and capitals.'}
            </li>
            <li>
              <strong className="text-sky-300">2. {isEs ? 'Mapa Físico:' : 'Physical Relief Map:'}</strong>{' '}
              {isEs ? 'Responde a "¿Qué altitud tiene el relieve?". Muestra cotas hipsométricas continuas y batimetría marina.' : 'Answers "What is the elevation?". Shows continuous elevation tints and bathymetry.'}
            </li>
            <li>
              <strong className="text-amber-300">3. {isEs ? 'Satélite Real:' : 'Real Satellite Map:'}</strong>{' '}
              {isEs ? 'Responde a "¿Cómo es realmente la superficie ahora?". Muestra albedo de arenas, vegetación viva y huella humana.' : 'Answers "What is the authentic surface now?". Shows sand albedo, live biomass, and human scars.'}
            </li>
          </ul>

          <div className="pt-2 text-xs font-bold text-amber-300 flex items-center gap-1.5 border-t border-purple-500/20">
            <span>👉</span>
            <span>
              {isEs
                ? 'Observa los 3 mapas en paralelo a la izquierda (o cambia a 1 mapa grande) para comparar el mismo territorio:'
                : 'Observe all 3 maps side-by-side on the left (or toggle to 1 large map) to compare the same territory:'}
            </span>
          </div>
        </div>

        {/* View Mode Toggle Button */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-950 rounded-xl border border-slate-800">
          <button
            type="button"
            onClick={() => setViewMode('synchronized_trio')}
            className={`flex-1 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              viewMode === 'synchronized_trio'
                ? 'bg-purple-600 text-white font-bold shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            {isEs ? '3 Mapas en Paralelo' : '3 Maps Parallel'}
          </button>
          <button
            type="button"
            onClick={() => setViewMode('single_switcher')}
            className={`flex-1 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              viewMode === 'single_switcher'
                ? 'bg-purple-600 text-white font-bold shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            {isEs ? '1 Mapa Grande' : '1 Large Map'}
          </button>
        </div>

        {/* Region Selector */}
        <div className="space-y-1.5">
          <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider block">
            {isEs ? 'Región Analizada:' : 'Target Geographic Region:'}
          </span>
          <div className="grid grid-cols-2 gap-1.5">
            <button
              type="button"
              onClick={() => setSelectedCase('nile')}
              className={`p-2 rounded-xl text-left text-xs font-semibold transition-all border ${
                selectedCase === 'nile'
                  ? 'bg-amber-500 text-slate-950 border-amber-300 font-bold shadow'
                  : 'bg-slate-950 text-slate-300 border-slate-800 hover:bg-slate-800'
              }`}
            >
              1. {isEs ? 'Egipto y Nilo' : 'Egypt & Nile'}
            </button>
            <button
              type="button"
              onClick={() => setSelectedCase('iberia')}
              className={`p-2 rounded-xl text-left text-xs font-semibold transition-all border ${
                selectedCase === 'iberia'
                  ? 'bg-amber-500 text-slate-950 border-amber-300 font-bold shadow'
                  : 'bg-slate-950 text-slate-300 border-slate-800 hover:bg-slate-800'
              }`}
            >
              2. {isEs ? 'Península Ibérica' : 'Iberian Pen.'}
            </button>
            <button
              type="button"
              onClick={() => setSelectedCase('andes')}
              className={`p-2 rounded-xl text-left text-xs font-semibold transition-all border ${
                selectedCase === 'andes'
                  ? 'bg-amber-500 text-slate-950 border-amber-300 font-bold shadow'
                  : 'bg-slate-950 text-slate-300 border-slate-800 hover:bg-slate-800'
              }`}
            >
              3. {isEs ? 'Andes y Amazonas' : 'Andes & Amazon'}
            </button>
            <button
              type="button"
              onClick={() => setSelectedCase('alps')}
              className={`p-2 rounded-xl text-left text-xs font-semibold transition-all border ${
                selectedCase === 'alps'
                  ? 'bg-amber-500 text-slate-950 border-amber-300 font-bold shadow'
                  : 'bg-slate-950 text-slate-300 border-slate-800 hover:bg-slate-800'
              }`}
            >
              4. {isEs ? 'Alpes y Suiza' : 'Alps & Swiss'}
            </button>
          </div>
        </div>

        {/* Decision Simulator Missions with Inline Accordion Feedback */}
        <div className="space-y-1.5">
          <span className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider block">
            {isEs ? 'Simulador de Decisión Estratégica:' : 'Decision Simulator Missions:'}
          </span>
          <div className="flex flex-col gap-2">
            {/* Mission 1: Dam */}
            <div className="rounded-xl border border-slate-800 overflow-hidden bg-slate-950 transition-all">
              <button
                type="button"
                onClick={() => setActiveMission('dam')}
                className={`w-full p-2.5 text-left text-xs font-bold transition-all flex items-center justify-between ${
                  activeMission === 'dam'
                    ? 'border-emerald-400 bg-emerald-950/50 text-emerald-200'
                    : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span>⚡</span>
                  <span>{isEs ? '1. Presa Hidroeléctrica' : '1. Hydro Dam Project'}</span>
                </div>
                <span className="text-[10px] text-slate-400">{activeMission === 'dam' ? '▼' : '▶'}</span>
              </button>

              {activeMission === 'dam' && (
                <div className="p-3 bg-slate-950 border-t border-emerald-500/30 text-xs space-y-1.5 animate-in fade-in duration-150">
                  <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>{isEs ? 'Elección Óptima: Mapa Físico' : 'Optimal Choice: Physical Relief'}</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    {isEs
                      ? 'Calcula la caída de agua en metros y el desfiladero para embalsar. Ni el político ni el satélite informan las cotas cuantitativas.'
                      : 'Calculates hydraulic head drop in meters and gorge geometry. Political and satellite maps lack quantitative contour elevations.'}
                  </p>
                </div>
              )}
            </div>

            {/* Mission 2: Border */}
            <div className="rounded-xl border border-slate-800 overflow-hidden bg-slate-950 transition-all">
              <button
                type="button"
                onClick={() => setActiveMission('border')}
                className={`w-full p-2.5 text-left text-xs font-bold transition-all flex items-center justify-between ${
                  activeMission === 'border'
                    ? 'border-blue-400 bg-blue-950/50 text-blue-200'
                    : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span>🏛️</span>
                  <span>{isEs ? '2. Litigio Fronterizo Internacional' : '2. Border Dispute Resolution'}</span>
                </div>
                <span className="text-[10px] text-slate-400">{activeMission === 'border' ? '▼' : '▶'}</span>
              </button>

              {activeMission === 'border' && (
                <div className="p-3 bg-slate-950 border-t border-blue-500/30 text-xs space-y-1.5 animate-in fade-in duration-150">
                  <div className="flex items-center gap-1.5 text-blue-400 font-bold">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>{isEs ? 'Elección Óptima: Mapa Político' : 'Optimal Choice: Political Map'}</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    {isEs
                      ? 'Define aduanas, leyes y jurisdicciones. La naturaleza no tiene líneas; las fronteras son convenios humanos.'
                      : 'Determines customs, legal jurisdiction, and treaties. Nature has no borders; they are human legal treaties.'}
                  </p>
                </div>
              )}
            </div>

            {/* Mission 3: Deforestation */}
            <div className="rounded-xl border border-slate-800 overflow-hidden bg-slate-950 transition-all">
              <button
                type="button"
                onClick={() => setActiveMission('deforestation')}
                className={`w-full p-2.5 text-left text-xs font-bold transition-all flex items-center justify-between ${
                  activeMission === 'deforestation'
                    ? 'border-amber-400 bg-amber-950/50 text-amber-200'
                    : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span>🔥</span>
                  <span>{isEs ? '3. Monitoreo de Tala Ilegal' : '3. Illegal Deforestation'}</span>
                </div>
                <span className="text-[10px] text-slate-400">{activeMission === 'deforestation' ? '▼' : '▶'}</span>
              </button>

              {activeMission === 'deforestation' && (
                <div className="p-3 bg-slate-950 border-t border-amber-500/30 text-xs space-y-1.5 animate-in fade-in duration-150">
                  <div className="flex items-center gap-1.5 text-amber-400 font-bold">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>{isEs ? 'Elección Óptima: Satélite Real' : 'Optimal Choice: Real Satellite'}</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    {isEs
                      ? 'Talar árboles no cambia la altitud de la colina. Solo los sensores ópticos orbitales detectan la pérdida de biomasa y quemas.'
                      : 'Clearcutting trees does not change hill elevation. Only orbital radiometers track live biomass loss and burn scars.'}
                  </p>
                </div>
              )}
            </div>

            {/* Mission 4: Navigation */}
            <div className="rounded-xl border border-slate-800 overflow-hidden bg-slate-950 transition-all">
              <button
                type="button"
                onClick={() => setActiveMission('navigation')}
                className={`w-full p-2.5 text-left text-xs font-bold transition-all flex items-center justify-between ${
                  activeMission === 'navigation'
                    ? 'border-sky-400 bg-sky-950/50 text-sky-200'
                    : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span>🚢</span>
                  <span>{isEs ? '4. Calado Naval y Ruta Marítima' : '4. Ship Draft & Nav Channel'}</span>
                </div>
                <span className="text-[10px] text-slate-400">{activeMission === 'navigation' ? '▼' : '▶'}</span>
              </button>

              {activeMission === 'navigation' && (
                <div className="p-3 bg-slate-950 border-t border-sky-500/30 text-xs space-y-1.5 animate-in fade-in duration-150">
                  <div className="flex items-center gap-1.5 text-sky-400 font-bold">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>{isEs ? 'Elección Óptima: Mapa Físico (Batimetría)' : 'Optimal Choice: Physical Map (Bathymetry)'}</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    {isEs
                      ? 'Evita encallar en la plataforma somera (0 a -200m) identificando canales de aguas profundas (< -4,000m).'
                      : 'Prevents grounding by distinguishing shallow continental shelf (0 to -200m) from deep navigation channels.'}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Decision Criteria Summary Table */}
        <div className="rounded-xl border border-slate-800 overflow-hidden text-[11px]">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-950 text-slate-300 font-bold border-b border-slate-800">
                <th className="p-2">{isEs ? 'Criterio' : 'Criterion'}</th>
                <th className="p-2 text-blue-400">{isEs ? 'Político' : 'Pol.'}</th>
                <th className="p-2 text-sky-400">{isEs ? 'Físico' : 'Phys.'}</th>
                <th className="p-2 text-amber-400">{isEs ? 'Satélite' : 'Sat.'}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-300">
              <tr>
                <td className="p-2 font-semibold text-white">{isEs ? 'Colores indican' : 'Colors mean'}</td>
                <td className="p-2">{isEs ? 'Soberanía' : 'Sovereignty'}</td>
                <td className="p-2 font-bold text-sky-300">{isEs ? 'Altitud (m)' : 'Altitude (m)'}</td>
                <td className="p-2 text-amber-300">{isEs ? 'Reflectancia' : 'Albedo'}</td>
              </tr>
              <tr>
                <td className="p-2 font-semibold text-white">{isEs ? 'Fronteras' : 'Borders'}</td>
                <td className="p-2 font-bold text-emerald-400">✔ {isEs ? 'Sí' : 'Yes'}</td>
                <td className="p-2 text-slate-400">{isEs ? 'Tenue' : 'Subtle'}</td>
                <td className="p-2 text-rose-400">✖ {isEs ? 'No' : 'No'}</td>
              </tr>
              <tr>
                <td className="p-2 font-semibold text-white">{isEs ? 'Deforestación' : 'Deforest.'}</td>
                <td className="p-2 text-rose-400">✖</td>
                <td className="p-2 text-rose-400">✖</td>
                <td className="p-2 font-bold text-emerald-400">✔ {isEs ? 'Óptimo' : 'Optimal'}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Guided Book Navigation Footer */}
        <div className="pt-3 border-t border-slate-800 flex items-center justify-between gap-2 mt-auto">
          {onPrevChapter ? (
            <button
              type="button"
              onClick={onPrevChapter}
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              <span>←</span>
              <span>{isEs ? 'Capítulo 3: Satélite Real' : 'Chapter 3: Real Satellite'}</span>
            </button>
          ) : (
            <div />
          )}

          <span className="text-[11px] font-mono text-slate-400 font-bold">
            {isEs ? `Página ${chapterNumber} de ${totalChapters}` : `Page ${chapterNumber} of ${totalChapters}`}
          </span>

          <span className="text-[10px] text-amber-400 font-bold font-mono">
            {isEs ? '¡Libro Completado!' : 'Book Completed!'}
          </span>
        </div>

        {/* Start Evaluation CTA */}
        {onStartEvaluation && (
          <button
            type="button"
            onClick={onStartEvaluation}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 text-xs font-black flex items-center justify-center gap-2 shadow-xl ring-2 ring-amber-400/50 transition-all active:scale-95"
          >
            <Target className="w-4 h-4" />
            <span>{isEs ? 'Iniciar Evaluación del Nivel 1 (Requisito 90%)' : 'Start Level 1 Exam (90% Requirement)'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};

// ============================================================================
// 5. CARTOGRAPHIC STIMULUS FIGURE FOR EVALUATION QUESTIONS
// ============================================================================
interface CartographicQuestionFigureProps {
  stimulus: CartographicVisualStimulus;
  currentLang: Language;
}

export const CartographicQuestionFigure: React.FC<CartographicQuestionFigureProps> = ({
  stimulus,
  currentLang
}) => {
  const isEs = currentLang === 'es';

  const getStimulusMapConfig = () => {
    if (stimulus.region_key === 'egypt_nile') {
      return {
        lens: 'physical' as LensType,
        center: [30.8, 31.2] as [number, number],
        zoom: 7,
        title: isEs ? 'Mapa Físico Real: Delta del Nilo y Costa de Egipto' : 'Real Physical Map: Nile Delta & Egypt Coast',
        polygons: [
          {
            positions: [
              [30.05, 31.25], [31.35, 29.8], [31.65, 31.3], [31.3, 32.3]
            ] as [number, number][],
            color: '#10b981',
            fillColor: '#10b981',
            fillOpacity: 0.25,
            weight: 3,
            label: isEs ? 'Delta del Nilo (0 a 50m)' : 'Nile Delta (0 to 50m)'
          }
        ] as MapPolygonData[],
        markers: [
          {
            lat: 31.65,
            lng: 31.2,
            title: isEs ? 'Delta del Nilo (0 a 50 m)' : 'Nile Delta (0 to 50 m)',
            color: '#10b981',
            offsetDirection: 'top' as const,
          }
        ] as MapMarkerData[]
      };
    }
    if (stimulus.region_key === 'andes_amazon') {
      return {
        lens: 'physical' as LensType,
        center: [-13.5, -73.0] as [number, number],
        zoom: 6,
        title: isEs ? 'Mapa Físico Real: Cordillera de los Andes' : 'Real Physical Map: Andes Mountain Range',
        polygons: [
          {
            positions: [
              [-11.0, -75.8], [-12.5, -71.8], [-16.0, -70.0], [-17.5, -71.8], [-14.5, -74.8], [-12.0, -76.8]
            ] as [number, number][],
            color: '#92400e',
            fillColor: '#92400e',
            fillOpacity: 0.3,
            weight: 3,
            label: isEs ? 'Cordillera Andina' : 'Andes Range'
          }
        ] as MapPolygonData[],
        markers: [
          {
            lat: -14.5,
            lng: -76.5,
            title: isEs ? 'Cordillera de los Andes (1,000 – 3,500 m)' : 'Andes Cordillera (1,000 – 3,500 m)',
            color: '#92400e',
            offsetDirection: 'bottom-left' as const,
          }
        ] as MapMarkerData[]
      };
    }
    if (stimulus.region_key === 'florida_shelf') {
      return {
        lens: 'physical' as LensType,
        center: [24.5, -78.5] as [number, number],
        zoom: 6,
        title: isEs ? 'Mapa Físico Real: Plataforma Continental y Fosas' : 'Real Physical Map: Continental Shelf & Deep Trenches',
        polygons: [
          {
            positions: [
              [26.5, -79.2], [26.5, -77.0], [24.5, -76.5], [23.0, -75.8], [22.2, -77.5], [24.0, -79.3]
            ] as [number, number][],
            color: '#06b6d4',
            fillColor: '#06b6d4',
            fillOpacity: 0.28,
            weight: 2.5,
            label: isEs ? 'Plataforma Somera' : 'Shallow Shelf'
          }
        ] as MapPolygonData[],
        markers: [
          {
            lat: 26.5,
            lng: -78.2,
            title: isEs ? 'Plataforma Somera (0 a -200 m)' : 'Shallow Shelf (0 to -200 m)',
            color: '#06b6d4',
            offsetDirection: 'top' as const,
          }
        ] as MapMarkerData[]
      };
    }
    if (stimulus.region_key === 'iberia_europe') {
      return {
        lens: 'political' as LensType,
        center: [42.5, 1.5] as [number, number],
        zoom: 6,
        title: isEs ? 'Mapa Político Real: Frontera España-Francia y Andorra' : 'Real Political Map: Spain-France Border & Andorra',
        polygons: [] as MapPolygonData[],
        markers: [
          {
            lat: 42.5063,
            lng: 1.5218,
            title: isEs ? 'Andorra (Microestado)' : 'Andorra (Microstate)',
            color: '#ec4899',
            offsetDirection: 'top-right' as const,
          }
        ] as MapMarkerData[]
      };
    }
    if (stimulus.type === 'deforestation_satellite') {
      return {
        lens: 'satellite' as LensType,
        center: [-10.8, -62.5] as [number, number],
        zoom: 8,
        title: isEs ? 'Satélite Real: Patrón de Tala en Espina de Pez (Rondônia)' : 'Real Satellite: Fishbone Clearcutting (Rondônia)',
        polygons: [
          {
            positions: [
              [-10.0, -63.5], [-10.0, -61.5], [-11.5, -61.5], [-11.5, -63.5]
            ] as [number, number][],
            color: '#ef4444',
            fillColor: '#ef4444',
            fillOpacity: 0.16,
            weight: 2.5,
            label: isEs ? 'Corredores de Tala' : 'Clearcutting'
          }
        ] as MapPolygonData[],
        markers: [
          {
            lat: -10.0,
            lng: -62.5,
            title: isEs ? 'Patrón Espina de Pez' : 'Fishbone Clearcutting',
            color: '#ef4444',
            offsetDirection: 'top' as const,
          }
        ] as MapMarkerData[]
      };
    }
    if (stimulus.type === 'political_extract') {
      return {
        lens: 'political' as LensType,
        center: [48.0, 4.0] as [number, number],
        zoom: 5,
        title: isEs ? 'Mapa Político Real: Límites Estatales y Capitales' : 'Real Political Map: State Borders & Capitals',
        polygons: [] as MapPolygonData[],
        markers: [
          {
            lat: 48.8566,
            lng: 2.3522,
            title: isEs ? 'París (★ Capital)' : 'Paris (★ Capital)',
            isCapital: true,
            offsetDirection: 'top' as const,
          }
        ] as MapMarkerData[]
      };
    }
    if (stimulus.type === 'bathymetric_profile') {
      return {
        lens: 'physical' as LensType,
        center: [20.0, -66.5] as [number, number],
        zoom: 6,
        title: isEs ? 'Mapa Físico Real: Batimetría Marina y Fosas' : 'Real Physical Map: Marine Bathymetry & Trenches',
        polygons: [
          {
            positions: [
              [20.6, -67.8], [20.4, -65.2], [19.0, -65.2], [19.2, -67.8]
            ] as [number, number][],
            color: '#38bdf8',
            fillColor: '#082f49',
            fillOpacity: 0.35,
            weight: 2.5,
            label: isEs ? 'Fosa de Puerto Rico' : 'Puerto Rico Trench'
          }
        ] as MapPolygonData[],
        markers: [
          {
            lat: 20.6,
            lng: -66.5,
            title: isEs ? 'Fosa Abisal (-8,376 m)' : 'Abyssal Trench (-8,376 m)',
            color: '#38bdf8',
            offsetDirection: 'top' as const,
          }
        ] as MapMarkerData[]
      };
    }

    return {
      lens: 'physical' as LensType,
      center: [46.5, 9.5] as [number, number],
      zoom: 6,
      title: isEs ? 'Mapa Físico Real: Relieve Hipsométrico' : 'Real Physical Map: Hypsometric Relief',
      polygons: [] as MapPolygonData[],
      markers: [] as MapMarkerData[]
    };
  };

  const mapConfig = getStimulusMapConfig();

  return (
    <div className="p-3.5 sm:p-4 rounded-xl bg-slate-950 border border-slate-700/80 shadow-md space-y-3">
      <div className="flex items-center justify-between gap-2 border-b border-slate-800 pb-2">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-bold uppercase px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
            {isEs ? 'Figura Cartográfica de Estímulo Real' : 'Real Cartographic Stimulus Figure'}
          </span>
          <span className="text-xs font-bold text-white truncate">
            {isEs ? stimulus.title_es : stimulus.title_en}
          </span>
        </div>
      </div>

      <RealLeafletViewer
        lens={mapConfig.lens}
        center={mapConfig.center}
        zoom={mapConfig.zoom}
        polygons={mapConfig.polygons}
        markers={mapConfig.markers}
        heightClass="h-56 sm:h-64"
        interactive={true}
        title={mapConfig.title}
        currentLang={currentLang}
      />

      <div className="text-xs text-slate-300 leading-relaxed">
        <strong className="text-amber-300">🔎 {isEs ? 'Evidencia Cartográfica:' : 'Cartographic Evidence:'}</strong>{' '}
        {isEs ? stimulus.caption_es : stimulus.caption_en}
      </div>

      {stimulus.legend_items && stimulus.legend_items.length > 0 && (
        <div className="flex items-center gap-3 flex-wrap pt-1 border-t border-slate-800/80">
          {stimulus.legend_items.map((item, idx) => (
            <div key={idx} className="flex items-center gap-1.5 text-[11px] text-slate-300">
              <span className="w-3 h-3 rounded-full border border-white/40" style={{ backgroundColor: item.color }} />
              <span>{isEs ? item.label_es : item.label_en}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
