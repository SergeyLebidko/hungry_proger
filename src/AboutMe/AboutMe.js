import React from 'react';
import Avatar from '../Avatar/Avatar';
import style from './AboutMe.module.scss';
import SimpleButton from '../SimpleButton/SimpleButton';


function AboutMe() {
    return (
        <div>
            <p className={style.header}>Обо мне</p>
            <div className={style.separator}/>
            <div className={style.content}>
                <Avatar/>
                <div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                        ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <SimpleButton text="Смотреть полностью" delay={0} action={e=>e}/>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;