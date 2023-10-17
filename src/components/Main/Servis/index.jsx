import React from "react";
import "./style.scss";

function Servis({ servis }) {
  return (
    <article className="servis">
      <div className="servis__icon"></div>
      <h4 className="servis__title">{servis?.title}</h4>
      <p className="servis__subtitle">{servis?.subtitle}</p>
    </article>
  );
}

export default Servis;
