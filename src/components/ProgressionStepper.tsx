import React from 'react';
import { PedagogicalLevel, PedagogicalProgressState } from '../types/progression';
import { Language } from '../types/geography';
import {
  Lock,
  CheckCircle2,
  BookOpen,
  Target,
  Sparkles,
  Layers,
  Mountain,
  Globe,
  Compass
} from 'lucide-react';

interface ProgressionStepperProps {
  progressState: PedagogicalProgressState;
  onSelectLevel: (level: PedagogicalLevel) => void;
  onOpenEvaluation: (level: PedagogicalLevel) => void;
  onOpenLearnModal: (level: PedagogicalLevel) => void;
  currentLang: Language;
}

export const ProgressionStepper: React.FC<ProgressionStepperProps> = ({
  progressState,
  onSelectLevel,
  onOpenEvaluation,
  onOpenLearnModal,
  currentLang,
}) => {
  const isEs = currentLang === 'es';

  const levelsConfig: {
    level: PedagogicalLevel;
    title_en: string;
    title_es: string;
    subtitle_en: string;
    subtitle_es: string;
    icon: React.ComponentType<{ className?: string }>;
  }[] = [
    {
      level: 1,
      title_en: 'Level 1: 3 Map Types',
      title_es: 'Nivel 1: Los 3 Tipos de Mapas',
      subtitle_en: 'Political, Physical & Satellite',
      subtitle_es: 'Político, Físico y Satelital',
      icon: Layers,
    },
    {
      level: 2,
      title_en: 'Level 2: Landforms',
      title_es: 'Nivel 2: Accidentes Geográficos',
      subtitle_en: '19 Physical Forms in 3 Maps',
      subtitle_es: '19 Relieves en los 3 Mapas',
      icon: Mountain,
    },
    {
      level: 3,
      title_en: 'Level 3: Continents & Oceans',
      title_es: 'Nivel 3: Continentes y Océanos',
      subtitle_en: 'Global Oceans & Seas (No Countries)',
      subtitle_es: 'Cuencas y Mares (Sin Países)',
      icon: Globe,
    },
    {
      level: 4,
      title_en: 'Level 4: Countries by Continent',
      title_es: 'Nivel 4: Países por Continentes',
      subtitle_en: 'Exploration & Regional Evaluation',
      subtitle_es: 'Exploración y Evaluación Regional',
      icon: Compass,
    },
  ];

  return (
    <div className="bg-slate-950/90 border-b border-slate-800 px-2 sm:px-4 py-2 select-none">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        
        {/* Progression Stepper Track */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-1.5 sm:gap-2 w-full md:w-auto flex-1">
          {levelsConfig.map((item) => {
            const isUnlocked = progressState.unlockedLevels[item.level];
            const isActive = progressState.activeLevel === item.level;
            const score = item.level === 4
              ? null
              : progressState.levelScores[item.level];
            const hasPassed = score !== null && score >= 90;
            const Icon = item.icon;

            return (
              <div
                key={item.level}
                onClick={() => onSelectLevel(item.level)}
                className={`p-2 sm:p-2.5 rounded-xl border transition-all cursor-pointer relative flex flex-col justify-between ${
                  isActive
                    ? 'bg-slate-900 border-amber-400 ring-2 ring-amber-400/30 shadow-lg'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900/90'
                }`}
              >
                <div className="flex items-center justify-between gap-1.5 mb-1">
                  <div className="flex items-center gap-1.5 min-w-0">
                    <div
                      className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 ${
                        hasPassed
                          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                          : isActive
                          ? 'bg-amber-400 text-slate-950 font-bold'
                          : 'bg-slate-800 text-slate-300'
                      }`}
                    >
                      {hasPassed ? '✓' : item.level}
                    </div>
                    <span className="text-[11px] sm:text-xs font-bold text-white truncate">
                      {isEs ? item.title_es : item.title_en}
                    </span>
                  </div>

                  {/* Status Indicator Badge */}
                  <div className="shrink-0">
                    {hasPassed ? (
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-mono font-bold">
                        {score}% ✓
                      </span>
                    ) : score !== null ? (
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-500/20 border border-amber-500/40 text-amber-300 font-mono font-bold">
                        {score}% (90% meta)
                      </span>
                    ) : (
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-300 font-mono">
                        {isEs ? 'Disponible' : 'Ready'}
                      </span>
                    )}
                  </div>
                </div>

                <div className="text-[10px] text-slate-400 truncate hidden xs:block">
                  {isEs ? item.subtitle_es : item.subtitle_en}
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Controls for the Active Level */}
        <div className="flex items-center gap-2 shrink-0 w-full md:w-auto justify-end pt-1 md:pt-0">
          <button
            onClick={() => onOpenLearnModal(progressState.activeLevel)}
            className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-300 border border-amber-500/30 text-xs font-bold flex items-center gap-1.5 transition-all shadow-sm active:scale-95"
            title={isEs ? 'Estudiar contenido didáctico' : 'Review guided learning module'}
          >
            <BookOpen className="w-3.5 h-3.5 text-amber-400" />
            <span>{isEs ? '1. Estudiar Nivel' : '1. Learn Module'}</span>
          </button>

          <button
            onClick={() => onOpenEvaluation(progressState.activeLevel)}
            className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 text-xs font-black flex items-center gap-1.5 shadow-md transition-all active:scale-95"
            title={isEs ? 'Realizar evaluación de maestría (mínimo 90% para avanzar)' : 'Take mastery evaluation (90% required to advance)'}
          >
            <Target className="w-3.5 h-3.5" />
            <span>{isEs ? '2. Evaluación (90%)' : '2. Assess (90%)'}</span>
          </button>
        </div>

      </div>
    </div>
  );
};
