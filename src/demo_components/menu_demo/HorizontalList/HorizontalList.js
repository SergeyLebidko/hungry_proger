import React from 'react';
import style from './HorizontalList.module.scss';

function HorizontalList({items}) {
    return (
        <ul className={style.container}>
            {items.map((value, index) => <li key={index}>{value}</li>)}
        </ul>
    );
}

export default HorizontalList;
