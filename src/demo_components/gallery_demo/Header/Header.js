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

    function touchMoveHandler(event) {
        if (event.changedTouches.length > 1) return;
        moveHandler({clientX: event.changedTouches[0].clientX, clientY: event.changedTouches[0].clientY});
    }

    let captionStyle = {backgroundImage: 'url(/images/demo_components/gallery_demo/back_header.png)'}
    let containerStyle = {
        backgroundImage: 'url(/images/demo_components/gallery_demo/header.jpg)',
        backgroundPosition: `${xPos}% ${yPos}%`
    }

    let containerProps = {onMouseMove: moveHandler, onTouchMove: touchMoveHandler}
    return (
        <div className={style.container} style={containerStyle} {...containerProps} ref={container}>
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