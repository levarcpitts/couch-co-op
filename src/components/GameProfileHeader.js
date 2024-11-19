import React from 'react'
import gameImage from './assets/images/supersmash.jpg';
import '../styles/GameProfileHeader.css'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';



function GameProfileHeader() {
  return (
    <div className="game-profile-header">
    <div className="header-icons">
      <span className="back-icon"><ArrowBackIosIcon /></span>
    </div>
    <div className="game-content">
      <img className="game-image" src={gameImage} alt="Super Smash Bros" />
      <div className="game-details">
        <h2 className="game-title">Super Smash Bros</h2>
        <p className="game-platform">Nintendo Switch</p>
      </div>
    </div>
    <div className="action-buttons">
    <button className="follow-button">Follow</button>
    <span className="star-icon">⭐</span>
    </div>
  </div>
  )
}

export default GameProfileHeader