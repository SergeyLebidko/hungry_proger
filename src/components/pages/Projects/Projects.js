import React, {useState} from "react";
import data from "../../../content/data.json";
import ProjectCard from "../../common/ProjectCard/ProjectCard";
import ProjectFilter from "../../common/ProjectFilter/ProjectFilter";
import {extractProjectsTechList} from "../../../utils/utils";
import "./Projects.scss";
import {useAnimationList} from "../../../utils/hooks";
import {DEFAULT_ANIMATION_DELAY, PROJECTS_MODE} from "../../../constants/settings";

function Projects() {
    const [projects] = useState(data.projects);
    const [techFilter, setTechFilter] = useState(extractProjectsTechList(projects));

    const hasShow = project => project.tech.filter(tech => techFilter.includes(tech)).length > 0;

    const delays = Array(projects.length).fill(0).map((value, index) => DEFAULT_ANIMATION_DELAY + 100 * index);
    const cardsInline = useAnimationList(PROJECTS_MODE, "card_rise", delays);

    const createCardList = () => projects.reduce(
        (res, item, index) => hasShow(item) ?
            [...res, <ProjectCard key={item.title} data={item} cardInline={cardsInline[index]}/>]
            :
            res,
        []
    );

    return (
        <section className="projects">
            <div className="projects__content">
                <h1 className="section_header">Мои проекты</h1>
                <p className="projects__description">
                    Здесь приведена для примера лишь небольшая часть из более чем семидесяти выполненных мной
                    в разное время pet-проектов.
                </p>
                <ProjectFilter techList={extractProjectsTechList(projects)} setFilteredValues={setTechFilter}/>
                <ul className="projects__project_list">
                    {createCardList()}
                </ul>
            </div>
        </section>
    );
}

export default Projects;