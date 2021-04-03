import React, {useState, useEffect} from 'react';
import {createTouchProps} from '../../../utils';
import style from './DateCell.module.scss';

function DateCell({date, rowIndex, changeDateHandler}) {
    let inputId = `inputDateId${rowIndex}`;
    let cellId = `cellDateId${rowIndex}`;
    let [editMode, setEditMode] = useState(false);

    function changeHandler(event) {
        let [, year, month, day] = /(\d\d\d\d)-(\d\d)-(\d\d)/.exec(event.target.value);
        let nextDate = new Date(year, month - 1, day);
        changeDateHandler(nextDate, rowIndex);
        setEditMode(false);
    }

    useEffect(() => {
        let resetInput = (event) => {
            if (event.target.id === inputId || event.target.id === cellId) return;
            setEditMode(false);
        };
        window.addEventListener('click', resetInput);

        return () => window.removeEventListener('click', resetInput);
    }, []);

    let touchProps = createTouchProps(() => setEditMode(true));
    return (
        <td id={cellId} className={style.container} onDoubleClick={() => setEditMode(true)} {...touchProps}>
            {editMode ?
                <input id={inputId} type={"date"} onChange={changeHandler}/>
                :
                date.toLocaleDateString()
            }
        </td>
    )
}

export default DateCell;