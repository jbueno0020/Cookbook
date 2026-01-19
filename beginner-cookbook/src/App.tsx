import { useState } from 'react';
import type { Recipe } from './types';
import { recipes } from './data/recipes';
import { RecipeCard } from './components/RecipeCard';
import { RecipeDetail } from './components/RecipeDetail';

type Difficulty = 'super-easy' | 'easy' | 'intermediate' | 'all';

function App() {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState<Difficulty>('all');
  const [availableIngredients, setAvailableIngredients] = useState('');
  const [showIngredientMatcher, setShowIngredientMatcher] = useState(false);

  // Calculate ingredient matches for each recipe
  const getIngredientMatches = (recipe: Recipe, userIngredients: string[]): { matches: number; total: number; percentage: number; missing: string[] } => {
    if (userIngredients.length === 0) {
      return { matches: 0, total: recipe.ingredients.length, percentage: 0, missing: recipe.ingredients.map(i => i.name) };
    }

    const recipeIngredients = recipe.ingredients.map(ing => ({
      name: ing.name,
      nameLower: ing.name.toLowerCase()
    }));

    let matches = 0;
    const matchedIndices = new Set<number>();

    userIngredients.forEach(userIng => {
      const userIngLower = userIng.toLowerCase().trim();
      recipeIngredients.forEach((recipeIng, idx) => {
        if (!matchedIndices.has(idx) && (
          recipeIng.nameLower.includes(userIngLower) || userIngLower.includes(recipeIng.nameLower)
        )) {
          matches++;
          matchedIndices.add(idx);
        }
      });
    });

    const missing = recipeIngredients
      .filter((_, idx) => !matchedIndices.has(idx))
      .map(ing => ing.name);

    const percentage = Math.round((matches / recipe.ingredients.length) * 100);
    return { matches, total: recipe.ingredients.length, percentage, missing };
  };

  // Parse user ingredients
  const userIngredientsList = availableIngredients
    .split(',')
    .map(ing => ing.trim())
    .filter(ing => ing.length > 0);

  // Filter recipes by search, difficulty, and ingredients
  let filteredRecipes = recipes.filter((recipe) => {
    const matchesSearch = recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesDifficulty = difficultyFilter === 'all' || recipe.difficulty === difficultyFilter;

    return matchesSearch && matchesDifficulty;
  });

  // If ingredient matching is active, sort by match percentage
  if (showIngredientMatcher && userIngredientsList.length > 0) {
    filteredRecipes = [...filteredRecipes].sort((a, b) => {
      const matchA = getIngredientMatches(a, userIngredientsList);
      const matchB = getIngredientMatches(b, userIngredientsList);
      return matchB.percentage - matchA.percentage;
    });
  }

  if (selectedRecipe) {
    return (
      <div className="min-h-screen bg-gray-50 py-8 px-4">
        <RecipeDetail
          recipe={selectedRecipe}
          onBack={() => setSelectedRecipe(null)}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="text-center mb-6">
            <h1 className="text-4xl font-bold text-gray-900 mb-2 flex items-center justify-center gap-3">
              Beginner's Cookbook
            </h1>
            <p className="text-gray-600 text-lg">
              Simple recipes with step-by-step instructions for learning cooks
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search recipes or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
              />
            </div>
          </div>

          {/* Difficulty Filter Buttons */}
          <div className="max-w-2xl mx-auto mb-4">
            <div className="flex gap-2 flex-wrap justify-center">
              <button
                onClick={() => setDifficultyFilter('all')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  difficultyFilter === 'all'
                    ? 'bg-gray-800 text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                All Recipes ({recipes.length})
              </button>
              <button
                onClick={() => setDifficultyFilter('super-easy')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  difficultyFilter === 'super-easy'
                    ? 'bg-green-600 text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                Super Easy ({recipes.filter(r => r.difficulty === 'super-easy').length})
              </button>
              <button
                onClick={() => setDifficultyFilter('easy')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  difficultyFilter === 'easy'
                    ? 'bg-yellow-500 text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                Easy ({recipes.filter(r => r.difficulty === 'easy').length})
              </button>
              <button
                onClick={() => setDifficultyFilter('intermediate')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  difficultyFilter === 'intermediate'
                    ? 'bg-orange-500 text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                Intermediate ({recipes.filter(r => r.difficulty === 'intermediate').length})
              </button>
            </div>
          </div>

          {/* Ingredient Matcher Toggle */}
          <div className="max-w-2xl mx-auto">
            <button
              onClick={() => setShowIngredientMatcher(!showIngredientMatcher)}
              className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-all shadow-md flex items-center justify-center gap-2"
            >
              {showIngredientMatcher ? 'Hide Ingredient Matcher' : 'Find Recipes by Ingredients'}
            </button>
          </div>
        </div>
      </header>

      {/* Ingredient Matcher Sticky Panel */}
      {showIngredientMatcher && (
        <div className="sticky top-[220px] z-20 mb-4">
          <div className="max-w-7xl mx-auto px-4">
            <div className="bg-purple-600 text-white p-4 rounded-t-lg shadow-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-lg">Ingredient Matcher</h3>
                </div>
                <button
                  onClick={() => {
                    setShowIngredientMatcher(false);
                    setAvailableIngredients('');
                  }}
                  className="text-white hover:bg-purple-700 rounded px-2 py-1"
                >
                  ✕
                </button>
              </div>
            </div>
            <div className="bg-white p-4 rounded-b-lg shadow-lg border-t-0">
              <p className="text-purple-800 text-sm mb-3">
                Enter ingredients you have (comma-separated):
              </p>
              <input
                type="text"
                placeholder="e.g., chicken, rice, tomatoes, cheese, eggs..."
                value={availableIngredients}
                onChange={(e) => setAvailableIngredients(e.target.value)}
                className="w-full px-4 py-2 border border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                autoFocus
              />
              {userIngredientsList.length > 0 && (
                <div className="mt-3 p-3 bg-purple-50 rounded-lg">
                  <div className="text-sm font-semibold text-purple-900 mb-2">
                    Your ingredients ({userIngredientsList.length}):
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {userIngredientsList.map((ing, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-purple-200 text-purple-900 rounded-full text-xs font-medium"
                      >
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">

        {/* Info Banner */}
        {!showIngredientMatcher && (
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8 rounded">
            <div className="flex items-start gap-3">
              <div>
                <h3 className="font-semibold text-blue-900 mb-1">
                  Welcome to Your Cooking Journey!
                </h3>
                <p className="text-blue-800 text-sm">
                  Each recipe includes easy-to-follow instructions, helpful tips, and interactive
                  features like checkboxes and timers. Don't worry if you're new to cooking -
                  we explain everything in simple terms!
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Recipe Grid */}
        {filteredRecipes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRecipes.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                onClick={() => setSelectedRecipe(recipe)}
                ingredientMatch={
                  showIngredientMatcher && userIngredientsList.length > 0
                    ? getIngredientMatches(recipe, userIngredientsList)
                    : undefined
                }
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              No recipes found
            </h3>
            <p className="text-gray-500">
              Try searching for something else or browse all recipes
            </p>
          </div>
        )}

        {/* Footer Info */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-2">Super Easy</h4>
              <p className="text-sm text-gray-600">
                Perfect for absolute beginners. Simple ingredients, minimal steps.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-2">Easy</h4>
              <p className="text-sm text-gray-600">
                A few more steps but still beginner-friendly with clear guidance.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-2">Intermediate</h4>
              <p className="text-sm text-gray-600">
                Ready to level up? These recipes introduce new techniques.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
