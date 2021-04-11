import React from 'react';
import {withRouter} from 'react-router-dom';
import style from './Header.module.scss';

function Header({history}) {
    return (
        <div className={style.container}>
            Здесь будет заголовок
        </div>
    )
}

export default withRouter(Header);