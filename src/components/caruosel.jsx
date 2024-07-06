import React, { useState, useEffect } from 'react';
    

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      
      image: 'https://themewagon.github.io/alien/images/banner-img.png',
      text: 'Become Architect of your future business',
    },
    {
      
      image: 'https://themewagon.github.io/alien/images/banner-img.png',
      text: 'Become Architect of your future business',
    },
    {
     
      image: 'https://themewagon.github.io/alien/images/banner-img.png',
      text: 'Become Architect of your future business',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    }, 3000); 
    return () => clearInterval(interval);
  }, [3000]);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="container" id="container">
      <div className="slideshow">
        {slides.map((slide, index) => (
          <div
            className={`slide ${index === activeIndex ? 'active' : ''}`}
           
          >
            <div className="image">
              <img src={slide.image} alt={`Slide ${index + 1}`} />
            </div>
            <div className="manage">
              <div className="text">
                <h2>{slide.text}</h2>
              </div>
              <div className="form">
                <input type="text" className="box" placeholder='Search Text Here'/>
              </div>
              <div className="button">
                <button className="btn">Search</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ textAlign: 'center' }}>
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === activeIndex ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

