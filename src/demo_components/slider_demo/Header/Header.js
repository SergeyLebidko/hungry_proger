import React from 'react';
import {withRouter} from 'react-router-dom';
import style from './Header.module.scss';

function Header({history}) {
    return (
        <div className={style.container}>
            <div className={style.image_block}
                 style={{backgroundImage: 'url(/images/demo_components/slider_demo/header1.jpg)'}}
            />
            <div className={style.image_block}
                 style={{backgroundImage: 'url(/images/demo_components/slider_demo/header2.jpg)'}}
            />
            <div className={style.image_block}
                 style={{backgroundImage: 'url(/images/demo_components/slider_demo/header3.jpg)'}}
            />
            <div className={style.image_block}
                 style={{backgroundImage: 'url(/images/demo_components/slider_demo/header4.jpg)'}}
            />
            <div className={style.cap_block}/>
            <div className={style.description}>
                <h3>Набор слайдеров на React и jQuery</h3>
                <span onClick={() => history.push('/')}>На главную</span>
            </div>
        </div>
    )
}

export default withRouter(Header);