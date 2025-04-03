import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css"; // Still need the CSS file content

// Assume listOfOptions = ['About', 'Projects', 'Contact']
// Assume section IDs match these names (e.g., <section id="About">...</section>)

const Navbar = ({ listOfOptions = [] }) => {
  // Default prop value is good practice
  console.log(listOfOptions);
  return (
    <nav className="navbarTop">
      <Link to="/" className="navbarBrand">
        PSR
      </Link>

      <ul className="navbarInside">
        {listOfOptions.map((option) => {
          const optionLower = option.toLowerCase();
          const path = optionLower === "home" ? "/" : `/${optionLower}`;

          return (
            <li key={option} className="navbarItem">
              <Link to={path} className="navbarLink">
                {option}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
