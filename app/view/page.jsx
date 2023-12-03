'use client'
import React, { useEffect, useState } from "react"
import { useSearchParams } from 'next/navigation';
import Link from "next/link";

export default function Page() {
    const searchParams = useSearchParams()    
    const event = searchParams.get('event')
    const date = searchParams.get('date')
    const description = searchParams.get('description')
    return (
        <section className = "flex flex-col items-center min-h-screen">
            <Link href = "/">Back</Link>
            <h1>{event}</h1>
            <h3>{date}</h3>
            <h2>{description}</h2>
        </section>
    )
}