import React from 'react';
import '../styles/GameCard.css';
import gameImage from '../components/assets/images/supersmash.jpg';

function GameCard() {
  return (
    <div className="game-card">
      <div className="game-card-image">
        <img
          src={gameImage}
          alt="Super Smash Bros Ultimate"
        />
      </div>
      <div className="game-card-details">
        <h3>Super Smash Bros Ultimate</h3>
        <p>Nintendo Switch</p>
      </div>
      <button className="follow-btn-events">Follow</button>
    </div>
  );
}

export default GameCard;