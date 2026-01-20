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
    image: '/images/scrambled-eggs.jpg',
    nutrition: { calories: 250, protein: 14, carbs: 3, fat: 20, fiber: 0 },
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
    image: '/images/simple-pasta.jpg',
    nutrition: { calories: 420, protein: 12, carbs: 68, fat: 11, fiber: 3 },
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
    image: '/images/grilled-cheese.jpg',
    nutrition: { calories: 380, protein: 15, carbs: 35, fat: 20, fiber: 2 },
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
    image: '/images/tomato-soup.jpg',
    nutrition: { calories: 180, protein: 4, carbs: 24, fat: 8, fiber: 4 },
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
    image: '/images/mac-and-cheese.jpg',
    nutrition: { calories: 480, protein: 18, carbs: 52, fat: 22, fiber: 2 },
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
    image: '/images/chicken-tacos.jpg',
    nutrition: { calories: 320, protein: 28, carbs: 26, fat: 12, fiber: 3 },
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
    image: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=800&q=80',
    nutrition: { calories: 280, protein: 8, carbs: 38, fat: 10, fiber: 1 },
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
    image: '/images/fried-rice.jpg',
    nutrition: { calories: 340, protein: 12, carbs: 52, fat: 10, fiber: 2 },
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
    image: '/images/cheese-quesadilla.jpg',
    nutrition: { calories: 450, protein: 18, carbs: 38, fat: 24, fiber: 3 },
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
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    nutrition: { calories: 520, protein: 32, carbs: 35, fat: 28, fiber: 2 },
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
    image: '/images/spaghetti.jpg',
    nutrition: { calories: 380, protein: 12, carbs: 62, fat: 10, fiber: 4 },
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
    image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=800&q=80',
    nutrition: { calories: 280, protein: 42, carbs: 2, fat: 12, fiber: 0 },
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
    image: '/images/chili.jpg',
    nutrition: { calories: 420, protein: 28, carbs: 38, fat: 16, fiber: 12 },
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
    image: '/images/chilaquiles.jpg',
    nutrition: { calories: 380, protein: 18, carbs: 36, fat: 18, fiber: 4 },
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
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80',
    nutrition: { calories: 450, protein: 35, carbs: 28, fat: 22, fiber: 3 },
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
    image: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&w=800&q=80',
    nutrition: { calories: 420, protein: 22, carbs: 54, fat: 14, fiber: 3 },
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
    image: 'https://images.unsplash.com/photo-1593001874117-9db2e78e46a6?auto=format&fit=crop&w=800&q=80',
    nutrition: { calories: 320, protein: 12, carbs: 38, fat: 14, fiber: 8 },
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
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=800&q=80',
    nutrition: { calories: 280, protein: 14, carbs: 18, fat: 18, fiber: 4 },
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
    image: 'https://images.unsplash.com/photo-1623428454614-abaf00244e52?auto=format&fit=crop&w=800&q=80',
    nutrition: { calories: 340, protein: 18, carbs: 48, fat: 10, fiber: 4 },
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
    title: 'Caprese Salad',
    description: 'Fresh tomatoes, mozzarella, and basil with balsamic. Simple Italian perfection!',
    difficulty: 'super-easy',
    prepTime: 10,
    cookTime: 0,
    servings: 4,
    tags: ['italian', 'salad', 'vegetarian', 'no-cook'],
    image: '/images/caprese-salad.jpg',
    nutrition: { calories: 220, protein: 12, carbs: 8, fat: 16, fiber: 2 },
    ingredients: [
      {
        name: 'Fresh mozzarella',
        amount: '8 oz',
        visual: 'One ball of fresh mozzarella'
      },
      {
        name: 'Ripe tomatoes',
        amount: '3 large',
        visual: 'Three large, ripe tomatoes'
      },
      {
        name: 'Fresh basil',
        amount: '1/4 cup leaves',
        visual: 'About 10-12 fresh basil leaves'
      },
      {
        name: 'Olive oil',
        amount: '3 tablespoons',
        visual: 'Three big spoonfuls'
      },
      {
        name: 'Balsamic vinegar',
        amount: '2 tablespoons',
        visual: 'Two big spoonfuls'
      },
      {
        name: 'Salt and pepper',
        amount: 'To taste',
        visual: 'A pinch of each'
      }
    ],
    steps: [
      {
        id: 1,
        instruction: 'Slice tomatoes and mozzarella',
        plainLanguage: 'Cut tomatoes and mozzarella into slices about 1/4 inch thick. Try to make them similar sizes.',
        tip: 'A sharp knife makes this much easier!'
      },
      {
        id: 2,
        instruction: 'Arrange on a plate',
        plainLanguage: 'Arrange tomato and mozzarella slices on a plate, alternating them. Tuck basil leaves between the slices.',
        tip: 'Make it pretty! Overlap them slightly like fallen dominoes'
      },
      {
        id: 3,
        instruction: 'Drizzle and season',
        plainLanguage: 'Drizzle olive oil and balsamic vinegar over everything. Sprinkle with salt and pepper.',
        tip: 'Use the best olive oil you have - it really makes a difference!'
      },
      {
        id: 4,
        instruction: 'Let it sit and serve',
        plainLanguage: 'Let it sit for 5 minutes so the flavors come together. Serve at room temperature!',
        tip: 'Perfect summer dish! Serve with crusty bread'
      }
    ]
  },
  {
    id: '21',
    title: 'Chicken Noodle Soup',
    description: 'Classic comfort soup that\'s perfect when you\'re feeling under the weather!',
    difficulty: 'easy',
    prepTime: 15,
    cookTime: 30,
    servings: 6,
    tags: ['soup', 'comfort-food', 'chicken', 'healthy'],
    image: 'https://images.unsplash.com/photo-1547424450-2c12a0f9dc13?auto=format&fit=crop&w=800&q=80',
    nutrition: { calories: 240, protein: 22, carbs: 28, fat: 6, fiber: 3 },
    ingredients: [
      {
        name: 'Chicken breast',
        amount: '1 lb',
        visual: 'About 2 chicken breasts'
      },
      {
        name: 'Egg noodles',
        amount: '2 cups',
        visual: 'About half a package'
      },
      {
        name: 'Carrots',
        amount: '3 medium, sliced',
        visual: 'Three carrots cut into rounds'
      },
      {
        name: 'Celery',
        amount: '3 stalks, chopped',
        visual: 'Three celery stalks in small pieces'
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
        amount: '8 cups',
        visual: 'Two standard cartons'
      },
      {
        name: 'Bay leaf',
        amount: '2 leaves',
        visual: 'Dried bay leaves - find in spice aisle'
      },
      {
        name: 'Thyme',
        amount: '1 teaspoon dried',
        visual: 'One small spoonful'
      },
      {
        name: 'Salt and pepper',
        amount: 'To taste',
        visual: 'Season as you like'
      },
      {
        name: 'Oil',
        amount: '2 tablespoons',
        visual: 'Two big spoonfuls'
      }
    ],
    steps: [
      {
        id: 1,
        instruction: 'Cook the chicken',
        plainLanguage: 'In a large pot, bring chicken broth to a boil. Add chicken breasts and cook for 15 minutes until cooked through. Remove chicken and shred with two forks.',
        timer: 15,
        tip: 'Save the broth! You\'ll use it for the soup'
      },
      {
        id: 2,
        instruction: 'Sauté vegetables',
        plainLanguage: 'In the same pot, heat oil over medium. Add onion, carrots, and celery. Cook for 5-7 minutes until starting to soften.',
        timer: 6
      },
      {
        id: 3,
        instruction: 'Add garlic and herbs',
        plainLanguage: 'Add garlic, bay leaves, and thyme. Cook for 1 minute until fragrant.',
        timer: 1
      },
      {
        id: 4,
        instruction: 'Add broth and noodles',
        plainLanguage: 'Pour the broth back in. Bring to a boil. Add egg noodles and cook for 6-8 minutes until noodles are tender.',
        timer: 7,
        tip: 'Fresh parsley at the end adds great flavor!'
      },
      {
        id: 5,
        instruction: 'Add chicken back',
        plainLanguage: 'Add shredded chicken back to pot. Season with salt and pepper to taste. Remove bay leaves.',
        tip: 'Don\'t eat the bay leaves! Fish them out before serving'
      },
      {
        id: 6,
        instruction: 'Serve hot',
        plainLanguage: 'Ladle into bowls and serve hot. The ultimate feel-good soup!',
        tip: 'Even better the next day! Noodles will absorb broth, so add more when reheating'
      }
    ]
  },
  {
    id: '22',
    title: 'Guacamole',
    description: 'Fresh, creamy, authentic guacamole. Perfect for chips or tacos!',
    difficulty: 'super-easy',
    prepTime: 10,
    cookTime: 0,
    servings: 4,
    tags: ['mexican', 'dip', 'vegetarian', 'vegan', 'no-cook'],
    image: 'https://images.unsplash.com/photo-1604467794349-0b74285de7e5?auto=format&fit=crop&w=800&q=80',
    nutrition: { calories: 180, protein: 2, carbs: 12, fat: 15, fiber: 7 },
    ingredients: [
      {
        name: 'Ripe avocados',
        amount: '3 avocados',
        visual: 'Should be slightly soft when squeezed'
      },
      {
        name: 'Lime',
        amount: '1 lime, juiced',
        visual: 'One lime squeezed'
      },
      {
        name: 'Tomato',
        amount: '1 small, diced',
        visual: 'One small tomato in tiny pieces'
      },
      {
        name: 'Red onion',
        amount: '1/4 cup diced',
        visual: 'About quarter of an onion, chopped fine'
      },
      {
        name: 'Cilantro',
        amount: '2 tablespoons chopped',
        visual: 'Small handful of fresh cilantro'
      },
      {
        name: 'Salt',
        amount: '1/2 teaspoon',
        visual: 'Half a small spoonful'
      },
      {
        name: 'Jalapeño (optional)',
        amount: '1 pepper, minced',
        visual: 'One small pepper - remove seeds for less heat'
      }
    ],
    steps: [
      {
        id: 1,
        instruction: 'Cut and scoop avocados',
        plainLanguage: 'Cut avocados in half around the pit. Remove pit. Scoop flesh into a bowl with a spoon.',
        tip: 'To remove pit safely: carefully tap it with a knife, then twist and lift'
      },
      {
        id: 2,
        instruction: 'Mash the avocado',
        plainLanguage: 'Mash avocados with a fork until you get your desired texture. Leave some chunks for texture or make it smooth!',
        tip: 'Most people like it chunky! Don\'t over-mash'
      },
      {
        id: 3,
        instruction: 'Add lime juice',
        plainLanguage: 'Squeeze lime juice over the mashed avocado and stir. This adds flavor and keeps it from turning brown!',
        tip: 'Lime juice is the secret to keeping guacamole green!'
      },
      {
        id: 4,
        instruction: 'Mix in other ingredients',
        plainLanguage: 'Add tomato, onion, cilantro, jalapeño if using, and salt. Gently fold everything together.',
        tip: 'Add ingredients one at a time and taste as you go!'
      },
      {
        id: 5,
        instruction: 'Taste and adjust',
        plainLanguage: 'Taste and add more salt or lime juice if needed. Everyone has different preferences!',
        tip: 'The flavors get better after sitting 10 minutes'
      },
      {
        id: 6,
        instruction: 'Serve immediately',
        plainLanguage: 'Serve with tortilla chips! If storing, press plastic wrap directly on the surface to prevent browning.',
        tip: 'Keep the avocado pit in the guac to help prevent browning!'
      }
    ]
  },
  {
    id: '23',
    title: 'French Toast',
    description: 'Crispy outside, custardy inside. A classic breakfast treat!',
    difficulty: 'super-easy',
    prepTime: 5,
    cookTime: 10,
    servings: 4,
    tags: ['breakfast', 'sweet', 'quick', 'kid-friendly'],
    image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=800&q=80',
    nutrition: { calories: 320, protein: 10, carbs: 42, fat: 12, fiber: 2 },
    ingredients: [
      {
        name: 'Bread',
        amount: '8 slices',
        visual: 'Thick slices work best - brioche or Texas toast ideal'
      },
      {
        name: 'Eggs',
        amount: '4 eggs',
        visual: 'Four eggs from the carton'
      },
      {
        name: 'Milk',
        amount: '1/2 cup',
        visual: 'Half a measuring cup'
      },
      {
        name: 'Vanilla extract',
        amount: '1 teaspoon',
        visual: 'One small spoonful'
      },
      {
        name: 'Cinnamon',
        amount: '1/2 teaspoon',
        visual: 'Half a small spoonful'
      },
      {
        name: 'Sugar',
        amount: '1 tablespoon',
        visual: 'One big spoonful'
      },
      {
        name: 'Butter',
        amount: '3 tablespoons',
        visual: 'For cooking'
      },
      {
        name: 'Maple syrup',
        amount: 'For serving',
        visual: 'Your favorite syrup!'
      }
    ],
    steps: [
      {
        id: 1,
        instruction: 'Make the egg mixture',
        plainLanguage: 'In a shallow bowl, whisk together eggs, milk, vanilla, cinnamon, and sugar until well combined.',
        tip: 'A wide, shallow bowl makes dipping easier!'
      },
      {
        id: 2,
        instruction: 'Heat the pan',
        plainLanguage: 'Heat a large pan or griddle over medium heat. Add a pat of butter and let it melt.',
        timer: 1
      },
      {
        id: 3,
        instruction: 'Dip the bread',
        plainLanguage: 'Dip each bread slice into the egg mixture, coating both sides. Let excess drip off. Don\'t soak too long!',
        tip: '3-4 seconds per side is perfect - too long makes it soggy'
      },
      {
        id: 4,
        instruction: 'Cook the French toast',
        plainLanguage: 'Place dipped bread in the hot pan. Cook for 2-3 minutes per side until golden brown. Add more butter between batches.',
        timer: 3,
        tip: 'Medium heat is key - too high burns the outside before cooking inside'
      },
      {
        id: 5,
        instruction: 'Keep warm',
        plainLanguage: 'Place cooked French toast on a plate in a warm oven (200°F) while you cook the rest.',
        tip: 'This keeps the first pieces warm and crispy!'
      },
      {
        id: 6,
        instruction: 'Serve with toppings',
        plainLanguage: 'Stack French toast on plates. Top with butter, maple syrup, powdered sugar, or fresh berries!',
        tip: 'Try it with whipped cream and strawberries for a special treat!'
      }
    ]
  },
  {
    id: '24',
    title: 'Beef Tacos',
    description: 'Seasoned ground beef tacos with all your favorite toppings. Family favorite!',
    difficulty: 'super-easy',
    prepTime: 5,
    cookTime: 15,
    servings: 6,
    tags: ['mexican', 'beef', 'quick', 'dinner'],
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80',
    nutrition: { calories: 380, protein: 24, carbs: 28, fat: 18, fiber: 4 },
    ingredients: [
      {
        name: 'Ground beef',
        amount: '1 lb',
        visual: 'One package from the meat section'
      },
      {
        name: 'Taco seasoning',
        amount: '2 tablespoons',
        visual: 'Two big spoonfuls or one packet'
      },
      {
        name: 'Water',
        amount: '1/4 cup',
        visual: 'Quarter of a measuring cup'
      },
      {
        name: 'Taco shells or tortillas',
        amount: '12 shells',
        visual: 'One package'
      },
      {
        name: 'Shredded lettuce',
        amount: '2 cups',
        visual: 'Pre-shredded is easiest!'
      },
      {
        name: 'Shredded cheese',
        amount: '1 cup',
        visual: 'Big handful of cheddar'
      },
      {
        name: 'Diced tomatoes',
        amount: '1 cup',
        visual: 'One large tomato chopped'
      },
      {
        name: 'Sour cream and salsa',
        amount: 'For topping',
        visual: 'Your favorites!'
      }
    ],
    steps: [
      {
        id: 1,
        instruction: 'Brown the beef',
        plainLanguage: 'Heat a large pan over medium-high heat. Add ground beef and cook, breaking it up with a spoon, until no pink remains. About 6-8 minutes.',
        timer: 7,
        tip: 'Break it into small crumbles for better texture!'
      },
      {
        id: 2,
        instruction: 'Drain the fat',
        plainLanguage: 'Carefully pour off the excess fat into a bowl or can. Be careful - it\'s hot!',
        tip: 'Use oven mitts and drain slowly'
      },
      {
        id: 3,
        instruction: 'Add seasoning',
        plainLanguage: 'Sprinkle taco seasoning over the beef. Add water. Stir well.',
        tip: 'The water helps distribute the seasoning evenly'
      },
      {
        id: 4,
        instruction: 'Simmer',
        plainLanguage: 'Turn heat to medium-low. Let it bubble gently for 3-4 minutes until sauce thickens.',
        timer: 4,
        tip: 'Stir occasionally so it doesn\'t stick'
      },
      {
        id: 5,
        instruction: 'Warm shells',
        plainLanguage: 'While beef simmers, warm taco shells according to package directions. Usually 5 minutes in 350°F oven.',
        timer: 5
      },
      {
        id: 6,
        instruction: 'Set up taco bar',
        plainLanguage: 'Put all toppings in separate bowls. Let everyone build their own tacos!',
        tip: 'Kids love making their own tacos!'
      },
      {
        id: 7,
        instruction: 'Assemble and enjoy',
        plainLanguage: 'Fill shells with beef, then add your favorite toppings. Enjoy immediately!',
        tip: 'Try adding guacamole, jalapeños, or hot sauce for extra flavor!'
      }
    ]
  },
  {
    id: '25',
    title: 'Spaghetti Carbonara',
    description: 'Creamy Italian pasta with bacon and cheese. Rich and delicious!',
    difficulty: 'intermediate',
    prepTime: 10,
    cookTime: 20,
    servings: 4,
    tags: ['italian', 'pasta', 'dinner'],
    image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=800&q=80',
    nutrition: { calories: 580, protein: 24, carbs: 68, fat: 24, fiber: 3 },
    ingredients: [
      {
        name: 'Spaghetti',
        amount: '1 lb',
        visual: 'One full box'
      },
      {
        name: 'Bacon or pancetta',
        amount: '8 oz',
        visual: 'About 8 strips of bacon'
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
        name: 'Garlic',
        amount: '3 cloves, minced',
        visual: '3 small pieces chopped tiny'
      },
      {
        name: 'Black pepper',
        amount: '1 teaspoon',
        visual: 'Freshly ground is best'
      },
      {
        name: 'Salt',
        amount: 'For pasta water',
        visual: 'One big spoonful'
      }
    ],
    steps: [
      {
        id: 1,
        instruction: 'Cook the pasta',
        plainLanguage: 'Boil a large pot of salted water. Cook spaghetti according to package directions until al dente. Save 1 cup of pasta water before draining!',
        timer: 10,
        tip: 'The starchy pasta water is KEY for the sauce - don\'t skip saving it!'
      },
      {
        id: 2,
        instruction: 'Cook the bacon',
        plainLanguage: 'While pasta cooks, cut bacon into small pieces. Cook in a large pan over medium heat until crispy, about 6-8 minutes. Add garlic in the last minute.',
        timer: 8,
        tip: 'Don\'t drain the bacon fat - it adds amazing flavor!'
      },
      {
        id: 3,
        instruction: 'Make the egg mixture',
        plainLanguage: 'In a bowl, whisk together eggs, parmesan cheese, and black pepper until smooth.',
        tip: 'This will become your creamy sauce - no cream needed!'
      },
      {
        id: 4,
        instruction: 'Combine pasta and bacon',
        plainLanguage: 'Turn heat off under bacon pan. Add drained hot pasta to the pan with bacon. Toss to coat.',
        tip: 'Off heat! This is important so eggs don\'t scramble'
      },
      {
        id: 5,
        instruction: 'Add egg mixture',
        plainLanguage: 'Quickly pour egg mixture over pasta. Toss rapidly for 1-2 minutes. The heat from pasta will cook the eggs into a creamy sauce. Add pasta water a little at a time if too thick.',
        tip: 'Work fast and keep tossing! The residual heat cooks the eggs without scrambling'
      },
      {
        id: 6,
        instruction: 'Adjust consistency',
        plainLanguage: 'Add reserved pasta water, a few tablespoons at a time, until you get a silky, creamy sauce that coats the pasta.',
        tip: 'The sauce should be creamy, not dry or watery'
      },
      {
        id: 7,
        instruction: 'Serve immediately',
        plainLanguage: 'Divide among plates. Top with extra parmesan and black pepper. Serve right away!',
        tip: 'Carbonara waits for no one! Best eaten immediately while hot and creamy'
      }
    ]
  },
  {
    id: '26',
    title: 'Chicken Stir-Fry',
    description: 'Quick, colorful veggie and chicken stir-fry. Healthier than takeout!',
    difficulty: 'easy',
    prepTime: 15,
    cookTime: 12,
    servings: 4,
    tags: ['asian', 'chicken', 'healthy', 'quick'],
    image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?auto=format&fit=crop&w=800&q=80',
    nutrition: { calories: 340, protein: 32, carbs: 28, fat: 12, fiber: 4 },
    ingredients: [
      {
        name: 'Chicken breast',
        amount: '1 lb, sliced thin',
        visual: 'Two breasts cut into strips'
      },
      {
        name: 'Mixed vegetables',
        amount: '4 cups',
        visual: 'Bell peppers, broccoli, carrots - fresh or frozen'
      },
      {
        name: 'Soy sauce',
        amount: '1/4 cup',
        visual: 'Four big spoonfuls'
      },
      {
        name: 'Honey or brown sugar',
        amount: '2 tablespoons',
        visual: 'Two big spoonfuls'
      },
      {
        name: 'Garlic',
        amount: '3 cloves, minced',
        visual: '3 small pieces chopped tiny'
      },
      {
        name: 'Ginger',
        amount: '1 teaspoon minced',
        visual: 'Small piece of fresh ginger'
      },
      {
        name: 'Cornstarch',
        amount: '1 tablespoon',
        visual: 'One big spoonful'
      },
      {
        name: 'Vegetable oil',
        amount: '3 tablespoons',
        visual: 'Three big spoonfuls'
      },
      {
        name: 'Sesame seeds',
        amount: 'For garnish',
        visual: 'Optional topping'
      }
    ],
    steps: [
      {
        id: 1,
        instruction: 'Make the sauce',
        plainLanguage: 'In a small bowl, whisk together soy sauce, honey, garlic, ginger, and cornstarch. Set aside.',
        tip: 'Cornstarch thickens the sauce perfectly!'
      },
      {
        id: 2,
        instruction: 'Cook the chicken',
        plainLanguage: 'Heat 2 tablespoons oil in a large pan or wok over high heat. Add chicken and cook 5-6 minutes until cooked through. Remove to a plate.',
        timer: 6,
        tip: 'High heat gives that restaurant-style char!'
      },
      {
        id: 3,
        instruction: 'Cook the vegetables',
        plainLanguage: 'Add remaining oil to pan. Add vegetables and stir-fry for 4-5 minutes until tender-crisp.',
        timer: 5,
        tip: 'Keep them moving! Stir constantly for even cooking'
      },
      {
        id: 4,
        instruction: 'Combine everything',
        plainLanguage: 'Return chicken to pan. Pour sauce over everything. Stir-fry for 2 minutes until sauce thickens and coats everything.',
        timer: 2
      },
      {
        id: 5,
        instruction: 'Serve over rice',
        plainLanguage: 'Serve immediately over rice. Garnish with sesame seeds if desired!',
        tip: 'Also great over noodles or cauliflower rice for low-carb!'
      }
    ]
  },
  {
    id: '27',
    title: 'Beef and Broccoli',
    description: 'Tender beef with crispy broccoli in savory sauce. Chinese takeout classic!',
    difficulty: 'intermediate',
    prepTime: 15,
    cookTime: 15,
    servings: 4,
    tags: ['asian', 'beef', 'dinner', 'chinese'],
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=800&q=80',
    nutrition: { calories: 420, protein: 34, carbs: 24, fat: 22, fiber: 4 },
    ingredients: [
      {
        name: 'Flank steak or sirloin',
        amount: '1 lb, sliced thin',
        visual: 'Slice against the grain into thin strips'
      },
      {
        name: 'Broccoli',
        amount: '4 cups florets',
        visual: 'One large head cut into pieces'
      },
      {
        name: 'Soy sauce',
        amount: '1/3 cup',
        visual: 'About 5 tablespoons'
      },
      {
        name: 'Oyster sauce',
        amount: '2 tablespoons',
        visual: 'Find in Asian section'
      },
      {
        name: 'Brown sugar',
        amount: '2 tablespoons',
        visual: 'Two big spoonfuls'
      },
      {
        name: 'Garlic',
        amount: '4 cloves, minced',
        visual: '4 small pieces chopped tiny'
      },
      {
        name: 'Ginger',
        amount: '1 tablespoon minced',
        visual: 'One inch piece of fresh ginger'
      },
      {
        name: 'Cornstarch',
        amount: '2 tablespoons',
        visual: 'Two big spoonfuls'
      },
      {
        name: 'Water',
        amount: '1/2 cup',
        visual: 'Half a measuring cup'
      },
      {
        name: 'Vegetable oil',
        amount: '3 tablespoons',
        visual: 'Three big spoonfuls'
      },
      {
        name: 'Sesame oil',
        amount: '1 teaspoon',
        visual: 'For finishing'
      }
    ],
    steps: [
      {
        id: 1,
        instruction: 'Marinate the beef',
        plainLanguage: 'In a bowl, toss beef with 1 tablespoon soy sauce and 1 tablespoon cornstarch. Let sit while you prep other ingredients.',
        tip: 'This makes the beef tender and helps it brown!'
      },
      {
        id: 2,
        instruction: 'Make the sauce',
        plainLanguage: 'In a small bowl, whisk together remaining soy sauce, oyster sauce, brown sugar, water, and 1 tablespoon cornstarch. Set aside.',
        tip: 'Have everything ready - stir-frying happens fast!'
      },
      {
        id: 3,
        instruction: 'Blanch the broccoli',
        plainLanguage: 'Boil water in a pot. Add broccoli and cook for 2 minutes. Drain and rinse with cold water. This keeps it bright green!',
        timer: 2,
        tip: 'This step ensures crisp-tender broccoli!'
      },
      {
        id: 4,
        instruction: 'Sear the beef',
        plainLanguage: 'Heat 2 tablespoons oil in a large pan or wok over high heat. Add beef in a single layer. Cook 2-3 minutes without stirring, then flip and cook 1 minute more. Remove to plate.',
        timer: 4,
        tip: 'Don\'t overcrowd! Cook in batches if needed for best searing'
      },
      {
        id: 5,
        instruction: 'Cook aromatics',
        plainLanguage: 'Add remaining oil. Add garlic and ginger. Stir-fry for 30 seconds until fragrant.',
        tip: 'Watch carefully - garlic burns fast on high heat!'
      },
      {
        id: 6,
        instruction: 'Combine everything',
        plainLanguage: 'Add broccoli back to pan. Pour in sauce. Add beef back. Toss everything together for 2 minutes until sauce thickens.',
        timer: 2
      },
      {
        id: 7,
        instruction: 'Finish and serve',
        plainLanguage: 'Drizzle with sesame oil. Toss once more. Serve immediately over white rice!',
        tip: 'Better than takeout and you know exactly what\'s in it!'
      }
    ]
  },
  {
    id: '28',
    title: 'Meatballs in Marinara',
    description: 'Tender homemade meatballs in rich tomato sauce. Italian comfort food!',
    difficulty: 'easy',
    prepTime: 15,
    cookTime: 30,
    servings: 6,
    tags: ['italian', 'beef', 'dinner', 'pasta'],
    image: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=800&q=80',
    nutrition: { calories: 380, protein: 26, carbs: 28, fat: 18, fiber: 4 },
    ingredients: [
      {
        name: 'Ground beef',
        amount: '1 lb',
        visual: 'One package from meat section'
      },
      {
        name: 'Breadcrumbs',
        amount: '1/2 cup',
        visual: 'Half a coffee cup full'
      },
      {
        name: 'Egg',
        amount: '1 egg',
        visual: 'One egg from the carton'
      },
      {
        name: 'Parmesan cheese',
        amount: '1/4 cup grated',
        visual: 'Quarter cup'
      },
      {
        name: 'Garlic',
        amount: '2 cloves, minced',
        visual: '2 small pieces chopped tiny'
      },
      {
        name: 'Italian seasoning',
        amount: '1 teaspoon',
        visual: 'One small spoonful'
      },
      {
        name: 'Salt and pepper',
        amount: '1/2 teaspoon each',
        visual: 'Half a small spoonful of each'
      },
      {
        name: 'Marinara sauce',
        amount: '24 oz jar',
        visual: 'One large jar of your favorite sauce'
      },
      {
        name: 'Olive oil',
        amount: '2 tablespoons',
        visual: 'For browning'
      }
    ],
    steps: [
      {
        id: 1,
        instruction: 'Mix meatball ingredients',
        plainLanguage: 'In a large bowl, combine ground beef, breadcrumbs, egg, parmesan, garlic, Italian seasoning, salt, and pepper. Mix gently with your hands until just combined.',
        tip: 'Don\'t overmix! It makes meatballs tough'
      },
      {
        id: 2,
        instruction: 'Form the meatballs',
        plainLanguage: 'Roll mixture into balls about the size of a golf ball. You should get about 16-18 meatballs.',
        tip: 'Wet your hands to prevent sticking!'
      },
      {
        id: 3,
        instruction: 'Brown the meatballs',
        plainLanguage: 'Heat oil in a large pan over medium-high heat. Brown meatballs on all sides, about 6-8 minutes total. They don\'t need to be cooked through yet.',
        timer: 8,
        tip: 'Browning adds tons of flavor! Don\'t skip this step'
      },
      {
        id: 4,
        instruction: 'Simmer in sauce',
        plainLanguage: 'Pour marinara sauce over browned meatballs. Turn heat to low. Cover and simmer for 20 minutes until meatballs are cooked through.',
        timer: 20,
        tip: 'The sauce keeps them moist and tender!'
      },
      {
        id: 5,
        instruction: 'Serve',
        plainLanguage: 'Serve over spaghetti, in a sub sandwich, or just with crusty bread!',
        tip: 'Top with extra parmesan and fresh basil!'
      }
    ]
  },
  {
    id: '29',
    title: 'Vegetable Soup',
    description: 'Healthy, hearty vegetable soup packed with nutrients. Perfect for meal prep!',
    difficulty: 'easy',
    prepTime: 15,
    cookTime: 30,
    servings: 8,
    tags: ['soup', 'vegetarian', 'healthy', 'vegan'],
    image: 'https://images.unsplash.com/photo-1547592180-ea53db684368?auto=format&fit=crop&w=800&q=80',
    nutrition: { calories: 160, protein: 4, carbs: 32, fat: 3, fiber: 6 },
    ingredients: [
      {
        name: 'Olive oil',
        amount: '2 tablespoons',
        visual: 'Two big spoonfuls'
      },
      {
        name: 'Onion',
        amount: '1 large, diced',
        visual: 'One onion cut into small pieces'
      },
      {
        name: 'Carrots',
        amount: '3 carrots, sliced',
        visual: 'Three carrots in rounds'
      },
      {
        name: 'Celery',
        amount: '3 stalks, chopped',
        visual: 'Three stalks in small pieces'
      },
      {
        name: 'Potatoes',
        amount: '2 medium, diced',
        visual: 'Two potatoes cut into cubes'
      },
      {
        name: 'Green beans',
        amount: '1 cup',
        visual: 'Fresh or frozen - cut into pieces'
      },
      {
        name: 'Zucchini',
        amount: '1 medium, diced',
        visual: 'One zucchini in cubes'
      },
      {
        name: 'Canned diced tomatoes',
        amount: '14 oz can',
        visual: 'One standard can'
      },
      {
        name: 'Vegetable broth',
        amount: '6 cups',
        visual: 'One and a half cartons'
      },
      {
        name: 'Garlic',
        amount: '3 cloves, minced',
        visual: '3 small pieces chopped tiny'
      },
      {
        name: 'Italian seasoning',
        amount: '1 teaspoon',
        visual: 'One small spoonful'
      },
      {
        name: 'Bay leaf',
        amount: '1 leaf',
        visual: 'One dried bay leaf'
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
        instruction: 'Sauté aromatics',
        plainLanguage: 'Heat oil in a large pot over medium heat. Add onion, carrots, and celery. Cook for 5-7 minutes until starting to soften.',
        timer: 6
      },
      {
        id: 2,
        instruction: 'Add garlic and seasonings',
        plainLanguage: 'Add garlic and Italian seasoning. Cook for 1 minute until fragrant.',
        timer: 1
      },
      {
        id: 3,
        instruction: 'Add liquids and vegetables',
        plainLanguage: 'Add broth, tomatoes, potatoes, and bay leaf. Bring to a boil, then reduce to simmer. Cook for 15 minutes.',
        timer: 15,
        tip: 'Potatoes take longest, so they go in first!'
      },
      {
        id: 4,
        instruction: 'Add remaining vegetables',
        plainLanguage: 'Add green beans and zucchini. Simmer for 10 more minutes until all vegetables are tender.',
        timer: 10,
        tip: 'Add quicker-cooking veggies later so they don\'t get mushy'
      },
      {
        id: 5,
        instruction: 'Season and serve',
        plainLanguage: 'Remove bay leaf. Taste and add salt and pepper as needed. Serve hot with crusty bread!',
        tip: 'Great for meal prep! Lasts 5 days in fridge or freeze for up to 3 months'
      }
    ]
  },
  {
    id: '30',
    title: 'Banana Bread',
    description: 'Moist, sweet banana bread. Perfect way to use overripe bananas!',
    difficulty: 'easy',
    prepTime: 15,
    cookTime: 60,
    servings: 10,
    tags: ['baking', 'dessert', 'sweet', 'breakfast'],
    image: 'https://images.unsplash.com/photo-1587241321921-91a834d82fdb?auto=format&fit=crop&w=800&q=80',
    nutrition: { calories: 280, protein: 4, carbs: 48, fat: 9, fiber: 3 },
    ingredients: [
      {
        name: 'Overripe bananas',
        amount: '3 large bananas',
        visual: 'The browner, the better!'
      },
      {
        name: 'Melted butter',
        amount: '1/3 cup',
        visual: 'About 5 tablespoons, melted'
      },
      {
        name: 'Sugar',
        amount: '3/4 cup',
        visual: 'Three-quarters of a measuring cup'
      },
      {
        name: 'Egg',
        amount: '1 large egg, beaten',
        visual: 'One egg from the carton'
      },
      {
        name: 'Vanilla extract',
        amount: '1 teaspoon',
        visual: 'One small spoonful'
      },
      {
        name: 'Baking soda',
        amount: '1 teaspoon',
        visual: 'One small spoonful'
      },
      {
        name: 'Salt',
        amount: '1/4 teaspoon',
        visual: 'Quarter of a small spoonful'
      },
      {
        name: 'All-purpose flour',
        amount: '1.5 cups',
        visual: 'One and a half cups'
      },
      {
        name: 'Chocolate chips or nuts (optional)',
        amount: '1/2 cup',
        visual: 'Optional add-ins!'
      }
    ],
    steps: [
      {
        id: 1,
        instruction: 'Preheat oven',
        plainLanguage: 'Preheat your oven to 350°F. Grease a 9x5 inch loaf pan with butter or spray.',
        timer: 10,
        tip: 'You can also line with parchment paper for easy removal!'
      },
      {
        id: 2,
        instruction: 'Mash bananas',
        plainLanguage: 'In a large bowl, mash bananas with a fork until mostly smooth. A few lumps are okay!',
        tip: 'The riper the bananas, the sweeter and more flavorful your bread!'
      },
      {
        id: 3,
        instruction: 'Mix wet ingredients',
        plainLanguage: 'Stir melted butter into mashed bananas. Mix in sugar, beaten egg, and vanilla.',
        tip: 'Make sure butter isn\'t too hot or it will cook the egg!'
      },
      {
        id: 4,
        instruction: 'Add dry ingredients',
        plainLanguage: 'Sprinkle baking soda and salt over the mixture. Add flour. Stir just until combined - don\'t overmix!',
        tip: 'Overmixing makes the bread tough. Lumpy batter is OK!'
      },
      {
        id: 5,
        instruction: 'Add mix-ins',
        plainLanguage: 'Fold in chocolate chips or nuts if using.',
        tip: 'Walnuts and chocolate chips are classic combos!'
      },
      {
        id: 6,
        instruction: 'Bake',
        plainLanguage: 'Pour batter into prepared pan. Bake for 50-60 minutes until a toothpick inserted in center comes out clean.',
        timer: 55,
        tip: 'Top will be dark golden brown. If browning too fast, tent with foil'
      },
      {
        id: 7,
        instruction: 'Cool and serve',
        plainLanguage: 'Let cool in pan for 10 minutes, then turn out onto a wire rack. Best when completely cool but tastes amazing warm!',
        timer: 10,
        tip: 'Wraps well and keeps for days. Even better the next day!'
      }
    ]
  },
  {
    id: '31',
    title: 'Chicken Caesar Salad',
    description: 'Crisp romaine, grilled chicken, parmesan, and creamy Caesar dressing. Restaurant classic!',
    difficulty: 'easy',
    prepTime: 15,
    cookTime: 12,
    servings: 4,
    tags: ['salad', 'chicken', 'healthy', 'lunch'],
    image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=800&q=80',
    nutrition: { calories: 380, protein: 32, carbs: 12, fat: 24, fiber: 3 },
    ingredients: [
      {
        name: 'Chicken breasts',
        amount: '2 breasts (about 1 lb)',
        visual: 'Two chicken breast pieces'
      },
      {
        name: 'Romaine lettuce',
        amount: '1 large head',
        visual: 'One large head, chopped'
      },
      {
        name: 'Caesar dressing',
        amount: '3/4 cup',
        visual: 'Store-bought or homemade'
      },
      {
        name: 'Parmesan cheese',
        amount: '1/2 cup shaved',
        visual: 'Use a vegetable peeler for shavings'
      },
      {
        name: 'Croutons',
        amount: '1 cup',
        visual: 'Store-bought or homemade'
      },
      {
        name: 'Olive oil',
        amount: '2 tablespoons',
        visual: 'For cooking chicken'
      },
      {
        name: 'Salt and pepper',
        amount: 'To taste',
        visual: 'For seasoning chicken'
      },
      {
        name: 'Garlic powder',
        amount: '1/2 teaspoon',
        visual: 'Half a small spoonful'
      }
    ],
    steps: [
      {
        id: 1,
        instruction: 'Season and cook chicken',
        plainLanguage: 'Season chicken with salt, pepper, and garlic powder. Heat oil in a pan over medium-high heat. Cook chicken 6 minutes per side until cooked through.',
        timer: 12,
        tip: 'Chicken is done when it reaches 165°F inside'
      },
      {
        id: 2,
        instruction: 'Rest and slice chicken',
        plainLanguage: 'Remove chicken to a cutting board. Let rest 5 minutes, then slice into strips.',
        timer: 5,
        tip: 'Resting keeps the juices in!'
      },
      {
        id: 3,
        instruction: 'Prepare lettuce',
        plainLanguage: 'Chop romaine into bite-sized pieces. Wash and dry thoroughly.',
        tip: 'A salad spinner makes drying easy! Wet lettuce makes dressing watery'
      },
      {
        id: 4,
        instruction: 'Assemble salad',
        plainLanguage: 'Place lettuce in a large bowl. Add about half the dressing and toss to coat.',
        tip: 'Start with less dressing - you can always add more!'
      },
      {
        id: 5,
        instruction: 'Add toppings',
        plainLanguage: 'Divide salad among plates. Top with sliced chicken, croutons, and parmesan shavings. Drizzle with more dressing if desired.',
        tip: 'Serve immediately while chicken is warm and lettuce is crisp!'
      }
    ]
  },
  {
    id: '32',
    title: 'Beef Chili',
    description: 'Rich, hearty chili with beans and warm spices. A crowd-pleaser!',
    difficulty: 'easy',
    prepTime: 15,
    cookTime: 45,
    servings: 8,
    tags: ['soup', 'beef', 'comfort-food', 'one-pot'],
    image: 'https://images.unsplash.com/photo-1622973536968-3ead9e780960?auto=format&fit=crop&w=800&q=80',
    nutrition: { calories: 450, protein: 32, carbs: 38, fat: 18, fiber: 12 },
    ingredients: [
      {
        name: 'Ground beef',
        amount: '2 lbs',
        visual: 'Two packages from meat section'
      },
      {
        name: 'Onion',
        amount: '1 large, diced',
        visual: 'One large onion chopped'
      },
      {
        name: 'Bell pepper',
        amount: '1 green pepper, diced',
        visual: 'One pepper in small pieces'
      },
      {
        name: 'Garlic',
        amount: '4 cloves, minced',
        visual: '4 small pieces chopped tiny'
      },
      {
        name: 'Kidney beans',
        amount: '2 cans (15 oz each), drained',
        visual: 'Two cans, liquid poured off'
      },
      {
        name: 'Diced tomatoes',
        amount: '2 cans (28 oz each)',
        visual: 'Two large cans'
      },
      {
        name: 'Tomato paste',
        amount: '2 tablespoons',
        visual: 'Two big spoonfuls'
      },
      {
        name: 'Beef broth',
        amount: '1 cup',
        visual: 'One cup from carton'
      },
      {
        name: 'Chili powder',
        amount: '3 tablespoons',
        visual: 'Three big spoonfuls'
      },
      {
        name: 'Cumin',
        amount: '1 tablespoon',
        visual: 'One big spoonful'
      },
      {
        name: 'Paprika',
        amount: '1 teaspoon',
        visual: 'One small spoonful'
      },
      {
        name: 'Cayenne pepper (optional)',
        amount: '1/4 teaspoon',
        visual: 'For extra heat'
      },
      {
        name: 'Salt and pepper',
        amount: 'To taste',
        visual: 'Season as you like'
      },
      {
        name: 'Toppings: cheese, sour cream, green onions',
        amount: 'Optional',
        visual: 'Your favorites!'
      }
    ],
    steps: [
      {
        id: 1,
        instruction: 'Brown the beef',
        plainLanguage: 'In a large pot over medium-high heat, cook ground beef, breaking it up with a spoon, until no pink remains. About 8-10 minutes.',
        timer: 9,
        tip: 'Break into small crumbles for best texture!'
      },
      {
        id: 2,
        instruction: 'Drain fat',
        plainLanguage: 'Carefully drain excess fat from the pot. Be careful - it\'s hot!',
        tip: 'Use oven mitts and pour slowly into a can'
      },
      {
        id: 3,
        instruction: 'Add vegetables',
        plainLanguage: 'Add onion, bell pepper, and garlic to the pot with beef. Cook 5 minutes until vegetables soften.',
        timer: 5
      },
      {
        id: 4,
        instruction: 'Add spices',
        plainLanguage: 'Add chili powder, cumin, paprika, and cayenne if using. Stir for 1 minute to toast the spices.',
        tip: 'Toasting spices releases their flavors!'
      },
      {
        id: 5,
        instruction: 'Add remaining ingredients',
        plainLanguage: 'Add beans, diced tomatoes with juice, tomato paste, and beef broth. Stir well to combine.',
        tip: 'Tomato paste adds rich, concentrated flavor'
      },
      {
        id: 6,
        instruction: 'Simmer',
        plainLanguage: 'Bring to a boil, then reduce heat to low. Simmer uncovered for 30-45 minutes, stirring occasionally. The longer it simmers, the better it tastes!',
        timer: 35,
        tip: 'Chili is even better the next day as flavors develop!'
      },
      {
        id: 7,
        instruction: 'Season and serve',
        plainLanguage: 'Taste and add salt and pepper as needed. Serve hot with your favorite toppings!',
        tip: 'Great with cornbread, crackers, or over baked potatoes!'
      }
    ]
  },
  {
    id: '33',
    title: 'Pesto Pasta',
    description: 'Simple pasta with fresh basil pesto. Bright, flavorful, and comes together in minutes!',
    difficulty: 'easy',
    prepTime: 10,
    cookTime: 12,
    servings: 4,
    tags: ['pasta', 'italian', 'vegetarian', 'quick'],
    image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=800&q=80',
    nutrition: { calories: 420, protein: 14, carbs: 64, fat: 14, fiber: 4 },
    ingredients: [
      {
        name: 'Pasta',
        amount: '1 lb',
        visual: 'Any shape - penne, fusilli, or spaghetti'
      },
      {
        name: 'Fresh basil',
        amount: '2 cups packed',
        visual: 'Large bunch of fresh basil leaves'
      },
      {
        name: 'Pine nuts',
        amount: '1/3 cup',
        visual: 'Can substitute walnuts'
      },
      {
        name: 'Garlic',
        amount: '3 cloves',
        visual: '3 small garlic pieces'
      },
      {
        name: 'Parmesan cheese',
        amount: '1/2 cup grated',
        visual: 'Freshly grated is best'
      },
      {
        name: 'Olive oil',
        amount: '1/2 cup',
        visual: 'Good quality extra virgin'
      },
      {
        name: 'Salt and pepper',
        amount: 'To taste',
        visual: 'Season as you like'
      },
      {
        name: 'Lemon juice',
        amount: '1 tablespoon',
        visual: 'Optional - brightens the flavor'
      }
    ],
    steps: [
      {
        id: 1,
        instruction: 'Cook the pasta',
        plainLanguage: 'Boil a large pot of salted water. Cook pasta according to package directions. Save 1 cup pasta water before draining!',
        timer: 10,
        tip: 'Save that pasta water - it helps thin the pesto!'
      },
      {
        id: 2,
        instruction: 'Toast pine nuts',
        plainLanguage: 'In a dry pan over medium heat, toast pine nuts for 2-3 minutes until golden and fragrant. Watch carefully - they burn fast!',
        timer: 3,
        tip: 'Toasting brings out amazing nutty flavor!'
      },
      {
        id: 3,
        instruction: 'Make the pesto',
        plainLanguage: 'In a food processor, combine basil, toasted pine nuts, garlic, and parmesan. Pulse until finely chopped. With processor running, slowly pour in olive oil until smooth.',
        tip: 'Scrape down sides as needed for even blending'
      },
      {
        id: 4,
        instruction: 'Season pesto',
        plainLanguage: 'Add salt, pepper, and lemon juice if using. Pulse to combine. Taste and adjust seasoning.',
        tip: 'Pesto should be vibrant and well-seasoned!'
      },
      {
        id: 5,
        instruction: 'Combine pasta and pesto',
        plainLanguage: 'Put drained hot pasta back in the pot. Add pesto and toss to coat. Add pasta water, a few tablespoons at a time, until you get a silky sauce.',
        tip: 'The pasta water helps the pesto cling to the pasta perfectly'
      },
      {
        id: 6,
        instruction: 'Serve',
        plainLanguage: 'Serve immediately with extra parmesan on top. Also great with cherry tomatoes or grilled chicken!',
        tip: 'Extra pesto? Store in fridge with olive oil on top to prevent browning'
      }
    ]
  },
  {
    id: '34',
    title: 'Chicken Quesadillas',
    description: 'Crispy tortillas filled with seasoned chicken and melted cheese. Better than restaurant!',
    difficulty: 'easy',
    prepTime: 10,
    cookTime: 15,
    servings: 4,
    tags: ['mexican', 'chicken', 'quick', 'dinner'],
    image: 'https://images.unsplash.com/photo-1593759608136-45eb2ad9507f?auto=format&fit=crop&w=800&q=80',
    nutrition: { calories: 420, protein: 28, carbs: 32, fat: 20, fiber: 3 },
    ingredients: [
      {
        name: 'Cooked chicken',
        amount: '2 cups shredded',
        visual: 'About 2 chicken breasts, cooked and shredded'
      },
      {
        name: 'Flour tortillas',
        amount: '8 large tortillas',
        visual: 'Two packages usually'
      },
      {
        name: 'Shredded cheese',
        amount: '2 cups',
        visual: 'Mexican blend or cheddar'
      },
      {
        name: 'Bell pepper',
        amount: '1 pepper, diced',
        visual: 'Any color, cut small'
      },
      {
        name: 'Onion',
        amount: '1 small, diced',
        visual: 'One small onion chopped'
      },
      {
        name: 'Taco seasoning',
        amount: '1 tablespoon',
        visual: 'One big spoonful'
      },
      {
        name: 'Oil or butter',
        amount: '2 tablespoons',
        visual: 'For cooking'
      },
      {
        name: 'Sour cream and salsa',
        amount: 'For serving',
        visual: 'Your favorites!'
      }
    ],
    steps: [
      {
        id: 1,
        instruction: 'Cook vegetables',
        plainLanguage: 'Heat 1 tablespoon oil in a pan over medium heat. Add bell pepper and onion. Cook 5 minutes until soft.',
        timer: 5
      },
      {
        id: 2,
        instruction: 'Season chicken',
        plainLanguage: 'Add shredded chicken and taco seasoning to the vegetables. Stir well and cook 2 minutes. Remove mixture to a bowl.',
        timer: 2
      },
      {
        id: 3,
        instruction: 'Assemble quesadillas',
        plainLanguage: 'Place tortilla on a clean surface. On one half, sprinkle cheese, add some chicken mixture, then more cheese. Fold tortilla in half.',
        tip: 'Cheese on top and bottom helps seal it together!'
      },
      {
        id: 4,
        instruction: 'Cook quesadillas',
        plainLanguage: 'Heat remaining oil in the pan over medium heat. Cook each quesadilla 2-3 minutes per side until golden and cheese melts.',
        timer: 5,
        tip: 'Press down gently with a spatula for even browning'
      },
      {
        id: 5,
        instruction: 'Cut and serve',
        plainLanguage: 'Cut each quesadilla into triangles. Serve hot with sour cream, salsa, and guacamole!',
        tip: 'A pizza cutter makes cutting super easy!'
      }
    ]
  },
  {
    id: '35',
    title: 'Chocolate Chip Cookies',
    description: 'Classic chewy chocolate chip cookies. The best cookie recipe!',
    difficulty: 'easy',
    prepTime: 15,
    cookTime: 12,
    servings: 24,
    tags: ['baking', 'dessert', 'sweet', 'cookies'],
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&q=80',
    nutrition: { calories: 180, protein: 2, carbs: 24, fat: 9, fiber: 1 },
    ingredients: [
      {
        name: 'Butter',
        amount: '1 cup (2 sticks), softened',
        visual: 'Two sticks left out to soften'
      },
      {
        name: 'Brown sugar',
        amount: '3/4 cup',
        visual: 'Three-quarters of a cup, packed'
      },
      {
        name: 'White sugar',
        amount: '1/4 cup',
        visual: 'Quarter of a cup'
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
        amount: '2.25 cups',
        visual: 'Two and a quarter cups'
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
        plainLanguage: 'Preheat oven to 375°F. Line baking sheets with parchment paper.',
        timer: 10
      },
      {
        id: 2,
        instruction: 'Cream butter and sugars',
        plainLanguage: 'In a large bowl, beat softened butter, brown sugar, and white sugar together until fluffy and light colored. About 2-3 minutes with a mixer.',
        tip: 'This step incorporates air for fluffy cookies!'
      },
      {
        id: 3,
        instruction: 'Add eggs and vanilla',
        plainLanguage: 'Beat in eggs one at a time, then add vanilla. Mix until combined.',
        tip: 'Room temperature eggs mix in better!'
      },
      {
        id: 4,
        instruction: 'Mix dry ingredients',
        plainLanguage: 'In a separate bowl, whisk together flour, baking soda, and salt.',
        tip: 'This ensures even distribution of leavening'
      },
      {
        id: 5,
        instruction: 'Combine wet and dry',
        plainLanguage: 'Add dry ingredients to wet ingredients. Mix just until combined - don\'t overmix! Fold in chocolate chips.',
        tip: 'Overmixing makes cookies tough. Stop when you don\'t see flour streaks'
      },
      {
        id: 6,
        instruction: 'Scoop and bake',
        plainLanguage: 'Drop rounded tablespoons of dough onto prepared baking sheets, 2 inches apart. Bake 9-11 minutes until edges are golden but centers still look slightly underdone.',
        timer: 10,
        tip: 'They\'ll continue cooking on the pan! Underbaking slightly = chewy cookies'
      },
      {
        id: 7,
        instruction: 'Cool and enjoy',
        plainLanguage: 'Let cookies cool on the pan for 5 minutes, then transfer to a wire rack. Best enjoyed warm with cold milk!',
        timer: 5,
        tip: 'For extra gooey centers, take them out when they look slightly underbaked'
      }
    ]
  },
  {
    id: '36',
    title: 'Margherita Pizza',
    description: 'Simple homemade pizza with tomato, mozzarella, and fresh basil. Pizza perfection!',
    difficulty: 'intermediate',
    prepTime: 20,
    cookTime: 15,
    servings: 4,
    tags: ['italian', 'pizza', 'vegetarian', 'dinner'],
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80',
    nutrition: { calories: 520, protein: 22, carbs: 68, fat: 18, fiber: 4 },
    ingredients: [
      {
        name: 'Pizza dough',
        amount: '1 lb',
        visual: 'Store-bought or homemade - from bakery section'
      },
      {
        name: 'Crushed tomatoes',
        amount: '1 cup',
        visual: 'Good quality canned'
      },
      {
        name: 'Fresh mozzarella',
        amount: '8 oz',
        visual: 'One ball, sliced'
      },
      {
        name: 'Fresh basil',
        amount: '1/4 cup leaves',
        visual: 'About 10-15 fresh leaves'
      },
      {
        name: 'Garlic',
        amount: '2 cloves, minced',
        visual: '2 small pieces chopped tiny'
      },
      {
        name: 'Olive oil',
        amount: '3 tablespoons',
        visual: 'Three big spoonfuls'
      },
      {
        name: 'Salt',
        amount: '1/2 teaspoon',
        visual: 'Half a small spoonful'
      },
      {
        name: 'Red pepper flakes',
        amount: 'Optional',
        visual: 'For a little heat'
      }
    ],
    steps: [
      {
        id: 1,
        instruction: 'Preheat oven very hot',
        plainLanguage: 'Preheat oven to 475°F (as hot as it goes!). If you have a pizza stone, put it in the oven now.',
        timer: 15,
        tip: 'Hot oven = crispy crust! This is key for great pizza'
      },
      {
        id: 2,
        instruction: 'Prepare sauce',
        plainLanguage: 'Mix crushed tomatoes with garlic, 1 tablespoon olive oil, and salt. That\'s it - simple is best!',
        tip: 'Don\'t cook the sauce - fresh tomato flavor is traditional'
      },
      {
        id: 3,
        instruction: 'Shape the dough',
        plainLanguage: 'On a floured surface, stretch dough into a 12-inch circle. Use your hands, not a rolling pin! It\'s okay if it\'s not perfect.',
        tip: 'Let dough rest if it keeps shrinking back. Rustic shape is authentic!'
      },
      {
        id: 4,
        instruction: 'Add toppings',
        plainLanguage: 'Place dough on a piece of parchment paper. Spread sauce leaving 1-inch border. Tear mozzarella and scatter over sauce. Drizzle with olive oil.',
        tip: 'Don\'t overload! Less is more for crispy pizza'
      },
      {
        id: 5,
        instruction: 'Bake',
        plainLanguage: 'Slide pizza (on parchment) onto the hot oven rack or pizza stone. Bake 10-15 minutes until crust is golden and cheese is bubbling.',
        timer: 12,
        tip: 'Watch it closely! Every oven is different'
      },
      {
        id: 6,
        instruction: 'Add basil and serve',
        plainLanguage: 'Remove from oven. Immediately top with fresh basil leaves. Drizzle with remaining olive oil. Let cool 2 minutes, then slice and serve!',
        tip: 'Basil goes on AFTER baking so it stays fresh and green!'
      }
    ]
  },
  {
    id: '37',
    title: 'Pulled Pork Sandwiches',
    description: 'Tender, flavorful pulled pork slow-cooked to perfection. Great for a crowd!',
    difficulty: 'intermediate',
    prepTime: 20,
    cookTime: 480,
    servings: 12,
    tags: ['american', 'pork', 'slow-cooker', 'bbq'],
    image: 'https://images.unsplash.com/photo-1606728035253-49e8a23146de?auto=format&fit=crop&w=800&q=80',
    nutrition: { calories: 580, protein: 38, carbs: 45, fat: 24, fiber: 2 },
    ingredients: [
      {
        name: 'Pork shoulder',
        amount: '4-5 lbs',
        visual: 'One large pork shoulder roast'
      },
      {
        name: 'BBQ rub or seasoning',
        amount: '3 tablespoons',
        visual: 'Store-bought or mix: brown sugar, paprika, garlic powder, salt, pepper'
      },
      {
        name: 'BBQ sauce',
        amount: '2 cups',
        visual: 'Your favorite sauce'
      },
      {
        name: 'Apple cider vinegar',
        amount: '1/4 cup',
        visual: 'Quarter cup'
      },
      {
        name: 'Onion',
        amount: '1 large, sliced',
        visual: 'One onion in slices'
      },
      {
        name: 'Hamburger buns',
        amount: '12 buns',
        visual: 'For serving'
      },
      {
        name: 'Coleslaw',
        amount: 'Optional',
        visual: 'Great topping for sandwiches!'
      }
    ],
    steps: [
      {
        id: 1,
        instruction: 'Season the pork',
        plainLanguage: 'Rub the entire pork shoulder with BBQ rub or seasoning mix. Cover all sides generously.',
        tip: 'Can do this the night before for more flavor!'
      },
      {
        id: 2,
        instruction: 'Set up slow cooker',
        plainLanguage: 'Place sliced onions in bottom of slow cooker. Place seasoned pork on top. Pour apple cider vinegar around it.',
        tip: 'Onions add flavor and prevent sticking'
      },
      {
        id: 3,
        instruction: 'Slow cook',
        plainLanguage: 'Cover and cook on LOW for 8-10 hours or HIGH for 5-6 hours. Pork is done when it shreds easily with a fork.',
        timer: 480,
        tip: 'Low and slow is the secret to tender, juicy pulled pork!'
      },
      {
        id: 4,
        instruction: 'Shred the pork',
        plainLanguage: 'Remove pork to a cutting board. Use two forks to pull it apart into shreds. Discard any large fat pieces.',
        tip: 'It should fall apart easily when done!'
      },
      {
        id: 5,
        instruction: 'Mix with sauce',
        plainLanguage: 'Return shredded pork to slow cooker. Add BBQ sauce and mix well. Let it heat through for 15 minutes on low.',
        timer: 15,
        tip: 'Add sauce to taste - start with less, you can always add more!'
      },
      {
        id: 6,
        instruction: 'Serve',
        plainLanguage: 'Pile pulled pork on buns. Top with coleslaw if using. Serve with pickles and extra BBQ sauce!',
        tip: 'Perfect for parties! Leftovers freeze great for up to 3 months'
      }
    ]
  },
  {
    id: '38',
    title: 'Butternut Squash Soup',
    description: 'Creamy, sweet butternut squash soup. Perfect for fall and winter!',
    difficulty: 'intermediate',
    prepTime: 20,
    cookTime: 45,
    servings: 6,
    tags: ['soup', 'vegetarian', 'fall', 'comfort-food'],
    image: 'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?auto=format&fit=crop&w=800&q=80',
    nutrition: { calories: 220, protein: 4, carbs: 38, fat: 8, fiber: 6 },
    ingredients: [
      {
        name: 'Butternut squash',
        amount: '1 large (about 3 lbs)',
        visual: 'One whole squash or pre-cut cubes'
      },
      {
        name: 'Onion',
        amount: '1 medium, diced',
        visual: 'One onion chopped'
      },
      {
        name: 'Carrots',
        amount: '2 carrots, chopped',
        visual: 'Two carrots in chunks'
      },
      {
        name: 'Apple',
        amount: '1 apple, peeled and chopped',
        visual: 'One apple - adds sweetness!'
      },
      {
        name: 'Garlic',
        amount: '3 cloves, minced',
        visual: '3 small pieces chopped tiny'
      },
      {
        name: 'Vegetable broth',
        amount: '4 cups',
        visual: 'One carton'
      },
      {
        name: 'Heavy cream or coconut milk',
        amount: '1/2 cup',
        visual: 'For creaminess - optional but delicious'
      },
      {
        name: 'Olive oil',
        amount: '2 tablespoons',
        visual: 'Two big spoonfuls'
      },
      {
        name: 'Cinnamon',
        amount: '1/4 teaspoon',
        visual: 'Quarter of a small spoonful'
      },
      {
        name: 'Nutmeg',
        amount: 'Pinch',
        visual: 'Tiny pinch'
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
        instruction: 'Prep the squash',
        plainLanguage: 'If using whole squash: Cut in half lengthwise, scoop out seeds, peel, and cut into 1-inch cubes. Or use pre-cut to save time!',
        tip: 'Microwave whole squash for 2 minutes to make cutting easier and safer!'
      },
      {
        id: 2,
        instruction: 'Sauté vegetables',
        plainLanguage: 'Heat olive oil in a large pot over medium heat. Add onion and carrots. Cook 5-7 minutes until starting to soften.',
        timer: 6
      },
      {
        id: 3,
        instruction: 'Add garlic and spices',
        plainLanguage: 'Add garlic, cinnamon, and nutmeg. Cook for 1 minute until fragrant.',
        timer: 1,
        tip: 'The warm spices make this soup special!'
      },
      {
        id: 4,
        instruction: 'Add squash and liquids',
        plainLanguage: 'Add squash cubes, apple, and vegetable broth. Bring to a boil, then reduce to simmer. Cover and cook for 25-30 minutes until squash is very tender.',
        timer: 28,
        tip: 'Squash should be so soft it falls apart when poked with a fork'
      },
      {
        id: 5,
        instruction: 'Blend the soup',
        plainLanguage: 'Use an immersion blender to puree soup until completely smooth. Or carefully transfer to a blender in batches.',
        tip: 'If using a blender, never fill more than halfway and hold lid with a towel!'
      },
      {
        id: 6,
        instruction: 'Add cream and season',
        plainLanguage: 'Stir in cream or coconut milk. Season with salt and pepper to taste. Heat through for 2 minutes.',
        timer: 2,
        tip: 'Taste and adjust! Should be sweet, savory, and slightly spiced'
      },
      {
        id: 7,
        instruction: 'Serve',
        plainLanguage: 'Ladle into bowls. Top with a drizzle of cream, toasted pumpkin seeds, or croutons. Serve with crusty bread!',
        tip: 'A swirl of cream on top looks beautiful! Also try crispy sage leaves as garnish'
      }
    ]
  },
  {
    id: '39',
    title: 'Shrimp Scampi',
    description: 'Garlicky shrimp in white wine butter sauce. Elegant but easy!',
    difficulty: 'intermediate',
    prepTime: 10,
    cookTime: 10,
    servings: 4,
    tags: ['seafood', 'italian', 'quick', 'dinner'],
    image: 'https://images.unsplash.com/photo-1633964913295-ceb43826e36e?auto=format&fit=crop&w=800&q=80',
    nutrition: { calories: 480, protein: 36, carbs: 52, fat: 14, fiber: 3 },
    ingredients: [
      {
        name: 'Large shrimp',
        amount: '1.5 lbs, peeled and deveined',
        visual: 'About 30-40 shrimp'
      },
      {
        name: 'Pasta',
        amount: '12 oz linguine or spaghetti',
        visual: 'Three-quarters of a box'
      },
      {
        name: 'Butter',
        amount: '4 tablespoons',
        visual: 'Half a stick'
      },
      {
        name: 'Olive oil',
        amount: '2 tablespoons',
        visual: 'Two big spoonfuls'
      },
      {
        name: 'Garlic',
        amount: '6 cloves, minced',
        visual: '6 small pieces chopped tiny - lots of garlic!'
      },
      {
        name: 'White wine',
        amount: '1/2 cup',
        visual: 'Dry white wine - pinot grigio works great'
      },
      {
        name: 'Lemon',
        amount: '1 lemon, juiced',
        visual: 'One lemon squeezed'
      },
      {
        name: 'Red pepper flakes',
        amount: '1/4 teaspoon',
        visual: 'Quarter of a small spoonful'
      },
      {
        name: 'Fresh parsley',
        amount: '1/4 cup chopped',
        visual: 'Small handful of fresh parsley'
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
        instruction: 'Cook the pasta',
        plainLanguage: 'Boil salted water and cook pasta according to package directions. Save 1 cup pasta water before draining!',
        timer: 10,
        tip: 'Start pasta first - everything else cooks fast!'
      },
      {
        id: 2,
        instruction: 'Season shrimp',
        plainLanguage: 'Pat shrimp dry with paper towels. Season with salt and pepper.',
        tip: 'Dry shrimp = better browning!'
      },
      {
        id: 3,
        instruction: 'Cook shrimp',
        plainLanguage: 'Heat olive oil in a large pan over medium-high heat. Add shrimp in a single layer. Cook 1-2 minutes per side until pink. Remove to a plate.',
        timer: 3,
        tip: 'Don\'t overcook! Shrimp cook FAST - they\'re done when pink and opaque'
      },
      {
        id: 4,
        instruction: 'Make the sauce',
        plainLanguage: 'In the same pan, melt butter over medium heat. Add garlic and red pepper flakes. Cook 30 seconds until fragrant.',
        tip: 'Watch the garlic! It can burn quickly'
      },
      {
        id: 5,
        instruction: 'Add wine and lemon',
        plainLanguage: 'Pour in white wine and lemon juice. Bring to a simmer. Cook for 3 minutes to reduce slightly.',
        timer: 3,
        tip: 'The wine adds amazing depth of flavor!'
      },
      {
        id: 6,
        instruction: 'Combine everything',
        plainLanguage: 'Add shrimp back to pan with any juices. Add drained pasta and parsley. Toss to coat. Add pasta water if needed to loosen sauce.',
        tip: 'The pasta water helps create a silky sauce that clings to the noodles'
      },
      {
        id: 7,
        instruction: 'Serve immediately',
        plainLanguage: 'Divide among plates. Garnish with extra parsley and lemon wedges. Serve hot!',
        tip: 'This dish is best served immediately. Perfect with crusty bread to soak up sauce!'
      }
    ]
  },
  {
    id: '40',
    title: 'Chicken Parmesan',
    description: 'Breaded chicken cutlets with marinara and melted cheese. Italian-American classic!',
    difficulty: 'intermediate',
    prepTime: 20,
    cookTime: 25,
    servings: 4,
    tags: ['italian', 'chicken', 'dinner', 'comfort-food'],
    image: 'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?auto=format&fit=crop&w=800&q=80',
    nutrition: { calories: 580, protein: 48, carbs: 42, fat: 24, fiber: 3 },
    ingredients: [
      {
        name: 'Chicken breasts',
        amount: '4 breasts',
        visual: 'Four chicken breast pieces, pounded thin'
      },
      {
        name: 'All-purpose flour',
        amount: '1 cup',
        visual: 'For dredging'
      },
      {
        name: 'Eggs',
        amount: '2 eggs',
        visual: 'Two eggs beaten'
      },
      {
        name: 'Breadcrumbs',
        amount: '1.5 cups',
        visual: 'Italian breadcrumbs work best'
      },
      {
        name: 'Parmesan cheese',
        amount: '1/2 cup grated',
        visual: 'Plus more for topping'
      },
      {
        name: 'Mozzarella cheese',
        amount: '1.5 cups shredded',
        visual: 'One and a half cups'
      },
      {
        name: 'Marinara sauce',
        amount: '2 cups',
        visual: 'Store-bought or homemade'
      },
      {
        name: 'Olive oil',
        amount: '1/4 cup',
        visual: 'For frying'
      },
      {
        name: 'Italian seasoning',
        amount: '1 teaspoon',
        visual: 'One small spoonful'
      },
      {
        name: 'Salt and pepper',
        amount: 'To taste',
        visual: 'For seasoning'
      },
      {
        name: 'Fresh basil',
        amount: 'For garnish',
        visual: 'Optional but nice!'
      }
    ],
    steps: [
      {
        id: 1,
        instruction: 'Prep the chicken',
        plainLanguage: 'If chicken breasts are thick, pound them to about 1/2 inch thickness using a meat mallet or rolling pin. Season both sides with salt and pepper.',
        tip: 'Put chicken between plastic wrap before pounding to prevent mess!'
      },
      {
        id: 2,
        instruction: 'Set up breading station',
        plainLanguage: 'Set up 3 shallow bowls: (1) flour, (2) beaten eggs, (3) breadcrumbs mixed with parmesan and Italian seasoning.',
        tip: 'Line them up in order for efficient breading!'
      },
      {
        id: 3,
        instruction: 'Bread the chicken',
        plainLanguage: 'Coat each chicken piece in flour (shake off excess), then dip in egg (let excess drip), then press into breadcrumb mixture on both sides.',
        tip: 'Use one hand for wet, one for dry to avoid breading your fingers!'
      },
      {
        id: 4,
        instruction: 'Fry the chicken',
        plainLanguage: 'Heat olive oil in a large oven-safe pan over medium-high heat. Fry chicken 3-4 minutes per side until golden brown. Work in batches if needed.',
        timer: 8,
        tip: 'Don\'t overcrowd the pan! This lowers temperature and makes it soggy'
      },
      {
        id: 5,
        instruction: 'Add sauce and cheese',
        plainLanguage: 'Preheat oven to 400°F. Spoon marinara sauce over each chicken piece. Top with mozzarella and a sprinkle of parmesan.',
        tip: 'Don\'t drown it in sauce - just enough to cover!'
      },
      {
        id: 6,
        instruction: 'Bake',
        plainLanguage: 'Put pan in oven and bake 8-10 minutes until cheese is melted and bubbly.',
        timer: 9,
        tip: 'If you don\'t have an oven-safe pan, transfer to a baking dish first'
      },
      {
        id: 7,
        instruction: 'Serve',
        plainLanguage: 'Garnish with fresh basil. Serve over spaghetti or with a side salad. Restaurant quality at home!',
        tip: 'Let it rest 2-3 minutes before serving so the cheese sets slightly'
      }
    ]
  },
  // ===== TRENDING 2025-2026 RECIPES =====
  // BREAKFAST RECIPES
  {
    id: '41',
    title: 'Protein Cottage Cheese Muffins',
    description: 'Viral 2025 high-protein muffins with cottage cheese. Meal prep perfection!',
    difficulty: 'easy',
    prepTime: 10,
    cookTime: 20,
    servings: 12,
    tags: ['breakfast', 'protein', 'meal-prep', 'trending-2025'],
    image: 'https://images.unsplash.com/photo-1607958996719-66d972469227?auto=format&fit=crop&w=800&q=80',
    nutrition: { calories: 180, protein: 12, carbs: 22, fat: 5, fiber: 2 },
    ingredients: [
      { name: 'Cottage cheese', amount: '1 cup', visual: 'One cup of cottage cheese' },
      { name: 'Eggs', amount: '2 large', visual: 'Two eggs' },
      { name: 'Banana', amount: '1 mashed', visual: 'One ripe banana' },
      { name: 'Oats', amount: '1.5 cups', visual: 'About 1.5 cups rolled oats' },
      { name: 'Protein powder', amount: '2 scoops', visual: 'About 1/3 cup protein powder' },
      { name: 'Baking powder', amount: '1 tsp', visual: 'One teaspoon' },
      { name: 'Vanilla extract', amount: '1 tsp', visual: 'One teaspoon' },
      { name: 'Blueberries', amount: '1 cup', visual: 'One cup fresh or frozen' }
    ],
    steps: [
      { id: 1, instruction: 'Preheat and prep', plainLanguage: 'Preheat oven to 350°F. Line a muffin tin with paper liners or spray with oil.', timer: 2 },
      { id: 2, instruction: 'Blend wet ingredients', plainLanguage: 'In a blender, combine cottage cheese, eggs, banana, and vanilla. Blend until smooth.', tip: 'Blending the cottage cheese makes it smooth - no lumps!' },
      { id: 3, instruction: 'Mix dry ingredients', plainLanguage: 'In a bowl, mix oats, protein powder, and baking powder together.' },
      { id: 4, instruction: 'Combine and fold', plainLanguage: 'Pour wet ingredients into dry. Stir gently just until combined. Fold in blueberries.', tip: 'Don\'t overmix! Lumps are okay' },
      { id: 5, instruction: 'Bake', plainLanguage: 'Divide batter among 12 muffin cups. Bake 18-20 minutes until a toothpick comes out clean.', timer: 20, tip: 'These deliver 12g protein each!' }
    ]
  },
  {
    id: '42',
    title: 'Spinach Cottage Cheese Bagels',
    description: '5-ingredient viral flagels! High-protein, no yeast needed.',
    difficulty: 'easy',
    prepTime: 10,
    cookTime: 25,
    servings: 6,
    tags: ['breakfast', 'protein', 'no-yeast', 'trending-2025'],
    image: 'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=800&q=80',
    nutrition: { calories: 220, protein: 18, carbs: 28, fat: 4, fiber: 4 },
    ingredients: [
      { name: 'Self-rising flour', amount: '2 cups', visual: 'Two cups flour' },
      { name: 'Cottage cheese', amount: '1.5 cups', visual: '1.5 cups cottage cheese' },
      { name: 'Spinach', amount: '2 cups fresh', visual: 'Two big handfuls' },
      { name: 'Egg', amount: '1 for wash', visual: 'One egg beaten' },
      { name: 'Everything bagel seasoning', amount: '2 tbsp', visual: 'Two tablespoons' }
    ],
    steps: [
      { id: 1, instruction: 'Prepare spinach', plainLanguage: 'Blend or finely chop spinach. Squeeze out excess liquid with paper towels.' },
      { id: 2, instruction: 'Mix dough', plainLanguage: 'In a bowl, mix flour, cottage cheese, and spinach until a dough forms. Knead 2-3 minutes.', tip: 'Dough will be sticky at first!' },
      { id: 3, instruction: 'Shape bagels', plainLanguage: 'Divide into 6 pieces. Roll each into a rope and connect ends to form a bagel shape.' },
      { id: 4, instruction: 'Brush and season', plainLanguage: 'Place on lined baking sheet. Brush with beaten egg. Sprinkle with everything seasoning.' },
      { id: 5, instruction: 'Bake', plainLanguage: 'Bake at 375°F for 23-25 minutes until golden. Let cool 5 minutes before eating!', timer: 25 }
    ]
  },
  {
    id: '43',
    title: 'Marry Me Chicken',
    description: 'The viral recipe that broke the internet! Creamy sun-dried tomato chicken.',
    difficulty: 'easy',
    prepTime: 10,
    cookTime: 25,
    servings: 4,
    tags: ['dinner', 'viral', 'creamy', 'trending-2025', 'italian'],
    image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=800&q=80',
    nutrition: { calories: 420, protein: 38, carbs: 8, fat: 26, fiber: 2 },
    ingredients: [
      { name: 'Chicken breasts', amount: '4 medium', visual: 'Four chicken breasts' },
      { name: 'Sun-dried tomatoes', amount: '1/2 cup', visual: 'Half cup chopped' },
      { name: 'Heavy cream', amount: '1 cup', visual: 'One cup cream' },
      { name: 'Chicken broth', amount: '1/2 cup', visual: 'Half cup broth' },
      { name: 'Parmesan cheese', amount: '1/2 cup grated', visual: 'Half cup grated' },
      { name: 'Garlic', amount: '3 cloves minced', visual: 'Three cloves' },
      { name: 'Italian seasoning', amount: '1 tbsp', visual: 'One tablespoon' },
      { name: 'Fresh basil', amount: '1/4 cup', visual: 'Quarter cup chopped' }
    ],
    steps: [
      { id: 1, instruction: 'Season and sear', plainLanguage: 'Season chicken with salt, pepper, and Italian seasoning. Sear in hot oil 4 minutes per side until golden. Remove and set aside.', timer: 8 },
      { id: 2, instruction: 'Make the sauce', plainLanguage: 'In same pan, sauté garlic 30 seconds. Add sun-dried tomatoes, cream, and broth. Stir and bring to simmer.', tip: 'Don\'t skip scraping up those brown bits!' },
      { id: 3, instruction: 'Add cheese', plainLanguage: 'Reduce heat to low. Stir in parmesan until melted and sauce is creamy.' },
      { id: 4, instruction: 'Finish cooking', plainLanguage: 'Return chicken to pan. Simmer 8-10 minutes until chicken reaches 165°F internal temp.', timer: 10 },
      { id: 5, instruction: 'Serve', plainLanguage: 'Garnish with fresh basil. Serve over pasta, rice, or with crusty bread to soak up that incredible sauce!', tip: 'This sauce is so good you\'ll want to marry it!' }
    ]
  },
  {
    id: '44',
    title: 'Hot Honey Protein Bowl',
    description: 'Google\'s #1 most searched recipe of 2025! Sweet, spicy, protein-packed.',
    difficulty: 'easy',
    prepTime: 10,
    cookTime: 15,
    servings: 2,
    tags: ['lunch', 'dinner', 'viral', 'protein', 'trending-2025', 'bowl'],
    image: 'https://images.unsplash.com/photo-1623428454614-abaf00244e52?auto=format&fit=crop&w=800&q=80',
    nutrition: { calories: 485, protein: 42, carbs: 38, fat: 18, fiber: 8 },
    ingredients: [
      { name: 'Ground beef', amount: '8 oz', visual: 'Half pound lean ground beef' },
      { name: 'Sweet potato', amount: '1 large cubed', visual: 'One large sweet potato' },
      { name: 'Cottage cheese', amount: '1/2 cup', visual: 'Half cup' },
      { name: 'Avocado', amount: '1 sliced', visual: 'One avocado' },
      { name: 'Hot honey', amount: '3 tbsp', visual: 'Three tablespoons' },
      { name: 'Olive oil', amount: '1 tbsp', visual: 'One tablespoon' },
      { name: 'Taco seasoning', amount: '2 tsp', visual: 'Two teaspoons' }
    ],
    steps: [
      { id: 1, instruction: 'Roast sweet potato', plainLanguage: 'Toss cubed sweet potato with olive oil and salt. Roast at 425°F for 20 minutes until tender.', timer: 20 },
      { id: 2, instruction: 'Cook beef', plainLanguage: 'While potatoes roast, brown ground beef in a pan. Add taco seasoning and 1/4 cup water. Simmer 5 minutes.', timer: 8 },
      { id: 3, instruction: 'Assemble bowls', plainLanguage: 'Divide roasted sweet potato and seasoned beef between 2 bowls.' },
      { id: 4, instruction: 'Add toppings', plainLanguage: 'Top each bowl with cottage cheese and sliced avocado.' },
      { id: 5, instruction: 'Drizzle hot honey', plainLanguage: 'Generously drizzle hot honey over everything. The sweet-spicy combo is ADDICTIVE!', tip: 'This went viral for a reason - the flavor combo is incredible!' }
    ]
  },
  {
    id: '45',
    title: 'Smashed Gyoza',
    description: 'TikTok\'s viral smashed gyoza! Crispy, juicy, and so satisfying.',
    difficulty: 'easy',
    prepTime: 5,
    cookTime: 10,
    servings: 2,
    tags: ['dinner', 'viral', 'asian', 'trending-2025', 'quick'],
    image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=800&q=80',
    nutrition: { calories: 320, protein: 16, carbs: 38, fat: 12, fiber: 2 },
    ingredients: [
      { name: 'Frozen gyoza', amount: '12 pieces', visual: 'One package frozen dumplings' },
      { name: 'Vegetable oil', amount: '2 tbsp', visual: 'Two tablespoons' },
      { name: 'Soy sauce', amount: '3 tbsp', visual: 'Three tablespoons' },
      { name: 'Rice vinegar', amount: '2 tbsp', visual: 'Two tablespoons' },
      { name: 'Sesame oil', amount: '1 tsp', visual: 'One teaspoon' },
      { name: 'Chili crisp', amount: '1 tbsp', visual: 'One tablespoon' },
      { name: 'Green onions', amount: '2 chopped', visual: 'Two green onions' }
    ],
    steps: [
      { id: 1, instruction: 'Pan fry gyoza', plainLanguage: 'Heat oil in a non-stick pan over medium-high. Add frozen gyoza and cook 2-3 minutes until bottoms are golden.', timer: 3 },
      { id: 2, instruction: 'Smash them!', plainLanguage: 'Use a spatula to firmly press down and smash each gyoza flat. They should be crispy!', tip: 'Don\'t be shy - really smash them!' },
      { id: 3, instruction: 'Make sauce', plainLanguage: 'In a small bowl, whisk together soy sauce, rice vinegar, sesame oil, and chili crisp.' },
      { id: 4, instruction: 'Crisp the other side', plainLanguage: 'Flip gyoza and cook another 2-3 minutes until both sides are golden and crispy.', timer: 3 },
      { id: 5, instruction: 'Serve', plainLanguage: 'Transfer to a plate, drizzle with sauce, and top with green onions. Serve immediately while crispy!' }
    ]
  },
  {
    id: '46',
    title: 'Coconut Curry Dumplings',
    description: 'One-pan viral sensation! Frozen dumplings in creamy coconut curry.',
    difficulty: 'super-easy',
    prepTime: 5,
    cookTime: 15,
    servings: 4,
    tags: ['dinner', 'viral', 'asian', 'trending-2025', 'one-pan'],
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80',
    nutrition: { calories: 380, protein: 14, carbs: 42, fat: 18, fiber: 3 },
    ingredients: [
      { name: 'Frozen dumplings', amount: '24 pieces', visual: 'One large bag' },
      { name: 'Coconut milk', amount: '1 can (14oz)', visual: 'One can full-fat' },
      { name: 'Red curry paste', amount: '2 tbsp', visual: 'Two tablespoons' },
      { name: 'Soy sauce', amount: '2 tbsp', visual: 'Two tablespoons' },
      { name: 'Brown sugar', amount: '1 tbsp', visual: 'One tablespoon' },
      { name: 'Lime juice', amount: '1 tbsp', visual: 'Half a lime' },
      { name: 'Cilantro', amount: '1/4 cup', visual: 'Quarter cup chopped' }
    ],
    steps: [
      { id: 1, instruction: 'Mix sauce', plainLanguage: 'In an oven-safe skillet, whisk together coconut milk, curry paste, soy sauce, brown sugar, and lime juice.' },
      { id: 2, instruction: 'Add dumplings', plainLanguage: 'Arrange frozen dumplings in the sauce in a single layer. They can touch but don\'t overlap.' },
      { id: 3, instruction: 'Bake', plainLanguage: 'Bake at 400°F for 12-15 minutes until dumplings are cooked through and sauce is bubbly.', timer: 15, tip: 'No need to thaw the dumplings!' },
      { id: 4, instruction: 'Broil for crispy tops', plainLanguage: 'Turn on broiler for 2 minutes to get golden, crispy tops on dumplings.', timer: 2 },
      { id: 5, instruction: 'Serve', plainLanguage: 'Garnish with cilantro. Serve with rice or eat straight from the pan!' }
    ]
  },
  {
    id: '47',
    title: 'Carrot Ribbon Salad',
    description: 'Viral TikTok salad by Chef Cassie Yeung. Addictively delicious!',
    difficulty: 'super-easy',
    prepTime: 15,
    cookTime: 0,
    servings: 4,
    tags: ['salad', 'viral', 'vegan', 'trending-2025', 'no-cook'],
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',
    nutrition: { calories: 145, protein: 2, carbs: 18, fat: 8, fiber: 4 },
    ingredients: [
      { name: 'Large carrots', amount: '4', visual: 'Four large carrots' },
      { name: 'Sesame oil', amount: '2 tbsp', visual: 'Two tablespoons' },
      { name: 'Rice vinegar', amount: '2 tbsp', visual: 'Two tablespoons' },
      { name: 'Soy sauce', amount: '1 tbsp', visual: 'One tablespoon' },
      { name: 'Garlic', amount: '2 cloves minced', visual: 'Two cloves' },
      { name: 'Chili crisp', amount: '1-2 tbsp', visual: 'To taste' },
      { name: 'Sesame seeds', amount: '1 tbsp', visual: 'One tablespoon' },
      { name: 'Green onions', amount: '2 sliced', visual: 'Two green onions' }
    ],
    steps: [
      { id: 1, instruction: 'Make carrot ribbons', plainLanguage: 'Peel carrots. Then use the peeler to shave long, thin ribbons from each carrot into a bowl.', tip: 'Stop when you get to the core - it\'s too hard to peel' },
      { id: 2, instruction: 'Make dressing', plainLanguage: 'In a small bowl, whisk together sesame oil, rice vinegar, soy sauce, garlic, and chili crisp.' },
      { id: 3, instruction: 'Toss salad', plainLanguage: 'Pour dressing over carrot ribbons. Toss well with your hands to coat every ribbon.' },
      { id: 4, instruction: 'Add toppings', plainLanguage: 'Top with sesame seeds and green onions.' },
      { id: 5, instruction: 'Serve', plainLanguage: 'Serve immediately or let marinate 10 minutes for even more flavor!', tip: 'This is incredible as a side dish or on top of rice bowls!' }
    ]
  },
  {
    id: '48',
    title: 'Overnight Oats',
    description: '2025 meal-prep essential! Customizable, healthy, ready when you wake up.',
    difficulty: 'super-easy',
    prepTime: 5,
    cookTime: 0,
    servings: 1,
    tags: ['breakfast', 'meal-prep', 'no-cook', 'trending-2025', 'healthy'],
    image: 'https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&w=800&q=80',
    nutrition: { calories: 320, protein: 14, carbs: 48, fat: 8, fiber: 8 },
    ingredients: [
      { name: 'Rolled oats', amount: '1/2 cup', visual: 'Half cup oats' },
      { name: 'Greek yogurt', amount: '1/4 cup', visual: 'Quarter cup' },
      { name: 'Milk', amount: '1/2 cup', visual: 'Half cup any milk' },
      { name: 'Chia seeds', amount: '1 tbsp', visual: 'One tablespoon' },
      { name: 'Honey', amount: '1 tbsp', visual: 'One tablespoon' },
      { name: 'Vanilla extract', amount: '1/2 tsp', visual: 'Half teaspoon' },
      { name: 'Toppings', amount: 'as desired', visual: 'Berries, nuts, banana, etc.' }
    ],
    steps: [
      { id: 1, instruction: 'Mix base', plainLanguage: 'In a jar or container, combine oats, yogurt, milk, chia seeds, honey, and vanilla. Stir well.' },
      { id: 2, instruction: 'Refrigerate', plainLanguage: 'Cover and refrigerate for at least 4 hours or overnight. Oats will absorb liquid and soften.', timer: 240, tip: 'Make 5 jars on Sunday for the whole week!' },
      { id: 3, instruction: 'Add toppings', plainLanguage: 'In the morning, stir and add your favorite toppings - fresh berries, sliced banana, nuts, nut butter, etc.' },
      { id: 4, instruction: 'Serve', plainLanguage: 'Eat cold or microwave for 30-60 seconds if you prefer it warm!', tip: 'Variations: Add cocoa powder, peanut butter, cinnamon, or pumpkin spice!' }
    ]
  },
  {
    id: '49',
    title: 'Sheet Pan Chicken Fajitas',
    description: '2025\'s favorite one-pan dinner! Minimal cleanup, maximum flavor.',
    difficulty: 'super-easy',
    prepTime: 10,
    cookTime: 25,
    servings: 4,
    tags: ['dinner', 'sheet-pan', 'mexican', 'trending-2025', 'easy-cleanup'],
    image: 'https://images.unsplash.com/photo-1599974982760-6ba69968b24b?auto=format&fit=crop&w=800&q=80',
    nutrition: { calories: 340, protein: 32, carbs: 28, fat: 12, fiber: 5 },
    ingredients: [
      { name: 'Chicken breasts', amount: '1.5 lbs sliced', visual: 'Three chicken breasts, sliced' },
      { name: 'Bell peppers', amount: '3 sliced', visual: 'Three different colors' },
      { name: 'Onion', amount: '1 large sliced', visual: 'One large onion' },
      { name: 'Olive oil', amount: '3 tbsp', visual: 'Three tablespoons' },
      { name: 'Fajita seasoning', amount: '3 tbsp', visual: 'Three tablespoons' },
      { name: 'Lime', amount: '1', visual: 'One lime for juice' },
      { name: 'Tortillas', amount: '8', visual: 'Eight flour tortillas' }
    ],
    steps: [
      { id: 1, instruction: 'Prep sheet pan', plainLanguage: 'Preheat oven to 425°F. Line a large sheet pan with foil for easy cleanup.' },
      { id: 2, instruction: 'Season everything', plainLanguage: 'Add chicken, peppers, and onions to the pan. Drizzle with olive oil, sprinkle with fajita seasoning, and toss to coat everything evenly.' },
      { id: 3, instruction: 'Spread in single layer', plainLanguage: 'Spread everything in a single layer. Don\'t overcrowd or it will steam instead of roast!', tip: 'Use two pans if needed!' },
      { id: 4, instruction: 'Roast', plainLanguage: 'Roast for 22-25 minutes, stirring halfway through, until chicken is cooked and veggies are tender and slightly charred.', timer: 25 },
      { id: 5, instruction: 'Serve', plainLanguage: 'Squeeze lime juice over everything. Serve in warm tortillas with your favorite toppings!', tip: 'Top with sour cream, cheese, guac, salsa - the works!' }
    ]
  },
  {
    id: '50',
    title: 'Honey Garlic Chicken',
    description: 'Top 10 recipe of 2025! Sweet, savory, and ridiculously easy.',
    difficulty: 'easy',
    prepTime: 10,
    cookTime: 15,
    servings: 4,
    tags: ['dinner', 'quick', 'asian-inspired', 'trending-2025'],
    image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=800&q=80',
    nutrition: { calories: 385, protein: 36, carbs: 32, fat: 12, fiber: 1 },
    ingredients: [
      { name: 'Chicken thighs', amount: '1.5 lbs', visual: 'About 6 boneless thighs' },
      { name: 'Honey', amount: '1/3 cup', visual: 'Third cup honey' },
      { name: 'Soy sauce', amount: '1/4 cup', visual: 'Quarter cup' },
      { name: 'Garlic', amount: '5 cloves minced', visual: 'Five cloves' },
      { name: 'Rice vinegar', amount: '2 tbsp', visual: 'Two tablespoons' },
      { name: 'Cornstarch', amount: '1 tbsp', visual: 'One tablespoon' },
      { name: 'Sesame seeds', amount: '1 tbsp', visual: 'For garnish' },
      { name: 'Green onions', amount: '2 sliced', visual: 'Two green onions' }
    ],
    steps: [
      { id: 1, instruction: 'Sear chicken', plainLanguage: 'Heat oil in a large pan over medium-high. Season chicken with salt and pepper. Sear 4-5 minutes per side until golden. Remove and set aside.', timer: 10 },
      { id: 2, instruction: 'Make sauce', plainLanguage: 'In same pan, add garlic and cook 30 seconds. Add honey, soy sauce, and rice vinegar. Bring to a simmer.' },
      { id: 3, instruction: 'Thicken', plainLanguage: 'Mix cornstarch with 2 tbsp water. Pour into sauce, stirring constantly until thick and glossy.', tip: 'This takes just 1-2 minutes!' },
      { id: 4, instruction: 'Finish chicken', plainLanguage: 'Return chicken to pan. Coat with sauce and cook 2-3 minutes until chicken is cooked through and glazed.', timer: 3 },
      { id: 5, instruction: 'Serve', plainLanguage: 'Garnish with sesame seeds and green onions. Serve over rice with the extra sauce!', tip: 'Make extra sauce - you\'ll want it for the rice!' }
    ]
  },
  // BAKING RECIPES - Trending 2025-2026
  {
    id: '51',
    title: 'Sourdough Discard Crackers',
    description: '2025\'s top trending baked good! Zero waste, maximum flavor.',
    difficulty: 'easy',
    prepTime: 15,
    cookTime: 20,
    servings: 8,
    tags: ['baking', 'sourdough', 'snack', 'trending-2025'],
    image: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?auto=format&fit=crop&w=800&q=80',
    nutrition: { calories: 120, protein: 3, carbs: 18, fat: 4, fiber: 1 },
    ingredients: [
      { name: 'Sourdough discard', amount: '1 cup', visual: 'One cup unfed starter' },
      { name: 'All-purpose flour', amount: '1 cup', visual: 'One cup flour' },
      { name: 'Olive oil', amount: '1/4 cup', visual: 'Quarter cup' },
      { name: 'Salt', amount: '1 tsp', visual: 'One teaspoon' },
      { name: 'Everything bagel seasoning', amount: '2 tbsp', visual: 'Two tablespoons' }
    ],
    steps: [
      { id: 1, instruction: 'Make dough', plainLanguage: 'Mix sourdough discard, flour, olive oil, and salt until a dough forms. Knead briefly until smooth.' },
      { id: 2, instruction: 'Roll thin', plainLanguage: 'Divide dough in half. Roll each half very thin (1/16 inch) between parchment paper.', tip: 'The thinner, the crispier!' },
      { id: 3, instruction: 'Cut and season', plainLanguage: 'Transfer parchment to baking sheets. Cut into squares or rectangles. Brush with water and sprinkle with everything seasoning.' },
      { id: 4, instruction: 'Bake', plainLanguage: 'Bake at 350°F for 18-22 minutes until golden and crispy. Watch carefully - they can burn quickly!', timer: 20 },
      { id: 5, instruction: 'Cool and store', plainLanguage: 'Let cool completely on the pan. Store in airtight container for up to 2 weeks!', tip: 'These are dangerously addictive with cheese!' }
    ]
  },
  {
    id: '52',
    title: 'Cruffins (Croissant Muffins)',
    description: 'Hybrid pastry trend of 2025! Croissant meets muffin in the best way.',
    difficulty: 'intermediate',
    prepTime: 30,
    cookTime: 25,
    servings: 12,
    tags: ['baking', 'pastry', 'breakfast', 'trending-2025', 'hybrid'],
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    nutrition: { calories: 280, protein: 5, carbs: 32, fat: 15, fiber: 1 },
    ingredients: [
      { name: 'Puff pastry', amount: '2 sheets', visual: 'Two frozen sheets, thawed' },
      { name: 'Butter', amount: '4 tbsp melted', visual: 'Four tablespoons' },
      { name: 'Cinnamon sugar', amount: '1/2 cup', visual: 'Half cup sugar + 1 tbsp cinnamon' },
      { name: 'Cream cheese', amount: '4 oz', visual: 'Half a block, softened' },
      { name: 'Powdered sugar', amount: '1/2 cup', visual: 'For filling and dusting' },
      { name: 'Vanilla extract', amount: '1 tsp', visual: 'One teaspoon' }
    ],
    steps: [
      { id: 1, instruction: 'Prep pastry', plainLanguage: 'Roll out puff pastry sheets. Brush with melted butter and sprinkle generously with cinnamon sugar.' },
      { id: 2, instruction: 'Cut and roll', plainLanguage: 'Cut each sheet into 6 strips lengthwise. Roll each strip into a spiral, like a cinnamon roll.', tip: 'Keep them tight for best layers!' },
      { id: 3, instruction: 'Place in muffin tin', plainLanguage: 'Grease a muffin tin well. Place each spiral upright in a cup. They should stand up on their swirled edge.' },
      { id: 4, instruction: 'Bake', plainLanguage: 'Bake at 375°F for 22-25 minutes until golden, puffed, and flaky.', timer: 25 },
      { id: 5, instruction: 'Fill and serve', plainLanguage: 'Make filling by mixing cream cheese, powdered sugar, and vanilla. Fill the center of each cruffin. Dust with more powdered sugar!', tip: 'Fill while still warm for the best experience!' }
    ]
  },
  {
    id: '53',
    title: 'Brown Butter Chocolate Chip Cookies',
    description: 'Viral 2025 upgrade to classic cookies. Game-changer nutty flavor!',
    difficulty: 'easy',
    prepTime: 15,
    cookTime: 12,
    servings: 24,
    tags: ['baking', 'cookies', 'dessert', 'trending-2025'],
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&q=80',
    nutrition: { calories: 180, protein: 2, carbs: 22, fat: 10, fiber: 1 },
    ingredients: [
      { name: 'Butter', amount: '1 cup', visual: 'Two sticks butter' },
      { name: 'Brown sugar', amount: '1 cup packed', visual: 'One cup' },
      { name: 'White sugar', amount: '1/2 cup', visual: 'Half cup' },
      { name: 'Eggs', amount: '2 large', visual: 'Two eggs' },
      { name: 'Vanilla extract', amount: '2 tsp', visual: 'Two teaspoons' },
      { name: 'All-purpose flour', amount: '2.5 cups', visual: '2.5 cups flour' },
      { name: 'Baking soda', amount: '1 tsp', visual: 'One teaspoon' },
      { name: 'Salt', amount: '1 tsp', visual: 'One teaspoon' },
      { name: 'Chocolate chips', amount: '2 cups', visual: 'One 12oz bag' },
      { name: 'Flaky sea salt', amount: 'for topping', visual: 'For sprinkling' }
    ],
    steps: [
      { id: 1, instruction: 'Brown the butter', plainLanguage: 'Melt butter in a saucepan over medium heat. Keep cooking, stirring often, until it turns golden brown and smells nutty (8-10 min). Let cool 15 min.', timer: 10, tip: 'Watch carefully - it goes from brown to burnt quickly!' },
      { id: 2, instruction: 'Mix wet ingredients', plainLanguage: 'In a large bowl, mix cooled brown butter with both sugars. Beat in eggs and vanilla.' },
      { id: 3, instruction: 'Add dry ingredients', plainLanguage: 'Mix in flour, baking soda, and salt until just combined. Fold in chocolate chips.' },
      { id: 4, instruction: 'Chill dough', plainLanguage: 'Cover and refrigerate for at least 30 minutes (or overnight for even better flavor).', timer: 30, tip: 'Cold dough = thicker cookies!' },
      { id: 5, instruction: 'Bake', plainLanguage: 'Scoop dough into balls on lined baking sheets. Bake at 350°F for 10-12 minutes until edges are golden. Sprinkle with flaky salt right when they come out!', timer: 12, tip: 'They look underdone but will firm up as they cool!' }
    ]
  },
  {
    id: '54',
    title: 'Focaccia Bread',
    description: 'Instagram\'s favorite bread! Easy, impressive, infinitely customizable.',
    difficulty: 'easy',
    prepTime: 20,
    cookTime: 25,
    servings: 12,
    tags: ['baking', 'bread', 'italian', 'trending-2025'],
    image: 'https://images.unsplash.com/photo-1600214995207-c5448fbb807a?auto=format&fit=crop&w=800&q=80',
    nutrition: { calories: 210, protein: 5, carbs: 35, fat: 6, fiber: 1 },
    ingredients: [
      { name: 'Warm water', amount: '1.5 cups', visual: '1.5 cups at 110°F' },
      { name: 'Active dry yeast', amount: '2 tsp', visual: 'Two teaspoons' },
      { name: 'Honey', amount: '1 tbsp', visual: 'One tablespoon' },
      { name: 'All-purpose flour', amount: '4 cups', visual: 'Four cups flour' },
      { name: 'Salt', amount: '2 tsp', visual: 'Two teaspoons' },
      { name: 'Olive oil', amount: '1/3 cup + more', visual: 'Plus extra for pan' },
      { name: 'Fresh rosemary', amount: '2 tbsp', visual: 'Fresh sprigs' },
      { name: 'Flaky sea salt', amount: '2 tsp', visual: 'For topping' },
      { name: 'Cherry tomatoes', amount: '1 cup halved', visual: 'Optional topping' }
    ],
    steps: [
      { id: 1, instruction: 'Proof yeast', plainLanguage: 'Mix warm water, yeast, and honey in a bowl. Let sit 5 minutes until foamy.', timer: 5 },
      { id: 2, instruction: 'Make dough', plainLanguage: 'Add flour, salt, and olive oil. Mix until a sticky dough forms. Knead 5 minutes until smooth.', tip: 'Dough will be wetter than regular bread dough!' },
      { id: 3, instruction: 'First rise', plainLanguage: 'Place in oiled bowl, cover, and let rise in warm spot for 1-2 hours until doubled.', timer: 90 },
      { id: 4, instruction: 'Shape and dimple', plainLanguage: 'Oil a 9x13 pan. Spread dough in pan. Use fingers to make deep dimples all over. Drizzle with more olive oil. Add rosemary, tomatoes, and salt. Let rest 20 min.', timer: 20, tip: 'Those dimples hold all that delicious olive oil!' },
      { id: 5, instruction: 'Bake', plainLanguage: 'Bake at 425°F for 22-25 minutes until golden brown on top. Let cool 10 minutes before slicing.', timer: 25 }
    ]
  },
  {
    id: '55',
    title: 'Protein Banana Bread',
    description: '2025 healthy baking trend! Moist, delicious, 10g protein per slice.',
    difficulty: 'easy',
    prepTime: 10,
    cookTime: 50,
    servings: 12,
    tags: ['baking', 'breakfast', 'protein', 'healthy', 'trending-2025'],
    image: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=800&q=80',
    nutrition: { calories: 195, protein: 10, carbs: 28, fat: 5, fiber: 3 },
    ingredients: [
      { name: 'Ripe bananas', amount: '4 large mashed', visual: 'Four very ripe bananas' },
      { name: 'Greek yogurt', amount: '1/2 cup', visual: 'Half cup plain yogurt' },
      { name: 'Eggs', amount: '2 large', visual: 'Two eggs' },
      { name: 'Vanilla protein powder', amount: '1/2 cup', visual: 'About 2 scoops' },
      { name: 'Whole wheat flour', amount: '1.5 cups', visual: '1.5 cups flour' },
      { name: 'Baking soda', amount: '1 tsp', visual: 'One teaspoon' },
      { name: 'Cinnamon', amount: '1 tsp', visual: 'One teaspoon' },
      { name: 'Honey', amount: '1/4 cup', visual: 'Quarter cup' },
      { name: 'Walnuts', amount: '1/2 cup chopped', visual: 'Half cup (optional)' }
    ],
    steps: [
      { id: 1, instruction: 'Preheat and prep', plainLanguage: 'Preheat oven to 350°F. Grease a 9x5 loaf pan or line with parchment paper.' },
      { id: 2, instruction: 'Mix wet ingredients', plainLanguage: 'In a large bowl, mash bananas well. Add Greek yogurt, eggs, and honey. Mix until combined.' },
      { id: 3, instruction: 'Add dry ingredients', plainLanguage: 'Add protein powder, flour, baking soda, and cinnamon. Stir gently until just combined. Fold in walnuts if using.', tip: 'Don\'t overmix or bread will be dense!' },
      { id: 4, instruction: 'Bake', plainLanguage: 'Pour into prepared pan. Bake 45-50 minutes until a toothpick comes out clean.', timer: 50, tip: 'Cover with foil after 30 min if top is browning too quickly' },
      { id: 5, instruction: 'Cool and slice', plainLanguage: 'Let cool in pan 10 minutes, then transfer to wire rack. Cool completely before slicing for clean cuts!' }
    ]
  },
  // MORE TRENDING RECIPES 2025-2026
  {
    id: '56',
    title: 'Birria Tacos',
    description: 'The TikTok sensation! Cheesy, dippable, impossibly flavorful.',
    difficulty: 'intermediate',
    prepTime: 20,
    cookTime: 180,
    servings: 6,
    tags: ['dinner', 'mexican', 'viral', 'trending-2025'],
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80',
    nutrition: { calories: 520, protein: 35, carbs: 32, fat: 28, fiber: 4 },
    ingredients: [
      { name: 'Beef chuck roast', amount: '3 lbs', visual: 'Three pounds chuck roast' },
      { name: 'Dried guajillo chiles', amount: '6', visual: 'Six dried chiles' },
      { name: 'Dried ancho chiles', amount: '3', visual: 'Three dried chiles' },
      { name: 'Beef broth', amount: '3 cups', visual: 'Three cups broth' },
      { name: 'Onion', amount: '1 large quartered', visual: 'One large onion' },
      { name: 'Garlic', amount: '6 cloves', visual: 'Six cloves' },
      { name: 'Tomato', amount: '1 large', visual: 'One tomato' },
      { name: 'Cumin', amount: '2 tsp', visual: 'Two teaspoons' },
      { name: 'Mexican oregano', amount: '1 tsp', visual: 'One teaspoon' },
      { name: 'Corn tortillas', amount: '18', visual: '18 small tortillas' },
      { name: 'Oaxaca cheese', amount: '2 cups shredded', visual: 'Two cups' },
      { name: 'Cilantro', amount: '1/2 cup', visual: 'For serving' },
      { name: 'Lime', amount: '2', visual: 'Two limes' }
    ],
    steps: [
      { id: 1, instruction: 'Make chile sauce', plainLanguage: 'Remove stems and seeds from chiles. Toast in dry pan 30 seconds. Soak in hot broth 15 min. Blend with onion, garlic, tomato, cumin, and oregano until smooth.', timer: 15 },
      { id: 2, instruction: 'Cook the beef', plainLanguage: 'Place beef in slow cooker or dutch oven. Pour chile sauce over. Cook on low 6-8 hours (slow cooker) or simmer covered 3 hours (stovetop) until beef shreds easily.', timer: 180 },
      { id: 3, instruction: 'Shred meat', plainLanguage: 'Remove beef, shred with forks. Skim fat from the braising liquid (consommé). Return shredded beef to liquid to keep warm.' },
      { id: 4, instruction: 'Fry the tacos', plainLanguage: 'Dip tortilla in consommé. Place in hot skillet. Add cheese and beef. Fold in half. Fry 2-3 min per side until crispy and cheese melts.', timer: 5, tip: 'The dipped tortilla is KEY to authentic birria tacos!' },
      { id: 5, instruction: 'Serve', plainLanguage: 'Serve tacos with a cup of warm consommé for dipping. Top with cilantro, onion, and lime!', tip: 'Dipping the crispy taco in the broth is EVERYTHING!' }
    ]
  },
  {
    id: '57',
    title: 'Greek Yogurt Pancakes',
    description: '2025\'s protein-packed breakfast! Fluffy, filling, and delicious.',
    difficulty: 'super-easy',
    prepTime: 5,
    cookTime: 15,
    servings: 4,
    tags: ['breakfast', 'protein', 'quick', 'trending-2025'],
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=800&q=80',
    nutrition: { calories: 285, protein: 18, carbs: 38, fat: 6, fiber: 2 },
    ingredients: [
      { name: 'Greek yogurt', amount: '1 cup', visual: 'One cup plain yogurt' },
      { name: 'Eggs', amount: '2 large', visual: 'Two eggs' },
      { name: 'All-purpose flour', amount: '1 cup', visual: 'One cup flour' },
      { name: 'Baking powder', amount: '1 tsp', visual: 'One teaspoon' },
      { name: 'Baking soda', amount: '1/2 tsp', visual: 'Half teaspoon' },
      { name: 'Vanilla extract', amount: '1 tsp', visual: 'One teaspoon' },
      { name: 'Honey', amount: '2 tbsp', visual: 'Two tablespoons' }
    ],
    steps: [
      { id: 1, instruction: 'Mix wet ingredients', plainLanguage: 'In a bowl, whisk together Greek yogurt, eggs, vanilla, and honey until smooth.' },
      { id: 2, instruction: 'Add dry ingredients', plainLanguage: 'Add flour, baking powder, and baking soda. Stir gently until just combined. Small lumps are okay!', tip: 'Don\'t overmix - lumpy batter = fluffy pancakes!' },
      { id: 3, instruction: 'Heat griddle', plainLanguage: 'Heat a non-stick griddle or pan to medium heat. Lightly grease with butter or oil.' },
      { id: 4, instruction: 'Cook pancakes', plainLanguage: 'Pour 1/4 cup batter for each pancake. Cook until bubbles form and edges look set (2-3 min). Flip and cook another 2 min until golden.', timer: 5 },
      { id: 5, instruction: 'Serve', plainLanguage: 'Stack high! Serve with fresh berries, maple syrup, or Greek yogurt on top. Each serving has 18g protein!', tip: 'These keep you full for hours!' }
    ]
  },
  {
    id: '58',
    title: 'Bang Bang Salmon',
    description: 'Viral air fryer recipe! Crispy, sweet, spicy perfection.',
    difficulty: 'easy',
    prepTime: 10,
    cookTime: 12,
    servings: 4,
    tags: ['dinner', 'seafood', 'viral', 'air-fryer', 'trending-2025'],
    image: 'https://images.unsplash.com/photo-1485921325833-c519f76c4927?auto=format&fit=crop&w=800&q=80',
    nutrition: { calories: 340, protein: 34, carbs: 18, fat: 16, fiber: 1 },
    ingredients: [
      { name: 'Salmon fillets', amount: '4 (6oz each)', visual: 'Four salmon fillets' },
      { name: 'Panko breadcrumbs', amount: '1 cup', visual: 'One cup panko' },
      { name: 'Mayonnaise', amount: '1/2 cup', visual: 'Half cup mayo' },
      { name: 'Sweet chili sauce', amount: '1/3 cup', visual: 'Third cup' },
      { name: 'Sriracha', amount: '2 tbsp', visual: 'Two tablespoons' },
      { name: 'Honey', amount: '1 tbsp', visual: 'One tablespoon' },
      { name: 'Garlic powder', amount: '1 tsp', visual: 'One teaspoon' },
      { name: 'Green onions', amount: '2 sliced', visual: 'For garnish' }
    ],
    steps: [
      { id: 1, instruction: 'Make bang bang sauce', plainLanguage: 'In a bowl, mix mayo, sweet chili sauce, sriracha, and honey. Set aside half for serving.' },
      { id: 2, instruction: 'Coat salmon', plainLanguage: 'Brush salmon with half the sauce. Press panko breadcrumbs on top to coat well. Spray with cooking spray.' },
      { id: 3, instruction: 'Air fry', plainLanguage: 'Place salmon in air fryer basket skin-side down. Air fry at 400°F for 10-12 minutes until crispy and cooked through.', timer: 12, tip: 'No air fryer? Bake at 425°F for 12-15 min!' },
      { id: 4, instruction: 'Drizzle sauce', plainLanguage: 'Transfer to plates. Drizzle with reserved bang bang sauce.' },
      { id: 5, instruction: 'Serve', plainLanguage: 'Garnish with green onions. Serve over rice with steamed broccoli. The crispy-creamy-spicy combo is unreal!', tip: 'This is restaurant-quality at home!' }
    ]
  },
  {
    id: '59',
    title: 'Shakshuka',
    description: 'Middle Eastern breakfast trend! Eggs poached in spiced tomato sauce.',
    difficulty: 'easy',
    prepTime: 10,
    cookTime: 20,
    servings: 4,
    tags: ['breakfast', 'middle-eastern', 'vegetarian', 'trending-2025'],
    image: 'https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?auto=format&fit=crop&w=800&q=80',
    nutrition: { calories: 245, protein: 14, carbs: 18, fat: 14, fiber: 5 },
    ingredients: [
      { name: 'Olive oil', amount: '3 tbsp', visual: 'Three tablespoons' },
      { name: 'Onion', amount: '1 large diced', visual: 'One onion' },
      { name: 'Red bell pepper', amount: '1 large diced', visual: 'One pepper' },
      { name: 'Garlic', amount: '4 cloves minced', visual: 'Four cloves' },
      { name: 'Crushed tomatoes', amount: '1 can (28oz)', visual: 'One large can' },
      { name: 'Cumin', amount: '1 tsp', visual: 'One teaspoon' },
      { name: 'Paprika', amount: '1 tsp', visual: 'One teaspoon' },
      { name: 'Cayenne', amount: '1/4 tsp', visual: 'Quarter teaspoon' },
      { name: 'Eggs', amount: '6 large', visual: 'Six eggs' },
      { name: 'Feta cheese', amount: '1/2 cup crumbled', visual: 'Half cup' },
      { name: 'Fresh parsley', amount: '1/4 cup', visual: 'Quarter cup chopped' },
      { name: 'Pita bread', amount: 'for serving', visual: 'For dipping' }
    ],
    steps: [
      { id: 1, instruction: 'Sauté vegetables', plainLanguage: 'Heat olive oil in a large skillet. Cook onion and pepper until soft (5 min). Add garlic, cook 1 min.', timer: 6 },
      { id: 2, instruction: 'Add spices and tomatoes', plainLanguage: 'Stir in cumin, paprika, and cayenne. Add crushed tomatoes. Simmer 10 minutes until sauce thickens.', timer: 10 },
      { id: 3, instruction: 'Make wells for eggs', plainLanguage: 'Use a spoon to make 6 small wells in the sauce. Crack an egg into each well.', tip: 'Try to keep yolks intact!' },
      { id: 4, instruction: 'Cook eggs', plainLanguage: 'Cover pan and cook 5-8 minutes until egg whites are set but yolks are still runny.', timer: 7, tip: 'Cook longer if you prefer hard yolks' },
      { id: 5, instruction: 'Serve', plainLanguage: 'Sprinkle with feta and parsley. Serve family-style with warm pita for dipping. Brunch perfection!' }
    ]
  },
  {
    id: '60',
    title: 'Crispy Smash Burgers',
    description: 'TikTok\'s favorite burger method! Crispy edges, juicy center.',
    difficulty: 'super-easy',
    prepTime: 5,
    cookTime: 10,
    servings: 4,
    tags: ['dinner', 'burger', 'viral', 'trending-2025', 'quick'],
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    nutrition: { calories: 580, protein: 32, carbs: 35, fat: 34, fiber: 2 },
    ingredients: [
      { name: 'Ground beef', amount: '1 lb (80/20)', visual: 'One pound ground beef' },
      { name: 'Burger buns', amount: '4', visual: 'Four buns' },
      { name: 'American cheese', amount: '8 slices', visual: 'Eight cheese slices' },
      { name: 'Onion', amount: '1 small sliced thin', visual: 'One onion' },
      { name: 'Pickles', amount: '12 slices', visual: 'Dill pickles' },
      { name: 'Burger sauce', amount: '1/2 cup', visual: 'Mayo + ketchup + pickles' },
      { name: 'Butter', amount: '2 tbsp', visual: 'For toasting buns' }
    ],
    steps: [
      { id: 1, instruction: 'Make sauce', plainLanguage: 'Mix 1/4 cup mayo, 2 tbsp ketchup, 1 tbsp relish, 1 tsp mustard. Set aside.' },
      { id: 2, instruction: 'Form balls', plainLanguage: 'Divide beef into 8 portions (2oz each). Roll into balls. Season balls with salt and pepper.', tip: 'Don\'t form patties - you want balls to smash!' },
      { id: 3, instruction: 'Smash and cook', plainLanguage: 'Heat griddle or cast iron to HIGH. Place ball on griddle. Immediately smash HARD with spatula for 10 seconds. Cook 2 min until crispy crust forms. Flip, add cheese, cook 1 min.', timer: 3, tip: 'REALLY smash it! That\'s how you get the crispy edges!' },
      { id: 4, instruction: 'Stack patties', plainLanguage: 'Stack 2 patties together for each burger (double smash!)' },
      { id: 5, instruction: 'Assemble burgers', plainLanguage: 'Toast buns in butter. Spread sauce on buns. Add pickles, stacked patties, and onions. These are INSANELY good!', tip: 'The crispy lacy edges are what make these viral!' }
    ]
  },
  {
    id: '61',
    title: 'Pesto Pasta with Burrata',
    description: '2025 dinner party favorite! Simple elegance in 15 minutes.',
    difficulty: 'super-easy',
    prepTime: 5,
    cookTime: 12,
    servings: 4,
    tags: ['dinner', 'pasta', 'italian', 'quick', 'trending-2025'],
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=800&q=80',
    nutrition: { calories: 520, protein: 18, carbs: 58, fat: 24, fiber: 3 },
    ingredients: [
      { name: 'Pasta', amount: '1 lb', visual: 'One pound any shape' },
      { name: 'Basil pesto', amount: '3/4 cup', visual: 'Store-bought or homemade' },
      { name: 'Burrata cheese', amount: '8 oz', visual: 'Two balls burrata' },
      { name: 'Cherry tomatoes', amount: '2 cups halved', visual: 'Two cups tomatoes' },
      { name: 'Garlic', amount: '3 cloves minced', visual: 'Three cloves' },
      { name: 'Olive oil', amount: '2 tbsp', visual: 'Two tablespoons' },
      { name: 'Fresh basil', amount: '1/4 cup', visual: 'Quarter cup torn' },
      { name: 'Lemon zest', amount: '1 tsp', visual: 'From one lemon' },
      { name: 'Red pepper flakes', amount: '1/2 tsp', visual: 'Optional kick' }
    ],
    steps: [
      { id: 1, instruction: 'Cook pasta', plainLanguage: 'Boil salted water. Cook pasta according to package directions. Reserve 1 cup pasta water before draining.', timer: 10 },
      { id: 2, instruction: 'Sauté tomatoes', plainLanguage: 'While pasta cooks, heat olive oil in a large pan. Add garlic and cook 30 seconds. Add tomatoes, cook 3-4 minutes until blistered.', timer: 4 },
      { id: 3, instruction: 'Combine with pesto', plainLanguage: 'Add drained pasta to the pan with tomatoes. Toss in pesto and 1/4 cup pasta water. Toss to coat. Add more water if needed for a silky sauce.' },
      { id: 4, instruction: 'Add burrata', plainLanguage: 'Transfer to serving bowl. Tear burrata into large pieces and place on top. It will melt slightly from the warm pasta.' },
      { id: 5, instruction: 'Garnish and serve', plainLanguage: 'Top with fresh basil, lemon zest, and red pepper flakes. Toss at the table so everyone gets creamy burrata!', tip: 'This tastes like a $30 restaurant dish!' }
    ]
  },
  {
    id: '62',
    title: 'Avocado Toast 3 Ways',
    description: 'Instagram\'s breakfast essential! Three trendy variations.',
    difficulty: 'super-easy',
    prepTime: 10,
    cookTime: 5,
    servings: 2,
    tags: ['breakfast', 'vegetarian', 'quick', 'trending-2025'],
    image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?auto=format&fit=crop&w=800&q=80',
    nutrition: { calories: 320, protein: 12, carbs: 28, fat: 19, fiber: 8 },
    ingredients: [
      { name: 'Sourdough bread', amount: '4 slices', visual: 'Four thick slices' },
      { name: 'Ripe avocados', amount: '2', visual: 'Two ripe avocados' },
      { name: 'Eggs', amount: '2', visual: 'For classic version' },
      { name: 'Cherry tomatoes', amount: '1 cup halved', visual: 'For Italian version' },
      { name: 'Feta cheese', amount: '1/4 cup crumbled', visual: 'For Mediterranean version' },
      { name: 'Everything bagel seasoning', amount: '2 tsp', visual: 'Two teaspoons' },
      { name: 'Red pepper flakes', amount: '1/2 tsp', visual: 'Half teaspoon' },
      { name: 'Lemon juice', amount: '1 tbsp', visual: 'From half lemon' }
    ],
    steps: [
      { id: 1, instruction: 'Toast bread', plainLanguage: 'Toast sourdough slices until golden and crispy.' },
      { id: 2, instruction: 'Mash avocado', plainLanguage: 'In a bowl, mash avocados with lemon juice, salt, and pepper until smooth or chunky (your choice).' },
      { id: 3, instruction: 'Version 1: Classic', plainLanguage: 'Spread avocado on 2 toasts. Top each with a fried or poached egg. Sprinkle with everything seasoning and red pepper flakes.', tip: 'Runny yolk is KEY!' },
      { id: 4, instruction: 'Version 2: Italian', plainLanguage: 'Spread avocado on 1 toast. Top with halved cherry tomatoes, fresh basil, and balsamic glaze.' },
      { id: 5, instruction: 'Version 3: Mediterranean', plainLanguage: 'Spread avocado on 1 toast. Top with crumbled feta, cucumber slices, and za\'atar seasoning.', tip: 'Mix and match toppings for endless combinations!' }
    ]
  },
  {
    id: '63',
    title: 'One-Pot Chicken Alfredo',
    description: 'Weeknight savior! Everything cooks in one pot, ready in 20 minutes.',
    difficulty: 'easy',
    prepTime: 5,
    cookTime: 20,
    servings: 4,
    tags: ['dinner', 'pasta', 'one-pot', 'quick', 'trending-2025'],
    image: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=800&q=80',
    nutrition: { calories: 620, protein: 42, carbs: 56, fat: 26, fiber: 3 },
    ingredients: [
      { name: 'Chicken breasts', amount: '1 lb sliced', visual: 'One pound, sliced thin' },
      { name: 'Fettuccine pasta', amount: '12 oz', visual: '12 oz pasta' },
      { name: 'Chicken broth', amount: '3 cups', visual: 'Three cups broth' },
      { name: 'Heavy cream', amount: '1 cup', visual: 'One cup cream' },
      { name: 'Parmesan cheese', amount: '1.5 cups grated', visual: '1.5 cups grated' },
      { name: 'Garlic', amount: '4 cloves minced', visual: 'Four cloves' },
      { name: 'Italian seasoning', amount: '1 tsp', visual: 'One teaspoon' },
      { name: 'Fresh parsley', amount: '1/4 cup', visual: 'For garnish' }
    ],
    steps: [
      { id: 1, instruction: 'Brown chicken', plainLanguage: 'Season chicken with salt, pepper, and Italian seasoning. In a large pot, cook chicken in oil until golden. Remove and set aside.', timer: 6 },
      { id: 2, instruction: 'Cook garlic', plainLanguage: 'In the same pot, sauté garlic for 30 seconds until fragrant.' },
      { id: 3, instruction: 'Add pasta and liquid', plainLanguage: 'Break pasta in half and add to pot. Pour in chicken broth and heavy cream. Bring to a boil, then reduce to simmer. Stir frequently to prevent sticking.', timer: 12, tip: 'Stirring is important so pasta doesn\'t clump!' },
      { id: 4, instruction: 'Add chicken and cheese', plainLanguage: 'When pasta is almost tender, return chicken to pot. Stir in parmesan cheese until melted and creamy.' },
      { id: 5, instruction: 'Serve', plainLanguage: 'Let sit 2 minutes to thicken. Garnish with parsley and more parmesan. One pot = one dish to wash!', tip: 'Leftovers thicken up - just add a splash of milk when reheating!' }
    ]
  },
  {
    id: '64',
    title: 'Açaí Bowl',
    description: 'Breakfast bowl trend of 2025! Healthy, Instagram-worthy, delicious.',
    difficulty: 'super-easy',
    prepTime: 5,
    cookTime: 0,
    servings: 2,
    tags: ['breakfast', 'healthy', 'no-cook', 'trending-2025', 'vegan'],
    image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=800&q=80',
    nutrition: { calories: 380, protein: 8, carbs: 68, fat: 12, fiber: 12 },
    ingredients: [
      { name: 'Frozen açaí packets', amount: '2 (100g each)', visual: 'Two frozen packets' },
      { name: 'Frozen banana', amount: '1', visual: 'One frozen banana' },
      { name: 'Frozen berries', amount: '1/2 cup', visual: 'Half cup mixed berries' },
      { name: 'Apple juice', amount: '1/3 cup', visual: 'Third cup juice' },
      { name: 'Granola', amount: '1/2 cup', visual: 'For topping' },
      { name: 'Fresh strawberries', amount: '1 cup sliced', visual: 'For topping' },
      { name: 'Banana', amount: '1 sliced', visual: 'For topping' },
      { name: 'Coconut flakes', amount: '2 tbsp', visual: 'For topping' },
      { name: 'Honey', amount: '2 tbsp', visual: 'For drizzling' }
    ],
    steps: [
      { id: 1, instruction: 'Break up açaí', plainLanguage: 'Run frozen açaí packets under warm water for 10 seconds to soften slightly. Break into chunks.' },
      { id: 2, instruction: 'Blend base', plainLanguage: 'In a blender, combine açaí chunks, frozen banana, frozen berries, and apple juice. Blend on high until thick and smooth. It should be thicker than a smoothie - like soft serve ice cream!', tip: 'Less liquid = thicker bowl. Add more only if blender struggles.' },
      { id: 3, instruction: 'Divide into bowls', plainLanguage: 'Pour into 2 bowls. Use a spoon to smooth the top.' },
      { id: 4, instruction: 'Arrange toppings', plainLanguage: 'Arrange toppings in sections: granola on one side, strawberries on another, banana slices, coconut flakes. Make it pretty!', tip: 'The key is making it look good for the \'gram!' },
      { id: 5, instruction: 'Serve', plainLanguage: 'Drizzle with honey. Eat immediately while base is still thick and cold. So refreshing and filling!' }
    ]
  },
  {
    id: '65',
    title: 'Buffalo Cauliflower Bites',
    description: 'Viral vegetarian appetizer! Crispy, spicy, crowd-pleasing.',
    difficulty: 'easy',
    prepTime: 15,
    cookTime: 30,
    servings: 6,
    tags: ['appetizer', 'vegetarian', 'viral', 'trending-2025'],
    image: 'https://images.unsplash.com/photo-1576867757862-08664c150f59?auto=format&fit=crop&w=800&q=80',
    nutrition: { calories: 185, protein: 6, carbs: 22, fat: 9, fiber: 4 },
    ingredients: [
      { name: 'Cauliflower', amount: '1 large head', visual: 'One head cut into florets' },
      { name: 'All-purpose flour', amount: '3/4 cup', visual: 'Three-quarters cup' },
      { name: 'Water', amount: '3/4 cup', visual: 'Three-quarters cup' },
      { name: 'Garlic powder', amount: '1 tsp', visual: 'One teaspoon' },
      { name: 'Paprika', amount: '1/2 tsp', visual: 'Half teaspoon' },
      { name: 'Buffalo sauce', amount: '1/2 cup', visual: 'Half cup Frank\'s RedHot' },
      { name: 'Butter', amount: '2 tbsp melted', visual: 'Two tablespoons' },
      { name: 'Ranch dressing', amount: 'for serving', visual: 'For dipping' }
    ],
    steps: [
      { id: 1, instruction: 'Make batter', plainLanguage: 'Preheat oven to 450°F. Mix flour, water, garlic powder, paprika, salt, and pepper until smooth.' },
      { id: 2, instruction: 'Coat cauliflower', plainLanguage: 'Dip cauliflower florets in batter, letting excess drip off. Place on greased baking sheet.' },
      { id: 3, instruction: 'First bake', plainLanguage: 'Bake for 20 minutes until batter is set and starting to brown.', timer: 20 },
      { id: 4, instruction: 'Add buffalo sauce', plainLanguage: 'Mix buffalo sauce and melted butter. Brush onto baked cauliflower, coating all sides.' },
      { id: 5, instruction: 'Second bake', plainLanguage: 'Bake another 10 minutes until crispy and caramelized. Serve hot with ranch or blue cheese!', timer: 10, tip: 'These are so good, even meat-eaters won\'t miss chicken wings!' }
    ]
  },
  {
    id: '66',
    title: 'Lemon Blueberry Muffins',
    description: 'Bakery-style muffins at home! Tall, fluffy, bursting with berries.',
    difficulty: 'easy',
    prepTime: 15,
    cookTime: 22,
    servings: 12,
    tags: ['baking', 'breakfast', 'muffins', 'trending-2025'],
    image: 'https://images.unsplash.com/photo-1607920591413-4ec007e70023?auto=format&fit=crop&w=800&q=80',
    nutrition: { calories: 240, protein: 4, carbs: 38, fat: 9, fiber: 1 },
    ingredients: [
      { name: 'All-purpose flour', amount: '2 cups', visual: 'Two cups flour' },
      { name: 'Baking powder', amount: '2 tsp', visual: 'Two teaspoons' },
      { name: 'Salt', amount: '1/2 tsp', visual: 'Half teaspoon' },
      { name: 'Butter', amount: '1/2 cup softened', visual: 'One stick butter' },
      { name: 'Sugar', amount: '1 cup', visual: 'One cup sugar' },
      { name: 'Eggs', amount: '2 large', visual: 'Two eggs' },
      { name: 'Vanilla extract', amount: '1 tsp', visual: 'One teaspoon' },
      { name: 'Milk', amount: '1/2 cup', visual: 'Half cup milk' },
      { name: 'Lemon zest', amount: '2 tbsp', visual: 'From 2 lemons' },
      { name: 'Lemon juice', amount: '2 tbsp', visual: 'From 1 lemon' },
      { name: 'Fresh blueberries', amount: '1.5 cups', visual: '1.5 cups berries' }
    ],
    steps: [
      { id: 1, instruction: 'Preheat and prep', plainLanguage: 'Preheat oven to 400°F. Line muffin tin with papers. Toss blueberries with 1 tbsp flour (prevents sinking).', tip: 'High heat gives you those beautiful domed tops!' },
      { id: 2, instruction: 'Mix dry ingredients', plainLanguage: 'Whisk together flour, baking powder, and salt in a bowl.' },
      { id: 3, instruction: 'Cream butter and sugar', plainLanguage: 'Beat butter and sugar until fluffy (3 minutes). Add eggs one at a time, then vanilla, lemon zest, and lemon juice.', timer: 3 },
      { id: 4, instruction: 'Combine', plainLanguage: 'Add flour mixture and milk alternately, starting and ending with flour. Fold in blueberries gently.', tip: 'Don\'t overmix! Stir just until combined' },
      { id: 5, instruction: 'Bake', plainLanguage: 'Fill muffin cups to the top. Bake 5 min at 400°F, then reduce to 350°F and bake 15-17 more minutes until golden.', timer: 22, tip: 'The high-to-low temp trick makes them EXTRA tall!' }
    ]
  },
  {
    id: '67',
    title: 'Korean Beef Bowl',
    description: 'Viral rice bowl! Sweet, savory, ready in 15 minutes.',
    difficulty: 'super-easy',
    prepTime: 5,
    cookTime: 10,
    servings: 4,
    tags: ['dinner', 'asian', 'quick', 'trending-2025', 'bowl'],
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80',
    nutrition: { calories: 450, protein: 28, carbs: 52, fat: 14, fiber: 2 },
    ingredients: [
      { name: 'Ground beef', amount: '1 lb', visual: 'One pound ground beef' },
      { name: 'Soy sauce', amount: '1/3 cup', visual: 'Third cup' },
      { name: 'Brown sugar', amount: '1/4 cup', visual: 'Quarter cup' },
      { name: 'Sesame oil', amount: '2 tsp', visual: 'Two teaspoons' },
      { name: 'Garlic', amount: '3 cloves minced', visual: 'Three cloves' },
      { name: 'Ginger', amount: '1 tsp minced', visual: 'One teaspoon' },
      { name: 'Red pepper flakes', amount: '1/4 tsp', visual: 'Quarter teaspoon' },
      { name: 'Cooked rice', amount: '4 cups', visual: 'Four cups cooked rice' },
      { name: 'Green onions', amount: '4 sliced', visual: 'Four green onions' },
      { name: 'Sesame seeds', amount: '1 tbsp', visual: 'For garnish' }
    ],
    steps: [
      { id: 1, instruction: 'Make sauce', plainLanguage: 'In a small bowl, whisk together soy sauce, brown sugar, sesame oil, garlic, ginger, and red pepper flakes.' },
      { id: 2, instruction: 'Cook beef', plainLanguage: 'In a large skillet over medium-high heat, cook ground beef until browned, breaking it up as it cooks.', timer: 6 },
      { id: 3, instruction: 'Add sauce', plainLanguage: 'Drain excess fat. Pour sauce over beef. Cook 2-3 minutes until sauce thickens and coats the beef.', timer: 3 },
      { id: 4, instruction: 'Assemble bowls', plainLanguage: 'Divide rice among 4 bowls. Top each with beef mixture.' },
      { id: 5, instruction: 'Garnish', plainLanguage: 'Top with sliced green onions and sesame seeds. Add sriracha if you want more heat!', tip: 'This is crazy good and costs way less than takeout!' }
    ]
  },
  {
    id: '68',
    title: 'Chocolate Lava Cakes',
    description: 'Restaurant dessert at home! Molten center, impressive presentation.',
    difficulty: 'intermediate',
    prepTime: 15,
    cookTime: 12,
    servings: 4,
    tags: ['dessert', 'chocolate', 'baking', 'trending-2025'],
    image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&w=800&q=80',
    nutrition: { calories: 420, protein: 7, carbs: 48, fat: 24, fiber: 3 },
    ingredients: [
      { name: 'Dark chocolate', amount: '6 oz chopped', visual: 'Six oz good quality' },
      { name: 'Butter', amount: '6 tbsp', visual: 'Six tablespoons' },
      { name: 'Eggs', amount: '2 large', visual: 'Two whole eggs' },
      { name: 'Egg yolks', amount: '2', visual: 'Two additional yolks' },
      { name: 'Powdered sugar', amount: '1/4 cup', visual: 'Quarter cup' },
      { name: 'All-purpose flour', amount: '2 tbsp', visual: 'Two tablespoons' },
      { name: 'Vanilla extract', amount: '1 tsp', visual: 'One teaspoon' },
      { name: 'Butter for ramekins', amount: '1 tbsp', visual: 'For greasing' },
      { name: 'Cocoa powder', amount: '1 tbsp', visual: 'For dusting' }
    ],
    steps: [
      { id: 1, instruction: 'Prep ramekins', plainLanguage: 'Butter 4 ramekins really well. Dust with cocoa powder, tapping out excess. Place on a baking sheet.', tip: 'Proper greasing is ESSENTIAL for unmolding!' },
      { id: 2, instruction: 'Melt chocolate', plainLanguage: 'Melt chocolate and butter together in microwave in 30-second bursts, stirring between. Let cool 5 minutes.', timer: 2 },
      { id: 3, instruction: 'Mix batter', plainLanguage: 'Whisk eggs, egg yolks, and powdered sugar until thick (2 min). Fold in chocolate mixture, then flour and vanilla.', timer: 2, tip: 'Don\'t skip whisking the eggs - this creates the texture!' },
      { id: 4, instruction: 'Bake', plainLanguage: 'Divide batter among ramekins. Bake at 425°F for 12-14 minutes. Edges should be firm but center still jiggly.', timer: 13, tip: 'Better slightly underbaked than overbaked!' },
      { id: 5, instruction: 'Unmold and serve', plainLanguage: 'Let cool 1 minute. Run knife around edge. Invert onto plates. The center should flow out when you cut in! Serve with vanilla ice cream.', tip: 'The timing is everything - that molten center is magic!' }
    ]
  },
  {
    id: '69',
    title: 'Loaded Sweet Potato',
    description: 'Healthy comfort food! Nutritious base, endless topping options.',
    difficulty: 'super-easy',
    prepTime: 5,
    cookTime: 45,
    servings: 4,
    tags: ['lunch', 'dinner', 'healthy', 'vegetarian', 'trending-2025'],
    image: 'https://images.unsplash.com/photo-1645696329472-bbb00be8a3ab?auto=format&fit=crop&w=800&q=80',
    nutrition: { calories: 380, protein: 18, carbs: 54, fat: 12, fiber: 10 },
    ingredients: [
      { name: 'Large sweet potatoes', amount: '4', visual: 'Four large sweet potatoes' },
      { name: 'Black beans', amount: '1 can (15oz)', visual: 'One can, drained' },
      { name: 'Corn', amount: '1 cup', visual: 'Fresh or frozen' },
      { name: 'Shredded cheddar', amount: '1 cup', visual: 'One cup cheese' },
      { name: 'Greek yogurt', amount: '1/2 cup', visual: 'Instead of sour cream' },
      { name: 'Avocado', amount: '1 large diced', visual: 'One avocado' },
      { name: 'Lime', amount: '1', visual: 'For juice' },
      { name: 'Cilantro', amount: '1/4 cup', visual: 'Quarter cup chopped' },
      { name: 'Taco seasoning', amount: '1 tbsp', visual: 'One tablespoon' }
    ],
    steps: [
      { id: 1, instruction: 'Bake sweet potatoes', plainLanguage: 'Poke sweet potatoes all over with a fork. Bake at 400°F for 40-45 minutes until tender. Or microwave 8-10 minutes!', timer: 45, tip: 'Microwave is way faster and just as good!' },
      { id: 2, instruction: 'Warm toppings', plainLanguage: 'While potatoes cook, warm black beans and corn together with taco seasoning.' },
      { id: 3, instruction: 'Split potatoes', plainLanguage: 'Cut a slit lengthwise in each potato. Gently squeeze ends to open up the center.' },
      { id: 4, instruction: 'Load them up', plainLanguage: 'Fill each potato with black bean mixture. Top with cheese (it\'ll melt from the heat!)' },
      { id: 5, instruction: 'Add fresh toppings', plainLanguage: 'Top with Greek yogurt, diced avocado, cilantro, and lime juice. So filling and nutritious!', tip: 'Mix up toppings: try buffalo chicken, chili, or BBQ pulled pork!' }
    ]
  },
  {
    id: '70',
    title: 'Crispy Baked Wings',
    description: 'Healthier wings without deep frying! Crispy skin, perfect for game day.',
    difficulty: 'easy',
    prepTime: 10,
    cookTime: 50,
    servings: 4,
    tags: ['appetizer', 'dinner', 'trending-2025'],
    image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&w=800&q=80',
    nutrition: { calories: 420, protein: 38, carbs: 2, fat: 28, fiber: 0 },
    ingredients: [
      { name: 'Chicken wings', amount: '3 lbs', visual: 'Three pounds wings' },
      { name: 'Baking powder', amount: '2 tbsp', visual: 'NOT baking soda!' },
      { name: 'Salt', amount: '1 tbsp', visual: 'One tablespoon' },
      { name: 'Garlic powder', amount: '1 tsp', visual: 'One teaspoon' },
      { name: 'Buffalo sauce', amount: '1/2 cup', visual: 'For coating' },
      { name: 'Butter', amount: '4 tbsp melted', visual: 'Four tablespoons' },
      { name: 'Ranch or blue cheese', amount: 'for serving', visual: 'For dipping' }
    ],
    steps: [
      { id: 1, instruction: 'Dry wings', plainLanguage: 'Pat wings completely dry with paper towels. This is the secret to crispy skin!', tip: 'Seriously dry them REALLY well - wetness = soggy wings' },
      { id: 2, instruction: 'Season', plainLanguage: 'In a large bowl, toss wings with baking powder, salt, and garlic powder until evenly coated.' },
      { id: 3, instruction: 'Arrange on rack', plainLanguage: 'Place wings on a wire rack set over a baking sheet. Space them out so they\'re not touching.', tip: 'The rack lets air circulate for crispy skin all around!' },
      { id: 4, instruction: 'Bake', plainLanguage: 'Bake at 250°F for 30 minutes, then increase heat to 425°F and bake 40-45 more minutes until golden and crispy.', timer: 75, tip: 'The low-then-high method renders fat and crisps skin perfectly' },
      { id: 5, instruction: 'Sauce and serve', plainLanguage: 'Toss wings in buffalo sauce mixed with melted butter. Serve immediately with ranch or blue cheese!', tip: 'These are as crispy as fried wings but way easier!' }
    ]
  }
];
