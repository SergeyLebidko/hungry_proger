import React from 'react';
import style from './Contacts.module.scss';
import {headerHeight} from '../App';


function Contacts() {
    let innerStyle = {top: `${headerHeight}px`};
    return (
        <div className={style.container} style={innerStyle}>
            <div>
                <img src="/images/git_logo.png"/>
                <img src="/images/telegram_logo.png"/>
                <img src="/images/hh_logo.png"/>
                <img src="/images/email_logo.png"/>
                <img src="/images/instagram_logo.png"/>
            </div>
        </div>
    );
}

export default Contacts;