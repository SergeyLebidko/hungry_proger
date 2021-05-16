import React, {useState, useEffect, useContext, useRef} from 'react';
import {Context} from '../App';
import style from './SimpleButton.module.scss';
import {searchData} from "../utils";
import {createSaveSimpleButtonAction, SIMPLE_BUTTON_DATA_FIELD} from '../store';

const defaultData = {opacity: 0}

function getSimpleButtonData(store, pk) {
    let state = store.getState();
    return searchData(state[SIMPLE_BUTTON_DATA_FIELD], pk, defaultData);
}

function SimpleButton({text, delay, action, pk}) {
    let store = useContext(Context);
    let data = getSimpleButtonData(store, pk)

    let [opacity, setOpacity] = useState(data.opacity);

    let _data = useRef(null);
    _data.current = {opacity};

    useEffect(() => {
        let interval;
        let timeout;

        timeout = setTimeout(() => {
            if (opacity === 1) return;
            interval = setInterval(() => {
                opacity += 0.1;
                if (opacity >= 1) {
                    opacity = 1
                    clearInterval(interval)
                }
                setOpacity(opacity);
            }, 100);
        }, delay);

        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
            store.dispatch(createSaveSimpleButtonAction(pk, _data.current));
        };
    }, [text]);

    return (
        <button className={style.simple_button} style={{opacity}} onClick={() => action()}>{text}</button>
    );
}

export default SimpleButton;