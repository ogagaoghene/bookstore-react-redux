import { Link } from 'react-router-dom';
import { ImUser } from 'react-icons/im';
import './Navbar.css';

const Navbar = () => (
  <header className="Header">
    <h1 className="header-title"><span>Bookstore CMS</span></h1>
    <nav className="navbar">
      <ul className="nav-ul">
        <li className="links">
          <Link to="/">BOOKS</Link>
        </li>
        <li className="links">
          <Link to="/categories">CATEGORIES</Link>
        </li>
      </ul>
      <ImUser className="user-icon" />
    </nav>
  </header>
);

export default Navbar;
