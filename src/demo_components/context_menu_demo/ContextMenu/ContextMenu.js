import React, {useState} from 'react';
import ColorChooser from '../ColorChooser/ColorChooser';
import style from './ContextMenu.module.scss';

import {redType, greenType, blueType} from '../ColorChooser/ColorChooser';

const widthMenu = 300;
const heightMenu = 400;

function ContextMenu({xClick, yClick, data}) {
    let [red, setRed] = useState(data !== null ? data.color[0] : 0);
    let [green, setGreen] = useState(data !== null ? data.color[1] : 0);
    let [blue, setBlue] = useState(data !== null ? data.color[2] : 0);

    // Функция для предотвращения распространения событий мы за пределы меню
    function stopEvent(event) {
        event.stopPropagation();
        event.preventDefault();
    }

    // Формируем содержимое меню основываясь на переданных данных
    let content;
    if (data !== null) {
        let colorPaneInline = {
            backgroundColor: `rgb(${red}, ${green}, ${blue})`
        }
        console.log(colorPaneInline);
        content = (
            <div className={style.content}>
                <ColorChooser init={data.color[0]} type={redType} chooseHandler={r => setRed(r)}/>
                <ColorChooser init={data.color[1]} type={greenType} chooseHandler={g => setGreen(g)}/>
                <ColorChooser init={data.color[2]} type={blueType} chooseHandler={b => setBlue(b)}/>
                <div className={style.color_pane} style={colorPaneInline}/>
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
    return (
        <div className={style.container} style={containerStyle} onClick={stopEvent} onContextMenu={stopEvent}>
            {content}
        </div>
    )
}

export default ContextMenu;