import React from 'react'

function CardPresence({titre ,details}) {
  return (
    <div>
      <div className="bg-white p-4 rounded shadow-lg ...">
                        <h1 className="text-xl font-bold mb-2 text-green-500">{titre}</h1>
                        <p className='text-base text-gray-600'>{details}</p>
                    </div>
    </div>
  )
}
export default CardPresence;
