import React from "react";
import katie from "../images/katie-image.png";
import star from "../images/star.png";

export default function Card() {
  return (
    <div className="card-box">
      <img src={katie} className="card-image" />
      <div className="card-rating">
        <img src={star} className="star-logo" />
        <p>5.0</p>
        <p className="grey-text">(6).USA</p>
      </div>
      <p className="card-info">Life lessons with Katie Zaferes</p>
      <p className="card-info">
        <span className="card-price">From $136</span> / person
      </p>
    </div>
  );
}
