import React from 'react';
import { Language, CountryDossierData } from '../types/geography';
import { BookOpen, Compass, ChevronRight, Layers, Mountain, ShieldCheck, X } from 'lucide-react';

interface LearnModeGuideProps {
  currentLang: Language;
  onOpenGlossary: () => void;
  onOpenPhysicalReading: () => void;
  onSelectCountryById: (id: string) => void;
  onClose: () => void;
}

export const LearnModeGuide: React.FC<LearnModeGuideProps> = ({
  currentLang,
  onOpenGlossary,
  onOpenPhysicalReading,
  onSelectCountryById,
  onClose,
}) => {
  const isEs = currentLang === 'es';

  return (
    <div className="absolute top-16 sm:top-20 left-3 sm:left-6 z-20 w-[calc(100vw-24px)] sm:w-[350px] md:w-[380px] bg-slate-900/95 backdrop-blur-xl border border-slate-700/80 rounded-2xl shadow-2xl p-3.5 sm:p-4 text-slate-100 ring-1 ring-slate-800 animate-in slide-in-from-left duration-300 max-h-[82vh] overflow-y-auto touch-scroll safe-pb">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2.5 mb-2.5">
        <div className="flex items-center gap-2">
          <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
          <h3 className="font-extrabold text-xs sm:text-sm text-white">
            {isEs ? 'Módulo de Aprendizaje Guiado' : 'Guided Learning Lesson'}
          </h3>
        </div>
        <button
          onClick={onClose}
          className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="space-y-3 text-[11px] sm:text-xs">
        <p className="text-slate-300 leading-relaxed">
          {isEs
            ? 'Bienvenido a GeoMaster Explorer. Aquí aprenderás a decodificar mapas políticos y físicos con rigor cartográfico y científico.'
            : 'Welcome to GeoMaster Explorer. Here you will learn to decode political borders, hypsometric relief tints, and economic trade patterns with scientific precision.'}
        </p>

        {/* Step 1: 3 Lenses */}
        <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-1.5">
          <span className="font-bold text-amber-400 flex items-center gap-1.5 uppercase tracking-wider text-[11px]">
            <Layers className="w-3.5 h-3.5" />
            <span>{isEs ? '1. Los 3 Lentes Cartográficos' : '1. The 3 Cartographic Lenses'}</span>
          </span>
          <p className="text-slate-300 leading-relaxed">
            {isEs
              ? 'Usa el conmutador superior para alternar entre el Lente Político (fronteras y capitales ★), Relieve Físico (montañas y fosas marinas) y Satélite natural.'
              : 'Use the top switcher to toggle between Political (borders & ★ capitals), Physical Relief (hypsometry & contours), and Satellite imagery.'}
          </p>
        </div>

        {/* Step 2: Landforms & Elevation */}
        <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-2">
          <span className="font-bold text-sky-400 flex items-center gap-1.5 uppercase tracking-wider text-[11px]">
            <Mountain className="w-3.5 h-3.5" />
            <span>{isEs ? '2. Accidentes Geográficos y Elevación' : '2. Landforms & Relief Elevation'}</span>
          </span>
          <div className="grid grid-cols-2 gap-2 pt-1">
            <button
              onClick={onOpenGlossary}
              className="p-2 rounded-lg bg-sky-500/20 hover:bg-sky-500/30 text-sky-300 border border-sky-500/40 text-[11px] font-bold flex items-center justify-center gap-1 transition-colors"
            >
              <span>{isEs ? 'Ver 19 Accidentes' : 'Open 19 Landforms'}</span>
            </button>
            <button
              onClick={onOpenPhysicalReading}
              className="p-2 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/40 text-[11px] font-bold flex items-center justify-center gap-1 transition-colors"
            >
              <span>{isEs ? 'Escala de Elevación' : 'Elevation Tints'}</span>
            </button>
          </div>
        </div>

        {/* Step 3: Interactive Practice */}
        <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-2">
          <span className="font-bold text-emerald-400 flex items-center gap-1.5 uppercase tracking-wider text-[11px]">
            <Compass className="w-3.5 h-3.5" />
            <span>{isEs ? '3. Explora un País Ejemplo' : '3. Inspect Starter Case Studies'}</span>
          </span>
          <div className="flex flex-wrap gap-1.5 pt-0.5">
            {[
              { id: 'VEN', name: 'Venezuela' },
              { id: 'CHE', name: isEs ? 'Suiza' : 'Switzerland' },
              { id: 'SAU', name: isEs ? 'Arabia Saudita' : 'Saudi Arabia' },
              { id: 'EGY', name: isEs ? 'Egipto' : 'Egypt' },
            ].map((c) => (
              <button
                key={c.id}
                onClick={() => onSelectCountryById(c.id)}
                className="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 text-[11px] font-medium border border-slate-700 transition-colors"
              >
                {c.name}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-[10px] text-slate-400 font-mono pt-1">
          <ShieldCheck className="w-3 h-3 text-emerald-400" />
          <span>{isEs ? 'Dominio Cartográfico Global & Taxonomía de Bloom' : 'Global Cartographic Standards & Bloom Taxonomy'}</span>
        </div>
      </div>
    </div>
  );
};
