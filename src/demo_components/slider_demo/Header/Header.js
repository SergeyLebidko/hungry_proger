import React, {useState, useEffect, useRef} from 'react';
import {withRouter} from 'react-router-dom';
import style from './Header.module.scss';

const imgCount = 5;

function Header({history}) {
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
        startSwitcher();

        return () => stopSwitcher();
    }, [])

    let images = [];
    for (let index = 1; index <= imgCount; index++) {
        images.push(
            <img src={`/images/demo_components/slider_demo/header${index}.jpg`}
                 className={index === currentSlide ? style.visible : style.hide}
                 key={index}
            />
        )
    }

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

    return (
        <div className={style.container}>
            {images}
            <div className={style.cap_block}/>
            <div className={style.description}>
                <h3>Набор слайдеров на React и jQuery</h3>
                <span onClick={() => history.push('/')}>На главную</span>
            </div>
            <div className={style.slide_control}>
                {controlPoints}
            </div>
        </div>
    )
}

export default withRouter(Header);