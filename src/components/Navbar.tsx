import React from 'react';
import { AppMode, LensType, Language } from '../types/geography';
import { Compass, BookOpen, Target, Globe, Layers, Upload, Award, BookMarked, HelpCircle, GraduationCap } from 'lucide-react';

interface NavbarProps {
  currentMode: AppMode;
  onChangeMode: (mode: AppMode) => void;
  currentLens: LensType;
  onChangeLens: (lens: LensType) => void;
  currentLang: Language;
  onToggleLang: () => void;
  masteryPercentage: number;
  onOpenGlossary: () => void;
  onOpenPhysicalMapReading: () => void;
  onOpenMastery: () => void;
  onOpenUpload: () => void;
  onOpenTour: () => void;
  onOpenCurriculumIntro?: () => void;
  onOpenTeachers?: () => void;
  onOpenModulesMenu?: () => void;
  onOpenModeSelect?: () => void;
  onJumpToContinent: (continent: string) => void;
  isPlayMode?: boolean;
  onOpenPlayGuide?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentMode,
  onChangeMode,
  currentLens,
  onChangeLens,
  currentLang,
  onToggleLang,
  masteryPercentage,
  onOpenGlossary,
  onOpenPhysicalMapReading,
  onOpenMastery,
  onOpenUpload,
  onOpenTour,
  onOpenCurriculumIntro,
  onOpenTeachers,
  onOpenModulesMenu,
  onOpenModeSelect,
  onJumpToContinent,
  isPlayMode = false,
  onOpenPlayGuide,
}) => {
  const isEs = currentLang === 'es';

  // =========================================================================
  // JUGAR / PLAY MODE: ONLY POLITICO, RELIEVE, SATELITE & MENU PRINCIPAL
  // =========================================================================
  if (isPlayMode) {
    return (
      <header className="h-14 sm:h-16 bg-slate-900/95 border-b border-slate-800 px-3 sm:px-6 flex items-center justify-between text-slate-100 z-40 select-none backdrop-blur-md safe-pt">
        {/* Brand */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr from-amber-500 via-amber-400 to-yellow-300 flex items-center justify-center text-slate-950 font-black shadow-md shadow-amber-500/20 shrink-0">
            <Compass className="w-4 h-4 sm:w-5 sm:h-5 text-slate-950 stroke-[2.5]" />
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="font-extrabold text-sm sm:text-base tracking-tight text-white">GeoMaster</span>
            <span className="text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              {isEs ? 'Jugar' : 'Play'}
            </span>
          </div>
        </div>

        {/* The 4 Exclusive Buttons: Politico, Relieve, Satelite, Menu Principal */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* 3 Basemap Lenses */}
          <div id="tour-lens-switcher" className="flex items-center bg-slate-950/80 p-0.5 sm:p-1 rounded-xl border border-slate-800 shadow-inner">
            {/* 1. Politico */}
            <button
              type="button"
              onClick={() => onChangeLens('political')}
              title={isEs ? 'Mapa Político: Fronteras y Países' : 'Political Map: Borders & Countries'}
              className={`px-2.5 sm:px-4 py-1 sm:py-1.5 rounded-lg text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all ${
                currentLens === 'political'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 ring-1 ring-blue-400'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              <span>{isEs ? 'Político' : 'Political'}</span>
            </button>

            {/* 2. Relieve */}
            <button
              type="button"
              onClick={() => onChangeLens('physical')}
              title={isEs ? 'Mapa de Relieve: Hipsometría y Accidentes Físicos' : 'Relief Map: Hypsometry & Physical Landforms'}
              className={`px-2.5 sm:px-4 py-1 sm:py-1.5 rounded-lg text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all ${
                currentLens === 'physical'
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30 ring-1 ring-emerald-400'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              <span>{isEs ? 'Relieve' : 'Relief'}</span>
            </button>

            {/* 3. Satelite */}
            <button
              type="button"
              onClick={() => onChangeLens('satellite')}
              title={isEs ? 'Mapa Satélite: Imágenes Satelitales Reales' : 'Satellite Map: Real Satellite Imagery'}
              className={`px-2.5 sm:px-4 py-1 sm:py-1.5 rounded-lg text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all ${
                currentLens === 'satellite'
                  ? 'bg-amber-600 text-white shadow-lg shadow-amber-600/30 ring-1 ring-amber-400'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              <span>{isEs ? 'Satélite' : 'Satellite'}</span>
            </button>
          </div>

          {/* Botón de Ayuda / Guía de interacción */}
          {onOpenPlayGuide && (
            <button
              type="button"
              onClick={onOpenPlayGuide}
              title={isEs ? 'Guía de interacción y controles' : 'Interaction & controls guide'}
              className="px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 hover:text-emerald-200 border border-emerald-500/40 text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all active:scale-95 shadow-sm shrink-0"
            >
              <HelpCircle className="w-4 h-4 text-emerald-400" />
              <span className="hidden md:inline">{isEs ? '¿Cómo Jugar?' : 'How to Play?'}</span>
            </button>
          )}

          {/* Selección de Idioma (antes del botón de Menú Principal) */}
          <button
            type="button"
            onClick={onToggleLang}
            title={isEs ? 'Cambiar idioma a Inglés (EN)' : 'Switch language to Spanish (ES)'}
            className="px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all active:scale-95 shadow-sm shrink-0"
          >
            <span>{isEs ? '🇪🇸 ES' : '🇺🇸 EN'}</span>
          </button>

          {/* 4. Menu Principal */}
          <button
            type="button"
            onClick={onOpenModulesMenu}
            title={isEs ? 'Ir al Menú Principal de Módulos' : 'Go to Main Modules Menu'}
            className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 text-slate-950 text-xs sm:text-sm font-extrabold flex items-center gap-1.5 sm:gap-2 shadow-lg shadow-amber-500/25 active:scale-95 transition-all border border-amber-300/50 shrink-0"
          >
            <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-950 stroke-[2.5]" />
            <span>{isEs ? 'Menú Principal' : 'Main Menu'}</span>
          </button>
        </div>
      </header>
    );
  }

  return (
    <header className="h-14 sm:h-16 bg-slate-900/95 border-b border-slate-800 px-2 sm:px-4 flex items-center justify-between text-slate-100 z-40 select-none backdrop-blur-md safe-pt">
      {/* Brand & Geographic Title */}
      <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
        <div className="flex items-center gap-1.5 sm:gap-2 cursor-pointer" onClick={() => onChangeMode('explore')}>
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr from-amber-500 via-amber-400 to-yellow-300 flex items-center justify-center text-slate-950 font-black shadow-md shadow-amber-500/20 shrink-0">
            <Compass className="w-4 h-4 sm:w-5 sm:h-5 text-slate-950 stroke-[2.5]" />
          </div>
          <div>
            <div className="flex items-center gap-1">
              <span className="font-extrabold text-xs sm:text-base tracking-tight text-white">GeoMaster</span>
              <span className="text-[9px] sm:text-[11px] font-bold px-1 sm:px-1.5 py-0.5 rounded bg-amber-400/20 text-amber-300 border border-amber-400/30 hidden xs:inline">
                Explorer
              </span>
            </div>
            <div className="text-[9px] text-slate-400 font-medium hidden md:flex items-center gap-1">
              <span className="text-amber-400/90 font-semibold">
                {isEs ? 'Cartografía y Geografía Global' : 'Global Cartography & Geography'}
              </span>
            </div>
          </div>
        </div>

        {/* Mode Switcher: Desktop full text */}
        <div className="hidden lg:flex items-center bg-slate-950/70 p-1 rounded-xl border border-slate-800 ml-2">
          <button
            onClick={() => onChangeMode('learn')}
            className={`px-3 py-1 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
              currentMode === 'learn'
                ? 'bg-amber-400 text-slate-950 shadow'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>{isEs ? 'Aprender' : 'Learn'}</span>
          </button>
          <button
            onClick={() => onChangeMode('explore')}
            className={`px-3 py-1 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
              currentMode === 'explore'
                ? 'bg-amber-400 text-slate-950 shadow'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{isEs ? 'Explorar' : 'Explore'}</span>
          </button>
          <button
            onClick={() => onChangeMode('quest')}
            className={`px-3 py-1 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
              currentMode === 'quest'
                ? 'bg-amber-400 text-slate-950 shadow'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Target className="w-3.5 h-3.5" />
            <span>{isEs ? 'Desafío Quest' : 'Quest Mode'}</span>
          </button>
        </div>

        {/* Mode Switcher: Mobile & Tablet Compact Icon Bar */}
        <div className="flex lg:hidden items-center bg-slate-950/70 p-0.5 rounded-lg border border-slate-800">
          <button
            onClick={() => onChangeMode('learn')}
            title={isEs ? 'Modo Aprender' : 'Learn Mode'}
            className={`p-1.5 rounded-md text-xs transition-all ${
              currentMode === 'learn' ? 'bg-amber-400 text-slate-950 shadow' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => onChangeMode('explore')}
            title={isEs ? 'Modo Explorar' : 'Explore Mode'}
            className={`p-1.5 rounded-md text-xs transition-all ${
              currentMode === 'explore' ? 'bg-amber-400 text-slate-950 shadow' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => onChangeMode('quest')}
            title={isEs ? 'Modo Desafío Quest' : 'Quest Mode'}
            className={`p-1.5 rounded-md text-xs transition-all ${
              currentMode === 'quest' ? 'bg-amber-400 text-slate-950 shadow' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Target className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Modules Menu Return Button */}
        {onOpenModulesMenu && (
          <button
            type="button"
            onClick={onOpenModulesMenu}
            className="px-2 sm:px-3 py-1 rounded-lg sm:rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 text-xs font-black flex items-center gap-1.5 transition-all shadow-md active:scale-95 ml-0.5 sm:ml-1"
            title={isEs ? 'Volver al Menú Principal de Módulos' : 'Return to Modules Menu'}
          >
            <Layers className="w-3.5 h-3.5 text-slate-950 stroke-[2.5]" />
            <span className="hidden sm:inline">{isEs ? 'Menú de Módulos' : 'Modules Menu'}</span>
            <span className="sm:hidden">{isEs ? 'Módulos' : 'Modules'}</span>
          </button>
        )}

        {/* Mode Selection Return Button */}
        {onOpenModeSelect && (
          <button
            type="button"
            onClick={onOpenModeSelect}
            className="px-2 sm:px-2.5 py-1 rounded-lg sm:rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold flex items-center gap-1 transition-all active:scale-95 ml-1"
            title={isEs ? 'Cambiar entre Jugar y Aprender' : 'Switch between Play and Learn'}
          >
            <span className="hidden md:inline">{isEs ? 'Jugar / Aprender' : 'Play / Learn'}</span>
            <span className="md:hidden">{isEs ? 'Modo' : 'Mode'}</span>
          </button>
        )}
      </div>

      {/* Center: 3-Lens Basemap Switcher */}
      <div className="flex items-center gap-1.5">
        <div className="flex items-center bg-slate-950/70 p-0.5 sm:p-1 rounded-lg sm:rounded-xl border border-slate-800">
          <button
            onClick={() => onChangeLens('political')}
            title={isEs ? 'Lente Político' : 'Political Lens'}
            className={`px-1.5 sm:px-2.5 py-1 rounded-md sm:rounded-lg text-[10px] sm:text-xs font-semibold transition-all ${
              currentLens === 'political'
                ? 'bg-blue-600 text-white shadow'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <span className="sm:hidden">Pol</span>
            <span className="hidden sm:inline">{isEs ? 'Político' : 'Political'}</span>
          </button>
          <button
            onClick={() => onChangeLens('physical')}
            title={isEs ? 'Lente de Relieve Físico' : 'Physical Relief Lens'}
            className={`px-1.5 sm:px-2.5 py-1 rounded-md sm:rounded-lg text-[10px] sm:text-xs font-semibold transition-all ${
              currentLens === 'physical'
                ? 'bg-emerald-600 text-white shadow'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <span className="sm:hidden">Rel</span>
            <span className="hidden sm:inline">{isEs ? 'Relieve' : 'Physical'}</span>
          </button>
          <button
            onClick={() => onChangeLens('satellite')}
            title={isEs ? 'Lente Satélite' : 'Satellite Lens'}
            className={`px-1.5 sm:px-2.5 py-1 rounded-md sm:rounded-lg text-[10px] sm:text-xs font-semibold transition-all ${
              currentLens === 'satellite'
                ? 'bg-amber-600 text-white shadow'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <span className="sm:hidden">Sat</span>
            <span className="hidden sm:inline">{isEs ? 'Satélite' : 'Satellite'}</span>
          </button>
        </div>

        {/* Quick Continent Selector (Desktop only) */}
        <select
          onChange={(e) => onJumpToContinent(e.target.value)}
          defaultValue="World"
          aria-label="Jump to continent"
          className="bg-slate-800 border border-slate-700 rounded-lg px-2 py-1 text-xs text-slate-200 focus:outline-none focus:ring-1 focus:ring-amber-400 hidden 2xl:block"
        >
          <option value="World">{isEs ? '🌍 Todo el Mundo' : '🌍 Entire World'}</option>
          <option value="North America">{isEs ? 'América del Norte' : 'North America'}</option>
          <option value="South America">{isEs ? 'América del Sur' : 'South America'}</option>
          <option value="Europe">{isEs ? 'Europa' : 'Europe'}</option>
          <option value="Africa">{isEs ? 'África' : 'Africa'}</option>
          <option value="Asia">{isEs ? 'Asia' : 'Asia'}</option>
          <option value="Oceania">{isEs ? 'Oceanía' : 'Oceania'}</option>
        </select>
      </div>

      {/* Right Controls: Pedagogical Modals, Mastery Badge, JSON Upload, Bilingual Toggle */}
      <div className="flex items-center gap-2 sm:gap-2.5">
        {/* Glossary Button */}
        <button
          onClick={onOpenGlossary}
          title={isEs ? 'Glosario de Accidentes Geográficos (Pilar 1)' : 'Landforms Glossary (Pillar 1)'}
          className="p-1.5 sm:px-2.5 sm:py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 border border-slate-700/80 transition-colors"
        >
          <BookMarked className="w-3.5 h-3.5 text-amber-400" />
          <span className="hidden md:inline">{isEs ? 'Glosario' : 'Landforms'}</span>
        </button>

        {/* Physical Map Reading Button */}
        <button
          onClick={onOpenPhysicalMapReading}
          title={isEs ? 'Lectura de Mapas Físicos: Colores e Hipsometría (Pilar 2)' : 'Physical Elevation Reading (Pillar 2)'}
          className="p-1.5 sm:px-2.5 sm:py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 border border-slate-700/80 transition-colors"
        >
          <Layers className="w-3.5 h-3.5 text-sky-400" />
          <span className="hidden md:inline">{isEs ? 'Elevación' : 'Elevation'}</span>
        </button>

        {/* Upload Dataset Button */}
        <button
          onClick={onOpenUpload}
          title={isEs ? 'Cargar Dataset Externo (JSON)' : 'Upload External Dataset (JSON)'}
          className="p-1.5 sm:px-2 sm:py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold flex items-center gap-1 border border-slate-700/80 transition-colors"
        >
          <Upload className="w-3.5 h-3.5 text-amber-400" />
          <span className="hidden xl:inline">{isEs ? 'Subir JSON' : 'Upload'}</span>
        </button>

        {/* For Teachers / Para Profesores Button */}
        {(onOpenTeachers || onOpenCurriculumIntro) && (
          <button
            onClick={onOpenTeachers || onOpenCurriculumIntro}
            title={isEs ? 'Para Profesores / For Teachers (Currículo, Calificación y Bloom)' : 'For Teachers / Para Profesores (Curriculum, Grading & Bloom)'}
            className="p-1.5 sm:px-2.5 sm:py-1 rounded-lg bg-blue-500/15 hover:bg-blue-500/25 text-blue-300 border border-blue-500/40 text-xs font-bold flex items-center gap-1.5 transition-colors"
          >
            <GraduationCap className="w-3.5 h-3.5 text-blue-400" />
            <span className="hidden xl:inline">{isEs ? 'Para Profesores' : 'For Teachers'}</span>
            <span className="hidden lg:inline xl:hidden">{isEs ? 'Profesores' : 'Teachers'}</span>
          </button>
        )}

        {/* Tour / Guía de Inicio Button */}
        <button
          onClick={onOpenTour}
          title={isEs ? 'Menú Explicativo de Funcionalidades (Tour)' : 'Feature Guide & Explanatory Tour'}
          className="p-1.5 sm:px-2.5 sm:py-1 rounded-lg bg-amber-400/10 hover:bg-amber-400/20 text-amber-300 border border-amber-400/40 text-xs font-bold flex items-center gap-1.5 transition-colors"
        >
          <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
          <span className="hidden md:inline">{isEs ? 'Guía' : 'Tour'}</span>
        </button>

        {/* Mastery Goal Quick Badge */}
        <button
          onClick={onOpenMastery}
          className="px-2.5 py-1 rounded-lg bg-gradient-to-r from-amber-500/20 to-amber-600/20 hover:from-amber-500/30 hover:to-amber-600/30 text-amber-300 border border-amber-400/40 text-xs font-bold flex items-center gap-1.5 shadow-sm transition-all"
        >
          <Award className="w-3.5 h-3.5 text-amber-400" />
          <span className="font-mono">{masteryPercentage}%</span>
          <span className="hidden sm:inline text-[10px] text-amber-400/80">
            {masteryPercentage >= 90 ? '★ 90%+' : '/ 90%'}
          </span>
        </button>

        {/* Persistent Bilingual Language Switcher */}
        <button
          onClick={onToggleLang}
          className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-bold text-white flex items-center gap-1 transition-colors"
          title="Switch Language / Cambiar Idioma"
        >
          <span>{isEs ? '🇪🇸 ES' : '🇺🇸 EN'}</span>
        </button>
      </div>
    </header>
  );
};
