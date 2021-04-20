import React, {useState, useRef, useEffect} from 'react';
import style from './CreateTaskModal.module.scss';

function CreateTaskModal({maxLen, categoryList, hideHandler}) {
    let [value, setValue] = useState('');

    function changeHandler(event) {
        let nextValue = event.target.value;
        if (nextValue === ' ' || nextValue.length > maxLen) return;
        setValue(nextValue);
    }

    function saveButtonHandler() {
        let finalValue = value.trim();
        // TODO Вставить код проверки и сохранения значения
    }

    return (
        <div className={style.container}>
            <div className={style.content}>
                <input type={'text'} value={value} onChange={changeHandler}/>
                <div className={style.radio_selector}>
                    <p>В какую категорию поместить задачу?</p>
                    {categoryList.map(category => {
                        return (
                            <p>
                                <input id={`category_${category.id}`} type={'radio'} name={'category'}
                                       value={category.id}/>
                                <label htmlFor={`category_${category.id}`}>{category.title}</label>
                            </p>
                        )
                    })}
                </div>
                <div className={style.button_block}>
                    <input type={'button'} value={'Создать'} className={style.yes_btn}/>
                    <input type={'button'} value={'Отмена'} className={style.no_btn} onClick={hideHandler}/>
                </div>
            </div>
        </div>
    );
}

export default CreateTaskModal;