import { Link } from 'react-router-dom';
import { Container } from './Container';

const Navbar = () => {
  return (
    <nav className="border-b border-gray-100 bg-white">
      <Container>
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-xl font-serif text-gray-900">
          <h1 className="text-3xl">BooBaLoo's Kitchen</h1>
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
            <Link to="/recipes" className="text-gray-600 hover:text-gray-900">Recipes</Link>
            <Link to="/about" className="text-gray-600 hover:text-gray-900">About</Link>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;