import React, {useState, useRef} from 'react';
import {ErrorController, getCategoryTitles, useFocusAndStopErrorEffect, getChangeHandler} from '../modalUtils';
import RadioSelector from '../RadioSelector/RadioSelector';
import style from './CreateCategoryModal.module.scss';

export const toEndCategoryPlace = 'to_end';

function CreateCategoryModal({maxLen, categoryList, hideHandler, createHandler}) {
    let [value, setValue] = useState('');
    let [error, setError] = useState(null);

    let inputRef = useRef(null)
    let errorRef = useRef(new ErrorController(setError, getCategoryTitles(categoryList)));
    let selectedCategory = useRef(toEndCategoryPlace);

    // Ставим фокус на поле ввода при монтировании компонента, при размонтировании - отключаем таймер показа ошибок
    useFocusAndStopErrorEffect(inputRef, errorRef);

    function createButtonHandler() {
        let title = value.trim();
        if (errorRef.current.checkError(title)) return;
        createHandler(title, selectedCategory.current);
    }

    return (
        <div className={style.container}>
            <div className={style.modal}>
                <input type={'text'} value={value} onChange={getChangeHandler(setValue, maxLen)} ref={inputRef}/>
                {error !== null ? <div className={style.error_block}>{error}</div> : ''}
                {categoryList.length > 0 ?
                    <RadioSelector title={'Поместить перед категрией:'}
                                   categoryList={categoryList}
                                   additionalElement={{id: toEndCategoryPlace, title: 'Поместить в конец'}}
                                   startValue={toEndCategoryPlace}
                                   onChange={id => selectedCategory.current = id}
                    />
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