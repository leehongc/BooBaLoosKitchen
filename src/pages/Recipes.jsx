import { Container } from '../components/layout/Container';
import { RecipeGrid } from '../components/recipes/RecipeGrid';
import foodRecipes from '../lib/foodRecipes.js';

const Recipes = () => {
  
  return (
    <div className="min-h-screen bg-white">
      <Container>
        <header className="py-16 text-center max-w-2xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl mb-6">Our Recipes</h1>
          <p className="text-gray-600 leading-relaxed mb-8">
            Explore our curated collection of delicious food recipes. Whether you're cooking for a crowd or just for yourself, we've got something for everyone.
          </p>
        </header>

        <div className="py-8">         
          <RecipeGrid recipes={foodRecipes} />
        </div>
      </Container>
    </div>
  );
};

export default Recipes;