import React, {useRef, useState} from 'react';
import {withRouter} from 'react-router-dom';
import Card from '../Card/Card';
import SimpleButton from '../../../SimpleButton/SimpleButton';
import ContextMenu from '../ContextMenu/ContextMenu';
import style from './Container.module.scss';

const Container = withRouter(({history}) => {
    // Временный массив данных. В дальнейшем должен быть удален
    let cardsData = [[34, 139, 34], [30, 144, 255], [255, 69, 0]];

    let [contextX, setContextX] = useState(0);
    let [contextY, setContextY] = useState(0);
    let [contextData, setContextData] = useState(null);
    let [visibleContext, setVisibleContext] = useState(false);

    let containerRef = useRef(null);
    let descriptionRef = useRef(null);

    // Обработчик вызова меню на контейнере
    function containerContextHandler(event) {
        if (event.target !== containerRef.current) {
            setVisibleContext(false);
            return;
        }
        showContextMenu(event);
    }

    // Обработчик вызова меню на карточке
    function cardContextHandler(event, index) {
        showContextMenu(event, index);
    }

    function showContextMenu(event, cardIndex = null) {
        event.stopPropagation();
        event.preventDefault();
        setContextX(event.clientX);
        setContextY(event.clientY);
        setVisibleContext(true);
        if (cardIndex !== null) {
            setContextData({color: cardsData[cardIndex], cardIndex});
        } else {
            setContextData(null);
        }
    }

    // При клике на контейнере убираем меню с экрана
    function clickHandler() {
        setVisibleContext(false);
    }

    function cardsMap(value, index) {
        return (
            <Card key={index}
                  data={value} index={index}
                  contextHandler={cardContextHandler}
                  hasHide={visibleContext && contextData !== null && contextData.cardIndex !== index}
            />
        );
    }

    return (
        <div ref={containerRef} className={style.container} onContextMenu={containerContextHandler}
             onClick={clickHandler}>
            <div ref={descriptionRef} className={style.description}>
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
                {cardsData.map(cardsMap)}
            </div>
            <ContextMenu xClick={contextX} yClick={contextY} visible={visibleContext} data={contextData}/>
        </div>
    )
})

export {Container};