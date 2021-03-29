import React, {useEffect, useRef} from 'react';
import $ from 'jquery';
import style from './UpMenu.module.scss';

const WINDOW_WIDTH_LIMIT = 800;
const HAS_MINI_MODE_HEIGHT = '40px';
const HAS_NOT_MINI_MODE_HEIGHT = '80px';

function UpMenu({items, miniMode, clickHandler}) {
    let container = useRef(null);
    let menu = useRef(null);
    let menuButton = useRef(null);
    let logo = useRef(null);

    let miniModeRef = useRef(null);
    miniModeRef.current = miniMode;

    if (!$(menuButton.current).is(':visible')) {
        if (miniMode) {
            $(logo.current).hide('fast');
            $(container.current).animate({height: HAS_MINI_MODE_HEIGHT});
        } else {
            $(logo.current).show('fast');
            $(container.current).animate({height: HAS_NOT_MINI_MODE_HEIGHT});
        }
    }

    // Обработчик клика по кнопке открытия/закрытия меню (она используется при ширине окна менее 800px)
    function menuButtonClickHandler() {
        if (window.innerWidth > WINDOW_WIDTH_LIMIT) return;
        $(menu.current).slideToggle();
    }

    // Обработчик клика по пункту меню (используется при ширине окна менее 800px)
    function menuItemClickHandler(index) {
        if ($(menuButton.current).is(':visible')) $(menuButton.current).trigger('click');
        clickHandler(index);
    }

    useEffect(() => {
        let $container = $(container.current);
        let $menu = $(menu.current);
        let $menuButton = $(menuButton.current);
        let oldWindowWidth = window.innerWidth;

        // Если стартуем на маленьком экране, то сразу прячем меню и показываем кнопку его открытия/закрытия
        if (oldWindowWidth <= WINDOW_WIDTH_LIMIT) {
            $menuButton.show();
            $menu.hide();
        }

        // Так как при изменении размеров окна меняется не только вид меню, но и поведение, то контролируем это из JS
        function resizeListener() {
            if (oldWindowWidth <= WINDOW_WIDTH_LIMIT && window.innerWidth > WINDOW_WIDTH_LIMIT) {
                if (!$menu.is(':visible')) $menu.css({display: 'flex'});
                $menuButton.hide();
                if (miniModeRef.current) {
                    $(logo.current).hide('fast');
                    $(container.current).animate({height: HAS_MINI_MODE_HEIGHT});
                }
            }
            if (oldWindowWidth > WINDOW_WIDTH_LIMIT && window.innerWidth <= WINDOW_WIDTH_LIMIT) {
                if ($menu.is(':visible')) $menu.css({display: 'none'});
                $(logo.current).show();
                $(container.current).css({height: HAS_NOT_MINI_MODE_HEIGHT});
                $menuButton.show();
            }
            $menu.css({maxHeight: `${window.innerHeight - $container.outerHeight()}px`})
            oldWindowWidth = window.innerWidth;
        }

        window.addEventListener('resize', resizeListener);

        return () => window.removeEventListener('resize', resizeListener);
    }, []);

    let containerInlineStyle = {backgroundImage: 'url(/images/demo_components/up_menu_demo/back_menu.png)'}
    return (
        <div className={style.container} style={containerInlineStyle} ref={container}>
            <img src={"/images/demo_components/up_menu_demo/logo.png"} ref={logo}/>
            <div className={style.menu_button} style={{display: 'none'}}
                 onClick={menuButtonClickHandler}
                 ref={menuButton}>
                <div/>
                <div/>
                <div/>
                <div/>
                <div/>
                <div/>
            </div>
            <ul className={style.item_list} ref={menu}>
                {items.map((value, index) => <li key={index} onClick={() => menuItemClickHandler(index)}>{value}</li>)}
            </ul>
        </div>
    );
}

export default UpMenu;