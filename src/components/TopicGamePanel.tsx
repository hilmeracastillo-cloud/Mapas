import React, { useState } from 'react';
import { Language } from '../types/geography';
import { GeoTopicItem } from '../data/polesData';
import {
  Trophy,
  ArrowRight,
  RotateCcw,
  CheckCircle2,
  XCircle,
  Lightbulb,
  Minimize2,
  Maximize2,
  MapPin,
  Volume2,
} from 'lucide-react';
import { speakGeoName } from '../utils/speechService';

interface TopicGamePanelProps {
  topic: 'continents' | 'oceans' | 'seas' | 'poles';
  currentLang: Language;
  targetItem: GeoTopicItem | null;
  questionIndex: number;
  totalQuestions: number;
  score: number;
  streak: number;
  attempt: number;
  isAnswered: boolean;
  isCorrect: boolean | null;
  lastWrongName: string | null;
  isFinished: boolean;
  onNextQuestion: () => void;
  onRestart: () => void;
  onBackToPlayMenu: () => void;
}

export const TopicGamePanel: React.FC<TopicGamePanelProps> = ({
  topic,
  currentLang,
  targetItem,
  questionIndex,
  totalQuestions,
  score,
  streak,
  attempt,
  isAnswered,
  isCorrect,
  lastWrongName,
  isFinished,
  onNextQuestion,
  onRestart,
  onBackToPlayMenu,
}) => {
  const isEs = currentLang === 'es';
  const [isCollapsed, setIsCollapsed] = useState(false);

  const topicTitles: Record<'continents' | 'oceans' | 'seas' | 'poles', { es: string; en: string }> = {
    continents: { es: 'Juego de Continentes', en: 'Continents Game' },
    oceans: { es: 'Juego de Océanos', en: 'Oceans Game' },
    seas: { es: 'Juego de Mares', en: 'Seas Game' },
    poles: { es: 'Juego de Polos', en: 'Poles Game' },
  };

  const title = isEs ? topicTitles[topic].es : topicTitles[topic].en;

  if (isCollapsed && !isFinished && targetItem) {
    return (
      <div className="fixed bottom-4 right-4 z-30">
        <button
          type="button"
          onClick={() => setIsCollapsed(false)}
          className="px-4 py-2.5 rounded-xl bg-white/95 backdrop-blur-md border border-amber-300 shadow-lg text-slate-900 font-bold text-sm inline-flex items-center gap-2 hover:bg-amber-50 transition-colors cursor-pointer"
        >
          <Maximize2 className="w-4 h-4 text-amber-600" />
          <span className="max-w-[200px] truncate">
            {isEs ? targetItem.name_es : targetItem.name_en}
          </span>
        </button>
      </div>
    );
  }

  return (
    <aside
      aria-label={title}
      className="absolute top-3 sm:top-4 right-3 sm:right-4 z-30 w-[calc(100%-24px)] sm:w-[370px] h-auto max-h-[calc(100%-1.5rem)] sm:max-h-[calc(100%-2rem)] bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl shadow-xl flex flex-col overflow-hidden text-slate-900"
      style={{ touchAction: 'pan-y' }}
    >
      {/* Header */}
      <div className="px-4 py-3 border-b border-slate-200/80 flex items-center justify-between gap-2 shrink-0">
        <div className="min-w-0">
          <p className="text-xs font-semibold text-amber-700">{title}</p>
          <div className="flex items-center gap-3 text-xs text-slate-600 font-medium tabular-nums mt-0.5">
            <span>
              {isEs ? 'Puntos:' : 'Score:'} <strong className="text-slate-950">{score}</strong>
            </span>
            <span aria-hidden="true">·</span>
            <span>
              {isEs ? 'Racha:' : 'Streak:'} <strong className="text-amber-700">{streak}</strong>
            </span>
            {!isFinished && (
              <>
                <span aria-hidden="true">·</span>
                <span>
                  {questionIndex + 1}/{totalQuestions}
                </span>
              </>
            )}
          </div>
        </div>

        {!isFinished && (
          <button
            type="button"
            onClick={() => setIsCollapsed(true)}
            title={isEs ? 'Minimizar panel para ver el mapa' : 'Minimize panel to view map'}
            className="p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors shrink-0 cursor-pointer"
          >
            <Minimize2 className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Body */}
      <div className="flex-1 overflow-y-auto min-h-0 p-4 space-y-3.5">
        {isFinished ? (
          <div className="py-2 text-center space-y-4">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center">
              <Trophy className="w-7 h-7" />
            </div>

            <div className="space-y-1">
              <h2 className="font-display font-bold text-2xl text-slate-950">
                {isEs ? '¡Reto completado!' : 'Challenge complete!'}
              </h2>
              <p className="text-sm text-slate-600">
                {isEs
                  ? `Obtuviste ${score} de ${totalQuestions} puntos posibles.`
                  : `You earned ${score} out of ${totalQuestions} possible points.`}
              </p>
            </div>

            <div className="flex flex-col gap-2 pt-1">
              <button
                type="button"
                onClick={onRestart}
                className="w-full py-2.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm inline-flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>{isEs ? 'Jugar otra vez' : 'Play again'}</span>
              </button>
              <button
                type="button"
                onClick={onBackToPlayMenu}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200/80 text-slate-800 font-semibold text-sm transition-colors cursor-pointer"
              >
                {isEs ? 'Elegir otro reto' : 'Choose another challenge'}
              </button>
            </div>
          </div>
        ) : (
          targetItem && (
            <>
              {/* Target Prompt */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                <p className="text-xs font-semibold text-slate-500">
                  {isEs ? 'Ubica en el mapa:' : 'Find on the map:'}
                </p>
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-display font-extrabold text-xl text-slate-950 leading-snug">
                    {isEs ? targetItem.name_es : targetItem.name_en}
                  </h3>
                  <button
                    type="button"
                    onClick={() =>
                      speakGeoName(isEs ? targetItem.name_es : targetItem.name_en, currentLang, true)
                    }
                    title={isEs ? 'Escuchar pronunciación' : 'Listen to pronunciation'}
                    aria-label={isEs ? 'Escuchar pronunciación' : 'Listen to pronunciation'}
                    className="p-1.5 rounded-lg bg-amber-100 hover:bg-amber-200 text-amber-800 transition-colors shrink-0 cursor-pointer"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>
                {!isAnswered && (
                  <p className="text-xs text-slate-600 inline-flex items-center gap-1.5 pt-1">
                    <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span>
                      {topic === 'continents'
                        ? isEs
                          ? 'Haz clic sobre el continente o su marcador.'
                          : 'Click on the continent or its marker.'
                        : isEs
                        ? 'Haz clic en uno de los marcadores (?) del mapa.'
                        : 'Click one of the (?) markers on the map.'}
                    </span>
                  </p>
                )}
              </div>

              {/* Wrong attempt feedback */}
              {!isAnswered && lastWrongName && (
                <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-900 flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <div>
                    <strong>{isEs ? `Tocaste ${lastWrongName}.` : `You clicked ${lastWrongName}.`}</strong>{' '}
                    {isEs
                      ? `Intento ${attempt} de 3. ¡Mira la pista y prueba otra vez!`
                      : `Attempt ${attempt} of 3. Check the hint and try again!`}
                  </div>
                </div>
              )}

              {/* Progressive hints */}
              {!isAnswered && attempt >= 2 && (
                <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 space-y-1 text-xs text-amber-950">
                  <div className="font-bold text-amber-800 inline-flex items-center gap-1.5">
                    <Lightbulb className="w-3.5 h-3.5" />
                    <span>{isEs ? 'Pista 1' : 'Hint 1'}</span>
                  </div>
                  <p className="leading-relaxed">
                    {isEs ? targetItem.hint1_es : targetItem.hint1_en}
                  </p>
                </div>
              )}

              {!isAnswered && attempt >= 3 && (
                <div className="p-3 rounded-xl bg-sky-50 border border-sky-200 space-y-1 text-xs text-sky-950">
                  <div className="font-bold text-sky-800 inline-flex items-center gap-1.5">
                    <Lightbulb className="w-3.5 h-3.5" />
                    <span>{isEs ? 'Pista 2 (Último intento)' : 'Hint 2 (Last try)'}</span>
                  </div>
                  <p className="leading-relaxed">
                    {isEs ? targetItem.hint2_es : targetItem.hint2_en}
                  </p>
                </div>
              )}

              {/* Answered Feedback */}
              {isAnswered && (
                <div
                  className={`p-3.5 rounded-xl border space-y-2 ${
                    isCorrect
                      ? 'bg-emerald-50 border-emerald-200 text-emerald-950'
                      : 'bg-rose-50 border-rose-200 text-rose-950'
                  }`}
                >
                  <div className="flex items-center gap-2 font-bold text-sm">
                    {isCorrect ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{isEs ? '¡Muy bien! Lo encontraste.' : 'Great job! You found it.'}</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                        <span>
                          {isEs ? 'Aquí es donde se encuentra:' : 'Here is where it is located:'}
                        </span>
                      </>
                    )}
                  </div>
                  <p className="text-xs leading-relaxed opacity-90">
                    {isEs ? targetItem.funFact_es : targetItem.funFact_en}
                  </p>
                </div>
              )}
            </>
          )
        )}
      </div>

      {/* Pinned Bottom Footer (Next button NEVER clipped) */}
      {!isFinished && isAnswered && (
        <div className="px-4 py-3 border-t border-slate-200/80 bg-slate-50/90 shrink-0">
          <button
            type="button"
            onClick={onNextQuestion}
            className="w-full py-2.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm inline-flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
          >
            <span>
              {questionIndex + 1 < totalQuestions
                ? isEs
                  ? 'Siguiente'
                  : 'Next'
                : isEs
                ? 'Ver resultado'
                : 'See Results'}
            </span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </aside>
  );
};
