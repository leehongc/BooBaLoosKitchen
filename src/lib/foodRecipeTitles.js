import spaghettiCarbonara from '../assets/images/spaghetti-carbonara.jpg'
import grilledChickenSalad from '../assets/images/grilled-chicken-salad.png'
import garlicNoodles from '../assets/images/garlic-noodles.jpg'
import wontons from '../assets/images/wontons.jpg'

const foodRecipeTitles = [
    {
      id: 1,
      title: 'Spaghetti Carbonara',
      prepTime: 15,
      cookTime: 20,
      difficulty: 'Medium',
      tags: ['Pasta', 'Italian', 'Dinner'],
      image: spaghettiCarbonara
    },
    {
      id: 2,
      title: 'Grilled Chicken Salad',
      prepTime: 10,
      cookTime: 15,
      difficulty: 'Easy',
      tags: ['Salad', 'Healthy', 'Lunch'],
      image: grilledChickenSalad
    },
    {
      id: 3,
      title: 'San Francisco-Style Vietnamese American Garlic Noodles',
      prepTime: 5,
      cookTime: 10,
      difficulty: 'Medium',
      tags: ['Asian Fusion', 'Pasta', 'Quick'],
      image: garlicNoodles
    },
    {
      id: 4,
      title: 'Turkey Wontons',
      prepTime: 45,
      cookTime: 20,
      difficulty: 'Medium',
      tags: ['Wontons', 'Turkey'],
      image: wontons
    }
  ];

export default foodRecipeTitles;