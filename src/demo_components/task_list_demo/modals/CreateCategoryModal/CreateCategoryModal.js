import React, {useState, useRef, useEffect} from 'react';
import style from './CreateCategoryModal.module.scss';

const maxLen = 40;

function CreateCategoryModal({createHandler, hideHandler, categoryList}) {
    let [value, setValue] = useState('');
    let [error, setError] = useState(null);

    let inputRef = useRef(null)
    let errorTimeout = useRef(null);

    // При показе модального окна сразу же ставим фокус на поле ввода
    useEffect(() => {
        inputRef.current.focus();
    }, [])

    function changeHandler(event) {
        let nextValue = event.target.value;
        if (nextValue.length > maxLen || nextValue === ' ') return;
        setValue(event.target.value);
    }

    function createButtonHandler() {
        let title = value.trim();
        if (title.length === 0) {
            showError('Название не может быть пустым');
            return;
        }
        for (let category of categoryList) {
            if (title === category.title) {
                showError('Категория с таким названием уже есть');
                return;
            }
        }
        createHandler(title);
    }

    function showError(text) {
        setError(text);
        clearTimeout(errorTimeout.current);
        errorTimeout.current = setTimeout(() => setError(null), 3000);
    }

    return (
        <div className={style.container}>
            <div className={style.modal}>
                <input type={'text'} value={value} onChange={changeHandler} ref={inputRef}/>
                {error !== null ? <div className={style.error_block}>{error}</div> : ''}
                <div>
                    <p>Поместить перед категорией</p>
                    {categoryList.map((value, index) =>
                        <p key={index}>
                            <label htmlFor={value.id}>{value.title}</label>
                            <input id={value.id} type={'radio'} name={'before_cat'} value={`before_${value.id}`}/>
                        </p>
                    )}
                    <p>
                        <label htmlFor={'to_end'}>поместить в конец</label>
                        <input id={'to_end'} type={'radio'} name={'before_cat'} value={'to_end'} checked={true}/>
                    </p>
                </div>
                <div className={style.buttons_block}>
                    <input type={'button'} value={'Создать'} onClick={createButtonHandler}/>
                    <input type={'button'} value={'Отмена'} onClick={hideHandler}/>
                </div>
            </div>
        </div>
    );
}

export default CreateCategoryModal;