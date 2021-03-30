import React from 'react';
import style from './Container.module.scss'

const backgroundImage = 'url(/images/demo_components/menu_demo/back_container.png';
const backgroundGradient = 'radial-gradient(circle, transparent, rgba(30, 30, 30, 0.6))';

export function Container() {
    let inlineStyle = {
        backgroundImage: `${backgroundGradient}, ${backgroundImage}`
    }
    return (
        <div className={style.container} style={inlineStyle}/>
    )
}