import React from "react";
import {SiJavascript, SiCss3, SiPython} from "react-icons/all";
import PropTypes from 'prop-types';
import "./SkillCard.scss";

function SkillCard({data}) {
    const ICON_SELECTOR = {
        'JavaScript': <SiJavascript/>,
        'Python': <SiPython/>,
        'HTML/CSS': <SiCss3/>
    }

    return (
        <div className="skill_card">
            {ICON_SELECTOR[data.title]}
            {data.title}
            <ul>
                {data.tech.map(val => <li key={val}>{val}</li>)}
            </ul>
        </div>
    );
}

SkillCard.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string,
        tech: PropTypes.arrayOf(PropTypes.string)
    })
}

export default SkillCard;