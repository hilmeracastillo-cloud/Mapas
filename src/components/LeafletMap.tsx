import React, { useEffect, useRef, useState, useCallback } from 'react';
import L from 'leaflet';
import { LensType, AppMode, Language, CountryDossierData, LandformFeature, SemanticBadgeType } from '../types/geography';
import { PedagogicalLevel, ContinentId } from '../types/progression';
import { CONTINENTS_DATA, OCEANS_SEAS_DATA } from '../data/continentsOceansData';
import { getCountrySurroundingWaters } from '../data/surroundingWatersData';
import { fetchCountriesGeoJson } from '../services/geoJsonService';
import { TriviaFlavor, ReviewTopic } from '../types/trivia';

interface LeafletMapProps {
  currentLens: LensType;
  currentMode: AppMode;
  currentLang: Language;
  countries: CountryDossierData[];
  selectedCountry: CountryDossierData | null;
  onSelectCountry: (country: CountryDossierData | null) => void;
  onCountryMapClick?: (iso2: string, name: string) => void;
  onFlyToFeature?: (coords: [number, number], zoom: number, feature?: LandformFeature) => void;
  flyToCoords?: [number, number] | null;
  flyToZoom?: number;
  highlightedIso2?: string | null;
  shakeIso2?: string | null;
  activeFeatureBadge?: LandformFeature | null;
  currentLevel?: PedagogicalLevel;
  selectedContinent?: ContinentId;
  isPlayMode?: boolean;
  isTriviaMode?: boolean;
  triviaFlavor?: TriviaFlavor | null;
  onTriviaMapClick?: (targetId: string, country?: CountryDossierData | null) => void;
  isReviewMode?: boolean;
  reviewCountry?: CountryDossierData | null;
  reviewTopic?: ReviewTopic | null;
}

