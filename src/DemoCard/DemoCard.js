import React from 'react';
import {withRouter} from 'react-router-dom';
import style from './DemoCard.module.scss';


function DemoCard({title, href, history}) {
    function clickHandler() {
        setTimeout(() => {
            history.push('/demo/' + href)
        }, 150);
    }

    let titleStyle = title.length > 15 ? {fontSize: '1.7em'} : {}; // есть ощущение, что эту проблему должен решать css, а не js
    return (
        <div className={style.demo_card} onClick={clickHandler}>
            <p style={titleStyle}>{title}</p>
        </div>
    );
}

export default withRouter(DemoCard);
