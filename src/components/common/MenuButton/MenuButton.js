import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {ReactComponent as OneLine} from "../../../content/one_line.svg";
import {ReactComponent as TwoLines} from "../../../content/two_lines.svg";
import "./MenuButton.scss";

function MenuButton({hasOpened, switchMenu}) {
    const buttonClasses = classNames("menu_button", {"button_for_opened": hasOpened});

    return (
        <div className={buttonClasses} onClick={switchMenu}>
            <TwoLines/>
            <OneLine/>
            <OneLine/>
        </div>
    );
}

MenuButton.propTypes = {
    hasOpened: PropTypes.bool,
    switchMenu: PropTypes.func
}

export default MenuButton;