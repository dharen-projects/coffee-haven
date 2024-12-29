import React from "react";
import { Link } from "react-router-dom";
import "../../Styles/HomePages/MainContent.css";

const MainContent = () => {
  return (
    <div className="main-content">
      <div className="text-content">
        <h3>Brewed Fresh, Just For You</h3>
        <h1>COFFEE HAVEN</h1>
        <h5>
          Freshly brewed, rich coffee made from the finest beans for a perfect
          sip every time.
        </h5>
        <div className="buttons">
          <Link to="/menu" className="btn products">
            Products
          </Link>
          <Link to="/about" className="btn learn-more">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
