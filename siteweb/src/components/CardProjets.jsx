import React from 'react'

function CardProjets({image, titreProjet, techno, link}) {
  return (
    
       <div className="p-4 w-80 h-80 rounded-md shadow-md">
          <img
            src={image}
            alt="Project 1"
            className="w-full h-48 object-cover rounded-md mb-2"
          />
          <h2 className="text-lg font-medium mb-1">{titreProjet}</h2>
          <p className="text-gray-600 text-sm">
            {techno}
          </p>
          <a href={link} className="text-blue-500 hover:underline">
            Voir le site web
          </a>
        </div>
  )
}
export default CardProjets;
