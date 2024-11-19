import React from 'react';
import UserCard from './UserCard';
import '../styles/UserCard.css'; // Contains user card styles

function People() {
  return (
    <>
      <header className="favorites-header">
        <h1>People</h1>
      </header>
      <div className="favorites-cards">
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
    </>
  );
}

export default People;