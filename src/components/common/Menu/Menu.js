import React, {useState} from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import MenuButton from "../MenuButton/MenuButton";
import {MAIN_MODE, ABOUT_MODE, SKILLS_MODE, PROJECTS_MODE} from "../../../constants/settings";
import "./Menu.scss";

function Menu({mode, toMain, toAbout, toSkills, toProjects}) {
    const [hasOpened, setHasOpened] = useState(false);

    const menuClasses = classNames("menu", {"opened_menu": hasOpened});

    const switchMenu = () => setHasOpened(oldVal => !oldVal);

    const DEST_SELECTOR = {
        [MAIN_MODE]: toMain,
        [ABOUT_MODE]: toAbout,
        [SKILLS_MODE]: toSkills,
        [PROJECTS_MODE]: toProjects
    }

    const switchMode = dest => {
        setHasOpened(false);
        DEST_SELECTOR[dest]();
    }

    const getItemClasses = itemMode => classNames("menu__item", {"selected_item": itemMode === mode});

    return (
        <nav className={menuClasses}>
            <MenuButton hasOpened={hasOpened} switchMenu={switchMenu}/>
            <ul className="menu__items">
                <li className={getItemClasses(MAIN_MODE)} onClick={() => switchMode(MAIN_MODE)}>
                    Главная
                </li>
                <li className={getItemClasses(ABOUT_MODE)} onClick={() => switchMode(ABOUT_MODE)}>
                    Обо мне
                </li>
                <li className={getItemClasses(SKILLS_MODE)} onClick={() => switchMode(SKILLS_MODE)}>
                    Технологии
                </li>
                <li className={getItemClasses(PROJECTS_MODE)} onClick={() => switchMode(PROJECTS_MODE)}>
                    Мои проекты
                </li>
            </ul>
        </nav>
    );
}

Menu.propTypes = {
    mode: PropTypes.string,
    toMain: PropTypes.func,
    toAbout: PropTypes.func,
    toSkills: PropTypes.func,
    toProjects: PropTypes.func
}

export default Menu;