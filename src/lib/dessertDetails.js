// src/lib/dessertDetails.js
const dessertDetails = [
    {
      id: 1,
      title: 'Classic New York Cheesecake',
      description: "A rich and creamy cheesecake with a buttery graham cracker crust. Dense yet light, with a smooth texture that defines the perfect New York style.",
      prepTime: 30,
      cookTime: 60,
      difficulty: 'Medium',
      servings: 12,
      tags: ['Baking', 'Classic', 'Cheesecake'],
      image: 'https://placehold.co/800x450',
      ingredients: [
        "For the crust:",
        "2 cups graham cracker crumbs",
        "1/2 cup melted butter",
        "1/4 cup granulated sugar",
        "For the filling:",
        "4 (8 oz) packages cream cheese, softened",
        "1 1/4 cups granulated sugar",
        "4 large eggs",
        "1/3 cup heavy cream",
        "1 tablespoon vanilla extract",
        "1/4 teaspoon salt"
      ],
      instructions: [
        "Preheat oven to 325°F (165°C). Wrap outside of a 9-inch springform pan with foil.",
        "Mix graham cracker crumbs, melted butter, and sugar. Press into bottom of pan.",
        "Beat cream cheese until smooth. Gradually beat in sugar.",
        "Add eggs one at a time, beating on low speed. Mix in cream, vanilla, and salt.",
        "Pour over crust. Place springform pan in larger roasting pan, add hot water halfway up sides.",
        "Bake for 1 hour and 15 minutes until center is almost set. Remove from water bath.",
        "Run knife around rim, let cool. Refrigerate overnight."
      ]
    },
    {
      id: 2,
      title: 'Blueberry-Lemon Scones',
      description: "Light and tender scones studded with fresh blueberries and brightened with lemon zest, made with coconut oil for a delicate crumb.",
      prepTime: 20,
      cookTime: 25,
      difficulty: 'Medium',
      servings: 6,
      tags: ['Breakfast', 'Scones', 'Brunch', 'Blueberry'],
      image: 'https://placehold.co/800x450',
      source: "Recipe adapted from Serious Eats",
      sourceUrl: "https://www.seriouseats.com/lemon-blueberry-scones-vegan-recipe",
      ingredients: [
        "For the Dough:",
        "2 cups (255g) all-purpose flour, plus more for dusting",
        "1 tablespoon baking powder",
        "2 teaspoons sugar",
        "1 teaspoon Diamond Crystal kosher salt",
        "1/4 cup (55g) refined coconut oil, solid but creamy",
        "1 cup (170g) fresh blueberries",
        "1 tablespoon (7g) lemon zest",
        "1 cup (225g) unsweetened, full-fat coconut milk",
        "For Topping:",
        "Turbinado sugar for sprinkling (optional)"
      ],
      instructions: [
        "Combine flour, baking powder, sugar, salt, and coconut oil in a food processor. Pulse until oil disappears into a powdery meal.",
        "Transfer mixture to a medium bowl, then toss with blueberries and lemon zest.",
        "Stir in coconut milk with a flexible spatula to form a soft dough.",
        "Turn dough onto a lightly floured sheet of parchment paper and pat into a 7-inch round.",
        "Refrigerate dough for 15 minutes.",
        "Meanwhile, adjust oven rack to lower-middle position and preheat oven to 400°F (204°C).",
        "Using a chef's knife, cut chilled wheel of dough into 6 wedges.",
        "Sprinkle generously with turbinado sugar if using.",
        "Arrange wedges on a parchment-lined half sheet pan.",
        "Bake until puffed and golden, about 25 minutes.",
        "Serve warm."
      ]
    },
    {
      id: 3,
      title: 'Classic Banana Bread',
      description: "A moist and tender quick bread made with ripe bananas. This timeless recipe creates the perfect balance of banana flavor and sweet warmth.",
      prepTime: 15,
      cookTime: 60,
      difficulty: 'Easy',
      servings: 10,
      tags: ['Quick Bread', 'Breakfast', 'Snack'],
      image: 'https://placehold.co/800x450',
      ingredients: [
        "3 ripe bananas, mashed",
        "1/3 cup melted butter",
        "1/2 cup granulated sugar",
        "1 large egg",
        "1 teaspoon vanilla extract",
        "1 teaspoon baking soda",
        "1/4 teaspoon salt",
        "1 1/2 cups all-purpose flour",
        "Optional:",
        "1/2 cup chopped walnuts",
        "1/2 teaspoon cinnamon"
      ],
      instructions: [
        "Preheat oven to 350°F (175°C). Grease 9x5 inch loaf pan.",
        "Mix mashed bananas with melted butter in large bowl.",
        "Stir in sugar, egg, and vanilla.",
        "Sprinkle baking soda and salt over mixture.",
        "Stir in flour until just combined. Add nuts if using.",
        "Pour batter into prepared pan.",
        "Bake 60 minutes or until toothpick comes out clean.",
        "Let cool in pan for 10 minutes before removing."
      ]
    }
  ];
  
  export default dessertDetails;