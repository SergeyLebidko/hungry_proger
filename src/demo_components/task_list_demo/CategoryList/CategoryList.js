import React, {useRef, useState} from 'react';
import Category from '../Category/Category';
import ControlBlock from '../ControlBlock/ControlBlock';
import CreateCategoryModal from '../modals/CreateCategoryModal/CreateCategoryModal';
import style from './CategoryList.module.scss';

function CategoryList() {
    let [categoryList, setCategoryList] = useState([]);

    let [hasCreateCategoryModal, setHasCreateCategoryModal] = useState(false);

    let [hasSideScroll, setHasSideScroll] = useState(false);
    let containerRef = useRef(null);
    let mouseLine = useRef(null);

    // Обработчки для операций модальных окон
    function createCategory(title) {
        setCategoryList([...categoryList, {title, taskList: []}]);
        setHasCreateCategoryModal(false);

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

    let titlesList = [];
    if (hasCreateCategoryModal) {
        for (let {title} of categoryList) titlesList.push(title);
    }

    let containerStyle = hasSideScroll ? {cursor: 'all-scroll'} : {};
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
                 ref={containerRef}
            >
                {categoryList.map(value => <Category title={value.title} taskList={value.taskList}/>)}
            </div>
            {hasCreateCategoryModal ?
                <CreateCategoryModal deniedList={titlesList}
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