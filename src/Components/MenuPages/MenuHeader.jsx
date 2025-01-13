import React from "react";
import "../../Styles/MenuPages/MenuHeader.css";

const MenuHeader = () => {
  return (
    <div className="menu-header">
      <div className="circle-outline-right"></div>
      <div className="circle-outline-left"></div>
      <h1 className="menu-header-text">Fresh Brews. Great Vibes.</h1>
      <button className="menu-header-button">Order Now</button>
      <img
        src="./Images/MenuPages/Header/coffee-header-item.png"
        alt="Coffee Image"
        className="menu-header-image"
      />
      <img
        src="./Images/MenuPages/Header/coffee-header-mint.png"
        alt="Mint Image"
        className="menu-header-mint"
      />
    </div>
  );
};

export default MenuHeader;
