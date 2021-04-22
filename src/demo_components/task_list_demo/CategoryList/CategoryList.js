import React, {useRef, useState} from 'react';
import Category from '../Category/Category';
import ControlBlock from '../ControlBlock/ControlBlock';
import CreateCategoryModal, {toEndCategoryPlace} from '../modals/CreateCategoryModal/CreateCategoryModal';
import ConfirmModal from '../modals/ConfirmModal/ConfirmModal';
import RenameModal from '../modals/RenameModal/RenameModal';
import CreateTaskModal from '../modals/CreateTaskModal/CreateTaskModal';
import style from './CategoryList.module.scss';
import MoveTaskModal from "../modals/MoveTaskModal/MoveTaskModal";

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

const left = 'l';
const right = 'r';
const up = 'u';
const down = 'd';

let initialId = 0;
const initialData = [
    {
        id: initialId++,
        title: 'На будущее',
        colorPreset: 10,
        taskList: [
            {
                id: initialId++,
                title: 'Изучить Vue.js'
            },
            {
                id: initialId++,
                title: 'Познакомиться с Flask'
            }
        ]
    },
    {
        id: initialId++,
        title: 'Текущие задачи',
        colorPreset: 1,
        taskList: [
            {
                id: initialId++,
                title: 'Завершить разработку нового модуля'
            },
            {
                id: initialId++,
                title: 'Разобраться с Redux'
            },
            {
                id: initialId++,
                title: 'Деплой в продакшен'
            }
        ]
    },
    {
        id: initialId++,
        title: 'Срочные задачи',
        colorPreset: 3,
        taskList: [
            {
                id: initialId++,
                title: 'Фикс багов'
            }
        ]
    }
]

