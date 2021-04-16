import React from 'react';
import Table from '../Table/Table';
import Description from '../Description/Description';
import style from './Container.module.scss';

export function Container() {
    return (
        <div className={style.container}>
            <Description/>
            <Table/>
        </div>
    );
}