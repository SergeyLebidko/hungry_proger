import React, {useState} from 'react';
import Description from '../Description/Description';
import CategoryCreator from '../CategoryCreator/CategoryCreator';
import style from './Container.module.scss';

export const colorPresets = [
    'rgb(27, 133, 250)',
    'rgb(66, 218, 31)',
    'rgb(255, 85, 40)',
    'rgb(39, 160, 223)',
    'rgb(199, 19, 255)',
    'rgb(47, 56, 83)'
];

export function Container() {
    let [data, setData] = useState([]);

    return (
        <div className={style.container}>
            <Description/>
            <CategoryCreator/>
        </div>
    );
}