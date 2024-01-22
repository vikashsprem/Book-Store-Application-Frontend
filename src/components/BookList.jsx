import React from "react";
import BookCard from "./BookCard";
import { Link } from "react-router-dom";
import ApiConfig from "../apiConfig/apiConfig";
import PromoCard from "./PromoCard";

function CardList() {
  const { books } = ApiConfig("/books");

  return (
    <>
    <PromoCard />
    <div className="flex flex-wrap  p-5 gap-5 justify-center">
      {Array.isArray(books) && books.map((book) => (
        <Link key={book.id} to={`/books/${book.id}`}>
          <BookCard key={book.id} book={book} />
        </Link>
      ))}
    </div>
    </>
  );
}

export default CardList;
