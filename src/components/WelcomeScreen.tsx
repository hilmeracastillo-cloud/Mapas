import React from 'react';
import { Language } from '../types/geography';
import {
  Compass,
  GraduationCap,
  Globe2,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  Target,
  Sparkles,
  Layers,
  Mountain,
  Lock,
  Unlock,
  CheckCircle2,
  School
} from 'lucide-react';

interface WelcomeScreenProps {
  onSelectLanguage: (lang: Language) => void;
  onOpenTeachers: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({
  onSelectLanguage,
  onOpenTeachers,
}) => {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-slate-100 flex flex-col justify-between p-4 sm:p-6 md:p-8 relative overflow-x-hidden selection:bg-amber-400 selection:text-slate-950">
      {/* Background Cartographic & Atmospheric Gradients */}
      <div className="fixed inset-0 pointer-events-none opacity-25">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-amber-500/20 blur-3xl" />
        <div className="absolute top-1/3 -right-32 w-96 h-96 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 rounded-full bg-emerald-600/15 blur-3xl" />
      </div>

      {/* Top Bar with Brand and Teachers Quick Trigger */}
      <header className="relative z-10 w-full max-w-5xl mx-auto flex items-center justify-between py-2">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-tr from-amber-500 via-amber-400 to-yellow-300 flex items-center justify-center text-slate-950 shadow-lg shadow-amber-500/20">
            <Compass className="w-6 h-6 sm:w-7 sm:h-7 text-slate-950 stroke-[2.5]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-base sm:text-xl text-white tracking-tight">GeoMaster</span>
              <span className="text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/40">
                Explorer
              </span>
            </div>
            <p className="text-[11px] text-slate-400 hidden sm:block">
              Alfabetización Cartográfica & Geografía Global / Cartographic Literacy & Global Geography
            </p>
          </div>
        </div>

        {/* Top Direct Teacher Button */}
        <button
          type="button"
          onClick={onOpenTeachers}
          className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-blue-500/15 hover:bg-blue-500/25 text-blue-300 border border-blue-500/40 text-xs sm:text-sm font-bold flex items-center gap-2 transition-all shadow-sm"
        >
          <GraduationCap className="w-4 h-4 text-blue-400" />
          <span>Para Profesores / For Teachers</span>
        </button>
      </header>

      {/* Main Welcome Container */}
      <main className="relative z-10 w-full max-w-4xl mx-auto my-auto py-6 sm:py-10 flex flex-col items-center text-center space-y-6 sm:space-y-8">
        
        {/* Bilingual Welcome Headings */}
        <div className="space-y-3 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-amber-400 font-mono font-medium shadow-inner">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Sistema Pedagógico Conducido por Capítulos / Chapter-Led Mastery</span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Bienvenido a GeoMaster Explorer
            <span className="block text-xl sm:text-3xl md:text-4xl text-amber-400 font-extrabold mt-1">
              Welcome to GeoMaster Explorer
            </span>
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Plataforma interactiva para el desarrollo de la alfabetización cartográfica y la comprensión profunda de la geografía física y política mundial.
            <span className="block text-slate-400 mt-1 italic">
              Interactive platform for cartographic literacy and in-depth understanding of global physical and political geography.
            </span>
          </p>
        </div>

        {/* Instruction and the TWO Language Buttons directly below welcome message */}
        <div className="w-full max-w-xl space-y-3 pt-2">
          <div className="text-xs font-semibold text-slate-400 flex items-center justify-center gap-2">
            <span>Selecciona tu idioma para continuar / Select your language to continue:</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {/* English Button */}
            <button
              type="button"
              onClick={() => onSelectLanguage('en')}
              className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 border-2 border-slate-700 hover:border-amber-400 text-white shadow-xl transition-all flex flex-col items-center text-center group active:scale-95"
            >
              <div className="text-3xl mb-1.5">🇺🇸</div>
              <span className="text-base sm:text-lg font-black text-white group-hover:text-amber-300 transition-colors">
                English
              </span>
              <span className="text-xs text-slate-300 mt-0.5">
                Continue in English
              </span>
              <span className="mt-3 text-[11px] font-bold text-amber-400 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                Select Mode <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </button>

            {/* Español Button */}
            <button
              type="button"
              onClick={() => onSelectLanguage('es')}
              className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 border-2 border-slate-700 hover:border-amber-400 text-white shadow-xl transition-all flex flex-col items-center text-center group active:scale-95"
            >
              <div className="text-3xl mb-1.5">🇪🇸</div>
              <span className="text-base sm:text-lg font-black text-white group-hover:text-amber-300 transition-colors">
                Español
              </span>
              <span className="text-xs text-slate-300 mt-0.5">
                Continuar en Español
              </span>
              <span className="mt-3 text-[11px] font-bold text-amber-400 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                Seleccionar Modalidad <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </button>
          </div>
        </div>

        {/* Sequential Progression Quick Summary Strip */}
        <div className="w-full max-w-3xl pt-4 border-t border-slate-800/80">
          <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2">
            Ruta Secuencial de Aprendizaje / Sequential Learning Roadmap:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-left">
            <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="text-[10px] font-mono text-amber-400 font-bold block">MÓDULO 1</span>
              <strong className="text-xs text-white block truncate">Lectura de Mapa</strong>
              <span className="text-[10px] text-slate-400 line-clamp-1">3 mapas + Hipsometría</span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="text-[10px] font-mono text-sky-400 font-bold block">MÓDULO 2</span>
              <strong className="text-xs text-white block truncate">Accidentes Geográficos</strong>
              <span className="text-[10px] text-slate-400 line-clamp-1">19 formas del relieve</span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="text-[10px] font-mono text-teal-400 font-bold block">MÓDULO 3</span>
              <strong className="text-xs text-white block truncate">Continentes y Océanos</strong>
              <span className="text-[10px] text-slate-400 line-clamp-1">Cartografía pura</span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="text-[10px] font-mono text-emerald-400 font-bold block">MÓDULO 4</span>
              <strong className="text-xs text-white block truncate">Los Países</strong>
              <span className="text-[10px] text-slate-400 line-clamp-1">Mapa a pantalla completa</span>
            </div>
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="relative z-10 w-full max-w-5xl mx-auto py-2 text-center text-[11px] text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-1 border-t border-slate-900">
        <span>GeoMaster Explorer · Sistema de Aprendizaje Progresivo (90% Passing Gate)</span>
        <span>Nord Anglia Education · Texas TEKS · NWEA MAP Growth Alignment</span>
      </footer>
    </div>
  );
};
