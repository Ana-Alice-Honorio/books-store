// BookList.js
import React, { useState } from "react";
import "./BookList.css";
import BookItem from "../BookDetails/BookDetails";
import Pagination from "../Pagination/Pagination";

// uso da prop books
const BooksList = ({ books }) => {
  const [currentPage, setCurrentpage] = useState(1);
  const booksPerPage = 6;

  // Cálculo de livros por página
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  // Função para mudar de página
  const paginate = (pageNumber) => setCurrentpage(pageNumber);

  return (
    <div className="books-grid">
      {currentBooks.map((book) => (
        <BookItem key={book.title} book={book}>
          {/* Botão sem funcionalidade por enquanto, somente design. Esse é meu children (o qual mencionei no BookItem) */}
          <button className="read-more-button">Leia Mais</button>
        </BookItem>
      ))}
      <div className="pagination-conteiner">
        <Pagination
          totalBooks={books.length}
          booksPerPage={booksPerPage}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default BooksList;
