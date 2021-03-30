import React from 'react';
import style from './Logo.module.scss';

function Logo({minimizeFlag}) {
    return (
        <img className={minimizeFlag ? style.logo_minimize_size : style.logo_standard_size}
             src={'/images/demo_components/menu_demo/logo.png'}
             alt={'logo'}/>
    )
}

export default Logo;