import React from 'react';
import style from './ConfirmModal.module.scss';

function ConfirmModal({text, cancelHandler, okHandler}) {
    return (
        <div className={style.container}>
            <div className={style.content}>
                <p>
                    {text}
                </p>
                <div className={style.button_block}>
                    <input type={'button'} value={'Да'} className={style.yes_btn} onClick={okHandler}/>
                    <input type={'button'} value={'Нет'} className={style.no_btn} onClick={cancelHandler}/>
                </div>
            </div>
        </div>
    );
}

export default ConfirmModal;
