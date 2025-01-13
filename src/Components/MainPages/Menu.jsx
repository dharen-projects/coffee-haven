import React, { useState } from "react";
import MenuHeader from "../../Components/MenuPages/MenuHeader";
import MenuBar from "../../Components/MenuPages/MenuBar";
import Coffee from "../../Components/MenuPages/Coffee";
import ColdDrinks from "../../Components/MenuPages/ColdDrinks";
import PastriesDesserts from "../../Components/MenuPages/PastriesDesserts";
import NewMenu from "../../Components/MenuPages/NewMenu";
import BestSellerMenu from "../../Components/MenuPages/BestSellerMenu";
import AllMenu from "../../Components/MenuPages/AllMenu";
import "../../Styles/MainPages/Menu.css";

// Individual components for each menu choice
// const All = () => <div>All Items</div>;
// const BestSeller = () => <div>Best Seller Items</div>;
// const New = () => <div>New Items</div>;
// const Coffee = () => <div>Coffee Items</div>;
// const ColdDrinks = () => <div>Cold Drinks Items</div>;
// const PastriesDesserts = () => <div>Pastries and Desserts Items</div>;

const Menu = () => {
  const [activeMenu, setActiveMenu] = useState("All");

  const renderMenuContent = () => {
    switch (activeMenu) {
      case "All":
        return <AllMenu />;
      case "Best Seller":
        return <BestSellerMenu />;
      case "New":
        return <NewMenu />;
      case "Coffee":
        return <Coffee />;
      case "Cold Drinks":
        return <ColdDrinks />;
      case "Pastries and Desserts":
        return <PastriesDesserts />;
      default:
        return <All />;
    }
  };

  return (
    <div className="menu-page">
      <MenuHeader />
      <MenuBar setActiveMenu={setActiveMenu} />
      <div className="menu-content">{renderMenuContent()}</div>
    </div>
  );
};

export default Menu;
