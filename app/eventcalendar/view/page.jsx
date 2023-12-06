'use client'
import React, { useEffect, useState } from "react"
import { useSearchParams } from 'next/navigation';
import Link from "next/link";
import EditEventForm from "../components/EditEventForm";
export default function Page() {
    const searchParams = useSearchParams()
    const index = searchParams.get('index')
    const [existingEvents, setExistingEvents] = useState(JSON.parse(localStorage.getItem("events"))) // existingEvents = events from localStorage
    const [openModal, setOpenModal] = useState(false)
    const handleModal = () => {
        setOpenModal(true)
    }
    const handleDelete = () => {
        existingEvents.splice(index, 1)
        localStorage.setItem("events", JSON.stringify(existingEvents))
        window.location = "/eventcalendar"
    }

    return (
        <section className="flex flex-col min-h-screen w-1/2 mx-auto items-center p-12 gap-8 border-0 border-red-600">
            <div className="flex justify-between w-full">
                <Link className="flex border-2 text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" href="/eventcalendar">Back</Link>
                <div className="flex gap-4">
                    <button className="flex border-2 text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleModal}>Edit</button>
                    <button className="flex border-2 text-white bg-red-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleDelete}>Delete</button>
                </div>
            </div>

            {index >= existingEvents.length ? (
                <div>No event with this index!</div>
            ) : (
                <div>
                    <div className="px-4 sm:px-0">
                        <h3 className="text-base font-semibold leading-7 text-gray-900">Event Information</h3>
                    </div>
                    <div className="mt-6 border-t border-gray-100">
                        <dl className="divide-y divide-gray-100">
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Event Name</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{existingEvents[index].event}</dd>
                            </div>
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Date</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{existingEvents[index].date}</dd>
                            </div>
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Description</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                    {existingEvents[index].description}
                                </dd>
                            </div>
                            {openModal &&
                                <div className="fixed top-0 left-0 z-50 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
                                    {/* Overlay */}
                                    <div className="absolute inset-0" ></div>

                                    {/* Modal */}
                                    <div className="relative z-10 bg-white rounded-lg shadow-lg p-8">
                                        <EditEventForm existingEvents={existingEvents} setExistingEvents={setExistingEvents} index={index} setOpenModal={setOpenModal} />
                                    </div>
                                </div>
                            }
                        </dl>
                    </div>
                </div>



            )
            }

        </section>
    )
}