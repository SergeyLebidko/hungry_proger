import React from 'react';
import style from './Row.module.scss';

import {paymentMethodsMap} from '../Table/Table';

function Row({rowData, selectedHandler, rowIndex, hasSelected}) {
    let rowClassName = style.container + ' ' + (hasSelected ? style.selected : '');
    return (
        <tr onClick={() => selectedHandler(rowIndex)} className={rowClassName}>
            <td>
                {rowData.number}
            </td>
            <td>
                {rowData.paymentDate.toLocaleDateString()}
            </td>
            <td>
                {rowData.title}
            </td>
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