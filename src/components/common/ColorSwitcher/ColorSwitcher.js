import React, {useEffect, useRef, useState} from "react";
import classNames from "classnames";
import {L_COLORS, D_COLORS, colorController} from "../../../constants/settings";
import "./ColorSwitcher.scss";

function ColorSwitcher() {
    const [mode, setMode] = useState(L_COLORS);
    const hasFirst = useRef(true);

    useEffect(() => {
        if (hasFirst.current) {
            hasFirst.current = false;
            return;
        }
        colorController.theme = mode;
    }, [mode]);

    const switchMode = () => setMode(oldMode => ({[D_COLORS]: L_COLORS, [L_COLORS]: D_COLORS}[oldMode]));

    const toggleClasses = classNames(
        "color_switcher__toggle",
        {
            "light_colors": mode === L_COLORS,
            "dark_colors": mode === D_COLORS
        }
    );

    return (
        <div className="color_switcher" onClick={switchMode}>
            <div className={toggleClasses}/>
        </div>
    );
}

export default ColorSwitcher;