import React from 'react';
import style from './Button.module.scss';

function Button({minimizeFlag, clickHandler}){
    let className = style.container + ' ' + (minimizeFlag ? style.minimize_size : style.normal_size);
    return (
        <div className={className} onClick={clickHandler}>
            <div/>
            <div/>
            <div/>
        </div>
    )
}

export default Button;