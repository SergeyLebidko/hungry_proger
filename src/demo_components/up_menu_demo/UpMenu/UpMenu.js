import React, {useEffect, useRef} from 'react';
import $ from 'jquery';
import style from './UpMenu.module.scss';

function UpMenu({items, minimalHeightFlag}) {
    let container = useRef(null);
    let menu = useRef(null);
    let menuButton = useRef(null);
    let logo = useRef(null);

    if (minimalHeightFlag) {
        $(logo.current).hide('fast');
        $(container.current).animate({height: '40px'}, () => $(container.current).css({
            backgroundImage: 'none',
            backgroundColor: 'white'
        }));
    } else {
        $(logo.current).show('fast');
        $(container.current).animate({height: '80px'}, () => $(container.current).css({
            backgroundImage: 'url(/images/demo_components/up_menu_demo/back_menu.png)',
            backgroundColor: 'none'
        }));
    }

    function menuButtonClickHandler() {
        if (window.innerWidth > 800) return;
        $(menu.current).slideToggle();
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
            }
            if (oldWindowWidth > 800 && window.innerWidth <= 800) {
                if ($menu.is(':visible')) $menu.css({display: 'none'});
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