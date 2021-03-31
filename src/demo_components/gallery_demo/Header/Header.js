import React from 'react';
import style from './Header.module.scss';

function Header() {
    let captionStyle = {backgroundImage: 'url(/images/demo_components/gallery_demo/back.png)'}
    let containerStyle = {backgroundImage: 'url(/images/demo_components/gallery_demo/header.jpg)'}
    return (
        <div className={style.container} style={containerStyle}>
            <h2 style={captionStyle}>
                Здесь представлены компоненты с изображениями, организованные в небольшую галерею.
                Чтобы вернуться на главную страницу - кликните на крестик в правом верхнем углу.
            </h2>
        </div>
    )
}

export default Header;