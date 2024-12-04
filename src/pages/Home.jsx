// src/pages/Home.jsx
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="mainContent">
      <div className="home-hero">
        <h1>Welcome to BooBaLoo's Kitchen</h1>
        <p className="hero-text">
          Discover our collection of favorite recipes, from comfort food classics to exciting new dishes.
        </p>
      </div>

      <div className="featured-categories">
        <h2>Recipe Categories</h2>
        <div className="category-grid">
          <div className="category-card">
            <h3>Food Recipes</h3>
            <p>Explore our delicious main dishes and sides</p>
            <Link to="/recipes" className="category-link">Browse Food Recipes →</Link>
          </div>

          <div className="category-card">
            <h3>Drink Recipes</h3>
            <p>Refreshing beverages for any occasion</p>
            <Link to="/recipes" className="category-link">Browse Drink Recipes →</Link>
          </div>

          <div className="category-card">
            <h3>Dessert Recipes</h3>
            <p>Sweet treats and delightful desserts</p>
            <Link to="/recipes" className="category-link">Browse Desserts →</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home