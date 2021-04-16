import React from 'react';
import style from './CategoryCreator.module.scss';

function CategoryCreator() {
    return (
        <div className={style.container}>
            <div className={style.content}>
                <input type={'text'}/>
                <input type={'button'} value={'Добавить категорию'}/>
            </div>
        </div>
    )
}

export default CategoryCreator;