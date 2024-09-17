import React, { useState } from 'react';

const FormContact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
    };

    return (
        <div className="container h-fit flex flex-row">
            
      
      <form onSubmit={handleSubmit} className="container w-1/2 mx-auto h-fit">
                <div className="container">
                    <h2 className="text-xl font-bold mb-4">Information sur le demandeur</h2>
                    <label htmlFor="firstName" className="block text-gray-700 text-sm font-bold mb-2">Prénom</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <label htmlFor="lastName" className="block text-gray-700 text-sm font-bold mb-2">Nom</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="container mt-4">
                    <h2 className="text-xl font-bold mb-4">Information sur l'entreprise</h2>
                    <label htmlFor="companyName" className="block text-gray-700 text-sm font-bold mb-2">Nom de l'entreprise</label>
                    <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <label htmlFor="industry" className="block text-gray-700 text-sm font-bold mb-2">Secteur d'activité</label>
                    <input
                        type="text"
                        id="industry"
                        name="industry"
                        value={formData.industry}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="container mt-4">
                    <h2 className="text-xl font-bold mb-4">Type de projet</h2>
                    <label htmlFor="projectType" className="block text-gray-700 text-sm font-bold mb-2">Choisissez un type de projet</label>
                    <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    >
                        <option value="siteVitrine">Site Vitrine</option>
                        <option value="landingPage">Landing Page</option>
                        <option value="besoinSpecifique">Besoin Spécifique</option>
                    </select>
                </div>
                <div className="container mt-4">
                    <h2 className="text-xl font-bold mb-4">Formule</h2>
                    <label htmlFor="package" className="block text-gray-700 text-sm font-bold mb-2">Choisissez une formule</label>
                    <select
                        id="package"
                        name="package"
                        value={formData.package}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    >
                        <option value="basic">Basic</option>
                        <option value="standard">Standard</option>
                        <option value="premium">Premium</option>
                    </select>
                </div>
                <div className="container mt-4">
                    <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        rows="4"
                    />
                </div>
                <div className="flex items-center justify-between mt-4">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Envoyer
                    </button>
                </div>
            </form>
        </div>
    );
};

export default FormContact;