import React from 'react';
import style from './HorizontalList.module.scss';

function HorizontalList({items, itemClickHandler}) {
    return (
        <ul className={style.container}>
            {items.map((value, index) => <li key={index} onClick={() => itemClickHandler(index)}>{value}</li>)}
        </ul>
    );
}

export default HorizontalList;
