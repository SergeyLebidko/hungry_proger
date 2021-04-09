import React from 'react';
import {withRouter} from 'react-router-dom';
import Card from '../Card/Card';
import SimpleButton from '../../../SimpleButton/SimpleButton';
import style from './Container.module.scss';

const Container = withRouter(({history}) => {
    return (
        <div className={style.container}>
            <div className={style.description}>
                <h3>
                    Перед вами 21 карточка с разными цветами.
                    Чтобы изменить цвет карточки - кликните на ней правой кнопкой мышки и вызовите компонент с
                    контекстным меню для редактирования цвета.
                </h3>
                <nav>
                    <SimpleButton text={"На главную"}
                                  pk={"cmd_close_btn"}
                                  delay={0}
                                  action={() => history.push('/')}
                    />
                </nav>
            </div>
            <div className={style.cards_block}>
                <Card data={[30, 144, 255]}/>
            </div>
        </div>
    )
})

export {Container};