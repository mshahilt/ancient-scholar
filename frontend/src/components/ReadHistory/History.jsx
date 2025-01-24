import React from 'react'
import { indianHistory } from '../../data/indianHistory'

const History = () => {
    return (
        <div>
            <div className="bg-yellow-50 py-10 px-5 md:px-20 lg:px-40">
                <h2 className="text-4xl font-bold text-yellow-800 text-center mb-8">
                    Indian History Highlights
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {indianHistory.map((event, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-md rounded-lg p-4 border-l-4 border-yellow-500"
                        >
                            <h3 className="text-xl font-semibold text-yellow-700 mb-2">
                                {event.title}
                            </h3>
                            <p className="text-yellow-600 italic text-sm mb-2">{event.date}</p>
                            <p className="text-gray-700">{event.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default History
