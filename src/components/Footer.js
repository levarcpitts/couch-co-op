import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Footer = () => {
  return (
    <div style={footerStyle}>
      <div style={footerItemStyle}>
        <FavoriteIcon style={iconStyle} />
        <span>Favorites</span>
      </div>
      <div style={footerItemStyle}>
        <LocationOnIcon style={iconStyle} />
        <span>Near Me</span>
      </div>
      <div style={footerItemStyle}>
        <SearchIcon style={iconStyle} />
        <span>Search</span>
      </div>
      <div style={footerItemStyle}>
        <AccountCircleIcon style={iconStyle} />
        <span>Profile</span>
      </div>
    </div>
  );
};

// Inline styles
const footerStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  alignItems: "center",
  justifyItems: "center",
  backgroundColor: "rgba(33, 33, 33, 0.95)",
  color: "#fff",
  padding: "10px 0",
  position: "fixed",
  bottom: 0,
  width: "390px",
  height: "71px",
  zIndex: "1000",
}

const footerItemStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "5px",
};

const iconStyle = {
  fontSize: "24px",
};

export default Footer;