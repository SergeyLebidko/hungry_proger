import React from 'react';
import style from './Card.module.scss';

function Card({item}) {
    return (
        <div className={style.container}>
            <img src={`/images/demo_components/gallery_demo/${item.file}1.jpg`}/>
            <div className={style.title}>
                <h1>{item.title}</h1>
            </div>
        </div>
    )
}

export default Card;