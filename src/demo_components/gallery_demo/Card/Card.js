import React from 'react';
import style from './Card.module.scss';

export const left_pos = 'l';
export const right_pos = 'r';

function Card({item, pos}) {
    let containerClassName = style.container;
    if (pos === left_pos) containerClassName += (' ' + style.left_pos);
    if (pos === right_pos) containerClassName += (' ' + style.right_pos);
    return (
        <div className={containerClassName}>
            <img src={`/images/demo_components/gallery_demo/${item.file}1.jpg`}/>
            <img src={`/images/demo_components/gallery_demo/${item.file}2.jpg`}/>
            <div className={style.title}>
                <h1>{item.title}</h1>
            </div>
        </div>
    )
}

export default Card;