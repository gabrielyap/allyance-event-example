"use client"

import React, { useState, useEffect } from "react"
import Form from './components/Form'
import EventTable from "./components/EventTable"

export default function Home() {
  const [events, setEvents] = useState([]) // Array of all events

  useEffect(() => {
    let existingEvents = localStorage.getItem("events") // existingEvents = events from localStorage
    setEvents(JSON.parse(existingEvents))
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-8">
      <h1 className="text-6xl">Event Calendar</h1>
      <div>
        <h2 className="text-xl">New Event</h2>
        <Form events={events} setEvents={setEvents} />
      </div>
      <EventTable events={events} />
    </main>
  )
}