function CategoryList() {
    let [categoryList, setCategoryList] = useState(initialData);
    let [hasSideScroll, setHasSideScroll] = useState(false);

    let [hasCreateCategoryModal, setHasCreateCategoryModal] = useState(false);

    let [hasConfirmModal, setHasConfirmModal] = useState(false);
    let [confirmProps, setConfirmProps] = useState({});

    let [hasRenameModal, setHasRenameModal] = useState(false);
    let [renameProps, setRenameProps] = useState({});

    let [hasCreateTaskModal, setHasCreateTaskModal] = useState(false);

    let [hasMoveTaskModal, setHasMoveTaskModal] = useState(false);
    let [moveTaskProps, setMoveTaskProps] = useState({});

    let containerRef = useRef(null);
    let mouseLine = useRef(null);
    let nextId = useRef(initialId);

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

    function createTask(title, categoryId) {
        setCategoryList(categoryList.map(category => {
            if (category.id !== +categoryId) return category;
            return {
                ...category,
                taskList: [...category.taskList, {id: initialId++, title}]
            }
        }))
        setHasCreateTaskModal(false);
    }

    // Функции для перемещения категорий внутри списка
    function moveCategory(direction, id) {
        let currentPos = findCategoryPosById(id);
        if (currentPos === (categoryList.length - 1) && direction === right) return;
        if (currentPos === 0 && direction === left) return;

        let nextCategoryList = categoryList.filter((_, index) => index !== currentPos);
        nextCategoryList.splice(currentPos + (direction === left ? -1 : 1), 0, categoryList[currentPos]);

        setCategoryList(nextCategoryList);
    }

    function findCategoryPosById(id) {
        for (let index = 0; index < categoryList.length; index++) {
            if (categoryList[index].id !== id) continue;
            return index;
        }
    }

    // Функция для перемещения задач внутри категории
    function moveTaskVertical(direction, id) {
        let nextTaskList, currentPos;
        setCategoryList(categoryList.map(category => {
            currentPos = null;
            nextTaskList = category.taskList.filter((task, index) => {
                if (task.id === id) {
                    currentPos = index;
                    return false
                }
                return true;
            });
            if (!currentPos && direction === up) return category;
            if ((currentPos === null || currentPos === (category.taskList.length - 1)) && direction === down) return category;

            nextTaskList.splice(currentPos + (direction === up ? -1 : 1), 0, category.taskList[currentPos]);
            return {
                ...category,
                taskList: nextTaskList
            }
        }));
    }

    // Функция для перемещения задачи из категории в категорию
    function moveTaskHorizontal(taskId) {
        if (categoryList.length < 2) return;

        let currentTask;      // Задача, которую пользователь хочет переместить в другую категорию
        let currentCategory;  // Категория, в которой задача находится сейчас
        for (let category of categoryList) {
            for (let task of category.taskList) {
                if (task.id === taskId) {
                    currentTask = task;
                    currentCategory = category;
                    break;
                }
            }
            if (currentCategory) break;
        }

        // Функция, которая будет вызвана, когда пользователь выберет категорию для перемещения
        let moveHandler = nextCategoryId => {
            setCategoryList(categoryList.map(category => {

                // Удаляем задачу в текущей категории...
                if (category.id === currentCategory.id) {
                    return {
                        ...category,
                        taskList: category.taskList.filter(task => task.id !== currentTask.id)
                    }
                }

                // ...и создаем её в списке задач целевой категории
                if (category.id === +nextCategoryId) {
                    return {
                        ...category,
                        taskList: [...category.taskList, currentTask]
                    }
                }

                return category;
            }))
            setHasMoveTaskModal(false);
        }

        // Готовим пропсы для модального окна перемещения задачи
        setMoveTaskProps({
            task: currentTask,
            categoryList: categoryList.filter(category => category.id !== currentCategory.id),
            hideHandler: () => setHasMoveTaskModal(false),
            moveHandler
        });

        setHasMoveTaskModal(true);
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
        let okHandler = () => {
            setCategoryList(categoryList.filter(value => value.id !== id));
            setHasConfirmModal(false);
        }

        setHasConfirmModal(true);
        setConfirmProps({
            text: `Вы действительно хотите удалить категорию "${categoryTitle}"? Все связанные с ней задачи также будут удалены.`,
            cancelHandler: () => setHasConfirmModal(false),
            okHandler
        });
    }

    // Функция для удаления задачи
    function removeTask(id) {
        let taskTitle;
        for (let category of categoryList) {
            for (let task of category.taskList) {
                if (task.id === id) {
                    taskTitle = task.title;
                    break;
                }
            }
            if (taskTitle) break;
        }

        // Функция, выполняемая, если пользователь ответит "Да" в окне запроса подтверждения операции
        let yesFunction = () => {
            setCategoryList(categoryList.map(category => {
                return {
                    ...category,
                    taskList: category.taskList.filter(task => id !== task.id)
                }
            }));
            setHasConfirmModal(false);
        }

        setHasConfirmModal(true);
        setConfirmProps({
            text: `Вы действительно хотите удалить задачу "${taskTitle}"?`,
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

    // Функция для переименования задачи
    function renameTask(id) {
        let taskForRename;
        for (let category of categoryList) {
            for (let task of category.taskList) {
                if (task.id === id) {
                    taskForRename = task;
                    break;
                }
            }
            if (taskForRename) break;
        }

        // Функция, выполняемая, если пользователь введет новое имя и нажмет "Сохранить"
        let saveFunction = nextTitle => {
            console.log(nextTitle);

            setCategoryList(categoryList.map(category => {
                return {
                    ...category,
                    taskList: category.taskList.map(task => {
                        if (task.id !== id) return task;
                        return {
                            ...task,
                            title: nextTitle
                        }
                    })
                }
            }));
            setHasRenameModal(false);
        }

        let deniedList = [];
        for (let category of categoryList) {
            for (let task of category.taskList) deniedList.push(task.title);
        }

        setHasRenameModal(true);
        setRenameProps({
            startValue: taskForRename.title,
            maxLen: maxTaskTitleLen,
            deniedMsg: 'Задача с таким названием уже существует',
            deniedList,
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
        toLeft: id => moveCategory(left, id),
        toRight: id => moveCategory(right, id),
        toRemove: removeCategory,
        toRename: renameCategory
    }

    // Action-пропы для отдельных задач
    let taskActions = {
        toRename: renameTask,
        toRemove: removeTask,
        toUp: id => moveTaskVertical(up, id),
        toDown: id => moveTaskVertical(down, id),
        toMove: moveTaskHorizontal
    }

    // Пропы для блока управления
    let controlBlockProps = {
        categoryCount: categoryList.length,
        taskCount: taskCount,
        addTaskEnabled: categoryList.length > 0,
        showCreateCategory: () => setHasCreateCategoryModal(true),
        showCreateTask: () => setHasCreateTaskModal(true)
    }

    // Пропы для модального окна создания категории
    let createCategoryModalProps = {
        maxLen: maxCategoryTitleLen,
        categoryList,
        hideHandler: () => setHasCreateCategoryModal(false),
        createHandler: createCategory
    }

    // Пропы для модального окна создания задачи
    let createTaskModalProps = {
        maxLen: maxTaskTitleLen,
        categoryList,
        hideHandler: () => setHasCreateTaskModal(false),
        createHandler: createTask
    }

    let containerStyle = hasSideScroll ? {cursor: 'all-scroll'} : {}
    return (
        <>
            <ControlBlock {...controlBlockProps}/>
            <div className={style.container} style={containerStyle} ref={containerRef} {...containerActions}>
                <div>&nbsp;</div>
                {categoryList.map(value => <Category key={value.id} {...value} {...categoryActions}
                                                     taskActions={taskActions}/>)}
                <div>&nbsp;</div>
            </div>
            {hasCreateCategoryModal ? <CreateCategoryModal {...createCategoryModalProps}/> : ''}
            {hasCreateTaskModal ? <CreateTaskModal {...createTaskModalProps}/> : ''}
            {hasRenameModal ? <RenameModal {...renameProps}/> : ''}
            {hasConfirmModal ? <ConfirmModal {...confirmProps}/> : ''}
            {hasMoveTaskModal ? <MoveTaskModal {...moveTaskProps}/> : ''}
        </>
    );
}

export default CategoryList;