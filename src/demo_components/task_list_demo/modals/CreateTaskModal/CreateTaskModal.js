import React, {useState, useRef} from 'react';
import {ErrorController, getTaskTitles, useFocusAndStopErrorEffect, getChangeHandler} from '../modalUtils';
import style from './CreateTaskModal.module.scss';

function CreateTaskModal({maxLen, categoryList, defaultCategoryId, hideHandler, createHandler}) {
    let [value, setValue] = useState('');
    let [error, setError] = useState(null);

    let [radioValue, setRadioValue] = useState(defaultCategoryId || categoryList[0].id)

    let inputRef = useRef(null);
    let errorRef = useRef(new ErrorController(setError, getTaskTitles(categoryList)));

    // Ставим фокус на поле ввода при монтировании компонента, при размонтировании - отключаем таймер показа ошибок
    useFocusAndStopErrorEffect(inputRef, errorRef);

    function saveButtonHandler() {
        let finalValue = value.trim();
        if (errorRef.current.checkError(finalValue)) return;
        createHandler(finalValue, radioValue);
    }

    return (
        <div className={style.container}>
            <div className={style.content}>
                <input type={'text'} value={value} onChange={getChangeHandler(setValue, maxLen)} ref={inputRef}/>
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