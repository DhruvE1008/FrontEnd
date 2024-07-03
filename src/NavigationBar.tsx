import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';
import './NavigationBar.css';

const NavBar: React.FC = () => {
  return (
    <nav className = "navbar">
      <ul className = "nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Dropdown />
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;