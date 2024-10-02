import React from "react";
import "./BookList.css";
import BookItem from "../BookDetails/BookDetails";

const BooksList = ({ books }) => {
  return (
    <div className="books-grid">
      {books.map((book) => (
        <BookItem key={book.title} book={book} />
      ))}
    </div>
  );
};

export default BooksList;
