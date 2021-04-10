import React, {useState} from 'react';
import ColorChooser from '../ColorChooser/ColorChooser';
import createGradient from '../gradientCreator';
import style from './ContextMenu.module.scss';

import {redType, greenType, blueType} from '../ColorChooser/ColorChooser';

const widthMenu = 350;
const heightMenu = 500;

function ContextMenu({xClick, yClick, data, menuCancelHandler, saveCardHandler, addCardHandler, removeCardHandler}) {
    let [red, setRed] = useState(data !== null ? data.color[0] : 0);
    let [green, setGreen] = useState(data !== null ? data.color[1] : 0);
    let [blue, setBlue] = useState(data !== null ? data.color[2] : 0);

    // Функция для предотвращения распространения событий мы за пределы меню
    function stopEvent(event) {
        event.stopPropagation();
        event.preventDefault();
    }

    function createRandomColor() {
        setRed(Math.random() * 256,);
        setGreen(Math.random() * 256,);
        setBlue(Math.random() * 256,)
    }

    // Формируем содержимое меню основываясь на переданных данных
    let content;
    let colorPaneInline = createGradient(red, green, blue);
    if (data !== null) {
        content = (
            <div className={style.content}>
                <button onClick={createRandomColor}>
                    Случайный цвет
                </button>
                <ColorChooser init={red} type={redType} chooseHandler={r => setRed(r)}/>
                <ColorChooser init={green} type={greenType} chooseHandler={g => setGreen(g)}/>
                <ColorChooser init={blue} type={blueType} chooseHandler={b => setBlue(b)}/>
                <div className={style.color_pane} style={colorPaneInline}/>
                <button onClick={() => saveCardHandler(
                    {color: [Math.floor(red), Math.floor(green), Math.floor(blue)], cardIndex: data.cardIndex}
                )}>
                    Сохранить
                </button>
                <button onClick={menuCancelHandler}>
                    Отменить
                </button>
                <button onClick={() => removeCardHandler(data.cardIndex)}>
                    Удалить карточку
                </button>
            </div>);
    } else {
        content = (
            <div className={style.content}>
                <button onClick={createRandomColor}>
                    Случайный цвет
                </button>
                <ColorChooser init={red} type={redType} chooseHandler={r => setRed(r)}/>
                <ColorChooser init={green} type={greenType} chooseHandler={g => setGreen(g)}/>
                <ColorChooser init={blue} type={blueType} chooseHandler={b => setBlue(b)}/>
                <div className={style.color_pane} style={colorPaneInline}/>
                <button onClick={() => addCardHandler([Math.floor(red), Math.floor(green), Math.floor(blue)])}>
                    Создать карточку
                </button>
                <button onClick={menuCancelHandler}>
                    Отменить
                </button>
            </div>);
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