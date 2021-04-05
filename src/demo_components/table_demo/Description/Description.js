import React from 'react';
import {withRouter} from 'react-router-dom';
import style from './Description.module.scss';

function Description({history}) {
    return (
        <div className={style.container}>
            <div className={style.close_container_button} onClick={() => history.push('/')}>
                &#10006;
            </div>
            <h2>Простой табличный компонент</h2>
            <p>
                Подобный компонент мог бы быть частью сервиса по ведению домашней бухгалтерии.
                К нему можно было бы легко добавить кнопку "Сохранить", при нажатии на которую
                введенная информация отправлялась бы на backend и сохранялась им в базе данных.
            </p>
            <p>
                Для редактирования данных в ячейке кликните по ней дважды (или просто одну секунду удерживайте на ней
                палец, если вы используете устройство с сенсорным экраном.
            </p>
            <p>
                Также по строкам можно перемещаться с помощью стрелок. Удалить выделенную строку можено нажав кнопку Delete.
            </p>
            <p>
                Чтобы вернуться на главную страницу нажмите на крестик в правом верхнем углу.
            </p>
        </div>
    );
}

export default withRouter(Description);