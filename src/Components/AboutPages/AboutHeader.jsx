import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "../../Styles/AboutPages/AboutHeader.css";

const MenuHeader = () => {
  return (
    <div className="about-header">
      <div className="left-text">
        <span>We Brew</span>
        <span>THE BEST COFFEE</span>
        <button>
          Learn More About Us
          <FontAwesomeIcon icon={faArrowRight} className="icon" />
        </button>
      </div>
      <img
        src="./Images/AboutPage/Header/coffee-beans.png"
        alt="Coffee Beans Image"
        className="coffee-beans-image"
      />
      <img
        src="./Images/AboutPage/Header/header-overlay-coffee.png"
        alt="Coffee Beans Image"
        className="header-overlay-coffee"
      />
      <img
        src="./Images/AboutPage/Header/coffee-beans2.png"
        alt="Coffee Beans Image"
        className="header-overlay-beans"
      />
    </div>
  );
};

export default MenuHeader;
