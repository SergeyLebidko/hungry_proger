import React, {useRef} from 'react';
import RadioSelector from '../RadioSelector/RadioSelector';
import style from './MoveTaskModal.module.scss';

function MoveTaskModal({task, categoryList, hideHandler, moveHandler}) {
    let selectedCategory = useRef(categoryList[0].id);

    return (
        <div className={style.container}>
            <div className={style.content}>
                <RadioSelector title={`Выберите категорию, в которую вы хотите перенести задачу "${task.title}"`}
                               categoryList={categoryList}
                               startValue={categoryList[0].id}
                               onChange={id => selectedCategory.current = id}
                />
                <div className={style.buttons_block}>
                    <input type={'button'}
                           value={'Переместить'}
                           className={style.yes_btn}
                           onClick={() => moveHandler(selectedCategory.current)}
                    />
                    <input type={'button'} value={'Отмена'} className={style.no_btn} onClick={hideHandler}/>
                </div>
            </div>
        </div>
    )
}

export default MoveTaskModal;