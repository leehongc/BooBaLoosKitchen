import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import About from './pages/About';
import Drinks from './pages/Drinks'; // Import Drinks page
import Desserts from './pages/Desserts'; // Import Desserts page
import RecipeDetail from './pages/RecipeDetail';

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/about" element={<About />} />
            <Route path="/drinks" element={<Drinks />} /> {/* Add Drinks route */}
            <Route path="/desserts" element={<Desserts />} /> {/* Add Desserts route */}
            <Route path="/recipes/:id" element={<RecipeDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;