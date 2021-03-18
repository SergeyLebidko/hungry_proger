import React from 'react';
import {withRouter} from 'react-router-dom';
import style from './NoMatch.module.scss';
import SimpleButton from "../SimpleButton/SimpleButton";


function NoMatch({location, history}) {
    return (
        <div className={style.container}>
            <div className={style.cap}/>
            <div className={style.content}>
                <p>Страница с адресом {location.pathname} не найдена...</p>
                <SimpleButton text="На главную" delay={0} action={() => history.push('/')}/>
            </div>
        </div>
    )
}

export default withRouter(NoMatch);