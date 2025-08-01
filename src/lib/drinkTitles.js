import mojito from '../assets/images/mojito.png'
import pinaColada from '../assets/images/pina-colada.jpg'
import espressoMartini from '../assets/images/espresso-martini.png'

const drinksTitles = [
    {
      id: 1,
      title: 'Classic Mojito',
      prepTime: 5,
      difficulty: 'Easy',
      tags: ['Rum', 'Refreshing', 'Cocktail'],
      image: mojito
    },
    {
      id: 2,
      title: 'Espresso Martini',
      prepTime: 5,
      difficulty: 'Medium',
      tags: ['Coffee', 'Vodka', 'Cocktail'],
      image: espressoMartini
    },
    {
      id: 3,
      title: 'Virgin Piña Colada',
      prepTime: 10,
      difficulty: 'Easy',
      tags: ['Non-Alcoholic', 'Tropical', 'Smoothie'],
      image: pinaColada
    }
  ];
  
  export default drinksTitles;