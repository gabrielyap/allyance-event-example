import React, { useState, useEffect } from "react"
import Link from "next/link"

export default function EventCard({event, date, index, description}){
    return (
        <section className = "flex items-center h-full w-full gap-12 bg-red-300">
            <div>{index}</div>
            <h1 className = "text-4xl font-bold">{event}</h1>
            <h2 className = "text-2xl font-semibold">{date}</h2>
            <Link href = {{
                pathname: '/view',
                query: {event: event, date: date, description: description}
            }} >See more</Link>
        </section>
    )
}