import React from "react";
import EmployeesCard from "../EmployeesCard";
import "./style.scss";
import employees from "../../constants/Employees";
import { Splide, SplideSlide } from "@splidejs/react-splide";

function Employees() {
  return (
    <section className="employees" id="employees">
      <h3 className="employees__title">Наши юристы</h3>
      <p className="employees__subtitle">
        Давно выяснено, что при оценке дизайна и композиции читаемый текст
        мешает сосредоточиться. Lorem Ipsum используют потому, что тот
        обеспечивает более или менее стандартное заполнение шаблона
      </p>
      <div className="employees__cards">
        {employees.map((emplo) => {
          return <EmployeesCard emplo={emplo}></EmployeesCard>;
        })}
      </div>
      <div className="employees__cards-slider">
        <Splide
          options={{
            // type: "loop",
            autoplay: true,
            rewindByDrag: true,
            drag: true,
            gap: "24px",
            perPage: 1,
            perMove: 1,
            arrows: false,
            pagination: false,
            focus: "left",
            padding: "10%",
          }}
          className="employees__cards-splide-slider"
        >
          {employees.map((emplo) => {
            return (
              <SplideSlide
                className="employees__cards-splide-slide"
                key={emplo?.id}
              >
                <EmployeesCard emplo={emplo}></EmployeesCard>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </section>
  );
}

export default Employees;
