import React, {useState, useEffect, useRef} from 'react';
import {createGradient} from '../utils';
import style from './HeaderCover.module.css';

import {connect} from 'react-redux';
import {mapDispatchToProps, mapStateToProps} from '../store';

function HeaderCover({pk, storedData, setData}) {
    let data = storedData[pk] || {gradient1: createGradient(), gradient2: createGradient(), opacity: 1, delta: -0.025};

    let [gradient1, setGradient1] = useState(data.gradient1);
    let [gradient2, setGradient2] = useState(data.gradient2);
    let [opacity, setOpacity] = useState(data.opacity);
    let [delta, setDelta] = useState(data.delta);

    let _data = useRef(null);
    _data.current = {gradient1, gradient2, opacity, delta}

    useEffect(() => {
        let interval = setInterval(() => {
            opacity += delta;

            if (opacity <= 0) {
                delta = -delta;
                let gradient = gradient2;
                while (gradient === gradient2) {
                    gradient = createGradient();
                }
                setDelta(delta);
                setGradient2(gradient);
                return;
            }

            if (opacity >= 1) {
                delta = -delta;
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
            clearInterval(interval);
            setData(pk, _data.current);
        }
    }, []);

    let innerStyle1 = gradient1;
    let innerStyle2 = Object.assign({}, gradient2, {opacity});
    return (
        <>
            <div className={style.cover1} style={innerStyle1}/>
            <div className={style.cover2} style={innerStyle2}/>
        </>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderCover);