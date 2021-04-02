import React from 'react';
import {withRouter} from 'react-router-dom';
import Table from '../Table/Table';
import style from './Container.module.scss';

const Container = withRouter(({history}) => {
    return (
        <div className={style.container}>
            <div className={style.content}>
                <div className={style.close_container_button} onClick={() => history.push('/')}>
                    &#10006;
                </div>
                <Table/>
            </div>
        </div>
    )
})

export {Container};