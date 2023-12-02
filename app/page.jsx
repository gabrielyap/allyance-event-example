"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from "react"
import Form from './components/Form'
import EventCard from './components/EventCard'

export default function Home() {
  const [events, setEvents] = useState([])

  useEffect(() => {

  })
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Event Calendar</h1>
      <Form events={events} setEvents={setEvents} />
      <button onClick={() => console.log(events)}>Test events</button>
      <div>
        {
          events.map((event) => (
            <div>
              {
                <EventCard event = {event.event} date = {event.date}/>
              }
            </div>
          ))
        }
      </div>
    </main>
  )
}
