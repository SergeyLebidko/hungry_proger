import React, {useState, useEffect} from 'react';
import {preloaderHideDuration} from './Preloader/Preloader';

const moveLimit = 100;

export function createTouchSlideProps(prev, next, stopTimer = null, startTimer = null) {
    let startLine = null;

    function touchStartHandler(event) {
        startLine = event.changedTouches[0].clientX;
    }

    function touchEndHandler() {
        startLine = null;
    }

    function touchMoveHandler(event) {
        if (!startLine) return;
        let currentLine = event.changedTouches[0].clientX;
        let hasStep = activate(currentLine);
        if (hasStep) startLine = currentLine;
    }

    function activate(currentLine) {
        let hasStep = false;
        let step = currentLine - startLine;
        if (Math.abs(step) > moveLimit) {
            if (stopTimer) stopTimer();
            if (step < -moveLimit) next();
            if (step > moveLimit) prev();
            if (startTimer) startTimer();
            hasStep = true;
        }
        return hasStep;
    }

    return {onTouchStart: touchStartHandler, onTouchMove: touchMoveHandler, onTouchEnd: touchEndHandler}
}

export const mode1 = '1'; // Первый режим - изображения еще не загружены. Должен отображаться прелоадер
export const mode2 = '2'; // Второй режим - изображения загружены, прелоадер может начать размонтирование
export const mode3 = '3'; // Третий режим - сигнал к размонтированию прелоадера

export function modeController(Slider, slideCount) {
    function ModeController(props) {
        let [imgLoadCount, setImgLoadCount] = useState(0);
        let [mode, setMode] = useState(mode1);

        function imgLoadHandler() {
            setImgLoadCount(imgLoadCount + 1);
        }

        useEffect(() => {
            if (imgLoadCount < slideCount) return;
            setTimeout(() => {
                setMode(mode2);
                setTimeout(() => setMode(mode3), preloaderHideDuration);
            }, 1500)

        }, [imgLoadCount])

        return <Slider {...props} imgLoadHandler={imgLoadHandler} mode={mode}/>
    }

    ModeController.displayName = Slider.displayName;
    return ModeController;
}