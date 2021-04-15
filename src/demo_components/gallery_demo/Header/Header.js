import React, {useState, useRef, useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import Preloader from '../Preloader/Preloader';
import style from './Header.module.scss';

function Header({history}) {
    let [hasImgLoad, setHasImgLoad] = useState(false);
    let [hasPreloader, setHasPreloader] = useState(true);

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

    // Отслеживаем загрузку файла с изображением для фона Header'а
    useEffect(() => {
        let headerImg = document.createElement('img');
        headerImg.src = '/images/demo_components/gallery_demo/back_header.png';
        headerImg.onload = () => setHasImgLoad(true);

        return () => headerImg.remove();
    }, [])

    let captionStyle = {backgroundImage: 'url(/images/demo_components/gallery_demo/back_header.png)'}
    let containerStyle = {}
    if (hasImgLoad) Object.assign(containerStyle, {
        backgroundImage: 'url(/images/demo_components/gallery_demo/header.jpg)',
        backgroundPosition: `${xPos}% ${yPos}%`
    });

    let containerProps = {onMouseMove: moveHandler, onTouchMove: touchMoveHandler}
    return (
        <div className={style.container} style={containerStyle} {...containerProps} ref={container}>
            {hasImgLoad ?
                <>
                    <div className={style.close_button} onClick={() => history.push('/')}>
                        <div/>
                        <div/>
                    </div>
                    <h2 style={captionStyle}>
                        Здесь представлены компоненты с изображениями, организованные в небольшую галерею.
                        Чтобы вернуться на главную страницу - кликните на крестик в правом верхнем углу.
                    </h2>
                </>
                :
                ''
            }
            {hasPreloader ? <Preloader hasExit={hasImgLoad} disabler={() => setHasPreloader(false)}/> : ''}
        </div>
    )
}

export default withRouter(Header);