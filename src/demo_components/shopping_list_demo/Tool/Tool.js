import React, {useRef} from 'react';
import style from './Tool.module.scss';

function Tool({addCopyFlag, addCopyLastFlag, removeFlag, removeAllFlag, addEmptyHandler, addCopyLastHandler, addCopyHandler, removeHandler, removeAllHandler}) {

    // Устанавливаем вид кнопок в соответствие с разрешенными действиями
    let addCopyLastClass = addCopyLastFlag ? style.enabled_add : style.disabled;
    let addCopyClass = addCopyFlag ? style.enabled_add : style.disabled;
    let removeClass = removeFlag ? style.enabled_remove : style.disabled;
    let removeAllClass = removeAllFlag ? style.enabled_remove : style.disabled;

    // Устанавливаем рефы
    let addEmptyRef = useRef(null);
    let addCopyLastRef = useRef(null);
    let addCopyRef = useRef(null);
    let removeRef = useRef(null);
    let removeAllRef = useRef(null);

    function keyDownHandler(prevRef, nextRef, event, action) {
        if (event.code === 'ArrowLeft') prevRef.current.focus();
        if (event.code === 'ArrowRight') nextRef.current.focus();
        if (event.code === 'Enter' || event.code === 'Space') action();
    }

    return (
        <ul className={style.container}>
            <li className={style.enabled_add}
                onClick={addEmptyHandler}
                onKeyDown={e => keyDownHandler(removeAllRef, addCopyLastRef, e, addEmptyHandler)}
                tabIndex={1}
                ref={addEmptyRef}>
                Добавить новую строку
            </li>
            <li className={addCopyLastClass}
                onClick={addCopyLastHandler}
                onKeyDown={e => keyDownHandler(addEmptyRef, addCopyRef, e, addCopyLastHandler)}
                tabIndex={1}
                ref={addCopyLastRef}>
                Добавить копию последней строки
            </li>
            <li className={addCopyClass}
                onClick={addCopyHandler}
                onKeyDown={e => keyDownHandler(addCopyLastRef, removeRef, e, addCopyHandler)}
                tabIndex={1}
                ref={addCopyRef}>
                Добавить копию выделенной строки
            </li>
            <li className={removeClass}
                onClick={removeHandler}
                onKeyDown={e => keyDownHandler(addCopyRef, removeAllRef, e, removeHandler)}
                tabIndex={1}
                ref={removeRef}>
                Удалить выделенную строку
            </li>
            <li className={removeAllClass}
                onClick={removeAllHandler}
                onKeyDown={e => keyDownHandler(removeRef, addEmptyRef, e, removeAllHandler)}
                tabIndex={1}
                ref={removeAllRef}>
                Удалить все строки
            </li>
        </ul>
    )
}

export default Tool;