import React, { useState } from 'react';
import { findVocabularyTerm, VocabularyTerm } from '../data/hintVocabularyData';
import { Language } from '../types/geography';
import { HelpCircle, Info } from 'lucide-react';

interface InteractiveHintTextProps {
  text: string;
  currentLang: Language;
}

export const InteractiveHintText: React.FC<InteractiveHintTextProps> = ({ text, currentLang }) => {
  const isEs = currentLang === 'es';

  // Tokenize text into words/phrases while preserving punctuation and spacing
  // We check 2-word phrases first, then single words
  const renderInteractiveText = () => {
    if (!text) return null;

    // List of key multi-word phrases to detect first
    const multiWordPhrases = [
      'drainage basin',
      'cuenca hidrografica',
      'mountain range',
      'rain shadow',
      'sombra orografica',
      'coastal upwelling',
      'afloramiento costero',
      'landlocked nation',
      'sin salida al mar',
      'sin litoral',
      'shale oil',
      'gas de esquisto',
      'linea ecuatorial',
      'equator line',
    ];

    // Simple word-by-word parser with lookahead
    const words = text.split(/(\s+)/);
    const elements: React.ReactNode[] = [];

    for (let i = 0; i < words.length; i++) {
      const currentWord = words[i];
      if (/^\s+$/.test(currentWord)) {
        elements.push(currentWord);
        continue;
      }

      // Check two-word phrase (currentWord + space + nextWord)
      let twoWordPhrase = '';
      if (i + 2 < words.length && /^\s+$/.test(words[i + 1])) {
        twoWordPhrase = `${cleanWord(currentWord)} ${cleanWord(words[i + 2])}`.toLowerCase();
      }

      const multiMatch = twoWordPhrase ? findVocabularyTerm(twoWordPhrase) : null;
      if (multiMatch) {
        elements.push(
          <TooltipTerm
            key={`${i}-multi`}
            displayText={`${currentWord}${words[i + 1]}${words[i + 2]}`}
            vocab={multiMatch}
            isEs={isEs}
          />
        );
        i += 2; // skip the next word and space
        continue;
      }

      // Check single word match
      const cleaned = cleanWord(currentWord).toLowerCase();
      const singleMatch = findVocabularyTerm(cleaned);

      if (singleMatch) {
        elements.push(
          <TooltipTerm
            key={`${i}-single`}
            displayText={currentWord}
            vocab={singleMatch}
            isEs={isEs}
          />
        );
      } else {
        elements.push(currentWord);
      }
    }

    return elements;
  };

  return <span className="leading-relaxed">{renderInteractiveText()}</span>;
};

// Helper to strip punctuation from tokens
function cleanWord(word: string): string {
  return word.replace(/^[.,;:¿?¡!()"'\-\s]+|[.,;:¿?¡!()"'\-\s]+$/g, '');
}

interface TooltipTermProps {
  displayText: string;
  vocab: VocabularyTerm;
  isEs: boolean;
}

const TooltipTerm: React.FC<TooltipTermProps> = ({ displayText, vocab, isEs }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <span
      className="relative inline-block group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onClick={() => setIsOpen(!isOpen)}
    >
      <span
        tabIndex={0}
        role="button"
        aria-label={`Definition of ${isEs ? vocab.term_es : vocab.term_en}`}
        className="font-bold text-amber-300 hover:text-amber-200 underline decoration-amber-400/70 decoration-dotted decoration-2 underline-offset-4 cursor-help transition-colors inline-flex items-center gap-0.5"
      >
        <span>{displayText}</span>
        <span className="text-[10px] opacity-80" aria-hidden="true">💡</span>
      </span>

      {/* Floating Hover/Tap Tooltip */}
      {isOpen && (
        <span
          className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 z-50 w-64 sm:w-72 p-3 bg-slate-950/95 backdrop-blur-xl border border-amber-400/80 rounded-xl shadow-2xl text-slate-100 text-left pointer-events-auto animate-in zoom-in-95 duration-200 select-none block"
          style={{ minWidth: '240px' }}
        >
          {/* Tooltip Header */}
          <span className="flex items-center justify-between border-b border-slate-800 pb-1.5 mb-1.5 block">
            <span className="flex items-center gap-1.5 font-bold text-xs text-white">
              <span className="text-sm shrink-0">{vocab.icon}</span>
              <span className="font-extrabold text-amber-300">
                {isEs ? vocab.term_es : vocab.term_en}
              </span>
            </span>
            <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-amber-400/20 text-amber-300 border border-amber-400/30 font-bold uppercase">
              {vocab.category === 'physical'
                ? isEs ? 'Físico' : 'Physical'
                : vocab.category === 'economic'
                ? isEs ? 'Económico' : 'Economic'
                : isEs ? 'Espacial' : 'Spatial'}
            </span>
          </span>

          {/* 4th-6th Grade Definition */}
          <span className="text-[11px] text-slate-200 leading-normal block font-normal">
            {isEs ? vocab.def_es : vocab.def_en}
          </span>

          {/* Tip footer */}
          <span className="text-[9px] text-slate-400 flex items-center gap-1 mt-1.5 pt-1 border-t border-slate-900 block">
            <Info className="w-2.5 h-2.5 text-sky-400 shrink-0" />
            <span>{isEs ? 'Glosario para estudiantes de 4°-6° grado' : 'Glossary clue for 4th-6th grade learners'}</span>
          </span>

          {/* Small Arrow indicator */}
          <span className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-slate-950 block" />
        </span>
      )}
    </span>
  );
};
