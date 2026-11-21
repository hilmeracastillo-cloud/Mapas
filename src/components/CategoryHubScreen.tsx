import React, { useState } from 'react';
import { Language, CountryDossierData } from '../types/geography';
import { PedagogicalLevel, ContinentId } from '../types/progression';
import { ExplorePlayTopic } from '../data/polesData';
import { SimpleTopBar, TopSection } from './SimpleTopBar';
import {
  ArrowLeft,
  ArrowRight,
  Globe2,
  Flag,
  Waves,
  Anchor,
  Snowflake,
  BookOpen,
  Map,
  Mountain,
  Compass,
  Play,
  GraduationCap,
} from 'lucide-react';

interface CategoryHubScreenProps {
  section: 'explore' | 'play' | 'learn';
  currentLang: Language;
  countries: CountryDossierData[];
  onToggleLang: () => void;
  onNavigateSection: (section: TopSection) => void;
  onSelectExploreTopic: (topic: ExplorePlayTopic) => void;
  onSelectPlayTopic: (topic: ExplorePlayTopic) => void;
  onOpenLearnModal: (level: PedagogicalLevel) => void;
  onStartLearnEvaluation: (level: PedagogicalLevel, continent?: ContinentId) => void;
  onOpenCountryOnMap: (country: CountryDossierData) => void;
  onStartCountryReview: (continentId: string) => void;
}

const CONTINENT_TABS: { id: ContinentId; label_es: string; label_en: string }[] = [
  { id: 'South America', label_es: 'América del Sur', label_en: 'South America' },
  { id: 'North America', label_es: 'América del Norte', label_en: 'North America' },
  { id: 'Europe', label_es: 'Europa', label_en: 'Europe' },
  { id: 'Africa', label_es: 'África', label_en: 'Africa' },
  { id: 'Asia', label_es: 'Asia', label_en: 'Asia' },
  { id: 'Oceania', label_es: 'Oceanía', label_en: 'Oceania' },
];

