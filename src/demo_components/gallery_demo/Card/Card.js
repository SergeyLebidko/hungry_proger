import React, {useState} from 'react';
import style from './Card.module.scss';

export const left_pos = 'l';
export const right_pos = 'r';

function Card({item}) {
    let [pos, setPos] = useState(right_pos);

    function showFull(index) {
        console.log('Show full ', index);
    }

    let containerClassName = style.container;
    if (pos === left_pos) containerClassName += (' ' + style.left_pos);
    if (pos === right_pos) containerClassName += (' ' + style.right_pos);

    let classForLeftControl;
    let classForRightControl;
    classForLeftControl = pos === left_pos ? style.selected : '';
    classForRightControl = pos === right_pos ? style.selected : '';
    return (
        <div className={containerClassName}>
            <img src={`/images/demo_components/gallery_demo/${item.file}1.jpg`} onClick={() => showFull(1)}/>
            <img src={`/images/demo_components/gallery_demo/${item.file}2.jpg`} onClick={() => showFull(2)}/>
            <div className={style.title}>
                <h1>{item.title}</h1>
            </div>
            <div className={style.control}>
                <div className={classForRightControl} onClick={() => setPos(right_pos)}>1</div>
                <div className={classForLeftControl} onClick={() => setPos(left_pos)}>2</div>
            </div>
        </div>
    )
}

export default Card;