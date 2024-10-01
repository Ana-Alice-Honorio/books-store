import React from "react";
import BookItem from "../components/BookDetails";
// trago a listagem de livros da api
const BooksList = ({ books }) => {
  return (
    <div>
      {books.map((book) => (
        // a partir do parâmetro book faço o map destes itens e atribuo com a key
        <BookItem key={book.title} book={book} />
      ))}
    </div>
  );
};

export default BooksList;