export const CategoryHubScreen: React.FC<CategoryHubScreenProps> = ({
  section,
  currentLang,
  countries,
  onToggleLang,
  onNavigateSection,
  onSelectExploreTopic,
  onSelectPlayTopic,
  onOpenLearnModal,
  onStartLearnEvaluation,
  onOpenCountryOnMap,
  onStartCountryReview,
}) => {
  const isEs = currentLang === 'es';
  const [learnArea, setLearnArea] = useState<'overview' | 'fundamentals' | 'countries'>('overview');
  const [activeContinent, setActiveContinent] = useState<ContinentId>('South America');

  const explorePlayOptions: {
    id: ExplorePlayTopic;
    title: string;
    subtitleExplore: string;
    subtitlePlay: string;
    countLabel: string;
    icon: React.ReactNode;
    iconBg: string;
  }[] = [
    {
      id: 'continents',
      title: isEs ? 'Continentes' : 'Continents',
      subtitleExplore: isEs
        ? 'Recorre los 7 continentes del planeta y descubre sus paisajes y curiosidades.'
        : 'Visit all 7 continents and explore their landscapes and cool facts.',
      subtitlePlay: isEs
        ? 'Ubica cada continente en el mapa mudo y acumula puntos.'
        : 'Find each continent on the blank map and earn points.',
      countLabel: isEs ? '7 continentes' : '7 continents',
      icon: <Globe2 className="w-6 h-6" />,
      iconBg: 'bg-emerald-50 text-emerald-700',
    },
    {
      id: 'countries',
      title: isEs ? 'Países' : 'Countries',
      subtitleExplore: isEs
        ? 'Haz clic en cualquier país para ver su bandera, capital, montañas y ríos.'
        : 'Click any country to see its flag, capital, mountains, and rivers.',
      subtitlePlay: isEs
        ? 'Juega Trivia o Repaso por continente con países, capitales y banderas.'
        : 'Play Trivia or Review by continent with countries, capitals, and flags.',
      countLabel: isEs ? `${countries.length} países` : `${countries.length} countries`,
      icon: <Flag className="w-6 h-6" />,
      iconBg: 'bg-amber-50 text-amber-700',
    },
    {
      id: 'oceans',
      title: isEs ? 'Océanos' : 'Oceans',
      subtitleExplore: isEs
        ? 'Navega los 5 grandes océanos, sus profundidades récord y corrientes marinas.'
        : 'Sail the 5 great oceans, their record depths, and ocean currents.',
      subtitlePlay: isEs
        ? '¿Sabes dónde queda cada océano? Encuéntralos todos en el mapa.'
        : 'Can you spot every ocean on Earth? Find them all on the map.',
      countLabel: isEs ? '5 océanos' : '5 oceans',
      icon: <Waves className="w-6 h-6" />,
      iconBg: 'bg-sky-50 text-sky-700',
    },
    {
      id: 'seas',
      title: isEs ? 'Mares' : 'Seas',
      subtitleExplore: isEs
        ? 'Descubre el Mar Caribe, el Mediterráneo, el Mar Rojo y otros 6 mares famosos.'
        : 'Explore the Caribbean, Mediterranean, Red Sea, and 6 more famous seas.',
      subtitlePlay: isEs
        ? 'Pon a prueba tu brújula localizando los 9 mares más conocidos del mundo.'
        : 'Test your compass by locating 9 famous seas around the globe.',
      countLabel: isEs ? '9 mares' : '9 seas',
      icon: <Anchor className="w-6 h-6" />,
      iconBg: 'bg-teal-50 text-teal-700',
    },
    {
      id: 'poles',
      title: isEs ? 'Polos' : 'Poles',
      subtitleExplore: isEs
        ? 'Explora el Polo Norte, el Polo Sur, la Antártida, Groenlandia y los círculos polares.'
        : 'Explore the North Pole, South Pole, Antarctica, Greenland, and polar circles.',
      subtitlePlay: isEs
        ? 'Desafío polar: ubica las regiones heladas en los extremos del planeta.'
        : 'Polar challenge: locate icy regions at the top and bottom of Earth.',
      countLabel: isEs ? '8 lugares polares' : '8 polar places',
      icon: <Snowflake className="w-6 h-6" />,
      iconBg: 'bg-indigo-50 text-indigo-700',
    },
  ];

  const continentCountries = countries.filter((c) => c.continent === activeContinent);

  const handleTopNav = (target: TopSection) => {
    setLearnArea('overview');
    onNavigateSection(target);
  };

  return (
    <div className="min-h-screen w-full bg-[#F7F9FC] text-slate-900 flex flex-col">
      <SimpleTopBar
        currentLang={currentLang}
        activeSection={section}
        onNavigate={handleTopNav}
        onToggleLang={onToggleLang}
      />

      <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 space-y-8">
        {/* Back Breadcrumb */}
        <div>
          <button
            type="button"
            onClick={() => {
              if (section === 'learn' && learnArea !== 'overview') {
                setLearnArea('overview');
              } else {
                onNavigateSection('home');
              }
            }}
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-950 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>
              {section === 'learn' && learnArea !== 'overview'
                ? isEs
                  ? 'Volver a Aprender'
                  : 'Back to Learn'
                : isEs
                ? 'Volver al inicio'
                : 'Back to Home'}
            </span>
          </button>
        </div>

        {/* =================================================================
            EXPLORAR OR JUGAR HUB (5 EXACT OPTIONS)
            ================================================================= */}
        {(section === 'explore' || section === 'play') && (
          <div className="space-y-8">
            <div className="space-y-2 max-w-2xl">
              <p className={`text-sm font-semibold ${section === 'explore' ? 'text-sky-700' : 'text-amber-700'}`}>
                {section === 'explore'
                  ? isEs
                    ? 'Explorar el mapa'
                    : 'Explore the Map'
                  : isEs
                  ? 'Retos interactivos'
                  : 'Interactive Challenges'}
              </p>
              <h1
                className="font-display font-extrabold text-3xl sm:text-4xl text-slate-950 tracking-tight"
                style={{ textWrap: 'balance' }}
              >
                {section === 'explore'
                  ? isEs
                    ? '¿Qué parte del mundo quieres explorar?'
                    : 'Which part of the world do you want to explore?'
                  : isEs
                  ? '¿Con qué reto quieres jugar hoy?'
                  : 'Which challenge do you want to play today?'}
              </h1>
              <p className="text-sm sm:text-base text-slate-600">
                {section === 'explore'
                  ? isEs
                    ? 'Elige una categoría para abrir el mapa interactivo y descubrir sus secretos.'
                    : 'Pick a category to open the interactive map and discover its secrets.'
                  : isEs
                  ? 'Elige una categoría y encuentra cada lugar directamente sobre el mapa.'
                  : 'Pick a category and locate each place directly on the map.'}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {explorePlayOptions.map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() =>
                    section === 'explore'
                      ? onSelectExploreTopic(opt.id)
                      : onSelectPlayTopic(opt.id)
                  }
                  className="group text-left bg-white rounded-2xl border border-slate-200/90 hover:border-sky-300 p-6 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between gap-5 cursor-pointer active:scale-[0.99]"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-3">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${opt.iconBg}`}>
                        {opt.icon}
                      </div>
                      <span className="text-xs font-medium text-slate-500 tabular-nums">
                        {opt.countLabel}
                      </span>
                    </div>

                    <div className="space-y-1.5">
                      <h2 className="font-display font-bold text-xl text-slate-950 group-hover:text-sky-700 transition-colors">
                        {opt.title}
                      </h2>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {section === 'explore' ? opt.subtitleExplore : opt.subtitlePlay}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`inline-flex items-center gap-1.5 text-sm font-bold ${
                      section === 'explore' ? 'text-sky-700' : 'text-amber-700'
                    }`}
                  >
                    <span>
                      {section === 'explore'
                        ? isEs
                          ? 'Explorar ahora'
                          : 'Explore now'
                        : isEs
                        ? 'Jugar ahora'
                        : 'Play now'}
                    </span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* =================================================================
            APRENDER HUB: 2 EXACT AREAS (FUNDAMENTOS & PAÍSES)
            ================================================================= */}
        {section === 'learn' && learnArea === 'overview' && (
          <div className="space-y-8">
            <div className="space-y-2 max-w-2xl">
              <p className="text-sm font-semibold text-emerald-700">
                {isEs ? 'Guía paso a paso' : 'Step-by-step Guide'}
              </p>
              <h1
                className="font-display font-extrabold text-3xl sm:text-4xl text-slate-950 tracking-tight"
                style={{ textWrap: 'balance' }}
              >
                {isEs ? 'Aprender Geografía' : 'Learn Geography'}
              </h1>
              <p className="text-sm sm:text-base text-slate-600">
                {isEs
                  ? 'Elige si prefieres empezar por los fundamentos de los mapas o estudiar los países del mundo.'
                  : 'Choose whether to start with map fundamentals or study the countries of the world.'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Area 1: Fundamentos */}
              <button
                type="button"
                onClick={() => setLearnArea('fundamentals')}
                className="group text-left bg-white rounded-3xl border border-slate-200/90 hover:border-emerald-300 p-7 sm:p-8 shadow-xs hover:shadow-md transition-all flex flex-col justify-between gap-6 cursor-pointer"
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                    <BookOpen className="w-7 h-7" />
                  </div>

                  <div className="space-y-2">
                    <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-950 group-hover:text-emerald-700 transition-colors">
                      {isEs ? 'Fundamentos' : 'Fundamentals'}
                    </h2>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      {isEs
                        ? 'Aprende a leer mapas políticos, físicos y satelitales, conoce montañas, ríos e islas, y entiende cómo se dividen los continentes y océanos.'
                        : 'Learn to read political, physical, and satellite maps, recognize mountains, rivers, and islands, and understand continents and oceans.'}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm font-medium text-slate-500">
                    {isEs
                      ? 'Tipos de mapas · Accidentes geográficos · Continentes y océanos'
                      : 'Map types · Landforms · Continents & oceans'}
                  </p>
                </div>

                <span className="inline-flex items-center gap-2 text-sm font-bold text-emerald-700">
                  <span>{isEs ? 'Entrar a Fundamentos' : 'Open Fundamentals'}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              {/* Area 2: Países */}
              <button
                type="button"
                onClick={() => setLearnArea('countries')}
                className="group text-left bg-white rounded-3xl border border-slate-200/90 hover:border-sky-300 p-7 sm:p-8 shadow-xs hover:shadow-md transition-all flex flex-col justify-between gap-6 cursor-pointer"
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-sky-50 text-sky-700 flex items-center justify-center">
                    <Flag className="w-7 h-7" />
                  </div>

                  <div className="space-y-2">
                    <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-950 group-hover:text-sky-700 transition-colors">
                      {isEs ? 'Países' : 'Countries'}
                    </h2>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      {isEs
                        ? 'Estudia los países continente por continente: aprende sus capitales, banderas, ubicación exacta y realiza repasos interactivos.'
                        : 'Study countries continent by continent: learn their capitals, flags, exact location, and practice with guided reviews.'}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm font-medium text-slate-500">
                    {isEs
                      ? 'Fichas por continente · Banderas y capitales · Repaso guiado'
                      : 'Continent sheets · Flags & capitals · Guided review'}
                  </p>
                </div>

                <span className="inline-flex items-center gap-2 text-sm font-bold text-sky-700">
                  <span>{isEs ? 'Entrar a Países' : 'Open Countries'}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>
          </div>
        )}

        {/* =================================================================
            APRENDER -> AREA 1: FUNDAMENTOS
            ================================================================= */}
        {section === 'learn' && learnArea === 'fundamentals' && (
          <div className="space-y-8">
            <div className="space-y-2 max-w-2xl">
              <p className="text-sm font-semibold text-emerald-700">
                {isEs ? 'Aprender · Fundamentos' : 'Learn · Fundamentals'}
              </p>
              <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-950 tracking-tight">
                {isEs ? 'Fundamentos de la Geografía' : 'Geography Fundamentals'}
              </h1>
              <p className="text-sm sm:text-base text-slate-600">
                {isEs
                  ? 'Tres lecciones visuales claras para entender cómo leemos nuestro planeta.'
                  : 'Three clear visual lessons to understand how we read our planet.'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Lesson 1 */}
              <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-xs flex flex-col justify-between gap-6">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-700 flex items-center justify-center">
                    <Map className="w-6 h-6" />
                  </div>
                  <p className="text-xs font-semibold text-slate-500">
                    {isEs ? '01. Lectura de mapas' : '01. Map Reading'}
                  </p>
                  <h2 className="font-display font-bold text-xl text-slate-950">
                    {isEs ? 'Tipos de mapas y colores del relieve' : 'Map Types & Elevation Colors'}
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {isEs
                      ? 'Descubre la diferencia entre mapas políticos, físicos y de satélite, y qué significan el verde, el marrón y el blanco en las montañas.'
                      : 'Learn the difference between political, physical, and satellite maps, and what elevation colors represent.'}
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <button
                    type="button"
                    onClick={() => onOpenLearnModal(1)}
                    className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm inline-flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>{isEs ? 'Ver lección' : 'Open Lesson'}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => onStartLearnEvaluation(1)}
                    className="w-full py-2 px-4 rounded-xl bg-slate-100 hover:bg-slate-200/80 text-slate-800 font-semibold text-xs inline-flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <GraduationCap className="w-4 h-4" />
                    <span>{isEs ? 'Practicar con preguntas' : 'Practice Quiz'}</span>
                  </button>
                </div>
              </div>

              {/* Lesson 2 */}
              <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-xs flex flex-col justify-between gap-6">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center">
                    <Mountain className="w-6 h-6" />
                  </div>
                  <p className="text-xs font-semibold text-slate-500">
                    {isEs ? '02. Formas de la Tierra' : '02. Earth Shapes'}
                  </p>
                  <h2 className="font-display font-bold text-xl text-slate-950">
                    {isEs ? 'Accidentes geográficos' : 'Landforms & Relief'}
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {isEs
                      ? 'Conoce 19 formas de la naturaleza —cordilleras, volcanes, ríos, islas, penínsulas y estrechos— con dibujos y ejemplos reales.'
                      : 'Learn 19 natural landforms—mountain ranges, volcanoes, rivers, islands, peninsulas, and straits—with diagrams and real examples.'}
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <button
                    type="button"
                    onClick={() => onOpenLearnModal(2)}
                    className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm inline-flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>{isEs ? 'Ver lección' : 'Open Lesson'}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => onStartLearnEvaluation(2)}
                    className="w-full py-2 px-4 rounded-xl bg-slate-100 hover:bg-slate-200/80 text-slate-800 font-semibold text-xs inline-flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <GraduationCap className="w-4 h-4" />
                    <span>{isEs ? 'Practicar con preguntas' : 'Practice Quiz'}</span>
                  </button>
                </div>
              </div>

              {/* Lesson 3 */}
              <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-xs flex flex-col justify-between gap-6">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center">
                    <Compass className="w-6 h-6" />
                  </div>
                  <p className="text-xs font-semibold text-slate-500">
                    {isEs ? '03. Grandes regiones' : '03. Great Regions'}
                  </p>
                  <h2 className="font-display font-bold text-xl text-slate-950">
                    {isEs ? 'Continentes, océanos y mares' : 'Continents, Oceans & Seas'}
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {isEs
                      ? 'Comprende cómo se reparten las tierras y las grandes masas de agua del planeta antes de pasar a estudiar cada país.'
                      : 'Understand how Earth’s landmasses and great bodies of water fit together before diving into individual countries.'}
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <button
                    type="button"
                    onClick={() => onOpenLearnModal(3)}
                    className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm inline-flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>{isEs ? 'Ver lección' : 'Open Lesson'}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => onStartLearnEvaluation(3)}
                    className="w-full py-2 px-4 rounded-xl bg-slate-100 hover:bg-slate-200/80 text-slate-800 font-semibold text-xs inline-flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <GraduationCap className="w-4 h-4" />
                    <span>{isEs ? 'Practicar con preguntas' : 'Practice Quiz'}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =================================================================
            APRENDER -> AREA 2: PAÍSES
            ================================================================= */}
        {section === 'learn' && learnArea === 'countries' && (
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="space-y-1.5 max-w-2xl">
                <p className="text-sm font-semibold text-sky-700">
                  {isEs ? 'Aprender · Países' : 'Learn · Countries'}
                </p>
                <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-950 tracking-tight">
                  {isEs ? 'Países por Continente' : 'Countries by Continent'}
                </h1>
                <p className="text-sm sm:text-base text-slate-600">
                  {isEs
                    ? 'Selecciona un continente para estudiar sus países, banderas y capitales, o inicia un repaso interactivo en el mapa.'
                    : 'Choose a continent to study its countries, flags, and capitals, or launch a guided map review.'}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2.5 shrink-0">
                <button
                  type="button"
                  onClick={() => onStartCountryReview(activeContinent)}
                  className="px-4 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-sm inline-flex items-center gap-2 transition-colors whitespace-nowrap cursor-pointer"
                >
                  <Play className="w-4 h-4" />
                  <span>{isEs ? 'Repasar este continente' : 'Review This Continent'}</span>
                </button>
                <button
                  type="button"
                  onClick={() => onStartLearnEvaluation(4, activeContinent)}
                  className="px-4 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 font-semibold text-sm inline-flex items-center gap-2 transition-colors whitespace-nowrap cursor-pointer"
                >
                  <GraduationCap className="w-4 h-4" />
                  <span>{isEs ? 'Autoevaluación' : 'Quick Quiz'}</span>
                </button>
              </div>
            </div>

            {/* Clean Segmented Continent Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
              {CONTINENT_TABS.map((tab) => {
                const isSelected = activeContinent === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveContinent(tab.id)}
                    className={`px-4 py-2 rounded-xl text-sm font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      isSelected
                        ? 'bg-slate-900 text-white shadow-xs'
                        : 'bg-white text-slate-600 border border-slate-200 hover:text-slate-950 hover:border-slate-300'
                    }`}
                  >
                    {isEs ? tab.label_es : tab.label_en}
                  </button>
                );
              })}
            </div>

            {/* Country Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {continentCountries.map((country) => (
                <button
                  key={country.id}
                  type="button"
                  onClick={() => onOpenCountryOnMap(country)}
                  className="group text-left bg-white rounded-2xl border border-slate-200/90 hover:border-sky-300 p-4 shadow-xs hover:shadow-md transition-all flex items-center gap-4 cursor-pointer"
                >
                  <img
                    src={`https://flagcdn.com/w160/${country.iso2.toLowerCase()}.png`}
                    alt={isEs ? `Bandera de ${country.name_es}` : `Flag of ${country.name_en}`}
                    referrerPolicy="no-referrer"
                    className="w-16 h-11 object-cover rounded-lg border border-slate-200 shrink-0"
                    loading="lazy"
                  />
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display font-bold text-base text-slate-950 group-hover:text-sky-700 truncate transition-colors">
                      {isEs ? country.name_es : country.name_en}
                    </h3>
                    <p className="text-xs text-slate-600 truncate mt-0.5">
                      {isEs ? `Capital: ${country.capital_es}` : `Capital: ${country.capital_en}`}
                    </p>
                    <p className="text-[11px] font-medium text-sky-700 mt-1 inline-flex items-center gap-1">
                      <span>{isEs ? 'Ver en el mapa' : 'View on map'}</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};
