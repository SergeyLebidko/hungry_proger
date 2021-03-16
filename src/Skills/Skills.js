import React from 'react';
import SimpleButton from "../SimpleButton/SimpleButton";
import style from './Skills.module.scss';
import {headerHeight} from '../App';


function Skills() {
    let inlineStyle = {top: `${headerHeight}px`};
    return (
        <div className={style.container} style={inlineStyle}>
            <div>
                <h1 className={style.header}>Технологии</h1>
                <div className={style.separator}/>
            </div>
            <div className={style.content}>
                <ul>
                    <li>Python</li>
                    <li>Django</li>
                    <li>Django Rest Framework</li>
                    <li>JavaScript</li>
                    <li>jQuery</li>
                    <li>React</li>
                    <li>HTML</li>
                    <li>CSS</li>
                </ul>
                <SimpleButton text="Подробнее" delay={0} action={e => e}/>
            </div>
        </div>
    )
}

export default Skills;