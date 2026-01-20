import { useState, useRef } from 'react';
import type { Recipe } from '../types';

interface TinderSwipeStackProps {
  recipes: Recipe[];
  onRecipeSelect: (recipe: Recipe) => void;
  ingredientMatch?: (recipe: Recipe) => { matched: string[]; total: number; percentage: number } | undefined;
}

export function TinderSwipeStack({ recipes, onRecipeSelect, ingredientMatch }: TinderSwipeStackProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [swipeDirection, setSwipeDirection] = useState<'left' | 'right' | null>(null);
  const [dragPosition, setDragPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStartPos = useRef({ x: 0, y: 0 });

  const currentRecipe = recipes[currentIndex];
  const nextRecipe = recipes[currentIndex + 1];

  if (!currentRecipe) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <div className="text-6xl mb-4">🎉</div>
        <h3 className="text-2xl font-bold text-gray-700 mb-2">You've seen all recipes!</h3>
        <p className="text-gray-500 mb-6">Want to start over?</p>
        <button
          onClick={() => setCurrentIndex(0)}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700"
        >
          Start Over
        </button>
      </div>
    );
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    dragStartPos.current = { x: e.clientX, y: e.clientY };
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    dragStartPos.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - dragStartPos.current.x;
    const deltaY = e.clientY - dragStartPos.current.y;
    setDragPosition({ x: deltaX, y: deltaY });
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const deltaX = e.touches[0].clientX - dragStartPos.current.x;
    const deltaY = e.touches[0].clientY - dragStartPos.current.y;
    setDragPosition({ x: deltaX, y: deltaY });
  };

  const handleRelease = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const threshold = 100;
    if (Math.abs(dragPosition.x) > threshold) {
      // Swipe detected
      const direction = dragPosition.x > 0 ? 'right' : 'left';
      setSwipeDirection(direction);

      // Animate out
      setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
        setDragPosition({ x: 0, y: 0 });
        setSwipeDirection(null);
      }, 300);
    } else {
      // Return to center
      setDragPosition({ x: 0, y: 0 });
    }
  };

  const handleSwipe = (direction: 'left' | 'right') => {
    setSwipeDirection(direction);
    setTimeout(() => {
      setCurrentIndex(currentIndex + 1);
      setDragPosition({ x: 0, y: 0 });
      setSwipeDirection(null);
    }, 300);
  };

  const calculateRotation = () => {
    return dragPosition.x / 20; // Max ~15 degrees at 300px
  };

  const calculateOpacity = (type: 'like' | 'nope') => {
    const dragAmount = Math.abs(dragPosition.x);
    if (dragAmount === 0) return 0;
    const opacity = Math.min(dragAmount / 100, 1);
    return type === 'like' ? (dragPosition.x > 0 ? opacity : 0) : (dragPosition.x < 0 ? opacity : 0);
  };

  const renderRecipeCard = (recipe: Recipe, isTop: boolean) => {
    const match = ingredientMatch ? ingredientMatch(recipe) : undefined;

    return (
      <div
        className={`absolute inset-0 ${isTop ? 'z-20' : 'z-10'}`}
        style={{
          transform: isTop
            ? swipeDirection
              ? `translateX(${swipeDirection === 'right' ? '1000px' : '-1000px'}) rotate(${swipeDirection === 'right' ? '45deg' : '-45deg'})`
              : `translateX(${dragPosition.x}px) translateY(${dragPosition.y}px) rotate(${calculateRotation()}deg)`
            : 'scale(0.95)',
          transition: isDragging && isTop ? 'none' : 'all 0.3s ease-out',
          cursor: isTop ? 'grab' : 'default',
        }}
        onMouseDown={isTop ? handleMouseDown : undefined}
        onMouseMove={isTop ? handleMouseMove : undefined}
        onMouseUp={isTop ? handleRelease : undefined}
        onMouseLeave={isTop ? handleRelease : undefined}
        onTouchStart={isTop ? handleTouchStart : undefined}
        onTouchMove={isTop ? handleTouchMove : undefined}
        onTouchEnd={isTop ? handleRelease : undefined}
      >
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden h-full relative">
          {/* Like/Nope Overlays */}
          {isTop && (
            <>
              <div
                className="absolute top-8 left-8 z-30 border-4 border-green-500 text-green-500 text-6xl font-bold px-6 py-3 rotate-[-20deg]"
                style={{ opacity: calculateOpacity('like') }}
              >
                LIKE
              </div>
              <div
                className="absolute top-8 right-8 z-30 border-4 border-red-500 text-red-500 text-6xl font-bold px-6 py-3 rotate-[20deg]"
                style={{ opacity: calculateOpacity('nope') }}
              >
                NOPE
              </div>
            </>
          )}

          {/* Recipe Image */}
          <div className="h-80 bg-gradient-to-br from-orange-200 to-orange-300 flex items-center justify-center overflow-hidden relative">
            {recipe.image ? (
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="text-8xl">🍳</div>
            )}
            {match && (
              <div className="absolute top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-full font-bold shadow-lg">
                {match.percentage}% Match
              </div>
            )}
          </div>

          {/* Recipe Info */}
          <div className="p-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">{recipe.title}</h2>
            <p className="text-gray-600 mb-4 line-clamp-2">{recipe.description}</p>

            <div className="flex gap-4 mb-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span>⏱️</span>
                <span>{recipe.prepTime + recipe.cookTime} min</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span>👥</span>
                <span>{recipe.servings} servings</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className={`difficulty-badge difficulty-${recipe.difficulty} text-xs`}>
                  {recipe.difficulty}
                </span>
              </div>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                onRecipeSelect(recipe);
              }}
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all"
            >
              View Full Recipe
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Card Stack Container */}
      <div className="relative h-[600px] mb-6">
        {nextRecipe && renderRecipeCard(nextRecipe, false)}
        {renderRecipeCard(currentRecipe, true)}
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center gap-8">
        <button
          onClick={() => handleSwipe('left')}
          className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center text-3xl hover:scale-110 transition-transform border-4 border-red-500 text-red-500"
        >
          ✕
        </button>
        <button
          onClick={() => onRecipeSelect(currentRecipe)}
          className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center text-3xl hover:scale-110 transition-transform border-4 border-blue-500 text-blue-500"
        >
          ℹ️
        </button>
        <button
          onClick={() => handleSwipe('right')}
          className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center text-3xl hover:scale-110 transition-transform border-4 border-green-500 text-green-500"
        >
          ♥
        </button>
      </div>

      {/* Progress Indicator */}
      <div className="mt-6 text-center text-gray-600">
        {currentIndex + 1} / {recipes.length}
      </div>
    </div>
  );
}
