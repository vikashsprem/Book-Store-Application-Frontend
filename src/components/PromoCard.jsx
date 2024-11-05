import React, { useState, useEffect } from "react";
import Image1 from "../assets/books-top.jpg";
import Image2 from "../assets/books-down.jpg";

function PromoCard() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [Image2, Image1];
  const quotes = [
    "Expand your mind with the world of books",
    "Dive into the magic of reading",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [images]);

  return (
    <div className="w-full h-64 md:h-80 lg:h-96 relative flex justify-center items-center overflow-hidden">
      <img
        className="w-full h-full object-cover"
        src={images[currentImageIndex]}
        alt="banner"
      />
      <div className="absolute bottom-10 md:bottom-26 lg:bottom-24 w-full text-center uppercase text-white font-bold p-4 md:p-6 bg-black bg-opacity-50">
        <p className="text-lg md:text-2xl lg:text-4xl">
          {quotes[currentImageIndex]}
        </p>
      </div>
    </div>
  );
}

export default PromoCard;
