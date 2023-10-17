import React from "react";
import AboutCompany from "../../components/Main/AboutCompany";
import Employees from "../../components/Main/Employees";
import Feedback from "../../components/Main/Feedback";
import Promo from "../../components/Main/Promo";
import Services from "../../components/Main/Services";
import Faq from "../../components/Main/Faq";
import Сontacts from "../../components/Main/Сontacts";
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
