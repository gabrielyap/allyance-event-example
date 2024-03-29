"use client"

import React, { useState, useEffect } from "react"
import Form from './components/Form'
import EventTable from "./components/EventTable"
import Link from "next/link"

export default function Home() {
    const [events, setEvents] = useState([]) // Array of all events
    const [openModal, setOpenModal] = useState(false)
    const handleModal = () => {
        setOpenModal(true)
    }
    useEffect(() => {
        let existingEvents = localStorage.getItem("events") // existingEvents = events from localStorage
        setEvents(JSON.parse(existingEvents))
    }, [])

    return (
        <main className="flex flex-col min-h-screen  items-center p-24 gap-8 lg:w-1/2 mx-auto">
            <h1 className="text-6xl">Event Calendar</h1>
            <EventTable events={events} />
            <div className="flex lg:ml-auto ">
                <button onClick={handleModal} className="flex border-2 ml-auto text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                    New Event
                </button>
            </div>

            {openModal &&
                <div className="fixed top-0 left-0 z-50 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
                    {/* Overlay */}
                    <div className="absolute inset-0" ></div>

                    {/* Modal */}
                    <div className="relative z-10 bg-white rounded-lg shadow-lg p-8">
                        <Form setEvents={setEvents} setOpenModal={setOpenModal} />
                    </div>
                </div>}
        </main>
    )
}
