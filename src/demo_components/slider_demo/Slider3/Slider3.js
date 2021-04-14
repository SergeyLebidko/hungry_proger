import React, {useRef, useState} from 'react';
import $ from 'jquery';
import Preloader, {lightTheme} from '../Preloader/Preloader';
import {createTouchSlideProps, modeController, mode2, mode3} from '../sliderUtil';
import style from './Slider3.module.scss';

const items = ['balloon', 'car', 'krasnodar', 'mountain', 'nature', 'new_york', 'sculpture', 'sea'];

function Slider3({mode, imgLoadHandler}) {
    let [pos, setPos] = useState(0);

    let contentRef = useRef(null);
    let arrowLeftRef = useRef(null);
    let arrowRightRef = useRef(null);

    function expansion(xStart, yStart, $img) {
        let deferred = $.Deferred();
        let timer;
        let radius = 0;
        $img.css({zIndex: 3, clipPath: `circle(0 at ${xStart}px ${yStart}px)`});

        timer = setInterval(() => {
            radius += 50;
            $img.css({clipPath: `circle(${radius}px at ${xStart}px ${yStart}px)`})
            if (radius > Math.max($(contentRef.current).outerWidth(), $(contentRef.current).outerHeight())) {
                clearInterval(timer);
                deferred.resolve();
            }
        }, 15);
        return deferred.promise();
    }

    function prev() {
        let xStart = Math.floor(arrowLeftRef.current.offsetLeft + $(arrowLeftRef.current).outerWidth() / 2);
        let yStart = Math.floor(arrowLeftRef.current.offsetTop);

        // Определяем следующий слайд и выбираем его
        let nextPos = pos - 1;
        if (nextPos < 0) nextPos = (items.length - 1);
        let $nextSlide = $('img', contentRef.current).eq(nextPos);

        expansion(xStart, yStart, $nextSlide).done(() => {
            setPos(nextPos);
        });
    }

    function next() {
        let xStart = Math.floor(arrowRightRef.current.offsetLeft + $(arrowRightRef.current).outerWidth() / 2);
        let yStart = Math.floor(arrowRightRef.current.offsetTop);

        // Определяем следующий слайд и выбираем его
        let nextPos = pos + 1;
        if (nextPos === items.length) nextPos = 0;
        let $nextSlide = $('img', contentRef.current).eq(nextPos);

        expansion(xStart, yStart, $nextSlide).done(() => {
            setPos(nextPos);
        });
    }

    let images = [], index = 0;
    for (let item of items) {
        images.push(
            <img key={index}
                 src={`/images/demo_components/slider_demo/${item}.jpg`}
                 onLoad={imgLoadHandler}
                 style={{zIndex: pos === index ? 1 : 0}}
            />
        );
        index++;
    }

    let arrowLeft = <div className={style.arrow + ' ' + style.arrow_left} onClick={prev} ref={arrowLeftRef}>
        <div/>
        <div/>
    </div>;
    let arrowRight = <div className={style.arrow + ' ' + style.arrow_right} onClick={next} ref={arrowRightRef}>
        <div/>
        <div/>
    </div>;

    return (
        <div className={style.container}>
            <div className={style.content} ref={contentRef}>
                {images}
                {arrowLeft}
                {arrowRight}
                {mode !== mode3 ? <Preloader theme={lightTheme} hasDeactivateProcess={mode === mode2}/> : ''}
            </div>
        </div>
    )
}

export default modeController(Slider3, items.length);