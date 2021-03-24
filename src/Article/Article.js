import React from 'react';
import {withRouter} from 'react-router-dom';
import SimpleButton from '../SimpleButton/SimpleButton';
import style from './Article.module.scss';

import {headerHeight} from '../App';

function Article({title, content, history}) {
    let inlineStyle = {minHeight: headerHeight};
    return (
        <div className={style.container} style={inlineStyle}>
            <div className={style.cap}/>
            <div className={style.content}>
                <div className={style.title}>{title}</div>
                <div className={style.separator}/>
                <div className={style.header}>
                    {content.header.map((value, index) => <p key={index}><span>{value}</span></p>)}
                </div>
                <div>
                    {content.body.map((value, index) => <p key={index}><span>{value}</span></p>)}
                </div>
                <SimpleButton text="На главную" delay={0} action={() => history.push('/')}/>
            </div>
        </div>
    );
}

export default withRouter(Article);