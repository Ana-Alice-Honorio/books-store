import React, { useState } from "react";
import "./Header.css";
import logo from "../../images/books.png";
import { Search as SearchIcon } from "@mui/icons-material";

const Header = ({ onSearch }) => {
  //setando o search deste menu

  const [searchTerm, setSearchTerm] = useState("");

  //constante para busca de livros
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <header className="header">
      {/*Container com logo e nome da loja */}
      <div className="logo-container">
        <img src={logo} alt="logo da loja Books Store" className="logo" />
        <span className="store-name">Book Store</span>
      </div>

      {/* Search */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Buscar livro..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
        />
        <SearchIcon className="search-icon" />
      </div>
    </header>
  );
};

export default Header;
