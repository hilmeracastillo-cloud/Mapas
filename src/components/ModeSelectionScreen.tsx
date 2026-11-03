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
  CheckCircle2,
  Trophy
} from 'lucide-react';

interface ModeSelectionScreenProps {
  currentLang: Language;
  onToggleLang: () => void;
  onSelectLang: (lang: Language) => void;
  onSelectPlay: (subMode?: 'explore' | 'trivia' | 'review') => void;
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
      <main className="relative z-10 w-full max-w-5xl mx-auto my-auto py-3 sm:py-8 landscape:py-1.5 flex flex-col items-center text-center space-y-3 sm:space-y-6 landscape:space-y-2">
        
        {/* Title & Subtitle */}
        <div className="space-y-1 sm:space-y-2 landscape:space-y-1 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-slate-900 border border-slate-800 text-[11px] sm:text-xs text-amber-400 font-mono font-medium shadow-inner">
            <Sparkles className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
            <span>{isEs ? 'Experiencia de Usuario' : 'User Experience Mode'}</span>
          </div>

          <h1 className="text-xl sm:text-4xl landscape:text-lg font-black text-white tracking-tight">
            {isEs ? '¿Cómo deseas comenzar hoy?' : 'How would you like to start today?'}
          </h1>

          <p className="text-xs sm:text-sm md:text-base landscape:text-xs text-slate-300 max-w-xl mx-auto leading-relaxed hidden sm:block landscape:hidden md:landscape:block">
            {isEs
              ? 'Elige explorar directamente el mapa político de todos los países o avanzar por el menú de módulos de aprendizaje:'
              : 'Choose between directly exploring the political world map of all countries or diving into the structured learning modules:'}
          </p>
        </div>

        {/* 2 Big Choice Cards: Jugar / Play vs Aprender / Learn (side-by-side in landscape) */}
        <div className="grid grid-cols-1 md:grid-cols-2 landscape:grid-cols-2 gap-3 sm:gap-5 landscape:gap-3 w-full max-w-4xl text-left">
          
          {/* ================= OPTION 1: JUGAR / PLAY ================= */}
          <div
            className="group relative rounded-2xl sm:rounded-3xl landscape:rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border-2 border-emerald-500/40 hover:border-emerald-400 p-4 sm:p-7 landscape:p-3 shadow-2xl hover:shadow-emerald-500/10 transition-all flex flex-col justify-between"
          >
            <div className="space-y-2 sm:space-y-4 landscape:space-y-1.5">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 sm:w-14 sm:h-14 landscape:w-8 landscape:h-8 rounded-xl sm:rounded-2xl landscape:rounded-lg bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300 group-hover:scale-105 transition-transform shadow-lg shadow-emerald-500/20">
                  <Gamepad2 className="w-5 h-5 sm:w-8 sm:h-8 landscape:w-4 landscape:h-4 text-emerald-400" />
                </div>
                <span className="text-[10px] sm:text-[11px] font-mono font-bold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 uppercase tracking-wider">
                  {isEs ? 'Modo de Juego' : 'Play Mode'}
                </span>
              </div>

              <div>
                <h2 className="text-lg sm:text-2xl landscape:text-base font-black text-white group-hover:text-emerald-300 transition-colors">
                  {isEs ? 'Jugar / Play' : 'Play / Jugar'}
                </h2>
                <span className="text-[11px] sm:text-xs font-semibold text-emerald-400/90 block mt-0.5">
                  {isEs ? 'Exploración Libre y Desafíos de Trivia' : 'Free Exploration & Trivia Challenges'}
                </span>
              </div>

              <p className="text-xs sm:text-sm landscape:text-[11px] text-slate-300 leading-relaxed line-clamp-2 sm:line-clamp-none">
                {isEs
                  ? 'Explora libremente el mapa mundial o pon a prueba tus conocimientos con la Trivia interactiva.'
                  : 'Freely explore the world map or test your knowledge with interactive map Trivia.'}
              </p>

              <ul className="space-y-1 text-[11px] sm:text-xs text-slate-400 pt-0.5 hidden xs:block">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>
                    <strong className="text-slate-200">{isEs ? 'Explorar:' : 'Explore:'}</strong>{' '}
                    {isEs ? 'Navegación libre, capas y fichas' : 'Free map navigation & dossiers'}
                  </span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <span>
                    <strong className="text-sky-300">{isEs ? 'Repaso:' : 'Review:'}</strong>{' '}
                    {isEs ? 'Continentes y temas a tu ritmo' : 'Continents and topics at your pace'}
                  </span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>
                    <strong className="text-amber-300">{isEs ? 'Trivia:' : 'Trivia:'}</strong>{' '}
                    {isEs ? 'Desafíos interactivos y puntuación' : 'Interactive challenges & score'}
                  </span>
                </li>
              </ul>
            </div>

