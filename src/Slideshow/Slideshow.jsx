import React, { useState, useEffect } from 'react';
import './Slideshow.css'; 
import slideTwo from './slideTwo.jpg';
import slideThree from './slideThree.jpg';
import slideFour from './slideFour.jpg';


const images = [
    slideTwo,
    slideThree,
    slideFour
];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000); 

    return () => clearInterval(intervalId); 
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

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

      {/* Navigationspfeile */}
      <button className="prev" onClick={prevSlide}>&#10094;</button>
      <button className="next" onClick={nextSlide}>&#10095;</button>

      {/* Indikatoren */}
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
