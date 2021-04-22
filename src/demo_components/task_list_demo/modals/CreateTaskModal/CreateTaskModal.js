import React, {useState, useRef} from 'react';
import {ErrorController, getTaskTitles, useFocusAndStopErrorEffect, getChangeHandler} from '../modalUtils';
import RadioSelector from '../RadioSelector/RadioSelector';
import style from './CreateTaskModal.module.scss';

function CreateTaskModal({maxLen, categoryList, hideHandler, createHandler}) {
    let [value, setValue] = useState('');
    let [error, setError] = useState(null);

    let inputRef = useRef(null);
    let errorRef = useRef(new ErrorController(setError, getTaskTitles(categoryList)));
    let selectedCategory = useRef(categoryList[0].id);

    // Ставим фокус на поле ввода при монтировании компонента, при размонтировании - отключаем таймер показа ошибок
    useFocusAndStopErrorEffect(inputRef, errorRef);

    function saveButtonHandler() {
        let finalValue = value.trim();
        if (errorRef.current.checkError(finalValue)) return;
        createHandler(finalValue, selectedCategory.current);
    }

    return (
        <div className={style.container}>
            <div className={style.content}>
                <input type={'text'} value={value} onChange={getChangeHandler(setValue, maxLen)} ref={inputRef}/>
                {error !== null ? <div className={style.error_block}>{error}</div> : ''}
                <RadioSelector title={'В какую категорию поместить задачу?'}
                               categoryList={categoryList}
                               startValue={categoryList[0].id}
                               onChange={id => selectedCategory.current = id}
                />
                <div className={style.button_block}>
                    <input type={'button'} value={'Создать'} className={style.yes_btn} onClick={saveButtonHandler}/>
                    <input type={'button'} value={'Отмена'} className={style.no_btn} onClick={hideHandler}/>
                </div>
            </div>
        </div>
    );
}

export default CreateTaskModal;