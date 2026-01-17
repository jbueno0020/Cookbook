import { useState } from 'react';
import { Recipe } from '../types';

interface RecipeDetailProps {
  recipe: Recipe;
  onBack: () => void;
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

export function RecipeDetail({ recipe, onBack }: RecipeDetailProps) {
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());
  const [checkedIngredients, setCheckedIngredients] = useState<Set<string>>(new Set());
  const [activeTimer, setActiveTimer] = useState<number | null>(null);
  const [timerSeconds, setTimerSeconds] = useState<number>(0);

  const toggleStep = (stepId: number) => {
    const newCompleted = new Set(completedSteps);
    if (newCompleted.has(stepId)) {
      newCompleted.delete(stepId);
    } else {
      newCompleted.add(stepId);
    }
    setCompletedSteps(newCompleted);
  };

  const toggleIngredient = (ingredientName: string) => {
    const newChecked = new Set(checkedIngredients);
    if (newChecked.has(ingredientName)) {
      newChecked.delete(ingredientName);
    } else {
      newChecked.add(ingredientName);
    }
    setCheckedIngredients(newChecked);
  };

  const startTimer = (minutes: number) => {
    setTimerSeconds(minutes * 60);
    setActiveTimer(minutes);
  };

  const progress = (completedSteps.size / recipe.steps.length) * 100;
  const totalTime = recipe.prepTime + recipe.cookTime;

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <button
        onClick={onBack}
        className="mb-4 flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
      >
        <span>←</span> Back to Recipes
      </button>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-6">
        <div className="h-64 bg-gradient-to-br from-orange-200 to-orange-300 flex items-center justify-center">
          <span className="text-9xl">🍳</span>
        </div>

        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <h1 className="text-3xl font-bold text-gray-900 flex-1">
              {recipe.title}
            </h1>
            <span className={`difficulty-badge ${difficultyColors[recipe.difficulty]}`}>
              {difficultyLabels[recipe.difficulty]}
            </span>
          </div>

          <p className="text-gray-700 text-lg mb-6">
            {recipe.description}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-gray-50 p-3 rounded-lg">
              <div className="text-2xl mb-1">⏱️</div>
              <div className="text-sm text-gray-600">Total Time</div>
              <div className="font-semibold">{totalTime} min</div>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <div className="text-2xl mb-1">👨‍🍳</div>
              <div className="text-sm text-gray-600">Prep Time</div>
              <div className="font-semibold">{recipe.prepTime} min</div>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <div className="text-2xl mb-1">🔥</div>
              <div className="text-sm text-gray-600">Cook Time</div>
              <div className="font-semibold">{recipe.cookTime} min</div>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <div className="text-2xl mb-1">🍽️</div>
              <div className="text-sm text-gray-600">Servings</div>
              <div className="font-semibold">{recipe.servings}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-white rounded-lg shadow p-4 mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">
            Your Progress
          </span>
          <span className="text-sm text-gray-600">
            {completedSteps.size} of {recipe.steps.length} steps completed
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className="bg-green-500 h-3 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Ingredients */}
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <span>🛒</span> Ingredients
        </h2>
        <div className="space-y-3">
          {recipe.ingredients.map((ingredient, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <input
                type="checkbox"
                id={`ingredient-${index}`}
                checked={checkedIngredients.has(ingredient.name)}
                onChange={() => toggleIngredient(ingredient.name)}
                className="mt-1 w-5 h-5 text-green-600 rounded focus:ring-2 focus:ring-green-500"
              />
              <label
                htmlFor={`ingredient-${index}`}
                className={`flex-1 cursor-pointer ${
                  checkedIngredients.has(ingredient.name) ? 'line-through text-gray-400' : ''
                }`}
              >
                <div className="font-medium text-gray-900">
                  {ingredient.amount} {ingredient.name}
                </div>
                {ingredient.visual && (
                  <div className="text-sm text-gray-500 italic">
                    💡 {ingredient.visual}
                  </div>
                )}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Steps */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <span>📝</span> Step-by-Step Instructions
        </h2>
        <div className="space-y-6">
          {recipe.steps.map((step, index) => (
            <div
              key={step.id}
              className={`border-l-4 pl-6 pb-6 relative ${
                completedSteps.has(step.id)
                  ? 'border-green-500'
                  : 'border-gray-300'
              }`}
            >
              {/* Step number badge */}
              <div
                className={`absolute -left-6 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
                  completedSteps.has(step.id)
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-200 text-gray-700'
                }`}
              >
                {index + 1}
              </div>

              <div className="ml-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {step.instruction}
                </h3>

                <p className="text-gray-700 mb-3 leading-relaxed">
                  {step.plainLanguage}
                </p>

                {step.tip && (
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 mb-3">
                    <div className="flex items-start gap-2">
                      <span className="text-yellow-600 font-bold">💡 Tip:</span>
                      <span className="text-yellow-800">{step.tip}</span>
                    </div>
                  </div>
                )}

                <div className="flex gap-3 mt-4">
                  <button
                    onClick={() => toggleStep(step.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      completedSteps.has(step.id)
                        ? 'bg-green-500 text-white hover:bg-green-600'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {completedSteps.has(step.id) ? '✓ Completed' : 'Mark Complete'}
                  </button>

                  {step.timer && (
                    <button
                      onClick={() => startTimer(step.timer!)}
                      className="px-4 py-2 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors flex items-center gap-2"
                    >
                      <span>⏱️</span>
                      Start {step.timer} min timer
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Completion Message */}
        {completedSteps.size === recipe.steps.length && (
          <div className="mt-8 bg-green-50 border-2 border-green-500 rounded-lg p-6 text-center">
            <div className="text-5xl mb-3">🎉</div>
            <h3 className="text-2xl font-bold text-green-800 mb-2">
              Amazing Job!
            </h3>
            <p className="text-green-700">
              You've completed all the steps! Enjoy your delicious {recipe.title}!
            </p>
          </div>
        )}
      </div>

      {/* Simple Timer Display */}
      {activeTimer !== null && (
        <div className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-lg shadow-lg">
          <div className="text-sm font-medium mb-1">Timer Running</div>
          <div className="text-2xl font-bold">{activeTimer} minutes</div>
          <button
            onClick={() => setActiveTimer(null)}
            className="mt-2 text-xs bg-white text-blue-600 px-3 py-1 rounded hover:bg-gray-100"
          >
            Stop Timer
          </button>
        </div>
      )}
    </div>
  );
}
