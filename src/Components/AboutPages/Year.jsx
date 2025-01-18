import React from "react";
import { Link } from "react-router-dom";
import "../../Styles/AboutPages/Year.css";

const Year = () => {
  return (
    <div className="year-content">
      <div className="year-text-content">
        <h3>Serving Since 2000</h3>
        <h5>
          Serving delightful coffee experiences since 2000, blending tradition
          and quality to create memorable moments for coffee lovers across
          generations.
        </h5>
        <div className="year-buttons">
          <Link to="/contact" className="yr products">
            Contacts
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Year;
