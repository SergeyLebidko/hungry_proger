import React from 'react';
import style from './HeaderRow.module.scss';

function HeaderRow({columns}) {
    return (
        <tr className={style.container}>
            {columns.map((value, index) => <th key={index}>{value}</th>)}
        </tr>
    )
}

export default HeaderRow;