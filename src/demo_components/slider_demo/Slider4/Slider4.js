import React, {useRef, useState, useEffect} from 'react';
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
    let [pos, setPos] = useState(0);

    let contentRef = useRef(null);

    function toVisible($element) {
        $(`img.${style.outer_img_clear}`, $element).removeClass(style.outer_img_clear).addClass(style.outer_img_blur);
        $(`.${style.hide}`, $element).removeClass(style.hide).addClass(style.visible);
    }

    function toHide($element) {
        $(`img.${style.outer_img_blur}`, $element).removeClass(style.outer_img_blur).addClass(style.outer_img_clear);
        $(`.${style.hide}`, $element).removeClass(style.visible).addClass(style.hide);
    }

    // При запуске слайдера сразу же применяем эффект к его первому элементу
    useEffect(() => {
        toVisible($(`.${style.wrap}`, contentRef.current).eq(pos));
    }, []);

    let images = [], index = 0;
    for (let item of items) {
        images.push(
            <div key={index} className={style.wrap} style={{left: `${100 * index}%`}}>
                <img className={style.outer_img_clear}
                     src={`/images/demo_components/slider_demo/${item.file}.jpg`}
                     onLoad={imgLoadHandler}
                />
                <div className={style.hide}>
                    <img src={`/images/demo_components/slider_demo/${item.file}.jpg`} onLoad={imgLoadHandler}/>
                    <h3>{item.title}</h3>
                </div>
            </div>
        );
        index++;
    }

    let leftArrow = <div/>;
    let rightArrow = <div/>;

    let arrowBlock = <div className={style.arrow_block}>{leftArrow}{rightArrow}</div>

    return (
        <div className={style.container}>
            <div className={style.content} ref={contentRef}>
                {images}
                {arrowBlock}
                {mode !== mode3 ? <Preloader theme={darkTheme} hasDeactivateProcess={mode === mode2}/> : ''}
            </div>
        </div>
    )
}

export default modeController(Slider4, items.length * 2);