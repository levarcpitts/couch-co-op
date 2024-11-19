import React from 'react'
import GameProfileHeader from '../components/GameProfileHeader'
import Games from '../components/Games'
import Events from '../components/Events'

function GamePage() {
  return (
    <div className='game-page'>
    <GameProfileHeader />
    <div className='user-profile'>
    <Games />
    <Events />
    </div>
    </div>
  )
}

export default GamePage