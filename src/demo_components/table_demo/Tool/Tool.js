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
            <li className={style.enabled_add}
                onClick={addEmptyHandler}
                onKeyDown={e => {
                    if (e.code === 'Enter' || e.code === 'Space') addEmptyHandler()
                }}
                tabIndex={1}>
                Добавить новую строку
            </li>
            <li className={addCopyLastClass}
                onClick={addCopyLastHandler}
                onKeyDown={e => {
                    if (e.code === 'Enter' || e.code === 'Space') addCopyLastHandler()
                }}
                tabIndex={1}>
                Добавить копию последней строки
            </li>
            <li className={addCopyClass}
                onClick={addCopyHandler}
                onKeyDown={e => {
                    if (e.code === 'Enter' || e.code === 'Space') addCopyHandler()
                }}
                tabIndex={1}>
                Добавить копию выделенной строки
            </li>
            <li className={removeClass}
                onClick={removeHandler}
                onKeyDown={e => {
                    if (e.code === 'Enter' || e.code === 'Space') removeHandler()
                }}
                tabIndex={1}>
                Удалить выделенную строку
            </li>
            <li className={removeAllClass}
                onClick={removeAllHandler}
                onKeyDown={e => {
                    if (e.code === 'Enter' || e.code === 'Space') removeAllHandler()
                }}
                tabIndex={1}>
                Удалить все строки
            </li>
        </ul>
    )
}

export default Tool;