import React, {useState} from 'react';
import HeaderRow from '../HeaderRow/HeaderRow';
import Tool from '../Tool/Tool';
import style from './Table.module.scss';

const columns = ['N', 'Дата покупки', 'Наименование', 'Плановая покупка', 'Способ оплаты', 'Количество', 'Цена', 'Сумма'];

function Table() {
    let [data, setData] = useState([]);

    return (
        <div className={style.container}>
            <Tool/>
            <table>
                <tbody>
                <HeaderRow columns={columns}/>
                </tbody>
            </table>
        </div>
    )
}

export default Table;