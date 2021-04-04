import React, {useState, useRef} from 'react';
import {createTouchProps} from '../../../utils';
import {useFocusEffect, useResetInputEffect} from '../customEffects';
import style from './DateCell.module.scss';

function DateCell({date, rowIndex, changeDateHandler}) {
    let [editMode, setEditMode] = useState(false);

    let cellRef = useRef(null);
    let inputRef = useRef(null);

    function doubleClickHandler() {
        setEditMode(true);
    }

    function changeHandler(event) {
        if (!event.target.value) return;
        let [, year, month, day] = /(\d\d\d\d)-(\d\d)-(\d\d)/.exec(event.target.value);
        let nextDate = new Date(year, month - 1, day);
        changeDateHandler(nextDate, rowIndex);
        setEditMode(false);
    }

    useResetInputEffect(inputRef, cellRef, () => setEditMode(false));
    useFocusEffect(inputRef);

    let [, day, month, year] = /(\d\d)\.(\d\d)\.(\d\d\d\d)/.exec(date.toLocaleString());
    let inputStartValue = `${year}-${month}-${day}`;
    let touchProps = createTouchProps(() => setEditMode(true));
    return (
        <td className={style.container} onDoubleClick={doubleClickHandler} ref={cellRef} {...touchProps}>
            {editMode ?
                <input type={"date"} onChange={changeHandler} ref={inputRef} value={inputStartValue}/>
                :
                date.toLocaleDateString()
            }
        </td>
    )
}

export default DateCell;