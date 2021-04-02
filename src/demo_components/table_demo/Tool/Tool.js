import React from 'react';
import style from './Tool.module.scss';

function Tool() {
    return (
        <ul className={style.container}>
            <li>
                Добавить новую строку
            </li>
            <li>
                Добавить копию последней строки
            </li>
            <li>
                Добавить копию выделенной строки
            </li>
            <li>
                Удалить выделенную строку
            </li>
        </ul>
    )
}

export default Tool;