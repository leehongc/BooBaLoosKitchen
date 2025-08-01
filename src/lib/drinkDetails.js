import mojito from '../assets/images/mojito.png'
import pinaColada from '../assets/images/pina-colada.jpg'
import espressoMartini from '../assets/images/espresso-martini.png'

const drinksDetails = [
    {
      id: 1,
      title: 'Classic Mojito',
      description: "A refreshing Cuban cocktail that combines white rum with lime, mint, and soda water.",
      prepTime: 5,
      difficulty: 'Easy',
      servings: 1,
      tags: ['Rum', 'Refreshing', 'Cocktail'],
      image: mojito,
      ingredients: [
        "2 oz white rum",
        "1 oz fresh lime juice",
        "0.75 oz simple syrup",
        "6-8 fresh mint leaves",
        "Soda water",
        "Ice cubes"
      ],
      instructions: [
        "Gently muddle mint leaves in a highball glass",
        "Add lime juice and simple syrup, muddle briefly",
        "Fill glass with ice cubes",
        "Pour in rum and stir well",
        "Top with soda water",
        "Garnish with mint sprig and lime wheel"
      ]
    },
    {
      id: 2,
      title: 'Espresso Martini',
      description: "A sophisticated cocktail combining fresh espresso with vodka and coffee liqueur.",
      prepTime: 5,
      difficulty: 'Medium',
      servings: 1,
      tags: ['Coffee', 'Vodka', 'Cocktail'],
      image: espressoMartini,
      ingredients: [
        "2 oz vodka",
        "1 oz fresh espresso",
        "0.5 oz coffee liqueur",
        "0.5 oz simple syrup",
        "Coffee beans for garnish"
      ],
      instructions: [
        "Brew espresso and let it cool",
        "Fill shaker with ice",
        "Add vodka, espresso, coffee liqueur, and simple syrup",
        "Shake vigorously for 20 seconds",
        "Double strain into chilled martini glass",
        "Garnish with three coffee beans"
      ]
    },
    {
      id: 3,
      title: 'Virgin Piña Colada',
      description: "A tropical mocktail made with coconut cream and pineapple juice.",
      prepTime: 10,
      difficulty: 'Easy',
      servings: 2,
      tags: ['Non-Alcoholic', 'Tropical', 'Smoothie'],
      image: pinaColada,
      ingredients: [
        "2 cups frozen pineapple chunks",
        "1 cup coconut cream",
        "1/2 cup pineapple juice",
        "1 tablespoon lime juice",
        "Pineapple wedges and cherries for garnish"
      ],
      instructions: [
        "Add frozen pineapple, coconut cream, and juices to blender",
        "Blend until smooth and creamy",
        "Add more pineapple juice if needed for desired consistency",
        "Pour into hurricane glasses",
        "Garnish with pineapple wedge and cherry"
      ]
    }
  ];
  
  export default drinksDetails;