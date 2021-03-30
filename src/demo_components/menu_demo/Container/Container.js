import React from 'react';
import style from './Container.module.scss'
import TextBlock from "../TextBlock/TextBlock";

const backgroundImage = 'url(/images/demo_components/menu_demo/back_container.png';
const backgroundGradient = 'radial-gradient(circle, transparent, rgba(30, 30, 30, 0.6))';

const aboutComponentText = 'Это компонент с меню. ' +
    'Оно может подстраиваться под размер экрана, изменяя свою конфигурацию с горизонтального на вертикальное. ' +
    'Если кликнуть на логотип рядом с меню, вы вернетесь на главную страницу';

export function Container() {
    let items = ['О компоненте', 'О нас', 'Услуги', 'Проекты', 'Отзывы', 'Контакты'];
    let textBlocks = items.map((val, i) => {
        return (i == 0 ? <TextBlock key={i} title={val} text={aboutComponentText}/> : <TextBlock key={i} title={val}/>);
    });

    let inlineStyle = {
        backgroundImage: `${backgroundGradient}, ${backgroundImage}`
    }
    return (
        <div className={style.container} style={inlineStyle}>
            {textBlocks}
        </div>
    )
}