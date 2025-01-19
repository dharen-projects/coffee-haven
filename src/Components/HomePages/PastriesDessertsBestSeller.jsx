import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import pastriesDessertsData from "../../Data/pastriesDessertsData";
import "../../Styles/HomePages/PastriesDessertsBestSeller.css";

const PastriesDessertsBestSeller = () => {
  const bestSellers = pastriesDessertsData.filter((pastriesdesserts) =>
    [3002, 3004, 3005, 3008].includes(pastriesdesserts.id)
  );

  return (
    <div className="pastriesdesserts-best-seller">
      <div className="header">
        <h2 className="title">Pastries and Desserts</h2>
        <Link to="/menu" className="view-more">
          View More
        </Link>
      </div>
      <div className="pastriesdesserts-list">
        {bestSellers.map((pastriesdesserts) => (
          <div className="pastriesdesserts-item" key={pastriesdesserts.id}>
            <div className="image-container">
              <img
                src={pastriesdesserts.image}
                alt={pastriesdesserts.name}
                className="home-pastriesdesserts-image"
              />
            </div>
            <h3 className="pastriesdesserts-name">{pastriesdesserts.name}</h3>
          </div>
        ))}
      </div>
      <Link to="/menu" className="bottom-view-more">
        <button className="button-view-more">View More</button>
      </Link>
    </div>
  );
};

export default PastriesDessertsBestSeller;
