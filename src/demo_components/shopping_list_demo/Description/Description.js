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
                Этот компонент - список покупок. Он мог бы стать, например, частью сервиса по ведению домашней
                бухгалтерии. К нему можно было бы легко добавить кнопку "Сохранить", при нажатии на которую
                введенная информация отправлялась бы на backend и сохранялась им в базе данных.
            </p>
            <p>
                Для редактирования данных в ячейке просто сделайте на ней двойной клик (или двойной тап - на сенсорном экране).
            </p>
            <p>
                Также по компоненту можно перемещаться используя кнопки со стрелками и Tab (также и Shift + Tab).
                Удалить выделенную строку можно нажав кнопку Delete.
            </p>
            <p>
                Чтобы вернуться на главную страницу нажмите на крестик в правом верхнем углу.
            </p>
        </div>
    );
}

export default withRouter(Description);