import React, {useState, useEffect} from 'react'
import style from './PrintablePhrase.module.scss';


function PrintablePhrase({phrase, delay}) {
    let [text, setText] = useState('');
    let [hasCursor, setHasCursor] = useState(false);

    useEffect(() => {
        if (delay > 0) {
            setTimeout(() => {
                setHasCursor(true);
                let pos = 1;
                let timer = setInterval(() => {
                    if (pos === (phrase.length + 1)) {
                        clearInterval(timer);
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
    }, [phrase]);

    return <p className={style.phrase}>{text}<span style={hasCursor ? {opacity: 1} : {opacity: 0}}>|</span></p>;
}

export default PrintablePhrase;