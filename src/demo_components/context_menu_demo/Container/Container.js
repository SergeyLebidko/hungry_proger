import React, {useRef, useState, useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import Card from '../Card/Card';
import SimpleButton from '../../../SimpleButton/SimpleButton';
import ContextMenu from '../ContextMenu/ContextMenu';
import style from './Container.module.scss';

const Container = withRouter(({history}) => {
    // Временный массив данных. В дальнейшем должен быть удален
    let [cardsData, setCardsData] = useState([]);

    let [contextX, setContextX] = useState(0);
    let [contextY, setContextY] = useState(0);
    let [contextData, setContextData] = useState(null);
    let [hasMenuShow, setHasMenuShow] = useState(false);

    let containerRef = useRef(null);
    let descriptionRef = useRef(null);

    // Обработчик вызова меню на контейнере
    function containerContextHandler(event) {
        if (event.target !== containerRef.current) {
            setHasMenuShow(false);
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
        setHasMenuShow(true);
        if (cardIndex !== null) {
            setContextData({color: cardsData[cardIndex], cardIndex});
        } else {
            setContextData(null);
        }
    }

    // При клике на контейнере убираем меню с экрана
    function clickHandler() {
        setHasMenuShow(false);
    }

    useEffect(() => {
        // Отслеживаем изменение размеров экрана и скрываем меню
        function hideMenu() {
            setHasMenuShow(false);
        }

        window.addEventListener('resize', hideMenu);

        return () => window.removeEventListener('resize', hideMenu);
    });

    // Функция для создания компонента карточки отдельного цвета
    function cardsMap(value, index) {
        return (
            <Card key={index}
                  data={value} index={index}
                  contextHandler={cardContextHandler}
                  hasHide={hasMenuShow && contextData !== null && contextData.cardIndex !== index}
            />
        );
    }

    // Обработчк отмены действий в меню
    function menuCancelHandler() {
        setHasMenuShow(false);
    }

    // Обработчик сохранения карточки
    function saveCardHandler(data) {
        setCardsData(cardsData.map((color, index) => {
            if (index !== data.cardIndex) return color;
            return data.color;
        }));
        setHasMenuShow(false);
    }

    // Обработчк добавления карточки
    function addCardHandler(color){
        setCardsData([...cardsData, color]);
        setHasMenuShow(false);
    }

    // Обработчик удаления карточки
    function removeCardHandler(cardIndex){
        setCardsData(cardsData.filter((_, index) => cardIndex !== index));
        setHasMenuShow(false);
    }

    return (
        <div ref={containerRef} className={style.container}
             onContextMenu={containerContextHandler} onClick={clickHandler} onScroll={() => setHasMenuShow(false)}>
            <div ref={descriptionRef} className={style.description}>
                <h3>
                    Это демонстрация компонента с контекстным меню. На пустом поле внизу можно кликать правой кнопкой
                    мышки для того, чтобы вызвать меню создания цветовой карточки. Также можно вызывать меню
                    для редактирования и удаления уже созданных карточек. На сенсорных экранах для вызова меню
                    нужно просто некоторое время удерживать палец на одном месте экрана.
                </h3>
                <nav>
                    <SimpleButton text={"На главную"} pk={"cmd_close_btn"} delay={0} action={() => history.push('/')}/>
                    {cardsData.length > 0 ?
                        <SimpleButton text={"Удалить все карточки"}
                                      pk={"rm_cards_btn"}
                                      delay={0}
                                      action={() => setCardsData([])}
                        />
                        :
                        ''
                    }

                </nav>
            </div>
            <div className={style.cards_block}>
                {cardsData.map(cardsMap)}
            </div>
            {hasMenuShow ?
                <ContextMenu key={Math.random()}
                             xClick={contextX}
                             yClick={contextY}
                             data={contextData}
                             menuCancelHandler={menuCancelHandler}
                             saveCardHandler={saveCardHandler}
                             addCardHandler={addCardHandler}
                             removeCardHandler={removeCardHandler}
                />
                :
                ''
            }
        </div>
    )
})

export {Container};