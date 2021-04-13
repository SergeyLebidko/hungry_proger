import React, {useRef, useState, useEffect} from 'react';
import $ from 'jquery';
import Preloader, {lightTheme} from '../Preloader/Preloader';
import {createTouchSlideProps} from '../sliderUtil';
import style from './Slider1.module.scss';

const items = ['balloon', 'car', 'krasnodar', 'mountain', 'nature', 'new_york', 'sculpture', 'sea'];

const mode1 = '1'; // Первый режим - изображения еще не загружены. Отображается прелоадер
const mode2 = '2'; // Второй режим - изображения загружены, прелоадер плавно удаляется с экрана
const mode3 = '3'; // Третий режим - прелоадер размонтирован

function Slider1() {
    let contentRef = useRef(null);
    let arrowLeftRef = useRef(null);
    let arrowRightRef = useRef(null);

    let [imgLoadCount, setImgLoadCount] = useState(0);
    let [mode, setMode] = useState(mode1);
    let [pos, setPos] = useState(0);

    // Отслеживаем количество загруженных изображений
    useEffect(() => {
        if (imgLoadCount < items.length) return;
        setTimeout(() => {
            setMode(mode2);
            setTimeout(() => setMode(mode3), 1000);
        }, 1500);
    }, [imgLoadCount]);

    let images = [], index = 0;
    for (let item of items) {
        images.push(
            <img key={index}
                 src={`/images/demo_components/slider_demo/${item}.jpg`}
                 style={{left: `${100 * index}%`}}
                 onLoad={() => setImgLoadCount(imgLoadCount + 1)}
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

export default Slider1;