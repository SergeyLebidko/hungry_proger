import React from 'react';
import style from './ContextMenu.module.scss';

const widthMenu = 300;
const heightMenu = 400;

function ContextMenu({x, y, visible}) {
    let top = y, left = x;
    if (window.innerWidth > widthMenu && (left + widthMenu) > window.innerWidth) left = x - widthMenu;
    if (window.innerHeight > heightMenu && (top + heightMenu) > window.innerHeight) top = y - heightMenu;

    if (top < 0) top = 0;
    if (left < 0) left = 0;

    let containerStyle = {top: `${top}px`, left: `${left}px`, width: `${widthMenu}px`, height: `${heightMenu}px`}
    containerStyle = visible ? Object.assign(containerStyle, {display: 'block'}) : containerStyle;
    return (
        <div className={style.container} style={containerStyle}>
            Это контекстное меню
        </div>
    )
}

export default ContextMenu;