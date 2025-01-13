import React, { useState, useEffect } from "react";
import "../../Styles/MainPages/ScrollUp.css"; // Import the CSS for this component

const ScrollUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // If the page is scrolled down more than 0 pixels, show the button
      if (window.scrollY > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false); // Hide the button when on top of the page
      }
    };

    // Attach the scroll event
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`scroll-up ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
    >
      <span className="material-icons">arrow_circle_up</span>
    </div>
  );
};

export default ScrollUp;
