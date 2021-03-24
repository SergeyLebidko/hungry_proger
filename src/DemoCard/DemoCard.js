import React from 'react';
import {withRouter} from 'react-router-dom';
import style from './DemoCard.module.scss';


function DemoCard({title, href, history}) {
    function clickHandler() {
        setTimeout(() => {
            history.push('/demo/' + href)
        }, 150);
    }

    return (
        <div className={style.demo_card} onClick={clickHandler}>
            <p>{title}</p>
        </div>
    );
}

export default withRouter(DemoCard);
