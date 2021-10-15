import React from "react";
import data from "../../../content/data.json";
import SkillCard from "../../common/SkillCard/SkillCard";
import "./Skills.scss";

function Skills() {
    return (
        <section className="skills">
            <div className="skills__content">
                <h1 className="section_header">Технологии</h1>
                <p className="skills__description">
                    Хотя я имею пока что небольшой опыт коммерческой разработки, но я уже успел познакомиться
                    и использовать в своих проектах целый ряд технологий.
                </p>
                <ul className="skills__skill_list">
                    {data.skills.map(skillData => <SkillCard key={skillData.title} data={skillData}/>)}
                </ul>
            </div>
        </section>
    );
}

export default Skills;