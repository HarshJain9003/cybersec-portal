// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/Herosection';
import InfoSection from './components/InfoSection';
import Footer from './components/Footer_temp'; // Assuming Footer_temp is the Footer component
import About from './components/About';
import ContactForm from './components/ContactForm';
import FAQPage from './components/FaqPage';
import FloatingFAQButton from './components/FloatingFAQButton';
import RegisterComplaint from './components/RegisterComplaint';
import ScrollUpButton from './components/ScrollUpButton';
import IncidentResponsePolicyModal from './components/IncidentResponsePolicyModal'; // Import the modal component
import TrackComplaint  from './components/TrackComplaint';
import './App.css';

function App() {
  const [isPolicyModalOpen, setIsPolicyModalOpen] = useState(false);

  const handlePolicyClick = () => {
    setIsPolicyModalOpen(true);
  };

  const closePolicyModal = () => {
    setIsPolicyModalOpen(false);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/info" element={<InfoSection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/faqs" element={<FAQPage />} />
        <Route path='/trackComplaint' element={<TrackComplaint />} />
        <Route path="/register-complaint" element={<RegisterComplaint />} />
        <Route path="/Women-Related-Crime" element={<Navigate to="https://cybercrime.gov.in/Webform/Accept.aspx" replace />} />
      </Routes>
      <Footer onPolicyClick={handlePolicyClick} />
      <FloatingFAQButton />
      <ScrollUpButton />
      <IncidentResponsePolicyModal isOpen={isPolicyModalOpen} onClose={closePolicyModal} />
    </Router>
  );
}

export default App;
