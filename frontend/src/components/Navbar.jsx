import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex-shrink-0">
            <Link to="/" className="text-white text-2xl font-bold">
              SSS Events
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
              <Link to="/about" className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-sm font-medium">
                About
              </Link>
              <Link to="/services" className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-sm font-medium">
                Services
              </Link>
              <Link to="/contact" className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;