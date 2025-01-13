import React, { useState } from "react";
import "../../Styles/MenuPages/AllMenu.css"; // Import the CSS for this component
import coffeeData from "../../Data/coffeeData";
import coldDrinksData from "../../Data/coldDrinksData";
import pastriesDessertsData from "../../Data/pastriesDessertsData";

const Coffee = () => {
  // Combine all data sources into one array
  const allData = [...coffeeData, ...coldDrinksData, ...pastriesDessertsData];

  const [activeDescription, setActiveDescription] = useState(null);
  const [favorites, setFavorites] = useState({});

  const toggleDescription = (id) => {
    setActiveDescription((prev) => (prev === id ? null : id));
  };

  const toggleFavorite = (id) => {
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [id]: !prevFavorites[id],
    }));
  };

  return (
    <div className="all-container">
      {/* <h2>Menu</h2> */}
      <div className="all-menu">
        {allData.map((allmenu) => (
          <div key={allmenu.id} className="all-card">
            <div className="all-card-img-container">
              <img
                src={allmenu.image}
                alt={allmenu.name}
                className="all-card-img"
              />
              <span
                className="info-icon"
                onClick={() => toggleDescription(allmenu.id)}
              >
                <span className="material-icons">info</span>
              </span>
            </div>
            <h3 className="all-card-title">{allmenu.name}</h3>
            <div className="all-card-price-favorite">
              <span className="all-card-price">&#8369;{allmenu.price}</span>
              <span
                className={`material-icons heart-icon ${
                  favorites[allmenu.id] ? "favorited" : ""
                }`}
                onClick={() => toggleFavorite(allmenu.id)}
              >
                {favorites[allmenu.id] ? "favorite" : "favorite_border"}
              </span>
            </div>
            {activeDescription === allmenu.id && (
              <div className="all-card-description-container">
                <p className="all-card-description">{allmenu.description}</p>
              </div>
            )}
            {/* Display "New" and "Best Seller" */}
            <div className="all-card-labels">
              {allmenu.new && <span className="all-label new-label">New</span>}
              {allmenu.best && (
                <span className="all-label best-label">Best Seller</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Coffee;
