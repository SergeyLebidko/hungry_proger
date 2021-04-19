import React, {useRef, useState} from 'react';
import Category from '../Category/Category';
import style from './CategoryList.module.scss';
import ControlBlock from "../ControlBlock/ControlBlock";
import CategoryCreatorModal from "../CategoryCreatorModal/CategoryCreatorModal";

function CategoryList() {
    let [categoryList, setCategoryList] = useState([]);
    let [hasCategoryCreatorModal, setHasCategoryCreatorModal] = useState(false);

    let [hasSideScroll, setHasSideScroll] = useState(false);
    let containerRef = useRef(null);
    let mouseLine = useRef(null);

    // Обработчки для операций модальных окон
    function showCreateCategoryModalHandler() {
        setHasCategoryCreatorModal(true);
    }

    function hideCreateCategoryModalHandler() {
        setHasCategoryCreatorModal(false);
    }

    function createCategory(title) {
        setHasCategoryCreatorModal(false);

    }

    // Блок функций для управления скроллингом вправо/влево
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
            <ControlBlock categoryCount={categoryList.length}
                          taskCount={taskCount}
                          showCreateCategoryModalHandler={showCreateCategoryModalHandler}
            />
            <div className={style.container}
                 onMouseDown={mouseDownHandler}
                 onMouseUp={mouseUpHandler}
                 onMouseMove={mouseMoveHandler}
                 style={containerStyle}
                 ref={containerRef}
            >
                {categoryList.map(value => <Category title={value.title} taskList={value.taskList}/>)}
            </div>
            {hasCategoryCreatorModal ?
                <CategoryCreatorModal hideModalHandler={hideCreateCategoryModalHandler}
                                      createCategoryHandler={createCategory}
                />
                :
                ''
            }
        </>
    );
}

export default CategoryList;