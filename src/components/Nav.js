import React from "react";
import airbnbLogo from "../images/airbnb-logo.png";

export default function Nav() {
  return (
    <nav className="nav-bar">
      <img src={airbnbLogo} className="logo-image" />
    </nav>
  );
}
