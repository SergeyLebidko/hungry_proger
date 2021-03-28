import React, {useEffect, useState} from 'react';
import style from './UpMenu.module.scss';

function UpMenu({items}) {
    let containerInlineStyle = {backgroundImage: 'url(/images/demo_components/up_menu_demo/back_menu.png)'}
    return (
        <div className={style.container} style={containerInlineStyle}>
            <img src={"/images/demo_components/up_menu_demo/logo.png"}/>
            <div className={style.menu_button}>
                <div/>
                <div/>
                <div/>
                <div/>
                <div/>
                <div/>
            </div>
            <ul className={style.horizontal}>
                {items.map((value, index) => <li key={index}>{value}</li>)}
            </ul>
        </div>
    );
}

export default UpMenu;