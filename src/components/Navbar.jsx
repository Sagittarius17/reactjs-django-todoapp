import React from 'react';
import { Link } from 'react-router-dom';
import { HiBars3 } from "react-icons/hi2";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-xl font-bold text-gray-800">Your Logo</Link>
          </div>
          <div className="-mr-2 flex items-center md:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open main menu</span>
              <HiBars3 className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center">
              <Link to="/" className="mr-4 text-gray-800 hover:text-gray-700">Home</Link>
              <Link to="/about" className="mr-4 text-gray-800 hover:text-gray-700">About</Link>
              <Link to="/contact" className="text-gray-800 hover:text-gray-700">Contact</Link>
            </div>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-gray-700 hover:bg-gray-100">Home</Link>
          <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-gray-700 hover:bg-gray-100">About</Link>
          <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-gray-700 hover:bg-gray-100">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
