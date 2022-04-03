import React from "react";
import Nav from "./components/Nav.js";
import Hero from "./components/Hero.js";
import Card from "./components/Card.js";
import dataSet from "./data.js";

export default function App() {
  const cardData = dataSet.map((card) => <Card {...card} />);
  return (
    <>
      <Nav />
      <Hero />
      <section className="cards-list">{cardData}</section>
    </>
  );
}
