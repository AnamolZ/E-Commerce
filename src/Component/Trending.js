import React, { useState, useEffect } from 'react';
import './Trending.css';
import images from '../images.json';

function Trending() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div key={index} className={`carousel-item ${index === activeIndex ? 'active' : ''}`}>
            <img src={image} className="d-block w-100" alt="..." />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Trending;
