import React, { useState } from "react";
import "../../Styles/MenuPages/ColdDrinks.css"; // Import the CSS for this component
import coldDrinksData from "../../Data/coldDrinksData"; // Import coffee data

const ColdDrinks = () => {
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
    <div className="colddrinks-container">
      {/* <h2>Cold Drinks Menu</h2> */}
      <div className="colddrinks-menu">
        {coldDrinksData.map((colddrinks) => (
          <div key={colddrinks.id} className="colddrinks-card">
            <div className="colddrinks-card-img-container">
              <img
                src={colddrinks.image}
                alt={colddrinks.name}
                className="colddrinks-card-img"
              />
              <span
                className="info-icon"
                onClick={() => toggleDescription(colddrinks.id)}
              >
                <span className="material-icons">info</span>
              </span>
            </div>
            <h3 className="colddrinks-card-title">{colddrinks.name}</h3>
            <div className="colddrinks-card-price-favorite">
              <span className="colddrinks-card-price">
                &#8369;{colddrinks.price}
              </span>
              <span
                className={`material-icons heart-icon ${
                  favorites[colddrinks.id] ? "favorited" : ""
                }`}
                onClick={() => toggleFavorite(colddrinks.id)}
              >
                {favorites[colddrinks.id] ? "favorite" : "favorite_border"}
              </span>
            </div>
            {activeDescription === colddrinks.id && (
              <div className="colddrinks-card-description-container">
                <p className="colddrinks-card-description">
                  {colddrinks.description}
                </p>
              </div>
            )}
            {/* Display "New" and "Best Seller" */}
            <div className="colddrinks-card-labels">
              {colddrinks.new && (
                <span className="colddrinks-label new-label">New</span>
              )}
              {colddrinks.best && (
                <span className="colddrinks-label best-label">Best Seller</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColdDrinks;