export const LeafletMap: React.FC<LeafletMapProps> = ({
  currentLens,
  currentMode,
  currentLang,
  countries,
  selectedCountry,
  onSelectCountry,
  onCountryMapClick,
  onFlyToFeature,
  flyToCoords,
  flyToZoom,
  highlightedIso2,
  shakeIso2,
  activeFeatureBadge,
  currentLevel = 1,
  selectedContinent = 'South America',
  isPlayMode = false,
  isTriviaMode = false,
  triviaFlavor = null,
  onTriviaMapClick,
  isReviewMode = false,
  reviewCountry = null,
  reviewTopic = null,
}) => {


  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const baseTileLayerRef = useRef<L.TileLayer | null>(null);
  const overlayTileLayerRef = useRef<L.TileLayer | null>(null);
  const geoJsonLayerRef = useRef<L.GeoJSON | null>(null);
  const markersLayerGroupRef = useRef<L.LayerGroup | null>(null);
  const [geoData, setGeoData] = useState<any | null>(null);
  const [isLoadingGeo, setIsLoadingGeo] = useState<boolean>(true);

  // Initialize Leaflet Map
  useEffect(() => {
    if (!mapContainerRef.current || mapInstanceRef.current) return;

    const map = L.map(mapContainerRef.current, {
      center: [20, 0],
      zoom: 2,
      minZoom: 1.8,
      maxZoom: 18,
      worldCopyJump: true,
      zoomControl: false,
    });

    // Custom positioned zoom control on topleft (prevents overlap with right panel)
    L.control.zoom({ position: 'topleft' }).addTo(map);

    // Marker layer group
    const markersGroup = L.layerGroup().addTo(map);
    markersLayerGroupRef.current = markersGroup;

    mapInstanceRef.current = map;

    // Recalcular tamaño y presentar el mapamundi completo al inicializarse
    const timer = setTimeout(() => {
      map.invalidateSize();
      map.setView([20, 0], 2);
    }, 150);

    return () => {
      clearTimeout(timer);
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  // Comprehensive normalization aliases for GeoJSON features with name variations
  const GEO_NAME_ALIASES: Record<string, string> = {
    'united states of america': 'us',
    'the united states': 'us',
    'republic of the congo': 'cg',
    'congo': 'cg',
    'democratic republic of the congo': 'cd',
    'dr congo': 'cd',
    'tanzania, united republic of': 'tz',
    'united republic of tanzania': 'tz',
    'russian federation': 'ru',
    'viet nam': 'vn',
    'iran, islamic republic of': 'ir',
    'syrian arab republic': 'sy',
    'lao peoples democratic republic': 'la',
    'laos': 'la',
    'korea, republic of': 'kr',
    'south korea': 'kr',
    'korea, democratic peoples republic of': 'kp',
    'north korea': 'kp',
    'bolivia, plurinational state of': 'bo',
    'venezuela, bolivarian republic of': 've',
    'moldova, republic of': 'md',
    'czech republic': 'cz',
    'czechia': 'cz',
    'côte divoire': 'ci',
    'cote d ivoire': 'ci',
    'ivory coast': 'ci',
    'eswatini': 'sz',
    'swaziland': 'sz',
    'myanmar': 'mm',
    'burma': 'mm',
    'timor-leste': 'tl',
    'east timor': 'tl',
    'brunei darussalam': 'bn',
    'taiwan, province of china': 'tw',
    'taiwan': 'tw',
    'bahamas, the': 'bs',
    'the bahamas': 'bs',
    'gambia, the': 'gm',
    'the gambia': 'gm',
    'fiji': 'fj',
    'republic of fiji': 'fj',
    'macedonia': 'mk',
    'north macedonia': 'mk',
    'the former yugoslav republic of macedonia': 'mk',
    'micronesia, federated states of': 'fm',
    'federated states of micronesia': 'fm',
    'cabo verde': 'cv',
    'cape verde': 'cv',
    'guinea-bissau': 'gw',
    'equatorial guinea': 'gq',
    'papua new guinea': 'pg',
    'guinea': 'gn',
    'somaliland': 'so',
    'somalia': 'so',
    'south sudan': 'ss',
    'sudan': 'sd',
    'dominica': 'dm',
    'dominican republic': 'do',
    'niger': 'ne',
    'nigeria': 'ng',
    'oman': 'om',
    'romania': 'ro',
  };

  // Update Basemap Tiles based on 3-Lens Switcher & Trivia Mode
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    // Remove existing tile layers
    if (baseTileLayerRef.current) {
      map.removeLayer(baseTileLayerRef.current);
      baseTileLayerRef.current = null;
    }
    if (overlayTileLayerRef.current) {
      map.removeLayer(overlayTileLayerRef.current);
      overlayTileLayerRef.current = null;
    }

    let baseTileUrl = '';
    let overlayTileUrl: string | null = null;
    let attribution = '&copy; <a href="https://www.esri.com">Esri</a>, USGS, NOAA';
    let subdomains: string[] | undefined = undefined;

    if (isTriviaMode) {
      // IN TRIVIA MODE: NO LABELS ALLOWED (names of countries, capitals, etc. must NOT appear on tiles at ANY zoom level)
      // We use Esri World_Shaded_Relief and World_Imagery which have 100% ZERO labels and require 0 API keys
      if (currentLens === 'political') {
        // Pure shaded topography with coastlines and mountains; vector polygons provide the political sovereign borders
        baseTileUrl = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}';
        overlayTileUrl = null;
      } else if (currentLens === 'physical') {
        baseTileUrl = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}';
        overlayTileUrl = null;
      } else if (currentLens === 'satellite') {
        baseTileUrl = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';
        overlayTileUrl = null;
      }
    } else {
      if (currentLens === 'political') {
        baseTileUrl = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}';
        overlayTileUrl = null;
      } else if (currentLens === 'physical') {
        baseTileUrl = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Physical_Map/MapServer/tile/{z}/{y}/{x}';
        overlayTileUrl = 'https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}';
      } else if (currentLens === 'satellite') {
        baseTileUrl = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';
        overlayTileUrl = 'https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}';
      }
    }

    baseTileLayerRef.current = L.tileLayer(baseTileUrl, {
      maxZoom: 18,
      attribution,
      ...(subdomains ? { subdomains } : {}),
    }).addTo(map);

    if (overlayTileUrl) {
      overlayTileLayerRef.current = L.tileLayer(overlayTileUrl, {
        maxZoom: 18,
        pane: 'overlayPane',
        opacity: 0.85,
      }).addTo(map);
    }
  }, [currentLens, isTriviaMode]);

  // Fetch Live Country GeoJSON
  useEffect(() => {
    let isMounted = true;
    setIsLoadingGeo(true);

    fetchCountriesGeoJson()
      .then((data) => {
        if (isMounted) {
          setGeoData(data);
          setIsLoadingGeo(false);
        }
      })
      .catch((err) => {
        console.warn('Could not load online GeoJSON, using lightweight fallback geometries:', err);
        if (isMounted) {
          setIsLoadingGeo(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  // Helper: Find country in our rich dataset by ISO or name with 100% strict matching
  // PREVENTS false positives like Oman matching Romania or Niger matching Nigeria!
  const findCountryMatch = useCallback(
    (featureProps: any): CountryDossierData | undefined => {
      if (!featureProps) return undefined;
      const rawIso2 = (
        featureProps['ISO3166-1-Alpha-2'] ||
        featureProps.ISO_A2 ||
        featureProps.iso2 ||
        featureProps.iso_a2 ||
        ''
      )
        .trim()
        .toLowerCase();

      const rawIso3 = (
        featureProps['ISO3166-1-Alpha-3'] ||
        featureProps.ISO_A3 ||
        featureProps.iso3 ||
        featureProps.iso_a3 ||
        ''
      )
        .trim()
        .toUpperCase();

      const name = (
        featureProps.name ||
        featureProps.NAME ||
        featureProps.ADMIN ||
        featureProps.name_en ||
        ''
      )
        .trim()
        .toLowerCase();

      // 1. Strict ISO-2 match (ignore invalid placeholders like '-99' and non-standard lengths)
      if (rawIso2 && rawIso2 !== '-99' && rawIso2.length === 2) {
        const match = countries.find((c) => c.iso2 && c.iso2.toLowerCase() === rawIso2);
        if (match) return match;
      }

      // 2. Strict ISO-3 match (ignore '-99')
      if (rawIso3 && rawIso3 !== '-99' && rawIso3.length === 3) {
        const match = countries.find(
          (c) => (c.iso3 && c.iso3.toUpperCase() === rawIso3) || c.id.toUpperCase() === rawIso3
        );
        if (match) return match;
      }

      // 3. Strict exact English or Spanish name match (never substring includes!)
      if (name) {
        const exactMatch = countries.find(
          (c) =>
            c.name_en.toLowerCase() === name ||
            c.name_es.toLowerCase() === name ||
            (c.id && c.id.toLowerCase() === name)
        );
        if (exactMatch) return exactMatch;
      }

      // 4. Normalized alias table lookup for standard geopolitical name variations
      const cleanName = name.replace(/[^a-z0-9 ]/g, '').trim();
      for (const [alias, targetIso] of Object.entries(GEO_NAME_ALIASES)) {
        const cleanAlias = alias.replace(/[^a-z0-9 ]/g, '').trim();
        if (cleanName === cleanAlias) {
          const match = countries.find((c) => c.iso2.toLowerCase() === targetIso);
          if (match) return match;
        }
      }

      return undefined;
    },
    [countries]
  );

  // Render & Style GeoJSON Polygons
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map || !geoData) return;

    if (geoJsonLayerRef.current) {
      map.removeLayer(geoJsonLayerRef.current);
      geoJsonLayerRef.current = null;
    }

    const geoLayer = L.geoJSON(geoData, {
      style: (feature) => {
        const country = findCountryMatch(feature?.properties);
        const iso = country?.iso2.toLowerCase() || (feature?.properties?.ISO_A2 || '').toLowerCase();

        const isSelected = selectedCountry && country && selectedCountry.id === country.id;
        const isHighlighted = highlightedIso2 && (iso === highlightedIso2.toLowerCase() || (country && country.iso2.toLowerCase() === highlightedIso2.toLowerCase()));
        const isShaking = shakeIso2 && (iso === shakeIso2.toLowerCase() || (country && country.iso2.toLowerCase() === shakeIso2.toLowerCase()));

        if (isShaking) {
          return {
            color: '#ef4444',
            weight: 4,
            opacity: 1,
            fill: true,
            fillColor: '#ef4444',
            fillOpacity: isTriviaMode ? 0.35 : 0,
            className: 'poly-wrong-shake',
          };
        }

        if (isSelected || isHighlighted) {
          // Línea amarilla que identifica al país seleccionado / acertado
          return {
            color: '#fbbf24',
            weight: 2.5,
            opacity: 1,
            fill: true,
            fillColor: isTriviaMode ? '#d97706' : '#000000',
            fillOpacity: isTriviaMode ? 0.35 : 0.0001,
            className: 'poly-neon no-focus-outline',
          };
        }

        // En modo Trivia: cada país tiene un relleno opaco y bordes contrastados para que el mapa político
        // muestre las fronteras nítidas y NINGÚN nombre de país pueda asomarse desde el fondo, incluso con zoom cercano
        if (isTriviaMode) {
          return {
            color: '#475569',
            weight: 1.4,
            opacity: 0.95,
            fill: true,
            fillColor: '#1e293b',
            fillOpacity: 0.8,
            className: 'cursor-pointer hover:stroke-amber-400 transition-colors no-focus-outline',
          };
        }

        // Estado por defecto: interior 100% transparente para no tapar el mapa base
        if (currentLens === 'political') {
          return {
            color: country ? '#475569' : '#94a3b8',
            weight: country ? 1.4 : 0.6,
            opacity: country ? 0.9 : 0.4,
            fill: true,
            fillColor: '#000000',
            fillOpacity: 0.0001,
            className: 'cursor-pointer hover:stroke-amber-400 transition-colors no-focus-outline',
          };
        } else {
          return {
            color: country ? '#f1f5f9' : '#94a3b8',
            weight: country ? 1.6 : 0.7,
            opacity: country ? 0.9 : 0.4,
            fill: true,
            fillColor: '#000000',
            fillOpacity: 0.0001,
            className: 'cursor-pointer hover:stroke-amber-400 transition-colors no-focus-outline',
          };
        }
      },
      onEachFeature: (feature, layer) => {
        const country = findCountryMatch(feature?.properties);
        const name = country ? (currentLang === 'es' ? country.name_es : country.name_en) : (feature?.properties?.ADMIN || feature?.properties?.name || 'Country');
        const iso = country?.iso2.toLowerCase() || (feature?.properties?.ISO_A2 || '').toLowerCase();

        // Tooltip: In Trivia mode, hover tooltips are completely disabled so player knowledge is genuinely evaluated
        if (!isTriviaMode) {
          layer.bindTooltip(`<strong>${name}</strong>`, {
            sticky: true,
            direction: 'top',
            className: 'bg-slate-900/90 text-white text-xs px-2 py-1 rounded shadow-lg border border-slate-700',
          });
        }

        // Hover effect: solo resaltar el contorno exterior sin aplicar sombreado
        layer.on({
          mouseover: (e) => {
            const l = e.target;
            if (l.options.className && !l.options.className.includes('poly-neon')) {
              l.setStyle({
                weight: 2.25,
                color: '#fbbf24',
                opacity: 1,
                fill: true,
                fillColor: isTriviaMode ? '#334155' : '#000000',
                fillOpacity: isTriviaMode ? 0.85 : 0.0001,
              });
            }
          },
          mouseout: (e) => {
            geoLayer.resetStyle(e.target);
          },
          click: (e) => {
            L.DomEvent.stopPropagation(e);

            // Eliminar inmediatamente el foco del navegador para evitar rectángulos de selección
            try {
              if (e.originalEvent?.target && typeof (e.originalEvent.target as any).blur === 'function') {
                (e.originalEvent.target as any).blur();
              }
              if (document.activeElement instanceof HTMLElement || document.activeElement instanceof SVGElement) {
                document.activeElement.blur();
              }
            } catch {
              // no-op
            }

            if (isReviewMode) {
              return; // Modo Repaso: Únicamente permitidos zoom in, zoom out y arrastre del mapa
            }
            if (currentLevel === 3) {
              return; // In Level 3, countries are not presented
            }
            if (isTriviaMode && onTriviaMapClick) {
              if (triviaFlavor === 'continents') {
                onTriviaMapClick(country?.continent || '', country);
              } else {
                onTriviaMapClick(country?.id || iso, country);
              }
              return;
            }
            if (currentMode === 'quest' && onCountryMapClick) {
              onCountryMapClick(iso, name);
            } else {
              if (country) {
                onSelectCountry(country);
              }
            }
          },
        });
      },
    }).addTo(map);

    geoJsonLayerRef.current = geoLayer;
  }, [
    geoData,
    currentLens,
    currentMode,
    currentLang,
    currentLevel,
    selectedContinent,
    selectedCountry,
    highlightedIso2,
    shakeIso2,
    countries,
    findCountryMatch,
    onCountryMapClick,
    onSelectCountry,
    isTriviaMode,
    triviaFlavor,
    onTriviaMapClick,
    isReviewMode,
  ]);

  // Render Custom Vector Markers (Gold Star for Capitals & Semantic Badges for Landforms)
  useEffect(() => {
    const markersGroup = markersLayerGroupRef.current;
    if (!markersGroup) return;

    markersGroup.clearLayers();

    // =========================================================================
    // LEVEL 3: RENDER STRICTLY CONTINENTS, OCEANS & SEAS (NO COUNTRIES PRESENTED)
    // =========================================================================
    if (currentLevel === 3) {
      // 1. Continents
      CONTINENTS_DATA.forEach((cont) => {
        const name = currentLang === 'es' ? cont.name_es : cont.name_en;
        const contHtml = `
          <div class="px-3 py-1.5 rounded-2xl bg-emerald-950/90 border-2 border-emerald-400 text-white font-bold text-xs shadow-2xl flex items-center gap-1.5 cursor-pointer backdrop-blur-md hover:scale-110 transition-transform">
            <span class="text-base">${cont.icon}</span>
            <span class="whitespace-nowrap">${name}</span>
          </div>
        `;
        const divIcon = L.divIcon({
          html: contHtml,
          className: 'custom-continent-badge',
          iconAnchor: [60, 20],
        });
        const marker = L.marker(cont.center_coords, { icon: divIcon });
        const popup = `
          <div class="p-2.5 max-w-xs text-xs text-slate-100">
            <div class="flex items-center gap-2 mb-1">
              <span class="text-xl">${cont.icon}</span>
              <strong class="text-sm font-bold text-white">${name}</strong>
            </div>
            <p class="text-slate-300 leading-relaxed">${currentLang === 'es' ? cont.description_es : cont.description_en}</p>
          </div>
        `;
        marker.bindPopup(popup);
        markersGroup.addLayer(marker);
      });

      // 2. Oceans and Seas
      OCEANS_SEAS_DATA.forEach((os) => {
        const isOcean = os.type === 'ocean';
        const name = currentLang === 'es' ? os.name_es : os.name_en;
        const osHtml = `
          <div class="px-2.5 py-1 rounded-full ${
            isOcean
              ? 'bg-blue-950/90 border-2 border-blue-400 text-blue-200'
              : 'bg-sky-950/90 border-2 border-sky-400 text-sky-200'
          } font-bold text-[11px] shadow-2xl flex items-center gap-1.5 cursor-pointer backdrop-blur-md hover:scale-110 transition-transform">
            <span>${isOcean ? '🌊' : '⛵'}</span>
            <span class="whitespace-nowrap">${name}</span>
            <span class="text-[9px] font-mono text-amber-300">-${os.depth_m}m</span>
          </div>
        `;
        const divIcon = L.divIcon({
          html: osHtml,
          className: 'custom-ocean-sea-badge',
          iconAnchor: [50, 15],
        });
        const marker = L.marker(os.coords, { icon: divIcon });
        const popup = `
          <div class="p-3 max-w-sm text-xs text-slate-100 space-y-2">
            <div class="flex items-center justify-between border-b border-slate-700 pb-1">
              <strong class="text-sm font-bold text-white">${name}</strong>
              <span class="text-[10px] font-mono px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300 font-bold">
                ${isOcean ? (currentLang === 'es' ? 'Océano Global' : 'Global Ocean') : (currentLang === 'es' ? 'Mar Estratégico' : 'Strategic Sea')}
              </span>
            </div>
            <div class="text-[11px] text-amber-300 font-mono">
              ${currentLang === 'es' ? `Profundidad Máxima: -${os.depth_m}m • Área: ${os.area_sqkm}` : `Max Depth: -${os.depth_m}m • Area: ${os.area_sqkm}`}
            </div>
            <div class="p-2 rounded bg-slate-900 border border-slate-800 text-[11px] text-slate-300 space-y-1">
              <div><strong class="text-sky-300">Relieve Físico:</strong> ${currentLang === 'es' ? os.physical_lens_fact_es : os.physical_lens_fact_en}</div>
              <div><strong class="text-amber-300">Satélite Real:</strong> ${currentLang === 'es' ? os.satellite_lens_fact_es : os.satellite_lens_fact_en}</div>
            </div>
          </div>
        `;
        marker.bindPopup(popup);
        markersGroup.addLayer(marker);
      });

      return; // Do NOT render countries in Level 3!
    }

    // =========================================================================
    // TRIVIA MODE: NO TEXT BADGES ALLOWED ON THE MAP
    // In Trivia mode, users identify locations by shape and geographical position directly.
    // =========================================================================

    // 1. Render Capital Star (★) ONLY when a country is selected in Explore/Learning modes!
    // Never show capital pins during Trivia mode so answers are not revealed prematurely.
    if (!isTriviaMode && selectedCountry && selectedCountry.capital_coords) {
      const capitalName = currentLang === 'es' ? selectedCountry.capital_es : selectedCountry.capital_en;
      const countryName = currentLang === 'es' ? selectedCountry.name_es : selectedCountry.name_en;

      const starHtml = `
        <div class="capital-marker-pin group" title="${capitalName} (★ ${countryName})">
          <div class="capital-star text-base scale-125">★</div>
          <span class="capital-label opacity-100 ring-2 ring-amber-400">
            ${capitalName}
          </span>
        </div>
      `;

      const starIcon = L.divIcon({
        html: starHtml,
        className: 'custom-capital-icon',
        iconSize: [22, 22],
        iconAnchor: [11, 11],
      });

      const marker = L.marker(selectedCountry.capital_coords, {
        icon: starIcon,
        zIndexOffset: 1200,
      });
      marker.on('click', (e) => {
        L.DomEvent.stopPropagation(e);
        if (currentMode === 'quest' && onCountryMapClick) {
          onCountryMapClick(selectedCountry.iso2, countryName);
        } else {
          onSelectCountry(selectedCountry);
        }
      });
      markersGroup.addLayer(marker);
    }

    // 2. Render Semantic Badges for Landforms ONLY when a country is selected / actively being discussed!
    // REGLA CRÍTICA: En países pequeños las etiquetas se solapaban y tapaban al país.
    // Las etiquetas completas (tarjeta de nombre + flecha roja fina) SOLO aparecen cuando se ejecuta un Fly To.
    // De lo contrario, los demás accidentes se representan mediante un punto rojo discreto de 7px sin tapar el país.
    let activeFeatureRendered = false;

    if (selectedCountry && selectedCountry.landforms) {
      selectedCountry.landforms.forEach((landform) => {
        const badgeName = currentLang === 'es' ? landform.name_es : landform.name_en;
        const badgeIcon = getBadgeIcon(landform.type);

        const isActive = Boolean(
          activeFeatureBadge &&
            (activeFeatureBadge.id === landform.id ||
              (Math.abs(activeFeatureBadge.coords[0] - landform.coords[0]) < 0.005 &&
                Math.abs(activeFeatureBadge.coords[1] - landform.coords[1]) < 0.005))
        );

        if (isActive) {
          activeFeatureRendered = true;

          // Marcador ACTIVO de Fly To: Flecha roja fina + tarjeta oscura de alto contraste (nunca se pierde en nieve)
          const badgeHtml = createFlyToArrowMarkerHtml(
            badgeName,
            badgeIcon,
            landform.elevation_m,
            true
          );

          const badgeDivIcon = L.divIcon({
            html: badgeHtml,
            className: 'custom-flyto-arrow-icon',
            iconSize: [0, 0],
            iconAnchor: [0, 0],
          });

          const badgeMarker = L.marker(landform.coords, {
            icon: badgeDivIcon,
            zIndexOffset: 3500, // Máxima prioridad por encima de estrellas y fronteras
          });

          badgeMarker.on('click', (e) => {
            L.DomEvent.stopPropagation(e);
          });

          const popupContent = `
            <div class="p-2.5 max-w-xs text-slate-100 text-xs">
              <div class="flex items-center gap-2 mb-1.5 font-bold text-amber-400">
                <span class="text-base">${badgeIcon}</span>
                <span class="text-sm text-white">${badgeName}</span>
              </div>
              <p class="text-slate-300 leading-relaxed mb-2">${currentLang === 'es' ? landform.description_es : landform.description_en}</p>
              ${landform.elevation_m ? `<div class="text-[11px] text-amber-300 font-mono">Elevation: ${landform.elevation_m} m</div>` : ''}
              ${landform.length_km ? `<div class="text-[11px] text-sky-300 font-mono">Length: ${landform.length_km} km</div>` : ''}
            </div>
          `;

          badgeMarker.bindPopup(popupContent, { offset: [0, -38] });
          markersGroup.addLayer(badgeMarker);
        } else {
          // NO es el accidente activo de Fly To: Punto rojo discreto de 7px SIN tarjeta de texto
          // para garantizar que países pequeños como Costa Rica, Panamá, El Salvador, Jamaica nunca se tapen.
          const dotHtml = `
            <div class="custom-landform-dot" title="${badgeName}">
              <div class="landform-dot-core"></div>
            </div>
          `;

          const dotDivIcon = L.divIcon({
            html: dotHtml,
            className: 'custom-landform-dot-icon',
            iconSize: [12, 12],
            iconAnchor: [6, 6],
          });

          const dotMarker = L.marker(landform.coords, {
            icon: dotDivIcon,
            zIndexOffset: 650,
          });

          dotMarker.bindTooltip(`<strong>${badgeIcon} ${badgeName}</strong>`, {
            direction: 'top',
            offset: [0, -6],
            className: 'bg-slate-900/95 text-white text-[11px] px-2 py-0.5 rounded shadow border border-slate-700 font-medium',
          });

          dotMarker.on('click', (e) => {
            L.DomEvent.stopPropagation(e);
            if (onFlyToFeature) {
              onFlyToFeature(landform.coords, 8, landform);
            }
          });

          markersGroup.addLayer(dotMarker);
        }
      });
    }

    // 2.b. Render Surrounding Seas & Oceans for the selected country
    // Solo mostrar tarjeta marina expandida cuando se ejecuta un Fly To hacia ese mar/océano
    if (selectedCountry) {
      const surroundingProfile = getCountrySurroundingWaters(selectedCountry);
      if (surroundingProfile && surroundingProfile.waters) {
        surroundingProfile.waters.forEach((water) => {
          const waterName = currentLang === 'es' ? water.name_es : water.name_en;
          const waterDir = currentLang === 'es' ? water.direction_es : water.direction_en;
          const isOcean = water.type === 'ocean';
          const waterIcon = isOcean ? '🌊' : '⛵';

          const isActive = Boolean(
            activeFeatureBadge &&
              (activeFeatureBadge.id === water.id ||
                (Math.abs(activeFeatureBadge.coords[0] - water.coords[0]) < 0.05 &&
                  Math.abs(activeFeatureBadge.coords[1] - water.coords[1]) < 0.05))
          );

          if (isActive) {
            activeFeatureRendered = true;

            const marineBadgeHtml = createMarineWaterMarkerHtml(
              waterName,
              waterDir,
              waterIcon,
              isOcean,
              true
            );

            const marineDivIcon = L.divIcon({
              html: marineBadgeHtml,
              className: 'custom-marine-water-icon',
              iconSize: [0, 0],
              iconAnchor: [0, 0],
            });

            const marineMarker = L.marker(water.coords, {
              icon: marineDivIcon,
              zIndexOffset: 3500,
            });

            marineMarker.on('click', (e) => {
              L.DomEvent.stopPropagation(e);
            });

            const marinePopupContent = `
              <div class="p-3 max-w-xs text-slate-100 text-xs">
                <div class="flex items-center justify-between border-b border-cyan-800 pb-1.5 mb-2">
                  <div class="flex items-center gap-1.5 font-bold text-cyan-300">
                    <span class="text-base">${waterIcon}</span>
                    <span class="text-sm text-white">${waterName}</span>
                  </div>
                  <span class="text-[9px] font-mono px-1.5 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-500/40 uppercase font-bold">
                    ${isOcean ? (currentLang === 'es' ? 'Océano' : 'Ocean') : (currentLang === 'es' ? 'Mar / Golfo' : 'Sea / Gulf')}
                  </span>
                </div>
                <div class="text-[10px] text-cyan-200 font-mono mb-1.5 flex items-center gap-1">
                  <span>⚓</span>
                  <span>${waterDir}</span>
                </div>
                <p class="text-slate-300 leading-relaxed">${currentLang === 'es' ? water.description_es : water.description_en}</p>
              </div>
            `;

            marineMarker.bindPopup(marinePopupContent, { offset: [0, -32] });
            markersGroup.addLayer(marineMarker);
          } else {
            // Agua no activa: Boya marina discreta con tooltip sin tarjeta gigante para no estorbar costas
            const buoyHtml = `
              <div class="custom-water-buoy" title="${waterName} (${waterDir})">
                <span class="water-buoy-icon">${waterIcon}</span>
              </div>
            `;

            const buoyDivIcon = L.divIcon({
              html: buoyHtml,
              className: 'custom-water-buoy-icon',
              iconSize: [22, 22],
              iconAnchor: [11, 11],
            });

            const buoyMarker = L.marker(water.coords, {
              icon: buoyDivIcon,
              zIndexOffset: 550,
            });

            buoyMarker.bindTooltip(
              `<strong>${waterIcon} ${waterName}</strong> <span class="text-cyan-300 font-mono text-[10px]">(${waterDir})</span>`,
              {
                direction: 'top',
                offset: [0, -12],
                className: 'bg-cyan-950/95 text-white text-[11px] px-2 py-0.5 rounded shadow border border-cyan-700',
              }
            );

            buoyMarker.on('click', (e) => {
              L.DomEvent.stopPropagation(e);
              if (onFlyToFeature) {
                onFlyToFeature(water.coords, water.zoom_level || 5, {
                  id: water.id,
                  type: water.type === 'ocean' ? 'ocean' : 'sea',
                  name_en: water.name_en,
                  name_es: water.name_es,
                  coords: water.coords,
                  description_en: `${water.direction_en} — ${water.description_en}`,
                  description_es: `${water.direction_es} — ${water.description_es}`,
                });
              }
            });

            markersGroup.addLayer(buoyMarker);
          }
        });
      }
    }

    // 3. Highlight specific active Landform Feature ONLY if not already rendered as part of selected country
    if (activeFeatureBadge && !activeFeatureRendered) {
      const activeName = currentLang === 'es' ? activeFeatureBadge.name_es : activeFeatureBadge.name_en;
      const activeIcon = getBadgeIcon(activeFeatureBadge.type);

      const activeBadgeHtml = createFlyToArrowMarkerHtml(
        activeName,
        activeIcon,
        activeFeatureBadge.elevation_m,
        true // CRITICAL: isActive=true ensures the red arrow and pulsing card are guaranteed!
      );
      const activeDivIcon = L.divIcon({
        html: activeBadgeHtml,
        className: 'custom-flyto-arrow-icon',
        iconSize: [0, 0],
        iconAnchor: [0, 0],
      });
      const activeMarker = L.marker(activeFeatureBadge.coords, {
        icon: activeDivIcon,
        zIndexOffset: 3500,
      });

      activeMarker.on('click', (e) => {
        L.DomEvent.stopPropagation(e);
      });

      const popupContent = `
        <div class="p-2.5 max-w-xs text-slate-100 text-xs">
          <div class="flex items-center gap-2 mb-1.5 font-bold text-amber-400">
            <span class="text-base">${activeIcon}</span>
            <span class="text-sm text-white">${activeName}</span>
          </div>
          <p class="text-slate-300 leading-relaxed mb-2">${currentLang === 'es' ? activeFeatureBadge.description_es : activeFeatureBadge.description_en}</p>
          ${activeFeatureBadge.elevation_m ? `<div class="text-[11px] text-amber-300 font-mono">Elevation: ${activeFeatureBadge.elevation_m} m</div>` : ''}
          ${activeFeatureBadge.length_km ? `<div class="text-[11px] text-sky-300 font-mono">Length: ${activeFeatureBadge.length_km} km</div>` : ''}
        </div>
      `;
      activeMarker.bindPopup(popupContent, { offset: [0, -38] });
      markersGroup.addLayer(activeMarker);
    }

    // =========================================================================
    // REVIEW / REPASO MODE BEACON MARKER (Visual Callout on Map)
    // =========================================================================
    if (isReviewMode && reviewCountry) {
      const isEs = currentLang === 'es';
      const cName = isEs ? reviewCountry.name_es : reviewCountry.name_en;
      const capName = isEs ? reviewCountry.capital_es : reviewCountry.capital_en;
      const coords = (reviewTopic === 'capitals' && reviewCountry.capital_coords)
        ? reviewCountry.capital_coords
        : reviewCountry.center_coords;

      let markerHtml = '';
      if (reviewTopic === 'capitals') {
        markerHtml = `
          <div class="review-map-beacon flex items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-sky-950/95 border-2 border-sky-400 text-white font-extrabold shadow-2xl backdrop-blur-md ring-4 ring-sky-400/30 animate-pulse">
            <span class="text-amber-300 text-sm">⭐</span>
            <span class="whitespace-nowrap text-white font-black text-sm sm:text-base">${capName}</span>
            <span class="text-[11px] text-sky-300 font-semibold">(${cName})</span>
          </div>
        `;
      } else if (reviewTopic === 'flags') {
        markerHtml = `
          <div class="review-map-beacon flex items-center gap-2 p-1.5 pr-3 rounded-2xl bg-slate-900/95 border-2 border-rose-400 text-white font-extrabold shadow-2xl backdrop-blur-md ring-4 ring-rose-400/30">
            <img src="https://flagcdn.com/w80/${reviewCountry.iso2.toLowerCase()}.png" class="w-8 h-5.5 object-cover rounded shadow border border-slate-700" alt="" />
            <span class="whitespace-nowrap font-black text-xs sm:text-sm">${cName}</span>
          </div>
        `;
      } else {
        markerHtml = `
          <div class="review-map-beacon flex items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-amber-500 text-slate-950 font-black text-xs sm:text-sm shadow-2xl backdrop-blur-md ring-4 ring-amber-400/40">
            <span>📍</span>
            <span class="whitespace-nowrap">${cName}</span>
          </div>
        `;
      }

      const reviewDivIcon = L.divIcon({
        html: markerHtml,
        className: 'custom-review-beacon-icon',
        iconSize: [0, 0],
        iconAnchor: [0, 0],
      });

      const beaconMarker = L.marker(coords, {
        icon: reviewDivIcon,
        zIndexOffset: 4000,
      });
      markersGroup.addLayer(beaconMarker);
    }
  }, [
    countries,
    selectedCountry,
    currentLang,
    currentMode,
    currentLevel,
    selectedContinent,
    activeFeatureBadge,
    onCountryMapClick,
    onSelectCountry,
    onFlyToFeature,
    isPlayMode,
    isTriviaMode,
    triviaFlavor,
    onTriviaMapClick,
    isReviewMode,
    reviewCountry,
    reviewTopic,
  ]);


  // El mapa de inicio de cualquier modo de trabajo debe presentar el mapamundi completo
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;
    if (!selectedCountry && !highlightedIso2 && !activeFeatureBadge && !isReviewMode) {
      map.invalidateSize();
      map.setView([20, 0], 2);
    }
  }, [currentMode, isPlayMode, selectedCountry, highlightedIso2, activeFeatureBadge, isReviewMode]);

  // Handle Fly-To Coords & Zoom Changes
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map || !flyToCoords) return;

    map.flyTo(flyToCoords, flyToZoom || 6, {
      duration: 1.5,
      easeLinearity: 0.25,
    });
  }, [flyToCoords, flyToZoom]);

  return (
    <div className="relative w-full h-full bg-slate-950 overflow-hidden select-none">
      <div ref={mapContainerRef} className="w-full h-full z-0" />

      {/* Loading Indicator for GeoJSON */}
      {isLoadingGeo && (
        <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-slate-900/90 text-amber-300 px-3 py-1.5 rounded-full border border-slate-700 text-xs backdrop-blur-md shadow-md animate-pulse">
          <svg className="w-3.5 h-3.5 animate-spin" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
          </svg>
          <span>{currentLang === 'es' ? 'Cargando fronteras vectoriales...' : 'Loading vector boundaries...'}</span>
        </div>
      )}

      {/* Cartographic Compass Rose Watermark */}
      <div className="absolute bottom-6 left-6 pointer-events-none z-10 opacity-70 flex flex-col items-center">
        <div className="w-10 h-10 rounded-full border border-amber-400/40 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center text-amber-400 font-bold text-xs shadow-inner">
          <span className="transform -translate-y-0.5">N ▲</span>
        </div>
        <span className="text-[10px] text-slate-400 font-mono tracking-widest mt-1">GEOMASTER</span>
      </div>
    </div>
  );
};

