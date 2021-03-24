import React from 'react';
import {withRouter} from 'react-router-dom';
import SimpleButton from '../SimpleButton/SimpleButton';
import style from './Article.module.scss';

import {headerHeight} from '../App';

// Функция получает текст и оборачивает его в элементы React, учитывая при этом теги форматирования
function parseText(text) {
    let result = [];
    let line = text;
    let dedicatedText, anchorRef, anchorText;
    let pos = -1;
    while (pos < line.length && line !== '') {
        pos++;
        if (pos === line.length) {
            result.push(<span>{line}</span>);
        }
        if (line[pos] === '{') {
            if (pos > 0) result.push(<span>{line.slice(0, pos)}</span>);
            [, dedicatedText, line] = /^\{(.+?)\}(.*)/s.exec(line.slice(pos));
            result.push(<span className={style.dedicated}>{dedicatedText}</span>);
            pos = -1;
        }
        if (line[pos] === '[') {
            if (pos > 0) result.push(<span>{line.slice(0, pos)}</span>);
            [, anchorRef, anchorText, line] = /^\[(.+?)\]\[(.+?)\](.*)/s.exec(line.slice(pos));
            result.push(<span><a href={anchorRef}>{anchorText}</a></span>);
            pos = -1;
        }
    }
    return result;
}

function Article({title, content, history}) {
    let headerElements = [];
    content.header.map((value, index) => headerElements.push(<p key={index}>{parseText(value)}</p>));

    let bodyElements = [];
    content.body.map((value, index) => bodyElements.push(<p key={index}><span>{parseText(value)}</span></p>));

    let inlineStyle = {minHeight: headerHeight};
    return (
        <div className={style.container} style={inlineStyle}>
            <div className={style.cap}/>
            <div className={style.content}>
                <div className={style.title}>{title}</div>
                <div className={style.separator}/>
                <div className={style.header}>
                    {headerElements}
                </div>
                <div>
                    {bodyElements}
                </div>
                <SimpleButton text="На главную" delay={0} action={() => history.push('/')}/>
            </div>
        </div>
    );
}

export default withRouter(Article);