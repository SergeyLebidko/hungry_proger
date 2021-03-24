import React from 'react';
import DemoCard from '../DemoCard/DemoCard';
import style from './Demos.module.scss';

import {headerHeight} from '../App';


function Demos({content}) {
    let inlineStyle = {top: `${headerHeight}px`};
    return (
        <div className={style.container} style={inlineStyle}>
            <div>
                <h1 className={style.header}>Demo-компоненты</h1>
                <div className={style.separator}/>
            </div>
            <div className={style.content}>
                <h3>
                    Страницы с примерами компонентов, написанных мной с помощью React и jQuery
                </h3>
                {content === null ? '' : content.map((value, index) => <DemoCard key={index} {...value}/>)}
            </div>
        </div>
    )
}

export default Demos;