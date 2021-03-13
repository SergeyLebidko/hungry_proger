import React, {useState, useEffect} from 'react';
import {createGradient} from '../utils';
import style from './HeaderCover.module.css';


function HeaderCover({headerHeight}) {
    let [gradient1, setGradient1] = useState(createGradient());
    let [gradient2, setGradient2] = useState(createGradient());
    let [opacity, setOpacity] = useState(1);
    let [delta, setDelta] = useState(-0.025);

    function startTimer() {
        setInterval(() => {
            opacity += delta;

            if (opacity <= 0) {
                delta *= (-1);
                let gradient = gradient2;
                while (gradient === gradient2) {
                    gradient = createGradient();
                }
                setDelta(delta);
                setGradient2(gradient2);
                return;
            }

            if (opacity >= 1) {
                delta *= (-1);
                let gradient = gradient1;
                while (gradient === gradient1) {
                    gradient = createGradient();
                }
                setDelta(delta);
                setGradient1(gradient1);
                return;
            }

            setOpacity(opacity);
        }, 250);
    }

    useEffect(() => startTimer(), [headerHeight]);

    let innerStyle1 = {height: `${headerHeight}px`};
    let innerStyle2 = {height: `${headerHeight}px`};

    Object.assign(innerStyle1, gradient1);
    Object.assign(innerStyle2, gradient2, {opacity});

    return (
        <>
            <div className={style.cover1} style={innerStyle1}/>
            <div className={style.cover2} style={innerStyle2}/>
        </>
    );
}

export default HeaderCover;