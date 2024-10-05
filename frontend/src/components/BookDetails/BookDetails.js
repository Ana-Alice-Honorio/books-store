import React from "react";
import "./BookDetails.css";

//Aqui trago os detalhes dos livros de acordo com retorno da api
const BookItem = (props) => {
  // Extraindo a prop book de props
  const { book } = props;

  return (
    <div className="book-card">
      <div className="book-image">
        <img src={book.book_image} alt={book.title} />
      </div>
      <div className="book-details">
        <h3 className="book-title">{book.title}</h3>
        <p className="book-author">by {book.author}</p>
        <p className="book-description">{book.description}</p>
        {/* Aqui renderizando o conteúdo adicional (children), que será meu botão em booklist */}
        <div className="extra-content">{props.children}</div>
      </div>
    </div>
  );
};

export default BookItem;
