import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or brand name */}
        <Link to="/" className="text-zinc-600 text-2xl font-bold">MonLogo</Link>

        {/* Hamburger button for mobile view */}
        <button onClick={toggleMenu} className="md:hidden text-white focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

        {/* Navigation links for desktop */}
        <div className="hidden md:flex space-x-6">
          <Link to="/Home" className="nav-link text-black hover:text-gray-200">Home</Link>
          <Link to="/Presence" className="nav-link text-black hover:text-gray-200">Presence</Link>
          <Link to="/Formule" className="nav-link text-black hover:text-gray-200">Formule</Link>
          <Link to="/Projets" className="nav-link text-black hover:text-gray-200">Projects</Link>
          <Link to="/FormContact" className="nav-link text-black hover:text-gray-200">Contact</Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden flex flex-col space-y-4 mt-4`}>
        <Link to="/Home" className="nav-link text-white hover:text-gray-200">Home</Link>
        <Link to="/Presence" className="nav-link text-white hover:text-gray-200">Presence</Link>
        <Link to="/FormContact" className="nav-link text-white hover:text-gray-200">Contact</Link>
        <Link to="/Projets" className="nav-link text-white hover:text-gray-200">Projects</Link>
        <Link to="/Formule" className="nav-link text-white hover:text-gray-200">Formule</Link>
      </div>
    </nav>
  );
};

export default Navbar;
