// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer({ onPolicyClick }) {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-info">
          <p>
            &copy; Shah & Anchor Kutchhi Engineering College Mahavir Education Trust Chowk, W. T. Patil Marg, Near Dukes Company, Chembur, Mumbai- 400 088.
            <br />
          </p>
          <p>© 2024 Copyright: Shah & Anchor Kutchhi Engineering College.</p>
        </div>
        <div className="footer-links">
          <Link to="/about" className="footer-link">About</Link>
          {/* This button should call onPolicyClick */}
          <span className="footer-link" onClick={onPolicyClick}>Incident Response Policy</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
