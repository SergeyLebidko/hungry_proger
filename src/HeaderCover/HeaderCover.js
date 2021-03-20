import React, {useState, useEffect} from 'react';
import {createGradient} from '../utils';
import style from './HeaderCover.module.css';


let headerCoverStorage = {
    gradient1: null,
    gradient2: null,
    opacity: null,
    delta: null,
}

function HeaderCover({headerHeight}) {
    let [gradient1, setGradient1] = useState(headerCoverStorage.gradient1 || createGradient());
    let [gradient2, setGradient2] = useState(headerCoverStorage.gradient2 || createGradient());
    let [opacity, setOpacity] = useState(headerCoverStorage.opacity || 1);
    let [delta, setDelta] = useState(headerCoverStorage.delta || -0.025);

    useEffect(() => {
        let interval = setInterval(() => {
            opacity += delta;

            if (opacity <= 0) {
                delta *= (-1);
                let gradient = gradient2;
                while (gradient === gradient2) {
                    gradient = createGradient();
                }
                setDelta(delta);
                setGradient2(gradient);
                return;
            }

            if (opacity >= 1) {
                delta *= (-1);
                let gradient = gradient1;
                while (gradient === gradient1) {
                    gradient = createGradient();
                }
                setDelta(delta);
                setGradient1(gradient);
                return;
            }

            setOpacity(opacity);
        }, 250);

        return () => {
            headerCoverStorage = {gradient1, gradient2, opacity, delta}
            clearInterval(interval);
        };
    }, [headerHeight]);

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