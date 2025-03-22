import React, { useState, useEffect } from 'react';
import './Slideshow.css'; 
import slideTwo from './slideTwo.jpg';
import slideThree from './slideThree.jpg';
import slideFour from './slideFour.jpg';

const images = [slideTwo, slideThree, slideFour];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); 
    }, 3000);

    
    return () => clearInterval(intervalId);
  }, []); 

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slideshow">
      <div className="slide" style={{ backgroundImage: `url(${images[currentIndex]})` }}>
        
      </div>

      <div>
        <h1>Hezlich Willkomen im Schönheits-und Gesundheitsstudio!</h1>
      </div>

      <div className="indicators">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;

