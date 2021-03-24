import React from 'react';
import style from './Demos.module.scss';

import {headerHeight} from '../App';


function Demos() {
    let inlineStyle = {top: `${headerHeight}px`};
    return (
        <div className={style.container} style={inlineStyle}>
            <div>
                <h1 className={style.header}>Demo-компоненты</h1>
                <div className={style.separator}/>
            </div>
            <div className={style.content}>
                <h3>
                    Страницы с демонстрационными компонентами, написанными мной с помощью React и jQuery
                </h3>
            </div>
        </div>
    )
}

export default Demos;