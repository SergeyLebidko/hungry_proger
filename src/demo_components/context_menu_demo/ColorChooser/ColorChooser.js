import React, {useState, useRef} from 'react';
import style from './ColorChooser.module.scss';

function ColorChooser() {
    let [hasDrag, setHasDrag] = useState(false);
    let [regulatorPos, setRegulatorPos] = useState(0);

    let scaleRef = useRef(null);

    function moveHandler(event) {
        if (!hasDrag) return;

        let bound = scaleRef.current.getBoundingClientRect();
        if (event.clientX < bound.x) {
            setRegulatorPos(-15);
            return;
        }
        if (event.clientX > (bound.x + bound.width)) {
            setRegulatorPos(-15 + bound.width);
            return;
        }
        setRegulatorPos(-15 + event.clientX - bound.x);


        // console.log(
        //     event.clientX,
        //     bound.x,
        //     bound.x + bound.width
        // );
    }

    let regulatorClass = hasDrag ? style.regulator + ' ' + style.drag : style.regulator;
    let regulatorInline = {width: '30px', height: '30px', top: '-10px', left: `${regulatorPos}px`};
    return (
        <div className={style.container} onMouseMove={moveHandler} onTouchMove={moveHandler} onMouseLeave={() => setHasDrag(false)}>
            <div className={style.scale} ref={scaleRef}>
                <div className={regulatorClass}
                     style={regulatorInline}
                     onMouseDown={() => setHasDrag(true)}
                     onTouchStart={() => setHasDrag(true)}
                     onMouseUp={() => setHasDrag(false)}
                     onTouchEnd={() => setHasDrag(false)}
                />
            </div>
        </div>
    )
}

export default ColorChooser;