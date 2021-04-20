import React, {useRef, useState} from 'react';
import Category from '../Category/Category';
import ControlBlock from '../ControlBlock/ControlBlock';
import CreateCategoryModal, {toEndCategoryPlace} from '../modals/CreateCategoryModal/CreateCategoryModal';
import ConfirmModal from '../modals/ConfirmModal/ConfirmModal';
import RenameModal from '../modals/RenameModal/RenameModal';
import style from './CategoryList.module.scss';

const maxCategoryTitleLen = 40;
const maxTaskTitleLen = 100;
export const colorPresets = [
    'black',
    'DeepSkyBlue',
    'ForestGreen',
    'orangered',
    'SlateBlue',
    'DeepPink',
    'Chocolate',
    'Lime',
    'LightSlateGray',
    'Teal',
    'DarkViolet',
    'dimgray'
];

function CategoryList() {
    let [categoryList, setCategoryList] = useState([]);
    let [hasSideScroll, setHasSideScroll] = useState(false);

    let [hasCreateCategoryModal, setHasCreateCategoryModal] = useState(false);

    let [hasConfirmModal, setHasConfirmModal] = useState(false);
    let [confirmProps, setConfirmProps] = useState({});

    let [hasRenameModal, setHasRenameModal] = useState(false);
    let [renameProps, setRenameProps] = useState({});

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
        return pos;
    }

    // Функция для изменения цвета категории
    function changeCategoryColor(id) {
        setCategoryList(categoryList.map(value => {
            if (value.id === id) return {...value, colorPreset: (++value.colorPreset) % colorPresets.length}
            return value;
        }));
    }

    // Функция для уделения категории
    function removeCategory(id) {
        let categoryTitle;
        for (let category of categoryList) {
            if (id === category.id) {
                categoryTitle = category.title;
                break;
            }
        }

        // Функция, выполняемая, если пользователь ответит "Да" в окне запроса подтверждения операции
        let yesFunction = () => {
            setCategoryList(categoryList.filter(value => value.id !== id));
            setHasConfirmModal(false);
        }

        setHasConfirmModal(true);
        setConfirmProps({
            text: `Вы действительно хотите удалить категорию "${categoryTitle}"? Все связанные с ней задачи также будут удалены.`,
            hideHandler: () => setHasConfirmModal(false),
            yesFunction
        });
    }

    // Функция для переименования категории
    function renameCategory(id) {
        let categoryForRename;
        for (let category of categoryList) {
            if (category.id === id) {
                categoryForRename = category;
                break;
            }
        }

        // Функция, выполняемая, если пользователь введет новое имя и нажмет кнопку "Сохранить"
        let saveFunction = nextTitle => {
            setCategoryList(categoryList.map(value => {
                if (value.id === id) return {...value, title: nextTitle}
                return value;
            }))
            setHasRenameModal(false);
        }

        let deniedList = categoryList.map(value => value.title);

        setHasRenameModal(true);
        setRenameProps({
            startValue: categoryForRename.title,
            maxLen: maxCategoryTitleLen,
            deniedList,
            deniedMsg: 'Категория с таким имененем уже существует',
            hideHandler: () => setHasRenameModal(false),
            saveHandler: saveFunction
        });
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

    // Action-пропы для контейнера
    let containerActions = {
        onMouseDown: mouseDownHandler,
        onMouseUp: mouseUpHandler,
        onMouseMove: mouseMoveHandler
    }

    // Action-пропы для отдельных категорий
    let categoryActions = {
        changeColorHandler: changeCategoryColor,
        toLeft: categoryToLeft,
        toRight: categoryToRight,
        toRemove: removeCategory,
        toRename: renameCategory
    }

    // Пропы для блока управления
    let controlBlockProps = {
        categoryCount: categoryList.length,
        taskCount: taskCount,
        addTaskEnabled: categoryList.length > 0,
        showCreateCategory: () => setHasCreateCategoryModal(true)
    }

    // Пропы для модального окна создания категории
    let createCategoryModalProps = {
        maxLen: maxCategoryTitleLen,
        categoryList: categoryList,
        hideHandler: () => setHasCreateCategoryModal(false),
        createHandler: createCategory
    }

    let containerStyle = hasSideScroll ? {cursor: 'all-scroll'} : {}
    return (
        <>
            <ControlBlock {...controlBlockProps}/>
            <div className={style.container} style={containerStyle} ref={containerRef} {...containerActions}>
                <div>&nbsp;</div>
                {categoryList.map(value => <Category key={value.id} {...value} {...categoryActions}/>)}
                <div>&nbsp;</div>
            </div>
            {hasCreateCategoryModal ? <CreateCategoryModal {...createCategoryModalProps}/> : ''}
            {hasConfirmModal ? <ConfirmModal {...confirmProps}/> : ''}
            {hasRenameModal ? <RenameModal {...renameProps}/> : ''}
        </>
    );
}

export default CategoryList;