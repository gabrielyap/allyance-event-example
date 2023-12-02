import React, { useState, useEffect } from "react"

export default function EventCard({event, date}){
    return (
        <section className = "flex items-center h-full w-full gap-12 bg-red-300">
            <h1 className = "text-4xl font-bold">{event}</h1>
            <h1 className = "text-2xl font-semibold">{date}</h1>
        </section>
    )
}