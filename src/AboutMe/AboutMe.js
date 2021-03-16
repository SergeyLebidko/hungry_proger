import React from 'react';
import style from './AboutMe.module.scss';
import SimpleButton from '../SimpleButton/SimpleButton';
import {headerHeight} from '../App';
import {textParser} from '../utils';


function AboutMe({text}) {
    let {headerText} = textParser(text);

    let inlineStyle = {top: `${headerHeight}px`};
    return (
        <div className={style.container} style={inlineStyle}>
            <div>
                <h1 className={style.header}>Обо мне</h1>
                <div className={style.separator}/>
            </div>
            <div className={style.content}>
                <img src="/images/avatar.jpg"/>
                <div>
                    <p>
                        {headerText.map(line => <p>{line}</p>)}
                    </p>
                    <SimpleButton text="Читать полностью" delay={0} action={e => e}/>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;