import React, {useEffect, useRef, useState} from 'react';
import style from './Container.module.scss'
import TextBlock from '../TextBlock/TextBlock';
import Menu from '../Menu/Menu';

const scrollLimit = 100;

const backgroundImage = 'url(/images/demo_components/menu_demo/back_container.png';
const backgroundGradient = 'radial-gradient(circle, transparent, rgba(30, 30, 30, 0.6))';

const aboutComponentText = 'Это компонент с меню. ' +
    'Оно может подстраиваться под размер экрана, изменяя свою конфигурацию с горизонтального на вертикальное. ' +
    'Если кликнуть на логотип рядом с меню, вы вернетесь на главную страницу';

export function Container() {
    let items = ['О компоненте', 'О нас', 'Услуги', 'Проекты', 'Отзывы', 'Контакты'];
    let textBlocks = items.map((val, i) => {
        return (i == 0 ? <TextBlock key={i} title={val} text={aboutComponentText}/> : <TextBlock key={i} title={val}/>);
    });

    let [minimizeFlag, setMinimizeFlag] = useState(false);

    let container = useRef(null);
    let oldScrollPos = useRef(0);

    useEffect(() => {
        function scrollListener() {
            let curScrollPos = container.current.scrollTop;
            if (curScrollPos > scrollLimit && oldScrollPos.current <= scrollLimit) setMinimizeFlag(true);
            if (curScrollPos <= scrollLimit && oldScrollPos.current > scrollLimit) setMinimizeFlag(false);
            oldScrollPos.current = curScrollPos;
        }

        container.current.addEventListener('scroll', scrollListener);
    }, []);

    let inlineStyle = {
        backgroundImage: `${backgroundGradient}, ${backgroundImage}`
    }
    return (
        <div className={style.container} style={inlineStyle} ref={container}>
            <Menu minimizeFlag={minimizeFlag}/>
            {textBlocks}
        </div>
    )
}