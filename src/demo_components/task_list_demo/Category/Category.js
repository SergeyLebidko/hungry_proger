import React from 'react';
import Task from '../Task/Task';
import style from './Category.module.scss';

import {colorPresets} from '../CategoryList/CategoryList';

function Category({id, title, colorPreset, taskList, toLeft, toRight, toRemove, toRename, changeColorHandler, taskActions}) {

    let colorLabelInline = {backgroundColor: colorPresets[colorPreset]};
    return (
        <div className={style.container}>
            <div className={style.color_label} style={colorLabelInline} onClick={() => changeColorHandler(id)}/>
            <h3 className={style.category_title} onDoubleClick={() => toRename(id)}>{title}</h3>
            <div className={style.control_block}>
                <span className={style.delete_btn} onClick={() => toRemove(id)}>&#10006;</span>
                <span className={style.move_btn} onClick={() => toLeft(id)}>&#9668;</span>
                <span className={style.move_btn} onClick={() => toRight(id)}>&#9658;</span>
            </div>
            <div className={style.task_block}>
                {taskList.map(value => <Task key={value.id} {...value} {...taskActions}/>)}
            </div>
        </div>
    );
}

export default Category;