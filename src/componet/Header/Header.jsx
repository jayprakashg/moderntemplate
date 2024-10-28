import React from 'react';

function Header() {
  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          MyApp
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-4">
          <a href="#home" className="hover:text-blue-300">Home</a>
          <a href="#about" className="hover:text-blue-300">About</a>
          <a href="#services" className="hover:text-blue-300">Services</a>
          <a href="#contact" className="hover:text-blue-300">Contact</a>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button className="md:hidden text-white focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Header;
