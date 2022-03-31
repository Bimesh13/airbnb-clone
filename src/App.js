import React from "react";
import Nav from "./components/Nav.js";
import Hero from "./components/Hero.js";
import Card from "./components/Card.js";
import Joke from "./components/PropChallenge.js";

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Card />
      <Joke
        setup="I got my daughter a fridge for her birthday."
        punchline="I can't wait to see her face light up when she opens it."
      />
      <Joke
        setup="How did the hacker escape the police?"
        punchline="He just ransomware!"
      />
      <Joke
        setup="Why don't pirates travel on mountain roads?"
        punchline="Scurvy."
      />
      <Joke
        setup="Why do bees stay in the hive in the winter?"
        punchline="Swarm."
      />
    </>
  );
}
