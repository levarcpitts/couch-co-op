import React from 'react';
import EventCard from '../components/EventsCard';

function NearMe() {
  return (
    <>
      <header className="app-header nearme-header">
        <h1>Near You</h1>
        <button className="filter-button">Filter</button>
      </header>
      <div className="app-cards">
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </>
  );
}

export default NearMe;