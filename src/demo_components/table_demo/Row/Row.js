import React from 'react';
import DateCell from '../DateCell/DateCell';
import TitleCell from '../TitleCell/TitleCell';
import PlanCell from '../PlanCell/PlanCell';
import style from './Row.module.scss';
import {paymentMethodsMap} from '../Table/Table';

function Row({rowData, selectedHandler, rowIndex, hasSelected, changeDateHandler, changeTitleHandler}) {
    let rowClassName = style.container + ' ' + (hasSelected ? style.selected : '');
    return (
        <tr onClick={() => selectedHandler(rowIndex)} className={rowClassName}>
            <td>
                {rowData.number}
            </td>
            <DateCell date={rowData.paymentDate} rowIndex={rowIndex} changeDateHandler={changeDateHandler}/>
            <TitleCell title={rowData.title} rowIndex={rowIndex} changeTitleHandler={changeTitleHandler}/>
            <PlanCell plan={rowData.plan}/>
            <td>
                {paymentMethodsMap[rowData.paymentMethod]}
            </td>
            <td>
                {rowData.count}
            </td>
            <td>
                {rowData.price}
            </td>
            <td>
                {rowData.total}
            </td>
        </tr>
    )
}

export default Row;