import React from 'react';
import style from './Content.module.css';
import {headerHeight} from '../App';


function Content(){
    return (
        <div className={style.container} style={{top: `${headerHeight}px`}}>
            <div className={style.cap1}></div>
            <div className={style.cap2}></div>
        </div>
    )
}

export default Content;