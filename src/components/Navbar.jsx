import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [active, setActive] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSetActive = (to) => setActive(to);

  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-900 text-white shadow-lg z-50">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <img
            src="https://zidio.in/assets/images/home-1/zidio%20(1).png"
            alt="Logo"
            className="h-8 inline-block mr-2 filter brightness-0 invert"
          />
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Navbar Links (Desktop) */}
        <div className="space-x-6 hidden md:flex">
          {['home', 'projects', 'testimonials', 'achievements', 'team', 'videos', 'contact'].map((section) => (
            <Link
              key={section}
              to={section}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={`cursor-pointer capitalize ${
                active === section ? 'border-b-2 border-white' : ''
              }`}
              onSetActive={handleSetActive}
            >
              {section}
            </Link>
          ))}
        </div>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div
        className={`md:hidden bg-blue-900 text-white absolute top-16 left-0 w-full transition-all duration-300 ${
          menuOpen ? 'block' : 'hidden'
        }`}
      >
        <div className="space-y-4 py-4 px-6">
          {['home', 'projects', 'testimonials', 'achievements', 'team', 'videos', 'contact'].map((section) => (
            <Link
              key={section}
              to={section}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={`cursor-pointer capitalize block ${
                active === section ? 'border-b-2 border-white' : ''
              }`}
              onSetActive={handleSetActive}
            >
              {section}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
