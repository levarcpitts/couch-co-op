import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import '../styles/Footer.css'; // Ensure the CSS file is imported

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-item">
        <FavoriteIcon className="footer-icon" />
        <span className="footer-text">Favorites</span>
      </div>
      <div className="footer-item">
        <LocationOnIcon className="footer-icon" />
        <span className="footer-text">Near Me</span>
      </div>
      <div className="footer-item">
        <SearchIcon className="footer-icon" />
        <span className="footer-text">Search</span>
      </div>
      <div className="footer-item">
        <AccountCircleIcon className="footer-icon" />
        <span className="footer-text">Profile</span>
      </div>
    </div>
  );
};

export default Footer;
