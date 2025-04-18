import React, { Suspense, lazy } from 'react';
import './Herosection.css';
import frontendVideo from '../assets/frontend_video.mp4';

const CyberAwareness = lazy(() => import('./CyberAwareness'));
const Videos = lazy(() => import('./Videos'));
const SocialPosts = lazy(() => import('./SocialPosts'));

const HeroSection = () => {
  return (
    <div>
      <div className="hero-container">
        {/* Video Background */}
        <video className="home-video" autoPlay loop muted preload='auto'>
          <source src={frontendVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Hero Text */}
        <div className="hero-text">
          <h1>Welcome to the Portal</h1>
          <p>We are here to help you!</p>
        </div>
      </div>

      <div className="sections-container">
        <Suspense fallback={<div>Loading...</div>}>
          <CyberAwareness />
          <Videos />
          <SocialPosts />
        </Suspense>
      </div>
    </div>
  );
};

export default HeroSection;