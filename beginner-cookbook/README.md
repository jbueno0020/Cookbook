# Beginner's Cookbook

A user-friendly cookbook application designed specifically for beginner cooks and those learning to cook. Features simple recipes with step-by-step instructions, interactive elements, and beginner-friendly language.

## Features

### For Beginner Cooks
- **Simple Language**: No confusing cooking jargon - everything is explained in plain terms
- **Visual References**: Measurements include visual references like "size of a golf ball" or "about 2 capfuls"
- **Helpful Tips**: Each step includes optional tips to help you succeed
- **Plain Language Explanations**: Every instruction includes a detailed, easy-to-understand explanation

### Interactive Elements
- **Progress Tracking**: Visual progress bar shows how far you've come
- **Step Checkboxes**: Mark steps as complete to track your progress
- **Ingredient Checklist**: Check off ingredients as you gather them
- **Built-in Timers**: Start timers directly from recipe steps
- **Completion Celebration**: Get a congratulatory message when you finish!

### Recipe Features
- **Difficulty Levels**: Color-coded badges for Super Easy, Easy, and Intermediate recipes
- **Time Estimates**: See prep time, cook time, and total time at a glance
- **Serving Information**: Know how many people each recipe serves
- **Recipe Tags**: Search and filter by tags like "breakfast", "quick", "vegetarian"

### User Experience
- **Mobile-Responsive**: Works great on phones, tablets, and desktop
- **Search Functionality**: Find recipes by name or tags
- **Clean Design**: Uncluttered interface focused on readability
- **Large Touch Targets**: Easy to tap buttons and checkboxes

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:5173` to see the app.

### Build for Production

```bash
npm run build
```

## Tech Stack

- **React** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **React Hooks** - State management

## Current Recipes

1. **Perfect Scrambled Eggs** - Super Easy, 7 minutes
2. **Simple Pasta with Butter and Cheese** - Super Easy, 14 minutes
3. **Grilled Cheese Sandwich** - Super Easy, 9 minutes
4. **Basic Tomato Soup** - Easy, 25 minutes

## Project Structure

```
src/
├── components/
│   ├── RecipeCard.tsx      # Recipe list card component
│   └── RecipeDetail.tsx    # Full recipe view with steps
├── data/
│   └── recipes.ts          # Recipe data
├── types.ts                # TypeScript type definitions
├── App.tsx                 # Main application component
└── index.css               # Global styles with Tailwind
```

## Adding New Recipes

To add a new recipe, edit `src/data/recipes.ts` and add a new recipe object following the existing format:

```typescript
{
  id: 'unique-id',
  title: 'Recipe Name',
  description: 'Brief description',
  difficulty: 'super-easy' | 'easy' | 'intermediate',
  prepTime: 5,  // minutes
  cookTime: 10, // minutes
  servings: 2,
  tags: ['breakfast', 'quick'],
  ingredients: [...],
  steps: [...]
}
```

## Future Enhancements

- Add recipe images
- Implement working countdown timers
- Add portion calculator to adjust servings
- Include video demonstrations
- Add "Kitchen Basics" section with technique guides
- User accounts to save favorite recipes
- Shopping list generator
- Nutritional information
