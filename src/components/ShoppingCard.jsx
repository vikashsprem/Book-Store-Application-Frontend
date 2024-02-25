import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { retrieveBook } from '../apiConfig/ApiService';
import './component.css';
import { useNavigate } from 'react-router-dom';

const ShoppingCard = () => {
    const { id } = useParams();
    const [book, setBook] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        retrieveBook(id).then((response) => {
            setBook(response.data);
        });
    }, [id]);

    const description =
        'This is a beautiful description for Book. It combines magic, mysticism, wisdom, and wonder into an inspiring tale of self-discovery. The story follows the journey of the main character, exploring themes of opportunity, reading life\'s omens, and the pursuit of dreams.';

    if (!book) {
        return <div className='m-5 p-5'>Loading...</div>;
    }

    return (
        <div className="flex flex-col md:flex-row h-screen">
            {/* Left side - Photo and Book Details */}
            <div className='m-2 md:w-1/4 h-4/5 p-8 '>
                <div className="border-2 border-neutral-500 outline outline-2 outline-offset-2 grid justify-items-center">
                    <img
                        src="https://cdn.kobo.com/book-images/b821b926-f56d-43c3-bfb7-81f4da772ca1/353/569/90/False/summary-of-the-alchemist-6.jpg"
                        alt="Book Cover"
                        className="w-full h-auto mb-4 rounded-lg shadow-md"
                    />
                    <h2 className="text-2xl font-bold mb-2">{book.title}</h2>
                </div>
                <div className="mt-5 border-2 border-neutral-500 outline outline-2 outline-offset-2 grid justify-items-center bg-black">
                    <button className="bg-black text-white p-5 rounded-md hover:font-bold transition duration-300">Click to See the Sample</button>
                </div>
            </div>

            {/* Right side - Additional Information and Buttons */}
            <div className="md:w-1/2 p-8 border-2 m-5 border-neutral-100 animate-slide-fade rounded-lg shadow-md">
                <p className="font-medium mb-4">{`Description: ${description}`}</p>
                <h2 className="text-2xl font-bold border-t-2 my-7"></h2>
                <div className="grid grid-cols-2 gap-2">
                    <p className="text-gray-300">{`Author: ${book.author}`}</p>
                    <p className="text-gray-300">{`Publication Year: ${book.publicationYear}`}</p>
                    <p className="text-gray-300">{`Genre: ${book.genre}`}</p>
                    <p className="text-gray-300">{`Language: ${book.language}`}</p>
                    <p className="text-gray-300">{`Rating: ${book.rating}`}</p>
                    <p className="text-gray-300">{`Price: ₹${book.price}`}</p>
                    <p className="text-gray-300">{`Discount: ${book.discount}%`}</p>
                    <p className="col-span-2 text-xl text-gray-200 font-bold">{`Total price: ₹${book.price - (book.price * book.discount) / 100}`}</p>
                </div>
                <h2 className="text-2xl font-bold border-t-2 my-7"></h2>
                <div className="flex justify-center space-y-4">
                    <button id='download-button' className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300">Download</button>
                    <button id='cart-button' className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition duration-300">Add to Cart</button>
                </div>
            </div>

            <div className="m-5 md:w-1/4 p-8 border-2 border-neutral-100 animate-slide-fade rounded-lg shadow-md">

            </div>
        </div>
    );
};

export default ShoppingCard;
