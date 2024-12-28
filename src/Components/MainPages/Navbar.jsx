import React from "react";
import { Link } from "react-router-dom"; // Use Link for navigation
import "../../Styles/MainPages/Navbar.css"; // Import the CSS file
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img
          src="Images/Logo/coffee-haven-logo.png"
          alt="Coffee Haven"
          className="logo"
        />
      </div>
      <ul className="navbar-links">
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
    </nav>
  );
};

export default Navbar;
