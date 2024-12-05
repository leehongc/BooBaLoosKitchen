import { Container } from '../components/layout/Container';
import { RecipeGrid } from '../components/recipes/RecipeGrid';

const Recipes = () => {
  const foodRecipes = [
    {
      id: 1,
      title: 'Spaghetti Carbonara',
      prepTime: 15,
      cookTime: 20,
      difficulty: 'Medium',
      tags: ['Pasta', 'Italian', 'Dinner'],
      image: 'https://placehold.co/800x450'
    },
    {
      id: 2,
      title: 'Grilled Chicken Salad',
      prepTime: 10,
      cookTime: 15,
      difficulty: 'Easy',
      tags: ['Salad', 'Healthy', 'Lunch'],
      image: 'https://placehold.co/800x450'
    },
    {
      id: 3,
      title: 'Vegetable Stir-Fry',
      prepTime: 10,
      cookTime: 15,
      difficulty: 'Easy',
      tags: ['Vegetarian', 'Quick', 'Dinner'],
      image: 'https://placehold.co/800x450'
    },
  ];

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