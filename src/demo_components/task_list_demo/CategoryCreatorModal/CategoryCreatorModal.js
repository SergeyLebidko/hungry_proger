import React from 'react';
import style from './CategoryCeatorModal.module.scss';

function CategoryCreatorModal({createCategoryHandler, hideModalHandler}) {
    return (
        <div className={style.container}>
            <div className={style.modal}>
                <input type={'text'}/>
                <div>
                    <input type={'button'} value={'Создать'} onClick={() => createCategoryHandler()}/>
                    <input type={'button'} value={'Отмена'} onClick={hideModalHandler}/>
                </div>
            </div>
        </div>
    );
}

export default CategoryCreatorModal;