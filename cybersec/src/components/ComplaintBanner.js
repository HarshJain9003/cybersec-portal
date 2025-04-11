// src/components/ComplaintBanner.js

import React from 'react';
import './ComplaintBanner.css';

const ComplaintBanner = ({ imgSrc, altText, link, buttonText }) => (
  <div className="complaint-banner">
    <img src={imgSrc} alt={altText} />
    <a href={link}>
      <button>{buttonText}</button>
    </a>
  </div>
);

export default ComplaintBanner;
