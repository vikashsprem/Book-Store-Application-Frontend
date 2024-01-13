import React from "react";
import bookImage from "../assets/think.jpg";
import BookCard from "./BookCard";

const books = [
  {
    id: 1,
    title: "Think and Grow Rich - The Original Classic",
    image: bookImage,
    author: "Napoleon Hill",
    rating: 4,
    price: 59,
    discount: 60,
  },
  {
    id: 2,
    title: "The Power of your Subconscious Mind",
    image: bookImage,
    author: "Joseph Murphy",
    rating: 4,
    price: 99,
    discount: 50,
  },
  {
    id: 3,
    title: "The Power of Positive Thinking",
    image: bookImage,
    author: "Norman Vincent Peale",
    rating: 4,
    price: 59,
    discount: 60,
  },
  {
    id: 4,
    title: "The Power of your Subconscious Mind",
    image: bookImage,
    author: "Joseph Murphy",
    rating: 4,
    price: 99,
    discount: 50,
  },
];

const originalLength = books.length;

for (let i = 0; i < originalLength + 5; i++) {
  books.push({ ...books[i], id: i + 5 });
}



function CardList() {
  return (
    <div className="flex flex-nowrap overflow-x-auto p-5 gap-5">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}

export default CardList;
