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
                    Это демонстрация компонента с контекстным меню. На пустом поле внизу можно кликать правой кнопкой
                    мышки для того, чтобы вызвать меню создания цветовой карточки. Также можно вызывать меню
                    для редактирования и удаления уже созданных карточек.
                </h3>
                <nav>
                    <SimpleButton text={"На главную"} pk={"cmd_close_btn"} delay={0} action={() => history.push('/')}/>
                </nav>
            </div>
            <div className={style.cards_block}>

            </div>
        </div>
    )
})

export {Container};