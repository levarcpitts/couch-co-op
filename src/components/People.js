import React from 'react';
import UserCard from './UserCard';
import '../styles/FavoritesCard.css'; // Contains header styles
import '../styles/UserCard.css'; // Contains user card styles

function People() {
  return (
    <div className="people-container">
      <header className="people-header">
        <h1>People</h1>
      </header>
      <div className="user-cards">
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
    </div>
  );
}

export default People;