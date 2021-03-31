import React from 'react';
import style from './Card.module.scss';

function Card({item}){
    return (
        <div className={style.container}>
            <img src={'/images/demo_components/gallery_demo/' + item + '1.jpg'}/>
        </div>
    )
}

export default Card;