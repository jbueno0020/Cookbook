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
  }
];
