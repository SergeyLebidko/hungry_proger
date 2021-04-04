import React, {useState, useEffect, useRef} from 'react';
import {createTouchProps} from '../../../utils';
import {useResetInputEffect, useFocusEffect} from '../customEffects';
import style from './TitleCell.module.scss';

function TitleCell({title, rowIndex, changeTitleHandler}) {
    let [editMode, setEditMode] = useState(false);
    let [inputValue, setInputValue] = useState(title);

    let cellRef = useRef(null);
    let inputRef = useRef(null);

    function doubleClickHandler() {
        setEditMode(true);
        setInputValue(title);
    }

    function changeHandler(event) {
        setInputValue(event.target.value);
    }

    function keyDownHandler(event) {
        if (event.keyCode === 13) {
            changeTitleHandler(inputValue, rowIndex);
            setEditMode(false);
        }
    }

    useResetInputEffect(inputRef, cellRef, () => setEditMode(false));
    useFocusEffect(inputRef);

    let containerClass = style.container;
    if (title.length === 0) containerClass += (' ' + style.empty);

    let touchProps = createTouchProps(() => setEditMode(true));
    return (
        <td className={containerClass} onDoubleClick={doubleClickHandler} ref={cellRef} {...touchProps}>
            {editMode ?
                <input type={"text"} ref={inputRef} onChange={changeHandler} onKeyDown={keyDownHandler} value={inputValue}/>
                :
                title.length > 0 ? title : 'введите данные'
            }
        </td>
    )
}

export default TitleCell;