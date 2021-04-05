import React from 'react';
import DateCell from '../DateCell/DateCell';
import TitleCell from '../TitleCell/TitleCell';
import PlanCell from '../PlanCell/PlanCell';
import MethodCell from '../MethonCell/MethodCell';
import style from './Row.module.scss';
import CountCell from "../CountCell/CountCell";

function Row(props) {
    let rowClassName = style.container + ' ' + (props.hasSelected ? style.selected : '');
    return (
        <tr onClick={() => props.selectedHandler(props.rowIndex)}
            onFocus={() => props.selectedHandler(props.rowIndex)}
            className={rowClassName}
            tabIndex={2}>
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
            <CountCell count={props.rowData.count}
                       rowIndex={props.rowIndex}
                       changeCountValueHandler={props.changeCountHandler}
            />
            <CountCell count={props.rowData.price}
                       rowIndex={props.rowIndex}
                       changeCountValueHandler={props.changePriceHandler}
            />
            <td>
                {props.rowData.total}
            </td>
        </tr>
    )
}

export default Row;