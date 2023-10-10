import React from "react";
import Question from "../Question";
import "./style.scss";
import faq from "../../constants/Faq";

function Faq() {
  return (
    <section className="faq">
      <h3 className="faq__title">Вопросы и ответы</h3>
      <div className="faq__cards">
        {faq.map((item) => {
          return <Question item={item} />;
        })}
      </div>
    </section>
  );
}

export default Faq;
