import React from 'react';
import ColorChooser from '../ColorChooser/ColorChooser';
import style from './ContextMenu.module.scss';

import {redType, greenType, blueType} from '../ColorChooser/ColorChooser';

const widthMenu = 300;
const heightMenu = 400;

function ContextMenu({xClick, yClick, visible, data}) {

    // Функция для предотвращения распространения событий мы за пределы меню
    function stopEvent(event) {
        event.stopPropagation();
        event.preventDefault();
    }

    // Формируем содержимое меню основываясь на переданных данных
    let content;
    if (data !== null) {
        content = (
            <div className={style.content}>
                <p>Меню редактирования или удаления карточки {data.color.join(', ')}</p>
                <ColorChooser init={data.color[0]} type={redType}/>
                <ColorChooser init={data.color[1]} type={greenType}/>
                <ColorChooser init={data.color[2]} type={blueType}/>
            </div>);
    } else {
        content = <p>Меню создания карточки</p>
    }

    // Вычисляем координаты появления меню
    let top = yClick, left = xClick;
    if (window.innerWidth > widthMenu && (left + widthMenu) > window.innerWidth) left = xClick - widthMenu;
    if (window.innerHeight > heightMenu && (top + heightMenu) > window.innerHeight) top = yClick - heightMenu;

    if (top < 0) top = 0;
    if (left < 0) left = 0;

    let containerStyle = {top: `${top}px`, left: `${left}px`, width: `${widthMenu}px`, height: `${heightMenu}px`}
    containerStyle = visible ? Object.assign(containerStyle, {display: 'block'}) : containerStyle;
    return (
        <div className={style.container} style={containerStyle} onClick={stopEvent} onContextMenu={stopEvent}>
            {content}
        </div>
    )
}

export default ContextMenu;