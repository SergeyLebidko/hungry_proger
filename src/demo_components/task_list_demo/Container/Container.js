import React from 'react';
import Description from '../Description/Description';
import CategoryList from '../CategoryList/CategoryList';
import style from './Container.module.scss';

export function Container() {
    return (
        <div className={style.container}>
            <Description/>
            <CategoryList/>
        </div>
    );
}