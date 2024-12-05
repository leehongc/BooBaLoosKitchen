import { Container } from '../components/layout/Container';

const About = () => {
  return (
    <Container>
      <header className="py-16 text-center max-w-2xl mx-auto">
      <h1 className="font-serif text-4xl md:text-5xl mb-6">About BooBaLoo's Kitchen</h1>
        <p className="text-gray-600 text-lg">
          Welcome to BooBaLoo's Kitchen! This site is a personal collection of recipes that we love and enjoy making.
          It reflects our passion for cooking and sharing the joy of food. Thank you for visiting, and happy cooking!
        </p>
      </header>
    </Container>
  );
};

export default About;