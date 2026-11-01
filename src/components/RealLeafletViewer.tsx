import React, { useEffect, useRef, useState, useCallback } from 'react';
import L from 'leaflet';
import { LensType, Language } from '../types/geography';
import { Layers, ZoomIn, ZoomOut, RotateCcw, Eye, EyeOff } from 'lucide-react';
import { fetchCountriesGeoJson, getCachedGeoJson, getFeaturesForIso2s } from '../services/geoJsonService';

export interface MapMarkerData {
  lat: number;
  lng: number;
  title: string;
  sublabel?: string;
  isCapital?: boolean;
  color?: string;
  arrowColor?: string;
  iconText?: string;
  offsetDirection?: 'top' | 'top-left' | 'top-right' | 'bottom' | 'bottom-left' | 'bottom-right';
  offsetDistance?: number;
}

export interface MapPolylineData {
  positions: [number, number][];
  color?: string;
  dashArray?: string;
  weight?: number;
  label?: string;
}

export interface MapPolygonData {
  positions: [number, number][];
  color?: string;
  fillColor?: string;
  fillOpacity?: number;
  weight?: number;
  dashArray?: string;
  label?: string;
}

export interface MapCircleData {
  center: [number, number];
  radius: number; // in meters
  color?: string;
  fillColor?: string;
  fillOpacity?: number;
  weight?: number;
  dashArray?: string;
  label?: string;
}

export interface RealLeafletViewerProps {
  lens: LensType;
  center: [number, number];
  zoom: number;
  minZoom?: number;
  maxZoom?: number;
  markers?: MapMarkerData[];
  polylines?: MapPolylineData[];
  polygons?: MapPolygonData[];
  circles?: MapCircleData[];
  highlightCountryIso2s?: string[];
  highlightCountryBorderColor?: string;
  onCountryClick?: (iso2: string, countryName: string) => void;
  heightClass?: string;
  interactive?: boolean;
  allowLensSwitch?: boolean;
  onLensChange?: (lens: LensType) => void;
  title?: string;
  subtitle?: string;
  caption?: string;
  currentLang?: Language;
  hideHeader?: boolean;
}

