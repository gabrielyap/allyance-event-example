'use client'
import React, { useEffect, useState } from "react"
import { useSearchParams } from 'next/navigation';
import Link from "next/link";

export default function Page() {
    const searchParams = useSearchParams()
    // const event = searchParams.get('event')
    // const date = searchParams.get('date')
    // const description = searchParams.get('description')
    const index = searchParams.get('index')
    const existingEvents = JSON.parse(localStorage.getItem("events"))
    const handleDelete = () => {
        existingEvents.splice(index, 1)
        localStorage.setItem("events", JSON.stringify(existingEvents))
        window.location = "/"
    }
    // useEffect(() => {
    //     if (index >= existingEvents.length) {
    //         window.alert("Event does not exist!")
    //         window.location = "/"

    //     }
    // }, [])

    return (
        <section className="flex flex-col min-h-screen w-1/2 mx-auto items-center p-12 gap-8 border-2 border-red-600">
            <div className = "flex justify-between w-full">
                <Link className = "bg-blue-500 rounded-2xl p-4 text-white cursor-pointer" href="/">Back</Link>
                <button className = "bg-red-700 rounded-2xl p-4 text-white cursor-pointer" onClick = {handleDelete}>Delete</button>
            </div>


            {index >= existingEvents.length ? (
                <div>No event with this index!</div>
            ) : (
                <div className = "flex flex-col gap-8">
                    <div className = "text-6xl">{existingEvents[index].event}</div>
                    <div className = "text-2xl">{existingEvents[index].date}</div>
                    <div className = "text-4xl">{existingEvents[index].description}</div>
                </div>
            )
            }

        </section>
    )
}