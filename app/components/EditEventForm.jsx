import React, { useEffect, useState } from "react"

export default function EditEventForm({existingEvents, setExistingEvents, index}) {
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
    useEffect(() => {
        if (existingEvents && existingEvents[index]) {
            const { event, date, description } = existingEvents[index];
            setFormData({ event, date, description });
        }
    }, [index]);

    return (
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
    )
}