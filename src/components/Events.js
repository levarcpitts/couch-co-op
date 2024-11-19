import React from 'react'
import EventCard from './EventsCard'

function Events() {
  return (
    <>
    <header className="favorites-header">
    <h1>Events</h1>
  </header>
  <div className="favorites-cards">
    <EventCard />
    <EventCard />
    <EventCard />
    </div>
    </>
  )
}

export default Events