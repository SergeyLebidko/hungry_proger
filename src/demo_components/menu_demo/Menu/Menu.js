import React from 'react';
import Logo from '../Logo/Logo';
import style from './Menu.module.scss';

function Menu({minimizeFlag}) {
    let inlineStyle = {backgroundImage: 'url(/images/demo_components/menu_demo/back_menu.png)'}
    return (
        <div className={`${style.container} ${minimizeFlag ? style.minimize_height : style.standard_height}`}
             style={inlineStyle}>
            <Logo minimizeFlag={minimizeFlag}/>
        </div>
    );
}

export default Menu;