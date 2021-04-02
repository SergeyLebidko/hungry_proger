import React, {useState} from 'react';
import HeaderRow from '../HeaderRow/HeaderRow';
import style from './Table.module.scss';

const columns = ['N', 'Дата покупки', 'Наименование', 'Плановая покупка', 'Способ оплаты', 'Количество', 'Цена', 'Сумма'];

function Table() {
    let [data, setData] = useState([]);

    return (
        <div>
            <table>
                <HeaderRow columns={columns}/>
            </table>
        </div>
    )
}

export default Table;