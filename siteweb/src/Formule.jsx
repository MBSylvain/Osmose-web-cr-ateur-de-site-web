import Button from './components/button';
import React from 'react';
import Icone_Eclaire from './components/Icone_Eclaire';
import { GiSpookyHouse } from "react-icons/gi";
import { GrDomain } from "react-icons/gr";
import { GiSpellBook } from "react-icons/gi";
const Formule = () =>{
    
    return (
<div className="flex flex-col mx-auto h-auto boder-solid border-t-2 justify-center">
  <h1 className="text-4xl font-bold mb-4 mt-4">Nos Tarifs</h1>
  <div className="flex flex-col mx-auto h-fit gap-8  md:flex-row justify-center space-y-6 flex-wrap md:space-y-0 md:space-x-6 p-6">


  <div className="boder-solid border-t-1  max-w-sm rounded overflow-hidden shadow-lg bg-white ">
    <div className="px-1 py-1 container h-fit">
      <div className="font-bold text-xl mb-2 mx-auto ">Service de base</div>
      <p className="text-gray-700 text-base">
         Site vitrine de 3 à 5 pages<br />
         Design moderne et responsive : Adapté aux mobiles et tablettes<br />
         Formulaire de contact fonctionnel: Pour permettre aux visiteurs de vous contacter facilement<br />
         SEO de base: Optimisation pour les moteurs de recherche
      </p>
      <p className="font-bold text-lg">De 300€ à 500 € (selon les options choisies)</p>
    </div>
    <div className="px-6 pt-4 pb-6">
      <div class="flex flex-col items-center justify-center gap-8 md:flex-row mb-8">
        <Button text="C'est partie allons-y"  />
                    
            </div>
    </div>
  </div>

  
  <div className="boder-solid border-t-1 max-w-sm rounded overflow-hidden shadow-lg bg-white">
    <div className="px-6 py-4 h-fit" >
      <div className="font-bold text-xl mb-2 mx-auto">Service intermédiaire</div>
      <p className="text-gray-700 text-base">
         Tout le contenu du service de base<br />
         Blog intégré<br />
         Galerie d'images ou vidéos:Présentation visuelle de vos projets ou produits<br />
         SEO amélioré<br />
         Formation courte : Formation pour vous aider à gérer et mettre à jour votre site
      </p>
      <p className="font-bold text-lg">De 500€ à 1000 €</p>
    </div>
    <div class="flex flex-col items-center justify-center gap-8 md:flex-row mb-8">
    <Button text="C'est partie allons-y" />
    </div>
  </div>

  <div className="border-solid border-t-1 max-w-sm rounded overflow-hidden shadow-lg bg-white ">
    <div className="px-6 py-4 h-fit ">
      <div className="font-bold text-xl mb-2 mx-auto">Service avancé</div>
      <p className="text-gray-700 text-base">
         Tout le contenu du service intermédiaire<br />
         Espace membre sécurisé<br />
         Système de réservation en ligne<br />
         CMS pour gestion de contenu<br />
         Hébergement et maintenance
      </p>
      <p className="font-bold text-lg">Suivant Devis</p>

    </div>
    <div class="flex flex-col items-center justify-center gap-8 md:flex-row mb-8">
      <Button text="Consultez-moi" />

                    </div>
  
  </div>
 
  </div>
  <div className="container h-fit mx-auto m-8 ">
    <h1 className='font-bold text-2xl text-center mt-8'> Quelques exemples d'options</h1>
    <div className=" flex flex-col justify-center h-full  md:flex-row   xl:flex-row">
    <div className=" mx-auto w-1/3 flex flex-col justify-center items-center "><h1 className='text-bold m-4'>Hébergements</h1>
    <GiSpookyHouse size={50} className='text-red-200 m-5'/>
    <p className='flex flex-row text-sm'>    <Icone_Eclaire />
    Gratuit </p>
    <p className='flex flex-row text-sm'>    <Icone_Eclaire />
    Payant </p>
</div>
    <div className="mx-auto w-1/3 flex flex-col justify-center items-center"><h1 className='text-bold m-4'>Nom domain</h1>
   <GrDomain size={50} className='text-red-200 m-8'/> 
    <p className='flex flex-row text-sm'>    <Icone_Eclaire />
    Sans nom de domaine personnalisé (ex. : votresite.wordpress.com)</p>
    <p className='flex flex-row text-sm'>    <Icone_Eclaire />
    Avec nom de domaine personnalisé (ex. : votresite.com)</p>
    </div>
    <div className="mx-autow-1/3 flex flex-col justify-center items-center"><h1 className='text-bold m-4'>Création du contenu </h1>
    <GiSpellBook size={50} className='text-red-200 m-8' />
    <p className='flex flex-row text-sm'>    <Icone_Eclaire />
Sans création de contenu : Vous me fournissez tous les textes et images nécessaires</p>
    <p className='flex flex-row text-sm'>    <Icone_Eclaire />
    Avec création de contenu : Rédaction de textes et création de visuels professionnels pour le site</p>
    </div>
    
    </div>
  </div>
</div>

    )
}
export default Formule;
