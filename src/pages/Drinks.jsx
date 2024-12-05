import { Container } from '../components/layout/Container';

const Drinks = () => {
  return (
    <Container>
      <h1 className="font-serif text-4xl md:text-5xl mb-6">Drink Recipes</h1>
      <p className="text-gray-600">Here you'll find our collection of refreshing drink recipes!</p>
      {/* Add a grid or list of drink recipes here */}
    </Container>
  );
};

export default Drinks;
