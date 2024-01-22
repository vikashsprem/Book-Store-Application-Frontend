import React from "react";
import apiConfig from "./apiConfig";

function BookList() {
    // Assuming your API endpoint is "/books"
    const { books } = apiConfig("/books");

    return (
        <div>
            <h1>Book List</h1>
            <ul>
                {Array.isArray(books) && books.map((book) => (
                    <li key={book.id}>{book.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default BookList;
