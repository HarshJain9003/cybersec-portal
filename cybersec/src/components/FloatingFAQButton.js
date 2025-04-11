import React from 'react';
import { Link } from 'react-router-dom';
import './FloatingFAQButton.css';

const FloatingFAQButton = () => {
  return (
    <Link to="/faqs" className="floating-faq-button">
      FAQ
    </Link>
  );
};

export default FloatingFAQButton;
