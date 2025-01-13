import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/MainPages/Navbar";
import Home from "./Components/MainPages/Home";
import About from "./Components/MainPages/About";
import Menu from "./Components/MainPages/Menu";
import Contact from "./Components/MainPages/Contacts";
import Footer from "./Components/HomePages/Footer";
import Copyright from "./Components/HomePages/Copyright";
import ScrollUp from "./Components/MainPages/ScrollUp";

const App = () => {
  return (
    <Router basename="/coffee-haven">
      <Navbar /> {/* The Navbar will be visible on all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <Copyright />
      <ScrollUp />
    </Router>
  );
};

export default App;
