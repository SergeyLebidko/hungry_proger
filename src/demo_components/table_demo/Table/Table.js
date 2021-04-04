import React, {useState} from 'react';
import HeaderRow from '../HeaderRow/HeaderRow';
import Tool from '../Tool/Tool';
import Row from '../Row/Row';
import TotalPane from '../TotalPane/TotalPane';
import style from './Table.module.scss';

const columns = ['N', 'Дата покупки', 'Наименование', 'Плановая покупка', 'Способ оплаты', 'Количество', 'Цена', 'Сумма'];

const cash = 'cash';
const debet = 'debet';
const credit = 'credit';

export const paymentMethodsMap = {
    [cash]: 'Наличные',
    [debet]: 'Дебетовая карта',
    [credit]: 'Кредитная карта'
}

function Table() {
    let [data, setData] = useState([]);
    let [selectedRow, setSelectedRow] = useState(null);

    // Обработчик добавления новой строки
    function addEmptyHandler() {
        let nextElement = {
            number: data.length + 1,
            paymentDate: new Date(),
            title: '',
            plan: true,
            paymentMethod: cash,
            count: 0,
            price: 0,
            total: 0
        }
        setData([...data, nextElement]);
    }

    // Обработчик добавления копии последней строки
    function addCopyLastHandler() {
        if (data.length === 0) return;
        setData([...data, Object.assign({}, data[data.length - 1])]);
    }

    // Обработчик добавления копии выделенной строки
    function addCopyHandler() {
        if (selectedRow === null) return;
        setData([...data, Object.assign({}, data[selectedRow])]);
    }

    // Обработчик удаления выделенной строки
    function removeHandler() {
        if (selectedRow === null) return;
        let nextData = data.filter((rowData, index) => index !== selectedRow);
        setData(nextData.map((rowData, index) => {
            rowData.number = index + 1;
            return rowData;
        }));
        setSelectedRow(null);
    }

    // Обработчик удаления всех строк
    function removeAllHandler() {
        setData([]);
        setSelectedRow(null);
    }

    // Обработчик выбора строки
    function selectedHandler(rowIndex) {
        setSelectedRow(rowIndex);
    }

    // Обработчик изменения даты в строке
    function changeDateHandler(nextDate, rowIndex) {
        setData(data.map((rowData, index) => {
            if (index !== rowIndex) return rowData;
            return Object.assign(rowData, {paymentDate: nextDate});
        }));
    }

    // Обработчик изменения наименования в строке
    function changeTitleHandler(nextTitle, rowIndex) {
        setData(data.map((rowData, index) => {
            if (index !== rowIndex) return rowData;
            return Object.assign(rowData, {title: nextTitle});
        }));
    }

    // Обработчик изменения флага плановой покупки
    function changePlanHandler(nextPlan, rowIndex) {
        setData(data.map((rowData, index) => {
            if (index !== rowIndex) return rowData;
            return Object.assign(rowData, {plan: nextPlan});
        }));
    }

    // Обработчик изменения метода оплаты
    function changeMethodHandler(nextMethod, rowIndex) {
        setData(data.map((rowData, index) => {
            if (index !== rowIndex) return rowData;
            return Object.assign(rowData, {paymentMethod: nextMethod});
        }));
    }

    // Обработчик изменения количества
    function changeCountHandler(nextCount, rowIndex) {
        setData(data.map((rowData, index) => {
            if (index !== rowIndex) return rowData;
            return Object.assign(rowData, {count: nextCount, total: rowData.price * nextCount});
        }));
    }

    // Обработчик изменения цены
    function changePriceHandler(nextPrice, rowIndex) {
        setData(data.map((rowData, index) => {
            if (index !== rowIndex) return rowData;
            return Object.assign(rowData, {price: nextPrice, total: rowData.count * nextPrice});
        }));
    }

    // Готовим пропсы для Tool
    let toolProps = {
        addCopyFlag: (selectedRow !== null),
        addCopyLastFlag: (data.length > 0),
        removeFlag: (selectedRow !== null),
        removeAllFlag: (data.length > 0),
        addEmptyHandler,
        addCopyLastHandler,
        addCopyHandler,
        removeHandler,
        removeAllHandler
    }

    // Готовим компоненты для строк
    let rowComponents = [], index = 0, rowProps;
    for (let rowData of data) {
        rowProps = {
            rowData,
            selectedHandler,
            rowIndex: index,
            hasSelected: index === selectedRow,
            changeDateHandler,
            changeTitleHandler,
            changePlanHandler,
            changeMethodHandler,
            changeCountHandler,
            changePriceHandler,
            key: index
        }
        rowComponents.push(<Row {...rowProps}/>);
        index++;
    }

    return (
        <div className={style.container}>
            <Tool {...toolProps}/>
            <table>
                <tbody>
                <HeaderRow columns={columns}/>
                {rowComponents}
                </tbody>
            </table>
            <TotalPane dataList={data}/>
        </div>
    )
}

export default Table;