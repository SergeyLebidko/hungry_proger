import React, {useState, useRef} from 'react';
import {withRouter} from 'react-router-dom';
import style from './Header.module.scss';

function Header({history}) {
    let [xPos, setXPos] = useState(50);
    let [yPos, setYPos] = useState(50);
    let container = useRef(null);

    function moveHandler(event) {
        let {clientX, clientY} = event;
        setXPos(40 * clientX / container.current.clientWidth);
        setYPos(40 * clientY / container.current.clientHeight);
    }

    let captionStyle = {backgroundImage: 'url(/images/demo_components/gallery_demo/back.png)'}
    let containerStyle = {
        backgroundImage: 'url(/images/demo_components/gallery_demo/header.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '115% auto',
        backgroundPosition: `${xPos}% ${yPos}%`
    }
    return (
        <div className={style.container} style={containerStyle} onMouseMove={moveHandler} ref={container}>
            <div className={style.close_button} onClick={() => history.push('/')}>
                <div/>
                <div/>
            </div>
            <h2 style={captionStyle}>
                Здесь представлены компоненты с изображениями, организованные в небольшую галерею.
                Чтобы вернуться на главную страницу - кликните на крестик в правом верхнем углу.
            </h2>
        </div>
    )
}

export default withRouter(Header);