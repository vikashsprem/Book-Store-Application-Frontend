import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addBook } from '../apiConfig/ApiService';

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
        <form onSubmit={handleSubmit} className='bg-green-500 p-2 m-2 space-x-1 space-y-1'>
            <h1 className='text-3xl bg-yellow-400 text-center m-2 p-2'>Fill out the book details</h1>
            <label>
                Title:
                <input type="text" name="title" value={book.title} onChange={handleChange} />
            </label>

            <label>
                Author:
                <input type="text" name="author" value={book.author} onChange={handleChange} />
            </label>

            <label>
                Genre:
                <input type="text" name="genre" value={book.genre} onChange={handleChange} />
            </label>

            <label>
                Publication Year:
                <input type="text" name="publicationYear" value={book.publicationYear} onChange={handleChange} />
            </label>

            <label>
                Price:
                <input type="number" name="price" value={book.price} onChange={handleChange} />
            </label>

            <label>
                Language:
                <input type="text" name="language" value={book.language} onChange={handleChange} />
            </label>

            <label>
                Description:
                <textarea name="description" value={book.description} onChange={handleChange} />
            </label>

            <label>
                Image Link:
                <input type="text" name="imageLink" value={book.imageLink} onChange={handleChange} />
            </label>
            <button type="submit" className='border border-black p-2 rounded-md m-2'>Add Book</button>
        </form>
    );
};

export default BookInput;
