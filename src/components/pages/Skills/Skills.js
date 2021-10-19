import React from "react";
import data from "../../../content/data.json";
import SkillCard from "../../common/SkillCard/SkillCard";
import {useAnimationList} from "../../../utils/hooks";
import {SKILLS_MODE, ANIMATION_TIMEOUT} from "../../../constants/settings";
import "./Skills.scss";

function Skills() {
    const skillList = data.skills;

    const delays = Array(skillList.length).fill(0).map((val, index) => ANIMATION_TIMEOUT + 200 * index);
    const cardsInline = useAnimationList(SKILLS_MODE, "card_rise", delays);

    return (
        <section className="skills">
            <div className="skills__content">
                <h1 className="section_header">Технологии</h1>
                <p className="skills__description">
                    Хотя я имею пока что небольшой опыт коммерческой разработки, но я уже успел познакомиться
                    и использовать в своих проектах целый ряд технологий.
                </p>
                <ul className="skills__skill_list">
                    {skillList.map(
                        (skillData, index) =>
                            <SkillCard
                                key={skillData.title}
                                data={skillData}
                                cardInline={cardsInline[index]}
                            />
                    )}
                </ul>
            </div>
        </section>
    );
}

export default Skills;