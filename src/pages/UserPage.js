import React from 'react'
import Games from '../components/Games';
import Events from '../components/Events';
import UserProfileHeader from '../components/UserProfileHeader';
import '../styles/UserPage.css'

function UserPage() {
  return (
    <div className='user-page'>
    <UserProfileHeader />
    <div className='user-profile'>
    <Games />
    <Events />
    </div>
    </div>
  )
}

export default UserPage