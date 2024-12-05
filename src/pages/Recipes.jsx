import { Container } from '../components/layout/Container';
import { RecipeGrid } from '../components/recipes/RecipeGrid';
import { Search } from 'lucide-react';

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
          
          <div className="relative max-w-md mx-auto">
            <input
              type="search"
              placeholder="Search recipes..."
              className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
        </header>

        <div className="py-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="font-serif text-2xl">All Recipes</h2>
            <select className="px-4 py-2 border border-gray-200 rounded-lg bg-white">
              <option>Most Recent</option>
              <option>Most Popular</option>
              <option>Quick & Easy</option>
            </select>
          </div>
          
          <RecipeGrid recipes={foodRecipes} />
        </div>
      </Container>
    </div>
  );
};

export default Recipes;