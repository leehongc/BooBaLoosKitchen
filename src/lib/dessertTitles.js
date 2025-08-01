import oatmealCookies from '../assets/images/oatmeal-cookies.png'
import blueberryScones from '../assets/images/blueberry-scones.png'
import yogurt from '../assets/images/yogurt.png'

const dessertTitles = [
    {
      id: 1,
      title: "Leslie's Oatmeal Cookies",
      prepTime: 15,
      cookTime: 13,
      difficulty: 'Easy',
      tags: ['Cookies', 'Baking', 'Oatmeal'],
      image: oatmealCookies
    },
    {
      id: 2,
      title: 'Blueberry-Lemon Scones',
      prepTime: 20,
      cookTime: 25,
      difficulty: 'Medium',
      tags: ['Breakfast', 'Scones', 'Brunch', 'Blueberry'],
      image: blueberryScones
    },
    {
      id: 3,
      title: 'Sous Vide Yogurt',
      prepTime: 30,
      cookTime: 690,
      difficulty: 'Easy',
      tags: ['Breakfast', 'Dairy', 'Sous Vide', 'Fermented'],
      image: yogurt
    }
   ];
   
   export default dessertTitles;