import React, { useState } from "react";
import coffeeData from "../../Data/coffeeData";
import coldDrinksData from "../../Data/coldDrinksData";
import pastriesDessertsData from "../../Data/pastriesDessertsData";
import "../../Styles/MenuPages/NewMenu.css";

const NewMenu = () => {
  // Combine all data sources into one array
  const allData = [...coffeeData, ...coldDrinksData, ...pastriesDessertsData];

  // Filter out the items that have 'new: true'
  const newItems = allData.filter((item) => item.new === true);

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
    <div className="newmenu-container">
      {/* <h2>New Menu</h2> */}

      {/* Check if there are new items available */}
      {newItems.length > 0 ? (
        <div className="newmenu-menu">
          {newItems.map((item) => (
            <div key={item.id} className="newmenu-card">
              <div className="newmenu-card-img-container">
                <img
                  src={item.image}
                  alt={item.name}
                  className="newmenu-card-img"
                />
                <span
                  className="info-icon"
                  onClick={() => toggleDescription(item.id)}
                >
                  <span className="material-icons">info</span>
                </span>
              </div>
              <h3 className="newmenu-card-title">{item.name}</h3>
              <div className="newmenu-card-price-favorite">
                <span className="newmenu-card-price">${item.price}</span>
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
                <div className="newmenu-card-description-container">
                  <p className="newmenu-card-description">{item.description}</p>
                </div>
              )}
              <div className="newmenu-card-labels">
                {item.new && (
                  <span className="newmenu-label new-label">New</span>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No new items available right now. Check back later!</p>
      )}
    </div>
  );
};

export default NewMenu;
