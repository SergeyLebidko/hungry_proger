import React from 'react';
import style from './Header.module.scss';

function Header(){
    let inlineStyle = {backgroundImage: 'url(/images/demo_components/gallery_demo/header.jpg)'}
    return (
        <div className={style.container} style={inlineStyle}/>
    )
}

export default Header;