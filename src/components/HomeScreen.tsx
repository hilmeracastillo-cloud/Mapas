import React, { useState } from 'react';
import { Language } from '../types/geography';
import { ExplorePlayTopic } from '../data/polesData';
import { SimpleTopBar, TopSection } from './SimpleTopBar';
import { ArrowRight, Compass, Gamepad2, BookOpen, Globe2 } from 'lucide-react';
import HERO_IMG from '../assets/images/hero_world_atlas_1795285562739.jpg';
import EXPLORE_IMG from '../assets/images/card_explorar_map_1795285561803.jpg';
import PLAY_IMG from '../assets/images/card_jugar_quest_1795285562264.jpg';
import LEARN_IMG from '../assets/images/card_aprender_guide_1795285562739.jpg';

interface HomeScreenProps {
  currentLang: Language;
  onToggleLang: () => void;
  onNavigateSection: (section: TopSection) => void;
  onQuickLaunchExplore: (topic: ExplorePlayTopic) => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  currentLang,
  onToggleLang,
  onNavigateSection,
  onQuickLaunchExplore,
}) => {
  const isEs = currentLang === 'es';
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const markFailed = (key: string) => {
    setFailedImages((prev) => ({ ...prev, [key]: true }));
  };

  const mainCards: {
    id: Exclude<TopSection, 'home'>;
    title: string;
    description: string;
    subtopics: string;
    cta: string;
    image: string;
    imageKey: string;
    imageClass: string;
    accentText: string;
    accentButton: string;
    fallbackBg: string;
    icon: React.ReactNode;
  }[] = [
    {
      id: 'explore',
      title: isEs ? 'Explorar' : 'Explore',
      description: isEs
        ? 'Recorre el mapa mundial a tu ritmo, haz zoom y descubre datos fascinantes en cada lugar.'
        : 'Roam the world map at your own pace, zoom in, and uncover amazing facts everywhere.',
      subtopics: isEs
        ? 'Continentes · Países · Océanos · Mares · Polos'
        : 'Continents · Countries · Oceans · Seas · Poles',
      cta: isEs ? 'Ir a Explorar' : 'Start Exploring',
      image: EXPLORE_IMG,
      imageKey: 'explore',
      imageClass: 'w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-300',
      accentText: 'text-sky-700',
      accentButton: 'bg-sky-600 hover:bg-sky-700 text-white',
      fallbackBg: 'from-sky-100 to-cyan-50 text-sky-700',
      icon: <Compass className="w-5 h-5" />,
    },
    {
      id: 'play',
      title: isEs ? 'Jugar' : 'Play',
      description: isEs
        ? 'Encuentra lugares en el mapa, usa pistas si las necesitas y mejora tu puntuación.'
        : 'Spot places on the map, use helpful hints when needed, and beat your high score.',
      subtopics: isEs
        ? 'Continentes · Países · Océanos · Mares · Polos'
        : 'Continents · Countries · Oceans · Seas · Poles',
      cta: isEs ? 'Ir a Jugar' : 'Start Playing',
      image: PLAY_IMG,
      imageKey: 'play',
      imageClass: 'w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-300',
      accentText: 'text-amber-700',
      accentButton: 'bg-amber-500 hover:bg-amber-600 text-slate-950',
      fallbackBg: 'from-amber-100 to-yellow-50 text-amber-700',
      icon: <Gamepad2 className="w-5 h-5" />,
    },
    {
      id: 'learn',
      title: isEs ? 'Aprender' : 'Learn',
      description: isEs
        ? 'Comprende cómo funcionan los mapas, el relieve y los países con guías visuales claras.'
        : 'Understand how maps, landforms, and countries work through clear visual guides.',
      subtopics: isEs ? 'Fundamentos · Países' : 'Fundamentals · Countries',
      cta: isEs ? 'Ir a Aprender' : 'Start Learning',
      image: LEARN_IMG,
      imageKey: 'learn',
      imageClass: 'w-full h-full object-cover object-center scale-115 group-hover:scale-120 transition-transform duration-300',
      accentText: 'text-emerald-700',
      accentButton: 'bg-emerald-600 hover:bg-emerald-700 text-white',
      fallbackBg: 'from-emerald-100 to-teal-50 text-emerald-700',
      icon: <BookOpen className="w-5 h-5" />,
    },
  ];

  return (
    <div className="min-h-screen w-full bg-[#F7F9FC] text-slate-900 flex flex-col">
      <SimpleTopBar
        currentLang={currentLang}
        activeSection="home"
        onNavigate={onNavigateSection}
        onToggleLang={onToggleLang}
      />

      <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12 sm:space-y-16">
        {/* Hero Cover Section — 2-Column Balanced Split */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          <div className="lg:col-span-6 flex flex-col justify-center space-y-5">
            <p className="text-sm font-semibold text-sky-700">
              {isEs ? 'Geografía interactiva para jóvenes exploradores' : 'Interactive geography for young explorers'}
            </p>

            <h1
              className="font-display font-extrabold text-slate-950 tracking-tight leading-[1.08]"
              style={{ fontSize: 'clamp(2.25rem, 4.4vw, 3.6rem)', textWrap: 'balance' }}
            >
              {isEs ? 'Aprendiendo el Mundo' : 'Learning the World'}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
              {isEs
                ? 'Viaja por los cinco océanos, descubre continentes y países, y desafía tu memoria en un mapa vivo diseñado para aprender jugando.'
                : 'Sail across five oceans, discover continents and countries, and challenge your memory on a living map built to make geography fun.'}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                type="button"
                onClick={() => onQuickLaunchExplore('countries')}
                className="px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-sm sm:text-base inline-flex items-center gap-2 shadow-sm transition-all active:scale-[0.98] whitespace-nowrap cursor-pointer"
              >
                <span>{isEs ? 'Abrir el mapa mundial' : 'Open the World Map'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => onNavigateSection('play')}
                className="px-5 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 font-semibold text-sm sm:text-base inline-flex items-center gap-2 transition-colors whitespace-nowrap cursor-pointer"
              >
                <span>{isEs ? 'Probar un juego' : 'Try a Game'}</span>
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 pt-2 text-xs sm:text-sm text-slate-500 font-medium tabular-nums">
              <span>{isEs ? '7 continentes' : '7 continents'}</span>
              <span aria-hidden="true">·</span>
              <span>{isEs ? '5 océanos' : '5 oceans'}</span>
              <span aria-hidden="true">·</span>
              <span>{isEs ? '9 mares' : '9 seas'}</span>
              <span aria-hidden="true">·</span>
              <span>{isEs ? '2 polos' : '2 poles'}</span>
            </div>
          </div>

          <div className="lg:col-span-6 flex">
            <div className="w-full min-h-[240px] sm:min-h-[320px] lg:h-full rounded-3xl overflow-hidden border border-slate-200/80 bg-sky-100 shadow-sm relative">
              {!failedImages['hero'] ? (
                <img
                  src={HERO_IMG}
                  alt={isEs ? 'Ilustración de un globo terráqueo con continentes, océanos, montañas, polos y brújula' : 'Illustrated Earth globe with continents, oceans, mountains, poles, and compass'}
                  referrerPolicy="no-referrer"
                  onError={() => markFailed('hero')}
                  className="w-full h-full object-cover object-center"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-sky-100 via-cyan-50 to-emerald-50 flex flex-col items-center justify-center p-8 text-sky-800 gap-3">
                  <Globe2 className="w-16 h-16 stroke-[1.5]" />
                  <span className="font-display font-bold text-xl">
                    {isEs ? 'Aprendiendo el Mundo' : 'Learning the World'}
                  </span>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Main Menu: 3 Core Options (Explorar, Jugar, Aprender) */}
        <section aria-labelledby="main-menu-heading" className="space-y-6">
          <div className="space-y-1.5">
            <h2
              id="main-menu-heading"
              className="font-display font-bold text-2xl sm:text-3xl text-slate-950 tracking-tight"
            >
              {isEs ? '¿Qué quieres hacer hoy?' : 'What would you like to do today?'}
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              {isEs
                ? 'Elige una de las tres aventuras para empezar.'
                : 'Choose one of the three paths to begin.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mainCards.map((card) => (
              <div
                key={card.id}
                onClick={() => onNavigateSection(card.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onNavigateSection(card.id);
                  }
                }}
                className="group bg-white rounded-3xl border border-slate-200/90 hover:border-slate-300 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col overflow-hidden cursor-pointer focus-visible:outline-2 focus-visible:outline-sky-600"
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  {!failedImages[card.imageKey] ? (
                    <img
                      src={card.image}
                      alt={card.title}
                      referrerPolicy="no-referrer"
                      onError={() => markFailed(card.imageKey)}
                      className={card.imageClass}
                    />
                  ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${card.fallbackBg} flex flex-col items-center justify-center gap-2 p-6`}>
                      {card.icon}
                      <span className="font-display font-bold text-lg">{card.title}</span>
                    </div>
                  )}
                </div>

                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-950">
                        {card.title}
                      </h3>
                      <span className={card.accentText}>{card.icon}</span>
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {card.description}
                    </p>

                    <p className="text-xs font-medium text-slate-500 pt-1">
                      {card.subtopics}
                    </p>
                  </div>

                  <div className="pt-1">
                    <span
                      className={`w-full py-2.5 px-4 rounded-xl font-bold text-sm inline-flex items-center justify-center gap-2 transition-colors ${card.accentButton}`}
                    >
                      <span>{card.cta}</span>
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="w-full border-t border-slate-200/80 py-5 px-4 sm:px-6 lg:px-8 mt-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
          <span>{isEs ? 'Aprendiendo el Mundo · Atlas interactivo de geografía' : 'Learning the World · Interactive Geography Atlas'}</span>
          <span>{isEs ? 'Diseñado para explorar, jugar y aprender' : 'Built to explore, play, and learn'}</span>
        </div>
      </footer>
    </div>
  );
};
