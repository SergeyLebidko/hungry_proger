import React, {useState, useRef} from 'react';
import style from './CountCell.module.scss';
import {createTouchProps} from '../../../utils';
import {useFocusEffect, useResetInputEffect} from "../customEffects";

function CountCell({count, rowIndex, changeCountHandler}) {
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
            changeCountHandler(inputValue, rowIndex);
            setEditMode(false);
        }
    }

    useResetInputEffect(inputRef, cellRef, () => {
        setEditMode(false);
    });
    useFocusEffect(inputRef);

    let touchProps = createTouchProps(() => setEditMode(true));
    return (
        <td className={style.container} onDoubleClick={doubleClickHandler} ref={cellRef} {...touchProps}>
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