import React, {useState, useRef} from 'react';
import {paymentMethodsMap} from '../Table/Table';
import {useResetInputEffect} from '../customEffects';
import style from './MethodCell.module.scss';

function MethodCell({paymentMethod, rowIndex, changeMethodHandler}) {
    let [editMode, setEditMode] = useState(false);

    let cellRef = useRef(null);
    let inputRef = useRef(null);

    function doubleClickHandler() {
        setEditMode(true);
    }

    function changeHandler(event) {
        setEditMode(false);
        changeMethodHandler(event.target.value, rowIndex);
    }

    useResetInputEffect(inputRef, cellRef, () => setEditMode(false));

    let optionsList = [], index = 0;
    for (let value of Object.keys(paymentMethodsMap)) {
        optionsList.push(<option key={index} value={value}>{paymentMethodsMap[value]}</option>);
        index++;
    }
    return (
        <td className={style.container} onDoubleClick={doubleClickHandler} ref={cellRef}>
            {editMode ?
                <select ref={inputRef} onChange={changeHandler} defaultValue={paymentMethod}>
                    {optionsList}
                </select>
                :
                paymentMethodsMap[paymentMethod]
            }
        </td>
    )
}

export default MethodCell;