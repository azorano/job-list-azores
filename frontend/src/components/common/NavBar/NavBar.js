/*

src/components/common/Navbar.js

*/

// initial Navigation Bar

import React from 'react';
import { IoCloudUploadOutline } from 'react-icons/io5';

const NavBar = ({ logo }) => {
  return (
    <>
      {/* Navigation Component */}
      <nav className="bg-[#10898d]">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            {/* Mobile menu button */}
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-[#E0E7EB] hover:text-[#217b7e] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Logo and Links */}
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0">
                <a href="/" className="text-[#217b7e] text-lg font-semibold">
                  <img src={logo || '//placehold.co/160x40?text=No+logo'} alt="Logo" className="navbar-logo-img" />
                </a>
              </div>
              <div className="hidden sm:flex sm:items-center sm:ml-6">
                <div className="flex space-x-4">
                  <a href="/" className="text-[#032f3c] hover:text-[#E0E7EB] px-3 py-2 rounded-md text-sm font-medium">
                    Home
                  </a>
                  <a href="/about" className="text-[#032f3c] hover:text-[#E0E7EB] px-3 py-2 rounded-md text-sm font-medium">
                    About
                  </a>
                  <a href="/services" className="text-[#032f3c] hover:text-[#E0E7EB] px-3 py-2 rounded-md text-sm font-medium">
                    Services
                  </a>
                  <a href="/contact" className="text-[#032f3c] hover:text-[#E0E7EB] px-3 py-2 rounded-md text-sm font-medium">
                    Contact
                  </a>
                </div>
              </div>
              <a href="/upload" className="ml-auto flex items-center px-4 py-2 rounded-md text-[#032f3c] bg-[#E0E7EB] hover:bg-[#032f3c] hover:text-[#E0E7EB] text-sm font-medium transition-colors duration-200">
                <IoCloudUploadOutline className="mr-2" size={20} />
                Post Job
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="sm:hidden border-t border-[#02474d]" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="/" className="text-[#032f3c] hover:text-[#E0E7EB] block px-3 py-2 rounded-md text-base font-medium">
              Home
            </a>
            <a href="/about" className="text-[#032f3c] hover:text-[#E0E7EB] block px-3 py-2 rounded-md text-base font-medium">
              About
            </a>
            <a href="/services" className="text-[#032f3c] hover:text-[#E0E7EB] block px-3 py-2 rounded-md text-base font-medium">
              Services
            </a>
            <a href="/contact" className="text-[#032f3c] hover:text-[#E0E7EB] block px-3 py-2 rounded-md text-base font-medium">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
