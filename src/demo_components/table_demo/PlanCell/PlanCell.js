import React from 'react';
import style from './PlanCell.module.scss';

function PlanCell({plan}){
    return (
        <td className={style.container}>
            <input type={"checkbox"} value={plan}/>
        </td>
    );
}

export default PlanCell;