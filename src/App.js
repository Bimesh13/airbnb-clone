import React from "react";
import Nav from "./components/Nav.js";
import Hero from "./components/Hero.js";
import Card from "./components/Card.js";
import dataSet from "./data.js";

export default function App() {
  const cardData = dataSet.map((card) => (
    <Card
      img={card.coverImg}
      rating={card.stats.rating}
      reviewCount={card.stats.reviewCount}
      country={card.location}
      title={card.title}
      price={card.price}
    />
  ));
  return (
    <>
      <Nav />
      <Hero />
      <div className="card-flex">{cardData}</div>
    </>
  );
}
