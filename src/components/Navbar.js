
import { Link } from 'react-router-dom';
import logo from '../assets/logo-company.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import "../styles/Navbar.css";

function Navbar() {


  return (
    <header className="header">
      <div className="left-menu">
        <div className="company-logo">
          <img src={logo} alt="smart-shopping" className="logo" />
        </div>
        <nav className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/Productitems" className="nav-link">Products</Link>
          <Link to="/Shopbycat" className="nav-link">Category</Link>
        </nav>
        <input className="searching" type="text" placeholder="Search for Products, Brands and More" />
      </div>
      <div className="right-menu">
      
          <>
            <Link to="/Signup" className="nav-link">Create Account</Link>
            <Link to="/login" className="nav-link">Login</Link>
          </>
        
        <FontAwesomeIcon icon={faShoppingBag} className="shopping-icon" />
        <span>2</span>
      </div>
    </header>
  );
}

export default Navbar;


