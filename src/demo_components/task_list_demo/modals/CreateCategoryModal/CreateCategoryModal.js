import React from 'react';
import style from './CreateCategoryModal.module.scss';

function CreateCategoryModal({createHandler, hideHandler}) {
    return (
        <div className={style.container}>
            <div className={style.modal}>
                <input type={'text'}/>
                <div>
                    <input type={'button'} value={'Создать'} onClick={createHandler()}/>
                    <input type={'button'} value={'Отмена'} onClick={hideHandler}/>
                </div>
            </div>
        </div>
    );
}

export default CreateCategoryModal;