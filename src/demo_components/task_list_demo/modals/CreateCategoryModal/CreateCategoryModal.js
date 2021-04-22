import React, {useState, useRef} from 'react';
import {ErrorController, getCategoryTitles, useFocusAndStopErrorEffect, getChangeHandler} from '../modalUtils';
import style from './CreateCategoryModal.module.scss';

export const toEndCategoryPlace = 'to_end';

function CreateCategoryModal({maxLen, categoryList,  hideHandler, createHandler}) {
    let [value, setValue] = useState('');
    let [error, setError] = useState(null);
    let [beforeCategory, setBeforeCategory] = useState('to_end');

    let inputRef = useRef(null)
    let errorRef = useRef(new ErrorController(setError, getCategoryTitles(categoryList)));

    // Ставим фокус на поле ввода при монтировании компонента, при размонтировании - отключаем таймер показа ошибок
    useFocusAndStopErrorEffect(inputRef, errorRef);

    function createButtonHandler() {
        let title = value.trim();
        if (errorRef.current.checkError(title)) return;
        createHandler(title, beforeCategory);
    }

    return (
        <div className={style.container}>
            <div className={style.modal}>
                <input type={'text'} value={value} onChange={getChangeHandler(setValue, maxLen)} ref={inputRef}/>
                {error !== null ? <div className={style.error_block}>{error}</div> : ''}
                {categoryList.length > 0 ?
                    <div className={style.radio_selector}>
                        <p>Поместить перед категорией:</p>
                        <table>
                            <tbody>
                            {categoryList.map((value, index) =>
                                <tr key={index}>
                                    <td>
                                        <input id={value.id}
                                               type={'radio'}
                                               name={'before_cat'}
                                               value={value.id}
                                               onChange={e => setBeforeCategory(e.target.value)}
                                               checked={+beforeCategory === value.id}
                                        />
                                    </td>
                                    <td>
                                        <label htmlFor={value.id}>{value.title}</label>
                                    </td>
                                </tr>
                            )}
                            <tr>
                                <td>
                                    <input id={'to_end'}
                                           type={'radio'}
                                           name={'before_cat'}
                                           value={toEndCategoryPlace}
                                           onChange={e => setBeforeCategory(e.target.value)}
                                           checked={beforeCategory === toEndCategoryPlace}
                                    />
                                </td>
                                <td>
                                    <label htmlFor={'to_end'}>поместить в конец</label>
                                </td>
                            </tr>
                            </tbody>
                        </table>
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