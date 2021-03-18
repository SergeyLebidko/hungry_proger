import React, {useState, useEffect} from 'react';
import style from './SimpleButton.module.scss';


function SimpleButton({text, delay, action}) {
    let [opacity, setOpacity] = useState(0);

    useEffect(() => {
        if (delay === 0) {
            setOpacity(1);
            return;
        }
        setTimeout(() => {
            let timer = setInterval(() => {
                opacity += 0.1;
                if (opacity > 1) {
                    clearInterval(timer);
                    return;
                }
                setOpacity(opacity);
            }, 120);
        }, delay);
    }, [text]);

    return (
        <span className={style.simple_button} style={{opacity}} onClick={() => action()}>{text}</span>
    );
}

export default SimpleButton;