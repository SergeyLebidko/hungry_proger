import React, {useState, useEffect, useRef} from 'react'
import style from './PrintablePhrase.module.scss';

import {connect} from 'react-redux';
import {mapDispatchToProps, mapStateToProps} from '../store';

function PrintablePhrase({phrase, delay, pk, storedData, setData}) {
    let data = storedData[pk] || {text: '', hasCursor: false};

    let [text, setText] = useState(data.text);
    let [hasCursor, setHasCursor] = useState(data.hasCursor);

    let _data = useRef(null);
    _data.current = {text, hasCursor};

    useEffect(() => {
        let timeout;
        let interval;

        timeout = setTimeout(() => {
            if (text === phrase) return;
            setHasCursor(true);
            let pos = text.length + 1;
            interval = setInterval(() => {
                setText(phrase.slice(0, pos));
                pos++;
                if (pos > phrase.length) {
                    setHasCursor(false);
                    clearInterval(interval);
                }
            }, 55);
        }, delay);

        return () => {
            clearTimeout(timeout);
            clearInterval(interval);
            setData(pk, _data.current);
        };
    }, [phrase]);

    return (
        <p className={style.phrase}>
            {text}
            <span style={hasCursor ? {opacity: 1} : {opacity: 0}}>|</span>
        </p>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(PrintablePhrase);
