import React, {useState} from 'react';
import HeaderRow from '../HeaderRow/HeaderRow';
import Tool from '../Tool/Tool';
import Row from '../Row/Row';
import style from './Table.module.scss';

const columns = ['N', 'Дата покупки', 'Наименование', 'Плановая покупка', 'Способ оплаты', 'Количество', 'Цена', 'Сумма'];

function Table() {
    let [data, setData] = useState([]);
    let [selectedRow, setSelectedRow] = useState(null);

    // Обработчик добавления новой строки
    function addEmptyHandler() {
        let nextElement = {
            number: data.length + 1,
            paymentDate: new Date(),
            title: '',
            plane: true,
            paymentMethod: 'cash',
            count: 1,
            price: 1,
            total: 1
        }
        setData([...data, nextElement]);
    }

    // Обработчик добавления копии последней строки
    function addCopyLastHandler() {

    }

    // Обработчик добавления копии выделенной строки
    function addCopyHandler() {

    }

    // Обработчик удаления выделенной строки
    function removeHandler() {
        if (selectedRow !== null) {
            let nextData = data.filter((rowData, index) => index !== selectedRow);
            setData(nextData.map((rowData, index) => {
                rowData.number = index + 1;
                return rowData;
            }));
            setSelectedRow(null);
        }
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

    return (
        <div className={style.container}>
            <Tool addCopyFlag={selectedRow !== null}
                  addCopyLastFlag={data.length > 0}
                  removeFlag={selectedRow !== null}
                  removeAllFlag={data.length > 0}
                  addEmptyHandler={addEmptyHandler}
                  addCopyLastHandler={addCopyLastHandler}
                  addCopyHandler={addCopyHandler}
                  removeHandler={removeHandler}
                  removeAllHandler={removeAllHandler}
            />
            <table>
                <tbody>
                <HeaderRow columns={columns}/>
                {data.map((rowData, index) => <Row rowData={rowData} selectedHandler={selectedHandler} rowIndex={index}
                                                   hasSelected={index === selectedRow} key={index}/>)}
                </tbody>
            </table>
        </div>
    )
}

export default Table;