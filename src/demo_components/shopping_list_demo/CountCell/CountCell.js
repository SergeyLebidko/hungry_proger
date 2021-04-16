import React, {useState, useRef} from 'react';
import style from './CountCell.module.scss';
import {useFocusEffect, useResetInputEffect, useSelectionEffect} from "../customEffects";

function CountCell({count, rowIndex, changeCountValueHandler}) {
    let [editMode, setEditMode] = useState(false);
    let [inputValue, setInputValue] = useState(count);

    let inputRef = useRef(null);
    let cellRef = useRef(null);

    function doubleClickHandler() {
        setInputValue(count);
        setEditMode(true);
    }

    function changeHandler(event) {
        let value = event.target.value;

        // Пресекаем попытки ввести невалидное (не числовое) значение
        if (!(/^[1-9]\d*$/.test(value) || /^[1-9]\d*\.\d*$/.test(value) || value === '')) return;
        setInputValue(event.target.value);
    }

    function keyDownHandler(event) {
        if (event.keyCode === 13) {
            if (inputValue === '') {
                setEditMode(false);
                return;
            }
            changeCountValueHandler(inputValue, rowIndex);
            setEditMode(false);
        }
    }

    useResetInputEffect(inputRef, cellRef, () => setEditMode(false));
    useSelectionEffect(inputRef, editMode);
    useFocusEffect(inputRef);

    return (
        <td className={style.container} onDoubleClick={doubleClickHandler} ref={cellRef}>
            {editMode ?
                <input type={"text"} value={inputValue} ref={inputRef} onChange={changeHandler}
                       onKeyDown={keyDownHandler}/>
                :
                count
            }
        </td>
    )
}

export default CountCell;