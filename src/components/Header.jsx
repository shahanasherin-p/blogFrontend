import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-white fixed w-full top-0 z-50 shadow-lg transition duration-300 ease-in-out">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold tracking-wide hover:text-yellow-300 transition duration-300 ease-in-out">Mindful Musings</Link>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-yellow-300 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
        <div className={`md:flex items-center space-x-6 ${isOpen ? 'block' : 'hidden'}`}>
          <Link to="/" className="hover:text-yellow-300 transition duration-300 ease-in-out relative">
            Home
            <span className="absolute left-0 -bottom-1 w-full h-1 bg-yellow-300 transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100" />
          </Link>
          <Link to="/profile" className="hover:text-yellow-300 transition duration-300 ease-in-out relative">
            My Profile
            <span className="absolute left-0 -bottom-1 w-full h-1 bg-yellow-300 transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
