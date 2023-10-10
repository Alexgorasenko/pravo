import React from "react";
import AboutCompany from "../AboutCompany";
import Employees from "../Employees";
import Feedback from "../Feedback";
import Promo from "../Promo";

import Services from "../Services";
import Faq from "../Faq";
import Сontacts from "../Сontacts";

import "./style.scss";

function Main() {
  return (
    <section className="content">
      <Promo></Promo>
      <Services></Services>
      <AboutCompany></AboutCompany>
      <Employees></Employees>
      <Feedback></Feedback>
      <Faq></Faq>
      <Сontacts></Сontacts>
    </section>
  );
}

export default Main;
