// src/pages/DrinkDetail.jsx
import { Clock, Users, ChefHat, GlassWater } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container } from '../components/layout/Container';
import drinksDetails from '../lib/drinksDetails';

const DrinkDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const drink = drinksDetails.find(d => d.id === parseInt(id));

  if (!drink) {
    return (
      <Container>
        <div className="py-16 text-center">
          <h1 className="font-serif text-2xl text-gray-900">Drink recipe not found</h1>
          <button 
            onClick={() => navigate('/drinks')}
            className="mt-4 text-gray-600 hover:text-gray-900"
          >
            Back to drinks
          </button>
        </div>
      </Container>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Container>
        <main className="max-w-4xl mx-auto py-12">
          {/* Back Button */}
          <button 
            onClick={() => navigate('/drinks')}
            className="mb-8 text-gray-500 hover:text-gray-900 flex items-center"
          >
            ← Back to drinks
          </button>

          <header className="mb-12 text-center">
            <h1 className="text-4xl font-serif mb-4">{drink.title}</h1>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {drink.description}
            </p>
          </header>

          {/* Drink Meta */}
          <div className="flex justify-center space-x-12 mb-12 text-sm text-gray-500">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              <span>Prep: {drink.prepTime} min</span>
            </div>
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-2" />
              <span>Serves: {drink.servings}</span>
            </div>
            <div className="flex items-center">
              <ChefHat className="w-4 h-4 mr-2" />
              <span>{drink.difficulty}</span>
            </div>
          </div>

          {/* Drink Image */}
          <div className="aspect-video mb-12 bg-gray-100 rounded-lg overflow-hidden">
            <img
              src={drink.image}
              alt={drink.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-12">
            {drink.tags.map(tag => (
              <span 
                key={tag}
                className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Drink Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-1">
              <h3 className="text-lg font-serif mb-4">Ingredients</h3>
              <ul className="space-y-3 text-gray-600">
                {drink.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-start">
                    <GlassWater className="w-4 h-4 mr-2 flex-shrink-0 mt-1 text-gray-400" />
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="md:col-span-2">
              <h3 className="text-lg font-serif mb-4">Instructions</h3>
              <ol className="space-y-6">
                {drink.instructions.map((instruction, index) => (
                  <li key={index} className="flex">
                    <span className="font-serif text-gray-300 mr-4">{index + 1}</span>
                    <p className="text-gray-600 leading-relaxed">{instruction}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </main>
      </Container>
    </div>
  );
};

export default DrinkDetail;