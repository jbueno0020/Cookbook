import { useState, useEffect, useRef } from 'react';
import type { Recipe } from '../types';

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
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [timerSeconds, setTimerSeconds] = useState<number | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Timer countdown effect
  useEffect(() => {
    if (timerSeconds !== null && timerSeconds > 0) {
      timerRef.current = setInterval(() => {
        setTimerSeconds((prev) => {
          if (prev === null || prev <= 1) {
            // Timer completed
            if (timerRef.current) clearInterval(timerRef.current);
            alert('⏰ Timer completed!');
            return null;
          }
          return prev - 1;
        });
      }, 1000);

      return () => {
        if (timerRef.current) clearInterval(timerRef.current);
      };
    }
  }, [timerSeconds]);

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
  };

  const stopTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setTimerSeconds(null);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const currentStep = recipe.steps[currentStepIndex];
  const progress = (completedSteps.size / recipe.steps.length) * 100;
  const totalTime = recipe.prepTime + recipe.cookTime;

  // Swipe handlers
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && currentStepIndex < recipe.steps.length - 1) {
      // Swipe left - mark current step complete and go to next
      const newCompleted = new Set(completedSteps);
      newCompleted.add(currentStep.id);
      setCompletedSteps(newCompleted);
      setCurrentStepIndex(currentStepIndex + 1);
    }

    if (isRightSwipe && currentStepIndex > 0) {
      // Swipe right - go to previous step
      setCurrentStepIndex(currentStepIndex - 1);
    }
  };

  const goToNextStep = () => {
    if (currentStepIndex < recipe.steps.length - 1) {
      const newCompleted = new Set(completedSteps);
      newCompleted.add(currentStep.id);
      setCompletedSteps(newCompleted);
      setCurrentStepIndex(currentStepIndex + 1);
    }
  };

  const goToPreviousStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
    }
  };

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

      {/* Swipeable Step Card */}
      {completedSteps.size === recipe.steps.length ? (
        /* Completion Message */
        <div className="bg-green-50 border-2 border-green-500 rounded-lg p-8 text-center">
          <div className="text-6xl mb-4">🎉</div>
          <h3 className="text-3xl font-bold text-green-800 mb-3">
            Amazing Job!
          </h3>
          <p className="text-green-700 text-lg mb-6">
            You've completed all the steps! Enjoy your delicious {recipe.title}!
          </p>
          <button
            onClick={() => {
              setCompletedSteps(new Set());
              setCurrentStepIndex(0);
            }}
            className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700"
          >
            Start Over
          </button>
        </div>
      ) : (
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>📝</span> Cooking Instructions
          </h2>
          <p className="text-gray-600 mb-4 text-center">
            Swipe left to complete step • Swipe right to go back
          </p>

          {/* Step Card */}
          <div
            className="bg-white rounded-xl shadow-lg overflow-hidden"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {/* Step Header */}
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 text-white">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium opacity-90">
                  Step {currentStepIndex + 1} of {recipe.steps.length}
                </span>
                {completedSteps.has(currentStep.id) && (
                  <span className="bg-green-400 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    ✓ Done
                  </span>
                )}
              </div>
              <h3 className="text-2xl font-bold">
                {currentStep.instruction}
              </h3>
            </div>

            {/* Step Content */}
            <div className="p-6">
              <p className="text-gray-800 text-lg leading-relaxed mb-6">
                {currentStep.plainLanguage}
              </p>

              {currentStep.tip && (
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                  <div className="flex items-start gap-2">
                    <span className="text-xl">💡</span>
                    <div>
                      <div className="font-bold text-yellow-800 mb-1">Pro Tip:</div>
                      <p className="text-yellow-700">{currentStep.tip}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Timer Button */}
              {currentStep.timer && (
                <button
                  onClick={() => startTimer(currentStep.timer!)}
                  disabled={timerSeconds !== null}
                  className="w-full mb-4 px-6 py-4 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-lg"
                >
                  <span>⏱️</span>
                  {timerSeconds !== null ? 'Timer Running...' : `Start ${currentStep.timer} min timer`}
                </button>
              )}

              {/* Navigation Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={goToPreviousStep}
                  disabled={currentStepIndex === 0}
                  className="flex-1 px-6 py-4 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  ← Previous
                </button>
                <button
                  onClick={goToNextStep}
                  disabled={currentStepIndex === recipe.steps.length - 1}
                  className="flex-1 px-6 py-4 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Complete & Next →
                </button>
              </div>

              {/* Step Dots Indicator */}
              <div className="flex justify-center gap-2 mt-6">
                {recipe.steps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentStepIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentStepIndex
                        ? 'bg-blue-600 w-6'
                        : completedSteps.has(recipe.steps[index].id)
                        ? 'bg-green-500'
                        : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Countdown Timer Display */}
      {timerSeconds !== null && (
        <div className="fixed bottom-6 right-6 bg-blue-600 text-white p-6 rounded-xl shadow-2xl border-4 border-white">
          <div className="text-sm font-medium mb-2 text-center opacity-90">⏰ Timer</div>
          <div className="text-5xl font-bold text-center mb-4 tabular-nums">
            {formatTime(timerSeconds)}
          </div>
          <button
            onClick={stopTimer}
            className="w-full text-sm bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-100 font-semibold"
          >
            Stop Timer
          </button>
        </div>
      )}
    </div>
  );
}
