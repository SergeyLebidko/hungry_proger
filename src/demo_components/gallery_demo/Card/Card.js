import React, {useState} from 'react';
import Preloader from '../Preloader/Preloader';
import style from './Card.module.scss';

export const left_pos = 'l';
export const right_pos = 'r';

function Card({item, clickHandler}) {
    let [pos, setPos] = useState(right_pos);
    let [stage, setStage] = useState(0);

    function onLoadHandler() {
        setStage(stage + 1);
    }

    function preloaderDisabler() {
        setStage(3);
    }

    let containerClassName = style.container;
    if (pos === left_pos) containerClassName += (' ' + style.left_pos);
    if (pos === right_pos) containerClassName += (' ' + style.right_pos);

    let filename1 = `/images/demo_components/gallery_demo/${item.file}1.jpg`;
    let filename2 = `/images/demo_components/gallery_demo/${item.file}2.jpg`;

    let classForLeftControl;
    let classForRightControl;
    classForLeftControl = pos === left_pos ? style.selected : '';
    classForRightControl = pos === right_pos ? style.selected : '';
    return (
        <div className={containerClassName}>
            <img src={filename1} onClick={() => clickHandler(filename1)} onLoad={onLoadHandler}/>
            <img src={filename2} onClick={() => clickHandler(filename2)} onLoad={onLoadHandler}/>
            <div className={style.title}>
                <h1>{item.title}</h1>
            </div>
            <div className={style.control}>
                <div className={classForRightControl} onClick={() => setPos(right_pos)}>1</div>
                <div className={classForLeftControl} onClick={() => setPos(left_pos)}>2</div>
            </div>
            {stage < 3 ? <Preloader hasExit={stage === 2} disabler={preloaderDisabler}/> : ''}
        </div>
    )
}

export default Card;