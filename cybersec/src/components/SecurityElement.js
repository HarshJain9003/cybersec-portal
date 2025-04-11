import React from 'react';
import './SecurityElement.css';
import securityIcon from '../Images/Security logo.png'; // Add your security icon image

const SecurityElement = () => {
  return (
    <div className="security-element">
      <img src={securityIcon} alt="Secure" className="security-icon" />
      <p className="security-message">Your safety is our priority</p>
    </div>
  );
};

export default SecurityElement;
