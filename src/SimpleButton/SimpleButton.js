import React, {useState, useEffect} from 'react';
import style from './SimpleButton.module.scss';


function SimpleButton({text, delay}) {

    let [opacity, setOpacity] = useState(0);

    function startAppearance() {
        let timer = setInterval(() => {
            opacity += 0.1;
            if (opacity > 1) {
                clearInterval(timer);
                return;
            }
            setOpacity(opacity);
        }, 120);
    }

    useEffect(() => {
        if (delay === 0) {
            setOpacity(1);
            return;
        }
        setTimeout(startAppearance, delay);
    }, [text]);

    return (
        <span className={style.simple_button} style={{opacity}}>{text}</span>
    );
}

export default SimpleButton;