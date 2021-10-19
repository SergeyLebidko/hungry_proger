import React from "react";
import {ReactComponent as JS} from "../../../content/icons/js.svg";
import {ReactComponent as Python} from "../../../content/icons/python.svg";
import {ReactComponent as CSS3} from "../../../content/icons/css3.svg";
import PropTypes from 'prop-types';
import "./SkillCard.scss";

function SkillCard({data, cardInline={}}) {
    const ICON_SELECTOR = {
        'JavaScript': <JS/>,
        'Python': <Python/>,
        'HTML/CSS': <CSS3/>
    }

    return (
        <li className="skill_card" style={cardInline}>
            <div className="skill_card__card_header">
                {ICON_SELECTOR[data.title]}
                <span>{data.title}</span>
            </div>
            <ul className="skill_card__tech_list">
                {data.tech.map(val => <li key={val}>{val}</li>)}
            </ul>
        </li>
    );
}

SkillCard.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string,
        tech: PropTypes.arrayOf(PropTypes.string)
    }),
    cardInline: PropTypes.object
}

export default SkillCard;