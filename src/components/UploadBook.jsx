import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addBook } from '../apiConfig/ApiService';
import DropboxChooser from 'react-dropbox-chooser'
import "./component.css";
const BookInput = () => {
    const navigate = useNavigate();
    const APP_KEY = "your_app_key_here";

    const [book, setBook] = useState({
        id: null,
        rating: 0,
        description: '',
        discount: 0,
        title: '',
        author: '',
        genre: '',
        publicationYear: '',
        quantity: 0,
        price: '',
        language: '',
        imageLink: '',
        bookLink: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBook((prevBook) => ({ ...prevBook, [name]: value }));
    };

    function handleSuccess(files) {
        const tempUrl = files[0].link.replace('dl=0', 'dl=1');
        book.bookLink = tempUrl;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await addBook(book);
        if (response.status === 200) {
            navigate('/books');
        }
    };

    return (
        <div className="flex flex-col md:flex-row mx-auto upload-box">
            <div className='w-full md:w-1/2 m-2 order-3 max-w-md mx-auto text-black bg-slate-200 border border-stone-950 rounded shadow-2xl container md:h-screen overflow-y-scroll'>
                <h1 className="text-3xl font-bold m-5 text-center">Add Book</h1>
                <div className='flex justify-center mb-5'>
                    {book.imageLink && <img src={book.imageLink} alt="Book Cover" className="w-3/4 h-auto mb-4" />}
                </div>
                <div className='grid justify-center bg-gray-400 p-5 rounded-md'>
                    {book.description && <p className="font-medium mb-2"><strong>{`Description: ${book.description}`}</strong></p>}
                    {book.title && <h2 className="text-gray-700 mb-2"><strong>{`Title: ${book.title}`}</strong></h2>}
                    {book.author && <p className="text-gray-700 mb-2"><strong>{`Author: ${book.author}`}</strong></p>}
                    {book.genre && <p className="text-gray-700 mb-2"><strong>{`Genre: ${book.genre}`}</strong></p>}
                    {book.publicationYear && <p className="text-gray-700 mb-2"><strong>{`Publication Year: ${book.publicationYear}`}</strong></p>}
                    {book.price && <p className="text-gray-700 mb-2"><strong>{`Price: ₹${book.price}`}</strong></p>}
                    {book.language && <p className="text-gray-700 mb-2"><strong>{`Language: ${book.language}`}</strong></p>}
                </div>
            </div>

            <div className='flex justify-between m-3 order-2'>
                <p className='border border-r-black opacity-30 w-full'></p>
            </div>

            <div className='w-full md:w-1/2 order-1 container mx-auto md:h-screen overflow-y-scroll'>
                <div className='max-w-md mx-auto bg-slate-500 p-8 border rounded shadow-lg'>
                    <h1 className="text-3xl text-black text-center font-bold">Book Details</h1>
                </div>
                <form onSubmit={handleSubmit} className="max-w-md mx-auto  p-8 border rounded shadow-lg" style={{ backgroundColor: "rgb(18, 18, 18)" }}>
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-sm font-medium text-gray-300">
                            Title
                        </label>
                        <input
                            type="text"
                            className="input-field mt-1 px-4 py-2 p-2 border rounded w-full"
                            id="title"
                            name="title"
                            value={book.title}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="author" className="block text-sm font-medium text-gray-300">
                            Author
                        </label>
                        <input
                            type="text"
                            className="input-field mt-1 px-4 py-2 p-2 border rounded w-full"
                            id="author"
                            name="author"
                            value={book.author}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="genre" className="block text-sm font-medium text-gray-300">
                            Genre
                        </label>
                        <input
                            type="text"
                            className="input-field mt-1 px-4 py-2 p-2 border rounded w-full"
                            id="genre"
                            name="genre"
                            value={book.genre}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="publicationYear" className="block text-sm font-medium text-gray-300">
                            Publication Year
                        </label>
                        <input
                            type="number"
                            className="input-field mt-1 px-4 py-2 p-2 border rounded w-full"
                            id="publicationYear"
                            name="publicationYear"
                            value={book.publicationYear}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="price" className="block text-sm font-medium text-gray-300">
                            Price
                        </label>
                        <input
                            type="number"
                            className="input-field mt-1 px-4 py-2 p-2 border rounded w-full"
                            id="price"
                            name="price"
                            value={book.price}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="language" className="block text-sm font-medium text-gray-300">
                            Language
                        </label>
                        <input
                            type="text"
                            className="input-field mt-1 px-4 py-2 p-2 border rounded w-full"
                            id="language"
                            name="language"
                            value={book.language}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="description" className="block text-sm font-medium text-gray-300">
                            Description
                        </label>
                        <textarea
                            className="input-field mt-1 px-4 py-2 p-2 border rounded w-full"
                            id="description"
                            name="description"
                            value={book.description}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="imageLink" className="block text-sm font-medium text-gray-300">
                            Image Link
                        </label>
                        <input
                            type="text"
                            className="input-field mt-1 px-4 py-2 p-2 border rounded w-full"
                            id="imageLink"
                            name="imageLink"
                            value={book.imageLink}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="imageLink" className="block text-sm font-medium text-gray-300">
                            Attach Book
                        </label>
                        <DropboxChooser
                            appKey={APP_KEY}
                            success={handleSuccess}
                            cancel={() => this.onCancel()}>
                            <div className="dropbox-button input-field mt-1 px-4 py-2 p-2 border rounded w-full font-semibold bg-green-950 cursor-pointer">CLICK TO ATTACH BOOK FILE</div>
                        </DropboxChooser>
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
