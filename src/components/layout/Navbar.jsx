import { Link } from 'react-router-dom';
import { Search, BookOpen } from 'lucide-react';
import { Container } from './Container';

const Navbar = () => {
  return (
    <nav className="border-b border-gray-100 bg-white">
      <Container>
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-xl font-serif text-gray-900">
            BooBaLoo's Kitchen
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
            <Link to="/recipes" className="text-gray-600 hover:text-gray-900">Recipes</Link>
            <Link to="/about" className="text-gray-600 hover:text-gray-900">About</Link>
          </div>
          <div className="flex items-center space-x-4">
            <Search className="w-5 h-5 text-gray-500" />
            <BookOpen className="w-5 h-5 text-gray-500" />
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;