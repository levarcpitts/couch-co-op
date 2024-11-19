import React from 'react'
import GameCard from './GameCard';
import '../styles/UserCard.css'; // Contains user card styles


function Games() {
  return (
    <>
      <header className="app-header">
        <h1>Games</h1>
      </header>
      <div className="app-cards">
        <GameCard />
        <GameCard />
        <GameCard />
      </div>
    </>
  )
}

export default Games