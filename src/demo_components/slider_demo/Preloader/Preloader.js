import React from 'react';
import style from './Preloader.module.scss';

export const lightTheme = 'l';
export const darkTheme = 'd';

export const preloaderHideDuration = 1000;

function Preloader({theme, hasDeactivateProcess}) {
    let preloaderStyle = {};
    let preloaderClass = style.container;

    if (theme === darkTheme) {
        preloaderClass += (' ' + style.dark);
        preloaderStyle = {
            backgroundImage: 'radial-gradient(rgba(30, 144, 255, 0.3), rgba(0, 0, 205, 0.3)), url(./images/demo_components/slider_demo/dark_preloader.png)'
        }
    }
    if (theme === lightTheme) {
        preloaderClass += (' ' + style.light)
        preloaderStyle = {
            backgroundImage: 'radial-gradient(transparent, rgba(0, 191, 255, 0.3)), url(./images/demo_components/slider_demo/light_preloader.png)'
        }
    }

    if (hasDeactivateProcess) preloaderClass += (' ' + style.hide);

    return <div className={preloaderClass} style={preloaderStyle}/>;
}

export default Preloader;