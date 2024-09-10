import React from 'react';

const Navbar = () => {
    return (
        <nav>
            <div className="container mx-auto divide-y divide-blue-200">
                <div className="flex justify-between items-center py-4">
                    <div>
                        <a href="#" className="font-bold text-xl">OsWeb</a>
                    </div>
                    <div>
                        <a href="#" className="px-4">Accueil</a>
                        <a href="#" className="px-4">Mes services</a>
                        <a href="#" className="px-4">Mes Réalisations</a>
                        <a href="#" className="px-4">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;