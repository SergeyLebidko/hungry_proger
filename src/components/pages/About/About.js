import React from "react";
import Contacts from "../../common/Contacts/Contacts";
import {RESUME_HREF} from "../../../constants/settings";
import "./About.scss";

function About() {
    return (
        <section className="about">
            <div className="about__content">
                <h1 className="about__welcome">Здравствуйте! Меня зовут Сергей и я React-разработчик</h1>
                <p>
                    Я всегда интересовался компьютерной тематикой, работал в IT-сфере, занимался обслуживанием
                    парка компьютерной техники и сетевой инфраструктуры предприятий, вёл необходимую документацию.
                    Затем решил начать изучение программирования.
                </p>
                <p>
                    Я учусь самостоятельно, в основном по книгам. У меня уже довольно большая личная библиотека.
                    Свои работы выкладываю на GitHub.
                </p>
                <p>
                    Я предпочитаю создавать функционально законченные решения, никогда не бросаю работу на полпути к
                    цели и всегда стараюсь доводить начатое до конца. Упорство и целеустремленность - это мои
                    главные качества, которые помогают мне в работе и в жизни.
                </p>
                <p>
                    Сейчас я работаю с языком JavaScript, использую библиотеку React.
                    Также знаю язык Python, есть небольшой опыт коммерческой разработки на Django и
                    Django Rest Framework.
                </p>
                <p>
                    У меня уже более семидесяти реализованных собственных pet-проектов различной степени сложности,
                    которые я создавал по мере своего обучения и приобретения опыта.
                </p>
                <div className="about__links">
                    <button className="button">
                        <a href={RESUME_HREF} target="_blank" rel="noopener noreferrer">Мое резюме</a>
                    </button>
                    <Contacts/>
                </div>
            </div>
        </section>
    );
}

export default About;