import React, { useState, useEffect } from "react";
import Image1 from "../assets/books-top.jpg";
import Image2 from "../assets/books-down.jpg";

function PromoCard() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [Image2, Image1];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 5 seconds (adjust as needed)

        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, [images]);

    return (
        <div className="w-full h-1/4">
            <img src={images[currentImageIndex]} alt="banner" />
        </div>
    );
}

export default PromoCard;
