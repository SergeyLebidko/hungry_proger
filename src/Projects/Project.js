import React from 'react';
import SimpleButton from '../SimpleButton/SimpleButton';
import ProjectCard from '../ProjectCard/ProjectCard';
import style from './Projects.module.scss';
import {headerHeight} from '../App';


function Project({content}) {
    let inlineStyle = {top: `${headerHeight}px`};
    return (
        <div className={style.container} style={inlineStyle}>
            <div>
                <h1 className={style.header}>Проекты</h1>
                <div className={style.separator}/>
            </div>
            <div className={style.content}>
                {content === null ? '' : content.map((value, index) => <ProjectCard key={index} data={value}/>)}
            </div>
            <div className={style.btn_block}>
                <SimpleButton text="Больше моих проектов на github" delay={0} action={() => window.open('https://github.com/SergeyLebidko', '_blank')}/>
            </div>
        </div>
    );
}

export default Project