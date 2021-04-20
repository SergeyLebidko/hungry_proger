import React from 'react';
import style from './ConfirmModal.module.scss';

function ConfirmModal({text, hideHandler, yesFunction}) {
    return (
        <div className={style.container}>
            <div className={style.content}>
                <p>
                    {text}
                </p>
                <div className={style.button_block}>
                    <input type={'button'} value={'Да'} className={style.yes_btn} onClick={yesFunction}/>
                    <input type={'button'} value={'Нет'} className={style.no_btn} onClick={hideHandler}/>
                </div>
            </div>
        </div>
    );
}

export default ConfirmModal;
