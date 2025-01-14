import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "../../Styles/HomePages/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-row">
        {/* First Column */}
        <div className="footer-column-haven">
          <h3 className="footer-title">COFFEE HAVEN</h3>
          <p className="footer-description">
            Experience the finest coffee in town. Your daily dose of caffeine,
            warmth, relaxation, and unforgettable moments brewed to perfection.
          </p>
        </div>
        {/* Second Column */}
        <div className="footer-column footer-center">
          <h3 className="footer-title">SHOP INFO</h3>
          <ul className="footer-links">
            <li>
              <a href="#partners">Partners</a>
            </li>
            <li>
              <a href="#careers">Careers</a>
            </li>
            <li>
              <a href="#shop-info">Shop Information</a>
            </li>
          </ul>
        </div>
        {/* Third Column */}
        <div className="footer-column footer-center">
          <h3 className="footer-title">SERVICES</h3>
          <ul className="footer-links">
            <li>
              <a href="#deliver">Deliver</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
        </div>
        {/* Fourth Column */}
        <div className="footer-column footer-center">
          <h3 className="footer-title">HELP</h3>
          <ul className="footer-links">
            <li>
              <a href="#newsletter">Newsletter</a>
            </li>
            <li>
              <a href="#general">General</a>
            </li>
            <li>
              <a href="#product">Product</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-row second">
        {/* First Column - Social Media */}
        <div className="footer-column">
          <div className="social-icons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
          </div>
        </div>
        {/* Second Column - Message Bar */}
        <div className="footer-column-second">
          <form className="message-form">
            <textarea
              placeholder="Type your message here..."
              className="message-input"
            ></textarea>
            <button type="button" className="send-button">
              Send
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
