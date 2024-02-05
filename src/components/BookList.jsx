import React from "react";
import BookCard from "./BookCard";
import { Link } from "react-router-dom";
import PromoCard from "./PromoCard";
import { useState,useEffect } from "react";
import "./component.css";
import { retrieveAllBooks } from "../apiConfig/ApiService";
function BookList() {
  
  const [books, setBooks] = useState([]);
  useEffect(() => {
    retrieveAllBooks().then((response) => {
      setBooks(response.data);
    });
  }, []);

  return (
    <>
      <PromoCard />
      <div className="flex flex-wrap  p-5 gap-5 justify-center animate-slide-fade">
        {Array.isArray(books) && books.map((book) => (
          <Link key={book.id} to={`/books/${book.id}`}>
            <BookCard key={book.id} book={book} />
          </Link>
        ))}
      </div>
    </>
  );
}

export default BookList;
