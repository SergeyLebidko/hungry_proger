import React, {useState, useEffect} from 'react'
import style from './PrintablePhrase.module.scss';


let printablePhraseStorage = {
    text: null,
    hasCursor: null
}

function PrintablePhrase({phrase, delay}) {
    let [text, setText] = useState('');
    let [hasCursor, setHasCursor] = useState(false);

    useEffect(() => {
        console.log('PrintablePhrase смонтирован');

        let timeout;
        let interval;
        if (delay > 0) {
            timeout = setTimeout(() => {
                setHasCursor(true);
                let pos = 1;
                interval = setInterval(() => {
                    if (pos === (phrase.length + 1)) {
                        clearInterval(interval);
                        setHasCursor(false);
                        return;
                    }
                    setText(phrase.slice(0, pos));
                    pos++;
                }, 55);
            }, delay);
        } else {
            setText(phrase);
        }

        return () => {
            printablePhraseStorage = {text, hasCursor}
            clearInterval(interval);
            clearTimeout(timeout);

            console.log('PrintablePhrase размонтирован');
        };
    }, [phrase]);

    return <p className={style.phrase}>{text}<span style={hasCursor ? {opacity: 1} : {opacity: 0}}>|</span></p>;
}

export default PrintablePhrase;