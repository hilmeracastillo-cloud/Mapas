import React from 'react';
import { Language } from '../types/geography';
import {
  Compass,
  ArrowRight,
  GraduationCap,
  Globe2,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

interface LanguageSelectionModalProps {
  isOpen: boolean;
  onSelectLanguage: (lang: Language) => void;
  onOpenTeachers: () => void;
  currentLang?: Language;
}

export const LanguageSelectionModal: React.FC<LanguageSelectionModalProps> = ({
  isOpen,
  onSelectLanguage,
  onOpenTeachers,
  currentLang = 'en',
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/95 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-700/80 rounded-2xl sm:rounded-3xl w-full max-w-2xl flex flex-col shadow-2xl overflow-hidden text-slate-100 ring-1 ring-amber-400/20">
        
        {/* Brand Banner */}
        <div className="p-5 sm:p-6 border-b border-slate-800 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-center relative">
          <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-3 rounded-2xl bg-gradient-to-tr from-amber-500 via-amber-400 to-yellow-300 flex items-center justify-center text-slate-950 shadow-lg shadow-amber-500/30">
            <Compass className="w-7 h-7 sm:w-8 sm:h-8 text-slate-950 stroke-[2.5]" />
          </div>
          <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            GeoMaster Explorer
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Plataforma de Cartografía y Geografía Global • Multi-Lens Geography Mastery
          </p>
        </div>

        {/* Content Body: Language Choices */}
        <div className="p-5 sm:p-8 space-y-6">
          <div className="text-center space-y-1">
            <h2 className="text-base sm:text-lg font-bold text-white">
              Selecciona tu Idioma / Select Your Language
            </h2>
            <p className="text-xs text-slate-400">
              Al seleccionar tu idioma, entrarás directamente al <strong className="text-amber-400">Nivel 1: Lectura de Mapas</strong>.
            </p>
          </div>

          {/* Dual Language Option Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Spanish Option */}
            <button
              type="button"
              onClick={() => onSelectLanguage('es')}
              className="p-5 rounded-2xl border text-left transition-all relative flex flex-col justify-between group bg-slate-950 border-slate-800 hover:border-amber-400 hover:bg-slate-800/60 shadow-lg hover:shadow-amber-400/10 active:scale-[0.98]"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-4xl">🇪🇸</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30">
                    Comenzar Nivel 1
                  </span>
                </div>
                <h3 className="text-lg font-black text-white mb-1.5 flex items-center gap-1.5">
                  <span>Español</span>
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Interfaz, módulos de los 3 mapas, accidentes geográficos y evaluaciones en español.
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-800/80 text-xs font-bold text-amber-400 flex items-center justify-between">
                <span>Ir al Nivel 1</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </button>

            {/* English Option */}
            <button
              type="button"
              onClick={() => onSelectLanguage('en')}
              className="p-5 rounded-2xl border text-left transition-all relative flex flex-col justify-between group bg-slate-950 border-slate-800 hover:border-amber-400 hover:bg-slate-800/60 shadow-lg hover:shadow-amber-400/10 active:scale-[0.98]"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-4xl">🇺🇸</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30">
                    Start Level 1
                  </span>
                </div>
                <h3 className="text-lg font-black text-white mb-1.5 flex items-center gap-1.5">
                  <span>English</span>
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Complete 3-lens map exhibits, physical landforms, continents, and questions in English.
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-800/80 text-xs font-bold text-amber-400 flex items-center justify-between">
                <span>Enter Level 1</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </button>
          </div>

          {/* Smaller 'For Teachers / Para Profesores' Button as Requested */}
          <div className="pt-2 flex flex-col items-center">
            <button
              type="button"
              onClick={onOpenTeachers}
              className="px-4 py-2 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 hover:border-blue-400/50 text-xs text-slate-300 hover:text-white flex items-center gap-2.5 transition-all shadow-md group"
            >
              <div className="w-5 h-5 rounded-md bg-blue-500/20 flex items-center justify-center text-blue-300 group-hover:scale-110 transition-transform">
                <GraduationCap className="w-3.5 h-3.5" />
              </div>
              <span className="font-bold text-slate-200">For Teachers, Para Profesores</span>
              <span className="text-[10px] text-slate-400 font-mono hidden xs:inline border-l border-slate-800 pl-2">
                Currículo, Calificación & Bloom
              </span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
