import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Videos.css'; // Import a separate CSS file for styles

const videos = [
  {
    title: "Cyber Security 101 - Introduction to Cyber Security",
    url: "https://www.youtube.com/embed/inWWhr5tnEA"
  },
  {
    title: "Top 5 Tips to Stay Safe Online",
    url: "https://www.youtube.com/embed/UW5d58P4aM0"
  }
];

const Videos = () => {
  return (
    <div className="section">
      <h2>Videos</h2>
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        stopOnHover={true}
        dynamicHeight={true}
        useKeyboardArrows={true}
      >
        {videos.map((video, index) => (
          <div className="video" key={index}>
            <h3>{video.title}</h3>
            <div className="video-container">
              <iframe
                src={video.url}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Videos;