import React from 'react';
import {withRouter} from 'react-router-dom';
import SimpleButton from '../SimpleButton/SimpleButton';
import style from './Skills.module.scss';


function Skills({content, history}) {
    let inlineStyle = {}
    return (
        <div className={style.container} style={inlineStyle}>
            <div>
                <h1 className={style.header}>Технологии</h1>
                <div className={style.separator}/>
            </div>
            <div className={style.content}>
                <ul>
                    {content.map((value, index) => <li key={index}>{value}</li>)}
                </ul>
                <SimpleButton text="Подробнее" delay={0} action={() => history.push('/skills')}/>
            </div>
        </div>
    )
}

export default withRouter(Skills);