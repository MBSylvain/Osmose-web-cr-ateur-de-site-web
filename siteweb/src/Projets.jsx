import React from 'react'

const Projets = () => {
  return (
    <div className='mt-10'>
       <h1 className="text-4xl font-bold mb-4">Mes Réalisations</h1>

      <div className="flex flex-row mx-auto gap-4 justify-center items-center mt-6">
      <div className="rounded w-80">
        <div className="p-4 rounded-md shadow-md">
          <img
            src="/images/project1.jpg"
            alt="Project 1"
            className="w-full h-48 object-cover rounded-md mb-2"
          />
          <h2 className="text-lg font-medium mb-1">Création d'un site vitrine de produits de beauté</h2>
          <p className="text-gray-600 text-sm">
            Technologies utilisées: HTML,js, Bootstrap
          </p>
          <a href="https://www.example.com" className="text-blue-500 hover:underline">
            Voir le site web
          </a>
        </div>
        {/* Ajoutez plus de projets ici */}
      </div>
      <div className="rounded w-80">
        <div className="p-4 rounded-md shadow-md">
          <img
            src="/images/project1.jpg"
            alt="Project 1"
            className="w-full h-48 object-cover rounded-md mb-2"
          />
          <h2 className="text-lg font-medium mb-1">OSweb</h2>
          <p className="text-gray-600 text-sm">
            Technologies utilisées: React JS, Tailwin CSS,
          </p>
          <a href="https://www.example.com" className="text-blue-500 hover:underline">
            Voir le site web
          </a>
        </div>
        {/* Ajoutez plus de projets ici */}
      </div>
    </div>
    </div>
  )
}

export default Projets
