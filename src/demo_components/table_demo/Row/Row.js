import React from 'react';
import DateCell from '../DateCell/DateCell';
import style from './Row.module.scss';

import {paymentMethodsMap} from '../Table/Table';
import TitleCell from "../TitleCell/TitleCell";

function Row({rowData, selectedHandler, rowIndex, hasSelected, changeDateHandler, changeTitleHandler}) {
    let rowClassName = style.container + ' ' + (hasSelected ? style.selected : '');
    return (
        <tr onClick={() => selectedHandler(rowIndex)} className={rowClassName}>
            <td>
                {rowData.number}
            </td>
            <DateCell date={rowData.paymentDate} rowIndex={rowIndex} changeDateHandler={changeDateHandler}/>
            <TitleCell title={rowData.title} rowIndex={rowIndex} changeTitleHandler={changeTitleHandler}/>
            <td>
                {rowData.plane}
            </td>
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