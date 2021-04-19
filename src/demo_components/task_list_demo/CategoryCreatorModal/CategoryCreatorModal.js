import React from 'react';
import style from './CategoryCeatorModal.module.scss';

function CategoryCreatorModal({createCategoryHandler}){
    return (
        <div className={style.container}>
            Форма добавления новой категории
        </div>
    )
}

export default CategoryCreatorModal;