// Helper: Semantic Badge CSS classes
function getBadgeCssClass(type: SemanticBadgeType): string {
  switch (type) {
    case 'river':
      return 'phys-badge-river';
    case 'peak':
    case 'mountain':
      return 'phys-badge-peak';
    case 'lake':
      return 'phys-badge-lake';
    case 'volcano':
      return 'phys-badge-volcano';
    case 'desert':
      return 'phys-badge-desert';
    case 'strait':
    case 'bay':
    case 'isthmus':
    case 'fjord':
      return 'phys-badge-strait';
    default:
      return 'bg-slate-700';
  }
}

// Helper: Semantic Badge Icon
function getBadgeIcon(type: SemanticBadgeType): string {
  switch (type) {
    case 'river':
      return '🌊';
    case 'peak':
    case 'mountain':
      return '⛰️';
    case 'lake':
      return '💧';
    case 'volcano':
      return '🌋';
    case 'desert':
      return '🏜️';
    case 'strait':
      return '⚓';
    case 'bay':
      return '⛵';
    case 'isthmus':
      return '🌉';
    case 'fjord':
      return '🏞️';
    case 'island':
    case 'archipelago':
      return '🏝️';
    case 'peninsula':
    case 'cape':
      return '🧭';
    default:
      return '📍';
  }
}

