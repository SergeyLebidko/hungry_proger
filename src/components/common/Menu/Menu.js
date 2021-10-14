import React from "react";
import PropTypes from "prop-types";
import "./Menu.scss";

function Menu({toMain, toAbout}) {
    return (
        <div className="menu">
            <ul className="menu__items">
                <li className="menu__item" onClick={toMain}>
                    Главная
                </li>
                <li className="menu__item" onClick={toAbout}>
                    Обо мне
                </li>
            </ul>
        </div>
    );
}

Menu.propTypes = {
    toMain: PropTypes.func,
    toAbout: PropTypes.func
}

export default Menu;