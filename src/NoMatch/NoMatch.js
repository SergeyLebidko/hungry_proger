import React from 'react';
import {withRouter} from 'react-router-dom';
import SimpleButton from '../SimpleButton/SimpleButton';
import style from './NoMatch.module.scss';


function NoMatch({location, history}) {
    return (
        <div className={style.container}>
            <div className={style.content}>
                <p>Страница с адресом {location.pathname} не найдена...</p>
                <SimpleButton text="На главную" delay={0} action={() => history.push('/')}/>
            </div>
        </div>
    )
}

export default withRouter(NoMatch);