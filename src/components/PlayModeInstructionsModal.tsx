import React, { useState, useEffect } from 'react';
import { Language, CountryDossierData } from '../types/geography';
import {
  ZoomIn,
  ZoomOut,
  Layers,
  MousePointerClick,
  FileText,
  X,
  ArrowRight,
  ArrowLeft,
  Compass,
  MapPin
} from 'lucide-react';

interface PlayModeInstructionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  countries: CountryDossierData[];
  onHighlightCountry: (iso2: string | null) => void;
  onFlyTo: (coords: [number, number], zoom: number) => void;
  onSelectCountryForPreview: (country: CountryDossierData) => void;
  onResetView?: () => void;
  onCloseDossier?: () => void;
}

export const PlayModeInstructionsModal: React.FC<PlayModeInstructionsModalProps> = ({
  isOpen,
  onClose,
  currentLang,
  countries,
  onHighlightCountry,
  onFlyTo,
  onSelectCountryForPreview,
  onResetView,
  onCloseDossier,
}) => {
  // Step 1: Controles de Zoom (+ y -)
  // Step 2: Selección del tipo de mapa (Lentes)
  // Step 3: Selección de un país (ejemplo real: Venezuela)
  // Step 4: Ficha real en el panel lateral (Venezuela abierta en drawer)
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [zoomRect, setZoomRect] = useState<{ top: number; left: number; width: number; height: number } | null>(null);
  const [lensRect, setLensRect] = useState<{ top: number; left: number; width: number; height: number } | null>(null);

  const isEs = currentLang === 'es';

  // Find Venezuela in our rich dataset for the realistic country example
  const targetCountry = countries.find((c) => c.iso2.toLowerCase() === 've') || countries[0];

  // Measure real positions of DOM elements dynamically across steps
  useEffect(() => {
    if (!isOpen) {
      setCurrentStep(1);
      return;
    }

    const measureElements = () => {
      // Step 1: Measure real Leaflet zoom controls (+ and -)
      const zoomEl = document.querySelector('.leaflet-control-zoom');
      if (zoomEl) {
        const r = zoomEl.getBoundingClientRect();
        setZoomRect({ top: r.top, left: r.left, width: r.width, height: r.height });
      }

      // Step 2: Measure real Navbar lens switcher buttons
      const lensEl = document.getElementById('tour-lens-switcher');
      if (lensEl) {
        const r = lensEl.getBoundingClientRect();
        setLensRect({ top: r.top, left: r.left, width: r.width, height: r.height });
      }
    };

    measureElements();
    window.addEventListener('resize', measureElements);
    return () => window.removeEventListener('resize', measureElements);
  }, [isOpen, currentStep]);

  // Handle actions per step
  useEffect(() => {
    if (!isOpen) return;

    if (currentStep === 1) {
      if (onResetView) onResetView();
      if (onCloseDossier) onCloseDossier();
      onHighlightCountry(null);
    } else if (currentStep === 2) {
      if (onCloseDossier) onCloseDossier();
      onHighlightCountry(null);
    } else if (currentStep === 3) {
      // Step 3: Fly to Venezuela and highlight it on the real map (close side dossier so map is fully visible)
      if (onCloseDossier) onCloseDossier();
      if (targetCountry) {
        onFlyTo(targetCountry.center_coords, targetCountry.zoom_level || 6);
        onHighlightCountry(targetCountry.iso2);
      }
    } else if (currentStep === 4) {
      // Step 4: Open real Country Dossier on the right with Venezuela's complete data!
      if (targetCountry) {
        onHighlightCountry(targetCountry.iso2);
        onSelectCountryForPreview(targetCountry);
      }
    }
  }, [isOpen, currentStep, targetCountry, onCloseDossier, onFlyTo, onHighlightCountry, onResetView, onSelectCountryForPreview]);

  if (!isOpen) return null;

  const handleCloseTour = () => {
    if (onResetView) onResetView();
    if (onCloseDossier) onCloseDossier();
    onClose();
  };

  const handleNextStep = () => {
    if (currentStep < 4) {
      setCurrentStep((prev) => prev + 1);
    } else {
      handleCloseTour();
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSkipTour = () => {
    handleCloseTour();
  };

  return (
    <div className="fixed inset-0 z-50 pointer-events-none select-none">
      {/* 
        NO hay capa de oscurecimiento ni atenuación global.
        Los botones reales, el mapa y la barra superior se mantienen 100% nítidos, 
        brillantes y visibles sin ningún velo oscuro.
      */}

      {/* =========================================================================
          PASO 1: CONTROLES DE ZOOM (+ Y −)
          Sin atenuación: resaltado con anillo dorado brillante sobre los botones reales
          ========================================================================= */}
      {currentStep === 1 && (
        <div className="relative w-full h-full pointer-events-none">
          {/* Anillo de resalte activo sobre los botones reales + y - de Leaflet */}
          <div
            style={{
              top: zoomRect ? `${zoomRect.top - 4}px` : '74px',
              left: zoomRect ? `${zoomRect.left - 4}px` : '10px',
              width: zoomRect ? `${zoomRect.width + 8}px` : '42px',
              height: zoomRect ? `${zoomRect.height + 8}px` : '76px',
            }}
            className="absolute rounded-xl ring-4 ring-amber-400 ring-offset-2 ring-offset-slate-950 shadow-[0_0_28px_rgba(251,191,36,1)] animate-pulse pointer-events-none z-50"
          >
            {/* Etiqueta flotante señalando el control */}
            <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-amber-400 text-slate-950 text-[10px] font-mono font-black uppercase tracking-wider shadow-lg whitespace-nowrap">
              + Zoom −
            </div>
          </div>

          {/* Mensaje Flotante 1/4 (anclado a la derecha del control de zoom) */}
          <div
            style={{
              top: zoomRect ? `${zoomRect.top - 6}px` : '70px',
              left: zoomRect ? `${zoomRect.left + zoomRect.width + 18}px` : '62px',
            }}
            className="absolute max-w-[calc(100vw-80px)] sm:max-w-sm w-full bg-slate-900/98 border-2 border-amber-400 rounded-2xl shadow-2xl p-4 sm:p-5 text-slate-100 pointer-events-auto z-50 backdrop-blur-md animate-in fade-in slide-in-from-left-4 duration-200"
          >
            {/* Flecha apuntando hacia la izquierda hacia los botones reales + y - */}
            <div className="hidden sm:block absolute -left-2.5 top-6 w-0 h-0 border-y-8 border-y-transparent border-r-[10px] border-r-amber-400" />

            {/* Encabezado con paso y botón X para avanzar */}
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold font-mono bg-amber-400 text-slate-950">
                  {isEs ? 'Paso 1 de 4' : 'Step 1 of 4'}
                </span>
                <span className="text-xs font-mono text-amber-300 font-bold flex items-center gap-1">
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span>{isEs ? 'Visión del Mapa' : 'Map View'}</span>
                </span>
              </div>
              <button
                type="button"
                onClick={handleNextStep}
                title={isEs ? 'Cerrar y ver siguiente paso' : 'Close and view next step'}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Título & Explicación */}
            <h3 className="text-sm sm:text-base font-extrabold text-white mb-1.5 flex items-center gap-1.5">
              <span>{isEs ? 'Símbolos de + y − (Acercar y Alejar)' : '+ and − Symbols (Zoom In & Out)'}</span>
            </h3>

            <p className="text-xs text-slate-300 leading-relaxed mb-3">
              {isEs
                ? 'Usa el botón [+] para acercar la visión a cualquier región o país, y el botón [−] para alejarte y contemplar el mapamundi completo. También puedes usar la rueda del ratón o el gesto táctil de pellizcar.'
                : 'Click [+] to zoom in on any country or region, and [−] to zoom out to the full world view. You can also use your mouse wheel or pinch-to-zoom.'}
            </p>

            {/* Botones de navegación */}
            <div className="flex items-center justify-between pt-2 border-t border-slate-800/80">
              <button
                type="button"
                onClick={handleSkipTour}
                className="text-[11px] text-slate-400 hover:text-slate-200 underline font-medium"
              >
                {isEs ? 'Saltar guía' : 'Skip guide'}
              </button>

              <button
                type="button"
                onClick={handleNextStep}
                className="px-3.5 py-1.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-black flex items-center gap-1.5 shadow-md shadow-amber-400/25 active:scale-95 transition-all"
              >
                <span>{isEs ? 'Cerrar y Ver Siguiente (1/4)' : 'Close & Next (1/4)'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          PASO 2: SELECCIÓN DEL TIPO DE MAPA (LENTES)
          Sin atenuación: resaltado brillante sobre los 3 botones reales en el navbar
          ========================================================================= */}
      {currentStep === 2 && (
        <div className="relative w-full h-full pointer-events-none">
          {/* Anillo de resalte activo sobre los botones reales del navbar */}
          {lensRect && (
            <div
              style={{
                top: `${lensRect.top - 4}px`,
                left: `${lensRect.left - 4}px`,
                width: `${lensRect.width + 8}px`,
                height: `${lensRect.height + 8}px`,
              }}
              className="absolute rounded-2xl ring-4 ring-blue-400 ring-offset-2 ring-offset-slate-950 shadow-[0_0_30px_rgba(59,130,246,1)] animate-pulse pointer-events-none z-50"
            />
          )}

          {/* Mensaje Flotante 2/4 (anclado debajo de los botones de lentes) */}
          <div
            style={{
              top: lensRect ? `${lensRect.top + lensRect.height + 14}px` : '74px',
              left: lensRect
                ? `${Math.max(12, Math.min(window.innerWidth - 410, lensRect.left + lensRect.width / 2 - 200))}px`
                : '50%',
            }}
            className="absolute max-w-[calc(100vw-24px)] sm:max-w-md w-full bg-slate-900/98 border-2 border-blue-400 rounded-2xl shadow-2xl p-4 sm:p-5 text-slate-100 pointer-events-auto z-50 backdrop-blur-md animate-in fade-in slide-in-from-top-4 duration-200"
          >
            {/* Flecha apuntando hacia arriba hacia los botones de lentes */}
            <div className="hidden sm:block absolute -top-2.5 left-1/2 -translate-x-1/2 w-0 h-0 border-x-8 border-x-transparent border-b-[10px] border-b-blue-400" />

            {/* Encabezado con paso y botón X */}
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold font-mono bg-blue-500 text-white">
                  {isEs ? 'Paso 2 de 4' : 'Step 2 of 4'}
                </span>
                <span className="text-xs font-mono text-blue-300 font-bold flex items-center gap-1">
                  <Layers className="w-3.5 h-3.5" />
                  <span>{isEs ? 'Lentes Cartográficas' : 'Cartographic Lenses'}</span>
                </span>
              </div>
              <button
                type="button"
                onClick={handleNextStep}
                title={isEs ? 'Cerrar y ver siguiente paso' : 'Close and view next step'}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Título & Explicación */}
            <h3 className="text-sm sm:text-base font-extrabold text-white mb-1.5">
              {isEs ? 'Selección del Tipo de Mapa' : 'Map Type Selection'}
            </h3>

            <p className="text-xs text-slate-300 leading-relaxed mb-3">
              {isEs
                ? 'En la barra superior puedes alternar entre las 3 lentes cartográficas: Político (fronteras soberanas y capitales), Relieve (cordilleras e hipsometría) y Satélite (fotografía orbital de la Tierra). Siempre inicias en el mapa Político.'
                : 'In the top bar you can switch across 3 cartographic lenses: Political (borders & capitals), Relief (mountain ranges & hypsometric elevation), and Satellite (orbital imagery). It always starts on the Political map.'}
            </p>

            {/* Botones de navegación */}
            <div className="flex items-center justify-between pt-2 border-t border-slate-800/80">
              <button
                type="button"
                onClick={handlePrevStep}
                className="text-[11px] text-slate-400 hover:text-white flex items-center gap-1 font-semibold"
              >
                <ArrowLeft className="w-3 h-3" />
                <span>{isEs ? 'Anterior' : 'Back'}</span>
              </button>

              <button
                type="button"
                onClick={handleNextStep}
                className="px-3.5 py-1.5 rounded-xl bg-blue-500 hover:bg-blue-400 text-white text-xs font-black flex items-center gap-1.5 shadow-md shadow-blue-500/25 active:scale-95 transition-all"
              >
                <span>{isEs ? 'Cerrar y Ver Siguiente (2/4)' : 'Close & Next (2/4)'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          PASO 3: SELECCIÓN DE UN PAÍS (EJEMPLO REAL: VENEZUELA)
          Indica un país concreto (Venezuela), sin animación de estrella genérica.
          ========================================================================= */}
      {currentStep === 3 && (
        <div className="relative w-full h-full pointer-events-none">
          {/* Indicador flotante señalando directamente a Venezuela en el mapa */}
          <div className="absolute top-[48%] left-[50%] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-40 flex flex-col items-center">
            <div className="flex items-center gap-2 bg-slate-900/95 text-amber-300 px-3 py-1.5 rounded-xl border-2 border-amber-400 shadow-[0_0_25px_rgba(251,191,36,0.9)] animate-bounce font-bold text-xs sm:text-sm">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>{isEs ? '📍 Venezuela seleccionada en el mapa' : '📍 Venezuela focused on map'}</span>
            </div>
          </div>

          {/* Mensaje Flotante 3/4 (anclado a la izquierda para dejar ver el país en el centro) */}
          <div className="absolute top-[28%] sm:top-[34%] left-4 sm:left-[48px] max-w-[calc(100vw-32px)] sm:max-w-md w-full bg-slate-900/98 border-2 border-emerald-400 rounded-2xl shadow-2xl p-4 sm:p-5 text-slate-100 pointer-events-auto z-50 backdrop-blur-md animate-in fade-in slide-in-from-left-4 duration-200">
            {/* Encabezado con paso y botón X */}
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold font-mono bg-emerald-500 text-slate-950 font-black">
                  {isEs ? 'Paso 3 de 4' : 'Step 3 of 4'}
                </span>
                <span className="text-xs font-mono text-emerald-300 font-bold flex items-center gap-1">
                  <MousePointerClick className="w-3.5 h-3.5" />
                  <span>{isEs ? 'Selección en el Mapa' : 'Map Selection'}</span>
                </span>
              </div>
              <button
                type="button"
                onClick={handleNextStep}
                title={isEs ? 'Cerrar y ver siguiente paso' : 'Close and view next step'}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Título & Explicación con país concreto */}
            <h3 className="text-sm sm:text-base font-extrabold text-white mb-1.5 flex items-center gap-2">
              <span>{isEs ? 'Selección de un País (ej. Venezuela)' : 'Selecting a Country (e.g. Venezuela)'}</span>
            </h3>

            <p className="text-xs text-slate-300 leading-relaxed mb-3">
              {isEs
                ? 'Haz clic o toca directamente sobre cualquier nación en el mapa mundi, por ejemplo Venezuela. Al seleccionarlo, su contorno se resaltará con una línea dorada, se enfocará su territorio y se ubicará la estrella en su capital (Caracas).'
                : 'Click or tap directly on any country on the world map, for example Venezuela. Upon selection, its boundary lights up in gold, its territory centers smoothly, and its capital city (Caracas) is identified.'}
            </p>

            {/* Botones de navegación */}
            <div className="flex items-center justify-between pt-2 border-t border-slate-800/80">
              <button
                type="button"
                onClick={handlePrevStep}
                className="text-[11px] text-slate-400 hover:text-white flex items-center gap-1 font-semibold"
              >
                <ArrowLeft className="w-3 h-3" />
                <span>{isEs ? 'Anterior' : 'Back'}</span>
              </button>

              <button
                type="button"
                onClick={handleNextStep}
                className="px-3.5 py-1.5 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 text-xs font-black flex items-center gap-1.5 shadow-md shadow-emerald-400/25 active:scale-95 transition-all"
              >
                <span>{isEs ? 'Cerrar y Ver Siguiente (3/4)' : 'Close & Next (3/4)'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          PASO 4: PRESENTACIÓN DE LA INFORMACIÓN EN EL PANEL LATERAL (REAL CON VENEZUELA)
          Abre el panel derecho real (CountryDossier) con los datos completos de Venezuela.
          El mensaje flotante se ancla a la izquierda del panel real apuntando a él.
          ========================================================================= */}
      {currentStep === 4 && (
        <div className="relative w-full h-full pointer-events-none">
          {/* Mensaje Flotante 4/4 (anclado a la izquierda del panel lateral derecho de 440px) */}
          <div className="absolute top-[80px] sm:top-[90px] right-4 sm:right-[460px] max-w-[calc(100vw-32px)] sm:max-w-md w-full bg-slate-900/98 border-2 border-teal-400 rounded-2xl shadow-2xl p-4 sm:p-5 text-slate-100 pointer-events-auto z-50 backdrop-blur-md animate-in fade-in slide-in-from-right-4 duration-200">
            {/* Flecha apuntando a la derecha hacia el panel lateral real abierto */}
            <div className="hidden sm:block absolute -right-2.5 top-12 w-0 h-0 border-y-8 border-y-transparent border-l-[10px] border-l-teal-400" />

            {/* Encabezado con paso y botón X */}
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold font-mono bg-teal-400 text-slate-950 font-black">
                  {isEs ? 'Paso 4 de 4' : 'Step 4 of 4'}
                </span>
                <span className="text-xs font-mono text-teal-300 font-bold flex items-center gap-1">
                  <FileText className="w-3.5 h-3.5" />
                  <span>{isEs ? 'Ficha Real en el Panel Lateral' : 'Real Country Dossier'}</span>
                </span>
              </div>
              <button
                type="button"
                onClick={handleCloseTour}
                title={isEs ? 'Cerrar y finalizar recorrido' : 'Close and finish walkthrough'}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Título & Explicación con el panel real abierto */}
            <h3 className="text-sm sm:text-base font-extrabold text-white mb-1.5 flex items-center gap-2">
              <span>{isEs ? 'Información en el Panel Lateral (Venezuela)' : 'Dossier in the Side Panel (Venezuela)'}</span>
            </h3>

            <p className="text-xs text-slate-300 leading-relaxed mb-2.5">
              {isEs
                ? '¡Observa a tu derecha la ficha real que se acaba de abrir! Al seleccionar un país, este panel lateral muestra de inmediato:'
                : 'Notice on your right the real dossier that just opened! When selecting any country, this drawer immediately presents:'}
            </p>

            <ul className="space-y-1.5 text-xs text-slate-300 mb-3.5 bg-slate-950/70 p-2.5 rounded-xl border border-slate-800">
              <li className="flex items-start gap-2">
                <span className="text-amber-400 font-bold shrink-0">🏛️</span>
                <span>{isEs ? 'Bandera oficial, capital (Caracas), población y PIB per cápita.' : 'Official flag, capital (Caracas), population & GDP per capita.'}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 font-bold shrink-0">🛢️</span>
                <span>{isEs ? 'Productos económicos con iconos distintivos (petróleo crudo, chatarra de metales, oro).' : 'Economic products with contextual icons (crude petroleum, scrap metals, gold).'}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 font-bold shrink-0">📍</span>
                <span>{isEs ? 'Accidentes geográficos con el botón «Explorar / Fly To» (Pico Bolívar, Río Orinoco, Salto Ángel).' : 'Landforms with the «Fly To» button (Pico Bolívar, Orinoco River, Angel Falls).'}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 font-bold shrink-0">🌊</span>
                <span>{isEs ? 'Mares y océanos circundantes (Mar Caribe y Océano Atlántico).' : 'Surrounding waters (Caribbean Sea & Atlantic Ocean).'}</span>
              </li>
            </ul>

            {/* Botones de navegación y cierre final */}
            <div className="flex items-center justify-between pt-2 border-t border-slate-800/80">
              <button
                type="button"
                onClick={handlePrevStep}
                className="text-[11px] text-slate-400 hover:text-white flex items-center gap-1 font-semibold"
              >
                <ArrowLeft className="w-3 h-3" />
                <span>{isEs ? 'Anterior' : 'Back'}</span>
              </button>

              <button
                type="button"
                onClick={handleCloseTour}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 text-slate-950 text-xs font-black flex items-center gap-1.5 shadow-lg shadow-emerald-500/25 active:scale-95 transition-all"
              >
                <span>{isEs ? '¡Entendido, Comenzar a Explorar! 🚀' : 'Got it, Start Exploring! 🚀'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
