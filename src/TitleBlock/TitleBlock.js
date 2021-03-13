import React from 'react';
import SimpleButton from '../SimpleButton/SimpleButton';
import PrintablePhrase from '../PrintablePhrase/PrintablePhrase';
import style from './TitleBlock.module.css';
import {headerHeight} from '../App';


function TitleBlock() {
    let titleBlockStyle = {height: headerHeight}
    return (
        <div className={style.title_block} style={titleBlockStyle}>
            <div>
                <PrintablePhrase phrase="Сергей Лебидко. Junior web-developer" delay={900}/>
                <SimpleButton text="Узнать больше" delay={3400}/>
            </div>
        </div>
    );
}

export default TitleBlock;
