import React from 'react';
import style from './Tool.module.scss';

function Tool({addCopyFlag, addCopyLastFlag, removeFlag, removeAllFlag, addEmptyHandler, addCopyLastHandler, addCopyHandler, removeHandler, removeAllHandler}) {

    // Устанавливаем вид кнопок в соответствие с разрешенными действиями
    let addCopyLastClass = addCopyLastFlag ? style.enabled_add : style.disabled;
    let addCopyClass = addCopyFlag ? style.enabled_add : style.disabled;
    let removeClass = removeFlag ? style.enabled_remove : style.disabled;
    let removeAllClass = removeAllFlag ? style.enabled_remove : style.disabled;

    return (
        <ul className={style.container}>
            <li className={style.enabled_add} onClick={addEmptyHandler}>
                Добавить новую строку
            </li>
            <li className={addCopyLastClass} onClick={addCopyLastHandler}>
                Добавить копию последней строки
            </li>
            <li className={addCopyClass} onClick={addCopyHandler}>
                Добавить копию выделенной строки
            </li>
            <li className={removeClass} onClick={removeHandler}>
                Удалить выделенную строку
            </li>
            <li className={removeAllClass} onClick={removeAllHandler}>
                Удалить все строки
            </li>
        </ul>
    )
}

export default Tool;