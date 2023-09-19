import React from "react";
import AboutCompany from "../AboutCompany";
import Employees from "../Employees";
import Promo from "../Promo";
import Reviews from "../Reviews";
import Services from "../Services";
import UsefulMaterials from "../UsefulMaterials";
import Сontacts from "../Сontacts";

import "./style.scss";

function Main() {
  return (
    <section className="content">
      <Promo></Promo>
      <Services></Services>
      <AboutCompany></AboutCompany>
      <Employees></Employees>
      <Reviews></Reviews>
      <UsefulMaterials></UsefulMaterials>
      <Сontacts></Сontacts>
    </section>
  );
}

export default Main;
