import React, {useEffect, useRef, useState} from 'react'
import UpMenu from '../UpMenu/UpMenu';
import TextBlock from '../TextBlock/TextBlock';
import style from './UpMenuContainer.module.scss';

const scrollLimit = 100;

function UpMenuContainer() {
    let items = ['О нас', 'Проекты', 'Услуги', 'Портфолио', 'Отзывы', 'Блог', 'Котакты'];
    let inlineStyle = {
        backgroundImage: 'radial-gradient(circle, transparent, rgba(0, 0, 0, 0.5)), url(/images/demo_components/up_menu_demo/back_container.png)'
    }

    let container = useRef(null);
    let miniModeRef = useRef(false);
    let [miniMode, setMiniMode] = useState(false);

    useEffect(() => {
        function scrollHandler() {
            let scrollPos = container.current.scrollTop;
            if (scrollPos > scrollLimit && !miniModeRef.current) {
                miniModeRef.current = true;
                setMiniMode(true);
            }
            if (scrollPos <= scrollLimit && miniModeRef.current) {
                miniModeRef.current = false;
                setMiniMode(false);
            }
        }

        container.current.addEventListener('scroll', scrollHandler);

        return () => container.current.removeEventListener('scroll', scrollHandler);
    }, []);

    // Функция выполняет прокрутку до текста, соответствующего выбранному пользователем пункту меню
    function menuClickHandler(index) {
        let posCurrent = container.current.scrollTop;
        let posDestination = index * 850;
        if (posCurrent === posDestination) return;

        let delta = (posCurrent < posDestination) ? 95 : -95;
        let scrollInterval = setInterval(() => {
            if (Math.abs((posCurrent + delta) - posDestination) < Math.abs(delta)) {
                container.current.scrollTo(0, posDestination);
                clearInterval(scrollInterval);
                return;
            }
            posCurrent += delta;
            container.current.scrollTo(0, posCurrent);
        }, 12);
    }

    return (
        <div className={style.container} style={inlineStyle} ref={container}>
            <UpMenu items={items} miniMode={miniMode} clickHandler={menuClickHandler}/>
            {items.map((value, index) => <TextBlock key={index} title={value}/>)}
        </div>
    );
}

export default UpMenuContainer;