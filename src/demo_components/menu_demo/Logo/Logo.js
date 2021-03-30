import React from 'react';
import {withRouter} from 'react-router-dom';
import style from './Logo.module.scss';

function Logo({minimizeFlag, history}) {
    let className = style.logo_image + ' ' + (minimizeFlag ? style.logo_minimize_size : style.logo_standard_size);
    return (
        <img className={className}
             src={'/images/demo_components/menu_demo/logo.png'}
             alt={'logo'}
             onClick={() => history.push('/')}
        />
    )
}

export default withRouter(Logo);