import React from 'react';

import style from './Description.module.scss'
import {Link} from "react-router-dom";

function Description(){
    return (
        <div className={style.container}>
            <h3>
                Этот компонент - список задач. Он позволяет распределять задачи по столбцам-категориям,
                которые вы можете создавать, удалять и перемещать. Также можно перемещать уже созданные задачи из одной
                категории в другую и маркировать задачи и категории различными цветами в зависимости от их
                важности, срочности или каких-либо других параметров.
            </h3>
            <Link to={'/'}>на главную</Link>
        </div>
    );
}

export default Description;