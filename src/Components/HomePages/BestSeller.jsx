import React from "react";
import CoffeeBestSeller from "./CoffeeBestSeller";
import ColdDrinksBestSeller from "./ColdDrinksBestSeller";
import PastriesDessertsBestSeller from "./PastriesDessertsBestSeller";
import "../../Styles/HomePages/BestSeller.css";

const BestSeller = () => {
  return (
    <section className="best-seller-section">
      <h2 className="best-seller-title">COFFEE HAVEN'S BEST SELLERS</h2>
      <CoffeeBestSeller />
      <ColdDrinksBestSeller />
      <PastriesDessertsBestSeller />
    </section>
  );
};

export default BestSeller;
