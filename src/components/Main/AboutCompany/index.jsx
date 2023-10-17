import React from "react";
import "./style.scss";
import book from "../../../images/book.png";

function AboutCompany() {
  return (
    <section className="about-company" id="about-company">
      <div className="about-company__description">
        <h3 className="about-company__title">
          Юридическая компания <span>правозащитник</span>
        </h3>
        <p className="about-company__text">
          Давно выяснено, что при оценке дизайна и композиции читаемый текст
          мешает сосредоточиться. Lorem Ipsum используют потому, что тот
          обеспечивает более или менее стандартное заполнение.
        </p>
        <p className="about-company__text">
          Есть много вариантов Lorem Ipsum, но большинство из них имеет не
          всегда приемлемые модификации, например, юмористические вставки или
          слова, которые даже отдалённо не напоминают латынь. Если вам нужен
          Lorem Ipsum для серьёзного проекта, вы наверняка не хотите
          какой-нибудь шутки, скрытой в середине абзаца.
        </p>
        <p className="about-company__text">
          За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые
          версии появились по ошибке, некоторые - намеренно (например,
          юмористические варианты).
        </p>
        <div className="about-company__buttons">
          <button className="about-company__button button ">
            История компании
          </button>
          <button className="about-company__button button-grey">
            Сертификаты
          </button>
        </div>
      </div>
      <img src={book} alt="Книга" className="about-company__image" />
    </section>
  );
}

export default AboutCompany;
