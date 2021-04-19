import React, {useRef, useState} from 'react';
import Category from '../Category/Category';
import style from './CategoryList.module.scss';
import ControlBlock from "../ControlBlock/ControlBlock";

function CategoryList() {
    let [categoryList, setCategoryList] = useState([]);

    let [hasSideScroll, setHasSideScroll] = useState(false);
    let containerRef = useRef(null);
    let mouseLine = useRef(null);

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

    let taskCount = 0;
    for (let category of categoryList) taskCount += category.taskList.length;

    let containerStyle = hasSideScroll ? {cursor: 'all-scroll'} : {};
    return (
        <>
            <ControlBlock categoryCount={categoryList.length} taskCount={taskCount}/>
            <div className={style.container}
                 onMouseDown={mouseDownHandler}
                 onMouseUp={mouseUpHandler}
                 onMouseMove={mouseMoveHandler}
                 style={containerStyle}
                 ref={containerRef}>
                {categoryList.map(value => <Category title={value.title} taskList={value.taskList}/>)}
            </div>
        </>
    );
}

export default CategoryList;