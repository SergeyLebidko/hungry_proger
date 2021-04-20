import React, {useState, useRef, useEffect} from 'react';
import style from './CreateCategoryModal.module.scss';

export const toEndCategoryPlace = 'to_end';

function CreateCategoryModal({maxLen, createHandler, hideHandler, categoryList}) {
    let [value, setValue] = useState('');
    let [error, setError] = useState(null);
    let [beforeCategory, setBeforeCategory] = useState('to_end');

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
        createHandler(title, beforeCategory);
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
                {categoryList.length > 0 ?
                    <div className={style.before_category_block}>
                        <p>Поместить перед категорией:</p>
                        {categoryList.map((value, index) =>
                            <p key={index}>
                                <input id={value.id}
                                       type={'radio'}
                                       name={'before_cat'}
                                       value={value.id}
                                       onChange={e => setBeforeCategory(e.target.value)}
                                       checked={+beforeCategory === value.id}
                                />
                                <label htmlFor={value.id}>{value.title}</label>
                            </p>
                        )}
                        <p>
                            <input id={'to_end'}
                                   type={'radio'}
                                   name={'before_cat'}
                                   value={toEndCategoryPlace}
                                   onChange={e => setBeforeCategory(e.target.value)}
                                   checked={beforeCategory === toEndCategoryPlace}
                            />
                            <label htmlFor={'to_end'}>поместить в конец</label>
                        </p>
                    </div>
                    : ''
                }
                <div className={style.buttons_block}>
                    <input type={'button'} value={'Создать'} className={style.yes_btn} onClick={createButtonHandler}/>
                    <input type={'button'} value={'Отмена'} className={style.no_btn} onClick={hideHandler}/>
                </div>
            </div>
        </div>
    );
}

export default CreateCategoryModal;