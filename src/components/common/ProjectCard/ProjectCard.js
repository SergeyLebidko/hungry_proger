import React from "react";
import PropTypes from 'prop-types';
import TechLabel from "../TechLabel/TechLabel";
import "./ProjectCard.scss";

function ProjectCard({data, cardInline={}}) {
    return (
        <li className="project_card" style={cardInline}>
            <a className="project_card__title_link" href={data.git} target="_blank" rel="noopener noreferrer">
                {data.title}
            </a>
            <p className="project_card__description">{data.description}</p>
            <ul className="project_card__tech_list">
                {data.tech.map(tech => <TechLabel key={tech} tech={tech}/>)}
            </ul>
        </li>
    );
}

ProjectCard.propTypes = {
    data: PropTypes.shape({
        git: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        tech: PropTypes.arrayOf(PropTypes.string)
    }),
    cardInline: PropTypes.object
}

export default ProjectCard;