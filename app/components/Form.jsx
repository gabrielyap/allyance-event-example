import React, { useState, useEffect } from "react"

export default function Form({events, setEvents}) {
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
        setEvents(oldEvents => [...oldEvents, formData])
    };
    useEffect(() => {

    })
    return (
        <form className="flex flex-col gap-4" id="eventform" onSubmit={handleSubmit}>
            <input name="event" id="event" type="text" placeholder="Event Name" onChange={handleChange} required />
            <input name="date" id="date" type="text" placeholder="Date" onChange={handleChange} required />
            <input name = "description" id="description" type="text" placeholder="Description" onChange={handleChange} required />
            <button id="btn" type="submit" className = "mx-auto bg-blue-500 rounded-2xl p-4 text-white cursor-pointer w-min">
                Submit
            </button>
        </form>
    )
}