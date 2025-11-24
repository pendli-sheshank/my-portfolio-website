// src/components/SmartSearch.jsx
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { HiSearch } from "react-icons/hi";
import { AIContext } from "../context/AIContext";

// Simple data source for search (could be passed as prop or imported)
const SEARCH_DATA = [
  { type: "Page", title: "Home", path: "/", keywords: "home, main, intro" },
  { type: "Page", title: "About", path: "/about", keywords: "about, bio, experience" },
  { type: "Page", title: "Projects", path: "/projects", keywords: "projects, code, work, portfolio" },
  { type: "Page", title: "Contact", path: "/contact", keywords: "contact, email, message" },
  { type: "Project", title: "Policy Management Microservices", path: "/projects", keywords: "java, spring boot, kafka, aws, microservices" },
  { type: "Project", title: "CI/CD Pipeline", path: "/projects", keywords: "jenkins, ci/cd, testing, automation" },
  { type: "Project", title: "Angular Admin Portal", path: "/projects", keywords: "angular, frontend, admin, ui" },
];

const SmartSearch = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { setSearchQuery } = useContext(AIContext);

  const handleSearch = (e) => {
    const q = e.target.value.toLowerCase();
    setQuery(q);
    setSearchQuery(q);

    if (q.length > 1) {
      const filtered = SEARCH_DATA.filter(item =>
        item.title.toLowerCase().includes(q) || item.keywords.includes(q)
      );
      setResults(filtered);
      setIsOpen(true);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  };

  const handleSelect = (item) => {
    navigate(item.path);
    setQuery("");
    setResults([]);
    setIsOpen(false);
  };

  return (
    <div className="relative mx-4 w-full max-w-xs hidden md:block">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <HiSearch className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:bg-white focus:border-brand-primary focus:ring-1 focus:ring-brand-primary sm:text-sm transition-colors"
          placeholder="Smart search..."
          value={query}
          onChange={handleSearch}
          onBlur={() => setTimeout(() => setIsOpen(false), 200)}
          onFocus={() => query.length > 1 && setIsOpen(true)}
        />
      </div>

      {isOpen && results.length > 0 && (
        <div className="absolute mt-1 w-full bg-white shadow-lg rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto max-h-60 z-50">
            <div className="px-3 py-1 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Best Matches
            </div>
          {results.map((result, index) => (
            <div
              key={index}
              onClick={() => handleSelect(result)}
              className="cursor-pointer select-none relative py-2 pl-3 pr-9 hover:bg-gray-100"
            >
              <div className="flex items-center whitespace-nowrap">
                <span className={`flex-shrink-0 h-2 w-2 rounded-full mr-2 ${result.type === 'Page' ? 'bg-green-400' : 'bg-brand-primary'}`}></span>
                <span className="font-medium text-gray-900 block truncate">
                  {result.title}
                </span>
                <span className="ml-2 text-gray-400 text-xs flex-shrink-0">
                    in {result.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SmartSearch;
