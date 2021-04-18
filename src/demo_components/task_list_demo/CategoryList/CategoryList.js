import React from 'react';
import Category from '../Category/Category';
import style from './CategoryList.module.scss';

function CategoryList() {

    // Код-заглушка. Должен быть удален
    let categoryList = [];
    for (let index = 0; index < 10; index++) {
        categoryList.push(<Category key={index}/>);
    }

    return (
        <div className={style.container}>
            {categoryList}
        </div>
    );
}

export default CategoryList;