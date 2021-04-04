import React, {useState, useEffect, useRef} from 'react';
import {createTouchProps} from '../../../utils';
import style from './DateCell.module.scss';

function DateCell({date, rowIndex, changeDateHandler}) {
    let [editMode, setEditMode] = useState(false);
    let cellRef = useRef(null);
    let inputRef = useRef(null);

    function changeHandler(event) {
        let [, year, month, day] = /(\d\d\d\d)-(\d\d)-(\d\d)/.exec(event.target.value);
        let nextDate = new Date(year, month - 1, day);
        changeDateHandler(nextDate, rowIndex);
        setEditMode(false);
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
        <td className={style.container} onDoubleClick={() => setEditMode(true)} ref={cellRef} {...touchProps}>
            {editMode ?
                <input type={"date"} onChange={changeHandler} ref={inputRef}/>
                :
                date.toLocaleDateString()
            }
        </td>
    )
}

export default DateCell;