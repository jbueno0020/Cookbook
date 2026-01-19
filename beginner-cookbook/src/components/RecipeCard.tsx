import type { Recipe } from '../types';

interface RecipeCardProps {
  recipe: Recipe;
  onClick: () => void;
  ingredientMatch?: {
    matches: number;
    total: number;
    percentage: number;
  };
}

const difficultyColors = {
  'super-easy': 'difficulty-super-easy',
  'easy': 'difficulty-easy',
  'intermediate': 'difficulty-intermediate',
};

const difficultyLabels = {
  'super-easy': 'Super Easy',
  'easy': 'Easy',
  'intermediate': 'Intermediate',
};

export function RecipeCard({ recipe, onClick, ingredientMatch }: RecipeCardProps) {
  const totalTime = recipe.prepTime + recipe.cookTime;

  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer overflow-hidden"
    >
      <div className="h-48 bg-gradient-to-br from-orange-200 to-orange-300 flex items-center justify-center">
        <span className="text-6xl">🍳</span>
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl font-bold text-gray-900 flex-1">
            {recipe.title}
          </h3>
          <span className={`difficulty-badge ${difficultyColors[recipe.difficulty]} ml-2`}>
            {difficultyLabels[recipe.difficulty]}
          </span>
        </div>

        {ingredientMatch && ingredientMatch.percentage > 0 && (
          <div className="mb-3 p-2 bg-purple-50 border border-purple-200 rounded-lg">
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-semibold text-purple-900">
                Ingredient Match: {ingredientMatch.percentage}%
              </span>
              <span className="text-xs text-purple-700">
                {ingredientMatch.matches}/{ingredientMatch.total}
              </span>
            </div>
            <div className="w-full bg-purple-200 rounded-full h-2">
              <div
                className="bg-purple-600 h-2 rounded-full transition-all"
                style={{ width: `${ingredientMatch.percentage}%` }}
              />
            </div>
          </div>
        )}

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {recipe.description}
        </p>

        <div className="flex items-center gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <span>⏱️</span>
            <span>{totalTime} min</span>
          </div>
          <div className="flex items-center gap-1">
            <span>🍽️</span>
            <span>{recipe.servings} servings</span>
          </div>
          <div className="flex items-center gap-1">
            <span>📝</span>
            <span>{recipe.steps.length} steps</span>
          </div>
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          {recipe.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
