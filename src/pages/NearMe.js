import React, {useEffect, useRef} from 'react';
import EventCard from '../components/EventsCard';
import MenuIcon from '@mui/icons-material/Menu';

function NearMe() {
    const containerRef = useRef(null);

    useEffect(() => {
      if (containerRef.current) {
        containerRef.current.scrollTop = 0; // Reset scroll position to top
      }
    }, []);
  return (
    <>
      <header className="app-header nearme-header">
        <h1>Near You</h1>
        <button className="filter-button"><MenuIcon />Filter</button>
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