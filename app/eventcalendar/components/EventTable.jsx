import React, { useState, useEffect } from "react"
import Link from "next/link"

export default function EventTable({ events }) {
    return (
        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Index
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Event
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Date
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Description
                        </th>
                    </tr>
                </thead>
                <tbody>
                    { events ? (
                        events.map((event, index) => (
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 w-full" key = {index}>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {index}
                                </th>
                                <td className="px-6 py-4">
                                    {event.event}
                                </td>
                                <td className="px-6 py-4">
                                    {event.date}
                                </td>
                                <td className="px-6 py-4">
                                    <Link href={{
                                        pathname: '/eventcalendar/view',
                                        query: { index: index }
                                    }} >See more</Link>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <div className = "flex mt-4">No events!</div>
                    )
                    }
                </tbody>
            </table>
        </div>
    )
}

// Table source: https://flowbite.com/docs/components/tables/