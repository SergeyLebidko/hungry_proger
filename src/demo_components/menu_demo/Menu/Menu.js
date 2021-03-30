import React, {useEffect, useState, useRef} from 'react';
import Logo from '../Logo/Logo';
import style from './Menu.module.scss';
import HorizontalList from '../HorizontalList/HorizontalList';
import VerticalList from '../VerticalList/VerticalList';

const widthLimit = 800;
const horizontal = 'h';
const vertical = 'v';

function Menu({items, minimizeFlag}) {
    let [menuView, setMenuView] = useState(window.innerWidth <= widthLimit ? vertical : horizontal);

    let oldWidth = useRef(window.innerWidth);

    useEffect(() => {
        function resizeListener() {
            let curWidth = window.innerWidth;
            if (curWidth <= widthLimit && oldWidth.current > widthLimit) setMenuView(vertical);
            if (curWidth > widthLimit && oldWidth.current <= widthLimit) setMenuView(horizontal);
            oldWidth.current = curWidth;
        }

        window.addEventListener('resize', resizeListener);

        return () => window.removeEventListener('resize', resizeListener);
    }, []);

    let inlineStyle = {backgroundImage: 'url(/images/demo_components/menu_demo/back_menu.png)'}
    let menuComponent;
    if (menuView === vertical) menuComponent = <VerticalList items={items} minimizeFlag={minimizeFlag}/>;
    if (menuView === horizontal) menuComponent = <HorizontalList items={items}/>;
    return (
        <div className={`${style.container} ${minimizeFlag ? style.minimize_height : style.standard_height}`}
             style={inlineStyle}>
            <Logo minimizeFlag={minimizeFlag}/>
            {menuComponent}
        </div>
    );
}

export default Menu;