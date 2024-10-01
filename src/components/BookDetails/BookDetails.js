import React from "react";
import "./BookDetails.css";

//Aqui trago os detalhes dos livros de acordo com retorno da api
const BookItem = ({ book }) => {
  return (
    <div>
      <h2>{book.title}</h2>
      <p>{book.author}</p>
      <img src={book.book_image} alt={book.title} />
      <p>{book.description}</p>
    </div>
  );
};

export default BookItem;
