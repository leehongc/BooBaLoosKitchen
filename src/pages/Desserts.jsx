import { Container } from '../components/layout/Container';

const Desserts = () => {
  return (
    <Container>
      <h1 className="font-serif text-4xl md:text-5xl mb-6">Dessert Recipes</h1>
      <p className="text-gray-600">Discover delightful dessert recipes to satisfy your sweet tooth!</p>
      {/* Add a grid or list of dessert recipes here */}
    </Container>
  );
};

export default Desserts;
