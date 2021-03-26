import React, {useState, useEffect, useRef, useContext} from 'react';
import {createGradient, searchData} from '../utils';
import {Context} from '../App';
import style from './HeaderCover.module.css';
import {createSaveHeaderCoverAction, HEADER_COVER_DATA_FIELD} from '../store';

const defaultData = {gradient1: createGradient(), gradient2: createGradient(), opacity: 1, delta: -0.025}

function getHeaderCoverData(store, pk) {
    let state = store.getState();
    return searchData(state[HEADER_COVER_DATA_FIELD], pk, defaultData);
}

function HeaderCover({pk}) {
    let store = useContext(Context);
    let data = getHeaderCoverData(store, pk);

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
            clearInterval(interval);
            store.dispatch(createSaveHeaderCoverAction(pk, _data.current));
        }
    }, []);

    let innerStyle1 = {};
    let innerStyle2 = {};

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