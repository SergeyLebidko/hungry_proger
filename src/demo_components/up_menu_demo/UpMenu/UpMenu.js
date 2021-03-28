import React, {useEffect, useRef} from 'react';
import $ from 'jquery';
import style from './UpMenu.module.scss';

function UpMenu({items}) {
    let menu = useRef(null);
    let menuButton = useRef(null);

    function menuButtonClickHandler() {
        if (window.innerWidth > 800) return;
        $(menu.current).slideToggle();
    }

    useEffect(() => {
        let $menu = $(menu.current);
        let $menuButton = $(menuButton.current);
        let oldVal = window.innerWidth;

        // Если стартуем на маленьком экране, то сразу прячем меню и показываем кнопку
        if (oldVal <= 800) {
            $menuButton.show();
            $menu.hide();
        }

        // Обработка изменения размеров окна
        function resizeListener() {
            if (oldVal <= 800 && window.innerWidth > 800) {
                if (!$menu.is(':visible')) $menu.css({display: 'flex'});
                $menuButton.hide();
            }
            if (oldVal > 800 && window.innerWidth <= 800) {
                if ($menu.is(':visible')) $menu.css({display: 'none'});
                $menuButton.show();
            }
            oldVal = window.innerWidth;
        }

        window.addEventListener('resize', resizeListener);

        return () => window.removeEventListener('resize', resizeListener);
    }, []);

    let containerInlineStyle = {backgroundImage: 'url(/images/demo_components/up_menu_demo/back_menu.png)'}
    return (
        <div className={style.container} style={containerInlineStyle}>
            <img src={"/images/demo_components/up_menu_demo/logo.png"}/>
            <div className={style.menu_button} style={{display: 'none'}} onClick={menuButtonClickHandler}
                 ref={menuButton}>
                <div/>
                <div/>
                <div/>
                <div/>
                <div/>
                <div/>
            </div>
            <ul className={style.item_list} ref={menu}>
                {items.map((value, index) => <li key={index}>{value}</li>)}
            </ul>
        </div>
    );
}

export default UpMenu;