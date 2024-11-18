import React from 'react'
import GameCard from './GameCard';
import '../styles/FavoritesCard.css'; // Contains header styles
import '../styles/UserCard.css'; // Contains user card styles


function Games() {
  return (
    <>
      <header className="people-header">
        <h1>Games</h1>
      </header>
      <div className="user-cards">
        <GameCard />
      </div>
    </>
  )
}

export default Games