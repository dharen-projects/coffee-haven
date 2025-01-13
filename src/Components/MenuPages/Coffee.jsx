import React, { useState } from "react";
import "../../Styles/MenuPages/Coffee.css"; // Import the CSS for this component
import coffeeData from "../../Data/coffeeData"; // Import coffee data

const Coffee = () => {
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
    <div className="coffee-container">
      {/* <h2>Coffee Menu</h2> */}
      <div className="coffee-menu">
        {coffeeData.map((coffee) => (
          <div key={coffee.id} className="coffee-card">
            <div className="coffee-card-img-container">
              <img
                src={coffee.image}
                alt={coffee.name}
                className="coffee-card-img"
              />
              <span
                className="info-icon"
                onClick={() => toggleDescription(coffee.id)}
              >
                <span className="material-icons">info</span>
              </span>
            </div>
            <h3 className="coffee-card-title">{coffee.name}</h3>
            <div className="coffee-card-price-favorite">
              <span className="coffee-card-price">&#8369;{coffee.price}</span>
              <span
                className={`material-icons heart-icon ${
                  favorites[coffee.id] ? "favorited" : ""
                }`}
                onClick={() => toggleFavorite(coffee.id)}
              >
                {favorites[coffee.id] ? "favorite" : "favorite_border"}
              </span>
            </div>
            {activeDescription === coffee.id && (
              <div className="coffee-card-description-container">
                <p className="coffee-card-description">{coffee.description}</p>
              </div>
            )}
            {/* Display "New" and "Best Seller" */}
            <div className="coffee-card-labels">
              {coffee.new && (
                <span className="coffee-label new-label">New</span>
              )}
              {coffee.best && (
                <span className="coffee-label best-label">Best Seller</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Coffee;
