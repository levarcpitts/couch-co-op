import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import '../styles/Footer.css'; // Ensure the CSS file is imported

const Footer = ({ activePage, setActivePage }) => {
  return (
    <div className="footer">
      <div
        className="footer-item"
        onClick={() => setActivePage('Favorites')} // Switch to Favorites
      >
        <FavoriteIcon
          className={`footer-icon ${
            activePage === 'Favorites' ? 'active-icon' : ''
          }`}
        />
        <span className="footer-text">Favorites</span>
      </div>
      <div
        className="footer-item"
        onClick={() => setActivePage('Near Me')} // Switch to Near Me
      >
        <LocationOnIcon
          className={`footer-icon ${
            activePage === 'Near Me' ? 'active-icon' : ''
          }`}
        />
        <span className="footer-text">Near Me</span>
      </div>
      <div
        className="footer-item"
        onClick={() => setActivePage('Search')}
      >
        <SearchIcon
          className={`footer-icon ${
            activePage === 'Search' ? 'active-icon' : ''
          }`}
        />
        <span className="footer-text">Search</span>
      </div>
      <div
        className="footer-item"
        onClick={() => setActivePage('Profile')}
      >
        <AccountCircleIcon
          className={`footer-icon ${
            activePage === 'Profile' ? 'active-icon' : ''
          }`}
        />
        <span className="footer-text">Profile</span>
        <div className="slider"></div>
      </div>

    </div>
  );
};

export default Footer;
