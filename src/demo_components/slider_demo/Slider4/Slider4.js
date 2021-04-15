import React, {useRef, useState, useEffect} from 'react';
import $ from 'jquery';
import Preloader, {darkTheme} from '../Preloader/Preloader';
import {createTouchSlideProps, modeController, mode2, mode3} from '../sliderUtil';
import style from './Slider4.module.scss'

const files = ['balloon', 'car', 'krasnodar', 'mountain', 'nature', 'new_york', 'sculpture', 'sea'];
const titles = ['Воздушный шар', 'Автомобиль', 'Краснодар', 'Горы', 'Леопард', 'Нью-Йорк', 'Скульптура', 'Море'];
const items = [];

for (let index = 0; index < files.length; index++) {
    items.push({file: files[index], title: titles[index]});
}

function Slider4({mode, imgLoadHandler}) {
    let [hasLeftArrow, setHasLeftArrow] = useState(true);
    let [hasRightArrow, setHasRightArrow] = useState(false);

    let contentRef = useRef(null);
    let pos = useRef(0);
    let hasSwitchProcess = useRef(false);
    let $wrapsRef = useRef(null);

    function prev() {
        if (pos.current === 0 || hasSwitchProcess.current) return;
        hasSwitchProcess.current = true;

        let $element = $wrapsRef.current.eq(pos.current);
        let prevElement = $wrapsRef.current.eq(pos.current - 1);

        toHide($element).done(() => {
            $wrapsRef.current.animate({left: '+=100%'});
            toVisible(prevElement);
            pos.current--;
            updateArrowFlags();
            hasSwitchProcess.current = false;
        });
    }

    function next() {
        if (pos.current === (items.length - 1) || hasSwitchProcess.current) return;
        hasSwitchProcess.current = true;

        let $element = $wrapsRef.current.eq(pos.current);
        let $nextElement = $wrapsRef.current.eq(pos.current + 1);

        toHide($element).done(() => {
            $wrapsRef.current.animate({left: '-=100%'});
            toVisible($nextElement);
            pos.current++;
            updateArrowFlags();
            hasSwitchProcess.current = false;
        });
    }

    useEffect(() => {
        $wrapsRef.current = $(`.${style.wrap}`, contentRef.current);
        toVisible($wrapsRef.current.eq(pos.current));
    }, []);

    function toVisible($element) {
        let deferred = $.Deferred();
        $(`img.${style.outer_img_clear}`, $element).removeClass(style.outer_img_clear).addClass(style.outer_img_blur);
        $(`.${style.hide}`, $element).removeClass(style.hide).addClass(style.visible);
        setTimeout(deferred.resolve, 1000);
        return deferred.promise();
    }

    function toHide($element) {
        let deferred = $.Deferred();
        $(`img.${style.outer_img_blur}`, $element).removeClass(style.outer_img_blur).addClass(style.outer_img_clear);
        $('div', $element).removeClass(style.visible).addClass(style.hide);
        setTimeout(deferred.resolve, 1000);
        return deferred.promise();
    }

    function updateArrowFlags() {
        if (pos.current === 0) {
            setHasLeftArrow(true);
            setHasRightArrow(false)
            return;
        }
        if (pos.current === (items.length - 1)) {
            setHasLeftArrow(false);
            setHasRightArrow(true);
            return;
        }
        setHasLeftArrow(true);
        setHasRightArrow(true);
    }

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

    let touchProps = createTouchSlideProps(prev, next);

    let leftArrow = hasLeftArrow ?
        <div onClick={next}><img src={'/images/demo_components/slider_demo/l_arrow.svg'}/></div> : '';
    let rightArrow = hasRightArrow ?
        <div onClick={prev}><img src={'/images/demo_components/slider_demo/r_arrow.svg'}/></div> : '';
    let arrowBlock = <div className={style.arrow_block}>{leftArrow}{rightArrow}</div>

    return (
        <div className={style.container}>
            <div className={style.content} ref={contentRef} {...touchProps}>
                {images}
                {arrowBlock}
                {mode !== mode3 ? <Preloader theme={darkTheme} hasDeactivateProcess={mode === mode2}/> : ''}
            </div>
        </div>
    )
}

export default modeController(Slider4, items.length * 2);