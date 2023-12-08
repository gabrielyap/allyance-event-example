import React, { useState, useEffect } from "react"

export default function Form({ setEvents, setOpenModal }) {
    const [formData, setFormData] = useState({
        event: '',
        date: '',
        description: '',
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("formData: ", formData)
        let existingEvents = localStorage.getItem("events")
        existingEvents = existingEvents ? JSON.parse(existingEvents) : [];
        existingEvents.push(formData);
        localStorage.setItem("events", JSON.stringify(existingEvents))
        setEvents(JSON.parse(localStorage.getItem("events")))
        setOpenModal(false)
    };
    useEffect(() => {

    })
    return (
        <form className="flex flex-col gap-4" id="eventform" onSubmit={handleSubmit}>
            <div className="flex justify-between">
                <h2 className="font-semibold">New Event</h2>
                <button className="font-bold text-red-800 ml-auto" onClick={() => setOpenModal(false)}>X</button>
            </div>

            <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " name="event" id="event" type="text" placeholder="Event Name" onChange={handleChange} required />
            <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " name="date" id="date" type="text" placeholder="Date" onChange={handleChange} required />
            <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " name="description" id="description" type="text" placeholder="Description" onChange={handleChange} required />
            <button id="btn" type="submit" className="flex border-2 ml-auto text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Submit
            </button>
        </form>
    )
}