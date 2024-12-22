import { Container } from '../components/layout/Container';
import { RecipeGrid } from '../components/recipes/RecipeGrid';
import dessertTitles from '../lib/dessertTitles';

const Desserts = () => {
  return (
    <Container>
      <h1 className="font-serif text-4xl md:text-5xl mb-6">Dessert Recipes</h1>
      <p className="text-gray-600">Discover delightful dessert recipes to satisfy your sweet tooth!</p>
      
      <div className="py-8">         
          <RecipeGrid recipes={dessertTitles} type="desserts" />
      </div>
    </Container>
  );
};

export default Desserts;
