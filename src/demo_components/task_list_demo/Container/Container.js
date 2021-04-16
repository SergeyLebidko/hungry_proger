import React, {useState} from 'react';
import Description from '../Description/Description';
import CategoryCreator from '../CategoryCreator/CategoryCreator';
import style from './Container.module.scss';

export const colorPresets = [
    {backColor: 'WhiteSmoke', textColor: 'rgb(30, 30, 30)'},
    {backColor: 'OrangeRed', textColor: 'white'},
    {backColor: 'LimeGreen', textColor: 'white'},
    {backColor: 'DodgerBlue', textColor: 'white'},
    {backColor: 'DimGray', textColor: 'white'},
    {backColor: 'DarkViolet', textColor: 'white'},
    {backColor: 'Sienna', textColor: 'white'}
]

export function Container() {
    let [data, setData] = useState([]);

    return (
        <div className={style.container}>
            <Description/>
            <CategoryCreator/>
        </div>
    );
}