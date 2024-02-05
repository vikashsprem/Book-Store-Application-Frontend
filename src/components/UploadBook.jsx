import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addBook } from '../apiConfig/ApiService';
import "./component.css";
const BookInput = () => {
    const navigate = useNavigate();

    const [book, setBook] = useState({
        id: null,
        rating: 0,
        description: '',
        discount: 0,
        title: '',
        author: '',
        genre: '',
        publicationYear: 0,
        quantity: 0,
        price: 0,
        language: '',
        imageLink: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBook((prevBook) => ({ ...prevBook, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await addBook(book);
        if (response.status === 200) {
            navigate('/books');
        }
    };

    return (
        <div className="flex mx-auto upload-box">
            <div className='w-1/2 order-2 m-2 max-w-md mx-auto bg-slate-200 border border-stone-950 rounded shadow-2xl'>
                <h1 className="text-3xl font-bold m-5 text-center">Add Book</h1>
            </div>
            <div className='container mx-auto w-1/2 order-1 h-screen overflow-y-scroll'>
                <div className='max-w-md mx-auto bg-slate-500 p-8 border rounded shadow-lg'>
                    <h1 className="text-3xl text-center font-bold">Book Details</h1>
                </div>
                <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-black p-8 border rounded shadow-lg">
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-sm font-medium text-gray-600">
                            Title
                        </label>
                        <input
                            type="text"
                            className="mt-1 p-2 border rounded w-full"
                            id="title"
                            name="title"
                            value={book.title}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="author" className="block text-sm font-medium text-gray-600">
                            Author
                        </label>
                        <input
                            type="text"
                            className="mt-1 p-2 border rounded w-full"
                            id="author"
                            name="author"
                            value={book.author}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="genre" className="block text-sm font-medium text-gray-600">
                            Genre
                        </label>
                        <input
                            type="text"
                            className="mt-1 p-2 border rounded w-full"
                            id="genre"
                            name="genre"
                            value={book.genre}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="publicationYear" className="block text-sm font-medium text-gray-600">
                            Publication Year
                        </label>
                        <input
                            type="number"
                            className="mt-1 p-2 border rounded w-full"
                            id="publicationYear"
                            name="publicationYear"
                            value={book.publicationYear}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="price" className="block text-sm font-medium text-gray-600">
                            Price
                        </label>
                        <input
                            type="number"
                            className="mt-1 p-2 border rounded w-full"
                            id="price"
                            name="price"
                            value={book.price}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="language" className="block text-sm font-medium text-gray-600">
                            Language
                        </label>
                        <input
                            type="text"
                            className="mt-1 p-2 border rounded w-full"
                            id="language"
                            name="language"
                            value={book.language}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="description" className="block text-sm font-medium text-gray-600">
                            Description
                        </label>
                        <textarea
                            className="mt-1 p-2 border rounded w-full"
                            id="description"
                            name="description"
                            value={book.description}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="discount" className="block text-sm font-medium text-gray-600">
                            Discount
                        </label>
                        <input
                            type="number"
                            className="mt-1 p-2 border rounded w-full"
                            id="discount"
                            name="discount"
                            value={book.discount}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="imageLink" className="block text-sm font-medium text-gray-600">
                            Image Link
                        </label>
                        <input
                            type="text"
                            className="mt-1 p-2 border rounded w-full"
                            id="imageLink"
                            name="imageLink"
                            value={book.imageLink}
                            onChange={handleChange}
                        />
                    </div>

                    <button type="submit" className="bg-blue-800 hover:bg-slate-900 text-white p-2 rounded mt-1 border w-full">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default BookInput;
