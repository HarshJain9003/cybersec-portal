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
              onClick={() => {
                setSelectedGenre(genre);
                setOpenIndex(null); // Reset open FAQ when switching genre
              }}
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
      answer: 'On the login screen, tap "Get help logging in", follow the steps to recover your account. Always enable two-factor authentication for extra safety.',
    },
    {
      question: 'How to Protect My Social Media Accounts?',
      answer: 'Enable two-factor authentication, use strong unique passwords, avoid logging in from shared devices, and don’t share credentials.',
    },
  ],
  'Cyber Crime': [
    {
      question: 'What is Cybercrime?',
      answer: 'Cybercrime includes hacking, identity theft, cyberbullying, online scams, and more—anything illegal that happens over the internet.',
    },
    {
      question: 'How Do I Know if a Message or Email is a Scam?',
      answer: 'Watch for poor grammar, urgent demands, or unknown links. Don’t share personal details or click links unless you trust the source.',
    },
    {
      question: 'What Should I Do if I Receive Online Threats?',
      answer: 'Don’t respond. Take screenshots, block the sender, and report the issue on cybercrime.gov.in or your local cyber cell.',
    },
    {
      question: 'Is It Safe to Share My Personal Information Online?',
      answer: 'Only if the site is trusted. Avoid sharing Aadhaar, bank info, passwords, or phone numbers on unknown platforms.',
    },
    {
      question: 'Can Someone Steal My Identity Online?',
      answer: 'Yes. Always protect personal documents and use privacy settings on social platforms. Report any misuse immediately.',
    },
  ],
  'Online Fraud': [
    {
      question: 'What Is Online Fraud?',
      answer: 'It’s when someone tricks you into giving money or personal information through the internet. Common examples include fake shopping, job scams, or phishing emails.',
    },
    {
      question: 'How Can I Avoid Being Scammed Online?',
      answer: 'Shop on trusted websites, don’t share OTPs, and check URLs before clicking. If it sounds too good to be true, it probably is.',
    },
    {
      question: 'What Are Common Online Scams?',
      answer: 'Fake job offers, lottery scams, tech support calls, and phishing links pretending to be banks or services.',
    },
    {
      question: 'Can I Get My Money Back If I Was Tricked?',
      answer: 'Report the fraud immediately to your bank and cybercrime.gov.in. Fast action increases your chances of recovering funds.',
    },
    {
      question: 'What Is the Safest Way to Use the Internet?',
      answer: 'Use updated antivirus, strong passwords, avoid public Wi-Fi for banking, and never share sensitive info unless verified.',
    },
  ],
  'Online Safety': [
    {
      question: 'How to Identify Phishing Emails?',
      answer: 'Check for spelling errors, suspicious links, and emails urging immediate action. When in doubt, don’t click.',
    },
    {
      question: 'How Can I Teach My Children About Online Safety?',
      answer: 'Use child-safe browsers, monitor screen time, encourage open communication, and teach them to avoid strangers online.',
    },
    {
      question: 'Is Public Wi-Fi Safe to Use?',
      answer: 'Not always. Avoid logging into sensitive accounts on public Wi-Fi. Use a VPN for better security.',
    },
    {
      question: 'What Is the Best Way to Report a Cyber Incident in India?',
      answer: 'Go to https://cybercrime.gov.in and file a complaint. You can also visit your nearest cybercrime police station.',
    },
  ],
};

export default FaqPage;
