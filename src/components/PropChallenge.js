import React from "react";

export default function PropChallenge(prop) {
  return (
    <div className="joke-section">
      <h1>Setup: {prop.setup}</h1>
      <h1>Punchline: {prop.punchline}</h1>
    </div>
  );
}
