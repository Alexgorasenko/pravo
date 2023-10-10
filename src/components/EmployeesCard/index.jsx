import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import "./style.scss";

function EmployeesCard({ emplo }) {
  const [flip, setFlip] = useState(false);

  const handleSetFlip = () => {
    setFlip(!flip);
  };

  return (
    <article className="employees-card">
      <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
        <div
          onClick={handleSetFlip}
          className="employees-card__preview"
          onMouseEnter={handleSetFlip}
        >
          <img
            src={emplo.avatar}
            alt={emplo.name}
            className="employees-card__image"
          />
          <div className="employees-card__preview-text">
            <h4 className="employees-card__title">{emplo.name}</h4>
            <p className="employees-card__subtitle">{emplo.job}</p>
          </div>
        </div>

        <div
          onClick={handleSetFlip}
          onMouseLeave={handleSetFlip}
          className="employees-card__description"
        >
          <h4 className="employees-card__title">{emplo.name}</h4>
          <p className="employees-card__subtitle">{emplo.job}</p>
          <span className="employees-card__text">{emplo.description}</span>
          <span className="employees-card__experience">{emplo.experience}</span>
        </div>
      </ReactCardFlip>
    </article>
  );
}

export default EmployeesCard;
