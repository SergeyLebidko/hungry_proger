import React from 'react';
import {withRouter} from 'react-router-dom';
import CardsField from '../CardsField/CardsField';
import SimpleButton from '../../../SimpleButton/SimpleButton';
import style from './Container.module.scss';

const backgroundImage = 'url(/images/demo_components/context_menu_demo/back_container.png)';
const backgroundGradient = 'radial-gradient(circle, transparent, rgba(30, 30, 30, 0.6))';

const Container = withRouter(({history}) => {
    let containerStyle = {backgroundImage: `${backgroundGradient}, ${backgroundImage}`};
    return (
        <div className={style.container} style={containerStyle}>
            <div className={style.description}>
                <h3>
                    Перед вами 16 карточек разных цветов.
                    Чтобы изменить цвет карточки - кликните на ней правой кнопкой мышки и вызовите компонент с
                    контекстным меню для редактирования цвета.
                </h3>
                <nav>
                    <SimpleButton text={"На главную"} pk={"cmd_close_btn"} delay={0} action={() => history.push('/')}/>
                    <SimpleButton text={"Создать новые цвета"} pk={"cmd_close_btn"} delay={0} action={() => history.push('/')}/>
                </nav>
            </div>
            <CardsField/>
        </div>
    )
})

export {Container};