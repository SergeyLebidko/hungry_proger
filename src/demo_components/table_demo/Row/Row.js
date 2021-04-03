import React from 'react';
import style from './Row.module.scss';

function Row({rowData, selectedHandler, rowIndex, hasSelected}) {
    return (
        <tr onClick={() => selectedHandler(rowIndex)} className={hasSelected ? style.selected : ''}>
            <td>
                {rowData.number}
            </td>
            <td>
                {rowData.paymentDate.toString()}
            </td>
            <td>
                {rowData.title}
            </td>
            <td>
                {rowData.plane}
            </td>
            <td>
                {rowData.paymentMethod}
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