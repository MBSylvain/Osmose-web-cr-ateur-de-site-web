import React from "react";
import CardPresence from "./components/Card-Presence";

    const Presence = () => {
        return (
            <div className="mx-auto m-8 p-10">
                <div className="div">
                    <p className="text-gray-800 text-center text-3xl font-bold m-4">Passez au Digital </p>
                    <p className="text-gray-700 text-center text-2xl font-semibold m-4"> Transforme chaque visiteur en client grâce à votre site web</p>
                    </div>

                <div className="mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 m-10">
                    <CardPresence titre="Présence en ligne et visibilité" details="Un site web assure d'être visible en ligne, ce qui augmente les chances de convertir des propect en de nouveau client." />
                    <CardPresence titre="Crédibilité et professionnalisme" details="Confère une image professionnelle à l'entreprise, peut renforcer la confiance des clients." />
                    <CardPresence titre="Accessibilité 24/7" details="Exposer vos réalisations et vos savoir faire à vos futur clients. Être joignable 24h/24 avec un formulaire de contact." />
                    <CardPresence titre="Compétitivité" details="Démarquez vous de la concurrent et rester compétitives." />
                    <CardPresence titre="Expansions des marchés" details="élargir la portée géographique d'une entreprise en attirant des clients d'autres villes, régions. Explorer de nouvelles opportunités de vente en ligne." />
                    <CardPresence titre="Investissement" details="Un investissement stratégique pour toute entreprise souhaitant croître et rester compétitive dans le monde d'aujourd'hui." />
                    
                </div>
            </div>
        );
    }

    export default Presence;
