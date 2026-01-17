import { useState } from 'react';
import { Recipe } from './types';
import { recipes } from './data/recipes';
import { RecipeCard } from './components/RecipeCard';
import { RecipeDetail } from './components/RecipeDetail';

function App() {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    recipe.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

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
          <div className="max-w-md mx-auto">
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
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Info Banner */}
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

        {/* Recipe Grid */}
        {filteredRecipes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRecipes.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                onClick={() => setSelectedRecipe(recipe)}
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
