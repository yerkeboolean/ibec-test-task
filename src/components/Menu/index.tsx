import React, {useState} from "react";
import "./menu.scss";
import {NavLink} from "react-router-dom";
import {Nav, Navbar} from "react-bootstrap";

import {Dropdown} from "../../components";

const Menu: React.FC = () => {
    const [isShown, setIsShown] = useState(false);
    const [isShownNested, setIsShownNested] = useState(false);

    return (
        <nav>
            <div className="menu">
                <Navbar collapseOnSelect expand="lg" variant="light">
                    <Navbar.Brand href="/">
                        <div className="avatar"></div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            width: "100%"
                        }}
                    >
                        <div className="menu_username">My Account</div>

                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="menu_nav">
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
                                    className="menu_nav__item menu_nav__item--dropdown"
                                    to="/transfer"
                                    activeClassName="menu_nav__item--selected"
                                    onMouseEnter={() => setIsShown(true)}
                                    onMouseLeave={() => {
                                        setIsShown(false);
                                        setIsShownNested(false);
                                    }}
                                >
                                    {isShown && (
                                        <Dropdown>
                                            <NavLink exact to="/autoMarket">
                                                На свой счет внутри банка
                                            </NavLink>
                                            <NavLink
                                                exact
                                                className="menu_nav__item--dropdown"
                                                to="/autoMarket"
                                                onMouseEnter={() => setIsShownNested(true)}
                                            >
                                                На чужой счет внутри банка
                                                {isShownNested && (
                                                    <Dropdown>
                                                        <NavLink exact to="/autoMarket">
                                                            На свой счет внутри банка
                                                        </NavLink>
                                                        <NavLink exact to="/autoMarket">
                                                            На чужой счет внутри банка
                                                        </NavLink>
                                                        <NavLink exact to="/autoMarket">
                                                            В другой банк в национальной валюте{" "}
                                                        </NavLink>
                                                        <NavLink exact to="/autoMarket">
                                                            Международные платежи SWIFT
                                                        </NavLink>
                                                    </Dropdown>
                                                )}
                                            </NavLink>
                                            <NavLink exact to="/autoMarket">
                                                В другой банк в национальной валюте{" "}
                                            </NavLink>
                                            <NavLink exact to="/autoMarket">
                                                Международные платежи SWIFT
                                            </NavLink>
                                        </Dropdown>
                                    )}
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
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Navbar>
                <div className="menu_nav"></div>
            </div>
        </nav>
    );
};

export default Menu;
