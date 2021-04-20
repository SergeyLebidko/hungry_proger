import React, {useRef, useState} from 'react';
import Category from '../Category/Category';
import ControlBlock from '../ControlBlock/ControlBlock';
import CreateCategoryModal, {toEndCategoryPlace} from '../modals/CreateCategoryModal/CreateCategoryModal';
import style from './CategoryList.module.scss';

export const colorPresets = [
    'rgb(40, 50, 120), black',
    'DeepSkyBlue, Blue',
    'Lime, ForestGreen',
    'DarkOrange, red',
    'Yellow, Goldenrod',
    'Violet, DarkViolet',
    'Silver, dimgray'
];

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
            setCategoryList([...categoryList, {id: nextId.current++, title, colorPreset: 0, taskList: []}]);
            return;
        }

        let nextCategoryList = [];
        for (let category of categoryList) {
            if (category.id === +beforeId) nextCategoryList.push({
                id: nextId.current++,
                title,
                colorPreset: 0,
                taskList: []
            });
            nextCategoryList.push(category)
        }
        setCategoryList(nextCategoryList);
    }

    // Функции перемещения категорий внутри списка
    function categoryToLeft(id) {
        let currentPos = findCategoryPosById(id);
        if (currentPos === 0) return;

        let index = 0;
        let nextCategoryList = [];
        while (index < categoryList.length) {
            if (index === (currentPos - 1)) {
                nextCategoryList.push(categoryList[currentPos]);
                nextCategoryList.push(categoryList[index]);
                index += 2;
                continue;
            }
            nextCategoryList.push(categoryList[index]);
            index++;
        }

        setCategoryList(nextCategoryList);
    }

    function categoryToRight(id) {
        let currentPos = findCategoryPosById(id);
        if (currentPos === (categoryList.length - 1)) return;

        let index = 0;
        let nextCategoryList = [];
        while (index < categoryList.length) {
            if (index === currentPos) {
                nextCategoryList.push(categoryList[currentPos + 1]);
                nextCategoryList.push(categoryList[index]);
                index += 2;
                continue;
            }
            nextCategoryList.push(categoryList[index]);
            index++;
        }

        setCategoryList(nextCategoryList);
    }

    function findCategoryPosById(id) {
        let pos;
        for (let index = 0; index < categoryList.length; index++) {
            if (categoryList[index].id !== id) continue;
            pos = index;
            break;
        }

        console.log(pos);

        return pos;
    }

    // Функция для изменения цвета категории
    function changeCategoryColor(id) {
        setCategoryList(categoryList.map(value => {
            if (value.id === id) return {...value, colorPreset: (++value.colorPreset) % colorPresets.length}
            return value;
        }));
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
                <div>&nbsp;</div>
                {categoryList.map(value => <Category key={value.id} {...value} changeColorHandler={changeCategoryColor}
                                                     toLeft={categoryToLeft} toRight={categoryToRight}/>)}
                <div>&nbsp;</div>
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