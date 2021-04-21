import React, {useState, useRef, useEffect} from 'react';
import {ErrorController} from '../modalUtils';
import style from './CreateTaskModal.module.scss';

function CreateTaskModal({maxLen, categoryList, defaultCategoryId, hideHandler, createHandler}) {
    let [value, setValue] = useState('');
    let [radioValue, setRadioValue] = useState(defaultCategoryId || categoryList[0].id)
    let [error, setError] = useState(null);

    let inputRef = useRef(null);
    let errorRef = useRef(new ErrorController(setError));

    //Ставим фокус на поле ввода
    useEffect(() => {
        inputRef.current.focus();
    }, []);

    function changeHandler(event) {
        let nextValue = event.target.value;
        if (nextValue === ' ' || nextValue.length > maxLen) return;
        setValue(nextValue);
    }

    function saveButtonHandler() {
        let finalValue = value.trim();
        if (finalValue.length === 0) {
            errorRef.current.showError('Название не может быть пустым');
            return;
        }

        for (let category of categoryList) {
            for (let task of category.taskList) {
                if (task.title === finalValue) {
                    errorRef.current.showError(`Задача с таким названием уже существует в категории "${category.title}"`);
                    return;
                }
            }
        }

        createHandler(finalValue, radioValue);
    }

    return (
        <div className={style.container}>
            <div className={style.content}>
                <input type={'text'} value={value} onChange={changeHandler} ref={inputRef}/>
                {error !== null ? <div className={style.error_block}>{error}</div> : ''}
                <div className={style.radio_selector}>
                    <p>В какую категорию поместить задачу?</p>
                    <table>
                        <tbody>
                        {categoryList.map(category => {
                            return (
                                <tr>
                                    <td>
                                        <input id={`category_${category.id}`}
                                               type={'radio'}
                                               name={'category'}
                                               value={category.id}
                                               checked={category.id === radioValue}
                                               onChange={() => setRadioValue(category.id)}
                                        />
                                    </td>
                                    <td>
                                        <label htmlFor={`category_${category.id}`}>{category.title}</label>
                                    </td>
                                </tr>
                            );
                        })}
                        </tbody>
                    </table>
                </div>
                <div className={style.button_block}>
                    <input type={'button'} value={'Создать'} className={style.yes_btn} onClick={saveButtonHandler}/>
                    <input type={'button'} value={'Отмена'} className={style.no_btn} onClick={hideHandler}/>
                </div>
            </div>
        </div>
    );
}

export default CreateTaskModal;