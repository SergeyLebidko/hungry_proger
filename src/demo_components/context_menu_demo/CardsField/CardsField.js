import React from 'react';
import Card from '../Card/Card';
import style from './CardsField.module.scss';

function CardsField({colorsData}) {
    return (
        <div className={style.container}>
            {colorsData.map((value, index) => <Card data={value} key={index}/>)}
        </div>
    )
}

export default CardsField;