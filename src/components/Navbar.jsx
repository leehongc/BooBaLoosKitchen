import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>BooBaLoo's Kitchen</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/recipes">Recipes</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar