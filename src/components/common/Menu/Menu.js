import React from "react";
import PropTypes from "prop-types";
import "./Menu.scss";

function Menu({toMain, toAbout}) {
    return (
        <ul className="menu">
            <li className="menu__item" onClick={toMain}>
                Главная
            </li>
            <li className="menu__item" onClick={toAbout}>
                Обо мне
            </li>
        </ul>
    );
}

Menu.propTypes = {
    toMain: PropTypes.func,
    toAbout: PropTypes.func
}

export default Menu;