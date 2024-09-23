import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white h-fit">
      <div className="container px-4 mx-auto">
        <nav className="flex justify-center py-4">
          <a href="/Home" className="mx-3 text-lg text-gray-500 hover:text-gray-600 font-medium">Home</a>
          <a href="/Presence" className="mx-3 text-lg text-gray-500 hover:text-gray-600 font-medium">Présence en ligne</a>
          <a href="/Formule" className="mx-3 text-lg text-gray-500 hover:text-gray-600 font-medium">Formules</a>
          <a href="/Projets" className="mx-3 text-lg text-gray-500 hover:text-gray-600 font-medium">Projets</a>
          <a href="/FormContact" className="mx-3 text-lg text-gray-500 hover:text-gray-600 font-medium">Contact</a>
          <a href="/about" className="mx-3 text-lg text-gray-500 hover:text-gray-600 font-medium">A propos de moi</a>
        </nav>
        
      </div>
      <div className="border-b border-gray-100"></div>
      <div className="container px-4 mx-auto">
        <p className="py-10 md:pb-20 text-md text-gray-400 font-medium text-center">
          © 2023 Osmose factory.com. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;