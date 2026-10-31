import React from 'react';
import { Language, QuestionProgress, ExplorerBadge, BloomQuestQuestion } from '../types/geography';
import { X, Award, CheckCircle2, AlertCircle, Download, RotateCcw, Target, Sparkles } from 'lucide-react';

interface MasteryReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  masteryPercentage: number;
  questionProgress: Record<string, QuestionProgress>;
  allQuestions: BloomQuestQuestion[];
  badges: ExplorerBadge[];
  reviewList: string[];
  onPracticeReviewItem: (questionId: string) => void;
  onResetProgress: () => void;
}

export const MasteryReportModal: React.FC<MasteryReportModalProps> = ({
  isOpen,
  onClose,
  currentLang,
  masteryPercentage,
  questionProgress,
  allQuestions,
  badges,
  reviewList,
  onPracticeReviewItem,
  onResetProgress,
}) => {
  if (!isOpen) return null;

  const isEs = currentLang === 'es';
  const solvedCount = Object.values(questionProgress).filter((p) => p.passed).length;
  const totalCount = allQuestions.length;

  // Level stats
  const levelStats = [1, 2, 3, 4].map((lvl) => {
    const lvlQuestions = allQuestions.filter((q) => q.level === lvl);
    const passedLvl = lvlQuestions.filter((q) => questionProgress[q.id]?.passed).length;
    const pct = lvlQuestions.length > 0 ? Math.round((passedLvl / lvlQuestions.length) * 100) : 0;
    return { level: lvl, total: lvlQuestions.length, passed: passedLvl, pct };
  });

  // Export JSON Report
  const handleExportJson = () => {
    const reportData = {
      app: 'GeoMaster Explorer: Global Geography & Cartographic Mastery',
      timestamp: new Date().toISOString(),
      masteryThresholdGoal: '90%',
      achievedMastery: `${masteryPercentage}%`,
      solvedCount,
      totalCount,
      levelBreakdown: levelStats,
      unlockedBadges: badges.filter((b) => b.unlocked).map((b) => b.title_en),
      reviewQueue: reviewList,
      questionProgress,
    };

    const blob = new Blob([JSON.stringify(reportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `GeoMaster_Mastery_Report_${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Export CSV Report
  const handleExportCsv = () => {
    let csv = 'Question ID,Bloom Level,Target Country,Attempts,Passed,Needed Hints\n';
    allQuestions.forEach((q) => {
      const p = questionProgress[q.id];
      csv += `"${q.id}",${q.level},"${q.target_name_en}",${p ? p.attempts : 0},${p?.passed ? 'YES' : 'NO'},${p?.neededHelp ? 'YES' : 'NO'}\n`;
    });

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `GeoMaster_Progress_${Date.now()}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-700/80 rounded-2xl w-full max-w-4xl max-h-[92dvh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-3 sm:p-4 border-b border-slate-800 bg-slate-800/60 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="text-lg sm:text-xl">🏆</span>
              <h2 className="text-sm sm:text-lg font-bold text-white">
                {isEs ? 'Panel de Maestría & Logros' : 'Curriculum Mastery & Progress'}
              </h2>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              {isEs
                ? 'Monitoreo de competencias geográficas y cognitivas (Meta: 90% de Maestría Global).'
                : 'Tracking geographic competence and cognitive progression (Goal: 90% Global Mastery).'}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6 text-slate-100">
          {/* Main 90% Mastery Goal Progress Bar */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 border border-amber-500/30 shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5 text-amber-400" />
                <span className="text-sm font-bold text-white">
                  {isEs ? 'Meta de Maestría Curricular (90%)' : 'Curriculum Mastery Threshold (90%)'}
                </span>
              </div>
              <span className="text-xl font-extrabold font-mono text-amber-300">
                {masteryPercentage}%
              </span>
            </div>

            {/* Progress Bar with 90% Goal Marker */}
            <div className="relative w-full h-4 bg-slate-950 rounded-full overflow-hidden p-0.5 border border-slate-700">
              <div
                className={`h-full rounded-full transition-all duration-700 ${
                  masteryPercentage >= 90
                    ? 'bg-gradient-to-r from-emerald-500 via-amber-400 to-amber-300 shadow-lg shadow-amber-400/50'
                    : 'bg-gradient-to-r from-sky-500 to-amber-400'
                }`}
                style={{ width: `${Math.min(masteryPercentage, 100)}%` }}
              />
              {/* 90% indicator line */}
              <div
                className="absolute top-0 bottom-0 w-0.5 bg-rose-400 z-10"
                style={{ left: '90%' }}
                title="90% Mastery Goal"
              />
            </div>

            <div className="flex items-center justify-between text-[11px] text-slate-400 mt-2 font-mono">
              <span>{solvedCount} / {totalCount} {isEs ? 'retos aprobados' : 'challenges solved'}</span>
              <span className="text-amber-400 font-bold">
                {masteryPercentage >= 90
                  ? isEs ? '¡Meta del 90% Alcanzada!' : '90% Mastery Goal Achieved!'
                  : isEs ? `Falta ${Math.max(0, 90 - masteryPercentage)}% para la meta` : `${Math.max(0, 90 - masteryPercentage)}% away from goal`}
              </span>
            </div>
          </div>

          {/* Breakdown by Bloom's Taxonomy Levels */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              {isEs ? 'Dominio por Niveles de la Taxonomía de Bloom' : 'Bloom’s Taxonomy Mastery Breakdown'}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {levelStats.map((item) => (
                <div
                  key={item.level}
                  className="bg-slate-800/60 p-3 rounded-xl border border-slate-700 flex flex-col gap-1.5"
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-amber-300">Level {item.level}</span>
                    <span className="font-mono text-slate-300 text-[11px]">
                      {item.passed}/{item.total}
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-400 font-medium">
                    {item.level === 1
                      ? isEs ? 'Conocimiento' : 'Knowledge'
                      : item.level === 2
                      ? isEs ? 'Comprensión' : 'Comprehension'
                      : item.level === 3
                      ? isEs ? 'Aplicación' : 'Application'
                      : isEs ? 'Análisis' : 'Analysis'}
                  </span>
                  <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden mt-1">
                    <div
                      className="h-full bg-amber-400 rounded-full transition-all"
                      style={{ width: `${item.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Badges Earned Section */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>{isEs ? 'Insignias de Explorador' : 'Explorer Badges'}</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {badges.map((b) => (
                <div
                  key={b.id}
                  className={`p-3.5 rounded-xl border transition-all flex items-start gap-3 ${
                    b.unlocked
                      ? 'bg-amber-500/10 border-amber-400/50 shadow-md ring-1 ring-amber-400/30'
                      : 'bg-slate-800/30 border-slate-800 opacity-50'
                  }`}
                >
                  <span className="text-2xl">{b.icon}</span>
                  <div>
                    <h4 className="text-xs font-bold text-white">
                      {isEs ? b.title_es : b.title_en}
                    </h4>
                    <p className="text-[11px] text-slate-300 mt-0.5 leading-relaxed">
                      {isEs ? b.description_es : b.description_en}
                    </p>
                    <span className="text-[10px] font-mono text-amber-400 block mt-1">
                      {b.unlocked ? (isEs ? '✓ Desbloqueada' : '✓ Unlocked') : b.requirement}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Needs Review / Áreas por Reforzar Panel */}
          <div className="p-4 rounded-2xl bg-rose-950/20 border border-rose-500/40 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-rose-400" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-rose-300">
                  {isEs ? 'Áreas por Reforzar (Needs Review)' : 'Areas Needing Reinforcement (Review Queue)'}
                </h3>
              </div>
              <span className="text-xs font-mono font-bold text-rose-400">
                {reviewList.length} {isEs ? 'temas marcados' : 'flagged items'}
              </span>
            </div>

            {reviewList.length > 0 ? (
              <div className="space-y-2">
                {reviewList.map((qId) => {
                  const q = allQuestions.find((item) => item.id === qId);
                  if (!q) return null;

                  return (
                    <div
                      key={qId}
                      className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between text-xs"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="px-1.5 py-0.5 rounded font-mono text-[10px] bg-rose-500/20 text-rose-300 font-bold">
                            L{q.level}
                          </span>
                          <span className="font-bold text-white">
                            {isEs ? q.target_name_es : q.target_name_en}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400 mt-0.5">
                          {isEs ? q.bloom_title_es : q.bloom_title_en}
                        </p>
                      </div>

                      <button
                        onClick={() => {
                          onPracticeReviewItem(qId);
                          onClose();
                        }}
                        className="px-3 py-1 rounded-lg bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border border-rose-500/40 font-bold text-[11px] transition-colors"
                      >
                        {isEs ? 'Practicar' : 'Practice'}
                      </button>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="text-xs text-slate-400 p-2 bg-slate-900/50 rounded-xl">
                {isEs
                  ? '¡Excelente! No tienes temas marcados para refuerzo en este momento.'
                  : 'Great job! You have no questions flagged for reinforcement.'}
              </div>
            )}
          </div>
        </div>

        {/* Modal Footer: Export & Reset */}
        <div className="p-4 border-t border-slate-800 bg-slate-900/90 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={handleExportJson}
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 border border-slate-700 transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-sky-400" />
              <span>Export JSON</span>
            </button>
            <button
              onClick={handleExportCsv}
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 border border-slate-700 transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-emerald-400" />
              <span>Export CSV</span>
            </button>
          </div>

          <button
            onClick={onResetProgress}
            className="px-3 py-1.5 rounded-lg text-slate-400 hover:text-rose-400 text-xs font-semibold flex items-center gap-1.5 hover:bg-rose-500/10 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>{isEs ? 'Reiniciar Progreso' : 'Reset Progress'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
