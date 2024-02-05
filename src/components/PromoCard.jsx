import React, { useState, useEffect } from "react";
import Image1 from "../assets/books-top.jpg";
import Image2 from "../assets/books-down.jpg";

function PromoCard() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [Image2, Image1];
    const quotes = [
        "Expand your mind with the world of books",
        "Dive into the magic of reading"
    ];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 5 seconds (adjust as needed)

        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, [images]);

    return (
        <div className="w-full h-2/5 relative ">
            <img src={images[currentImageIndex]} alt="banner" />
            <div className="absolute bottom-48 left-0 right-0 text-center uppercase text-white text-4xl font-bold p-5 bg-black bg-opacity-30 ">
                <p className="text-5lx shadow-gray-800">{quotes[currentImageIndex]}</p>
            </div>
        </div>
    );
}

export default PromoCard;
