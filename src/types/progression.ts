import { LensType } from './geography';

export type PedagogicalLevel = 1 | 2 | 3 | 4;

export type BloomTaxonomyCategory =
  | 'remember'
  | 'understand'
  | 'apply'
  | 'analyze'
  | 'evaluate'
  | 'create';

export type VisualStimulusType =
  | 'political_extract'
  | 'physical_hypsometric'
  | 'satellite_composite'
  | 'comparison_trio'
  | 'bathymetric_profile'
  | 'elevation_scale'
  | 'deforestation_satellite'
  | 'mountain_relief';

export interface CartographicVisualStimulus {
  type: VisualStimulusType;
  title_en: string;
  title_es: string;
  caption_en: string;
  caption_es: string;
  legend_items?: { color: string; label_en: string; label_es: string }[];
  tags?: string[];
  region_key?: 'egypt_nile' | 'iberia_europe' | 'andes_amazon' | 'florida_shelf' | 'alps_relief' | 'himalayas';
}

export interface BloomEvaluationQuestion {
  id: string;
  level: PedagogicalLevel;
  continent_id?: string;
  bloom_category: BloomTaxonomyCategory;
  bloom_title_en: string;
  bloom_title_es: string;
  question_en: string;
  question_es: string;
  scenario_en?: string;
  scenario_es?: string;
  map_lens?: LensType | 'comparison';
  options_en: string[];
  options_es: string[];
  correct_index: number;
  explanation_en: string;
  explanation_es: string;
  teks_code: string;
  nwea_strand: string;
  visual_stimulus?: CartographicVisualStimulus;
}

export type ContinentId =
  | 'North America'
  | 'South America'
  | 'Europe'
  | 'Africa'
  | 'Asia'
  | 'Oceania';

export interface ContinentInfo {
  id: ContinentId;
  name_en: string;
  name_es: string;
  center_coords: [number, number];
  zoom_level: number;
  icon: string;
  description_en: string;
  description_es: string;
}

export interface OceanSeaFeature {
  id: string;
  type: 'ocean' | 'sea';
  name_en: string;
  name_es: string;
  coords: [number, number];
  zoom_level: number;
  depth_m: number;
  area_sqkm: string;
  political_lens_fact_en: string;
  political_lens_fact_es: string;
  physical_lens_fact_en: string;
  physical_lens_fact_es: string;
  satellite_lens_fact_en: string;
  satellite_lens_fact_es: string;
  bloom_insight_en: string;
  bloom_insight_es: string;
}

export interface PedagogicalProgressState {
  activeLevel: PedagogicalLevel;
  activeLevelMode: 'learn' | 'eval';
  unlockedLevels: {
    1: boolean;
    2: boolean;
    3: boolean;
    4: boolean;
  };
  levelScores: {
    1: number | null; // score percentage (0-100)
    2: number | null;
    3: number | null;
    4: Record<string, number>; // ContinentId -> score percentage
  };
  levelAttempts: {
    1: number;
    2: number;
    3: number;
    4: Record<string, number>;
  };
  visitedCountriesByContinent: Record<string, string[]>; // ContinentId -> ISO2 or ID array
  selectedContinentForL4: ContinentId;
}
