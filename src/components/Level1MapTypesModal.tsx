import React, { useState } from 'react';
import { Language, LensType } from '../types/geography';
import {
  BookOpen,
  ChevronLeft,
  ChevronRight,
  X,
  Target,
  Layers,
  ArrowRight
} from 'lucide-react';
import {
  PoliticalMapVisualExhibit,
  PhysicalHypsometricVisualExhibit,
  SatelliteAlbedoVisualExhibit,
  ComparativeLensTrioVisualizer
} from './Level1VisualExhibits';

interface Level1MapTypesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartEvaluation: () => void;
  onChangeLens?: (lens: LensType) => void;
  currentLang: Language;
}

type ChapterId = 'political' | 'physical' | 'satellite' | 'comparison';

interface ChapterMeta {
  id: ChapterId;
  number: number;
  icon: string;
  title_es: string;
  title_en: string;
  subtitle_es: string;
  subtitle_en: string;
  lens: LensType;
}

const CHAPTERS: ChapterMeta[] = [
  {
    id: 'political',
    number: 1,
    icon: '🏛️',
    title_es: 'Cap. 1: Mapa Político',
    title_en: 'Ch. 1: Political Map',
    subtitle_es: 'Soberanías, fronteras, capitales y microestados',
    subtitle_en: 'Sovereignty, borders, capitals and microstates',
    lens: 'political',
  },
  {
    id: 'physical',
    number: 2,
    icon: '🗺️',
    title_es: 'Cap. 2: Relieve Físico e Hipsometría',
    title_en: 'Ch. 2: Physical Relief & Hypsometry',
    subtitle_es: 'Cotas de altitud universal y batimetría submarina',
    subtitle_en: 'Universal elevation tiers and ocean bathymetry',
    lens: 'physical',
  },
  {
    id: 'satellite',
    number: 3,
    icon: '🛰️',
    title_es: 'Cap. 3: Satélite Óptico Real',
    title_en: 'Ch. 3: Real Optical Satellite',
    subtitle_es: 'Reflectancia real, albedo de arenas y huella humana',
    subtitle_en: 'Surface albedo, sand reflectance and human scars',
    lens: 'satellite',
  },
  {
    id: 'comparison',
    number: 4,
    icon: '⚖️',
    title_es: 'Cap. 4: Matriz Comparativa y Decisión',
    title_en: 'Ch. 4: Comparative Matrix & Decision',
    subtitle_es: 'Elección del mapa óptimo y síntesis cartográfica',
    subtitle_en: 'Choosing optimal maps and cartographic synthesis',
    lens: 'physical',
  },
];

