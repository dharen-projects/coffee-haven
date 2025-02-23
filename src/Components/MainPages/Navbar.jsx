import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../Styles/MainPages/Navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar ${isMenuOpen ? "menu-open" : ""} ${
        isScrolled ? "navbar-hidden" : ""
      }`}
    >
      <div className="navbar-logo">
        <h1>Coffee Haven</h1>
      </div>
      <ul className={`navbar-links ${isMenuOpen ? "show" : ""}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <button className="menu-toggle" onClick={toggleMenu}>
        {isMenuOpen ? "\u00D7" : "\u2261"} {/* Close (×) or Hamburger (≡) */}
      </button>
    </nav>
  );
};

export default Navbar;
