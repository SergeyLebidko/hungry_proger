import React, {useState, useRef} from 'react';
import {createTouchProps} from '../../../utils';
import useResetInputEffect from '../resetInputEffect';
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

    function onChangeHandler(event) {
        setInputValue(event.target.value);
    }

    function onKeyDownHandler(event) {
        if (event.keyCode === 13) {
            changeTitleHandler(inputValue, rowIndex);
            setEditMode(false);
        }
    }

    useResetInputEffect(inputRef, cellRef, () => setEditMode(false));

    let touchProps = createTouchProps(() => setEditMode(true));
    return (
        <td className={style.container} onDoubleClick={doubleClickHandler} ref={cellRef} {...touchProps}>
            {editMode ?
                <input type={"text"} ref={inputRef} onChange={onChangeHandler} onKeyDown={onKeyDownHandler}
                       value={inputValue}/>
                :
                title
            }
        </td>
    )
}

export default TitleCell;