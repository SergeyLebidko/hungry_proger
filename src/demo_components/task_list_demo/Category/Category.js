import React from 'react';
import Task from '../Task/Task';
import style from './Category.module.scss';

function Category() {

    // Код-заглушка. Должен быть удален
    let taskList = [];
    for (let index = 0; index < 8; index++) {
        taskList.push(<Task key={index}/>);
    }

    return (
        <div className={style.container}>
            {taskList}
        </div>
    );
}

export default Category;