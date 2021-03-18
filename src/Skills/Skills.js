import React from 'react';
import SimpleButton from "../SimpleButton/SimpleButton";
import style from './Skills.module.scss';
import {headerHeight} from '../App';


function Skills({content}) {
    let inlineStyle = {top: `${headerHeight}px`};
    return (
        <div className={style.container} style={inlineStyle}>
            <div>
                <h1 className={style.header}>Технологии</h1>
                <div className={style.separator}/>
            </div>
            <div className={style.content}>
                <ul>
                    {content === null ? '' : content.map((value, index) => <li key={index}>{value}</li>)}
                </ul>
                <SimpleButton text="Подробнее" delay={0} action={e => e}/>
            </div>
        </div>
    )
}

export default Skills;