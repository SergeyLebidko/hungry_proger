import React from 'react';
import SimpleButton from '../SimpleButton/SimpleButton';
import PrintablePhrase from '../PrintablePhrase/PrintablePhrase';
import style from './TitleBlock.module.scss';

function scrollToAbout(windowSize) {
    let current = window.pageYOffset;
    let stop = windowSize.windowHeight + 3;
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

function TitleBlock({windowSize}) {
    return (
        <div className={style.title_block}>
            <div>
                <PrintablePhrase phrase="Сергей Лебидко" delay={200} pk="tb_name_phrase"/>
                <PrintablePhrase phrase="Junior web-developer" delay={970} pk="tb_profession_phrase"/>
                <SimpleButton text="Узнать больше" delay={1900} action={() => scrollToAbout(windowSize)} pk="tb_button"/>
            </div>
        </div>
    );
}

export default TitleBlock;
