import React, { useState } from "react";
import "./BookList.css";
import BookItem from "../BookDetails/BookDetails";
import Pagination from "../Pagination/Pagination";
import axios from "axios";

const BooksList = ({ books }) => {
  const [currentPage, setCurrentpage] = useState(1);
  const booksPerPage = 6;

  // Cálculo de livros por página
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  // Função para mudar de página
  const paginate = (pageNumber) => setCurrentpage(pageNumber);

  // Função para adicionar aos favoritos
  const addToFavorites = async (book) => {
    try {
      await axios.post("http://localhost:3001/api/favorites", { book });
      console.log("Livro adicionado aos favoritos:", book.title);
    } catch (error) {
      console.error("Erro ao adicionar livro aos favoritos:", error);
    }
  };

  return (
    <div className="books-grid">
      {currentBooks.map((book) => (
        <BookItem
          key={book.title}
          book={book}
          addToFavorites={addToFavorites}
        />
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
