import React from 'react';
import Card from '../Card/Card';
import style from './Container.module.scss';

export function Container(){
    let items = ['balloon', 'car', 'krasnodar', 'mountain', 'nature', 'new_york', 'sea', 'sculpture'];

    return (
        <div className={style.container}>
            <div className={style.card_list}>
                {items.map((item, index) => <Card item={item} key={index}/>)}
            </div>
        </div>
    )
}
