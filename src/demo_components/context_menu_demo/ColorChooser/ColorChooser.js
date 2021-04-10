import React, {useState, useRef, useEffect} from 'react';
import style from './ColorChooser.module.scss';

const regulatorSize = 30;
const sizeFactor = regulatorSize / 2;
const scaleHeight = 10;

export const redType = 'r';
export const greenType = 'g';
export const blueType = 'b';

function ColorChooser({init, type}) {
    let [hasDrag, setHasDrag] = useState(false);
    let [regulatorPos, setRegulatorPos] = useState(-regulatorSize / 2);
    let [regulatorColor, setRegulatorColor] = useState(init);

    let scaleRef = useRef(null);

    // Выставляем регулятор в нужное положение
    useEffect(() => {
        let bound = scaleRef.current.getBoundingClientRect();
        let scaleWidth = bound.right - bound.left;
        setRegulatorColor(init);
        setRegulatorPos(init * scaleWidth / 255 - sizeFactor);
    }, []);

    function moveHandler(event) {
        if (!hasDrag) return;

        let bound = scaleRef.current.getBoundingClientRect();
        let scaleStartX = bound.left;
        let scaleEndX = bound.right;
        let {clientX} = event;

        if (clientX < scaleStartX) clientX = scaleStartX;
        if (clientX > scaleEndX) clientX = scaleEndX;

        let nextPos = clientX - scaleStartX - sizeFactor;
        let scaleWidth = scaleEndX - scaleStartX;

        setRegulatorPos(nextPos);
        setRegulatorColor((nextPos - sizeFactor) / scaleWidth * 255);
    }

    let regulatorClass = hasDrag ? style.regulator + ' ' + style.drag : style.regulator;
    let regulatorInline = {
        width: `${regulatorSize}px`,
        height: `${regulatorSize}px`,
        top: `-${regulatorSize / 2 - scaleHeight / 2}px`, left: `${regulatorPos}px`
    };
    if (type === redType) Object.assign(regulatorInline, {backgroundColor: `rgb(${regulatorColor}, 0, 0)`});
    if (type === greenType) Object.assign(regulatorInline, {backgroundColor: `rgb(0, ${regulatorColor}, 0)`});
    if (type === blueType) Object.assign(regulatorInline, {backgroundColor: `rgb(0, 0, ${regulatorColor})`});

    let scaleInline = {
        height: `${scaleHeight}px`,
    };
    if (type === redType) Object.assign(scaleInline, {backgroundImage: 'linear-gradient(to right, black, red)'});
    if (type === greenType) Object.assign(scaleInline, {backgroundImage: 'linear-gradient(to right, black, green)'});
    if (type === blueType) Object.assign(scaleInline, {backgroundImage: 'linear-gradient(to right, black, blue)'});
    return (
        <div className={style.container}
             onMouseMove={moveHandler}
             onMouseUp={() => setHasDrag(false)}
             onMouseLeave={() => setHasDrag(false)}>
            <div className={style.scale} style={scaleInline} ref={scaleRef}>
                <div className={regulatorClass} style={regulatorInline} onMouseDown={() => setHasDrag(true)}/>
            </div>
        </div>
    )
}

export default ColorChooser;