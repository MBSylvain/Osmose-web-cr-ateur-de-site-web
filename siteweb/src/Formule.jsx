import React, { useState } from 'react';
import Modal from "./components/Modal";
const Formule = () =>{

    
    return (

<div className="flex flex-col mx-auto h-96 boder-solid border-t-2 md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-6 p-6">
 
  <div className="boder-solid border-t-1  max-w-sm rounded overflow-hidden shadow-lg bg-white">
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">Service de base</div>
      <p className="text-gray-700 text-base">
         Site vitrine de 3 à 5 pages<br />
         Design moderne et responsive<br />
         Formulaire de contact fonctionnel<br />
         SEO de base
      </p>
    </div>
    <div className="px-6 pt-4 pb-6">
      <button onClick={Modal} className="inline-block bg-blue-500 text-white px-3 py-1 text-sm font-semibold rounded-full cursor-pointer">En savoir plus</button>
    </div>
  </div>

  
  <div className="boder-solid border-zinc-400 border-1 max-w-sm rounded overflow-hidden shadow-lg bg-white">
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">Service intermédiaire</div>
      <p className="text-gray-700 text-base">
         Tout le contenu du service de base<br />
         Blog intégré<br />
         Galerie d'images ou vidéos<br />
         SEO amélioré<br />
         Formation courte
      </p>
    </div>
    <div className="px-6 pt-4 pb-6">
      <span className="inline-block bg-green-500 text-white px-3 py-1 text-sm font-semibold rounded-full cursor-pointer">En savoir plus</span>
    </div>
  </div>

  <div className="boder-solid border-t-1 max-w-sm rounded overflow-hidden shadow-lg bg-white">
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">Service avancé</div>
      <p className="text-gray-700 text-base">
         Tout le contenu du service intermédiaire<br />
         Espace membre sécurisé<br />
         Système de réservation en ligne<br />
         CMS pour gestion de contenu<br />
         Hébergement et maintenance
      </p>
    </div>
    <div className="px-6 pt-4 pb-6">
      <span className="inline-block bg-red-500 text-white px-3 py-1 text-sm font-semibold rounded-full cursor-pointer">En savoir plus</span>
    </div>
  
  </div>
</div>


    )
}
export default Formule;
