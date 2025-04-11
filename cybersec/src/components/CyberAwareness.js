// src/components/CyberAwareness.js
import React from 'react';

const articles = [
  {
    title: "Understanding Cybersecurity",
    content: "Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks."
  },
  {
    title: "Tips for Staying Safe Online",
    content: "Always use strong passwords and be cautious of phishing scams."
  }
];

const CyberAwareness = () => {
  return (
    <div className="section" id="cyber-awareness">
      <h2>Cyber Awareness</h2>
      {articles.map((article, index) => (
        <div className="article" key={index}>
          <h3>{article.title}</h3>
          <p>{article.content}</p>
        </div>
      ))}
    </div>
  );
};

export default CyberAwareness;
