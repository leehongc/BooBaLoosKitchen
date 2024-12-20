import { Container } from '../components/layout/Container';
import { RecipeGrid } from '../components/recipes/RecipeGrid';
import drinksTitles from '../lib/drinksTitles';

const Drinks = () => {
  return (
    <div className="min-h-screen bg-white">
      <Container>
        <header className="py-16 text-center max-w-2xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl mb-6">Craft Beverages</h1>
          <p className="text-gray-600 leading-relaxed mb-8">
            From classic cocktails to refreshing mocktails, discover our collection of handcrafted drinks perfect for any occasion.
          </p>
        </header>

        <div className="py-8">         
          <RecipeGrid recipes={drinksTitles} type="drinks" />
        </div>
      </Container>
    </div>
  );
};

export default Drinks;