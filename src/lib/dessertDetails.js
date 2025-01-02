// src/lib/dessertDetails.js
const dessertDetails = [
    {
      id: 1,
      title: "Leslie's Oatmeal Cookies",
      description: "Healthy oatmeal cookies made with old-fashioned rolled oats, pecans, and raisins, creating a perfect balance of chewy texture and rich flavor.",
      prepTime: 15,
      cookTime: 13,
      difficulty: 'Easy',
      servings: 10,
      tags: ['Cookies', 'Baking', 'Oatmeal'],
      image: 'https://placehold.co/800x450',
      source: "From Leslie DeBoer",
      ingredients: [
        "1 cup old-fashioned rolled oats",
        "1 cup all-purpose flour",
        "1/2 teaspoon baking powder",
        "1/8 teaspoon baking soda",
        "1/2 teaspoon salt",
        "1 stick (1/2 cup) unsalted butter, softened but still cool",
        "1 cup packed dark brown sugar",
        "1 large egg",
        "3/4 teaspoon vanilla extract",
        "3/4 cup coarsely chopped pecans",
        "3/4 cup raisins or currants"
      ],
      instructions: [
        "In a medium bowl, whisk together the oats, flour, baking powder, baking soda and salt.",
        "In the bowl of an electric mixer, beat together the butter and brown sugar on medium speed until creamy, about 3 minutes.",
        "Scrape down the sides of the bowl with a rubber spatula, then add the egg and vanilla and beat again until smooth, about 30 seconds.",
        "Add the flour and oatmeal mixture and mix on low speed until just combined; add the pecans and raisins and mix again until just combined.",
        "Preheat oven to 350°F.",
        "Drop rounded spoonfuls onto baking sheet.",
        "Bake for 11-13 minutes."
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
      title: 'Sous Vide Yogurt',
      description: "A foolproof method for making creamy, live-culture yogurt using a sous vide.",
      prepTime: 30,
      cookTime: 690, // 11.5 hours (5 hours incubation + 6.5 hours cooling/setting)
      difficulty: 'Easy',
      servings: 5,
      tags: ['Breakfast', 'Dairy', 'Sous Vide', 'Fermented'],
      image: 'https://placehold.co/800x450',
      source: "Recipe adapted from Chef Steps",
      sourceUrl: "https://www.youtube.com/watch?v=PMInAL7JRRo",
      ingredients: [
        "800g whole milk",
        "40g live-culture yogurt"
      ],
      instructions: [
        "Preheat sous vide to 109°F (43°C).",
        "Warm milk to 180°F (82°C) in a pot over low heat, stirring occasionally to prevent scalding.",
        "Cool milk to 110°F (43°C) or below using an ice bath or at room temperature.",
        "In a separate bowl, mix yogurt with a portion of the cooled milk until smooth.",
        "Add remaining milk to the yogurt mixture and stir until combined.",
        "Pour mixture into a large (1L) canning jar or multiple small jars. Secure lids.",
        "Place jars in preheated water bath and incubate for at least 5 hours.",
        "Transfer yogurt to refrigerator and let set overnight.",
      ]
    }
  ];
  
  export default dessertDetails;