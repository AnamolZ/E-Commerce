import React, { useEffect } from 'react';
import './Trending.css';
import images from '../images.json';

function Trending() {
  useEffect(() => {
    const carousel = document.querySelector('.carousel');
    new window.bootstrap.Carousel(carousel);
  }, []);

  return (
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
            <img src={image} className="d-block w-100" alt="..." />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Trending;
