import React from "react";
import PropTypes from "prop-types";
import "./Menu.scss";

function Menu({toMain, toAbout, toSkills, toProjects}) {
    return (
        <div className="menu">
            <ul className="menu__items">
                <li className="menu__item" onClick={toMain}>
                    Главная
                </li>
                <li className="menu__item" onClick={toAbout}>
                    Обо мне
                </li>
                <li className="menu__item" onClick={toSkills}>
                    Технологии
                </li>
                <li className="menu__item" onClick={toProjects}>
                    Мои проекты
                </li>
            </ul>
        </div>
    );
}

Menu.propTypes = {
    toMain: PropTypes.func,
    toAbout: PropTypes.func,
    toSkills: PropTypes.func,
    toProjects: PropTypes.func
}

export default Menu;