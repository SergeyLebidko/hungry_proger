import React from 'react';
import style from './ProjectCard.module.scss';

function ProjectCard({data}) {
    return (
        <div className={style.project_card}>
            <a href={data.git}><img src="./images/git_logo.png" alt="git_logo"/></a>
            <h1>{data.title}</h1>
            <p>
                {data.description}
            </p>
            <ul>
                {data['tech_list'].map((value, index) => <li key={index}>{value}</li>) 
                /* в чем необходимость обращения к полю объекта data через строку, почему не можем использовать data.tech_list? */}
            </ul>
        </div>
    );
}

export default ProjectCard;