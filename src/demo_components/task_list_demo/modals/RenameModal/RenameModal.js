import React, {useState, useRef, useEffect} from 'react';
import style from './RenameModla.module.scss';

function RenameModal({startValue, deniedList, hideHandler, saveHandler}) {
    let inputRef = useRef(null);

    // Ставим фокус на поле ввода при монтировании компонента
    useEffect(()=>{
        inputRef.current.focus();
    }, [])

    return (
        <div className={style.container}>
            <div className={style.content}>
                <input type={'text'} defaultValue={startValue} ref={inputRef}/>
                <div className={style.button_block}>
                    <input type={'button'} value={'Сохранить'}/>
                    <input type={'button'} value={'Отмена'}/>
                </div>
            </div>
        </div>
    );
}

export default RenameModal;