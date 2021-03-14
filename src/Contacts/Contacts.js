import React from 'react';
import style from './Contacts.module.scss';
import {headerHeight} from '../App';


function Contacts() {
    let innerStyle = {top: `${headerHeight}px`};
    return (
        <div className={style.container} style={innerStyle}>
            <div>
                <a href="https://github.com/SergeyLebidko">
                    <img src="/images/git_logo.png"/>
                </a>
                <a href="tg://resolve?domain=@sergeyler">
                    <img src="/images/telegram_logo.png"/>
                </a>
                <a href="https://krasnodar.hh.ru/resume/7a068d12ff072536a70039ed1f514b58767550">
                    <img src="/images/hh_logo.png"/>
                </a>
                <a href="mailto:sergeyler@gmail.com">
                    <img src="/images/email_logo.png"/>
                </a>
                <a href="https://www.instagram.com/sergeyler/">
                    <img src="/images/instagram_logo.png"/>
                </a>
            </div>
        </div>
    );
}

export default Contacts;