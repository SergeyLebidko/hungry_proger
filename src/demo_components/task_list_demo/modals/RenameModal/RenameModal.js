import React, {useState, useRef, useEffect} from 'react';
import {ErrorController} from '../modalUtils';
import style from './RenameModal.module.scss';

function RenameModal({startValue, maxLen, deniedList, deniedMsg, hideHandler, saveHandler}) {
    let [value, setValue] = useState(startValue);
    let [error, setError] = useState(null);

    let inputRef = useRef(null);
    let errorRef = useRef(new ErrorController(setError));

    // Ставим фокус на поле ввода при монтировании компонента, при размонтировании - отключаем таймер показа ошибок
    useEffect(() => {
        inputRef.current.focus();

        return () => errorRef.current.stopTimer();
    }, []);

    function changeHandler(event) {
        let nextValue = event.target.value;
        if (nextValue === ' ' || nextValue.length > maxLen) return;
        setValue(nextValue);
    }

    function saveButtonClickHandler() {
        let finalValue = value.trim();

        if (finalValue.length === 0) {
            errorRef.current.showError('Название не может быть пустым');
            return;
        }

        for (let deniedValue of deniedList) {
            if (finalValue === deniedValue) {
                errorRef.current.showError(deniedMsg);
                return;
            }
        }
        saveHandler(finalValue);
    }

    return (
        <div className={style.container}>
            <div className={style.content}>
                <input type={'text'} value={value} ref={inputRef} onChange={changeHandler}/>
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