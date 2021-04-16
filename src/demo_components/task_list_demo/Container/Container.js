import React, {useState} from 'react';
import style from './Container.module.scss';
import Description from "../Description/Description";

export function Container() {
    let [data, setData] = useState([]);

    return (
        <div className={style.container}>
            <Description/>
        </div>
    );
}