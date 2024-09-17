import React from "react";
import { Link } from "react-router-dom";

function Home() {
        return (
                <div>
                        <div className="mx-auto h-fit w-screen boder-solid border-t-2">
                                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                                        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                                                <div>
                                                        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider uppercase rounded-full bg-sky-500 text-white">
                                                                Os Web
                                                        </p>
                                                </div>
                                                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                                                        <span className="relative inline-block">
                                                                <svg
                                                                        viewBox="0 0 52 24"
                                                                        fill="currentColor"
                                                                        className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-slate-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                                                                >
                                                                        <defs>
                                                                                <pattern
                                                                                        id="fdca20a0-aeb4-4caf-ba1b-4351eee42363"
                                                                                        x="0"
                                                                                        y="0"
                                                                                        width=".135"
                                                                                        height=".30"
                                                                                >
                                                                                        <circle cx="1" cy="1" r=".7"></circle>
                                                                                </pattern>
                                                                        </defs>
                                                                        <rect
                                                                                fill="url(#fdca20a0-aeb4-4caf-ba1b-4351eee42363)"
                                                                                width="52"
                                                                                height="24"
                                                                        ></rect>
                                                                </svg>

                                                                <span className="relative">Développeur Web et Web mobile</span>
                                                        </span>
                                                </h2>
                                                <p className="text-base text-gray-700 md:text-lg">
                                                        Création de site web sur mesure avec simplicité et éfficaité pour
                                                        les petites entreprises et les particuliers.
                                                </p>
                                        </div>

                                        <div className="grid max-w-md gap-8 row-gap-10 sm:mx-auto lg:max-w-full lg:grid-cols-3">
                                                <div className="flex flex-col sm:flex-row">
                                                        <div className="sm:mr-4">
                                                                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-green-50">
                                                                        <svg
                                                                                className="w-12 h-12 text-green-400"
                                                                                stroke="currentColor"
                                                                                viewBox="0 0 52 52"
                                                                        >
                                                                                <polygon
                                                                                        strokeWidth="3"
                                                                                        strokeLinecap="round"
                                                                                        strokeLinejoin="round"
                                                                                        fill="none"
                                                                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                                                                ></polygon>
                                                                        </svg>
                                                                </div>
                                                        </div>
                                                        <div>
                                                                <h6 className="mb-2 font-semibold leading-5">
                                                                        Développement de site internet :
                                                                </h6>
                                                                <p className="mb-3 text-sm text-gray-900">
                                                                        Notre service de développement de sites web offre des
                                                                        solutions complètes pour créer et lancer des sites web
                                                                        professionnels et attrayants.
                                                                </p>
                                                                <ul className="mb-4 -ml-1 space-y-2">
                                                                        <li className="flex items-start">
                                                                                <span className="mr-1">
                                                                                        <svg
                                                                                                className="w-5 h-5 mt-px text-green-400"
                                                                                                stroke="currentColor"
                                                                                                viewBox="0 0 52 52"
                                                                                        >
                                                                                                <polygon
                                                                                                        strokeWidth="4"
                                                                                                        strokeLinecap="round"
                                                                                                        strokeLinejoin="round"
                                                                                                        fill="none"
                                                                                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                                                                                ></polygon>
                                                                                        </svg>
                                                                                </span>
                                                                                Designes modernes
                                                                        </li>
                                                                        <li className="flex items-start">
                                                                                <span className="mr-1">
                                                                                        <svg
                                                                                                className="w-5 h-5 mt-px text-green-400"
                                                                                                stroke="currentColor"
                                                                                                viewBox="0 0 52 52"
                                                                                        >
                                                                                                <polygon
                                                                                                        strokeWidth="4"
                                                                                                        strokeLinecap="round"
                                                                                                        strokeLinejoin="round"
                                                                                                        fill="none"
                                                                                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                                                                                ></polygon>
                                                                                        </svg>
                                                                                </span>
                                                                                Sites web responsive
                                                                        </li>
                                                                        <li className="flex items-start">
                                                                                <span className="mr-1">
                                                                                        <svg
                                                                                                className="w-5 h-5 mt-px text-green-400"
                                                                                                stroke="currentColor"
                                                                                                viewBox="0 0 52 52"
                                                                                        >
                                                                                                <polygon
                                                                                                        strokeWidth="4"
                                                                                                        strokeLinecap="round"
                                                                                                        strokeLinejoin="round"
                                                                                                        fill="none"
                                                                                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                                                                                ></polygon>
                                                                                        </svg>
                                                                                </span>
                                                                                Fonctionnalités
                                                                        </li>
                                                                </ul>
                                                        </div>
                                                </div>
                                                <div className="flex flex-col sm:flex-row">
                                                        <div className="sm:mr-4">
                                                                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-green-50">
                                                                        <svg
                                                                                className="w-12 h-12 text-green-400"
                                                                                stroke="currentColor"
                                                                                viewBox="0 0 52 52"
                                                                        >
                                                                                <polygon
                                                                                        strokeWidth="3"
                                                                                        strokeLinecap="round"
                                                                                        strokeLinejoin="round"
                                                                                        fill="none"
                                                                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                                                                ></polygon>
                                                                        </svg>
                                                                </div>
                                                        </div>
                                                        <div>
                                                                <h6 className="mb-2 font-semibold leading-5">
                                                                        Support technique et maintenance :
                                                                </h6>
                                                                <p className="mb-3 text-sm text-gray-900">
                                                                        Nous veillons à ce que votre site reste sécurisé, performant
                                                                        et à jour. Profitez de mises à jour régulières, de correctifs
                                                                        de sécurité, et d'une assistance rapide en cas de problème,
                                                                        pour que vous puissiez vous concentrer sur votre entreprise en
                                                                        toute tranquillité.
                                                                </p>
                                                                <ul className="mb-4 -ml-1 space-y-2">
                                                                        <li className="flex items-start">
                                                                                <span className="mr-1">
                                                                                        <svg
                                                                                                className="w-5 h-5 mt-px text-green-400"
                                                                                                stroke="currentColor"
                                                                                                viewBox="0 0 52 52"
                                                                                        >
                                                                                                <polygon
                                                                                                        strokeWidth="4"
                                                                                                        strokeLinecap="round"
                                                                                                        strokeLinejoin="round"
                                                                                                        fill="none"
                                                                                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                                                                                ></polygon>
                                                                                        </svg>
                                                                                </span>
                                                                                Mise à jour
                                                                        </li>
                                                                        <li className="flex items-start">
                                                                                <span className="mr-1">
                                                                                        <svg
                                                                                                className="w-5 h-5 mt-px text-green-400"
                                                                                                stroke="currentColor"
                                                                                                viewBox="0 0 52 52"
                                                                                        >
                                                                                                <polygon
                                                                                                        strokeWidth="4"
                                                                                                        strokeLinecap="round"
                                                                                                        strokeLinejoin="round"
                                                                                                        fill="none"
                                                                                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                                                                                ></polygon>
                                                                                        </svg>
                                                                                </span>
                                                                                Dépannage en cas de problème
                                                                        </li>
                                                                        <li className="flex items-start">
                                                                                <span className="mr-1">
                                                                                        <svg
                                                                                                className="w-5 h-5 mt-px text-green-400"
                                                                                                stroke="currentColor"
                                                                                                viewBox="0 0 52 52"
                                                                                        >
                                                                                                <polygon
                                                                                                        strokeWidth="4"
                                                                                                        strokeLinecap="round"
                                                                                                        strokeLinejoin="round"
                                                                                                        fill="none"
                                                                                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                                                                                ></polygon>
                                                                                        </svg>
                                                                                </span>
                                                                                Assistance
                                                                        </li>
                                                                </ul>
                                                        </div>
                                                </div>
                                                <div className="flex flex-col sm:flex-row">
                                                        <div className="sm:mr-4">
                                                                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-green-50">
                                                                        <svg
                                                                                className="w-12 h-12 text-green-400"
                                                                                stroke="currentColor"
                                                                                viewBox="0 0 52 52"
                                                                        >
                                                                                <polygon
                                                                                        strokeWidth="3"
                                                                                        strokeLinecap="round"
                                                                                        strokeLinejoin="round"
                                                                                        fill="none"
                                                                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                                                                ></polygon>
                                                                        </svg>
                                                                </div>
                                                        </div>
                                                        <div>
                                                                <h6 className="mb-2 font-semibold leading-5">
                                                                        Rédaction de contenu et copywriting :
                                                                </h6>
                                                                <p className="mb-3 text-sm text-gray-900">
                                                                        Notre service de rédaction de contenu et de copywriting offre
                                                                        un contenu de haute qualité et captivant qui captive votre
                                                                        public et génère des conversions.
                                                                </p>
                                                                <ul className="mb-4 -ml-1 space-y-2">
                                                                        <li className="flex items-start">
                                                                                <span className="mr-1">
                                                                                        <svg
                                                                                                className="w-5 h-5 mt-px text-green-400"
                                                                                                stroke="currentColor"
                                                                                                viewBox="0 0 52 52"
                                                                                        >
                                                                                                <polygon
                                                                                                        strokeWidth="4"
                                                                                                        strokeLinecap="round"
                                                                                                        strokeLinejoin="round"
                                                                                                        fill="none"
                                                                                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                                                                                ></polygon>
                                                                                        </svg>
                                                                                </span>
                                                                                Création de contenu
                                                                        </li>
                                                                        <li className="flex items-start">
                                                                                <span className="mr-1">
                                                                                        <svg
                                                                                                className="w-5 h-5 mt-px text-green-400"
                                                                                                stroke="currentColor"
                                                                                                viewBox="0 0 52 52"
                                                                                        >
                                                                                                <polygon
                                                                                                        strokeWidth="4"
                                                                                                        strokeLinecap="round"
                                                                                                        strokeLinejoin="round"
                                                                                                        fill="none"
                                                                                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                                                                                ></polygon>
                                                                                        </svg>
                                                                                </span>
                                                                                SEO
                                                                        </li>
                                                                        <li className="flex items-start">
                                                                                <span className="mr-1">
                                                                                        <svg
                                                                                                className="w-5 h-5 mt-px text-green-400"
                                                                                                stroke="currentColor"
                                                                                                viewBox="0 0 52 52"
                                                                                        >
                                                                                                <polygon
                                                                                                        strokeWidth="4"
                                                                                                        strokeLinecap="round"
                                                                                                        strokeLinejoin="round"
                                                                                                        fill="none"
                                                                                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                                                                                ></polygon>
                                                                                        </svg>
                                                                                </span>
                                                                                Référence
                                                                        </li>
                                                                </ul>
                                                        </div>
                                                </div>
                                        </div>

                                        <div className="flex flex-col items-center justify-center gap-8 md:flex-row mb-8">
                                                <Link 
                                                        className="inline-block w-auto text-center min-w-[200px] px-6 py-4 text-white transition-all rounded-md shadow-xl sm:w-auto bg-gradient-to-r from-blue-600 to-blue-500 hover:bg-gradient-to-b dark:shadow-blue-900 shadow-blue-200 hover:shadow-2xl hover:shadow-blue-400 hover:-tranneutral-y-px"
                                                        to="/FormContact"
                                                >
                                                        Contactez-moi
                                                </Link>
                                                <Link
                                                        className="inline-block w-auto text-center min-w-[200px] px-6 py-4 text-white transition-all bg-gray-700 dark:bg-white dark:text-gray-800 rounded-md shadow-xl sm:w-auto hover:bg-gray-900 hover:text-white shadow-neutral-300 dark:shadow-neutral-700 hover:shadow-2xl hover:shadow-neutral-400 hover:-tranneutral-y-px"
                                                        to="/Projets"
                                                >
                                                        Mes réalisations
                                                </Link>
                                        </div>
                                </div>
                        </div>
                </div>
        );
}
export default Home;