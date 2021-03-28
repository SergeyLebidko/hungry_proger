import React from 'react'
import UpMenu from '../UpMenu/UpMenu';
import style from './UpMenuContainer.module.css';

function UpMenuContainer() {
    let items = ['О нас', 'Проекты', 'Услуги', 'Портфолио', 'Отзывы', 'Блог', 'Котакты'];
    let inlineStyle = {
        backgroundImage: 'radial-gradient(circle, transparent, rgba(0, 0, 0, 0.5)), url(/images/demo_components/up_menu_demo/back_container.png)'
    }
    return (
        <div className={style.container} style={inlineStyle}>
            <UpMenu items={items}/>
        </div>
    );
}

export default UpMenuContainer;