import React, { useState } from 'react';
import { BloomEvaluationQuestion } from '../types/progression';
import { Language } from '../types/geography';
import {
  Award,
  CheckCircle2,
  XCircle,
  ArrowRight,
  RotateCcw,
  ShieldCheck,
  Sparkles,
  Lock,
  Unlock,
  BookOpen,
  X,
  Target
} from 'lucide-react';
import { CartographicQuestionFigure } from './Level1VisualExhibits';

interface LevelEvaluationEngineProps {
  questions: BloomEvaluationQuestion[];
  levelTitle: string;
  levelNumber: number;
  currentLang: Language;
  onComplete: (scorePercentage: number) => void;
  onClose: () => void;
  onSwitchToLearnMode: () => void;
}

export const LevelEvaluationEngine: React.FC<LevelEvaluationEngineProps> = ({
  questions,
  levelTitle,
  levelNumber,
  currentLang,
  onComplete,
  onClose,
  onSwitchToLearnMode,
}) => {
  const isEs = currentLang === 'es';
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showExplanation, setShowExplanation] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const currentQ = questions[currentIndex];

  const handleSelectOption = (optionIndex: number) => {
    if (selectedAnswers[currentIndex] !== undefined) return; // Already answered
    setSelectedAnswers((prev) => ({ ...prev, [currentIndex]: optionIndex }));
    setShowExplanation(true);
  };

  const handleNext = () => {
    setShowExplanation(false);
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      // Calculate final score
      let correctCount = 0;
      questions.forEach((q, idx) => {
        if (selectedAnswers[idx] === q.correct_index) {
          correctCount++;
        }
      });
      const score = Math.round((correctCount / questions.length) * 100);
      setIsFinished(true);
      onComplete(score);
    }
  };

  const handleRestart = () => {
    setSelectedAnswers({});
    setShowExplanation(false);
    setCurrentIndex(0);
    setIsFinished(false);
  };

  // Final Score Calculation
  const correctCount = Object.entries(selectedAnswers).filter(([idx, ans]) => {
    return questions[Number(idx)]?.correct_index === ans;
  }).length;
  const scorePercentage = Math.round((correctCount / questions.length) * 100);
  const hasPassed = scorePercentage >= 90;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-5 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-700/80 rounded-2xl sm:rounded-3xl w-full max-w-3xl max-h-[92dvh] flex flex-col shadow-2xl overflow-hidden ring-1 ring-amber-400/20">
        
        {/* Top Header */}
        <div className="p-3.5 sm:p-4 border-b border-slate-800 bg-slate-950/80 flex items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center shrink-0">
              <Target className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-bold border border-amber-500/30">
                  {isEs ? `Evaluación Nivel ${levelNumber}` : `Level ${levelNumber} Assessment`}
                </span>
                <span className="text-[11px] font-bold text-slate-300 font-mono">
                  {isEs ? 'Meta Obligatoria: 90%' : 'Required Gate: 90%'}
                </span>
              </div>
              <h2 className="text-sm sm:text-base font-extrabold text-white truncate mt-0.5">
                {levelTitle}
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          {!isFinished ? (
            <>
              {/* Progress & Bloom Category Indicator */}
              <div className="flex items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-amber-400">
                    {isEs ? `Pregunta ${currentIndex + 1} de ${questions.length}` : `Question ${currentIndex + 1} of ${questions.length}`}
                  </span>
                  <span className="text-slate-600">•</span>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 border border-sky-500/30 uppercase font-semibold">
                    {isEs ? currentQ.bloom_title_es : currentQ.bloom_title_en}
                  </span>
                </div>

                <div className="text-[11px] font-mono text-slate-400">
                  <span className="text-amber-400 font-bold">★ 90%</span> {isEs ? 'Requerido' : 'Passing Gate'}
                </div>
              </div>

              {/* Scenario Context Box (if available) */}
              {(currentQ.scenario_es || currentQ.scenario_en) && (
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                  <strong className="text-amber-300 not-italic block mb-1 font-bold">
                    📌 {isEs ? 'Escenario de Análisis:' : 'Context Scenario:'}
                  </strong>
                  {isEs ? currentQ.scenario_es : currentQ.scenario_en}
                </div>
              )}

              {/* Cartographic Visual Stimulus Figure */}
              {currentQ.visual_stimulus && (
                <CartographicQuestionFigure
                  stimulus={currentQ.visual_stimulus}
                  currentLang={currentLang}
                />
              )}

              {/* Main Question Text */}
              <div className="text-sm sm:text-base font-bold text-white leading-snug">
                {isEs ? currentQ.question_es : currentQ.question_en}
              </div>

              {/* Multiple Choice Options */}
              <div className="space-y-2.5 pt-1">
                {(isEs ? currentQ.options_es : currentQ.options_en).map((optionText, optIdx) => {
                  const isSelected = selectedAnswers[currentIndex] === optIdx;
                  const isAnswered = selectedAnswers[currentIndex] !== undefined;
                  const isCorrect = optIdx === currentQ.correct_index;

                  let btnStyle = 'border-slate-800 bg-slate-950/60 hover:bg-slate-800/90 text-slate-200';
                  if (isAnswered) {
                    if (isCorrect) {
                      btnStyle = 'border-emerald-500 bg-emerald-950/60 text-emerald-200 ring-2 ring-emerald-500/40 font-semibold';
                    } else if (isSelected) {
                      btnStyle = 'border-rose-500 bg-rose-950/60 text-rose-200 ring-2 ring-rose-500/40';
                    } else {
                      btnStyle = 'border-slate-800/50 bg-slate-950/30 text-slate-500 opacity-60';
                    }
                  }

                  return (
                    <button
                      key={optIdx}
                      disabled={isAnswered}
                      onClick={() => handleSelectOption(optIdx)}
                      className={`w-full p-3.5 rounded-xl border text-left text-xs sm:text-sm transition-all flex items-start gap-3 relative ${btnStyle}`}
                    >
                      <span className="w-5 h-5 rounded-full border border-slate-600 flex items-center justify-center text-[10px] font-mono shrink-0 font-bold mt-0.5">
                        {String.fromCharCode(65 + optIdx)}
                      </span>
                      <span className="flex-1 leading-relaxed">{optionText}</span>
                      {isAnswered && isCorrect && (
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      )}
                      {isAnswered && isSelected && !isCorrect && (
                        <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Immediate Pedagogical Explanation */}
              {showExplanation && (
                <div className="p-3.5 rounded-xl bg-slate-950/90 border border-amber-500/40 space-y-2 animate-in fade-in duration-200">
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span className="flex items-center gap-1.5 text-amber-300">
                      <Sparkles className="w-4 h-4 text-amber-400" />
                      <span>{isEs ? 'Fundamento Cartográfico y Pedagógico:' : 'Cartographic & Pedagogical Rationale:'}</span>
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      {isEs ? 'Dominio:' : 'Domain:'} {currentQ.nwea_strand}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                    {isEs ? currentQ.explanation_es : currentQ.explanation_en}
                  </p>

                  <div className="pt-2 flex justify-end">
                    <button
                      onClick={handleNext}
                      className="px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs sm:text-sm font-bold flex items-center gap-2 shadow-lg transition-all active:scale-95"
                    >
                      <span>
                        {currentIndex < questions.length - 1
                          ? isEs ? 'Siguiente Pregunta' : 'Next Question'
                          : isEs ? 'Finalizar Evaluación' : 'Submit Assessment'}
                      </span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </>
          ) : (
            /* Final Assessment Report & Gating Outcome */
            <div className="py-6 text-center space-y-6 animate-in zoom-in-95 duration-200">
              <div className="flex justify-center">
                <div
                  className={`w-20 h-20 rounded-3xl flex items-center justify-center text-3xl shadow-2xl border-2 ${
                    hasPassed
                      ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50 shadow-emerald-500/20'
                      : 'bg-rose-500/20 text-rose-400 border-rose-500/50 shadow-rose-500/20'
                  }`}
                >
                  {hasPassed ? '🏆' : '⚠️'}
                </div>
              </div>

              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  {isEs ? 'Resultado de la Evaluación' : 'Assessment Outcome'}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  {scorePercentage}%
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  {isEs
                    ? `${correctCount} respuestas correctas de ${questions.length} preguntas`
                    : `${correctCount} correct out of ${questions.length} questions`}
                </p>
              </div>

              {/* Status Banner */}
              <div
                className={`p-4 rounded-2xl border text-xs sm:text-sm text-left flex items-start gap-3.5 max-w-lg mx-auto ${
                  hasPassed
                    ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-200'
                    : 'bg-rose-500/10 border-rose-500/40 text-rose-200'
                }`}
              >
                {hasPassed ? (
                  <Unlock className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                ) : (
                  <Lock className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                )}
                <div>
                  <strong className="block font-bold mb-0.5">
                    {hasPassed
                      ? isEs
                        ? '¡NIVEL APROBADO CON ÉXITO! (>= 90%)'
                        : 'LEVEL PASSED WITH MASTERY! (>= 90%)'
                      : isEs
                      ? 'NO ALCANZASTE EL 90% REQUERIDO'
                      : 'DID NOT REACH REQUIRED 90% MASTERY'}
                  </strong>
                  <p className="leading-relaxed opacity-95">
                    {hasPassed
                      ? isEs
                        ? 'Has superado el umbral del 90% demostrando comprensión profunda en la taxonomía de Bloom. El siguiente nivel de aprendizaje y evaluación ha sido desbloqueado.'
                        : 'You exceeded the 90% threshold, demonstrating Bloom taxonomy mastery. The next level of learning and evaluation is now unlocked.'
                      : isEs
                      ? 'Para asegurar la maestría del contenido, es obligatorio aprobar con al menos el 90% antes de avanzar. Te recomendamos repasar los conceptos en el modo aprendizaje y volver a intentarlo.'
                      : 'To ensure mastery, 90% is strictly required before unlocking the next level. We recommend reviewing the guided learning module before retrying.'}
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <button
                  onClick={handleRestart}
                  className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-bold flex items-center gap-2 border border-slate-700 transition-all"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>{isEs ? 'Reintentar Evaluación' : 'Retake Assessment'}</span>
                </button>

                {!hasPassed && (
                  <button
                    onClick={() => {
                      onSwitchToLearnMode();
                      onClose();
                    }}
                    className="px-4 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 text-xs sm:text-sm font-bold flex items-center gap-2 transition-all shadow-md"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>{isEs ? 'Repasar en Modo Aprendizaje' : 'Review Learning Module'}</span>
                  </button>
                )}

                {hasPassed && (
                  <button
                    onClick={onClose}
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-950 text-xs sm:text-sm font-black flex items-center gap-2 shadow-lg transition-all active:scale-95"
                  >
                    <span>{isEs ? 'Continuar al Siguiente Nivel' : 'Proceed to Next Level'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
