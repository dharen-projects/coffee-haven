import React, { useState } from "react";
import "../../Styles/MenuPages/PastriesDesserts.css"; // Import the CSS for this component
import pastriesDessertsData from "../../Data/pastriesDessertsData"; // Import coffee data

const PastriesDesserts = () => {
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
    <div className="pastriesdesserts-container">
      {/* <h2>Pastries and Desserts Menu</h2> */}
      <div className="pastriesdesserts-menu">
        {pastriesDessertsData.map((pastriesdesserts) => (
          <div key={pastriesdesserts.id} className="pastriesdesserts-card">
            <div className="pastriesdesserts-card-img-container">
              <img
                src={pastriesdesserts.image}
                alt={pastriesdesserts.name}
                className="pastriesdesserts-card-img"
              />
              <span
                className="info-icon"
                onClick={() => toggleDescription(pastriesdesserts.id)}
              >
                <span className="material-icons">info</span>
              </span>
            </div>
            <h3 className="pastriesdesserts-card-title">
              {pastriesdesserts.name}
            </h3>
            <div className="pastriesdesserts-card-price-favorite">
              <span className="pastriesdesserts-card-price">
                &#8369;{pastriesdesserts.price}
              </span>
              <span
                className={`material-icons heart-icon ${
                  favorites[pastriesdesserts.id] ? "favorited" : ""
                }`}
                onClick={() => toggleFavorite(pastriesdesserts.id)}
              >
                {favorites[pastriesdesserts.id]
                  ? "favorite"
                  : "favorite_border"}
              </span>
            </div>
            {activeDescription === pastriesdesserts.id && (
              <div className="pastriesdesserts-card-description-container">
                <p className="pastriesdesserts-card-description">
                  {pastriesdesserts.description}
                </p>
              </div>
            )}
            {/* Display "New" and "Best Seller" */}
            <div className="pastriesdesserts-card-labels">
              {pastriesdesserts.new && (
                <span className="pastriesdesserts-label new-label">New</span>
              )}
              {pastriesdesserts.best && (
                <span className="pastriesdesserts-label best-label">
                  Best Seller
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PastriesDesserts;
