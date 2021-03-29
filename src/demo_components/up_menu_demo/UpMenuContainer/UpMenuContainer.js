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

    let menuMinimalHeightFlag = useRef(false);
    let container = useRef(null);
    let [menuMinimalState, setMenuMinimalState] = useState(false);

    useEffect(() => {
        function scrollHandler() {
            let scrollPos = container.current.scrollTop;
            if (scrollPos > scrollLimit && !menuMinimalHeightFlag.current) {
                menuMinimalHeightFlag.current = true;
                setMenuMinimalState(true);
            }
            if (scrollPos <= scrollLimit && menuMinimalHeightFlag.current) {
                menuMinimalHeightFlag.current = false;
                setMenuMinimalState(false);
            }
        }

        container.current.addEventListener('scroll', scrollHandler);

        return () => container.current.removeEventListener('scroll', scrollHandler);
    }, []);

    return (
        <div className={style.container} style={inlineStyle} ref={container}>
            <UpMenu items={items} minimalHeightFlag={menuMinimalState}/>
            {items.map((value, index) => <TextBlock key={index} title={value}/>)}
        </div>
    );
}

export default UpMenuContainer;