export const RealLeafletViewer: React.FC<RealLeafletViewerProps> = ({
  lens,
  center,
  zoom,
  minZoom = 2,
  maxZoom = 18,
  markers = [],
  polylines = [],
  polygons = [],
  circles = [],
  highlightCountryIso2s = [],
  highlightCountryBorderColor = '#fbbf24',
  onCountryClick,
  heightClass = 'h-72 sm:h-80',
  interactive = true,
  allowLensSwitch = false,
  onLensChange,
  title,
  subtitle,
  caption,
  currentLang = 'es',
  hideHeader = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const baseTileRef = useRef<L.TileLayer | null>(null);
  const overlayTileRef = useRef<L.TileLayer | null>(null);
  const markersGroupRef = useRef<L.LayerGroup | null>(null);
  const polylinesGroupRef = useRef<L.LayerGroup | null>(null);
  const polygonsGroupRef = useRef<L.LayerGroup | null>(null);
  const geoJsonLayerRef = useRef<L.GeoJSON | null>(null);

  const [activeLens, setActiveLens] = useState<LensType>(lens);
  const [currentZoom, setCurrentZoom] = useState<number>(zoom);
  const [currentCenter, setCurrentCenter] = useState<[number, number]>(center);
  const [showOverlays, setShowOverlays] = useState<boolean>(true);

  // Sync internal lens state if prop changes
  useEffect(() => {
    setActiveLens(lens);
  }, [lens]);

  // Handle lens selection
  const handleLensChange = useCallback(
    (newLens: LensType) => {
      setActiveLens(newLens);
      if (onLensChange) onLensChange(newLens);
    },
    [onLensChange]
  );

  // Helper to load Esri base & overlay tiles
  const applyTileLayers = useCallback((map: L.Map, lensType: LensType) => {
    if (baseTileRef.current) {
      map.removeLayer(baseTileRef.current);
      baseTileRef.current = null;
    }
    if (overlayTileRef.current) {
      map.removeLayer(overlayTileRef.current);
      overlayTileRef.current = null;
    }

    let baseTileUrl = '';
    let overlayTileUrl: string | null = null;

    if (lensType === 'political') {
      baseTileUrl = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}';
      overlayTileUrl = null;
    } else if (lensType === 'physical') {
      baseTileUrl = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Physical_Map/MapServer/tile/{z}/{y}/{x}';
      overlayTileUrl = 'https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}';
    } else if (lensType === 'satellite') {
      baseTileUrl = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';
      overlayTileUrl = 'https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}';
    }

    baseTileRef.current = L.tileLayer(baseTileUrl, {
      maxZoom: 18,
      minZoom: 2,
    }).addTo(map);

    if (overlayTileUrl) {
      overlayTileRef.current = L.tileLayer(overlayTileUrl, {
        maxZoom: 18,
        minZoom: 2,
        pane: 'overlayPane',
        opacity: 0.85,
      }).addTo(map);
    }
  }, []);

  // Initialize Leaflet Map
  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const map = L.map(containerRef.current, {
      center,
      zoom,
      minZoom,
      maxZoom,
      zoomControl: false,
      dragging: interactive,
      touchZoom: interactive,
      scrollWheelZoom: interactive,
      doubleClickZoom: interactive,
      boxZoom: interactive,
      worldCopyJump: true,
      attributionControl: false,
    });

    // Apply initial tile layer immediately
    applyTileLayers(map, activeLens);

    const polyGroup = L.layerGroup().addTo(map);
    polygonsGroupRef.current = polyGroup;

    const linesGroup = L.layerGroup().addTo(map);
    polylinesGroupRef.current = linesGroup;

    const markersGroup = L.layerGroup().addTo(map);
    markersGroupRef.current = markersGroup;

    map.on('zoomend', () => {
      setCurrentZoom(map.getZoom());
    });
    map.on('moveend', () => {
      const c = map.getCenter();
      setCurrentCenter([c.lat, c.lng]);
    });

    mapRef.current = map;

    // Multiple staggered invalidations to handle modal transition and layout stabilization
    const t1 = setTimeout(() => map.invalidateSize(), 80);
    const t2 = setTimeout(() => map.invalidateSize(), 250);
    const t3 = setTimeout(() => map.invalidateSize(), 600);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      if (geoJsonLayerRef.current && map) {
        map.removeLayer(geoJsonLayerRef.current);
        geoJsonLayerRef.current = null;
      }
      map.remove();
      mapRef.current = null;
    };
  }, []);

  // Watch container element resizing (modal animation, tab changes, flex recalculation)
  useEffect(() => {
    if (!containerRef.current) return;

    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.contentRect.width > 0 && entry.contentRect.height > 0 && mapRef.current) {
          mapRef.current.invalidateSize({ debounceMoveend: true });
        }
      }
    });

    ro.observe(containerRef.current);

    return () => {
      ro.disconnect();
    };
  }, []);

  // Update center & zoom when props change
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    const currentMapCenter = map.getCenter();
    const distLat = Math.abs(currentMapCenter.lat - center[0]);
    const distLng = Math.abs(currentMapCenter.lng - center[1]);
    const currentZ = map.getZoom();

    if (distLat > 0.001 || distLng > 0.001 || currentZ !== zoom) {
      map.flyTo(center, zoom, {
        duration: 1.2,
        easeLinearity: 0.25,
      });
    }
  }, [center, zoom]);

  // Update Tile Layers when activeLens changes
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    applyTileLayers(map, activeLens);
    map.invalidateSize();
  }, [activeLens, applyTileLayers]);

  // Render Polygons & Circles
  useEffect(() => {
    const group = polygonsGroupRef.current;
    if (!group) return;

    group.clearLayers();
    if (!showOverlays) return;

    // Polygons
    polygons.forEach((poly) => {
      const p = L.polygon(poly.positions, {
        color: poly.color || '#38bdf8',
        fillColor: poly.fillColor || poly.color || '#38bdf8',
        fillOpacity: poly.fillOpacity ?? 0.2,
        weight: poly.weight || 2.5,
        dashArray: poly.dashArray || undefined,
        lineJoin: 'round',
      }).addTo(group);

      if (poly.label) {
        p.bindTooltip(poly.label, {
          permanent: false,
          direction: 'top',
          className: 'carto-polygon-tooltip',
        });
      }
    });

    // Circles
    circles.forEach((circ) => {
      const c = L.circle(circ.center, {
        radius: circ.radius,
        color: circ.color || '#38bdf8',
        fillColor: circ.fillColor || circ.color || '#38bdf8',
        fillOpacity: circ.fillOpacity ?? 0.2,
        weight: circ.weight || 2.5,
        dashArray: circ.dashArray || undefined,
      }).addTo(group);

      if (circ.label) {
        c.bindTooltip(circ.label, {
          permanent: false,
          direction: 'top',
          className: 'carto-polygon-tooltip',
        });
      }
    });
  }, [polygons, circles, showOverlays]);

  // Render Polylines
  useEffect(() => {
    const group = polylinesGroupRef.current;
    if (!group) return;

    group.clearLayers();
    if (!showOverlays) return;

    polylines.forEach((line) => {
      L.polyline(line.positions, {
        color: line.color || '#f43f5e',
        weight: line.weight || 3,
        dashArray: line.dashArray || '5 4',
        opacity: 0.9,
      }).addTo(group);
    });
  }, [polylines, showOverlays]);

  // Render Real Sovereign Borders in Precision Yellow (#fbbf24) from GeoJSON
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    if (geoJsonLayerRef.current) {
      map.removeLayer(geoJsonLayerRef.current);
      geoJsonLayerRef.current = null;
    }

    if (!showOverlays || !highlightCountryIso2s || highlightCountryIso2s.length === 0) {
      return;
    }

    const renderBorders = (data: any) => {
      if (!mapRef.current) return;
      if (geoJsonLayerRef.current) {
        mapRef.current.removeLayer(geoJsonLayerRef.current);
        geoJsonLayerRef.current = null;
      }

      const featureCollection = getFeaturesForIso2s(highlightCountryIso2s, data);
      if (!featureCollection || !featureCollection.features || featureCollection.features.length === 0) {
        return;
      }

      const layer = L.geoJSON(featureCollection, {
        style: () => ({
          color: highlightCountryBorderColor || '#fbbf24',
          weight: 2.5,
          opacity: 1,
          fill: true,
          fillColor: '#000000',
          fillOpacity: 0.0001, // 100% transparent interior: real map is visible beneath it
          className: 'poly-neon no-focus-outline',
        }),
        onEachFeature: (feature, l) => {
          const p = feature.properties || {};
          const countryName = p.name || p.ADMIN || '';
          const iso2 = (p.iso2 || p.ISO_A2 || p['ISO3166-1-Alpha-2'] || '').toUpperCase();

          l.bindTooltip(`<strong>${countryName}</strong><br/><span style="color:#fbbf24; font-size:10px;">${currentLang === 'es' ? 'Frontera Soberana Jurisdiccional' : 'Sovereign Jurisdictional Border'}</span>`, {
            sticky: true,
            direction: 'top',
            className: 'bg-slate-900/90 text-white text-xs px-2 py-1 rounded shadow-lg border border-amber-500/50',
          });

          if (onCountryClick) {
            l.on('click', () => {
              onCountryClick(iso2, countryName);
            });
          }
        },
      }).addTo(mapRef.current);

      geoJsonLayerRef.current = layer;
    };

    // Render immediately from local preset boundaries
    renderBorders(getCachedGeoJson());

    // In background, ensure full dataset is loaded and refresh if needed
    fetchCountriesGeoJson().then((fullData) => {
      if (fullData) renderBorders(fullData);
    });
  }, [highlightCountryIso2s, highlightCountryBorderColor, showOverlays, currentLang, onCountryClick]);

  // Render Callout Markers with Intense Red Pointer Arrows and Outside Labels
  useEffect(() => {
    const group = markersGroupRef.current;
    const map = mapRef.current;
    if (!group || !map) return;

    const renderMarkers = () => {
      group.clearLayers();
      if (!showOverlays) return;

      const size = map.getSize();

      markers.forEach((m, idx) => {
        // Red arrow by default as requested: "Las flechas usadas para indicar ciudades deberían ser rojas intensas"
        const arrowColor = m.arrowColor || '#ef4444';
        const badgeBorderColor = m.color || (m.isCapital ? '#fbbf24' : '#38bdf8');
        let dir = m.offsetDirection || 'top';
        const markerId = `m-${idx}-${Math.round(Math.abs(m.lat) * 100)}-${Math.round(Math.abs(m.lng) * 100)}`;

        // Smart Edge Clamping: Ensure labels do NOT fall outside container bounds
        if (size.x > 0 && size.y > 0) {
          const pt = map.latLngToContainerPoint([m.lat, m.lng]);
          let v = dir.includes('bottom') ? 'bottom' : 'top';
          let h = dir.includes('left') ? 'left' : dir.includes('right') ? 'right' : 'center';

          if (pt.y < 75) {
            v = 'bottom';
          } else if (pt.y > size.y - 75) {
            v = 'top';
          }

          if (pt.x < 135) {
            h = 'right';
          } else if (pt.x > size.x - 135) {
            h = 'left';
          }

          if (h === 'center') {
            dir = v as typeof dir;
          } else {
            dir = `${v}-${h}` as typeof dir;
          }
        }

        // Clean title & sublabel decomposition to prevent wide badge collisions
        let cleanTitle = m.title;
        let sublabel = m.sublabel;
        if (!sublabel && cleanTitle.includes('(') && cleanTitle.includes(')')) {
          const match = cleanTitle.match(/^([^(]+)\s*\(([^)]+)\)$/);
          if (match) {
            cleanTitle = match[1].trim();
            sublabel = match[2].trim();
          }
        }

        // Calculate label offset and leader arrow coordinates
        let labelStyle = '';
        let arrowSvg = '';

        if (dir === 'top') {
          labelStyle = 'bottom: 30px; left: 50%; transform: translateX(-50%);';
          arrowSvg = `
            <svg style="position:absolute; left:-20px; top:-30px; width:40px; height:30px; pointer-events:none; overflow:visible; filter: drop-shadow(0 1px 2px rgba(0,0,0,0.95)) drop-shadow(0 0 1px #000);">
              <defs>
                <marker id="arrow-${markerId}" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
                  <polygon points="0 0, 8 4, 0 8" fill="${arrowColor}" stroke="#450a0a" stroke-width="0.5" />
                </marker>
              </defs>
              <line x1="20" y1="2" x2="20" y2="23" stroke="${arrowColor}" stroke-width="2.5" stroke-linecap="round" marker-end="url(#arrow-${markerId})" stroke-dasharray="3 1.5" />
            </svg>
          `;
        } else if (dir === 'top-right') {
          labelStyle = 'bottom: 28px; left: 24px;';
          arrowSvg = `
            <svg style="position:absolute; left:0px; top:-28px; width:50px; height:30px; pointer-events:none; overflow:visible; filter: drop-shadow(0 1px 2px rgba(0,0,0,0.95)) drop-shadow(0 0 1px #000);">
              <defs>
                <marker id="arrow-${markerId}" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
                  <polygon points="0 0, 8 4, 0 8" fill="${arrowColor}" stroke="#450a0a" stroke-width="0.5" />
                </marker>
              </defs>
              <line x1="26" y1="4" x2="7" y2="22" stroke="${arrowColor}" stroke-width="2.5" stroke-linecap="round" marker-end="url(#arrow-${markerId})" stroke-dasharray="3 1.5" />
            </svg>
          `;
        } else if (dir === 'top-left') {
          labelStyle = 'bottom: 28px; right: 24px;';
          arrowSvg = `
            <svg style="position:absolute; right:0px; top:-28px; width:50px; height:30px; pointer-events:none; overflow:visible; filter: drop-shadow(0 1px 2px rgba(0,0,0,0.95)) drop-shadow(0 0 1px #000);">
              <defs>
                <marker id="arrow-${markerId}" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
                  <polygon points="0 0, 8 4, 0 8" fill="${arrowColor}" stroke="#450a0a" stroke-width="0.5" />
                </marker>
              </defs>
              <line x1="24" y1="4" x2="43" y2="22" stroke="${arrowColor}" stroke-width="2.5" stroke-linecap="round" marker-end="url(#arrow-${markerId})" stroke-dasharray="3 1.5" />
            </svg>
          `;
        } else if (dir === 'bottom') {
          labelStyle = 'top: 30px; left: 50%; transform: translateX(-50%);';
          arrowSvg = `
            <svg style="position:absolute; left:-20px; top:0px; width:40px; height:30px; pointer-events:none; overflow:visible; filter: drop-shadow(0 1px 2px rgba(0,0,0,0.95)) drop-shadow(0 0 1px #000);">
              <defs>
                <marker id="arrow-${markerId}" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
                  <polygon points="0 0, 8 4, 0 8" fill="${arrowColor}" stroke="#450a0a" stroke-width="0.5" />
                </marker>
              </defs>
              <line x1="20" y1="28" x2="20" y2="7" stroke="${arrowColor}" stroke-width="2.5" stroke-linecap="round" marker-end="url(#arrow-${markerId})" stroke-dasharray="3 1.5" />
            </svg>
          `;
        } else if (dir === 'bottom-right') {
          labelStyle = 'top: 28px; left: 24px;';
          arrowSvg = `
            <svg style="position:absolute; left:0px; top:0px; width:50px; height:30px; pointer-events:none; overflow:visible; filter: drop-shadow(0 1px 2px rgba(0,0,0,0.95)) drop-shadow(0 0 1px #000);">
              <defs>
                <marker id="arrow-${markerId}" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
                  <polygon points="0 0, 8 4, 0 8" fill="${arrowColor}" stroke="#450a0a" stroke-width="0.5" />
                </marker>
              </defs>
              <line x1="26" y1="26" x2="7" y2="8" stroke="${arrowColor}" stroke-width="2.5" stroke-linecap="round" marker-end="url(#arrow-${markerId})" stroke-dasharray="3 1.5" />
            </svg>
          `;
        } else if (dir === 'bottom-left') {
          labelStyle = 'top: 28px; right: 24px;';
          arrowSvg = `
            <svg style="position:absolute; right:0px; top:0px; width:50px; height:30px; pointer-events:none; overflow:visible; filter: drop-shadow(0 1px 2px rgba(0,0,0,0.95)) drop-shadow(0 0 1px #000);">
              <defs>
                <marker id="arrow-${markerId}" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
                  <polygon points="0 0, 8 4, 0 8" fill="${arrowColor}" stroke="#450a0a" stroke-width="0.5" />
                </marker>
              </defs>
              <line x1="24" y1="26" x2="43" y2="8" stroke="${arrowColor}" stroke-width="2.5" stroke-linecap="round" marker-end="url(#arrow-${markerId})" stroke-dasharray="3 1.5" />
            </svg>
          `;
        }

        const iconHtml = `
          <div style="position:relative; width:0; height:0;">
            <!-- 1. Intense Red Open Target Reticle on exact subject location -->
            <div style="position:absolute; left:-7px; top:-7px; width:14px; height:14px; border:2.5px solid ${arrowColor}; border-radius:50%; background:rgba(239,68,68,0.25); box-shadow:0 0 10px ${arrowColor}, 0 0 2px #000; pointer-events:none;">
              <div style="position:absolute; left:2.5px; top:2.5px; width:4px; height:4px; border-radius:50%; background:${arrowColor}; box-shadow:0 0 4px ${arrowColor};"></div>
            </div>

            <!-- 2. Intense Red Leader Arrow pointing to Subject -->
            ${arrowSvg}

            <!-- 3. Outside Label Badge with Red Indicator Border -->
            <div style="position:absolute; ${labelStyle} display:inline-flex; flex-direction:column; max-width:185px; background:rgba(10,15,29,0.96); border:1.5px solid ${badgeBorderColor}; border-left:3.5px solid ${arrowColor}; border-radius:6px; padding:3px 8px; box-shadow:0 4px 14px rgba(0,0,0,0.9); pointer-events:none; z-index:100; backdrop-filter:blur(4px);">
              <div style="display:flex; align-items:center; gap:4px; line-height:1.2;">
                ${m.isCapital ? '<span style="color:#fbbf24; font-size:11px; line-height:1;">★</span>' : ''}
                <span style="font-size:11px; font-weight:800; color:#ffffff; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${cleanTitle}</span>
              </div>
              ${sublabel ? `<span style="font-size:9.5px; color:#cbd5e1; font-weight:500; line-height:1.2; margin-top:1px;">${sublabel}</span>` : ''}
            </div>
          </div>
        `;

        const icon = L.divIcon({
          className: 'carto-leader-callout',
          html: iconHtml,
          iconSize: [0, 0],
          iconAnchor: [0, 0],
        });

        L.marker([m.lat, m.lng], { icon }).addTo(group);
      });
    };

    renderMarkers();

    // Re-evaluate edge positions on map pan/zoom
    map.on('moveend', renderMarkers);

    return () => {
      map.off('moveend', renderMarkers);
    };
  }, [markers, showOverlays]);

  // Handle Window Resize / Invalidate size
  useEffect(() => {
    const handleResize = () => {
      if (mapRef.current) {
        mapRef.current.invalidateSize();
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleZoomIn = () => {
    if (mapRef.current) mapRef.current.zoomIn();
  };
  const handleZoomOut = () => {
    if (mapRef.current) mapRef.current.zoomOut();
  };
  const handleReset = () => {
    if (mapRef.current) {
      mapRef.current.flyTo(center, zoom);
    }
  };

  const isEs = currentLang === 'es';

  return (
    <div className="relative rounded-xl overflow-hidden border border-slate-700/80 bg-slate-950 shadow-inner flex flex-col w-full h-full flex-1 min-h-[340px] lg:min-h-0">
      {/* Header Bar (Hidden if hideHeader is true to avoid repeating the page header) */}
      {!hideHeader && (title || allowLensSwitch) && (
        <div className="bg-slate-950/90 border-b border-slate-800 px-3 py-2 flex items-center justify-between gap-2 z-10 shrink-0">
          <div className="flex items-center gap-2 min-w-0">
            <span
              className={`w-2 h-2 rounded-full ${
                activeLens === 'political'
                  ? 'bg-blue-400'
                  : activeLens === 'physical'
                  ? 'bg-emerald-400'
                  : 'bg-amber-400'
              }`}
            />
            {title && (
              <span className="text-xs font-bold text-white truncate">
                {title}
              </span>
            )}
            {subtitle && (
              <span className="text-[11px] text-slate-400 hidden sm:inline truncate">
                · {subtitle}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {/* Toggle Overlay Labels Button */}
            <button
              type="button"
              onClick={() => setShowOverlays(!showOverlays)}
              title={showOverlays ? (isEs ? 'Ocultar etiquetas para ver el mapa limpio' : 'Hide labels to see clean map') : (isEs ? 'Mostrar etiquetas' : 'Show labels')}
              className={`px-2 py-0.5 text-[10px] font-bold rounded flex items-center gap-1 border transition-colors ${
                showOverlays
                  ? 'bg-slate-800 border-slate-700 text-slate-200 hover:text-white'
                  : 'bg-amber-500/20 border-amber-500/40 text-amber-300'
              }`}
            >
              {showOverlays ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
              <span className="hidden sm:inline">{showOverlays ? (isEs ? 'Ocultar Etiquetas' : 'Hide Labels') : (isEs ? 'Ver Etiquetas' : 'Show Labels')}</span>
            </button>

            {/* Optional Lens Switcher Bar */}
            {allowLensSwitch ? (
              <div className="flex items-center gap-1 p-0.5 bg-slate-900 rounded-lg border border-slate-800 shrink-0">
                <button
                  type="button"
                  onClick={() => handleLensChange('political')}
                  className={`px-2 py-0.5 text-[10px] font-bold rounded transition-colors ${
                    activeLens === 'political'
                      ? 'bg-blue-600 text-white'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {isEs ? 'Político' : 'Political'}
                </button>
                <button
                  type="button"
                  onClick={() => handleLensChange('physical')}
                  className={`px-2 py-0.5 text-[10px] font-bold rounded transition-colors ${
                    activeLens === 'physical'
                      ? 'bg-emerald-600 text-white'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {isEs ? 'Físico' : 'Physical'}
                </button>
                <button
                  type="button"
                  onClick={() => handleLensChange('satellite')}
                  className={`px-2 py-0.5 text-[10px] font-bold rounded transition-colors ${
                    activeLens === 'satellite'
                      ? 'bg-amber-500 text-slate-950'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {isEs ? 'Satélite' : 'Satellite'}
                </button>
              </div>
            ) : (
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider px-2 py-0.5 rounded bg-slate-900 border border-slate-800">
                {activeLens === 'political'
                  ? isEs ? 'Mapa Político' : 'Political Map'
                  : activeLens === 'physical'
                  ? isEs ? 'Relieve Físico' : 'Physical Relief'
                  : isEs ? 'Satélite Real' : 'Real Satellite'}
              </span>
            )}
          </div>
        </div>
      )}

      {/* Real Leaflet Map Container */}
      <div className={`relative w-full flex-1 h-full min-h-[300px] lg:min-h-0 ${heightClass || ''}`}>
        <div ref={containerRef} className="w-full h-full min-h-[300px] lg:min-h-0 z-0" />

        {/* Floating Lens Switcher (when hideHeader is true and allowLensSwitch is enabled) */}
        {hideHeader && allowLensSwitch && (
          <div className="absolute top-3 left-3 z-[400] flex items-center gap-1 p-1 bg-slate-950/90 backdrop-blur-md rounded-xl border border-slate-700/80 shadow-xl">
            <button
              type="button"
              onClick={() => handleLensChange('political')}
              className={`px-2.5 py-1 text-xs font-bold rounded-lg transition-colors ${
                activeLens === 'political'
                  ? 'bg-blue-600 text-white shadow'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {isEs ? 'Político' : 'Political'}
            </button>
            <button
              type="button"
              onClick={() => handleLensChange('physical')}
              className={`px-2.5 py-1 text-xs font-bold rounded-lg transition-colors ${
                activeLens === 'physical'
                  ? 'bg-emerald-600 text-white shadow'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {isEs ? 'Físico' : 'Physical'}
            </button>
            <button
              type="button"
              onClick={() => handleLensChange('satellite')}
              className={`px-2.5 py-1 text-xs font-bold rounded-lg transition-colors ${
                activeLens === 'satellite'
                  ? 'bg-amber-500 text-slate-950 shadow'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {isEs ? 'Satélite' : 'Satellite'}
            </button>
          </div>
        )}

        {/* Floating Map Controls */}
        {interactive && (
          <div className="absolute top-3 right-3 z-[400] flex flex-col gap-1 shadow-lg">
            <button
              type="button"
              onClick={handleZoomIn}
              title={isEs ? 'Acercar mapa' : 'Zoom in'}
              className="w-7 h-7 bg-slate-900/90 hover:bg-slate-800 text-white border border-slate-700/80 rounded-lg flex items-center justify-center transition-colors active:scale-95"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={handleZoomOut}
              title={isEs ? 'Alejar mapa' : 'Zoom out'}
              className="w-7 h-7 bg-slate-900/90 hover:bg-slate-800 text-white border border-slate-700/80 rounded-lg flex items-center justify-center transition-colors active:scale-95"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={handleReset}
              title={isEs ? 'Centrar vista inicial' : 'Reset center'}
              className="w-7 h-7 bg-slate-900/90 hover:bg-slate-800 text-amber-400 border border-slate-700/80 rounded-lg flex items-center justify-center transition-colors active:scale-95"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
            {/* Floating Toggle Labels button */}
            <button
              type="button"
              onClick={() => setShowOverlays(!showOverlays)}
              title={showOverlays ? (isEs ? 'Ocultar etiquetas para ver el mapa limpio' : 'Hide labels to see clean map') : (isEs ? 'Mostrar etiquetas' : 'Show labels')}
              className={`w-7 h-7 rounded-lg flex items-center justify-center border transition-colors active:scale-95 ${
                showOverlays
                  ? 'bg-slate-900/90 border-slate-700/80 text-slate-300 hover:text-white'
                  : 'bg-amber-500/20 border-amber-500/50 text-amber-300'
              }`}
            >
              {showOverlays ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
            </button>
          </div>
        )}

        {/* Coordinates overlay removed as requested */}
      </div>

      {/* Caption footer */}
      {caption && (
        <div className="bg-slate-950 px-3 py-2 border-t border-slate-800 text-[11px] text-slate-300 leading-relaxed">
          {caption}
        </div>
      )}
    </div>
  );
};
