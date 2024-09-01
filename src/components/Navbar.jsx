import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../assets/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      <img
        src='https://alphaafin.com.au/wp-content/uploads/2024/08/2-e1723186410313.png' // Use the imported Logo if it should be used
        alt="Logo"
        className="logo"
      />

      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <ul>
        <Link to="/"><li>Home</li></Link>
        <Link to="/about-us"><li>About Us</li></Link>
          <li> Services</li>
          <li> FAQ's</li>
          <li>
            <span>CALL US ANYTIME</span>
          </li>
        </ul>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        &#9776;
      </div>
    </div>
  );
}

export default Navbar;
