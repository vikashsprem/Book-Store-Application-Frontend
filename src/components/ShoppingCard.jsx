import React, { useState, useEffect } from 'react';
import apiConfig from '../apiConfig/apiConfig';
import { useParams } from "react-router-dom";
import './component.css';

const ShoppingCard = () => {
    const { id } = useParams();
    const { books } = apiConfig('/books/' + id);
    const [book, setBook] = useState(null);
    const description =
        'This is a beautiful description for Book. It combines magic, mysticism, wisdom, and wonder into an inspiring tale of self-discovery. The story follows the journey of the main character, exploring themes of opportunity, reading life\'s omens, and the pursuit of dreams.';

    useEffect(() => {
        setBook(books);
    }, [books]);

    if (!book) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex flex-col md:flex-row">
            {/* Left side - Photo and Book Details */}
            <div className="m-2 md:w-1/4 h-4/5 p-8 border-2 border-neutral-500 outline outline-2 outline-offset-2 grid justify-items-center">
                <img
                    src="https://cdn.kobo.com/book-images/b821b926-f56d-43c3-bfb7-81f4da772ca1/353/569/90/False/summary-of-the-alchemist-6.jpg"
                    alt="Book Cover"
                    className="w-full h-auto mb-4"
                />
                <h2 className="text-2xl font-bold mb-2">{book.title}</h2>
            </div>

            {/* Right side - Additional Information and Buttons */}
            <div className="md:w-1/2 p-8 border-2 m-2 border-neutral-100">
                <p className="font-semi-bold mb-2">{`Description: ${description}`}</p>
                <p className="text-gray-700 mb-2">{`Author: ${book.author}`}</p>
                <p className="text-gray-700 mb-2">{`Genre: ${book.genre}`}</p>
                <p className="text-gray-700 mb-2">{`Publication Year: ${book.publicationYear}`}</p>
                <p className="text-gray-700 mb-2">{`Language: ${book.language}`}</p>
                <p className="text-gray-700 mb-2">{`Rating: ${book.rating}`}</p>
                <p className="text-gray-700 mb-2">{`Price: ₹${book.price}`}</p>
                <p className="text-gray-700 mb-2">{`Discount: ${book.discount}%`}</p>
                <p className="text-xl text-gray-700 font-bold dark:text-black">{`Total price: ₹${book.price - (book.price * book.discount) / 100}`}</p>
            </div>

            <div className="m-2 md:w-1/4 p-8 border-2 border-neutral-100">
                <div className="flex flex-col space-y-">
                    <button id='upload-button' className="bg-blue-500 text-white px-2 py-2">Click to Upload</button>
                    <button id='download-button' className="bg-green-500 text-white px-2 py-2 ">Download Book</button>
                    <button id='cart-button' className="bg-black text-white px-2 py-2 ">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCard;
