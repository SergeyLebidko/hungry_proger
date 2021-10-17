import React, {useState} from "react";
import classNames from "classnames";
import "./ColorSwitcher.scss";

const L_COLORS = 'lc';
const D_COLORS = 'dc';

function ColorSwitcher() {
    const [mode, setMode] = useState(L_COLORS);

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