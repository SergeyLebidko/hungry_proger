import React from "react";
import data from "../../../content/data.json";
import SkillCard from "../../common/SkillCard/SkillCard";
import "./Skills.scss";

function Skills() {
    return (
        <section className="skills">
            {data.skills.map(skillData => <SkillCard key={skillData.title} data={skillData}/>)}
        </section>
    );
}

export default Skills;