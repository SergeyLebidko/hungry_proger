import React, {useEffect, useState, useRef} from 'react';
import Logo from '../Logo/Logo';
import style from './Menu.module.scss';
import HorizontalList from '../HorizontalList/HorizontalList';
import VerticalList from '../VerticalList/VerticalList';
import Button from "../Button/Button";

const widthLimit = 800;
const horizontal = 'h';
const vertical = 'v';

function Menu({items, minimizeFlag, itemClickHandler}) {
    let [hasVerticalMenuOpen, setHasVerticalMenuOpen] = useState(false);
    let [menuView, setMenuView] = useState(window.innerWidth <= widthLimit ? vertical : horizontal);

    let oldWidth = useRef(window.innerWidth);

    useEffect(() => {
        function resizeListener() {
            let curWidth = window.innerWidth;
            if (curWidth <= widthLimit && oldWidth.current > widthLimit) {
                setHasVerticalMenuOpen(false);
                setMenuView(vertical);
            }
            if (curWidth > widthLimit && oldWidth.current <= widthLimit) setMenuView(horizontal);
            oldWidth.current = curWidth;
        }

        window.addEventListener('resize', resizeListener);

        return () => window.removeEventListener('resize', resizeListener);
    }, []);

    function menuButtonClickHandler() {
        setHasVerticalMenuOpen(!hasVerticalMenuOpen);
    }

    let inlineStyle = {backgroundImage: 'url(/images/demo_components/menu_demo/back_menu.png)'}

    let menuComponent;
    if (menuView === vertical) {
        menuComponent = <VerticalList items={items} itemClickHandler={i => {
            setHasVerticalMenuOpen(false);
            itemClickHandler(i);
        }} minimizeFlag={minimizeFlag} hasOpen={hasVerticalMenuOpen}/>;
    }
    if (menuView === horizontal) menuComponent = <HorizontalList items={items} itemClickHandler={itemClickHandler}/>;

    let buttonComponent = '';
    if (menuView === vertical) {
        buttonComponent =
            <Button minimizeFlag={minimizeFlag} hasOpen={hasVerticalMenuOpen} clickHandler={menuButtonClickHandler}/>
    }
    return (
        <div className={`${style.container} ${minimizeFlag ? style.minimize_height : style.standard_height}`}
             style={inlineStyle}>
            <Logo minimizeFlag={minimizeFlag}/>
            {menuComponent}
            {buttonComponent}
        </div>
    );
}

export default Menu;