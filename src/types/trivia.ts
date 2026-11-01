import { ContinentId } from './progression';
import { CountryDossierData, Language } from './geography';

export type PlaySubMode = 'explore' | 'trivia';

export type TriviaFlavor = 'continents' | 'countries' | 'capitals' | 'flags';

export interface TriviaQuestion {
  id: string;
  flavor: TriviaFlavor;
  question_es: string;
  question_en: string;
  targetId: string; // Country ID (e.g. 'BRA') or ContinentId (e.g. 'South America')
  targetIso2?: string;
  targetName_es: string;
  targetName_en: string;
  targetContinentId?: ContinentId;
  targetContinent_es?: string;
  targetContinent_en?: string;
  targetCoords: [number, number];
  targetZoom: number;
  capital_es?: string;
  capital_en?: string;
  flagUrl?: string;
  hint1_es: string;
  hint1_en: string;
  hint2_es: string;
  hint2_en: string;
  hint3_es: string;
  hint3_en: string;
  explanation_es: string;
  explanation_en: string;
}

export interface TriviaStats {
  totalScore: number;
  totalAnswered: number;
  perfectFirstAttempts: number;
  currentStreak: number;
  bestStreak: number;
  byFlavor: Record<TriviaFlavor, { answered: number; score: number; perfectCount: number }>;
}
