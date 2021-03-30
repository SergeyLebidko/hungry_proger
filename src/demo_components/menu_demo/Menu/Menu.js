import React from 'react';
import style from './Menu.module.scss';

function Menu({minimizeFlag}) {
    let inlineStyle = {backgroundImage: 'url(/images/demo_components/menu_demo/back_menu.png)'}
    return (
        <div className={`${style.container} ${minimizeFlag ? style.minimize_height : style.standard_height}`}
             style={inlineStyle}/>
    );
}

export default Menu;