// Helper: Marcador de Accidente Geográfico Clave con flecha roja fina y tarjeta oscura de alto contraste (para todos los países)
function createFlyToArrowMarkerHtml(
  name: string,
  icon: string,
  elevation_m?: number,
  isActive: boolean = false
): string {
  return `
    <div class="flyto-marker-wrapper ${isActive ? 'flyto-marker-active' : ''}">
      <!-- Tarjeta oscura que nunca se pierde sobre la nieve blanca -->
      <div class="flyto-badge-card ${isActive ? 'flyto-card-active' : ''}">
        <span class="text-xs shrink-0">${icon}</span>
        <span class="flyto-badge-name">${name}</span>
        ${
          elevation_m
            ? `<span class="flyto-badge-elev">${elevation_m.toLocaleString()}m</span>`
            : ''
        }
      </div>

      <!-- Flecha roja no tan gruesa apuntando hacia abajo -->
      <div class="flyto-red-arrow">
        <svg width="20" height="28" viewBox="0 0 20 28" fill="none" class="flyto-arrow-svg ${isActive ? 'scale-110 drop-shadow-[0_0_8px_rgba(239,68,68,0.9)]' : ''}">
          <!-- Línea vertical roja fina (2px de espesor) -->
          <line x1="10" y1="0" x2="10" y2="18" stroke="#ef4444" stroke-width="2" stroke-linecap="round" />
          <!-- Cabeza de flecha roja estilizada apuntando a la coordenada exacta -->
          <polygon points="4,15 10,27 16,15" fill="#ef4444" stroke="#991b1b" stroke-width="0.8" stroke-linejoin="round" />
          <circle cx="10" cy="18" r="1.2" fill="#ffffff" />
        </svg>
      </div>
    </div>
  `;
}

// Helper: Marcador marino en alta mar para Mares y Océanos que circundan al país
function createMarineWaterMarkerHtml(
  name: string,
  direction: string,
  icon: string,
  isOcean: boolean,
  isActive: boolean = false
): string {
  return `
    <div class="marine-water-wrapper ${isActive ? 'marine-water-active' : ''}">
      <div class="marine-water-card ${isActive ? 'marine-card-active' : ''} ${isOcean ? 'marine-card-ocean' : 'marine-card-sea'}">
        <span class="marine-water-icon">${icon}</span>
        <div class="marine-water-text-block">
          <span class="marine-water-name">${name}</span>
          <span class="marine-water-dir">${direction}</span>
        </div>
      </div>
      <div class="marine-water-anchor">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" class="marine-anchor-svg ${isActive ? 'scale-125' : ''}">
          <circle cx="10" cy="10" r="8" fill="#0284c7" fill-opacity="0.35" stroke="#38bdf8" stroke-width="2" />
          <circle cx="10" cy="10" r="3.5" fill="#38bdf8" stroke="#ffffff" stroke-width="1.5" />
        </svg>
      </div>
    </div>
  `;
}
