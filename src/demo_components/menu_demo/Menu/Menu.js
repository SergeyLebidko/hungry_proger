import React from 'react';
import style from './Menu.module.scss';

const standardHeight = '80px';

function Menu() {
    let inlineStyle = {
        backgroundImage: 'url(/images/demo_components/menu_demo/back_menu.png)',
        height: standardHeight
    }
    return (
        <div className={style.container} style={inlineStyle}/>
    );
}

export default Menu;