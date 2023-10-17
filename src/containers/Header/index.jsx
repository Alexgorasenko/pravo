import React from "react";
import "./style.scss";
import mail from "../../images/mail.svg";
import logo from "../../images/logo.svg";
import phone from "../../images/phone.svg";
import Navigation from "../../components/Header/Navigation";

function Header() {
  return (
    <header className="header">
      <div className="header__communication-color">
        <div className="header__communication">
          <div className="header__links">
            <a href="tel:+7 (922) 022-94-82" className="header__link">
              <img
                src={phone}
                alt="Иконка телефона"
                className="header__link-image"
              />
              +7 (922) 022-94-82
            </a>
            <a href="mailto:mail@htmlacademy.ru" className="header__link">
              <img
                src={mail}
                alt="Иконка письма"
                className="header__link-image"
              />
              janis62@yahoo.com
            </a>
          </div>
          <button className="header__communication-btn">Заказать звонок</button>
        </div>
      </div>
      <div className="header__navigation-color">
        <div className="header__navigation">
          <img src={logo} alt="Логотип сайта" className="header__logo" />
          <Navigation></Navigation>
        </div>
      </div>
    </header>
  );
}

export default Header;
