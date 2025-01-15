import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import coldDrinksData from "../../Data/coldDrinksData";
import "../../Styles/HomePages/ColdDrinksBestSeller.css";

const ColdDrinksBestSeller = () => {
  const bestSellers = coldDrinksData.filter((colddrinks) =>
    [2004, 2007, 2008, 2011].includes(colddrinks.id)
  );

  return (
    <div className="colddrinks-best-seller">
      <div className="header">
        <h2 className="title">Cold Drinks</h2>
        <Link to="/menu" className="view-more">
          View More
        </Link>
      </div>
      <div className="colddrinks-list">
        {bestSellers.map((colddrinks) => (
          <div className="colddrinks-item" key={colddrinks.id}>
            <div className="image-container">
              <img
                src={colddrinks.image}
                alt={colddrinks.name}
                className="coffee-image"
              />
            </div>
            <h3 className="colddrinks-name">{colddrinks.name}</h3>
          </div>
        ))}
      </div>
      <Link to="/menu" className="bottom-view-more">
        <button className="button-view-more">View More</button>
      </Link>
    </div>
  );
};

export default ColdDrinksBestSeller;
