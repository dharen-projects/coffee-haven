import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import coffeeData from "../../Data/coffeeData";
import "../../Styles/HomePages/CoffeeBestSeller.css";

const CoffeeBestSeller = () => {
  const bestSellers = coffeeData.filter((coffee) =>
    [1002, 1004, 1006, 1013].includes(coffee.id)
  );

  return (
    <div className="coffee-best-seller">
      <div className="header">
        <h2 className="title">Coffee</h2>
        <Link to="/menu" className="view-more">
          View More
        </Link>
      </div>
      <div className="coffee-list">
        {bestSellers.map((coffee) => (
          <div className="coffee-item" key={coffee.id}>
            <div className="image-container">
              <img
                src={coffee.image}
                alt={coffee.name}
                className="coffee-image"
              />
            </div>
            <h3 className="coffee-name">{coffee.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoffeeBestSeller;
