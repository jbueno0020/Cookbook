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
  },
  {
    id: '5',
    title: 'Classic Mac and Cheese',
    description: 'Creamy, cheesy, comfort food at its best. A crowd-pleaser that\'s surprisingly easy!',
    difficulty: 'easy',
    prepTime: 5,
    cookTime: 15,
    servings: 4,
    tags: ['pasta', 'comfort-food', 'cheese', 'kid-friendly'],
    ingredients: [
      {
        name: 'Elbow macaroni',
        amount: '8 oz (half a box)',
        visual: 'About 2 cups of dry pasta'
      },
      {
        name: 'Butter',
        amount: '2 tablespoons',
        visual: 'About 2 thumb-sized pieces'
      },
      {
        name: 'Milk',
        amount: '2 cups',
        visual: 'Fill a measuring cup twice'
      },
      {
        name: 'Shredded cheddar cheese',
        amount: '2 cups',
        visual: 'About 8 oz - two big handfuls'
      },
      {
        name: 'Salt',
        amount: '1 tablespoon (for pasta water)',
        visual: 'One big spoonful'
      }
    ],
    steps: [
      {
        id: 1,
        instruction: 'Cook the pasta',
        plainLanguage: 'Boil a large pot of salted water. Add pasta and cook for 7-8 minutes until tender. Drain in a colander.',
        timer: 8,
        tip: 'Don\'t overcook! Taste a piece after 7 minutes - it should be soft but not mushy'
      },
      {
        id: 2,
        instruction: 'Make the cheese sauce',
        plainLanguage: 'In the same pot (now empty), melt butter on medium heat. Add milk and bring to a gentle simmer. This means small bubbles, not big rolling bubbles.',
        timer: 3
      },
      {
        id: 3,
        instruction: 'Add the cheese',
        plainLanguage: 'Turn heat to low. Add cheese one handful at a time, stirring constantly until melted and smooth. Keep stirring so it doesn\'t stick!',
        tip: 'Low heat is key! High heat can make the cheese grainy'
      },
      {
        id: 4,
        instruction: 'Combine pasta and sauce',
        plainLanguage: 'Add the drained pasta back to the pot with the cheese sauce. Stir everything together until all the pasta is coated.',
      },
      {
        id: 5,
        instruction: 'Serve immediately',
        plainLanguage: 'Serve while hot and cheesy! The sauce will thicken as it sits.',
        tip: 'Add more milk if it gets too thick. You can also add cooked bacon, broccoli, or breadcrumbs on top!'
      }
    ]
  },
  {
    id: '6',
    title: 'Easy Chicken Tacos',
    description: 'Fun, flavorful tacos with tender chicken. Customize with your favorite toppings!',
    difficulty: 'easy',
    prepTime: 10,
    cookTime: 15,
    servings: 4,
    tags: ['mexican', 'dinner', 'protein', 'quick'],
    ingredients: [
      {
        name: 'Chicken breast',
        amount: '1 lb (about 2 breasts)',
        visual: 'Two chicken breast pieces from the package'
      },
      {
        name: 'Taco seasoning',
        amount: '2 tablespoons (or 1 packet)',
        visual: 'Two big spoonfuls or one packet from store'
      },
      {
        name: 'Water',
        amount: '1/4 cup',
        visual: 'Quarter of a measuring cup'
      },
      {
        name: 'Taco shells or tortillas',
        amount: '8 shells',
        visual: 'One package from the store'
      },
      {
        name: 'Toppings: lettuce, cheese, salsa, sour cream',
        amount: 'As desired',
        visual: 'Your choice! Set up a taco bar'
      }
    ],
    steps: [
      {
        id: 1,
        instruction: 'Cut chicken into small pieces',
        plainLanguage: 'On a cutting board, cut the chicken into bite-sized pieces, about the size of dice. Wash your hands and the cutting board with soap afterward!',
        tip: 'Slightly frozen chicken is easier to cut! Safety first - always wash hands after touching raw chicken'
      },
      {
        id: 2,
        instruction: 'Cook the chicken',
        plainLanguage: 'Heat a large pan on medium-high heat. Add the chicken pieces. Cook for 6-8 minutes, stirring occasionally, until no pink shows inside.',
        timer: 8,
        tip: 'Chicken is done when it\'s white all the way through - cut a piece to check!'
      },
      {
        id: 3,
        instruction: 'Add seasoning and water',
        plainLanguage: 'Sprinkle the taco seasoning over the chicken. Add water. Stir everything together.',
      },
      {
        id: 4,
        instruction: 'Simmer until thickened',
        plainLanguage: 'Turn heat to medium-low. Let it bubble gently for 3-4 minutes, stirring occasionally. The sauce will get thicker.',
        timer: 4,
        tip: 'If it gets too dry, add a splash more water'
      },
      {
        id: 5,
        instruction: 'Warm the shells',
        plainLanguage: 'While chicken simmers, warm your taco shells according to package directions. Usually 5 minutes in a 350°F oven or 30 seconds in microwave.',
        timer: 1
      },
      {
        id: 6,
        instruction: 'Assemble tacos',
        plainLanguage: 'Spoon chicken into shells. Add your favorite toppings - lettuce, cheese, salsa, sour cream. Get creative!',
        tip: 'Layer ingredients in this order for less mess: meat first, then cheese (melts!), then cold toppings'
      },
      {
        id: 7,
        instruction: 'Enjoy!',
        plainLanguage: 'Serve immediately and enjoy your homemade tacos! Way better than fast food!',
      }
    ]
  },
  {
    id: '7',
    title: 'Fluffy Pancakes',
    description: 'Classic breakfast pancakes that are soft, fluffy, and delicious!',
    difficulty: 'super-easy',
    prepTime: 5,
    cookTime: 15,
    servings: 4,
    tags: ['breakfast', 'sweet', 'weekend', 'kid-friendly'],
    ingredients: [
      {
        name: 'All-purpose flour',
        amount: '1 cup',
        visual: 'Fill a measuring cup to the top, then level it off'
      },
      {
        name: 'Sugar',
        amount: '2 tablespoons',
        visual: 'Two big spoonfuls'
      },
      {
        name: 'Baking powder',
        amount: '2 teaspoons',
        visual: 'Two small spoonfuls'
      },
      {
        name: 'Salt',
        amount: '1/2 teaspoon',
        visual: 'Half a small spoonful'
      },
      {
        name: 'Milk',
        amount: '3/4 cup',
        visual: 'A bit less than a full cup'
      },
      {
        name: 'Egg',
        amount: '1 egg',
        visual: 'One egg from the carton'
      },
      {
        name: 'Butter (melted)',
        amount: '2 tablespoons',
        visual: 'Melt in microwave for 20 seconds'
      }
    ],
    steps: [
      {
        id: 1,
        instruction: 'Mix dry ingredients',
        plainLanguage: 'In a bowl, mix together flour, sugar, baking powder, and salt with a spoon or whisk until combined.',
      },
      {
        id: 2,
        instruction: 'Mix wet ingredients',
        plainLanguage: 'In another bowl, whisk together milk, egg, and melted butter until smooth.',
      },
      {
        id: 3,
        instruction: 'Combine wet and dry',
        plainLanguage: 'Pour the wet mixture into the dry mixture. Stir gently just until combined. It\'s OK if there are small lumps - don\'t overmix!',
        tip: 'Lumpy batter = fluffy pancakes! Overmixing makes them tough'
      },
      {
        id: 4,
        instruction: 'Heat your pan or griddle',
        plainLanguage: 'Put a non-stick pan or griddle on medium heat. Wait 2-3 minutes for it to heat up. You can test by sprinkling a drop of water - it should sizzle.',
        timer: 3
      },
      {
        id: 5,
        instruction: 'Cook the pancakes',
        plainLanguage: 'Pour about 1/4 cup of batter onto the pan for each pancake. When you see bubbles on top and edges look dry (about 2-3 minutes), flip with a spatula. Cook another 1-2 minutes until golden.',
        timer: 3,
        tip: 'Only flip once! The first side should be golden brown before flipping'
      },
      {
        id: 6,
        instruction: 'Keep warm and repeat',
        plainLanguage: 'Put cooked pancakes on a plate in a warm oven (200°F) while you cook the rest. Repeat until all batter is used.',
      },
      {
        id: 7,
        instruction: 'Serve with toppings',
        plainLanguage: 'Stack your pancakes and top with butter, syrup, fresh berries, or whatever you love! Enjoy while warm!',
        tip: 'Try chocolate chips, blueberries, or banana slices in the batter!'
      }
    ]
  },
  {
    id: '8',
    title: 'Simple Fried Rice',
    description: 'A quick one-pan meal using leftover rice. Perfect for using up what\'s in your fridge!',
    difficulty: 'easy',
    prepTime: 10,
    cookTime: 10,
    servings: 3,
    tags: ['asian', 'rice', 'quick', 'leftover-friendly'],
    ingredients: [
      {
        name: 'Cooked rice (cold)',
        amount: '3 cups',
        visual: 'Leftover rice works best - about 3 coffee mugs full'
      },
      {
        name: 'Eggs',
        amount: '2 eggs',
        visual: 'Two eggs from the carton'
      },
      {
        name: 'Vegetables (frozen or fresh)',
        amount: '1 cup',
        visual: 'Carrots, peas, corn - whatever you have!'
      },
      {
        name: 'Soy sauce',
        amount: '3 tablespoons',
        visual: 'Three big spoonfuls'
      },
      {
        name: 'Oil',
        amount: '2 tablespoons',
        visual: 'Vegetable or sesame oil'
      },
      {
        name: 'Garlic (optional)',
        amount: '2 cloves minced',
        visual: '2 small pieces chopped tiny'
      }
    ],
    steps: [
      {
        id: 1,
        instruction: 'Prep your ingredients',
        plainLanguage: 'Have everything ready: rice broken up (not in clumps), eggs beaten in a bowl, veggies chopped if needed.',
        tip: 'Day-old cold rice works BEST for fried rice - fresh rice gets mushy!'
      },
      {
        id: 2,
        instruction: 'Scramble the eggs',
        plainLanguage: 'Heat 1 tablespoon oil in a large pan or wok on medium-high heat. Pour in beaten eggs. Stir quickly until just cooked (looks like scrambled eggs). Remove to a plate.',
        timer: 2
      },
      {
        id: 3,
        instruction: 'Cook the vegetables',
        plainLanguage: 'Add remaining oil to the pan. Add vegetables and garlic if using. Stir and cook for 2-3 minutes until softened.',
        timer: 3,
        tip: 'Frozen veggies work great - no need to thaw!'
      },
      {
        id: 4,
        instruction: 'Add the rice',
        plainLanguage: 'Add your cold rice to the pan. Use your spatula to break up any clumps. Stir everything together for 3-4 minutes.',
        timer: 4
      },
      {
        id: 5,
        instruction: 'Season with soy sauce',
        plainLanguage: 'Pour soy sauce over the rice. Stir well so everything gets coated. The rice should turn a light brown color.',
      },
      {
        id: 6,
        instruction: 'Add eggs back',
        plainLanguage: 'Return the scrambled eggs to the pan. Break them into smaller pieces with your spatula and mix everything together.',
      },
      {
        id: 7,
        instruction: 'Taste and serve',
        plainLanguage: 'Taste a bite - add more soy sauce if needed. Serve hot! Great as a main dish or a side.',
        tip: 'Try adding: cooked chicken, shrimp, green onions, or a fried egg on top!'
      }
    ]
  },
  {
    id: '9',
    title: 'Cheese Quesadilla',
    description: 'Crispy, cheesy, and ready in minutes. A perfect snack or quick meal!',
    difficulty: 'super-easy',
    prepTime: 2,
    cookTime: 6,
    servings: 1,
    tags: ['mexican', 'quick', 'cheese', 'snack'],
    ingredients: [
      {
        name: 'Flour tortillas',
        amount: '2 large tortillas',
        visual: 'Two flat round wraps from the package'
      },
      {
        name: 'Shredded cheese',
        amount: '1 cup',
        visual: 'A big handful - Mexican blend or cheddar work great'
      },
      {
        name: 'Butter or oil',
        amount: '1 tablespoon',
        visual: 'About thumb-sized amount'
      },
      {
        name: 'Optional: salsa, sour cream',
        amount: 'For dipping',
        visual: 'Your favorite toppings!'
      }
    ],
    steps: [
      {
        id: 1,
        instruction: 'Heat the pan',
        plainLanguage: 'Put a large pan on medium heat. Let it warm up for about 1 minute.',
        timer: 1
      },
      {
        id: 2,
        instruction: 'Add butter to pan',
        plainLanguage: 'Add butter to the pan and let it melt, coating the bottom.',
      },
      {
        id: 3,
        instruction: 'Place first tortilla',
        plainLanguage: 'Lay one tortilla flat in the pan.',
      },
      {
        id: 4,
        instruction: 'Add cheese',
        plainLanguage: 'Sprinkle cheese evenly over the tortilla. You can add extras like beans, cooked chicken, or peppers if you want!',
        tip: 'Don\'t overfill or it\'ll be messy to flip!'
      },
      {
        id: 5,
        instruction: 'Top with second tortilla',
        plainLanguage: 'Place the second tortilla on top of the cheese to make a sandwich.',
      },
      {
        id: 6,
        instruction: 'Cook first side',
        plainLanguage: 'Cook for 2-3 minutes without moving it. Lift an edge with your spatula to peek - when the bottom is golden and cheese is melting, it\'s ready to flip!',
        timer: 3,
        tip: 'Be patient! Let it get nice and crispy'
      },
      {
        id: 7,
        instruction: 'Flip carefully',
        plainLanguage: 'Use a large spatula to flip the whole quesadilla over. Cook the other side for 2-3 more minutes until golden and crispy.',
        timer: 3
      },
      {
        id: 8,
        instruction: 'Cut and serve',
        plainLanguage: 'Remove to a cutting board. Let it cool for 30 seconds, then cut into 4 triangles like a pizza. Serve with salsa and sour cream!',
        tip: 'Use a pizza cutter for easiest cutting!'
      }
    ]
  },
  {
    id: '10',
    title: 'Basic Hamburgers',
    description: 'Juicy homemade burgers that beat any fast food version. So simple!',
    difficulty: 'easy',
    prepTime: 5,
    cookTime: 10,
    servings: 4,
    tags: ['american', 'beef', 'dinner', 'grilling'],
    ingredients: [
      {
        name: 'Ground beef',
        amount: '1 lb (80/20 works best)',
        visual: 'One package from the meat section'
      },
      {
        name: 'Salt',
        amount: '1 teaspoon',
        visual: 'One small spoonful'
      },
      {
        name: 'Pepper',
        amount: '1/2 teaspoon',
        visual: 'Half a small spoonful'
      },
      {
        name: 'Hamburger buns',
        amount: '4 buns',
        visual: 'One package of buns'
      },
      {
        name: 'Toppings: lettuce, tomato, cheese, pickles, ketchup, mustard',
        amount: 'Your choice!',
        visual: 'Set up a burger bar with favorites'
      }
    ],
    steps: [
      {
        id: 1,
        instruction: 'Form the patties',
        plainLanguage: 'Divide ground beef into 4 equal portions. Gently shape each into a patty about 3/4 inch thick and slightly wider than your buns (they shrink!). Make a small indent in the center with your thumb.',
        tip: 'Don\'t overwork the meat or press too hard - gentle handling = juicier burgers!'
      },
      {
        id: 2,
        instruction: 'Season the patties',
        plainLanguage: 'Sprinkle both sides of each patty with salt and pepper.',
      },
      {
        id: 3,
        instruction: 'Heat your pan or grill',
        plainLanguage: 'Heat a large pan or grill to medium-high heat. Wait until it\'s hot - about 2 minutes.',
        timer: 2,
        tip: 'Cast iron pans work amazingly for burgers!'
      },
      {
        id: 4,
        instruction: 'Cook the burgers',
        plainLanguage: 'Place patties on the hot surface. DON\'T PRESS DOWN! Let them cook for 4 minutes without touching.',
        timer: 4,
        tip: 'Resist the urge to press! It squeezes out all the yummy juices'
      },
      {
        id: 5,
        instruction: 'Flip once',
        plainLanguage: 'Flip burgers once. Cook another 3-4 minutes for medium (pink center) or 5-6 minutes for well done (no pink).',
        timer: 4,
        tip: 'Add cheese in the last minute of cooking and cover with a lid to melt!'
      },
      {
        id: 6,
        instruction: 'Rest the burgers',
        plainLanguage: 'Remove burgers to a plate. Let them rest for 2-3 minutes. This keeps them juicy!',
        timer: 2,
        tip: 'While they rest, toast your buns face-down on the hot pan for 1 minute - game changer!'
      },
      {
        id: 7,
        instruction: 'Build your burger',
        plainLanguage: 'Place burger on bun. Add your favorite toppings. Bottom to top: sauce, burger, cheese, tomato, lettuce works great!',
        tip: 'Pro tip: Put lettuce on bottom to prevent soggy buns!'
      },
      {
        id: 8,
        instruction: 'Serve and enjoy',
        plainLanguage: 'Serve immediately with fries or chips. Way better than takeout!',
      }
    ]
  },
  {
    id: '11',
    title: 'One-Pot Spaghetti',
    description: 'Everything cooks in one pot - pasta, sauce, and all! Minimal cleanup!',
    difficulty: 'easy',
    prepTime: 5,
    cookTime: 20,
    servings: 4,
    tags: ['pasta', 'italian', 'one-pot', 'quick'],
    ingredients: [
      {
        name: 'Spaghetti',
        amount: '12 oz',
        visual: 'Three-quarters of a standard box'
      },
      {
        name: 'Canned crushed tomatoes',
        amount: '28 oz can',
        visual: 'One large can'
      },
      {
        name: 'Onion',
        amount: '1 small, sliced thin',
        visual: 'One onion cut into thin strips'
      },
      {
        name: 'Garlic',
        amount: '4 cloves, sliced',
        visual: '4 small garlic pieces, sliced thin'
      },
      {
        name: 'Water',
        amount: '4 cups',
        visual: 'Fill a measuring cup 4 times'
      },
      {
        name: 'Olive oil',
        amount: '2 tablespoons',
        visual: 'Two big spoonfuls'
      },
      {
        name: 'Salt',
        amount: '1 teaspoon',
        visual: 'One small spoonful'
      },
      {
        name: 'Dried basil or Italian seasoning',
        amount: '1 teaspoon',
        visual: 'One small spoonful'
      },
      {
        name: 'Parmesan cheese (for serving)',
        amount: 'As desired',
        visual: 'Grated or shredded'
      }
    ],
    steps: [
      {
        id: 1,
        instruction: 'Combine everything in a pot',
        plainLanguage: 'In a large, wide pot, add uncooked spaghetti (break in half if needed), crushed tomatoes, onion, garlic, water, olive oil, salt, and basil. Stir to combine.',
        tip: 'Use the widest pot you have so pasta can lay flat!'
      },
      {
        id: 2,
        instruction: 'Bring to a boil',
        plainLanguage: 'Turn heat to high and bring to a boil. You\'ll see big bubbles forming.',
        timer: 5,
      },
      {
        id: 3,
        instruction: 'Reduce to simmer',
        plainLanguage: 'Once boiling, turn heat down to medium. Let it bubble gently (simmer).',
      },
      {
        id: 4,
        instruction: 'Cook, stirring often',
        plainLanguage: 'Cook for 10-12 minutes, stirring every 2 minutes to prevent sticking. The pasta will absorb the liquid and the sauce will thicken.',
        timer: 12,
        tip: 'Keep stirring! This prevents pasta from clumping together'
      },
      {
        id: 5,
        instruction: 'Check for doneness',
        plainLanguage: 'Taste a strand of pasta. It should be tender with no crunch. Most of the liquid should be absorbed. If it\'s too watery, cook 2 more minutes.',
      },
      {
        id: 6,
        instruction: 'Let it rest',
        plainLanguage: 'Turn off heat. Let the pot sit for 2-3 minutes. The sauce will thicken even more as it cools slightly.',
        timer: 3,
        tip: 'It will look liquidy at first but will thicken as it sits!'
      },
      {
        id: 7,
        instruction: 'Serve with parmesan',
        plainLanguage: 'Divide into bowls. Top with grated parmesan cheese and enjoy! The ultimate easy dinner!',
        tip: 'Leftovers reheat great! Add a splash of water when reheating'
      }
    ]
  },
  {
    id: '12',
    title: 'Simple Baked Chicken Breast',
    description: 'Juicy, never-dry chicken breasts. A healthy protein that goes with everything!',
    difficulty: 'easy',
    prepTime: 5,
    cookTime: 25,
    servings: 4,
    tags: ['protein', 'healthy', 'meal-prep', 'dinner'],
    ingredients: [
      {
        name: 'Chicken breasts',
        amount: '4 breasts (about 1.5-2 lbs)',
        visual: 'Four pieces from the package'
      },
      {
        name: 'Olive oil',
        amount: '2 tablespoons',
        visual: 'Two big spoonfuls'
      },
      {
        name: 'Salt',
        amount: '1 teaspoon',
        visual: 'One small spoonful'
      },
      {
        name: 'Pepper',
        amount: '1/2 teaspoon',
        visual: 'Half a small spoonful'
      },
      {
        name: 'Garlic powder',
        amount: '1 teaspoon',
        visual: 'One small spoonful'
      },
      {
        name: 'Paprika (optional)',
        amount: '1/2 teaspoon',
        visual: 'Half a small spoonful - adds nice color!'
      }
    ],
    steps: [
      {
        id: 1,
        instruction: 'Preheat oven',
        plainLanguage: 'Turn your oven to 425°F. Let it heat up while you prep - this takes about 10 minutes.',
        timer: 10,
        tip: 'High heat = juicy chicken! Don\'t skip preheating'
      },
      {
        id: 2,
        instruction: 'Pat chicken dry',
        plainLanguage: 'Use paper towels to pat the chicken breasts completely dry. Dry chicken = better browning!',
        tip: 'This step matters! Wet chicken steams instead of browns'
      },
      {
        id: 3,
        instruction: 'Season the chicken',
        plainLanguage: 'Place chicken on a baking sheet. Drizzle with olive oil, then sprinkle salt, pepper, garlic powder, and paprika on both sides. Rub it in with your hands.',
        tip: 'Be generous with seasoning! It makes all the difference'
      },
      {
        id: 4,
        instruction: 'Bake the chicken',
        plainLanguage: 'Put the baking sheet in the preheated oven. Bake for 18-22 minutes depending on thickness. Chicken is done when it reaches 165°F inside (use a thermometer if you have one).',
        timer: 20,
        tip: 'Don\'t overcook! Check at 18 minutes for thinner breasts'
      },
      {
        id: 5,
        instruction: 'Rest before cutting',
        plainLanguage: 'Remove from oven. Let chicken rest on the pan for 5 minutes before cutting. This keeps all the juices inside!',
        timer: 5,
        tip: 'This is THE secret to juicy chicken - never skip the rest!'
      },
      {
        id: 6,
        instruction: 'Slice and serve',
        plainLanguage: 'Slice chicken and serve! Perfect with rice, salad, veggies, or in sandwiches. Great for meal prep too!',
        tip: 'Store extras in fridge for up to 4 days - great in salads and wraps!'
      }
    ]
  },
  {
    id: '13',
    title: 'Easy Chili',
    description: 'Hearty, warming chili that\'s perfect for cold days. Even better the next day!',
    difficulty: 'easy',
    prepTime: 10,
    cookTime: 30,
    servings: 6,
    tags: ['soup', 'comfort-food', 'beef', 'one-pot'],
    ingredients: [
      {
        name: 'Ground beef',
        amount: '1 lb',
        visual: 'One package from the meat section'
      },
      {
        name: 'Onion',
        amount: '1 medium, chopped',
        visual: 'One onion cut into small pieces'
      },
      {
        name: 'Garlic',
        amount: '3 cloves, minced (or 1 tsp powder)',
        visual: '3 small pieces chopped tiny'
      },
      {
        name: 'Canned kidney beans',
        amount: '2 cans (15 oz each), drained',
        visual: 'Two cans, pour out the liquid'
      },
      {
        name: 'Canned diced tomatoes',
        amount: '1 can (28 oz)',
        visual: 'One large can'
      },
      {
        name: 'Tomato sauce',
        amount: '1 can (15 oz)',
        visual: 'One smaller can'
      },
      {
        name: 'Chili powder',
        amount: '2 tablespoons',
        visual: 'Two big spoonfuls'
      },
      {
        name: 'Cumin',
        amount: '1 teaspoon',
        visual: 'One small spoonful'
      },
      {
        name: 'Salt',
        amount: '1 teaspoon',
        visual: 'One small spoonful'
      },
      {
        name: 'Toppings: shredded cheese, sour cream, green onions',
        amount: 'Optional',
        visual: 'Your favorites!'
      }
    ],
    steps: [
      {
        id: 1,
        instruction: 'Brown the beef',
        plainLanguage: 'In a large pot over medium-high heat, add ground beef. Break it up with a spoon and cook until no pink remains - about 6-8 minutes. The beef should be brown and crumbly.',
        timer: 8,
        tip: 'Break up the meat well - smaller pieces = better texture!'
      },
      {
        id: 2,
        instruction: 'Drain excess fat',
        plainLanguage: 'Carefully tip the pot to drain off most of the fat into a bowl or can. Be careful - it\'s hot! Leave the beef in the pot.',
        tip: 'Safety first! Use oven mitts and drain slowly'
      },
      {
        id: 3,
        instruction: 'Add onion and garlic',
        plainLanguage: 'Add chopped onion and garlic to the pot with the beef. Cook for 3-4 minutes, stirring often, until onion is soft.',
        timer: 4
      },
      {
        id: 4,
        instruction: 'Add everything else',
        plainLanguage: 'Add beans, diced tomatoes (with their juice), tomato sauce, chili powder, cumin, and salt. Stir everything together.',
      },
      {
        id: 5,
        instruction: 'Bring to a boil',
        plainLanguage: 'Turn heat to high and bring to a boil - you\'ll see big bubbles.',
        timer: 5
      },
      {
        id: 6,
        instruction: 'Simmer the chili',
        plainLanguage: 'Turn heat down to low. Let it bubble gently (simmer) for 20-30 minutes, stirring occasionally. The longer it simmers, the better it tastes!',
        timer: 25,
        tip: 'The flavors get better the longer it cooks! 30+ minutes is ideal'
      },
      {
        id: 7,
        instruction: 'Taste and adjust',
        plainLanguage: 'Taste the chili. Add more salt or chili powder if needed. Everyone likes different spice levels!',
        tip: 'Add salt little by little and taste between additions'
      },
      {
        id: 8,
        instruction: 'Serve with toppings',
        plainLanguage: 'Ladle into bowls. Top with shredded cheese, sour cream, green onions, or crushed crackers. Serve with cornbread!',
        tip: 'Even better the next day! Leftovers taste amazing!'
      }
    ]
  },
  {
    id: '14',
    title: 'Chilaquiles (Mexican Breakfast)',
    description: 'Crispy tortilla chips in flavorful red salsa topped with cheese and eggs. A beloved Mexican breakfast!',
    difficulty: 'easy',
    prepTime: 10,
    cookTime: 15,
    servings: 4,
    tags: ['mexican', 'breakfast', 'authentic', 'vegetarian-option'],
    ingredients: [
      {
        name: 'Tortilla chips',
        amount: '6 cups',
        visual: 'About half a large bag of chips'
      },
      {
        name: 'Red salsa or enchilada sauce',
        amount: '2 cups',
        visual: 'Store-bought is fine! About 16 oz jar'
      },
      {
        name: 'Eggs',
        amount: '4 eggs',
        visual: 'One per person'
      },
      {
        name: 'Queso fresco or cotija cheese',
        amount: '1/2 cup crumbled',
        visual: 'Feta cheese works too!'
      },
      {
        name: 'Mexican crema or sour cream',
        amount: '1/4 cup',
        visual: 'For drizzling on top'
      },
      {
        name: 'Cilantro (optional)',
        amount: 'Handful chopped',
        visual: 'Fresh green herb - skip if you don\'t like it'
      },
      {
        name: 'Oil for frying eggs',
        amount: '2 tablespoons',
        visual: 'Two big spoonfuls'
      }
    ],
    steps: [
      {
        id: 1,
        instruction: 'Heat the salsa',
        plainLanguage: 'Pour salsa into a large pan and warm it over medium heat until it starts bubbling gently. This takes about 3-4 minutes.',
        timer: 4
      },
      {
        id: 2,
        instruction: 'Add the tortilla chips',
        plainLanguage: 'Add tortilla chips to the warm salsa. Stir gently to coat all the chips. They should get soft but not mushy. Cook for 2-3 minutes.',
        timer: 3,
        tip: 'Don\'t let them sit too long or they\'ll get soggy! You want them soft on outside, still a bit crispy inside'
      },
      {
        id: 3,
        instruction: 'Fry the eggs',
        plainLanguage: 'While chips simmer, heat oil in another pan on medium heat. Crack eggs in and fry them sunny-side up (yolk on top) for 3-4 minutes.',
        timer: 4,
        tip: 'The runny yolk mixes with the chilaquiles - it\'s delicious!'
      },
      {
        id: 4,
        instruction: 'Plate the chilaquiles',
        plainLanguage: 'Divide the chip mixture onto plates. The chips should be coated in sauce and slightly softened.',
      },
      {
        id: 5,
        instruction: 'Add toppings',
        plainLanguage: 'Top each plate with a fried egg, crumbled cheese, a drizzle of crema, and fresh cilantro if using.',
        tip: 'Also great with avocado slices, black beans, or jalapeños!'
      },
      {
        id: 6,
        instruction: 'Serve immediately',
        plainLanguage: 'Eat right away while the chips still have some texture. Break the egg yolk and let it mix in - so good!',
        tip: 'Traditional Mexican breakfast! Often eaten with refried beans on the side'
      }
    ]
  },
  {
    id: '15',
    title: 'Easy Indian Chicken Curry',
    description: 'Aromatic, flavorful curry with tender chicken in a rich tomato sauce. Authentic Indian comfort food!',
    difficulty: 'intermediate',
    prepTime: 15,
    cookTime: 30,
    servings: 4,
    tags: ['indian', 'curry', 'dinner', 'authentic'],
    ingredients: [
      {
        name: 'Chicken thighs or breast',
        amount: '1.5 lbs, cut into pieces',
        visual: 'About 4-5 pieces, cut into chunks'
      },
      {
        name: 'Onion',
        amount: '1 large, diced',
        visual: 'One onion cut into small pieces'
      },
      {
        name: 'Garlic',
        amount: '4 cloves, minced',
        visual: '4 small pieces chopped tiny'
      },
      {
        name: 'Ginger',
        amount: '1 inch piece, minced',
        visual: 'Small piece of fresh ginger, chopped fine'
      },
      {
        name: 'Canned diced tomatoes',
        amount: '1 can (14 oz)',
        visual: 'One standard can'
      },
      {
        name: 'Curry powder',
        amount: '2 tablespoons',
        visual: 'Two big spoonfuls'
      },
      {
        name: 'Garam masala',
        amount: '1 teaspoon',
        visual: 'One small spoonful - find in spice aisle'
      },
      {
        name: 'Coconut milk or heavy cream',
        amount: '1 cup',
        visual: 'One can or cup from carton'
      },
      {
        name: 'Oil',
        amount: '2 tablespoons',
        visual: 'Two big spoonfuls'
      },
      {
        name: 'Salt',
        amount: '1 teaspoon',
        visual: 'One small spoonful'
      },
      {
        name: 'Cilantro for garnish',
        amount: 'Optional',
        visual: 'Fresh green herb'
      }
    ],
    steps: [
      {
        id: 1,
        instruction: 'Brown the chicken',
        plainLanguage: 'Heat oil in a large pot on medium-high. Add chicken pieces and cook for 5-6 minutes until browned on outside. They don\'t need to be cooked through. Remove to a plate.',
        timer: 6,
        tip: 'Browning adds flavor! Don\'t skip this step'
      },
      {
        id: 2,
        instruction: 'Cook the aromatics',
        plainLanguage: 'In the same pot, add onion. Cook for 5 minutes until soft. Add garlic and ginger, cook 1 more minute until fragrant.',
        timer: 6,
        tip: 'Ginger and garlic should smell amazing when ready!'
      },
      {
        id: 3,
        instruction: 'Add spices',
        plainLanguage: 'Add curry powder and garam masala. Stir for 30 seconds. The spices will become very fragrant.',
        tip: 'Cooking spices in oil releases their flavors - this is called "blooming"'
      },
      {
        id: 4,
        instruction: 'Add tomatoes',
        plainLanguage: 'Pour in diced tomatoes with their juice. Stir and let it simmer for 5 minutes until it thickens a bit.',
        timer: 5
      },
      {
        id: 5,
        instruction: 'Add chicken back',
        plainLanguage: 'Return chicken to the pot with any juices. Stir to coat in sauce. Bring to a gentle bubble.',
      },
      {
        id: 6,
        instruction: 'Simmer until cooked',
        plainLanguage: 'Turn heat to medium-low. Cover and let simmer for 15-20 minutes until chicken is cooked through and tender.',
        timer: 18,
        tip: 'Chicken is done when it reaches 165°F inside and cuts easily'
      },
      {
        id: 7,
        instruction: 'Add cream',
        plainLanguage: 'Stir in coconut milk or cream. Let it heat through for 2 minutes. Taste and add salt if needed.',
        timer: 2,
        tip: 'Coconut milk makes it dairy-free! Cream makes it richer'
      },
      {
        id: 8,
        instruction: 'Serve with rice',
        plainLanguage: 'Serve hot over basmati rice or with naan bread. Garnish with fresh cilantro. Enjoy your homemade curry!',
        tip: 'Curry tastes even better the next day as flavors develop!'
      }
    ]
  },
  {
    id: '16',
    title: 'Easy Pad Thai',
    description: 'Sweet, tangy Thai noodles with vegetables and peanuts. Restaurant favorite made at home!',
    difficulty: 'intermediate',
    prepTime: 15,
    cookTime: 15,
    servings: 3,
    tags: ['thai', 'noodles', 'asian', 'quick'],
    ingredients: [
      {
        name: 'Rice noodles',
        amount: '8 oz',
        visual: 'One package of flat rice noodles'
      },
      {
        name: 'Eggs',
        amount: '2 eggs',
        visual: 'Two eggs from the carton'
      },
      {
        name: 'Shrimp or chicken (optional)',
        amount: '8 oz',
        visual: 'Half a pound - can skip for vegetarian'
      },
      {
        name: 'Bean sprouts',
        amount: '1 cup',
        visual: 'Fresh sprouts from produce section'
      },
      {
        name: 'Green onions',
        amount: '3 stalks, chopped',
        visual: 'The long green onions, sliced'
      },
      {
        name: 'Garlic',
        amount: '3 cloves, minced',
        visual: '3 small pieces chopped tiny'
      },
      {
        name: 'Tamarind paste or lime juice',
        amount: '2 tablespoons',
        visual: 'Find in Asian aisle or use lime'
      },
      {
        name: 'Fish sauce',
        amount: '3 tablespoons',
        visual: 'In Asian section - smells strong but tastes great!'
      },
      {
        name: 'Brown sugar',
        amount: '2 tablespoons',
        visual: 'Two big spoonfuls'
      },
      {
        name: 'Crushed peanuts',
        amount: '1/4 cup',
        visual: 'For topping'
      },
      {
        name: 'Oil',
        amount: '3 tablespoons',
        visual: 'Three big spoonfuls'
      },
      {
        name: 'Lime wedges',
        amount: 'For serving',
        visual: 'Cut a lime into wedges'
      }
    ],
    steps: [
      {
        id: 1,
        instruction: 'Soak the noodles',
        plainLanguage: 'Put rice noodles in a bowl of warm water. Let them soak for 20-30 minutes until soft and bendable. Drain before using.',
        timer: 25,
        tip: 'Do this first! While noodles soak, you can prep everything else'
      },
      {
        id: 2,
        instruction: 'Make the sauce',
        plainLanguage: 'In a small bowl, mix tamarind paste (or lime juice), fish sauce, and brown sugar. Stir until sugar dissolves. Set aside.',
        tip: 'This is your Pad Thai sauce! Sweet, salty, and tangy'
      },
      {
        id: 3,
        instruction: 'Cook protein if using',
        plainLanguage: 'Heat 1 tablespoon oil in a large pan or wok on high heat. Add shrimp or chicken. Cook 3-4 minutes until done. Remove to a plate.',
        timer: 4,
        tip: 'High heat is key for authentic stir-fry flavor!'
      },
      {
        id: 4,
        instruction: 'Scramble the eggs',
        plainLanguage: 'Add another tablespoon of oil to pan. Crack in eggs and scramble quickly for 1 minute. Push to side of pan.',
        timer: 1
      },
      {
        id: 5,
        instruction: 'Stir-fry noodles',
        plainLanguage: 'Add remaining oil and garlic. After 30 seconds, add drained noodles. Stir-fry for 2-3 minutes.',
        timer: 3,
        tip: 'Keep everything moving! Stir constantly so nothing burns'
      },
      {
        id: 6,
        instruction: 'Add sauce',
        plainLanguage: 'Pour sauce over noodles. Toss everything together for 2 minutes. The noodles should turn golden and get a bit sticky.',
        timer: 2
      },
      {
        id: 7,
        instruction: 'Add vegetables and protein',
        plainLanguage: 'Add bean sprouts, green onions, and cooked protein. Toss for 1 minute until everything is hot.',
        timer: 1,
        tip: 'Don\'t overcook the bean sprouts - they should stay crunchy!'
      },
      {
        id: 8,
        instruction: 'Serve immediately',
        plainLanguage: 'Divide onto plates. Top with crushed peanuts and lime wedges. Squeeze lime over top before eating!',
        tip: 'True restaurant-style Pad Thai! Also great with sriracha on the side'
      }
    ]
  },
  {
    id: '17',
    title: 'Falafel (Middle Eastern)',
    description: 'Crispy on the outside, fluffy inside chickpea fritters. A Middle Eastern classic!',
    difficulty: 'intermediate',
    prepTime: 20,
    cookTime: 15,
    servings: 4,
    tags: ['middle-eastern', 'vegetarian', 'vegan', 'authentic'],
    ingredients: [
      {
        name: 'Dried chickpeas',
        amount: '1.5 cups',
        visual: 'Must be DRIED, not canned! Soak overnight'
      },
      {
        name: 'Onion',
        amount: '1 small, roughly chopped',
        visual: 'One small onion in chunks'
      },
      {
        name: 'Garlic',
        amount: '4 cloves',
        visual: '4 small garlic pieces'
      },
      {
        name: 'Fresh parsley',
        amount: '1 cup packed',
        visual: 'Big handful of fresh parsley'
      },
      {
        name: 'Fresh cilantro',
        amount: '1/2 cup',
        visual: 'Small handful - can skip if you don\'t like it'
      },
      {
        name: 'Cumin',
        amount: '1 teaspoon',
        visual: 'One small spoonful'
      },
      {
        name: 'Coriander',
        amount: '1 teaspoon',
        visual: 'One small spoonful'
      },
      {
        name: 'Baking powder',
        amount: '1/2 teaspoon',
        visual: 'Half a small spoonful'
      },
      {
        name: 'Salt',
        amount: '1 teaspoon',
        visual: 'One small spoonful'
      },
      {
        name: 'Flour',
        amount: '2-4 tablespoons',
        visual: 'To help bind if needed'
      },
      {
        name: 'Oil for frying',
        amount: '2 cups',
        visual: 'Enough to cover halfway up the falafels'
      }
    ],
    steps: [
      {
        id: 1,
        instruction: 'Soak chickpeas overnight',
        plainLanguage: 'Put dried chickpeas in a bowl and cover with lots of water. Let sit overnight (at least 12 hours). They will double in size! Drain before using.',
        tip: 'This is essential! Canned chickpeas won\'t work - too wet and they\'ll fall apart'
      },
      {
        id: 2,
        instruction: 'Blend the mixture',
        plainLanguage: 'Put soaked chickpeas, onion, garlic, parsley, cilantro, cumin, coriander, salt, and baking powder in a food processor. Pulse until it looks like coarse breadcrumbs - not smooth!',
        tip: 'Don\'t over-blend! You want texture, not hummus. Should hold together when squeezed'
      },
      {
        id: 3,
        instruction: 'Add flour if needed',
        plainLanguage: 'If the mixture is too wet, add flour 1 tablespoon at a time. Form a small ball - it should hold together without crumbling.',
        tip: 'The mix should be moldable but not sticky'
      },
      {
        id: 4,
        instruction: 'Refrigerate the dough',
        plainLanguage: 'Cover the bowl and put it in the fridge for at least 1 hour. This helps them hold together when frying.',
        timer: 60,
        tip: 'Can refrigerate overnight! Make ahead for easy cooking'
      },
      {
        id: 5,
        instruction: 'Form the falafels',
        plainLanguage: 'Using wet hands (keeps from sticking), form mixture into balls or patties about the size of a golf ball or slightly flatter.',
        tip: 'Wet hands are the secret! Re-wet between each falafel'
      },
      {
        id: 6,
        instruction: 'Heat the oil',
        plainLanguage: 'Pour oil into a deep pan until it\'s about 2 inches deep. Heat to 350°F on medium-high. Test with a small piece - it should bubble vigorously.',
        timer: 5,
        tip: 'Too hot = burnt outside, raw inside. Too cool = greasy. Medium-high heat is right!'
      },
      {
        id: 7,
        instruction: 'Fry the falafels',
        plainLanguage: 'Carefully add falafels to hot oil, don\'t crowd the pan. Fry 3-4 minutes until deep golden brown, flipping once halfway. Remove with a slotted spoon.',
        timer: 4,
        tip: 'Fry in batches! Crowding the pan lowers oil temperature'
      },
      {
        id: 8,
        instruction: 'Drain and serve',
        plainLanguage: 'Drain on paper towels. Serve warm in pita bread with tahini sauce, lettuce, tomatoes, and cucumbers!',
        tip: 'Amazing in pita or over salad! Tahini sauce is traditional - mix tahini with lemon juice and water'
      }
    ]
  },
  {
    id: '18',
    title: 'Shakshuka (Middle Eastern Eggs)',
    description: 'Eggs poached in spiced tomato sauce. A flavorful Middle Eastern breakfast or dinner!',
    difficulty: 'easy',
    prepTime: 10,
    cookTime: 25,
    servings: 4,
    tags: ['middle-eastern', 'breakfast', 'vegetarian', 'one-pan'],
    ingredients: [
      {
        name: 'Olive oil',
        amount: '2 tablespoons',
        visual: 'Two big spoonfuls'
      },
      {
        name: 'Onion',
        amount: '1 medium, diced',
        visual: 'One onion cut into small pieces'
      },
      {
        name: 'Bell pepper',
        amount: '1 red pepper, diced',
        visual: 'One red pepper cut into chunks'
      },
      {
        name: 'Garlic',
        amount: '4 cloves, minced',
        visual: '4 small pieces chopped tiny'
      },
      {
        name: 'Canned diced tomatoes',
        amount: '28 oz can',
        visual: 'One large can'
      },
      {
        name: 'Tomato paste',
        amount: '2 tablespoons',
        visual: 'Two big spoonfuls'
      },
      {
        name: 'Cumin',
        amount: '1 teaspoon',
        visual: 'One small spoonful'
      },
      {
        name: 'Paprika',
        amount: '1 teaspoon',
        visual: 'One small spoonful'
      },
      {
        name: 'Cayenne pepper (optional)',
        amount: '1/4 teaspoon',
        visual: 'Tiny pinch if you like spice'
      },
      {
        name: 'Eggs',
        amount: '6 eggs',
        visual: 'Six eggs from the carton'
      },
      {
        name: 'Feta cheese',
        amount: '1/2 cup crumbled',
        visual: 'Optional but delicious!'
      },
      {
        name: 'Fresh parsley or cilantro',
        amount: 'For garnish',
        visual: 'Handful chopped'
      },
      {
        name: 'Salt and pepper',
        amount: 'To taste',
        visual: 'Season as you like'
      }
    ],
    steps: [
      {
        id: 1,
        instruction: 'Sauté the vegetables',
        plainLanguage: 'Heat olive oil in a large skillet over medium heat. Add onion and bell pepper. Cook for 5-7 minutes until soft.',
        timer: 6,
        tip: 'A skillet with a lid works best for this dish!'
      },
      {
        id: 2,
        instruction: 'Add garlic and spices',
        plainLanguage: 'Add garlic, cumin, paprika, and cayenne if using. Stir for 1 minute until fragrant.',
        timer: 1,
        tip: 'The spices smell amazing when they hit the pan!'
      },
      {
        id: 3,
        instruction: 'Add tomatoes',
        plainLanguage: 'Pour in diced tomatoes with their juice and tomato paste. Stir well. Bring to a gentle bubble.',
        tip: 'Tomato paste adds rich, concentrated tomato flavor'
      },
      {
        id: 4,
        instruction: 'Simmer the sauce',
        plainLanguage: 'Turn heat to low. Let the sauce simmer for 10-15 minutes until it thickens. Stir occasionally. Season with salt and pepper.',
        timer: 12,
        tip: 'The sauce should be thick, not watery - this helps hold the eggs'
      },
      {
        id: 5,
        instruction: 'Make wells for eggs',
        plainLanguage: 'Using a spoon, make 6 small wells (holes) in the sauce. These are spots where the eggs will cook.',
        tip: 'Space them out evenly so each person gets an egg!'
      },
      {
        id: 6,
        instruction: 'Add the eggs',
        plainLanguage: 'Crack one egg into each well. Try to keep the yolks whole. Sprinkle feta cheese around the eggs if using.',
      },
      {
        id: 7,
        instruction: 'Cover and cook',
        plainLanguage: 'Cover the pan with a lid. Cook for 5-8 minutes until egg whites are set but yolks are still runny. Check at 5 minutes!',
        timer: 7,
        tip: 'Everyone has different preferences - 5 minutes for runny, 8 for more set'
      },
      {
        id: 8,
        instruction: 'Garnish and serve',
        plainLanguage: 'Sprinkle with fresh parsley or cilantro. Serve hot with crusty bread or pita for dipping in the sauce and yolk!',
        tip: 'The bread is essential - use it to scoop up sauce and runny egg yolk. So good!'
      }
    ]
  },
  {
    id: '19',
    title: 'Korean Japchae (Glass Noodles)',
    description: 'Sweet and savory Korean noodles with colorful vegetables. A celebration dish!',
    difficulty: 'intermediate',
    prepTime: 20,
    cookTime: 20,
    servings: 4,
    tags: ['korean', 'noodles', 'asian', 'authentic'],
    ingredients: [
      {
        name: 'Sweet potato glass noodles',
        amount: '8 oz',
        visual: 'Korean dangmyeon - find in Asian section'
      },
      {
        name: 'Beef or mushrooms',
        amount: '8 oz thinly sliced',
        visual: 'Half a pound - or use mushrooms for vegetarian'
      },
      {
        name: 'Spinach',
        amount: '2 cups',
        visual: 'Fresh spinach leaves'
      },
      {
        name: 'Carrot',
        amount: '1 large, julienned',
        visual: 'One carrot cut into thin matchsticks'
      },
      {
        name: 'Bell pepper',
        amount: '1 red pepper, sliced thin',
        visual: 'One pepper cut into strips'
      },
      {
        name: 'Onion',
        amount: '1 small, sliced thin',
        visual: 'One onion in thin strips'
      },
      {
        name: 'Green onions',
        amount: '3 stalks, cut in 2-inch pieces',
        visual: 'The long green onions, chopped'
      },
      {
        name: 'Garlic',
        amount: '4 cloves, minced',
        visual: '4 small pieces chopped tiny'
      },
      {
        name: 'Soy sauce',
        amount: '5 tablespoons',
        visual: 'Five big spoonfuls'
      },
      {
        name: 'Sugar',
        amount: '2 tablespoons',
        visual: 'Two big spoonfuls'
      },
      {
        name: 'Sesame oil',
        amount: '2 tablespoons',
        visual: 'Find in Asian section - very flavorful!'
      },
      {
        name: 'Sesame seeds',
        amount: '2 tablespoons',
        visual: 'For garnish'
      },
      {
        name: 'Vegetable oil',
        amount: '3 tablespoons',
        visual: 'For cooking'
      }
    ],
    steps: [
      {
        id: 1,
        instruction: 'Cook the noodles',
        plainLanguage: 'Boil a large pot of water. Add glass noodles and cook for 6-7 minutes until soft and translucent. Drain and rinse with cold water. Cut with scissors into shorter lengths.',
        timer: 7,
        tip: 'Glass noodles turn clear when done! Cutting makes them easier to eat'
      },
      {
        id: 2,
        instruction: 'Make the sauce',
        plainLanguage: 'In a small bowl, mix soy sauce, sugar, and 1 tablespoon sesame oil. Stir until sugar dissolves. Set aside.',
        tip: 'This sauce flavors everything! Sweet and savory balance'
      },
      {
        id: 3,
        instruction: 'Cook the vegetables separately',
        plainLanguage: 'Heat 1 teaspoon oil in a large pan. Cook spinach for 1 minute until wilted, remove. Repeat with carrot (2 min), bell pepper (2 min), and onion (3 min). Keep vegetables separate on a plate.',
        tip: 'Cooking separately keeps their individual colors bright and beautiful!'
      },
      {
        id: 4,
        instruction: 'Cook the protein',
        plainLanguage: 'In the same pan, add 1 tablespoon oil. Cook beef or mushrooms with garlic for 3-4 minutes until done. Set aside.',
        timer: 4
      },
      {
        id: 5,
        instruction: 'Combine everything',
        plainLanguage: 'In the large pan, add noodles, all cooked vegetables, protein, and the sauce. Add green onions. Toss everything together over medium heat for 2-3 minutes.',
        timer: 3,
        tip: 'Use tongs or two utensils to toss - chopsticks work great!'
      },
      {
        id: 6,
        instruction: 'Final seasoning',
        plainLanguage: 'Drizzle remaining sesame oil over noodles. Toss again. Taste - add more soy sauce if needed.',
        tip: 'Sesame oil at the end adds amazing nutty flavor!'
      },
      {
        id: 7,
        instruction: 'Garnish and serve',
        plainLanguage: 'Transfer to a serving plate. Sprinkle sesame seeds on top. Can be served warm or at room temperature!',
        tip: 'This is a traditional Korean celebration dish! Often served at parties and holidays'
      }
    ]
  },
  {
    id: '20',
    title: 'Honey Garlic Chicken',
    description: 'Sweet and savory chicken with an addictively delicious honey garlic sauce. Ready in 15 minutes!',
    difficulty: 'super-easy',
    prepTime: 5,
    cookTime: 10,
    servings: 4,
    tags: ['chicken', 'quick', 'asian-inspired', 'dinner'],
    ingredients: [
      {
        name: 'Chicken breast',
        amount: '1 lb, cut into bite-sized pieces',
        visual: 'About 2 breasts cut into chunks'
      },
      {
        name: 'Honey',
        amount: '1/4 cup',
        visual: 'Quarter of a measuring cup'
      },
      {
        name: 'Soy sauce',
        amount: '3 tablespoons',
        visual: 'Three big spoonfuls'
      },
      {
        name: 'Garlic',
        amount: '4 cloves, minced',
        visual: '4 small pieces chopped tiny'
      },
      {
        name: 'Olive oil',
        amount: '2 tablespoons',
        visual: 'Two big spoonfuls'
      },
      {
        name: 'Cornstarch',
        amount: '1 tablespoon',
        visual: 'One big spoonful - for thickening'
      },
      {
        name: 'Water',
        amount: '2 tablespoons',
        visual: 'Two big spoonfuls'
      }
    ],
    steps: [
      {
        id: 1,
        instruction: 'Mix the sauce',
        plainLanguage: 'In a small bowl, mix honey, soy sauce, and garlic together. Set aside.',
        tip: 'This sauce is the star! Sweet and savory perfection'
      },
      {
        id: 2,
        instruction: 'Cook the chicken',
        plainLanguage: 'Heat oil in a large pan over medium-high heat. Add chicken pieces. Cook for 5-6 minutes, stirring occasionally, until golden brown and cooked through.',
        timer: 6,
        tip: 'Make sure chicken is no longer pink inside'
      },
      {
        id: 3,
        instruction: 'Add the sauce',
        plainLanguage: 'Pour the honey garlic sauce over the chicken. Stir to coat all pieces. Let it bubble for 1-2 minutes.',
        timer: 2
      },
      {
        id: 4,
        instruction: 'Thicken the sauce',
        plainLanguage: 'Mix cornstarch with water to make a slurry. Pour into the pan and stir for 1 minute until sauce thickens and becomes glossy.',
        timer: 1,
        tip: 'The sauce should coat the back of a spoon when ready'
      },
      {
        id: 5,
        instruction: 'Serve',
        plainLanguage: 'Serve hot over rice or noodles. Garnish with sesame seeds or green onions if desired!',
        tip: 'This sauce is so good you\'ll want to lick the plate!'
      }
    ]
  },
  {
    id: '21',
    title: 'Broccoli Cheddar Soup',
    description: 'Thick, creamy, and loaded with cheese and broccoli. Ultimate comfort food!',
    difficulty: 'easy',
    prepTime: 10,
    cookTime: 25,
    servings: 6,
    tags: ['soup', 'vegetarian', 'comfort-food', 'cheese'],
    ingredients: [
      {
        name: 'Broccoli',
        amount: '4 cups chopped (about 2 heads)',
        visual: 'Two heads of broccoli cut into small pieces'
      },
      {
        name: 'Butter',
        amount: '4 tablespoons',
        visual: 'Half a stick'
      },
      {
        name: 'Onion',
        amount: '1 small, diced',
        visual: 'One onion cut into small pieces'
      },
      {
        name: 'Garlic',
        amount: '2 cloves, minced',
        visual: '2 small pieces chopped tiny'
      },
      {
        name: 'Flour',
        amount: '1/4 cup',
        visual: 'Quarter cup for thickening'
      },
      {
        name: 'Milk',
        amount: '2 cups',
        visual: 'Two full measuring cups'
      },
      {
        name: 'Chicken or vegetable broth',
        amount: '2 cups',
        visual: 'Half a standard carton'
      },
      {
        name: 'Sharp cheddar cheese',
        amount: '2 cups shredded',
        visual: 'About 8 oz - two big handfuls'
      },
      {
        name: 'Salt and pepper',
        amount: 'To taste',
        visual: 'Season to your liking'
      }
    ],
    steps: [
      {
        id: 1,
        instruction: 'Cook broccoli',
        plainLanguage: 'Bring a pot of water to boil. Add broccoli and cook for 5 minutes until tender. Drain and set aside.',
        timer: 5,
        tip: 'Don\'t overcook! Broccoli should be bright green'
      },
      {
        id: 2,
        instruction: 'Make the roux',
        plainLanguage: 'In a large pot, melt butter over medium heat. Add onion and garlic, cook for 3 minutes. Stir in flour and cook for 1 minute, stirring constantly.',
        timer: 4,
        tip: 'This flour mixture thickens the soup - keep stirring so it doesn\'t burn!'
      },
      {
        id: 3,
        instruction: 'Add liquids',
        plainLanguage: 'Slowly pour in milk and broth while stirring. Keep stirring to prevent lumps. Bring to a gentle bubble.',
        timer: 5,
        tip: 'Pour slowly and stir constantly for smooth soup'
      },
      {
        id: 4,
        instruction: 'Simmer',
        plainLanguage: 'Turn heat to low. Let it simmer for 10 minutes, stirring occasionally. It will start to thicken.',
        timer: 10
      },
      {
        id: 5,
        instruction: 'Add cheese and broccoli',
        plainLanguage: 'Add cooked broccoli and shredded cheese. Stir until cheese is completely melted. Season with salt and pepper.',
        tip: 'Add cheese gradually for smoothest melting'
      },
      {
        id: 6,
        instruction: 'Serve hot',
        plainLanguage: 'Ladle into bowls. Serve with crusty bread for dipping!',
        tip: 'Top with extra shredded cheese and crispy bacon bits!'
      }
    ]
  },
  {
    id: '22',
    title: 'Spaghetti Carbonara',
    description: 'Creamy Italian pasta with bacon and eggs. A Roman classic with just a few ingredients!',
    difficulty: 'intermediate',
    prepTime: 5,
    cookTime: 15,
    servings: 4,
    tags: ['italian', 'pasta', 'authentic', 'quick'],
    ingredients: [
      {
        name: 'Spaghetti',
        amount: '1 lb',
        visual: 'One box of spaghetti'
      },
      {
        name: 'Bacon or pancetta',
        amount: '8 oz, diced',
        visual: 'About 8 strips of bacon, chopped'
      },
      {
        name: 'Eggs',
        amount: '4 large eggs',
        visual: 'Four eggs from the carton'
      },
      {
        name: 'Parmesan cheese',
        amount: '1 cup grated',
        visual: 'Freshly grated is best!'
      },
      {
        name: 'Black pepper',
        amount: '1 teaspoon',
        visual: 'Lots of freshly cracked pepper'
      },
      {
        name: 'Salt',
        amount: 'For pasta water',
        visual: 'Big spoonful for the water'
      }
    ],
    steps: [
      {
        id: 1,
        instruction: 'Cook the pasta',
        plainLanguage: 'Boil salted water and cook spaghetti according to package directions. Before draining, save 1 cup of pasta water!',
        timer: 10,
        tip: 'IMPORTANT: Save that pasta water! You\'ll need it for the sauce'
      },
      {
        id: 2,
        instruction: 'Cook the bacon',
        plainLanguage: 'While pasta cooks, cook bacon in a large pan over medium heat until crispy, about 5-6 minutes. Turn off heat.',
        timer: 6
      },
      {
        id: 3,
        instruction: 'Mix eggs and cheese',
        plainLanguage: 'In a bowl, whisk together eggs, parmesan, and lots of black pepper. Mix well.',
        tip: 'This mixture will create the creamy sauce - no cream needed!'
      },
      {
        id: 4,
        instruction: 'Combine everything',
        plainLanguage: 'Add drained hot pasta to the pan with bacon. Remove pan from heat! Add the egg mixture and toss quickly for 1 minute. Add pasta water a little at a time until creamy.',
        tip: 'OFF THE HEAT! Or eggs will scramble. The hot pasta cooks the eggs gently'
      },
      {
        id: 5,
        instruction: 'Serve immediately',
        plainLanguage: 'Serve right away with extra parmesan and black pepper on top. This doesn\'t reheat well - eat it fresh!',
        tip: 'The sauce should be creamy, not clumpy. If too thick, add more pasta water'
      }
    ]
  },
  {
    id: '23',
    title: 'Beef Stew',
    description: 'Hearty, tender beef with vegetables in rich gravy. Perfect for cold days!',
    difficulty: 'intermediate',
    prepTime: 20,
    cookTime: 120,
    servings: 6,
    tags: ['beef', 'stew', 'comfort-food', 'slow-cooked'],
    ingredients: [
      {
        name: 'Beef chuck',
        amount: '2 lbs, cut into 1-inch cubes',
        visual: 'Stew meat from the store'
      },
      {
        name: 'Potatoes',
        amount: '4 medium, cubed',
        visual: 'Four potatoes cut into chunks'
      },
      {
        name: 'Carrots',
        amount: '4 large, sliced',
        visual: 'Four carrots cut into rounds'
      },
      {
        name: 'Onion',
        amount: '1 large, chopped',
        visual: 'One onion in pieces'
      },
      {
        name: 'Garlic',
        amount: '4 cloves, minced',
        visual: '4 small pieces chopped tiny'
      },
      {
        name: 'Beef broth',
        amount: '4 cups',
        visual: 'One full carton'
      },
      {
        name: 'Tomato paste',
        amount: '2 tablespoons',
        visual: 'Two big spoonfuls'
      },
      {
        name: 'Flour',
        amount: '3 tablespoons',
        visual: 'For coating the beef'
      },
      {
        name: 'Olive oil',
        amount: '3 tablespoons',
        visual: 'Three big spoonfuls'
      },
      {
        name: 'Bay leaves',
        amount: '2 leaves',
        visual: 'Dried bay leaves'
      },
      {
        name: 'Thyme',
        amount: '1 teaspoon dried',
        visual: 'One small spoonful'
      },
      {
        name: 'Salt and pepper',
        amount: 'To taste',
        visual: 'Season well!'
      }
    ],
    steps: [
      {
        id: 1,
        instruction: 'Coat beef with flour',
        plainLanguage: 'Pat beef dry with paper towels. Put flour, salt, and pepper in a bowl. Toss beef cubes in the flour mixture until coated.',
        tip: 'Dry beef browns better! The flour helps make the gravy thick'
      },
      {
        id: 2,
        instruction: 'Brown the beef',
        plainLanguage: 'Heat oil in a large pot over medium-high heat. Add beef in batches (don\'t crowd!). Brown on all sides, about 6-8 minutes total. Remove to a plate.',
        timer: 8,
        tip: 'Don\'t skip browning! This adds SO much flavor'
      },
      {
        id: 3,
        instruction: 'Cook vegetables',
        plainLanguage: 'In the same pot, add onion and garlic. Cook for 3 minutes, scraping up the brown bits from the bottom.',
        timer: 3,
        tip: 'Those brown bits are pure flavor!'
      },
      {
        id: 4,
        instruction: 'Add liquids and beef back',
        plainLanguage: 'Stir in tomato paste. Pour in beef broth. Add beef back to the pot with bay leaves and thyme. Bring to a boil.',
        timer: 5
      },
      {
        id: 5,
        instruction: 'Simmer',
        plainLanguage: 'Turn heat to low. Cover and let simmer for 1.5 hours, stirring occasionally. The beef should become very tender.',
        timer: 90,
        tip: 'Low and slow is the secret! Don\'t rush this step'
      },
      {
        id: 6,
        instruction: 'Add vegetables',
        plainLanguage: 'Add potatoes and carrots. Simmer uncovered for another 30 minutes until vegetables are tender.',
        timer: 30
      },
      {
        id: 7,
        instruction: 'Season and serve',
        plainLanguage: 'Remove bay leaves. Taste and add more salt and pepper if needed. Serve hot with crusty bread!',
        tip: 'Even better the next day! The flavors develop more'
      }
    ]
  },
  {
    id: '24',
    title: 'Chocolate Chip Cookies',
    description: 'Classic chewy cookies with melty chocolate chips. The best homemade cookies!',
    difficulty: 'easy',
    prepTime: 15,
    cookTime: 10,
    servings: 24,
    tags: ['dessert', 'baking', 'sweet', 'kid-friendly'],
    ingredients: [
      {
        name: 'Butter',
        amount: '1 cup (2 sticks), softened',
        visual: 'Two sticks at room temperature'
      },
      {
        name: 'White sugar',
        amount: '3/4 cup',
        visual: 'Three quarters of a cup'
      },
      {
        name: 'Brown sugar',
        amount: '3/4 cup packed',
        visual: 'Three quarters cup, packed down'
      },
      {
        name: 'Eggs',
        amount: '2 large eggs',
        visual: 'Two eggs from the carton'
      },
      {
        name: 'Vanilla extract',
        amount: '2 teaspoons',
        visual: 'Two small spoonfuls'
      },
      {
        name: 'All-purpose flour',
        amount: '2 1/4 cups',
        visual: 'About 2 and a quarter cups'
      },
      {
        name: 'Baking soda',
        amount: '1 teaspoon',
        visual: 'One small spoonful'
      },
      {
        name: 'Salt',
        amount: '1 teaspoon',
        visual: 'One small spoonful'
      },
      {
        name: 'Chocolate chips',
        amount: '2 cups',
        visual: 'One 12 oz bag'
      }
    ],
    steps: [
      {
        id: 1,
        instruction: 'Preheat oven',
        plainLanguage: 'Turn oven to 375°F. Let it heat up while you make the dough.',
        timer: 10,
        tip: 'Preheating is important for even baking!'
      },
      {
        id: 2,
        instruction: 'Cream butter and sugars',
        plainLanguage: 'In a large bowl, beat softened butter, white sugar, and brown sugar together until fluffy and light in color, about 2-3 minutes.',
        tip: 'Use an electric mixer if you have one, or mix by hand vigorously'
      },
      {
        id: 3,
        instruction: 'Add eggs and vanilla',
        plainLanguage: 'Add eggs one at a time, beating well after each. Then add vanilla and mix.',
      },
      {
        id: 4,
        instruction: 'Mix dry ingredients',
        plainLanguage: 'In another bowl, whisk together flour, baking soda, and salt.',
      },
      {
        id: 5,
        instruction: 'Combine wet and dry',
        plainLanguage: 'Gradually add the flour mixture to the butter mixture. Mix just until combined - don\'t overmix!',
        tip: 'Stop mixing as soon as you don\'t see flour streaks'
      },
      {
        id: 6,
        instruction: 'Add chocolate chips',
        plainLanguage: 'Stir in chocolate chips with a spoon or spatula.',
      },
      {
        id: 7,
        instruction: 'Scoop onto baking sheets',
        plainLanguage: 'Drop rounded tablespoons of dough onto ungreased cookie sheets, spacing them 2 inches apart.',
        tip: 'They spread while baking, so give them space!'
      },
      {
        id: 8,
        instruction: 'Bake',
        plainLanguage: 'Bake for 9-11 minutes until edges are golden but centers still look slightly underdone.',
        timer: 10,
        tip: 'Don\'t overbake! They firm up as they cool'
      },
      {
        id: 9,
        instruction: 'Cool and enjoy',
        plainLanguage: 'Let cool on the baking sheet for 2 minutes, then transfer to a cooling rack. Enjoy warm with milk!',
        tip: 'Best eaten warm! Store extras in an airtight container'
      }
    ]
  },
  {
    id: '25',
    title: 'Zuppa Toscana',
    description: 'Italian sausage soup with potatoes and kale in a creamy broth. Restaurant copycat recipe!',
    difficulty: 'easy',
    prepTime: 10,
    cookTime: 25,
    servings: 6,
    tags: ['soup', 'italian', 'comfort-food', 'sausage'],
    ingredients: [
      {
        name: 'Italian sausage',
        amount: '1 lb',
        visual: 'One package of sausage, removed from casings'
      },
      {
        name: 'Bacon',
        amount: '4 strips, chopped',
        visual: 'Four bacon strips cut into pieces'
      },
      {
        name: 'Potatoes',
        amount: '3 medium, sliced thin',
        visual: 'Three potatoes sliced into thin rounds'
      },
      {
        name: 'Onion',
        amount: '1 medium, diced',
        visual: 'One onion cut into small pieces'
      },
      {
        name: 'Garlic',
        amount: '3 cloves, minced',
        visual: '3 small pieces chopped tiny'
      },
      {
        name: 'Chicken broth',
        amount: '6 cups',
        visual: 'One and a half cartons'
      },
      {
        name: 'Kale',
        amount: '3 cups chopped',
        visual: 'One bunch of kale, stems removed'
      },
      {
        name: 'Heavy cream',
        amount: '1 cup',
        visual: 'One measuring cup'
      },
      {
        name: 'Red pepper flakes',
        amount: '1/2 teaspoon',
        visual: 'Half a small spoonful'
      },
      {
        name: 'Salt and pepper',
        amount: 'To taste',
        visual: 'Season as desired'
      }
    ],
    steps: [
      {
        id: 1,
        instruction: 'Cook bacon',
        plainLanguage: 'In a large pot over medium heat, cook chopped bacon until crispy, about 5 minutes. Remove to a plate.',
        timer: 5
      },
      {
        id: 2,
        instruction: 'Brown sausage',
        plainLanguage: 'In the same pot with bacon fat, add sausage. Break it up with a spoon and cook until browned, about 6-7 minutes. Remove to the plate with bacon.',
        timer: 7
      },
      {
        id: 3,
        instruction: 'Cook onion and garlic',
        plainLanguage: 'Add onion to the pot. Cook for 3 minutes until soft. Add garlic and red pepper flakes, cook 1 more minute.',
        timer: 4
      },
      {
        id: 4,
        instruction: 'Add broth and potatoes',
        plainLanguage: 'Pour in chicken broth. Add sliced potatoes. Bring to a boil, then reduce to simmer for 10 minutes until potatoes are tender.',
        timer: 10,
        tip: 'Thin slices cook faster! Pierce with a fork to test'
      },
      {
        id: 5,
        instruction: 'Add meat and kale',
        plainLanguage: 'Add sausage and bacon back to pot. Add chopped kale. Simmer for 5 minutes until kale wilts.',
        timer: 5,
        tip: 'Kale will shrink a lot as it cooks'
      },
      {
        id: 6,
        instruction: 'Add cream',
        plainLanguage: 'Turn heat to low. Stir in heavy cream. Heat through for 2 minutes. Season with salt and pepper.',
        timer: 2,
        tip: 'Don\'t boil after adding cream or it might curdle'
      },
      {
        id: 7,
        instruction: 'Serve hot',
        plainLanguage: 'Ladle into bowls. Serve with crusty bread and extra parmesan cheese!',
        tip: 'Tastes like the restaurant version! So comforting'
      }
    ]
  },
  {
    id: '26',
    title: 'Cacio e Pepe',
    description: 'Roman pasta with just cheese and pepper. Simple ingredients, incredible flavor!',
    difficulty: 'intermediate',
    prepTime: 5,
    cookTime: 15,
    servings: 4,
    tags: ['italian', 'pasta', 'authentic', 'vegetarian'],
    ingredients: [
      {
        name: 'Spaghetti or bucatini',
        amount: '1 lb',
        visual: 'One box of pasta'
      },
      {
        name: 'Pecorino Romano cheese',
        amount: '2 cups finely grated',
        visual: 'About 8 oz - must be finely grated!'
      },
      {
        name: 'Black peppercorns',
        amount: '2 tablespoons',
        visual: 'Whole peppercorns to crack fresh'
      },
      {
        name: 'Salt',
        amount: 'For pasta water',
        visual: 'Big spoonful for the water'
      }
    ],
    steps: [
      {
        id: 1,
        instruction: 'Toast the pepper',
        plainLanguage: 'In a large pan, toast whole peppercorns over medium heat for 1-2 minutes until fragrant. Remove from heat and coarsely crush them.',
        timer: 2,
        tip: 'Crushing whole peppercorns makes ALL the difference in flavor!'
      },
      {
        id: 2,
        instruction: 'Cook pasta',
        plainLanguage: 'Cook pasta in salted boiling water until al dente (still slightly firm). Save 2 cups of pasta water before draining!',
        timer: 9,
        tip: 'CRITICAL: Save extra pasta water! You need it for the sauce'
      },
      {
        id: 3,
        instruction: 'Make cheese paste',
        plainLanguage: 'In a bowl, mix grated pecorino with 1/2 cup of warm pasta water to make a thick paste. Stir until smooth.',
        tip: 'This prevents clumps! The paste helps the cheese melt smoothly'
      },
      {
        id: 4,
        instruction: 'Combine',
        plainLanguage: 'Return empty pasta pot to low heat. Add pasta, crushed pepper, and cheese paste. Toss vigorously while adding pasta water a little at a time until creamy.',
        tip: 'Keep tossing! The magic happens with constant movement. Add water slowly'
      },
      {
        id: 5,
        instruction: 'Serve immediately',
        plainLanguage: 'Serve right away topped with more pecorino and black pepper. This must be eaten hot and fresh!',
        tip: 'The sauce should coat the pasta like silk. If it\'s clumpy, add more pasta water and toss!'
      }
    ]
  },
  {
    id: '27',
    title: 'Baked Feta Chickpeas',
    description: 'Viral TikTok-inspired recipe with roasted feta, chickpeas, and tomatoes. So addictive!',
    difficulty: 'easy',
    prepTime: 10,
    cookTime: 30,
    servings: 4,
    tags: ['vegetarian', 'mediterranean', 'viral', 'healthy'],
    ingredients: [
      {
        name: 'Feta cheese block',
        amount: '8 oz block',
        visual: 'One block of feta - don\'t use crumbled!'
      },
      {
        name: 'Cherry tomatoes',
        amount: '2 pints (4 cups)',
        visual: 'Two containers of cherry tomatoes'
      },
      {
        name: 'Chickpeas',
        amount: '1 can (15 oz), drained',
        visual: 'One can, liquid poured out'
      },
      {
        name: 'Garlic',
        amount: '4 cloves, whole',
        visual: '4 cloves left whole'
      },
      {
        name: 'Olive oil',
        amount: '1/3 cup',
        visual: 'Generous amount for roasting'
      },
      {
        name: 'Red pepper flakes',
        amount: '1/2 teaspoon',
        visual: 'Half a small spoonful'
      },
      {
        name: 'Oregano',
        amount: '1 teaspoon dried',
        visual: 'One small spoonful'
      },
      {
        name: 'Fresh basil',
        amount: 'Handful',
        visual: 'For topping'
      },
      {
        name: 'Salt and pepper',
        amount: 'To taste',
        visual: 'Season well'
      }
    ],
    steps: [
      {
        id: 1,
        instruction: 'Preheat oven',
        plainLanguage: 'Preheat oven to 400°F.',
        timer: 10
      },
      {
        id: 2,
        instruction: 'Arrange in baking dish',
        plainLanguage: 'Place feta block in the center of a 9x13 baking dish. Arrange tomatoes, chickpeas, and garlic cloves around it.',
        tip: 'Keep feta in the center - it\'s the star!'
      },
      {
        id: 3,
        instruction: 'Season and drizzle',
        plainLanguage: 'Drizzle olive oil over everything. Sprinkle with oregano, red pepper flakes, salt, and pepper.',
        tip: 'Don\'t skip the oil - it helps everything roast beautifully'
      },
      {
        id: 4,
        instruction: 'Bake',
        plainLanguage: 'Bake for 30 minutes until tomatoes burst, feta is soft, and edges are golden.',
        timer: 30,
        tip: 'Feta should be soft and melty, tomatoes should burst'
      },
      {
        id: 5,
        instruction: 'Mash and mix',
        plainLanguage: 'Remove from oven. Use a fork to mash the feta and garlic. Stir everything together until creamy.',
        tip: 'The tomatoes will release juice - mix it all into a saucy mixture'
      },
      {
        id: 6,
        instruction: 'Serve',
        plainLanguage: 'Top with fresh basil. Serve with crusty bread, over pasta, or with rice!',
        tip: 'Amazing on toast, over noodles, or eaten straight with bread!'
      }
    ]
  },
  {
    id: '28',
    title: 'French Onion Soup',
    description: 'Caramelized onions in rich broth topped with melted cheese. Classic French bistro favorite!',
    difficulty: 'intermediate',
    prepTime: 15,
    cookTime: 60,
    servings: 4,
    tags: ['french', 'soup', 'comfort-food', 'cheese'],
    ingredients: [
      {
        name: 'Yellow onions',
        amount: '4 large, sliced thin',
        visual: 'Four onions cut into thin half-moons'
      },
      {
        name: 'Butter',
        amount: '4 tablespoons',
        visual: 'Half a stick'
      },
      {
        name: 'Beef broth',
        amount: '6 cups',
        visual: 'One and a half cartons'
      },
      {
        name: 'White wine',
        amount: '1/2 cup (optional)',
        visual: 'Can substitute with more broth'
      },
      {
        name: 'Bay leaves',
        amount: '2 leaves',
        visual: 'Dried bay leaves'
      },
      {
        name: 'Thyme',
        amount: '1 teaspoon dried',
        visual: 'One small spoonful'
      },
      {
        name: 'Baguette',
        amount: '1 loaf, sliced',
        visual: 'French bread sliced into rounds'
      },
      {
        name: 'Gruyere cheese',
        amount: '2 cups shredded',
        visual: 'About 8 oz - Swiss works too'
      },
      {
        name: 'Salt and pepper',
        amount: 'To taste',
        visual: 'Season well'
      }
    ],
    steps: [
      {
        id: 1,
        instruction: 'Caramelize onions',
        plainLanguage: 'Melt butter in a large pot over medium heat. Add sliced onions. Cook for 40-45 minutes, stirring every 5 minutes, until deep golden brown.',
        timer: 45,
        tip: 'This takes time but is ESSENTIAL! Don\'t rush. The onions should be sweet and golden'
      },
      {
        id: 2,
        instruction: 'Deglaze',
        plainLanguage: 'Add wine (or extra broth) and scrape up any brown bits from the bottom of the pot. Let it bubble for 2 minutes.',
        timer: 2,
        tip: 'Those brown bits are pure flavor!'
      },
      {
        id: 3,
        instruction: 'Add broth and simmer',
        plainLanguage: 'Pour in beef broth. Add bay leaves and thyme. Bring to a boil, then reduce to simmer for 15 minutes. Season with salt and pepper.',
        timer: 15
      },
      {
        id: 4,
        instruction: 'Toast bread',
        plainLanguage: 'While soup simmers, toast baguette slices in oven at 400°F for 5 minutes until crispy.',
        timer: 5
      },
      {
        id: 5,
        instruction: 'Prepare for broiler',
        plainLanguage: 'Ladle soup into oven-safe bowls. Top each with 2-3 toasted bread slices. Pile shredded cheese on top.',
        tip: 'Use oven-safe bowls only! Regular bowls will crack'
      },
      {
        id: 6,
        instruction: 'Broil',
        plainLanguage: 'Place bowls on a baking sheet. Broil for 2-3 minutes until cheese is melted and bubbly.',
        timer: 3,
        tip: 'Watch carefully! Cheese can burn quickly under the broiler'
      },
      {
        id: 7,
        instruction: 'Serve carefully',
        plainLanguage: 'Carefully remove bowls - they\'re very hot! Let cool for 2 minutes before eating.',
        tip: 'Classic French bistro experience at home!'
      }
    ]
  },
  {
    id: '29',
    title: 'Spicy Peanut Noodles',
    description: 'Quick Asian noodles in creamy peanut sauce. Ready in 15 minutes!',
    difficulty: 'super-easy',
    prepTime: 5,
    cookTime: 10,
    servings: 4,
    tags: ['asian', 'noodles', 'vegetarian', 'quick', 'spicy'],
    ingredients: [
      {
        name: 'Spaghetti or rice noodles',
        amount: '12 oz',
        visual: 'Three quarters of a box'
      },
      {
        name: 'Peanut butter',
        amount: '1/2 cup',
        visual: 'Half a cup - creamy works best'
      },
      {
        name: 'Soy sauce',
        amount: '3 tablespoons',
        visual: 'Three big spoonfuls'
      },
      {
        name: 'Rice vinegar',
        amount: '2 tablespoons',
        visual: 'Two big spoonfuls'
      },
      {
        name: 'Sesame oil',
        amount: '1 tablespoon',
        visual: 'One big spoonful'
      },
      {
        name: 'Honey or brown sugar',
        amount: '2 tablespoons',
        visual: 'Two big spoonfuls'
      },
      {
        name: 'Garlic',
        amount: '2 cloves, minced',
        visual: '2 small pieces chopped tiny'
      },
      {
        name: 'Sriracha or chili paste',
        amount: '1-2 teaspoons',
        visual: 'Adjust to your spice level'
      },
      {
        name: 'Green onions',
        amount: '3 stalks, sliced',
        visual: 'For topping'
      },
      {
        name: 'Crushed peanuts',
        amount: '1/4 cup',
        visual: 'For topping'
      },
      {
        name: 'Water',
        amount: '1/4 cup',
        visual: 'To thin the sauce'
      }
    ],
    steps: [
      {
        id: 1,
        instruction: 'Cook noodles',
        plainLanguage: 'Cook noodles according to package directions. Drain and rinse with cold water.',
        timer: 8
      },
      {
        id: 2,
        instruction: 'Make peanut sauce',
        plainLanguage: 'In a bowl, whisk together peanut butter, soy sauce, vinegar, sesame oil, honey, garlic, sriracha, and water until smooth.',
        tip: 'Sauce should be pourable. Add more water if too thick'
      },
      {
        id: 3,
        instruction: 'Toss noodles with sauce',
        plainLanguage: 'Pour sauce over cooked noodles. Toss until noodles are completely coated.',
      },
      {
        id: 4,
        instruction: 'Add toppings',
        plainLanguage: 'Top with sliced green onions and crushed peanuts. Serve immediately!',
        tip: 'Great cold or warm! Add cucumber, shredded carrots, or crispy tofu'
      }
    ]
  },
  {
    id: '30',
    title: 'Chocolate Brownies',
    description: 'Fudgy, rich brownies with crackly tops. Better than boxed mix!',
    difficulty: 'easy',
    prepTime: 15,
    cookTime: 25,
    servings: 16,
    tags: ['dessert', 'baking', 'chocolate', 'sweet'],
    ingredients: [
      {
        name: 'Butter',
        amount: '1/2 cup (1 stick), melted',
        visual: 'One stick melted in microwave'
      },
      {
        name: 'Sugar',
        amount: '1 cup',
        visual: 'One full measuring cup'
      },
      {
        name: 'Eggs',
        amount: '2 large eggs',
        visual: 'Two eggs from the carton'
      },
      {
        name: 'Vanilla extract',
        amount: '1 teaspoon',
        visual: 'One small spoonful'
      },
      {
        name: 'Cocoa powder',
        amount: '1/3 cup',
        visual: 'Third of a cup - unsweetened'
      },
      {
        name: 'All-purpose flour',
        amount: '1/2 cup',
        visual: 'Half a cup'
      },
      {
        name: 'Salt',
        amount: '1/4 teaspoon',
        visual: 'Quarter of a small spoonful'
      },
      {
        name: 'Baking powder',
        amount: '1/4 teaspoon',
        visual: 'Quarter of a small spoonful'
      },
      {
        name: 'Chocolate chips (optional)',
        amount: '1/2 cup',
        visual: 'Extra chocolate never hurts!'
      }
    ],
    steps: [
      {
        id: 1,
        instruction: 'Preheat oven',
        plainLanguage: 'Preheat oven to 350°F. Grease an 8x8 inch baking pan or line with parchment paper.',
        timer: 10
      },
      {
        id: 2,
        instruction: 'Mix wet ingredients',
        plainLanguage: 'In a bowl, stir together melted butter and sugar. Add eggs and vanilla, mix well.',
      },
      {
        id: 3,
        instruction: 'Add dry ingredients',
        plainLanguage: 'Add cocoa powder, flour, salt, and baking powder. Stir just until combined - don\'t overmix!',
        tip: 'Stop as soon as you don\'t see dry ingredients'
      },
      {
        id: 4,
        instruction: 'Add chocolate chips',
        plainLanguage: 'Fold in chocolate chips if using.',
      },
      {
        id: 5,
        instruction: 'Bake',
        plainLanguage: 'Pour batter into prepared pan and spread evenly. Bake for 25-30 minutes. A toothpick should come out with a few moist crumbs.',
        timer: 27,
        tip: 'DON\'T overbake! Slightly underdone = fudgy. Overbaked = dry'
      },
      {
        id: 6,
        instruction: 'Cool and cut',
        plainLanguage: 'Let cool completely in the pan before cutting into squares. This is hard but important!',
        tip: 'For cleanest cuts, refrigerate for 1 hour before slicing'
      }
    ]
  },
  {
    id: '31',
    title: 'Chicken Tortellini Soup',
    description: 'Comforting soup with cheese tortellini, chicken, and vegetables. One pot meal!',
    difficulty: 'easy',
    prepTime: 10,
    cookTime: 25,
    servings: 6,
    tags: ['soup', 'chicken', 'pasta', 'comfort-food'],
    ingredients: [
      {
        name: 'Chicken breast',
        amount: '1 lb, diced',
        visual: 'About 2 breasts cut into bite-sized pieces'
      },
      {
        name: 'Cheese tortellini',
        amount: '1 package (9 oz)',
        visual: 'Fresh or frozen - find in refrigerated section'
      },
      {
        name: 'Carrots',
        amount: '2 medium, sliced',
        visual: 'Two carrots cut into rounds'
      },
      {
        name: 'Celery',
        amount: '2 stalks, diced',
        visual: 'Two stalks chopped'
      },
      {
        name: 'Onion',
        amount: '1 medium, diced',
        visual: 'One onion in small pieces'
      },
      {
        name: 'Garlic',
        amount: '3 cloves, minced',
        visual: '3 small pieces chopped tiny'
      },
      {
        name: 'Chicken broth',
        amount: '8 cups',
        visual: 'Two full cartons'
      },
      {
        name: 'Spinach',
        amount: '2 cups',
        visual: 'Fresh spinach leaves'
      },
      {
        name: 'Italian seasoning',
        amount: '1 teaspoon',
        visual: 'One small spoonful'
      },
      {
        name: 'Olive oil',
        amount: '2 tablespoons',
        visual: 'Two big spoonfuls'
      },
      {
        name: 'Salt and pepper',
        amount: 'To taste',
        visual: 'Season well'
      },
      {
        name: 'Parmesan cheese',
        amount: 'For serving',
        visual: 'Grated on top'
      }
    ],
    steps: [
      {
        id: 1,
        instruction: 'Cook chicken',
        plainLanguage: 'Heat oil in a large pot over medium-high heat. Add diced chicken, season with salt and pepper. Cook 5-6 minutes until browned. Remove to a plate.',
        timer: 6
      },
      {
        id: 2,
        instruction: 'Sauté vegetables',
        plainLanguage: 'In the same pot, add onion, carrots, and celery. Cook for 5 minutes until softened. Add garlic and Italian seasoning, cook 1 more minute.',
        timer: 6
      },
      {
        id: 3,
        instruction: 'Add broth',
        plainLanguage: 'Pour in chicken broth. Bring to a boil.',
        timer: 5
      },
      {
        id: 4,
        instruction: 'Add tortellini',
        plainLanguage: 'Add tortellini to the boiling broth. Cook according to package directions, usually 7-9 minutes.',
        timer: 8,
        tip: 'Frozen tortellini needs a few extra minutes'
      },
      {
        id: 5,
        instruction: 'Add chicken and spinach',
        plainLanguage: 'Return cooked chicken to pot. Add spinach. Simmer for 2-3 minutes until spinach wilts.',
        timer: 3
      },
      {
        id: 6,
        instruction: 'Serve',
        plainLanguage: 'Taste and adjust seasoning. Ladle into bowls and top with parmesan cheese!',
        tip: 'The tortellini makes this soup extra hearty and filling!'
      }
    ]
  },
  {
    id: '32',
    title: 'Lemon Garlic Pasta',
    description: 'Light, fresh pasta with lemon and garlic. Simple and elegant!',
    difficulty: 'super-easy',
    prepTime: 5,
    cookTime: 15,
    servings: 4,
    tags: ['pasta', 'italian', 'quick', 'vegetarian'],
    ingredients: [
      {
        name: 'Spaghetti',
        amount: '1 lb',
        visual: 'One box of spaghetti'
      },
      {
        name: 'Olive oil',
        amount: '1/3 cup',
        visual: 'Generous amount'
      },
      {
        name: 'Garlic',
        amount: '6 cloves, sliced thin',
        visual: '6 cloves sliced into thin pieces'
      },
      {
        name: 'Lemon',
        amount: '2 lemons',
        visual: 'Zest and juice both lemons'
      },
      {
        name: 'Red pepper flakes',
        amount: '1/2 teaspoon',
        visual: 'Half a small spoonful'
      },
      {
        name: 'Parmesan cheese',
        amount: '1/2 cup grated',
        visual: 'About half a coffee cup'
      },
      {
        name: 'Fresh parsley',
        amount: '1/4 cup chopped',
        visual: 'Handful chopped'
      },
      {
        name: 'Salt and pepper',
        amount: 'To taste',
        visual: 'Season well'
      }
    ],
    steps: [
      {
        id: 1,
        instruction: 'Cook pasta',
        plainLanguage: 'Cook pasta in salted boiling water until al dente. Save 1 cup pasta water before draining!',
        timer: 9,
        tip: 'Al dente means still slightly firm - don\'t overcook'
      },
      {
        id: 2,
        instruction: 'Cook garlic',
        plainLanguage: 'While pasta cooks, heat olive oil in a large pan over medium-low heat. Add sliced garlic and red pepper flakes. Cook 2-3 minutes until garlic is golden but not brown.',
        timer: 3,
        tip: 'Low heat! Garlic burns easily and turns bitter'
      },
      {
        id: 3,
        instruction: 'Add lemon',
        plainLanguage: 'Add lemon zest and lemon juice to the garlic oil. Stir for 30 seconds.',
        tip: 'Zest first, then juice! Zest has amazing flavor'
      },
      {
        id: 4,
        instruction: 'Combine',
        plainLanguage: 'Add drained pasta to the pan with the lemon garlic oil. Toss well. Add pasta water a little at a time until it reaches desired consistency.',
        tip: 'The pasta water helps create a light sauce'
      },
      {
        id: 5,
        instruction: 'Add cheese and parsley',
        plainLanguage: 'Remove from heat. Add parmesan and parsley. Toss well. Season with salt and pepper.',
      },
      {
        id: 6,
        instruction: 'Serve',
        plainLanguage: 'Serve immediately with extra parmesan on top!',
        tip: 'Simple ingredients, huge flavor! Perfect light dinner'
      }
    ]
  },
  {
    id: '33',
    title: 'BBQ Pulled Mushrooms',
    description: 'Vegan "pulled pork" made with oyster mushrooms. Surprisingly meaty texture!',
    difficulty: 'easy',
    prepTime: 10,
    cookTime: 25,
    servings: 4,
    tags: ['vegetarian', 'vegan', 'bbq', 'sandwich'],
    ingredients: [
      {
        name: 'Oyster mushrooms',
        amount: '1 lb',
        visual: 'Large package of oyster mushrooms'
      },
      {
        name: 'BBQ sauce',
        amount: '1 cup',
        visual: 'Your favorite BBQ sauce'
      },
      {
        name: 'Olive oil',
        amount: '2 tablespoons',
        visual: 'Two big spoonfuls'
      },
      {
        name: 'Smoked paprika',
        amount: '1 teaspoon',
        visual: 'One small spoonful'
      },
      {
        name: 'Garlic powder',
        amount: '1 teaspoon',
        visual: 'One small spoonful'
      },
      {
        name: 'Onion powder',
        amount: '1 teaspoon',
        visual: 'One small spoonful'
      },
      {
        name: 'Salt',
        amount: '1/2 teaspoon',
        visual: 'Half a small spoonful'
      },
      {
        name: 'Burger buns',
        amount: '4 buns',
        visual: 'For serving'
      },
      {
        name: 'Coleslaw (optional)',
        amount: 'For topping',
        visual: 'Store-bought works great'
      }
    ],
    steps: [
      {
        id: 1,
        instruction: 'Shred mushrooms',
        plainLanguage: 'Using your hands or two forks, tear oyster mushrooms into thin strips that look like pulled meat.',
        tip: 'The texture is amazing when shredded! Don\'t cut with a knife'
      },
      {
        id: 2,
        instruction: 'Season mushrooms',
        plainLanguage: 'In a bowl, toss shredded mushrooms with olive oil, smoked paprika, garlic powder, onion powder, and salt.',
      },
      {
        id: 3,
        instruction: 'Roast mushrooms',
        plainLanguage: 'Spread mushrooms on a baking sheet. Roast at 400°F for 15 minutes until edges are crispy.',
        timer: 15,
        tip: 'They\'ll shrink and get crispy - that\'s what you want!'
      },
      {
        id: 4,
        instruction: 'Add BBQ sauce',
        plainLanguage: 'Transfer roasted mushrooms to a pan. Add BBQ sauce. Cook over medium heat for 5-10 minutes, stirring often, until mushrooms are coated and sauce thickens.',
        timer: 7
      },
      {
        id: 5,
        instruction: 'Build sandwiches',
        plainLanguage: 'Pile BBQ mushrooms onto buns. Top with coleslaw if using. Serve with pickles!',
        tip: 'Even meat-eaters love these! The texture is spot-on'
      }
    ]
  },
  {
    id: '34',
    title: 'Marry Me Chicken',
    description: 'Creamy sun-dried tomato chicken that\'s so good, it might inspire a proposal! Viral recipe!',
    difficulty: 'easy',
    prepTime: 10,
    cookTime: 25,
    servings: 4,
    tags: ['chicken', 'italian', 'creamy', 'viral'],
    ingredients: [
      {
        name: 'Chicken breast',
        amount: '4 breasts (about 1.5 lbs)',
        visual: 'Four chicken breast pieces'
      },
      {
        name: 'Sun-dried tomatoes',
        amount: '1/2 cup, chopped',
        visual: 'From a jar, drained and chopped'
      },
      {
        name: 'Garlic',
        amount: '3 cloves, minced',
        visual: '3 small pieces chopped tiny'
      },
      {
        name: 'Heavy cream',
        amount: '1 cup',
        visual: 'One measuring cup'
      },
      {
        name: 'Chicken broth',
        amount: '1/2 cup',
        visual: 'Half a measuring cup'
      },
      {
        name: 'Parmesan cheese',
        amount: '1/2 cup grated',
        visual: 'About half a coffee cup'
      },
      {
        name: 'Italian seasoning',
        amount: '1 teaspoon',
        visual: 'One small spoonful'
      },
      {
        name: 'Red pepper flakes',
        amount: '1/4 teaspoon',
        visual: 'Quarter of a small spoonful'
      },
      {
        name: 'Olive oil',
        amount: '2 tablespoons',
        visual: 'Two big spoonfuls'
      },
      {
        name: 'Fresh basil',
        amount: 'For garnish',
        visual: 'A few leaves torn'
      },
      {
        name: 'Salt and pepper',
        amount: 'To taste',
        visual: 'Season the chicken'
      }
    ],
    steps: [
      {
        id: 1,
        instruction: 'Season and sear chicken',
        plainLanguage: 'Season chicken with salt and pepper. Heat oil in a large skillet over medium-high heat. Sear chicken for 4-5 minutes per side until golden. Remove to a plate.',
        timer: 10,
        tip: 'Don\'t worry if chicken isn\'t cooked through - it finishes in the sauce'
      },
      {
        id: 2,
        instruction: 'Make the sauce',
        plainLanguage: 'In the same pan, add garlic and sun-dried tomatoes. Cook for 1 minute. Add heavy cream, chicken broth, parmesan, Italian seasoning, and red pepper flakes. Stir well.',
        timer: 2
      },
      {
        id: 3,
        instruction: 'Simmer',
        plainLanguage: 'Bring sauce to a simmer. Let it bubble gently for 3-4 minutes until it starts to thicken.',
        timer: 4,
        tip: 'The sauce will thicken as it simmers'
      },
      {
        id: 4,
        instruction: 'Add chicken back',
        plainLanguage: 'Return chicken to the pan, nestling it into the sauce. Simmer for 8-10 minutes until chicken is cooked through and sauce is thick.',
        timer: 9,
        tip: 'Spoon sauce over chicken as it cooks'
      },
      {
        id: 5,
        instruction: 'Serve',
        plainLanguage: 'Top with fresh basil. Serve over pasta, rice, or with crusty bread to soak up the amazing sauce!',
        tip: 'The name says it all - this dish is THAT good!'
      }
    ]
  },
  {
    id: '35',
    title: 'Pasta Puttanesca',
    description: 'Bold Italian pasta with olives, capers, and anchovies. Big flavors, minimal effort!',
    difficulty: 'easy',
    prepTime: 5,
    cookTime: 20,
    servings: 4,
    tags: ['italian', 'pasta', 'quick', 'pantry'],
    ingredients: [
      {
        name: 'Spaghetti',
        amount: '1 lb',
        visual: 'One box of spaghetti'
      },
      {
        name: 'Canned crushed tomatoes',
        amount: '28 oz can',
        visual: 'One large can'
      },
      {
        name: 'Kalamata olives',
        amount: '1/2 cup, pitted and halved',
        visual: 'About 15-20 olives'
      },
      {
        name: 'Capers',
        amount: '3 tablespoons',
        visual: 'Three big spoonfuls - small salty buds'
      },
      {
        name: 'Anchovies',
        amount: '4-6 fillets (optional but recommended)',
        visual: 'From a tin or jar'
      },
      {
        name: 'Garlic',
        amount: '4 cloves, minced',
        visual: '4 small pieces chopped tiny'
      },
      {
        name: 'Red pepper flakes',
        amount: '1/2 teaspoon',
        visual: 'Half a small spoonful'
      },
      {
        name: 'Olive oil',
        amount: '1/4 cup',
        visual: 'Quarter cup'
      },
      {
        name: 'Fresh parsley',
        amount: 'Handful chopped',
        visual: 'For topping'
      },
      {
        name: 'Salt',
        amount: 'To taste',
        visual: 'Capers and olives are salty, so taste first'
      }
    ],
    steps: [
      {
        id: 1,
        instruction: 'Start pasta',
        plainLanguage: 'Bring a large pot of salted water to boil. Cook pasta according to package directions.',
        timer: 10
      },
      {
        id: 2,
        instruction: 'Cook aromatics',
        plainLanguage: 'While pasta cooks, heat olive oil in a large pan over medium heat. Add garlic, anchovies, and red pepper flakes. Cook for 2 minutes until anchovies dissolve.',
        timer: 2,
        tip: 'Anchovies melt away and add amazing savory flavor - not fishy!'
      },
      {
        id: 3,
        instruction: 'Add tomatoes',
        plainLanguage: 'Pour in crushed tomatoes. Bring to a simmer and cook for 8-10 minutes.',
        timer: 9
      },
      {
        id: 4,
        instruction: 'Add olives and capers',
        plainLanguage: 'Stir in olives and capers. Simmer for 5 more minutes. Taste and add salt if needed (probably won\'t need much!).',
        timer: 5,
        tip: 'The sauce should be thick and flavorful'
      },
      {
        id: 5,
        instruction: 'Combine',
        plainLanguage: 'Drain pasta and add to the sauce. Toss well until pasta is coated.',
      },
      {
        id: 6,
        instruction: 'Serve',
        plainLanguage: 'Top with fresh parsley. No cheese needed - the bold flavors shine on their own!',
        tip: 'Made with pantry staples! Ready in 20 minutes'
      }
    ]
  },
  {
    id: '36',
    title: 'Butter Chicken (Chicken Makhani)',
    description: 'Creamy, mildly spiced Indian curry with tender chicken. Restaurant-quality at home!',
    difficulty: 'intermediate',
    prepTime: 15,
    cookTime: 35,
    servings: 6,
    tags: ['indian', 'curry', 'chicken', 'authentic'],
    ingredients: [
      {
        name: 'Chicken thighs',
        amount: '2 lbs, cut into pieces',
        visual: 'About 6-8 thighs cut into chunks'
      },
      {
        name: 'Plain yogurt',
        amount: '1 cup',
        visual: 'One measuring cup'
      },
      {
        name: 'Lemon juice',
        amount: '2 tablespoons',
        visual: 'Juice from half a lemon'
      },
      {
        name: 'Garam masala',
        amount: '2 teaspoons',
        visual: 'Two small spoonfuls'
      },
      {
        name: 'Curry powder',
        amount: '1 tablespoon',
        visual: 'One big spoonful'
      },
      {
        name: 'Cumin',
        amount: '1 teaspoon',
        visual: 'One small spoonful'
      },
      {
        name: 'Butter',
        amount: '4 tablespoons',
        visual: 'Half a stick'
      },
      {
        name: 'Onion',
        amount: '1 large, diced',
        visual: 'One onion in small pieces'
      },
      {
        name: 'Garlic',
        amount: '4 cloves, minced',
        visual: '4 small pieces chopped tiny'
      },
      {
        name: 'Ginger',
        amount: '1 inch piece, minced',
        visual: 'Small piece of fresh ginger chopped fine'
      },
      {
        name: 'Tomato sauce',
        amount: '15 oz can',
        visual: 'One can'
      },
      {
        name: 'Heavy cream',
        amount: '1 cup',
        visual: 'One measuring cup'
      },
      {
        name: 'Salt',
        amount: '1 teaspoon',
        visual: 'One small spoonful'
      },
      {
        name: 'Cilantro',
        amount: 'For garnish',
        visual: 'Fresh green herb'
      }
    ],
    steps: [
      {
        id: 1,
        instruction: 'Marinate chicken',
        plainLanguage: 'In a bowl, mix chicken with yogurt, lemon juice, 1 teaspoon garam masala, and salt. Let sit for 15 minutes (or up to overnight in fridge).',
        timer: 15,
        tip: 'Longer marinating = more tender chicken!'
      },
      {
        id: 2,
        instruction: 'Cook chicken',
        plainLanguage: 'Heat 2 tablespoons butter in a large pan over medium-high heat. Add chicken (shake off excess marinade). Cook 6-7 minutes until browned. Remove to a plate.',
        timer: 7
      },
      {
        id: 3,
        instruction: 'Make the sauce',
        plainLanguage: 'In the same pan, add remaining 2 tablespoons butter. Add onion and cook 5 minutes. Add garlic and ginger, cook 1 minute.',
        timer: 6
      },
      {
        id: 4,
        instruction: 'Add spices',
        plainLanguage: 'Add curry powder, remaining garam masala, and cumin. Stir for 30 seconds until fragrant.',
      },
      {
        id: 5,
        instruction: 'Add tomato sauce',
        plainLanguage: 'Pour in tomato sauce. Simmer for 5 minutes.',
        timer: 5
      },
      {
        id: 6,
        instruction: 'Add cream and chicken',
        plainLanguage: 'Stir in heavy cream. Return chicken to the pan. Simmer uncovered for 12-15 minutes until chicken is cooked through and sauce thickens.',
        timer: 13,
        tip: 'Stir occasionally so cream doesn\'t separate'
      },
      {
        id: 7,
        instruction: 'Serve',
        plainLanguage: 'Garnish with cilantro. Serve with basmati rice or naan bread!',
        tip: 'The most popular Indian restaurant dish - now you can make it at home!'
      }
    ]
  },
  {
    id: '37',
    title: 'Greek Salad',
    description: 'Fresh, crisp salad with feta, olives, and tangy dressing. Perfect side dish!',
    difficulty: 'super-easy',
    prepTime: 15,
    cookTime: 0,
    servings: 4,
    tags: ['salad', 'greek', 'vegetarian', 'healthy', 'no-cook'],
    ingredients: [
      {
        name: 'Romaine lettuce',
        amount: '1 head, chopped',
        visual: 'One head torn into pieces'
      },
      {
        name: 'Cucumber',
        amount: '1 large, diced',
        visual: 'One cucumber cut into chunks'
      },
      {
        name: 'Cherry tomatoes',
        amount: '2 cups, halved',
        visual: 'One container, cut in half'
      },
      {
        name: 'Red onion',
        amount: '1/2 small, sliced thin',
        visual: 'Half a small onion in thin slices'
      },
      {
        name: 'Kalamata olives',
        amount: '1/2 cup',
        visual: 'About 15 olives'
      },
      {
        name: 'Feta cheese',
        amount: '1 cup crumbled',
        visual: 'About 4 oz'
      },
      {
        name: 'Olive oil',
        amount: '1/4 cup',
        visual: 'Quarter cup'
      },
      {
        name: 'Red wine vinegar',
        amount: '2 tablespoons',
        visual: 'Two big spoonfuls'
      },
      {
        name: 'Oregano',
        amount: '1 teaspoon dried',
        visual: 'One small spoonful'
      },
      {
        name: 'Lemon juice',
        amount: '1 tablespoon',
        visual: 'One big spoonful'
      },
      {
        name: 'Salt and pepper',
        amount: 'To taste',
        visual: 'Season to your liking'
      }
    ],
    steps: [
      {
        id: 1,
        instruction: 'Prep vegetables',
        plainLanguage: 'Chop lettuce, dice cucumber, halve tomatoes, and slice onion. Put everything in a large bowl.',
        tip: 'Keep everything in big, bite-sized pieces'
      },
      {
        id: 2,
        instruction: 'Add olives and feta',
        plainLanguage: 'Add olives and crumbled feta to the bowl.',
      },
      {
        id: 3,
        instruction: 'Make dressing',
        plainLanguage: 'In a small bowl, whisk together olive oil, red wine vinegar, lemon juice, oregano, salt, and pepper.',
        tip: 'Whisk vigorously to emulsify the dressing'
      },
      {
        id: 4,
        instruction: 'Toss and serve',
        plainLanguage: 'Pour dressing over salad and toss well to coat. Serve immediately!',
        tip: 'Great with grilled chicken or fish on top! Also perfect as a side'
      }
    ]
  },
  {
    id: '38',
    title: 'Lemon Garlic Shrimp',
    description: 'Quick and elegant shrimp in lemon butter sauce. Ready in 10 minutes!',
    difficulty: 'easy',
    prepTime: 5,
    cookTime: 8,
    servings: 4,
    tags: ['seafood', 'quick', 'elegant', 'low-carb'],
    ingredients: [
      {
        name: 'Large shrimp',
        amount: '1 lb, peeled and deveined',
        visual: 'About 20-24 shrimp'
      },
      {
        name: 'Butter',
        amount: '4 tablespoons',
        visual: 'Half a stick'
      },
      {
        name: 'Garlic',
        amount: '4 cloves, minced',
        visual: '4 small pieces chopped tiny'
      },
      {
        name: 'Lemon',
        amount: '1 lemon',
        visual: 'Zest and juice the whole lemon'
      },
      {
        name: 'White wine or chicken broth',
        amount: '1/4 cup',
        visual: 'Quarter cup'
      },
      {
        name: 'Red pepper flakes',
        amount: '1/4 teaspoon',
        visual: 'Quarter of a small spoonful'
      },
      {
        name: 'Fresh parsley',
        amount: '2 tablespoons chopped',
        visual: 'Small handful'
      },
      {
        name: 'Salt and pepper',
        amount: 'To taste',
        visual: 'Season the shrimp'
      }
    ],
    steps: [
      {
        id: 1,
        instruction: 'Season shrimp',
        plainLanguage: 'Pat shrimp dry with paper towels. Season with salt and pepper.',
        tip: 'Dry shrimp = better browning!'
      },
      {
        id: 2,
        instruction: 'Cook shrimp',
        plainLanguage: 'Melt 2 tablespoons butter in a large pan over medium-high heat. Add shrimp in a single layer. Cook 2 minutes per side until pink. Remove to a plate.',
        timer: 4,
        tip: 'Don\'t overcook! Shrimp cook fast - they\'re done when pink and curled'
      },
      {
        id: 3,
        instruction: 'Make sauce',
        plainLanguage: 'In the same pan, add remaining butter. Add garlic and red pepper flakes, cook 30 seconds. Add wine, lemon zest, and lemon juice. Let bubble for 1 minute.',
        timer: 2,
        tip: 'Scrape up any browned bits - that\'s flavor!'
      },
      {
        id: 4,
        instruction: 'Combine',
        plainLanguage: 'Return shrimp to the pan. Toss in the sauce for 1 minute. Sprinkle with parsley.',
        timer: 1
      },
      {
        id: 5,
        instruction: 'Serve',
        plainLanguage: 'Serve immediately over pasta, rice, or with crusty bread!',
        tip: 'Fancy enough for guests, easy enough for weeknights!'
      }
    ]
  },
  {
    id: '39',
    title: 'Chocolate Lava Cakes',
    description: 'Individual molten chocolate cakes with gooey centers. Impressive dessert!',
    difficulty: 'intermediate',
    prepTime: 10,
    cookTime: 12,
    servings: 4,
    tags: ['dessert', 'chocolate', 'elegant', 'baking'],
    ingredients: [
      {
        name: 'Dark chocolate',
        amount: '6 oz, chopped',
        visual: 'About 1 cup chocolate chips'
      },
      {
        name: 'Butter',
        amount: '6 tablespoons',
        visual: 'About 3/4 stick'
      },
      {
        name: 'Eggs',
        amount: '2 large eggs',
        visual: 'Two eggs from the carton'
      },
      {
        name: 'Egg yolks',
        amount: '2 additional yolks',
        visual: 'Just the yellow part from 2 more eggs'
      },
      {
        name: 'Sugar',
        amount: '1/4 cup',
        visual: 'Quarter cup'
      },
      {
        name: 'Flour',
        amount: '2 tablespoons',
        visual: 'Two big spoonfuls'
      },
      {
        name: 'Vanilla extract',
        amount: '1 teaspoon',
        visual: 'One small spoonful'
      },
      {
        name: 'Butter for ramekins',
        amount: 'For greasing',
        visual: 'To coat the dishes'
      },
      {
        name: 'Cocoa powder for dusting',
        amount: 'For ramekins',
        visual: 'To dust the dishes'
      }
    ],
    steps: [
      {
        id: 1,
        instruction: 'Prep ramekins',
        plainLanguage: 'Butter four 6-oz ramekins generously. Dust with cocoa powder, tapping out excess. Place on a baking sheet.',
        tip: 'Good greasing is KEY! Otherwise they won\'t unmold'
      },
      {
        id: 2,
        instruction: 'Preheat oven',
        plainLanguage: 'Preheat oven to 450°F. Yes, that\'s hot!',
        timer: 10,
        tip: 'High heat creates the molten center'
      },
      {
        id: 3,
        instruction: 'Melt chocolate and butter',
        plainLanguage: 'Combine chocolate and butter in a microwave-safe bowl. Microwave in 30-second bursts, stirring between, until melted and smooth.',
        tip: 'Don\'t overheat! Stir well between intervals'
      },
      {
        id: 4,
        instruction: 'Mix batter',
        plainLanguage: 'In another bowl, whisk eggs, egg yolks, and sugar until thick and pale, about 1 minute. Add melted chocolate and vanilla, whisk. Fold in flour gently.',
        tip: 'Don\'t overmix once flour is added'
      },
      {
        id: 5,
        instruction: 'Fill ramekins',
        plainLanguage: 'Divide batter evenly among prepared ramekins.',
        tip: 'Can be made ahead to this point and refrigerated for up to 24 hours'
      },
      {
        id: 6,
        instruction: 'Bake',
        plainLanguage: 'Bake for 12 minutes exactly. Edges should be set but centers will jiggle slightly.',
        timer: 12,
        tip: 'Don\'t overbake! Set a timer. 12 minutes is perfect'
      },
      {
        id: 7,
        instruction: 'Unmold and serve',
        plainLanguage: 'Let cool for 1 minute. Run a knife around edges. Invert onto plates. Wait 10 seconds, then lift off ramekin. The center should ooze out!',
        tip: 'Serve immediately with vanilla ice cream or whipped cream!'
      }
    ]
  },
  {
    id: '40',
    title: 'Chicken Fajitas',
    description: 'Sizzling chicken and peppers with warm tortillas. Fun, interactive dinner!',
    difficulty: 'easy',
    prepTime: 15,
    cookTime: 15,
    servings: 4,
    tags: ['mexican', 'chicken', 'quick', 'dinner'],
    ingredients: [
      {
        name: 'Chicken breast',
        amount: '1.5 lbs, sliced thin',
        visual: 'About 3 breasts cut into strips'
      },
      {
        name: 'Bell peppers',
        amount: '3 peppers (mixed colors), sliced',
        visual: 'Three peppers cut into strips'
      },
      {
        name: 'Onion',
        amount: '1 large, sliced',
        visual: 'One onion cut into strips'
      },
      {
        name: 'Lime',
        amount: '2 limes',
        visual: 'Juice from both limes'
      },
      {
        name: 'Olive oil',
        amount: '3 tablespoons',
        visual: 'Three big spoonfuls'
      },
      {
        name: 'Chili powder',
        amount: '2 teaspoons',
        visual: 'Two small spoonfuls'
      },
      {
        name: 'Cumin',
        amount: '1 teaspoon',
        visual: 'One small spoonful'
      },
      {
        name: 'Paprika',
        amount: '1 teaspoon',
        visual: 'One small spoonful'
      },
      {
        name: 'Garlic powder',
        amount: '1 teaspoon',
        visual: 'One small spoonful'
      },
      {
        name: 'Flour tortillas',
        amount: '8-10 tortillas',
        visual: 'One package'
      },
      {
        name: 'Toppings: sour cream, cheese, salsa, guacamole',
        amount: 'As desired',
        visual: 'Set up a fajita bar!'
      },
      {
        name: 'Salt and pepper',
        amount: 'To taste',
        visual: 'Season well'
      }
    ],
    steps: [
      {
        id: 1,
        instruction: 'Marinate chicken',
        plainLanguage: 'In a bowl, mix chicken strips with 2 tablespoons lime juice, 1 tablespoon oil, chili powder, cumin, paprika, garlic powder, salt, and pepper. Let sit 10 minutes.',
        timer: 10,
        tip: 'Even 10 minutes of marinating adds tons of flavor'
      },
      {
        id: 2,
        instruction: 'Cook vegetables',
        plainLanguage: 'Heat 1 tablespoon oil in a large skillet over medium-high heat. Add peppers and onions. Cook 6-8 minutes until softened and slightly charred. Remove to a plate.',
        timer: 7,
        tip: 'High heat gives nice char marks!'
      },
      {
        id: 3,
        instruction: 'Cook chicken',
        plainLanguage: 'Add remaining oil to the pan. Add marinated chicken in a single layer. Cook 6-7 minutes, stirring occasionally, until cooked through and lightly browned.',
        timer: 7,
        tip: 'Don\'t crowd the pan - cook in batches if needed'
      },
      {
        id: 4,
        instruction: 'Combine',
        plainLanguage: 'Return vegetables to the pan with chicken. Squeeze remaining lime juice over everything. Toss for 1 minute.',
        timer: 1
      },
      {
        id: 5,
        instruction: 'Warm tortillas',
        plainLanguage: 'Warm tortillas in microwave wrapped in damp paper towel for 30 seconds, or in a dry pan for 30 seconds per side.',
      },
      {
        id: 6,
        instruction: 'Serve',
        plainLanguage: 'Bring the sizzling pan to the table! Let everyone build their own fajitas with their favorite toppings.',
        tip: 'The sizzle is part of the fun! Fajitas literally means "little strips"'
      }
    ]
  },
  {
    id: '41',
    title: 'Caprese Salad',
    description: 'Simple Italian salad with tomatoes, mozzarella, and basil. Fresh and beautiful!',
    difficulty: 'super-easy',
    prepTime: 10,
    cookTime: 0,
    servings: 4,
    tags: ['italian', 'salad', 'vegetarian', 'no-cook', 'fresh'],
    ingredients: [
      {
        name: 'Tomatoes',
        amount: '4 large ripe tomatoes',
        visual: 'Heirloom or beefsteak work great'
      },
      {
        name: 'Fresh mozzarella',
        amount: '1 lb, sliced',
        visual: 'Usually comes in a ball - slice into rounds'
      },
      {
        name: 'Fresh basil',
        amount: '1 bunch, leaves picked',
        visual: 'Big handful of leaves'
      },
      {
        name: 'Extra virgin olive oil',
        amount: '1/4 cup',
        visual: 'Use your best quality oil'
      },
      {
        name: 'Balsamic glaze (optional)',
        amount: 'For drizzling',
        visual: 'Thick, syrupy balsamic'
      },
      {
        name: 'Salt and pepper',
        amount: 'To taste',
        visual: 'Flaky sea salt if you have it'
      }
    ],
    steps: [
      {
        id: 1,
        instruction: 'Slice tomatoes and mozzarella',
        plainLanguage: 'Slice tomatoes and mozzarella into 1/4 inch thick rounds. Try to make them similar thickness.',
        tip: 'Use the ripest tomatoes you can find - they make or break this dish!'
      },
      {
        id: 2,
        instruction: 'Arrange on platter',
        plainLanguage: 'On a large plate, alternate tomato slices, mozzarella slices, and basil leaves in a pretty pattern. Overlap them slightly.',
        tip: 'Classic arrangement: tomato, mozzarella, basil, repeat'
      },
      {
        id: 3,
        instruction: 'Season and drizzle',
        plainLanguage: 'Drizzle generously with olive oil. Sprinkle with salt and pepper. Add balsamic glaze if using.',
        tip: 'Good olive oil is key! This simple dish showcases quality ingredients'
      },
      {
        id: 4,
        instruction: 'Serve immediately',
        plainLanguage: 'Serve at room temperature. Best eaten within 30 minutes of assembling.',
        tip: 'The colors of the Italian flag! Fresh, simple, perfect for summer'
      }
    ]
  }
];
