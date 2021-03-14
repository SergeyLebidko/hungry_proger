import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import style from './Content.module.css';
import {headerHeight} from '../App';


function Content() {
    let inlineStyle = {top: `${headerHeight}px`, minHeight: `${headerHeight}px`};
    return (
        <div className={style.container} style={inlineStyle}>
            <div className={style.content_block}>
                <AboutMe/>
            </div>
        </div>
    )
}

export default Content;