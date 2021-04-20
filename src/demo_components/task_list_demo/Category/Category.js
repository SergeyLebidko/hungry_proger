import React from 'react';
import Task from '../Task/Task';
import style from './Category.module.scss';

import {colorPresets} from '../CategoryList/CategoryList';

function Category({id, title, colorPreset, taskList, toLeft, toRight, toRemove, toRename, changeColorHandler}) {

    let colorLabelInline = {backgroundColor: colorPresets[colorPreset]};
    return (
        <div className={style.container}>
            <div className={style.color_label} style={colorLabelInline} onClick={() => changeColorHandler(id)}/>
            <h3 onDoubleClick={() => toRename(id)}>{title}</h3>
            <div className={style.control_block}>
                <span onClick={() => toLeft(id)}>&#9668;</span>
                <span onClick={() => toRemove(id)}>&#10006;</span>
                <span onClick={() => toRight(id)}>&#9658;</span>
            </div>
            <div>
                {taskList.map(value => <Task title={value}/>)}
            </div>
        </div>
    );
}

export default Category;