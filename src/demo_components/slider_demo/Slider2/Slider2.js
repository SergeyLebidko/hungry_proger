import React, {useRef, useState} from 'react';
import $ from 'jquery';
import Preloader, {darkTheme} from '../Preloader/Preloader';
import {createTouchSlideProps, modeController, mode2, mode3} from '../sliderUtil';
import style from './Slider2.module.scss';

const items = ['balloon', 'car', 'krasnodar', 'mountain', 'nature', 'new_york', 'sculpture', 'sea'];

function Slider2({mode, imgLoadHandler}) {
    let contentRef = useRef(null);
    let [pos, setPos] = useState(0);

    function prev() {
        if (pos === 0) return;
        $(`.${style.ribbon1}`, contentRef.current).animate({top: '-=100%'});
        $(`.${style.ribbon2}`, contentRef.current).animate({top: '+=100%'});
        $(`.${style.ribbon3}`, contentRef.current).animate({left: '+=100%'});
        setPos(pos - 1);
    }

    function next() {
        if (pos === (items.length - 1)) return;
        $(`.${style.ribbon1}`, contentRef.current).animate({top: '+=100%'});
        $(`.${style.ribbon2}`, contentRef.current).animate({top: '-=100%'});
        $(`.${style.ribbon3}`, contentRef.current).animate({left: '-=100%'});
        setPos(pos + 1);
    }

    let images = [], index = 0;
    for (let item of items) {
        images.push(
            <img key={`${index}_ribbon1`}
                 src={`./images/demo_components/slider_demo/${item}.jpg`}
                 onLoad={imgLoadHandler}
                 className={style.ribbon1}
                 style={{top: `${-index * 100}%`}}
            />
        );
        images.push(
            <img key={`${index}_ribbon2`}
                 src={`./images/demo_components/slider_demo/${item}.jpg`}
                 onLoad={imgLoadHandler}
                 className={style.ribbon2}
                 style={{top: `${index * 100}%`}}
            />
        );
        images.push(
            <img key={`${index}_ribbon3`}
                 src={`./images/demo_components/slider_demo/${item}.jpg`}
                 onLoad={imgLoadHandler}
                 className={style.ribbon3}
                 style={{left: `${index * 100}%`}}
            />
        );
        index++;
    }

    let leftArrow = <div className={style.arrow + ' ' + style.left_arrow} onClick={prev}><div/></div>;
    let rightArrow = <div className={style.arrow + ' ' + style.right_arrow} onClick={next}><div/></div>;

    let touchProps = mode === mode3 ? createTouchSlideProps(prev, next) : {};

    return (
        <div className={style.container}>
            <div className={style.content} ref={contentRef} {...touchProps}>
                {images}
                {pos > 0 ? leftArrow : ''}
                {pos < (items.length - 1) ? rightArrow : ''}
                {mode !== mode3 ? <Preloader theme={darkTheme} hasDeactivateProcess={mode === mode2}/> : ''}
            </div>
        </div>
    );
}

export default modeController(Slider2, items.length * 3);