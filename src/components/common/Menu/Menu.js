import React, {useState} from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import MenuButton from "../MenuButton/MenuButton";
import "./Menu.scss";

function Menu({toMain, toAbout, toSkills, toProjects}) {
    const [hasOpened, setHasOpened] = useState(false);

    const menuClasses = classNames("menu", {"opened_menu": hasOpened});

    const switchMenu = () => setHasOpened(oldVal => !oldVal);

    const DEST_SELECTOR = {
        "main": toMain,
        "about": toAbout,
        "skills": toSkills,
        "projects": toProjects
    }

    const switchMode = dest => {
        setHasOpened(false);
        DEST_SELECTOR[dest]();
    }

    return (
        <nav className={menuClasses}>
            <MenuButton hasOpened={hasOpened} switchMenu={switchMenu}/>
            <ul className="menu__items">
                <li className="menu__item" onClick={() => switchMode("main")}>
                    Главная
                </li>
                <li className="menu__item" onClick={() => switchMode("about")}>
                    Обо мне
                </li>
                <li className="menu__item" onClick={() => switchMode("skills")}>
                    Технологии
                </li>
                <li className="menu__item" onClick={() => switchMode("projects")}>
                    Мои проекты
                </li>
            </ul>
        </nav>
    );
}

Menu.propTypes = {
    toMain: PropTypes.func,
    toAbout: PropTypes.func,
    toSkills: PropTypes.func,
    toProjects: PropTypes.func
}

export default Menu;