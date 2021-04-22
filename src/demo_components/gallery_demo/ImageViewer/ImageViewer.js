import React, {useState} from 'react';
import style from './ImageViewer.module.scss';

function ImageViewer({filename, closeViewerHandler}) {
    let [currentState, setCurrentState] = useState('entry')

    function clickHandler() {
        setCurrentState('exit')
        setTimeout(() => closeViewerHandler(), 550);
    }

    let containerStyle = {backgroundImage: 'url(./images/demo_components/gallery_demo/back_viewer.png)'}

    let containerClassName = style.container;
    if (currentState === 'entry') containerClassName += (' ' + style.entry_viewer);
    if (currentState === 'exit') containerClassName += (' ' + style.exit_viewer);
    return (
        <div className={containerClassName} style={containerStyle} onClick={clickHandler}>
            <img src={filename}/>
        </div>
    )
}

export default ImageViewer;