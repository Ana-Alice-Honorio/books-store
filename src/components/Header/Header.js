import React from "react";
import logo from "../../images/books.png";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./Header.css";

const Header = () => {
  return (
    <div className="App-header ">
      <div className="logo">
        <img src={logo} alt="logo da loja Books Store" />
        <span>Books Store</span>
      </div>
      <div className="contact-info">
        <WhatsAppIcon />
        <InstagramIcon />
        <YouTubeIcon />
      </div>
    </div>
  );
};

export default Header;
