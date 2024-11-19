import React from 'react'
import EventCard from './EventsCard'

function Events() {
  return (
    <>
    <header className="app-header">
    <h1>Events</h1>
  </header>
  <div className="app-cards">
    <EventCard />
    <EventCard />
    <EventCard />
    </div>
    </>
  )
}

export default Events