import React from 'react';
import style from './VerticalList.module.scss';

function VerticalList({items, minimizeFlag}) {
    let className = style.container + ' ' + (minimizeFlag ? style.minimized_position : style.normal_position);
    return (
        <ul className={className}>
            {items.map((value, index) => <li key={index}>{value}</li>)}
        </ul>
    )
}

export default VerticalList;