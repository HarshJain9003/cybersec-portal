import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DashboardPage from './pages/DashboardPage';
import MessagesPage from './pages/MessagesPage';
import InboxPage from './pages/InboxPage';
import SecurityPage from './pages/SecurityPage';
import ProfilesPage from './pages/ProfilesPage';
import ComplaintLogbook from './pages/ComplaintLogbook';  // Import ComplaintLogbook component
import ComplaintDetails from './pages/ComplaintDetails';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="main-content">
          <Header />
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/messages" element={<MessagesPage />} />
            <Route path="/inbox" element={<InboxPage />} />
            <Route path="/security" element={<SecurityPage />} />
            <Route path="/profiles" element={<ProfilesPage />} />
            <Route path="/complaints" element={<ComplaintLogbook />} />  {/* Route for ComplaintLogbook */}
            <Route path="/complaints/:id" element={<ComplaintDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
