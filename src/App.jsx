import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import RecipeDetail from './pages/RecipeDetail';
import Drinks from './pages/Drinks';
import DrinkDetail from './pages/DrinkDetail';
import Desserts from './pages/Desserts';
import DessertDetail from './pages/DessertDetail';

function App() {
  return (
    <BrowserRouter basename="/BooBaLoos_Kitchen">
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/recipes/:id" element={<RecipeDetail />} />
            <Route path="/drinks" element={<Drinks />} />
            <Route path="/drinks/:id" element={<DrinkDetail />} />
            <Route path="/desserts" element={<Desserts />} />
            <Route path="/desserts/:id" element={<DessertDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;