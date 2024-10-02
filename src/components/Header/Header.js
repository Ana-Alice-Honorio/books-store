import React, { useState } from "react";
import "./Header.css";
import logo from "../../images/books.png";
import {
  Menu as MenuIcon,
  Phone as PhoneIcon,
  Search as SearchIcon,
} from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

const Header = ({ onSearch }) => {
  //setando o menu e o search deste menu
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  //esse toggle irá trazer meu menu hamburguer
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

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
    

      {/* ícones de contato */}

      <div className="contact-info">
        <span className="social-media">
          {/* Cada tooltip traz um botão e o respectivo texto deles*/}
          <Tooltip title="(12) 3456-7890">
            <IconButton>
              <PhoneIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="@BookStoreYT">
            <IconButton>
              <YouTubeIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="@InstaBook">
            <IconButton>
              <InstagramIcon />
            </IconButton>
          </Tooltip>
        </span>
        <button className="menu-icon" onClick={toggleMenu}>
          <MenuIcon />
        </button>
      </div>

      {/* Aqui, quando o menu abrir o hambúrguer, eu mostro o que quero nele*/}
      {/* com a classe mobile-menu, no css seto para display none quando quero esconder em determinado tamanho de tela */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <span>
            <strong>Contato:</strong> (12) 3456-7890
          </span>
          <span>
            <strong>Youtube:</strong> @BookStoreYT
          </span>
          <span>
            <strong>Instagram:</strong> @Instabook
          </span>
        </div>
      )}
    </header>
  );
};

export default Header;
