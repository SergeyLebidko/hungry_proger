import React, {useState, useRef} from 'react';
import {ErrorController, getCategoryTitles, getTaskTitles, useFocusAndStopErrorEffect, getChangeHandler} from '../modalUtils';
import style from './RenameModal.module.scss';

export const renameCategoryType = 'rc';
export const renameTaskType = 'rt';

function RenameModal({startValue, maxLen, categoryList, modalType, hideHandler, saveHandler}) {
    let [value, setValue] = useState(startValue);
    let [error, setError] = useState(null);

    let inputRef = useRef(null);
    let errorRef = useRef(new ErrorController(setError, modalType === renameCategoryType ? getCategoryTitles(categoryList) : getTaskTitles(categoryList)));

    // Ставим фокус на поле ввода при монтировании компонента, при размонтировании - отключаем таймер показа ошибок
    useFocusAndStopErrorEffect(inputRef, errorRef);

    function saveButtonClickHandler() {
        let finalValue = value.trim();
        if (errorRef.current.checkError(finalValue)) return;
        saveHandler(finalValue);
    }

    return (
        <div className={style.container}>
            <div className={style.content}>
                <input type={'text'} value={value} ref={inputRef} onChange={getChangeHandler(setValue, maxLen)}/>
                {error !== null ? <div className={style.error_block}>{error}</div> : ''}
                <div className={style.button_block}>
                    <input type={'button'} value={'Сохранить'} className={style.yes_btn}
                           onClick={saveButtonClickHandler}/>
                    <input type={'button'} value={'Отмена'} className={style.no_btn} onClick={hideHandler}/>
                </div>
            </div>
        </div>
    );
}

export default RenameModal;