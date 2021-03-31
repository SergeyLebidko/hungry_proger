import React from 'react';
import Card from '../Card/Card';
import Header from '../Header/Header';
import style from './Container.module.scss';

const items = [
    {
        file: 'balloon',
        title: 'Воздушный шар'
    },
    {
        file: 'car',
        title: 'Автомобиль'
    },
    {
        file: 'krasnodar',
        title: 'Краснодар'
    },
    {
        file: 'mountain',
        title: 'Горы'
    },
    {
        file: 'nature',
        title: 'Природа'
    },
    {
        file: 'new_york',
        title: 'Нью-Йорк'
    },
    {
        file: 'sea',
        title: 'Море'
    },
    {
        file: 'sculpture',
        title: 'Статуя'
    }
]

export function Container() {
    return (
        <div className={style.container}>
            <Header/>
            <div className={style.card_list}>
                {items.map((item, index) => <Card item={item} key={index}/>)}
            </div>
        </div>
    )
}
