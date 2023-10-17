import React, { useState } from "react";
import Burger from "../Burger";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import navigationLinks from "../../../constants/navigationLinks";

function Navigation() {
  const [isBurgerOpen, setBurgerOpen] = useState(false);

  const navigation = useNavigate();

  const handleBurgerOneClick = () => {
    if (isBurgerOpen) {
      setBurgerOpen(false);
      document.body.classList.remove("scroll-hidden");
    } else {
      setBurgerOpen(true);
      document.body.classList.add("scroll-hidden");
    }
  };

  const handleNavLinkClick = (item) => {
    setBurgerOpen(false);
    navigation(`/#${item.link}`);

    setTimeout(() => {
      document.getElementById(item.link)?.scrollIntoView({
        behavior: "smooth",
      });
    }, 300);
  };

  return (
    <section
      className={`navigation ${isBurgerOpen ? "navigation_active" : ""}`}
    >
      <Burger
        handleBurgerOneClick={handleBurgerOneClick}
        isBurgerOpen={isBurgerOpen}
      ></Burger>
      <nav
        className={`navigation__nav-menu ${
          isBurgerOpen ? "navigation__nav-menu_active" : ""
        }`}
      >
        <ul className="navigation__nav-link-list">
          {navigationLinks.map((item) => {
            return (
              <li
                className="navigation__nav-link-item"
                key={item.id}
                onClick={() => {
                  handleNavLinkClick(item);
                }}
              >
                {item.title}
              </li>
            );
          })}
        </ul>
      </nav>
    </section>
  );
}

export default Navigation;
