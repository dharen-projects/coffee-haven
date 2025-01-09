import React from "react";
import MainContent from "../../Components/HomePages/MainContent";
import AboutInfo from "../../Components/HomePages/AboutInfo";
import BestSeller from "../../Components/HomePages/BestSeller";
import Footer from "../../Components/HomePages/Footer";
import Copyright from "../../Components/HomePages/Copyright";

const Home = () => {
  return (
    <div>
      <MainContent />
      <AboutInfo />
      <BestSeller />
      <Footer />
      <Copyright />
    </div>
  );
};

export default Home;
