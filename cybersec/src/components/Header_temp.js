// src/components/Header.js

import React from 'react';
import './Header.css'; // Create a CSS file for header-specific styles

const Header = () => (
  <header>
    <div className="header-content">
      <img src="images/logo.jpg" alt="Logo" className="logo" />
      <nav>
        <ul id="nav-list">
          <li><a href="#register-complaint">Register a Complaint</a></li>
          <li><a href="#learning-corner">Learning Corner</a></li>
          <li><a href="#contact-us">Contact Us</a></li>
          <li><a href="#faqs">FAQs</a></li>
        </ul>
        <div className="menu-icon" id="menu-icon">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>
    </div>
  </header>
);

export default Header;
