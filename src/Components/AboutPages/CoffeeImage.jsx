import React from "react";
import "../../Styles/AboutPages/CoffeeImage.css";

const MenuHeader = () => {
  return (
    <div className="coffee">
      <div className="coffee-container">
        <img
          src="./Images/AboutPage/CoffeeImage/coffee-image.png"
          alt="Coffee Image"
          className="coffee-image"
        />
      </div>
      <div className="card-container">
        <div className="left-card">
          <div className="icons left">
            <img
              src="./Icons/AboutPage/icon1.png"
              alt="Coffee Icon"
              className="coffee-icon"
            />
            <div>
              <h3>High Quality</h3>
              <p>
                Crafted with premium beans and care, ensuring every cup exceeds
                expectations.
              </p>
            </div>
          </div>
          <div className="icons left">
            <img
              src="./Icons/AboutPage/icon2.png"
              alt="Coffee Beans Icon"
              className="coffee-icon"
            />
            <div>
              <h3>Locally Farmed Beans</h3>
              <p>
                Fresh, sustainable, locally sourced beans that support farmers
                and deliver exceptional flavors.
              </p>
            </div>
          </div>
          <div className="icons left">
            <img
              src="./Icons/AboutPage/icon3.png"
              alt="Donut Icon"
              className="coffee-icon"
            />
            <div>
              <h3>Proper Food Hygiene</h3>
              <p>
                Strict sanitation standards for safe, clean, and healthy food
                and beverage preparation.
              </p>
            </div>
          </div>
        </div>
        <div className="center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          iste ducimus, tempore asperiores cum voluptatibus nostrum suscipit
          nulla unde, ea corrupti, error at eaque sequi! Repellendus ea eaque
          quae eveniet quo omnis, minus nisi velit impedit ipsum, incidunt
          aspernatur temporibus repudiandae eius iusto! Voluptas rem laudantium
          quis laboriosam. Reiciendis, consectetur.
        </div>
        <div className="right-card">
          <div className="icons right">
            <div>
              <h3>Cozy Ambience</h3>
              <p>
                A warm, inviting space with comfortable seating perfect for
                relaxation or socializing.
              </p>
            </div>
            <img
              src="./Icons/AboutPage/icon4.png"
              alt="Leaf Icon"
              className="coffee-icon"
            />
          </div>
          <div className="icons right">
            <div>
              <h3>Inviting Aroma</h3>
              <p>
                The rich, enticing scent of freshly brewed coffee welcomes you
                at every visit.
              </p>
            </div>
            <img
              src="./Icons/AboutPage/icon5.png"
              alt="Coffee Icon"
              className="coffee-icon"
            />
          </div>
          <div className="icons right">
            <div>
              <h3>Fast Wifi Connection</h3>
              <p>
                Reliable, high-speed internet for remote work, casual browsing,
                or staying connected.
              </p>
            </div>
            <img
              src="./Icons/AboutPage/icon6.png"
              alt="Wifi Icon"
              className="coffee-icon"
            />
          </div>
        </div>
      </div>
      <div className="six-icons">
        <div className="six-left">
          <img
            src="./Icons/AboutPage/icon1.png"
            alt="Coffee Icon"
            className="coffee-icon"
          />
          <p>High Quality</p>
        </div>
        <div className="six-left">
          <img
            src="./Icons/AboutPage/icon2.png"
            alt="Coffee Icon"
            className="coffee-icon"
          />
          <p>Locally Farmed Beans</p>
        </div>
        <div className="six-left">
          <img
            src="./Icons/AboutPage/icon3.png"
            alt="Coffee Icon"
            className="coffee-icon"
          />
          <p>Proper Food Hygiene</p>
        </div>
        <div className="six-left">
          <img
            src="./Icons/AboutPage/icon4.png"
            alt="Coffee Icon"
            className="coffee-icon"
          />
          <p>Cozy Ambience</p>
        </div>
        <div className="six-left">
          <img
            src="./Icons/AboutPage/icon5.png"
            alt="Coffee Icon"
            className="coffee-icon"
          />
          <p>Inviting Aroma</p>
        </div>
        <div className="six-left">
          <img
            src="./Icons/AboutPage/icon6.png"
            alt="Coffee Icon"
            className="coffee-icon"
          />
          <p>Fast Wifi Connection</p>
        </div>
      </div>
    </div>
  );
};

export default MenuHeader;
