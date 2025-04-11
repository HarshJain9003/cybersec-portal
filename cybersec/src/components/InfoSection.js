// src/components/InfoSection.js
import React from 'react';
import './InfoSection.css';

const InfoSection = () => {
  return (
    <div id="info" className="info-container">
      <h2>Our Services</h2>
      <p>Providing top-notch security services to keep you safe online.</p>
      <div className="info-cards">
        <div className="info-card">
          <h3>Service 1</h3>
          <p>Details about service 1.</p>
        </div>
        <div className="info-card">
          <h3>Service 2</h3>
          <p>Details about service 2.</p>
        </div>
        <div className="info-card">
          <h3>Service 3</h3>
          <p>Details about service 3.</p>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
