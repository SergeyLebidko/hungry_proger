import React, {useRef, useState} from 'react';
import {withRouter} from 'react-router-dom';
import Card from '../Card/Card';
import SimpleButton from '../../../SimpleButton/SimpleButton';
import style from './Container.module.scss';
import ContextMenu from "../ContextMenu/ContextMenu";

const Container = withRouter(({history}) => {
    let [contextX, setContextX] = useState(0);
    let [contextY, setContextY] = useState(0);
    let [visibleContext, setVisibleContext] = useState(false);

    let containerRef = useRef(null);

    function contextHandler(event) {
        if (event.target !== containerRef.current) return;
        event.preventDefault();
        setContextX(event.clientX);
        setContextY(event.clientY);
        setVisibleContext(true);
    }

    function clickHandler(event) {
        setVisibleContext(false)
    }

    return (
        <div ref={containerRef} className={style.container} onContextMenu={contextHandler} onClick={clickHandler}>
            <div className={style.description}>
                <h3>
                    Это демонстрация компонента с контекстным меню. На пустом поле внизу можно кликать правой кнопкой
                    мышки для того, чтобы вызвать меню создания цветовой карточки. Также можно вызывать меню
                    для редактирования и удаления уже созданных карточек.
                </h3>
                <nav>
                    <SimpleButton text={"На главную"} pk={"cmd_close_btn"} delay={0} action={() => history.push('/')}/>
                </nav>
            </div>
            <div className={style.cards_block}>
                <Card data={[34, 139, 34]}/>
                <Card data={[30, 144, 255]}/>
                <Card data={[255, 69, 0]}/>
            </div>
            <ContextMenu x={contextX} y={contextY} visible={visibleContext}/>
        </div>
    )
})

export {Container};