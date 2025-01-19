import React from "react";
// import MainContent from "../../Components/HomePages/MainContent";
import Opening from "../../Components/HomePages/Opening";
import AboutInfo from "../../Components/HomePages/AboutInfo";
import BestSeller from "../../Components/HomePages/BestSeller";

const Home = () => {
  return (
    <div>
      <Opening />
      {/* <MainContent /> */}
      <AboutInfo />
      <BestSeller />
    </div>
  );
};

export default Home;
