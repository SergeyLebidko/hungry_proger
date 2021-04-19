import React from 'react';
import Task from '../Task/Task';
import style from './Category.module.scss';

function Category({id, title, taskList, toLeft, toRight}) {
    return (
        <div className={style.container}>
            <div className={style.color_label}/>
            <h3>{title}</h3>
            <div className={style.control_block}>
                <span onClick={() => toLeft(id)}>&#9668;</span>
                <span>&#10006;</span>
                <span onClick={() => toRight(id)}>&#9658;</span>
            </div>
            <div>
                {taskList.map(value => <Task title={value}/>)}
            </div>
        </div>
    );
}

export default Category;