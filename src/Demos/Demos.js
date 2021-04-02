import React from 'react';
import DemoCard from '../DemoCard/DemoCard';
import style from './Demos.module.scss';


function Demos({content, windowSize}) {
    let inlineStyle = {top: `${windowSize.windowHeight}px`};
    return (
        <div className={style.container} style={inlineStyle}>
            <div>
                <h1 className={style.header}>Demo-компоненты</h1>
                <div className={style.separator}/>
            </div>
            <div className={style.content}>
                <h3>
                    Страницы с примерами компонентов, написанных мной с помощью React и SCSS
                </h3>
                {content === null ? '' : content.map((value, index) => <DemoCard key={index} {...value}/>)}
            </div>
        </div>
    )
}

export default Demos;