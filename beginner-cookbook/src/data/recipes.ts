import type { Recipe } from '../types';

export const recipes: Recipe[] = [
  {
    id: '1',
    title: 'Perfect Scrambled Eggs',
    description: 'Fluffy, creamy scrambled eggs that are perfect for breakfast. A great first recipe!',
    difficulty: 'super-easy',
    prepTime: 2,
    cookTime: 5,
    servings: 2,
    tags: ['breakfast', 'quick', 'protein'],
    ingredients: [
      {
        name: 'Eggs',
        amount: '4 eggs',
        visual: 'About 4 eggs from the carton'
      },
      {
        name: 'Butter',
        amount: '1 tablespoon',
        visual: 'About the size of your thumb'
      },
      {
        name: 'Salt',
        amount: 'A pinch',
        visual: 'What you can pinch between two fingers'
      },
      {
        name: 'Milk (optional)',
        amount: '2 tablespoons',
        visual: 'About 2 capfuls'
      }
    ],
    steps: [
      {
        id: 1,
        instruction: 'Crack eggs into a bowl',
        plainLanguage: 'Tap each egg gently on the counter, then pull the shell apart over a bowl. Let the egg fall in. Remove any shell pieces.',
        tip: 'Crack eggs on a flat surface, not the bowl edge, to avoid shell pieces'
      },
      {
        id: 2,
        instruction: 'Add milk and salt, then whisk',
        plainLanguage: 'Pour in the milk and add a pinch of salt. Use a fork or whisk to mix everything together until it\'s all one yellow color.',
        tip: 'Mix for about 30 seconds until no clear egg white shows'
      },
      {
        id: 3,
        instruction: 'Heat the pan with butter',
        plainLanguage: 'Put your pan on the stove. Turn the heat to medium (usually the middle setting). Add the butter and wait until it melts and starts to bubble a little.',
        timer: 1,
        tip: 'The pan is ready when the butter melts and sizzles gently'
      },
      {
        id: 4,
        instruction: 'Pour eggs into the pan',
        plainLanguage: 'Carefully pour your egg mixture into the pan. You should hear a gentle sizzle.',
      },
      {
        id: 5,
        instruction: 'Gently stir the eggs',
        plainLanguage: 'Use a spatula to slowly push the eggs from the edge to the center. Keep doing this gently. Don\'t stir too fast!',
        timer: 3,
        tip: 'Low and slow is the secret! Keep the heat medium and stir gently'
      },
      {
        id: 6,
        instruction: 'Remove from heat when almost done',
        plainLanguage: 'When the eggs are mostly solid but still look a tiny bit wet, turn off the heat and remove the pan from the burner. They will finish cooking from the pan\'s heat.',
        tip: 'They should look creamy, not dry. Remove them before they look completely done!'
      },
      {
        id: 7,
        instruction: 'Serve immediately',
        plainLanguage: 'Put the eggs on a plate right away and enjoy! They taste best when fresh and hot.',
      }
    ]
  },
  {
    id: '2',
    title: 'Simple Pasta with Butter and Cheese',
    description: 'The easiest pasta dish ever - just 3 ingredients! Perfect comfort food.',
    difficulty: 'super-easy',
    prepTime: 2,
    cookTime: 12,
    servings: 2,
    tags: ['pasta', 'quick', 'vegetarian'],
    ingredients: [
      {
        name: 'Pasta',
        amount: '8 oz (half a box)',
        visual: 'About 2 big handfuls of dry pasta'
      },
      {
        name: 'Butter',
        amount: '3 tablespoons',
        visual: 'About 3 thumb-sized pieces'
      },
      {
        name: 'Parmesan cheese',
        amount: '1/2 cup grated',
        visual: 'About half a coffee cup full'
      },
      {
        name: 'Salt',
        amount: '1 tablespoon (for water)',
        visual: 'One big spoonful'
      }
    ],
    steps: [
      {
        id: 1,
        instruction: 'Fill a large pot with water',
        plainLanguage: 'Get your biggest pot and fill it about 3/4 full with water from the tap. Don\'t fill it all the way to the top!',
        tip: 'Leave room at the top so the water doesn\'t boil over'
      },
      {
        id: 2,
        instruction: 'Add salt and bring to a boil',
        plainLanguage: 'Add a big spoonful of salt to the water. Put the pot on the stove and turn the heat to high. Put a lid on top. Wait for big bubbles - that\'s boiling!',
        timer: 8,
        tip: 'You\'ll know it\'s boiling when you see lots of big bubbles and steam. This usually takes 5-8 minutes'
      },
      {
        id: 3,
        instruction: 'Add pasta to boiling water',
        plainLanguage: 'Remove the lid carefully (watch out for steam!). Pour your pasta into the boiling water. Give it a stir with a big spoon.',
        tip: 'Stir right away so the pasta doesn\'t stick together'
      },
      {
        id: 4,
        instruction: 'Cook pasta for 10-12 minutes',
        plainLanguage: 'Let the pasta cook. Stir it every few minutes. Check the pasta box for the exact time - usually 10-12 minutes. Taste a piece to test if it\'s done!',
        timer: 11,
        tip: 'The pasta is done when it\'s soft but still a tiny bit chewy. Try a piece after 10 minutes!'
      },
      {
        id: 5,
        instruction: 'Drain the pasta',
        plainLanguage: 'Turn off the heat. Put a colander (the bowl with holes) in your sink. Carefully pour the pot of pasta into the colander. The water will drain out the holes.',
        tip: 'Be very careful - the water and steam are HOT! Pour slowly and steadily'
      },
      {
        id: 6,
        instruction: 'Add butter and cheese',
        plainLanguage: 'Put the drained pasta back in the pot. Add your butter and cheese. Stir everything together until the butter melts and coats all the pasta.',
        tip: 'The hot pasta will melt the butter. Keep stirring until everything is creamy!'
      },
      {
        id: 7,
        instruction: 'Serve and enjoy',
        plainLanguage: 'Divide the pasta between plates. Add more cheese on top if you want. Eat while it\'s warm!',
        tip: 'You can add pepper, garlic powder, or any other seasonings you like!'
      }
    ]
  },
  {
    id: '3',
    title: 'Grilled Cheese Sandwich',
    description: 'Crispy, golden, melty grilled cheese. A classic that everyone should know!',
    difficulty: 'super-easy',
    prepTime: 3,
    cookTime: 6,
    servings: 1,
    tags: ['lunch', 'quick', 'sandwich'],
    ingredients: [
      {
        name: 'Bread',
        amount: '2 slices',
        visual: 'Any bread you like - white, wheat, sourdough'
      },
      {
        name: 'Cheese slices',
        amount: '2-3 slices',
        visual: 'American, cheddar, or any cheese that melts'
      },
      {
        name: 'Butter',
        amount: '2 tablespoons',
        visual: 'About 2 thumb-sized pieces'
      }
    ],
    steps: [
      {
        id: 1,
        instruction: 'Butter one side of each bread slice',
        plainLanguage: 'Take your butter and spread it on one side of each bread slice. Make sure to cover the whole side.',
        tip: 'Soft butter spreads easier. Leave it out for a few minutes if it\'s too hard'
      },
      {
        id: 2,
        instruction: 'Place cheese on unbuttered side',
        plainLanguage: 'Flip one slice over so the buttered side is down. Put your cheese slices on the non-buttered side.',
      },
      {
        id: 3,
        instruction: 'Complete the sandwich',
        plainLanguage: 'Take the other bread slice and place it on top of the cheese, buttered side facing UP. So butter is on the outside of both sides.',
        tip: 'Butter on outside = crispy golden bread!'
      },
      {
        id: 4,
        instruction: 'Heat your pan',
        plainLanguage: 'Put a pan on the stove. Turn the heat to MEDIUM-LOW (important - not high!). Wait about 1 minute for it to warm up.',
        timer: 1,
        tip: 'Medium-low heat is key! Too hot will burn the bread before the cheese melts'
      },
      {
        id: 5,
        instruction: 'Cook the first side',
        plainLanguage: 'Place your sandwich in the pan. Let it cook without touching it. After about 3 minutes, lift a corner with your spatula to peek. If it\'s golden brown, it\'s ready to flip!',
        timer: 3,
        tip: 'Don\'t press down on the sandwich - let it cook gently'
      },
      {
        id: 6,
        instruction: 'Flip and cook other side',
        plainLanguage: 'Use your spatula to carefully flip the sandwich over. Cook this side for another 2-3 minutes until it\'s also golden brown.',
        timer: 3,
        tip: 'You can gently press down now to help the cheese melt'
      },
      {
        id: 7,
        instruction: 'Check if cheese is melted',
        plainLanguage: 'The sandwich is done when both sides are golden and you can see the cheese starting to melt out the sides a little bit.',
      },
      {
        id: 8,
        instruction: 'Let it cool and enjoy',
        plainLanguage: 'Put the sandwich on a plate. Wait about 1 minute before eating - the cheese is VERY hot inside!',
        tip: 'Cut it diagonally for the classic look and easier eating!'
      }
    ]
  },
  {
    id: '4',
    title: 'Basic Tomato Soup',
    description: 'Warm, comforting tomato soup made from scratch. Perfect with grilled cheese!',
    difficulty: 'easy',
    prepTime: 5,
    cookTime: 20,
    servings: 4,
    tags: ['soup', 'vegetarian', 'comfort-food'],
    ingredients: [
      {
        name: 'Canned crushed tomatoes',
        amount: '28 oz can (1 large can)',
        visual: 'One big can from the soup aisle'
      },
      {
        name: 'Butter',
        amount: '2 tablespoons',
        visual: 'About 2 thumb-sized pieces'
      },
      {
        name: 'Onion',
        amount: '1 medium onion, chopped',
        visual: 'One onion cut into small pieces'
      },
      {
        name: 'Garlic',
        amount: '2 cloves minced (or 1/2 tsp garlic powder)',
        visual: '2 small garlic pieces chopped tiny, or half a teaspoon of powder'
      },
      {
        name: 'Vegetable or chicken broth',
        amount: '2 cups',
        visual: 'Half a standard broth carton'
      },
      {
        name: 'Sugar',
        amount: '1 teaspoon',
        visual: 'One small spoonful'
      },
      {
        name: 'Salt and pepper',
        amount: 'To taste',
        visual: 'Start with a pinch of each, add more if needed'
      },
      {
        name: 'Heavy cream (optional)',
        amount: '1/4 cup',
        visual: 'Optional for creamy soup - about 4 tablespoons'
      }
    ],
    steps: [
      {
        id: 1,
        instruction: 'Chop the onion',
        plainLanguage: 'Cut the onion in half, peel off the papery skin. Then cut it into small pieces, about the size of your pinky fingernail.',
        tip: 'Cutting onions near running water or in the fridge for 30 min first helps reduce tears!'
      },
      {
        id: 2,
        instruction: 'Melt butter in a pot',
        plainLanguage: 'Put a medium-sized pot on the stove. Add your butter. Turn heat to medium and wait for it to melt completely.',
        timer: 1,
      },
      {
        id: 3,
        instruction: 'Cook the onion',
        plainLanguage: 'Add your chopped onion to the melted butter. Stir it around. Let it cook, stirring every minute or so, until the onion looks see-through and soft.',
        timer: 5,
        tip: 'This is called sautéing. The onion should get soft and smell sweet, not brown and crispy'
      },
      {
        id: 4,
        instruction: 'Add garlic',
        plainLanguage: 'Add your garlic (chopped or powder). Stir it in and let it cook for just 30 seconds. It will smell amazing!',
        timer: 1,
        tip: 'Don\'t let garlic turn brown - it gets bitter! Just 30 seconds is enough'
      },
      {
        id: 5,
        instruction: 'Add tomatoes, broth, and sugar',
        plainLanguage: 'Pour in your can of tomatoes, the broth, and add the teaspoon of sugar. Give it all a good stir to mix everything together.',
        tip: 'The sugar helps balance the acid in the tomatoes - it won\'t taste sweet!'
      },
      {
        id: 6,
        instruction: 'Bring to a boil then simmer',
        plainLanguage: 'Turn the heat to high until you see big bubbles (that\'s boiling). Then turn the heat down to low so you just see small bubbles (that\'s simmering). Put a lid on the pot.',
        timer: 15,
        tip: 'Simmer means gentle bubbles, not big rolling bubbles'
      },
      {
        id: 7,
        instruction: 'Blend the soup (optional)',
        plainLanguage: 'If you want smooth soup: Let it cool for 5 minutes, then carefully blend it with an immersion blender, or pour it into a regular blender (in batches). If you like it chunky, skip this step!',
        tip: 'HOT SOUP WARNING: If using a blender, never fill it more than halfway and hold the lid with a towel'
      },
      {
        id: 8,
        instruction: 'Add cream and season',
        plainLanguage: 'Stir in the cream if using. Taste the soup with a spoon (blow on it first - it\'s hot!). Add salt and pepper, a little at a time, until it tastes good to you.',
        tip: 'Start with 1/4 teaspoon of salt and a few cracks of pepper, then add more if needed'
      },
      {
        id: 9,
        instruction: 'Serve hot',
        plainLanguage: 'Ladle the soup into bowls. Enjoy it hot! Great with grilled cheese for dipping!',
        tip: 'Garnish with a swirl of cream, fresh basil, or crackers on top!'
      }
    ]
  }
];
