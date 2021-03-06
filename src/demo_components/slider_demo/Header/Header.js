import React, {useState, useEffect, useRef} from 'react';
import Preloader, {darkTheme} from '../Preloader/Preloader';
import {withRouter} from 'react-router-dom';
import {createTouchSlideProps, modeController, mode1, mode2, mode3} from '../sliderUtil';
import style from './Header.module.scss';

const imgCount = 5;

function Header({history, mode, imgLoadHandler}) {
    let [currentSlide, setCurrentSlide] = useState(1);

    let currentSlideRef = useRef(1);
    let intervalRef = useRef(null);

    function prev() {
        currentSlideRef.current--;
        if (currentSlideRef.current < 1) currentSlideRef.current = imgCount;
        setCurrentSlide(currentSlideRef.current);
    }

    function next() {
        currentSlideRef.current++;
        if (currentSlideRef.current > imgCount) currentSlideRef.current = 1;
        setCurrentSlide(currentSlideRef.current);
    }

    function startSwitcher() {
        intervalRef.current = setInterval(() => next(), 3000);
    }

    function stopSwitcher() {
        clearInterval(intervalRef.current);
    }

    // Включаем автоматическую смену слайдов
    useEffect(() => {
        if (mode !== mode3) return;
        startSwitcher();

        return () => stopSwitcher();
    }, [mode])

    // Формируем изображения
    let images = [];
    for (let index = 1; index <= imgCount; index++) {
        images.push(
            <img src={`./images/demo_components/slider_demo/header${index}.jpg`}
                 className={index === currentSlide ? style.visible : style.hide}
                 onLoad={imgLoadHandler}
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

    let touchProps = {}
    if (mode === mode3) touchProps = createTouchSlideProps(prev, next, stopSwitcher, startSwitcher);

    let imageBlockClass = style.image_block;
    if (mode === mode1) imageBlockClass += (' ' + style.hide);

    return (
        <div className={style.container} {...touchProps}>
            <div className={imageBlockClass}>
                {images}
                <div className={style.cap_block}/>
            </div>
            {mode === mode3 ?
                <>
                    <div className={style.description}>
                        <h3>Набор слайдеров на React и jQuery</h3>
                        <p>Для пролистывания можно использовать мышь и свайп вправо или влево</p>
                        <span onClick={() => history.push('/')}>На главную</span>
                    </div>
                    <div className={style.slide_control}>
                        {controlPoints}
                    </div>
                </>
                :
                ''
            }
            {mode === mode3 ? '' : <Preloader theme={darkTheme} hasDeactivateProcess={mode === mode2}/>}
        </div>
    )
}

export default withRouter(modeController(Header, imgCount));