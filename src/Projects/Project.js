import React from 'react';
import style from './Projects.module.scss';
import {headerHeight} from '../App';
import SimpleButton from "../SimpleButton/SimpleButton";


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
                    <a href="https://github.com/SergeyLebidko/Abalone"><img src="/images/git_logo.png"/></a>
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
                    <a href="https://github.com/SergeyLebidko/graphite_client"><img src="/images/git_logo.png"/></a>
                    <h1>Graphite</h1>
                    <p>
                        Платформа для ведения блогов<br/>
                        Мой первый, в котором фронтэнд написан полностью на React
                    </p>
                    <ul>
                        <li>Python</li>
                        <li>Django</li>
                        <li>DRF</li>
                        <li>React</li>
                        <li>CSS</li>
                    </ul>
                </div>
                <div>
                    <a href="https://github.com/SergeyLebidko/MiniStorage"><img src="/images/git_logo.png"/></a>
                    <h1>MiniStorage</h1>
                    <p>
                        Простая система ведения учета на небольшом складе с базовым набором возможностей
                    </p>
                    <ul>
                        <li>DRF</li>
                        <li>JavaScript</li>
                        <li>jQuery</li>
                        <li>CSS</li>
                        <li>Python</li>
                        <li>Django</li>
                    </ul>
                </div>
                <div>
                    <a href="https://github.com/SergeyLebidko/Hexagon"><img src="/images/git_logo.png"/></a>
                    <h1>Hexagon</h1>
                    <p>
                        Игра-пазл на поле из гексов
                    </p>
                    <ul>
                        <li>Python</li>
                        <li>pygame</li>
                    </ul>
                </div>
                <div>
                    <a href="https://github.com/SergeyLebidko/hungry_proger"><img src="/images/git_logo.png"/></a>
                    <h1>hProger</h1>
                    <p>
                        Сайт, на котором вы сейчас находитесь<br/>
                        Можете кликнуть на логотип github'a в углу карточки и посмотреть его исходный код :)
                    </p>
                    <ul>
                        <li>React</li>
                        <li>paper.js</li>
                        <li>Axios</li>
                        <li>CSS</li>
                        <li>SCSS</li>
                    </ul>
                </div>
                <div>
                    <a href="https://github.com/SergeyLebidko/PyChess"><img src="/images/git_logo.png"/></a>
                    <h1>PyChess</h1>
                    <p>
                        Шахматы на Python. Один из первых моих проектов на этом языке
                    </p>
                    <ul>
                        <li>Python</li>
                        <li>pygame</li>
                    </ul>
                </div>
                <div>
                    <a href="https://github.com/SergeyLebidko/ReactTraining"><img src="/images/git_logo.png"/></a>
                    <h1>ReactTraining</h1>
                    <p>
                        Учебный проект, в которм я обкатывал навыки создания различных React-компонетов и работы с CSS
                    </p>
                    <ul>
                        <li>Python</li>
                        <li>Django</li>
                        <li>React</li>
                        <li>CSS</li>
                    </ul>
                </div>
                <div>
                    <a href="https://github.com/SergeyLebidko/WhiteLinen"><img src="/images/git_logo.png"/></a>
                    <h1>WhiteLinen</h1>
                    <p>
                        Проект простого сайта-визитки для небольшой дизайн-студии<br/>
                        Мой первый опыт в верстке лендинга
                    </p>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>jQuery</li>
                    </ul>
                </div>
            </div>
            <div className={style.btn_block}>
                <SimpleButton text="Больше о моих проектах" delay={0} action={e => e}/>
            </div>
        </div>
    );
}

export default Project