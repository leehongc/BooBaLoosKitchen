import spaghettiCarbonara from '../assets/images/spaghetti-carbonara.jpg'
import grilledChickenSalad from '../assets/images/grilled-chicken-salad.png'
import garlicNoodles from '../assets/images/garlic-noodles.jpg'

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
      difficulty: 'Easy',
      tags: ['Asian Fusion', 'Pasta', 'Quick'],
      image: garlicNoodles
    }
  ];

export default foodRecipeTitles;