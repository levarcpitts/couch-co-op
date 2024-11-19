import React from 'react'
import GameCard from './GameCard';
import '../styles/UserCard.css'; // Contains user card styles


function Games() {
  return (
    <>
      <header className="favorites-header">
        <h1>Games</h1>
      </header>
      <div className="favorites-cards">
        <GameCard />
        <GameCard />
        <GameCard />
      </div>
    </>
  )
}

export default Games