import { Container } from '../components/layout/Container';
import { Card } from '../components/ui/Card';
import { Link } from 'react-router-dom';

const Home = () => {
  const categories = [
    {
      title: 'Food Recipes',
      description: 'Explore our delicious main dishes and sides',
      link: '/recipes',
    },
    {
      title: 'Drink Recipes',
      description: 'Refreshing beverages for any occasion',
      link: '/drinks',
    },
    {
      title: 'Dessert Recipes',
      description: 'Sweet treats and delightful desserts',
      link: '/desserts',
    },
  ];

  return (
    <main className="py-12">
      <Container>
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="font-serif text-4xl md:text-5xl mb-4">
            Welcome to BooBaLoo's Kitchen
          </h1>
          <p className="text-gray-600 text-lg">
            Discover our collection of favorite recipes, from comfort food classics to exciting new dishes.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Card key={category.title} className="p-6">
              <h3 className="font-serif text-xl mb-2">{category.title}</h3>
              <p className="text-gray-600 mb-4">{category.description}</p>
              <Link
                to={category.link}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Browse recipes →
              </Link>
            </Card>
          ))}
        </div>
      </Container>
    </main>
  );
};

export default Home;