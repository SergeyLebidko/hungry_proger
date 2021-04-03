import React, {useState, useEffect} from 'react';
import style from './DateCell.module.scss';

function DateCell({data, rowIndex}) {
    let inputId = `dateCell${rowIndex}`;
    let [editMode, setEditMode] = useState(false);

    function dblClickHandler() {
        setEditMode(true);
    }

    function changeDateHandler(event) {
        let nextDate = event.target.value;
        console.log(nextDate);
    }

    useEffect(() => {
        let resetInput = (event) => {
            if (event.target.id === inputId) return;
            setEditMode(false);
        };
        window.addEventListener('click', resetInput);

        return () => window.removeEventListener('click', resetInput);
    }, []);

    return (
        <td className={style.container} onDoubleClick={dblClickHandler}>
            {editMode ? <input id={inputId} type={"date"} onChange={changeDateHandler}/> : data.toLocaleDateString()}
        </td>
    )
}

export default DateCell;