import React, { useState } from "react";
import "./BookList.css";
import BookItem from "../BookDetails/BookDetails";
import Pagination from "../Pagination/Pagination";
const BooksList = ({ books }) => {
  const [currentPage, setCurrentpage] = useState(1);
  //Qtde inicial de livros por página
  const booksPerPage = 6;
  //cálculo de livros
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);
  //Função para mudar de página
  const paginate = (pageNumber) => setCurrentpage(pageNumber);
  return (
    <div className="books-grid">
      {currentBooks.map((book) => (
        <BookItem key={book.title} book={book} />
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
