export type LensType = 'political' | 'physical' | 'satellite';
export type AppMode = 'learn' | 'explore' | 'quest';
export type Language = 'en' | 'es';

export type LandformCategory = 'water' | 'elevation' | 'coastal' | 'arid';

export type SemanticBadgeType =
  | 'river'
  | 'peak'
  | 'mountain'
  | 'lake'
  | 'volcano'
  | 'desert'
  | 'strait'
  | 'bay'
  | 'isthmus'
  | 'fjord'
  | 'island'
  | 'archipelago'
  | 'peninsula'
  | 'cape'
  | 'plateau'
  | 'plain'
  | 'valley'
  | 'ocean'
  | 'sea';

export interface LandformFeature {
  id: string;
  type: SemanticBadgeType;
  name_en: string;
  name_es: string;
  coords: [number, number]; // [lat, lng]
  elevation_m?: number;
  length_km?: number;
  description_en: string;
  description_es: string;
}

export interface SurroundingWater {
  id: string;
  type: 'ocean' | 'sea' | 'gulf' | 'bay' | 'strait' | 'channel';
  name_en: string;
  name_es: string;
  direction_en: string;
  direction_es: string;
  coords: [number, number]; // [lat, lng]
  zoom_level?: number;
  description_en: string;
  description_es: string;
}

export interface SurroundingWatersProfile {
  is_landlocked: boolean;
  landlocked_note_en?: string;
  landlocked_note_es?: string;
  waters: SurroundingWater[];
}

export interface CountryDossierData {
  id: string; // ISO-3 or ISO-2
  iso2: string; // For FlagCDN (e.g., 'us', 've', 'sa')
  iso3: string;
  name_en: string;
  name_es: string;
  continent: 'North America' | 'South America' | 'Europe' | 'Africa' | 'Asia' | 'Oceania' | 'Antarctica';
  continent_es: string;
  capital_en: string;
  capital_es: string;
  capital_coords: [number, number]; // [lat, lng]
  center_coords: [number, number];
  zoom_level: number;
  population: string;
  area_sqkm: string;
  gdp_billion: number;
  main_exports: {
    en: string[];
    es: string[];
    total_val_billion: number;
  };
  main_imports: {
    en: string[];
    es: string[];
    total_val_billion: number;
  };
  natural_wealth: {
    en: string[];
    es: string[];
  };
  physical_geography_summary: {
    en: string;
    es: string;
  };
  landforms: LandformFeature[];
  surrounding_waters?: SurroundingWatersProfile;
  interesting_fact: {
    en: string;
    es: string;
  };
  teks_alignment: string[];
}

export interface LandformGlossaryItem {
  id: string;
  type: SemanticBadgeType;
  category: LandformCategory;
  name_en: string;
  name_es: string;
  definition_en: string;
  definition_es: string;
  key_characteristics_en: string[];
  key_characteristics_es: string[];
  diagram_svg: string; // SVG path or markup
  example_name_en: string;
  example_name_es: string;
  example_country: string;
  example_coords: [number, number];
  example_zoom: number;
  fun_fact_en: string;
  fun_fact_es: string;
}

export interface BloomQuestQuestion {
  id: string;
  level: 1 | 2 | 3 | 4;
  bloom_title_en: string;
  bloom_title_es: string;
  target_iso2: string;
  target_name_en: string;
  target_name_es: string;
  question_en: string;
  question_es: string;
  context_clue_en: string;
  context_clue_es: string;
  hint1_spatial_en: string; // Tier 1: Spatial/directional guidance
  hint1_spatial_es: string;
  hint2_economic_en: string; // Tier 2: Economic/physical clue + regional bounds
  hint2_economic_es: string;
  regional_bounds?: [[number, number], [number, number]]; // [[south, west], [north, east]]
  solution_explanation_en: string; // Tier 3: Full pedagogical explanation
  solution_explanation_es: string;
  comparison_iso2?: string; // Optional for Level 4 comparison
  teks_code: string;
  nwea_strand: string;
}

export interface QuestionProgress {
  questionId: string;
  level: 1 | 2 | 3 | 4;
  attempts: number;
  passed: boolean;
  neededHelp: boolean; // 2+ hints or failed attempt 3
  solvedAt?: number;
}

export interface StudentMasteryState {
  progress: Record<string, QuestionProgress>;
  badges: string[]; // Badge IDs
  reviewList: string[]; // Question IDs that need reinforcement
  totalScore: number;
}

export interface ExplorerBadge {
  id: string;
  title_en: string;
  title_es: string;
  description_en: string;
  description_es: string;
  icon: string;
  unlocked: boolean;
  requirement: string;
}
