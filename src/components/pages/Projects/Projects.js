import React, {useState} from "react";
import data from "../../../content/data.json";
import ProjectCard from "../../common/ProjectCard/ProjectCard";
import ProjectsFilter from "../../common/ProjectsFilter/ProjectsFilter";
import {extractProjectsTechList} from "../../../utils/utils";
import "./Projects.scss";

function Projects() {
    const [projects] = useState(data.projects);
    const [techFilter, setTechFilter] = useState(extractProjectsTechList(projects));

    const getProjectHasShow = project => project.tech.filter(tech => techFilter.includes(tech)).length > 0;

    return (
        <section className="projects">
            <div className="projects__content">
                <h1 className="section_header">Мои проекты</h1>
                <p className="projects__description">
                    Здесь приведена для примера лишь небольшая часть из более чем семидесяти выполненных мной
                    в разное время pet-проектов.
                </p>
                <ProjectsFilter techList={extractProjectsTechList(projects)} setFilter={setTechFilter}/>
                <ul className="projects__project_list">
                    {projects.filter(projectData => getProjectHasShow(projectData)).map(
                        projectData =>
                            <ProjectCard
                                key={projectData.title}
                                data={projectData}
                            />
                    )}
                </ul>
            </div>
        </section>
    );
}

export default Projects;