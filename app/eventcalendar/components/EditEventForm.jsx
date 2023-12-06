import React, { useEffect, useState } from "react"

export default function EditEventForm({ existingEvents, setExistingEvents, index, setOpenModal }) {
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
        setOpenModal(false)
    };
    useEffect(() => {
        if (existingEvents && existingEvents[index]) {
            const { event, date, description } = existingEvents[index];
            setFormData({ event, date, description });
        }
    }, [index]);

    return (
        <form className="flex flex-col gap-4" id="editeventform" onSubmit={handleSubmit}>
            <div className="flex justify-between">
                <h2 className="font-semibold">Edit Event</h2>
                <button className="font-bold text-red-800 ml-auto" onClick={() => setOpenModal(false)}>X</button>
            </div>

            <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                name="event"
                type="text"
                value={formData.event}
                onChange={handleChange}
                placeholder="Event Name"
                required />
            <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                name="date"
                type="text"
                value={formData.date}
                onChange={handleChange}
                placeholder="Date"
                required />
            <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                name="description"
                type="text"
                value={formData.description}
                onChange={handleChange}
                placeholder="Description"
                required
            />
            <button id="btn" type="submit" className="flex border-2 ml-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Save Changes
            </button>
        </form>


        // <form onSubmit={handleSubmit}>
        //     <input
        //         name="event"
        //         type="text"
        //         value={formData.event}
        //         onChange={handleChange}
        //         placeholder="Event Name"
        //         required
        //     />
        //     <input
        //         name="date"
        //         type="text"
        //         value={formData.date}
        //         onChange={handleChange}
        //         placeholder="Date"
        //         required
        //     />
        //     <input
        //         name="description"
        //         type="text"
        //         value={formData.description}
        //         onChange={handleChange}
        //         placeholder="Description"
        //         required
        //     />
        //     <button type="submit">Save Changes</button>
        // </form>
    )
}