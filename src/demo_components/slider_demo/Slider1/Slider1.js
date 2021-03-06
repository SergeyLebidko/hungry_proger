import React, {useRef, useState, useEffect} from 'react';
import $ from 'jquery';
import Preloader, {lightTheme} from '../Preloader/Preloader';
import {createTouchSlideProps, modeController, mode2, mode3} from '../sliderUtil';
import style from './Slider1.module.scss';

const items = ['balloon', 'car', 'krasnodar', 'mountain', 'nature', 'new_york', 'sculpture', 'sea'];

function Slider1({mode, imgLoadHandler}) {
    let contentRef = useRef(null);
    let arrowLeftRef = useRef(null);
    let arrowRightRef = useRef(null);

    let [pos, setPos] = useState(0);

    let images = [], index = 0;
    for (let item of items) {
        images.push(
            <img key={index}
                 src={`./images/demo_components/slider_demo/${item}.jpg`}
                 style={{left: `${100 * index}%`}}
                 onLoad={imgLoadHandler}
            />
        );
        index++;
    }

    function toLeft() {
        if (pos === (items.length - 1)) return
        $('img', contentRef.current).animate({left: '-=100%'});
        setPos(pos + 1);
    }

    function toRight() {
        if (pos === 0) return;
        $('img', contentRef.current).animate({left: '+=100%'});
        setPos(pos - 1);
    }

    let touchProps = createTouchSlideProps(toRight, toLeft);

    let leftArrow = pos < (items.length - 1) ?
        <div className={style.arrow + ' ' + style.left_arrow} ref={arrowLeftRef} onClick={toLeft}>
            <div/>
            <div/>
        </div>
        : '';

    let rightArrow = pos > 0 ?
        <div className={style.arrow + ' ' + style.right_arrow} ref={arrowRightRef} onClick={toRight}>
            <div/>
            <div/>
        </div>
        : '';

    return (
        <div className={style.container}>
            <div className={style.content} ref={contentRef} {...touchProps}>
                {images}
                {leftArrow}
                {rightArrow}
                {mode !== mode3 ?
                    <Preloader theme={lightTheme} hasDeactivateProcess={mode === mode2}/>
                    :
                    ''
                }
            </div>
        </div>
    )
}

export default modeController(Slider1, items.length);