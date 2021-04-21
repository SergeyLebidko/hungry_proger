import React from 'react';
import style from './Task.module.scss';

function Task({id, title, toRename, toRemove, toUp, toDown}) {
    return (
        <div className={style.container}>
            <h3 className={style.task_title} onDoubleClick={() => toRename(id)}>
                {title}
            </h3>
            <div className={style.control_block}>
                <span className={style.delete_btn} onClick={() => toRemove(id)}>&#10006;</span>
                <span className={style.move_btn}>&#8660;</span>
                <span className={style.move_btn} onClick={() => toUp(id)}>&#9650;</span>
                <span className={style.move_btn} onClick={() => toDown(id)}>&#9660;</span>
            </div>
        </div>
    );
}

export default Task;