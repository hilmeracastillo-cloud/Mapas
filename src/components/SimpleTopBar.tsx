import React from 'react';
import { Language } from '../types/geography';
import { Compass } from 'lucide-react';

export type TopSection = 'home' | 'explore' | 'play' | 'learn';

interface SimpleTopBarProps {
  currentLang: Language;
  activeSection: TopSection;
  onNavigate: (section: TopSection) => void;
  onToggleLang: () => void;
}

export const SimpleTopBar: React.FC<SimpleTopBarProps> = ({
  currentLang,
  activeSection,
  onNavigate,
  onToggleLang,
}) => {
  const isEs = currentLang === 'es';

  const navItems: { id: Exclude<TopSection, 'home'>; label: string }[] = [
    { id: 'explore', label: isEs ? 'Explorar' : 'Explore' },
    { id: 'play', label: isEs ? 'Jugar' : 'Play' },
    { id: 'learn', label: isEs ? 'Aprender' : 'Learn' },
  ];

  return (
    <header className="sticky top-0 z-40 h-14 sm:h-16 bg-white/95 backdrop-blur-md border-b border-slate-200/90 px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4 sm:gap-8 shrink-0">
      {/* Zone 1: Single-line Brand Wordmark */}
      <button
        type="button"
        onClick={() => onNavigate('home')}
        className="flex items-center gap-2.5 text-slate-900 hover:text-sky-700 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
      >
        <span className="w-8 h-8 rounded-xl bg-sky-600 text-white flex items-center justify-center shrink-0">
          <Compass className="w-4 h-4 stroke-[2.25]" />
        </span>
        <span className="font-display font-bold text-base sm:text-lg tracking-tight whitespace-nowrap">
          {isEs ? 'Aprendiendo el Mundo' : 'Learning the World'}
        </span>
      </button>

      {/* Zone 2: Clean Single-Line Navigation Links */}
      <nav aria-label={isEs ? 'Navegación principal' : 'Primary navigation'} className="flex items-center gap-4 sm:gap-7">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onNavigate(item.id)}
              className={`relative py-1 text-sm font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                isActive
                  ? 'text-sky-700'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {item.label}
              {isActive && (
                <span className="absolute left-0 right-0 -bottom-[17px] sm:-bottom-[21px] h-[2.5px] bg-sky-600 rounded-full" />
              )}
            </button>
          );
        })}
      </nav>

      {/* Zone 3: Single Primary Action (Language Toggle) */}
      <div className="flex items-center shrink-0">
        <button
          type="button"
          onClick={onToggleLang}
          aria-label={isEs ? 'Cambiar idioma a Inglés' : 'Switch language to Spanish'}
          className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer"
        >
          {isEs ? 'EN' : 'ES'}
        </button>
      </div>
    </header>
  );
};
