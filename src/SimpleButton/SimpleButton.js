import React, {useState, useEffect, useRef} from 'react';
import style from './SimpleButton.module.scss';

import {connect} from 'react-redux';
import {mapDispatchToProps, mapStateToProps} from '../store';

function SimpleButton({text, delay, action, pk, storedData, setData}) {
    let data = storedData[pk] || {opacity: 0}

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
            setData(pk, _data.current);
        };
    }, [text]);

    return (
        <button className={style.simple_button} style={{opacity}} onClick={() => action()}>{text}</button>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(SimpleButton);