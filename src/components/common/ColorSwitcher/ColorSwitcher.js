import React, {useEffect, useState} from "react";
import classNames from "classnames";
import {L_COLORS, D_COLORS, COLOR_PRESETS} from "../../../constants/settings";
import "./ColorSwitcher.scss";

function ColorSwitcher() {
    const [mode, setMode] = useState(L_COLORS);

    useEffect(() => {
        const root = document.documentElement;
        const preset = COLOR_PRESETS[mode];
        for (const key of Object.keys(preset)) root.style.setProperty(key, preset[key]);
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