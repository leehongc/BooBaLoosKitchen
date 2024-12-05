export const RECIPE_CATEGORIES = {
    MAIN: 'main-dishes',
    DRINKS: 'drinks',
    DESSERTS: 'desserts'
  }
  
  export const RECIPE_TAGS = [
    'Quick & Easy',
    'Vegetarian',
    'Gluten-Free',
    'Comfort Food',
    'Healthy',
    'Family Favorites'
  ]
  
  export const SAMPLE_RECIPES = [
    {
      id: 1,
      title: 'Classic Spaghetti Carbonara',
      category: RECIPE_CATEGORIES.MAIN,
      prepTime: '15 mins',
      cookTime: '20 mins',
      difficulty: 'Medium',
      tags: ['Comfort Food', 'Family Favorites'],
      image: '/api/placeholder/400/300'
    },
    {
      id: 2,
      title: 'Fresh Berry Smoothie',
      category: RECIPE_CATEGORIES.DRINKS,
      prepTime: '5 mins',
      cookTime: '0 mins',
      difficulty: 'Easy',
      tags: ['Quick & Easy', 'Healthy'],
      image: '/api/placeholder/400/300'
    },
    {
      id: 3,
      title: 'Chocolate Lava Cake',
      category: RECIPE_CATEGORIES.DESSERTS,
      prepTime: '15 mins',
      cookTime: '12 mins',
      difficulty: 'Medium',
      tags: ['Dessert', 'Family Favorites'],
      image: '/api/placeholder/400/300'
    }
  ]
  