import React, { useState } from "react";
import "../../Styles/MenuPages/MenuBar.css";

const MenuBar = ({ setActiveMenu }) => {
  const choices = [
    "All",
    "Best Seller",
    "New",
    "Coffee",
    "Cold Drinks",
    "Pastries and Desserts",
  ];

  const [activeChoice, setActiveChoice] = useState("All");

  const handleChoiceClick = (choice) => {
    setActiveChoice(choice);
    setActiveMenu(choice); // Notify parent component of the choice
  };

  return (
    <div className="menu-bar">
      {choices.map((choice) => (
        <button
          key={choice}
          className={`menu-bar-choice ${
            activeChoice === choice ? "active" : ""
          }`}
          onClick={() => handleChoiceClick(choice)}
        >
          {choice}
        </button>
      ))}
    </div>
  );
};

export default MenuBar;
