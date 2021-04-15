import React from 'react';
import $ from 'jquery';
import Preloader, {darkTheme} from '../Preloader/Preloader';
import {createTouchSlideProps, modeController, mode2, mode3} from '../sliderUtil';
import style from './Slider4.module.scss'

const files = ['balloon', 'car', 'krasnodar', 'mountain', 'nature', 'new_york', 'sculpture', 'sea'];
const titles = ['Воздушный шар', 'Краснодар', 'Горы', 'Леопард', 'Нью-Йорк', 'Скульптура', 'Море'];
const items = [];

for (let index = 0; index < files.length; index++) {
    items.push({file: files[index], title: titles[index]});
}

function Slider4({mode, imgLoadHandler}) {
    let images = [], index = 0;
    for (let item of items) {
        images.push(
            <div key={index}>
                <img src={`/images/demo_components/slider_demo/${item.file}.jpg`} onLoad={imgLoadHandler}/>
                <div>
                    <img src={`/images/demo_components/slider_demo/${item.file}.jpg`} onLoad={imgLoadHandler}/>
                    <h3>{item.title}</h3>
                </div>
            </div>
        );
        index++;
    }

    return (
        <div className={style.container}>
            <div className={style.content}>
                {images}
                {mode !== mode3 ? <Preloader theme={darkTheme} hasDeactivateProcess={mode === mode2}/> : ''}
            </div>
        </div>
    )
}

export default modeController(Slider4, items.length * 2);