// src/pages/DessertDetail.jsx
import { Clock, Users, ChefHat, Cake } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container } from '../components/layout/Container';
import dessertDetails from '../lib/dessertDetails';

const DessertDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dessert = dessertDetails.find(d => d.id === parseInt(id));

  if (!dessert) {
    return (
      <Container>
        <div className="py-16 text-center">
          <h1 className="font-serif text-2xl text-gray-900">Dessert recipe not found</h1>
          <button 
            onClick={() => navigate('/desserts')}
            className="mt-4 text-gray-600 hover:text-gray-900"
          >
            Back to desserts
          </button>
        </div>
      </Container>
    );
  }

  const totalTime = dessert.prepTime + dessert.cookTime;

  return (
    <div className="min-h-screen bg-white">
      <Container>
        <main className="max-w-4xl mx-auto py-12">
          {/* Back Button */}
          <button 
            onClick={() => navigate('/desserts')}
            className="mb-8 text-gray-500 hover:text-gray-900 flex items-center"
          >
            ← Back to desserts
          </button>

          <header className="mb-12 text-center">
            <h1 className="text-4xl font-serif mb-4">{dessert.title}</h1>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {dessert.description}
            </p>
          </header>

          {/* Recipe Meta */}
          <div className="flex justify-center space-x-12 mb-12 text-sm text-gray-500">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              <span>Prep: {dessert.prepTime} min</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              <span>Cook: {dessert.cookTime} min</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              <span>Total: {totalTime} min</span>
            </div>
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-2" />
              <span>Serves: {dessert.servings}</span>
            </div>
            <div className="flex items-center">
              <ChefHat className="w-4 h-4 mr-2" />
              <span>{dessert.difficulty}</span>
            </div>
          </div>

          {/* Recipe Image */}
          <div className="aspect-video mb-12 bg-gray-100 rounded-lg overflow-hidden">
            <img
              src={dessert.image}
              alt={dessert.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-12">
            {dessert.tags.map(tag => (
              <span 
                key={tag}
                className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Recipe Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-1">
              <h3 className="text-lg font-serif mb-4">Ingredients</h3>
              <ul className="space-y-3 text-gray-600">
                {dessert.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-start">
                    {ingredient.startsWith('For') ? (
                      <span className="font-medium text-gray-800 mt-4">{ingredient}</span>
                    ) : (
                      <>
                        <Cake className="w-4 h-4 mr-2 flex-shrink-0 mt-1 text-gray-400" />
                        {ingredient}
                      </>
                    )}
                  </li>
                ))}
              </ul>

              {dessert.source && (
                <p className="text-sm text-gray-500 mt-2">
                  Source: {dessert.sourceUrl ? (
                    <a 
                      href={dessert.sourceUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="underline hover:text-gray-700"
                    >
                      {dessert.source}
                    </a>
                  ) : dessert.source}
                </p>
              )}
            </div>
            
            <div className="md:col-span-2">
              <h3 className="text-lg font-serif mb-4">Instructions</h3>
              <ol className="space-y-6">
                {dessert.instructions.map((instruction, index) => (
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

export default DessertDetail;