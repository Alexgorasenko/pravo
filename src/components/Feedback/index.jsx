import React from "react";
import feedbacks from "../../constants/Feedback";
import FeedbackCard from "../FeedbackCard";
import "./style.scss";
import { Splide, SplideSlide } from "@splidejs/react-splide";

function Feedback() {
  return (
    <section className="feedback" id="feedback">
      <h3 className="feedback__title">Что о нас говорят клиенты</h3>
      <div className="feedback__card-slider">
        <Splide
          options={{
            autoplay: true,
            rewindByDrag: true,
            drag: true,
            gap: "24px",
            perPage: 1,
            perMove: 1,
            arrows: true,
            pagination: false,
            focus: "left",
            padding: "10%",
          }}
          className="feedback__cards-splide-slider"
        >
          {feedbacks.map((feedback) => {
            return (
              <SplideSlide
                className="feedback__cards-splide-slide"
                key={feedback?.id}
              >
                <FeedbackCard feedback={feedback} />
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
      <div className="feedback__buttons">
        <button className="feedback__button button">Все отзывы</button>
        <button className="feedback__button button-grey">Написать отзыв</button>
      </div>
    </section>
  );
}

export default Feedback;
