import React from 'react';
import style from './Preloader.module.scss';

function Preloader({hasExit, disabler}) {
    let containerStyle = {backgroundImage: 'url(./images/demo_components/gallery_demo/back_preloader.png)'}
    let containerClass = style.container;
    if (hasExit) {
        containerClass += (' ' + style.exit);
        setTimeout(() => disabler(), 1950);
    }
    return (
        <div className={containerClass} style={containerStyle}>
            <div/>
            <div/>
        </div>
    )
}

export default Preloader;