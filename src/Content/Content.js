import React from 'react';
import Avatar from '../Avatar/Avatar';
import style from './Content.module.css';
import {headerHeight} from '../App';


function Content() {
    let inlineStyle = {top: `${headerHeight}px`, height: `${headerHeight}px`};
    return (
        <div className={style.container} style={inlineStyle}>
            <div className={style.cap1}/>
            <div className={style.cap2}/>
            <div className={style.content_block}>
                <Avatar/>
            </div>
        </div>
    )
}

export default Content;