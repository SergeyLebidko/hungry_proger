import React, {useState} from 'react';
import {withRouter} from 'react-router-dom';
import CardsField from '../CardsField/CardsField';
import SimpleButton from '../../../SimpleButton/SimpleButton';
import style from './Container.module.scss';
import {shuffle} from "../../../utils";

const backgroundImage = 'url(/images/demo_components/context_menu_demo/back_container.png)';
const backgroundGradient = 'radial-gradient(circle, transparent, rgba(30, 30, 30, 0.6))';

const initialData = [
    [34, 139, 34],
    [0, 191, 255],
    [138, 43, 226],
    [255, 69, 0],
    [30, 144, 255],
    [105, 105, 105],
    [165, 42, 42],
    [128, 0, 128],
    [106, 90, 205],
    [220, 20, 60],
    [0, 255, 0],
    [148, 0, 211],
    [0, 0, 139],
    [47, 79, 79],
    [255, 0, 0],
    [0, 139, 139]
];

const colorScope = 100;

function createColorsList() {
    let result = [];
    let r, g, b;
    for (let index = 0; index < 16; index++) {
        [r, g, b] = initialData[index];
        r += Math.floor(Math.random() * colorScope - (colorScope / 2));
        g += Math.floor(Math.random() * colorScope - (colorScope / 2));
        b += Math.floor(Math.random() * colorScope - (colorScope / 2));
        r = Math.min(Math.max(0, r), 255);
        g = Math.min(Math.max(0, g), 255);
        b = Math.min(Math.max(0, b), 255);
        result.push([r, g, b]);
    }
    return shuffle(result);
}

const Container = withRouter(({history}) => {
    let [colorsData, setColorsData] = useState(initialData);

    let containerStyle = {backgroundImage: `${backgroundGradient}, ${backgroundImage}`};
    return (
        <div className={style.container} style={containerStyle}>
            <div className={style.description}>
                <h3>
                    Перед вами 16 карточек разных цветов.
                    Чтобы изменить цвет карточки - кликните на ней правой кнопкой мышки и вызовите компонент с
                    контекстным меню для редактирования цвета.
                </h3>
                <nav>
                    <SimpleButton text={"На главную"}
                                  pk={"cmd_close_btn"}
                                  delay={0}
                                  action={() => history.push('/')}
                    />
                    <SimpleButton text={"Создать новые цвета"}
                                  pk={"cmd_close_btn"}
                                  delay={0}
                                  action={() => setColorsData(createColorsList)}
                    />
                </nav>
            </div>
            <CardsField colorsData={colorsData}/>
        </div>
    )
})

export {Container};