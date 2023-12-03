"use client"

import React, { useState, useEffect } from "react"
import Form from './components/Form'
import EventCard from './components/EventCard'

export default function Home() {
  const [events, setEvents] = useState([])

  useEffect(() => {
    let existingEvents = localStorage.getItem("events")
    setEvents(JSON.parse(existingEvents))
  }, [])
  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-8">
      <h1 className = "text-6xl">Event Calendar</h1>
      <div>
        <h2 className = "text-xl">New Event</h2>
        <Form events={events} setEvents={setEvents} />
      </div>
      
      <button onClick={() => console.log(events)}>Test events</button>
      <div className = "flex flex-col gap-4">
        {
          events.map((event, index) => (
            <div key = {index}>
              {
                <EventCard event = {event.event} date = {event.date} index = {index} description={event.description}/>
              }
            </div>
          ))
        }
      </div>
    </main>
  )
}
