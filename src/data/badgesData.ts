import { ExplorerBadge } from '../types/geography';

export const INITIAL_BADGES: ExplorerBadge[] = [
  {
    id: 'cartographer-scout',
    title_en: 'Cartographer Scout',
    title_es: 'Explorador Cartógrafo',
    description_en: 'Demonstrated mastery in basic political map reading and national capital recall (Level 1).',
    description_es: 'Demostró dominio en la lectura básica de mapas políticos y memoria de capitales (Nivel 1).',
    icon: '🧭',
    unlocked: false,
    requirement: 'Solve 2+ Level 1 Knowledge challenges'
  },
  {
    id: 'relief-navigator',
    title_en: 'Relief Navigator',
    title_es: 'Navegante del Relieve',
    description_en: 'Understood physical processes, hypsometric elevation bands, and landform distributions (Level 2).',
    description_es: 'Comprendió procesos físicos, bandas hipsométricas de altitud y distribución de accidentes geográficos (Nivel 2).',
    icon: '🏔️',
    unlocked: false,
    requirement: 'Solve 2+ Level 2 Comprehension challenges'
  },
  {
    id: 'resource-economist',
    title_en: 'Resource Economist',
    title_es: 'Economista de Recursos',
    description_en: 'Applied understanding of mineral wealth, energy transitions, and agricultural exports (Level 3).',
    description_es: 'Aplicó conocimientos sobre riqueza mineral, matrices energéticas y exportaciones agrícolas (Nivel 3).',
    icon: '⚡',
    unlocked: false,
    requirement: 'Solve 2+ Level 3 Application challenges'
  },
  {
    id: 'geopolitical-strategist',
    title_en: 'Geopolitical Strategist',
    title_es: 'Estratega Geopolítico',
    description_en: 'Analyzed complex geopolitical trade interdependencies, nearshoring, and supply chain bottlenecks (Level 4).',
    description_es: 'Analizó interdependencias geopolíticas complejas, nearshoring y cuellos de botella comerciales (Nivel 4).',
    icon: '🌐',
    unlocked: false,
    requirement: 'Solve 2+ Level 4 Analysis challenges'
  },
  {
    id: 'nord-anglia-mastery',
    title_en: 'Global GeoMaster (90%+)',
    title_es: 'GeoMaster Global (90%+)',
    description_en: 'Achieved 90%+ total curriculum mastery across all global cartography standards!',
    description_es: '¡Alcanzó más del 90% de maestría curricular global en todos los estándares de cartografía!',
    icon: '🏆',
    unlocked: false,
    requirement: 'Reach 90% overall mastery threshold'
  }
];
