import React from 'react';
import style from './ImageViewer.module.scss';

function ImageViewer({filename}) {
    return (
        <div className={style.container}>
            <img src={filename}/>
        </div>
    )
}

export default ImageViewer;