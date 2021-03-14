import React from 'react';
import SimpleButton from '../SimpleButton/SimpleButton';
import PrintablePhrase from '../PrintablePhrase/PrintablePhrase';
import style from './TitleBlock.module.scss';
import {headerHeight} from '../App';


function TitleBlock() {
    let titleBlockStyle = {height: headerHeight}
    return (
        <div className={style.title_block} style={titleBlockStyle}>
            <div>
                <PrintablePhrase phrase="Сергей Лебидко. Junior web-developer" delay={700}/>
                <SimpleButton text="Узнать больше" delay={1900}/>
            </div>
        </div>
    );
}

export default TitleBlock;
