import React, {useState} from 'react';
import style from './MoveTaskModal.module.scss';

function MoveTaskModal({task, categoryList, hideHandler, moveHandler}) {
    let [selectedCategory, setSelectedCategory] = useState(categoryList[0].id)

    return (
        <div className={style.container}>
            <div className={style.content}>
                <div className={style.radio_selector}>
                    <p>{`Выберите категорию, в которую хотите переместить задачу "${task.title}"`}</p>
                    <table>
                        <tbody>
                        {categoryList.map((value, index) => {
                            return (
                                <tr key={index}>
                                    <td>
                                        <input id={value.id}
                                               type={'radio'}
                                               name={'cat_for_move'}
                                               value={value.id}
                                               onChange={e => setSelectedCategory(e.target.value)}
                                               checked={+selectedCategory === value.id}
                                        />
                                    </td>
                                    <td>
                                        <label htmlFor={value.id}>{value.title}</label>
                                    </td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div>
                <div className={style.buttons_block}>
                    <input type={'button'}
                           value={'Переместить'}
                           className={style.yes_btn}
                           onClick={() => moveHandler(selectedCategory)}
                    />
                    <input type={'button'} value={'Отмена'} className={style.no_btn} onClick={hideHandler}/>
                </div>
            </div>
        </div>
    )
}

export default MoveTaskModal;