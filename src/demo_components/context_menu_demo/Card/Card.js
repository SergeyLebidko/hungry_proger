import React from 'react';
import style from './Card.module.scss';

function Card({data}) {
    let [r, g, b] = data;
    let containerStyle = {backgroundColor: `rgb(${r}, ${g}, ${b})`};
    let captionStyle = {backgroundImage: 'url(/images/demo_components/context_menu_demo/back_caption.png)'};
    return (
        <div className={style.container} style={containerStyle}>
            <div style={captionStyle}>
                {`${r}, ${g}, ${b}`}
            </div>
        </div>
    );
}

export default Card;