import React, {useEffect, useRef, useState} from 'react';
import style from './Container.module.scss'
import TextBlock from '../TextBlock/TextBlock';
import Menu from '../Menu/Menu';

const scrollLimit = 100;

const backgroundImage = 'url(/images/demo_components/main_menu_demo/back_container.png';
const backgroundGradient = 'radial-gradient(circle, transparent, rgba(30, 30, 30, 0.6))';

const aboutComponentText = 'Это компонент с меню. ' +
    'Оно может подстраиваться под размер экрана, изменяя свою конфигурацию с горизонтального на вертикальное. ' +
    'Если кликнуть на логотип рядом с меню, вы вернетесь на главную страницу';

export function Container() {
    let items = ['О компоненте', 'О нас', 'Услуги', 'Проекты', 'Отзывы', 'Контакты'];
    let textBlocks = items.map((val, i) => {
        return (i === 0 ? <TextBlock key={i} title={val} text={aboutComponentText}/> :
            <TextBlock key={i} title={val}/>);
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

        // Перехватываем скроллинг для управления высотой полосы меню
        container.current.addEventListener('scroll', scrollListener);
    }, []);

    // При клике на пункт меню прокручиваем компонент до соответствующего пункту меню текстового блока
    function itemClickHandler(index) {
        let desPos = index * 1100;
        let curPos = container.current.scrollTop;
        if (desPos === curPos) return;

        let delta = desPos > curPos ? 100 : -100;
        let timer = setInterval(() => {
            if (Math.abs(curPos - desPos) < Math.abs(delta)) {
                clearInterval(timer);
                curPos = desPos;
            } else {
                curPos += delta;
            }
            container.current.scrollTo(0, curPos);
        }, 10);
    }

    let inlineStyle = {
        backgroundImage: `${backgroundGradient}, ${backgroundImage}`
    }
    return (
        <div className={style.container} style={inlineStyle} ref={container}>
            <Menu items={items} itemClickHandler={itemClickHandler} minimizeFlag={minimizeFlag}/>
            {textBlocks}
        </div>
    )
}