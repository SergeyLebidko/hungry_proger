import React from 'react';
import Task from '../Task/Task';
import style from './Category.module.scss';

function Category({title, taskList}) {

    // Код-заглушка. Должен быть удален

    return (
        <div className={style.container}>
            <h3>{title}</h3>
            {taskList.map(value => <Task title={value}/>)}
        </div>
    );
}

export default Category;