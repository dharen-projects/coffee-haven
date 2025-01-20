import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareGithub,
  faLinkedin,
  faSquareFacebook,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhoneVolume,
  faEnvelopeOpenText,
} from "@fortawesome/free-solid-svg-icons";
import "../../Styles/ContactPages/Download.css";

const Download = () => {
  return (
    <div className="download-container">
      <h1>Creative Solutions, Expert Results—Let’s Connect!</h1>
      <p>
        Looking for a reliable and dedicated professional to bring your ideas to
        life? I’m here to help! I ensure high-quality results tailored to your
        needs. Let’s collaborate and make your vision a reality.
      </p>
      <div className="download-icons">
        <a
          href="https://github.com/dharen-projects"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faSquareGithub} />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faSquareFacebook} />
        </a>
      </div>
      <div className="download-info">
        <h3>Or connect through</h3>
        <div className="info">
          <FontAwesomeIcon icon={faPhoneVolume} /> +639933800631
        </div>
        <div>
          <FontAwesomeIcon icon={faEnvelopeOpenText} />{" "}
          dharenrojanaguirantagalicud@gmail.com
        </div>
      </div>
      <img
        src="./Images/AboutPage/Header/header-overlay-coffee.png"
        alt="Coffee Beans Image"
        className="contact-overlay-coffee"
      />
      <img
        src="./Images/AboutPage/Header/header-overlay-coffee.png"
        alt="Coffee Beans Image"
        className="flipped-contact-overlay-coffee"
      />
    </div>
  );
};

export default Download;
