import React from "react";
import photoGrid from "../images/photo-grid.png";

export default function Hero() {
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;

  if (hours < 12) {
    timeOfDay = "morning";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon";
  } else {
    timeOfDay = "night";
  }
  return (
    <div className="hero-section">
      <h1>Good {timeOfDay}</h1>
      <img src={photoGrid} className="photo-grid" />
      <h1 className="hero-header">Online Experience</h1>
      <p className="hero-text">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </div>
  );
}
