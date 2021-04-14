import React from 'react';
import $ from 'jquery';
import Preloader, {lightTheme} from '../Preloader/Preloader';
import {createTouchSlideProps, modeController, mode2, mode3} from '../sliderUtil';
import style from './Slider3.module.scss';

const items = ['balloon', 'car', 'krasnodar', 'mountain', 'nature', 'new_york', 'sculpture', 'sea'];

function Slider3({mode, imgLoadHandler}) {

    function prev(event) {
        console.log(event.target);
    }

    function next(event) {
        console.log(event.target);
    }

    let images = [], index = 0;
    for (let item of items) {
        images.push(
            <img key={index}
                 src={`/images/demo_components/slider_demo/${item}.jpg`}
                 onLoad={imgLoadHandler}
            />
        );
        index++;
    }

    let arrowLeft = <div className={style.arrow + ' ' + style.arrow_left} onClick={prev}>
        <div/>
        <div/>
    </div>;
    let arrowRight = <div className={style.arrow + ' ' + style.arrow_right} onClick={next}>
        <div/>
        <div/>
    </div>;

    return (
        <div className={style.container}>
            <div className={style.content}>
                {images}
                {arrowLeft}
                {arrowRight}
                {mode !== mode3 ? <Preloader theme={lightTheme} hasDeactivateProcess={mode === mode2}/> : ''}
            </div>
        </div>
    )
}

export default modeController(Slider3, items.length);