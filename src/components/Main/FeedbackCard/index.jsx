import React from "react";
import "./style.scss";

import feedbackImg from "../../../images/feedbackImg.png";

function FeedbackCard({ feedback }) {
  return (
    <article className="feedback-card">
      <div className="feedback-card__header">
        <img
          src={feedback?.avatar}
          alt={feedback?.name}
          className="feedback-card__avatar"
        />
        <div className="feedback-card__header-desc">
          <span className="feedback-card__company">{feedback?.company}</span>
          <h4 className="feedback-card__name">{feedback?.name}</h4>
        </div>
        <img src={feedbackImg} alt="" className="feedback-card__image" />
      </div>
      <p className="feedback-card__description">{feedback?.description}</p>
    </article>
  );
}

export default FeedbackCard;
