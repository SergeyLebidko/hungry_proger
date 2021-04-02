import React from 'react';
import style from './Description.module.scss';

function Description() {
    return (
        <div className={style.container}>
            <h2>Простой табличный компонент</h2>
            <p>
                Подобный компонент мог бы быть частью сервиса по ведению домашней бухгалтерии.
                К нему можно было бы легко добавить кнопку "Сохранить", при нажатии на которую
                введенная информация отправлялась бы на backend и сохранялась им в базе данных.
            </p>
        </div>
    );
}

export default Description;