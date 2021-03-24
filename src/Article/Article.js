import React from 'react';
import {withRouter} from 'react-router-dom';
import SimpleButton from '../SimpleButton/SimpleButton';
import {parseText} from '../utils';
import style from './Article.module.scss';

import {headerHeight} from '../App';

function Article({title, content, history}) {
    let headerElements = [];
    content.header.map((value, index) => headerElements.push(<p key={index}>{parseText(value, style.dedicated)}</p>));

    let bodyElements = [];
    content.body.map((value, index) => bodyElements.push(<p key={index}><span>{parseText(value, style.dedicated)}</span></p>));

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