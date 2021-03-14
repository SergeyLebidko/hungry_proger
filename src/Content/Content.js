import React from 'react';
import Avatar from '../Avatar/Avatar';
import style from './Content.module.css';
import {headerHeight} from '../App';


function Content(){
    return (
        <div className={style.container} style={{top: `${headerHeight}px`}}>
            <div className={style.cap1}/>
            <div className={style.cap2}/>
            <div className={style.content_block}>
                <Avatar/>
            </div>
        </div>
    )
}

export default Content;