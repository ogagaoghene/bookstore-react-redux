import { Link } from 'react-router-dom';

const Navbar = () => (
  <header className="Header">
    <h1 className="header-title">Bookstore CMS</h1>
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Books</Link>
        </li>
        <li>
          <Link to="/categories">Categories</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navbar;
