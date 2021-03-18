import React from 'react';
import {withRouter} from 'react-router-dom';
import style from './AboutMe.module.scss';
import SimpleButton from '../SimpleButton/SimpleButton';
import {headerHeight} from '../App';


function AboutMe({content, history}) {
    let inlineStyle = {top: `${headerHeight}px`};
    return (
        <div className={style.container} style={inlineStyle}>
            <div>
                <h1 className={style.header}>Обо мне</h1>
                <div className={style.separator}/>
            </div>
            <div className={style.content}>
                <img src="/images/avatar.jpg" alt="avatar"/>
                <div>
                    {content === null ? '' : content.header.map((line, index) => <p key={index}>{line}</p>)}
                    <SimpleButton text="Читать полностью" delay={0} action={() => history.push("/about_me")}/>
                    <SimpleButton text="Моё резюме" delay={0} action={() => window.open('/content/resume.pdf', '_blank')}/>
                </div>
            </div>
        </div>
    );
}

export default withRouter(AboutMe);