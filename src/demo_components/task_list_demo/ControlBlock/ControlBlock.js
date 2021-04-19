import React from 'react';
import style from './ControlBlock.module.scss';
import {Link} from "react-router-dom";

function ControlBlock({categoryCount, taskCount}) {
    return (
        <div className={style.container}>
            <Link to={'/'}>на главную</Link>
            <div>
                <span className={style.title}>Категорий:</span>
                <span className={style.count}>{categoryCount}</span>
                <span className={style.add}>+</span>
                <span className={style.title}>Задач:</span>
                <span className={style.count}>{taskCount}</span>
                <span className={style.add}>+</span>
            </div>
        </div>
    );
}

export default ControlBlock;