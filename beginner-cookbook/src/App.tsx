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
  const getIngredientMatches = (recipe: Recipe, userIngredients: string[]): { matches: number; total: number; percentage: number } => {
    if (userIngredients.length === 0) {
      return { matches: 0, total: recipe.ingredients.length, percentage: 0 };
    }

    const recipeIngredients = recipe.ingredients.map(ing =>
      ing.name.toLowerCase()
    );

    let matches = 0;
    userIngredients.forEach(userIng => {
      const userIngLower = userIng.toLowerCase().trim();
      if (recipeIngredients.some(recipeIng =>
        recipeIng.includes(userIngLower) || userIngLower.includes(recipeIng)
      )) {
        matches++;
      }
    });

    const percentage = Math.round((matches / recipe.ingredients.length) * 100);
    return { matches, total: recipe.ingredients.length, percentage };
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
              <span className="text-5xl">👨‍🍳</span>
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
                className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
              />
              <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-xl">
                🔍
              </span>
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
                🟢 Super Easy ({recipes.filter(r => r.difficulty === 'super-easy').length})
              </button>
              <button
                onClick={() => setDifficultyFilter('easy')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  difficultyFilter === 'easy'
                    ? 'bg-yellow-500 text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                🟡 Easy ({recipes.filter(r => r.difficulty === 'easy').length})
              </button>
              <button
                onClick={() => setDifficultyFilter('intermediate')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  difficultyFilter === 'intermediate'
                    ? 'bg-orange-500 text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                🟠 Intermediate ({recipes.filter(r => r.difficulty === 'intermediate').length})
              </button>
            </div>
          </div>

          {/* Ingredient Matcher Toggle */}
          <div className="max-w-2xl mx-auto">
            <button
              onClick={() => setShowIngredientMatcher(!showIngredientMatcher)}
              className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-all shadow-md flex items-center justify-center gap-2"
            >
              <span className="text-xl">🥘</span>
              {showIngredientMatcher ? 'Hide Ingredient Matcher' : 'Find Recipes by Ingredients'}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Ingredient Matcher Section */}
        {showIngredientMatcher && (
          <div className="bg-purple-50 border-l-4 border-purple-600 p-6 mb-8 rounded-lg shadow-sm">
            <div className="mb-4">
              <h3 className="font-semibold text-purple-900 mb-2 text-lg flex items-center gap-2">
                <span className="text-2xl">🥘</span>
                What's in Your Kitchen?
              </h3>
              <p className="text-purple-800 text-sm mb-4">
                Enter ingredients you have (separated by commas) and we'll recommend recipes you can make!
              </p>
              <textarea
                placeholder="e.g., chicken, rice, tomatoes, cheese, eggs..."
                value={availableIngredients}
                onChange={(e) => setAvailableIngredients(e.target.value)}
                rows={3}
                className="w-full px-4 py-3 border border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
              />
            </div>
            {userIngredientsList.length > 0 && (
              <div className="bg-white p-4 rounded-lg border border-purple-200">
                <h4 className="font-semibold text-purple-900 mb-2 text-sm">
                  Your ingredients ({userIngredientsList.length}):
                </h4>
                <div className="flex flex-wrap gap-2">
                  {userIngredientsList.map((ing, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium"
                    >
                      {ing}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Info Banner */}
        {!showIngredientMatcher && (
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8 rounded">
            <div className="flex items-start gap-3">
              <span className="text-2xl">💡</span>
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
            <span className="text-6xl mb-4 block">🔍</span>
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
              <div className="text-3xl mb-3">🟢</div>
              <h4 className="font-semibold text-gray-900 mb-2">Super Easy</h4>
              <p className="text-sm text-gray-600">
                Perfect for absolute beginners. Simple ingredients, minimal steps.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl mb-3">🟡</div>
              <h4 className="font-semibold text-gray-900 mb-2">Easy</h4>
              <p className="text-sm text-gray-600">
                A few more steps but still beginner-friendly with clear guidance.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl mb-3">🟠</div>
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
