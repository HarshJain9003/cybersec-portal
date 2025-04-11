import React from 'react';
import './About.css'; // Import your CSS file for styling

function About() {
  return (
    <div className="about-container">
      <h2>About Us</h2>
      <p>We are dedicated to providing top-notch cybersecurity solutions to protect you and your business from cyber threats.</p>
      <div className="about-details">
        <div className="about-section">
          <h3>Our Mission</h3>
          <p>To offer comprehensive and innovative cybersecurity solutions tailored to the needs of our clients.</p>
        </div>
        <div className="about-section">
          <h3>Our Vision</h3>
          <p>To be a global leader in cybersecurity by delivering exceptional services and solutions.</p>
        </div>
        <div className="about-section">
          <h3>Our Values</h3>
          <p>Integrity, Excellence, and Customer Satisfaction are at the core of everything we do.</p>
        </div>
        <div className="about-section">
          <h3>Our History</h3>
          <p>Founded in 2010, we have a decade of experience in providing cybersecurity services to a diverse range of clients.</p>
        </div>
        <div className="about-section">
          <h3>Our Team</h3>
          <p>Our team consists of highly skilled professionals with expertise in various domains of cybersecurity.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
