'use client'
import React, { useEffect, useState } from "react"
import { useSearchParams } from 'next/navigation';
import Link from "next/link";
import EditEventForm from "../components/EditEventForm";
export default function Page() {
    const searchParams = useSearchParams()
    const index = searchParams.get('index')
    const [existingEvents, setExistingEvents] = useState(JSON.parse(localStorage.getItem("events"))) // existingEvents = events from localStorage

    const handleDelete = () => {
        existingEvents.splice(index, 1)
        localStorage.setItem("events", JSON.stringify(existingEvents))
        window.location = "/"
    }

    return (
        <section className="flex flex-col min-h-screen w-1/2 mx-auto items-center p-12 gap-8 border-2 border-red-600">
            <div className="flex justify-between w-full">
                <Link className="bg-blue-500 rounded-2xl p-4 text-white cursor-pointer" href="/">Back</Link>
                <div className="flex gap-4">
                    <button className="border-2 border-blue-500 rounded-2xl p-4 text-blue-500 cursor-pointer" onClick={handleDelete}>Edit</button>
                    <button className="bg-red-700 rounded-2xl p-4 text-white cursor-pointer" onClick={handleDelete}>Delete</button>
                </div>
            </div>

            {index >= existingEvents.length ? (
                <div>No event with this index!</div>
            ) : (
                <div className="flex flex-col gap-8">
                    <div className="text-6xl">{existingEvents[index].event}</div>
                    <div className="text-2xl">{existingEvents[index].date}</div>
                    <div className="text-4xl">{existingEvents[index].description}</div>
                    <EditEventForm existingEvents={existingEvents}  setExistingEvents={setExistingEvents} index={index}/>
                </div>
            )
            }

        </section>
    )
}