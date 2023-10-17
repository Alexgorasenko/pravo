import React from "react";
import "./style.scss";
import logo from "../../../images/logo.svg";
import mapWhite from "../../../images/map-white.svg";
import mailWhite from "../../../images/mail-white.svg";
import phoneWhite from "../../../images/phone-white.svg";
import director from "../../../images/emplo2.png";

function Сontacts() {
  return (
    <section className="contacts" id="contacts">
      <div className="contacts__head">
        <img src={logo} alt="" className="contacts__logo" />
        <p className="contacts__subtitle">
          Предварительные выводы неутешительны: синтетическое тестирование, а
          также свежий взгляд на привычные вещи — безусловно открывает новые
          горизонты для экономической целесообразности принимаемых решений.
        </p>
      </div>
      <div className="contacts__content">
        <div className="contacts__communication">
          <div className="contacts__communication-item">
            <div className="contacts__communication-picture">
              <img
                src={mapWhite}
                alt="значок карты"
                className="contacts__communication-image"
              />
            </div>
            <div className="contacts__communication-container">
              <span className="contacts__communication-title">Наш адрес</span>
              <span className="contacts__communication-text">
                г. Одинцово, пр. Будапештсткая, 40
              </span>
            </div>
          </div>
          <div className="contacts__communication-item">
            <div className="contacts__communication-picture">
              <img
                src={phoneWhite}
                alt="значок телефона"
                className="contacts__communication-image"
              />
            </div>
            <div className="contacts__communication-container">
              <span className="contacts__communication-title">
                Запись на консультанцию
              </span>
              <span className="contacts__communication-text">
                +7 (922) 022-94-82
              </span>
            </div>
          </div>
          <div className="contacts__communication-item">
            <div className="contacts__communication-picture">
              <img
                src={mailWhite}
                alt="значок письма"
                className="contacts__communication-image"
              />
            </div>
            <div className="contacts__communication-container">
              <span className="contacts__communication-title">
                Корреспонденция
              </span>
              <span className="contacts__communication-text">
                janis62@yahoo.com
              </span>
            </div>
          </div>
        </div>
        <div className="contacts__navigation">
          <ul className="contacts__nav-links">
            <li className="contacts__nav-link">Услуги</li>
            <li className="contacts__nav-link">О компании</li>
            <li className="contacts__nav-link">Сертификаты</li>
            <li className="contacts__nav-link">Отзывы</li>
            <li className="contacts__nav-link">Полезные материалы</li>
            <li className="contacts__nav-link">Благотворительность</li>
          </ul>
        </div>
        <div className="contacts__director">
          <div className="contacts__director-hed">
            <img
              src={director}
              alt="Миронов Александр"
              className="contacts__director-avatar"
            />
            <div className="contacts__director-desc">
              <span className="contacts__director-name">Миронов Александр</span>
              <span className="contacts__director-job">Ведущий юрист</span>
            </div>
          </div>
          <p className="contacts__director-text">
            Есть над чем задуматься: тщательные исследования конкурентов
            разоблачены. Идейные соображения высшего порядка, а также
            перспективное планирование играет
          </p>
          <button className="contacts__director-button button">
            Задать вопрос юристу
          </button>
        </div>
      </div>
    </section>
  );
}

export default Сontacts;
