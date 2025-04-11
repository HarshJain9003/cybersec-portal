import React, { useState, useEffect } from 'react';
import './ScrollUpButton.css'; // Import the CSS file for styling

const ScrollUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Cleanup function to remove event listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className={`scroll-up-button ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
    >
      &#8679; {/* Up Arrow Character */}
    </button>
  );
};

export default ScrollUpButton;
