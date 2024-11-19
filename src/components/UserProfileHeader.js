import React from 'react'
import '../styles/UserProfileHeader.css'
import PlaceIcon from '@mui/icons-material/Place';
import profileImage from '../components/assets/images/profile_image.webp'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


function UserProfileHeader() {
  return (
    <>
    <div className="user-profile-header">
      <div className="header-icons">
        <span className="back-icon"><ArrowBackIosIcon /></span>
        <span className="location"><PlaceIcon fontSize='10px' />Miami, FL</span>
      </div>
      <div className="profile-section">
        <img
          className="profile-image"
          src={profileImage}
          alt="User Profile"
        />
        <h2 className="username">@TheMainGamer</h2>
      </div>
      <div className="action-buttons">
        <button className="follow-button">Follow</button>
        <span className="star-icon">⭐</span>
      </div>
    </div>
    
    </>
  )
}

export default UserProfileHeader;