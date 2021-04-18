import React, {useRef, useState} from 'react';
import Category from '../Category/Category';
import style from './CategoryList.module.scss';

function CategoryList() {
    let [hasSideScroll, setHasSideScroll] = useState(false);
    let containerRef = useRef(null);
    let mouseLine = useRef(null);

    // Код-заглушка. Должен быть удален
    let categoryList = [];
    for (let index = 0; index < 10; index++) {
        categoryList.push(<Category key={index}/>);
    }

    function mouseDownHandler(event) {
        mouseLine.current = event.clientX;
        setHasSideScroll(true);
    }

    function mouseUpHandler() {
        mouseLine.current = null;
        setHasSideScroll(false);
    }

    function mouseMoveHandler(event) {
        if (mouseLine.current === null) return;
        let deltaX = mouseLine.current - event.clientX;
        mouseLine.current = event.clientX;
        containerRef.current.scrollLeft += deltaX;
    }

    let containerStyle = hasSideScroll ? {cursor: 'all-scroll'} : {};
    return (
        <div className={style.container}
             onMouseDown={mouseDownHandler}
             onMouseUp={mouseUpHandler}
             onMouseMove={mouseMoveHandler}
             style={containerStyle}
             ref={containerRef}>
            {categoryList}
        </div>
    );
}

export default CategoryList;