            <div className="pt-3 sm:pt-6 landscape:pt-2 space-y-1.5 sm:space-y-2.5 landscape:space-y-1.5">
              <button
                type="button"
                onClick={() => onSelectPlay('explore')}
                className="w-full py-2 sm:py-3 landscape:py-1.5 px-3 sm:px-4 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 text-slate-950 font-black text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-lg shadow-emerald-500/25 transition-all active:scale-95"
              >
                <Compass className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-950" />
                <span>{isEs ? '1. Modo Explorar (Libre)' : '1. Explore Mode (Free)'}</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-950" />
              </button>

              <button
                type="button"
                onClick={() => onSelectPlay('review')}
                className="w-full py-2 sm:py-3 landscape:py-1.5 px-3 sm:px-4 rounded-xl bg-gradient-to-r from-sky-400 via-sky-300 to-blue-400 hover:from-sky-300 hover:to-blue-300 text-slate-950 font-black text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-lg shadow-sky-500/25 transition-all active:scale-95 border border-sky-300/50"
              >
                <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-950" />
                <span>{isEs ? '2. Modo Repaso (Continentes y Temas)' : '2. Review Mode (Continents & Topics)'}</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-950" />
              </button>

              <button
                type="button"
                onClick={() => onSelectPlay('trivia')}
                className="w-full py-2 sm:py-3 landscape:py-1.5 px-3 sm:px-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 text-slate-950 font-black text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-lg shadow-amber-500/25 transition-all active:scale-95 border border-amber-300/50"
              >
                <Trophy className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-950" />
                <span>{isEs ? '3. Modo Trivia (Desafíos)' : '3. Trivia Mode (Quiz)'}</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-950" />
              </button>
            </div>
          </div>


          {/* ================= OPTION 2: APRENDER / LEARN ================= */}
          <div
            onClick={onSelectLearn}
            className="group relative rounded-2xl sm:rounded-3xl landscape:rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border-2 border-amber-500/40 hover:border-amber-400 p-4 sm:p-7 landscape:p-3 shadow-2xl hover:shadow-amber-500/10 transition-all flex flex-col justify-between cursor-pointer active:scale-[0.99]"
          >
            <div className="space-y-2 sm:space-y-4 landscape:space-y-1.5">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 sm:w-14 sm:h-14 landscape:w-8 landscape:h-8 rounded-xl sm:rounded-2xl landscape:rounded-lg bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-300 group-hover:scale-105 transition-transform shadow-lg shadow-amber-500/20">
                  <BookOpen className="w-5 h-5 sm:w-8 sm:h-8 landscape:w-4 landscape:h-4 text-amber-400" />
                </div>
                <span className="text-[10px] sm:text-[11px] font-mono font-bold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/40 uppercase tracking-wider">
                  {isEs ? 'Modo Guiado' : 'Guided Mode'}
                </span>
              </div>

              <div>
                <h2 className="text-lg sm:text-2xl landscape:text-base font-black text-white group-hover:text-amber-300 transition-colors">
                  {isEs ? 'Aprender / Learn' : 'Learn / Aprender'}
                </h2>
                <span className="text-[11px] sm:text-xs font-semibold text-amber-400/90 block mt-0.5">
                  {isEs ? 'Menú Principal de Contenidos' : 'Main Content Curriculum Menu'}
                </span>
              </div>

              <p className="text-xs sm:text-sm landscape:text-[11px] text-slate-300 leading-relaxed line-clamp-2 sm:line-clamp-none">
                {isEs
                  ? 'Accede al menú estructurado con los 4 módulos pedagógicos de cartografía y geografía mundial.'
                  : 'Access the structured menu featuring all 4 pedagogical cartography and geography modules.'}
              </p>

              <ul className="space-y-1 text-[11px] sm:text-xs text-slate-400 pt-0.5 hidden xs:block">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>{isEs ? 'Módulo 1: Lectura de 3 Tipos de Mapas' : 'Module 1: Reading 3 Map Types'}</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>{isEs ? 'Módulo 2: 19 Accidentes Geográficos' : 'Module 2: 19 Landforms'}</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>{isEs ? 'Módulo 3: Continentes y Océanos' : 'Module 3: Continents & Oceans'}</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>{isEs ? 'Módulo 4: Exploración de Países' : 'Module 4: Country Exploration'}</span>
                </li>
              </ul>
            </div>

            <div className="pt-3 sm:pt-6 landscape:pt-2">
              <button
                type="button"
                onClick={onSelectLearn}
                className="w-full py-2.5 sm:py-3.5 landscape:py-2 px-4 sm:px-5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 text-slate-950 font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/25 transition-all group-hover:gap-3"
              >
                <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-950" />
                <span>{isEs ? 'Ir al Menú de Contenidos' : 'Go to Content Menu'}</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-950" />
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
