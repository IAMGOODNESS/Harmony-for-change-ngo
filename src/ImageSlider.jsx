import React, { useState } from "react";
import "./ImageSlider.css";

const slides = [
  {
    image: "\pexels-illustrate-digital-ug-924569584-28101466.jpg", // Update with actual paths
    text: "Slide 1: Inspiring Change",
  },
  {
    image: "/images/slide2.jpg",
    text: "Slide 2: Building a Better Future",
  },
  {
    image: "/images/slide3.jpg",
    text: "Slide 3: Together We Thrive",
  },
];

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className="slider-container">
      <span className="arrow left" onClick={prevSlide}>&#9665;</span> 
      <div className="slider-content">
        <img
          src={slides[currentIndex].image}
          alt="slider"
          className="slider-image"
        />
        <p className="slider-text">{slides[currentIndex].text}</p>
      </div>
      <span className="arrow right" onClick={nextSlide}>&#9655;</span>
    </div>
  );
}

export default ImageSlider;
