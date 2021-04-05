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
        if (nextData.length === 0) {
            setSelectedRow(null);
            return;
        }
        if (selectedRow === nextData.length) setSelectedRow(nextData.length - 1);
    }

    // Обработчик удаления всех строк
    function removeAllHandler() {
        setData([]);
        setSelectedRow(null);
    }

    // Обработчик выбора строки
    function selectHandler(rowIndex, tabFlag = false) {
        if ((rowIndex === data.length || rowIndex === -1) && tabFlag) {
            setSelectedRow(null);
            return;
        }

        let nextIndex = rowIndex;
        if (rowIndex < 0) nextIndex = data.length - 1;
        if (rowIndex > (data.length - 1)) nextIndex = 0;
        setSelectedRow(nextIndex);
    }

    // Универсальный обработчик для изменения даты, наименования, флага плановой покупки и метода оплаты
    function simpleChangeHandler(fieldName, nextValue, rowIndex) {
        setData(data.map((rowData, index) => {
            if (index !== rowIndex) return rowData;
            return Object.assign(rowData, {[fieldName]: nextValue});
        }));
    }

    // Универсальный обработчик для изменения значений цены и количества
    function countAndPriceChangeHandler(fieldName, nextValue, rowIndex) {
        setData(data.map((rowData, index) => {
            if (index !== rowIndex) return rowData;
            if (fieldName === 'price') return Object.assign(rowData, {
                price: nextValue,
                total: rowData.count * nextValue
            });
            if (fieldName === 'count') return Object.assign(rowData, {
                count: nextValue,
                total: rowData.price * nextValue
            });
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
            selectHandler,
            rowIndex: index,
            hasSelected: index === selectedRow,
            changeDateHandler: (nextValue, rowIndex) => simpleChangeHandler('paymentDate', nextValue, rowIndex),
            changeTitleHandler: (nextValue, rowIndex) => simpleChangeHandler('title', nextValue, rowIndex),
            changePlanHandler: (nextValue, rowIndex) => simpleChangeHandler('plan', nextValue, rowIndex),
            changeMethodHandler: (nextValue, rowIndex) => simpleChangeHandler('paymentMethod', nextValue, rowIndex),
            changeCountHandler: (nextValue, rowIndex) => countAndPriceChangeHandler('count', nextValue, rowIndex),
            changePriceHandler: (nextValue, rowIndex) => countAndPriceChangeHandler('price', nextValue, rowIndex),
            removeHandler,
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