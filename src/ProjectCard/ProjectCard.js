import React from 'react';
import style from './ProjectCard.module.scss';


function ProjectCard({data}) {
    return (
        <div className={style.project_card}>
            <a href={data.git}><img src="/images/git_logo.png"/></a>
            <h1>{data.title}</h1>
            <p>
                {data.description}
            </p>
            <ul>
                {data['tech_list'].map(value => <li>{value}</li>)}
            </ul>
        </div>
    );
}

export default ProjectCard;