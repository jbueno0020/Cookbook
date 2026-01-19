import { useState } from 'react';
import type { Recipe, DifficultyLevel } from './types';
import { recipes } from './data/recipes';
import { RecipeCard } from './components/RecipeCard';
import { RecipeDetail } from './components/RecipeDetail';

type ViewMode = 'browse' | 'ingredients';

function App() {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<DifficultyLevel | 'all'>('all');
  const [viewMode, setViewMode] = useState<ViewMode>('browse');
  const [availableIngredients, setAvailableIngredients] = useState<string>('');

  // Function to calculate ingredient match score
  const calculateIngredientMatch = (recipe: Recipe, ingredients: string[]): number => {
    if (ingredients.length === 0) return 0;

    const recipeIngredients = recipe.ingredients.map(ing =>
      ing.name.toLowerCase()
    );

    let matchCount = 0;
    ingredients.forEach(ingredient => {
      const normalizedIng = ingredient.trim().toLowerCase();
      if (recipeIngredients.some(recipeIng =>
        recipeIng.includes(normalizedIng) || normalizedIng.includes(recipeIng)
      )) {
        matchCount++;
      }
    });

    return (matchCount / recipe.ingredients.length) * 100;
  };

  // Filter recipes based on search, difficulty, and view mode
  let filteredRecipes = recipes.filter((recipe) => {
    const matchesSearch =
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesDifficulty =
      selectedDifficulty === 'all' || recipe.difficulty === selectedDifficulty;

    return matchesSearch && matchesDifficulty;
  });

  // If in ingredient mode, calculate matches and sort
  if (viewMode === 'ingredients' && availableIngredients.trim()) {
    const ingredients = availableIngredients.split(',').map(i => i.trim()).filter(i => i);

    const recipesWithScores = filteredRecipes.map(recipe => ({
      recipe,
      score: calculateIngredientMatch(recipe, ingredients)
    }));

    filteredRecipes = recipesWithScores
      .filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .map(item => item.recipe);
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

          {/* View Mode Toggle */}
          <div className="flex justify-center gap-2 mb-4">
            <button
              onClick={() => setViewMode('browse')}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                viewMode === 'browse'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Browse All
            </button>
            <button
              onClick={() => setViewMode('ingredients')}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                viewMode === 'ingredients'
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              🥕 Find by Ingredients
            </button>
          </div>

          {/* Ingredient Input (only in ingredients mode) */}
          {viewMode === 'ingredients' && (
            <div className="max-w-2xl mx-auto mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                What ingredients do you have? (separate with commas)
              </label>
              <input
                type="text"
                placeholder="e.g., chicken, rice, tomatoes, onion..."
                value={availableIngredients}
                onChange={(e) => setAvailableIngredients(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-base"
              />
              <p className="text-xs text-gray-500 mt-1">
                💡 We'll show you recipes that match your ingredients, sorted by best match
              </p>
            </div>
          )}

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

          {/* Difficulty Filter */}
          <div className="max-w-2xl mx-auto">
            <div className="flex flex-wrap justify-center gap-2">
              <button
                onClick={() => setSelectedDifficulty('all')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedDifficulty === 'all'
                    ? 'bg-gray-800 text-white shadow-md'
                    : 'bg-white text-gray-700 border border-gray-300 hover:border-gray-400'
                }`}
              >
                All Levels
              </button>
              <button
                onClick={() => setSelectedDifficulty('super-easy')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedDifficulty === 'super-easy'
                    ? 'bg-green-500 text-white shadow-md'
                    : 'bg-white text-gray-700 border border-gray-300 hover:border-gray-400'
                }`}
              >
                🟢 Super Easy
              </button>
              <button
                onClick={() => setSelectedDifficulty('easy')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedDifficulty === 'easy'
                    ? 'bg-yellow-500 text-white shadow-md'
                    : 'bg-white text-gray-700 border border-gray-300 hover:border-gray-400'
                }`}
              >
                🟡 Easy
              </button>
              <button
                onClick={() => setSelectedDifficulty('intermediate')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedDifficulty === 'intermediate'
                    ? 'bg-orange-500 text-white shadow-md'
                    : 'bg-white text-gray-700 border border-gray-300 hover:border-gray-400'
                }`}
              >
                🟠 Intermediate
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Info Banner */}
        {viewMode === 'browse' ? (
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
        ) : (
          <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-8 rounded">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🥕</span>
              <div>
                <h3 className="font-semibold text-green-900 mb-1">
                  Find Recipes with Your Ingredients!
                </h3>
                <p className="text-green-800 text-sm">
                  Enter ingredients you have in your kitchen above, and we'll show you recipes
                  you can make! Recipes are sorted by how many of your ingredients they use.
                  {availableIngredients.trim() && (
                    <span className="font-medium"> Showing recipes with your ingredients!</span>
                  )}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Recipe Count */}
        {filteredRecipes.length > 0 && (
          <div className="mb-4 text-center text-gray-600">
            <span className="font-medium text-gray-900">{filteredRecipes.length}</span> {filteredRecipes.length === 1 ? 'recipe' : 'recipes'} found
            {viewMode === 'ingredients' && availableIngredients.trim() && (
              <span className="ml-2 text-green-600">- sorted by ingredient match</span>
            )}
          </div>
        )}

        {/* Recipe Grid */}
        {filteredRecipes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRecipes.map((recipe) => {
              // Calculate match percentage for ingredient mode
              let matchPercentage = 0;
              if (viewMode === 'ingredients' && availableIngredients.trim()) {
                const ingredients = availableIngredients.split(',').map(i => i.trim()).filter(i => i);
                matchPercentage = calculateIngredientMatch(recipe, ingredients);
              }

              return (
                <div key={recipe.id} className="relative">
                  {/* Match Badge */}
                  {viewMode === 'ingredients' && matchPercentage > 0 && (
                    <div className="absolute top-2 right-2 z-10 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                      {Math.round(matchPercentage)}% match
                    </div>
                  )}
                  <RecipeCard
                    recipe={recipe}
                    onClick={() => setSelectedRecipe(recipe)}
                  />
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12">
            <span className="text-6xl mb-4 block">
              {viewMode === 'ingredients' ? '🥕' : '🔍'}
            </span>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              {viewMode === 'ingredients' && availableIngredients.trim()
                ? 'No matching recipes found'
                : 'No recipes found'}
            </h3>
            <p className="text-gray-500">
              {viewMode === 'ingredients' && availableIngredients.trim()
                ? 'Try adding more common ingredients like chicken, rice, or pasta'
                : 'Try searching for something else or browse all recipes'}
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
