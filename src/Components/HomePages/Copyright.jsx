import React from "react";
import "../../Styles/HomePages/Copyright.css";

const Copyright = () => {
  return (
    <div className="copyright-container">
      <div className="copyright-links">
        <a href="#home" className="copyright-link">
          Home
        </a>
        <a href="#terms" className="copyright-link">
          Terms of Services
        </a>
        <a href="#legal" className="copyright-link">
          Legal
        </a>
        <a href="#privacy" className="copyright-link">
          Privacy
        </a>
      </div>
      <div className="copyright-text">
        &copy;2024 Coffee Haven All rights reserved.
      </div>
    </div>
  );
};

export default Copyright;
