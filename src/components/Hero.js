import React from "react";
import photoGrid from "../images/photo-grid.png";

export default function Hero() {
  return (
    <div className="hero-section">
      <img src={photoGrid} className="photo-grid" />
      <h1 className="hero-header">Online Experience</h1>
      <p className="hero-text">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </div>
  );
}
