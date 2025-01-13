import React, { useState } from "react";
import coffeeData from "../../Data/coffeeData";
import coldDrinksData from "../../Data/coldDrinksData";
import pastriesDessertsData from "../../Data/pastriesDessertsData";
import "../../Styles/MenuPages/BestSellerMenu.css";

const BestSellerMenu = () => {
  // Combine all data sources into one array
  const allData = [...coffeeData, ...coldDrinksData, ...pastriesDessertsData];

  // Filter out the items that have 'new: true'
  const bestItems = allData.filter((item) => item.best === true);

  // State for handling description toggling and favorites
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
    <div className="best-container">
      {/* <h2>Best Seller Menu</h2> */}

      {/* Check if there are new items available */}
      {bestItems.length > 0 ? (
        <div className="best-menu">
          {bestItems.map((item) => (
            <div key={item.id} className="best-card">
              <div className="best-card-img-container">
                <img
                  src={item.image}
                  alt={item.name}
                  className="best-card-img"
                />
                <span
                  className="info-icon"
                  onClick={() => toggleDescription(item.id)}
                >
                  <span className="material-icons">info</span>
                </span>
              </div>
              <h3 className="best-card-title">{item.name}</h3>
              <div className="best-card-price-favorite">
                <span className="best-card-price">${item.price}</span>
                <span
                  className={`material-icons heart-icon ${
                    favorites[item.id] ? "favorited" : ""
                  }`}
                  onClick={() => toggleFavorite(item.id)}
                >
                  {favorites[item.id] ? "favorite" : "favorite_border"}
                </span>
              </div>
              {activeDescription === item.id && (
                <div className="best-card-description-container">
                  <p className="best-card-description">{item.description}</p>
                </div>
              )}
              <div className="best-card-labels">
                {item.best && (
                  <span className="best-label new-label">Best Seller</span>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Check out our best sellers later!</p>
      )}
    </div>
  );
};

export default BestSellerMenu;
