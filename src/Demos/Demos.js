import React from 'react';
import DemoCard from '../DemoCard/DemoCard';
import style from './Demos.module.scss';


function Demos({content}) {
    let inlineStyle = {}
    return (
        <div className={style.container} style={inlineStyle}>
            <div>
                <h1 className={style.header}>Demo-компоненты</h1>
                <div className={style.separator}/>
            </div>
            <div className={style.content}>
                <h3>
                    Страницы с примерами компонентов, написанных мной на React и jQuery
                </h3>
                {content.map((value, index) => <DemoCard key={index} {...value}/>)}
            </div>
        </div>
    )
}

export default Demos;