import React, {useState, useEffect, useContext} from 'react'
import {Context} from '../App';
import style from './PrintablePhrase.module.scss';
import {searchData} from '../utils';
import {PRINTABLE_PHRASE_DATA_FIELD} from '../store';

let printablePhraseStorage = {text: null}

export function getPrintablePhraseData(store, pk) {
    let state = store.getState();
    let defaultData = {text: null};
    return searchData(state[PRINTABLE_PHRASE_DATA_FIELD], pk, defaultData);
}

function PrintablePhrase({phrase, delay}) {
    let store = useContext(Context);
    console.log(store.getState());

    let [text, setText] = useState(printablePhraseStorage.text || '');
    let [hasCursor, setHasCursor] = useState(false);

    useEffect(() => {
        let timeout;
        let interval;

        if (delay === 0) {
            setText(phrase);
            return;
        }
        if (phrase === printablePhraseStorage.text) return;

        timeout = setTimeout(() => {
            setHasCursor(true);
            let pos = text.length + 1, nextText;
            interval = setInterval(() => {
                if (pos === (phrase.length + 1)) {
                    clearInterval(interval);
                    setHasCursor(false);
                    return;
                }
                nextText = phrase.slice(0, pos)
                printablePhraseStorage.text = nextText;
                setText(nextText);
                pos++;
            }, 55);
        }, delay);

        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, [phrase]);

    return <p className={style.phrase}>{text}<span style={hasCursor ? {opacity: 1} : {opacity: 0}}>|</span></p>;
}

export default PrintablePhrase;