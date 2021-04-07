import React from 'react';
import Card from '../Card/Card';
import style from './CardsField.module.scss';

const initialData = [
    [34, 139, 34],
    [0, 191, 255],
    [138, 43, 226],
    [255, 69, 0],
    [30, 144, 255],
    [105, 105, 105],
    [165, 42, 42],
    [128, 0, 128],
    [106, 90, 205],
    [220, 20, 60],
    [0, 255, 0],
    [148, 0, 211],
    [0, 0, 139],
    [47, 79, 79],
    [255, 0, 0],
    [0, 139, 139]
];

function CardsField() {
    return (
        <div className={style.container}>
            {initialData.map((value, index) => <Card data={value} key={index}/>)}
        </div>
    )
}

export default CardsField;