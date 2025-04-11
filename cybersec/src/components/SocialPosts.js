import React from 'react';
import './SocialPosts.css'; // Import the CSS file

const socialPosts = [
  {
    platform: "Twitter",
    content: "Stay updated with the latest in cybersecurity. #cybersecurity"
  },
  {
    platform: "LinkedIn",
    content: "Join our webinar on cybersecurity strategies next week!"
  }
];

const SocialPosts = () => {
  return (
    <div className="section">
      <h2>Social Media Posts</h2>
      {socialPosts.map((post, index) => (
        <div className="social-post" key={index}>
          <h3>{post.platform}</h3>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default SocialPosts;