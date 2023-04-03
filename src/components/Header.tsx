import React from "react";
import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "../types/hook";

function Header({ crumbs, crumLink }: any) {
  const { items, totalPrice, itemsCount } = useAppSelector(
    (state: any) => state.cart
  );
  return (
    <header className="header">
      <div className="header__top-line">
        <div className="_container">
          <div className="header__inner-container">
            <div className="header__start">
              <div className="constacts">
                <div className="constacts__item">
                  <div className="constacts__icon-box">
                    <img
                      src="./img/andrey/map.svg"
                      alt=""
                      className="constacts__icon"
                    />
                  </div>
                  <div className="constacts__item-content">
                    <p className="constacts__item-title">
                      г. Кокчетав, ул. Ж. Ташенова 129Б{" "}
                    </p>
                    <p className="constacts__item-text">(Рынок Восточный)</p>
                  </div>
                </div>
                <div className="constacts__item">
                  <div className="constacts__icon-box">
                    <img
                      src="img/andrey/envelope.svg"
                      alt=""
                      className="constacts__icon"
                    />
                  </div>
                  <div className="constacts__item-content">
                    <a
                      href="mailto:opt.sultan@mail.ru"
                      className="constacts__item-title constacts__item-title--link"
                    >
                      opt.sultan@mail.ru
                    </a>
                    <p className="constacts__item-text">
                      На связи в любое время
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="header__end">
              <nav className="menu">
                <ul className="menu__list">
                  <li className="menu__item">
                    <a href="#" className="menu__link">
                      О компании
                    </a>
                  </li>
                  <li className="menu__item">
                    <a href="#" className="menu__link">
                      Доставка и оплата
                    </a>
                  </li>
                  <li className="menu__item">
                    <a href="#" className="menu__link">
                      Возврат
                    </a>
                  </li>
                  <li className="menu__item">
                    <a href="#" className="menu__link">
                      Контакты
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="header__main">
        <div className="_container">
          <div className="header__main-inner">
            <div className="header__main-general">
              <a href="#" className="header__logo logo">
                <img
                  src="img/andrey/logo.svg"
                  width="156"
                  height="66"
                  alt=""
                  className="logo__img"
                />
              </a>
              <button className="btn btn--min-w btn--margin">
                <span className="btn__container">
                  <span className="btn__text">Каталог</span>
                  <img
                    src="img/andrey/catalog-white.svg"
                    alt=""
                    className="btn__icon"
                  />
                </span>
              </button>
              <form className="header__search search">
                <input
                  type="search"
                  className="search__input"
                  placeholder="Поиск..."
                />

                <button className="search__btn">
                  <img
                    src="img/andrey/magnifier-white.svg"
                    alt=""
                    className="search__btn-icon"
                  />
                </button>
              </form>
            </div>
            <div className="header__info">
              <div className="header__info-item">
                <div className="connect">
                  <div className="connect__main">
                    <a href="tel:+77774900091" className="connect__tel">
                      +7 (777) 490-00-91
                    </a>
                    <p className="connect__text">время работы: 9:00-20:00</p>
                    <button className="connect__btn">Заказать звонок</button>
                  </div>
                  <div className="connect__operator">
                    <img
                      src="img/andrey/operator.png"
                      className="connect__operator-img"
                      alt=""
                    />
                    <span className="connect__status connect__status--online"></span>
                  </div>
                </div>
              </div>
              <div className="header__info-item">
                <button className="btn btn--min-w">
                  <span className="btn__container">
                    <span className="btn__text">Прайс-лист</span>
                    <img
                      src="img/andrey/download.svg"
                      alt=""
                      className="btn__icon"
                    />
                  </span>
                </button>
              </div>
              <div className="header__info-item">
                <div className="demo-cart"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-mobi">
        <div className="header-mobi__main">
          <button className="burger">
            <span className="burger__line"></span>
          </button>
          <a href="#" className="header__logo logo">
            <img
              src="img/andrey/logo.svg"
              width="97"
              height="41"
              alt=""
              className="logo__img"
            />
          </a>
          <div className="cart">
            <img src="img/andrey/cart.svg" alt="" className="cart__icon" />
            <span className="cart__badge">
              <span className="cart__badge-text">3</span>
            </span>
          </div>
        </div>
        <div className="header-mobi__line">
          <button className="header-mobi__btn">
            <img
              src="img/andrey/catalog.svg"
              alt=""
              className="header-mobi__btn-icon"
            />
            <span className="header-mobi__btn-text">Каталог</span>
          </button>
          <button className="header-mobi__btn">
            <img
              src="img/andrey/magnifier.svg"
              alt=""
              className="header-mobi__btn-icon"
            />
            <span className="header-mobi__btn-text">Поиск</span>
          </button>
        </div>
      </div>
      {/* /// */}
      <Link to={"/cart"}>
        <div className="header__cart header-cart">
          <div className="header-cart__imgs">
            <svg
              width="41"
              height="29"
              viewBox="0 0 41 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M40.6514 5.78617C40.3916 5.42327 40.043 5.24182 39.6055 5.24182H11.7559L11 3.27403C10.8086 2.62887 10.5488 2.07779 10.2207 1.6208C9.89258 1.16381 9.54395 0.841232 9.1748 0.65306C8.80566 0.464888 8.48438 0.3372 8.21094 0.269996C7.9375 0.202792 7.66406 0.169189 7.39062 0.169189H1.77148C1.41602 0.169189 1.11523 0.290157 0.869141 0.532093C0.623047 0.774028 0.5 1.08317 0.5 1.45951C0.5 1.67457 0.554688 1.8829 0.664062 2.08451C0.773438 2.28612 0.930664 2.44069 1.13574 2.54822C1.34082 2.65575 1.55273 2.70951 1.77148 2.70951H7.39062C7.5 2.70951 7.60254 2.72295 7.69824 2.74983C7.79395 2.77672 7.92383 2.89096 8.08789 3.09258C8.25195 3.29419 8.38867 3.59661 8.49805 3.99983L14.3809 20.1531C14.4355 20.3144 14.5244 20.4689 14.6475 20.6168C14.7705 20.7646 14.9141 20.8789 15.0781 20.9595C15.2422 21.0402 15.4199 21.0805 15.6113 21.0805H33.3301C33.6035 21.0805 33.8564 20.9998 34.0889 20.8385C34.3213 20.6773 34.4785 20.4756 34.5605 20.2337L40.8359 6.97569C40.9727 6.54558 40.9111 6.14908 40.6514 5.78617ZM32.4277 18.4998H16.6367L12.4531 7.82246H37.7188L32.4277 18.4998ZM30.0625 22.4798C29.1602 22.4798 28.3877 22.7957 27.7451 23.4274C27.1025 24.0591 26.7812 24.8186 26.7812 25.7057C26.7812 26.5928 27.1025 27.3522 27.7451 27.9839C28.3877 28.6156 29.1602 28.9315 30.0625 28.9315C30.9648 28.9315 31.7373 28.6156 32.3799 27.9839C33.0225 27.3522 33.3438 26.5928 33.3438 25.7057C33.3438 24.8186 33.0225 24.0591 32.3799 23.4274C31.7373 22.7957 30.9648 22.4798 30.0625 22.4798ZM18.25 22.4798C17.6484 22.4798 17.0947 22.6277 16.5889 22.9234C16.083 23.2191 15.6865 23.6089 15.3994 24.0927C15.1123 24.5766 14.9688 25.1143 14.9688 25.7057C14.9688 26.5928 15.29 27.3522 15.9326 27.9839C16.5752 28.6156 17.3477 28.9315 18.25 28.9315C19.1523 28.9315 19.9248 28.6156 20.5674 27.9839C21.21 27.3522 21.5312 26.5928 21.5312 25.7057C21.5312 25.4906 21.5107 25.2755 21.4697 25.0605C21.4287 24.8454 21.3672 24.6438 21.2852 24.4557C21.2031 24.2675 21.1006 24.086 20.9775 23.9113C20.8545 23.7366 20.7178 23.5753 20.5674 23.4274C20.417 23.2796 20.2529 23.1452 20.0752 23.0242C19.8975 22.9032 19.7129 22.8024 19.5215 22.7218C19.3301 22.6411 19.125 22.5806 18.9062 22.5403C18.6875 22.5 18.4688 22.4798 18.25 22.4798Z"
                fill="#3F4E65"
              />
            </svg>

            <div className="header-cart__quantity">{itemsCount}</div>
          </div>
          <div className="header-cart__sum">
            Корзина
            <span>{totalPrice} ₽</span>
          </div>
        </div>
      </Link>
      {/* /// */}
    </header>
  );
}

export default Header;
