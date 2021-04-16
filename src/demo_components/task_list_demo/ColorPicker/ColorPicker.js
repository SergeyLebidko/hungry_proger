import React, {useState} from 'react';
import style from './ColorPicker.module.scss';
import {colorPresets} from '../Container/Container';

function ColorPicker() {
    let [current, setCurrent] = useState(0);

    // Формируем набор пресетов
    let presets = [], preset, presetClass;
    for (let index = 0; index < colorPresets.length; index++) {
        preset = colorPresets[index];
        presetClass = style.preset + ' ' + (index === current ? style.selected : style.not_selected);
        presets.push(
            <div key={index} className={presetClass} onClick={()=>setCurrent(index)}>
                <div style={{backgroundColor: preset.backColor}}/>
            </div>
        );
    }
    return (
        <div className={style.container}>
            {presets}
        </div>
    )
}

export default ColorPicker;