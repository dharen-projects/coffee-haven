import React from "react";
import { Link } from "react-router-dom";
import "../../Styles/HomePages/AboutInfo.css";

const AboutInfo = () => {
  return (
    <div className="about-info">
      <div className="content">
        <h2>The Perfect Brew Awaits</h2>
        <p>Savor the artistry of coffee, perfected for every taste.</p>
        <p>
          From rich, bold flavors to smooth, aromatic blends, every sip is
          designed to awaken your senses and elevate your coffee experience.
        </p>
        <h1>COFFEE HAVEN</h1>
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

export default AboutInfo;
