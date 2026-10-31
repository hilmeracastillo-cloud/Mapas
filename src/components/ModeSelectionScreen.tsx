import React from 'react';
import { Language } from '../types/geography';
import {
  Compass,
  GraduationCap,
  Globe2,
  BookOpen,
  ArrowRight,
  Gamepad2,
  Layers,
  Mountain,
  Target,
  Sparkles,
  RotateCcw,
  CheckCircle2
} from 'lucide-react';

interface ModeSelectionScreenProps {
  currentLang: Language;
  onToggleLang: () => void;
  onSelectLang: (lang: Language) => void;
  onSelectPlay: () => void;
  onSelectLearn: () => void;
  onOpenTeachers: () => void;
  onReturnToWelcome: () => void;
}

export const ModeSelectionScreen: React.FC<ModeSelectionScreenProps> = ({
  currentLang,
  onToggleLang,
  onSelectLang,
  onSelectPlay,
  onSelectLearn,
  onOpenTeachers,
  onReturnToWelcome,
}) => {
  const isEs = currentLang === 'es';

  return (
    <div className="min-h-screen w-full bg-slate-950 text-slate-100 flex flex-col justify-between p-4 sm:p-6 md:p-8 relative overflow-x-hidden selection:bg-amber-400 selection:text-slate-950">
      
      {/* Background Cartographic & Atmospheric Gradients */}
      <div className="fixed inset-0 pointer-events-none opacity-25">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute top-1/3 -right-32 w-96 h-96 rounded-full bg-amber-500/20 blur-3xl" />
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 rounded-full bg-blue-600/15 blur-3xl" />
      </div>

      {/* Top Navbar */}
      <header className="relative z-10 w-full max-w-5xl mx-auto flex items-center justify-between py-2">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onReturnToWelcome}
            className="flex items-center gap-2 hover:opacity-90 transition-opacity text-left"
            title={isEs ? 'Volver a Bienvenida' : 'Back to Welcome'}
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-tr from-amber-500 via-amber-400 to-yellow-300 flex items-center justify-center text-slate-950 shadow-md shadow-amber-500/20 shrink-0">
              <Compass className="w-6 h-6 text-slate-950 stroke-[2.5]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-base sm:text-lg text-white tracking-tight">GeoMaster</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30">
                  Explorer
                </span>
              </div>
              <p className="text-[11px] text-slate-400 hidden sm:block">
                {isEs ? 'Selección de Modalidad' : 'Mode Selection'}
              </p>
            </div>
          </button>
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* For Teachers Button */}
          <button
            type="button"
            onClick={onOpenTeachers}
            className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-blue-500/15 hover:bg-blue-500/25 text-blue-300 border border-blue-500/40 text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all shadow-sm"
          >
            <GraduationCap className="w-4 h-4 text-blue-400" />
            <span className="hidden sm:inline">{isEs ? 'Para Profesores' : 'For Teachers'}</span>
            <span className="sm:hidden">{isEs ? 'Profesores' : 'Teachers'}</span>
          </button>

          {/* Bilingual Switcher */}
          <div className="flex items-center bg-slate-900 p-0.5 rounded-xl border border-slate-800 text-xs font-bold">
            <button
              type="button"
              onClick={() => onSelectLang('es')}
              className={`px-2 py-1 rounded-lg transition-all ${
                currentLang === 'es'
                  ? 'bg-amber-400 text-slate-950 shadow font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              🇪🇸 ES
            </button>
            <button
              type="button"
              onClick={() => onSelectLang('en')}
              className={`px-2 py-1 rounded-lg transition-all ${
                currentLang === 'en'
                  ? 'bg-amber-400 text-slate-950 shadow font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              🇺🇸 EN
            </button>
          </div>

          {/* Return to Welcome */}
          <button
            type="button"
            onClick={onReturnToWelcome}
            className="p-1.5 sm:px-2.5 sm:py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-semibold flex items-center gap-1 transition-colors border border-slate-800"
            title={isEs ? 'Volver a Bienvenida' : 'Back to Welcome'}
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden md:inline">{isEs ? 'Inicio' : 'Welcome'}</span>
          </button>
        </div>
      </header>

      {/* Main Choice Area */}
      <main className="relative z-10 w-full max-w-4xl mx-auto my-auto py-6 sm:py-8 flex flex-col items-center text-center space-y-6 sm:space-y-8">
        
        {/* Title & Subtitle */}
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-amber-400 font-mono font-medium shadow-inner">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isEs ? 'Experiencia de Usuario' : 'User Experience Mode'}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            {isEs ? '¿Cómo deseas comenzar hoy?' : 'How would you like to start today?'}
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            {isEs
              ? 'Elige explorar directamente el mapa político de todos los países o avanzar por el menú de módulos de aprendizaje:'
              : 'Choose between directly exploring the political world map of all countries or diving into the structured learning modules:'}
          </p>
        </div>

        {/* 2 Big Choice Cards: Jugar / Play vs Aprender / Learn */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full max-w-3xl text-left">
          
          {/* ================= OPTION 1: JUGAR / PLAY ================= */}
          <div
            onClick={onSelectPlay}
            className="group relative rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border-2 border-emerald-500/40 hover:border-emerald-400 p-6 sm:p-7 shadow-2xl hover:shadow-emerald-500/10 transition-all flex flex-col justify-between cursor-pointer active:scale-[0.99]"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300 group-hover:scale-105 transition-transform shadow-lg shadow-emerald-500/20">
                  <Gamepad2 className="w-8 h-8 text-emerald-400" />
                </div>
                <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 uppercase tracking-wider">
                  {isEs ? 'Modo Libre' : 'Free Mode'}
                </span>
              </div>

              <div>
                <h2 className="text-2xl font-black text-white group-hover:text-emerald-300 transition-colors">
                  {isEs ? 'Jugar / Play' : 'Play / Jugar'}
                </h2>
                <span className="text-xs font-semibold text-emerald-400/90 block mt-0.5">
                  {isEs ? 'Mapa Político Mundial y Países' : 'Interactive World Political Map'}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {isEs
                  ? 'Ve directamente al mapa político completo de todos los países del mundo. Haz clic en cualquier país para abrir su ficha completa en el panel lateral derecho con capital, bandera, relieve, población y PIB.'
                  : 'Go directly to the political map of all sovereign countries. Click any country to open its detailed dossier in the right side panel with capital, flag, terrain, population, and GDP.'}
              </p>

              <ul className="space-y-1.5 text-xs text-slate-400 pt-1">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{isEs ? 'Mapa político global con fronteras, nombres y soberanías' : 'Global political basemap with borders, names & sovereignties'}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{isEs ? 'Ficha de país instantánea en panel lateral derecho' : 'Instant country dossier in right side drawer'}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{isEs ? 'Navegación y zoom libre sin restricciones' : 'Free unrestricted navigation & planetary zoom'}</span>
                </li>
              </ul>
            </div>

            <div className="pt-6">
              <button
                type="button"
                onClick={onSelectPlay}
                className="w-full py-3.5 px-5 rounded-2xl bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 text-slate-950 font-black text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25 transition-all group-hover:gap-3"
              >
                <Globe2 className="w-4 h-4 text-slate-950" />
                <span>{isEs ? 'Comenzar a Jugar' : 'Start Playing'}</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </button>
            </div>
          </div>

          {/* ================= OPTION 2: APRENDER / LEARN ================= */}
          <div
            onClick={onSelectLearn}
            className="group relative rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border-2 border-amber-500/40 hover:border-amber-400 p-6 sm:p-7 shadow-2xl hover:shadow-amber-500/10 transition-all flex flex-col justify-between cursor-pointer active:scale-[0.99]"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-300 group-hover:scale-105 transition-transform shadow-lg shadow-amber-500/20">
                  <BookOpen className="w-8 h-8 text-amber-400" />
                </div>
                <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/40 uppercase tracking-wider">
                  {isEs ? 'Modo Guiado' : 'Guided Mode'}
                </span>
              </div>

              <div>
                <h2 className="text-2xl font-black text-white group-hover:text-amber-300 transition-colors">
                  {isEs ? 'Aprender / Learn' : 'Learn / Aprender'}
                </h2>
                <span className="text-xs font-semibold text-amber-400/90 block mt-0.5">
                  {isEs ? 'Menú Principal de Contenidos' : 'Main Content Curriculum Menu'}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {isEs
                  ? 'Accede al menú estructurado con los 4 módulos pedagógicos de cartografía y geografía mundial, con contenidos didácticos interactivos y verificaciones de aprendizaje.'
                  : 'Access the structured menu featuring all 4 pedagogical cartography and geography modules, complete with interactive exhibits and learning verification assessments.'}
              </p>

              <ul className="space-y-1.5 text-xs text-slate-400 pt-1">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>{isEs ? 'Módulo 1: Lectura de 3 Tipos de Mapas' : 'Module 1: Reading the 3 Map Types'}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>{isEs ? 'Módulo 2: 19 Accidentes Geográficos' : 'Module 2: 19 Terrestrial Landforms'}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>{isEs ? 'Módulo 3: Continentes, Mares y Océanos' : 'Module 3: Continents, Seas & Oceans'}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>{isEs ? 'Módulo 4: Exploración de Países' : 'Module 4: Country Exploration'}</span>
                </li>
              </ul>
            </div>

            <div className="pt-6">
              <button
                type="button"
                onClick={onSelectLearn}
                className="w-full py-3.5 px-5 rounded-2xl bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 text-slate-950 font-black text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/25 transition-all group-hover:gap-3"
              >
                <Layers className="w-4 h-4 text-slate-950" />
                <span>{isEs ? 'Ir al Menú de Contenidos' : 'Go to Content Menu'}</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </button>
            </div>
          </div>

        </div>

      </main>

      {/* Footer */}
      <footer className="relative z-10 w-full max-w-5xl mx-auto py-2 text-center text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-1 border-t border-slate-900">
        <span>GeoMaster Explorer · Jugar (Mapa Físico) & Aprender (Módulos Pedagógicos)</span>
        <span>Nord Anglia Education · Texas TEKS · NWEA MAP Growth Alignment</span>
      </footer>

    </div>
  );
};
