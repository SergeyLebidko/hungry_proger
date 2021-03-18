import React from 'react';
import style from './Contacts.module.scss';
import {headerHeight} from '../App';


function Contacts({content}) {
    let innerStyle = {top: `${headerHeight}px`};
    return (
        <div className={style.container} style={innerStyle}>
            <div>
                {content === null ? '' : content.map((value, index) =>
                    <a href={value.url} key={index}>
                        <img src={`/images/${value.logo}`} alt="contact_logo"/>
                    </a>
                )}
            </div>
        </div>
    );
}

export default Contacts;