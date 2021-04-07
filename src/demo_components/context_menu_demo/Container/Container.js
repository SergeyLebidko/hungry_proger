import React from 'react';
import CardsField from '../CardsField/CardsField';
import style from './Container.module.scss';

const backgroundImage = 'url(/images/demo_components/context_menu_demo/back_container.png)';
const backgroundGradient = 'radial-gradient(circle, transparent, rgba(30, 30, 30, 0.6))';

export function Container() {
    let containerStyle = {backgroundImage: `${backgroundGradient}, ${backgroundImage}`};
    return (
        <div className={style.container} style={containerStyle}>
            <CardsField/>
        </div>
    )
}