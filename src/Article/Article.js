import React from 'react';
import {withRouter} from 'react-router-dom';
import SimpleButton from '../SimpleButton/SimpleButton';
import style from './Article.module.scss';


function Article({title, content, history}) {
    let hasHeader = content.header.length > 0;
    return (
        <div className={style.container}>
            <div className={style.cap}/>
            <div className={style.content}>
                <div className={style.title}>{title}</div>
                <div className={style.separator}/>
                {hasHeader ? <div className={style.header}>{content.header.map(value => <p>{value}</p>)}</div>: ''}
                <div>{content.body.map(value => <p>{value}</p>)}</div>
                <SimpleButton text="На главную" delay={0} action={() => history.push('/')}/>
            </div>
        </div>
    );
}

export default withRouter(Article);