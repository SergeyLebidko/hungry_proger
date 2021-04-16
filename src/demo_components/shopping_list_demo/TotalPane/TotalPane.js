import React from 'react';
import style from './TotalPane.module.scss';

function TotalPane({dataList}) {
    if (dataList.length === 0) return '';

    let value = 0;
    for (let {total} of dataList) value += total;
    return (
        <div className={style.container}>
            {value}
        </div>
    )
}

export default TotalPane;