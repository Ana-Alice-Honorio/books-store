import React from "react";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIcon from "@mui/icons-material/Phone";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Book Store</p>
      <div className="contact-info">
        <span className="social-media">
          {/* Cada tooltip traz um botão e o respectivo texto deles*/}
          {/* ícones de contato */}
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
      </div>
    </footer>
  );
};

export default Footer;
