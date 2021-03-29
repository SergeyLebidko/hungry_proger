import React, {useEffect, useRef} from 'react';
import $ from 'jquery';
import style from './UpMenu.module.scss';

function UpMenu({items, miniMode}) {
    let container = useRef(null);
    let menu = useRef(null);
    let menuButton = useRef(null);
    let logo = useRef(null);

    let miniModeRef = useRef(null);
    miniModeRef.current = miniMode;

    function menuButtonClickHandler() {
        if (window.innerWidth > 800) return;
        $(menu.current).slideToggle();
    }

    if (!$(menuButton.current).is(':visible')) {
        if (miniMode) {
            $(logo.current).hide('fast');
            $(container.current).animate({height: '40px'});
        } else {
            $(logo.current).show('fast');
            $(container.current).animate({height: '80px'});
        }
    }

    useEffect(() => {
        let $menu = $(menu.current);
        let $menuButton = $(menuButton.current);
        let oldWindowWidth = window.innerWidth;

        // Если стартуем на маленьком экране, то сразу прячем меню и показываем кнопку
        if (oldWindowWidth <= 800) {
            $menuButton.show();
            $menu.hide();
        }

        // Так как при изменении размеров окна меняется не только вид меню, но и поведение, то контролируем это из JS
        function resizeListener() {
            if (oldWindowWidth <= 800 && window.innerWidth > 800) {
                if (!$menu.is(':visible')) $menu.css({display: 'flex'});
                $menuButton.hide();
                if (miniModeRef.current) {
                    $(logo.current).hide('fast');
                    $(container.current).animate({height: '40px'});
                };
            }
            if (oldWindowWidth > 800 && window.innerWidth <= 800) {
                if ($menu.is(':visible')) $menu.css({display: 'none'});
                $(logo.current).show();
                $(container.current).css({height: '80px'});
                $menuButton.show();
            }
            oldWindowWidth = window.innerWidth;
        }

        window.addEventListener('resize', resizeListener);

        return () => window.removeEventListener('resize', resizeListener);
    }, []);

    let containerInlineStyle = {backgroundImage: 'url(/images/demo_components/up_menu_demo/back_menu.png)'}
    return (
        <div className={style.container} style={containerInlineStyle} ref={container}>
            <img src={"/images/demo_components/up_menu_demo/logo.png"} ref={logo}/>
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