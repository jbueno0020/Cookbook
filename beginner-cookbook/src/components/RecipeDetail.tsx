import { useState, useEffect, useRef } from 'react';
import type { Recipe } from '../types';
import { CookingTechniqueModal } from './CookingTechniqueModal';
import { cookingTechniques, detectCookingTerms } from '../utils/cookingTechniques';

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
  const [selectedTechnique, setSelectedTechnique] = useState<string | null>(null);
  const [timerPosition, setTimerPosition] = useState({ x: window.innerWidth - 180, y: window.innerHeight - 250 });
  const [isDraggingTimer, setIsDraggingTimer] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [swipeOffset, setSwipeOffset] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [servingMultiplier, setServingMultiplier] = useState(1);
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

  // Helper to scale ingredient amounts
  const scaleIngredientAmount = (amount: string, multiplier: number): string => {
    if (multiplier === 1) return amount;

    // Try to find and scale numbers in the amount string
    return amount.replace(/(\d+\.?\d*|\d*\.\d+)(\/(\d+))?/g, (_match, whole, _, denominator) => {
      if (denominator) {
        // Handle fractions like "1/2"
        const fraction = parseFloat(whole) / parseFloat(denominator);
        const scaled = fraction * multiplier;

        // Try to convert back to a nice fraction if possible
        if (scaled === 0.25) return '1/4';
        if (scaled === 0.5) return '1/2';
        if (scaled === 0.75) return '3/4';
        if (scaled === 1) return '1';
        if (scaled === 1.5) return '1 1/2';
        if (scaled === 2) return '2';

        // Otherwise return decimal
        return scaled.toFixed(2).replace(/\.?0+$/, '');
      } else {
        // Regular number
        const num = parseFloat(whole);
        const scaled = num * multiplier;
        // Round to 2 decimal places and remove trailing zeros
        return scaled.toFixed(2).replace(/\.?0+$/, '');
      }
    });
  };

  // Calculate swooping motion - creates a parabolic arc
  const calculateSwoopTransform = (offsetX: number) => {
    // Calculate vertical offset (swoops down in the middle)
    // Using a parabolic function: y = -ax^2 where a controls depth of swoop
    const normalizedX = offsetX / 250; // Normalize based on max offset
    const verticalOffset = -Math.abs(normalizedX) * 80 * Math.abs(normalizedX); // Parabolic swoop

    // Calculate rotation (slight tilt during swoop)
    const rotation = normalizedX * 5; // Max 5 degrees rotation

    return {
      transform: `translateX(${offsetX}px) translateY(${verticalOffset}px) rotate(${rotation}deg)`,
      verticalOffset
    };
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setIsTransitioning(false);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!touchStart) return;

    const currentTouch = e.targetTouches[0].clientX;
    setTouchEnd(currentTouch);

    // Calculate swipe offset for visual feedback
    const offset = currentTouch - touchStart;
    // Limit the offset to prevent excessive dragging
    const limitedOffset = Math.max(-150, Math.min(150, offset));
    setSwipeOffset(limitedOffset);

    // Prevent page scrolling while swiping
    if (Math.abs(offset) > 10) {
      e.preventDefault();
    }
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) {
      setSwipeOffset(0);
      return;
    }

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    setIsTransitioning(true);

    if (isLeftSwipe && currentStepIndex < recipe.steps.length - 1) {
      // Animate card sliding out to the left
      setSwipeOffset(-500);
      setTimeout(() => {
        // Mark current step as complete and move to next
        const newCompleted = new Set(completedSteps);
        newCompleted.add(currentStep.id);
        setCompletedSteps(newCompleted);
        setCurrentStepIndex(currentStepIndex + 1);
        setSwipeOffset(500);
        setTimeout(() => {
          setSwipeOffset(0);
          setIsTransitioning(false);
        }, 50);
      }, 300);
    } else if (isRightSwipe && currentStepIndex > 0) {
      // Animate card sliding out to the right
      setSwipeOffset(500);
      setTimeout(() => {
        setCurrentStepIndex(currentStepIndex - 1);
        setSwipeOffset(-500);
        setTimeout(() => {
          setSwipeOffset(0);
          setIsTransitioning(false);
        }, 50);
      }, 300);
    } else {
      // Snap back to center if swipe wasn't far enough
      setSwipeOffset(0);
      setIsTransitioning(false);
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

  // Timer drag handlers
  const onTimerTouchStart = (e: React.TouchEvent) => {
    setIsDraggingTimer(true);
    const touch = e.touches[0];
    setDragOffset({
      x: touch.clientX - timerPosition.x,
      y: touch.clientY - timerPosition.y
    });
  };

  const onTimerTouchMove = (e: React.TouchEvent) => {
    if (isDraggingTimer) {
      const touch = e.touches[0];
      setTimerPosition({
        x: touch.clientX - dragOffset.x,
        y: touch.clientY - dragOffset.y
      });
    }
  };

  const onTimerTouchEnd = () => {
    setIsDraggingTimer(false);
  };

  // Helper to add technique links to text
  const renderTextWithTechniqueLinks = (text: string) => {
    const terms = detectCookingTerms(text);
    if (terms.length === 0) return text;

    let result: (string | React.ReactElement)[] = [text];

    terms.forEach(term => {
      const newResult: (string | React.ReactElement)[] = [];
      result.forEach((part, index) => {
        if (typeof part === 'string') {
          const regex = new RegExp(`\\b(${term})\\b`, 'gi');
          const parts = part.split(regex);
          parts.forEach((p, i) => {
            if (p.toLowerCase() === term.toLowerCase()) {
              newResult.push(
                <button
                  key={`${term}-${index}-${i}`}
                  onClick={() => setSelectedTechnique(term)}
                  className="text-purple-600 font-semibold underline decoration-dotted hover:text-purple-700"
                >
                  {p}
                </button>
              );
            } else if (p) {
              newResult.push(p);
            }
          });
        } else {
          newResult.push(part);
        }
      });
      result = newResult;
    });

    return <>{result}</>;
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <button
        onClick={onBack}
        className="mb-4 flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
      >
        Back to Recipes
      </button>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-6">
        <div className="h-64 bg-gradient-to-br from-orange-200 to-orange-300 flex items-center justify-center overflow-hidden relative">
          {recipe.image && (
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-full object-cover"
            />
          )}
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

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mb-6">
            <div className="bg-gray-50 p-3 rounded-lg">
              <div className="text-sm text-gray-600 mb-1">Total Time</div>
              <div className="font-semibold text-lg">{totalTime} min</div>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <div className="text-sm text-gray-600 mb-1">Prep Time</div>
              <div className="font-semibold text-lg">{recipe.prepTime} min</div>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <div className="text-sm text-gray-600 mb-1">Cook Time</div>
              <div className="font-semibold text-lg">{recipe.cookTime} min</div>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg border-2 border-blue-200">
              <div className="text-sm text-gray-600 mb-2">Servings</div>
              <div className="flex items-center justify-center gap-2">
                <button
                  onClick={() => setServingMultiplier(Math.max(0.5, servingMultiplier - 0.5))}
                  className="w-7 h-7 bg-blue-500 text-white rounded-full hover:bg-blue-600 font-bold text-lg"
                >
                  -
                </button>
                <div className="font-semibold text-lg min-w-[3rem] text-center">
                  {Math.round(recipe.servings * servingMultiplier)}
                </div>
                <button
                  onClick={() => setServingMultiplier(Math.min(5, servingMultiplier + 0.5))}
                  className="w-7 h-7 bg-blue-500 text-white rounded-full hover:bg-blue-600 font-bold text-lg"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Nutrition Facts */}
          {recipe.nutrition && (
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg border border-green-200">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                Nutrition Facts (per serving)
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-700">{recipe.nutrition.calories}</div>
                  <div className="text-xs text-gray-600">Calories</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-700">{recipe.nutrition.protein}g</div>
                  <div className="text-xs text-gray-600">Protein</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-700">{recipe.nutrition.carbs}g</div>
                  <div className="text-xs text-gray-600">Carbs</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-700">{recipe.nutrition.fat}g</div>
                  <div className="text-xs text-gray-600">Fat</div>
                </div>
                {recipe.nutrition.fiber !== undefined && (
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-700">{recipe.nutrition.fiber}g</div>
                    <div className="text-xs text-gray-600">Fiber</div>
                  </div>
                )}
              </div>
            </div>
          )}
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
          Ingredients
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
                  {renderTextWithTechniqueLinks(`${scaleIngredientAmount(ingredient.amount, servingMultiplier)} ${ingredient.name}`)}
                </div>
                {ingredient.visual && (
                  <div className="text-sm text-gray-500 italic">
                    {ingredient.visual}
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
            Cooking Instructions
          </h2>
          <p className="text-gray-600 mb-4 text-center">
            Swipe left to complete step • Swipe right to go back
          </p>

          {/* Step Card with Swipe Animation */}
          <div className="relative overflow-hidden">
            <div
              className="bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-blue-100"
              style={{
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(59, 130, 246, 0.1)',
                ...calculateSwoopTransform(swipeOffset),
                transition: isTransitioning ? 'transform 0.3s ease-out' : 'none',
                touchAction: 'pan-y' // Prevent default horizontal scroll
              }}
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
                    Done
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
        </div>
      )}

      {/* Draggable Countdown Timer Display */}
      {timerSeconds !== null && (
        <div
          className="fixed bg-blue-600 text-white p-6 rounded-xl shadow-2xl border-4 border-white cursor-move touch-none select-none"
          style={{
            left: `${timerPosition.x}px`,
            top: `${timerPosition.y}px`,
            zIndex: 1000
          }}
          onTouchStart={onTimerTouchStart}
          onTouchMove={onTimerTouchMove}
          onTouchEnd={onTimerTouchEnd}
        >
          <div className="text-xs font-medium mb-1 text-center opacity-75">
            👆 Drag to move
          </div>
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

      {/* Cooking Technique Modal */}
      {selectedTechnique && cookingTechniques[selectedTechnique] && (
        <CookingTechniqueModal
          technique={cookingTechniques[selectedTechnique]}
          onClose={() => setSelectedTechnique(null)}
        />
      )}
    </div>
  );
}
