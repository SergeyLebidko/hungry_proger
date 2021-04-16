import React, {useState} from 'react';
import Description from '../Description/Description';
import style from './Container.module.scss';

export function Container() {
    let [data, setData] = useState([]);

    return (
        <div className={style.container}>
            <Description/>
        </div>
    );
}