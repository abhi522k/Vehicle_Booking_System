import "./HomeImageCarousel.css";
import React, { useState, useEffect } from "react";

const HomeImageCarousel = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const slides = [
    { id: 1, img: "cars_ Carousel_1/car1.jpg", caption: "Caption Text" },
    { id: 2, img: "cars_ Carousel_1/car2.jpg", caption: "Caption Two" },
    { id: 3, img: "cars_ Carousel_1/car3.jpg", caption: "Caption Three" },
    // { id: 4, img: "cars_ Carousel_1/car4.jpg", caption: "Caption Four" },
    { id: 5, img: "cars_ Carousel_1/car5.jpg", caption: "Caption Five" },
    { id: 6, img: "cars_ Carousel_1/car6.jpg", caption: "Caption Six" },
    { id: 7, img: "cars_ Carousel_1/car7.jpg", caption: "Caption Seven" },
    { id: 8, img: "cars_ Carousel_1/car8.jpg", caption: "Caption Eight" },
    { id: 9, img: "cars_ Carousel_1/car9.jpg", caption: "Caption Nine" },
    { id: 10, img: "cars_ Carousel_1/car10.jpg", caption: "Caption Ten" },
    { id: 11, img: "cars_ Carousel_1/car11.jpg", caption: "Caption Eleven" },
    { id: 12, img: "cars_ Carousel_1/car12.jpg", caption: "Caption Twelve" },
  ];
  const nextSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setSlideIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 2000); // Change image every 2 seconds
    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, [slides.length]);

  return (
    <div>
      <div className="slideshow-container">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className="mySlides fade"
            style={{
              display: index === slideIndex ? "block" : "none",
              justifyContent: index === slideIndex ? "center" : "none",
            }}
          >
            <div
              style={{
                height: "500px",
                overflowY: "hidden",
                position: "relative",
              }}
            >
              <img
                src={slide.img}
                alt={`Slide ${slide.id}`}
                style={{
                  width: "100%",
                  height: "700px",
                  top: "-100px",
                  bottom: "-100px",
                  position: "relative",
                }}
              />
            </div>
            <div className="text">{slide.caption}</div>
          </div>
        ))}
        {/* Next and Previous Buttons */}
        <button className="prev" onClick={prevSlide}>
          &#10094; {/* Left arrow */}
        </button>
        <button className="next" onClick={nextSlide}>
          &#10095; {/* Right arrow */}
        </button>
      </div>
      <br />
      {/* Dots for navigation */}
      <div style={{ textAlign: "center" }}>
        {slides.map((slide, index) => (
          <span
            key={slide.id}
            className={`dot${index === slideIndex ? " active" : ""}`}
            onClick={() => setSlideIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeImageCarousel;
