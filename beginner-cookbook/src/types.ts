export type DifficultyLevel = 'super-easy' | 'easy' | 'intermediate';

export interface Ingredient {
  name: string;
  amount: string;
  visual?: string; // Visual reference like "size of a golf ball"
  image?: string; // Optional ingredient image URL
}

export interface RecipeStep {
  id: number;
  instruction: string;
  plainLanguage: string; // Beginner-friendly explanation
  image?: string; // Step image URL
  timer?: number; // Timer in minutes if applicable
  tip?: string; // Optional helpful tip
}

export interface Recipe {
  id: string;
  title: string;
  description: string;
  difficulty: DifficultyLevel;
  prepTime: number; // in minutes
  cookTime: number; // in minutes
  servings: number;
  ingredients: Ingredient[];
  steps: RecipeStep[];
  image?: string;
  tags: string[];
}
