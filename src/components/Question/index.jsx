import React, { useState } from "react";
import "./style.scss";

function Question({ item }) {
  const [isActive, setIsActive] = useState(true);

  const handleOneClick = () => {
    setIsActive(!isActive);
  };

  return (
    <article className="question" id="question">
      <div className="question__head" onClick={handleOneClick}>
        <h5 className="question__title">{item.question}</h5>
        <button
          className={`question__button ${
            isActive ? "" : "question__button-active"
          }`}
        ></button>
      </div>
      <div
        className={`question__body ${isActive ? "" : "question__body-active"}`}
      >
        <p className="question__resp">{item.response}</p>
      </div>
    </article>
  );
}

export default Question;
