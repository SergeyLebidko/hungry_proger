import React from 'react';
import style from './AboutMe.module.scss';
import SimpleButton from '../SimpleButton/SimpleButton';
import {headerHeight} from '../App';


function AboutMe() {
    let inlineStyle = {top: `${headerHeight}px`};
    return (
        <div className={style.container} style={inlineStyle}>
            <div className={style.header}>
                <h1>Обо мне</h1>
                <div/>
            </div>
            <div className={style.content}>
                <img src="/images/avatar.jpg"/>
                <div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore
                    </p>
                    <p>
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                        ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <SimpleButton text="Читать полностью" delay={0} action={e => e}/>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;