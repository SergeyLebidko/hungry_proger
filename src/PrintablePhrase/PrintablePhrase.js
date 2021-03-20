import React, {useState, useEffect} from 'react'
import style from './PrintablePhrase.module.scss';

let printablePhraseStorage = {text: null}

function PrintablePhrase({phrase, delay}) {
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