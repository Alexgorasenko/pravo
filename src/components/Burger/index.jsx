import React from "react";
import "./style.scss";

function Burger({ handleBurgerOneClick, isBurgerOpen }) {
  return (
    <button
      className={`burger ${isBurgerOpen ? "burger_active" : ""}`}
      onClick={handleBurgerOneClick}
    >
      <span></span>
    </button>
  );
}

export default Burger;
