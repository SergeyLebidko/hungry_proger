import React from "react";
import PropTypes from 'prop-types';
import TechLabel from "../TechLabel/TechLabel";
import "./ProjectCard.scss";

function ProjectCard({data, number, cardInline = {}}) {
    return (
        <li className="project_card" style={cardInline}>
            <div className="project_card__title_block">
                <span className="project_card__title_number">
                    {number < 10 ? '0' + number : number}
                </span>
                <a className="project_card__title_link" href={data.git} target="_blank" rel="noopener noreferrer">
                    {data.title}
                </a>
            </div>
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
    number: PropTypes.number,
    cardInline: PropTypes.object
}

export default ProjectCard;