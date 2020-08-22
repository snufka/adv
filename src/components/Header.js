import React from "react";
import Background from "../img/background.JPG";

export default function Header() {
  return (
    <div>
      <img src={Background} alt="background" style={{ width: "100%" }} />
    </div>
  );
}
