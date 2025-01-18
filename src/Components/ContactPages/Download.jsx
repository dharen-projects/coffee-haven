import React from "react";
import "../../Styles/ContactPages/Download.css";

const DownloadButton = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "./Documents/dharen-resume.pdf"; // Path to the PDF file
    link.download = "dharen-resume.pdf"; // File name when downloaded
    link.click();
  };

  return (
    <div className="download-container">
      <h1>Hire Me</h1>
      <button className="download-button" onClick={handleDownload}>
        Download Resume
      </button>
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

export default DownloadButton;
