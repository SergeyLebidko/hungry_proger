import React, {useState, useEffect, useRef} from 'react';
import {createTouchProps} from '../../../utils';
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

    useEffect(() => {
        let resetInput = (event) => {
            if (event.target === inputRef.current || event.target === cellRef.current) return;
            setEditMode(false);
        };
        window.addEventListener('click', resetInput);

        return () => window.removeEventListener('click', resetInput);
    }, []);

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