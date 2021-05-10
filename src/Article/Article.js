import React from 'react';
import {withRouter} from 'react-router-dom';
import SimpleButton from '../SimpleButton/SimpleButton';
import {parseText} from '../utils';
import style from './Article.module.scss';


function Article({title, content, history}) {
    window.scrollTo(0, 0); // это действие действительно нужно делать каждый раз когда реакт вызовет эту функцию? или только при первом входе? или при изменении контента, кажется не хватает useEffect

    let headerElements = [];
    content.header.map( // если ничего не возвращаешь достаточно  forEach, но опять вопрос, эта функция будет срабатывать каждый раз когда реакт вызовет эту функцию, будет происходить перерендер
        (value, index) => headerElements.push(<p key={index}>{parseText(value, style.dedicated)}</p>) // использовать в качестве key index очень не рекомендуется
    ); // эту часть можно сразу перенести в 28 строку:

    /*
    
    <div className={style.header}>
        {
             content.header.map((value) => headerElements.push(<p key={index}>{parseText(value, style.dedicated)}</p>)    
        }
    </div>
    вот так, зачем промежуточные переменные?
    */

    let bodyElements = [];
    content.body.map(
        (value, index) => bodyElements.push(<p key={index}><span>{parseText(value, style.dedicated)}</span></p>)
    );

    return (
        <div className={style.container}>
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