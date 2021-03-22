import React from 'react';
import SimpleButton from '../SimpleButton/SimpleButton';
import PrintablePhrase from '../PrintablePhrase/PrintablePhrase';
import style from './TitleBlock.module.scss';
import {headerHeight} from '../App';


function scrollToAbout() {
    let current = window.pageYOffset;
    let stop = headerHeight + 3;
    let delta = 50;
    let timer = setInterval(() => {
        current += delta;
        if (current >= stop) {
            current = stop;
            clearInterval(timer);
        }
        window.scrollTo(0, current);
    }, 12);

}


function TitleBlock() {
    let titleBlockStyle = {height: headerHeight}
    return (
        <div className={style.title_block} style={titleBlockStyle}>
            <div>
                <PrintablePhrase phrase="Сергей Лебидко. Junior web-developer" delay={700} pk="tb_phrase"/>
                <SimpleButton text="Узнать больше" delay={1900} action={scrollToAbout} pk="tb_button"/>
            </div>
        </div>
    );
}

export default TitleBlock;
