import React from 'react';
import style from './VerticalList.module.scss';

function VerticalList({items, itemClickHandler, minimizeFlag, hasOpen}) {
    let className = style.container + ' ' + (minimizeFlag ? style.minimized_position : style.normal_position) + ' ' + (hasOpen ? style.open : style.closed);
    return (
        <ul className={className}>
            {items.map((value, index) => <li key={index} onClick={() => itemClickHandler(index)}>{value}</li>)}
        </ul>
    )
}

export default VerticalList;