import React from 'react';
import style from './UpMenu.module.scss';

function UpMenu({items}) {
    let inlineStyle = {backgroundImage: 'url(/images/demo_components/up_menu_demo/back_menu.png)'}
    return (
        <div className={style.container} style={inlineStyle}>
            <ul>
                {items.map((value, index) => <li key={index}>{value}</li>)}
            </ul>
        </div>
    );
}

export default UpMenu;