import React, { useState } from 'react';
import '../Pages/Home/home.css'; // Import the custom CSS

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      img: 'https://images.pexels.com/photos/27945151/pexels-photo-27945151/free-photo-of-volkswagen-beetle.jpeg?auto=compress&cs=tinysrgb&w=600',
      label: 'First slide label',
      description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    },
    {
      img: 'https://via.placeholder.com/800x400?text=Second+slide',
      label: 'Second slide label',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      img: 'https://via.placeholder.com/800x400?text=Third+slide',
      label: 'Third slide label',
      description: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
    },
  ];

  const handleNext = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="carousel">
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div
            className={`carousel-item ${index === currentSlide ? 'active' : ''}`}
            key={index}
          >
            <img src={slide.img} alt={slide.label} className="carousel-img" />
            <div className="carousel-caption">
              <h5>{slide.label}</h5>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      <button className="carousel-control prev" onClick={handlePrev}>
        &#10094;
      </button>
      <button className="carousel-control next" onClick={handleNext}>
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
