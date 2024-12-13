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
    title: 'Vegetable Stir-Fry',
    description: "A colorful and nutritious vegetable stir-fry with a savory sauce. Quick to prepare and easily customizable with your favorite vegetables.",
    prepTime: 10,
    cookTime: 15,
    difficulty: 'Easy',
    servings: 4,
    tags: ['Vegetarian', 'Quick', 'Dinner'],
    image: 'https://placehold.co/800x450',
    ingredients: [
      "2 cups broccoli florets",
      "1 red bell pepper, sliced",
      "2 carrots, julienned",
      "1 cup snap peas",
      "1 cup mushrooms, sliced",
      "3 cloves garlic, minced",
      "1 inch ginger, minced",
      "3 tablespoons soy sauce",
      "1 tablespoon cornstarch",
      "2 tablespoons vegetable oil",
      "1/2 cup vegetable broth"
    ],
    instructions: [
      "Mix soy sauce, cornstarch, and vegetable broth in a small bowl. Set aside.",
      "Heat oil in a large wok or skillet over high heat.",
      "Add garlic and ginger, stir-fry for 30 seconds until fragrant.",
      "Add harder vegetables (carrots, broccoli) first, stir-fry for 2-3 minutes.",
      "Add remaining vegetables, cook for another 2-3 minutes until crisp-tender.",
      "Pour sauce mixture over vegetables, stir until thickened.",
      "Season to taste and serve hot over rice or noodles."
    ]
  }
];

export default foodRecipeDetails;