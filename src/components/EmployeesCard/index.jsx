import React, { useState } from "react";

import "./style.scss";

function EmployeesCard({ emplo }) {
  const [isActive, setIsActive] = useState(false);

  const handleSetFlip = () => {
    setIsActive(!isActive);
  };

  return (
    <article className="employees-card">
      <div
        onClick={handleSetFlip}
        className={`employees-card__front ${
          isActive ? "employees-card__front_active" : ""
        }`}
      >
        <img
          src={emplo.avatar}
          alt={emplo.name}
          className="employees-card__image"
        />
        <div className="employees-card__front-text">
          <h4 className="employees-card__title">{emplo.name}</h4>
          <p className="employees-card__subtitle">{emplo.job}</p>
        </div>
      </div>

      <div
        onClick={handleSetFlip}
        className={`employees-card__back ${
          isActive ? "employees-card__back_active" : ""
        }`}
      >
        <h4 className="employees-card__title">{emplo.name}</h4>
        <p className="employees-card__subtitle">{emplo.job}</p>
        <span className="employees-card__text">{emplo.description}</span>
        <span className="employees-card__experience">{emplo.experience}</span>
      </div>
    </article>
  );
}

export default EmployeesCard;
