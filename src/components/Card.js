import React from "react";
import star from "../images/star.png";

export default function Card(props) {
  const source = `./images/${props.img}`;
  return (
    <div className="card-box">
      <img src={source} className="card-image" />
      <div className="card-rating">
        <img src={star} className="star-logo" />
        <span>{props.rating}</span>
        <span className="grey-text">({props.reviewCount})</span>
        <span className="grey-text">{props.country}</span>
      </div>
      <p className="card-info">{props.title}</p>
      <p className="card-info">
        <span className="card-price">From ${props.price}</span> / person
      </p>
    </div>
  );
}
