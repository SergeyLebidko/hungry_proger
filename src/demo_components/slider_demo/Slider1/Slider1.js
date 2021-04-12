import React, {useRef, useState} from 'react';
import $ from 'jquery';
import style from './Slider1.module.scss';

const items = ['balloon', 'car', 'krasnodar', 'mountain', 'nature', 'new_york', 'sculpture', 'sea'];

function Slider1() {
    let contentRef = useRef(null);
    let arrowLeftRef = useRef(null);
    let arrowRightRef = useRef(null);
    let [pos, setPos] = useState(0);

    let images = [], index = 0;
    for (let item of items) {
        images.push(
            <img key={index}
                 src={`/images/demo_components/slider_demo/${item}.jpg`}
                 style={{left: `${100 * index}%`}}
            />
        );
        index++;
    }

    function toLeft() {
        $('img', contentRef.current).animate({left: '-=100%'});
        setPos(pos + 1);
    }

    function toRight() {
        $('img', contentRef.current).animate({left: '+=100%'});
        setPos(pos - 1);
    }

    return (
        <div className={style.container}>
            <div className={style.content} ref={contentRef}>
                {images}
                {pos < (items.length - 1) ?
                    <div className={style.arrow + ' ' + style.left_arrow} ref={arrowLeftRef} onClick={toLeft}>
                        <div/>
                        <div/>
                    </div>
                    :
                    ''
                }
                {pos > 0 ?
                    <div className={style.arrow + ' ' + style.right_arrow} ref={arrowRightRef} onClick={toRight}>
                        <div/>
                        <div/>
                    </div>
                    :
                    ''
                }
            </div>
        </div>
    )
}

export default Slider1;