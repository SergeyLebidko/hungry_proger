import React, {useState, useEffect, useContext, useRef} from 'react'
import {Context} from '../App';
import style from './PrintablePhrase.module.scss';
import {searchData} from '../utils';
import {PRINTABLE_PHRASE_DATA_FIELD, createSavePrintablePhraseAction} from '../store';

const defaultData = {text: '', hasCursor: false};

function getPrintablePhraseData(store, pk) {
    let state = store.getState();
    return searchData(state[PRINTABLE_PHRASE_DATA_FIELD], pk, defaultData);
}

function PrintablePhrase({phrase, delay, pk}) {
    let store = useContext(Context);
    let data = getPrintablePhraseData(store, pk);

    let [text, setText] = useState(data.text);
    let [hasCursor, setHasCursor] = useState(data.hasCursor);

    let _data = useRef(null);
    _data.current = {text: text, hasCursor: hasCursor};

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
            store.dispatch(createSavePrintablePhraseAction(pk, _data.current));
        };
    }, [phrase]);

    return (
        <p className={style.phrase}>
            {text}
            <span style={hasCursor ? {opacity: 1} : {opacity: 0}}>|</span>
        </p>
    );
}

export default PrintablePhrase;