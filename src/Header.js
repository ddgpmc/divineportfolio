import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink from react-router-dom
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false); // State to control the hamburger menu
  const [scrolled, setScrolled] = useState(false); // State to detect scrolling

  // Toggle menu open/close
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Add scroll event listener to detect when the user scrolls
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
      </div>

      <nav className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        <NavLink
          exact="true"
          to="/"
          className="nav-link"
          activeclassname="active" // Apply the 'active' class when route matches
          onClick={() => setMenuOpen(false)} // Close menu when link is clicked
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className="nav-link"
          activeclassname="active" // Apply the 'active' class when route matches
          onClick={() => setMenuOpen(false)}
        >
          About Me
        </NavLink>
        <NavLink
          to="/projects"
          className="nav-link"
          activeclassname="active"
          onClick={() => setMenuOpen(false)}
        >
          My Projects
        </NavLink>
        <NavLink
          to="/contact"
          className="nav-link"
          activeclassname="active"
          onClick={() => setMenuOpen(false)}
        >
          Contact Me
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
