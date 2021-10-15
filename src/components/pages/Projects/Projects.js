import React from "react";
import data from "../../../content/data.json";
import "./Projects.scss";
import ProjectCard from "../../common/ProjectCard/ProjectCard";

function Projects() {
    return (
        <section className="projects">
            <div className="projects__content">
                <h1 className="section_header">Мои проекты</h1>
                <p className="projects__description">
                    Здесь приведена для примера лишь небольшая часть из более чем семидесяти выполненных мной
                    в разное время pet-проектов.
                </p>
                <ul className="projects__project_list">
                    {data.projects.map(projectData => <ProjectCard key={projectData.title} data={projectData}/>)}
                </ul>
            </div>
        </section>
    );
}

export default Projects;