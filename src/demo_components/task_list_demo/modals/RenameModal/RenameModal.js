import React, {useState, useRef, useEffect} from 'react';
import style from './RenameModal.module.scss';

function RenameModal({startValue, maxLen, deniedList, deniedMsg, hideHandler, saveHandler}) {
    let [value, setValue] = useState(startValue);
    let [error, setError] = useState(null);

    let errorTimeout = useState(null);
    let inputRef = useRef(null);

    // Ставим фокус на поле ввода при монтировании компонента
    useEffect(() => {
        inputRef.current.focus();
    }, []);

    function changeHandler(event) {
        let nextValue = event.target.value;
        if (nextValue === ' ' || nextValue.length > maxLen) return;
        setValue(nextValue);
    }

    function saveButtonClickHandler() {
        let finalValue = value.trim();

        if (finalValue.length === 0) {
            showError('Название не может быть пустым');
            return;
        }

        for (let deniedValue of deniedList) {
            if (finalValue === deniedValue) {
                showError(deniedMsg);
                return;
            }
        }
        saveHandler(finalValue);
    }

    function showError(text) {
        setError(text);
        clearTimeout(errorTimeout.current);
        errorTimeout.current = setTimeout(() => setError(null), 3000);
    }

    return (
        <div className={style.container}>
            <div className={style.content}>
                <input type={'text'} value={value} ref={inputRef} onChange={changeHandler}/>
                {error !== null ? <div className={style.error_block}>{error}</div> : ''}
                <div className={style.button_block}>
                    <input type={'button'} value={'Сохранить'} className={style.yes_btn} onClick={saveButtonClickHandler}/>
                    <input type={'button'} value={'Отмена'} className={style.no_btn} onClick={hideHandler}/>
                </div>
            </div>
        </div>
    );
}

export default RenameModal;