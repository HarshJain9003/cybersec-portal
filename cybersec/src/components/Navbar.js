// Navbar.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleHomeClick = (e) => {
    e.preventDefault();
    setIsOpen(false);
    navigate('/', { replace: true });
  };

  const handleScrollToSection = (e, sectionId) => {
    e.preventDefault();
    navigate('/');

    setTimeout(() => {
      if (sectionId) {
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
          sectionElement.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 300);

    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo-container" onClick={handleHomeClick}>
          <img
            src={require("../Images/logo.png")}
            alt="Logo"
            className="logo"
          />
        </div>

        <div className={`menu-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="menu-icon"></div>
          <div className="menu-icon"></div>
          <div className="menu-icon"></div>
        </div>
      </div>

      <ul className={`nav-menu ${isOpen ? 'nav-menu-open' : ''}`}>
        <li className="nav-item">
          <Link to="/" className="nav-links" onClick={handleHomeClick}>
            <FontAwesomeIcon icon={faHome} />
            <span></span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/register-complaint" className="nav-links">
            Register Complaint
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/"
            className="nav-links"
            onClick={(e) => handleScrollToSection(e, 'cyber-awareness')}
          >
            Cyber Awareness
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-links">Contact</Link>
        </li>
        <li className="nav-item">
          <Link to="/trackComplaint" className="nav-links">Track Complaint</Link> {/* New link for tracking */}
        </li>
        <li className="nav-item">
          <a href="https://cybercrime.gov.in/Webform/suspect_search_repository.aspx" className="nav-links" target="_blank" rel="noopener noreferrer">
            Suspect Search
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
