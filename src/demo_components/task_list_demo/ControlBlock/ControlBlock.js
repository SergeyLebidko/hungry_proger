import React from 'react';
import style from './ControlBlock.module.scss';
import {Link} from "react-router-dom";

function ControlBlock({categoryCount, taskCount, addTaskEnabled, showCreateCategory, showCreateTask}) {
    return (
        <div className={style.container}>
            <Link to={'/'}>на главную</Link>
            <div>
                <div>
                    <span className={style.title}>Категорий:</span>
                    <span className={style.count}>{categoryCount}</span>
                    <span className={style.add} onClick={showCreateCategory}>+</span>
                </div>
                <div>
                    <span className={style.title}>Задач:</span>
                    <span className={style.count}>{taskCount}</span>
                    {addTaskEnabled ? <span className={style.add} onClick={showCreateTask}>+</span> : ''}
                </div>
            </div>
        </div>
    );
}

export default ControlBlock;