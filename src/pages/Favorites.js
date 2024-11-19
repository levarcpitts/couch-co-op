import React from 'react'
import '../styles/Favorites.css'
import People from '../components/People'
import Games from '../components/Games'
import Events from '../components/Events'


function Favorites() {
  return (
    <div className="favorites-container">
      <People />
      <Games />
      <Events />
      </div>
  )
}

export default Favorites