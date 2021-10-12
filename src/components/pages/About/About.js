import React from "react";
import {FaGithub, MdEmail, FaTelegram} from "react-icons/all";
import {GITHUB_HREF, MAIL_HREF, TELEGRAM_HREF} from "../../../constants/settings";
import "./About.scss";

function About() {
    return (
        <div className="about">
            <div className="about__content">
                <div className="about__text">
                    <h1 className="about__text_title">Здравствуйте! Меня зовут Сергей и я React-разработчик</h1>
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
                    <button className="button about__resume_button">Мое резюме</button>
                </div>
                <div className="about__contacts">
                    <h1 className="about__contacts_title">Контакты</h1>
                    <ul>
                        <li>
                            <a href={GITHUB_HREF}>
                                <FaGithub className="about__github_icon"/>
                            </a>
                        </li>
                        <li>
                            <a href={MAIL_HREF}>
                                <MdEmail className="about__mail_icon"/>
                            </a>
                        </li>
                        <li>
                            <a href={TELEGRAM_HREF}>
                                <FaTelegram className="about__telegram_icon"/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default About;