export const Level1MapTypesModal: React.FC<Level1MapTypesModalProps> = ({
  isOpen,
  onClose,
  onStartEvaluation,
  onChangeLens,
  currentLang,
}) => {
  const isEs = currentLang === 'es';
  const [chapterIndex, setChapterIndex] = useState<number>(0);

  if (!isOpen) return null;

  const currentChapter = CHAPTERS[chapterIndex];

  const goToChapter = (idx: number) => {
    const validIdx = Math.max(0, Math.min(CHAPTERS.length - 1, idx));
    setChapterIndex(validIdx);
    if (onChangeLens) {
      onChangeLens(CHAPTERS[validIdx].lens);
    }
  };

  const handleNextChapter = () => {
    if (chapterIndex < CHAPTERS.length - 1) {
      goToChapter(chapterIndex + 1);
    } else {
      handleStartExam();
    }
  };

  const handlePrevChapter = () => {
    if (chapterIndex > 0) {
      goToChapter(chapterIndex - 1);
    }
  };

  const handleStartExam = () => {
    onClose();
    onStartEvaluation();
  };

  const progressPercent = ((chapterIndex + 1) / CHAPTERS.length) * 100;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-1 sm:p-3 md:p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-700/80 rounded-2xl sm:rounded-3xl w-[98vw] max-w-[1520px] h-[95dvh] flex flex-col shadow-2xl overflow-hidden ring-1 ring-blue-500/20">
        
        {/* Book Reader Top Header */}
        <div className="p-3 sm:px-5 sm:py-3 border-b border-slate-800 bg-slate-950/95 flex items-center justify-between gap-3 shrink-0">
          
          {/* Left: Book Branding & Current Chapter Title */}
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white flex items-center justify-center shadow-lg shadow-blue-500/20 shrink-0">
              <BookOpen className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 font-bold border border-blue-500/30 shrink-0">
                  {isEs ? 'Libro Interactivo · Nivel 1' : 'Interactive Reader · Level 1'}
                </span>
                <span className="text-xs text-amber-300 font-mono font-bold truncate">
                  {isEs ? `Subcapítulo ${currentChapter.number} de ${CHAPTERS.length}` : `Subchapter ${currentChapter.number} of ${CHAPTERS.length}`}
                </span>
              </div>
              <h2 className="text-xs sm:text-sm font-bold text-white truncate hidden sm:block">
                {isEs ? currentChapter.title_es : currentChapter.title_en} —{' '}
                <span className="text-slate-400 font-normal">
                  {isEs ? currentChapter.subtitle_es : currentChapter.subtitle_en}
                </span>
              </h2>
            </div>
          </div>

          {/* Center: Desktop Book Chapter Stepper */}
          <div className="hidden lg:flex items-center gap-1 p-1 bg-slate-900 rounded-xl border border-slate-800 shrink-0">
            {CHAPTERS.map((chap, idx) => {
              const isCurrent = idx === chapterIndex;
              const isPast = idx < chapterIndex;
              return (
                <button
                  key={chap.id}
                  type="button"
                  onClick={() => goToChapter(idx)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 whitespace-nowrap ${
                    isCurrent
                      ? 'bg-blue-600 text-white font-bold shadow-md ring-1 ring-blue-400/50'
                      : isPast
                      ? 'text-slate-300 hover:text-white bg-slate-950/60 hover:bg-slate-800'
                      : 'text-slate-500 hover:text-slate-300'
                  }`}
                >
                  <span>{chap.icon}</span>
                  <span>{isEs ? chap.title_es : chap.title_en}</span>
                </button>
              );
            })}
          </div>

          {/* Right Action Controls: Prev/Next Quick Stepper, Exam CTA, and Close */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Quick Page Prev/Next on Header (accessible on all screen sizes) */}
            <div className="flex items-center gap-1 bg-slate-900 p-0.5 rounded-lg border border-slate-800">
              <button
                type="button"
                onClick={handlePrevChapter}
                disabled={chapterIndex === 0}
                title={isEs ? 'Capítulo Anterior' : 'Previous Chapter'}
                className="p-1 rounded text-slate-400 hover:text-white disabled:opacity-30 disabled:pointer-events-none hover:bg-slate-800 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-[11px] font-mono font-bold text-slate-300 px-1.5">
                {chapterIndex + 1}/{CHAPTERS.length}
              </span>
              <button
                type="button"
                onClick={handleNextChapter}
                disabled={chapterIndex === CHAPTERS.length - 1}
                className="p-1 rounded text-slate-400 hover:text-white disabled:opacity-30 disabled:pointer-events-none hover:bg-slate-800 transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Jump to Exam CTA */}
            <button
              type="button"
              onClick={handleStartExam}
              className="px-3 py-1.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-black flex items-center gap-1.5 shadow-md transition-all active:scale-95"
            >
              <Target className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{isEs ? 'Evaluación (90%)' : 'Evaluation (90%)'}</span>
              <span className="sm:hidden">90%</span>
            </button>

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* TWO-ZONE GUIDED BOOK VIEWPORT: 2/3 MAP, 1/3 PANEL */}
        <div className="flex-1 h-full min-h-0 bg-slate-950 flex flex-col overflow-hidden">
          {currentChapter.id === 'political' && (
            <PoliticalMapVisualExhibit
              currentLang={currentLang}
              onStartEvaluation={handleStartExam}
              onNextChapter={handleNextChapter}
              onPrevChapter={chapterIndex > 0 ? handlePrevChapter : undefined}
              chapterNumber={1}
              totalChapters={CHAPTERS.length}
            />
          )}

          {currentChapter.id === 'physical' && (
            <PhysicalHypsometricVisualExhibit
              currentLang={currentLang}
              onStartEvaluation={handleStartExam}
              onNextChapter={handleNextChapter}
              onPrevChapter={handlePrevChapter}
              chapterNumber={2}
              totalChapters={CHAPTERS.length}
            />
          )}

          {currentChapter.id === 'satellite' && (
            <SatelliteAlbedoVisualExhibit
              currentLang={currentLang}
              onStartEvaluation={handleStartExam}
              onNextChapter={handleNextChapter}
              onPrevChapter={handlePrevChapter}
              chapterNumber={3}
              totalChapters={CHAPTERS.length}
            />
          )}

          {currentChapter.id === 'comparison' && (
            <ComparativeLensTrioVisualizer
              currentLang={currentLang}
              onStartEvaluation={handleStartExam}
              onNextChapter={undefined}
              onPrevChapter={handlePrevChapter}
              chapterNumber={4}
              totalChapters={CHAPTERS.length}
            />
          )}
        </div>
      </div>
    </div>
  );
};
