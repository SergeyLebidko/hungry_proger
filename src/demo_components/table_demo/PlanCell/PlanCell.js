import React, {useState} from 'react';
import style from './PlanCell.module.scss';

function PlanCell({plan, rowIndex, changePlanHandler}) {
    let [inputValue, setInputValue] = useState(plan);

    function changeHandler() {
        setInputValue(!inputValue);
        changePlanHandler(!inputValue, rowIndex);
    }

    return (
        <td className={style.container}>
            <input type={"checkbox"} value={plan} checked={inputValue} onChange={changeHandler} tabIndex={-1}/>
        </td>
    );
}

export default PlanCell;