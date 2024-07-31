import React, { useState } from "react";

interface CarouselProps {
  images: string[];
  links: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images, links }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-full">
      <div className="overflow-hidden relative">
        <a href={links[currentIndex]}>
        <img
          src={images[currentIndex]}
          alt="carousel image"
          className="object-cover w-full md:h-[400px] transition-transform duration-500"
        />
        </a>
        
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-1 text-lg top-1/3 md:top-1/2 transform -translate-y-1/2 
         h-8 w-8 text-center rounded-full bg-white text-blue-pop"
      >
        {"<"}
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-1 text-lg top-1/3 md:top-1/2 transform -translate-y-1/2 
        h-8 w-8 text-center rounded-full bg-white text-blue-pop"
      >
        {">"}
      </button>
    </div>
  );
};

export default Carousel;
