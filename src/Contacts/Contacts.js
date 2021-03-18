import React from 'react';
import style from './Contacts.module.scss';
import {headerHeight} from '../App';


function Contacts({content}) {
    let innerStyle = {top: `${headerHeight}px`};
    return (
        <div className={style.container} style={innerStyle}>
            <div>
                {content === null ? '' : content.map(value =>
                    <a href={value.url}>
                        <img src={`/images/${value.logo}`}/>
                    </a>
                )}
            </div>
        </div>
    );
}

export default Contacts;