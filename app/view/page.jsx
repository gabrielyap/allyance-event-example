'use client'
import React, { useEffect, useState } from "react"
import { useSearchParams } from 'next/navigation';
import Link from "next/link";
import EditEventForm from "../components/EditEventForm";

export default function Page() {
    const searchParams = useSearchParams()
    const index = searchParams.get('index')
    const [existingEvents, setExistingEvents] = useState(JSON.parse(localStorage.getItem("events")))
    const [formData, setFormData] = useState({
        event: '',
        date: '',
        description: '',
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (existingEvents && existingEvents[index]) {
            existingEvents[index] = { ...formData };
            localStorage.setItem('events', JSON.stringify(existingEvents));
            setExistingEvents(JSON.parse(localStorage.getItem("events"))) // Update state with updated events
        }
    };
    const handleDelete = () => {
        existingEvents.splice(index, 1)
        localStorage.setItem("events", JSON.stringify(existingEvents))
        window.location = "/"
    }
    useEffect(() => {
        if (existingEvents && existingEvents[index]) {
            const { event, date, description } = existingEvents[index];
            setFormData({ event, date, description });
        }
    }, [index]);
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
                    <form onSubmit={handleSubmit}>
                        <input
                            name="event"
                            type="text"
                            value={formData.event}
                            onChange={handleChange}
                            placeholder="Event Name"
                            required
                        />
                        <input
                            name="date"
                            type="text"
                            value={formData.date}
                            onChange={handleChange}
                            placeholder="Date"
                            required
                        />
                        <input
                            name="description"
                            type="text"
                            value={formData.description}
                            onChange={handleChange}
                            placeholder="Description"
                            required
                        />
                        <button type="submit">Save Changes</button>
                    </form>
                </div>

            )
            }

        </section>
    )
}