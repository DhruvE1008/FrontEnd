import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Dropdown.css';

const Dropdown: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
      };

      return (
        <div className="dropdown">
          <button onClick={toggleDropdown} className="dropbutton">
            Options ▼
          </button>
          {isOpen && (
            <div className="dropdown-content">
              <Link to="/iceCream">Ice Cream Options</Link>
              <Link to="/popsicle">Popsicle Options</Link>
              <Link to="/sandwich">Ice Cream Sandwich Options</Link>
            </div>
          )}
        </div>
      );  
}
export default Dropdown;
