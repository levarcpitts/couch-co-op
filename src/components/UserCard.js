import React from 'react'
import '../styles/UserCard.css'
import profileImage from '../components/assets/images/profile_image.webp'
import PlaceIcon from '@mui/icons-material/Place';

function UserCard() {
  return (
  <div className="card-container">
    <div className="profile-card">    
  <div class="user_picture">
      <img src={profileImage} alt="Profile" className="profile-image" />
    </div>
  <div class="user_name"><h4>@TheMainGamer</h4></div>
  <div class="location"><span><p><PlaceIcon className="location-img" fontSize='10px' /> Miami, FL</p></span> <button className="follow-btn">
                Follow
            </button>
            </div>
    </div>
    </div>
  )
}

export default UserCard