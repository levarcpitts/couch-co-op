import React from 'react'
import '../styles/Favorites.css'
import People from '../components/People'
import Games from '../components/Games'


function Favorites() {
  return (
    <div className="favorites-container">
      <Games />
      <People />
      </div>
  )
}

export default Favorites