import React from 'react';
import EventCard from '../components/EventsCard';
import MenuIcon from '@mui/icons-material/Menu';

function NearMe() {

    
  return (
    <>
      <header className="nearme-header">
        <h1>Near You</h1>
        <button className="filter-button"><MenuIcon />Filter</button>
      </header>
      <div className="app-cards near-you-cards">
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