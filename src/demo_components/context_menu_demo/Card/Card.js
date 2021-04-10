import React from 'react';
import createGradient from '../gradientCreator';
import style from './Card.module.scss';

function Card({data, index, hasHide, contextHandler}) {

    let containerStyle = createGradient(...data);
    if (hasHide) Object.assign(containerStyle, {opacity: 0.3});
    return (
        <div className={style.container} style={containerStyle} onContextMenu={event => contextHandler(event, index)}>
            <div>
                {`${data[0]}, ${data[1]}, ${data[2]}`}
            </div>
        </div>
    );
}

export default Card;