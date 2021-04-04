import React from 'react';
import DateCell from '../DateCell/DateCell';
import TitleCell from '../TitleCell/TitleCell';
import PlanCell from '../PlanCell/PlanCell';
import MethodCell from '../MethonCell/MethodCell';
import style from './Row.module.scss';

function Row(props) {
    let rowClassName = style.container + ' ' + (props.hasSelected ? style.selected : '');
    return (
        <tr onClick={() => props.selectedHandler(props.rowIndex)} className={rowClassName}>
            <td>
                {props.rowData.number}
            </td>
            <DateCell date={props.rowData.paymentDate}
                      rowIndex={props.rowIndex}
                      changeDateHandler={props.changeDateHandler}
            />
            <TitleCell title={props.rowData.title}
                       rowIndex={props.rowIndex}
                       changeTitleHandler={props.changeTitleHandler}
            />
            <PlanCell plan={props.rowData.plan}
                      rowIndex={props.rowIndex}
                      changePlanHandler={props.changePlanHandler}
            />
            <MethodCell paymentMethod={props.rowData.paymentMethod}
                        rowIndex={props.rowIndex}
                        changeMethodHandler={props.changeMethodHandler}
            />
            <td>
                {props.rowData.count}
            </td>
            <td>
                {props.rowData.price}
            </td>
            <td>
                {props.rowData.total}
            </td>
        </tr>
    )
}

export default Row;