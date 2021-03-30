import React from 'react';
import style from './VerticalList.module.scss';

function VerticalList({items}) {
    return (
        <ul>
            {items.map((value, index) => <li key={index}>{value}</li>)}
        </ul>
    )
}

export default VerticalList;