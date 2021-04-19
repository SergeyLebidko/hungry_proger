import React from 'react';
import style from './Task.module.scss';

function Task({title}) {
    return (
        <div className={style.container}>{title}</div>
    );
}

export default Task;