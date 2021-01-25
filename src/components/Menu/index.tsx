import React from "react";
import "./menu.scss";
import {NavLink} from "react-router-dom";

const Menu: React.FC = () => (
    <nav>
        <div className="avatar"></div>
        <div className="menu">
            <div className="menu_username">My Account</div>
            <div className="menu_nav">
                <NavLink
                    exact
                    to="/"
                    className="menu_nav__item"
                    activeClassName="menu_nav__item--selected"
                >
                    Главная
                </NavLink>
                <NavLink
                    exact
                    className="menu_nav__item"
                    to="/about"
                    activeClassName="menu_nav__item--selected"
                >
                    О нас
                </NavLink>

                <NavLink
                    exact
                    className="menu_nav__item"
                    to="/payments"
                    activeClassName="menu_nav__item--selected"
                >
                    Платежи
                </NavLink>

                <NavLink
                    exact
                    className="menu_nav__item"
                    to="/transfer"
                    activeClassName="menu_nav__item--selected"
                >
                    Переводы
                </NavLink>

                <NavLink
                    exact
                    className="menu_nav__item"
                    to="/autoMarket"
                    activeClassName="menu_nav__item--selected"
                >
                    Купля/продажа авто
                </NavLink>

                <NavLink
                    exact
                    className="menu_nav__item"
                    to="/requests"
                    activeClassName="menu_nav__item--selected"
                >
                    Заявки
                </NavLink>

                <NavLink
                    exact
                    className="menu_nav__item"
                    to="/contacts"
                    activeClassName="menu_nav__item--selected"
                >
                    Наши контакты
                </NavLink>
            </div>
        </div>
    </nav>
);

export default Menu;
