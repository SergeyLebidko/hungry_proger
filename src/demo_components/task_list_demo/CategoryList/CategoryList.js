import React, {useRef, useState} from 'react';
import Category from '../Category/Category';
import ControlBlock from '../ControlBlock/ControlBlock';
import CreateCategoryModal, {toEndCategoryPlace} from '../modals/CreateCategoryModal/CreateCategoryModal';
import style from './CategoryList.module.scss';

function CategoryList() {
    let [categoryList, setCategoryList] = useState([]);
    let [hasSideScroll, setHasSideScroll] = useState(false);

    let [hasCreateCategoryModal, setHasCreateCategoryModal] = useState(false);

    let containerRef = useRef(null);
    let mouseLine = useRef(null);
    let nextId = useRef(0);

    // Обработчки для операций модальных окон
    function createCategory(title, beforeId) {
        setHasCreateCategoryModal(false);

        if (beforeId === toEndCategoryPlace) {
            setCategoryList([...categoryList, {id: nextId.current++, title, taskList: []}]);
            return;
        }

        let nextCategoryList = [];
        for (let category of categoryList) {
            if (category.id === +beforeId) nextCategoryList.push({id: nextId.current++, title, taskList: []});
            nextCategoryList.push(category)
        }
        setCategoryList(nextCategoryList);
    }

    // Блок функций для управления скроллингом списка категорий вправо и влево с помощью мыши
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

    let containerStyle = hasSideScroll ? {cursor: 'all-scroll'} : {}
    return (
        <>
            <ControlBlock categoryCount={categoryList.length}
                          taskCount={taskCount}
                          showCreateCategory={() => setHasCreateCategoryModal(true)}
            />
            <div className={style.container}
                 onMouseDown={mouseDownHandler}
                 onMouseUp={mouseUpHandler}
                 onMouseMove={mouseMoveHandler}
                 style={containerStyle}
                 ref={containerRef}>
                {categoryList.map(value => <Category title={value.title} taskList={value.taskList}/>)}
            </div>
            {hasCreateCategoryModal ?
                <CreateCategoryModal categoryList={categoryList}
                                     hideHandler={() => setHasCreateCategoryModal(false)}
                                     createHandler={createCategory}
                />
                :
                ''
            }
        </>
    );
}

export default CategoryList;