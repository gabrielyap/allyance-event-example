import React, { useState, useEffect } from 'react';

export default function EditEventForm({ index, existingEvents }) {
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

        // Get existing events from localStorage
        let existingEventsArr = JSON.parse(localStorage.getItem('events'));

        // Update the event details at the specified index
        if (existingEventsArr && existingEventsArr[index]) {
            existingEventsArr[index] = { ...formData };

            // Set the updated events array back into localStorage
            localStorage.setItem('events', JSON.stringify(existingEventsArr));
            // Optionally, perform any other actions after updating
            // For example, trigger a re-render or update state
            existingEvents = JSON.parse(localStorage.getItem("events")) // Update state with updated events
        }
    };
    useEffect(() => {
        // Retrieve existing events from localStorage
        const existingEvents = JSON.parse(localStorage.getItem('events'));

        // Populate the form fields with the details of the event at the specified index
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
    );
};
