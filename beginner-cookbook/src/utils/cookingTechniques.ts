export interface CookingTechnique {
  term: string;
  definition: string;
  visual: string;
  steps?: string[];
}

export const cookingTechniques: Record<string, CookingTechnique> = {
  dice: {
    term: 'Dice',
    definition: 'Cut food into small, uniform cube-shaped pieces',
    visual: '🔲',
    steps: [
      'Cut the ingredient into strips',
      'Line up the strips side by side',
      'Cut across the strips to make small cubes',
      'Aim for pieces about the size of game dice (around 1/4 inch)'
    ]
  },
  mince: {
    term: 'Mince',
    definition: 'Cut food into very tiny pieces, smaller than diced',
    visual: '🔪',
    steps: [
      'First dice the ingredient into small pieces',
      'Rock your knife back and forth over the pieces',
      'Keep chopping until pieces are very fine',
      'Should be almost paste-like when done'
    ]
  },
  chop: {
    term: 'Chop',
    definition: 'Cut food into pieces (doesn\'t need to be uniform)',
    visual: '✂️',
    steps: [
      'Cut the ingredient into manageable sections',
      'Make cuts in one direction',
      'Turn and make cuts in the other direction',
      'Pieces can be rough and uneven - that\'s okay!'
    ]
  },
  slice: {
    term: 'Slice',
    definition: 'Cut food into thin, flat pieces',
    visual: '📏',
    steps: [
      'Hold the ingredient steady with one hand',
      'Use a smooth, sawing motion with your knife',
      'Cut straight down to create thin, even slices',
      'Keep your fingers curled for safety'
    ]
  },
  peel: {
    term: 'Peel',
    definition: 'Remove the outer skin or layer from food',
    visual: '🥔',
    steps: [
      'Use a vegetable peeler or knife',
      'Hold the food steady in one hand',
      'Glide the peeler away from you, removing the skin',
      'Rotate the food and repeat until all skin is removed'
    ]
  },
  grate: {
    term: 'Grate',
    definition: 'Shred food into small pieces using a grater',
    visual: '🧀',
    steps: [
      'Hold the grater steady on a cutting board',
      'Rub the food up and down against the grater holes',
      'Use the size of holes that matches your recipe',
      'Watch your fingers as the food gets smaller!'
    ]
  },
  boil: {
    term: 'Boil',
    definition: 'Heat liquid until large bubbles form rapidly',
    visual: '♨️',
    steps: [
      'Fill pot with water and put on stove',
      'Turn heat to high',
      'Wait for lots of big bubbles that break the surface',
      'You\'ll see steam and hear bubbling sounds'
    ]
  },
  simmer: {
    term: 'Simmer',
    definition: 'Heat liquid gently with small, gentle bubbles',
    visual: '💧',
    steps: [
      'Bring liquid to a boil first',
      'Turn heat down to low or medium-low',
      'Look for small bubbles that occasionally break the surface',
      'Liquid should be steaming but not rapidly bubbling'
    ]
  },
  sauté: {
    term: 'Sauté',
    definition: 'Cook food quickly in a small amount of fat over medium-high heat',
    visual: '🍳',
    steps: [
      'Heat pan with a little oil or butter',
      'Add food when oil shimmers or butter melts',
      'Stir or flip food frequently',
      'Food should sizzle and brown, not steam'
    ]
  },
  whisk: {
    term: 'Whisk',
    definition: 'Beat ingredients together rapidly with a whisk to mix or add air',
    visual: '🥄',
    steps: [
      'Hold the whisk handle in your hand',
      'Move your wrist in rapid circular motions',
      'Continue until ingredients are well combined',
      'You can use a fork if you don\'t have a whisk'
    ]
  },
  fold: {
    term: 'Fold',
    definition: 'Gently combine ingredients without deflating them',
    visual: '🥣',
    steps: [
      'Use a spatula or large spoon',
      'Cut down through the middle of the mixture',
      'Scrape along the bottom and up the side',
      'Turn mixture over gently - repeat until combined'
    ]
  },
  season: {
    term: 'Season',
    definition: 'Add salt, pepper, or spices to enhance flavor',
    visual: '🧂',
    steps: [
      'Start with a small amount (you can always add more)',
      'Sprinkle evenly over the food',
      'Taste the food if possible',
      'Add more gradually until it tastes good to you'
    ]
  }
};

// Helper function to detect cooking terms in text
export function detectCookingTerms(text: string): string[] {
  const lowerText = text.toLowerCase();
  const foundTerms: string[] = [];

  Object.keys(cookingTechniques).forEach(term => {
    if (lowerText.includes(term)) {
      foundTerms.push(term);
    }
  });

  return foundTerms;
}
