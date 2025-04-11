// FaqPage.js
import React, { useState, useEffect } from 'react';
import './FaqPage.css';

const FaqPage = () => {
  const [selectedGenre, setSelectedGenre] = useState('Social Media');
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }, []);

  const genres = Object.keys(faqData);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-page">
      <div className="faq-sidebar">
        <ul>
          {genres.map((genre, index) => (
            <li
              key={index}
              className={selectedGenre === genre ? 'active' : ''}
              onClick={() => setSelectedGenre(genre)}
            >
              {genre}
            </li>
          ))}
        </ul>
      </div>
      <div className="faq-content">
        <h1>{selectedGenre} FAQs</h1>
        {faqData[selectedGenre].map((item, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? 'open' : ''}`}
            onClick={() => toggleFAQ(index)}
          >
            <h2 className="faq-question">{item.question}</h2>
            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const faqData = {
  'Social Media': [
    {
      question: 'Instagram Account Got Hacked!',
      answer: 'On the login screen, tap Get help logging in. ...',
    },
    {
      question: 'How to Protect My Social Media Accounts?',
      answer: 'Enable two-factor authentication (2FA) on your accounts. ...',
    },
  ],
  'Cyber Crime': [
    {
      question: 'How to Report Cyberbullying?',
      answer: 'Collect evidence of the bullying (screenshots, messages, etc.). ...',
    },
    {
      question: 'What Should I Do if My Email is Hacked?',
      answer: 'Change your email password immediately. ...',
    },
  ],
  'Online Safety': [
    {
      question: 'How to Identify Phishing Emails?',
      answer: 'Look for spelling and grammar mistakes. ...',
    },
  ],
};

export default FaqPage;
