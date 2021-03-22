import React, {useState, useEffect} from 'react';
import style from './SimpleButton.module.scss';

let simpleButtonStorage = {opacity: null}

function SimpleButton({text, delay, action, pk}) {
    let [opacity, setOpacity] = useState(simpleButtonStorage.opacity || 0);

    useEffect(() => {
        let interval;
        let timeout;
        if (delay === 0) {
            setOpacity(1);
            return;
        }
        timeout = setTimeout(() => {
            interval = setInterval(() => {
                opacity += 0.1;
                if (opacity > 1) {
                    clearInterval(interval);
                    return;
                }
                setOpacity(opacity);
            }, 120);
        }, delay);

        return () => {
            simpleButtonStorage = {opacity}
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, [text]);

    return (
        <span className={style.simple_button} style={{opacity}} onClick={() => action()}>{text}</span>
    );
}

export default SimpleButton;