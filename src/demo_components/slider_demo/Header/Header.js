import React, {useState, useEffect, useRef} from 'react';
import {withRouter} from 'react-router-dom';
import style from './Header.module.scss';

const imgCount = 5;

const mode1 = '1'; // Первый режим - изображения еще не загружены. Отображается прелоадер
const mode2 = '2'; // Второй режим - изображения загружены, прелоадер плавно удаляется с экрана
const mode3 = '3'; // Третий режим - прелоадер размонтирован. Отображается описание и блок контроля

function Header({history}) {
    let [mode, setMode] = useState(mode1);
    let [imgLoadCount, setImgLoadCount] = useState(0);
    let [currentSlide, setCurrentSlide] = useState(1);
    let currentSlideRef = useRef(1);
    let intervalRef = useRef(null);

    function startSwitcher() {
        intervalRef.current = setInterval(() => {
            setCurrentSlide(currentSlideRef.current % imgCount + 1);
            currentSlideRef.current++;
        }, 3000);
    }

    function stopSwitcher() {
        clearInterval(intervalRef.current);
    }

    useEffect(() => {
        if (imgLoadCount < imgCount) return;
        setTimeout(() => {
            setMode(mode2);
            setTimeout(() => {
                startSwitcher();
                setMode(mode3);
            }, 1000);
        }, 1500);

        return () => stopSwitcher();
    }, [imgLoadCount]);

    // Формируем изображения
    let images = [];
    for (let index = 1; index <= imgCount; index++) {
        images.push(
            <img src={`/images/demo_components/slider_demo/header${index}.jpg`}
                 className={index === currentSlide ? style.visible : style.hide}
                 onLoad={() => setImgLoadCount(imgLoadCount + 1)}
                 key={index}
            />
        )
    }

    // Формируем блок контроля слайдов
    let controlPoints = [];
    for (let index = 1; index <= imgCount; index++) {
        controlPoints.push(
            <div className={index === currentSlide ? style.current : ''}
                 onClick={() => {
                     stopSwitcher();
                     currentSlideRef.current = index;
                     setCurrentSlide(index);
                     startSwitcher();
                 }}
                 key={index}
            />
        )
    }

    let imageBlockClass = style.image_block;
    if (mode === mode1) imageBlockClass += (' ' + style.hide);

    let preloaderClass = style.preloader;
    if (mode === mode2) preloaderClass += (' ' + style.hide);

    let preloaderStyle = {
        backgroundImage: 'radial-gradient(rgba(30, 144, 255, 0.3), rgba(0, 0, 205, 0.3)), url(/images/demo_components/slider_demo/back_preloader.png)'
    }
    return (
        <div className={style.container}>
            <div className={imageBlockClass}>
                {images}
                <div className={style.cap_block}/>
            </div>
            {mode === mode3 ?
                <>
                    <div className={style.description}>
                        <h3>Набор слайдеров на React и jQuery</h3>
                        <span onClick={() => history.push('/')}>На главную</span>
                    </div>
                    <div className={style.slide_control}>
                        {controlPoints}
                    </div>
                </>
                :
                ''
            }
            {mode === mode3 ? '' : <div className={preloaderClass} style={preloaderStyle}/>}
        </div>
    )
}

export default withRouter(Header);