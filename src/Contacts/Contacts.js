import React from 'react';
import style from './Contacts.module.scss';


function Contacts({content, windowSize}) {
    let innerStyle = {} // {top: `${windowSize.windowHeight}px`};
    return (
        <div className={style.container} style={innerStyle}>
            <div>
                {content.map((value, index) =>
                    <a href={value.url} key={index}>
                        <img src={`./images/${value.logo}`} alt="contact_logo"/>
                    </a>
                )}
            </div>
        </div>
    );
}

export default Contacts;