import React from 'react';
import $ from 'jquery';
import Preloader, {lightTheme} from '../Preloader/Preloader';
import {createTouchSlideProps, modeController, mode2, mode3} from '../sliderUtil';
import style from './Slider2.module.scss';

const items = ['balloon', 'car', 'krasnodar', 'mountain', 'nature', 'new_york', 'sculpture', 'sea'];

function Slider2({mode, imgLoadHandler}){
    return (
        <div className={style.container}>
            <div className={style.content}/>
        </div>
    );
}

export default modeController(Slider2, items.length);