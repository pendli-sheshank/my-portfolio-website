import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import SmartSearch from "./SmartSearch";

const Navbar = ({ listOfOptions = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center group">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-primary to-brand-accent group-hover:opacity-80 transition-opacity">
              PSR
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <SmartSearch />
            {listOfOptions.map((option) => {
              const optionLower = option.toLowerCase();
              const path = optionLower === "home" ? "/" : `/${optionLower}`;
              const isActive = location.pathname === path;

              return (
                <Link
                  key={option}
                  to={path}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-brand-primary"
                      : "text-gray-600 hover:text-brand-primary"
                  }`}
                >
                  {option}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-brand-primary focus:outline-none p-2"
            >
              {isOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 animate-fade-in shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {listOfOptions.map((option) => {
              const optionLower = option.toLowerCase();
              const path = optionLower === "home" ? "/" : `/${optionLower}`;
              const isActive = location.pathname === path;

              return (
                <Link
                  key={option}
                  to={path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive
                      ? "text-brand-primary bg-brand-primary/10"
                      : "text-gray-600 hover:text-brand-primary hover:bg-gray-50"
                  }`}
                >
                  {option}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
