import React from "react";
import BookCard from "./BookCard";
import { Link } from "react-router-dom";
import PromoCard from "./PromoCard";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./component.css";
import { retrieveAllBooks } from "../apiConfig/ApiService";
import NavBar from "./NavBar";
function BookList() {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  useEffect(() => {
    retrieveAllBooks().then((response) => {
      setBooks(response.data);
    });
  }, []);

  return (
    <>
      <NavBar />
      <PromoCard />
      <div className="flex flex-wrap  p-5 gap-5 justify-center animate-slide-fade">
        {Array.isArray(books) && books.map((book) => (
          <Link key={book.id} to={`/books/${book.id}`}>
            <BookCard key={book.id} book={book} />
          </Link>
        ))}
        <button
          onClick={() => navigate("/book/upload")}
          className="border border-blue-500 p-2 absolute right-0 bottom-0 m-5 rounded-3xl text-black font-bold px-5 animate-bounce"
          style={{
            backgroundColor: "rgb(99, 175, 171)",
            position: "fixed",

          }}
        >
          + UPLOAD BOOK
        </button>
      </div>
    </>
  );
}

export default BookList;
