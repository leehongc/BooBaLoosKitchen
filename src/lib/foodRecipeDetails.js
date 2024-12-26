// src/lib/foodRecipeDetails.js
const foodRecipeDetails = [
  {
    id: 1,
    title: 'Spaghetti Carbonara',
    description: "A classic Italian pasta dish made with eggs, cheese, pancetta, and black pepper. Rich, creamy, and remarkably simple to prepare.",
    prepTime: 15,
    cookTime: 20,
    difficulty: 'Medium',
    servings: 4,
    tags: ['Pasta', 'Italian', 'Dinner'],
    image: 'https://placehold.co/800x450',
    ingredients: [
      "400g spaghetti",
      "200g pancetta or guanciale, diced",
      "4 large eggs",
      "100g Pecorino Romano, grated",
      "100g Parmigiano-Reggiano, grated",
      "2 tsp freshly ground black pepper",
      "Salt to taste"
    ],
    instructions: [
      "Bring a large pot of salted water to boil. Cook spaghetti according to package instructions.",
      "While pasta cooks, whisk eggs, grated cheese, and black pepper in a bowl.",
      "Cook pancetta in a large pan until crispy. Remove from heat.",
      "Reserve 1 cup pasta water, then drain pasta.",
      "Working quickly, add pasta to pancetta pan, then pour egg mixture over, tossing rapidly.",
      "Add pasta water as needed to create a creamy sauce.",
      "Serve immediately with extra cheese and black pepper."
    ]
  },
  {
    id: 2,
    title: 'Grilled Chicken Salad',
    description: "A light and refreshing salad featuring tender grilled chicken, crisp vegetables, and a zesty vinaigrette. Perfect for a healthy lunch or light dinner.",
    prepTime: 10,
    cookTime: 15,
    difficulty: 'Easy',
    servings: 2,
    tags: ['Salad', 'Healthy', 'Lunch'],
    image: 'https://placehold.co/800x450',
    ingredients: [
      "2 chicken breasts",
      "1 head romaine lettuce, chopped",
      "2 cups cherry tomatoes, halved",
      "1 cucumber, sliced",
      "1/2 red onion, thinly sliced",
      "1/2 cup olive oil",
      "3 tablespoons balsamic vinegar",
      "1 teaspoon Dijon mustard",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Season chicken breasts with salt and pepper. Grill until cooked through, about 6-7 minutes per side.",
      "While chicken cooks, whisk together olive oil, balsamic vinegar, and Dijon mustard for the dressing.",
      "In a large bowl, combine lettuce, tomatoes, cucumber, and red onion.",
      "Slice the grilled chicken into strips.",
      "Toss the salad with dressing, top with sliced chicken.",
      "Season with additional salt and pepper if desired. Serve immediately."
    ]
  },
  {
    id: 3,
    title: 'San Francisco-Style Vietnamese American Garlic Noodles',
    description: "A savory and aromatic noodle dish created by J. Kenji López-Alt, featuring a rich garlic butter sauce enhanced with Asian condiments.",
    prepTime: 5,
    cookTime: 10,
    difficulty: 'Easy',
    servings: 4,
    tags: ['Asian Fusion', 'Pasta', 'Quick'],
    image: 'https://placehold.co/800x450',
    source: "By J. Kenji López-Alt",
    sourceUrl: "https://cooking.nytimes.com/recipes/1023012-san-francisco-style-vietnamese-american-garlic-noodles",
    ingredients: [
      "4 tablespoons unsalted butter",
      "20 medium garlic cloves, minced or smashed",
      "4 teaspoons oyster sauce",
      "2 teaspoons light soy sauce or shoyu",
      "2 teaspoons fish sauce",
      "1 pound dry spaghetti",
      "1 ounce grated Parmesan or Pecorino Romano",
      "Thinly sliced scallions (optional)"
    ],
    instructions: [
      "Melt butter in a wok or saucepan over medium heat. Add garlic and cook until fragrant but not browned, about 2 minutes.",
      "Add oyster sauce, soy sauce and fish sauce, stir to combine. Remove from heat.",
      "Bring 1½ inches of water to boil in a 12-inch skillet over high heat.",
      "Add pasta, stir to prevent clumping, cook until just shy of al dente (2 minutes less than package time).",
      "Transfer pasta to garlic sauce using tongs, keeping pasta water.",
      "Add cheese, stir and toss vigorously over high heat until sauce is creamy and emulsified, about 30 seconds.",
      "Adjust consistency with pasta water if needed.",
      "Stir in optional scallions and serve immediately."
    ]
  }
];

export default foodRecipeDetails;