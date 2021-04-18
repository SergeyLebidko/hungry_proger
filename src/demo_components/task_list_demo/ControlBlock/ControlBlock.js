import React from 'react';
import style from './ControlBlock.module.scss';
import {Link} from "react-router-dom";

function ControlBlock() {
    return (
        <div className={style.container}>
            <Link to={'/'}>на главную</Link>
        </div>
    );
}

export default ControlBlock;