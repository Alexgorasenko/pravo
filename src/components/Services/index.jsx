import React from "react";
import Servis from "../Servis";
import "./style.scss";
import services from "../../constants/Servises";

import { Splide, SplideSlide } from "@splidejs/react-splide";

function Services() {
  return (
    <section className="services" id="services">
      <h3 className="services__title">Наши услуги</h3>
      <p className="services__subtitle">
        Давно выяснено, что при оценке дизайна и композиции читаемый текст
        мешает сосредоточиться. Lorem Ipsum используют потому, что тот
        обеспечивает более или менее стандартное заполнение шаблона
      </p>
      <div className="services__cards">
        {services.map((servis) => {
          return <Servis servis={servis}></Servis>;
        })}
      </div>
      <div className="services__cards-splide">
        <Splide
          options={{
            autoplay: true,
            rewindByDrag: true,
            drag: true,
            gap: "24px",
            perPage: 2,
            perMove: 1,
            arrows: false,
            width: "100%",
            pagination: false,
            padding: "10%",
            breakpoints: {
              600: {
                perPage: 1,
                padding: "20%",
              },
            },
          }}
          className="services__cards-splide-slider"
        >
          {services.map((servis) => {
            return (
              <SplideSlide
                className="services__cards-splide-slide"
                key={servis?.id}
              >
                <Servis servis={servis}></Servis>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
      <button className="services__button button">Все услуги</button>
    </section>
  );
}

export default Services;
