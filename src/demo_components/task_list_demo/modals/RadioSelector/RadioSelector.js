import React, {useState} from 'react';
import style from './RadioSelector.module.scss';

function RadioSelector({title, categoryList, startValue, additionalElement, onChange}) {
    let [value, setValue] = useState(startValue);

    function changeHandler(nextValue){
        setValue(nextValue);
        onChange(nextValue);
    }

    return (
        <div className={style.container}>
            <p>{title}</p>
            <table>
                <tbody>
                {categoryList.map((category, index) => {
                    return (
                        <tr key={index}>
                            <td>
                                <input id={`category_${category.id}`}
                                       type={'radio'}
                                       name={'category'}
                                       value={category.id}
                                       checked={category.id === value}
                                       onChange={() => changeHandler(category.id)}
                                />
                            </td>
                            <td>
                                <label htmlFor={`category_${category.id}`}>{category.title}</label>
                            </td>
                        </tr>
                    )
                })}
                {additionalElement !== null ?
                    <tr key={'additional_element'} className={style.additional_element}>
                        <td>
                            <input id={`category_${additionalElement.id}`}
                                   type={'radio'}
                                   name={'category'}
                                   value={additionalElement.id}
                                   checked={additionalElement.id === value}
                                   onChange={() => changeHandler(additionalElement.id)}
                            />
                        </td>
                        <td>
                            <label htmlFor={`category_${additionalElement.id}`}>{additionalElement.title}</label>
                        </td>
                    </tr>
                    : ''
                }
                </tbody>
            </table>
        </div>
    );
}

RadioSelector.defaultProps = {
    additionalElement: null
}

export default RadioSelector;