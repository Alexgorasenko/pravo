import React from "react";
import "./style.scss";

function Promo() {
  return (
    <section className="promo">
      <h1 className="promo__title">Оказываем весь комплекс</h1>
      <h2 className="promo__subtitle">Юридических услуг</h2>
      <p className="promo__text">
        Давно выяснено, что при оценке дизайна и композиции читаемый текст
        мешает сосредоточиться. Lorem Ipsum используют потому, что тот
        обеспечивает более или менее стандартное заполнение.
      </p>
      <button className="promo__botton">Наши услуги</button>
    </section>
  );
}

export default Promo;
