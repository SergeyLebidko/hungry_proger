import React from 'react';
import style from './PlanCell.module.scss';

function PlanCell({plan, rowIndex, changePlanHandler}) {

    return (
        <td className={style.container}>
            <input type={"checkbox"}
                   checked={plan}
                   onChange={() => changePlanHandler(!plan, rowIndex)}
                   tabIndex={-1}
            />
        </td>
    );
}

export default PlanCell;