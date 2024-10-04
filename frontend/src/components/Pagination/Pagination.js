import React from "react";
import "./Pagination.css";

const Pagination = ({ totalBooks, booksPerPage, paginate, currentPage }) => {
  //pageNumbers começa como array vazio
  const pageNumbers = [];

  //math.ceil é usado para trazer o menor número arredondado próximo do cálculo
  // o for percorre os livros deste array
  for (let i = 1; i <= Math.ceil(totalBooks / booksPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {/* faço o map da chave  number que será o valor de cuurentPage */}
        {pageNumbers.map((number) => (
          <li key={number} className={number === currentPage ? "active" : ""}>
            <button onClick={() => paginate(number)}>{number}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
