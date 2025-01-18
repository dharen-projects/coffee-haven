import React from "react";
import AboutHeader from "../../Components/AboutPages/AboutHeader";
import CoffeeImage from "../../Components/AboutPages/CoffeeImage";
import Year from "../../Components/AboutPages/Year";

const About = () => {
  return (
    <div className="about-page">
      <AboutHeader />
      <CoffeeImage />
      <Year />
    </div>
  );
};

export default About;
