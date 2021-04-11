import React, {useState, useEffect, useRef} from 'react';
import {withRouter} from 'react-router-dom';
import style from './Header.module.scss';


function Header({history}) {
    let [currentSlide, setCurrentSlide] = useState(1);
    let currentSlideRef = useRef(1);

    useEffect(() => {
        let interval = setInterval(() => {
            setCurrentSlide(currentSlideRef.current % 4 + 1);
            currentSlideRef.current++;
        }, 2500);

        return () => clearInterval(interval);
    }, [])

    let images = [];
    for (let index = 1; index <= 4; index++) {
        images.push(
            <img src={`/images/demo_components/slider_demo/header${index}.jpg`}
                 style={index === currentSlide ? {opacity: 1} : {opacity: 0}}
                 key={index}
            />
        )
    }

    let controlPoints = [];
    for (let index = 1; index <= 4; index++) {
        controlPoints.push(
            <div className={index === currentSlide ? style.current : ''}
                 onClick={() => setCurrentSlide(index)}
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