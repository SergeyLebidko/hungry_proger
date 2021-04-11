import React from 'react';
import {withRouter} from 'react-router-dom';
import style from './Header.module.scss';

function Header({history}) {
    return (
        <div className={style.container}>
            <img src={'/images/demo_components/slider_demo/header1.jpg'}/>
            <img src={'/images/demo_components/slider_demo/header2.jpg'}/>
            <img src={'/images/demo_components/slider_demo/header3.jpg'}/>
            <img src={'/images/demo_components/slider_demo/header4.jpg'}/>
            <div className={style.cap_block}/>
            <div className={style.description}>
                <h3>Набор слайдеров на React и jQuery</h3>
                <span onClick={() => history.push('/')}>На главную</span>
            </div>
            <div className={style.slide_control}>
                <div/>
                <div className={style.current}/>
                <div/>
                <div/>
            </div>
        </div>
    )
}

export default withRouter(Header);