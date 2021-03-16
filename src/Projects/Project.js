import React from 'react';
import style from './Projects.module.scss';
import {headerHeight} from '../App';


function Project() {
    let inlineStyle = {top: `${headerHeight}px`};
    return (
        <div className={style.container} style={inlineStyle}>
            <div>
                <h1 className={style.header}>Проекты</h1>
                <div className={style.separator}/>
            </div>
            <div className={style.content}>
                <div>
                    <img src="/images/git_logo_negative.png"/>
                    <h1>Abalone</h1>
                    <p>
                        Реализация настольной игры "Абалон", созданной французскими игровыми дизайнерами в 1987 году.
                    </p>
                    <ul>
                        <li>Python</li>
                        <li>pygame</li>
                    </ul>
                </div>
                <div>
                    <img src="/images/git_logo_negative.png"/>
                    <h1>Abalone</h1>
                    <p>
                        Реализация настольной игры "Абалон", созданной французскими игровыми дизайнерами в 1987 году.
                    </p>
                    <ul>
                        <li>Python</li>
                        <li>pygame</li>
                    </ul>
                </div>
                <div>
                    <img src="/images/git_logo_negative.png"/>
                    <h1>Abalone</h1>
                    <p>
                        Реализация настольной игры "Абалон", созданной французскими игровыми дизайнерами в 1987 году.
                    </p>
                    <ul>
                        <li>Python</li>
                        <li>pygame</li>
                    </ul>
                </div>
                <div>
                    <img src="/images/git_logo_negative.png"/>
                    <h1>Abalone</h1>
                    <p>
                        Реализация настольной игры "Абалон", созданной французскими игровыми дизайнерами в 1987 году.
                    </p>
                    <ul>
                        <li>Python</li>
                        <li>pygame</li>
                    </ul>
                </div>
                <div>
                    <img src="/images/git_logo_negative.png"/>
                    <h1>Abalone</h1>
                    <p>
                        Реализация настольной игры "Абалон", созданной французскими игровыми дизайнерами в 1987 году.
                    </p>
                    <ul>
                        <li>Python</li>
                        <li>pygame</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Project