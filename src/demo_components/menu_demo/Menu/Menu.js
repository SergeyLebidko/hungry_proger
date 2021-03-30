import React, {useEffect, useState} from 'react';
import Logo from '../Logo/Logo';
import style from './Menu.module.scss';
import HorizontalList from "../HorizontalList/HorizontalList";

const widthLimit = 800;

function Menu({items, minimizeFlag}) {
    useEffect(() => {
        function resizeListener() {
            console.log('resize!');
        }

        window.addEventListener('resize', resizeListener);

        return () => window.removeEventListener('resize', resizeListener);
    }, []);

    let inlineStyle = {backgroundImage: 'url(/images/demo_components/menu_demo/back_menu.png)'}
    return (
        <div className={`${style.container} ${minimizeFlag ? style.minimize_height : style.standard_height}`}
             style={inlineStyle}>
            <Logo minimizeFlag={minimizeFlag}/>
            <HorizontalList items={items}/>
        </div>
    );
}

export default Menu;